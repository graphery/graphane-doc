import{_ as a,o as l,c as p,Q as n,k as s}from"./chunks/framework.05b02974.js";const q=JSON.parse('{"title":"Embebed data","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/methods/embebed.md","filePath":"guide/methods/embebed.md"}'),o={name:"guide/methods/embebed.md"},e=n("",3),t=s("g-template",null,[s("svg",{viewBox:"0 0 100 100",id:"svg"},[s("g",{"g-on:click":"change",style:{cursor:"pointer"}},[s("circle",{id:"run",cx:"50",cy:"50",r:"50",fill:"red"}),s("text",{x:"36",y:"53"},"click")])]),s("g-script",{type:"methods"}," const circle = $.svg.querySelector('circle'); const text = $.svg.querySelector('text'); function change() { if (text.content() === 'click') { circle.fill('green'); text.content('ok').x(44); } else { circle.fill('red'); text.content('click').x(36); } } ")],-1),c=n("",4),r=[e,t,c];function E(y,i,h,g,d,F){return l(),p("div",null,r)}const m=a(o,[["render",E]]);export{q as __pageData,m as default};