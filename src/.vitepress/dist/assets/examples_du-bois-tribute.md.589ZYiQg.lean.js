import{_ as n,c as i,m as s,U as t,o as a}from"./chunks/framework.on6qGByC.js";const b=JSON.parse('{"title":"W. E. B. Du Bois tribute","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/du-bois-tribute.md","filePath":"examples/du-bois-tribute.md"}'),h={name:"examples/du-bois-tribute.md"},l=t("",5),p={id:"color"},e={viewBox:"0 0 500 500",width:"500",style:{"font-family":"monospace"}},k=s("filter",{id:"filter"},[s("feTurbulence",{result:"noise-lg",type:"fractalNoise",baseFrequency:".04",numOctaves:"1",seed:"1458"}),s("feComposite",{result:"BaseGraphic",in:"SourceGraphic",in2:"noise-lg",operator:"arithmetic",k1:"0.5",k2:"0.6",k4:"-.07"}),s("feComposite",{operator:"arithmetic",k1:"-0.8",k2:"0.8",k3:"1.4"})],-1),r=s("defs",{"g-for":"(group, x) of data.$distinct('group')"},[s("text",{x:"250","g-bind:y":"x ? 480 : 30","text-anchor":"middle","g-content":"group.toUpperCase()"}),s("defs",{"g-for":"(record, n, all) of data.filter(r => r.group === group)"},[s("path",{stroke:"#c0c0c0","stroke-width":"1",filter:"url(#filter)","g-bind:transform":"x ? $$.rotate(180,250,250) : ''","g-bind:fill":"$.config.colors[n]","g-bind:check":"group + ' ' + record.sector","g-bind:d":`$$.circleSlice( 250, 
                                    250, 
                                    200,
                                    120 * record.value,
                                    (120 * data.$sum(all.filter((r,x) => x < n), 'value')) -60,
                                  )`})])],-1),E=[k,r],d=s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"},null,-1),o=s("g-script",{type:"data",src:"../data/du-bois-tribute.data.csv"},null,-1),g=s("g-script",{type:"config"}," { colors: ['#cd143c','#ffd700','#4682b4','#d2b38c','#654321'] } ",-1),c=t("",1);function y(u,F,B,f,C,q){return a(),i("div",null,[l,s("g-composer",p,[(a(),i("svg",e,E)),d,o,g]),c])}const m=n(h,[["render",y]]);export{b as __pageData,m as default};
