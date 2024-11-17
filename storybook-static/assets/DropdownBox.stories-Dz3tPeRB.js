import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{r as x}from"./index-B-o1Wr-g.js";import{I as y,a as g}from"./index-C1m77QLL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iconBase-9qBny9oe.js";const o=({title:n,content:l,width:p="200px",left:u,right:h})=>{const[t,r]=x.useState(!1),m=a=>{a.key==="Enter"||a.key===" "?(a.preventDefault(),r(f=>!f)):a.key==="Escape"&&t&&r(!1)};return e.jsxs("span",{className:"dropdown-menu",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),onBlur:()=>r(!1),tabIndex:0,role:"menu","aria-haspopup":"true","aria-expanded":t,onKeyDown:m,children:[e.jsxs("span",{className:"dropdown-header","aria-label":n,children:[e.jsx("span",{children:n}),t?e.jsx(y,{"aria-hidden":"true"}):e.jsx(g,{"aria-hidden":"true"})]}),t&&e.jsx("div",{className:"dropdown-content",style:{width:p,left:u,right:h},role:"menuitem","aria-labelledby":"dropdown-header",children:l})]})};o.__docgenInfo={description:"",methods:[],displayName:"DropdownMenu",props:{title:{required:!0,tsType:{name:"string"},description:""},content:{required:!0,tsType:{name:"union",raw:"ReactNode | any",elements:[{name:"ReactNode"},{name:"any"}]},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'200px'",computed:!1}},left:{required:!1,tsType:{name:"string"},description:""},right:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Neokred componets/Hover Dropdown",component:o,tags:["autodocs"],argTypes:{title:{description:"Dropdown title displayed on the header",control:"text",table:{defaultValue:{summary:"Dropdown"},type:{summary:"string"}}},width:{description:"Dropdown content width",control:"text",table:{defaultValue:{summary:"400px"},type:{summary:"string"}}},left:{description:"Left offset for dropdown positioning",control:"text",table:{type:{summary:"string"}}},right:{description:"Right offset for dropdown positioning",control:"text",table:{type:{summary:"string"}}}},args:{title:"Options",width:"700px"}},s={render:n=>e.jsx(o,{...n,content:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"CollectBot"}),e.jsx("p",{children:"Integrate frictionless payment solutions in your product."}),e.jsx("a",{href:"#",children:"Payin"}),e.jsx("a",{href:"#",children:"Payout"}),e.jsx("a",{href:"#",children:"Virtual Account Number"}),e.jsx("a",{href:"#",children:"UPI Switch"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"ProfileX"}),e.jsx("p",{children:"Identify and onboard ideal customers using 360° profile data."}),e.jsx("a",{href:"#",children:"KYC"}),e.jsx("a",{href:"#",children:"Mobile Number Intelligence"})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Blutic"}),e.jsx("p",{children:"Build user trust with respectful data processing and retention practices."}),e.jsx("a",{href:"#",children:"DPDP Consent Manager"}),e.jsx("a",{href:"#",children:"Blutic B2C"})]})]})})};var i,d,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args} content={<div className="container">\r
        <div className="card">\r
            <h3>CollectBot</h3>\r
            <p>Integrate frictionless payment solutions in your product.</p>\r
            <a href="#">Payin</a>\r
            <a href="#">Payout</a>\r
            <a href="#">Virtual Account Number</a>\r
            <a href="#">UPI Switch</a>\r
        </div>\r
        <div className="card">\r
            <h3>ProfileX</h3>\r
            <p>Identify and onboard ideal customers using 360° profile data.</p>\r
            <a href="#">KYC</a>\r
            <a href="#">Mobile Number Intelligence</a>\r
        </div>\r
        <div className="card">\r
            <h3>Blutic</h3>\r
            <p>Build user trust with respectful data processing and retention practices.</p>\r
            <a href="#">DPDP Consent Manager</a>\r
            <a href="#">Blutic B2C</a>\r
        </div>\r
    </div>} />
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const v=["CustomWidth"];export{s as CustomWidth,v as __namedExportsOrder,D as default};
