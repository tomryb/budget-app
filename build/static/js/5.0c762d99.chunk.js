(this["webpackJsonpbudget-app"]=this["webpackJsonpbudget-app"]||[]).push([[5],{75:function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"fetchBudget",(function(){return i})),n.d(r,"fetchBudgetedCategories",(function(){return s})),n.d(r,"addTransaction",(function(){return d}));var a={};n.r(a),n.d(a,"fetchAllCategories",(function(){return f}));var c=n(31),u=n.n(c),o=n(36),i=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/budgets/").concat(n,"/?_embed=transactions"));case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.next=3,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/budgets/").concat(n,"/budgetCategories"));case 3:return r=t.sent,t.next=6,r.json();case 6:return a=t.sent,t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.budgetId,r=e.data,t.next=3,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/budgets/").concat(n,"/transactions"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,"/categories/?_expand=parentCategory"));case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.a={budget:r,common:a}},76:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t){var e=Number(t);return new Intl.NumberFormat("pl",{style:"currency",currency:"PLN"}).format(e)},a=function(t){var e=new Date(t);return new Intl.DateTimeFormat("pl").format(e)}},81:function(t,e,n){"use strict";n.r(e);var r,a,c=n(16),u=n(0),o=n.n(u),i=n(77),s=n(23),d=n(76),f=n(75),l=n(38),p=n(4),b=n(3),O=b.default.ul(r||(r=Object(p.a)(["\n  > li + li {\n    margin-top: ","px;\n  }\n\n  li {\n    margin: 0;\n  }\n"])),(function(t){return t.theme.spacing.xs})),_=b.default.li(a||(a=Object(p.a)(["\n  border: 1px solid ",";\n  padding: ","px;\n  display: flex;\n  justify-content: space-between;\n\n  > *:nth-child(1) {\n    flex: 4;\n  }\n  > *:nth-child(2) {\n    flex: 2;\n  }\n  > *:nth-child(3) {\n    flex: 3;\n  }\n  > *:nth-child(4) {\n    flex: 1;\n  }\n"])),(function(t){return t.theme.colors.gray.dark}),(function(t){return t.theme.spacing.xs}));var g=function(){var t=Object(s.d)(["budget",{id:1}],f.a.budget.fetchBudget).data,e=Object(s.d)("allCategories",f.a.common.fetchAllCategories).data,n=Object(s.d)(["budgetedCategories",{id:1}],f.a.budget.fetchBudgetedCategories).data,r=Object(u.useContext)(l.a.store).selectedParentCategoryId,a=Object(u.useMemo)((function(){return"undefined"===typeof r?t.transactions:null===r?t.transactions.filter((function(t){return!n.some((function(e){return e.categoryId===t.categoryId}))})):t.transactions.filter((function(t){try{return e.find((function(e){return e.id===t.categoryId})).parentCategory.name===r}catch(n){return!1}}))}),[e,n,r,t.transactions]),p=Object(u.useMemo)((function(){return Object(i.groupBy)(a,(function(t){return new Date(t.date).getUTCDate()}))}),[a]);return o.a.createElement(O,null,Object.entries(p).map((function(t){var n=Object(c.a)(t,2),r=n[0],a=n[1];return o.a.createElement("li",{key:r},o.a.createElement("ul",null,a.map((function(t){return o.a.createElement(_,{key:t.id},o.a.createElement("div",null,t.description),o.a.createElement("div",null,Object(d.a)(t.amount)),o.a.createElement("div",null,Object(d.b)(t.date)),o.a.createElement("div",null,(e.find((function(e){return e.id===t.categoryId}))||{}).name))}))))})))};n.d(e,"default",(function(){return g}))}}]);
//# sourceMappingURL=5.0c762d99.chunk.js.map