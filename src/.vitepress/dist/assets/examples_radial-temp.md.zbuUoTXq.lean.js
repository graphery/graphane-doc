import{_ as a,c as t,o as r,m as e,a as n}from"./chunks/framework.on6qGByC.js";const x=JSON.parse('{"title":"Radial: temperature range","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/radial-temp.md","filePath":"examples/radial-temp.md"}'),d={name:"examples/radial-temp.md"},i=e("h1",{id:"radial-temperature-range",tabindex:"-1"},[n("Radial: temperature range "),e("a",{class:"header-anchor",href:"#radial-temperature-range","aria-label":'Permalink to "Radial: temperature range"'},"​")],-1),s=e("g-composer",null,[e("svg",{viewBox:"0 0 1000 1000",width:"300",height:"300"},[e("defs",{"g-for":"(t, n) of [-15,-10,-5,0,5,10,15,20,25,30,35,40,45,50]"},[e("circle",{cx:"500",cy:"500",stroke:"black","stroke-width":"1",fill:"none","g-bind:r":"(n + 1) * 490 / 15"})]),e("defs",{"g-for":"m of [30.58, 58.19, 88.77, 118.36, 148.93, 178.52, 209.10, 239.67, 269.26, 299.84, 329.42, 360.00]"},[e("line",{stroke:"black","stroke-width":"1",x1:"500",y1:"500","g-bind:x2":"$.polar2cartesian(500,500,460, m).x","g-bind:y2":"$.polar2cartesian(500,500,460, m).y"})]),e("path",{id:"max",stroke:"red","stroke-width":"2",fill:"none","g-bind:d":"draw($$, 'max')"}),e("path",{id:"min",stroke:"blue","stroke-width":"2",fill:"none","g-bind:d":"draw($$, 'min')"}),e("path",{fill:"rgba(128,128,128,0.3)","fill-rule":"evenodd","g-bind:d":"$.svg.querySelector('#max').d() + $.svg.querySelector('#min').d()"})]),e("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"}),e("g-script",{type:"data",src:"../data/temp.csv"}),e("g-script",{type:"methods"}," const day = 360 / 365; const g = 460 / 65; function draw(d, key) { for (let n = 0; n != $.data.length; n++) { const p = $.polar2cartesian(500, 500, ($.data[n][key] + 15) * g, day * n); if (n === 0) { d.M(p.x, p.y); } else { d.L(p.x, p.y); } } d.z(); } ")],-1),o=[i,s];function l(p,c,m,g,h,f){return r(),t("div",null,o)}const _=a(d,[["render",l]]);export{x as __pageData,_ as default};