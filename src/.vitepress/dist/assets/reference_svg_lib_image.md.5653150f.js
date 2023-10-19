import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.05b02974.js";const u=JSON.parse('{"title":"image","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/image.md","filePath":"reference/svg/lib/image.md"}'),t={name:"reference/svg/lib/image.md"},o=n('<h1 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image&quot;">​</a></h1><p>The <code>image</code> SVG element includes images inside SVG documents. It can display raster image files or other SVG files.</p><p>The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.</p><p>SVG files displayed with <code>image</code> are treated as an image: external resources aren&#39;t loaded, :visited styles aren&#39;t applied, and they cannot be interactive. To include dynamic SVG elements, try <code>use</code> with an external URL. To include SVG files and run scripts inside them, try <code>object</code> inside of <code>foreignObject</code>.</p><p><code>image</code> implements the SVGImageElement interface.</p><p>Basic rendering of a PNG image in SVG:</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">image</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;image&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">image</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;image&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;image&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/image" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#embedded-ImageElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="class" tabindex="-1">.class() <a class="header-anchor" href="#class" aria-label="Permalink to &quot;.class()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">( name )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">( name )</span></span></code></pre></div><p>Set assigns a class name or set of class names to an element. You may assign the same class name or names to any number of elements, however, multiple class names must be separated by whitespace characters.</p><ul><li><p><strong>argument</strong>: <code>{string} name</code> The class name</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">class</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>class</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="style" tabindex="-1">.style() <a class="header-anchor" href="#style" aria-label="Permalink to &quot;.style()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">( style )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">( style )</span></span></code></pre></div><p>Set the <code>style</code> attribute allows to style an element using CSS declarations. It functions identically to the <code>style</code> attribute in HTML.</p><ul><li><p><strong>argument</strong>: <code>{string} style</code> The style value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">style</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>style</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="transform" tabindex="-1">.transform() <a class="header-anchor" href="#transform" aria-label="Permalink to &quot;.transform()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">( transform )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">( transform )</span></span></code></pre></div><p>Set the <code>transform</code> attribute defines a list of transform definitions that are applied to an element and the element&#39;s children.</p><ul><li><p><strong>argument</strong>: <code>{string} transform</code> The transform definition</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>transform</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code></li></ul><h2 id="x" tabindex="-1">.x() <a class="header-anchor" href="#x" aria-label="Permalink to &quot;.x()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">( x )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">( x )</span></span></code></pre></div><p>Set the <code>x</code> attribute defines a <code>x-axis</code> coordinate in the user coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{number|string} x</code> The x value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">x</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">x</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>x</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="y" tabindex="-1">.y() <a class="header-anchor" href="#y" aria-label="Permalink to &quot;.y()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">( y )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">( y )</span></span></code></pre></div><p>Set the <code>y</code> attribute defines a <code>y-axis</code> coordinate in the user coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{number|string} y</code> The y value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">y</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">y</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>y</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="width" tabindex="-1">.width() <a class="header-anchor" href="#width" aria-label="Permalink to &quot;.width()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">( w )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">( w )</span></span></code></pre></div><p>Set the <code>width</code> attribute defines the horizontal length of an element in the user coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{number|string} w</code> The width value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">width</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>width</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="height" tabindex="-1">.height() <a class="header-anchor" href="#height" aria-label="Permalink to &quot;.height()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">( h )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">( h )</span></span></code></pre></div><p>Set the <code>height</code> attribute defines the vertical length of an element in the user coordinate system.</p><ul><li><p><strong>argument</strong>: <code>{number|string} h</code> The height value (length or percentage)</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">height</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">height</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">height</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>height</code> current value.</p><ul><li><strong>returns</strong>: <code>{number|string}</code></li></ul><h2 id="href" tabindex="-1">.href() <a class="header-anchor" href="#href" aria-label="Permalink to &quot;.href()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">( imageURL )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">( imageURL )</span></span></code></pre></div><p>Set the <code>href</code> attribute. It defines a URL referring to the image to render.</p><ul><li><p><strong>argument</strong>: <code>{string} imageURL</code> Image URL</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">imageURL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">imageURL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>href</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> The current image URL</li></ul><h2 id="preserveaspectratio" tabindex="-1">.preserveAspectRatio() <a class="header-anchor" href="#preserveaspectratio" aria-label="Permalink to &quot;.preserveAspectRatio()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">image.</span><span style="color:#B392F0;">preserveAspectRatio</span><span style="color:#E1E4E8;">( aspectRatio )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">image.</span><span style="color:#6F42C1;">preserveAspectRatio</span><span style="color:#24292E;">( aspectRatio )</span></span></code></pre></div><p>Set the <code>preserveAspectRatio</code> attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.</p><ul><li><p><strong>argument</strong>: <code>{string} aspectRatio</code> The aspect ratio value</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">preserveAspectRatio</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> element.</span><span style="color:#B392F0;">preserveAspectRatio</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">preserveAspectRatio</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> element.</span><span style="color:#6F42C1;">preserveAspectRatio</span><span style="color:#24292E;">();</span></span></code></pre></div><p>Get the <code>preserveAspectRatio</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{string}</code></p></li><li><p><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./desc.html">desc</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./set.html">set</a> | <a href="./title.html">title</a>.</p></li></ul>',73),l=[o];function p(c,r,i,d,h,g){return e(),a("div",null,l)}const E=s(t,[["render",p]]);export{u as __pageData,E as default};
