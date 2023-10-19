import{_ as a,o as l,c as p,k as s,a as n,Q as o}from"./chunks/framework.05b02974.js";const A=JSON.parse('{"title":"fractal tree","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/07.fractal-tree.md","filePath":"examples/07.fractal-tree.md"}'),e={name:"examples/07.fractal-tree.md"},t=s("h1",{id:"fractal-tree",tabindex:"-1"},[n("fractal tree "),s("a",{class:"header-anchor",href:"#fractal-tree","aria-label":'Permalink to "fractal tree"'},"​")],-1),c=s("p",null,[n("This fractal tree is built entirely with the Graphane library, and it is animated with the "),s("code",null,"sequence"),n(" plugin.")],-1),r=s("g-template",null,[s("svg",{viewBox:"0 0 600 600",width:"400",height:"400","g-on:load":"init"}),s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.2/lib/plugins/gsvg.sequence.js"}),s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha.2/lib/plugins/gsvg.shapes.js"}),s("g-script",{type:"methods"}," function init() { const svg = $.svg; const gSVG = svg.gSVG; const seq = svg.Seq(); (function drawBranch (startX = 300, startY = 600, len = 120, angle = 0, remain = 10, delay = 0) { const duration = 600; const {x: endX, y: endY} = gSVG.polar2cartesian(startX, startY, len, angle); const element = svg.add('line') .x1(startX).y1(startY).x2(startX).y2(startY) .stroke('#45ae13ff').stroke_width(remain); seq.add(element, {x2: endX, y2: endY}, {delay, duration}); if (remain) { drawBranch(endX, endY, len * 0.8, angle - 16, remain - 1, delay + duration); drawBranch(endX, endY, len * 0.8, angle + 16, remain - 1, delay + duration); } })(); setTimeout(() => seq.play(), 1000); } ")],-1),E=o("",1),y=[t,c,r,E];function i(F,g,d,u,C,B){return l(),p("div",null,y)}const m=a(e,[["render",i]]);export{A as __pageData,m as default};
