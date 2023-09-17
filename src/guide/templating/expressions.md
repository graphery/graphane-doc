---
outline: deep
---

# Evaluation of expressions in directives

In Graphane, you can use different types of JavaScript expressions within directives to achieve
various functionalities. Here are the commonly used JavaScript expressions in directives:

## Simple Data Binding

With simple data binding, you can use some value of a `data` property in the SVG template.

With simple data binding, you can use the value of a data property in the SVG template. For example,
with `g-bind` or using the shorthand colon notation (`:`), you can bind the property value to SVG
elements.

```html

<circle :fill="value.color" cx="50" cy="50" r="25"></circle>
```

## Conditional expression

You can use conditional expressions to conditionally render SVG elements based on certain
conditions. In Graphane, you can use the ternary operator condition `? ok : ko` or the boolean
operators `&&` and `||` to define conditional expressions. For example:

```html

<circle :fill="value.regular ? 'green' : 'red'" cx="50" cy="50" r="25"></circle>
```

## Destructuring in `g-for`

In Graphane, you can use the `g-for` directive to loop over an array and generate SVG elements
dynamically. With JavaScript destructuring, you can extract specific values from the array elements
and use them within the SVG elements.

```html

<g g-for="({ x, y }) of points">
  <circle :cx="x" :cy="y" r="5"/>
</g>
```

## Calling Functions

You can use functions into the expressions. The function return must be used as value for directives

```html

<g g-for="point of data.points()">
  <circle :cx="point.x" :cy="point.y" r="5"/>
</g>
```

## Restricted  Access

In Graphane, template expressions are *sandboxed* and have limited access. They can only access
the `data` object and some commonly used built-in global objects such as `Math` and `Date`. This
restricted access ensures a secure and predictable environment for evaluating expressions within the
SVG document.
