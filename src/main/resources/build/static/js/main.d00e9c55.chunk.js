(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(21),i=n.n(a),d=(n(12),n(3)),s=n(4),r=n(6),l=n(5),u=(n(26),n(27),n(7)),h=n.n(u),f=n(0),p=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).num=0,e.state={tmp:""},e.handleKeyUp=function(t){var n=t.keyCode,o=t.target;if(13===n)if(""!==o.value.trim()){var c={id:Date.now(),item:o.value,completed:0};h.a.post("/todo",c).then((function(t){1001===t.data.code&&alert("\u4e0d\u80fd\u91cd\u590d\u8f93\u5165\uff0c\u8bf7\u68c0\u67e5todo\u5217\u8868"),e.props.add(),o.value=""})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))}else alert("\u8f93\u5165\u4e0d\u80fd\u4e3a\u7a7a")},e.inputChange=function(){var t=e.refs.input.value;e.setState({tmp:t})},e.handleClick=function(){var t=e.state.tmp;if(""!==t.trim()){var n={id:Date.now(),item:t,completed:0};h.a.post("/todo",n).then((function(t){1001===t.data.code&&alert("\u4e0d\u80fd\u91cd\u590d\u8f93\u5165\uff0c\u8bf7\u68c0\u67e5todo\u5217\u8868"),e.props.add(),e.refs.input.value=""})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))}else alert("\u8f93\u5165\u4e0d\u80fd\u4e3a\u7a7a")},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"todo-header",children:Object(f.jsxs)("div",{className:"todo-sub",children:[Object(f.jsx)("input",{ref:"input",onChange:this.inputChange,onKeyUp:this.handleKeyUp,type:"text",placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u4efb\u52a1\u540d\u79f0\uff0c\u6309\u56de\u8f66\u952e\u786e\u8ba4"}),Object(f.jsx)("button",{className:"btn-add",onClick:this.handleClick,children:"\u6dfb\u52a0\u4efb\u52a1"})]})})}}]),n}(o.Component),j=p,b=n(11),m=(n(47),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={mouse:!1},e.handleMouse=function(t){return function(){e.setState({mouse:t})}},e.handleCheck=function(t){return function(n){e.props.updateTodo(t)}},e.handleDelete=function(t){window.confirm("\u786e\u5b9a\u8981\u5220\u9664\u5417")&&e.props.deleteTodo(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.completed,c=t.item;return Object(f.jsxs)("li",{style:{backgroundColor:this.state.mouse?"#ddd":"white"},onMouseEnter:this.handleMouse(!0),onMouseLeave:this.handleMouse(!1),children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{type:"checkbox",checked:1===o,onChange:this.handleCheck(n)}),Object(f.jsx)("span",{children:c})]}),Object(f.jsx)("button",{onClick:function(){e.handleDelete(n)},className:"btn btn-danger",style:{display:this.state.mouse?"block":"none"},children:"\u5220\u9664"})]})}}]),n}(o.Component)),O=m,v=(n(48),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todosq,n=e.updateTodo,o=e.deleteTodo;return Object(f.jsx)("ul",{className:"todo-main",children:t.map((function(e){return Object(f.jsx)(O,Object(b.a)(Object(b.a)({},e),{},{updateTodo:n,deleteTodo:o}),e.id)}))})}}]),n}(o.Component)),g=v,k=(n(49),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleCheck=function(t){e.props.checkAllTodo(t.target.checked?1:0)},e.handleDeleteAll=function(){window.confirm("\u786e\u5b9a\u8981\u5220\u9664\u5168\u90e8\u52fe\u9009\u7684\u4efb\u52a1\u5417")&&e.props.deleteAllTodo()},e}return Object(s.a)(n,[{key:"render",value:function(){for(var e=this.props.todos,t=e.length,n=0,o=0;o<t;o++)1===e[o].completed&&n++;return Object(f.jsxs)("div",{className:"todo-footer",children:[Object(f.jsx)("label",{children:Object(f.jsx)("input",{type:"checkbox",checked:t===n&&0!==t,onChange:this.handleCheck})}),Object(f.jsxs)("span",{children:[Object(f.jsxs)("span",{children:["\u5b8c\u6210",n]})," / \u5168\u90e8",t]}),Object(f.jsx)("button",{className:"btn btn-danger",onClick:this.handleDeleteAll,children:"\u6e05\u9664\u5df2\u5b8c\u6210\u4efb\u52a1"})]})}}]),n}(o.Component)),x=k,w=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).refresh=function(){h.a.get("/todo").then((function(e){console.log(e.data.data),o.setState({todos:e.data.data})})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))},o.addTodo=function(){o.refresh()},o.updateTodo=function(e){h.a.put("/todo/".concat(e)).then((function(e){console.log(e),o.refresh()})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))},o.deleteTodo=function(e){h.a.delete("/todo/".concat(e)).then((function(e){console.log(e),o.refresh()})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))},o.checkAllTodo=function(e){o.state.todos.forEach((function(t){t.completed!==e&&h.a.put("/todo/".concat(t.id)).then((function(e){o.refresh()})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))}))},o.deleteAllTodo=function(){o.state.todos.forEach((function(e){1===e.completed&&h.a.delete("/todo/".concat(e.id)).then((function(e){o.refresh()})).catch((function(e){console.log(e),window.confirm("\u7cfb\u7edf\u5f02\u5e38\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005\uff1a\u5f20\u4e00\u741b\uff0c\u6216\u6309F12\u67e5\u770b\u62a5\u9519\u4fe1\u606f")}))}))},o.state={todos:[]},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){var e=this.state.todos;return Object(f.jsxs)("div",{className:"todo-container",children:[Object(f.jsx)("div",{className:"todo-logo",children:"Todo-List"}),Object(f.jsxs)("div",{className:"todo-wrap",children:[Object(f.jsx)(j,{add:this.addTodo}),Object(f.jsx)(g,{todosq:e,updateTodo:this.updateTodo,deleteTodo:this.deleteTodo}),Object(f.jsx)(x,{todos:e,checkAllTodo:this.checkAllTodo,deleteAllTodo:this.deleteAllTodo})]})]})}}]),n}(o.Component);var T=function(){return Object(f.jsx)(w,{})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.d00e9c55.chunk.js.map