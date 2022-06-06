(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(25)},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),l=a(3),o=a(4),s=a(5),u=a(2),d=a(6),m=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{className:"title"},"RESUME ARCHITECT")}}]),t}(n.Component),p=a(10),h=a(7),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.handleChange;return r.a.createElement("form",{className:"personal-form"},r.a.createElement("input",{type:"text",name:"first",onChange:e,placeholder:"First name"}),r.a.createElement("input",{type:"text",name:"last",onChange:e,placeholder:"Last name"}),r.a.createElement("input",{type:"text",name:"address",onChange:e,placeholder:"Address"}),r.a.createElement("input",{type:"text",name:"phone",onChange:e,placeholder:"Phone"}),r.a.createElement("input",{type:"text",name:"email",onChange:e,placeholder:"Email"}),r.a.createElement("input",{type:"text",name:"github",onChange:e,placeholder:"Github"}),r.a.createElement("textarea",{type:"text",rows:"5",name:"description",onChange:e,placeholder:"Description"}))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.education,a=e.handleChange,n=e.delBtn;return t.map(function(e){return r.a.createElement("form",{key:e.id,id:e.id,className:"education-form"},r.a.createElement("input",{type:"text",name:"school",onChange:a,placeholder:"School Name"}),r.a.createElement("input",{type:"text",name:"type",onChange:a,placeholder:"Degree Type"}),r.a.createElement("input",{type:"text",name:"subject",onChange:a,placeholder:"Subject"}),r.a.createElement("input",{type:"text",name:"started",onChange:a,placeholder:"Started"}),r.a.createElement("input",{type:"text",name:"ended",onChange:a,placeholder:"Ended"}),r.a.createElement("button",{name:"education",id:e.id,onClick:n,className:"remove",type:"button"},"Remove"))})}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.experience,a=e.handleChange,n=e.delBtn;return t.map(function(e){return r.a.createElement("form",{key:e.id,id:e.id,className:"experience-form"},r.a.createElement("input",{type:"text",name:"position",onChange:a,placeholder:"Title"}),r.a.createElement("input",{type:"text",name:"company",onChange:a,placeholder:"Company"}),r.a.createElement("input",{type:"text",name:"city",onChange:a,placeholder:"City"}),r.a.createElement("input",{type:"text",name:"started",onChange:a,placeholder:"Started"}),r.a.createElement("input",{type:"text",name:"ended",onChange:a,placeholder:"Ended"}),r.a.createElement("textarea",{type:"text",rows:"5",name:"description",onChange:a,placeholder:"Description"}),r.a.createElement("button",{name:"experience",id:e.id,onClick:n,className:"remove",type:"button"},"Remove"))})}}]),t}(n.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("h3",{className:"form-title"},this.props.title)}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addBtn,a=e.name;return r.a.createElement("button",{name:a,onClick:t,className:"add",type:"submit"},"Add")}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.state;return r.a.createElement("div",{className:"resume-header"},r.a.createElement("h1",{className:"name-title"},e.personal.first," ",e.personal.last),r.a.createElement("div",{className:"resume-header-info"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Address: ")," ",e.personal.address),r.a.createElement("li",null,r.a.createElement("span",null,"Phone:")," ",e.personal.phone)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",null,"Email:")," ",e.personal.email),r.a.createElement("li",null,r.a.createElement("span",null,"GitHub:")," ",e.personal.github))),r.a.createElement("h4",{className:"heading"},"Professional Summary:"),r.a.createElement("p",null,r.a.createElement("em",null,e.personal.description)))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.state.education.map(function(e){return r.a.createElement("div",{key:e.id,id:e.id,className:"education"},r.a.createElement("div",{className:"education-title"},r.a.createElement("h4",null,e.school),r.a.createElement("div",null,e.started," - ",e.ended)),r.a.createElement("p",null,e.type," in ",e.subject))})}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.state;return r.a.createElement("div",{className:"resume-education"},r.a.createElement("h4",{className:"heading"},"Education:"),r.a.createElement(v,{state:e}))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.state.experience.map(function(e){return r.a.createElement("div",{key:e.id,id:e.id,className:"experience"},r.a.createElement("div",{className:"experience-title"},r.a.createElement("h4",null,e.position),r.a.createElement("div",null,e.started," - ",e.ended)),r.a.createElement("div",{className:"experience-info"},r.a.createElement("p",null,r.a.createElement("em",null,e.company)),r.a.createElement("p",null,e.city)),r.a.createElement("div",null,r.a.createElement("p",{className:"description"},e.description)))})}}]),t}(n.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.state;return r.a.createElement("div",{className:"resume-experience"},r.a.createElement("h4",{className:"heading"},"Experience:"),r.a.createElement(C,{state:e}))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.state;return r.a.createElement("div",{className:"resume"},r.a.createElement(y,{state:e}),r.a.createElement("div",{className:"resume-main"},r.a.createElement(g,{state:e}),r.a.createElement(x,{state:e})))}}]),t}(n.Component),k=a(14),D=a(9),S=a.n(D),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={personal:{first:"",last:"",address:"",phone:"",email:"",github:"",description:""},education:[{school:"",type:"",subject:"",started:"",ended:"",id:S()()}],experience:[{position:"",company:"",city:"",started:"",ended:"",description:"",id:S()()}]},a.handleParentChange=a.handleParentChange.bind(Object(h.a)(Object(h.a)(a))),a.handleEduChange=a.handleEduChange.bind(Object(h.a)(Object(h.a)(a))),a.handleExpChange=a.handleExpChange.bind(Object(h.a)(Object(h.a)(a))),a.onAdd=a.onAdd.bind(Object(h.a)(Object(h.a)(a))),a.onDel=a.onDel.bind(Object(h.a)(Object(h.a)(a))),a.generatePDF=a.generatePDF.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleParentChange",value:function(e){var t=e.target.value,a=e.target.name,n=Object(p.a)({},this.state.personal);n[a]=t,this.setState({personal:n})}},{key:"handleEduChange",value:function(e){var t=e.target.closest(".education-form").id,a=e.target.name,n=e.target.value;this.setState(function(e){return{education:e.education.map(function(e){if(e.id!==t)return e;var r=Object(p.a)({},e);return r[a]=n,r})}})}},{key:"handleExpChange",value:function(e){var t=e.target.closest(".experience-form").id,a=e.target.name,n=e.target.value;this.setState(function(e){return{experience:e.experience.map(function(e){if(e.id!==t)return e;var r=Object(p.a)({},e);return r[a]=n,r})}})}},{key:"onAdd",value:function(e){e.preventDefault(),"experience"===e.target.name?this.setState({experience:this.state.experience.concat({position:"",company:"",city:"",started:"",ended:"",id:S()()})}):this.setState({education:this.state.education.concat({school:"",type:"",subject:"",started:"",ended:"",id:S()()})})}},{key:"onDel",value:function(e){e.preventDefault(),"experience"===e.target.name?this.setState({experience:this.state.experience.filter(function(t){return t.id!==e.target.id})}):this.setState({education:this.state.education.filter(function(t){return t.id!==e.target.id})})}},{key:"generatePDF",value:function(){var e=new k.a("portrait","px",[816,1056]);e.html(document.querySelector(".resume")).then(function(){e.save("resume.pdf")})}},{key:"render",value:function(){var e=this.state,t=e.personal,a=e.education,n=e.experience;return r.a.createElement("div",{className:"program"},r.a.createElement("div",{className:"form-holder"},r.a.createElement(f,{title:"Personal Information"}),r.a.createElement(b,{personal:t,handleChange:this.handleParentChange}),r.a.createElement(f,{title:"Education"}),r.a.createElement(E,{education:a,handleChange:this.handleEduChange,addBtn:this.onAdd,delBtn:this.onDel}),r.a.createElement(O,{name:"education",addBtn:this.onAdd}),r.a.createElement(f,{title:"Experience"}),r.a.createElement(j,{experience:n,handleChange:this.handleExpChange,addBtn:this.onAdd,delBtn:this.onDel}),r.a.createElement(O,{name:"experience",addBtn:this.onAdd})),r.a.createElement("div",{className:"resume-holder"},r.a.createElement(N,{state:this.state}),r.a.createElement("button",{onClick:this.generatePDF},"Export as PDF")))}}]),t}(n.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"footer-tag",href:"https://github.com/NelsonMN"},"Created By: NelsonMN"))}}]),t}(n.Component),B=(a(23),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(m,null),r.a.createElement(P,null),r.a.createElement(A,null))}}]),t}(n.Component));i.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)))}},[[15,5,2]]]);
//# sourceMappingURL=main.70ef67e2.chunk.js.map