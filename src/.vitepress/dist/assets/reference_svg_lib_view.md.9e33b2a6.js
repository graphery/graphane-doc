import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.11e53375.js";const u=JSON.parse('{"title":"view","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/view.md","filePath":"reference/svg/lib/view.md"}'),o={name:"reference/svg/lib/view.md"},n=t('<h1 id="view" tabindex="-1">view <a class="header-anchor" href="#view" aria-label="Permalink to &quot;view&quot;">​</a></h1><p>A view is a defined way to view the image, like a zoom level or a detail view.</p><p>This element implements the SVGViewElement interface.</p><p></p><p></p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;view&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">view</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;view&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;view&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/view" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#linking-ViewElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="viewbox" tabindex="-1">.viewBox() <a class="header-anchor" href="#viewbox" aria-label="Permalink to &quot;.viewBox()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">( minX, minY, width, height )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">( minX, minY, width, height )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute. It defines the position and dimension, in user space, of an SVG viewport. With four values specify a rectangle in user space which is mapped to the bounds of the viewport established for the SVG element.</p><ul><li><p><strong>argument</strong>: <code>{number} minX</code> x-axis min value</p></li><li><p><strong>argument</strong>: <code>{number} minY</code> y-axis min value</p></li><li><p><strong>argument</strong>: <code>{number} width</code> width value</p></li><li><p><strong>argument</strong>: <code>{number} height</code> height value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">( viewBoxArray )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">( viewBoxArray )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute with an array with four values.</p><ul><li><p><strong>argument</strong>: <code>{Array} viewBoxArray</code> Array with four numeric values</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">( viewBoxString )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">( viewBoxString )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute with a string.</p><ul><li><p><strong>argument</strong>: <code>{string} viewBoxString</code> Four numeric values separated by coma or space</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewBox</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewBox</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>viewBox</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> four values separate by coma</li></ul><h2 id="preserveaspectratio" tabindex="-1">.preserveAspectRatio() <a class="header-anchor" href="#preserveaspectratio" aria-label="Permalink to &quot;.preserveAspectRatio()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">preserveAspectRatio</span><span style="color:#E1E4E8;">( align )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">preserveAspectRatio</span><span style="color:#24292E;">( align )</span></span></code></pre></div><p>Set the <code>preserveAspectRatio</code> attribute. It indicates how an element with a <code>viewBox</code> providing a given aspect ratio must fit into a viewport with a different aspect ratio.</p><ul><li><p><strong>argument</strong>: <code>{string} align</code> Must be &#39;none&#39; | &#39;xMinYMin&#39; | &#39;xMidYMin&#39; | &#39;xMaxYMin&#39; | &#39;xMinYMid&#39; | &#39;xMidYMid&#39; (the default) | &#39;xMaxYMid&#39; | &#39;xMinYMax&#39; | &#39;xMidYMax&#39; | &#39;xMaxYMax&#39; and can be complemented with &#39;meet&#39; (the default) | &#39;slice&#39;</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">align</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">preserveAspectRatio</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">align</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">preserveAspectRatio</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>preserveAspectRatio</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{string}</code> Current align configuration</p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./title.html">title</a>.</p></li></ul>',29),l=[n];function p(r,i,c,d,h,g){return s(),a("div",null,l)}const y=e(o,[["render",p]]);export{u as __pageData,y as default};