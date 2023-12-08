---
outline: deep
---

# Template

The template is an SVG with special directives. These directives define how the graphic is built  
with the data.

```html {2-14}
<g-composer>
  <template>
    <svg viewBox="0 0 100 100" width="100"  height="100">
      <defs g-for="x of 3">
        <circle 
          cx="50" 
          cy="50" 
          g-bind:r="(x + 1) * (48 / 3)"
          fill="none" 
          stroke="black" 
          stroke-width="1"/>
      </defs>
    </svg>
  </template>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" width="100"  height="100">
    <defs g-for="x of 3">
      <circle 
        cx="50" 
        cy="50" 
        g-bind:r="(x + 1) * (48 / 3)"
        fill="none" 
        stroke="black" 
        stroke-width="1"/>
    </defs>
  </svg>
</g-composer>



The standard SVG format is enhanced with **attribute-based directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development. Any designer with a little programming knowledge can make great data-driven
designs.

- [`g-bind`](../templating/binding) (or the shorthand `:`): dynamically bind values to 
  attributes and styles.
- [`g-for`](../templating/lists): render the element block (commonly a `defs`) multiple times based on the data.
- [`g-if`](../templating/conditional): show an element conditionally.
- [`g-content`](../templating/content): update the element content.
- [`g-on`](../templating/events) (or the shorthand `@`): attach an event listener to the element.
