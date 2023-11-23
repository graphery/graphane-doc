# World Population

<g-composer>
<svg viewBox="0 0 600 400" style="font-size: 14" width="600" height="400">
  <defs g-for="([key, value], n) of Object.entries(data)">
    <text x="0"
          g-bind:y="(n * 22) + 60"
          g-content="key"></text>
    <rect x="40"
          width="500"
          height="18"
          fill="lightgray"
          g-bind:y="(n * 22) + 45"/>
    <rect x="40"
          height="18"
          fill="black"
          g-bind:y="(n * 22) + 45"
          g-bind:width="500 * value / 8000000000">
      <title g-content="new Intl.NumberFormat().format(value)"></title>
    </rect>
  </defs>
  <defs g-for="n of 8">
    <text y="370"
          text-anchor="middle"
          g-bind:x="(500 * (n + 1) / 8) + 40"
          g-content="(n + 1) * 1000"></text>
    <line g-bind:x1="(500 * (n + 1) / 8) + 40"
          g-bind:x2="(500 * (n + 1) / 8) + 40"
          y1="42"
          y2="350"
          stroke="gray"
          stroke-width="1"/>
  </defs>
  <text y="35"
        x="3">year</text>
  <text y="390"
        x="520">millions</text>
</svg>
<g-script type="data">{
"1955":2746072141,
"1960":3019233434,
"1965":3337111983,
"1970":3695390336,
"1975":4069437231,
"1980":4444007706,
"1985":4861730613,
"1990":5316175862,
"1995":5743219454,
"2000":6148898975,
"2005":6558176119,
"2010":6985603105,
"2015":7426597537,
"2020":7840952880
}</g-script>
</g-composer>