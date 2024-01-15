import{_ as s,c as e,o as i,U as a}from"./chunks/framework.on6qGByC.js";const g=JSON.parse('{"title":"How use the SVG in Graphane","description":"","frontmatter":{},"headers":[],"relativePath":"guide/svg/01-Graphane-SVG.md","filePath":"guide/svg/01-Graphane-SVG.md"}'),t={name:"guide/svg/01-Graphane-SVG.md"},n=a(`<h1 id="how-use-the-svg-in-graphane" tabindex="-1">How use the SVG in Graphane <a class="header-anchor" href="#how-use-the-svg-in-graphane" aria-label="Permalink to &quot;How use the SVG in Graphane&quot;">​</a></h1><p><strong>Graphane</strong> uses the SVG format and powers them by means of directives that allow you to define the graphical elements and their characteristics by means of the data.</p><p>Also, <strong>Graphane</strong> includes a powerful API to simplify the construction and manipulation of SVG graphics from Javascript. The API is very close to the SVG structure.</p><h2 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h2><p>The standard SVG format is enhanced with <strong>attribute-based directives</strong> that allows to generate visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for complex development.</p><p>The directives than extend the SVG format are:</p><ul><li><a href="./../in-depth/templating/binding.html"><code>g-bind</code></a> (or the shorthand <code>:</code>): dynamically bind values to attributes and styles.</li><li><a href="./../in-depth/templating/lists.html"><code>g-for</code></a>: render the element <code>defs</code> multiple times based on the data.</li><li><a href="./../in-depth/templating/conditional.html"><code>g-if</code></a>: show an element conditionally.</li><li><a href="./../in-depth/templating/content.html"><code>g-content</code></a>: update the element content.</li><li><a href="./../in-depth/templating/events.html"><code>g-on</code></a> (or the shorthand <code>@</code>): attach an event listener to the element.</li></ul><p>After the <code>g-composer</code> template engine has processed the directives the result is a fully valid SVG that is natively displayed by the browser.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p>You can access the <strong>SVG Graphane API</strong> from the methods included in the component with <code>$.svg</code>. The <code>$</code> object is accesible from the <code>&lt;script type=&quot;methods&quot;&gt;&lt;/script&gt;</code> content as a global variable. You can also access it from outside the component with the <code>.svg</code> property that the <code>g-component</code> exposes for use from external Javascript.</p><p>In <strong>SVG Graphane API</strong> all are methods; thus, when you want to work with SVG attributes or properties, you must use methods. For example, set an <code>id</code> to an SVG element is <code>element.id(&#39;unique_id&#39;)</code> and for getting this identification it is necessary to use <code>element.id()</code>.</p><p>Graphane dynamically constructs the methods, which can chain together to make successive calls. Each call returns the original object and can include one call after another.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rect&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#f06&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><strong>Note</strong>: chained call is possible when calling setter methods. When a getter method (then returns a value) is called, the value property is returned, amd it is impossible to do more chained calls.</p>`,14),h=[n];function l(p,o,r,d,c,k){return i(),e("div",null,h)}const m=s(t,[["render",l]]);export{g as __pageData,m as default};
