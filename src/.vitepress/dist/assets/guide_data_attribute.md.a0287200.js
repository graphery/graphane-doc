import{_ as t,o as n,c as o,Q as l,k as s,a}from"./chunks/framework.05b02974.js";const q=JSON.parse('{"title":"Data property","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/data/attribute.md","filePath":"guide/data/attribute.md"}'),p={name:"guide/data/attribute.md"},e=l(`<h1 id="data-property" tabindex="-1">Data property <a class="header-anchor" href="#data-property" aria-label="Permalink to &quot;Data property&quot;">​</a></h1><p>In the <code>data</code> attribute you can directly include data with format <code>key: value</code> separated with <code>, </code> or <code>;</code>. It is useful with basic visualizations, like some of the examples we use in this guide, but is not sufficient when you want to make more complex situations.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width: 80, height: 80&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">rect</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;10&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;green&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">data.width</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">g-bind</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">data.height</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width: 80, height: 80&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">rect</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;10&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;green&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">data.width</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">g-bind</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">data.height</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),c=s("g-template",{data:"width: 80, height: 80"},[s("svg",{viewBox:"0 0 100 100"},[s("rect",{x:"0",y:"0",fill:"green","g-bind:width":"data.width","g-bind:height":"data.height"})])],-1),r=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[a("The "),s("code",null,".data"),a(" property has the key and values defined in the attribute, but if this property is updated, the attribute is not updated. It is a unidirectional reflection, from attribute to property, but not in the opposite direction.")])],-1),i=[e,c,r];function E(y,d,h,u,g,F){return n(),o("div",null,i)}const m=t(p,[["render",E]]);export{q as __pageData,m as default};
