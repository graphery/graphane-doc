import{_ as s,o as e,c as a,Q as t}from"./chunks/framework.11e53375.js";const m=JSON.parse('{"title":"polygon","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/polygon.md","filePath":"reference/svg/lib/polygon.md"}'),o={name:"reference/svg/lib/polygon.md"},n=t('<h1 id="polygon" tabindex="-1">polygon <a class="header-anchor" href="#polygon" aria-label="Permalink to &quot;polygon&quot;">​</a></h1><p>The <code>polygon</code> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.</p><p>For open shapes, see the <code>polyline</code> element.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">polygon</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;polygon&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">polygon</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;polygon&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;polygon&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/polygon" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#shapes-PolygonElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="points" tabindex="-1">.points() <a class="header-anchor" href="#points" aria-label="Permalink to &quot;.points()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">polygon.</span><span style="color:#B392F0;">points</span><span style="color:#E1E4E8;">( points )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">polygon.</span><span style="color:#6F42C1;">points</span><span style="color:#24292E;">( points )</span></span></code></pre></div><p>Set this attribute defines the list of <code>points</code> (pairs of x,y absolute coordinates) required to draw the polygon.</p><ul><li><p><strong>argument</strong>: <code>{Array&lt;Array&lt;number,number&gt;&gt;|string} points</code> An array of arrays with <code>[x, y]</code> values.</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">points</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">points</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">points</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">points</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>points</code> current value.</p><ul><li><strong>returns</strong>: <code>{Array}</code></li></ul><h2 id="pathlength" tabindex="-1">.pathLength() <a class="header-anchor" href="#pathlength" aria-label="Permalink to &quot;.pathLength()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">polygon.</span><span style="color:#B392F0;">pathLength</span><span style="color:#E1E4E8;">( length )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">polygon.</span><span style="color:#6F42C1;">pathLength</span><span style="color:#24292E;">( length )</span></span></code></pre></div><p>Set this attribute lets specify the total length for the path, in user units.</p><ul><li><p><strong>argument</strong>: <code>{number} length</code> The total length</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pathLength</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">pathLength</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pathLength</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">pathLength</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>pathLength</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{number}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./set.html">set</a> | <a href="./title.html">title</a>.</p></li></ul>',21),l=[n];function p(r,c,i,h,d,g){return e(),a("div",null,l)}const E=s(o,[["render",p]]);export{m as __pageData,E as default};