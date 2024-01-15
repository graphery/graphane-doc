import{_ as t,c as h,o as n,U as a,m as s,a as i}from"./chunks/framework.on6qGByC.js";const S=JSON.parse('{"title":"Template","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/starter/template.md","filePath":"guide/starter/template.md"}'),l={name:"guide/starter/template.md"},k=a("",3),p=s("g-composer",null,[s("svg",{viewBox:"0 0 100 100",width:"100",height:"100"},[s("defs",{"g-for":"x of 3"},[s("circle",{cx:"50",cy:"50","g-bind:r":"(x + 1) * (48 / 3)",fill:"none",stroke:"black","stroke-width":"1"})])])],-1),e=a("",8),E=s("g-composer",{id:"circle"},[s("svg",{viewBox:"0 0 100 100",width:"100"},[s("circle",{"g-bind:r":"size",cx:"50",cy:"50",fill:"red"})]),s("g-script",{type:"data"}," {size: 25} ")],-1),d=s("p",null,[s("label",null,[i("Change the size: "),s("input",{type:"range",max:"50",value:"25",oninput:"document.querySelector('#circle').data.size = this.value"})])],-1),g=a("",7),r=s("g-composer",{id:"circles"},[s("svg",{viewBox:"0 0 100 100",width:"100"},[s("defs",{"g-for":"n of circles"},[s("circle",{r:"4","g-bind:cx":"((n % 10) * 10) + 5","g-bind:cy":"(Math.floor(n / 10) * 10) + 5",fill:"red"})])]),s("g-script",{type:"data"}," {circles: 40} ")],-1),y=s("p",null,[s("label",null,[i("Change the number of circles: "),s("input",{type:"range",max:"100",value:"40",oninput:"document.querySelector('#circles').data.circles = Number(this.value)"})])],-1),o=a("",7),c=s("g-composer",{id:"odd_even"},[s("svg",{viewBox:"0 0 100 100",width:"100"},[s("defs",{"g-for":"n of 100"},[s("circle",{"g-if":"((n + 1) % 2 === 0 && even) || ((n + 1) % 2 !== 0 && odd)",r:"4","g-bind:cx":"((n % 10) * 10) + 5","g-bind:cy":"(Math.floor(n / 10) * 10) + 5",fill:"red"})])]),s("g-script",{type:"data"}," { odd: true, even: true } ")],-1),F=s("p",null,[s("label",null,[s("input",{type:"checkbox",checked:"",oninput:"document.querySelector('#odd_even').data.odd = this.checked"}),i(" show odd ")]),s("label",null,[s("input",{type:"checkbox",checked:"",oninput:"document.querySelector('#odd_even').data.even = this.checked"}),i(" show even ")])],-1),u=a("",6),C=s("g-composer",{id:"content"},[s("svg",{viewBox:"0 0 100 100",width:"100"},[s("rect",{x:"0",y:"0",width:"100",height:"100",fill:"green"}),s("text",{style:{"font-size":"20px",fill:"white"},"g-content":"title",x:"5",y:"40"}),s("text",{style:{"font-size":"12px",fill:"white"},"g-content":"subtitle",x:"5",y:"65"})]),s("g-script",{type:"data"}," { title: 'hello', subtitle: 'world' } ")],-1),B=s("p",null,[s("label",null,[i("title: "),s("input",{type:"text",value:"hello",oninput:"document.querySelector('#content').data.title = this.value"})])],-1),q=s("p",null,[s("label",null,[i("subtitle: "),s("input",{type:"text",value:"world",oninput:"document.querySelector('#content').data.subtitle = this.value"})])],-1),m=s("blockquote",null,[s("p",null,[i("See more about "),s("a",{href:"./../in-depth/templating/content.html"},[s("code",null,"g-content")]),i(".")])],-1),b=[k,p,e,E,d,g,r,y,o,c,F,u,C,B,q,m];function v(_,f,A,D,x,w){return n(),h("div",null,b)}const I=t(l,[["render",v]]);export{S as __pageData,I as default};
