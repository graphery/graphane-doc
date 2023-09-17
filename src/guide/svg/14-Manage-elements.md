# Manage elements

When we include an SVG into the HTML, we include its XML into the browser's Document Object
Model (DOM). The DOM not only supports HTML but also endorses the SVG standard namespace. As a
result, we can manipulate the SVG inserted in the DOM with the same methods used to manage any
other element into the DOM. However, the SVG format has some specific features that require some
particular methods and properties. Next, we will review how the details that make up the SVG can
be handled and some specific methods and restrictions of the SVG.

## The SVG tree

### Types of elements into the SVG structure

In the SVG structure, we can find different elements classified in these types:

- **SVG document fragment**: it is a document sub-tree that starts with an `svg` element whose 
parent element is not in the SVG namespace. An `svg` element may contain other `svg` 
within it, but these deep elements are not the root.

- **Shape elements**: a graphics figure: `circle`, `ellipse`, `line`, `path`, `polygon`, 
`polyline`, and `rect`. The graphic elements cannot contain other shapes or structural elements
within it. To visualize a shape within another, we are placing one on top of the other.

- **Descriptive element**: provides descriptive information: `desc`, `metadata`, and `title`. The
content of these elements is not directly rendered.

- **Structural element**: defines the structure of an SVG document: `defs`, `g`, `svg`, `symbol`, 
and `use`.

- **External element**: define its structure by reference to an external resource: `foreignObject`,
`image`, and `use`.

- **Animation element**: it's an element used to animate the attribute or property value 
of another: `animate`, `animateMotion`, `animateTransform`, `discard`, and `set`.

- **Paint element**: defines a paint server: `linearGradient`, 
`pattern`, and `radialGradient`.

### Understand SVG basic rules on nested items

In practice, there are quite a few restrictions regarding the nesting of elements within the SVG
 structure, but we can summarize them in the two most important ones:

- SVG document fragment and structural elements can contain any element's kind.

- Shapes can contain descriptive, animation, and paint elements but cannot have other graphics or 
structural elements.

In this example, we can see how to define two `g`, put `lines` into it, and add a nested `title`
by each line:

:::: tabs :options="{ useUrlFragment: false }" 
::: tab javascript
```js
const svg        = gySVG ().viewBox (0, 0, 510, 510).width (510).height (510);
const horizontal = svg.add ('g').stroke_width (5).stroke ('red');
const vertical   = svg.add ('g').stroke_width (5).stroke ('blue');

for (let n = 2.5, l = 0; n <= 510; n += 50, l++) {
  const line = horizontal.add ('line').x1 (n).y1 (0).x2 (n).y2 (500);
  line.add ('title').content ('horizontal line nº ' + l);
}

for (let n = 2.5, l = 0; n <= 510; n += 50, l++) {
  const line = vertical.add ('line').x1 (0).y1 (n).x2 (505).y2 (n);
  line.add ('title').content ('vertical line nº ' + l);
}
```
:::
::: tab result
<div id="example1"></div>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
  const svg        = gySVG ().viewBox (0, 0, 510, 510).width (510).height (510);
  const horizontal = svg.add ('g').stroke_width (5).stroke ('red');
  const vertical   = svg.add ('g').stroke_width (5).stroke ('blue');
  for (let n = 2.5, l = 0; n <= 510; n += 50, l++) {
    const line = horizontal.add ('line').x1 (n).y1 (0).x2 (n).y2 (500);
    line.add ('title').content ('vertical line nº ' + l);
  }
  for (let n = 2.5, l = 0; n <= 510; n += 50, l++) {
    const line = vertical.add ('line').x1 (0).y1 (n).x2 (505).y2 (n);
    line.add ('title').content ('horizontal line nº ' + l);
  }
  svg.attachTo ('#example1');
