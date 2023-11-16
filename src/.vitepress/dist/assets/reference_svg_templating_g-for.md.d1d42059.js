import{_ as o,o as a,c as n,Q as l,k as s}from"./chunks/framework.11e53375.js";const F=JSON.parse('{"title":"g-for=\\"item of items\\" or  g-for=\\"(item, index) of items\\"","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/templating/g-for.md","filePath":"reference/svg/templating/g-for.md"}'),p={name:"reference/svg/templating/g-for.md"},e=l(`<h1 id="g-for-item-of-items-or-g-for-item-index-of-items" tabindex="-1"><code>g-for=&quot;item of items&quot;</code> or <br> <code>g-for=&quot;(item, index) of items&quot;</code> <a class="header-anchor" href="#g-for-item-of-items-or-g-for-item-index-of-items" aria-label="Permalink to &quot;\`g-for=&quot;item of items&quot;\` or &lt;br/&gt; \`g-for=&quot;(item, index) of items&quot;\`&quot;">​</a></h1><ul><li><p><strong>Name</strong>: <code>g-for</code></p></li><li><p><strong>Description</strong>: render a block of SVG elements multiple times based on a number, an array or an object&#39;s properties.</p></li><li><p><strong>Applies to</strong>: <code>defs</code> elements.</p></li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-composer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value: 10&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">n </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> value</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-composer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-composer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value: 10&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">defs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">n </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> value</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">defs</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-composer</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),t=s("g-composer",{data:"value: 10"},[s("svg",{viewBox:"0 0 100 100"},[s("defs",{"g-for":"n of value"},[s("circle",{"g-bind:cx":"(n * 10) + 5","g-bind:cy":"(n * 10) + 5",r:"5"})])])],-1),r=[e,t];function c(E,y,i,g,d,u){return a(),n("div",null,r)}const f=o(p,[["render",c]]);export{F as __pageData,f as default};