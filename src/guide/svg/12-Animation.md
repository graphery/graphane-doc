---
outline: deep
---

# Animation

Animating the elements of an SVG graphic is one of the most attractive features available to make
stunning visualizations. To animate an SVG we can use their native capabilities and the high-level
functionalities offered by Graphane.

Graphane provides a cross-browser compatible, efficient and simple animation solution. It works
internally with CSS and SMIL, selecting the best option in each case and offering a basic API.

Natively SVG animations can be achieved through various methods, each with its own approach and
potential problems. We recommend using Graphane animation functionality rather than using the native
animations directly, although they will always be available for use.

::: warning Prevent animation

When the operating system is configured for not to perform animations, Graphane detects this
configuration and respects the user's settings, changing the values immediately and avoiding showing
transitions or animations.

:::

## `$.dynamic()` with `g-bind`

Graphane Template Engine provides a very simple for of animation in collaboration with the
`g-bind` directive. When you use `$.dynamic()` into the `g-bind` expression and the value is applied
progressively and show an animation.

The syntax is: `g-bind:attribute="$.animate(value [, duration] [, delay])`.

```html

<g-composer data="x: 50, y: 50, radius: 50">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$.dynamic(radius, 2000)"
            g-bind:cx="$.dynamic(x, 2000)"
            g-bind:cy="$.dynamic(y, 2000)"
            fill="red"/>
  </svg>
</g-composer>
```

<g-composer data="x: 50, y: 50, radius: 50" id="dynamic1">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$.dynamic([0, radius], 4000)"
            g-bind:cx="$.dynamic([0, x], 4000)"
            g-bind:cy="$.dynamic([0, y], 4000)"
            fill="red"/>
  </svg>
</g-composer>
<p>
  <button onclick="document.querySelector('#dynamic1').update()">
   click to run the animation
  </button>
</p>

### Value

Any value applicable to the attribute we want to update progressively is accepted. You can use any
valid expression for calculated values.

### Duration

By default, the animation duration is 200ms. You can change this behavior passing a second parameter
to `$.dynamic()` function.

### Delay

By default, the animation duration starts immediately. You can change this behavior passing a third
parameter to `$.dynamic()` function in millisconds.

### Keyframes as values

You can pass an array of values to describe non-linear progressing.

```html

<g-composer data="radius: 50" id="dynamic2">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$.dynamic([radius * 0.1, 
                                 radius * 0.5, 
                                 radius * 0.9, 
                                 radius * 0.7, 
                                 radius],
                                2000)"
            cx="50"
            cy="50"
            fill="red"/>
  </svg>
</g-composer>
```

<g-composer data="radius: 50" id="dynamic2">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$.dynamic(
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

```html

<g-composer data="radius: 50" id="dynamic3">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$.dynamic([{value: 0,            offset: 0},
                                 {value: radius,       offset: 0.8},
                                 {value: radius * 0.9, offset: 0.9},
                                 {value: radius,       offset: 1}],
                                2000)"
            cx="50"
            cy="50"
            fill="red"/>
  </svg>
</g-composer>
```

<g-composer data="radius: 50" id="dynamic3">
  <svg viewBox="0 0 100 100">
    <circle g-bind:r="$.dynamic([{value: 0,            offset: 0},
                                 {value: radius,       offset: 0.8},
                                 {value: radius * 0.9, offset: 0.9},
                                 {value: radius,       offset: 1}],
                                2000)"
            cx="50"
            cy="50"
            fill="red"/>
  </svg>
</g-composer>
<p>
  <button onclick="document.querySelector('#dynamic3').update()">
   click to run the animation
  </button>
</p>

## `.animateTo()` with wrapped SVG

Into the Graphane methods we can use `.animateTo()` for every SVG elements. This method accepts as
parameter an object with attributes as keys and the target values.

Optionally, we can include a transition duration in milliseconds as a second parameter. By default,
the animation duration is 200 milliseconds. If you pass a time value `0`, the change is executed
immediately, and the animation is not displayed.

