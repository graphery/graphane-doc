---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Home

hero:
  image: '/img/logo/g.svg'
  name: graphane
  tagline: data visualization microframework
  actions:
    - theme: brand
      text: Starter Guide
      link: /guide/starter/
    - theme: alt
      text: Examples
      link: /examples/

features:
  - title: Declarative Syntax
    details: Create and manage powerful graphs easily with our intuitive templating directives, reducing the learning curve and boosting productivity.
  - title: Data Binding
    details: Our rendering engine detect and apply changes to the graphical representation, ensuring seamless updates in sync with your data.
  - title: Powerful and Open
    details: It allows you to create all types of data-driven graphics, providing low-level access to all visual elements without limitation.
  - title: Seamless Integration
    details: Built on web components, it integrates smoothly with plain HTML and popular frameworks like React, Angular, Vue, and Svelte.
  - title: Performance Optimization
    details: Optimized for performance, our solution features efficient rendering algorithms and element reuse for high-speed, effective rendering.
  - title: Tiny size
    details: Designed as a microframework with a minimal footprint, it ensures a fast and smooth download experience.
---

## Simple example

```html
<g-composer>
  <svg viewBox="0 0 200 100" width="200px" height="100px">
    <g stroke-width="12" stroke-linecap="round">
      <defs g-for="(record, index) of data">
        <line  x1="22"
              :x2="record.value"
              :y1="index * 20 + 30"
              :y2="index * 20 + 30"
              :stroke="record.color"
        ></line>
      </defs>
    </g>
  </svg>
  <g-script type="data">
    [
      {"color": "#D80000", "value": 130},
      {"color": "#00D800", "value": 170},
      {"color": "#0000D8", "value": 100}
    ]
  </g-script>
</g-composer>
```


<g-composer>
  <svg viewBox="0 0 200 100" width="200px" height="100px">
	<g stroke-width="12" stroke-linecap="round">
	  <defs g-for="(record, index) of data">
  	    <line        x1="22" 
              g-bind:x2="record.value"   
              g-bind:y1="index * 20 + 30"
              g-bind:y2="index * 20 + 30"
              g-bind:stroke="record.color"
        ></line>
	  </defs>
	</g>
  </svg>
  <g-script type="data">
  [
    {"color": "#D80000", "value": 130},
    {"color": "#00D800", "value": 170},
    {"color": "#0000D8", "value": 100}
  ]
  </g-script>
</g-composer>
