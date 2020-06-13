(this.webpackJsonpmessaging_system=this.webpackJsonpmessaging_system||[]).push([[0],{175:function(e,n,t){e.exports=t(266)},266:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),u=t.n(c),o=t(11),i=t(273),l=t(9),s=t(89),m=t(67),d=t(269),f=t(87),p=t(272);function g(){var e=Object(o.a)(["\n  color: red;\n"]);return g=function(){return e},e}function v(){var e=Object(o.a)(["\n  margin: 8px;\n"]);return v=function(){return e},e}function b(){var e=Object(o.a)(["\n  margin-top: 40px;\n  width: 140px;\n  max-width: 100%;\n"]);return b=function(){return e},e}function E(){var e=Object(o.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 26px;\n"]);return E=function(){return e},e}function h(){var e=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return h=function(){return e},e}var j=d.a.TextArea,x=l.a.form(h()),O=l.a.div(E()),w=Object(l.a)(f.a)(b()),y=Object(l.a)(d.a)(v()),S=l.a.div(g()),M=function(e){var n=e.handleSubmit,t=e.handleChange,a=e.handleBlur,c=e.values,u=e.isSubmitting;return r.a.createElement(x,{onSubmit:n},r.a.createElement(O,null,r.a.createElement(y,{size:"large",onChange:t,onBlur:a,value:c.sender,placeholder:"From",name:"sender",prefix:r.a.createElement(p.a,null)}),r.a.createElement(m.a,{component:S,name:"sender"}),r.a.createElement(y,{size:"large",onChange:t,onBlur:a,value:c.receiver,placeholder:"To",name:"receiver",prefix:r.a.createElement(p.a,null)}),r.a.createElement(m.a,{component:S,name:"receiver"})),r.a.createElement(y,{size:"large",onChange:t,onBlur:a,value:c.subject,placeholder:"Subject",name:"subject"}),r.a.createElement(m.a,{component:S,name:"subject"}),r.a.createElement(j,{onChange:t,onBlur:a,value:c.message,placeholder:"Message",name:"message",size:"large",autoSize:{minRows:4,maxRows:10}}),r.a.createElement(m.a,{component:S,name:"message"}),r.a.createElement(w,{htmlType:"submit",loading:u},"Send"))},C=t(68),k=t.n(C),D=t(117),_=t(118),R=t.n(_),T=Object({NODE_ENV:"production",PUBLIC_URL:"/Daniel-Amenou-11-06-2020",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGES_SERVER_URL,I={send:function(){var e=Object(D.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.a.post(T,n,{timeout:5e3}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),get:function(){var e=Object(D.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.a.get("".concat(T).concat(n),{timeout:5e3}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),deleteMessage:function(){var e=Object(D.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",R.a.delete("".concat(T).concat(n),{timeout:5e3}).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},P={subject:"",sender:"",receiver:"",message:""},A=s.a().shape({subject:s.b().required("Required"),sender:s.b().required("Required"),receiver:s.b().required("Required"),message:s.b().required("Required")}),B=function(){var e=Object(a.useCallback)((function(e,n){I.send(e).then((function(){return n.resetForm(),i.a.success("Message sent successfully"),1})).catch((function(){i.a.error("Failed to send message")})).finally((function(){return n.setSubmitting(!1)}))}),[]);return r.a.createElement(m.b,{initialValues:P,validationSchema:A,onSubmit:e},M)};function q(){var e=Object(o.a)(["\n  max-width: 600px;\n  min-width: 280px;\n  width: 50%;\n  padding: 4%;\n  margin-top: 4%;\n  border-radius: 20px;\n  border: 1px solid #d9d9d9;\n"]);return q=function(){return e},e}function F(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n"]);return F=function(){return e},e}var z=l.a.div(F()),U=l.a.div(q()),H=function(){return r.a.createElement(z,null,r.a.createElement(U,null,r.a.createElement(B,null)))},L=t(119),N=t(268),W=t(90),Y=t(169),K=t.n(Y),V=t(270),G=t(271);function J(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]);return J=function(){return e},e}function $(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return $=function(){return e},e}function Q(){var e=Object(o.a)(["\n  white-space: pre-line;\n"]);return Q=function(){return e},e}var X=V.a.Panel,Z=l.a.div(Q()),ee=l.a.div($()),ne=l.a.div(J()),te=function(e){var n=e.message,t=e.onDelete,a=e.userId===n.receiver?"".concat(n.sender,": ").concat(n.subject):"to ".concat(n.receiver,": ").concat(n.subject);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,null,r.a.createElement(X,{header:a,extra:r.a.createElement(G.a,{title:"Are you sure you want to delete this message?",okText:"Yes",cancelText:"No",onConfirm:function(e){e.stopPropagation(),t(n.id)},onCancel:function(e){return e.stopPropagation()}},r.a.createElement(f.a,{type:"text",onClick:function(e){return e.stopPropagation()}},"Delete"))},r.a.createElement(ee,null,r.a.createElement(ne,null,K()(n.createdAt).format("DD/MM/YYYY HH:mm:ss")),r.a.createElement(Z,null,n.message)))))},ae=function(e){var n=e.messages,t=e.userId,a=e.onMessageDelete;return 0===n.length?r.a.createElement(W.a,{image:W.a.PRESENTED_IMAGE_SIMPLE}):r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement(te,{userId:t,message:e,onDelete:a,key:e.id})})))};function re(){var e=Object(o.a)(["\n  margin-bottom: 40px;\n  align-self: center;\n  max-width: 400px;\n"]);return re=function(){return e},e}function ce(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);return ce=function(){return e},e}var ue=N.a.TabPane,oe=d.a.Search,ie=l.a.div(ce()),le=Object(l.a)(oe)(re()),se=function(e){var n=e.userId,t=e.onUserChange,a=e.onMessageDelete,c=e.receivedMessages,u=e.sentMessages;return r.a.createElement(ie,null,r.a.createElement(le,{size:"large",placeholder:"User ID",name:"userId",enterButton:"Load",onSearch:t}),r.a.createElement(N.a,{defaultActiveKey:"1"},r.a.createElement(ue,{tab:"Received",key:"1"},r.a.createElement(ae,{userId:n,messages:c,onMessageDelete:a})),r.a.createElement(ue,{tab:"Sent",key:"2"},r.a.createElement(ae,{userId:n,messages:u,onMessageDelete:a}))))},me=function(){var e=Object(a.useState)(null),n=Object(L.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)([]),o=Object(L.a)(u,2),l=o[0],s=o[1],m=Object(a.useState)([]),d=Object(L.a)(m,2),f=d[0],p=d[1];Object(a.useEffect)((function(){t&&g(t)}),[t]);var g=Object(a.useCallback)((function(e){I.get(e).then((function(e){return s(e.sent),p(e.received),1})).catch((function(){return i.a.error("Failed to get messages")}))}),[]),v=Object(a.useCallback)((function(e){I.deleteMessage(e).then((function(){i.a.success("message deleted");var n=function(n){return n.filter((function(n){return n.id!==e}))};return s(n),p(n),1})).catch((function(){return i.a.error("Failed to delete message")}))}),[]);return r.a.createElement(se,{userId:t,onUserChange:c,sentMessages:l,receivedMessages:f,onMessageDelete:v})};function de(){var e=Object(o.a)(["\n  width: 80%;\n  padding: 4%;\n  margin-top: 10%;\n  min-width: 280px;\n  border-radius: 20px;\n"]);return de=function(){return e},e}function fe(){var e=Object(o.a)(["\n  justify-content: center;\n  display: flex;\n"]);return fe=function(){return e},e}var pe=l.a.div(fe()),ge=l.a.div(de()),ve=function(){return r.a.createElement(pe,null,r.a.createElement(ge,null,r.a.createElement(me,null)))},be=t(133),Ee=t(16);function he(){var e=Object(o.a)(["\n  padding: 8px 16px;\n  text-align: center;\n  color: white;\n  &:hover {\n    filter: opacity(0.9);\n  }\n  &.active {\n    color: #096dd9;\n    background-color: white;\n  }\n"]);return he=function(){return e},e}function je(){var e=Object(o.a)(["\n  display: flex;\n"]);return je=function(){return e},e}function xe(){var e=Object(o.a)(["\n  list-style-type: none;\n  background-color: #096dd9;\n  display: flex;\n  padding: 0;\n  margin: 0;\n"]);return xe=function(){return e},e}function Oe(){var e=Object(o.a)([""]);return Oe=function(){return e},e}i.a.config({top:42});var we=l.a.nav(Oe()),ye=l.a.ul(xe()),Se=l.a.li(je()),Me=Object(l.a)(be.b)(he());var Ce=function(){return r.a.createElement(be.a,{basename:"/"},r.a.createElement("div",null,r.a.createElement(we,null,r.a.createElement(ye,null,r.a.createElement(Se,null,r.a.createElement(Me,{exact:!0,to:"/"},"Home")),r.a.createElement(Se,null,r.a.createElement(Me,{to:"/newMessage"},"New Message")))),r.a.createElement(Ee.a,{exact:!0,path:"/",component:ve}),r.a.createElement(Ee.a,{path:"/newMessage",component:H})))};t(265),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.5c43dbf0.chunk.js.map