```html

<g-composer>
  <svg viewBox="0 0 200 100" width="200" height="100">
    <g stroke-width="12" stroke-linecap="round">
      <line id="lineR" stroke="#C0C0C0" x1="10" x2="10" y1="10" y2="10"/>
      <line id="lineG" stroke="#C0C0C0" x1="10" x2="10" y1="30" y2="30"/>
      <line id="lineB" stroke="#C0C0C0" x1="10" x2="10" y1="50" y2="50"/>
    </g>
    <g id="run" style="cursor: pointer; font-size: 15px;" g-on:click="show">
      <rect x="0" y="70" width="50" height="30" fill="#C0F8C0"/>
      <text x="8" y="90">show</text>
    </g>
    <g id="run" style="cursor: pointer; font-size: 15px;" g-on:click="hide">
      <rect x="60" y="70" width="50" height="30" fill="#F8C0C0"/>
      <text x="72" y="90">hide</text>
    </g>
  </svg>
  <script type="methods">
    const lineR = $.svg.querySelector('#lineR');
    const lineG = $.svg.querySelector('#lineG');
    const lineB = $.svg.querySelector('#lineB');

    function show() {
      lineR.animateTo({stroke : '#D80000', x2 : 130}, 1000);
      lineG.animateTo({stroke : '#00D800', x2 : 180}, 1000);
      lineB.animateTo({stroke : '#0000D8', x2 : 100}, 1000);
    }

    function hide() {
      lineR.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
      lineG.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
      lineB.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 200 100" width="200" height="100">
    <g stroke-width="12" stroke-linecap="round">
      <line id="lineR" stroke="#C0C0C0" x1="10" x2="10" y1="10" y2="10"/>
      <line id="lineG" stroke="#C0C0C0" x1="10" x2="10" y1="30" y2="30"/>
      <line id="lineB" stroke="#C0C0C0" x1="10" x2="10" y1="50" y2="50"/>
    </g>
    <g id="run" style="cursor: pointer; font-size: 15px;" g-on:click="show">
       <rect x="0" y="70" width="50" height="30" fill="#C0F8C0"/>
       <text x="8" y="90">show</text>
    </g>
    <g id="run" style="cursor: pointer; font-size: 15px;" g-on:click="hide">
       <rect x="60" y="70" width="50" height="30" fill="#F8C0C0"/>
       <text x="72" y="90">hide</text>
    </g>
  </svg>
  <g-script type="methods">
    const lineR = $.svg.querySelector('#lineR');
    const lineG = $.svg.querySelector('#lineG');
    const lineB = $.svg.querySelector('#lineB');
    function show() {
       lineR.animateTo({stroke : '#D80000', x2 : 130}, 1000);
       lineG.animateTo({stroke : '#00D800', x2 : 180}, 1000);
       lineB.animateTo({stroke : '#0000D8', x2 : 100}, 1000);
    }
    function hide() {
       lineR.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
       lineG.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
       lineB.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
    }
  </g-script>
</g-composer>

### Keyframes

If we want to define several intermediate steps within an animation, we can pass an array of objects
with each step we want the animation to perform.

Additionally, we can include an `offset` key with values between `0` and `1` to indicate when we
want each step to be set.

```html
<g-composer>
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor:pointer">
    <rect x="0" y="0" width="40" height="40" fill="violet"/>
    <text x="20" y="55" font-size="14">click to run</text>
  </svg>
  <script type="methods">
    function run() {
      $.svg.querySelector('rect').animateTo(
        [
          {x: 0,  y: 0,  width: 40, height: 40},
          {x: 90, y: 0,  width: 10, height: 10},
          {x: 60, y: 60, width: 40, height: 40},
          {x: 0,  y: 90, width: 10, height: 10},
          {x: 0,  y: 0,  width: 40, height: 40}
        ],
        2000
      );
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor:pointer">
    <rect x="0" y="0" width="40" height="40" fill="violet"/>
    <text x="20" y="55" font-size="14">click to run</text>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('rect').animateTo(
        [
          {x: 0,  y: 0,  width: 40, height: 40},
          {x: 90, y: 0,  width: 10, height: 10},
          {x: 60, y: 60, width: 40, height: 40},
          {x: 0,  y: 90, width: 10, height: 10},
          {x: 0,  y: 0,  width: 40, height: 40}
        ],
        2000
      );
    }
  </g-script>
</g-composer>

### Callback

If we need to capture the moment when the animation starts and/or ends, we can pass two additional
parameters with callbacks. The first one is called when the animation is ready and starts. The
second one is called when the animation finishes.

## Native animation

Here are some native ways to create SVG animations:

- CSS Animation: SVG elements can be animated using CSS animation properties, similar to animating
  HTML elements.

- Web Animation API: we can use `.animate()` that exposes a Javascript API for CSS animations.

- SMIL Animation (Synchronized Multimedia Integration Language): allows you to define animations
  directly within the SVG markup by `animate`, `animateTransform` and`animateMotion`, using
  declarative syntax.

- Request Animation Frame: we can use `window.requestAnimationFrame()` for complete custom
  animation.

### CSS animation

