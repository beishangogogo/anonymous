(function(e){function t(t){for(var c,a,s=t[0],l=t[1],u=t[2],b=0,d=[];b<s.length;b++)a=s[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);i&&i(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(c=!1)}c&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},o={app:0},r=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var i=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b44":function(e,t,n){},"2d04":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function o(e,t,n,o,r,a){var s=Object(c["resolveComponent"])("Navigation"),l=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(s),Object(c["createVNode"])(l)],64)}var r=function(e){return Object(c["pushScopeId"])("data-v-0baef3a6"),e=e(),Object(c["popScopeId"])(),e},a={class:"navbar text-light w-100 d-flex justify-content-between"},s={class:"nav-text m-0"},l={class:"nav_logo"},u=Object(c["createTextVNode"])("VThu"),i=r((function(){return Object(c["createElementVNode"])("div",{class:"nav-freetext"},[Object(c["createElementVNode"])("small",null,"寧鳴而死，不默而生。")],-1)})),b={class:"about"},d=Object(c["createTextVNode"])("關於");function p(e,t,n,o,r,p){var m=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("div",l,[Object(c["createVNode"])(m,{class:"about-href",to:"/"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})]),i]),Object(c["createElementVNode"])("div",b,[Object(c["createVNode"])(m,{to:"/about",class:"about-href"},{default:Object(c["withCtx"])((function(){return[d]})),_:1})])])}var m={name:"Navigation"},f=(n("bafd"),n("6b0d")),j=n.n(f);const O=j()(m,[["render",p],["__scopeId","data-v-0baef3a6"]]);var v=O,h={components:{Navigation:v}};n("6b5f");const g=j()(h,[["render",o]]);var y=g,N=n("6c02"),x={class:"jumbotron vh-100 d-flex flex-column main row h-100 m-0"};function V(e,t,n,o,r,a){var s=Object(c["resolveComponent"])("JoinScreen"),l=Object(c["resolveComponent"])("ChatScreen");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[o.user?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(s,{key:0,connect:e.setConnect},null,8,["connect"])),o.user?(Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:1})):Object(c["createCommentVNode"])("",!0)])}n("b0c0");var k={class:"col-8 d-flex flex-column p-0 justify-content-between p-3 border border-top-0 chatScreen"},S={class:"d-flex flex-column justify-content-between chat"},E={class:"messages"},w={class:"text"},C={class:"username fw-bold"},B={class:"chatfield p-2"},_={class:"chatbox-wrapper"};function I(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",k,[Object(c["createElementVNode"])("div",S,[Object(c["createElementVNode"])("div",E,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.storeMessage,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t,class:Object(c["normalizeClass"])(["d-flex gap-2 w-75 mb-4 bubble",{self:o.session==e.name}])},[Object(c["createElementVNode"])("div",w,[Object(c["createElementVNode"])("div",C,Object(c["toDisplayString"])(e.name),1),Object(c["createElementVNode"])("div",B,Object(c["toDisplayString"])(e.content),1)])],2)})),128))])]),Object(c["createElementVNode"])("div",_,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"text",class:"chatbox px-3 p-2",placeholder:"Send a message...",id:"message","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.message.content=e}),onKeyup:t[1]||(t[1]=Object(c["withKeys"])((function(){return o.sendContent&&o.sendContent.apply(o,arguments)}),["enter"]))},null,544),[[c["vModelText"],o.message.content]])])])}n("e9c4");var M=n("5502"),J={name:"ChatScreen",setup:function(){var e=Object(M["b"])(),t={content:null},n=sessionStorage.getItem("user"),o=Object(c["computed"])((function(){return e.state.messages})),r=Object(c["computed"])((function(){return e.state.stompClient}));function a(){var e=sessionStorage.getItem("user");r.value.send("/app/send",{},JSON.stringify({name:e,content:t.content})),t.content=""}return{sendContent:a,storeMessage:o,stompClient:r,message:t,session:n}}};n("b32a");const T=j()(J,[["render",I],["__scopeId","data-v-28b8af80"]]);var P=T,D=(n("a15b"),{class:"join-container d-flex flex-column justify-content-center align-items-center h-75"}),A={class:"form-group mt-25"};function U(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",D,[Object(c["createElementVNode"])("div",A,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.user.name=e}),placeholder:"Please entry name"},null,512),[[c["vModelText"],o.user.name]]),Object(c["createElementVNode"])("button",{class:"btn mt-2",onClick:t[1]||(t[1]=function(){return o.join&&o.join.apply(o,arguments)})},"Join")])])}var F=n("cc7d"),H=n.n(F),K=n("74d1"),z=n.n(K),G={name:"JoinScreen",setup:function(){var e={name:null},t=null,n=Object(M["b"])();function c(){o(),sessionStorage.setItem("user",e.name),le.push("/home")}function o(){var c=H()("http://localhost:9000/websocket");t=z.a.over(c),t.connect({},(function(){n.commit("setupStomp",t),sessionStorage.setItem("user",e.name),t.subscribe("/topic",(function(e){n.commit("addMessage",JSON.parse(e.body))}))}))}return{user:e,join:c,setConnect:o}}};n("6ff2");const L=j()(G,[["render",U],["__scopeId","data-v-584874cc"]]);var q=L,Q={name:"Home",components:{JoinScreen:q,ChatScreen:P},setup:function(){var e=sessionStorage.getItem("user");return{user:e}}};const R=j()(Q,[["render",V]]);var W=R,X=function(e){return Object(c["pushScopeId"])("data-v-2a04cdf6"),e=e(),Object(c["popScopeId"])(),e},Y={class:"about"},Z=X((function(){return Object(c["createElementVNode"])("h3",null,"“听，是森林的声音，它隐身于花丛间，祈求著”",-1)})),$=X((function(){return Object(c["createElementVNode"])("p",null,[Object(c["createTextVNode"])("此項目由 "),Object(c["createElementVNode"])("span",{style:{color:"steelblue"}},"wbs"),Object(c["createTextVNode"])(" 編寫，僅作練習使用")],-1)})),ee=X((function(){return Object(c["createElementVNode"])("a",{href:""},"Github",-1)})),te=[Z,$,ee];function ne(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Y,te)}var ce={name:"About"};n("f9af");const oe=j()(ce,[["render",ne],["__scopeId","data-v-2a04cdf6"]]);var re=oe,ae=[{path:"/",name:"Join",component:q},{path:"/home",name:"Home",component:W},{path:"/about",name:"About",component:re}],se=Object(N["a"])({history:Object(N["b"])(),routes:ae}),le=se,ue=Object(M["a"])({state:{user:[{name:null}],stompClient:null,messages:[{name:null,content:null}],helloMessage:{message:null}},mutations:{setUser:function(e,t){e.user.name=t},setupStomp:function(e,t){e.stompClient=t},addMessage:function(e,t){e.messages.push(t)}},actions:{},modules:{}}),ie=n("c3a1"),be=(n("d9b6"),n("ab8b"),Object(c["createApp"])(y));be.use(ie["a"]),be.use(ue),be.use(le),be.mount("#app")},"6a99":function(e,t,n){},"6b5f":function(e,t,n){"use strict";n("7a06")},"6ff2":function(e,t,n){"use strict";n("2d04")},"7a06":function(e,t,n){},b32a:function(e,t,n){"use strict";n("6a99")},bafd:function(e,t,n){"use strict";n("1b44")},d25b:function(e,t,n){},f9af:function(e,t,n){"use strict";n("d25b")}});
//# sourceMappingURL=app.028cda67.js.map