---
outline: deep
---

# Votes

<g-composer>
  <svg viewBox="0 0 500 500">
    <defs g-for="(color, i) of data.reduce((a, r) => [...a, ...Array(r.votes).fill(r.color)], [])">
      <circle g-bind:id="`rect_` + i" 
              g-bind:cx="Math.floor(i / 20) * 20 + 5"
              g-bind:cy="Math.floor(i % 20) * 20 + 5"
              g-bind:fill="color"
              r="5"/>
    </defs>
  </svg>
  <g-script type="data">[
    {label: 'a', votes: 185, color: 'red'},
    {label: 'b', votes: 220, color: 'blue'},
    {label: 'b', votes: 15, color: 'green'}
  ]</g-script>
</g-composer>
