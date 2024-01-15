import{_ as t,c as a,o as e,U as h,m as i,a as s}from"./chunks/framework.on6qGByC.js";const _=JSON.parse('{"title":"Data property","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/in-depth/data/attribute.md","filePath":"guide/in-depth/data/attribute.md"}'),n={name:"guide/in-depth/data/attribute.md"},l=h(`<h1 id="data-property" tabindex="-1">Data property <a class="header-anchor" href="#data-property" aria-label="Permalink to &quot;Data property&quot;">​</a></h1><p>When the data to be handled is basic, the <code>data</code> attribute can be used directly to indicate keys and values separated by comma (<code>,</code>) or semicolon (<code>;</code>). It is useful with basic visualizations, like some of the examples we use in this guide, but is not sufficient when you want to make more complex situations.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-composer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width: 80, height: 80&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">rect</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;green&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          g-bind:width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data.width&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          g-bind:height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data.height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-composer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,3),p=i("g-composer",{data:"width: 80, height: 80"},[i("svg",{viewBox:"0 0 100 100"},[i("rect",{x:"0",y:"0",fill:"green","g-bind:width":"data.width","g-bind:height":"data.height"})])],-1),d=i("div",{class:"warning custom-block"},[i("p",{class:"custom-block-title"},[s("The "),i("code",null,".data"),s(" property has the key and values defined in the attribute, but if this")]),i("p",null,"property is updated, the attribute is not updated. It is a unidirectional reflection, from attribute to property, but not in the opposite direction.")],-1),k=[l,p,d];function o(r,E,g,c,u,y){return e(),a("div",null,k)}const m=t(n,[["render",o]]);export{_ as __pageData,m as default};
