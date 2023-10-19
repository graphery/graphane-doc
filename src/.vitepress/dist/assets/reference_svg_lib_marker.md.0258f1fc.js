import{_ as e,o as s,c as a,Q as t}from"./chunks/framework.05b02974.js";const u=JSON.parse('{"title":"marker","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/marker.md","filePath":"reference/svg/lib/marker.md"}'),o={name:"reference/svg/lib/marker.md"},n=t('<h1 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker&quot;">​</a></h1><p>The <code>marker</code> element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given <code>path</code>, <code>line</code>, <code>polyline</code> or <code>polygon</code> element.</p><p>Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">marker</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;marker&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">marker</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;marker&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;marker&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/marker" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#painting-MarkerElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="markerheight" tabindex="-1">.markerHeight() <a class="header-anchor" href="#markerheight" aria-label="Permalink to &quot;.markerHeight()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">markerHeight</span><span style="color:#E1E4E8;">( height )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">markerHeight</span><span style="color:#24292E;">( height )</span></span></code></pre></div><p>Set this attribute defines the height of the marker viewport.</p><ul><li><p><strong>argument</strong>: <code>{number|string} height</code> The height value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">markerHeight</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">markerHeight</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">markerHeight</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">markerHeight</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>markerHeight</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="markerunits" tabindex="-1">.markerUnits() <a class="header-anchor" href="#markerunits" aria-label="Permalink to &quot;.markerUnits()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">markerUnits</span><span style="color:#E1E4E8;">( unit )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">markerUnits</span><span style="color:#24292E;">( unit )</span></span></code></pre></div><p>Set this attribute defines the coordinate system for the attributes <code>markerWidth</code>, <code>markerHeight</code> and the contents of the marker.</p><ul><li><p><strong>argument</strong>: <code>{string} unit</code> Must be <code>userSpaceOnUse</code> | <code>strokeWidth</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">markerUnits</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">markerUnits</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">markerUnits</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">markerUnits</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>markerUnits</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="markerwidth" tabindex="-1">.markerWidth() <a class="header-anchor" href="#markerwidth" aria-label="Permalink to &quot;.markerWidth()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">markerWidth</span><span style="color:#E1E4E8;">( width )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">markerWidth</span><span style="color:#24292E;">( width )</span></span></code></pre></div><p>Set this attribute defines the width of the marker viewport.</p><ul><li><p><strong>argument</strong>: <code>{number|string} width</code> The width value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">markerWidth</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">markerWidth</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">markerWidth</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">markerWidth</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>markerWidth</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="orient" tabindex="-1">.orient() <a class="header-anchor" href="#orient" aria-label="Permalink to &quot;.orient()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">orient</span><span style="color:#E1E4E8;">( orientation )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">orient</span><span style="color:#24292E;">( orientation )</span></span></code></pre></div><p>Set this attribute defines the <code>orient</code>ation of the marker relative to the shape it is attached to.</p><ul><li><p><strong>argument</strong>: <code>{string|number} orientation</code> Must be <code>auto</code> | <code>auto-start-reverse</code> | an angle | a number</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">orient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">orient</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">orient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">orient</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>orient</code> current value.</p><ul><li><strong>returns</strong>: <code>{string|number}</code></li></ul><h2 id="preserveaspectratio" tabindex="-1">.preserveAspectRatio() <a class="header-anchor" href="#preserveaspectratio" aria-label="Permalink to &quot;.preserveAspectRatio()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">preserveAspectRatio</span><span style="color:#E1E4E8;">( align )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">preserveAspectRatio</span><span style="color:#24292E;">( align )</span></span></code></pre></div><p>Set the <code>preserveAspectRatio</code> attribute. It indicates how an element with a <code>viewBox</code> providing a given aspect ratio must fit into a viewport with a different aspect ratio.</p><ul><li><p><strong>argument</strong>: <code>{string} align</code> Must be &#39;none&#39; | &#39;xMinYMin&#39; | &#39;xMidYMin&#39; | &#39;xMaxYMin&#39; | &#39;xMinYMid&#39; | &#39;xMidYMid&#39; (the default) | &#39;xMaxYMid&#39; | &#39;xMinYMax&#39; | &#39;xMidYMax&#39; | &#39;xMaxYMax&#39; and can be complemented with &#39;meet&#39; (the default) | &#39;slice&#39;</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">align</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">preserveAspectRatio</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">align</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">preserveAspectRatio</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>preserveAspectRatio</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> Current align configuration</li></ul><h2 id="refx" tabindex="-1">.refX() <a class="header-anchor" href="#refx" aria-label="Permalink to &quot;.refX()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">refX</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">refX</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set this attribute defines the <code>x</code> coordinate for the reference point of the marker.</p><ul><li><p><strong>argument</strong>: <code>{number} x</code> The x value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refX</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">refX</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refX</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">refX</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>refX</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="refy" tabindex="-1">.refY() <a class="header-anchor" href="#refy" aria-label="Permalink to &quot;.refY()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">marker.</span><span style="color:#B392F0;">refY</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">marker.</span><span style="color:#6F42C1;">refY</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set this attribute defines the <code>y</code> coordinate for the reference point of the marker.</p><ul><li><p><strong>argument</strong>: <code>{number} y</code> - The y value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">refY</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">refY</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">refY</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">refY</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>refY</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="viewbox" tabindex="-1">.viewBox() <a class="header-anchor" href="#viewbox" aria-label="Permalink to &quot;.viewBox()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">( minX, minY, width, height )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">( minX, minY, width, height )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute. It defines the position and dimension, in user space, of an SVG viewport. With four values specify a rectangle in user space which is mapped to the bounds of the viewport established for the SVG element.</p><ul><li><p><strong>argument</strong>: <code>{number} minX</code> x-axis min value</p></li><li><p><strong>argument</strong>: <code>{number} minY</code> y-axis min value</p></li><li><p><strong>argument</strong>: <code>{number} width</code> width value</p></li><li><p><strong>argument</strong>: <code>{number} height</code> height value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">( viewBoxArray )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">( viewBoxArray )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute with an array with four values.</p><ul><li><p><strong>argument</strong>: <code>{Array} viewBoxArray</code> Array with four numeric values</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">( viewBoxString )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">( viewBoxString )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute with a string.</p><ul><li><p><strong>argument</strong>: <code>{string} viewBoxString</code> Four numeric values separated by coma or space</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">viewBox</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">viewBox</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>viewBox</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{string}</code> four values separate by coma</p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./a.html">a</a> | <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./circle.html">circle</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./desc.html">desc</a> | <a href="./ellipse.html">ellipse</a> | <a href="./filter.html">filter</a> | <a href="./foreignObject.html">foreignObject</a> | <a href="./g.html">g</a> | <a href="./image.html">image</a> | <a href="./line.html">line</a> | <a href="./linearGradient.html">linearGradient</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./path.html">path</a> | <a href="./pattern.html">pattern</a> | <a href="./polygon.html">polygon</a> | <a href="./polyline.html">polyline</a> | <a href="./radialGradient.html">radialGradient</a> | <a href="./rect.html">rect</a> | <a href="./set.html">set</a> | <a href="./stop.html">stop</a> | <a href="./style.html">style</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a> | <a href="./title.html">title</a> | <a href="./use.html">use</a> | <a href="./view.html">view</a>.</p></li></ul>',69),l=[n];function r(p,c,i,d,h,g){return s(),a("div",null,l)}const m=e(o,[["render",r]]);export{u as __pageData,m as default};
