import{_ as e,c as t,o as s,U as i}from"./chunks/framework.on6qGByC.js";const u=JSON.parse('{"title":"pattern","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/pattern.md","filePath":"reference/svg/lib/pattern.md"}'),a={name:"reference/svg/lib/pattern.md"},n=i('<h1 id="pattern" tabindex="-1">pattern <a class="header-anchor" href="#pattern" aria-label="Permalink to &quot;pattern&quot;">​</a></h1><p>The <code>pattern</code> element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals (&quot;tiled&quot;) to cover an area.</p><p>The <code>pattern</code> is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parentElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pattern&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;pattern&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/pattern" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#pservers-PatternElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="height" tabindex="-1">.height() <a class="header-anchor" href="#height" aria-label="Permalink to &quot;.height()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( height )</span></span></code></pre></div><p>Set this attribute determines the <code>height</code> of the pattern tile.</p><ul><li><p><strong>argument</strong>: <code>{number} height</code> The <code>height</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>height</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="href" tabindex="-1">.href() <a class="header-anchor" href="#href" aria-label="Permalink to &quot;.href()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( URLPattern )</span></span></code></pre></div><p>Set the href attribute. It defines a URL referencing to a template pattern that provides default values for this <code>pattern</code>.</p><ul><li><p><strong>argument</strong>: <code>{string} URLPattern</code> URL to a pattern</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>href</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> Current URL to a pattern</li></ul><h2 id="patterncontentunits" tabindex="-1">.patternContentUnits() <a class="header-anchor" href="#patterncontentunits" aria-label="Permalink to &quot;.patternContentUnits()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patternContentUnits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( contentUnit )</span></span></code></pre></div><p>Set this attribute defines the coordinate system for the contents of the <code>pattern</code>.</p><ul><li><p><strong>argument</strong>: <code>{string} contentUnit</code> Must be <code>userSpaceOnUse</code> | <code>objectBoundingBox</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> patternContentUnits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patternContentUnits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>patternContentUnits</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="patterntransform" tabindex="-1">.patternTransform() <a class="header-anchor" href="#patterntransform" aria-label="Permalink to &quot;.patternTransform()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patternTransform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( transform )</span></span></code></pre></div><p>Set this attribute contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{string} transform</code> The transform functions list</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> patternTransform</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patternTransform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>patternTransform</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="patternunits" tabindex="-1">.patternUnits() <a class="header-anchor" href="#patternunits" aria-label="Permalink to &quot;.patternUnits()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patternUnits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( unit )</span></span></code></pre></div><p>Set this attribute defines the coordinate system for attributes <code>x</code>, <code>y</code>, <code>width</code>, and <code>height</code>.</p><ul><li><p><strong>argument</strong>: <code>{string} unit</code> Must be <code>userSpaceOnUse</code> | <code>objectBoundingBox</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> patternUnits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patternUnits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>patternUnits</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="preserveaspectratio" tabindex="-1">.preserveAspectRatio() <a class="header-anchor" href="#preserveaspectratio" aria-label="Permalink to &quot;.preserveAspectRatio()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preserveAspectRatio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( align )</span></span></code></pre></div><p>Set the <code>preserveAspectRatio</code> attribute. It indicates how an element with a <code>viewBox</code> providing a given aspect ratio must fit into a viewport with a different aspect ratio.</p><ul><li><p><strong>argument</strong>: <code>{string} align</code> Must be &#39;none&#39; | &#39;xMinYMin&#39; | &#39;xMidYMin&#39; | &#39;xMaxYMin&#39; | &#39;xMinYMid&#39; | &#39;xMidYMid&#39; (the default) | &#39;xMaxYMid&#39; | &#39;xMinYMax&#39; | &#39;xMidYMax&#39; | &#39;xMaxYMax&#39; and can be complemented with &#39;meet&#39; (the default) | &#39;slice&#39;</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> align</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preserveAspectRatio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>preserveAspectRatio</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> Current align configuration</li></ul><h2 id="viewbox" tabindex="-1">.viewBox() <a class="header-anchor" href="#viewbox" aria-label="Permalink to &quot;.viewBox()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( minX, minY, width, height )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute. It defines the position and dimension, in user space, of an SVG viewport. With four values specify a rectangle in user space which is mapped to the bounds of the viewport established for the SVG element.</p><ul><li><p><strong>argument</strong>: <code>{number} minX</code> x-axis min value</p></li><li><p><strong>argument</strong>: <code>{number} minY</code> y-axis min value</p></li><li><p><strong>argument</strong>: <code>{number} width</code> width value</p></li><li><p><strong>argument</strong>: <code>{number} height</code> height value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( viewBoxArray )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute with an array with four values.</p><ul><li><p><strong>argument</strong>: <code>{Array} viewBoxArray</code> Array with four numeric values</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( viewBoxString )</span></span></code></pre></div><p>Set the <code>viewBox</code> attribute with a string.</p><ul><li><p><strong>argument</strong>: <code>{string} viewBoxString</code> Four numeric values separated by coma or space</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> viewBox</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>viewBox</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> four values separate by coma</li></ul><h2 id="width" tabindex="-1">.width() <a class="header-anchor" href="#width" aria-label="Permalink to &quot;.width()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( width )</span></span></code></pre></div><p>Set this attribute determines the <code>width</code> of the pattern tile.</p><ul><li><p><strong>argument</strong>: <code>{number} width</code> The <code>width</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>width</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="x" tabindex="-1">.x() <a class="header-anchor" href="#x" aria-label="Permalink to &quot;.x()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( x )</span></span></code></pre></div><p>Set this attribute determines the <code>x</code> coordinate shift of the pattern tile.</p><ul><li><p><strong>argument</strong>: <code>{number} x</code> The <code>x</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>x</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="y" tabindex="-1">.y() <a class="header-anchor" href="#y" aria-label="Permalink to &quot;.y()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pattern.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( y )</span></span></code></pre></div><p>Set this attribute determines the <code>y</code> coordinate shift of the pattern tile.</p><ul><li><p><strong>argument</strong>: <code>{number} y</code> The <code>y</code> value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>y</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{number}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./a.html">a</a> | <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./circle.html">circle</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./desc.html">desc</a> | <a href="./ellipse.html">ellipse</a> | <a href="./filter.html">filter</a> | <a href="./foreignObject.html">foreignObject</a> | <a href="./g.html">g</a> | <a href="./image.html">image</a> | <a href="./line.html">line</a> | <a href="./linearGradient.html">linearGradient</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./path.html">path</a> | <a href="./pattern.html">pattern</a> | <a href="./polygon.html">polygon</a> | <a href="./polyline.html">polyline</a> | <a href="./radialGradient.html">radialGradient</a> | <a href="./rect.html">rect</a> | <a href="./set.html">set</a> | <a href="./stop.html">stop</a> | <a href="./style.html">style</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a> | <a href="./title.html">title</a> | <a href="./use.html">use</a> | <a href="./view.html">view</a>.</p></li></ul>',83),l=[n];function h(r,p,o,d,c,g){return s(),t("div",null,l)}const m=e(a,[["render",h]]);export{u as __pageData,m as default};