import{_ as s,o as e,c as t,Q as a}from"./chunks/framework.875adba1.js";const m=JSON.parse('{"title":"script type=\\"methods","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/methods/index.md","filePath":"reference/methods/index.md"}'),n={name:"reference/methods/index.md"},o=a(`<h1 id="script-type-methods" tabindex="-1"><code>script type=&quot;methods</code> <a class="header-anchor" href="#script-type-methods" aria-label="Permalink to &quot;\`script type=&quot;methods\`&quot;">​</a></h1><p><code>script type=&quot;methods&quot;</code> and <code>methods-src</code> attribute are specifically designed to insert methods into the <code>g-template</code> component.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> type=&quot;methods&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">message</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">alert</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello world&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> type=&quot;methods&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">message</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">alert</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello world&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h3><p>Component content.</p><ul><li><a href="./content.html">content</a> - the source code with the Javascript functions.</li></ul><h3 id="attribute" tabindex="-1">Attribute <a class="header-anchor" href="#attribute" aria-label="Permalink to &quot;Attribute&quot;">​</a></h3><p>Component attribute.</p><ul><li><a href="./src.html">src</a> - the path to the external resource with the Javascript object with the methods.</li></ul><h2 id="property" tabindex="-1">Property <a class="header-anchor" href="#property" aria-label="Permalink to &quot;Property&quot;">​</a></h2><p>Component property:</p><ul><li><a href="./property.html"><code>.methods</code></a> - object of <code>g-template</code>with all functions defined as methods.</li></ul>`,12),l=[o];function p(c,r,i,d,h,E){return e(),t("div",null,l)}const u=s(n,[["render",p]]);export{m as __pageData,u as default};
