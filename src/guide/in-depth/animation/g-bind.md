---
outline: deep
---

# `$$.dynamic()` with `g-bind`

Graphane Template Engine provides a very simple for of animation in collaboration with the
`g-bind` directive. When you use `$$.dynamic()` into the `g-bind` expression and the value is applied
progressively and show an animation.

The syntax is: `g-bind:attribute="$$.dynamic(<value> [, <duration>] [, <delay>])`.

```html{5-7}
<g-composer data="x: 50, y: 50, radius: 50" style="width: 200px;">
  <template>
    <svg viewBox="0 0 100 100">
      <circle fill="red"
              g-bind:r="$$.dynamic(radius, 2000)"
              g-bind:cx="$$.dynamic(x, 2000)"
              g-bind:cy="$$.dynamic(y, 2000)"/>
    </svg>
  </template>
</g-composer>
```

<g-composer data="x: 50, y: 50, radius: 50" id="dynamic1" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$$.dynamic([0, radius], 4000)"
            g-bind:cx="$$.dynamic([0, x], 4000)"
            g-bind:cy="$$.dynamic([0, y], 4000)"
            fill="red"/>
  </svg>
</g-composer>
<p>
  <button onclick="document.querySelector('#dynamic1').update()">
   click to run the animation
  </button>
</p>

### `<value>`

Any value applicable to the attribute we want to update progressively is accepted. You can use any
valid expression for calculated values.

### `<duration>`

By default, the animation duration is 200ms. You can change this behavior passing a second parameter
to `$$.dynamic()` function.

### `<delay>`

By default, the animation duration starts immediately. You can change this behavior passing a third
parameter to `$$.dynamic()` function in milliseconds.

## Keyframes as values

You can pass an array of values to describe non-linear progressing.

```html{7-12}
<g-composer data="radius: 50" style="width: 200px;">
  <template>
    <svg viewBox="0 0 100 100">
      <circle cx="50"
              cy="50"
              fill="red"
              g-bind:r="$$.dynamic([radius * 0.1, 
                                   radius * 0.5, 
                                   radius * 0.9, 
                                   radius * 0.7, 
                                   radius],
                                  2000)"/>
    </svg>
  </template>
</g-composer>
```

<g-composer data="radius: 50" id="dynamic2" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$$.dynamic(
      [radius * 0.1, 
       radius * 0.5, 
       radius * 0.9, 
       radius * 0.7, 
       radius],2000)"
            cx="50"
            cy="50"
            fill="red"/>
  </svg>
</g-composer>
<p>
  <button onclick="document.querySelector('#dynamic2').update()">
   click to run the animation
  </button>
</p>

Optionally, you can pass an object with `value` and `offset` (with values from 0 to 1) to have more
control over the execution of the animation.

In this section, you discover how to animate the SVG graph Graphane with `g-bind`.

*pending...*