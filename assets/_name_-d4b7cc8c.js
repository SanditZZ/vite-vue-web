import{p as _,q as p,s as v,d as N,u as k,a as x,v as h,r as b,o as i,c as l,e,t as r,f as n,F as y,j as w,b as C,w as S,x as V,i as g}from"./app-d03b4111.js";const B=_("user",()=>{const t=p(""),a=p(new Set),m=v(()=>Array.from(a.value)),o=v(()=>m.value.filter(u=>u!==t.value));function s(u){t.value&&a.value.add(t.value),t.value=u}return{setNewName:s,otherNames:o,savedName:t}}),L=e("div",{"text-4xl":""},[e("div",{"i-carbon-pedestrian":"","inline-block":""})],-1),R={"text-sm":"","opacity-75":""},E={key:0,"mt-4":"","text-sm":""},F={"opacity-75":""},j=N({__name:"[name]",props:{name:null},setup(t){const a=t,m=k(),o=B(),{t:s}=x();return h(()=>{o.setNewName(a.name)}),(u,d)=>{const f=b("RouterLink");return i(),l("div",null,[L,e("p",null,r(n(s)("intro.hi",{name:a.name})),1),e("p",R,[e("em",null,r(n(s)("intro.dynamic-route")),1)]),n(o).otherNames.length?(i(),l("p",E,[e("span",F,r(n(s)("intro.aka"))+":",1),e("ul",null,[(i(!0),l(y,null,w(n(o).otherNames,c=>(i(),l("li",{key:c},[C(f,{to:`/hi/${c}`,replace:""},{default:S(()=>[g(r(c),1)]),_:2},1032,["to"])]))),128))])])):V("",!0),e("div",null,[e("button",{m:"3 t6","text-sm":"",btn:"",onClick:d[0]||(d[0]=c=>n(m).back())},r(n(s)("button.back")),1)])])}}});export{j as default};
