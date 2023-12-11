# Ranking evolution

<g-composer id="ranking-evolution">
<svg
  viewBox="0 0 500 500"
  height="500"
  width="500"
  font-size="12"
  style="border: 1px solid rgb(128, 128, 128);"
>
  <defs g-for="(ranking, i) of data">
    <defs g-for="(player, n) of ranking">
      <circle
        r="12"
        stroke="gray"
        stroke-width="1"
        g-bind:fill="$.config.pallete[data[data.length - 1].indexOf(player)]"
        g-bind:cx="30 + (i * 450)"
        g-bind:cy="26 + (n * 50)"
      ></circle>
      <text
        text-anchor="middle"
        g-bind:x="30 + (i * 450)"
        g-bind:y="30 + (n * 50)"
        g-content="player"
      ></text>
    </defs>
  </defs>
    <defs g-for="(player, n) of data[0]">
      <path
        g-bind:d="$$.M(42, 26 + (n * 50))
                    .C(300, 26 + (n * 50), 
                       200, 26 + (data[1].indexOf(data[0][n]) * 50), 
                       468, 26 + (data[1].indexOf(data[0][n]) * 50))" 
        g-bind:stroke="$.config.pallete[data[0].indexOf(player)]"
        stroke-width="1"
        fill="none"
      ></path>
  </defs>
</svg>
<g-script type="data">[
  ["D", "J", "C", "G", "B", "I", "A", "F", "H", "E"],
  ["C", "E", "G", "D", "I", "F", "B", "H", "J", "A"]
]</g-script>
<g-script type="config">{
  pallete: [
    '#8dd3c7',
    '#bed3b3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd'
  ]
}</g-script>
</g-composer>

<g-editor href="g-composer#ranking-evolution" style="width:100%"></g-editor>