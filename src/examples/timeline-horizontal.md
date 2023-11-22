---
outline: deep
---

# Timeline (horizontal)

<g-composer>
  <svg g-bind:viewBox="[0, 0, (data.length * 100) + 30, 300]" 
       g-bind:width="(data.length * 100) + 30"
       height="300"
       font-size="11">
    <line x1="0" 
          g-bind:x2="data.length * 100"
          y1="150"
          y2="150"
          stroke-width="1"
          stroke="black"/>
    <defs g-for="({label, description}, n) of data">
      <g>
        <text g-content="label"
              dominant-baseline="middle"
              text-anchor="middle"
              g-bind:x="n * 100 + 50"
              g-bind:y="n % 2 ? 120 : 180"></text>
        <circle cy="150"
                r="4"
                fill="black"
                g-bind:cx="n * 100 + 50"/>
        <line stroke-width="1"
              stroke="black"
              y1="150"
              g-bind:x1="n * 100 + 50"
              g-bind:y2="n % 2 ? 130 : 170"
              g-bind:x2="n * 100 + 50"/>
        <foreignObject height="80" 
                       width="130" 
                       style="line-height: 1.2em"
                       g-bind:x="n * 100" 
                       g-bind:y="n % 2 ? 20 : 200"
                       g-content="description"></foreignObject>
      </g>
    </defs>
  </svg>
  <g-script type="data">[
    {
      label: 'Step A', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ultrices ex. '
    },
    {
      label: 'Step B', 
      description: 'Nunc condimentum sapien non porta mattis. Maecenas ultricies felis sed erat iaculis, at ultrices purus mollis.'
    },
    {
      label: 'Step C', 
      description: 'Integer et ullamcorper lacus, id euismod est. Donec laoreet risus volutpat, pulvinar tortor ut, mattis enim.'
    },
    {
      label: 'Step D', 
      description: 'Donec ultricies sed leo ac varius. Ut at nulla pulvinar, dictum tellus nec, porttitor dolor.'
    },
    {
      label: 'Step E', 
      description: 'Maecenas laoreet eget dolor a hendrerit. Suspendisse potenti. Quisque metus orci, lobortis sit amet purus sed, laoreet rhoncus felis.'
    }
  ]</g-script>
</g-composer>