</script>
:::
::: tab "svg source"
```svg
<svg viewBox="0,0,510,510" width="510" height="510">
  <g stroke-width="5" stroke="red">
    <line x1="2.5"   y1="0" x2="2.5"   y2="500">
      <title>vertical line nº 0</title> 
    </line>
    <line x1="52.5"  y1="0" x2="52.5"  y2="500">
      <title>vertical line nº 1</title> 
    </line>
    <line x1="102.5" y1="0" x2="102.5" y2="500">
      <title>vertical line nº 2</title> 
    </line>
    <line x1="152.5" y1="0" x2="152.5" y2="500">
      <title>vertical line nº 3</title> 
    </line>
    <line x1="202.5" y1="0" x2="202.5" y2="500">
      <title>vertical line nº 4</title> 
    </line>
    <line x1="252.5" y1="0" x2="252.5" y2="500">
      <title>vertical line nº 5</title> 
    </line>
    <line x1="302.5" y1="0" x2="302.5" y2="500">
      <title>vertical line nº 6</title> 
    </line>
    <line x1="352.5" y1="0" x2="352.5" y2="500">
      <title>vertical line nº 7</title> 
    </line>
    <line x1="402.5" y1="0" x2="402.5" y2="500">
      <title>vertical line nº 8</title> 
    </line>
    <line x1="452.5" y1="0" x2="452.5" y2="500">
      <title>vertical line nº 9</title> 
    </line>
    <line x1="502.5" y1="0" x2="502.5" y2="500">
      <title>vertical line nº 10</title>
    </line>
  </g>
  <g stroke-width="5" stroke="blue">
    <line x1="0" y1="2.5"   x2="505" y2="2.5"  >
      <title>horizontal line nº 0</title> 
    </line>
    <line x1="0" y1="52.5"  x2="505" y2="52.5" >
      <title>horizontal line nº 1</title> 
    </line>
    <line x1="0" y1="102.5" x2="505" y2="102.5">
      <title>horizontal line nº 2</title> 
    </line>
    <line x1="0" y1="152.5" x2="505" y2="152.5">
      <title>horizontal line nº 3</title> 
    </line>
    <line x1="0" y1="202.5" x2="505" y2="202.5">
      <title>horizontal line nº 4</title> 
    </line>
    <line x1="0" y1="252.5" x2="505" y2="252.5">
      <title>horizontal line nº 5</title> 
    </line>
    <line x1="0" y1="302.5" x2="505" y2="302.5">
      <title>horizontal line nº 6</title> 
    </line>
    <line x1="0" y1="352.5" x2="505" y2="352.5">
      <title>horizontal line nº 7</title> 
    </line>
    <line x1="0" y1="402.5" x2="505" y2="402.5">
      <title>horizontal line nº 8</title> 
    </line>
    <line x1="0" y1="452.5" x2="505" y2="452.5">
      <title>horizontal line nº 9</title> 
    </line>
    <line x1="0" y1="502.5" x2="505" y2="502.5">
      <title>horizontal line nº 10</title>
    </line>
  </g>
</svg>
```
:::
::::


## Navigate by the DOM

To understand how Graphane library hand the SVG DOM, we will cover an existing SVG and manage the 
elements easily with its specific methods. You can use `document.querySelector()` with an `id` 
or other CSS selectors for getting the element and pass this to the `gySVG()` constructor.

This is the example SVG:

```xml
<svg id="example2" viewBox="0 0 250 250" width="250" height="250">
  <g>
    <g stroke-width="50">
      <g stroke="red">
        <line id="line1" x1="0" y1="250" x2="250" y2="0">
          <title>line 1</title>
        </line> 
        <g stroke-dasharray="10,2">
          <line id="line2" x1="0" y1="0" x2="250" y2="250">
            <title>line 2</title>
          </line>
        </g>
      </g>
    </g>
  </g>
</svg>
 ``` 

We get the element and call to `gySVG()`:

```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

const svg = gySVG(document.querySelector('#example'));
```

Now we can manage the SVG tree very easily.

### children

You can get all first level nested element with this simple method: `.children()`. This returns an
array of objects. Each object is a gySVG wrapped over the SVG element with all methods defined
in the library. 

```js
for (let elLevel1 of svg.children()) {
  for (let elLevel2 of elLevel1.children()) {
    //...
  }
}
```

### parent

All elements attached to the DOM have a parent, and this can be get with `.parent()` (a short 
synonym of `.parentElement()`). This return an object created by gySVG over the original SVG 
element and has all methods defined in the library.

```js
const line = svg.querySelector('#line2');
const g    = line.parent();
//...
```

### sibling

The next and previous element in the same level can be taking with `.next()` (synomym of 
`.nextElementSibling ()`) and `.previous()` (synonym of `.previousElementSibling ()`). These methods, as all
other library method, return a wrapped object over the original element.

```js
const line1 = svg.first().first().first().first();
const g     = line1.next();
//...
```

## Search

You can get any nested element with `.querySelector()` or `.querySelectorAll()`. These methods
return an object, and an array of objects. Those objects are a Graphane wrapper over the original
elements with all library features. 

You can use all query selectors available without restrictions for searching deep elements into the
SVG structure.

```js
const lines = svg.querySelectorAll('line');
```

## Create and attach elements

It is possible to define a nested element without attaching it directly. For this purpose you need
to use the `gySVG()` constructor with the tag name as parameter:

```js
const newLine = gySVG('line');
```

With this new element, you can attach it into others elements with `.attachTo()`:

```js
newLine.attachTo(g);
```

It's possible to move elements between containers, for example, move the `#line1` to the deep `g` 
than define a `stroke_array()`:

```js
const g    = svg.querySelector('g > g > g > g');
const line = svg.querySelector('#line1');
line.attachTo(g);
``` 

## Clone elements 

With the method `.cloneNode()` is possible copy an element and obtain a new un attached element. 
This new element must be attached into any SVG element with `.attachTo()`.  

```js
const line1 = svg.add('line');
const line2 = line1.clone();
line.attachTo(svg);
```

## Remove elements

If you need to un attach an element, you can use `.remove()` method:

```js
newLine.remove();
```

The element exist after this operation, but it's removed from the SVG.