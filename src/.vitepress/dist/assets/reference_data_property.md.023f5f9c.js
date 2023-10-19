import{_ as a,o as n,c as l,Q as o,k as s}from"./chunks/framework.05b02974.js";const C=JSON.parse('{"title":"Property .data","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/data/property.md","filePath":"reference/data/property.md"}'),p={name:"reference/data/property.md"},t=o(`<h1 id="property-data" tabindex="-1">Property <code>.data</code> <a class="header-anchor" href="#property-data" aria-label="Permalink to &quot;Property \`.data\`&quot;">​</a></h1><ul><li><p><strong>Component</strong>: <code>g-template</code></p></li><li><p><strong>Property</strong>: <code>.data</code></p></li><li><p><strong>Description</strong>: for a complex values or dynamic handle you can use the <code>.value</code> property and the <code>g-template</code> component.</p></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;d2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(color, idx) </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> data</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(idx </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(idx </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">fill</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">color</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;d2&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">defs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(color, idx) </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> data</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(idx </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(idx </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">fill</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">color</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">defs</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onclick</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">document</span><span style="color:#9ECBFF;">.</span><span style="color:#B392F0;">querySelector</span><span style="color:#9ECBFF;">(&#39;#d2&#39;).</span><span style="color:#E1E4E8;">data</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">[&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    click to add data</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onclick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">document</span><span style="color:#032F62;">.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#032F62;">(&#39;#d2&#39;).</span><span style="color:#24292E;">data</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">[&#39;red&#39;,&#39;green&#39;,&#39;blue&#39;]&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    click to add data</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),e=s("g-template",{id:"d2"},[s("svg",{viewBox:"0 0 100 100"},[s("defs",{"g-for":"(color, idx) of data"},[s("circle",{"g-bind:cx":"(idx * 30) + 10","g-bind:cy":"(idx * 30) + 10","g-bind:fill":"color",r:"10"})])])],-1),c=s("p",null,[s("button",{onclick:"document.querySelector('#d2').data=['red','green','blue']"}," click to add data ")],-1),r=[t,e,c];function E(y,d,i,F,u,g){return n(),l("div",null,r)}const h=a(p,[["render",E]]);export{C as __pageData,h as default};