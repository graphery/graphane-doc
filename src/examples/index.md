# Basic bars

<g-composer>
  <svg viewBox="0 0 200 100" width="200px" height="100px">
	<g stroke-width="12" stroke-linecap="round">
	  <defs g-for="(record, index) of data">
  	    <line x1="22" 
              g-bind:x2="30 + record.value"   
              g-bind:y1="30 + (index * 20)"
              g-bind:y2="30 + (index * 20)"
              g-bind:stroke="record.color"
        ></line>
	  </defs>
	</g>
  </svg>
  <g-script type="data">
  [
    {"color": "#D80000", "value": 100},
    {"color": "#00D800", "value": 150},
    {"color": "#0000D8", "value": 70}
  ]
  </g-script>
</g-composer>

```html
<g-composer>
  <svg viewBox="0 0 200 100" width="200px" height="100px">
    <g stroke-width="12" stroke-linecap="round">
      <defs g-for="(record, index) of data">
        <line x1="22"
              :x2="30 + record.value"
              :y1="30 + (index * 20)"
              :y2="30 + (index * 20)"
              :stroke="record.color"
        ></line>
      </defs>
    </g>
  </svg>
  <script type="data">
  [
    {"color": "#D80000", "value": 100},
    {"color": "#00D800", "value": 150},
    {"color": "#0000D8", "value": 70}
  ]
  </script>
</g-composer>
```