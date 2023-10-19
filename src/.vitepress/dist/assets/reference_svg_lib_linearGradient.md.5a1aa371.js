import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.05b02974.js";const u=JSON.parse('{"title":"linearGradient","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/linearGradient.md","filePath":"reference/svg/lib/linearGradient.md"}'),t={name:"reference/svg/lib/linearGradient.md"},o=n('<h1 id="lineargradient" tabindex="-1">linearGradient <a class="header-anchor" href="#lineargradient" aria-label="Permalink to &quot;linearGradient&quot;">​</a></h1><p>The <code>linearGradient</code> element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">linearGradient</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;linearGradient&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">linearGradient</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;linearGradient&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;linearGradient&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/linearGradient" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#pservers-LinearGradientElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="gradientunits" tabindex="-1">.gradientUnits() <a class="header-anchor" href="#gradientunits" aria-label="Permalink to &quot;.gradientUnits()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">gradientUnits</span><span style="color:#E1E4E8;">( unit )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">gradientUnits</span><span style="color:#24292E;">( unit )</span></span></code></pre></div><p>Set this attribute defines the coordinate system for attributes <code>x1</code>, <code>x2</code>, <code>y1</code>, <code>y2</code>.</p><ul><li><p><strong>argument</strong>: <code>{string} unit</code> Must be <code>userSpaceOnUse</code> | <code>objectBoundingBox</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gradientUnits</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">gradientUnits</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gradientUnits</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">gradientUnits</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>gradientUnits</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="gradienttransform" tabindex="-1">.gradientTransform() <a class="header-anchor" href="#gradienttransform" aria-label="Permalink to &quot;.gradientTransform()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">gradientTransform</span><span style="color:#E1E4E8;">( transformFunction )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">gradientTransform</span><span style="color:#24292E;">( transformFunction )</span></span></code></pre></div><p>Set this attribute provides additional transformation to the gradient coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{string} transformFunction</code> The transform function that affects to the element</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gradientTransform</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">gradientTransform</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gradientTransform</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">gradientTransform</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>gradientTransform</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="href" tabindex="-1">.href() <a class="header-anchor" href="#href" aria-label="Permalink to &quot;.href()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">( referenceToLinearGradient )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">( referenceToLinearGradient )</span></span></code></pre></div><p>Set the <code>href</code> attribute. It defines a reference to another <code>linearGradient</code> element that will be used as a template.</p><ul><li><p><strong>argument</strong>: <code>{string} referenceToLinearGradient</code> URL to another LinearGradient</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">href</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> linearGradient.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">href</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> linearGradient.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>href</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> URL to another LinearGradient</li></ul><h2 id="spreadmethod" tabindex="-1">.spreadMethod() <a class="header-anchor" href="#spreadmethod" aria-label="Permalink to &quot;.spreadMethod()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">spreadMethod</span><span style="color:#E1E4E8;">( method )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">spreadMethod</span><span style="color:#24292E;">( method )</span></span></code></pre></div><p>Set this attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.</p><ul><li><p><strong>argument</strong>: <code>{string} method</code> Must be <code>pad</code> | <code>reflect</code> | <code>repeat</code></p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">spreadMethod</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">spreadMethod</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">spreadMethod</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">spreadMethod</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>spreadMethod</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="x1" tabindex="-1">.x1() <a class="header-anchor" href="#x1" aria-label="Permalink to &quot;.x1()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">x1</span><span style="color:#E1E4E8;">( x1 )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">x1</span><span style="color:#24292E;">( x1 )</span></span></code></pre></div><p>Set this attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x1</code> The x1 value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">x1</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">x1</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>x1</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="x2" tabindex="-1">.x2() <a class="header-anchor" href="#x2" aria-label="Permalink to &quot;.x2()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">x2</span><span style="color:#E1E4E8;">( x2 )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">x2</span><span style="color:#24292E;">( x2 )</span></span></code></pre></div><p>Set this attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x2</code> The x2 value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">x2</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">x2</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>x2</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="y1" tabindex="-1">.y1() <a class="header-anchor" href="#y1" aria-label="Permalink to &quot;.y1()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">y1</span><span style="color:#E1E4E8;">( y1 )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">y1</span><span style="color:#24292E;">( y1 )</span></span></code></pre></div><p>Set this attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.</p><ul><li><p><strong>argument</strong>: <code>{number|string} y1</code> The y1 value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">y1</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">y1</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">y1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">y1</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>y1</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="y2" tabindex="-1">.y2() <a class="header-anchor" href="#y2" aria-label="Permalink to &quot;.y2()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">linearGradient.</span><span style="color:#B392F0;">y2</span><span style="color:#E1E4E8;">( y2 )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">linearGradient.</span><span style="color:#6F42C1;">y2</span><span style="color:#24292E;">( y2 )</span></span></code></pre></div><p>Set this attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.</p><ul><li><p><strong>argument</strong>: <code>{number|string} y2</code> The y2 value (length or percentage) `</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">y2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">y2</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">y2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">y2</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>y2</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{number|string}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./set.html">set</a> | <a href="./stop.html">stop</a> | <a href="./title.html">title</a>.</p></li></ul>',62),l=[o];function p(r,c,i,d,h,g){return e(),a("div",null,l)}const E=s(t,[["render",p]]);export{u as __pageData,E as default};
