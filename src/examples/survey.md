---
outline: deep
---

# Survey

<g-composer>
  <svg g-bind:viewBox="[0, 0, 600, (data.length + 2) * 30]" 
       g-bind:height="(data.length + 2) * 30"
       width="600"
       font-size="11">
    <line stroke="black"
          x1="300" 
          x2="300" 
          y1="48" 
          g-bind:y2="42 + (data.length  * 30)" stroke-width="1"/>
    <defs g-for="(record, n) of data">
      <text g-content="record.question"
            dominant-baseline="hanging"
            text-anchor="end"
            g-bind:x="290 - (Math.max(...data.map(r => r.somewhat_oppose + r.strongly_oppose)) / 100 * 200)"
            g-bind:y="(n * 30) + 55"></text>
      <rect class="sto"
            fill="darkred" 
            height="20"
            g-bind:x="300 - (record.somewhat_oppose / 100 * 200) - (record.strongly_oppose / 100 * 200)" 
            g-bind:y="(n * 30) + 50"
            g-bind:width="record.strongly_oppose / 100 * 200">
        <title g-content="record.strongly_oppose + '%'"></title>
      </rect>
      <rect class="soo"
            fill="red" 
            height="20"
            g-bind:x="300 - (record.somewhat_oppose / 100 * 200)" 
            g-bind:y="(n * 30) + 50"
            g-bind:width="record.somewhat_oppose / 100 * 200">
        <title g-content="record.somewhat_oppose + '%'"></title>
      </rect>
      <rect class="sof"
            fill="green" 
            height="20"
            x="301" 
            g-bind:y="(n * 30) + 50"
            g-bind:width="record.somewhat_favor / 100 * 200">
        <title g-content="record.somewhat_favor + '%'"></title>
      </rect>
      <rect class="stf"
            fill="darkgreen" 
            height="20"
            g-bind:x="300 + (record.somewhat_favor / 100 * 200)" 
            g-bind:y="(n * 30) + 50"
            g-bind:width="record.strongly_favor / 100 * 200">
        <title g-content="record.strongly_favor + '%'"></title>
      </rect>
      <rect class="stf"
            fill="darkgreen" 
            height="20"
            g-bind:x="300 + (record.somewhat_favor / 100 * 200)" 
            g-bind:y="(n * 30) + 50"
            g-bind:width="record.strongly_favor / 100 * 200">
        <title g-content="record.strongly_favor + '%'"></title>
      </rect>
      <rect class="na"
            fill="lightgray" 
            height="20"
            x="500" 
            g-bind:y="(n * 30) + 50"
            g-bind:width="record.na / 100 * 200">
        <title g-content="record.na + '%'"></title>
      </rect>
    </defs>
    <text x="120" y="30" fill="darkred">strongly oppose</text>
    <path g-bind:d="$$.M(165,34)
                      .l(0,10)
                      .l( - 165
                          + $.svg.querySelector('.sto').x() 
                          + ($.svg.querySelector('.sto').width()/ 2),
                         0)
                      .l(0,7)" 
          stroke-width="1" 
          stroke="darkred"
          fill="none"/>
    <text x="210" y="30" fill="red">somewhat oppose </text>
    <path g-bind:d="$$.M(255,34)
                      .l(0,5)
                      .l( - 255
                          + $.svg.querySelector('.soo').x() 
                          + ($.svg.querySelector('.soo').width()/ 2),
                         0)
                      .l(0,11)" 
          stroke-width="1" 
          stroke="red"
          fill="none"/>
    <text x="310" y="30" fill="green">somewhat favor</text>  
    <path g-bind:d="$$.M(355,34)
                      .l(0,5)
                      .l( - 355
                          + $.svg.querySelector('.sof').x() 
                          + ($.svg.querySelector('.sof').width()/ 2),
                         0)
                      .l(0,11)" 
          stroke-width="1" 
          stroke="green"
          fill="none"/>
    <text x="400" y="30" fill="darkgreen">strongly favor</text>
    <path g-bind:d="$$.M(430,34)
                      .l(0,10)
                      .l( - 430
                          + $.svg.querySelector('.stf').x() 
                          + ($.svg.querySelector('.stf').width()/ 2),
                         0)
                      .l(0,7)" 
          stroke-width="1" 
          stroke="darkgreen"
          fill="none"/>
    <text x="500" y="30" fill="gray">dk/na</text>
  </svg>
  <g-script type="data">[
  {question: 'Question A', strongly_oppose: 32, somewhat_oppose:28, somewhat_favor: 25,strongly_favor: 9},
  {question: 'Question B', strongly_oppose: 24, somewhat_oppose: 35, somewhat_favor: 21,strongly_favor: 8},
  {question: 'Question C', strongly_oppose: 8, somewhat_oppose: 18, somewhat_favor: 45, strongly_favor: 22},
  {question: 'Question D', strongly_oppose: 20, somewhat_oppose: 27, somewhat_favor: 28, strongly_favor: 15},
  {question: 'Question E', strongly_oppose: 4, somewhat_oppose: 18, somewhat_favor: 27, strongly_favor: 5},
  {question: 'Question F', strongly_oppose: 60, somewhat_oppose: 10, somewhat_favor: 15, strongly_favor: 1},
  {question: 'Question G', strongly_oppose: 4, somewhat_oppose: 10, somewhat_favor: 42, strongly_favor: 28},
  {question: 'Question H', strongly_oppose: 0, somewhat_oppose: 2, somewhat_favor: 48, strongly_favor: 48}
  ]</g-script>
  <g-script type="methods">
    function data(values) {
      return values.map(r => {
        r.na = 100 - r.strongly_oppose - r.somewhat_oppose - r.somewhat_favor - r.strongly_favor;
        return r;
      });
    }
  </g-script>
</g-composer>

