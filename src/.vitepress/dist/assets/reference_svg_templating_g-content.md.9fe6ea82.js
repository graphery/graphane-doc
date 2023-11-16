import{_ as o,o as n,c as a,Q as l,k as s}from"./chunks/framework.11e53375.js";const m=JSON.parse('{"title":"g-content=\\"expression\\"","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/svg/templating/g-content.md","filePath":"reference/svg/templating/g-content.md"}'),t={name:"reference/svg/templating/g-content.md"},e=l(`<h1 id="g-content-expression" tabindex="-1"><code>g-content=&quot;expression&quot;</code> <a class="header-anchor" href="#g-content-expression" aria-label="Permalink to &quot;\`g-content=&quot;expression&quot;\`&quot;">​</a></h1><ul><li><p><strong>Name</strong>: <code>g-content</code></p></li><li><p><strong>Description</strong>: add content from data expression into elements such as text, tspan, and others.</p></li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-composer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value: &#39;hello world&#39;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">g-content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">value</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-composer</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-composer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value: &#39;hello world&#39;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">g-content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">value</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-composer</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,4),p=s("g-composer",{data:"value: 'hello world'"},[s("svg",{viewBox:"0 0 100 100"},[s("text",{x:"0",y:"50","g-content":"value"})])],-1),c=[e,p];function r(E,y,i,g,d,u){return n(),a("div",null,c)}const _=o(t,[["render",r]]);export{m as __pageData,_ as default};