import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.11e53375.js";const u=JSON.parse('{"title":"radialGradient","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/radialGradient.md","filePath":"reference/svg/lib/radialGradient.md"}'),t={name:"reference/svg/lib/radialGradient.md"},o=n('<h1 id="radialgradient" tabindex="-1">radialGradient <a class="header-anchor" href="#radialgradient" aria-label="Permalink to &quot;radialGradient&quot;">​</a></h1><p>The <code>radialGradient</code> element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">radialGradient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;radialGradient&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">radialGradient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;radialGradient&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;radialGradient&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/radialGradient" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#pservers-RadialGradientElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="cx" tabindex="-1">.cx() <a class="header-anchor" href="#cx" aria-label="Permalink to &quot;.cx()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;"> ( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;"> ( x )</span></span></code></pre></div><p>Set this attribute defines the x coordinate of the end circle of the radial gradient.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x</code> The x value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>cx</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="cy" tabindex="-1">.cy() <a class="header-anchor" href="#cy" aria-label="Permalink to &quot;.cy()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set this attribute defines the y coordinate of the end circle of the radial gradient.</p><ul><li><p><strong>argument</strong>: <code>{number|string} y</code> The y value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">cy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">cy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>cy</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="fr" tabindex="-1">.fr() <a class="header-anchor" href="#fr" aria-label="Permalink to &quot;.fr()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">fr</span><span style="color:#E1E4E8;">( radius )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">fr</span><span style="color:#24292E;">( radius )</span></span></code></pre></div><p>Set this attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% <code>stop</code> is mapped to the perimeter of the start circle.</p><ul><li><p><strong>argument</strong>: <code>{number|string} radius</code> The radius value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fr</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">fr</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fr</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">fr</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>fr</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="fx" tabindex="-1">.fx() <a class="header-anchor" href="#fx" aria-label="Permalink to &quot;.fx()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">fx</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">fx</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set this attribute defines the x coordinate of the start circle of the radial gradient.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x</code> The x value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">fx</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">fx</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>fx</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="fy" tabindex="-1">.fy() <a class="header-anchor" href="#fy" aria-label="Permalink to &quot;.fy()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">fy</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">fy</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set this attribute defines the y coordinate of the start circle of the radial gradient.</p><ul><li><p><strong>argument</strong>: <code>{number|string} y</code> The y value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fy</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">fy</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fy</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">fy</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>fy</code> current value.</p><ul><li><strong>returns</strong>: <code>{number}</code></li></ul><h2 id="gradientunits" tabindex="-1">.gradientUnits() <a class="header-anchor" href="#gradientunits" aria-label="Permalink to &quot;.gradientUnits()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">gradientUnits</span><span style="color:#E1E4E8;">( unit )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">gradientUnits</span><span style="color:#24292E;">( unit )</span></span></code></pre></div><p>Set this attribute defines the coordinate system for attributes <code>cx</code>, <code>cy</code>, <code>r</code>, <code>fx</code>, <code>fy</code>, and <code>fr</code>.</p><ul><li><p><strong>argument</strong>: <code>{string} unit</code> Must be <code>userSpaceOnUse</code> | <code>objectBoundingBox</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gradientUnits</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">gradientUnits</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gradientUnits</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">gradientUnits</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>gradientUnits</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="gradienttransform" tabindex="-1">.gradientTransform() <a class="header-anchor" href="#gradienttransform" aria-label="Permalink to &quot;.gradientTransform()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">gradientTransform</span><span style="color:#E1E4E8;">( transformFunction )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">gradientTransform</span><span style="color:#24292E;">( transformFunction )</span></span></code></pre></div><p>Set this attribute provides additional transformation to the gradient coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{string} transformFunction</code> The transform function that affects to the element</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gradientTransform</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">gradientTransform</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gradientTransform</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">gradientTransform</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>gradientTransform</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="href" tabindex="-1">.href() <a class="header-anchor" href="#href" aria-label="Permalink to &quot;.href()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">( url )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">( url )</span></span></code></pre></div><p>Set this attribute defines a reference to another <code>linearGradient</code> element that will be used as a template.</p><ul><li><p><strong>argument</strong>: <code>{string} url</code> A reference to a different <code>linearGradient</code> or <code>radialGradient</code> element</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">href</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">href</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>href</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="r" tabindex="-1">.r() <a class="header-anchor" href="#r" aria-label="Permalink to &quot;.r()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">( radius )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">( radius )</span></span></code></pre></div><p>Set this attribute defines the radius of the end circle of the radial gradient. The gradient will be drawn such that the 100% <code>stop</code> is mapped to the perimeter of the end circle.</p><ul><li><p><strong>argument</strong>: <code>{number|string} radius</code> The radius (length or percentage) of the end circle for the radial gradient</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">r</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">r</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>r</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="spreadmethod" tabindex="-1">.spreadMethod() <a class="header-anchor" href="#spreadmethod" aria-label="Permalink to &quot;.spreadMethod()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">radialGradient.</span><span style="color:#B392F0;">spreadMethod</span><span style="color:#E1E4E8;">( method )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">radialGradient.</span><span style="color:#6F42C1;">spreadMethod</span><span style="color:#24292E;">( method )</span></span></code></pre></div><p>Set this attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.</p><ul><li><p><strong>argument</strong>: <code>{string} method</code> Must be <code>pad</code> | <code>reflect</code> | <code>repeat</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">spreadMethod</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">spreadMethod</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">spreadMethod</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">spreadMethod</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>spreadMethod</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{string}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./set.html">set</a> | <a href="./stop.html">stop</a> | <a href="./title.html">title</a>.</p></li></ul>',76),l=[o];function p(r,c,i,d,h,g){return a(),e("div",null,l)}const E=s(t,[["render",p]]);export{u as __pageData,E as default};