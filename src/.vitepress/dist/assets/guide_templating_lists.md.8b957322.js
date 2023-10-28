import{_ as n,o as a,c as l,Q as o,k as s}from"./chunks/framework.875adba1.js";const u=JSON.parse('{"title":"Lists Rendering","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/templating/lists.md","filePath":"guide/templating/lists.md"}'),p={name:"guide/templating/lists.md"},e=o(`<h1 id="lists-rendering" tabindex="-1">Lists Rendering <a class="header-anchor" href="#lists-rendering" aria-label="Permalink to &quot;Lists Rendering&quot;">​</a></h1><p>The <code>g-for</code> directive is a powerful feature in Graphane that allows you to render a <code>&lt;defs&gt;&lt;/defs&gt;</code> block of SVG elements multiple times based on an array or an object&#39;s properties. It provides a convenient way to iterate over data and dynamically generate content in your templates.</p><p>This directive is applied on a <code>&lt;defs&gt;&lt;/defs&gt;</code> element because objects created inside an element are not rendered directly. The <code>g-for</code> directive creates each element by cloning the content of this element.</p><p>The basic syntax for <code>g-for</code> is as follows:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> items</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item.x</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">:cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item.y</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">:r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item.r</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">defs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> items</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item.x</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">:cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item.y</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">:r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item.r</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">defs</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><code>&quot;item of items&quot;</code> is the directive expression. It specifies the iteration and defines a variable (<code>item</code> in this example) to represent each element in an array or object being iterated over (<code>items</code> in this example).</p><p>You can also access the index of the current iteration by using an optional second parameter in the <code>g-for</code> syntax:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(item, index) </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> items</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item.x</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">:cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item.y</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">:r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">index </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">defs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(item, index) </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> items</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item.x</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">:cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item.y</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">:r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">index </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">defs</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>Additionally, <code>g-for</code> supports the iteration over a range of numbers:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">n </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">defs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">n </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">defs</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>This example will render 10 circle elements:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">n </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#F97583;">:cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">(n </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">9</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">defs</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">defs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">n </span><span style="color:#D73A49;">of</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#D73A49;">:cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">(n </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">9</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">defs</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,12),t=s("g-template",null,[s("svg",{viewBox:"0 0 100 100"},[s("defs",{"g-for":"n of 10"},[s("circle",{"g-bind:cx":"(n + 1) * 9","g-bind:cy":"(n + 1) * 9",r:"5"})])])],-1),c=[e,t];function r(E,y,i,d,g,h){return a(),l("div",null,c)}const q=n(p,[["render",r]]);export{u as __pageData,q as default};
