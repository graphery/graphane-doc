---
outline: deep
---


# Animation

Natively SVG animations can be achieved through various methods, each with its own approach and
potential problems. Here are some common ways to create SVG animations and the associated
challenges:

- **SMIL Animation** (Synchronized Multimedia Integration Language): allows you to define animations
  directly within the SVG markup by `animate`, `animateTransform` and`animateMotion`, using
  declarative syntax.

- **CSS Animation**: SVG elements can be animated using CSS animation properties, similar to
  animating HTML elements.

- **Web Animation API**: we can use `.animate()` and related methods that exposes a Javascript API
  for CSS animations.

- **window.requestAnimationFrame()**: we can use Javascript and this method for complete custom
  animation.

Regardless of the method chosen, some common problems related to SVG animation include performance
issues, browser compatibility, mobile device optimization, complexity, and accessibility 
considerations.

Graphane provides a cross-browser compatible, efficient and simple animation solution. It works
internally with CSS and SMIL, selecting the best option in each case and offering a very simple API.

## to prevent animation when the system is configured to prevent animations

When the operating system is configured not to perform animations, Graphane detects this
configuration and respects the user's settings, changing the values immediately and avoiding showing
transitions or animations.

## g-bind:*prop*.animate

Graphane Template Engine provide a very simple for of animation in collaboration with the 
`g-bind` directive. When you use the *modifier* `.animate` after the name property, the value is
applied with an animation.

<g-svg data="x: 50, y: 50, r: 50">
  <svg viewBox="0 0 100 100">
    <circle  g-bind:r.animate="r" g-bind:cx.animate="x" :cy.animate="y" fill="red"/>
  </svg>
</g-svg>

### Animation initial value


### Animation duration



## .animateTo()

It is a powerful and straightforward way of progressively changing a series of attributes from its
initial value to a target value.

Internally, it works primarily with CSS, and alternatively with SMIL when the animation is not
supported by CSS.

The `.animateTo()` API is very similar to the *Web Animation API*  `.animate()`, but with some minor
differences:

- `.animate()` and `.animateTo()` accept this common format:
  `[{prop1: val1, prop2: val1}, {prop1: val2, prop2: val2}, {prop1: val3, prop2: val3}]`]`.
- `.animate()` accepts also this format: `{prop1: [val1, val2, val3], prop2: [val1, val2, val3]}`
  which is not supported by `.animateTo()`.

The `.animateTo()`  transform the SMIL syntax to the CSS syntax, for example:

- `transform: 'rotate(315, 50, 50)'` is converted
  to `transform: 'translate(50,50) rotate(315) translate(-50,-50)'`
- `d: 'M0,0L100,100'` is converted to `d: 'path("M0,0L100,100")'`

The `.animateTo()` accept nested object, you can write: `{transform: 'translate(80, 80)'}` or
`{transform: {translate: [80, 80]}}`.

When `.animateTo()` finishes, the values are passed to SVG attributes or CSS properties, so that we
can easily manage the state of the element.

### simple use

The simplest form to user `.animateTo()` is passing an object with keys and the target values as a
first parameter.

Optionally, we can include a transition time in milliseconds as a second parameter. By default, the
animation duration is 200 milliseconds. If you pass a time value `0`, the change is executed
immediately, and the animation is not displayed.

This is a complete example:

::: code group
```html
<div id="exampleAnimateTo"></div>
<button id="showAnimateTo">show</button>
<button id="hideAnimateTo">hide</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg       = gySVG().viewBox(0, 0, 200, 100).width('200px').height('100px');
  const g         = svg.add('g').stroke_width(12).stroke_linecap('round');
  const lineRed   = g.add('line').stroke('#C0C0C0').x1(22).y1(30).x2(22).y2(30);
  const lineGreen = g.add('line').stroke('#C0C0C0').x1(22).y1(50).x2(22).y2(50);
  const lineBlue  = g.add('line').stroke('#C0C0C0').x1(22).y1(70).x2(22).y2(70);

  svg.attachTo('#exampleAnimateTo');

  document.querySelector('#showAnimateTo').addEventListener('click', () => {
    lineRed.animateTo({stroke : '#D80000', x2 : 130}, 1000);
    lineGreen.animateTo({stroke : '#00D800', x2 : 180}, 1000);
    lineBlue.animateTo({stroke : '#0000D8', x2 : 100}, 1000);
  });
  document.querySelector('#hideAnimateTo').addEventListener('click', () => {
    lineRed.animateTo({stroke : '#C0C0C0', x2 : 22}, 1000);
    lineGreen.animateTo({stroke : '#C0C0C0', x2 : 22}, 1000);
    lineBlue.animateTo({stroke : '#C0C0C0', x2 : 22}, 1000);
  });
