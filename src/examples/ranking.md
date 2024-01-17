---
outline: deep
---

# Population Ranking

<g-composer style="width: 500px">
  <svg viewBox="0 0 500 500">
    <defs g-for="({country, population}, n) of data">
      <g g-bind:transform="$$.translate(
                             Object.values(
                               $.polar2cartesian(250, 
                                                 250, 
                                                 170 * population / data.$max('population')+ 10,
                                                 360/data.length * n + 360/data.length/2
                              )
                             )
                            )">
        <g g-bind:transform="$$.rotate(360/data.length * n + (360/data.length * n < 180 ? -70:110))"
           g-bind:text-anchor="360/data.length * n >= 180 ? 'end' : ''">
          <text alignment-baseline="middle" font-size="12" g-content="country"></text>
        </g>
      </g>
      <path g-bind:d="$$.circleSlice( 250, 
                                      250, 
                                      170 * (population / data.$max('population')),
                                      360/data.length, 
                                      360/data.length * n
                                    )" 
         fill="red" stroke="white" stroke-width="1"/>
    </defs>
  </svg>
  <g-script type="plugin" src="https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"></g-script>
  <g-script type="data">[
    {country: "India", population:	1428627663},
    {country: "China", population:	1425671352},
    {country: "United States", population: 339996563},
    {country: "Indonesia", population:	277534122},
    {country: "Pakistan", population:	240485658},
    {country: "Nigeria", population:	223804632},
    {country: "Brazil", population:	216422446},
    {country: "Bangladesh", population:	172954319},
    {country: "Russia", population:	144444359},
    {country: "Mexico", population:	128455567},
    {country: "Ethiopia", population:	126527060},
    {country: "Japan", population:	123294513}
  ]</g-script>
</g-composer>

```html
<g-composer style="width: 500px">
  <template>
    <svg viewBox="0 0 500 500">
      <defs g-for="({country, population}, n) of data">
        <g g-bind:transform="$$.translate(
                               Object.values(
                                 $.polar2cartesian(250, 
                                                   250, 
                                                   170 * population / data.$max('population')+ 10,
                                                   360/data.length * n + 360/data.length/2
                                )
                               )
                              )">
          <g g-bind:transform="$$.rotate(360/data.length * n + (360/data.length * n < 180 ? -70:110))"
             g-bind:text-anchor="360/data.length * n >= 180 ? 'end' : ''">
            <text alignment-baseline="middle" font-size="12" g-content="country"></text>
          </g>
        </g>
        <path g-bind:d="$$.circleSlice( 250, 
                                        250, 
                                        170 * (population / data.$max('population')),
                                        360/data.length, 
                                        360/data.length * n
                                      )" 
           fill="red" stroke="white" stroke-width="1"/>
      </defs>
    </svg>
  </template>
  <script type="plugin" src="https://cdn.graphery.online/graphane/0.1.0-alpha/plugins/shapes.js"></script>
  <script type="data">[
    {country: "India", population: 1428627663},
    {country: "China", population: 1425671352},
    {country: "United States", population: 339996563},
    {country: "Indonesia", population: 277534122},
    {country: "Pakistan", population: 240485658},
    {country: "Nigeria", population: 223804632},
    {country: "Brazil", population: 216422446},
    {country: "Bangladesh", population: 172954319},
    {country: "Russia", population: 144444359},
    {country: "Mexico", population: 128455567},
    {country: "Ethiopia", population: 126527060},
    {country: "Japan", population: 123294513}
  ]</script>
</g-composer>

```