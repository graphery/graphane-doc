---
outline: deep
---

# Attribute Helpers

For some cases, Graphane offers helper functions to simplify the construction of the values accepted
by the SVG attribute. These helpers are available in the `$$` object, accessible from the `g-bind`
expressions of the following attributes:

## Attribute `transform`

The transform attribute values are converted in helper functions. You can use these helpers to 
build the transformation. You can combine the helpers, as `$$.translate(10,10).rotate(45)`.

- `$$.translate(<x>, [<y>)` moves the object by `x` and `y`, if `y` is not provided, it is assumed to
  be `0`.

- `$$.scale(<x>, [<y>])` specifies a scale operation by `x` and `y`, if `y` is not provided, it is
  assumed to be equal to `x`.

- `$$.rotate(<a>, [<x>, <y>])` define a rotation by a degrees `a` about a given point (`x` and `y`),
  if `x` and `y` are not supplied, the rotation is about the origin coordinate system.

- `$$.skewX(<a>)` and `$$.skewY(<a>)` specify a skew transformation along the `x` and `y` axis
  by `a` degrees.

- `$$.matrix(<a>, <b>, <c>, <d>, <e>, <f>)` modify the form by a transformation matrix.

Example:

```html{8,11}
<g-composer style="width: 100px">
  <template>
    <svg viewBox="0 0 100 100">
      <path fill="none" stroke="#D80000" stroke-width="2" 
        d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"/>
      <path fill="none" stroke="#00D800" stroke-width="2" 
        d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"
        :transform="$$.translate(41,24)"/>
      <path fill="none" stroke="#0000D8" stroke-width="2" 
        d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"
        :transform="$$.translate(0,48).rotate(60,30,26)"/>
    </svg>
  </template>
</g-composer>
```

<g-composer style="width: 100px">
  <svg viewBox="0 0 100 100">
    <path fill="none" stroke="#D80000" stroke-width="2" 
      d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"/>
    <path fill="none" stroke="#00D800" stroke-width="2" 
      d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"
      g-bind:transform="$$.translate(41,24)"/>
    <path fill="none" stroke="#0000D8" stroke-width="2" 
      d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"
      g-bind:transform="$$.translate(0,48).rotate(60,30,26)"/>
  </svg>
</g-composer>

## Attribute `d` in `path`

Constructing the `d` attribute of a `path` in SVG may seem complicated, but it is a series of
relatively simple instructions. Graphane offers a series of helpers to construct the value of `d`
step by step, chaining the different functions.

- `M(<x>, <y>)` `m(<x>, <y>)` move to absolute and relative point.
- `Z()` `z()` close path.
- `L(<x>, <y>)` `l(<x>, <y>)` line to absolute and relative point.
- `H(<x>)` `h(<x>)` horizontal line to absolute and relative `x` point.
- `V(<y>)` `v(<y>)` vertical line to absolute and relative `y`point.
- `C(<x1>, <y1>, <x2>, <y2>, <x>, <y>)` `c(<x1>, <y1>, <x2>, <y2>, <x>, <y>)` absolute and relative
  cubic Bézier curve.
- `S(<x1>, <y1>, <x2>, <y2>)` `s(<x1>, <y1>, <x2>, <y2>)` absolute and relative smooth cubic Bézier
  curve.
- `Q(<x1>, <y1>, <x>, <y>)` `q(<x1>, <y1>, <x>, <y>)` absolute and relative quadratic Bézier curve.
- `T(<x>, <y>)` `t(<x>, <y>)` absolute and relative smooth quadratic Bézier curve.
- `A(<rx>, <ry>, <rot>, <arc-flag>, <sweep-flag>, <x>, <y>)`
  `a(<rx>, <ry>, <rot>, <arc-flag>, <sweep-flag>, <x>, <y>)`
  absolute and relative arc curve.

Example:

```html{5,7,9}
<g-composer style="width: 100px">
  <template>
    <svg viewBox="0 0 100 100">
      <path fill="none" stroke="#D80000" stroke-width="2" 
        :d="$$.M(42.5,4.35).L(55,26).L(42.5,47.65).L(17.5,47.65).L(5,26).L(17.5,4.35).Z()"/>
      <path fill="none" stroke="#00D800" stroke-width="2" 
        :d="$$.M(83.5,28.35).L(96,50).L(83.5,71.65).L(58.5,71.65).L(46,50).L(58.5,28.35).Z()"/>
      <path fill="none" stroke="#0000D8" stroke-width="2" 
        :d="$$.M(42.5,52.35).L(55,74).L(42.5,95.65).L(17.5,95.65).L(5,74).L(17.5,52.35).Z()"/>
    </svg>
  </template>
</g-composer>
```

<g-composer style="width: 100px">
  <svg viewBox="0 0 100 100">
    <path fill="none" stroke="#D80000" stroke-width="2" 
      g-bind:d="$$.M(42.5,4.35).L(55,26).L(42.5,47.65).L(17.5,47.65).L(5,26).L(17.5,4.35).Z()"/>
    <path fill="none" stroke="#00D800" stroke-width="2" 
      g-bind:d="$$.M(83.5,28.35).L(96,50).L(83.5,71.65).L(58.5,71.65).L(46,50).L(58.5,28.35).Z()"/>
    <path fill="none" stroke="#0000D8" stroke-width="2" 
      g-bind:d="$$.M(42.5,52.35).L(55,74).L(42.5,95.65).L(17.5,95.65).L(5,74).L(17.5,52.35).Z()"/>
  </svg>
</g-composer>