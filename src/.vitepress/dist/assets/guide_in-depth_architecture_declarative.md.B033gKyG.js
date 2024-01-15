import{_ as e,c as a,o as i,U as t}from"./chunks/framework.on6qGByC.js";const u=JSON.parse('{"title":"Declarative vs. Imperative approach","description":"","frontmatter":{},"headers":[],"relativePath":"guide/in-depth/architecture/declarative.md","filePath":"guide/in-depth/architecture/declarative.md"}'),r={name:"guide/in-depth/architecture/declarative.md"},o=t('<h1 id="declarative-vs-imperative-approach" tabindex="-1">Declarative vs. Imperative approach <a class="header-anchor" href="#declarative-vs-imperative-approach" aria-label="Permalink to &quot;Declarative vs. Imperative approach&quot;">​</a></h1><p>Both declarative (by tag) and imperative (by code) approaches play a vital role in data visualization processes. These approaches are adopted depending on the particular requirements. The following will explore the differences between JavaScript (imperative) and SVG (declarative) and how Graphane combine these models.</p><h2 id="imperative-approach-javascript" tabindex="-1">Imperative approach (JavaScript) <a class="header-anchor" href="#imperative-approach-javascript" aria-label="Permalink to &quot;Imperative approach (JavaScript)&quot;">​</a></h2><p>In the imperative paradigm, we are in charge of defining the actions that achieve our goal. There are many widely used JavaScript libraries for generating data visualizations. They offer an imperative methodology where we precisely guide the DOM state changes to reach the end, requiring quite a lot of programming knowledge and a significant amount of code to build the visualizations.</p><h2 id="declarative-approach-svg" tabindex="-1">Declarative approach (SVG) <a class="header-anchor" href="#declarative-approach-svg" aria-label="Permalink to &quot;Declarative approach (SVG)&quot;">​</a></h2><p>In contrast, in the declarative paradigm, we only express our goal, the <em>what</em>, and the system takes care of the <em>how</em>. Graphane with the SVG template represents the declarative data visualization, where each concern has its specific space.</p><p>Graphane and the declarative model are easier to use, especially when customization is needed. Therefore, the choice between an imperative or a declarative approach depends on the use-case scenario on the use case scenario, the specific needs, and the user&#39;s familiarity with both methods.</p><h3 id="directive-syntax" tabindex="-1">Directive Syntax <a class="header-anchor" href="#directive-syntax" aria-label="Permalink to &quot;Directive Syntax&quot;">​</a></h3><p>Graphane uses directive syntax (like <code>g-for</code>, <code>g-bind</code>, etc.) simplifying the templates and making them more readable. The template syntax is straightforward and expressive. The templates are written in standard SVG, making them accessible for team members who might not be as familiar with JavaScript.</p><h3 id="readability-and-maintainability" tabindex="-1">Readability and maintainability <a class="header-anchor" href="#readability-and-maintainability" aria-label="Permalink to &quot;Readability and maintainability&quot;">​</a></h3><p>Code is often more accessible to read and more understandable because it describes what we want the result to be rather than the step-by-step process to achieve it. This readability makes code maintenance much more manageable as our project scales or our visualization becomes more complex.</p><h3 id="unidirectional-data-flow" tabindex="-1">Unidirectional data flow <a class="header-anchor" href="#unidirectional-data-flow" aria-label="Permalink to &quot;Unidirectional data flow&quot;">​</a></h3><p>Graphane implements a unidirectional data flow. This means that the state flows in one direction, making it easier to track changes and debug the system when things go wrong because we will know exactly where to look for errors.</p><h3 id="manageability" tabindex="-1">Manageability <a class="header-anchor" href="#manageability" aria-label="Permalink to &quot;Manageability&quot;">​</a></h3><p>Graphane allows more direct control over the final graphical output. It provides a system of templates to define the visualization, leading to more efficient and easier code management. In addition, they incorporate other advantages that significantly improve the performance of highly interactive user interfaces.</p><h3 id="flexibility-and-high-customization" tabindex="-1">Flexibility and high customization <a class="header-anchor" href="#flexibility-and-high-customization" aria-label="Permalink to &quot;Flexibility and high customization&quot;">​</a></h3><p>Declarative coding also provides high customization when it comes to rendering components on the screen, gaining a great deal of control over their behavior, and we can modify them to meet even the unique use cases.</p>',17),n=[o];function c(s,h,l,d,p,m){return i(),a("div",null,n)}const g=e(r,[["render",c]]);export{u as __pageData,g as default};