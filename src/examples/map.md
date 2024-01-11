---
outline: deep
---

# EU Map

<g-composer svg-src="../svg/europe.svg" style="width: 100%">
<g-script type="data">
  {
    AT: 1,
    BE: 1,
    BG: 1, 
    HR: 1, 
    CY: 1,
    CZ: 1,
    DE: 1, 
    EE: 1, 
    FI: 1, 
    FR: 1, 
    DE: 1,
    GR: 1, 
    HU: 1, 
    IE: 1, 
    IT: 1, 
    LV: 1, 
    LT: 1, 
    LU: 1,
    NL: 1,
    PL: 1, 
    PT: 1, 
    RO: 1, 
    SK: 1, 
    SI: 1, 
    ES: 1, 
    SE: 1,
  }
</g-script>
<g-script type="methods">
  function data(countries) {
    for (code in countries) {
      $.svg.getElementById(code)?.fill('#00F').opacity(countries[code]);
    }
  }
</g-script>
</g-composer>


<p><label>map:
  <select oninput="document.querySelector('g-composer').svgSrc = this.value">
    <option value="../svg/europe.svg" selected>compact</option>
    <option value="../svg/europe2.svg">extended</option>
  </select>
</label></p>