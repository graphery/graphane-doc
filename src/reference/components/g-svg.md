---
outline: deep
---

# g-template

The `g-template` custom tag is the main web component of the SVG Graphane declarative micro framework. It
is used as a data driven SVG template.

```html

<g-template data="value: 50">        <!-- g-template component -->
  <svg viewBox="0 0 400 270">   <!-- SVG Template -->
    <defs g-for="y of 5">       <!-- g-for attribute -->
      <defs g-for="x of 20">    <!-- g-for attribute -->
        <path g-if="((y * 20) + x < value)"
              g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"
        />                      <!-- g-if & g-bind attributes -->
      </defs>
    </defs>
  </svg>
</g-template>
```

<g-template data="value: 50">        <!-- g-template component -->
  <svg viewBox="0 0 400 270">   <!-- SVG Template -->
    <defs g-for="y of 5">       <!-- g-for attribute -->
      <defs g-for="x of 20">    <!-- g-for attribute -->
        <path g-if="((y * 20) + x < value)"
              g-bind:transform="translate(x * 20, y * 55)"
              d="M14,30L14,49L4,49L4,30C2,29,1,28,1,27L1,11C1,10,1,9,3,9L7,9L6.3,3
               C6,-1,11,-1,11.7,3L11,9L15,9C17,8.9,17,10,17,11L17,27C17,28,16,29,14,30Z"
        />                      <!-- g-if & g-bind attributes -->
      </defs>
    </defs>
  </svg>
</g-template>

### SVG Templating

SVG template is based on these attributes.

- [g-bind](templating.g-bind.md) - set attributes value based on the data. 
- [g-content](templating.g-content.md) - insert content into the element.
- [g-for](templating.g-for.md) - render the element multiple times based on the data.
- [g-if](templating.g-if.md) - conditionally render an element based on the data.
- [g-on](templating.g-on.md) - attach an event listener to the element.

### Attributes

The `g-template` component accepts these configuration attributes.

- [src](g-template.attribute.src.md) - define the svg template as external resource.
- [data](g-template.attribute.data.md) - define a simple key-value.
- [data-src](g-template.attribute.data-src.md) - define the data source.
- [data-type](g-template.attribute.data-type.md) - define the data source type (csv, json or js).
- [methods](g-template.attribute.methods.md) - define the method source (js object with methods).
