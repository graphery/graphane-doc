import { defineConfig }      from 'vitepress';
import { BUNDLED_LANGUAGES } from 'shiki';
import { readFileSync }      from "fs"

const graphaneLanguageGrammar = JSON.parse(readFileSync("./src/.vitepress/shiki/graphane.tmLanguage.json"))

const html     = BUNDLED_LANGUAGES.find(lang => lang.id === 'html')
html.scopeName = 'source.graphane';
html.grammar   = graphaneLanguageGrammar;
html.aliases   = html.aliases || [];
html.aliases.push('svg');

const fullReloadAlways = {
  handleHotUpdate ({server}) {
    server.ws.send({type : "full-reload"});
    return [];
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title       : 'graphane',
  description : "version 0.0.1 (alpha)",
  vite        : {
    plugins : [fullReloadAlways],
  },
  vue         : {
    template : {
      compilerOptions : {
        isCustomElement : (tag) => tag.startsWith('g-')
      }
    }
  },
  head        : [
    ['link', {rel : 'icon', href : '/img/logo/g.svg'}],
    ['script', {
      src  : 'http://localhost:63342/graphery/src/component/template.js',
      type : 'module'
    }],
    // ['script', {src : 'https://cdn.graphery.online/graphane/0.1.0-alpha.1/component/template.js'}],
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig : {
    logo        : {
      light : '/img/logo/graphane.svg',
      dark  : '/img/logo/graphane.light.svg'
    },
    siteTitle   : false,
    footer      : {
      message   : 'Released under the MIT License.',
      copyright : 'Copyright © 2023 <a href="https://www.graphane.dev/"> ' +
                  '<img src="/img/logo/graphane.svg" alt="graphane" width="120"></a>'
    },
    search      : {
      provider : 'local'
    },
    nav         : [
      {link : '/', text : 'Home'},
      {link : '/guide/', text : 'Guide'},
      {
        text : 'API', items : [
          {link : '/reference/components/', text : 'Components'},
          {link : '/reference/lib/', text : 'Library'},
        ]
      },
      {link : '/examples/', text : 'Examples'},
      {link : '#', text : '0.1.0-alpha.1'},
    ],
    sidebar     : {
      '/guide/'                : [{
        text  : 'Guide',
        items : [
          {link : '/guide/', text : 'Quick Start'},
          {
            text      : 'Templating',
            link      : '/guide/templating/',
            collapsed : true,
            items     : [
              {link : '/guide/templating/binding', text : 'Binding'},
              {link : '/guide/templating/lists', text : 'Lists'},
              {link : '/guide/templating/conditional', text : 'Conditional'},
              {link : '/guide/templating/content', text : 'Content'},
              {link : '/guide/templating/events', text : 'Events'},
              {link : '/guide/templating/expressions', text : 'Expressions'},
            ]
          },
          {
            text      : 'Data',
            link      : '/guide/data/',
            collapsed : true,
            items     : [
              {link : '/guide/data/attribute', text : 'data attribute'},
              {link : '/guide/data/property', text : '.data property'},
              {link : '/guide/data/embebed', text : 'Embedded data'},
              {link : '/guide/data/external', text : 'Load data'},
              // {link : '/guide/data/helpers', text : 'Array helpers'},
              {link : '/guide/data/reactivity', text : 'Reactivity'},
            ]
          },
          {
            text      : 'Methods',
            link      : '/guide/methods/',
            collapsed : true,
            items     : [
              {link : '/guide/methods/embebed', text : 'Embedded methods'},
              {link : '/guide/methods/external', text : 'External resource'},
              {link : '/guide/methods/property', text : 'Property'},
              {link : '/guide/methods/data-access', text : '<code>$.data</code>'},
              {link : '/guide/methods/svg-access', text : '<code>$.svg</code>'},
              {link : '/guide/methods/load', text : 'Load event'},
            ]
          },
          {
            text      : 'Appendix: SVG',
            collapsed : true,
            items     : [
              {link : '/guide/svg/', text : 'Introduction'},
              {link : '/guide/svg/02-SVG-structure.md', text : 'SVG structure'},
              {link : '/guide/svg/03-Basic-shapes.md', text : 'Basic Shapes'},
              {link : '/guide/svg/04-Path-element.md', text : 'Path'},
              {link : '/guide/svg/05-Text-element.md', text : 'Text'},
              {link : '/guide/svg/06-Fill-and-stroke.md', text : 'Fill and Stroke'},
              {link : '/guide/svg/07-Reuse-elements.md', text : 'Reuse elements'},
              {link : '/guide/svg/08-Gradients-and-patterns.md', text : 'Gradients and Patters'},
              {link : '/guide/svg/09-Aspect-ratio.md', text : 'Size and Aspect Ratio'},
              {link : '/guide/svg/10-Transform.md', text : 'Transform'},
              {link : '/guide/svg/11-CSS.md', text : 'CSS'},
              {link : '/guide/svg/12-Animation.md', text : 'Animation'},
              {link : '/guide/svg/13-Text-path-and-clip-path.md', text : 'Text Path and Clip Path'},
              {link : '/guide/svg/14-Manage-elements.md', text : 'Manage Elements'},
              {link : '/guide/svg/15-Events.md', text : 'Handle Events'},
            ]
          },
          // {
          //   text      : 'Custom Web Component',
          //   collapsed : true,
          //   items     : [
          //     {link : '/guide/components/what-is', text : 'What is'},
          //     {link : '/guide/components/create', text : 'How to create'},
          //     {link : '/guide/components/composition', text : 'Include features'},
          //     {link : '/guide/components/api', text : 'Improve the API'},
          //   ]
          // },
          // {
          //   text      : 'Plugins',
          //   collapsed : true,
          //   items     : [
          //     {link : '/guide/plugins/use', text : 'How to use'},
          //     {link : '/guide/plugins/create', text : 'How to create'},
          //     {link : '/guide/plugins/examples', text : 'Examples'},
          //   ]
          // },
        ]
      }],
      '/examples/'             : [{
        text  : 'Examples',
        items : [
          {link : '/examples/', text : 'Graphane Logo'},
          {link : '/examples/02.otto.neurath.tribute', text : 'Otto Neumath tribute'},
          {link : '/examples/03.quadrant', text : 'Quadrant'},
          {link : '/examples/04.process', text : 'Process'},
          {link : '/examples/05.bars', text : 'Chart Bars'},
          {link : '/examples/06.evolution', text : 'Human Evolution'},
          {link : '/examples/07.fractal-tree', text : 'Fractal Tree'},
          {link : '/examples/08.circlebars', text : 'Circle Bars'},
        ]
      }],
      '/reference/components/' : [{
        text  : 'Components',
        items : [
          {link : '/reference/components/', text : 'Introduction'},
          {
            text  : 'g-template',
            link  : '/reference/components/g-template',
            items : [
              {
                text      : 'SVG Template',
                collapsed : true,
                link      : '/reference/components/templating',
                items     : [
                  {link : '/reference/components/templating.g-bind', text : 'g-bind'},
                  {link : '/reference/components/templating.g-for', text : 'g-for'},
                  {link : '/reference/components/templating.g-if', text : 'g-if'},
                  {link : '/reference/components/templating.g-content', text : 'g-content'},
                  {link : '/reference/components/templating.g-on', text : 'g-on'},
                ]
              },
              {
                text      : 'Attributes',
                collapsed : true,
                link      : '/reference/components/g-template.attributes',
                items     : [
                  {link : '/reference/components/g-template.attribute.src', text : 'src'},
                  {link : '/reference/components/g-template.attribute.data', text : 'data'},
                  {
                    link : '/reference/components/g-template.attribute.data-src',
                    text : 'data-src & data-type'
                  },
                  {link : '/reference/components/g-template.property.methods', text : 'methods'},
                ]
              },
            ]
          },
          {
            text      : 'g-data',
            collapsed : true,
            link      : '/reference/components/g-data',
            items     : [
              {
                text      : 'Attributes',
                collapsed : true,
                items     : [
                  {link : '/reference/components/g-data.type', text : 'type'},
                  {link : '/reference/components/g-data.src', text : 'src'}
                ]
              },
              {link : '/reference/components/g-data.content', text : 'Content'}
            ]
          },
          {
            text      : 'g-methods',
            collapsed : true,
            link      : '/reference/components/g-methods',
            items     : [
              {
                text      : 'Attributes',
                collapsed : true,
                items     : [
                  {link : '/reference/components/g-methods.src', text : 'src'}
                ]
              },
              {link : '/reference/components/g-methods.content', text : 'Content'}
            ]
          }
        ]
      }],
      '/reference/lib/'        : [{
        text  : 'Library',
        items : [
          {link : "/reference/lib/index", text : "import"},
          {link : "/reference/lib/management", text : "Management elements"},
          {
            link : "/reference/lib/attributes-properties-methods",
            text : "Attributes, properties, methods"
          },
          {link : "/reference/lib/classList-and-style", text : "classList and style"},
          {link : "/reference/lib/animateTo", text : "animateTo"},
          {link : "/reference/lib/a", text : "a"},
          {link : "/reference/lib/animate", text : "animate"},
          {link : "/reference/lib/animateMotion", text : "animateMotion"},
          {link : "/reference/lib/animateTransform", text : "animateTransform"},
          {link : "/reference/lib/circle", text : "circle"},
          {link : "/reference/lib/clipPath", text : "clipPath"},
          {link : "/reference/lib/defs", text : "defs"},
          {link : "/reference/lib/desc", text : "desc"},
          {link : "/reference/lib/ellipse", text : "ellipse"},
          {link : "/reference/lib/filter", text : "filter"},
          {link : "/reference/lib/FilterPrimitives", text : "Filter Primitives"},
          {link : "/reference/lib/foreignObject", text : "foreignObject"},
          {link : "/reference/lib/g", text : "g"},
          {link : "/reference/lib/image", text : "image"},
          {link : "/reference/lib/line", text : "line"},
          {link : "/reference/lib/linearGradient", text : "linearGradient"},
          {link : "/reference/lib/marker", text : "marker"},
          {link : "/reference/lib/mask", text : "mask"},
          {link : "/reference/lib/metadata", text : "metadata"},
          {link : "/reference/lib/mpath", text : "mpath"},
          {link : "/reference/lib/path", text : "path"},
          {link : "/reference/lib/pattern", text : "pattern"},
          {link : "/reference/lib/polygon", text : "polygon"},
          {link : "/reference/lib/polyline", text : "polyline"},
          {link : "/reference/lib/radialGradient", text : "radialGradient"},
          {link : "/reference/lib/rect", text : "rect"},
          {link : "/reference/lib/set", text : "set"},
          {link : "/reference/lib/stop", text : "stop"},
          {link : "/reference/lib/style", text : "style"},
          {link : "/reference/lib/svg", text : "svg"},
          {link : "/reference/lib/switch", text : "switch"},
          {link : "/reference/lib/symbol", text : "symbol"},
          {link : "/reference/lib/text", text : "text"},
          {link : "/reference/lib/textPath", text : "textPath"},
          {link : "/reference/lib/title", text : "title"},
          {link : "/reference/lib/tspan", text : "tspan"},
          {link : "/reference/lib/use", text : "use"},
          {link : "/reference/lib/view", text : "view"}
        ]
      }]
    },
    socialLinks : [
      {
        link : 'https://www.npmjs.com/package/@graphery/graphane',
        icon : {svg : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" xml:space="preserve"><g><path d="M10,10v980h980V10H10z M806.3,806.3H683.8v-490H500v490H193.8V193.8h612.5V806.3z"/></g> </svg>`}
      },
      {link : 'https://github.com/graphery/graphane', icon : 'github'},
    ]
  }
});
