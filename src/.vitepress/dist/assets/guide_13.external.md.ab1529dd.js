import{_ as n,o,c as l,V as a,C as s}from"./chunks/framework.98960eec.js";const C=JSON.parse('{"title":"External Data","description":"","frontmatter":{},"headers":[],"relativePath":"guide/13.external.md","filePath":"guide/13.external.md"}'),e={name:"guide/13.external.md"},t=a(`<h1 id="external-data" tabindex="-1">External Data <a class="header-anchor" href="#external-data" aria-label="Permalink to &quot;External Data&quot;">​</a></h1><p>In production content publishing environments or when accessing remote servers, the <code>g-data</code> component with the <code>src</code> and <code>type</code> attributes becomes invaluable in indicating the source of the data. By utilizing these attributes, developers can seamlessly incorporate external data into their visualization.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">defs</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">g-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value of data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">circle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">g-bind:cx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value.x</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">g-bind:cy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value.y</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">g-bind:r</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value.radix</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#C792EA;">g-bind:fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value.color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">defs</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/data.csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,3),p=s("g-template",null,[s("svg",{viewBox:"0 0 100 100"},[s("defs",{"g-for":"value of data"},[s("circle",{"g-bind:cx":"value.x","g-bind:cy":"value.y","g-bind:r":"value.radix","g-bind:fill":"value.color"})])]),s("g-data",{src:"/data.csv",type:"csv"})],-1),c=a(`<p>The method to include external SVG template is through the <code>g-template</code> component&#39;s <code>src</code> property. This feature allows developers to reference an external source, providing flexibility and convenience in managing resources.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/circles.svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/data.csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><g-template src="/circles.svg"><g-data src="/data.csv" type="csv"></g-data></g-template><p>To streamline the process further, it is even possible to forego the explicit use of the g-data component. Instead, designer and developers can directly include the <code>data-src</code> and <code>data-type</code> properties within the <code>g-template</code> component itself. By doing so, the component will automatically generate the necessary <code>g-data</code> component transparently, simplifying the overall structure of the code.</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/circles.svg</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/data.csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><g-template src="/circles.svg" data-src="/data.csv" data-type="csv"></g-template>`,6),r=[t,p,c];function D(F,y,i,d,g,u){return o(),l("div",null,r)}const h=n(e,[["render",D]]);export{C as __pageData,h as default};
