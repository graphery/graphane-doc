import{_ as s,B as a,c as o,a3 as l,G as i,w as c,o as d,j as t}from"./chunks/framework.BSKDiXd-.js";const S=JSON.parse('{"title":"Scoped CSS","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/in-depth/style/scoped-css.md","filePath":"guide/in-depth/style/scoped-css.md"}'),r={name:"guide/in-depth/style/scoped-css.md"};function p(h,e,m,f,u,y){const n=a("ClientOnly");return d(),o("div",null,[e[1]||(e[1]=l('<h1 id="scoped-css" tabindex="-1">Scoped CSS <a class="header-anchor" href="#scoped-css" aria-label="Permalink to &quot;Scoped CSS&quot;">​</a></h1><p>By default, when you insert a style tag in the SVG, this style affects the entire page. Consequently, collisions and side effects may occur if the selectors used to match other elements.</p><p>On the other hand, the styles defined in the page affect all SVG inserted in the page. In this case, it can be useful to keep a coherent style between graphs, by can be complex to manage.</p><h2 id="css-define-into-the-template" tabindex="-1">CSS define into the template <a class="header-anchor" href="#css-define-into-the-template" aria-label="Permalink to &quot;CSS define into the template&quot;">​</a></h2><p>You can define a <code>&lt;style&gt;</code> directly in the template or into the <code>&lt;svg&gt;</code> into the template, it will be used only inside the component and will avoid collision with other styles and components. Graphane component moves the template into its <em>Shandow DOM</em> and applies the style internally.</p><p>This is a scoped CSS:</p>',6)),i(n,null,{default:c(()=>e[0]||(e[0]=[t("div",{id:"css-scope-1"},null,-1),t("g-editor",{href:"#css-scope-1"},[t("textarea",null,`<g-composer>
  <template>
    <svg viewBox="0 0 100 100">
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
      <defs g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </defs>
    </svg>
  </template>
  <script type="data">    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  <\/script>
</g-composer>`)],-1)])),_:1})])}const v=s(r,[["render",p]]);export{S as __pageData,v as default};
