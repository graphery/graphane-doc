import{_ as a,o as e,c as t,Q as s}from"./chunks/framework.875adba1.js";const g=JSON.parse('{"title":"metadata","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/metadata.md","filePath":"reference/svg/lib/metadata.md"}'),l={name:"reference/svg/lib/metadata.md"},r=s('<h1 id="metadata" tabindex="-1">metadata <a class="header-anchor" href="#metadata" aria-label="Permalink to &quot;metadata&quot;">​</a></h1><p>The <code>metadata</code> SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of <code>metadata</code> should be elements from other XML namespaces such as RDF, FOAF, etc.</p><p>None</p><p>This element implements the SVGMetadataElement interface.</p><p>Usually, this element is created with:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">metadata</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> parentElement.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;metadata&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">metadata</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> parentElement.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;metadata&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><p>It&#39;s possible to create it as a disconnected element with <code>gSVG(&#39;metadata&#39;)</code> and attach it to the SVG document with <code>.attachTo()</code>.</p><p><em>More info</em>: <a href="https://developer.mozilla.org//en-US/docs/Web/SVG/Element/metadata" target="_blank" rel="noreferrer">mdn</a> | <a href="https://svgwg.org/svg2-draft/single-page.html#struct-MetadataElement" target="_blank" rel="noreferrer">w3c</a></p><ul><li><strong>Parent elements</strong>: <a href="./a.html">a</a> | <a href="./animate.html">animate</a> | <a href="./animateMotion.html">animateMotion</a> | <a href="./animateTransform.html">animateTransform</a> | <a href="./circle.html">circle</a> | <a href="./clipPath.html">clipPath</a> | <a href="./defs.html">defs</a> | <a href="./ellipse.html">ellipse</a> | <a href="./FilterPrimitives.html#feDiffuseLighting.md">feDiffuseLighting</a> | <a href="./FilterPrimitives.html#feSpecularLighting.md">feSpecularLighting</a> | <a href="./filter.html">filter</a> | <a href="./g.html">g</a> | <a href="./image.html">image</a> | <a href="./line.html">line</a> | <a href="./linearGradient.html">linearGradient</a> | <a href="./marker.html">marker</a> | <a href="./mask.html">mask</a> | <a href="./mpath.html">mpath</a> | <a href="./path.html">path</a> | <a href="./pattern.html">pattern</a> | <a href="./polygon.html">polygon</a> | <a href="./polyline.html">polyline</a> | <a href="./radialGradient.html">radialGradient</a> | <a href="./rect.html">rect</a> | <a href="./set.html">set</a> | <a href="./svg.html">svg</a> | <a href="./switch.html">switch</a> | <a href="./symbol.html">symbol</a> | <a href="./text.html">text</a> | <a href="./textPath.html">textPath</a> | <a href="./tspan.html">tspan</a> | <a href="./use.html">use</a> | <a href="./view.html">view</a>.</li></ul>',9),n=[r];function o(h,i,m,p,c,d){return e(),t("div",null,n)}const y=a(l,[["render",o]]);export{g as __pageData,y as default};
