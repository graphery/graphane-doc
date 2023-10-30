---
outline: deep
---

# SVG

The `g-composer` can include a `svg` tag or link it as external resource with `svg-src`. This SVG
is a standard SVG with some extra features for templating the content from the data.

```html
<g-composer data="value: 50">   <!-- g-composer component -->
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
</g-composer>
```

<g-composer data="value: 50">        <!-- g-composer component -->
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
</g-composer>

## Templating directives

SVG template is based on these special attributes or directives:

- [`g-bind`](templating/g-bind.md) - set attributes value based on the data. 
- [`g-content`](templating/g-content.md) - insert content into the element.
- [`g-for`](templating/g-for.md) - render the element multiple times based on the data.
- [`g-if`](templating/g-if.md) - conditionally render an element based on the data.
- [`g-on`](templating/g-on.md) - attach an event listener to the element.

## Attribute `svg-src`

The `g-composer` component has this attribute:

- [`svg-src`](src.md) link to an external SVG template file.

## Property `.svg`

The `g-composer` component has this property:

- [`.svg`](property.md) a [wrapped](./lib/index.md) version of the SVG generated.