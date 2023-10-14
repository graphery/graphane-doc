---
outline: deep
---

# Web Component API

The following is a description of the API of the different Web Components that make up Graphane.

## [g-template](g-template.md)

This component is the main element for generating graphics using a declarative template.

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

### SVG Templating

SVG template system.

- [g-bind](templating.g-bind.md)
- [g-content](templating.g-content.md)
- [g-for](templating.g-for.md)
- [g-if](templating.g-if.md)
- [g-on](templating.g-on.md)

### Attributes

Component attributes.

- [data](g-template.attribute.data.md)
- [data-src](g-template.attribute.data-src.md)
- [data-type](g-template.attribute.data-type.md)
- [methods](g-template.attribute.methods.md)
- [src](g-template.attribute.src.md)

## [g-data](g-data.md)

This subcomponent specializes in data management.

```html
<g-template>
  <g-data type="csv">
    "continent";"population";
    "Asia";4694576167;
    "Africa";1393676444;
    "Europe";745173774;
    "North America";595783465;
    "South America";434254119;
    "Oceania";44491724;
    "Antarctica";3000;
  </g-data>
</g-template>
```

### Attributes

Component attributes.

- [src](g-data.src.md)
- [type](g-data.type.md)

### Content

Component content.

- [content](g-data.content.md)

## [g-methods](g-methods.md)

This subcomponent specializes in methods management.

```html
<g-template>
  <g-methods>{
    method() {
      //...
    }
  }</g-methods>
</g-template>
```

### Attributes

Component attributes.

- [src](g-methods.attribute.src.md)

### Content

Component content.

- [content](g-methods.content.md)

