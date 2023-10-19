import{_ as a,o as e,c as t,Q as s}from"./chunks/framework.05b02974.js";const g=JSON.parse('{"title":"clipPath","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/clipPath.md","filePath":"reference/svg/lib/clipPath.md"}'),l={name:"reference/svg/lib/clipPath.md"},n=s('<h1 id="clippath" tabindex="-1">clipPath <a class="header-anchor" href="#clippath" aria-label="Permalink to &quot;clipPath&quot;">​</a></h1><p>The <code>clipPath</code> SVG element defines a clipping path, to be used by the <code>clip-path</code> property. A clipping path restricts the region to which paint can be applied.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">clipPath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;clipPath&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">clipPath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;clipPath&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;clipPath&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/clipPath" target="_blank" rel="noreferrer">mdn</a> | <a href="https://drafts.fxtf.org/css-masking-1/#ClipPathElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="clippathunits" tabindex="-1">.clipPathUnits() <a class="header-anchor" href="#clippathunits" aria-label="Permalink to &quot;.clipPathUnits()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">clipPath.</span><span style="color:#B392F0;">clipPathUnits</span><span style="color:#E1E4E8;">( unit )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">clipPath.</span><span style="color:#6F42C1;">clipPathUnits</span><span style="color:#24292E;">( unit )</span></span></code></pre></div><p>Set the coordinate system for the contents of the <code>clipPath</code> element.</p><ul><li><p><strong>argument</strong>: <code>{string} unit</code> Must be &#39;userSpaceOnUse&#39; | &#39;objectBoundingBox&#39;</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">clipPathUnits</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">clipPathUnits</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">clipPathUnits</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">clipPathUnits</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>clipPathUnits</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{string}</code> Current unit</p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./circle.html">circle</a> | <a href="./desc.html">desc</a> | <a href="./ellipse.html">ellipse</a> | <a href="./line.html">line</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./path.html">path</a> | <a href="./polygon.html">polygon</a> | <a href="./polyline.html">polyline</a> | <a href="./rect.html">rect</a> | <a href="./set.html">set</a> | <a href="./text.html">text</a> | <a href="./title.html">title</a> | <a href="./use.html">use</a>.</p></li></ul>',13),p=[n];function o(c,r,i,h,d,m){return e(),t("div",null,p)}const f=a(l,[["render",o]]);export{g as __pageData,f as default};
