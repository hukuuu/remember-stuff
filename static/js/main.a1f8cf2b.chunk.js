(this["webpackJsonpremember-stuff"]=this["webpackJsonpremember-stuff"]||[]).push([[0],{20:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),o=n(12),s=n.n(o),r=(n(20),n(6)),i=n(2),a=n(3),u=n(4),j=n(13),d=n.n(j),b=n(14),f=n(15),x=n(37),h=d()(Object(b.persist)((function(e){return{things:[],add:function(t){console.log("add",t),e(Object(f.a)((function(e){e.things.push(Object(a.a)({id:Object(x.a)()},t))})))},update:function(t){console.log("update",t),e((function(e){return{things:e.things.map((function(e){return e.id===t.id?t:e}))}}))},del:function(t){console.log("delete",t),e((function(e){return{things:e.things.filter((function(e){return e.id!==t}))}}))},lastWorkout:0,setLastWorkout:function(){e((function(){return{lastWorkout:Date.now()}}))}}}),{name:"remember-stuff"})),O=n(0),m={showDelete:!0},p=function(e){var t=e.thing,n=e.onSave,l=e.onCancel,o=e.onDelete,s=e.config,r=void 0===s?m:s,i=Object(c.useState)(t.title),j=Object(u.a)(i,2),d=j[0],b=j[1],f=Object(c.useState)(t.body),x=Object(u.a)(f,2),h=x[0],p=x[1];Object(c.useEffect)((function(){b(t.title),p(t.body)}),[t]);var v=r.showDelete;return Object(O.jsxs)("div",{className:"flex flex-col flex-1 w-full  pt-8 ",children:[Object(O.jsx)("div",{className:"flex flex-col flex-1 px-8",children:Object(O.jsxs)("form",{className:"flex flex-col flex-1",children:[Object(O.jsxs)("div",{className:"flex flex-col flex-1 mb-8",children:[Object(O.jsx)("label",{className:"block text-sm mb-2",htmlFor:"title",children:"Title"}),Object(O.jsx)("textarea",{className:"h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",rows:3,id:"title",type:"text",placeholder:"",value:d,onChange:function(e){return b(e.target.value)}})]}),Object(O.jsxs)("div",{className:"flex flex-col",style:{flex:2},children:[Object(O.jsx)("label",{className:"block text-sm mb-2",htmlFor:"details",children:"Details"}),Object(O.jsx)("textarea",{rows:15,className:"h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"details",type:"details",placeholder:"",value:h,onChange:function(e){return p(e.target.value)}})]})]})}),Object(O.jsxs)("div",{className:"flex h-10 items-center justify-between border-t-2 px-8 ",children:[Object(O.jsx)("button",{className:"",type:"button",onClick:function(){return n(Object(a.a)(Object(a.a)({},t),{},{title:d,body:h}))},children:"[Save]"}),v&&Object(O.jsx)("button",{className:"",type:"button",onClick:function(){window.confirm("Confirm Deletion?")&&o(t.id)},children:"[Delete]"}),Object(O.jsx)("button",{className:"",type:"button",onClick:l,children:"[Cancel]"})]})]})},v=n(7),g={title:"",body:""},y=function(){var e=Object(i.f)(),t=h((function(e){return e.add})),n=Object(c.useState)(g),l=Object(u.a)(n,2),o=l[0],s=l[1];return Object(O.jsx)(p,{thing:o,onSave:function(e){var n=e.title,c=e.body;console.log("onsave",n,c),t({title:n,body:c,memoryModel:Object(v.defaultModel)(15),lastReview:Date.now()}),s(Object(a.a)({},g))},onCancel:function(){e(-1)},config:{showDelete:!1}})},w=function(e){var t=e.onGood,n=e.onBad;return Object(O.jsxs)("div",{className:"flex h-10 justify-evenly items-center border-t-2",children:[Object(O.jsx)("button",{className:"",onClick:t,children:"[\u2764\ufe0f Like]"}),Object(O.jsx)("button",{className:"",onClick:n,children:"[\ud83d\udca9 Dislike]"})]})},N=function(e){var t=e.thing;return Object(O.jsxs)("div",{className:"scrollbar flex flex-1 flex-col p-8 overflow-y-scroll",children:[Object(O.jsx)("p",{className:"text-3xl font-semibold text-center text-highlight",children:t.title}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"text-lg text-center",children:t.body})]})},k=function(e){return(Date.now()-e)/6e4},C=function(){return Object(O.jsx)("div",{className:"flex flex-1 flex-col justify-center items-center text-xl p-8",children:Object(O.jsxs)("div",{children:["You don't have any Quotes yet. Why don't you"," ",Object(O.jsx)(r.b,{className:"underline",to:"/add",children:"add"})," ","some?"]})})},D=function(){return Object(O.jsxs)("div",{className:"flex flex-1 flex-col justify-center items-center text-xl p-8",children:[Object(O.jsx)("p",{className:"text-5xl mb-8",children:"\xaf\\_(\u30c4)_/\xaf"}),"All good for now. ",Object(O.jsx)("br",{})," Come back later!"]})},S=function(e){var t=e.things,n=Object(c.useState)(0),l=Object(u.a)(n,2),o=l[0],s=l[1],r=h((function(e){return e.update})),i=h((function(e){return[e.lastWorkout,e.setLastWorkout]})),j=Object(u.a)(i,2),d=j[0],b=j[1],f=function(e,t){return function(){console.log("before update: ",e);var n=Object(a.a)(Object(a.a)({},e),{},{memoryModel:Object(v.updateRecall)(e.memoryModel,t,1,k(e.lastReview)),lastReview:Date.now()});console.log("new value: ",n),r(n),o+1>=x.length&&b(Date.now()),s(o+1)}},x=Object(c.useMemo)((function(){return t.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{recallProbability:Object(v.predictRecall)(e.memoryModel,k(e.lastReview),!0)})})).sort((function(e,t){return e.recallProbability-t.recallProbability})).filter((function(e){return e.recallProbability<.8}))}),[d]);if(!t.length)return Object(O.jsx)(C,{});if(o>=x.length)return Object(O.jsx)(D,{});var m=x[o];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{thing:m}),Object(O.jsx)(w,{onGood:f(m,!1),onBad:f(m,!0)})]})},M=function(){var e=h((function(e){return e.things}));return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S,{things:e})})},W=function(){var e=Object(i.g)().id,t=Object(i.f)(),n=h(Object(c.useCallback)((function(t){return t.things.find((function(t){return t.id===e}))}),[e])),l=h((function(e){return e.update})),o=h((function(e){return e.del})),s=function(){t(-1)};return n?Object(O.jsx)(p,{thing:n,onDelete:function(e){o(e),s()},onCancel:s,onSave:l}):Object(O.jsx)("div",{children:"Item not found!"})},R=function(){return Object(O.jsx)("div",{className:"flex flex-1 flex-col justify-center items-center text-xl p-8",children:Object(O.jsxs)("div",{children:["Nothing to edit. Why don't you"," ",Object(O.jsx)(r.b,{className:"underline",to:"/add",children:"add"})," ","some quotes?"]})})},F=function(){var e=h((function(e){return e.things}));return e.length?Object(O.jsx)("ul",{className:"mt-12 px-12",children:e.map((function(e,t){return Object(O.jsx)("li",{className:"py-1 ",children:Object(O.jsxs)(r.b,{to:"/edit/".concat(e.id),children:[t+1+". ",e.title]})},t)}))}):Object(O.jsx)(R,{})},P=function(e){var t=e.to,n=e.text;return Object(O.jsxs)(r.b,{className:"",to:t,children:["[",n,"]"]})};function B(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)("div",{className:"text-primary bg-primary max-w-md mx-auto flex flex-col flex-grow w-full  font-mono overflow-y-hidden py-3 ",children:[Object(O.jsxs)("nav",{className:"flex h-10 justify-evenly items-center border-b-2",children:[Object(O.jsx)(P,{to:"/",text:"Home"}),Object(O.jsx)(P,{to:"/add",text:"Add"}),Object(O.jsx)(P,{to:"/edit",text:"Edit"})]}),Object(O.jsx)("div",{className:"flex flex-1 flex-col overflow-y-hidden",children:Object(O.jsxs)(i.c,{children:[Object(O.jsx)(i.a,{exact:!0,path:"/",element:Object(O.jsx)(M,{})}),Object(O.jsx)(i.a,{path:"/add",element:Object(O.jsx)(y,{})}),Object(O.jsx)(i.a,{path:"/edit",element:Object(O.jsx)(F,{})}),Object(O.jsx)(i.a,{path:"/edit/:id",element:Object(O.jsx)(W,{})})]})})]})})}s.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a1f8cf2b.chunk.js.map