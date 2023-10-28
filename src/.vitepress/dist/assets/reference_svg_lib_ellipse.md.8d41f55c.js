import{_ as s,o as e,c as a,Q as l}from"./chunks/framework.875adba1.js";const E=JSON.parse('{"title":"ellipse","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/ellipse.md","filePath":"reference/svg/lib/ellipse.md"}'),n={name:"reference/svg/lib/ellipse.md"},o=l('<h1 id="ellipse" tabindex="-1">ellipse <a class="header-anchor" href="#ellipse" aria-label="Permalink to &quot;ellipse&quot;">​</a></h1><p>The <code>ellipse</code> element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ellipse</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ellipse&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ellipse</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ellipse&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;ellipse&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/ellipse" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#shapes-EllipseElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="cx" tabindex="-1">.cx() <a class="header-anchor" href="#cx" aria-label="Permalink to &quot;.cx()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ellipse.</span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ellipse.</span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set the x-axis position of the ellipse.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x</code> x-axis length or percentage</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>cx</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code> current x-axis value</li></ul><h2 id="cy" tabindex="-1">.cy() <a class="header-anchor" href="#cy" aria-label="Permalink to &quot;.cy()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ellipse.</span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ellipse.</span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set the y-axis position of the ellipse.</p><ul><li><p><strong>argument</strong>: <code>{number|string} y</code> y-axis length or percentage</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>cy</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code> current y-axis value</li></ul><h2 id="rx" tabindex="-1">.rx() <a class="header-anchor" href="#rx" aria-label="Permalink to &quot;.rx()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ellipse.</span><span style="color:#B392F0;">rx</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ellipse.</span><span style="color:#6F42C1;">rx</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set the radius of the ellipse on the x-axis.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x</code> x-axis radius length or percentage</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">rx</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">rx</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>rx</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code> current x-axis radius value</li></ul><h2 id="ry" tabindex="-1">.ry() <a class="header-anchor" href="#ry" aria-label="Permalink to &quot;.ry()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">ellipse.</span><span style="color:#B392F0;">ry</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">ellipse.</span><span style="color:#6F42C1;">ry</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set the radius of the ellipse on the y-axis.</p><ul><li><p><strong>argument</strong>: <code>{number|percentage} y</code> y-axis radius length or percentage</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">ry</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">ry</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>ry</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code> current y-axis radius value</li></ul><h2 id="pathlength" tabindex="-1">.pathLength() <a class="header-anchor" href="#pathlength" aria-label="Permalink to &quot;.pathLength()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">pathLength</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">pathLength</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the total length for the path of this figure, in user units.</p><ul><li><p><strong>returns</strong>: <code>{number}</code> total path length</p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./set.html">set</a> | <a href="./title.html">title</a>.</p></li></ul>',38),t=[o];function p(r,c,i,d,h,y){return e(),a("div",null,t)}const u=s(n,[["render",p]]);export{E as __pageData,u as default};
