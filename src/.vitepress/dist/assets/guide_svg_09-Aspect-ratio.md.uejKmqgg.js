import{_ as a,c as e,m as s,U as t,a as h,o as i}from"./chunks/framework.on6qGByC.js";const oe=JSON.parse('{"title":"Size and aspect ratio","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/svg/09-Aspect-ratio.md","filePath":"guide/svg/09-Aspect-ratio.md"}'),n={name:"guide/svg/09-Aspect-ratio.md"},l=t(`<h1 id="size-and-aspect-ratio" tabindex="-1">Size and aspect ratio <a class="header-anchor" href="#size-and-aspect-ratio" aria-label="Permalink to &quot;Size and aspect ratio&quot;">​</a></h1><h2 id="the-svg-coordinate-system" tabindex="-1">The SVG coordinate system <a class="header-anchor" href="#the-svg-coordinate-system" aria-label="Permalink to &quot;The SVG coordinate system&quot;">​</a></h2><p>An important aspect is getting a grasp of the coordinate system to which the SVG will be mapped. This workspace is defined into the SVG element by the dimensions of the viewport and the viewBox.</p><h3 id="viewbox" tabindex="-1">viewBox <a class="header-anchor" href="#viewbox" aria-label="Permalink to &quot;viewBox&quot;">​</a></h3><p>The <code>viewBox</code> mapped the internal boundaries associated with the SVG element. It&#39;s defined with four values: <code>min-x</code>, <code>min-y</code>, <code>width</code>, and <code>height</code>. The <code>min-</code> values represent at what point within the image reference coordination should start, while the <code>width</code> and <code>height</code> establish the reference box&#39;s size.</p><p>All position and size measurements of the nested elements use these dimensions as a reference, regardless of the SVG size.</p><h3 id="viewport" tabindex="-1">viewport <a class="header-anchor" href="#viewport" aria-label="Permalink to &quot;viewport&quot;">​</a></h3><p>The SVG dimensions is set through <code>height</code> and <code>width</code> into the SVG element. If these values are not defined, the SVG dimensions will be determined by the container width, and work as <code>width=&quot;100%&quot;</code>.</p><p>If the viewport maintains the same <code>viewBox</code> width and height ratio, the image is resized without deformation. If the viewport changes the ratio, the <code>preserveAspectRatio</code> defines how to display the SVG content.</p><h2 id="scale" tabindex="-1">Scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;Scale&quot;">​</a></h2><p>You can define the SVG size with <code>height</code> and <code>width</code>, the SVG can be scaled without limitations, to reduce and increase it.</p><p>This is the base image:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-U_s7M" id="tab-_WYH6BK" checked="checked"><label for="tab-_WYH6BK">svg</label><input type="radio" name="group-U_s7M" id="tab-Go9snkf"><label for="tab-Go9snkf">js</label></div><div class="blocks"><div class="language-svg vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">svg</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0 0 100 100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;border: 1px dashed grey;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          stroke-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stroke-dasharray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;18.5,2&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;100&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          stroke-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stroke-dasharray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;18.5,2&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg.style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1px dashed grey&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">viewBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke_width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke_dasharray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grey&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$.svg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;line&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">y2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke_width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke_dasharray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;grey&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div></div></div>`,13),o={viewBox:"0 0 100 100",style:{border:"1px dashed grey"},width:"100",height:"100"},d=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),r=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),k=[d,r],p=s("p",null,[h("These are the same SVG with different "),s("code",null,"width"),h(" and "),s("code",null,"height"),h(" values:")],-1),c=s("thead",null,[s("tr",null,[s("th",null,[s("code",null,'viewBox="0 0 100 100" width="125" height="125"')]),s("th",null,[s("code",null,'viewBox="0 0 100 100" width="100" height="100"')]),s("th",null,[s("code",null,'viewBox="0 0 100 100" width="75" height="75"')])])],-1),g={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"125"},y=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),E=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),_=[y,E],u={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"100",height:"100"},x=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),w=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),v=[x,w],F={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"75"},B=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),m=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),C=[B,m],b=t('<h2 id="preserveaspectratio" tabindex="-1">preserveAspectRatio <a class="header-anchor" href="#preserveaspectratio" aria-label="Permalink to &quot;preserveAspectRatio&quot;">​</a></h2><h3 id="non-defined" tabindex="-1">Non Defined <a class="header-anchor" href="#non-defined" aria-label="Permalink to &quot;Non Defined&quot;">​</a></h3><p>If you don&#39;t configure a <code>preserveAspectRatio</code> and the width defined with <code>width</code> has a higher ratio than the one specified in the <code>viewBox</code>, then the SVG will be wider, and its content will be centered. If the height defined with <code>height</code> has a greater proportion than that defined in the <code>viewBox</code>, then the SVG will be taller, and its content will be displayed centered vertically.</p><p>With different values of <code>width</code> and <code>height</code> ratio, and without <code>preserveAspectRatio</code> configuration, these are the results:</p>',4),f=s("thead",null,[s("tr",null,[s("th",null,[s("code",null,'viewBox="0 0 100 100" width="125" height="125"')]),s("th",null,[s("code",null,'viewBox="0 0 100 100" width="75" height="125"')]),s("th",null,[s("code",null,'viewBox="0 0 100 100" width="125" height="75"')])])],-1),q={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"125"},M=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),A=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),S=[M,A],T={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Y=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),R=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),V=[Y,R],G={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},P=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),I=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),N=[P,I],z=t('<h3 id="non-uniform-scaling" tabindex="-1">Non-uniform scaling <a class="header-anchor" href="#non-uniform-scaling" aria-label="Permalink to &quot;Non-uniform scaling&quot;">​</a></h3><p>When the <code>preserveAspectRatio</code> is set to <code>none</code>, the SVG size is changed, and the content is deformed to occupy the new SVG edge.</p><p>With different values of <code>width</code> and <code>height</code> ratio, and without <code>.preserveAspectRatio()</code> configure as <code>none</code>, these are the results:</p>',3),D=s("thead",null,[s("tr",null,[s("th",null,[s("code",null,'viewBox="0 0 100 100" width="125" height="125" preserveAspectRatio="none"')]),s("th",null,[s("code",null,'viewBox="0 0 100 100" width="75" height="125" preserveAspectRatio="none"')]),s("th",null,[s("code",null,'viewBox="0 0 100 100" width="125" height="75" preserveAspectRatio="none"')])])],-1),$={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"125",preserveAspectRatio:"none"},U=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),W=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),X=[U,W],j={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125",preserveAspectRatio:"none"},H=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),K=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),J=[H,K],O={viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75",preserveAspectRatio:"none"},L=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"0",y1:"0",x2:"100",y2:"100"},null,-1),Q=s("line",{"stroke-width":"1","stroke-dasharray":"18.5,2",stroke:"grey",x1:"100",y1:"0",x2:"0",y2:"100"},null,-1),Z=[L,Q],ss=t('<h3 id="uniform-scaling" tabindex="-1">Uniform scaling <a class="header-anchor" href="#uniform-scaling" aria-label="Permalink to &quot;Uniform scaling&quot;">​</a></h3><p>For forcing uniform scaling, the <code>preserveAspectRatio</code> accept a parameter with two values (separated by space): <em>align</em> and <code>meet|slice</code>.</p><p>The <em>align</em> value takes two parts and directs the viewBox&#39;s alignment within the viewport:</p><ul><li><p><code>xMin</code> - Align the <code>min-x</code> of the element&#39;s viewBox with the smallest X value of the viewport.</p></li><li><p><code>xMid</code> - Align the midpoint X value of the element&#39;s viewBox with the midpoint X value of the viewport.</p></li><li><p><code>xMax</code> - Align the <code>min-x + width</code> of the element&#39;s viewBox with the viewport&#39;s maximum X value.</p></li><li><p><code>YMin</code> - Align the <code>min-y</code> of the element&#39;s viewBox with the smallest Y value of the viewport.</p></li><li><p><code>YMid</code> - Align the midpoint Y value of the element&#39;s viewBox with the midpoint Y value of the viewport.</p></li><li><p><code>YMax</code> - Align the <code>min-y + height</code> of the element&#39;s viewBox with the viewport&#39;s maximum Y value.</p></li></ul><p>The second value indicates how the aspect ratio is to be preserved:</p><ul><li><p><code>meet</code> (by default) - the entire viewBox is visible within the viewport; thus, the area in which the <code>viewBox</code> will be drawn will be smaller than the viewport.</p></li><li><p><code>slice</code> - the viewBox covers the entire viewport; thus, the area in which the <code>viewBox</code> will be drawn will be larger than the viewport.</p></li></ul><p>The combination of these parts define the <code>preserveAspectRatio</code> behavior in different situations between the <code>width</code> and <code>height</code>:</p><svg width="0" height="0"><defs><g id="content"><line x1="0" y1="0" x2="100" y2="100" stroke-width="1" stroke-dasharray="18.5,2" stroke="grey"></line><line x1="100" y1="0" x2="0" y2="100" stroke-width="1" stroke-dasharray="18.5,2" stroke="grey"></line></g></defs></svg><p><code>viewBox=&quot;0 0 100 100&quot; width=&quot;125&quot; height=&quot;75&quot;</code></p>',9),es=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},[s("code",null,"xMinYMin meet")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMidYMin meet")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMaxYMin meet")])])],-1),is={style:{"text-align":"center"}},ts={preserveAspectRatio:"xMinYMin meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},hs=s("use",{href:"#content"},null,-1),as=[hs],ns={style:{"text-align":"center"}},ls={preserveAspectRatio:"xMidYMin meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},os=s("use",{href:"#content"},null,-1),ds=[os],rs={style:{"text-align":"center"}},ks={preserveAspectRatio:"xMaxYMin meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},ps=s("use",{href:"#content"},null,-1),cs=[ps],gs=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},[s("code",null,"xMinYMin slice")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMinYMid slice")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMimYMax slice")])])],-1),ys={style:{"text-align":"center"}},Es={preserveAspectRatio:"xMinYMin slice",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},_s=s("use",{href:"#content"},null,-1),us=[_s],xs={style:{"text-align":"center"}},ws={preserveAspectRatio:"xMinYMid slice",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},vs=s("use",{href:"#content"},null,-1),Fs=[vs],Bs={style:{"text-align":"center"}},ms={preserveAspectRatio:"xMinYMax meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"125",height:"75"},Cs=s("use",{href:"#content"},null,-1),bs=[Cs],fs=s("p",null,[s("code",null,'viewBox="0 0 100 100" width="75" height="125"')],-1),qs=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},[s("code",null,"xMinYMin meet")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMinYMid meet")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMimYMax meet")])])],-1),Ms={style:{"text-align":"center"}},As={preserveAspectRatio:"xMinYMin meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Ss=s("use",{href:"#content"},null,-1),Ts=[Ss],Ys={style:{"text-align":"center"}},Rs={preserveAspectRatio:"xMinYMid meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Vs=s("use",{href:"#content"},null,-1),Gs=[Vs],Ps={style:{"text-align":"center"}},Is={preserveAspectRatio:"xMimYMax meet",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Ns=s("use",{href:"#content"},null,-1),zs=[Ns],Ds=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},[s("code",null,"xMinYMin slice")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMidYMin slice")]),s("th",{style:{"text-align":"center"}},[s("code",null,"xMaxYMin slice")])])],-1),$s={style:{"text-align":"center"}},Us={preserveAspectRatio:"xMinYMin slice",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Ws=s("use",{href:"#content"},null,-1),Xs=[Ws],js={style:{"text-align":"center"}},Hs={preserveAspectRatio:"xMidYMin slice",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Ks=s("use",{href:"#content"},null,-1),Js=[Ks],Os={style:{"text-align":"center"}},Ls={preserveAspectRatio:"xMaxYMin slice",viewBox:"0,0,100,100",style:{border:"1px dashed grey"},width:"75",height:"125"},Qs=s("use",{href:"#content"},null,-1),Zs=[Qs];function se(ee,ie,te,he,ae,ne){return i(),e("div",null,[l,(i(),e("svg",o,k)),p,s("table",null,[c,s("tbody",null,[s("tr",null,[s("td",null,[(i(),e("svg",g,_))]),s("td",null,[(i(),e("svg",u,v))]),s("td",null,[(i(),e("svg",F,C))])])])]),b,s("table",null,[f,s("tbody",null,[s("tr",null,[s("td",null,[(i(),e("svg",q,S))]),s("td",null,[(i(),e("svg",T,V))]),s("td",null,[(i(),e("svg",G,N))])])])]),z,s("table",null,[D,s("tbody",null,[s("tr",null,[s("td",null,[(i(),e("svg",$,X))]),s("td",null,[(i(),e("svg",j,J))]),s("td",null,[(i(),e("svg",O,Z))])])])]),ss,s("table",null,[es,s("tbody",null,[s("tr",null,[s("td",is,[(i(),e("svg",ts,as))]),s("td",ns,[(i(),e("svg",ls,ds))]),s("td",rs,[(i(),e("svg",ks,cs))])])])]),s("table",null,[gs,s("tbody",null,[s("tr",null,[s("td",ys,[(i(),e("svg",Es,us))]),s("td",xs,[(i(),e("svg",ws,Fs))]),s("td",Bs,[(i(),e("svg",ms,bs))])])])]),fs,s("table",null,[qs,s("tbody",null,[s("tr",null,[s("td",Ms,[(i(),e("svg",As,Ts))]),s("td",Ys,[(i(),e("svg",Rs,Gs))]),s("td",Ps,[(i(),e("svg",Is,zs))])])])]),s("table",null,[Ds,s("tbody",null,[s("tr",null,[s("td",$s,[(i(),e("svg",Us,Xs))]),s("td",js,[(i(),e("svg",Hs,Js))]),s("td",Os,[(i(),e("svg",Ls,Zs))])])])])])}const de=a(n,[["render",se]]);export{oe as __pageData,de as default};
