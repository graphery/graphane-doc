# Text path and clip path

## Text along a path

Usually, the texts are displayed as a simple straight line of characters. We can rotate, move, or
warp the text with `.transform()`, but we can go to the next level if we define a text that follows
a path's shape. As a result, we will have a very flexible text transformation.

The first step is to define in `path`:

:::: tabs :options="{ useUrlFragment: false }" 
::: tab Javascript
```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
const svg  = gySVG ().viewBox (0, 0, 650, 500).width (325).height (300);
const path = svg.add ('path').fill ('none').stroke ('lightgrey').stroke_width (3);
path.d.M (317.5, 270.5)
      .c (-3.1, -16.6, -24.4, -28.3, -45.5, -18.5)
      .c (-27, 11.5, -29.7, 43.5, -15.5, 66.6)
      .c (39.8, 63.3, 135.6, 24.3, 142.5, -43.5)
      .c (6.9, -167.6, -230, -161, -247, 0)
      .c (-5.5, 235.9, 329, 223.4, 346, 0)
      .C (513.3, 84.7, 269.6, -17.4, 134.2, 109.3)
      .C (32.2, 195.6, 26.9, 361.4, 116.5, 458.6)
      .c (160.6, 185.7, 476, 55.9, 480.5, -183.5);
svg.attachTo('#example1')
```
:::
::: tab result
<div id="example1"></div>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
  const svg  = gySVG ().viewBox (0, 0, 650, 500).width (325).height (300);
  const path = svg.add ('path').fill ('none').stroke ('lightgrey').stroke_width (3);
  path.d.M (317.5, 270.5)
        .c (-3.1, -16.6, -24.4, -28.3, -45.5, -18.5)
        .c (-27, 11.5, -29.7, 43.5, -15.5, 66.6)
        .c (39.8, 63.3, 135.6, 24.3, 142.5, -43.5)
        .c (6.9, -167.6, -230, -161, -247, 0)
        .c (-5.5, 235.9, 329, 223.4, 346, 0)
        .C (513.3, 84.7, 269.6, -17.4, 134.2, 109.3)
        .C (32.2, 195.6, 26.9, 361.4, 116.5, 458.6)
        .c (160.6, 185.7, 476, 55.9, 480.5, -183.5);
  svg.attachTo('#example1')
</script>
:::
::: tab "svg source"
```svg
<svg viewBox="0,0,650,500" width="325" height="300">
  <path fill="none" stroke="lightgrey" stroke-width="3"
        d="M317.5,270.5c-3.1,-16.6,-24.4,-28.3,-45.5,-18.5c-27,11.5,-29.7,43.5,-15.5,66.6
           c39.8,63.3,135.6,24.3,142.5,-43.5c6.9,-167.6,-230,-161,-247,0c-5.5,235.9,329,223.4,346,0
           C513.3,84.7,269.6,-17.4,134.2,109.3C32.2,195.6,26.9,361.4,116.5,458.6
           c160.6,185.7,476,55.9,480.5,-183.5">
  </path>
</svg>
```
:::
::::

We add the `text` and create a 'textPath' element within it. This element must be linked to
the 'path' that we have created previously.

