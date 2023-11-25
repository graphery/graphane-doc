# Heatmap: day & hour

<g-composer>
<svg viewBox="0 0 600 200" style="font-size: 12" width="600" height="200">
  <defs g-for="(day, d) of data">
    <text x="0"
          g-bind:y="(d * 20) + 45"
          g-content="new Date(1970, 1, d+2).toLocaleString('en',{weekday:'short'})"></text>
    <defs g-for="(hour, h) of day">
      <text y="24"
            g-bind:x="(h * 20) + 32"
            g-content="String(h + 1).padStart(2,'0')"></text>
      <rect transform="translate(30,30)"
            width="20"
            height="20"
            stroke-width="1"
            stroke="black"
            g-bind:fill="$.config.pallete.find(r => r.value >= data[d][h]).color"
            g-bind:x="h * 20"
            g-bind:y="d * 20">
        <title g-content="data[d][h]"></title>
      </rect>
    </defs>
  </defs>
  <defs g-for="({value, color}, n) of $.config.pallete">
    <text x="580"
          g-bind:y="(n * 20) + 26" 
          g-content="value"></text>
    <rect x="550"
          width="20"
          height="20"
          stroke="black"
          stroke-width="1"
          g-bind:y="(n * 20) + 10"
          g-bind:fill="color"
          ></rect> 
  </defs>
</svg>
<g-script type="data">[
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
]</g-script>
<g-script type="config">{
  pallete: [
    {value: 0, color: '#fcfbfd'},
    {value: 3, color: '#efedf5'},
    {value: 6, color: '#dadaeb'},
    {value: 9, color: '#bcbddc'},
    {value: 12, color: '#9e9ac8'},
    {value: 15, color: '#807dba'},
    {value: 18, color: '#6a51a3'},
    {value: 21, color: '#54278f'},
    {value: 24, color: '#3f007d'}
  ]
}</g-script>
</g-composer>