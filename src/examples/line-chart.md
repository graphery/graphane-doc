# Line Chart

<g-composer id="line-chart">
  <svg viewBox="0 0 600 200" style="font-size: 12px" width="600" height="200">
    <!-- line -->
    <polyline fill="none" 
              stroke="blue" 
              stroke-width="2"
              g-bind:points="data.map((v, n) => [(n * 560 / data.length) + 39, 160 - ((v / (Math.ceil(data.$max() / 10) * 10)) * 150)])"/>
    <!-- horizontal lines -->
    <defs g-for="n of 7">
      <text x="10" 
            g-bind:y="(n * 25) + 14" font-size="11" 
            g-content="Math.round(Math.ceil(data.$max() / 10) * 10 / 6 * (6 - n))"></text>
      <line stroke="black" 
            stroke-width="0.5"
            x1="40" 
            x2="576" 
            g-bind:y1="(n * 25) + 10" 
            g-bind:y2="(n * 25) + 10"/>
    </defs>
    <!--  vertical lines -->
    <defs g-for="(v, n) of data">
      <text font-size="11" 
            y="180" 
            g-bind:x="(n * 560 / data.length) + 35" 
            g-content="n"></text>
      <line stroke="black" 
            stroke-width="0.5"
            y1="10" 
            y2="160" 
            g-bind:x1="(n * 560 / data.length) + 39" 
            g-bind:x2="(n * 560 / data.length) + 39" />
      <circle r="3" 
              fill="red"
              g-bind:cx="(n * 560 / data.length) + 39" 
              g-bind:cy="160 - ((v / (Math.ceil(data.$max() / 10) * 10)) * 150)">
        <title g-content="v"></title>
      </circle>
    </defs>
  </svg>
  <g-script type="data">
    [6, 7, 23, 14, 8, 3, 19, 18, 11, 15, 21, 20, 2, 22, 10, 1, 9, 13, 24, 12, 17, 16, 4, 5]
  </g-script>
</g-composer>

<g-editor href="g-composer#line-chart" style="width:100%"></g-editor>