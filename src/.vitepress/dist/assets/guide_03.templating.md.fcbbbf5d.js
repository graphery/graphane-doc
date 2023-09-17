import{_ as a,o as n,c as e,V as l,C as s,a as o}from"./chunks/framework.98960eec.js";const h=JSON.parse('{"title":"Templating","description":"","frontmatter":{},"headers":[],"relativePath":"guide/03.templating.md","filePath":"guide/03.templating.md"}'),p={name:"guide/03.templating.md"},t=l(`<h1 id="templating" tabindex="-1">Templating <a class="header-anchor" href="#templating" aria-label="Permalink to &quot;Templating&quot;">​</a></h1><p>The Graphane framework simplifies the creation of dynamic, interactive SVG graphics by combining the power of SVG markup with directives, expressions, and variables in a simple web component. It provides a robust templating system that allows designers and developers to generate SVG content declaratively and leverage the rich capabilities of SVG to create visually engaging and interactive graphics. In the Graphane framework, data-driven templating is a key feature that allows dynamically generating and manipulating SVG (Scalable Vector Graphics) content.</p><p>Graphane incorporates a template engine that parses and processes the templates. The engine interprets the expressions, evaluates the directives, and generates the final SVG markup. The rendering can occur efficiently at runtime and does not require a compiler or transpiler. Graphane templates are typically defined in separate SVG files or directly within the web component code using a specific directive syntax. These templates can be written using SVG markup, a widely supported XML-based language.</p><p>Directives are special attributes or elements allowing more complex logic and dynamic rendering. Examples of directives in Graphane might include <code>g-for</code>, <code>g-bind</code>, <code>g-if</code>, etc. These directives allow for iteration, dynamic modification of attributes or styles, conditional rendering, etc. Within a Graphane directive template, you can use expressions and variables to insert values or perform calculations dynamically. Graphane also supports data binding and uses advanced reactive programming techniques to update the SVG based on changes in the data.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-svg</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value:50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">graph</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 400 270</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">defs</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">g-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">y of 5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">defs</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">g-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x of 20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">path</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">g-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">((y * 20) + x &lt; value)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">g-bind:transform</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">translate(x * 20, y * 55)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">d</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3</span></span>
<span class="line"><span style="color:#C3E88D;">               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">defs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">defs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-svg</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Change the men displayed:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">range</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">           </span><span style="color:#C792EA;">oninput</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">g-svg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">=this.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,6),r=s("g-svg",{data:"value:50"},[s("svg",{viewBox:"0 0 400 270"},[s("defs",{"g-for":"y of 5"},[s("defs",{"g-for":"x of 20"},[s("path",{"g-if":"((y * 20) + x < value)","g-bind:transform":"translate(x * 20, y * 55)",d:`M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z`})])])])],-1),c=s("p",null,[s("label",null,[o("Change the men displayed: "),s("input",{type:"range",id:"value",value:"50",oninput:"document.querySelector('g-svg').data.value=this.value"})])],-1),D=[t,r,c];function i(y,F,d,g,u,C){return n(),e("div",null,D)}const A=a(p,[["render",i]]);export{h as __pageData,A as default};