CSS animations allow you to animate an SVG with transitions from one CSS style setting to another.
CSS animations have two components, a style that describes the CSS animation and a set of keyframes
that indicate the start and end values, as well as possible intermediate points.

We can add or remove the animation with `.classList` object.

```html
<style>
  .cssAnimation {
    animation : 1s linear circle forwards;
  }

  @keyframes circle {
    from {
      r : 10px;
    }
    to {
      r : 40px;
    }
  }
</style>
```

::: warning Limitations

CSS animation may not be applied on attributes that do not have an equivalent CSS property, among
others, these common SVG attributes:

| attribute | element              |
|-----------|----------------------|
| dx        | text                 |
| dy        | text                 |
| fr        | radialGradient       |
| fx        | radialGradient       |
| fy        | radialGradient       |
| points    | polyline and polygon |
| x1        | line                 |
| x2        | line                 |
| y1        | line                 |
| y2        | line                 |

If you need to animate any of these attributes, use `.animateTo()` or SMIL animations.

:::

### Web Animation API

Related to CSS animation, we can use the new Web Animation API that exposes a Javascript way for CSS
animation. Specially straightforward is the `.animate()` method.

::: warning Limitations

The Web Animation API is an imperative mode for CSS animation, and as a result, it cannot animate
SVG attributes not supported by CSS animations.

If you need to animate any of these attributes, use `.animateTo()` with a programming interface very
similar to `animate()`, but with support for those attributes.

:::

### SMIL

::: warning Not deprecated

On the Internet, we can find documents indicating that SMIL is deprecated. The Chrome team announced
this deprecation, but finally backed down. **SMIL IS NOT DEPRECATED** and some animations are only
possible by this way.

:::

#### animate element

We can add `animate` SVG element that provides a way to animate an element's attribute. Usually,
the `animate` is created nested to the element to which the animation is applied.

With `attributeName` we define the attribute to animate; the attributes `from`and `to` must be used
for defining the initial and finish values of this attribute. `dur` defines the animation 
duration ('1s' or '1000ms' are valid values).

Other important attribute is `fill`. In this case, it defines the final state of the animation. If
the value is `'freeze'`, the state of the last animation frame is kept, but by default
is `'remove'`, and as a result, after the last animation frame, the attribute value returns to the
first.

For control about when the animation is running, we can configure the animate element 
`begin="indefinite"` and call to `.beginElement()` for execute the animation.

```html
<g-composer>
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor: pointer">
    <circle cx="50" cy="50" r="10" fill="red">
      <animate attributeName="r" from="10" to="40" dur="1.5s" fill="freeze" begin="indefinite"/>
    </circle>
    <text x="20" y="90" font-size="14">click to run</text>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
      $.svg.querySelector('text').remove();
    }
  </g-script>
</g-composer>
```

<g-composer>
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor: pointer">
    <circle cx="50" cy="50" r="10" fill="red">
      <animate attributeName="r" from="10" to="40" dur="1.5s" fill="freeze" begin="indefinite"/>
    </circle>
    <text x="20" y="90" font-size="14">click to run</text>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
      $.svg.querySelector('text').remove();
    }
  </g-script>
</g-composer>


With `values` and `keyTimes` you can define with more precision the animation, establishing the
values that the property has to have in each moment.

#### animate points

With `animate` element we can animate points of `polylinee` or `poligon` elements. This kind of
animation is not possible with CSS or Web Animation API:

```html
<g-composer>
  <svg viewBox="0,0,50,100" width="100px" height="200px" g-on:click="run" style="cursor: pointer">
    <polyline fill="none" stroke="black" stroke-width="10" 
              points="45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95">
      <animate dur="10s" attributeName="points" begin="indefinite" values="
       45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95; 45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95;
        5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;  5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;
        5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
       45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45; 45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45;
       45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95; 45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95;
        0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;  0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;
        5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;  5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;
        5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;  5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;
        5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
        5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;  5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;">
      </animate>
    </polyline>
  </svg>
  <script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
    }
  </script>
</g-composer>
```

<g-composer>
  <svg viewBox="0,0,50,100" width="100px" height="200px" g-on:click="run" style="cursor: pointer">
    <polyline fill="none" stroke="black" stroke-width="10"
      points="45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95">
      <animate dur="10s" attributeName="points" begin="indefinite" values="
         45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95; 45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95;
          5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;  5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;
          5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
         45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45; 45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45;
         45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95; 45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95;
          0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;  0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;
          5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;  5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;
          5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;  5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;
          5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
          5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;  5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;">
      </animate>
    </polyline>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
    }
  </g-script>
</g-composer>

::: warning Limitations

