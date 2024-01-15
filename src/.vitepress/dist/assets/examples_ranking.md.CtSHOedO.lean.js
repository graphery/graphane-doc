import{_ as t,c as n,o as e,m as a,a as o}from"./chunks/framework.on6qGByC.js";const _=JSON.parse('{"title":"Bars","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/ranking.md","filePath":"examples/ranking.md"}'),i={name:"examples/ranking.md"},r=a("h1",{id:"bars",tabindex:"-1"},[o("Bars "),a("a",{class:"header-anchor",href:"#bars","aria-label":'Permalink to "Bars"'},"​")],-1),p=a("g-composer",{style:{width:"500px"}},[a("svg",{viewBox:"0 0 500 500"},[a("defs",{"g-for":"({country, population}, n) of data"},[a("g",{"g-bind:transform":`$$.translate(
                             Object.values(
                               $.polar2cartesian(250, 
                                                 250, 
                                                 170 * population / data.$max('population')+ 10,
                                                 360/data.length * n + 360/data.length/2
                              )
                             )
                            )`},[a("g",{"g-bind:transform":"$$.rotate(360/data.length * n + (360/data.length * n < 180 ? -70:110))","g-bind:text-anchor":"360/data.length * n >= 180 ? 'end' : ''"},[a("text",{"alignment-baseline":"middle","font-size":"12","g-content":"country"})])]),a("path",{"g-bind:d":`$$.circleSlice( 250, 
                                      250, 
                                      170 * (population / data.$max('population')),
                                      360/data.length, 
                                      360/data.length * n
                                    )`,fill:"red",stroke:"white","stroke-width":"1"})])]),a("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"}),a("g-script",{type:"data"},'[ {country: "India", population: 1428627663}, {country: "China", population: 1425671352}, {country: "United States", population: 339996563}, {country: "Indonesia", population: 277534122}, {country: "Pakistan", population: 240485658}, {country: "Nigeria", population: 223804632}, {country: "Brazil", population: 216422446}, {country: "Bangladesh", population: 172954319}, {country: "Russia", population: 144444359}, {country: "Mexico", population: 128455567}, {country: "Ethiopia", population: 126527060}, {country: "Japan", population: 123294513} ]')],-1),s=[r,p];function l(c,d,u,g,h,m){return e(),n("div",null,s)}const f=t(i,[["render",l]]);export{_ as __pageData,f as default};
