import{_ as a,c as t,o as n,V as i,m as s}from"./chunks/framework.FQ0BK5n9.js";const q=JSON.parse('{"title":"$$.dynamic() with g-bind","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/in-depth/animation/g-bind.md","filePath":"guide/in-depth/animation/g-bind.md"}'),h={name:"guide/in-depth/animation/g-bind.md"},l=i("",4),e=s("g-composer",{data:"x: 50, y: 50, radius: 50",id:"dynamic1",style:{width:"200px"}},[s("svg",{viewBox:"0 0 100 100"},[s("circle",{"g-bind:r":"$$.dynamic([0, radius], 4000)","g-bind:cx":"$$.dynamic([0, x], 4000)","g-bind:cy":"$$.dynamic([0, y], 4000)",fill:"red"})])],-1),p=s("p",null,[s("button",{onclick:"document.querySelector('#dynamic1').update()"}," click to run the animation ")],-1),k=i("",9),d=s("g-composer",{data:"radius: 50",id:"dynamic2",style:{width:"200px"}},[s("svg",{viewBox:"0 0 100 100"},[s("circle",{"g-bind:r":`$$.dynamic(
      [radius * 0.1, 
       radius * 0.5, 
       radius * 0.9, 
       radius * 0.7, 
       radius],2000)`,cx:"50",cy:"50",fill:"red"})])],-1),E=s("p",null,[s("button",{onclick:"document.querySelector('#dynamic2').update()"}," click to run the animation ")],-1),r=i("",2),g=s("g-composer",{data:"radius: 50",id:"dynamic3",style:{width:"200px"}},[s("svg",{viewBox:"0 0 100 100"},[s("circle",{"g-bind:r":`$$.dynamic([{value: 0,            offset: 0},
                                 {value: radius,       offset: 0.8},
                                 {value: radius * 0.9, offset: 0.9},
                                 {value: radius,       offset: 1}],
                                2000)`,cx:"50",cy:"50",fill:"red"})])],-1),o=s("p",null,[s("button",{onclick:"document.querySelector('#dynamic3').update()"}," click to run the animation ")],-1),c=[l,e,p,k,d,E,r,g,o];function y(u,F,m,_,v,B){return n(),t("div",null,c)}const b=a(h,[["render",y]]);export{q as __pageData,b as default};
