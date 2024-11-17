import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as m}from"./index-B-o1Wr-g.js";import{f as S}from"./index-B5ZI-g0m.js";import"./_commonjsHelpers-Cpj98o6Y.js";const O=({label:d,value:u,checked:o=!1,onChange:N,disabled:l=!1,name:U})=>{const[c,i]=m.useState(o);m.useEffect(()=>{i(o)},[o]);const j=I=>{l||(i(I.target.checked),N(u))};return e.jsx("div",{className:"RADIOBUTTON___wrapper",children:e.jsxs("label",{className:`RADIOBUTTON___container ${l?"RADIOBUTTON___disabled":""}`,children:[e.jsx("input",{type:"radio",value:u,checked:c,onChange:j,name:U,disabled:l,"aria-checked":c,"aria-label":d}),e.jsx("span",{className:"RADIOBUTTON___checkmark","aria-hidden":"true"}),e.jsx("span",{className:"RADIOBUTTON___label",children:d})]})})};O.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"any"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!0,tsType:{name:"string"},description:""}}};const w={title:"Sample/RadioButton",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Radio button label",control:"text",table:{defaultValue:{summary:"Radio Button"},type:{summary:"string"}}},checked:{description:"Checked state",control:"boolean",table:{defaultValue:{summary:"false"},type:{summary:"checked"}}},disabled:{description:"Disabled state",control:"boolean",table:{defaultValue:{summary:"false"},type:{summary:"disabled"}}},value:{description:"Radio button value",control:"text",table:{defaultValue:{summary:"radio_value"},type:{summary:"string"}}},name:{description:"Radio button group name",control:"text",table:{type:{summary:"string"}}},onChange:{description:"Change event handler",action:"onChange",table:{type:{summary:"function"}}}},args:{label:"Default Radio Button",checked:!1,disabled:!1,value:"radio_value",name:"group1",onChange:S()}},a={args:{label:"Default Radio Button",checked:!1,disabled:!1,value:"radio_value",name:"group1"}},r={args:{label:"Checked Radio Button",checked:!0,value:"radio_value",name:"group1"}},t={args:{label:"Disabled Unchecked Radio Button",checked:!1,disabled:!0,value:"radio_value",name:"group1"}},s={args:{label:"Disabled Checked Radio Button",checked:!0,disabled:!0,value:"radio_value",name:"group1"}},n={args:{label:"",checked:!0,value:"radio_value",name:"group1"}};var p,b,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Default Radio Button',
    checked: false,
    disabled: false,
    value: 'radio_value',
    name: 'group1'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Checked Radio Button',
    checked: true,
    value: 'radio_value',
    name: 'group1'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,y,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Unchecked Radio Button',
    checked: false,
    disabled: true,
    value: 'radio_value',
    name: 'group1'
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var R,D,B;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked Radio Button',
    checked: true,
    disabled: true,
    value: 'radio_value',
    name: 'group1'
  }
}`,...(B=(D=s.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var C,T,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: '',
    checked: true,
    value: 'radio_value',
    name: 'group1'
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const L=["Default","Checked","DisabledUnchecked","DisabledChecked","WithoutLabel"];export{r as Checked,a as Default,s as DisabledChecked,t as DisabledUnchecked,n as WithoutLabel,L as __namedExportsOrder,w as default};
