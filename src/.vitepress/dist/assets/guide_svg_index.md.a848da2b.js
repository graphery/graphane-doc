import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.05b02974.js";const F=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"guide/svg/index.md","filePath":"guide/svg/index.md"}'),l={name:"guide/svg/index.md"},p=o(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p><strong>Graphane</strong> includes a powerful API to simplify the construction and manipulation of SVG graphics from Javascript. The API is very close to the SVG structure. It is straightforward to use. If you know the SVG format, you know Graphane API. If you learn Graphane API, you learn SVG format.</p><p>Graphane simplifies the creation and manipulation through very light methods that fit SVG DOM attributes, properties, and methods.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$.svg.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;100px&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;100px&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rect</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $.svg.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rect&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#f06&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$.svg.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;100px&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;100px&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rect</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $.svg.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;rect&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#f06&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>The result is an entirely valid SVG that can be used without limitations as part of the HTML DOM.</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">rect</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;90&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;90&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#f06&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">rect</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100px&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">rect</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;90&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;90&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#f06&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">rect</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api-style-method-chaining" tabindex="-1">API style: method chaining <a class="header-anchor" href="#api-style-method-chaining" aria-label="Permalink to &quot;API style: method chaining&quot;">​</a></h2><p>In Graphane SVG, all are methods; thus, when you want to work with SVG attributes or properties, you must use methods. For example, set an <code>id</code> to an SVG element is <code>element.id(&#39;unique_id&#39;)</code> and for getting this identification it is necessary to use <code>element.id()</code>.</p><p>Graphane dynamically constructs the methods, which can chain together to make successive calls. Each call returns the original object and can include one call after another.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$.svg</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;100%&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;100%&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">$.svg.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;rect&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">90</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#f06&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$.svg</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;100%&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;100%&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">$.svg.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;rect&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">10</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">90</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#f06&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p><strong>Note</strong>: chained call is possible when calling setter methods. When a getter method (then returns a value) is called, the value property is returned, amd it is impossible to do more chained calls.</p><h2 id="use-from-methods-and-from-outside-the-component" tabindex="-1">Use from methods and from outside the component <a class="header-anchor" href="#use-from-methods-and-from-outside-the-component" aria-label="Permalink to &quot;Use from methods and from outside the component&quot;">​</a></h2><p>You can access the SVG with the Graphane API from the methods included in the component with <code>$. svg</code>.</p><p>You can also access it from outside the component with the <code>.svg</code> property that the component exposes for use from Javascript.</p>`,14),e=[p];function t(c,r,E,y,i,h){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};
