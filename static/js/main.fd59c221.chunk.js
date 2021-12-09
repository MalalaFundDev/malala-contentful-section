(this.webpackJsonpsection=this.webpackJsonpsection||[]).push([[0],{245:function(e,t,n){},270:function(e,t){},452:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(12),s=n(123),l=(n(166),n(167),n(243),n(244),n(245),n(98)),o=n.n(l),c=n(45),d=n(156),u=n(23),h=n(24),j=n(26),b=n(25),f=n(1),p=n(2),m=n(5),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).onConfigure=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.props.sdk.app.getCurrentState();case 2:return t=e.sent,e.abrupt("return",{parameters:i.state.parameters,targetState:{EditorInterface:Object(c.a)({},null===t||void 0===t?void 0:t.EditorInterface)}});case 4:case"end":return e.stop()}}),e)}))),i.state={parameters:{}},e.sdk.app.onConfigure((function(){return i.onConfigure()})),i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(o.a.mark((function e(){var t,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sdk.app.getParameters();case 2:t=e.sent,this.setState(t?{parameters:t}:this.state,(function(){n.props.sdk.app.setReady()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsx)(f.cb,{className:Object(p.a)({margin:"80px"}),children:Object(m.jsxs)(f.s,{children:[Object(m.jsx)(f.u,{children:"Section Config"}),Object(m.jsx)(f.F,{children:"There are currently no settings for the section app."})]})})}}]),n}(i.Component),v=n(129),x=(n(248),n(164)),O=function(e){var t=e.sys.id,n=e.sys.space.sys.id;return"https://app.contentful.com/spaces/".concat(n,"/entries/").concat(t)},k=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).spacing={marginTop:"15px",marginBottom:"15px"},i.state={opened:!!e.opened},i}return Object(h.a)(n,[{key:"renderOpened",value:function(){var e=this.props,t=e.heading,n=e.children;return Object(m.jsxs)(f.d,{title:"Item",style:this.spacing,children:[Object(m.jsx)(f.I,{element:"h3",children:Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{style:{flexGrow:1},children:t}),Object(m.jsx)("div",{style:{flexGrow:0,paddingLeft:"15px"},children:this.renderCloseButton()})]})}),n]})}},{key:"renderClosed",value:function(){var e=this.props,t=e.heading,n=e.placeholder;return Object(m.jsx)(f.d,{title:"Item",style:this.spacing,children:Object(m.jsx)(f.I,{element:"h3",children:Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)("div",{style:{flexGrow:1},onClick:this.open.bind(this),children:n||"New ".concat(t)}),Object(m.jsxs)("div",{style:{flexGrow:0,paddingLeft:"15px",display:"flex"},children:[this.renderSortUp(),this.renderSortDown()]})]})})})}},{key:"renderCloseButton",value:function(){if(this.state.opened)return Object(m.jsx)(f.x,{iconProps:{icon:"Close"},label:"Close",onClick:this.close.bind(this)})}},{key:"renderSortUp",value:function(){var e=this.props,t=e.sortable,n=e.canSortUp,i=e.onSortUp;if(t&&n&&i)return Object(m.jsx)(f.x,{iconProps:{icon:"ChevronUp"},label:"Move Up",onClick:i,style:{paddingRight:"8px"}})}},{key:"renderSortDown",value:function(){var e=this.props,t=e.sortable,n=e.canSortDown,i=e.onSortDown;if(t&&n&&i)return Object(m.jsx)(f.x,{iconProps:{icon:"ChevronDown"},label:"Move Up",onClick:i,style:{paddingRight:"8px"}})}},{key:"open",value:function(){this.setState({opened:!0})}},{key:"close",value:function(){this.setState({opened:!1})}},{key:"render",value:function(){return this.state.opened?this.renderOpened():this.renderClosed()}}]),n}(r.a.Component),y=k,C=n(63),I=n.n(C),S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"defaultItem",get:function(){var e=this.props.defaultItem;return Object.assign({},e)}},{key:"renderAddButton",value:function(e){if(e+1===this.props.items.length)return Object(m.jsx)(f.x,{iconProps:{icon:"Plus"},buttonType:"positive",label:"Add New Item",onClick:this.add.bind(this)})}},{key:"moveUp",value:function(e){if(!(e<1)){var t=this.props,n=t.onChange,i=t.items;n(i=I()(i,e,e-1))}}},{key:"moveDown",value:function(e){var t=this.props,n=t.onChange,i=t.items;e+1>=i.length||n(i=I()(i,e,e+1))}},{key:"renderRemoveButton",value:function(e){var t=this;if(!(this.props.items.length<=1))return Object(m.jsx)(f.x,{iconProps:{icon:"Delete"},buttonType:"negative",label:"Remove Item",onClick:function(){return t.remove(e)}})}},{key:"add",value:function(){var e=this.props,t=e.onChange,n=e.items;n.push(this.defaultItem),t(n)}},{key:"remove",value:function(e){var t=this.props,n=t.onChange,i=t.items;i.splice(e,1),n(i)}},{key:"render",value:function(){var e=this,t=this.props.items;return Object(m.jsx)("div",{className:"sortable",children:t.map((function(t,n){return e.renderItem(t,n)}))})}},{key:"renderItem",value:function(e,t){var n=this.props.renderItem;return Object(m.jsx)("div",{className:"sortable__item",children:n({item:e,idx:t,Sortable:this})},"sortable-".concat(t))}}]),n}(r.a.Component),T=S,w=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.margin,n=e.children;return Object(m.jsxs)("div",{style:{marginTop:t,marginBottom:t},children:[this.renderLabel(),n]})}},{key:"renderLabel",value:function(){var e=this.props,t=e.name,n=e.required,i=e.requiredText,r=e.label;if(r)return Object(m.jsx)(f.t,{htmlFor:t,required:n,requiredText:i,testId:t,children:r})}}]),n}(r.a.Component);w.defaultProps={margin:"15px",requiredText:"required"};var V=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;Object(u.a)(this,n),(i=t.call(this,e)).detachExternalChangeHandler=null,i.onExternalChange=function(){var e=i.props.sdk.field.getValue();e||(e=[i.defaultItem]),i.setState({items:e})},i.onChange=function(e,t,n){var r=i.state.items;void 0===r[t]&&(r[t]=i.defaultItem),r[t][e]=n,i.save(r)};var r=e.sdk.field.getValue()?e.sdk.field.getValue():[i.defaultItem];return i.state={items:r,error:null},i}return Object(h.a)(n,[{key:"defaultItem",get:function(){return Object.assign({},{label:"",color:"transparent",link:"",icon:""})}},{key:"onSortChange",value:function(e){this.save(e)}},{key:"validate",value:function(){return!this.state.items.some((function(e){return!e.label||!e.color||!e.link}))}},{key:"save",value:function(e){this.setState({items:e}),this.validate()?(this.setState({error:null}),this.props.sdk.field.setInvalid(!1)):(this.setState({error:"Please complete all required fields."}),this.props.sdk.field.setInvalid(!0)),this.props.sdk.field.setValue(e)}},{key:"renderItem",value:function(e){var t=this,n=e.item,i=e.idx,r=e.Sortable,a=this.state.items;return Object(m.jsxs)(k,{heading:"Item",placeholder:n.title,opened:!n.title,sortable:!0,canSortUp:!!i,onSortUp:function(){return r.moveUp(i)},canSortDown:i+1!==a.length,onSortDown:function(){return r.moveDown(i)},children:[Object(m.jsx)(f.V,{id:"label-".concat(i),name:"label",labelText:"Label",value:n.label,onChange:function(e){return t.onChange("label",i,e.currentTarget.value)},required:!0}),Object(m.jsx)(w,{children:Object(m.jsxs)(f.K,{id:"color-".concat(i),name:"color",labelText:"Color",value:n.color,onChange:function(e){return t.onChange("color",i,e.currentTarget.value)},required:!0,children:[Object(m.jsx)(f.E,{value:"transparent",children:"Transparent"}),Object(m.jsx)(f.E,{value:"white",children:"White"}),Object(m.jsx)(f.E,{value:"malala",children:"Malala"}),Object(m.jsx)(f.E,{value:"link",children:"Link"})]})}),Object(m.jsx)(w,{children:Object(m.jsx)(f.V,{id:"link-".concat(i),name:"link",labelText:"Link",value:n.link,onChange:function(e){return t.onChange("link",i,e.currentTarget.value)},required:!0})}),Object(m.jsx)(w,{children:Object(m.jsxs)(f.K,{id:"icon-".concat(i),name:"icon",labelText:"Icon",value:n.icon,onChange:function(e){return t.onChange("icon",i,e.currentTarget.value)},children:[Object(m.jsx)(f.E,{value:"",children:"No Icon"}),Object(m.jsx)(f.E,{value:"chevron",children:"Chevron"}),Object(m.jsx)(f.E,{value:"arrow",children:"Arrow"})]})}),Object(m.jsxs)("div",{style:{marginTop:"15px"},children:[r.renderAddButton(i),r.renderRemoveButton(i)]})]},"item-"+i)}},{key:"renderValidation",value:function(){var e=this.state.error;if(e)return Object(m.jsx)(f.bb,{children:e})}},{key:"render",value:function(){var e=this,t=this.state.items;return Object(m.jsxs)("div",{children:[this.renderValidation(),Object(m.jsx)(S,{defaultItem:this.defaultItem,onChange:function(t){return e.onSortChange(t)},items:t,renderItem:this.renderItem.bind(this)})]})}}]),n}(r.a.Component),q=n(236),P=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).quill=null,i.field=r.a.createRef(),i}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"componentDidMount",value:function(){"undefined"!==typeof Quill&&(this.quill=new Quill(this.field.current,{theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],["blockquote"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"},"link"],[{size:["small","normal","large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["clean"]]}})),this.quill&&this.quill.on("text-change",this.handleChange.bind(this))}},{key:"handleChange",value:function(e,t,n){(0,this.props.onChange)(new q.QuillDeltaToHtmlConverter(this.quill.getContents().ops).convert())}},{key:"render",value:function(){var e=this.props.value;return Object(m.jsx)("div",{ref:this.field,dangerouslySetInnerHTML:{__html:e}})}}]),n}(r.a.Component),E=P,L=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;Object(u.a)(this,n),(i=t.call(this,e)).detachExternalChangeHandler=null,i.onExternalChange=function(){var e=i.props.sdk.field.getValue();e||(e=[i.defaultItem]),i.setState({items:e})},i.onChange=function(e,t,n){var r=i.state.items;void 0===r[t]&&(r[t]=i.defaultItem),r[t][e]=n,i.save(r)};var r=e.sdk.field.getValue()?e.sdk.field.getValue():[i.defaultItem];return i.state={items:r,error:null},i}return Object(h.a)(n,[{key:"defaultItem",get:function(){return Object.assign({},{question:"",answer:"",anchor:""})}},{key:"onSortChange",value:function(e){this.save(e)}},{key:"validate",value:function(){return!this.state.items.some((function(e){return!e.question||!e.answer}))}},{key:"save",value:function(e){this.setState({items:e}),this.validate()?(this.setState({error:null}),this.props.sdk.field.setInvalid(!1)):(this.setState({error:"Please complete all required fields."}),this.props.sdk.field.setInvalid(!0)),this.props.sdk.field.setValue(e)}},{key:"renderItem",value:function(e){var t=this,n=e.item,i=e.idx,r=e.Sortable,a=this.state.items;try{return Object(m.jsxs)(k,{heading:"Item",placeholder:n.question,opened:!n.question,sortable:!0,canSortUp:!!i,onSortUp:function(){return r.moveUp(i)},canSortDown:i+1!==a.length,onSortDown:function(){return r.moveDown(i)},children:[Object(m.jsx)(f.V,{id:"question-".concat(i),name:"questions",labelText:"Question",value:n.question,onChange:function(e){return t.onChange("question",i,e.currentTarget.value)},required:!0}),Object(m.jsxs)(w,{children:[Object(m.jsx)(f.t,{htmlFor:"answer-".concat(i),required:!0,children:"Answer"}),Object(m.jsx)(P,{vid:"answer-".concat(i),name:"answer",value:n.answer,onChange:function(e){return t.onChange("answer",i,e)},required:!0})]}),Object(m.jsx)(f.V,{id:"anchor-".concat(i),name:"anchor",labelText:"Anchor",value:n.anchor,onChange:function(e){return t.onChange("anchor",i,e.currentTarget.value)}}),Object(m.jsxs)(f.v,{children:["malala.org/page#",n.anchor?n.anchor:"anchor"]}),Object(m.jsxs)("div",{style:{marginTop:"15px"},children:[r.renderAddButton(i),r.renderRemoveButton(i)]})]},"item-"+i)}catch(s){console.log(s)}}},{key:"renderValidation",value:function(){var e=this.state.error;if(e)return Object(m.jsx)(f.bb,{children:e})}},{key:"render",value:function(){var e=this,t=this.state.items;return Object(m.jsxs)("div",{children:[this.renderValidation(),Object(m.jsx)(S,{defaultItem:this.defaultItem,onChange:function(t){return e.onSortChange(t)},items:t,renderItem:this.renderItem.bind(this)})]})}}]),n}(r.a.Component),N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.value;return e&&e.fields?Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-start"},children:[Object(m.jsx)(f.b,{src:e.fields.file["en-US"].url,title:e.fields.title["en-US"],onClick:this.handleClick.bind(this),status:e.sys.publishedAt?"published":"draft",children:e.fields.title["en-US"]}),Object(m.jsx)(f.x,{buttonType:"negative",iconProps:{icon:"Close"},label:"Close",onClick:this.handleRemove.bind(this)})]}):this.renderMissing()}},{key:"renderMissing",value:function(){return Object(m.jsxs)("div",{className:"image__missing",children:[Object(m.jsx)(f.X,{onClick:this.handleCreate.bind(this),icon:"Plus",children:"Create new asset and link"}),Object(m.jsx)("span",{style:{paddingLeft:"10px",paddingRight:"10px"}}),Object(m.jsx)(f.X,{onClick:this.handleLink.bind(this),icon:"Link",children:"Link existing assets"})]})}},{key:"handleCreate",value:function(){var e=this;this.props.sdk.navigator.openNewAsset({slideIn:{waitForClose:!0}}).then((function(t){var n=t.entity;return e.handleLinked(n)}))}},{key:"handleLink",value:function(){this.props.sdk.dialogs.selectSingleAsset(null,{slideIn:{waitForClose:!0}}).then(this.handleLinked.bind(this))}},{key:"handleClick",value:function(){var e=this.props,t=e.sdk,n=e.value;t.navigator.openAsset(n.sys.id,{slideIn:{}})}},{key:"handleRemove",value:function(){(0,this.props.onChange)(null)}},{key:"handleLinked",value:function(e){(0,this.props.onChange)(e)}}]),n}(r.a.Component),A=N,D=n(163),U=n.n(D),B=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;Object(u.a)(this,n),(i=t.call(this,e)).detachExternalChangeHandler=null,i.onExternalChange=function(){var e=i.props.sdk.field.getValue();e||(e=[i.defaultItem]),i.setState({items:e})},i.onChange=function(e,t,n){var r=i.state.items;void 0===r[t]&&(r[t]=i.defaultItem),r[t][e]=n,i.save(r)};var r=e.sdk.field.getValue()?e.sdk.field.getValue():[i.defaultItem];return r=r.map((function(e){return e.key||(e.key=U()()),e.open=!1,e})),i.state={items:r,error:null},i}return Object(h.a)(n,[{key:"defaultItem",get:function(){return Object.assign({},{key:U()(),width:"50px",height:"50px",top:"",right:"",bottom:"",left:"",image:"",desktop:!0,tablet:!0,mobile:!0,parallax:!0,speed:"1",z:"1",open:!1})}},{key:"openItem",value:function(e){var t=this.state.items;t=t.map((function(t){return t.key===e.key&&(t.open=!0),t})),this.setState(t)}},{key:"closeItem",value:function(e){var t=this.state.items;t=t.map((function(t){return t.key===e.key&&(t.open=!1),t})),this.setState(t)}},{key:"onSortChange",value:function(e){this.save(e)}},{key:"validate",value:function(){return!this.state.items.some((function(e){return!e.image}))}},{key:"save",value:function(e){this.setState({items:e}),this.validate()?(this.setState({error:null}),this.props.sdk.field.setInvalid(!1)):(this.setState({error:"Please complete all required fields."}),this.props.sdk.field.setInvalid(!0)),this.props.sdk.field.setValue(e)}},{key:"renderItem",value:function(e){var t=e.item,n=e.idx,i=e.Sortable,r=this.state.items;return Object(m.jsxs)(k,{heading:"Image",placeholder:t.title,opened:!t.title,sortable:!0,canSortUp:!!n,onSortUp:function(){return i.moveUp(n)},canSortDown:n+1!==r.length,onSortDown:function(){return i.moveDown(n)},children:[t.open?this.renderSettings(t,n):this.renderImage(t,n),Object(m.jsxs)("div",{style:{marginTop:"15px"},children:[i.renderAddButton(n),i.renderRemoveButton(n)]})]},"item-"+n)}},{key:"renderImage",value:function(e,t){var n=this;return Object(m.jsx)(w,{children:Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(N,{id:"image-".concat(t),sdk:this.props.sdk,onChange:function(e){return n.onChange("image",t,e)},value:e.image}),Object(m.jsx)("div",{style:{paddingLeft:"15px",paddingRight:"15px"},children:Object(m.jsx)(f.w,{icon:"Settings",size:"small",onClick:function(){return n.openItem(e)}})})]})})}},{key:"renderSettings",value:function(e,t){var n=this;return Object(m.jsx)("div",{children:Object(m.jsx)(f.P,{style:{width:"100%"},children:Object(m.jsxs)(f.Q,{children:[Object(m.jsx)(f.S,{children:Object(m.jsx)(f.R,{colSpan:2,onClick:function(){return n.closeItem(e)},children:e.image?Object(m.jsx)(f.a,{src:e.image.fields.file["en-US"].url,style:{width:"50px"}}):Object(m.jsx)(f.w,{icon:"Asset",size:"large"})})}),Object(m.jsxs)(f.S,{children:[Object(m.jsxs)(f.R,{children:[Object(m.jsx)(w,{children:Object(m.jsx)(f.V,{id:"width-".concat(t),name:"width",labelText:"width",value:e.width,onChange:function(e){return n.onChange("width",t,e.currentTarget.value)},helpText:"Example: 50px",required:!0})}),Object(m.jsx)(w,{children:Object(m.jsx)(f.V,{id:"height-".concat(t),name:"height",labelText:"height",value:e.height,onChange:function(e){return n.onChange("height",t,e.currentTarget.value)},helpText:"Example: 50px",required:!0})}),Object(m.jsx)(w,{children:Object(m.jsx)(f.V,{id:"z-".concat(t),name:"z",labelText:"Stack order",value:e.z,onChange:function(e){return n.onChange("z",t,e.currentTarget.value)},helpText:"Higher numbers will display on top"})}),Object(m.jsxs)(w,{children:[Object(m.jsx)(f.t,{htmlFor:"show-on-".concat(t),children:"Show on"}),Object(m.jsxs)("div",{id:"show-on-".concat(t),children:[Object(m.jsx)(f.f,{id:"desktop-".concat(t),labelText:"Desktop",name:"desktop",checked:e.desktop,onChange:function(e){return n.onChange("desktop",t,e.currentTarget.checked)},style:{marginRight:"5px"}}),Object(m.jsx)(f.f,{id:"tablet-".concat(t),labelText:"Tablet",name:"tablet",checked:e.tablet,onChange:function(e){return n.onChange("tablet",t,e.currentTarget.checked)},style:{marginRight:"5px"}}),Object(m.jsx)(f.f,{id:"mobile-".concat(t),labelText:"Mobile",name:"mobile",checked:e.mobile,onChange:function(e){return n.onChange("mobile",t,e.currentTarget.checked)}})]})]}),Object(m.jsx)(w,{children:Object(m.jsx)(f.f,{id:"parallax-".concat(t),labelText:"Enable parallax scrolling?",name:"parallax",checked:!1!==e.parallax,onChange:function(e){return n.onChange("parallax",t,e.currentTarget.checked)},style:{marginRight:"5px"}})}),!1!==e.parallax?Object(m.jsx)(w,{children:Object(m.jsxs)(f.K,{id:"speed-".concat(t),name:"speed",labelText:"Speed",value:e.speed,onChange:function(e){return n.onChange("speed",t,e.currentTarget.value)},children:[Object(m.jsx)(f.E,{value:"1",children:"1"}),Object(m.jsx)(f.E,{value:"2",children:"2"}),Object(m.jsx)(f.E,{value:"3",children:"3"})]})}):""]}),Object(m.jsx)(f.R,{align:"center",children:Object(m.jsxs)(w,{children:[Object(m.jsx)("div",{style:{textAlign:"left"},children:Object(m.jsx)(f.t,{htmlFor:"position",children:"Position"})}),Object(m.jsx)("table",{style:{maxWidth:"300px"},id:"position",children:Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:Object(m.jsx)(f.V,{id:"top-".concat(t),name:"Top",labelText:"Top",value:e.top,onChange:function(e){return n.onChange("top",t,e.currentTarget.value)},helpText:"Example: 10%"})}),Object(m.jsx)("td",{})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:Object(m.jsx)(f.V,{id:"left-".concat(t),name:"left",labelText:"Left",value:e.left,onChange:function(e){return n.onChange("left",t,e.currentTarget.value)}})}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:Object(m.jsx)(f.V,{id:"right-".concat(t),name:"right",labelText:"Right",value:e.right,onChange:function(e){return n.onChange("right",t,e.currentTarget.value)}})})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:Object(m.jsx)(f.V,{id:"bottom-".concat(t),name:"bottom",labelText:"Bottom",value:e.bottom,onChange:function(e){return n.onChange("bottom",t,e.currentTarget.value)}})}),Object(m.jsx)("td",{})]})]})})]})})]})]})})})}},{key:"renderValidation",value:function(){var e=this.state.error;if(e)return Object(m.jsx)(f.bb,{children:e})}},{key:"render",value:function(){var e=this,t=this.state.items;return Object(m.jsxs)("div",{children:[this.renderValidation(),Object(m.jsx)(S,{defaultItem:this.defaultItem,onChange:function(t){return e.onSortChange(t)},items:t,renderItem:this.renderItem.bind(this)})]})}}]),n}(r.a.Component),R=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var i;Object(u.a)(this,n),(i=t.call(this,e)).onChange=function(e,t,n){var r=i.state.items;void 0===r[t]&&(r[t]=i.defaultItem),r[t][e]=n,i.save(r)};var r=e.sdk.field.getValue()?e.sdk.field.getValue():{items:[i.defaultItem]};return i.state={items:r.items?r.items:[i.defaultItem],error:null},i}return Object(h.a)(n,[{key:"defaultItem",get:function(){return Object.assign({},{title:"",image:null,description:"",linkLabel:"",url:""})}},{key:"onSortChange",value:function(e){this.save(e)}},{key:"validate",value:function(){var e=this;return!this.state.items.some((function(t){return!t.image||e.props.sdk.parameters.instance.title&&!t.title}))}},{key:"save",value:function(e){this.setState({items:e}),this.validate()?(this.setState({error:null}),this.props.sdk.field.setInvalid(!1)):(this.setState({error:"Please complete all required fields."}),this.props.sdk.field.setInvalid(!0)),this.props.sdk.field.setValue({items:e})}},{key:"renderField",value:function(e,t,n,i){var r=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"text",s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return Object(m.jsxs)("div",{style:{marginTop:"15px",marginBottom:"15px"},children:[Object(m.jsx)(f.t,{htmlFor:t,required:s,requiredText:"required",testId:t,children:n}),function(){switch(a){case"editor":return Object(m.jsx)(E,{value:i,onChange:function(n){return r.onChange(t,e,n)}});case"image":return Object(m.jsx)(A,{value:i,sdk:r.props.sdk,onChange:function(n){return r.onChange(t,e,n)}});default:return Object(m.jsx)(f.W,{width:"full",type:a,id:t,testId:t,value:i,required:!0,onChange:function(n){return r.onChange(t,e,n.currentTarget.value)}})}}()]})}},{key:"renderItem",value:function(e){var t=e.item,n=e.idx,i=e.Sortable,r=this.state.items;return Object(m.jsxs)(y,{heading:"Item",placeholder:t.title,opened:!t.title,sortable:!0,canSortUp:!!n,onSortUp:function(){return i.moveUp(n)},canSortDown:n+1!==r.length,onSortDown:function(){return i.moveDown(n)},children:[this.props.sdk.parameters.instance.title?this.renderField(n,"title","Title",t.title,"text"):null,this.props.sdk.parameters.instance.description?this.renderField(n,"description","Description",t.description,"editor"):null,this.props.sdk.parameters.instance.linkLabel?this.renderField(n,"linkLabel","Link Label",t.linkLabel,"text"):null,this.props.sdk.parameters.instance.url?this.renderField(n,"url","Url",t.url,"text"):null,this.props.sdk.parameters.instance.image?this.renderField(n,"image","Image",t.image,"image",!0):null,Object(m.jsxs)("div",{style:{marginTop:"15px"},children:[i.renderAddButton(n),i.renderRemoveButton(n)]})]},"item-"+n)}},{key:"renderValidation",value:function(){var e=this.state.error;if(e)return Object(m.jsx)(f.bb,{children:e})}},{key:"render",value:function(){var e=this,t=this.state.items;return Object(m.jsxs)("div",{children:[this.renderValidation(),Object(m.jsx)(T,{defaultItem:this.defaultItem,onChange:function(t){return e.onSortChange(t)},items:t,renderItem:this.renderItem.bind(this)})]})}}]),n}(r.a.Component),F=R,M=function(e){var t,n,i,r=e.field,a=e.locales,s=e.sdk,l=e.type,o=e.label,d=e.instance,u=void 0===d?{}:d,h=r.getForLocale(s.locales.default),j=s.contentType.fields.find((function(e){return e.id===h.id})),b=null===(t=s.editor.editorInterface)||void 0===t||null===(n=t.controls)||void 0===n?void 0:n.find((function(e){return e.fieldId===h.id})),p=null!==(i=null===b||void 0===b?void 0:b.widgetId)&&void 0!==i?i:"";if(!j||!b)return null;var g=Object(c.a)(Object(c.a)({},s),{},{field:h,locales:a,parameters:Object(c.a)(Object(c.a)({},s.parameters),{},{instance:Object(c.a)(Object(c.a)(Object(c.a)({},s.parameters.instance),u),null===b||void 0===b?void 0:b.settings)})}),v=o?function(){return Object(m.jsx)(f.t,{htmlFor:j.name,children:o})}:void 0;return Object(m.jsx)(x.b,{sdk:g,name:j.name,getEntryURL:O,renderHeading:v,children:function(){switch(l){case"39ArQsK2hqsWsIK0WiCGMm":case"accents":return Object(m.jsx)(B,{sdk:g});case"buttons":return Object(m.jsx)(V,{sdk:g});case"q&a":return Object(m.jsx)(L,{sdk:g});case"repeatable":return Object(m.jsx)(F,{sdk:g});default:return Object(m.jsx)(x.a,{widgetId:p,sdk:g,isInitiallyDisabled:!1})}}()})},z=function(e){var t=e.sdk,n=t.entry,r=t.locales,a=["General","Heading","Content","Buttons","Spacing","Background","Accents","Advanced"],s=Object(i.useState)([].concat(a)),l=Object(v.a)(s,2),o=l[0],c=l[1],d=Object(i.useState)("General"),u=Object(v.a)(d,2),h=u[0],j=u[1],b=Object(i.useState)({}),p=Object(v.a)(b,2),g=p[0],x=p[1],O=["title","slug","component","cssClasses","type","data","embed","hideOnMobile","hideOnDesktop","heading","headingStyle","headingAlignment","innerColor","innerTopPadding","innerBottomPadding","innerLeftPadding","innerRightPadding","mobileHeadingAlignment","headingColor","content","contentColor","alignment","mobileContentAlignment","buttons","topPadding","bottomPadding","containerWidth","backgroundImage","mobileBackgroundImage","backgroundStyle","backgroundSize","backgroundColor","backgroundColorMobile","customPath","contentLocation","secondaryContent","accents","height","backgroundVideo","fontSize","accentPosition","images"];if(!Object.values(g).length){var k=0;x(Object.values(n.fields).reduce((function(e,t){return e[Object.keys(n.fields)[k]]=t.getValue(),k++,e}),{})),Object.values(n.fields).forEach((function(e){e.onValueChanged((function(t){g[e.id]!==t&&(g[e.id]=t,x(Object.assign({},g)))}))}))}var y=Object.values(n.fields).filter((function(e){return!O.includes(e.id)}));function C(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Object(m.jsx)(M,{field:t,sdk:e.sdk,locales:r,type:n,label:i,instance:a},"field-"+t.id)}return a.length!==o.length&&c([].concat(a)),Object(m.jsxs)(f.s,{spacing:"default",className:"f36-margin--2xl",children:[Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.title),C(n.fields.slug)]}),Object(m.jsx)(f.T,{role:"navigation",withDivider:!0,children:o.map((function(e){return Object(m.jsx)(f.O,{selected:h===e,id:e,onSelect:function(){return j(e)},children:e},"tab-"+e)}))}),"General"===h?Object(m.jsxs)("div",{children:[Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.type)}),"Entry"===n.fields.type.getValue()?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.component)})}):"","Q&A"===n.fields.type.getValue()?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.data,"q&a","Q&A")})}):"","Embed"===n.fields.type.getValue()?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.embed)})}):"","Images"===n.fields.type.getValue()?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.images)})}):"","Photo Stack"===n.fields.type.getValue()?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.data,"repeatable","Images",{title:!0,linkLabel:!0,url:!0,image:!0})})}):"",Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.hideOnMobile),C(n.fields.hideOnDesktop)]}),y.length?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:y.map((function(e){return C(e)}))})}):""]}):"","Heading"===h?Object(m.jsxs)("div",{children:[Object(m.jsx)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:C(n.fields.heading)}),Object(m.jsxs)(f.d,{className:"f36-padding--l",children:[C(n.fields.headingStyle),C(n.fields.headingAlignment),C(n.fields.mobileHeadingAlignment),C(n.fields.headingColor)]})]}):"","Content"===h?Object(m.jsxs)("div",{children:[Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.content),"Button Sidebar"===n.fields.type.getValue()||"Embed"===n.fields.type.getValue()?C(n.fields.secondaryContent):""]}),Object(m.jsxs)(f.d,{className:"f36-padding--l",children:["Embed"===n.fields.type.getValue()?C(n.fields.contentLocation):"",C(n.fields.fontSize),C(n.fields.contentColor),C(n.fields.alignment),C(n.fields.mobileContentAlignment)]})]}):"","Buttons"===h?Object(m.jsx)("div",{children:Object(m.jsx)(f.d,{className:"f36-padding--l",children:C(n.fields.buttons,"buttons")})}):"","Spacing"===h?Object(m.jsxs)("div",{children:[Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.topPadding),C(n.fields.bottomPadding),C(n.fields.innerTopPadding),C(n.fields.innerBottomPadding),C(n.fields.innerLeftPadding),C(n.fields.innerRightPadding)]}),Object(m.jsxs)(f.d,{className:"f36-padding--l",children:[C(n.fields.height),C(n.fields.containerWidth)]})]}):"","Background"===h?Object(m.jsxs)("div",{children:[Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.backgroundImage),C(n.fields.backgroundVideo),C(n.fields.mobileBackgroundImage),C(n.fields.backgroundStyle),C(n.fields.backgroundSize),Object(m.jsx)(f.v,{children:"Example: 50px. Defaults to 100%."})]}),Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.innerColor),C(n.fields.backgroundColor),C(n.fields.backgroundColorMobile)]})]}):"","Accents"===h?Object(m.jsx)("div",{children:Object(m.jsxs)(f.d,{className:"f36-padding--l f36-margin-bottom--l",children:[C(n.fields.accentPosition),C(n.fields.accents,"accents")]})}):"","Advanced"===h?Object(m.jsx)("div",{children:Object(m.jsxs)(f.d,{className:"f36-padding--l",children:[C(n.fields.customPath),C(n.fields.cssClasses)]})}):""]})};Object(s.init)((function(e){var t=document.getElementById("root");[{location:s.locations.LOCATION_APP_CONFIG,component:Object(m.jsx)(g,{sdk:e})},{location:s.locations.LOCATION_ENTRY_EDITOR,component:Object(m.jsx)(z,{sdk:e})}].forEach((function(n){e.location.is(n.location)&&Object(a.render)(n.component,t)}))}))}},[[452,1,2]]]);
//# sourceMappingURL=main.fd59c221.chunk.js.map