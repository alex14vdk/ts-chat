(this["webpackJsonpts-chat"]=this["webpackJsonpts-chat"]||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(14),r=a.n(c),o=a(4),i=a(7),u=a(18),l=a(2),d="option/CHAT_LIST",g="option/CHAT_TYPE_CHANGE",j="option/MESSAGE_PANEL",b="option/CHAT_MESSAGE_EDIT_MODE",O="dialogues/USER_LIST_REQUEST",m="dialogues/USER_LIST_SUCCESS",f="dialogues/USER_LIST_FAILURE",p="message/MESSAGES_SUCCESS",h="message/MESSAGES_REQUEST",v="message/MESSAGES_FAILURE",E="message/CHAT_MESSAGE_ADD",_="message/CHAT_MESSAGE_EDIT",x="message/CHAT_MESSAGE_DELETE",S="auth/USER_LOGIN",y="auth/USER_LOGOUT",T={messages:[],loading:!0,error:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{messages:[]});case p:return Object(l.a)(Object(l.a)({},e),{},{messages:t.payload,loading:!1});case v:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.payload});case E:return Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(u.a)(e.messages),[t.payload])});case _:return Object(l.a)(Object(l.a)({},e),{},{messages:Object(u.a)(e.messages.map((function(e){return e.id===t.payload.idMessage&&(e.text=t.payload.messageText),e})))});case x:return Object(l.a)(Object(l.a)({},e),{},{messages:Object(u.a)(e.messages.filter((function(e){return e.id!==t.payload})))});default:return e}},L={curUser:"",isAuth:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(l.a)(Object(l.a)({},e),{},{curUser:t.payload,isAuth:!0});case y:return Object(l.a)(Object(l.a)({},e),{},{isAuth:!1});default:return e}},C={dialogueListOpen:!1,messageEditPanel:0,curMessageType:1,messageEditText:0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{messageEditPanel:t.payload});case g:return Object(l.a)(Object(l.a)({},e),{},{curMessageType:t.payload});case d:return Object(l.a)(Object(l.a)({},e),{},{dialogueListOpen:"auto"===t.payload?!e.dialogueListOpen:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{messageEditText:t.payload});default:return e}},P={dialogues:[],loading:!0,error:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{dialogues:[]});case m:return Object(l.a)(Object(l.a)({},e),{},{dialogues:t.payload,loading:!1});case f:return Object(l.a)(Object(l.a)({},e),{},{dialogues:[],loading:!1,error:t.payload});default:return e}},I=Object(i.combineReducers)({auth:N,message:A,option:D,dialogues:R}),M=a(34),U=a(35),w=Object(i.createStore)(I,Object(U.composeWithDevTools)(Object(i.applyMiddleware)(M.a))),G=(a(44),a(16)),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";return{type:d,payload:e}},H=function(e){return{type:j,payload:e}},Y=function(e){return{type:g,payload:e}},K=(a(45),a(6)),F=a.n(K),J=a(8),Q=a(9),B=(a(48),a(0)),W=function(e){var t=e.chat,a=F()("loading-sp m-auto",{"loading-sp--for-chat":t});return Object(B.jsx)("div",{className:a,children:Object(B.jsxs)("div",{className:"loading-pulse",children:[Object(B.jsx)("div",{}),Object(B.jsx)("div",{}),Object(B.jsx)("div",{})]})})},q=function(e){var t=e.divRef,a=e.dialogues,n=e.loading,s=e.curMessageType,c=e.dialogueListOpen,r=e.messageTypeChangeHandler,o=F()("dialogue-list bg-dark",{"dialogue-list--open shadow":c}),i=function(e,t){return F()("dialogue-list__item list-group-item text-light",{"dialogue-list__item--active":e===t})},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;try{return Object(B.jsx)(J.a,{className:"mr-3",icon:e[t]})}catch(a){return null}};return Object(B.jsxs)("div",{className:o,ref:t,children:[Object(B.jsx)("h3",{className:"sidebar-heading text-white h5 p-4 text-center",children:"Dialogue List"}),Object(B.jsx)("ul",{className:"dialogue-list__list-group list-group",children:n?Object(B.jsx)(W,{}):a.map((function(e){var t=e.id,a=e.icon,n=e.name;return Object(B.jsxs)("li",{className:i(t,s),onClick:function(e){return r(t,e)},children:[u(Q,a),Object(B.jsx)("span",{children:n})]},"dialogue"+t)}))})]})},z=a(23),V=a.n(z),X=function(){return function(e){e({type:O}),V.a.get("data/dialogues.json",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){var a=t.data;setTimeout((function(){e(function(e){return{type:m,payload:e}}(a))}),1e3)}),(function(t){e(function(e){return{type:f,payload:e}}(t))}))}},Z={LOCAL_STORAGE_KEY:"Local-Storage-Chat:messages",getChat:function(){return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)||"[]")},setChat:function(e){localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(e))}},$={LOCAL_STORAGE_KEY:"Local-Storage-Chat:user",getUser:function(){return localStorage.getItem(this.LOCAL_STORAGE_KEY)||""},setUser:function(e){localStorage.setItem(this.LOCAL_STORAGE_KEY,e)}},ee={LOCAL_STORAGE_KEY:"Local-Storage-Chat:option",CUR_MESSAGE_TYPE_ID:"CUR_MESSAGE_TYPE_ID",DIALOGUE_LIST_OPEN:"DIALOGUE_LIST_OPEN",getOption:function(e,t){var a=JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)||"{}");return a[e]||(a[e]={}),a[e][t]||""},setOption:function(e,t,a){var n=JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY)||"{}");n[e]||(n[e]={}),n[e][t]=a,localStorage.setItem(this.LOCAL_STORAGE_KEY,JSON.stringify(n))}},te="dialogListIgnor",ae=function(){var e=Object(o.c)((function(e){return e})),t=e.auth.curUser,a=e.option,s=a.dialogueListOpen,c=a.curMessageType,r=e.dialogues,i=r.dialogues,u=r.loading,d=Object(o.b)();Object(n.useEffect)((function(){d(X()),ee.getOption(t,ee.DIALOGUE_LIST_OPEN)&&d(k());var e=ee.getOption(t,ee.CUR_MESSAGE_TYPE_ID);d(Y(e||C.curMessageType))}),[]),Object(n.useEffect)((function(){ee.setOption(t,ee.DIALOGUE_LIST_OPEN,s)}),[s]);var g={divRef:Object(G.a)((function(){s&&d(k(!1))}),{ignoreClass:te}),dialogues:i,loading:u,curMessageType:c,dialogueListOpen:s,messageTypeChangeHandler:function(e,a){a.preventDefault(),ee.setOption(t,ee.CUR_MESSAGE_TYPE_ID,e),d(Y(e)),d(k(!1))}};return Object(B.jsx)(q,Object(l.a)({},g))},ne=function(e){return{type:p,payload:e}},se=function(e){return function(t){t({type:h}),function(){var e="Local-Storage-Chat:visited";return!!localStorage.getItem(e)||(localStorage.setItem(e,"true"),!1)}()||e.length>0?setTimeout((function(){t(ne(e))}),1e3):V.a.get("data/messages.json",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){var a=e.data;setTimeout((function(){t(ne(a))}),1e3)}),(function(e){t(function(e){return{type:v,payload:e}}(e))}))}},ce=(a(67),a(10)),re=(a(68),a(69),function(e){var t=e.onEditMessage,a=e.onDeleteMessage,n=e.divRef,s=e.messageEditPanel;return Object(B.jsxs)("div",{className:"navbar-chat__edit-panel",ref:n,children:[Object(B.jsx)("div",{className:"edit-message mr-3",children:Object(B.jsx)("button",{type:"button",title:"Edit message",className:"edit-message__btn btn btn-outline-light",onClick:function(e){return t(s,e)},children:Object(B.jsx)(J.a,{icon:Q.faPencilAlt})})}),Object(B.jsx)("div",{className:"edit-message",children:Object(B.jsx)("button",{type:"button",title:"Delete message",className:"edit-message__btn btn btn-outline-light",onClick:function(e){return a(s,e)},children:Object(B.jsx)(J.a,{icon:Q.faTrashAlt})})})]})}),oe="messageOutclickIgnor",ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.option})).messageEditPanel,a={onEditMessage:function(t,a){a.preventDefault(),e({type:b,payload:t})},onDeleteMessage:function(t,a){a.preventDefault(),e({type:x,payload:t})},divRef:Object(G.a)((function(){t&&e(H(0))}),{ignoreClass:oe}),messageEditPanel:t};return Object(B.jsx)(re,Object(l.a)({},a))},ue=function(e){var t=e.reFormatDate,a=e.curUser,n=e.dataProp,s=e.messageEditPanel,c=e.messagePanel,r=n.id,o=n.text,i=n.author,u=F()("message",{"message--my":a===i,"message--edited":s===r}),l=F()("message__block",Object(ce.a)({},oe,a===i));return Object(B.jsx)("div",{className:u,children:Object(B.jsxs)("div",{className:l,children:[Object(B.jsx)("div",{className:"message__text rounded py-2 px-3 mb-1",onClick:function(e){return c(r,e)},children:o}),Object(B.jsxs)("div",{className:"message__info small text-muted",children:[Object(B.jsx)("span",{className:"message__author",children:i}),Object(B.jsx)("span",{className:"message__date",children:t})]})]})})},le=function(e){var t=e.dataProp,a=Object(o.b)(),n=Object(o.c)((function(e){return e})),s=n.auth.curUser,c=n.option.messageEditPanel,r=t.author,i={reFormatDate:function(e){var t=new Date(e),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],n=t.getDate(),s=t.getHours(),c=t.getMinutes();return"".concat(n," ").concat(a," ").concat(s,":").concat(c)}(t.date),curUser:s,dataProp:t,messageEditPanel:c,messagePanel:function(e,t){t.preventDefault(),s===r&&a(H(e))}};return Object(B.jsx)(ue,Object(l.a)({},i))},de=function(e){var t=e.dialogueListOpen,a=e.messagesRef,n=e.loading,s=e.messages,c=F()("chat__box p-3 bg-white",{"chat__box--blured":t});return Object(B.jsx)("div",{className:c,ref:a,children:n?Object(B.jsx)(W,{chat:!0}):s.map((function(e){return Object(B.jsx)(le,{dataProp:e},e.id)}))})},ge=function(){var e=Object(o.b)(),t=Object(n.useRef)(null),a=Object(o.c)((function(e){return e})),s=a.message,c=s.messages,r=s.loading,i=a.option,u=i.dialogueListOpen,d=i.curMessageType,g=function(){t.current.scrollTo(0,t.current.scrollHeight)};Object(n.useEffect)((function(){g(),e(se(Z.getChat()))}),[]),Object(n.useEffect)((function(){g(),Z.setChat(c)}),[c,d]);var j={dialogueListOpen:u,messagesRef:t,loading:r,messages:c.filter((function(e){return e.type===d}))};return Object(B.jsx)(de,Object(l.a)({},j))},je=a(17),be=(a(70),function(e){var t=e.message,a=e.messageEditText,n=e.messageEditPanel,s=e.inputRef,c=e.changeHandler,r=e.enterForSubmit,o=e.clickForSubmit,i=F()("chat__form bg-light",Object(ce.a)({},oe,a===n));return Object(B.jsx)("form",{className:i,action:"#",children:Object(B.jsxs)("div",{className:"input-group",children:[Object(B.jsx)("input",{type:"textarea",placeholder:"Type a message",className:"form-control rounded-0 border-0 bg-light shadow-none",value:t,onChange:function(e){return c(e)},onKeyPress:function(e){return r(e,a)},ref:s}),Object(B.jsx)("div",{className:"input-group-append",children:Object(B.jsx)("button",{type:"submit",className:"btn btn-dark shadow-none",onClick:function(e){return o(e,a)},children:Object(B.jsx)(J.a,{icon:Q.faGreaterThan})})})]})})}),Oe=function(){var e,t=Object(n.useState)(""),a=Object(je.a)(t,2),s=a[0],c=a[1],r=Object(o.b)(),i=Object(n.useRef)(null),u=Object(o.c)((function(e){return e})),d=u.message.messages,g=u.auth.curUser,j=u.option,b=j.curMessageType,O=j.messageEditText,m=j.messageEditPanel,f={id:Date.now(),author:g,type:b,date:Date.now(),text:s};Object(n.useEffect)((function(){O&&((e=d.filter((function(e){return e.id===O}))).length&&c(e[0].text),setTimeout((function(){i.current.focus()}),100)),m!==O&&c("")}),[m,O]);var p=function(e,t){e.preventDefault(),""!==s.trim()&&(t?(r({type:_,payload:{idMessage:t,messageText:s}}),c("")):(r({type:E,payload:f}),c("")))},h={message:s,messageEditText:O,messageEditPanel:m,inputRef:i,changeHandler:function(e){c(e.target.value)},enterForSubmit:function(e,t){"Enter"===e.key&&p(e,t)},clickForSubmit:function(e,t){p(e,t)}};return Object(B.jsx)(be,Object(l.a)({},h))},me=function(e){return{type:S,payload:e}},fe=(a(71),function(e){var t=e.messageEditPanel,a=e.onLogoutHandler,n=e.onChatListToggle;return Object(B.jsxs)("nav",{className:"chat__nav navbar-chat navbar navbar-dark bg-dark shadow",children:[Object(B.jsx)("button",{className:"navbar-chat__toggler navbar-toggler ".concat(te),type:"button",onClick:function(e){return n(e)},children:Object(B.jsx)("span",{className:"navbar-toggler-icon"})}),Object(B.jsx)("h2",{className:"navbar-brand navbar-chat__name",children:"TS-Chat"}),t?Object(B.jsx)(ie,{}):Object(B.jsx)("button",{type:"button",className:"navbar-chat__logout btn btn-outline-light ".concat(te),onClick:function(e){return a(e)},children:"Logout"})]})}),pe=function(){var e=Object(o.b)(),t={messageEditPanel:Object(o.c)((function(e){return e.option})).messageEditPanel,onLogoutHandler:function(t){t.preventDefault(),$.setUser(""),e({type:y}),window.location.reload()},onChatListToggle:function(t){t.preventDefault(),e(k())}};return Object(B.jsx)(fe,Object(l.a)({},t))},he=function(){return Object(B.jsx)("div",{className:"chat-wrapper",children:Object(B.jsxs)("div",{className:"chat rounded-lg overflow-hidden shadow-lg",children:[Object(B.jsx)(ae,{}),Object(B.jsx)(pe,{}),Object(B.jsx)(ge,{}),Object(B.jsx)(Oe,{})]})})},ve=(a(72),function(e){var t=e.userName,a=e.onChangeHandler,n=e.onSubmitHandler;return Object(B.jsx)("div",{className:"login container-fluid",children:Object(B.jsxs)("div",{className:"row",children:[Object(B.jsx)("div",{className:"login__bg-image col-md-6 d-none d-md-flex"}),Object(B.jsx)("div",{className:"login__form col-md-6 bg-light d-flex align-items-center py-5",children:Object(B.jsx)("div",{className:"container",children:Object(B.jsx)("div",{className:"row",children:Object(B.jsxs)("div",{className:"col-lg-10 col-xl-7 mx-auto text-center",children:[Object(B.jsx)("h1",{className:"h3 mb-4",children:"LocalStorage Chat"}),Object(B.jsxs)("form",{children:[Object(B.jsx)("div",{className:"form-group mb-3",children:Object(B.jsx)("input",{id:"inputLogin",type:"text",placeholder:"Login",className:"form-control border-0 shadow-sm px-4",value:t,onChange:function(e){return a(e)}})}),Object(B.jsx)("div",{className:"form-group mb-3",children:Object(B.jsx)("input",{id:"inputPassword",type:"password",placeholder:"Password",className:"form-control border-0 shadow-sm px-4"})}),Object(B.jsx)("button",{type:"submit",className:"btn btn-dark btn-block text-uppercase mb-2 shadow-sm",onClick:function(e){return n(t,e)},children:"Sign in"})]})]})})})})]})})}),Ee=function(e){var t=Object(n.useState)(""),a=Object(je.a)(t,2),s=a[0],c=a[1],r=Object(o.b)();Object(n.useEffect)((function(){var e=$.getUser().trim();""!==e&&r(me(e))}),[]);var i={userName:s,onChangeHandler:function(e){e.preventDefault(),c(e.target.value)},onSubmitHandler:function(e,t){t.preventDefault();var a=e.trim();""!==a&&($.setUser(a),r(me(a)))}};return Object(B.jsx)(ve,Object(l.a)({},i))},_e=(a(73),function(e){var t=e.isAuth;return Object(B.jsx)(s.a.Fragment,{children:t?Object(B.jsx)(he,{}):Object(B.jsx)(Ee,{})})}),xe=function(e){var t={isAuth:Object(o.c)((function(e){return e.auth})).isAuth};return Object(B.jsx)(_e,Object(l.a)({},t))};r.a.render(Object(B.jsx)(s.a.StrictMode,{children:Object(B.jsx)(o.a,{store:w,children:Object(B.jsx)(xe,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.49425ab4.chunk.js.map