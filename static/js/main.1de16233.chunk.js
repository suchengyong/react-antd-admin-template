(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[30],{17:function(e,t,n){"use strict";n.d(t,"j",(function(){return a})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return m}));var a="USER_SET_USER_TOKEN",r="USER_SET_USER_INFO",o="USER_RESET_USER",i="APP_TOGGLE_SIDEBAR",l="APP_TOGGLE_SETTINGPANEL",c="SETTINGS_CHANGE_SETTINGS",u="TAGSVIEW_ADD_TAG",s="TAGSVIEW_DELETE_TAG",d="TAGSVIEW_EMPTY_TAGLIST",m="TAGSVIEW_CLOSE_OTHER_TAGS"},177:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return u}));var a=n(50);function r(e){return Object(a.a)({url:"/userInfo",method:"post",data:e})}function o(){return Object(a.a)({url:"/user/list",method:"get"})}function i(e){return Object(a.a)({url:"/user/delete",method:"post",data:e})}function l(e){return Object(a.a)({url:"/user/edit",method:"post",data:e})}function c(e){return Object(a.a)({url:"/user/validatUserID",method:"post",data:e})}function u(e){return Object(a.a)({url:"/user/add",method:"post",data:e})}},20:function(e,t,n){"use strict";n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return d})),n.d(t,"f",(function(){return i})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return E}));var a=n(7),r=n(17),o=n(177),i=function(e){return function(t){return new Promise((function(n,a){Object(o.e)(e).then((function(e){var r=e.data;if(0===r.status){var o=r.userInfo;t(l(o)),n(r)}else{var i=r.message;a(i)}})).catch((function(e){a(e)}))}))}},l=function(e){return Object(a.a)({type:r.i},e)},c=n(50);var u=n(71),s=function(e,t){return function(n){return new Promise((function(a,o){var i;(i={username:e.trim(),password:t},Object(c.a)({url:"/login",method:"post",data:i})).then((function(e){var t=e.data;if(0===t.status){var i=t.token;n(function(e){return{type:r.j,token:e}}(i)),Object(u.c)(i),a(t)}else{var l=t.message;o(l)}})).catch((function(e){o(e)}))}))}},d=function(e){return function(t){return new Promise((function(n,a){var o;(o=e,Object(c.a)({url:"/logout",method:"post",data:o})).then((function(e){var o=e.data;if(0===o.status)t({type:r.h}),Object(u.b)(),n(o);else{var i=o.message;a(i)}})).catch((function(e){a(e)}))}))}},m=function(){return{type:r.b}},p=function(){return{type:r.a}},h=function(e){return Object(a.a)({type:r.c},e)},f=function(e){return{type:r.d,tag:e}},g=function(){return{type:r.g}},b=function(e){return{type:r.f,tag:e}},E=function(e){return{type:r.e,tag:e}}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(139);var a=n(52),r=n(221),o=n.n(r);function i(e,t){var n=new o.a(t.target,{text:function(){return e}});n.on("success",(function(){a.a.success("\u590d\u5236\u6210\u529f"),n.destroy()})),n.on("error",(function(){a.a.error("\u590d\u5236\u5931\u8d25"),n.destroy()})),n.onClick(t)}},224:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},258:function(e,t,n){e.exports=n(463)},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){},351:function(e,t,n){},359:function(e,t,n){},373:function(e,t,n){},387:function(e,t,n){},389:function(e,t,n){},393:function(e,t,n){},462:function(e,t,n){},463:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=n(30),c=n(31),u=n(33),s=n(32),d=n(49),m=n(22),p=n(16),h=n(20),f=(n(329),n(12)),g=n(231);var b=function(e){return r.a.createElement(f.a,{locale:g.a},e.children)},E=(n(109),n(53)),v=n(128),O=n.n(v),y=n(99),k=n(19),j=n.n(k),C=(n(179),n(117)),x=n(133),S=n.n(x);n(334);S.a.configure({showSpinner:!1});for(var T=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){S.a.start()}},{key:"componentWillUnmount",value:function(){S.a.done()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(C.a,null))}}]),n}(a.Component),w=j()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(10)]).then(n.bind(null,1348))},loading:T}),P=j()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,1334))},loading:T}),N=j()({loader:function(){return Promise.all([n.e(0),n.e(38),n.e(18)]).then(n.bind(null,1354))},loading:T}),I=j()({loader:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,1335))},loading:T}),V=j()({loader:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,1336))},loading:T}),_=j()({loader:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,1337))},loading:T}),A=j()({loader:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,1338))},loading:T}),M=j()({loader:function(){return Promise.all([n.e(0),n.e(33),n.e(25)]).then(n.bind(null,1353))},loading:T}),L=j()({loader:function(){return Promise.all([n.e(0),n.e(35),n.e(21)]).then(n.bind(null,1352))},loading:T}),D=j()({loader:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,1339))},loading:T}),H=j()({loader:function(){return Promise.all([n.e(2),n.e(19)]).then(n.bind(null,1351))},loading:T}),U=j()({loader:function(){return Promise.all([n.e(2),n.e(20)]).then(n.bind(null,1356))},loading:T}),G=j()({loader:function(){return Promise.all([n.e(2),n.e(24)]).then(n.bind(null,1355))},loading:T}),R=j()({loader:function(){return n.e(22).then(n.bind(null,1340))},loading:T}),J=j()({loader:function(){return n.e(23).then(n.bind(null,1341))},loading:T}),W=j()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(34),n.e(26)]).then(n.bind(null,1349))},loading:T}),F=j()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(16)]).then(n.bind(null,1342))},loading:T}),z=j()({loader:function(){return Promise.all([n.e(1),n.e(4),n.e(6),n.e(5),n.e(27)]).then(n.bind(null,1347))},loading:T}),K=j()({loader:function(){return Promise.all([n.e(1),n.e(3),n.e(29)]).then(n.bind(null,1343))},loading:T}),B=j()({loader:function(){return n.e(9).then(n.bind(null,1344))},loading:T}),X=j()({loader:function(){return n.e(14).then(n.bind(null,1345))},loading:T}),q=[{path:"/dashboard",component:w,roles:["admin","editor","guest"]},{path:"/doc",component:P,roles:["admin","editor","guest"]},{path:"/guide",component:N,roles:["admin","editor"]},{path:"/permission/explanation",component:I,roles:["admin"]},{path:"/permission/adminPage",component:V,roles:["admin"]},{path:"/permission/guestPage",component:_,roles:["guest"]},{path:"/permission/editorPage",component:A,roles:["editor"]},{path:"/components/richTextEditor",component:M,roles:["admin","editor"]},{path:"/components/Markdown",component:L,roles:["admin","editor"]},{path:"/components/draggable",component:D,roles:["admin","editor"]},{path:"/charts/keyboard",component:H,roles:["admin","editor"]},{path:"/charts/line",component:U,roles:["admin","editor"]},{path:"/charts/mix-chart",component:G,roles:["admin","editor"]},{path:"/nested/menu1/menu1-1",component:R,roles:["admin","editor"]},{path:"/nested/menu1/menu1-2/menu1-2-1",component:J,roles:["admin","editor"]},{path:"/table",component:W,roles:["admin","editor"]},{path:"/excel/export",component:F,roles:["admin","editor"]},{path:"/excel/upload",component:z,roles:["admin","editor"]},{path:"/zip",component:K,roles:["admin","editor"]},{path:"/clipboard",component:B,roles:["admin","editor"]},{path:"/user",component:j()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(28)]).then(n.bind(null,1350))},loading:T}),roles:["admin"]},{path:"/about",component:j()({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,1346))},loading:T}),roles:["admin","editor","guest"]},{path:"/error/404",component:X}],Y=[{title:"\u9996\u9875",path:"/dashboard",icon:"home",roles:["admin","editor","guest"]},{title:"\u5f00\u53d1\u6587\u6863",path:"/doc",icon:"file",roles:["admin","editor","guest"]},{title:"\u5f15\u5bfc\u9875",path:"/guide",icon:"key",roles:["admin","editor"]},{title:"\u6743\u9650\u6d4b\u8bd5",path:"/permission",icon:"lock",children:[{title:"\u6743\u9650\u8bf4\u660e",path:"/permission/explanation",roles:["admin"]},{title:"admin\u9875\u9762",path:"/permission/adminPage",roles:["admin"]},{title:"guest\u9875\u9762",path:"/permission/guestPage",roles:["guest"]},{title:"editor\u9875\u9762",path:"/permission/editorPage",roles:["editor"]}]},{title:"\u7ec4\u4ef6",path:"/components",icon:"appstore",roles:["admin","editor"],children:[{title:"\u5bcc\u6587\u672c",path:"/components/richTextEditor",roles:["admin","editor"]},{title:"Markdown",path:"/components/Markdown",roles:["admin","editor"]},{title:"\u62d6\u62fd\u5217\u8868",path:"/components/draggable",roles:["admin","editor"]}]},{title:"\u56fe\u8868",path:"/charts",icon:"area-chart",roles:["admin","editor"],children:[{title:"\u952e\u76d8\u56fe\u8868",path:"/charts/keyboard",roles:["admin","editor"]},{title:"\u6298\u7ebf\u56fe",path:"/charts/line",roles:["admin","editor"]},{title:"\u6df7\u5408\u56fe\u8868",path:"/charts/mix-chart",roles:["admin","editor"]}]},{title:"\u8def\u7531\u5d4c\u5957",path:"/nested",icon:"cluster",roles:["admin","editor"],children:[{title:"\u83dc\u53551",path:"/nested/menu1",children:[{title:"\u83dc\u53551-1",path:"/nested/menu1/menu1-1",roles:["admin","editor"]},{title:"\u83dc\u53551-2",path:"/nested/menu1/menu1-2",children:[{title:"\u83dc\u53551-2-1",path:"/nested/menu1/menu1-2/menu1-2-1",roles:["admin","editor"]}]}]}]},{title:"\u8868\u683c",path:"/table",icon:"table",roles:["admin","editor"]},{title:"Excel",path:"/excel",icon:"file-excel",roles:["admin","editor"],children:[{title:"\u5bfc\u51faExcel",path:"/excel/export",roles:["admin","editor"]},{title:"\u4e0a\u4f20Excel",path:"/excel/upload",roles:["admin","editor"]}]},{title:"Zip",path:"/zip",icon:"file-zip",roles:["admin","editor"]},{title:"\u526a\u8d34\u677f",path:"/clipboard",icon:"copy",roles:["admin","editor"]},{title:"\u7528\u6237\u7ba1\u7406",path:"/user",icon:"usergroup-add",roles:["admin"]},{title:"\u5173\u4e8e\u4f5c\u8005",path:"/about",icon:"user",roles:["admin","editor","guest"]}],Z=E.a.Content,Q=function(e,t){var n="Ant Design Pro",a=Object(y.b)(e,"path",t);return a&&(n="".concat(a.title," - Ant Design Pro")),n},$=Object(p.b)((function(e){return e.user}))(Object(m.g)((function(e){var t=e.role,n=e.location.pathname;return r.a.createElement(O.a,{title:Q(Y,n)},r.a.createElement(Z,{style:{height:"calc(100% - 100px)"}},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/dashboard"}),q.map((function(e){return function(e){return"admin"===t||!e.roles||e.roles.includes(t)}(e)&&r.a.createElement(m.b,{component:e.component,key:e.path,path:e.path})})),r.a.createElement(m.a,{to:"/error/404"}))))}))),ee=n(7),te=(n(180),n(183)),ne=(n(65),n(5)),ae=(n(341),n(220)),re=(n(164),n(41)),oe=(n(175),n(103)),ie=(n(146),n(81)),le=(n(139),n(52)),ce=n(64),ue=n.n(ce),se=(n(346),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isFullscreen:!1},e.init=function(){ue.a.isEnabled&&ue.a.on("change",e.change)},e.change=function(){e.setState({isFullscreen:ue.a.isFullscreen})},e.click=function(){if(!ue.a.isEnabled)return le.a.warning("you browser can not work"),!1;ue.a.toggle()},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.init()}},{key:"componentWillUnmount",value:function(){ue.a.isEnabled&&ue.a.off("change",this.change)}},{key:"render",value:function(){var e=this.state.isFullscreen?"\u53d6\u6d88\u5168\u5c4f":"\u5168\u5c4f",t=this.state.isFullscreen?"fullscreen-exit":"fullscreen";return r.a.createElement("div",{className:"fullScreen-container"},r.a.createElement(ie.a,{placement:"bottom",title:e},r.a.createElement(ne.a,{type:t,onClick:this.click})))}}]),n}(a.Component)),de=(n(347),Object(p.b)(null,{toggleSettingPanel:h.i})((function(e){var t=e.toggleSettingPanel;return r.a.createElement("div",{className:"settings-container"},r.a.createElement(ie.a,{placement:"bottom",title:"\u7cfb\u7edf\u8bbe\u7f6e"},r.a.createElement(ne.a,{type:"setting",onClick:t})))}))),me=(n(348),Object(p.b)((function(e){return e.app}),{toggleSiderBar:h.j})((function(e){var t=e.sidebarCollapsed,n=e.toggleSiderBar;return r.a.createElement("div",{className:"hamburger-container"},r.a.createElement(ne.a,{type:t?"menu-unfold":"menu-fold",onClick:n}))}))),pe=(n(349),n(137)),he=(n(351),Object(m.g)((function(e){var t=e.location.pathname,n=function(e,t){var n=[];try{for(var a=function e(a){if(n.push(a),a.path===t)throw new Error("GOT IT!");if(a.children&&a.children.length>0){for(var r=0;r<a.children.length;r++)e(a.children[r]);n.pop()}else n.pop()},r=0;r<e.length;r++)a(e[r])}catch(o){return n}}(Y,t),a=n&&n[0];return a&&"\u9996\u9875"!==a.title.trim()&&(n=[{title:"\u9996\u9875",path:"/dashboard"}].concat(n)),r.a.createElement("div",{className:"Breadcrumb-container"},r.a.createElement(pe.a,null,n&&n.map((function(e){return"\u9996\u9875"===e.title?r.a.createElement(pe.a.Item,{key:e.path},r.a.createElement("a",{href:"#".concat(e.path)},e.title)):r.a.createElement(pe.a.Item,{key:e.path},e.title)}))))}))),fe=(n(359),E.a.Header),ge=Object(p.b)((function(e){return Object(ee.a)(Object(ee.a)(Object(ee.a)({},e.app),e.user),e.settings)}),{logout:h.h,getUserInfo:h.f})((function(e){var t=e.token,n=e.avatar,a=e.sidebarCollapsed,o=e.logout,i=e.getUserInfo,l=e.showSettings,c=e.fixedHeader;t&&i(t);var u=r.a.createElement(re.a,{onClick:function(e){switch(e.key){case"logout":!function(e){oe.a.confirm({title:"\u6ce8\u9500",content:"\u786e\u5b9a\u8981\u9000\u51fa\u7cfb\u7edf\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){o(e)}})}(t)}}},r.a.createElement(re.a.Item,{key:"0"},r.a.createElement(d.b,{to:"/dashboard"},"\u9996\u9875")),r.a.createElement(re.a.Item,{key:"0"},r.a.createElement("a",{target:"_blank",href:"https://github.com/NLRX-WJC/react-antd-admin-template",rel:"noopener noreferrer"},"\u9879\u76ee\u5730\u5740")),r.a.createElement(re.a.Divider,null),r.a.createElement(re.a.Item,{key:"logout"},"\u6ce8\u9500"));return r.a.createElement(r.a.Fragment,null,c?r.a.createElement(fe,null):null,r.a.createElement(fe,{style:c?a?{width:"calc(100% - 80px)"}:{width:"calc(100% - 200px)"}:{width:"100%"},className:c?"fix-header":""},r.a.createElement(me,null),r.a.createElement(he,null),r.a.createElement("div",{className:"right-menu"},r.a.createElement(se,null),l?r.a.createElement(de,null):null,r.a.createElement("div",{className:"dropdown-wrap"},r.a.createElement(te.a,{overlay:u},r.a.createElement("div",null,r.a.createElement(ae.a,{shape:"square",size:"medium",src:n}),r.a.createElement(ne.a,{style:{color:"rgba(0,0,0,.3)"},type:"caret-down"})))))))})),be=(n(360),n(230)),Ee=(n(85),n(27)),ve=(n(362),n(223)),Oe=(n(240),n(120)),ye=(n(234),n(87)),ke=(n(366),n(135)),je=(n(235),n(60)),Ce=n(211),xe=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={sidebarLogo:!0,fixedHeader:!0,tagsView:!0},e.sidebarLogoChange=function(t){e.setState({sidebarLogo:t}),e.props.changeSetting({key:"sidebarLogo",value:t})},e.fixedHeaderChange=function(t){e.setState({fixedHeader:t}),e.props.changeSetting({key:"fixedHeader",value:t})},e.tagsViewChange=function(t){e.setState({tagsView:t}),e.props.changeSetting({key:"tagsView",value:t})},e.handleCopy=function(t){var n="\n    export default {\n      showSettings: true,\n      sidebarLogo: ".concat(e.state.sidebarLogo,",\n      fixedHeader: ").concat(e.state.fixedHeader,",\n      tagsView: ").concat(e.state.tagsView,",\n    }\n    ");Object(Ce.a)(n,t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.settingPanelVisible,a=t.toggleSettingPanel,o=t.sidebarLogo,i=t.fixedHeader,l=t.tagsView;return r.a.createElement("div",{className:"rightSettings"},r.a.createElement(be.a,{title:"\u7cfb\u7edf\u8bbe\u7f6e",placement:"right",width:350,onClose:a,visible:n},r.a.createElement(ye.a,null,r.a.createElement(je.a,{span:12},r.a.createElement("span",null,"\u4fa7\u8fb9\u680f Logo")),r.a.createElement(je.a,{span:12},r.a.createElement(ke.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:o,onChange:this.sidebarLogoChange}))),r.a.createElement(Oe.a,{dashed:!0}),r.a.createElement(ye.a,null,r.a.createElement(je.a,{span:12},r.a.createElement("span",null,"\u56fa\u5b9a Header")),r.a.createElement(je.a,{span:12},r.a.createElement(ke.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:i,onChange:this.fixedHeaderChange}))),r.a.createElement(Oe.a,{dashed:!0}),r.a.createElement(ye.a,null,r.a.createElement(je.a,{span:12},r.a.createElement("span",null,"\u5f00\u542f Tags-View")),r.a.createElement(je.a,{span:12},r.a.createElement(ke.a,{checkedChildren:"\u5f00",unCheckedChildren:"\u5173",defaultChecked:l,onChange:this.tagsViewChange}))),r.a.createElement(Oe.a,{dashed:!0}),r.a.createElement(ye.a,null,r.a.createElement(je.a,{span:24},r.a.createElement(ve.a,{message:"\u5f00\u53d1\u8005\u8bf7\u6ce8\u610f:",description:"\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539/src/defaultSettings.js\u914d\u7f6e\u6587\u4ef6",type:"warning",showIcon:!0,icon:r.a.createElement(ne.a,{type:"notification"}),style:{marginBottom:"16px"}}),r.a.createElement(Ee.a,{style:{width:"100%"},icon:"copy",onClick:function(t){e.handleCopy(t)}},"\u62f7\u8d1d\u914d\u7f6e")))))}}]),n}(a.Component),Se=Object(p.b)((function(e){return Object(ee.a)(Object(ee.a)({},e.app),e.settings)}),{toggleSettingPanel:h.i,changeSetting:h.b})(xe),Te=n(224),we=n.n(Te),Pe=(n(373),function(){return r.a.createElement("div",{className:"sidebar-logo-container"},r.a.createElement("img",{src:we.a,className:"sidebar-logo",alt:"logo"}),r.a.createElement("h1",{className:"sidebar-title"},"\u96be\u51c9\u70ed\u8840"))}),Ne=n(74),Ie=n(232),Ve=n(130),_e=n(136),Ae=(n(387),re.a.SubMenu),Me=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),o=Object(Ie.a)(r,1)[0];return a.splice(n,0,o),a},Le=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={menuTreeNode:null,openKey:[]},e.filterMenuItem=function(t){var n=t.roles,a=e.props.role;return!("admin"!==a&&n&&!n.includes(a))||!!t.children&&!!t.children.find((function(e){return n.includes(e.role)}))},e.getMenuNodes=function(t){var n=e.props.location.pathname;return t.reduce((function(t,a){e.filterMenuItem(a)&&(a.children?(a.children.find((function(e){return 0===n.indexOf(e.path)}))&&e.setState((function(e){return{openKey:[].concat(Object(Ne.a)(e.openKey),[a.path])}})),t.push(r.a.createElement(Ae,{key:a.path,title:r.a.createElement("span",null,a.icon?r.a.createElement(ne.a,{type:a.icon}):null,r.a.createElement("span",null,a.title))},e.getMenuNodes(a.children)))):t.push(r.a.createElement(re.a.Item,{key:a.path},r.a.createElement(d.b,{to:a.path},a.icon?r.a.createElement(ne.a,{type:a.icon}):null,r.a.createElement("span",null,a.title)))));return t}),[])},e.onDragEnd=function(t){if(t.destination){var n=Me(e.state.menuTreeNode,t.source.index,t.destination.index);e.setState({menuTreeNode:n})}},e.handleMenuSelect=function(t){var n=t.key,a=void 0===n?"/dashboard":n,r=Object(y.b)(Y,"path",a);e.props.addTag(r)},e}return Object(c.a)(n,[{key:"componentWillMount",value:function(){var e=this.getMenuNodes(Y);this.setState({menuTreeNode:e}),this.handleMenuSelect(this.state.openKey)}},{key:"render",value:function(){var e=this,t=this.props.location.pathname,n=this.state.openKey;return r.a.createElement("div",{className:"sidebar-menu-container"},r.a.createElement(Ve.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200},r.a.createElement(_e.a,{onDragEnd:this.onDragEnd},r.a.createElement(_e.c,{droppableId:"droppable"},(function(a,o){return r.a.createElement("div",Object.assign({},a.droppableProps,{ref:a.innerRef}),e.state.menuTreeNode.map((function(a,o){return r.a.createElement(_e.b,{key:a.key,draggableId:a.key,index:o},(function(o,i){return r.a.createElement("div",Object.assign({ref:o.innerRef},o.draggableProps,o.dragHandleProps),r.a.createElement(re.a,{mode:"inline",theme:"dark",onSelect:e.handleMenuSelect,selectedKeys:[t],defaultOpenKeys:n},a))}))})))})))))}}]),n}(a.Component),De=Object(p.b)((function(e){return e.user}),{addTag:h.a})(Object(m.g)(Le)),He=E.a.Sider,Ue=Object(p.b)((function(e){return Object(ee.a)(Object(ee.a)({},e.app),e.settings)}))((function(e){var t=e.sidebarCollapsed,n=e.sidebarLogo;return r.a.createElement(He,{collapsible:!0,collapsed:t,trigger:null,style:{zIndex:"10"}},n?r.a.createElement(Pe,null):null,r.a.createElement(De,null))})),Ge=(n(237),n(174)),Re=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).tagListContainer=r.a.createRef(),e.contextMenuContainer=r.a.createRef(),e.state={left:0,top:0,menuVisible:!1},e.handleClose=function(t){var n=e.props,a=n.history,r=n.deleteTag,o=n.taglist,i=t.path,l=a.location.pathname,c=o.length;i===l&&a.push(o[c-1].path),i===o[c-1].path&&l===o[c-1].path&&(c-2>0?a.push(o[c-2].path):2===c&&a.push(o[0].path)),r(t)},e.handleClick=function(t){e.props.history.push(t)},e.openContextMenu=function(t,n){n.preventDefault();var a=n.clientX,r=n.clientY;a>e.tagListContainer.current.clientWidth-105?e.setState({left:a-105+15,top:r,menuVisible:!0,currentTag:t}):e.setState({left:a,top:r,menuVisible:!0,currentTag:t})},e.handleClickOutside=function(t){var n=e.state.menuVisible;!(e.contextMenuContainer.current&&e.contextMenuContainer.current.contains(t.target))&&n&&e.closeContextMenu()},e.handleCloseAllTags=function(){e.props.emptyTaglist(),e.props.history.push("/dashboard"),e.closeContextMenu()},e.handleCloseOtherTags=function(){var t=e.state.currentTag,n=t.path;e.props.closeOtherTags(t),e.props.history.push(n),e.closeContextMenu()},e}return Object(c.a)(n,[{key:"closeContextMenu",value:function(){this.setState({menuVisible:!1})}},{key:"componentDidMount",value:function(){document.body.addEventListener("click",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var e=this,t=this.state,n=t.left,a=t.top,o=t.menuVisible,i=this.props,l=i.taglist,c=i.history.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve.Scrollbars,{autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,hideTracksWhenNotNeeded:!0,renderView:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-container"}))},renderTrackVertical:function(e){return r.a.createElement("div",Object.assign({},e,{className:"scrollbar-track-vertical"}))}},r.a.createElement("ul",{className:"tags-wrap",ref:this.tagListContainer},l.map((function(t){return r.a.createElement("li",{key:t.path},r.a.createElement(Ge.a,{onClose:e.handleClose.bind(null,t),closable:"/dashboard"!==t.path,color:c===t.path?"geekblue":"gold",onClick:e.handleClick.bind(null,t.path),onContextMenu:e.openContextMenu.bind(null,t)},t.title))})))),o?r.a.createElement("ul",{className:"contextmenu",style:{left:"".concat(n,"px"),top:"".concat(a,"px")},ref:this.contextMenuContainer},r.a.createElement("li",{onClick:this.handleCloseOtherTags},"\u5173\u95ed\u5176\u4ed6"),r.a.createElement("li",{onClick:this.handleCloseAllTags},"\u5173\u95ed\u6240\u6709")):null)}}]),n}(a.Component),Je=Object(m.g)(Object(p.b)((function(e){return e.tagsView}),{deleteTag:h.d,emptyTaglist:h.e,closeOtherTags:h.c})(Re)),We=(n(389),function(){return r.a.createElement("div",{className:"tagsView-container"},r.a.createElement(Je,null))}),Fe=Object(p.b)((function(e){return e.settings}))((function(e){var t=e.tagsView;return r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(Ue,null),r.a.createElement(E.a,null,r.a.createElement(ge,null),t?r.a.createElement(We,null):null,r.a.createElement($,null),r.a.createElement(Se,null)))})),ze=(n(236),n(68)),Ke=(n(233),n(142)),Be=n(167),Xe=n.n(Be),qe=n(182),Ye=(n(393),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.handleSubmit=function(t){t.preventDefault(),e.props.form.validateFields(function(){var t=Object(qe.a)(Xe.a.mark((function t(n,a){var r,o;return Xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n?console.log("\u68c0\u9a8c\u5931\u8d25!"):(r=a.username,o=a.password,e.login(r,o));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())},e.login=function(t,n){var a=e.props.login;e.setState({loading:!0}),a(t,n).then((function(t){le.a.success("\u767b\u5f55\u6210\u529f"),e.getUserInfo(t.token)})).catch((function(t){e.setState({loading:!1}),le.a.error(t)}))},e.getUserInfo=function(t){(0,e.props.getUserInfo)(t).then((function(e){})).catch((function(e){le.a.error(e)}))},e}return Object(c.a)(n,[{key:"render",value:function(){if(this.props.token)return r.a.createElement(m.a,{to:"/dashboard"});var e=this.props.form.getFieldDecorator;return r.a.createElement(O.a,{title:"\u7528\u6237\u767b\u5f55"},r.a.createElement("div",{className:"login-container"},r.a.createElement(ze.a,{onSubmit:this.handleSubmit,className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,"\u7528\u6237\u767b\u5f55")),r.a.createElement(C.a,{spinning:this.state.loading,tip:"\u52a0\u8f7d\u4e2d..."},r.a.createElement(ze.a.Item,null,e("username",{rules:[{required:!0,whitespace:!0,message:"\u7528\u6237\u540d\u5fc5\u987b\u8f93\u5165"}],initialValue:"admin"})(r.a.createElement(Ke.a,{prefix:r.a.createElement(ne.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),r.a.createElement(ze.a.Item,null,e("password",{initialValue:"123456"})(r.a.createElement(Ke.a,{prefix:r.a.createElement(ne.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(ze.a.Item,null,r.a.createElement(Ee.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55")),r.a.createElement(ze.a.Item,null,r.a.createElement("span",null,"\u8d26\u53f7 : admin \u5bc6\u7801 : \u968f\u4fbf\u586b"),r.a.createElement("br",null),r.a.createElement("span",null,"\u8d26\u53f7 : editor \u5bc6\u7801 : \u968f\u4fbf\u586b"),r.a.createElement("br",null),r.a.createElement("span",null,"\u8d26\u53f7 : guest \u5bc6\u7801 : \u968f\u4fbf\u586b"))))))}}]),n}(a.Component)),Ze=ze.a.create()(Ye),Qe=Object(p.b)((function(e){return e.user}),{login:h.g,getUserInfo:h.f})(Ze),$e=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.token,n=e.role,a=e.getUserInfo;return r.a.createElement(d.a,null,r.a.createElement(b,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:Qe}),r.a.createElement(m.b,{path:"/",render:function(){return t?n?r.a.createElement(Fe,null):void a(t).then((function(){return r.a.createElement(Fe,null)})):r.a.createElement(m.a,{to:"/login"})}}))))}}]),n}(r.a.Component),et=Object(p.b)((function(e){return e.user}),{getUserInfo:h.f})($e),tt=n(84),nt=(n(461),n(462),n(23)),at=n.n(nt),rt={admin:"admin-token",guest:"guest-token",editor:"editor-token"},ot={"admin-token":{id:"admin",role:"admin",name:"\u96be\u51c9\u70ed\u8840",avatar:"https://s1.ax1x.com/2020/04/28/J5hUaT.jpg",description:"\u62e5\u6709\u7cfb\u7edf\u5185\u6240\u6709\u83dc\u5355\u548c\u8def\u7531\u6743\u9650"},"editor-token":{id:"editor",role:"editor",name:"\u7f16\u8f91\u5458",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"\u53ef\u4ee5\u770b\u5230\u9664\u6237\u7ba1\u7406\u9875\u9762\u4e4b\u5916\u7684\u6240\u6709\u9875\u9762"},"guest-token":{id:"guest",role:"guest",name:"\u6e38\u5ba2",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",description:"\u4ec5\u80fd\u770b\u5230Dashboard\u3001\u5f00\u53d1\u6587\u6863\u3001\u6743\u9650\u6d4b\u8bd5\u548c\u5173\u4e8e\u4f5c\u8005\u56db\u4e2a\u9875\u9762"}},it=function(e){var t=JSON.parse(e.body).username,n=rt[t];return n?{status:0,token:n}:{status:1,message:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}},lt=function(e){var t=e.body,n=ot[t];return n?{status:0,userInfo:n}:{status:1,message:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25"}},ct=function(){return{status:0,users:Object.values(ot)}},ut=function(e){var t=JSON.parse(e.body).id,n=rt[t];return n&&(delete rt[t],delete ot[n]),{status:0}},st=function(e){var t=JSON.parse(e.body),n=t.id,a=rt[n];return a&&(ot[a]=Object(ee.a)(Object(ee.a)({},ot[a]),t)),{status:0}},dt=function(e){var t=e.body;return rt[t]?{status:1}:{status:0}},mt=function(e){var t=JSON.parse(e.body),n=t.id;return rt[n]="".concat(n,"-token"),ot["".concat(n,"-token")]=Object(ee.a)(Object(ee.a)({},ot["guest-token"]),t),{status:0}},pt=function(e){return{status:0,data:"success"}},ht=[],ft=0;ft<20;ft++)ht.push(at.a.mock({key:"@increment",order_no:"@guid()",price:"@float(1000, 15000, 0, 2)","tag|1":["success","pending"]}));for(var gt=function(e){return{code:2e4,data:{items:ht}}},bt=[],Et=0;Et<20;Et++)bt.push(at.a.mock({id:"@increment",title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)",date:"@datetime"}));for(var vt=function(e){return{code:2e4,data:{items:bt}}},Ot=[],yt=0;yt<100;yt++)Ot.push(at.a.mock({id:yt,title:"@ctitle(5, 10)",author:"@cname",readings:"@integer(300, 5000)","star|1-3":"\u2605","status|1":["published","draft"],date:"@datetime"}));var kt=function(e){var t=JSON.parse(e.body),n=t.pageNumber,a=t.pageSize,r=t.title,o=t.status,i=t.star,l=(n-1)*a,c=n*a,u=Ot.filter((function(e){return(!i||e.star.length===i)&&((!o||e.status===o)&&!(r&&e.title.indexOf(r)<0))})),s=u.slice(l,c);return{code:2e4,data:{total:u.length,items:s}}},jt=function(e){var t=JSON.parse(e.body).id,n=Ot.filter((function(e){return e.id===t})),a=Ot.indexOf(n[0]);return Ot.splice(a,1),{code:2e4}},Ct=function(e){var t=JSON.parse(e.body),n=t.id,a=Ot.filter((function(e){return e.id===n})),r=Ot.indexOf(a[0]);return Ot.splice(r,1,t),{code:2e4}};at.a.mock(/\/login/,"post",it),at.a.mock(/\/logout/,"post",pt),at.a.mock(/\/userInfo/,"post",lt),at.a.mock(/\/user\/list/,"get",ct),at.a.mock(/\/user\/delete/,"post",ut),at.a.mock(/\/user\/edit/,"post",st),at.a.mock(/\/user\/validatUserID/,"post",dt),at.a.mock(/\/user\/add/,"post",mt),at.a.mock(/\/transaction\/list/,"get",gt),at.a.mock(/\/excel\/list/,"get",vt),at.a.mock(/\/table\/list/,"post",kt),at.a.mock(/\/table\/delete/,"post",jt),at.a.mock(/\/table\/edit/,"post",Ct);at.a;i.a.render(r.a.createElement(p.a,{store:tt.a},r.a.createElement(et,null)),document.getElementById("root"))},50:function(e,t,n){"use strict";n(175);var a=n(103),r=n(217),o=n.n(r),i=n(84),l=n(71),c=n(20),u=o.a.create({baseURL:"/prod-api",timeout:5e3});u.interceptors.request.use((function(e){return i.a.getState().user.token&&(e.headers.Authorization=Object(l.a)()),e}),(function(e){console.log(e),Promise.reject(e)})),u.interceptors.response.use((function(e){return e}),(function(e){return console.log("err"+e),403===e.response.status&&a.a.confirm({title:"\u786e\u5b9a\u767b\u51fa?",content:"\u7531\u4e8e\u957f\u65f6\u95f4\u672a\u64cd\u4f5c\uff0c\u60a8\u5df2\u88ab\u767b\u51fa\uff0c\u53ef\u4ee5\u53d6\u6d88\u7ee7\u7eed\u7559\u5728\u8be5\u9875\u9762\uff0c\u6216\u8005\u91cd\u65b0\u767b\u5f55",okText:"\u91cd\u65b0\u767b\u5f55",cancelText:"\u53d6\u6d88",onOk:function(){var e=i.a.getState().user.token;i.a.dispatch(Object(c.h)(e))},onCancel:function(){console.log("Cancel")}}),Promise.reject(e)})),t.a=u},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(132),r=n.n(a);function o(){return r.a.get("Token")}function i(e){return r.a.set("Token",e)}function l(){return r.a.remove("Token")}},84:function(e,t,n){"use strict";var a=n(40),r=n(218),o=n(7),i=n(17),l=n(71),c={name:"",role:"",avatar:"",token:Object(l.a)()};var u={sidebarCollapsed:!1,settingPanelVisible:!1};var s=n(122),d={showSettings:!0,sidebarLogo:!0,fixedHeader:!1,tagsView:!0};var m=n(74),p={taglist:[]};var h=Object(a.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.j:return Object(o.a)(Object(o.a)({},e),{},{token:t.token});case i.i:return Object(o.a)(Object(o.a)({},e),{},{name:t.name,role:t.role,avatar:t.avatar});case i.h:return{};default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object(o.a)(Object(o.a)({},e),{},{sidebarCollapsed:!e.sidebarCollapsed});case i.a:return Object(o.a)(Object(o.a)({},e),{},{settingPanelVisible:!e.settingPanelVisible});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.c:var n=t.key,a=t.value;return e.hasOwnProperty(n)?Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},n,a)):e;default:return e}},tagsView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.d:var n=t.tag;return e.taglist.includes(n)?e:Object(o.a)(Object(o.a)({},e),{},{taglist:[].concat(Object(m.a)(e.taglist),[n])});case i.f:return Object(o.a)(Object(o.a)({},e),{},{taglist:Object(m.a)(e.taglist.filter((function(e){return e!==t.tag})))});case i.g:return Object(o.a)(Object(o.a)({},e),{},{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path})))});case i.e:return Object(o.a)(Object(o.a)({},e),{},{taglist:Object(m.a)(e.taglist.filter((function(e){return"/dashboard"===e.path||e===t.tag})))});default:return e}}}),f=Object(a.e)(h,Object(a.a)(r.a));t.a=f},99:function(e,t,n){"use strict";function a(e,t,n){var a,r,o,i,l,c=function c(){var u=+new Date-i;u<t&&u>0?a=setTimeout(c,t-u):(a=null,n||(l=e.apply(o,r),a||(o=r=null)))};return function(){for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];o=this,i=+new Date;var d=n&&!a;return a||(a=setTimeout(c,t)),d&&(l=e.apply(o,u),o=u=null),l}}function r(e,t,n){var a,r=[];for(r=r.concat(e);r.length;){var o=r.shift();o.children&&o.children.length>0&&(r=o.children.concat(r)),n===o[t]&&(a=o)}return a}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}))}},[[258,31,32]]]);