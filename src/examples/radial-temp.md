---
outline: deep
---

# Radial: temperature range

<g-composer>
  <svg viewBox="0 0 1000 1000" width="300" height="300">
    <defs g-for="(t, n) of [-15,-10,-5,0,5,10,15,20,25,30,35,40,45,50]">
      <circle cx="500"
              cy="500" 
              stroke="black" 
              stroke-width="1"
              fill="none"
              g-bind:r="(n + 1) * 490 / 15"/>
    </defs>
    <defs g-for="m of [30.58, 58.19, 88.77, 118.36, 148.93, 178.52, 209.10, 239.67, 269.26, 299.84, 329.42, 360.00]">
      <line stroke="black" 
            stroke-width="1"
            x1="500" 
            y1="500"
            g-bind:x2="$.polar2cartesian(500,500,460, m).x"
            g-bind:y2="$.polar2cartesian(500,500,460, m).y"/> 
    </defs>
    <path id="max"
          stroke="red" 
          stroke-width="2"
          fill="none"
          g-bind:d="draw($$, 'max')"/>
    <path id="min"
          stroke="blue" 
          stroke-width="2"
          fill="none"
          g-bind:d="draw($$, 'min')"/>
    <path fill="rgba(128,128,128,0.3)"
          fill-rule="evenodd"
          g-bind:d="$.svg.querySelector('#max').d() + $.svg.querySelector('#min').d()"/>
  </svg>
  <g-script type="plugin" src="http://localhost:63342/graphane/src/plugins/shapes.js"></g-script>
  <g-script type="data" src="../data/temp.csv"></g-script>
  <g-script type="methods">
    const day = 360 / 365;
    const g   = 460 / 65;
    function draw(d, key) {
      for (let n = 0; n != $.data.length; n++) {
        const p = $.polar2cartesian(500, 500, ($.data[n][key] + 15) * g, day * n);
        if (n === 0) {
          d.M(p.x, p.y);
        } else {
          d.L(p.x, p.y);
        }
      }
        d.z();
    }
  </g-script>
</g-composer>

