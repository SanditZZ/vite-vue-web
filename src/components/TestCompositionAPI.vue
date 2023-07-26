<script lang="ts">
export default {
  name: 'TestCompositionAPI',
  setup() {
    const name = ref(null)
    const newName = ref(null)
    const state = reactive({ data: [] })

    watch(
      () => newName.value, // The source to watch
      (newVal, oldVal) => { // The callback function to execute when the source changes
        if (newVal) {
          fetch(`https://api.github.com/users/${newVal}/repos`)
            .then(response => response.json())
            .then((data) => {
              state.data = data // Assign the fetched data to the state
            })
            .catch((error) => {
              console.error('Error fetching data:', error)
            })
        }
      },
    )

    return {
      name,
      newName,
      ...toRefs(state), // Convert the state object to refs using toRefs
    }
  },
}
</script>

<template>
  <div>
    <h1>Enter GitHub Username</h1>
    <input v-model="name" type="text" placeholder="GitHub Username">
    <button @click="newName = name">
      Press Me!
    </button>
  </div>
  <ul>
    <li v-for="lib in data" :key="lib.name">
      {{ lib.name }}
    </li>
  </ul>
</template>
