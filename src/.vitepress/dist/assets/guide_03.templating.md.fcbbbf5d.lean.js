import{_ as a,o as n,c as e,V as l,C as s,a as o}from"./chunks/framework.98960eec.js";const h=JSON.parse('{"title":"Templating","description":"","frontmatter":{},"headers":[],"relativePath":"guide/03.templating.md","filePath":"guide/03.templating.md"}'),p={name:"guide/03.templating.md"},t=l("",6),r=s("g-template",{data:"value:50"},[s("svg",{viewBox:"0 0 400 270"},[s("defs",{"g-for":"y of 5"},[s("defs",{"g-for":"x of 20"},[s("path",{"g-if":"((y * 20) + x < value)","g-bind:transform":"translate(x * 20, y * 55)",d:`M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z`})])])])],-1),c=s("p",null,[s("label",null,[o("Change the men displayed: "),s("input",{type:"range",id:"value",value:"50",oninput:"document.querySelector('g-template').data.value=this.value"})])],-1),D=[t,r,c];function i(y,F,d,g,u,C){return n(),e("div",null,D)}const A=a(p,[["render",i]]);export{h as __pageData,A as default};
