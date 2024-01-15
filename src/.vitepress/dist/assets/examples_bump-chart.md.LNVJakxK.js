import{_ as t,c as a,o as n,m as e,a as d}from"./chunks/framework.on6qGByC.js";const x=JSON.parse('{"title":"Bump chart","description":"","frontmatter":{},"headers":[],"relativePath":"examples/bump-chart.md","filePath":"examples/bump-chart.md"}'),i={name:"examples/bump-chart.md"},r=e("h1",{id:"bump-chart",tabindex:"-1"},[d("Bump chart "),e("a",{class:"header-anchor",href:"#bump-chart","aria-label":'Permalink to "Bump chart"'},"​")],-1),c=e("g-composer",null,[e("svg",{viewBox:"0 0 500 500",height:"500",width:"500","font-size":"12"},[e("defs",{"g-for":"(player, n) of data[data.length - 1]"},[e("circle",{r:"12",stroke:"lightgray","stroke-width":"1",cx:"485","g-bind:fill":"$.config.pallete[n]","g-bind:cy":"66 + (n * 45)","g-content":"n + 1"}),e("text",{"text-anchor":"middle",x:"485","g-bind:y":"70 + (n * 45)","g-content":"player"})]),e("defs",{"g-for":"(ranking, i) of data"},[e("defs",{"g-for":"(player, n) of ranking"},[e("line",{"g-if":"i !== data.length - 1","g-bind:x1":"30 + (i * 44)","g-bind:y1":"66 + (n * 45)","g-bind:x2":"30 + ((i+1) * 44)","g-bind:y2":"66 + (data[i+1].indexOf(data[i][n]) * 45)","g-bind:stroke":"$.config.pallete[data[data.length - 1].indexOf(player)]","stroke-width":"1"}),e("circle",{r:"6",stroke:"gray","stroke-width":"1","g-bind:fill":"$.config.pallete[data[data.length - 1].indexOf(player)]","g-bind:cx":"30 + (i * 44)","g-bind:cy":"66 + (n * 45)"},[e("title",{"g-content":"player"})])])])]),e("g-script",{type:"data"},"[ ['D', 'J', 'C', 'G', 'B', 'I', 'F', 'A', 'H', 'E'], ['C', 'G', 'D', 'I', 'J', 'B', 'F', 'H', 'A', 'E'], ['C', 'D', 'I', 'G', 'J', 'F', 'B', 'A', 'E', 'H'], ['C', 'G', 'D', 'J', 'I', 'B', 'F', 'H', 'E', 'A'], ['D', 'C', 'G', 'J', 'I', 'B', 'E', 'F', 'H', 'A'], ['D', 'J', 'C', 'G', 'B', 'I', 'E', 'F', 'H', 'A'], ['D', 'C', 'G', 'B', 'J', 'I', 'F', 'A', 'E', 'H'], ['D', 'J', 'C', 'G', 'B', 'I', 'F', 'E', 'A', 'H'], ['J', 'D', 'C', 'B', 'I', 'G', 'F', 'H', 'A', 'E'], ['J', 'D', 'G', 'C', 'I', 'F', 'B', 'A', 'H', 'E'] ]"),e("g-script",{type:"config"},"{ pallete: [ '#8dd3c7', '#bed3b3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd' ] }")],-1),o=[r,c];function l(s,p,g,f,h,b){return n(),a("div",null,o)}const B=t(i,[["render",l]]);export{x as __pageData,B as default};