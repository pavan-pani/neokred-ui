import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{r as A}from"./index-B-o1Wr-g.js";import{I,a as j}from"./index-C1m77QLL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const S=({sections:h})=>{const[n,_]=A.useState(null),r=t=>{_(e=>e===t?null:t)},u=(t,e)=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),r(e))};return o.jsx("div",{className:"ACCORDION___accordion",children:h.map((t,e)=>o.jsxs("div",{className:"ACCORDION___accordion-section",children:[o.jsxs("div",{className:`ACCORDION___accordion-header ${n===e?"ACCORDION___active":""}`,onClick:()=>r(e),onKeyDown:g=>u(g,e),role:"button",tabIndex:0,"aria-expanded":n===e,"aria-controls":`accordion-content-${e}`,id:`accordion-header-${e}`,children:[o.jsx("span",{children:t.title}),o.jsx("span",{className:"ACCORDION___arrow",children:n===e?o.jsx(I,{}):o.jsx(j,{})})]}),n===e&&o.jsx("div",{className:"ACCORDION___accordion-content",id:`accordion-content-${e}`,role:"region","aria-labelledby":`accordion-header-${e}`,children:t.content})]},e))})};S.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionSection"}],raw:"AccordionSection[]"},description:""}}};const w={title:"Sample/Accordion",component:S,tags:["autodocs"]},C=[{title:"Section 1",content:o.jsx("p",{children:"This is the content of Section 1"})},{title:"Section 2",content:o.jsx("p",{children:"Content of Section 2 goes here"})},{title:"Section 3",content:o.jsx("p",{children:"Details inside Section 3"})}],s={args:{sections:C}},c={args:{sections:[{title:"Single Section",content:o.jsx("p",{children:"This is a single section with some content."})}]}};var i,a,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    sections: sampleSections
  }
}`,...(l=(a=s.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,p,m;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: 'Single Section',
      content: <p>This is a single section with some content.</p>
    }]
  }
}`,...(m=(p=c.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const y=["Default","SingleSection"];export{s as Default,c as SingleSection,y as __namedExportsOrder,w as default};
