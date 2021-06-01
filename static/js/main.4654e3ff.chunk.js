(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{131:function(e,t,c){},320:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(34),r=c.n(s),i=(c(131),c(24)),o=c(6),l=c(322),u=c(54),d=(c(77),u.a.initializeApp({apiKey:"AIzaSyAjr3aXU6caYoIXgCJUhnibh3N_iusKP5U",authDomain:"chat-app-9b4de.firebaseapp.com",projectId:"chat-app-9b4de",storageBucket:"chat-app-9b4de.appspot.com",messagingSenderId:"196807906597",appId:"1:196807906597:web:985ce0fbca646147f176cc"}).auth()),b=c(1),j=function(){var e=Object(o.f)();return Object(b.jsx)("div",{className:"bg-white p-10 rounded-3xl ",id:"login-page",children:Object(b.jsxs)("div",{className:"",id:"login-card",children:[Object(b.jsx)("p",{className:"font-mono text-xl mb-5",children:"Welcome to my chat app"}),Object(b.jsxs)("div",{className:"flex justify-center items-center bg-blue-400 text-white py-2.5 rounded-xl text-center cursor-pointer mb-6",onClick:function(){return d.signInWithRedirect(new u.a.auth.GoogleAuthProvider)},children:[Object(b.jsx)(l.a,{className:"px-1.5"})," Sign In with Google"]}),Object(b.jsx)("div",{className:"flex justify-center items-center bg-facebook text-white py-2.5 rounded-xl text-center cursor-pointer",onClick:function(){return e.push("/login")},children:"Sign In"})]})})},p=c(13),h=a.a.createContext(),m=function(e){var t=e.children,c=Object(n.useState)(!0),a=Object(p.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),u=l[0],j=l[1],m=Object(o.f)();Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){j(e),r(!1),e&&m.push("/chats")}))}),[u,m]);var x={user:u};return Object(b.jsx)(h.Provider,{value:x,children:!s&&t})},x=c(17),f=c.n(x),O=c(25),g=c(35),v=(c(5),c(4)),w=c.n(v),y=function(){var e=Object(o.f)(),t=Object(n.useContext)(h).user,c=Object(n.useState)(!0),a=Object(p.a)(c,2),s=a[0],r=a[1],i=function(){var t=Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){t?w.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"842bab9d-e4c1-40fd-9100-92b0365ccae7","user-name":t.email,"user-secret":t.uid}}).then((function(){r(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),w.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"6dd9ae90-a8cc-4755-a0c8-df15d054cfb4"}}).then((function(){r(!1)})).catch((function(e){console.log(e)}))})):e.push("/")}),[t,e]),!t||s?"Loading ...":Object(b.jsxs)("div",{className:"w-full h-full bg-facebook",children:[Object(b.jsxs)("div",{className:" flex items-center justify-between w-full h-14 ",children:[Object(b.jsx)("div",{className:"text-2xl text-white ml-2.5",children:"Secret Chat App"}),Object(b.jsx)("div",{className:"text-xl text-white mr-5",onClick:i,children:"Logout"})]}),Object(b.jsx)(g.d,{height:"calc(80vh)",projectID:"842bab9d-e4c1-40fd-9100-92b0365ccae7",userName:t.email,userSecret:t.uid})]})},N=c(20),k=c(10),C=function(){var e=Object(o.f)(),t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),a=c[0],s=c[1],r=function(){var t=Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(e){var t=e.target.value;s(Object(k.a)(Object(k.a)({},a),{},Object(N.a)({},e.target.name,t)))};return Object(b.jsxs)("div",{className:"bg-white p-10 rounded-3xl",children:[Object(b.jsx)("div",{className:"flex justify-center items-center py-3",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.signInWithEmailAndPassword(a.email,a.password).then((function(e){})).catch((function(e){e.code;var t=e.message;console.log(t)}))},className:"flex flex-col justify-center items-end",children:[Object(b.jsxs)("label",{children:["Email:",Object(b.jsx)("input",{type:"text",name:"email",value:a.email,onChange:i,className:"border-black border-2 mb-4"})]}),Object(b.jsxs)("label",{children:["Password:",Object(b.jsx)("input",{type:"text",name:"password",value:a.password,onChange:i,className:"border-black border-2"})]}),Object(b.jsx)("div",{className:" w-full flex justify-center items-center mt-3",children:Object(b.jsx)("div",{className:"flex justify-center items-center bg-blue-600 text-white p-2 rounded-xl text-center cursor-pointer mb-6",children:Object(b.jsx)("button",{type:"submit",children:"Zaloguj"})})})]})}),Object(b.jsx)("div",{className:"flex justify-center items-center bg-blue-500 text-white p-2 rounded-xl text-center cursor-pointer mb-6",onClick:function(){e.push("/register")},children:"Nie masz konta? Zarejestruj si\u0119"}),Object(b.jsx)("div",{className:"flex justify-center items-center bg-blue-600 text-white py-2.5 rounded-xl text-center cursor-pointer mb-6",onClick:r,children:"Strona G\u0142\xf3wna"})]})},S=function(){var e=Object(o.f)(),t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),a=c[0],s=c[1],r=function(){var t=Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(e){var t=e.target.value;s(Object(k.a)(Object(k.a)({},a),{},Object(N.a)({},e.target.name,t)))};return Object(b.jsxs)("div",{className:"bg-white p-10 rounded-3xl ",children:[Object(b.jsx)("div",{className:"flex justify-center items-center py-3",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.createUserWithEmailAndPassword(a.email,a.password).then((function(e){e.user;d.signInWithEmailAndPassword(a.email,a.password).then((function(e){})).catch((function(e){e.code;var t=e.message;console.log(t)}))})).catch((function(e){e.code;var t=e.message;console.log(t)}))},className:"flex flex-col justify-center items-end",children:[Object(b.jsxs)("label",{children:["Email:",Object(b.jsx)("input",{type:"text",name:"email",value:a.email,onChange:i,className:"border-black border-2 mb-4"})]}),Object(b.jsxs)("label",{children:["Password:",Object(b.jsx)("input",{type:"text",name:"password",value:a.password,onChange:i,className:"border-black border-2"})]}),Object(b.jsxs)("div",{className:"flex justify-center items-center mt-3",children:[Object(b.jsx)("div",{className:"flex justify-center items-center bg-blue-400 text-white p-2 rounded-xl text-center cursor-pointer mb-6",onClick:function(){e.push("/login")},children:"Masz konto? Zaloguj si\u0119"}),Object(b.jsx)("div",{className:"flex justify-center items-center bg-blue-600 text-white p-2 rounded-xl text-center cursor-pointer mb-6",children:Object(b.jsx)("button",{type:"submit",children:"Rejestruj"})})]})]})}),Object(b.jsx)("div",{className:"flex justify-center items-center bg-blue-500 text-white py-2.5 rounded-xl text-center cursor-pointer mb-6",onClick:r,children:"Strona G\u0142\xf3wna"})]})},I=function(){return Object(b.jsx)("div",{className:" bg-blue-500 flex justify-center items-center",children:Object(b.jsx)(i.a,{children:Object(b.jsx)(m,{children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/chats",component:y}),Object(b.jsx)(o.a,{path:"/login",component:C}),Object(b.jsx)(o.a,{path:"/register",component:S}),Object(b.jsx)(o.a,{path:"/",component:j})]})})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,323)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root")),P()}},[[320,1,2]]]);
//# sourceMappingURL=main.4654e3ff.chunk.js.map