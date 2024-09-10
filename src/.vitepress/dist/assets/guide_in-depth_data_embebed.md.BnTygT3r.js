import{_ as o,B as i,c as d,j as e,a as n,G as r,w as a,o as s}from"./chunks/framework.BSKDiXd-.js";const h=JSON.parse('{"title":"Embebed data","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/in-depth/data/embebed.md","filePath":"guide/in-depth/data/embebed.md"}'),p={name:"guide/in-depth/data/embebed.md"},u={class:"warning custom-block"};function g(m,t,c,b,x,y){const l=i("ClientOnly");return s(),d("div",null,[t[9]||(t[9]=e("h1",{id:"embebed-data",tabindex:"-1"},[n("Embebed data "),e("a",{class:"header-anchor",href:"#embebed-data","aria-label":'Permalink to "Embebed data"'},"​")],-1)),t[10]||(t[10]=e("p",null,[n("The "),e("code",null,'<script type="data">'),n(" composer supports three types of data that can be included directly within its HTML tag: CSV, JSON and JSON5. The type of format is directly deduced from the content.")],-1)),e("ul",null,[e("li",null,[t[1]||(t[1]=e("p",null,"Example using CSV:s",-1)),r(l,null,{default:a(()=>t[0]||(t[0]=[e("g-editor",{"lines-highlight":"3-6","keep-format":""},[e("textarea",null,`<g-composer>
  <g-script type="data">
    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    n80;80;10;"green"
  </g-script>
</g-composer>`)],-1)])),_:1})]),e("li",null,[t[3]||(t[3]=e("p",null,"Example using JSON:",-1)),r(l,null,{default:a(()=>t[2]||(t[2]=[e("g-editor",{"lines-highlight":"3-7"},[e("textarea",null,`<g-composer>
  <g-script type="data">
  [
    {"x": 20, "y": 20, "radix": 20, "color": "red"},
    {"x": 45, "y": 45, "radix": 30, "color": "blue"},
    {"x": 80, "y": 80, "radix": 10, "color": "green"}
  ]
  </g-script>
</g-composer>`)],-1)])),_:1})]),e("li",null,[t[5]||(t[5]=e("p",null,"Example using JSON5 (a JavaScript object):",-1)),r(l,null,{default:a(()=>t[4]||(t[4]=[e("g-editor",{"lines-highlight":"3-7"},[e("textarea",null,`<g-composer>
  <g-script type="data">
  [
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"},
  ]
  </g-script>
</g-composer>`)],-1)])),_:1})])]),e("div",u,[t[7]||(t[7]=e("p",{class:"custom-block-title"},"WARNING",-1)),t[8]||(t[8]=e("p",null,[n("In some environments the "),e("code",null,'script type="data'),n(" has conflicts. In these cases, you can use alternatively "),e("code",null,'<g-script type="data"></g-script>'),n(".")],-1)),r(l,null,{default:a(()=>t[6]||(t[6]=[e("g-editor",{options:"g-script: true","lines-highlight":"2"},[e("textarea",null,`<g-composer>
  <g-script type="data">
    ...
  </g-script>
</g-composer>`)],-1)])),_:1})])])}const N=o(p,[["render",g]]);export{h as __pageData,N as default};
