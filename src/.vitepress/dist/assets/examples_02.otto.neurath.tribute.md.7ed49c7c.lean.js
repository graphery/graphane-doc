import{_ as n,o as l,c as o,V as a,C as s}from"./chunks/framework.98960eec.js";const E=JSON.parse('{"title":"Otto Neurath Tribute","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/02.otto.neurath.tribute.md","filePath":"examples/02.otto.neurath.tribute.md"}'),p={name:"examples/02.otto.neurath.tribute.md"},t=a("",7),e=s("g-svg",{id:"all"},[s("svg",{viewBox:"0 0 400 270"},[s("defs",{"g-for":"y of 5"},[s("defs",{"g-for":"x of 20"},[s("path",{"g-bind:transform":"translate(x * 20, y * 55)",d:`M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z`})])])])],-1),r=a("",2),c=s("g-svg",{data:"value:50",id:"show"},[s("svg",{viewBox:"0 0 400 270"},[s("defs",{"g-for":"y of 5"},[s("defs",{"g-for":"x of 20"},[s("path",{"g-if":"((y * 20) + x < value)","g-bind:transform":"translate(x * 20, y * 55)",d:`M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z`})])])])],-1),D=s("input",{type:"range",min:"0",max:"100",value:"50",oninput:"document.querySelector('g-svg#show').data.value = this.value"},null,-1),F=a("",2),y=s("g-svg",{data:"value:50",id:"color"},[s("svg",{viewBox:"0 0 400 270"},[s("defs",{"g-for":"y of 5"},[s("defs",{"g-for":"x of 20"},[s("path",{"g-bind:style":"{fill: ((y * 20) + x < value) ? 'black' : 'grey'}","g-bind:transform":"translate(x * 20, y * 55)",d:`M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
                 C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z`})])])])],-1),C=s("input",{type:"range",min:"0",max:"100",value:"50",oninput:"document.querySelector('g-svg#color').data.value = this.value"},null,-1),i=a("",1),u=[t,e,r,c,D,F,y,C,i];function g(A,d,h,_,f,L){return l(),o("div",null,u)}const v=n(p,[["render",g]]);export{E as __pageData,v as default};