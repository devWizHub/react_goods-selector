(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(4),l=c(5),o=c(7),i=c(6),d=c(1),r=c.n(d),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(o.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam",isSelected:!0},e.handleSelectClick=function(t){e.setState({isSelected:!0,selectedGood:t})},e.handleRemoveClick=function(){e.setState({isSelected:!1,selectedGood:""})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this,t=this.state,c=t.selectedGood,n=t.isSelected;return Object(u.jsx)("div",{children:Object(u.jsxs)("main",{className:"section container",children:[n?Object(u.jsx)("div",{children:Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(c," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3","aria-label":"Clear selected good",onClick:function(){return e.handleRemoveClick()}})]})}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(t){return Object(u.jsxs)("tr",{"data-cy":"Good",className:"".concat(c===t?"has-background-success-light":""),children:[Object(u.jsx)("td",{children:c===t?Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return e.handleRemoveClick()},children:"-"}):Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleSelectClick(t)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})})}}]),c}(r.a.Component);s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5be62f48.chunk.js.map