The `animate` element cannot animate CSS property without an SVG attribute equivalence; especially
important are CSS properties related to text styling such
as `text-decoration-color`, `text-decoration-thickness`, `text-emphasis`,
`text-emphasis-color`, `text-indent`, `text-shadow`, `text-underline-offset`.

If you need to animate any of these properties, use `.animateTo()`, CSS animations or Web Animation
API.

:::

#### animateTransform element

With `.add('animateTransform')`, we can animate an element with a transformation. Usually,
the `animateTransform` is created nested to the element to which the animation is applied.

In this case, method `.attributeName()` must be called with `'transform'` value, and the methods
`.from()` and `.to()` can be used for defining the initial and finish transformation values or use
`.values()` to determine the values into elapse animation time. As in other cases, `.dur()` defines
the animation duration, and `.repeatCount()` establishes the number of animation, or if this is
`'indefinite`. If you need to add more than one `animationTransform`, you need to call
`.additional('sum')`.


```js
<g-composer>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <rect width="60" height="60" fill="red">
      <animateTransform attributeName="transform" type="rotate" dur="2s"
                        from="0,50,50" to="360,50,50"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="translate" dur="1s"
                        values="20,20;35,35;20,20"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="scale" dur="1s"
                        values="1;0.5;1"
                        repeatCount="indefinite" additive="sum"/>
    </rect>
  </svg>
</g-composer>
```

<g-composer>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <rect width="60" height="60" fill="red">
      <animateTransform attributeName="transform" type="rotate" dur="2s" 
                        from="0,50,50" to="360,50,50"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="translate" dur="1s" 
                        values="20,20;35,35;20,20"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="scale" dur="1s" 
                        values="1;0.5;1"
                        repeatCount="indefinite" additive="sum"/>
    </rect>
  </svg>
</g-composer>

#### animateMotion element

`.add('animateMotion')` create an element can animate the movement of a shape along a motion path.
You can define the path directly on this element (`.path()`) or reuse a previous path with
`animateMotion.add('mpath').href()`.

A handy attribute is `.rotate()`, then define the shape orientation into the motion. It can be
a `number`, `'auto'`, or `'auto-reverse'`. As in other animations, you can use `.dur()`,
`.repeatCount()` and other method to config the behavior.


```js
<g-composer>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <defs>
      <path d="M15,50a15,15,0,1,1,75,0a15,15,0,1,1,-75,0" id="path1"></path>
    </defs>
    <polygon points="10,0,0,-4,0,4">
      <animateMotion dur="1500ms" repeatCount="indefinite" rotate="auto">
        <mpath href="#path1"></mpath>
      </animateMotion>
    </polygon>
  </svg>
</g-composer>
```

<g-composer>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <defs>
      <path d="M15,50a15,15,0,1,1,75,0a15,15,0,1,1,-75,0" id="path1"></path>
    </defs>
    <polygon points="10,0,0,-4,0,4">
      <animateMotion dur="1500ms" repeatCount="indefinite" rotate="auto">
        <mpath href="#path1"></mpath>
      </animateMotion>
    </polygon>
  </svg>
</g-composer>

### requestAnimationFrame()

We can use Javascript and the method `requestAnimationFrame()` for complete custom animation.

```html
<g-composer>
  <svg viewBox="0 0 100 100" style="cursor: pointer"
    g-on:click="window.requestAnimationFrame(step)">
    <circle cx="50" cy="50" r="10" fill="red"/>
  </svg>
  <script type="methods">
    const circle = $.svg.querySelector('circle');
    const from   = 10;
    const to     = 40;
    let duration = 1000;
    let start    = 0;
    function step (timestamp) {
      if (!start) {
        start = timestamp;
      }
      const progress = (to - from) * ((timestamp - start) / duration) + from;
      circle.r(Math.min(progress, to));
      if (progress <= to) {
        window.requestAnimationFrame(step);
      }
    }
  </script>
</g-composer>

```

<g-composer>
  <svg viewBox="0 0 100 100" style="cursor: pointer"
    g-on:click="window.requestAnimationFrame(step)">
    <circle cx="50" cy="50" r="10" fill="red"/>
  </svg>
  <g-script type="methods">
    const circle = $.svg.querySelector('circle');
    const from   = 10;
    const to     = 40;
    let duration = 1000;
    let start    = 0;
    function step (timestamp) {
      if (!start) {
        start = timestamp;
      }
      const progress = (to - from) * ((timestamp - start) / duration) + from;
      circle.r(Math.min(progress, to));
      if (Math.max(progress, to) === to) {
        window.requestAnimationFrame(step);
      }
    }
  </g-script>
</g-composer>

