(this["webpackJsonpmulti-step-form"]=this["webpackJsonpmulti-step-form"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(7),i=n.n(s),o=(n(14),n(2)),l=n(3),u=n(5),p=n(4),j=n(8),h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.values,n=e.handleFieldChange;return Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("h1",{children:"Basic Details"}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter Name...",onChange:n("firstName"),defaultValue:t.firstName}),Object(r.jsx)("input",{type:"email",placeholder:"Enter Email...",onChange:n("email"),defaultValue:t.email})]}),Object(r.jsx)("div",{className:"form-buttons",children:Object(r.jsx)("button",{onClick:this.continue,children:"Continue"})})]})}}]),n}(a.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.previous=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.handleFieldChange,n=e.values;return Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("h1",{children:"Personal Details"}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("input",{type:"text",placeholder:"Enter Country...",onChange:t("country"),defaultValue:n.country}),Object(r.jsx)("input",{type:"text",placeholder:"Enter Occupation...",onChange:t("occupation"),defaultValue:n.occupation})]}),Object(r.jsxs)("div",{className:"form-buttons",children:[Object(r.jsx)("button",{onClick:this.continue,children:"Continue"}),Object(r.jsx)("button",{className:"back-button",onClick:this.previous,children:"Back"})]})]})}}]),n}(a.a.Component),d=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.previous=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.values;return Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("h1",{children:"Confirm"}),Object(r.jsx)("div",{className:"confirm-container",children:Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"First Name"})," ",e.firstName]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Email"})," ",e.email]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Occupation"})," ",e.occupation]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Country"})," ",e.country]})]})}),Object(r.jsxs)("div",{className:"form-buttons",children:[Object(r.jsx)("button",{onClick:this.continue,children:"Confirm"}),Object(r.jsx)("button",{className:"back-button",onClick:this.previous,children:"Back"})]})]})}}]),n}(a.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).previous=function(t){t.preventDefault(),e.props.resetSteps()},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"form-container",children:[Object(r.jsx)("h1",{children:"Success"}),Object(r.jsx)("div",{className:"form-inputs",children:Object(r.jsx)("p",{children:"Thank you for your submission."})}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"form-buttons",children:Object(r.jsx)("button",{className:"back-button",onClick:this.previous,children:"Reset"})})]})}}]),n}(a.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={step:1,firstName:"",email:"",country:"",occupation:"",age:null},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.resetSteps=function(){e.setState({step:1})},e.handleFieldChange=function(t){return function(n){e.setState(Object(j.a)({},t,n.target.value))}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.step,n={step:t,firstName:e.firstName,email:e.email,country:e.country,occupation:e.occupation,age:e.age};switch(t){case 1:return Object(r.jsx)(h,{nextStep:this.nextStep,handleFieldChange:this.handleFieldChange,values:n});case 2:return Object(r.jsx)(b,{nextStep:this.nextStep,prevStep:this.prevStep,handleFieldChange:this.handleFieldChange,values:n});case 3:return Object(r.jsx)(d,{nextStep:this.nextStep,prevStep:this.prevStep,values:n});case 4:return Object(r.jsx)(f,{resetSteps:this.resetSteps});default:return Object(r.jsx)("h1",{children:"An Error has occured"})}}}]),n}(a.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"appWrapper",children:[Object(r.jsx)(O,{}),Object(r.jsxs)("div",{className:"footer",children:["Designed and coded by"," ",Object(r.jsx)("a",{href:"https://amanmaharshi.com",target:"_blank",rel:"noreferrer",children:"Aman Maharshi"})]})]})}}]),n}(a.a.Component);i.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5e8e4d9e.chunk.js.map