(this["webpackJsonpts-react-tutorial"]=this["webpackJsonpts-react-tutorial"]||[]).push([[0],{51:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},57:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),u=(a(56),a(57),a(5));var o=function(e){var t=e.value,a=e.diff,r=e.onIncrease,c=e.onDiffNumPlus;return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"react-redux"),l.a.createElement("div",null,"store - container - component"),l.a.createElement("h2",null,t),l.a.createElement("button",{onClick:r},"+1"),l.a.createElement("button",{onClick:function(){return c(a)}},"+",a," jump Number"))},m=a(14),i="counter/INCREASE",s="counter/DIFFNUMPLUS",E=function(){return{type:i}},b=function(e){return{type:s,payload:e}},f={count:1};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return{count:e.count+1};case s:var a=Number(t.payload);return Object(m.a)({},e,{count:a+e.count});default:return e}},d=a(23);var h=function(){var e=Object(d.c)((function(e){return e.counter.count})),t=Object(d.b)(),a=Object(n.useState)(5),r=Object(u.a)(a,2),c=r[0],m=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,{value:e,diff:c,onIncrease:function(){t(E())},onDiffNumPlus:function(e){t(b(e))}}),l.a.createElement("input",{type:"text",onChange:function(e){m(e.target.value)},value:c}))};var p=function(){var e=Object(n.useState)("\ub9c8\uc158"),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),o=Object(u.a)(c,2),m=o[0],i=o[1],s=Object(n.useCallback)((function(e){r(e.target.value)}),[]);return Object(n.useEffect)((function(){return console.log("book name \ubcc0\uacbd"),function(){console.log("clean up")}}),[a]),Object(n.useEffect)((function(){return console.log("\ucd5c\ucd08 \ub9c8\uc6b4\ud2b8 \uc2e4\ud589"),i(7),function(){console.log("clean up")}}),[]),l.a.createElement("div",null,l.a.createElement("h1",null,"HooksUseEffect"),l.a.createElement("div",null,"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub420 \ub54c\ub9c8\ub2e4 \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud558\ub3c4\ub85d \ud558\ub294 Hooks"),l.a.createElement("h2",null,"useEffect Test 01, \ud2b9\uc815 \uac12 \uc5c5\ub370\uc774\ud2b8 \uc2dc \uc2e4\ud589"),l.a.createElement("input",{type:"text",onChange:s,value:a}),l.a.createElement("div",null,"Book State : ",a),l.a.createElement("h2",null,"useEffect Test 02, \ucd5c\ucd08 \ub9c8\uc6b4\ud2b8\uc5d0\uc11c\ub9cc \uc2e4\ud589"),l.a.createElement("div",null,"Mount State : ",m," => \ucd5c\ucd08 \ub9c8\uc6b4\ud2b8\uc5d0\uc11c\ub9cc \uc2e4\ud589(value 0 to 7)"))},g=a(33),O=a(26),j=a(34),k="auth/AUTHID",y={userId:""};var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)({},e,{userId:t.payload});default:return e}},S=a(45),w=a(46);var I=new(function(){function e(){Object(S.a)(this,e),this.fallbackStorage={},this.valid=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}}()}return Object(w.a)(e,[{key:"setItem",value:function(e,t){var a=JSON.stringify(t);this.valid?localStorage.setItem(e,a):this.fallbackStorage[e]=a}},{key:"getItem",value:function(e){var t=this.valid?localStorage.getItem(e):this.fallbackStorage[e];try{return JSON.parse(t||"")}catch(a){return null}}},{key:"removeItem",value:function(e){this.valid?localStorage.removeItem(e):delete this.fallbackStorage[e]}}]),e}()),M=a(21),R=a(9);function H(){var e=Object(g.a)(["\n  query {\n    myPage\n  }\n"]);return H=function(){return e},e}var U=Object(j.a)(H()),x=function(e){e.location.state||e.history.push("/");var t=Object(O.b)(U),a=t.loading,r=t.error,c=t.data,u=t.refetch;return Object(n.useEffect)((function(){return u(),function(){}}),[u]),l.a.createElement("div",null,l.a.createElement("p",null,a||r?"wow":c.myPage))};function N(){var e=Object(g.a)(["\n  mutation($email: String!, $password: String!) {\n    signIn(email: $email, password: $password) {\n      id\n      email\n    }\n  }\n"]);return N=function(){return e},e}var P=Object(j.a)(N()),F=function(e){var t=e.history,a=Object(d.b)(),n=Object(O.a)(P,{onCompleted:function(e){var n,l=e.signIn;a((n=l.id,{type:k,payload:n})),I.setItem("CURRENT_USER",l.id),setTimeout((function(){t.push({pathname:"/MyPage",state:{id:l.id}})}),1e3)}}),r=Object(u.a)(n,1)[0];return l.a.createElement("div",null,l.a.createElement(M.a,{exact:!0,path:"/MyPage",component:x}),l.a.createElement(R.b,{to:"/MyPage"},"MyPage"),l.a.createElement("label",null,l.a.createElement("b",null,"Username")),l.a.createElement("input",{type:"text",placeholder:"Enter Username",name:"uname",required:!0}),l.a.createElement("label",null,l.a.createElement("b",null,"Password")),l.a.createElement("input",{type:"password",placeholder:"Enter Password",name:"psw",required:!0}),l.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),r({variables:{email:"test@naver.com",password:"test1"}})}},"Login"),l.a.createElement("h1",null,"Home"),l.a.createElement("div",null,"\ub0b4 \ub9d8\ub300\ub85c \uacf5\ubd80"))};var T=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([1,2]),o=Object(u.a)(c,2),m=o[0],i=o[1],s=function(e){return 0===e.length?0:e.reduce((function(e,t){return e+t}))/e.length},E=Object(n.useMemo)((function(){return s(m)}),[m]);return console.log("\ub79c\ub354\ub9c1"),l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"UseMemo"),l.a.createElement("input",{value:a,onChange:function(e){r(e.target.value)}}),l.a.createElement("button",{onClick:function(){var e=m.concat([Number(a)]);i(e)}},"add"),l.a.createElement("h3",null,"useMemo\uac00 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294 \uacc4\uc0b0 \uac12\uc740 Input \ubc15\uc2a4\uc758 \uac12\uc774 \ubcc0\uacbd\ub420 \ub584\ub3c4 \ub80c\ub354\ub9c1\uc774 \uc9c4\ud589\ub41c\ub2e4"),l.a.createElement("div",null,"useMemo \uc801\uc6a9 \uc804 \ud3c9\uade0\uac12 \uacc4\uc0b0 : ",s(m)),l.a.createElement("h3",null,"useMemo\uac00 \uc801\uc6a9\ub418\uc5b4 List\uac00 \ubc14\ub014 \ub54c\ub9cc \ub80c\ub354\ub9c1\uc774 \uc9c4\ud589\ub41c\ub2e4"),l.a.createElement("div",null,"useMemo \uc801\uc6a9 \ud6c4 \ud3c9\uade0\uac12 : ",E),l.a.createElement("h2",null,"Number List"),l.a.createElement("ul",null,m.map((function(e,t){return l.a.createElement("li",{key:t},e)}))))};var D=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([2]),o=Object(u.a)(c,2),m=o[0],i=o[1],s=Object(n.useCallback)((function(e){r(e.target.value)}),[]),E=Object(n.useCallback)((function(){var e=m.concat([Number(a)]);i(e)}),[m,a]),b=Object(n.useMemo)((function(){return 0===(e=m).length?0:e.reduce((function(e,t){return e+t}))/e.length;var e}),[m]);return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"UseCallback"),l.a.createElement("div",null,"onChange\ub098 onInput\uc774\ub098 \ub4f1\ub4f1 e.target.value\ub85c \ubd80\ub974\ub294 \uac83\uacfc \uae30\ub2a5\uc740 \uac19\uc9c0\ub9cc, Render\ub97c \ud560 \ub54c \ud568\uc218\ub97c \uc7ac\uc0dd\uc131\ud558\uc9c0 \uc54a\ub294 \uc810\uc5d0 \uc788\uc5b4\uc11c \ubb34\uc870\uac74 \uc774\uac78 \uc0ac\uc6a9\ud574\uc57c\ud568"),l.a.createElement("br",null),l.a.createElement("input",{value:a,onChange:s}),l.a.createElement("button",{onClick:E},"add"),l.a.createElement("h3",null,"useMemo \uc801\uc6a9 \ud6c4 \ud3c9\uade0\uac12 : ",b),l.a.createElement("h2",null,"Number List"),l.a.createElement("ul",null,m.map((function(e,t){return l.a.createElement("li",{key:t},e)}))))},L=a(20),$=function(e,t){switch(t.type){case"INC":return{value:e.value+1,value2:e.value2+3};default:return!1}},q=function(e,t){return console.log(t),Object(m.a)({},e,Object(L.a)({},t.name,t.value))};var A=function(){var e=Object(n.useReducer)($,{value:10,value2:10}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useReducer)(q,{name:"",bio:""}),o=Object(u.a)(c,2),m=o[0],i=o[1],s=m.name,E=m.bio,b=function(e){i(e.target)};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{width:"50%",float:"left"}},l.a.createElement("h1",null,"useReducer"),l.a.createElement("div",null,"switch\uc5d0\uc11c default\ub85c false\ub97c \uc8fc\uae30 \ub300\ubb38\uc5d0 \uad6c\ubb38\uc5d0\uc11c \uc0bc\ud56d\uc5f0\uc0b0\uc790\ub97c \ud55c\ub2e4."),l.a.createElement("div",null,"value1 : ",!1!==a?a.value:1),l.a.createElement("div",null,"value2 : ",!1!==a?a.value2:1),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return r({type:"INC"})}},"+1")),l.a.createElement("div",{style:{width:"50%",float:"right"}},l.a.createElement("h1",null,"useReducer input"),l.a.createElement("div",null,"input\uc744 useReducer\ub85c useState\ub97c \uc548\uc4f0\uace0 \uac04\uc18c\ud654\ud558\uc790."),l.a.createElement("input",{name:"name",value:s,onChange:b}),l.a.createElement("input",{name:"bio",value:E,onChange:b}),l.a.createElement("div",null,"\uc774\ub984 : ",s),l.a.createElement("div",null,"bio : ",E)))};var J=function(){var e=Object(n.useRef)(0),t=Object(n.useState)(1),a=Object(u.a)(t,2),r=a[0],c=a[1];return console.log("============\ub79c\ub354\ub9c1============"),l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"useRef"),l.a.createElement("div",null,"ref \ubcc0\uc218\ub294 \uac12\uc774 \ubc14\ub00c\uc5b4\ub3c4 \ub79c\ub354\ub9c1\uc774 \uc548\ub428 \uc989 \uc544\ub798\uc758 ref.current \ub294 log\ub97c \ud655\uc778\ud558\uba74 \ubcc0\ud558\uc9c0\ub9cc, \ud654\uba74\uc5d0\uc11c\ub294 \ubcc0\ud558\uc9c0 \uc54a\uc74c"),l.a.createElement("button",{onClick:function(){console.log(e.current)}},"ref.current : ",e.current),l.a.createElement("button",{onClick:function(){var t,a=10*Math.random();t=a,e.current=t}},"ref_random"),l.a.createElement("button",{onClick:function(){var e=10*Math.random();c(e)}},"state : ",r))};function _(e,t){return Object(m.a)({},e,Object(L.a)({},t.name,t.value))}var B=function(){var e=function(e){var t=Object(n.useReducer)(_,e),a=Object(u.a)(t,2),l=a[0],r=a[1];return[l,function(e){r(e.target)}]}({name:"",nickname:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],c=a.name,o=a.nickname;return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"HooksCustom"),l.a.createElement("div",null,l.a.createElement("input",{name:"name",value:c,onChange:r}),l.a.createElement("input",{name:"nickname",value:o,onChange:r})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("b",null,"\uc774\ub984:")," ",c),l.a.createElement("div",null,l.a.createElement("b",null,"\ub2c9\ub124\uc784: "),o)))},W=[13,4,5,3],Q=W,z=[1,2,3],G=[].concat(z),K=[{id:1,name:"te"}],V=[].concat(K);V[0].id=1,console.log(K[0]===V[0]),console.log(K===V);var X=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"SimpleImmutability"),l.a.createElement("div",null,"\ubd88\ubcc0\uc131\uc744 \uc54c\uc544\ubcf4\uc790 ...data(\uc804\uac1c\uc5f0\uc0b0\uc790, \uc2a4\ud504\ub808\ub4dc\uc5f0\uc0b0\uc790) "),l.a.createElement("h3",null,W===Q?"array === immutabiltyArray return true":"\ub2e4\ub984"),l.a.createElement("h3",null,z===G?"\uac19\uc74c":"array2 === badArray return false"))};var Y=l.a.memo((function(){var e=Object(n.useRef)(1),t=Object(n.useState)({name:"",bio:""}),a=Object(u.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)({array:[],useless:null}),i=Object(u.a)(o,2),s=i[0],E=i[1],b=Object(n.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;c(Object(m.a)({},r,Object(L.a)({},a,[n])))}),[r]),f=Object(n.useCallback)((function(t){t.preventDefault();var a={id:e.current,name:r.name,bio:r.bio};E(Object(m.a)({},s,{array:s.array.concat(a)})),c({name:"",bio:""}),e.current++}),[r.bio,r.name,s]),v=Object(n.useCallback)((function(e){E(Object(m.a)({},s,{array:s.array.filter((function(t){return t.id!==e}))}))}),[s]);return l.a.createElement(n.Fragment,null,l.a.createElement("form",{onSubmit:f},l.a.createElement("input",{name:"name",onChange:b,value:r.name}),l.a.createElement("input",{name:"bio",onChange:b,value:r.bio}),l.a.createElement("button",{type:"submit"},"\ucd94\uac00")),l.a.createElement("ul",null,s.array.map((function(e){return l.a.createElement("li",{key:e.id,onClick:function(){return v(e.id)}},e.name,", ",e.bio)}))))})),Z=a(10),ee=a(15),te=a(22),ae=a(24),ne=a(6),le=a(30),re=a(50),ce=Object(M.f)(),ue=Object(ae.b)({uri:"http://localhost:4001/graphql",credentials:"include"}),oe=Object(re.a)((function(e,t){return{headers:{user_id:I.getItem("CURRENT_USER")||null}}})),me=Object(le.a)((function(e){var t=e.graphQLErrors,a=e.networkError;e.operation,e.forward;t&&t.map((function(e){e.message;var t=e.extensions;if(t)switch(t.code){case"data-exception":case"validation-failed":ce.push("/error");break;default:ce.push("/error"),console.log(t.code)}})),a&&(console.log("[Network error]: ".concat(a)),ce.push("/error"))})),ie=ne.a.from([oe,me,ue]),se=new ee.c({link:ie,cache:new te.a});var Ee=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"ERROR"),">")},be=Object(M.g)((function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(Z.a,{client:se},l.a.createElement("div",{className:"Content"},l.a.createElement(M.c,null,l.a.createElement(M.a,{exact:!0,path:"/",component:F}),l.a.createElement(M.a,{exact:!0,path:"/CounterContainer",component:h}),l.a.createElement(M.a,{exact:!0,path:"/HooksUseEffect",component:p}),l.a.createElement(M.a,{exact:!0,path:"/HooksUseMemo",component:T}),l.a.createElement(M.a,{exact:!0,path:"/HooksUseMemoTouseCallback",component:D}),l.a.createElement(M.a,{exact:!0,path:"/HooksUseReducer",component:A}),l.a.createElement(M.a,{exact:!0,path:"/HooksRef",component:J}),l.a.createElement(M.a,{exact:!0,path:"/ImmutabilitySimple",component:X}),l.a.createElement(M.a,{exact:!0,path:"/ImmutabilityPractice",component:Y}),l.a.createElement(M.a,{exact:!0,path:"/HooksCustom",component:B}),l.a.createElement(M.a,{exact:!0,path:"/MyPage",component:x}),l.a.createElement(M.a,{path:"*",component:Ee}),l.a.createElement(M.a,{path:"/error",component:Ee}))),l.a.createElement("div",{className:"Mmenu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(R.b,{to:"/"},"HOME")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/MyPage"},"MyPage")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/CounterContainer"},"CounterContainer")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/HooksUseEffect"},"HooksUseEffect")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/HooksUseMemo"},"HooksUseMemo")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/HooksUseMemoTouseCallback"},"HooksUseMemoTouseCallback")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/HooksUseReducer"},"HooksUseReducer")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/HooksRef"},"HooksRef")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/ImmutabilitySimple"},"ImmutabilitySimple")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/ImmutabilityPractice"},"ImmutabilityPractice")),l.a.createElement("li",null,l.a.createElement(R.b,{to:"/HooksCustom"},"HooksCustom"))))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=a(25),ve=Object(fe.b)({counter:v,auth:C}),de=Object(fe.c)(ve);c.a.render(l.a.createElement(R.a,null,l.a.createElement(d.a,{store:de},l.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.0279a85a.chunk.js.map