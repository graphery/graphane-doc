---
outline: deep
---

# fractal tree

This fractal tree is built entirely with the Graphane library, and it is animated with
the `sequence` plugin.

<g-composer>
  <svg viewBox="0 0 600 600" width="400" height="400" g-on:load="init">
  </svg>
  <g-script type="plugin" src="http://localhost:63342/graphane//lib/plugins/gsvg.sequence.js"></g-script>
  <g-script type="plugin" src="http://localhost:63342/graphane//lib/plugins/gsvg.shapes.js"></g-script>
  <g-script type="methods">
    function init() {
      const svg  = $.svg;
      const gSVG = svg.gSVG;
      const seq  = svg.Seq();
      (function drawBranch (startX = 300, startY = 600, len = 120, angle = 0, remain = 10, delay = 0) {
        const duration           = 600;
        const {x: endX, y: endY} = gSVG.polar2cartesian(startX, startY, len, angle);
        const element            = svg.add('line')
                                      .x1(startX).y1(startY).x2(startX).y2(startY)
                                      .stroke('#45ae13ff').stroke_width(remain);
        seq.add(element, {x2: endX, y2: endY}, {delay, duration});
        if (remain) {
          drawBranch(endX, endY, len * 0.8, angle - 16, remain - 1, delay + duration);
          drawBranch(endX, endY, len * 0.8, angle + 16, remain - 1, delay + duration);
        }
      })();
      setTimeout(() => seq.play(), 1000);
    }
  </g-script>	
</g-composer>

```html
<g-composer>
  <svg viewBox="0 0 600 600" width="400" height="400" g-on:load="init">
  </svg>
  <g-plugin src="../../plugins/sequence/src/svg.sequence.js"></g-plugin>
  <g-plugin src="../../plugins/shapes/src/svg.shapes.js"></g-plugin>
  <script type="methods">
    function init() {
      const svg  = $.svg;
      const gSVG = svg.gSVG;
      const seq  = svg.Seq();
      (function drawBranch (startX=300, startY=600, len=120, angle=0, remain=10, delay=0) {
        const duration           = 600;
        const {x: endX, y: endY} = gSVG.polar2cartesian(startX, startY, len, angle);
        const element            = svg.add('line')
                                      .x1(startX).y1(startY).x2(startX).y2(startY)
                                      .stroke('#45ae13ff').stroke_width(remain);
        seq.add(element, {x2: endX, y2: endY}, {delay, duration});
        if (remain) {
          drawBranch(endX, endY, len * 0.8, angle - 16, remain - 1, delay + duration);
          drawBranch(endX, endY, len * 0.8, angle + 16, remain - 1, delay + duration);
        }
      })();
      setTimeout(() => seq.play(), 1000);
    }
  </script>
</g-composer>
```