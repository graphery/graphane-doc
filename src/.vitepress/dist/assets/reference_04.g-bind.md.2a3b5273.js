import{_ as a,o,c as t,V as e,C as s}from"./chunks/framework.98960eec.js";const m=JSON.parse('{"title":"g-bind directive","description":"","frontmatter":{},"headers":[],"relativePath":"reference/04.g-bind.md","filePath":"reference/04.g-bind.md"}'),n={name:"reference/04.g-bind.md"},l=e('<h1 id="g-bind-directive" tabindex="-1"><code>g-bind</code> directive <a class="header-anchor" href="#g-bind-directive" aria-label="Permalink to &quot;`g-bind` directive&quot;">​</a></h1><p>The <code>g-bind</code> directive, also known as the shorthand <code>:</code> syntax, is a fundamental directive in Graphane that enables you to bind values or expressions to SVG attributes in your templates.</p><p>The <code>g-bind</code> directive allows you to dynamically associate data from your Graphane instance with attributes or properties. This enables you to update the values of those attributes or props based on changes in the underlying data.</p><p>Here&#39;s an example of using the <code>g-bind</code> directive to bind the <code>r</code> attribute of a circle element to a dynamic radius:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">circle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">g-bind:r</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">size</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">circle</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>In this case, <code>size</code> refers to a data property or expression that holds the radius value. The <code>g-bind</code> directive binds the <code>r</code> attribute of the circle element to that value. When <code>size</code> changes in the Graphane component, the <code>r</code> attribute will be automatically updated.</p><p>Furthermore, you can use <code>g-bind</code> with JavaScript expressions to dynamically compute values. This can be useful for manipulating or transforming data before binding it to an attribute or prop. Here&#39;s an example that concatenates two strings:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">circle</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">g-bind:title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">firstName + &#39; &#39; + lastName</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Hover over me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">circle</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>In this example, the title attribute of the circle element is bound to the result of the expression <code>firstName + &#39; &#39; + lastName</code>. The expression is evaluated in the context of the Graphane component, allowing you to perform dynamic computations.</p><p>To summarize, the <code>g-bind</code> directive in Graphane is a powerful tool for establishing data bindings between Graphane components, and SVG attributes. It facilitates the synchronization of data changes, allowing your templates to dynamically update based on the underlying data.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2>',11),p=s("g-template",{data:"val: 25;"},[s("svg",{viewBox:"0 0 100 100"},[s("circle",{"g-bind:r":"val",cx:"50",cy:"50",fill:"red"})])],-1),c=e(`<div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">val: 25;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">viewBox</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0 0 100 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">circle</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">g-bind:r</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data.val</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">cx</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">cy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">50</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">fill</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">circle</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">svg</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">g-template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1),r=[l,p,c];function i(d,y,D,F,h,u){return o(),t("div",null,r)}const b=a(n,[["render",i]]);export{m as __pageData,b as default};
