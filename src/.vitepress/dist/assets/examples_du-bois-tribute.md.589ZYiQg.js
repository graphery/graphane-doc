import{_ as n,c as i,m as s,U as t,o as a}from"./chunks/framework.on6qGByC.js";const b=JSON.parse('{"title":"W. E. B. Du Bois tribute","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"examples/du-bois-tribute.md","filePath":"examples/du-bois-tribute.md"}'),h={name:"examples/du-bois-tribute.md"},l=t(`<h1 id="w-e-b-du-bois-tribute" tabindex="-1">W. E. B. Du Bois tribute <a class="header-anchor" href="#w-e-b-du-bois-tribute" aria-label="Permalink to &quot;W. E. B. Du Bois tribute&quot;">​</a></h1><p>This example pays homage to the famed sociologist, civil rights activist, and data visualizer <a href="https://en.wikipedia.org/wiki/W._E._B._Du_Bois" target="_blank" rel="noreferrer">W. E. B. Du Bois</a>. His pioneering team of black sociologists created data visualizations that explained institutionalized racism to the world showed in 1900 Paris Exposition the upcoming exhibit, which was called <a href="https://www.smithsonianmag.com/history/first-time-together-and-color-book-displays-web-du-bois-visionary-infographics-180970826/" target="_blank" rel="noreferrer">American Negro</a>. You can see a modern point of view about the Du Bois work in <a href="https://www.dignityanddebt.org/projects/du-boisian-resources/" target="_blank" rel="noreferrer">The Du Boisian Visualization Toolkit</a>.</p><h2 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data&quot;">​</a></h2><div class="language-csv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csv</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">group,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">occupation,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">percentage</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Negroes,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Agriculture, Fisheries and Mining&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">62</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Negroes,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Manufacturing and Mechanical Industries&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Negroes,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Domestic and Personal Service&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">28</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Negroes,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Professions&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Negroes,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Trade and Transportation&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Whites,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Agriculture, Fisheries and Mining&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Whites,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Manufacturing and Mechanical Industries&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">13.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Whites,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Domestic and Personal Service&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">5.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Whites,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Professions&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Whites,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&quot;Trade and Transportation&quot;,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">13</span></span></code></pre></div><h2 id="first-group" tabindex="-1">first group <a class="header-anchor" href="#first-group" aria-label="Permalink to &quot;first group&quot;">​</a></h2>`,5),p={id:"color"},e={viewBox:"0 0 500 500",width:"500",style:{"font-family":"monospace"}},k=s("filter",{id:"filter"},[s("feTurbulence",{result:"noise-lg",type:"fractalNoise",baseFrequency:".04",numOctaves:"1",seed:"1458"}),s("feComposite",{result:"BaseGraphic",in:"SourceGraphic",in2:"noise-lg",operator:"arithmetic",k1:"0.5",k2:"0.6",k4:"-.07"}),s("feComposite",{operator:"arithmetic",k1:"-0.8",k2:"0.8",k3:"1.4"})],-1),r=s("defs",{"g-for":"(group, x) of data.$distinct('group')"},[s("text",{x:"250","g-bind:y":"x ? 480 : 30","text-anchor":"middle","g-content":"group.toUpperCase()"}),s("defs",{"g-for":"(record, n, all) of data.filter(r => r.group === group)"},[s("path",{stroke:"#c0c0c0","stroke-width":"1",filter:"url(#filter)","g-bind:transform":"x ? $$.rotate(180,250,250) : ''","g-bind:fill":"$.config.colors[n]","g-bind:check":"group + ' ' + record.sector","g-bind:d":`$$.circleSlice( 250, 
                                    250, 
                                    200,
                                    120 * record.value,
                                    (120 * data.$sum(all.filter((r,x) => x < n), 'value')) -60,
                                  )`})])],-1),E=[k,r],d=s("g-script",{type:"plugin",src:"https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"},null,-1),o=s("g-script",{type:"data",src:"../data/du-bois-tribute.data.csv"},null,-1),g=s("g-script",{type:"config"}," { colors: ['#cd143c','#ffd700','#4682b4','#d2b38c','#654321'] } ",-1),c=t(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-composer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 500 500&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;500&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">defs</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> g-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(group, x) of data.$distinct(&#39;group&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">text</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;250&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        g-bind:y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x ? 480 : 20&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        text-anchor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;middle&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        g-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">defs</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> g-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;(record, n, all) of data.filter(r =&gt; r.group === group)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;url(#filter)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          g-bind:transform</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x ? $$.rotate(180,250,250) : &#39;&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          g-bind:fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$.config.colors[n]&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          g-bind:check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;group + &#39; &#39; + record.sector&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          g-bind:d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$$.circleSlice( 250, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                    250, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                    200,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                    120 * record.value,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                    (120 * data.$sum(all.filter((r,x) =&gt; x </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> n), &#39;value&#39;)) -60,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                                  )&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">defs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">defs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;plugin&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;data&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../data/du-bois-tribute.data.csv&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    colors: [&#39;#cd143c&#39;,&#39;#ffd700&#39;,&#39;#4682b4&#39;,&#39;#d2b38c&#39;,&#39;#654321&#39;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g-composer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,1);function y(u,F,B,f,C,q){return a(),i("div",null,[l,s("g-composer",p,[(a(),i("svg",e,E)),d,o,g]),c])}const m=n(h,[["render",y]]);export{b as __pageData,m as default};
