import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as h}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const q=({label:l,checked:d,disabled:a=!1,value:s,onChange:O,...K})=>{const[i,u]=h.useState(d);h.useEffect(()=>{u(d)},[d]);const B=H=>{const b=H.target.checked;u(b),O(b)};return e.jsx("div",{children:e.jsxs("label",{className:`CHECKBOX___container ${a?"CHECKBOX___disabled":""}`,"aria-disabled":a,"aria-checked":i,children:[l&&e.jsx("span",{id:`checkbox-label-${s}`,className:"CHECKBOX___label",children:l}),e.jsx("input",{type:"checkbox",id:`checkbox-${s}`,"aria-labelledby":`checkbox-label-${s}`,checked:i,onChange:B,value:s,disabled:a}),e.jsx("span",{className:`CHECKBOX___checkmark ${a?"CHECKBOX___disabled":""}`})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""},checkboxEventemiter:{required:!1,tsType:{name:"signature",type:"function",raw:"(isChecked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isChecked"}],return:{name:"void"}}},description:""}}};const U={title:"Sample/Checkbox",component:q,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{description:"Checkbox label",control:"text",table:{defaultValue:{summary:"Checkbox"},type:{summary:"string"}}},checked:{description:"Checked state",control:"boolean",table:{defaultValue:{summary:"false"},type:{summary:"checked"}}},disabled:{description:"Disabled state",control:"boolean",table:{defaultValue:{summary:"false"},type:{summary:"disabled"}}},onChange:{description:"Change event handler",action:"onChange",table:{type:{summary:"function"}}},checkboxEventemiter:{description:"Change checkboxEventemiter",action:"onClick",table:{type:{summary:"checkboxEventemiter"}}}}},r={args:{label:"Default Checkbox",checked:!1,disabled:!1}},c={args:{label:"Checked Checkbox",checked:!0}},t={args:{label:"Disabled Unchecked Checkbox",checked:!1,disabled:!0}},o={args:{label:"Disabled Checked Checkbox",checked:!0,disabled:!0}},n={args:{label:"",checked:!0}};var m,p,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Default Checkbox',
    checked: false,
    disabled: false
  }
}`,...(k=(p=r.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var C,g,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Checked Checkbox',
    checked: true
  }
}`,...(x=(g=c.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,y,_;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Unchecked Checkbox',
    checked: false,
    disabled: true
  }
}`,...(_=(y=t.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var D,E,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Checked Checkbox',
    checked: true,
    disabled: true
  }
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var j,S,T;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: '',
    checked: true
  }
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const V=["Default","Checked","DisabledUnchecked","DisabledChecked","WithoutLabel"];export{c as Checked,r as Default,o as DisabledChecked,t as DisabledUnchecked,n as WithoutLabel,V as __namedExportsOrder,U as default};