:::: tabs :options="{ useUrlFragment: false }" 
::: tab Javascript
```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
const svg = gySVG ().viewBox (0, 0, 650, 500).width (325).height (300)
const path = svg.add('path').fill('none').stroke('lightgrey').stroke_width(3);
  path.d.M (317.5, 270.5)
        .c (-3.1, -16.6, -24.4, -28.3, -45.5, -18.5)
        .c (-27, 11.5, -29.7, 43.5, -15.5, 66.6)
        .c (39.8, 63.3, 135.6, 24.3, 142.5, -43.5)
        .c (6.9, -167.6, -230, -161, -247, 0)
        .c (-5.5, 235.9, 329, 223.4, 346, 0)
        .C (513.3, 84.7, 269.6, -17.4, 134.2, 109.3)
        .C (32.2, 195.6, 26.9, 361.4, 116.5, 458.6)
        .c (160.6, 185.7, 476, 55.9, 480.5, -183.5);
svg.attachTo('#example2')
```
:::
::: tab result
<div id="example2"></div>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
  const svg = gySVG ().viewBox (0, 0, 650, 500).width (325).height (300)
  const path = svg.add('path').fill('none').stroke('lightgrey').stroke_width(3);
  path.d.M (317.5, 270.5)
        .c (-3.1, -16.6, -24.4, -28.3, -45.5, -18.5)
        .c (-27, 11.5, -29.7, 43.5, -15.5, 66.6)
        .c (39.8, 63.3, 135.6, 24.3, 142.5, -43.5)
        .c (6.9, -167.6, -230, -161, -247, 0)
        .c (-5.5, 235.9, 329, 223.4, 346, 0)
        .C (513.3, 84.7, 269.6, -17.4, 134.2, 109.3)
        .C (32.2, 195.6, 26.9, 361.4, 116.5, 458.6)
        .c (160.6, 185.7, 476, 55.9, 480.5, -183.5);
    svg.add('text').style.font_family('sans-serif').font_size('22px').fill('red').stroke('none')
  .add('textPath').href(path.ref())
  .content(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit
            pellentesque orci in vehicula. Etiam at nibh quis nunc iaculis accumsan. Morbi
            tristique suscipit ante. Pellentesque tincidunt, lorem sed iaculis faucibus, libero
            enim condimentum enim, sed blandit urna felis vel massa.`);
  svg.attachTo ('#example2');
</script>
:::
::: tab "svg source"
```svg
<svg viewBox="0,0,650,500" width="325" height="300">
  <path id="gySVGObjectks72vvfrgm8" fill="none" stroke="lightgrey" stroke-width="3"
        d="M317.5,270.5c-3.1,-16.6,-24.4,-28.3,-45.5,-18.5c-27,11.5,-29.7,43.5,-15.5,66.6
           c39.8,63.3,135.6,24.3,142.5,-43.5c6.9,-167.6,-230,-161,-247,0c-5.5,235.9,329,223.4,346,0
           C513.3,84.7,269.6,-17.4,134.2,109.3C32.2,195.6,26.9,361.4,116.5,458.6
           c160.6,185.7,476,55.9,480.5,-183.5">
  </path>
  <text font-size="22px" fill="red" stroke="none" style="font-family: sans-serif;">
    <textPath href="#gySVGObjectks72vvfrgm8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit pellentesque orci
      in vehicula. Etiam at nibh quis nunc iaculis accumsan. Morbi tristique suscipit ante.
      Pellentesque tincidunt, lorem sed iaculis faucibus, libero enim condimentum enim, sed
      blandit urna felis vel massa.
    </textPath>
  </text>
</svg>
```
:::
::::

Finally, we can hide the `path`, including it in a `defs` element.

:::: tabs :options="{ useUrlFragment: false }" 
::: tab Javascript
```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
const svg = gySVG ().viewBox (0, 0, 650, 500).width (325).height (300)
const path = svg.add('defs').add('path');
  path.d.M (317.5, 270.5)
        .c (-3.1, -16.6, -24.4, -28.3, -45.5, -18.5)
        .c (-27, 11.5, -29.7, 43.5, -15.5, 66.6)
        .c (39.8, 63.3, 135.6, 24.3, 142.5, -43.5)
        .c (6.9, -167.6, -230, -161, -247, 0)
        .c (-5.5, 235.9, 329, 223.4, 346, 0)
        .C (513.3, 84.7, 269.6, -17.4, 134.2, 109.3)
        .C (32.2, 195.6, 26.9, 361.4, 116.5, 458.6)
        .c (160.6, 185.7, 476, 55.9, 480.5, -183.5);
  svg.add('text').style.font_family('sans-serif').font_size('22px').fill('red').stroke('none')
     .add('textPath').href(path.ref())
     .content(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit
               pellentesque orci in vehicula. Etiam at nibh quis nunc iaculis accumsan. Morbi
              tristique suscipit ante. Pellentesque tincidunt, lorem sed iaculis faucibus, libero
              enim condimentum enim, sed blandit urna felis vel massa.`);
  svg.attachTo ('#example3');
```
:::
::: tab result
<div id="example3"></div>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
  const svg = gySVG ().viewBox (0, 0, 650, 500).width (325).height (300)
  const path = svg.add('defs').add ('path');
  path.d.M(317.5,270.5)
      .c(-3.1,-16.6,-24.4,-28.3,-45.5,-18.5)
      .c(-27,11.5,-29.7,43.5,-15.5,66.6)
      .c(39.8,63.3,135.6,24.3,142.5,-43.5)
      .c(6.9,-167.6,-230,-161,-247,0)
      .c(-5.5,235.9,329,223.4,346,0)
      .C(513.3,84.7,269.6,-17.4,134.2,109.3)
      .C(32.2,195.6,26.9,361.4,116.5,458.6)
      .c(160.6,185.7,476,55.9,480.5,-183.5);
  svg.add('text').style.font_family('sans-serif').font_size('22px').fill('red').stroke('none')
     .add('textPath').href(path.ref())
     .content(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit
               pellentesque orci in vehicula. Etiam at nibh quis nunc iaculis accumsan. Morbi
              tristique suscipit ante. Pellentesque tincidunt, lorem sed iaculis faucibus, libero
              enim condimentum enim, sed blandit urna felis vel massa.`);
  svg.attachTo ('#example3');
</script>
:::
::: tab "svg source"
```svg
<svg viewBox="0,0,650,500" width="325" height="300">
  <defs>
    <path id="gySVGObjectks72vvfrgm9" fill="none" stroke="lightgrey" stroke-width="3"
          d="M317.5,270.5c-3.1,-16.6,-24.4,-28.3,-45.5,-18.5c-27,11.5,-29.7,43.5,-15.5,66.6
             c39.8,63.3,135.6,24.3,142.5,-43.5c6.9,-167.6,-230,-161,-247,0
             c-5.5,235.9,329,223.4,346,0C513.3,84.7,269.6,-17.4,134.2,109.3
             C32.2,195.6,26.9,361.4,116.5,458.6c160.6,185.7,476,55.9,480.5,-183.5">
    </path>
  </defs>
  <text font-size="22px" fill="red" stroke="none" style="font-family: sans-serif;">
    <textPath href="#gySVGObjectks72vvfrgm9">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit pellentesque orci
      in vehicula. Etiam at nibh quis nunc iaculis accumsan. Morbi tristique suscipit ante.
      Pellentesque tincidunt, lorem sed iaculis faucibus, libero enim condimentum enim, sed
      blandit urna felis vel massa.
    </textPath>
  </text>
</svg>
```
:::
::::


## Clipping Path

The `clipPath` element, usually included within a `defs`, along with ".clip_path()" defines the
region in which the element's content will be drawn. Any area outside the boundaries set by the
`clipPath` will not be rendered.

:::: tabs :options="{ useUrlFragment: false }" 
::: tab Javascript
```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
const svg    = gySVG ().viewBox (0, 0, 600, 600).width (300).height (300);
const clip   = svg.add ('defs').add ('clipPath');
const rect   = clip.add ('rect').x (300).y (0).width (300).height (600);
const circle = svg.add ('circle').cx (300).cy (300).r (300).fill ('red').clip_path (clip.url ());
svg.attachTo ('#example4');
```
:::
::: tab result
<div id="example4"></div>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
  const svg    = gySVG ().viewBox (0, 0, 600, 600).width (300).height (300);
  const clip   = svg.add ('defs').add ('clipPath');
  const rect   = clip.add ('rect').x (300).y (0).width (300).height (600);
  const circle = svg.add ('circle').cx (300).cy (300).r (300).fill ('red').clip_path (clip.url ());
  svg.attachTo ('#example4');
</script>
:::
::: tab "svg source"
```svg
<svg viewBox="0,0,600,600" width="300" height="300">
  <defs>
    <clipPath id="gySVGObjectdlorse1ehv8">
      <rect x="300" y="0" width="300" height="600"></rect>
    </clipPath>
  </defs>
  <circle cx="300" cy="300" r="300" fill="red" clip-path="url(#gySVGObjectdlorse1ehv8)"></circle>
</svg>
```
:::
::::