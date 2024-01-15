import{_ as a,c as n,o as t,m as s,a as i,U as e}from"./chunks/framework.on6qGByC.js";const _=JSON.parse('{"title":"fractal tree","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/fractal-tree.md","filePath":"examples/fractal-tree.md"}'),l={name:"examples/fractal-tree.md"},h=s("h1",{id:"fractal-tree",tabindex:"-1"},[i("fractal tree "),s("a",{class:"header-anchor",href:"#fractal-tree","aria-label":'Permalink to "fractal tree"'},"​")],-1),p=s("p",null,[i("This fractal tree is built entirely with the Graphane library, and it is animated with the "),s("code",null,"sequence"),i(" plugin.")],-1),k=s("g-composer",null,[s("svg",{viewBox:"0 0 600 600",width:"400",height:"400","g-on:load":"init"}),s("g-script",{type:"plugin",src:"http://localhost:63342/graphane//lib/plugins/gsvg.sequence.js"}),s("g-script",{type:"plugin",src:"http://localhost:63342/graphane//lib/plugins/gsvg.shapes.js"}),s("g-script",{type:"methods"}," function init() { const svg = $.svg; const gSVG = svg.gSVG; const seq = svg.Seq(); (function drawBranch (startX = 300, startY = 600, len = 120, angle = 0, remain = 10, delay = 0) { const duration = 600; const {x: endX, y: endY} = gSVG.polar2cartesian(startX, startY, len, angle); const element = svg.add('line') .x1(startX).y1(startY).x2(startX).y2(startY) .stroke('#45ae13ff').stroke_width(remain); seq.add(element, {x2: endX, y2: endY}, {delay, duration}); if (remain) { drawBranch(endX, endY, len * 0.8, angle - 16, remain - 1, delay + duration); drawBranch(endX, endY, len * 0.8, angle + 16, remain - 1, delay + duration); } })(); setTimeout(() => seq.play(), 1000); } ")],-1),E=e(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-composer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 600 600&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;400&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;400&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> g-on:load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;init&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-plugin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../../plugins/sequence/src/svg.sequence.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-plugin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../../plugins/shapes/src/svg.shapes.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-plugin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;methods&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    function init() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      const svg  = $.svg;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      const gSVG = svg.gSVG;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      const seq  = svg.Seq();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      (function drawBranch (startX=300, startY=600, len=120, angle=0, remain=10, delay=0) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        const duration           = 600;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        const {x: endX, y: endY} = gSVG.polar2cartesian(startX, startY, len, angle);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        const element            = svg.add(&#39;line&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                      .x1(startX).y1(startY).x2(startX).y2(startY)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                                      .stroke(&#39;#45ae13ff&#39;).stroke_width(remain);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        seq.add(element, {x2: endX, y2: endY}, {delay, duration});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        if (remain) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          drawBranch(endX, endY, len * 0.8, angle - 16, remain - 1, delay + duration);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          drawBranch(endX, endY, len * 0.8, angle + 16, remain - 1, delay + duration);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      setTimeout(() =&gt; seq.play(), 1000);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-composer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,1),r=[h,p,k,E];function d(g,c,o,y,u,m){return t(),n("div",null,r)}const f=a(l,[["render",d]]);export{_ as __pageData,f as default};