</script>
```
:::

### steps and options

If we want to define several intermediate steps within an animation, we can pass an array of objects
with each step we want the animation to perform.

Additionally, we can include an `offset` key with values between `0` and `1` to indicate when we
want each step to be set.


::: code group

```html

<div id="example_steps"></div>
<button id="move">move</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg  = gySVG().viewBox('0 0 100 100').width(100).height(100);
  const rect = svg.add('rect').x(0).y(0).width(40).height(40).fill('violet');

  svg.attachTo('#example_steps');

  const buttonMove = document.querySelector('#move');
  buttonMove.addEventListener('click', () => {
    rect.animateTo(
      [
        {x : 0, y : 0},
        {x : 60, y : 0},
        {x : 60, y : 60},
        {x : 0, y : 60},
        {x : 0, y : 0}
      ],
      2000
    );
  });
</script>
```

:::

### callback for start and end animation

If we need to capture the moment when the animation starts and/or ends, we can pass two additional
parameters with callbacks, the first one is called when the animation is ready and starts, the
second one is called when the animation finishes.


::: code group

```html

<div id="showAnimateToCallback"></div>
<button id="runAnimateToCallback">run</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg    = gySVG().viewBox(0, 0, 100, 100).width(100).height(100).id('svg1');
  const circle = svg.add('circle').cx(50).cy(50).r(10).fill('red');
  svg.attachTo('#showAnimateToCallback');
  document.querySelector('#runAnimateToCallback').addEventListener('click', () => {
    circle.animateTo(
      {r : 40},
      1000,
      () => console.log('start animation'),
      () => console.log('end animation')
    );
  });
</script>
```

:::

## Native animation

### CSS animation

CSS animations allow you to animate an SVG with transitions from one CSS style setting to another.

CSS animations have two components, a style that describes the CSS animation and a set of keyframes
that indicate the start and end values, as well as possible intermediate points.

We can add or remove the animation with `.classList` object.


::: code group

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
<div id="showCSS"></div>
<button id="runCSS">run</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg    = gySVG().viewBox(0, 0, 100, 100).width(100).height(100).id('svg1');
  const circle = svg.add('circle').cx(50).cy(50).r(10).fill('red');
  svg.attachTo('#showCSS');
  document.querySelector('#runCSS').addEventListener('click', () => {
    circle.classList.add('cssAnimation');
  });
</script>
```

:::

See: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

#### Limitations

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

### Web Animation API

Related with CSS animation, we can use the new Web Animation API, that expose a Javascript way for
CSS animation. Specially straightforward is the `.animate()` method:


::: code group

```html

<div id="showWAP"></div>
<button id="runWAP">run</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg    = gySVG().viewBox(0, 0, 100, 100).width(100).height(100);
  const circle = svg.add('circle').cx(50).cy(50).r(10).fill('red');
  svg.attachTo('#showWAP');
  document.querySelector('#runWAP').addEventListener('click', () => {
    circle.animate([{r : 40}], {duration : 1000, fill : 'forwards'});
  });
</script>
```

:::

See: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/animate)

#### Limitations

The Web Animation API is an imperative mode for CSS animation, and as a result, it cannot animate
SVG attributes not supported by CSS animations.

