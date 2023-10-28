import{_ as s,o as a,c as t,Q as n}from"./chunks/framework.875adba1.js";const h=JSON.parse('{"title":"Data","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/data/index.md","filePath":"reference/data/index.md"}'),l={name:"reference/data/index.md"},o=n(`<h1 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data&quot;">​</a></h1><p><code>&lt;script type=&quot;data&quot;&gt;&lt;/script&gt;</code> and <code>data-src</code> attribute are designed to load values into the <code>.data</code> property of <code>g-template</code> component.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> type=&quot;data&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;continent&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#9ECBFF;">&quot;population&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;Asia&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">4694576167</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;Africa&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">1393676444</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;Europe&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">745173774</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;North America&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">595783465</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;South America&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">434254119</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;Oceania&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">44491724</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;Antarctica&quot;</span><span style="color:#E1E4E8;">;</span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> type=&quot;data&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;continent&quot;</span><span style="color:#24292E;">;</span><span style="color:#032F62;">&quot;population&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;Asia&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">4694576167</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;Africa&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">1393676444</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;Europe&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">745173774</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;North America&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">595783465</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;South America&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">434254119</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;Oceania&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">44491724</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;Antarctica&quot;</span><span style="color:#24292E;">;</span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> type=&quot;data&quot; src=&quot;/data.csv&quot;&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> type=&quot;data&quot; src=&quot;/data.csv&quot;&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">data-src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/data.csv&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">data-src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/data.csv&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h2><p>Component content:</p><ul><li><a href="./content.html">content</a> - can include CSV, JSON or JS.</li></ul><h2 id="script-type-data" tabindex="-1"><code>script type=&quot;data&quot;</code> <a class="header-anchor" href="#script-type-data" aria-label="Permalink to &quot;\`script type=&quot;data&quot;\`&quot;">​</a></h2><p>Component attributes:</p><ul><li><code>type</code> - mandatory attribute with value <code>&quot;data&quot;</code>.</li><li><a href="./src.html"><code>src</code></a> - path to external data resource.</li></ul><h2 id="g-template-data-src-file" tabindex="-1"><code>g-template data-src=&quot;file&quot;</code> <a class="header-anchor" href="#g-template-data-src-file" aria-label="Permalink to &quot;\`g-template data-src=&quot;file&quot;\`&quot;">​</a></h2><p>Component attribute:</p><ul><li><a href="./src.html"><code>data-src</code></a> - path to external data resource.</li></ul><h2 id="g-template-data-key-value" tabindex="-1"><code>g-template data=&quot;key: value&quot;</code> <a class="header-anchor" href="#g-template-data-key-value" aria-label="Permalink to &quot;\`g-template data=&quot;key: value&quot;\`&quot;">​</a></h2><p>Component attribute:</p><ul><li><a href="./attribute.html"><code>data</code></a> - simple key-value data.</li></ul><h2 id="g-template-data" tabindex="-1"><code>g-template .data</code> <a class="header-anchor" href="#g-template-data" aria-label="Permalink to &quot;\`g-template .data\`&quot;">​</a></h2><p>Component property:</p><ul><li><a href="./property.html"><code>.data</code></a> - reactive data object.</li></ul>`,20),p=[o];function e(c,r,E,y,i,d){return a(),t("div",null,p)}const q=s(l,[["render",e]]);export{h as __pageData,q as default};
