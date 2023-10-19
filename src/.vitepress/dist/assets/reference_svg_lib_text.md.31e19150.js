import{_ as s,o as e,c as a,Q as t}from"./chunks/framework.05b02974.js";const u=JSON.parse('{"title":"text","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/text.md","filePath":"reference/svg/lib/text.md"}'),n={name:"reference/svg/lib/text.md"},o=t('<h1 id="text" tabindex="-1">text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;text&quot;">​</a></h1><p>The SVG <code>text</code> element draws a graphics element consisting of text. It&#39;s possible to apply a gradient, pattern, clipping path, mask, or filter to <code>text</code>, like any other SVG graphics element.</p><p>If text is included in SVG not inside of a <code>text</code> element, it is not rendered. This is different than being hidden by default, as setting the display property won&#39;t show the text.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">text</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;text&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;text&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/text" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#text-TextElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="x" tabindex="-1">.x() <a class="header-anchor" href="#x" aria-label="Permalink to &quot;.x()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set the <code>x</code> coordinate of the starting point of the te<code>x</code>t baseline.</p><ul><li><p><strong>argument</strong>: <code>{number} x</code> The <code>x</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>x</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="y" tabindex="-1">.y() <a class="header-anchor" href="#y" aria-label="Permalink to &quot;.y()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set the <code>y</code> coordinate of the starting point of the text baseline.</p><ul><li><p><strong>argument</strong>: <code>{number} y</code> The <code>y</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>y</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="dx" tabindex="-1">.dx() <a class="header-anchor" href="#dx" aria-label="Permalink to &quot;.dx()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">dx</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">dx</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set shifts the text position horizontally from a previous text element.</p><ul><li><p><strong>argument</strong>: <code>{number} x</code> The <code>x</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">dx</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">dx</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>dx</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="dy" tabindex="-1">.dy() <a class="header-anchor" href="#dy" aria-label="Permalink to &quot;.dy()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">dy</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">dy</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set shifts the text position vertically from a previous text element.</p><ul><li><p><strong>argument</strong>: <code>{number} y</code> The <code>y</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">dy</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">dy</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>dy</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="rotate" tabindex="-1">.rotate() <a class="header-anchor" href="#rotate" aria-label="Permalink to &quot;.rotate()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">rotate</span><span style="color:#E1E4E8;">( angle )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">rotate</span><span style="color:#24292E;">( angle )</span></span></code></pre></div><p>Set rotates orientation of each individual glyph. Can rotate glyphs individually.</p><ul><li><p><strong>argument</strong>: <code>{number|string} angle</code> The <code>angle</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rotate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">rotate</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">rotate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">rotate</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>rotate</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="lengthadjust" tabindex="-1">.lengthAdjust() <a class="header-anchor" href="#lengthadjust" aria-label="Permalink to &quot;.lengthAdjust()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">lengthAdjust</span><span style="color:#E1E4E8;">( adjust )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">lengthAdjust</span><span style="color:#24292E;">( adjust )</span></span></code></pre></div><p>Set how the text is stretched or compressed to fit the width defined by the textLength attribute.</p><ul><li><p><strong>argument</strong>: <code>{string} adjust</code> Must be <code>spacing</code> | <code>spacingAndGlyphs</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lengthAdjust</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">lengthAdjust</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lengthAdjust</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">lengthAdjust</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>lengthAdjust</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="textlength" tabindex="-1">.textLength() <a class="header-anchor" href="#textlength" aria-label="Permalink to &quot;.textLength()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">text.</span><span style="color:#B392F0;">textLength</span><span style="color:#E1E4E8;">( width )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">text.</span><span style="color:#6F42C1;">textLength</span><span style="color:#24292E;">( width )</span></span></code></pre></div><p>Set a width that the text should be scaled to fit.</p><ul><li><p><strong>argument</strong>: <code>{number|string} width</code> The <code>width</code> length</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">textLength</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">textLength</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">textLength</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">textLength</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>textLength</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{number|string}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./a.html">a</a> | <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./set.html">set</a> | <a href="./text.html">text</a> | <a href="./textPath.html">textPath</a> | <a href="./title.html">title</a> | <a href="./tspan.html">tspan</a>.</p></li></ul>',56),l=[o];function p(c,r,i,d,h,y){return e(),a("div",null,l)}const E=s(n,[["render",p]]);export{u as __pageData,E as default};