If you need to animate any of these attributes, use `.animateTo()` with a programming interface very
similar to
`animate()`, but with support for those attributes.

### SMIL

::: warning 
On the Internet we can find documents indicating that SMIL is deprecated. The Chrome
team announced this deprecation, but finally backed down. SMIL IS NOT DEPRECATED and some animations
are only possible by this way.
:::

#### animate element

We can add with `.add('animate')` an element that provides a way to animate an element's attribute.
Usually, the
`animate` is created nested to the element to which the animation is applied.

With the method `.attributeName()`, we define the attribute to animate; the methods `.from()`
and `.to()` must be used for defining the initial and finish values of this attribute. `.dur()`
defines the animation duration ('1s' or '1000ms' are valid values) and `.fill()` defines if the
attribute keep the target value after the animation run.

Other important method is `.fill()`. In this case, it defines the final state of the animation. If
the value is
`'freeze'`, the state of the last animation frame is kept, but by default is `'remove'`, and as a
result, after the last animation frame, the attribute value returns to the first.

For control about when the animation is running, we can configure the animate
element `.begin('indefinite')` and call to `.beginElement()` for execute the animation.


::: code group

```html

<div id="showSMILAnimate"></div>
<button id="runSMILAnimate">run</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg       = gySVG().viewBox(0, 0, 100, 100).width(100).height(100);
  const circle    = svg.add('circle').cx(50).cy(50).r(10).fill('red');
  const animation = circle.add('animate').attributeName('r').from(10).to(40).dur('1.5s').fill('freeze').begin('indefinite');
  svg.attachTo('#showSMILAnimate');
  document.querySelector('#runSMILAnimate').addEventListener('click', () => {
    animation.beginElement();
  });
</script>
```

:::

With `.values()` and `.keyTimes()` you can define with more precision the animation, establishing
the values that the property has to have in each moment.


::: code group

```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

const svg    = gySVG().viewBox(0, 0, 200, 200).width('200px').height('200px');
const circle = svg.add('circle').cx(100).cy(100).r(12).stroke('red').stroke_width(12).fill('none');
circle.add('animate').attributeName('r').dur('1.5s').repeatCount('indefinite')
      .values('0 ; 20   ; 50   ; 94   ; 50   ; 20   ; 0')
      .keyTimes('0 ; 0.20 ; 0.40 ; 0.50 ; 0.60 ; 0.80 ; 1');
svg.attachTo('#example3');
```

:::

#### animate points

With `animate` element we can animate points of `polylinee` or `poligon` elements. This kind of
animation is not possible with CSS or Web Animation API:


::: code group

```html

<div id="example4"></div>
<button id="example4run">run</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg    = gySVG().viewBox(0, 0, 50, 100).width('100px').height('200px');
  const number = svg.add('polyline').fill('none').stroke('black').stroke_width(10)
                    .points('45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95');

  document.querySelector('#example4run').addEventListener('click', () => {
    number.add('animate').dur('10s').fill('freeze').attributeName('points').values(
      `45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95; 45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95;
        5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;  5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;
        5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
       45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45; 45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45;
       45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95; 45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95;
        0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;  0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;
        5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;  5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;
        5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;  5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;
        5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
        5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;  5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;`
    ).beginElement();
  });

  svg.attachTo('#example4');
</script>
```

:::

<svg viewBox="0,0,50,100" width="100px" height="200px">
  <polyline fill="none" stroke="black" stroke-width="10"
    points="45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95">
    <animate dur="10s" fill="freeze" attributeName="points" values="
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

#### Limitations

The `animate` element cannot animate CSS property without SVG attribute equivalence, especially
important are CSS properties related to text styling such
as `text-decoration-color`, `text-decoration-thickness`, `text-emphasis`,
`text-emphasis-color`, `text-indent`, `text-shadow`, `text-underline-offset`.

If you need to animate any of these properties, use `.animateTo()`, CSS animations or Web Animation
API.

#### animateTransform element

