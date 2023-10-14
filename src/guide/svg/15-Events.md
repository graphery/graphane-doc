# Handle events

## Capture events

The preferred way to capture events in SVG elements is through the `.addEventListener()` method. 

The use of `.onclick()` and other properties that start with `.on` should be avoided because they 
have significant limitations, such as the impossibility of defining more than one handler for
the same event.

A simple way to capture the 'click' event is this:

:::: tabs :options="{ useUrlFragment: false }" 
::: tab javascript
```js
import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
gySVG ().viewBox (0, 0, 200, 200).width (200).height (200);
const rect = $.svg.add ('rect').x(10).y(10).width(180).height(180).fill('red').style.cursor('pointer');
rect.addEventListener('click', (evt) => {
  rect.fill(rect.fill() === 'red' ? 'blue' : 'red');
});
$.svg.attachTo('#example1');
```
:::
::: tab result
<div id="example1"></div>
<script type="module">
  import gySVG from 'https://cdn.Graphane.online/svg/1.0.0/module/index.js';
gySVG ().viewBox (0, 0, 200, 200).width (200).height (200);
const rect = $.svg.add ('rect').x(10).y(10).width(180).height(180).fill('red').style.cursor('pointer');
rect.addEventListener('click', (evt) => {
  rect.fill(rect.fill() === 'red' ? 'blue' : 'red');
});
$.svg.attachTo('#example1');
</script>
:::
::: tab "svg source"
```svg
<svg viewBox="0,0,200,200" width="200" height="200">
  <rect x="10" y="10" width="180" height="180" fill="blue" style="cursor: pointer;"></rect>
</svg>
```
:::
::::

If is necessary, you can also use `.removeEventListener()`.

## SVG  events

The SVG has its events, some of which are shared with the HTML DOM, but others are specific or 
behave slightly differently. These events can be grouped into the following categories:

### UI Events

- `focusin`  - Fires when an element receives focus.
- `focusout` - Fires when an element loses focus.
- `activate` - Fires when an element is activated.

### Pointer events (mouse and touch)

- `click`     - Fires when the pointing device button is clicked over an element.
- `mousedown` - Fires when the pointing device button is pressed over an element.
- `mouseup`   - Fires when the pointing device button is released over an element.
- `mouseover` - Fires when the pointing device is moved onto an element.
- `mousemove` - Fires when the pointing device is moved while it is over an element.
- `mouseout`  - Fires when the pointing device is moved away from an element.

### SVG DOM events

- `load`   - Fires when the element is completely loaded and rendered. 
- `unload` - Fires when the SVG is removed from the page DOM.
- `abort`  - Fires when page loading is stopped before the element has been loaded completely.
- `error`  - Fires when an element does not load properly.
- `resize` - Fires when an SVG view is being resized.
- `scroll` - Fires when an SVG view is being shifted along X or Y or both axis. 
- `zoom`   - Fires when the zoom level of an SVG view is being changed.
 
### Animate events
 
- `beginEvent`  - Fired when the animate timeline begins to play.
- `endEvent`    - Fired when the active end of the animation is reached.
- `repeatEvent` - Fired every time the animation is repeated.
