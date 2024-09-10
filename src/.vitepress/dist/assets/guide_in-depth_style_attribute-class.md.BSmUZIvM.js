import{_ as t,B as l,c as n,a3 as a,G as h,w as r,o as d,j as i}from"./chunks/framework.BSKDiXd-.js";const F=JSON.parse('{"title":"Attribute Class","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/in-depth/style/attribute-class.md","filePath":"guide/in-depth/style/attribute-class.md"}'),p={name:"guide/in-depth/style/attribute-class.md"};function k(c,s,o,E,g,y){const e=l("ClientOnly");return d(),n("div",null,[s[1]||(s[1]=a('<h1 id="attribute-class" tabindex="-1">Attribute Class <a class="header-anchor" href="#attribute-class" aria-label="Permalink to &quot;Attribute Class&quot;">​</a></h1><h2 id="g-bind" tabindex="-1"><code>g-bind</code> <a class="header-anchor" href="#g-bind" aria-label="Permalink to &quot;`g-bind`&quot;">​</a></h2><p>You can be used <code>g-bind</code>, or the shorthand <code>:</code>, with the <code>class</code> attribute to dynamically bind CSS classes to an element. You can bind a single class or an array of classes.</p>',3)),h(e,null,{default:r(()=>s[0]||(s[0]=[i("div",{id:"attribute-class-1"},null,-1),i("g-editor",{href:"#attribute-class-1","lines-highlight":"19"},[i("textarea",null,`<g-composer>
  <template>
    <style>
      .regular {
        fill : green;
      }
      .warning {
        fill : blue;
      }
      .error {
        fill : red;
      }
    </style>
    <svg viewBox="0 0 100 100">
      <defs g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </defs>
    </svg>
  </template>
  <g-script type="data">    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  </g-script>
</g-composer>`)],-1)])),_:1}),s[2]||(s[2]=a(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p>By the Graphane SVG API, you can use the <code>.classList</code> object and its methods:</p><ul><li><code>.classList.contains( class )</code> - returns true if the list contains the given class, otherwise false.</li><li><code>.classList.add( class )</code> - adds the specified class.</li><li><code>.classList.remove( class )</code> - removes the specified class.</li><li><code>.classList.replace( oldClass, newClass)</code> - replaces oldClass with newClass.</li><li><code>.classList.toggle( class )</code> - removes class from if it exists or adds class if it doesn&#39;t.</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rect&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .classList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rectangle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .classList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;regular&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Alarm&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .classList.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,4))])}const b=t(p,[["render",k]]);export{F as __pageData,b as default};
