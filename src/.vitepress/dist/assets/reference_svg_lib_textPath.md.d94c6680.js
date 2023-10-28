import{_ as s,o as e,c as a,Q as t}from"./chunks/framework.875adba1.js";const E=JSON.parse('{"title":"textPath","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/textPath.md","filePath":"reference/svg/lib/textPath.md"}'),o={name:"reference/svg/lib/textPath.md"},n=t('<h1 id="textpath" tabindex="-1">textPath <a class="header-anchor" href="#textpath" aria-label="Permalink to &quot;textPath&quot;">​</a></h1><p>To render text along the shape of a <code>path</code>, enclose the text in a <code>textPath</code> element that has an href attribute with a reference to the <code>path</code> element.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">textPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;textPath&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;textPath&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;textPath&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/textPath" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#text-TextPathElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="href" tabindex="-1">.href() <a class="header-anchor" href="#href" aria-label="Permalink to &quot;.href()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">( URLPath )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">( URLPath )</span></span></code></pre></div><p>Set the URL to the path or basic shape on which to render the text. If the <code>path</code> attribute is set, <code>href</code> has no effect.</p><ul><li><p><strong>argument</strong>: <code>{string} URLPath</code> URL to a path</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">href</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> textPath.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">href</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> textPath.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>href</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> Current URL to a path</li></ul><h2 id="lengthadjust" tabindex="-1">.lengthAdjust() <a class="header-anchor" href="#lengthadjust" aria-label="Permalink to &quot;.lengthAdjust()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">lengthAdjust</span><span style="color:#E1E4E8;">( mode )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">lengthAdjust</span><span style="color:#24292E;">( mode )</span></span></code></pre></div><p>Set where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.</p><ul><li><p><strong>argument</strong>: <code>{string} mode</code> Must be <code>spacing</code> | <code>spacingAndGlyphs</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lengthAdjust</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">lengthAdjust</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lengthAdjust</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">lengthAdjust</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>lengthAdjust</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="method" tabindex="-1">.method() <a class="header-anchor" href="#method" aria-label="Permalink to &quot;.method()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">( method )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">( method )</span></span></code></pre></div><p>Set which <code>method</code> to render individual glyphs along the path.</p><ul><li><p><strong>argument</strong>: <code>{string} method</code> Must be <code>align</code> | <code>stretch</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">method</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">method</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>method</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="path" tabindex="-1">.path() <a class="header-anchor" href="#path" aria-label="Permalink to &quot;.path()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">( path )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">( path )</span></span></code></pre></div><p>Set the <code>path</code> on which the values should be rendered.</p><ul><li><p><strong>argument</strong>: <code>{Array|string} path</code> The <code>path</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>path</code> current value.</p><ul><li><strong>returns</strong>: <code>{Array|string}</code></li></ul><h2 id="spacing" tabindex="-1">.spacing() <a class="header-anchor" href="#spacing" aria-label="Permalink to &quot;.spacing()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">spacing</span><span style="color:#E1E4E8;">( width )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">spacing</span><span style="color:#24292E;">( width )</span></span></code></pre></div><p>Set how space between glyphs should be handled.</p><ul><li><p><strong>argument</strong>: <code>{number} width</code> The <code>width</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">spacing</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">spacing</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">spacing</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">spacing</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>spacing</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="startoffset" tabindex="-1">.startOffset() <a class="header-anchor" href="#startoffset" aria-label="Permalink to &quot;.startOffset()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">startOffset</span><span style="color:#E1E4E8;">( offset )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">startOffset</span><span style="color:#24292E;">( offset )</span></span></code></pre></div><p>Set how far the beginning of the text should be offset from the beginning of the path.</p><ul><li><p><strong>argument</strong>: <code>{number} offset</code> The <code>offset</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">startOffset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">startOffset</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">startOffset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">startOffset</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>startOffset</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="textlength" tabindex="-1">.textLength() <a class="header-anchor" href="#textlength" aria-label="Permalink to &quot;.textLength()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">textPath.</span><span style="color:#B392F0;">textLength</span><span style="color:#E1E4E8;">( width )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">textPath.</span><span style="color:#6F42C1;">textLength</span><span style="color:#24292E;">( width )</span></span></code></pre></div><p>Set the width of the space into which the text will render.</p><ul><li><p><strong>argument</strong>: <code>{number} width</code> The <code>width</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">textLength</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">textLength</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textLength</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">textLength</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>textLength</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{number}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./text.html">text</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./a.html">a</a> | <a href="./animate.html">animate</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./set.html">set</a> | <a href="./title.html">title</a> | <a href="./tspan.html">tspan</a>.</p></li></ul>',55),l=[n];function p(c,r,i,d,h,g){return e(),a("div",null,l)}const u=s(o,[["render",p]]);export{E as __pageData,u as default};
