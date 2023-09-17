# Manage elements

## gSVG()

Creates a new SVG element and returns its Graphane wrapper object for manipulation.

- **argument**: nothing

- **return**: `{ object } SVGWrapper` an Graphane wrapper object.

```js
const mySVG = gSVG();
```

## gSVG(object)

Creates a wrapped object from an existing SVG DOM object.

- **argument**: `{object} SVGElement` an SVG element object.

- **return**: `{object} wrapper` SVG wrapper object.

```html
<svg id="mySvg"></svg>
```

```js
const el    = document.querySelector('#mySvg');
const mySVG = gSVG(el);
```

## gSVG(tagName)

Create a new SVG element, i.e., a `'svg'`, `'circle'`, and returns its wrapper object. This element must be attached
into an SVG element with `.attachTo()`.

- **argument**: `{string} tagName` the tag name for the new element.

- **return**: `{object} wrapper` the new SVG wrapper object.

```js
const mySVG  = gSVG();
const myRect = gSVG('rect');
myRect.attachTo(mySVG);
``` 

## gSVG.isWrapped ()

Check if an object is an SVG wrapper object or not.

- **argument**: `{object}` an SVG or an SVGElement object.

- **return**: `{boolean}` true or false.

```js
gSVG.isWrapped(obj)
```


## *element*.add( *tagName* )

Creates and attach a nested SVG element and returns its Graphane wrapper object.

```js
const rect = parentElement.add('rect');
```


## *element*.attachTo( *selector* | *element* )

Adds the SVG element into the DOM. This method receives as parameter a string with a selector, a DOM element or
Graphane wrapper, and puts the SVG element in the DOM.

```html
<div id="content"></div>
```

```js
const mySvg = gSVG();
mySvg.attachTo('#content');
```


## *element*.remove()

Unlinks the object from the parent element.

```js
element.remove();
```


## *element*.querySelector( *selector* )

You can get the first nested element that maches with the selector as parameter.

```js
const lines = svg.querySelectorAll('line');
```


## *element*.querySelectorAll( *selector* )

You can get the All nested element that maches with the selector as parameter.

```js
const lines = svg.querySelectorAll('line');
```

## *element*.children()

Returns an array with all nested elements.

```js
for (let el of element.children()) {
  //...
}
```

## *element*.parent()

Returns the parent object or null if not exist.

```js
const g = line.parent();
```

`.parent()`


## *element*.closest( *selector* )

Returns the first parent object that the selector matches or null if not found.

```js
const svg = gSVG();
const g1 = svg.add('g');
const g2 = g1.add('g');
if (svg === g2.closest('svg')) {
  //...
}
```


## *element*.cloneNode(\[true\])

Creates an element copy. If the parameter is `true`, the copy is in deep and other child elements are copied too. A
clone node must be attached to an element with `.attachTo()`.

```js
const svg     = gSVG();
const circle1 = svg.add('circle');
const circle2 = circle1.cloneNode().attachTo(svg);
```


## *element*.content()

If you need to get the SVG element content as a text, you can use the method `.content()` without
parameters. This method return the current inner SVG elements.

```js
const svg = gSVG().viewBox('0 0 100 100');
svg.add('circle').r(10).cx(50).cy(50);
console.log(svg.content());
```


## *element*.content(source)

If you need to put the SVG element content from a text, you can use the method
`.content(source)`. This method return the current Graphane wrapper and put the text as inner
source.

```js
const svg = gSVG().viewBox('0 0 100 100');
svg.content(`<circle r="10" cx="50" cy="50"></circle>`);
```

## *element*.source()

If you need to get the element source, included the element, you can use `.source()`. This method
return the source element as a text.

```js
const svg = gSVG().viewBox('0 0 100 100');
svg.add('circle').r(10).cx(50).cy(50);
console.log(svg.source());
```


## *element*.id()

Returns the current unique ID. If the element does not have a unique ID, it is created.


## *element*.href()

Returns the unique ID as a `#id`


## *element*.url()

Returns the unique ID as a `url(id)`


## *element*.el

In some cases you need the unwrapped original element. In these cases you can get the original element wrapped with 
the attribute `.el`.

```js
const svg = gSVG().viewBox('0 0 100 100');
document.querySelector('#container').appendChild(svg.el);
```  

