---
outline: deep
---

# Use CSS

## SVG style

Commonly, the SVG visual attributes have an equivalent CSS property, for example, `x`, `y`,
`with`, `height`, `stroke` or `fill` can be defined as style. For example, you can choose to
use  `. stroke-width` SVG attribute or `stroke-width` style property.

## Inline style

You can define the style for each SVG element with the `style` attribute, and with the SVG Graphane
API with the `.style()` method and the `.style` object.

::: code-group

```svg
<svg viewBox="0,0,200,200" style="width: 75px; height:75px">
    <rect style="x: 10; y: 10; width: 180; height: 180; fill: #00D800"/>
</svg>
```

```js
gySVG().viewBox(0, 0, 200, 200).style('width: 75px; height: 75px');
$.svg.add('rect').style('x: 10px; y: 10px; width: 180px; height: 180px; fill: #00D800');
```

:::

<svg viewBox="0,0,200,200" style="width: 75px; height:75px">
  <rect style="x: 10; y: 10; width: 180; height: 180; fill: #00D800"/>
</svg>


With the SVG Graphane API you can use the `.style` object to access its child properties
as methods. Its properties are now methods with the same name as the original property name: If you
need to get any style property value, you can use the method without a parameter, and it returns the
current style value:

```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

gySVG().viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('rect').style.x('10px').style.y('10px')
 .style.width('180px').style.height('180px')
 .style.fill('red');
$.svg.attachTo('#example2');
```

```js
const stroke = element.style.stroke();
```

## style tag

It's possible to create it a `style` tag into the SVG and put CSS rules into this.

::: warning Note

Styles defined in the SVG affect the entire page.

Styles defined in the page affect the $.svg.

Consequently, collisions and side effects may occur if the selectors used match other elements.
:::

::: code-group

```svg
<svg viewBox="0,0,200,200" width="75" height="75">
    <style>
        #rectangle {
        fill : red;
        x : 5px;
        y : 5px;
        width : 180px;
        height : 180px;
        }
    </style>
    <rect id="rectangle"/>
</svg>
```

```js
gySVG().viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('style').content(`
   #rectangle {
      fill   : red;
      x      : 5px;
      y      : 5px;
      width  : 180px;
      height : 180px;
   }`);
$.svg.add('rect').id('rectangle');
```

:::

## class

You can use the `class` attribute and the `.classList` object and its methods:

- `.classList.contains( class )` - returns true if the list contains the given class, otherwise
  false.
- `.classList.add( class )` - adds the specified class.
- `.classList.remove( class )` - removes the specified class.
- `.classList.replace( oldClass, newClass)` - replaces oldClass with newClass.
- `.classList.toggle( class )` - removes class from if it exists or adds class if it doesn't.

::: code-group

```svg
<svg viewBox="0,0,200,200" width="200" height="200">
    <style>
        .rectangle {
        cursor : pointer;
        x : 5px;
        y : 5px;
        width : 180px;
        height : 180px;
        }
        .alarm {
        fill : red;
        }
        .regular {
        fill : blue;
        }
        .message {
        font-family : monospace;
        font-size : 10px;
        fill : white;
        }
    </style>
    <rect class="rectangle alarm"></rect>
    <text x="10" y="100" class="message">Alarm</text>
</svg>
```

```js
gySVG().viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('style').content(`
   .rectangle {
      cursor : pointer;
      x      : 5px;
      y      : 5px;
      width  : 180px;
      height : 180px;
   }
   .alarm {
     fill: red;
   }
   .regular {
     fill: blue;
   }
   .message {
     font-family : monospace;
     font-size   : 10px;
     fill        : white;
   }
   `);
const rect = $.svg.add('rect').classList.add('rectangle').classList.add('regular');
$.svg.add('text').x(10).y(100).content('Alarm').classList.add('message');
```

:::