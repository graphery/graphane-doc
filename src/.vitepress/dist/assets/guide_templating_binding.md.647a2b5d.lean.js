import{_ as l,o,c as p,a as n,Q as a,k as s}from"./chunks/framework.875adba1.js";const b=JSON.parse('{"title":"Binding","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/templating/binding.md","filePath":"guide/templating/binding.md"}'),t={name:"guide/templating/binding.md"},e=a("",9),c=s("g-template",{data:"size: 25;",id:"circle"},[s("svg",{viewBox:"0 0 100 100"},[s("circle",{"g-bind:r":"size",cx:"50",cy:"50",fill:"red"})])],-1),r=s("p",null,[s("p",null,[s("label",null,[n("Change the size: "),s("input",{type:"range",max:"50",value:"25",oninput:"document.querySelector('#circle').data.size = this.value"})])])],-1),E=a("",3),y=s("g-template",null,[s("svg",{viewBox:"0 0 100 100"},[s("defs",{"g-for":"value of data"},[s("circle",{"g-bind:cx":"value.x","g-bind:cy":"value.y","g-bind:r":"value.radix","g-bind:style":"{fill: value.color}"})])]),s("g-script",{type:"data",src:"../../data/style.csv"})],-1),i=a("",3),u=s("g-template",{"svg-src":"/circles.class.svg","data-src":"/data/class.csv"},null,-1);function F(d,g,q,h,C,B){return o(),p("div",null,[e,c,r,E,y,i,u,n("`")])}const m=l(t,[["render",F]]);export{b as __pageData,m as default};
