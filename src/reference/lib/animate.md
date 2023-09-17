# animate

The SVG `animate` element provides a way to animate an attribute of an element over time.

Usually, this element is created with:

```js
const animate = parentElement.add('animate')
```

It's possible to create it as a disconnected element with `gSVG('animate')` and attach it to the SVG
document with `.attachTo()`.

## .attributeName()

`.attributeName()` defines the attribute to animate.

## .from() and .to()

`.from()` and `.to()` must be used for defining the initial and finish values of this attribute.

## .dur()

`.dur()` defines the animation duration ('1s' or '1000ms' are valid values).

## .fill()

`.fill()` defines the final state of the animation. If the value is `'freeze'`, the state of the
last animation frame is kept, but by default is `'remove'`, and as a result, after the last
animation frame, the attribute value returns to the first.

## .begin() and .beginElement()

For control about when the animation is running, we can configure the animate element
`.begin('indefinite')` and call to `.beginElement()` for execute the animation.

With `.values()` and `.keyTimes()` you can define with more precision the animation, establishing
the values that the property has to have in each moment.

*More info*:
[mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/animate) |
[w3c](https://svgwg.org/specs/animations/#AnimateElement)

- **Parent elements**:
  [a](a.md) |
  [circle](circle.md) |
  [clipPath](clipPath.md) |
  [defs](defs.md) |
  [ellipse](ellipse.md) |
  [feBlend](./FilterPrimitives#feblend) |
  [feColorMatrix](./FilterPrimitives#fecolormatrix) |
  [feComposite](./FilterPrimitives#fecomposite) |
  [feConvolveMatrix](./FilterPrimitives#feconvolvematrix) |
  [feDisplacementMap](./FilterPrimitives#fedisplacementmap) |
  [feDistantLight](./FilterPrimitives#fedistantlight) |
  [feDropShadow](./FilterPrimitives#fedropshadow) |
  [feFlood](./FilterPrimitives#feflood) |
  [feFuncA](./FilterPrimitives#fefunca) |
  [feFuncB](./FilterPrimitives#fefuncb) |
  [feFuncG](./FilterPrimitives#fefuncg) |
  [feFuncR](./FilterPrimitives#fefuncr) |
  [feGaussianBlur](./FilterPrimitives#fegaussianblur) |
  [feImage](./FilterPrimitives#feimage) |
  [feMergeNode](./FilterPrimitives#femergenode) |
  [feMorphology](./FilterPrimitives#femorphology) |
  [feOffset](./FilterPrimitives#feoffset) |
  [fePointLight](./FilterPrimitives#fepointlight) |
  [feSpotLight](./FilterPrimitives#fespotlight) |
  [feTile](./FilterPrimitives#fetile) |
  [feTurbulence](./FilterPrimitives#feturbulence) |
  [filter](filter.md) |
  [g](g.md) |
  [image](image.md) |
  [line](line.md) |
  [linearGradient](linearGradient.md) |
  [marker](marker.md) |
  [mask](mask.md) |
  [path](path.md) |
  [pattern](pattern.md) |
  [polygon](polygon.md) |
  [polyline](polyline.md) |
  [radialGradient](radialGradient.md) |
  [rect](rect.md) |
  [stop](stop.md) |
  [svg](svg.md) |
  [switch](switch.md) |
  [symbol](symbol.md) |
  [text](text.md) |
  [textPath](textPath.md) |
  [tspan](tspan.md) |
  [use](use.md).

- **Child elements**: [desc](desc.md) |
  [metadata](metadata.md) |
  [title](title.md).

