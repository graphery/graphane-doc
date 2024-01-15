import{_ as e,c as t,o as a,U as i}from"./chunks/framework.on6qGByC.js";const g=JSON.parse('{"title":"title","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/title.md","filePath":"reference/svg/lib/title.md"}'),l={name:"reference/svg/lib/title.md"},r=i('<h1 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h1><p>The <code>title</code> element provides an accessible, short-text description of any SVG container element or graphics element.</p><p>Text in a <code>title</code> element is not rendered as part of the graphic, but browsers usually display it as a tooltip. If an element can be described by visible text, it is recommended to reference that text with an aria-labelledby attribute rather than using the <code>title</code> element.</p><p>Note: For backward compatibility with SVG 1.1, <code>title</code> elements should be the first child element of their parent.</p><p>This element only includes global attributes</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parentElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;title&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/title" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#struct-TitleElement" target="_blank" rel="noreferrer">w3c</a></p><ul><li><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./circle.html">circle</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./ellipse.html">ellipse</a> | <a href="./FilterPrimitives.html#feDiffuseLighting.md">feDiffuseLighting</a> | <a href="./FilterPrimitives.html#feSpecularLighting.md">feSpecularLighting</a> | <a href="./filter.html">filter</a> | <a href="./g.html">g</a> | <a href="./image.html">image</a> | <a href="./line.html">line</a> | <a href="./linearGradient.html">linearGradient</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./mpath.html">mpath</a> | <a href="./path.html">path</a> | <a href="./pattern.html">pattern</a> | <a href="./polygon.html">polygon</a> | <a href="./polyline.html">polyline</a> | <a href="./radialGradient.html">radialGradient</a> | <a href="./rect.html">rect</a> | <a href="./set.html">set</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a> | <a href="./textPath.html">textPath</a> | <a href="./tspan.html">tspan</a> | <a href="./use.html">use</a> | <a href="./view.html">view</a>.</li></ul>',10),s=[r];function h(n,o,m,p,c,d){return a(),t("div",null,s)}const k=e(l,[["render",h]]);export{g as __pageData,k as default};