With `.add('animateTransform')`, we can animate an element with a transformation. Usually,
the `animateTransform` is created nested to the element to which the animation is applied.

In this case, method `.attributeName()` must be called with `'transform'` value, and the methods
`.from()` and `.to()` can be used for defining the initial and finish transformation values or use
`.values()` to determine the values into elapse animation time. As in other cases, `.dur()` defines
the animation duration, and `.repeatCount()` establishes the number of animation, or if this is
`'indefinite`. If you need to add more than one `animationTransform`, you need to call
`.additional('sum')`.


::: code group

```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

const svg  = gySVG().viewBox(0, 0, 100, 100).width(200).height(200);
const rect = svg.add('rect').width(60).height(60).fill('red');
rect.add('animateTransform').attributeName('transform').type('rotate').dur('2s')
    .from(0, 50, 50).to(360, 50, 50).repeatCount('indefinite').additive('sum');
rect.add('animateTransform').attributeName('transform').type('translate').dur('1s')
    .values('20,20;35,35;20,20').repeatCount('indefinite').additive('sum');
rect.add('animateTransform').attributeName('transform').type('scale').dur('1s')
    .values('1;0.5;1').repeatCount('indefinite').additive('sum');
svg.attachTo('#example5');
```

:::

<svg viewBox="0,0,100,100" width="200" height="200">
  <rect width="60" height="60" fill="red">
    <animateTransform attributeName="transform" type="rotate" dur="2s" from="0,50,50" to="360,50,50"
                      repeatCount="indefinite" additive="sum"></animateTransform>
    <animateTransform attributeName="transform" type="translate" dur="1s" values="20,20;35,35;20,20"
                      repeatCount="indefinite" additive="sum"></animateTransform>
    <animateTransform attributeName="transform" type="scale" dur="1s" values="1;0.5;1"
                      repeatCount="indefinite" additive="sum"></animateTransform>
  </rect>
</svg>

#### animateMotion element

`.add('animateMotion')` create an element can animate the movement of a shape along a motion path.
You can define the path directly on this element (`.path()`) or reuse a previous path with
`animateMotion.add('mpath').href()`.

A handy attribute is `.rotate()`, then define the shape orientation into the motion. It can be
a `number`, `'auto'`, or `'auto-reverse'`. As in other animations, you can use `.dur()`,
`.repeatCount()` and other method to config the behavior.


::: code group

```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

const svg  = gySVG().viewBox(0, 0, 100, 100).width(200).height(200);
const defs = svg.add('defs');
const path = defs.add('path')
path.d.M(15, 50).a(15, 15, 0, 1, 1, 75, 0).a(15, 15, 0, 1, 1, -75, 0);
const triangle = svg.add('polygon').points([10, 0], [0, -4], [0, 4]);
triangle.add('animateMotion').dur('1500ms').repeatCount('indefinite').rotate('auto')
        .add('mpath').href(path.ref());
svg.attachTo('#example6');
```

:::

<svg viewBox="0,0,100,100" width="200" height="200">
  <defs>
    <path d="M15,50a15,15,0,1,1,75,0a15,15,0,1,1,-75,0" id="gySVGObject3dbb94vl678"></path>
  </defs>
  <polygon points="10,0,0,-4,0,4">
    <animateMotion dur="1500ms" repeatCount="indefinite" rotate="auto">
      <mpath href="#gySVGObject3dbb94vl678"></mpath>
    </animateMotion>
  </polygon>
</svg>

### requestAnimationFrame()

We can use Javascript and the method `requestAnimationFrame()` for complete custom animation.


::: tab html

```html

<div id="showRAF"></div>
<button id="runRAF">run</button>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';

  const svg    = gySVG().viewBox(0, 0, 100, 100).width(100).height(100);
  const circle = svg.add('circle').cx(50).cy(50).r(10).fill('red');
  svg.attachTo('#showRAF');
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

  document.querySelector('#runRAF').addEventListener('click', () => {
    window.requestAnimationFrame(step);
  });
</script>
```

:::
