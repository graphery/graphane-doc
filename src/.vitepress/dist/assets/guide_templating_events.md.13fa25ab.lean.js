import{_ as p,o as l,c as n,k as s,Q as a,a as o}from"./chunks/framework.875adba1.js";const k=JSON.parse('{"title":"Events","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/templating/events.md","filePath":"guide/templating/events.md"}'),t={name:"guide/templating/events.md"},e=a("",5),c={viewBox:"0 0 100 100",style:{cursor:"pointer"}},r=s("rect",{x:"10",y:"10",width:"80",height:"80",fill:"blue","g-on:click":"alert(`hello`)"},null,-1),E=s("text",{x:"18",y:"52",fill:"white","g-on:click":"alert(`hello`)"},"click here",-1),y=[r,E],i=a("",2),h={viewBox:"0 0 100 100",style:{cursor:"pointer"}},u=s("rect",{x:"10",y:"10",width:"80",height:"80",fill:"blue","g-on:click":"showAlert()"},null,-1),F=s("text",{x:"18",y:"52",fill:"white","g-on:click":"showAlert()"},"click here",-1),g=[u,F],d=s("g-script",{type:"methods"}," function showAlert() { alert(`hello`); } ",-1),q=s("p",null,[o("In the SVG format, the text is not included inside other elements, is displayed over other elements. For this reason, in this example, the event handler is created in the "),s("code",null,"rect"),o(" and "),s("code",null,"text"),o(" elements.")],-1);function B(C,_,m,v,x,A){return l(),n("div",null,[e,s("g-template",null,[(l(),n("svg",c,y))]),i,s("g-template",null,[(l(),n("svg",h,g)),d]),q])}const w=p(t,[["render",B]]);export{k as __pageData,w as default};
