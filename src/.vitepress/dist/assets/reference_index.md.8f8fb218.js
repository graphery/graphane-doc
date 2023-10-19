import{_ as s,o as a,c as t,Q as e}from"./chunks/framework.05b02974.js";const u=JSON.parse('{"title":"g-template","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/index.md","filePath":"reference/index.md"}'),n={name:"reference/index.md"},l=e(`<h1 id="g-template" tabindex="-1"><code>g-template</code> <a class="header-anchor" href="#g-template" aria-label="Permalink to &quot;\`g-template\`&quot;">​</a></h1><p>The following is a description of the API of <code>g-template</code> component of Graphane. This component is the main element for generating graphics using a declarative SVG template and reactive data.</p><h2 id="content" tabindex="-1">Content <a class="header-anchor" href="#content" aria-label="Permalink to &quot;Content&quot;">​</a></h2><p>With embebed elements, this is its anatomy:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;                         </span></span>
<span class="line"><span style="color:#E1E4E8;">    ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> type=&quot;data&quot; src=&quot;...&quot;&gt;          </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> type=&quot;methods&quot; src=&quot;...&quot;&gt; </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;                         </span></span>
<span class="line"><span style="color:#24292E;">    ...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> type=&quot;data&quot; src=&quot;...&quot;&gt;          </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> type=&quot;methods&quot; src=&quot;...&quot;&gt; </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li><a href="./svg/"><code>svg</code></a> - SVG template.</li><li><a href="./data/"><code>script type=&quot;data&quot;</code></a> - JSON o CSV content.</li><li><a href="./methods/"><code>script type=&quot;methods&quot;</code></a> - Javascript with functions.</li></ul><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><p>With linked elements, this is its anatomy:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">svg-src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">            </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data-src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">           </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">methods-src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;...&quot;</span><span style="color:#E1E4E8;">      </span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">svg-src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">            </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data-src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">           </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">methods-src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;...&quot;</span><span style="color:#24292E;">      </span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ul><li><a href="./svg/src.html"><code>svg-src</code></a> - SVG template.</li><li><a href="./data/src.html"><code>data-src</code></a> - JSON o CSV resource.</li><li><a href="./methods/src.html"><code>methods-src</code></a> - Javascript with functions.</li></ul><p>Optionally, is possible to use a <code>data</code> attribute for simple data:</p><ul><li><a href="./data/attribute.html"><code>data</code></a> - data with format key-value separated with <code>;</code> or <code>,</code>.</li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>The componente has these properties:</p><ul><li><a href="./svg/property.html"><code>.svg</code></a> - reference to the <a href="./svg/lib/">wrapped SVG</a> rendered.</li><li><a href="./data/property.html"><code>.data</code></a> - the data object. If the data is changed, the template is updated.</li><li><a href="./methods/property.html"><code>.methods</code></a> - all functions defined with <code>script type=&quot;methods&quot;</code> or <code>methods-src</code>.</li></ul>`,15),o=[l];function p(c,r,i,E,d,y){return a(),t("div",null,o)}const g=s(n,[["render",p]]);export{u as __pageData,g as default};
