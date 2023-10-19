import{_ as a,o as l,c as p,Q as n,k as s}from"./chunks/framework.05b02974.js";const q=JSON.parse('{"title":"Embebed data","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/methods/embebed.md","filePath":"guide/methods/embebed.md"}'),o={name:"guide/methods/embebed.md"},e=n(`<h1 id="embebed-data" tabindex="-1">Embebed data <a class="header-anchor" href="#embebed-data" aria-label="Permalink to &quot;Embebed data&quot;">​</a></h1><p>The <code>script type=&quot;methods&quot;</code> tag allow loading functions into the Graphane template component. You can include functions in the code, and these functions are available into the template.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">viewBox</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;svg&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">g</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">change</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;cursor: pointer;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;run&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">cx</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">cy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">r</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;red&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;36&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;53&quot;</span><span style="color:#E1E4E8;">&gt;click&lt;/</span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">g</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">svg</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> type=&quot;methods&quot;&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">circle</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $.svg.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;circle&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">text</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> $.svg.</span><span style="color:#B392F0;">querySelector</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">change</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (text.</span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        circle.</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;green&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text.</span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ok&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">44</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        circle.</span><span style="color:#B392F0;">fill</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;red&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text.</span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;click&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">x</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">36</span><span style="color:#E1E4E8;">);</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">g-template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">svg</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">viewBox</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0 0 100 100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;svg&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">g</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">change</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;cursor: pointer;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">circle</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;run&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">cx</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">cy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">r</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;50&quot;</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;red&quot;</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">text</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;36&quot;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;53&quot;</span><span style="color:#24292E;">&gt;click&lt;/</span><span style="color:#22863A;">text</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">g</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">svg</span><span style="color:#24292E;">&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> type=&quot;methods&quot;&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">circle</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $.svg.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;circle&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">text</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> $.svg.</span><span style="color:#6F42C1;">querySelector</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;text&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">change</span><span style="color:#24292E;">() {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (text.</span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        circle.</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;green&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text.</span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ok&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">44</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">      } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        circle.</span><span style="color:#6F42C1;">fill</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;red&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text.</span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;click&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">x</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">36</span><span style="color:#24292E;">);</span></span>
<span class="line highlighted"><span style="color:#24292E;">      }</span></span>
<span class="line highlighted"><span style="color:#24292E;">    }</span></span>
<span class="line highlighted"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">g-template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,3),t=s("g-template",null,[s("svg",{viewBox:"0 0 100 100",id:"svg"},[s("g",{"g-on:click":"change",style:{cursor:"pointer"}},[s("circle",{id:"run",cx:"50",cy:"50",r:"50",fill:"red"}),s("text",{x:"36",y:"53"},"click")])]),s("g-script",{type:"methods"}," const circle = $.svg.querySelector('circle'); const text = $.svg.querySelector('text'); function change() { if (text.content() === 'click') { circle.fill('green'); text.content('ok').x(44); } else { circle.fill('red'); text.content('click').x(36); } } ")],-1),c=n(`<p>In this example, we define a <code>change()</code> function and use the function in the template as handler for the event <code>click</code>. When the user clicks, the label is changed.</p><p>Only the named functions are translated to the template environment. Constants, variables, arrow function or anonymous functions are not linked to the template.</p><p>Into the methods code <code>$</code> is a reference to the Graphane template component. As a result, you can access to the <a href="./svg-access.html">$.svg</a> element or the <a href="./data-access.html">$.data</a> object.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>In some environments the <code>&lt;script type=&quot;methods&quot;&gt;&lt;/script&gt;</code> has conflicts. In these cases, you can use alternatively <code>&lt;g-script type=&quot;methods&quot;&gt;&lt;/g-script&gt;</code>.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">g-script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;methods&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    const text = $.svg.querySelector(&#39;text&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">    function change() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      if (text.content() === &#39;click&#39;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text.content(&#39;ok&#39;).x(44);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text.content(&#39;click&#39;).x(36);</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">g-script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">g-script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;methods&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    const text = $.svg.querySelector(&#39;text&#39;);</span></span>
<span class="line"><span style="color:#24292E;">    function change() {</span></span>
<span class="line"><span style="color:#24292E;">      if (text.content() === &#39;click&#39;) {</span></span>
<span class="line"><span style="color:#24292E;">        text.content(&#39;ok&#39;).x(44);</span></span>
<span class="line"><span style="color:#24292E;">      } else {</span></span>
<span class="line"><span style="color:#24292E;">        text.content(&#39;click&#39;).x(36);</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">g-script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div>`,4),r=[e,t,c];function E(y,i,h,g,d,F){return l(),p("div",null,r)}const m=a(o,[["render",E]]);export{q as __pageData,m as default};