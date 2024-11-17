import{j as z}from"./jsx-runtime-j_jdvEMj.js";import{f as C}from"./index-B5ZI-g0m.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const y=({label:B,size:S="medium",disabled:r=!1,customClass:M="",onClick:v})=>z.jsx("button",{className:`button ${S} ${M}`,onClick:v,disabled:r,"aria-disabled":r,role:"button",children:B});y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const V={title:"Sample/Button",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Button label",control:"text",table:{defaultValue:{summary:"Button"},type:{summary:"text"}}},size:{description:"Button size",control:{type:"select"},options:["small","medium","large"],table:{defaultValue:{summary:"medium"},type:{summary:"select"}}},disabled:{description:"Disabled state",control:{type:"boolean"},table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},customClass:{description:"Custom CSS class",control:"text",table:{type:{summary:"string"}}},onClick:{description:"onClick event",action:"onClick",table:{type:{summary:"function"}}}},args:{onClick:C()}},e={args:{size:"large",label:"Large Button"}},a={name:"Medium",args:{size:"medium",label:"Medium Button"}},t={args:{size:"small",label:"Small Button"}},s={args:{label:"Disabled Button",disabled:!0}};var l,o,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Button'
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var m,u,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Medium',
  args: {
    size: 'medium',
    label: 'Medium Button'
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Button'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var b,g,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Button',
    disabled: true
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const k=["Large","Medium","Small","Disabled"];export{s as Disabled,e as Large,a as Medium,t as Small,k as __namedExportsOrder,V as default};
