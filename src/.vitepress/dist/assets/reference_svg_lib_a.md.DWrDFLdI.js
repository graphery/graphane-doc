import{_ as e,c as a,o as t,U as s}from"./chunks/framework.on6qGByC.js";const m=JSON.parse('{"title":"a","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/a.md","filePath":"reference/svg/lib/a.md"}'),i={name:"reference/svg/lib/a.md"},l=s('<h1 id="a" tabindex="-1">a <a class="header-anchor" href="#a" aria-label="Permalink to &quot;a&quot;">​</a></h1><p>The <code>a</code> SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML’s <code>a</code> element.</p><p>SVG&#39;s <code>a</code> element is a container, which means you can create a link around text (like in HTML) but also around any shape.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parentElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;a&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/a" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#linking-AElement" target="_blank" rel="noreferrer">w3c</a></p><h2 id="href" tabindex="-1">.href() <a class="header-anchor" href="#href" aria-label="Permalink to &quot;.href()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( url )</span></span></code></pre></div><p>Set the URL or URL fragment the hyperlink points to.</p><ul><li><p><strong>argument</strong>: <code>{string} url</code> The URL to link</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>href</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> The current URL</li></ul><h2 id="target" tabindex="-1">.target() <a class="header-anchor" href="#target" aria-label="Permalink to &quot;.target()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( target )</span></span></code></pre></div><p>Set where to display the linked URL.</p><ul><li><p><strong>argument</strong>: <code>{string} target</code> Some of this values: &#39;_self&#39; | &#39;_parent&#39; | &#39;_top&#39; | &#39;_blank&#39; | &lt;window_name&gt;</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>target</code> current value.</p><ul><li><strong>returns</strong>: <code>{string}</code> The <code>target</code>.</li></ul><h2 id="type" tabindex="-1">.type() <a class="header-anchor" href="#type" aria-label="Permalink to &quot;.type()&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( mimetype )</span></span></code></pre></div><p>Set a MIME <code>type</code> for the linked URL.</p><ul><li><p><strong>argument</strong>: <code>{string} mimetype</code> A valid MIME Type</p></li><li><p><strong>returns</strong>: <code>{gSVGObject}</code> The original object</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mimetype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>Get the <code>type</code> current value.</p><ul><li><p><strong>returns</strong>: <code>{string}</code> The mimetype value</p></li><li><p><strong>Parent elements</strong>: <a href="./defs.html">defs</a> | <a href="./g.html">g</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./pattern.html">pattern</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a> | <a href="./textPath.html">textPath</a> | <a href="./tspan.html">tspan</a>.</p></li><li><p><strong>Child elements</strong>: <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./circle.html">circle</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./desc.html">desc</a> | <a href="./ellipse.html">ellipse</a> | <a href="./filter.html">filter</a> | <a href="./foreignObject.html">foreignObject</a> | <a href="./g.html">g</a> | <a href="./image.html">image</a> | <a href="./line.html">line</a> | <a href="./linearGradient.html">linearGradient</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./metadata.html">metadata</a> | <a href="./mpath.html">mpath</a> | <a href="./path.html">path</a> | <a href="./pattern.html">pattern</a> | <a href="./polygon.html">polygon</a> | <a href="./polyline.html">polyline</a> | <a href="./radialGradient.html">radialGradient</a> | <a href="./rect.html">rect</a> | <a href="./set.html">set</a> | <a href="./stop.html">stop</a> | <a href="./style.html">style</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a> | <a href="./title.html">title</a> | <a href="./use.html">use</a> | <a href="./view.html">view</a>.</p></li></ul>',28),h=[l];function n(r,p,o,d,c,g){return t(),a("div",null,h)}const u=e(i,[["render",n]]);export{m as __pageData,u as default};
