(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[25],{456:function(e,t,a){},486:function(e,t,a){"use strict";a.r(t),a.d(t,"AdminLayout",(function(){return v}));var n=a(267),l=a(465),c=a(358),r=a(104),s=a(14),o=a(15),i=a(106),u=a(105),m=a(107),p=a(436),d=a(0),h=a.n(d),f=a(59),g=a(207),E=a(5),y=(a(456),p.a.Header),k=p.a.Sider,b=p.a.Content,v=(p.a.Footer,function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={collapsed:!1},a.toggle=function(){a.setState({collapsed:!a.state.collapsed})},a.handleClickMenuItem=function(e){console.log(a.props),sessionStorage.setItem("menuItmeKey",e.key)},a.menuItem=function(){return E.d.map((function(e,t){return h.a.createElement(c.a.Item,{key:t,onClick:function(){a.handleClickMenuItem(e)}},h.a.createElement(g.a,{to:e.path},h.a.createElement(r.a,{type:e.icon}),h.a.createElement("span",null,e.title)))}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.user.isLogin}},{key:"render",value:function(){var e=this.props.user.isLogin,t=this.state.collapsed?"logoMin":"logoMax",a=h.a.createElement(c.a,null,h.a.createElement(c.a.Item,{key:"1"},"login out"));return e?h.a.createElement("div",{id:"adminLayout"},h.a.createElement(p.a,{style:{height:"100vh"}},h.a.createElement(k,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},h.a.createElement("div",{className:t}),h.a.createElement(c.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[sessionStorage.getItem("menuItmeKey")||"0"]},this.menuItem())),h.a.createElement(p.a,null,h.a.createElement(y,{style:{background:"#fff",padding:0}},h.a.createElement(r.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),h.a.createElement("span",{className:"user"},h.a.createElement(l.a,{style:{backgroundColor:"#f56a00"}},this.props.user.user),h.a.createElement(n.a,{overlay:a,className:"ml10"},h.a.createElement(r.a,{type:"down"})))),h.a.createElement(p.a,null,h.a.createElement("div",{className:"wrap-content"},h.a.createElement(b,{className:"content"},this.props.children)))))):null}}]),t}(d.Component));t.default=Object(f.c)((function(e){return{user:e.user}}),{})(v)}}]);
//# sourceMappingURL=25.87e613e0.chunk.js.map