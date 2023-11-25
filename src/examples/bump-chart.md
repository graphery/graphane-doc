# Bump chart

<g-composer>
<svg viewBox="0 0 500 500" height="500" width="500" font-size="12">
  <defs g-for="(player, n) of data[data.length - 1]">
      <circle r="12"
              stroke="lightgray"
              stroke-width="1"
              cx="485"
              g-bind:fill="$.config.pallete[n]"
              g-bind:cy="66 + (n * 45)"
              g-content="n + 1"/>
    <text text-anchor="middle"
          x="485"
          g-bind:y="70 + (n * 45)"
          g-content="player"></text>
  </defs>
  <defs g-for="(ranking, i) of data">
    <defs g-for="(player, n) of ranking">
      <line g-if="i !== data.length - 1"
            g-bind:x1="30 + (i * 44)"
            g-bind:y1="66 + (n * 45)"
            g-bind:x2="30 + ((i+1) * 44)"
            g-bind:y2="66 + (data[i+1].indexOf(data[i][n]) * 45)"
            g-bind:stroke="$.config.pallete[data[data.length - 1].indexOf(player)]"
            stroke-width="1"/>
      <circle r="6"
              stroke="gray"
              stroke-width="1"
              g-bind:fill="$.config.pallete[data[data.length - 1].indexOf(player)]"
              g-bind:cx="30 + (i * 44)"
              g-bind:cy="66 + (n * 45)">
        <title g-content="player"></title>
      </circle>
    </defs>
  </defs>
</svg>
<g-script type="data">[
  ['D', 'J', 'C', 'G', 'B', 'I', 'F', 'A', 'H', 'E'],
  ['C', 'G', 'D', 'I', 'J', 'B', 'F', 'H', 'A', 'E'],
  ['C', 'D', 'I', 'G', 'J', 'F', 'B', 'A', 'E', 'H'],
  ['C', 'G', 'D', 'J', 'I', 'B', 'F', 'H', 'E', 'A'],
  ['D', 'C', 'G', 'J', 'I', 'B', 'E', 'F', 'H', 'A'],
  ['D', 'J', 'C', 'G', 'B', 'I', 'E', 'F', 'H', 'A'],
  ['D', 'C', 'G', 'B', 'J', 'I', 'F', 'A', 'E', 'H'],
  ['D', 'J', 'C', 'G', 'B', 'I', 'F', 'E', 'A', 'H'],
  ['J', 'D', 'C', 'B', 'I', 'G', 'F', 'H', 'A', 'E'],
  ['J', 'D', 'G', 'C', 'I', 'F', 'B', 'A', 'H', 'E']
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