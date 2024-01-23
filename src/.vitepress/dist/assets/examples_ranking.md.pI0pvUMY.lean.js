import{_ as i,c as a,o as n,m as s,a as t,V as l}from"./chunks/framework.FQ0BK5n9.js";const B=JSON.parse('{"title":"Population Ranking","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/ranking.md","filePath":"examples/ranking.md"}'),p={name:"examples/ranking.md"},h=s("h1",{id:"population-ranking",tabindex:"-1"},[t("Population Ranking "),s("a",{class:"header-anchor",href:"#population-ranking","aria-label":'Permalink to "Population Ranking"'},"​")],-1),k=s("g-composer",{style:{width:"500px"}},[s("svg",{viewBox:"0 0 500 500"},[s("defs",{"g-for":"({country, population}, n) of data"},[s("g",{"g-bind:transform":`$$.translate(
                             Object.values(
                               $.polar2cartesian(250, 
                                                 250, 
                                                 170 * population / data.$max('population')+ 10,
                                                 360/data.length * n + 360/data.length/2
                              )
                             )
                            )`},[s("g",{"g-bind:transform":"$$.rotate(360/data.length * n + (360/data.length * n < 180 ? -70:110))","g-bind:text-anchor":"360/data.length * n >= 180 ? 'end' : ''"},[s("text",{"alignment-baseline":"middle","font-size":"12","g-content":"country"})])]),s("path",{"g-bind:d":`$$.circleSlice( 250, 
                                      250, 
                                      170 * (population / data.$max('population')),
                                      360/data.length, 
                                      360/data.length * n
                                    )`,fill:"red",stroke:"white","stroke-width":"1"})])]),s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"}),s("g-script",{type:"data"},'[ {country: "India", population: 1428627663}, {country: "China", population: 1425671352}, {country: "United States", population: 339996563}, {country: "Indonesia", population: 277534122}, {country: "Pakistan", population: 240485658}, {country: "Nigeria", population: 223804632}, {country: "Brazil", population: 216422446}, {country: "Bangladesh", population: 172954319}, {country: "Russia", population: 144444359}, {country: "Mexico", population: 128455567}, {country: "Ethiopia", population: 126527060}, {country: "Japan", population: 123294513} ]')],-1),e=l("",1),E=[h,k,e];function r(o,g,d,y,u,c){return n(),a("div",null,E)}const q=i(p,[["render",r]]);export{B as __pageData,q as default};
