---
outline: deep
---

# Attribute Style

## `g-bind`

When using `g-bind` directive with the `style` attribute, you can manage the inline style
dynamically. In this case, the binding is by an object containing CSS styles as key/value structure.
The keys of the object represent the CSS properties, and the values represent the corresponding
values for those properties.

<ClientOnly>
<div id="attribute-style-1">

</div>
<g-editor href="#attribute-style-1" lines-highlight="9">
<!--<g-composer>
<svg viewBox="0 0 100 100">
    <defs g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
    </defs>
  </svg>
  <g-script type="data">    "x";"y";"radix";"color"
    20;20;20;"red"
    45;45;30;"blue"
    80;80;10;"green"
  </g-script>
</g-composer>-->
</g-editor>
</ClientOnly>

## API

You can define and get the style with the Graphane SVG API `.style`. Each style property is now
a method, and you can call with parameter to set value or without parameter to get the current value.

<svg viewBox="0,0,200,200" style="width: 75px; height:75px">
  <rect style="x: 10; y: 10; width: 180; height: 180; fill: #00D800"/>
</svg>

```js
$.svg.querySelector('rect')
 .style.x('10px')
 .style.y('10px')
 .style.width('180px')
 .style.height('180px')
 .style.fill('red');
```
