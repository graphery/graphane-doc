import{_ as t,o as e,c as d,Q as o}from"./chunks/framework.875adba1.js";const f=JSON.parse('{"title":"classList and style","description":"","frontmatter":{},"headers":[],"relativePath":"reference/svg/lib/classList-and-style.md","filePath":"reference/svg/lib/classList-and-style.md"}'),s={name:"reference/svg/lib/classList-and-style.md"},c=o('<h1 id="classlist-and-style" tabindex="-1">classList and style <a class="header-anchor" href="#classlist-and-style" aria-label="Permalink to &quot;classList and style&quot;">​</a></h1><p>Some properties such as <code>style</code> or <code>classList</code> are objects and in these cases you can access to deep properties as methods.</p><h2 id="classlist" tabindex="-1"><code>.classList</code> <a class="header-anchor" href="#classlist" aria-label="Permalink to &quot;`.classList`&quot;">​</a></h2><table><thead><tr><th>property / method name</th><th>description</th></tr></thead><tbody><tr><td><em><code>element</code></em><code>.classList.length()</code></td><td>Returns an integer representing the number of objects stored in the object..</td></tr><tr><td><em><code>element</code></em><code>.classList.value()</code></td><td>Returns or defines a string with the value of the list.</td></tr><tr><td><em><code>element</code></em><code>.classList.item()</code></td><td>Returns the item in the list by its index<br> or null if the index is greater than or equal to the list&#39;s length.</td></tr><tr><td><em><code>element</code></em><code>.classList.contains()</code></td><td>Returns true if the list contains the given token<br> otherwise false.</td></tr><tr><td><em><code>element</code></em><code>.classList.add()</code></td><td>Adds the specified tokens to the list.</td></tr><tr><td><em><code>element</code></em><code>.classList.remove()</code></td><td>Removes the specified tokens from the list.</td></tr><tr><td><em><code>element</code></em><code>.classList.replace()</code></td><td>Replaces the token with another one.</td></tr><tr><td><em><code>element</code></em><code>.classList.supports()</code></td><td>Returns true if the given token is in the associated attribute&#39;s supported tokens.</td></tr><tr><td><em><code>element</code></em><code>.classList.toggle()</code></td><td>Removes the token from the list if it exists<br> or adds it to the list if it doesn&#39;t. Returns a boolean indicating whether the token is in the list after the operation.</td></tr><tr><td><em><code>element</code></em><code>.classList.entries()</code></td><td>Returns an iterator<br> allowing you to go through all key/value pairs contained in this object.</td></tr><tr><td><em><code>element</code></em><code>.classList.forEach()</code></td><td>Executes a provided callback function once for each <code>.classList</code> element.</td></tr><tr><td><em><code>element</code></em><code>.classList.keys()</code></td><td>Returns an iterator<br> allowing you to go through all keys of the key/value pairs contained in this object.</td></tr><tr><td><em><code>element</code></em><code>.classList.values()</code></td><td>Returns an iterator<br> allowing you to go through all values of the key/value pairs contained in this object.</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$</span><span style="color:#E1E4E8;">.svg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SVG</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0 0 100 100&#39;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">svg.classList.</span><span style="color:#B392F0;">add</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$</span><span style="color:#24292E;">.svg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SVG</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0 0 100 100&#39;</span><span style="color:#24292E;">);</span></span>\n<span class="line"><span style="color:#24292E;">svg.classList.</span><span style="color:#6F42C1;">add</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="style" tabindex="-1"><code>.style</code> <a class="header-anchor" href="#style" aria-label="Permalink to &quot;`.style`&quot;">​</a></h2><p><code>style</code> is a special element because is an attribute and an object with properties. In this case you can use <code>.style()</code> to access as attribute and <code>.style.</code> to access its child properties.</p><p>The properties of the <code>.style</code> object are wrapped and its properties are now methods, but they cannot be chained, and you have to use <code>.style</code> explicitly in each call, since these methods return the main object and not the <code>style</code> object.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">$</span><span style="color:#E1E4E8;">.svg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SVG</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;0 0 100 100&#39;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">svg.style.</span><span style="color:#B392F0;">strokeWidth</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;10px&#39;</span><span style="color:#E1E4E8;">).style.</span><span style="color:#B392F0;">stroke</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#000000&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">$</span><span style="color:#24292E;">.svg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SVG</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;0 0 100 100&#39;</span><span style="color:#24292E;">);</span></span>\n<span class="line"><span style="color:#24292E;">svg.style.</span><span style="color:#6F42C1;">strokeWidth</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;10px&#39;</span><span style="color:#24292E;">).style.</span><span style="color:#6F42C1;">stroke</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#000000&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Many SVG attributes are visuals and can also be used as properties CSS so in Graphane you can choose to use<br><code>.stroke_width()</code> or <code>.style.strokeWidth()</code>.</p></div><table><thead><tr><th>style property</th><th>SVG attribute</th><th>element</th></tr></thead><tbody><tr><td><code>.style.cx()</code></td><td><code>.cx()</code></td><td><a href="./circle.html">circle</a> <a href="./ellipse.html">ellipse</a></td></tr><tr><td><code>.style.cy()</code></td><td><code>.cy()</code></td><td><a href="./circle.html">circle</a> <a href="./ellipse.html">ellipse</a></td></tr><tr><td><code>.style.height()</code></td><td><code>.height()</code></td><td><a href="./foreignObject.html">foreignObject</a> <a href="./image.html">image</a> <a href="./rect.html">rect</a> <a href="./svg.html">svg</a> <a href="./symbol.html">symbol</a> <a href="./use.html">use</a></td></tr><tr><td><code>.style.width()</code></td><td><code>.width()</code></td><td><a href="./foreignObject.html">foreignObject</a> <a href="./image.html">image</a> <a href="./rect.html">rect</a> <a href="./svg.html">svg</a> <a href="./symbol.html">symbol</a> <a href="./use.html">use</a></td></tr><tr><td><code>.style.x()</code></td><td><code>.x()</code></td><td><a href="./foreignObject.html">foreignObject</a> <a href="./image.html">image</a> <a href="./rect.html">rect</a> <a href="./svg.html">svg</a> <a href="./symbol.html">symbol</a> <a href="./use.html">use</a></td></tr><tr><td><code>.style.y()</code></td><td><code>.y()</code></td><td><a href="./foreignObject.html">foreignObject</a> <a href="./image.html">image</a> <a href="./rect.html">rect</a> <a href="./svg.html">svg</a> <a href="./symbol.html">symbol</a> <a href="./use.html">use</a></td></tr><tr><td><code>.style.r()</code></td><td><code>.r()</code></td><td><a href="./circle.html">circle</a></td></tr><tr><td><code>.style.rx()</code></td><td><code>.rx()</code></td><td><a href="./ellipse.html">ellipse</a> <a href="./rect.html">rect</a></td></tr><tr><td><code>.style.ry()</code></td><td><code>.ry()</code></td><td><a href="./ellipse.html">ellipse</a> <a href="./rect.html">rect</a></td></tr><tr><td><code>.style.d()</code></td><td><code>.d()</code></td><td><a href="./path.html">path</a> (with different syntax between style and property)</td></tr><tr><td><code>.style.fill()</code></td><td><code>.fill()</code></td><td>Any element except for <a href="./animate.html">animate</a><br> which have a different fill attribute.</td></tr><tr><td><code>.style.transform()</code></td><td><code>.transform()</code></td><td>The CSS transform and the SVG transform have different format</td></tr><tr><td><code>.style.alignmentBaseline()</code></td><td><code>.alignment_baseline()</code></td><td>Any element</td></tr><tr><td><code>.style.baselineShift()</code></td><td><code>.baseline_shift()</code></td><td>Any element</td></tr><tr><td><code>.style.clipPath()</code></td><td><code>.clip_path()</code></td><td>Any element</td></tr><tr><td><code>.style.clipRule()</code></td><td><code>.clip_rule()</code></td><td>Any element</td></tr><tr><td><code>.style.color()</code></td><td><code>.color()</code></td><td>Any element</td></tr><tr><td><code>.style.colorInterpolation()</code></td><td><code>.color_interpolation()</code></td><td>Any element</td></tr><tr><td><code>.style.colorInterpolationFilters()</code></td><td><code>.color_interpolation_filters()</code></td><td>Any element</td></tr><tr><td><code>.style.cursor()</code></td><td><code>.cursor()</code></td><td>Any element</td></tr><tr><td><code>.style.direction()</code></td><td><code>.direction()</code></td><td>Any element</td></tr><tr><td><code>.style.display()</code></td><td><code>.display()</code></td><td>Any element</td></tr><tr><td><code>.style.dominantBaseline()</code></td><td><code>.dominant_baseline()</code></td><td>Any element</td></tr><tr><td><code>.style.fillOpacity()</code></td><td><code>.fill_opacity()</code></td><td>Any element</td></tr><tr><td><code>.style.fillRule()</code></td><td><code>.fill_rule()</code></td><td>Any element</td></tr><tr><td><code>.style.filter()</code></td><td><code>.filter()</code></td><td>Any element</td></tr><tr><td><code>.style.floodColor()</code></td><td><code>.flood_color()</code></td><td>Any element</td></tr><tr><td><code>.style.floodOpacity()</code></td><td><code>.flood_opacity()</code></td><td>Any element</td></tr><tr><td><code>.style.fontFamily()</code></td><td><code>.font_family()</code></td><td>Any element</td></tr><tr><td><code>.style.fontSize()</code></td><td><code>.font_size()</code></td><td>Any element</td></tr><tr><td><code>.style.fontSizeAdjust()</code></td><td><code>.font_size_adjust()</code></td><td>Any element</td></tr><tr><td><code>.style.fontStretch()</code></td><td><code>.font_stretch()</code></td><td>Any element</td></tr><tr><td><code>.style.fontStyle()</code></td><td><code>.font_style()</code></td><td>Any element</td></tr><tr><td><code>.style.fontVariant()</code></td><td><code>.font_variant()</code></td><td>Any element</td></tr><tr><td><code>.style.fontWeight()</code></td><td><code>.font_weight()</code></td><td>Any element</td></tr><tr><td><code>.style.glyphOrientationHorizontal()</code></td><td><code>.glyph_orientation_horizontal()</code></td><td>Any element</td></tr><tr><td><code>.style.glyphOrientationVertical()</code></td><td><code>.glyph_orientation_vertical()</code></td><td>Any element</td></tr><tr><td><code>.style.imageRendering()</code></td><td><code>.image_rendering()</code></td><td>Any element</td></tr><tr><td><code>.style.letterSpacing()</code></td><td><code>.letter_spacing()</code></td><td>Any element</td></tr><tr><td><code>.style.lightingColor()</code></td><td><code>.lighting_color()</code></td><td>Any element</td></tr><tr><td><code>.style.markerEnd()</code></td><td><code>.marker_end()</code></td><td>Any element</td></tr><tr><td><code>.style.markerMid()</code></td><td><code>.marker_mid()</code></td><td>Any element</td></tr><tr><td><code>.style.markerStart()</code></td><td><code>.marker_start()</code></td><td>Any element</td></tr><tr><td><code>.style.mask()</code></td><td><code>.mask()</code></td><td>Any element</td></tr><tr><td><code>.style.maskType()</code></td><td><code>.mask_type()</code></td><td>Any element</td></tr><tr><td><code>.style.opacity()</code></td><td><code>.opacity()</code></td><td>Any element</td></tr><tr><td><code>.style.overflow()</code></td><td><code>.overflow()</code></td><td>Any element</td></tr><tr><td><code>.style.paintOrder()</code></td><td><code>.paint_order()</code></td><td>Any element</td></tr><tr><td><code>.style.pointerEvents()</code></td><td><code>.pointer_events()</code></td><td>Any element</td></tr><tr><td><code>.style.shapeRendering()</code></td><td><code>.shape_rendering()</code></td><td>Any element</td></tr><tr><td><code>.style.stopColor()</code></td><td><code>.stop_color()</code></td><td>Any element</td></tr><tr><td><code>.style.stopOpacity()</code></td><td><code>.stop_opacity()</code></td><td>Any element</td></tr><tr><td><code>.style.stroke()</code></td><td><code>.stroke()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeDasharray()</code></td><td><code>.stroke_dasharray()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeDashoffset()</code></td><td><code>.stroke_dashoffset()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeLinecap()</code></td><td><code>.stroke_linecap()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeLinejoin()</code></td><td><code>.stroke_linejoin()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeMiterlimit()</code></td><td><code>.stroke_miterlimit()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeOpacity()</code></td><td><code>.stroke_opacity()</code></td><td>Any element</td></tr><tr><td><code>.style.strokeWidth()</code></td><td><code>.stroke_width()</code></td><td>Any element</td></tr><tr><td><code>.style.textAnchor()</code></td><td><code>.text_anchor()</code></td><td>Any element</td></tr><tr><td><code>.style.textDecoration()</code></td><td><code>.text_decoration()</code></td><td>Any element</td></tr><tr><td><code>.style.textOverflow()</code></td><td><code>.text_overflow()</code></td><td>Any element</td></tr><tr><td><code>.style.textRendering()</code></td><td><code>.text_rendering()</code></td><td>Any element</td></tr><tr><td><code>.style.transformOrigin()</code></td><td><code>.transform_origin()</code></td><td>Any element</td></tr><tr><td><code>.style.unicodeBidi()</code></td><td><code>.unicode_bidi()</code></td><td>Any element</td></tr><tr><td><code>.style.vectorEffect()</code></td><td><code>.vector_effect()</code></td><td>Any element</td></tr><tr><td><code>.style.visibility()</code></td><td><code>.visibility()</code></td><td>Any element</td></tr><tr><td><code>.style.whiteSpace()</code></td><td><code>.white_space()</code></td><td>Any element</td></tr><tr><td><code>.style.wordSpacing()</code></td><td><code>.word_spacing()</code></td><td>Any element</td></tr><tr><td><code>.style.writingMode()</code></td><td><code>.writing_mode()</code></td><td>Any element</td></tr></tbody></table>',11),l=[c];function r(a,n,i,p,y,h){return e(),d("div",null,l)}const g=t(s,[["render",r]]);export{f as __pageData,g as default};
