(this["webpackJsonpnavigation-component"]=this["webpackJsonpnavigation-component"]||[]).push([[0],{12:function(e,t,n){e.exports=n(30)},17:function(e,t,n){},18:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(5),s=n.n(o),l=(n(17),n(18),n(6)),c=n(7),r=n(11),u=n(10),d=n(8),m=n.n(d),f=(n(28),function(e){var t=e.label,n=e.section,o=e.className,s=e.handleClick,l=Object(a.useRef)(null);return i.a.createElement("li",{className:"App-navbar-item"},i.a.createElement("a",{href:"#".concat(n),className:o,onClick:function(){return s(l.current,n)}},i.a.createElement("span",{ref:l},t)))}),p=(n(29),function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setSlidePosition=function(e){a.setState({slidePosition:{left:e.offsetLeft,width:e.offsetWidth}})},a.handleClick=function(e,t){a.setSlidePosition(e),a.setState({selectedItem:e,selectedCity:t})},a.handleResize=function(){a.state.resizing||a.setState({resizing:!0});var e=a.state.selectedItem;e&&a.setSlidePosition(e),a.enableTransition()},a.getMenuClass=function(e){return a.state.selectedCity===e?"selected":""},a.timer=null,a.state={slidePosition:{left:0,width:0},selectedItem:null,selectedCity:"",resizing:!1},a.enableTransition=m()((function(){a.setState({resizing:!1})}),200),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this,t=this.props.navigationData,n=this.state.resizing?"resizing":"";return t&&i.a.createElement("nav",{className:"App-navbar"},i.a.createElement("ul",{className:"App-navbar-container"},t.map((function(t){var n=t.label,a=t.section;return i.a.createElement(f,{label:n,key:a,section:a,className:e.getMenuClass(a),handleClick:e.handleClick})}))),i.a.createElement(h,{className:n,slidePosition:this.state.slidePosition}))}}]),n}(a.Component)),h=function(e){var t=e.slidePosition,n=e.className;return i.a.createElement("div",{className:"App-navbar-underline-container"},i.a.createElement("span",{className:"App-navbar-underline ".concat(n),style:t}))},v=p,b=n(9);var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(v,{navigationData:b.cities})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e){e.exports=JSON.parse('{"cities":[{"section":"cupertino","label":"Cupertino"},{"section":"new-york-city","label":"New York City"},{"section":"london","label":"London"},{"section":"amsterdam","label":"Amsterdam"},{"section":"tokyo","label":"Tokyo"},{"section":"hong-kong","label":"Hong Kong"},{"section":"sydney","label":"Sydney"}]}')}},[[12,1,2]]]);
//# sourceMappingURL=main.e02f9410.chunk.js.map