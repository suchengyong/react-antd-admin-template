(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[25],{1264:function(t,e,a){},1353:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=(a(234),a(87)),o=(a(235),a(60)),s=(a(485),a(484)),c=a(30),l=a(31),u=a(33),h=a(32),p=a(754),d=a(1260),m=a(1261),f=a.n(m),v=a(1262),y=a.n(v),b=(a(1263),a(1264),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={editorState:p.EditorState.createEmpty()},t.onEditorStateChange=function(e){t.setState({editorState:e})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.editorState;return r.a.createElement("div",null,r.a.createElement(s.a,{bordered:!1},r.a.createElement(d.Editor,{editorState:t,onEditorStateChange:this.onEditorStateChange,wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"zh"}})),r.a.createElement("br",null),r.a.createElement(i.a,{gutter:10},r.a.createElement(o.a,{span:12},r.a.createElement(s.a,{title:"\u540c\u6b65\u8f6c\u6362HTML",bordered:!1,style:{minHeight:200}},t&&f()(Object(p.convertToRaw)(t.getCurrentContent())))),r.a.createElement(o.a,{span:12},r.a.createElement(s.a,{title:"\u540c\u6b65\u8f6c\u6362MarkDown",bordered:!1,style:{minHeight:200}},t&&y()(Object(p.convertToRaw)(t.getCurrentContent()))))))}}]),a}(n.Component)),E=a(479);e.default=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(E.a,{title:"\u65b0\u624b\u5f15\u5bfc",source:'\n    \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg</a>\u3002\n  '}),r.a.createElement("br",null),r.a.createElement(b,null))}},479:function(t,e,a){"use strict";a(485);var n=a(484),r=a(30),i=a(31),o=a(33),s=a(32),c=a(0),l=a.n(c),u=function(){function t(e){Object(r.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(i.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var a=Array.from(t.childNodes),n=0;n<a.length;n++){var r=a[n];if(3===r.nodeType)e=e.concat(r.nodeValue.split(""));else if(1===r.nodeType){var i=[];i=this.convert(r,i),e.push({dom:r,val:i})}}return e}},{key:"print",value:function(t,e,a){setTimeout((function(){t.appendChild(document.createTextNode(e)),a()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var a=t.val.shift();if("string"===typeof a)this.print(t.dom,a,(function(){e.play(t)}));else{var n=a.dom.cloneNode();t.dom.appendChild(n),this.play({parent:t,dom:n,val:a.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}(),h=function(t){Object(o.a)(a,t);var e=Object(s.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){new u({source:this.source,output:this.output,delay:30}).start()}},{key:"render",value:function(){var t=this;return l.a.createElement(n.a,{bordered:!1,className:"card-item",title:this.props.title,style:{minHeight:this.props.height},id:this.props.id},l.a.createElement("div",{style:{display:"none"},ref:function(e){return t.source=e},dangerouslySetInnerHTML:{__html:this.props.source}}),l.a.createElement("div",{ref:function(e){return t.output=e}}))}}]),a}(l.a.Component);h.defaultProps={title:"\u4f55\u65f6\u4f7f\u7528",source:"",height:136};e.a=h}}]);