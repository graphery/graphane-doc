import{_ as t,c as n,o as a,m as e,a as o}from"./chunks/framework.on6qGByC.js";const x=JSON.parse('{"title":"Clock","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/clock.md","filePath":"examples/clock.md"}'),s={name:"examples/clock.md"},r=e("h1",{id:"clock",tabindex:"-1"},[o("Clock "),e("a",{class:"header-anchor",href:"#clock","aria-label":'Permalink to "Clock"'},"​")],-1),i=e("g-composer",null,[e("svg",{viewBox:"0 0 250 250","g-on:init":"init"},[e("circle",{cx:"125",cy:"125",r:"124",stroke:"#000","stroke-width":"2",fill:"none"}),e("defs",{"g-for":"n of 60"},[e("line",{"g-bind:x1":"$.polar2cartesian(125, 125, n % 5 ? 115 : 110, n * 6).x","g-bind:y1":"$.polar2cartesian(125, 125, n % 5 ? 115 : 110, n * 6).y","g-bind:x2":"$.polar2cartesian(125, 125, 120, n * 6).x","g-bind:y2":"$.polar2cartesian(125, 125, 120, n * 6).y","g-bind:stroke-width":"n % 5 ? 1 : 2",stroke:"#000"})]),e("defs",{"g-for":"n of 12"},[e("text",{"g-bind:x":"$.polar2cartesian(125, 127, 95, (n + 1) * 30).x","g-bind:y":"$.polar2cartesian(125, 127, 95, (n + 1) * 30).y","g-content":"n + 1","font-size":"18","font-family":"sans-serif","alignment-baseline":"middle","text-anchor":"middle"})]),e("g",{fill:"#000",stroke:"#555","stroke-width":"1"},[e("polygon",{"g-bind:transform":"$$.rotate(date.getSeconds() * 6, 125, 125)",points:"125,20,129,125,125,145,124,125"}),e("polygon",{"g-bind:transform":"$$.rotate(date.getMinutes() * 6, 125, 125)",points:"125,30,130,125,125,150,120,125"}),e("polygon",{"g-bind:transform":"$$.rotate((date.getHours() % 12 * 30) + (date.getMinutes() * 0.5), 125, 125)",points:"125,60,130,125,125,160,120,125"})])]),e("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"}),e("g-script",{type:"methods"}," function init() { setInterval(() => $.data.date = new Date(), 1000); } "),e("g-script",{type:"data"},"{ date: new Date() }")],-1),c=[r,i];function l(d,p,g,f,m,h){return a(),n("div",null,c)}const _=t(s,[["render",l]]);export{x as __pageData,_ as default};