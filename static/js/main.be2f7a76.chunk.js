(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{15:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var c,r,a,o,i,d=t(1),s=t.n(d),b=t(7),j=t.n(b),l=(t(15),t(4)),u=t(6),x=t(9),p=t(2),O=t(3),h=O.a.button(c||(c=Object(p.a)(["\nmargin: 10px;\ntext-transform: uppercase;\nfont-size: 14px;\npadding: 15px;\ncolor: rgb(85, 42, 85);\nfont-weight: 600;\nbox-shadow: 4px 5px 8px rgb(85, 42, 85);\n border-radius: 5px;\n cursor: pointer;\n"]))),g=t(0);function f(e){var n=e.options,t=e.onLeaveFeedback;return n.map((function(e){return Object(g.jsx)(h,{type:"button",onClick:function(){return t(e)},children:e},e)}))}var v,k=O.a.section(r||(r=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 700;\n"]))),m=O.a.div(a||(a=Object(p.a)(["\n  padding-left: 10px;\n"]))),w=O.a.ul(o||(o=Object(p.a)(["\n  padding-inline-start: 0px;\n"]))),y=O.a.li(i||(i=Object(p.a)(["\n  border: 1px solid rgb(85, 42, 85);\n  color: black;\n  margin-bottom: 5px;\n  padding: 10px;\n  width: 300px;\n  box-shadow: 5px 6px 9px rgb(85, 42, 85);\n  border-radius: 5px;\n  list-style: none;\n"])));function P(e){var n=e.good,t=e.neutral,c=e.bad,r=e.total,a=e.positivePercentage;return Object(g.jsx)(m,{children:Object(g.jsx)(k,{children:Object(g.jsxs)(w,{children:[Object(g.jsxs)(y,{children:["Good: ",n," "]}),Object(g.jsxs)(y,{children:["Neutral: ",t," "]}),Object(g.jsxs)(y,{children:["Bad: ",c," "]}),Object(g.jsxs)(y,{children:["Total: ",r," "]}),Object(g.jsxs)(y,{children:["Positive Feedback: ",a,"% "]})]})})})}var F,S=O.a.h2(v||(v=Object(p.a)(["\n  font-size: 24px;\n  margin-left: 13px;\n  color: #2d012d;\n"])));function z(e){var n=e.title,t=e.children;return Object(g.jsxs)("section",{children:[Object(g.jsx)(S,{children:n}),t]})}var B,J=O.a.p(F||(F=Object(p.a)(["\nmargin-left: 15px;\ncolor: #2d012d;\n"])));function L(e){var n=e.message;return Object(g.jsx)(J,{children:n})}var M=O.a.div(B||(B=Object(p.a)(["\npadding: 20px;\n"])));function N(){var e=Object(d.useState)({good:0,neutral:0,bad:0}),n=Object(x.a)(e,2),t=n[0],c=n[1],r=function(){return Object.values(t).reduce((function(e,n){return e+n}),0)},a=r(),o=function(e){return e=r(),Math.round(100*t.good/e)}(a),i=a>0;return Object(g.jsxs)(M,{children:[Object(g.jsx)(z,{title:"Please leave feedback",children:Object(g.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:function(e){c((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(l.a)({},e,n[e]+1))}))}})}),Object(g.jsxs)(z,{title:"Statistics",children:[i&&Object(g.jsx)(P,{good:t.good,neutral:t.neutral,bad:t.bad,total:a,positivePercentage:o}),!i&&Object(g.jsx)(L,{message:"No feedback given"})]})]})}j.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(N,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.be2f7a76.chunk.js.map