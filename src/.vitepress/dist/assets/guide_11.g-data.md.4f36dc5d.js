import{_ as a,o as e,c as s,V as o}from"./chunks/framework.98960eec.js";const g=JSON.parse('{"title":"g-data component","description":"","frontmatter":{},"headers":[],"relativePath":"guide/11.g-data.md","filePath":"guide/11.g-data.md"}'),t={name:"guide/11.g-data.md"},n=o(`<h1 id="g-data-component" tabindex="-1"><code>g-data</code> component <a class="header-anchor" href="#g-data-component" aria-label="Permalink to &quot;\`g-data\` component&quot;">​</a></h1><p>To handle complex data in a declarative manner, the <code>g-data</code> component comes into play. It seamlessly integrates with <code>g-svg</code> and facilitates the insertion or retrieval of information through the <code>.data</code> property.</p><p>This component operates in two distinct modes:</p><ul><li><p><a href="./12.embebed.html">Embedded Data Mode</a>:</p><p>This mode proves invaluable during visualization construction. Here&#39;s an example of embedding data directly within the component:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;x&quot;;&quot;y&quot;;&quot;radix&quot;;&quot;color&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  20;20;20;&quot;red&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  45;45;30;&quot;blue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  80;80;10;&quot;green&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li><li><p><a href="./13.external.html">External Data Mode</a>:</p><p>This mode proves highly useful when data needs to be linked from an external source like a CSV or JSON file. It is convenient for publishing content or accessing data from external sources. Here&#39;s an example of linking data from an external source using HTML:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/data.csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">csv</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">g-data</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></li></ul><p>By employing the <code>g-data</code> component, handling complex data becomes more efficient and manageable, empowering you to create compelling visualizations without worrying too much about data.</p>`,5),l=[n];function p(c,r,i,d,u,m){return e(),s("div",null,l)}const y=a(t,[["render",p]]);export{g as __pageData,y as default};