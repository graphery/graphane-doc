import{_ as o,o as l,c as e,Q as n,k as s,a}from"./chunks/framework.11e53375.js";const L=JSON.parse('{"title":"Shapes - plugin","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"plugins/catalog/shapes.md","filePath":"plugins/catalog/shapes.md"}'),t={name:"plugins/catalog/shapes.md"},p=n("",9),r=s("g-composer",{data:"sided: 5, rotation: 0",id:"regularPolygon"},[s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.4/plugins/shapes.js"}),s("svg",{viewBox:"0 0 100 100"},[s("path",{stroke:"black","stroke-width":"1",fill:"none","g-bind:d":"$$.regularPolygon(50, 50, 50, sided, rotation)"})])],-1),c=s("p",null,[s("label",null,[a("sided: "),s("input",{id:"rpSidedRange",type:"range",min:"3",max:"25",value:"4",oninput:"document.querySelector('#regularPolygon').data.sided = document.querySelector('#rpSidedNumber').value = Number(this.value)"}),s("input",{id:"rpSidedNumber",type:"number",min:"3",max:"25",value:"4",oninput:"document.querySelector('#regularPolygon').data.sided = document.querySelector('#rpSidedRange').value = Number(this.value)"})])],-1),y=s("p",null,[s("label",null,[a("start: "),s("input",{id:"rpStartRange",type:"range",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#regularPolygon').data.rotation = document.querySelector('#rpStartNumber').value = Number(this.value)"}),s("input",{id:"rpStartNumber",type:"number",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#regularPolygon').data.rotation = document.querySelector('#rpStartRange').value = Number(this.value)"})])],-1),E=n("",3),i=s("g-composer",{data:"grades: 90, start: 0",id:"arc"},[s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.4/plugins/shapes.js"}),s("svg",{viewBox:"0 0 100 100"},[s("path",{stroke:"black","stroke-width":"1",fill:"none","g-bind:d":"$$.arc(50, 50, 50, grades, start)"})])],-1),u=s("p",null,[s("label",null,[a("grades: "),s("input",{id:"arcGradesRange",type:"range",min:"-360",max:"360",value:"90",oninput:"document.querySelector('#arc').data.grades = document.querySelector('#arcGradesNumber').value = Number(this.value)"}),s("input",{id:"arcGradesNumber",type:"number",min:"-360",max:"360",value:"90",oninput:"document.querySelector('#arc').data.grades = document.querySelector('#arcGradesRange').value = Number(this.value)"})])],-1),d=s("p",null,[s("label",null,[a("start: "),s("input",{id:"arcStartRange",type:"range",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#arc').data.start = document.querySelector('#arcStartNumber').value = Number(this.value)"}),s("input",{id:"arcStartNumber",type:"number",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#arc').data.start = document.querySelector('#arcStartRange').value = Number(this.value)"})])],-1),g=n("",3),h=s("g-composer",{data:"grades: 90, start: 0",id:"barArc"},[s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.4/plugins/shapes.js"}),s("svg",{viewBox:"0 0 100 100"},[s("path",{stroke:"black","stroke-width":"1",fill:"none","g-bind:d":"$$.barArc(50, 50, 40, 10, grades, start)"})])],-1),m=s("p",null,[s("label",null,[a("grades: "),s("input",{id:"barGradesRange",type:"range",min:"-360",max:"360",value:"90",oninput:"document.querySelector('#barArc').data.grades = document.querySelector('#barGradesNumber').value = Number(this.value)"}),s("input",{id:"barGradesNumber",type:"number",min:"-360",max:"360",value:"90",oninput:"document.querySelector('#barArc').data.grades = document.querySelector('#barGradesRange').value = Number(this.value)"})])],-1),q=s("p",null,[s("label",null,[a("start: "),s("input",{id:"barStartRange",type:"range",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#barArc').data.start = document.querySelector('#barStartNumber').value = Number(this.value)"}),s("input",{id:"barStartNumber",type:"number",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#barArc').data.start = document.querySelector('#barStartRange').value = Number(this.value)"})])],-1),F=n("",3),b=s("g-composer",{data:"grades: 90, start: 0",id:"circleSlice"},[s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.4/plugins/shapes.js"}),s("svg",{viewBox:"0 0 100 100"},[s("path",{stroke:"black","stroke-width":"1",fill:"none","g-bind:d":"$$.circleSlice(50, 50, 40, grades, start)"})])],-1),_=s("p",null,[s("label",null,[a("grades: "),s("input",{id:"sliceGradesRange",type:"range",min:"-360",max:"360",value:"90",oninput:"document.querySelector('#circleSlice').data.grades = document.querySelector('#sliceGradesNumber').value = Number(this.value)"}),s("input",{id:"sliceGradesNumber",type:"number",min:"-360",max:"360",value:"90",oninput:"document.querySelector('#circleSlice').data.grades = document.querySelector('#sliceGradesRange').value = Number(this.value)"})])],-1),v=s("p",null,[s("label",null,[a("start: "),s("input",{id:"sliceStartRange",type:"range",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#circleSlice').data.start = document.querySelector('#sliceStartNumber').value = Number(this.value)"}),s("input",{id:"sliceStartNumber",type:"number",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#circleSlice').data.start = document.querySelector('#sliceStartRange').value = Number(this.value)"})])],-1),C=n("",2),S=s("g-composer",{data:"r: 25, start: 0",id:"circle"},[s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.4/plugins/shapes.js"}),s("svg",{viewBox:"0 0 100 100"},[s("path",{stroke:"black","stroke-width":"1",fill:"none","g-bind:d":"$$.circle(50, 50, r)"})])],-1),B=s("p",null,[s("label",null,[a("radius: "),s("input",{id:"circleRange",type:"range",min:"0",max:"50",value:"25",oninput:"document.querySelector('#circle').data.r = document.querySelector('#circleNumber').value = Number(this.value)"}),s("input",{id:"circleNumber",type:"number",min:"0",max:"50",value:"25",oninput:"document.querySelector('#circle').data.r = document.querySelector('#circleRange').value = Number(this.value)"})])],-1),x=n("",3),k=s("g-composer",{data:"r1: 25, r2:15, sides: 5, start: 0",id:"start"},[s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.4/plugins/shapes.js"}),s("svg",{viewBox:"0 0 100 100"},[s("path",{stroke:"black","stroke-width":"1",fill:"none","g-bind:d":"$$.star(50, 50, r1, r2, sides, start)"})])],-1),A=s("p",null,[s("label",null,[a("r1: "),s("input",{id:"star_r1_Range",type:"range",min:"0",max:"50",value:"25",oninput:"document.querySelector('#start').data.r1 = document.querySelector('#star_r1_Number').value = Number(this.value)"}),s("input",{id:"star_r1_Number",type:"number",min:"0",max:"50",value:"25",oninput:"document.querySelector('g-composer#start').data.r1 = document.querySelector('#star_r1_Range').value = Number(this.value)"})])],-1),N=s("p",null,[s("label",null,[a("r2: "),s("input",{id:"star_r2_Range",type:"range",min:"0",max:"50",value:"15",oninput:"document.querySelector('#start').data.r2 = document.querySelector('#star_r2_Number').value = Number(this.value)"}),s("input",{id:"star_r2_Number",type:"number",min:"0",max:"50",value:"15",oninput:"document.querySelector('g-composer#start').data.r2 = document.querySelector('#star_r2_Range').value = Number(this.value)"})])],-1),$=s("p",null,[s("label",null,[a("sides: "),s("input",{id:"star_sides_Range",type:"range",min:"0",max:"50",value:"5",oninput:"document.querySelector('#start').data.sides = document.querySelector('#star_sides_Number').value = Number(this.value)"}),s("input",{id:"star_sides_Number",type:"number",min:"0",max:"50",value:"5",oninput:"document.querySelector('g-composer#start').data.sides = document.querySelector('#star_sides_Range').value = Number(this.value)"})])],-1),f=s("p",null,[s("label",null,[a("start: "),s("input",{id:"star_start_Range",type:"range",min:"-360",max:"360",value:"0",oninput:"document.querySelector('#start').data.start = document.querySelector('#star_start_Number').value = Number(this.value)"}),s("input",{id:"star_start_Number",type:"number",min:"-360",max:"360",value:"0",oninput:"document.querySelector('g-composer#start').data.start = document.querySelector('#star_start_Range').value = Number(this.value)"})])],-1),D=[p,r,c,y,E,i,u,d,g,h,m,q,F,b,_,v,C,S,B,x,k,A,N,$,f];function T(w,P,R,j,V,G){return l(),e("div",null,D)}const U=o(t,[["render",T]]);export{L as __pageData,U as default};
