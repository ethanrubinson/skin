!function(){function r(r,n){var t=new Error('Cannot find module "'+r+'"'+(n?' from "'+n+'"':""));return t.code="MODULE_NOT_FOUND",t}function n(r){this.id=this.filename=r,this.loaded=!1,this.exports=void 0}function t(r,n,t){var i=t&&t.globals;if(O[r]=n,i)for(var e=b||global,o=0;o<i.length;o++){var a=i[o],u=E[r]=d(r);e[a]=u.exports}}function i(r,n){$[r]=n}function e(r,n){j[r]=n}function o(r,n){M[r]=n}function a(r,n,t){I[r+"/"+n]=t}function u(r){var n,t=0,i=r.length;for(n=0;n<i;n++){var e=r[n];"."===e||(".."===e?t--:(r[t]=e,t++))}return 1===t?"/":(t>2&&0===r[t-1].length&&t--,r.length=t,r.join("/"))}function f(r,n){var t=n.split("/");return u(("/"==r?[""]:r.split("/")).concat(t))}function s(r){var n,t=r.lastIndexOf(".");return-1===t||-1!==(n=r.lastIndexOf("/"))&&n>t?null:r.substring(0,t)}function l(r){r=r.substring(1);var n=r.indexOf("/");"@"===r.charAt(1)&&(n=r.indexOf("/",n+1));var t=-1===n?r.length:n;return[r.substring(0,t),r.substring(t)]}function c(r,n){"/"===r.charAt(r.length-1)&&(r=r.slice(0,-1));var t=M[r];if(t)return t;var i,e,o=l(n),a=o[0],u=r.indexOf("/");u<0?(i=r,e=""):("@"===r.charAt(0)&&(u=r.indexOf("/",u+1)),i=r.substring(0,u),e=r.substring(u));var f=I[a+"/"+i];if(f){var s="/"+i+"$"+f;return e&&(s+=e),s}}function v(r,n){var t;if("."===r.charAt(0))t=f(n,r);else if("/"===r.charAt(0))t=u(r.split("/"));else{for(var i=m.length,e=0;e<i;e++){var o=m[e]+r,a=v(o,n);if(a)return a}t=c(r,n)}if(t){var l;void 0!==(l=$[t])&&(l||(l="index"),t=f(t,l));var d=j[t];d&&(t=d);var h=O[t];if(void 0===h){var g;if(null===(g=s(t))||void 0===(h=O[g]))return;t=g}return[t,h]}}function d(t,i){if(!t)throw r("");var e=v(t,i);if(!e)throw r(t,i);var o=e[0],a=y[o];if(void 0!==a)return a;if(E.hasOwnProperty(o))return E[o];var u=e[1];return a=new n(o),y[o]=a,a.load(u),a}function h(r,n){return d(r,n).exports}function g(r,n){if(!(n&&!1===n.wait||_))return A.push([r,n]);h(r,"/")}function p(){_=!0;for(var r;r=A.length;){var n=A;A=[];for(var t=0;t<r;t++){var i=n[t];g(i[0],i[1])}if(!_)break}}function x(r){m.push(r)}var b;if("undefined"!=typeof window){if(b=window,b.$_mod)return;b.global=b}var w,O={},m=[],_=!1,A=[],y={},I={},M={},$={},j={},D={},E={};n.cache=y;var F=n.prototype;F.load=function(n){var t=this.id;if(n&&n.constructor===Function){var i=t.lastIndexOf("/"),e=t.substring(0,i),o=D[e]||(D[e]={}),a=function(r){return(o[r]||(o[r]=d(r,e))).exports};a.resolve=function(n){if(!n)throw r("");var t=v(n,e);if(!t)throw r(n,e);return t[0]},a.cache=y,a.runtime=w,this.exports={},n.call(this,a,this.exports,this,t,e)}else this.exports=n;this.loaded=!0};var N=0,P=function(){--N||p()};F.__runtime=w={def:t,installed:a,run:g,main:i,remap:e,builtin:o,require:h,resolve:v,join:f,ready:p,searchPath:x,loaderMetadata:function(r){F.__loaderMetadata=r},pending:function(){return _=!1,N++,{done:P}}},b?b.$_mod=w:module.exports=w}();
$_mod.installed("@ebay/skin$3.1.0","makeup-expander","0.0.3");
$_mod.main("/makeup-expander$0.0.3","");
$_mod.installed("makeup-expander$0.0.3","custom-event-polyfill","0.3.0");
$_mod.main("/custom-event-polyfill$0.3.0","custom-event-polyfill");
$_mod.def("/custom-event-polyfill$0.3.0/custom-event-polyfill",function(e,t,n,o,r){try{var l=new window.CustomEvent("test");if(l.preventDefault(),!0!==l.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var u=function(e,t){var n,o;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o=n.preventDefault,n.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};u.prototype=window.Event.prototype,window.CustomEvent=u}});
$_mod.run("/custom-event-polyfill$0.3.0/custom-event-polyfill");
$_mod.installed("makeup-expander$0.0.3","makeup-next-id","0.0.1");
$_mod.main("/makeup-next-id$0.0.1","");
$_mod.def("/makeup-next-id$0.0.1/index",function(i,t,d,e,n){"use strict";var o={};d.exports=function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"nid",d=""===t?"nid":t;o[d]=o[d]||0,i.id||i.setAttribute("id",d+"-"+o[d]++)}});
$_mod.installed("makeup-expander$0.0.3","makeup-exit-emitter","0.0.2");
$_mod.main("/makeup-exit-emitter$0.0.2","");
$_mod.installed("makeup-exit-emitter$0.0.2","custom-event-polyfill","0.3.0");
$_mod.def("/makeup-exit-emitter$0.0.2/index",function(e,t,n,o,i){"use strict";function u(e,t,n){!1===t.contains(e.relatedTarget)&&t.dispatchEvent(new CustomEvent(n+"Exit",{detail:{toElement:e.relatedTarget,fromElement:e.target},bubbles:!1}))}function s(e){u(e,this,"focus")}function c(e){u(e,this,"mouse")}function r(e){e.addEventListener("focusout",s)}function d(e){e.removeEventListener("focusout",s)}function f(e){e.addEventListener("mouseout",c)}function m(e){e.removeEventListener("mouseout",c)}function a(e){r(e),f(e)}function E(e){d(e),m(e)}n.exports={addFocusExit:r,addMouseExit:f,removeFocusExit:d,removeMouseExit:m,add:a,remove:E}});
$_mod.installed("makeup-expander$0.0.3","makeup-focusables","0.0.1");
$_mod.main("/makeup-focusables$0.0.1","");
$_mod.def("/makeup-focusables$0.0.1/index",function(e,t,n,r,a){"use strict";var i=["a[href]","area[href]","button:not([disabled])","embed","iframe","input:not([disabled])","object","select:not([disabled])","textarea:not([disabled])","*[tabindex]","*[contenteditable]"],o=i.join();n.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Array.prototype.slice.call(e.querySelectorAll(o));return!0===t&&(n=n.filter(function(e){return"-1"!==e.getAttribute("tabindex")})),n}});
$_mod.def("/makeup-expander$0.0.3/index",function(e,t,i,s,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(){this.keyDownFlag=!0}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},l=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),r=e("/makeup-next-id$0.0.1/index"),c=e("/makeup-exit-emitter$0.0.2/index"),d=e("/makeup-focusables$0.0.1/index"),u={autoCollapse:!0,click:!1,contentSelector:".expander__content",focus:!1,focusManagement:null,hostSelector:".expander__host",hover:!1};i.exports=function(){function e(t,i){o(this,e),this.options=a({},u,i),this.el=t,this.hostEl=t.querySelector(this.options.hostSelector),this.expandeeEl=t.querySelector(this.options.contentSelector),r(this.el,"expander"),this.expandeeEl.id=this.el.id+"-content",c.add(this.el),c.add(this.expandeeEl),this._keyDownListener=h.bind(this),this._clickListener=this.toggle.bind(this),this._focusListener=this.expand.bind(this),this._hoverListener=this.expand.bind(this),this._exitListener=this.collapse.bind(this),this._expandeeExitListener=this.collapse.bind(this),this._leaveListener=this.collapse.bind(this),this.expandeeEl&&(this.hostEl.setAttribute("aria-controls",this.expandeeEl.id),this.hostEl.setAttribute("aria-expanded","false"),this.click=this.options.click,this.focus=this.options.focus,this.hover=this.options.hover)}return l(e,[{key:"isExpanded",value:function(){return"true"===this.hostEl.getAttribute("aria-expanded")}},{key:"collapse",value:function(){!0===this.isExpanded()&&(this.hostEl.setAttribute("aria-expanded","false"),this.el.dispatchEvent(new CustomEvent("collapsed",{bubbles:!0,detail:this.expandeeEl})))}},{key:"expand",value:function(e){if(!1===this.isExpanded()){if(this.hostEl.setAttribute("aria-expanded","true"),!0===e){var t=this.options.focusManagement;if("content"===t)this.expandeeEl.setAttribute("tabindex","-1"),this.expandeeEl.focus();else if("focusable"===t)d(this.expandeeEl)[0].focus();else if("interactive"===t)d(this.expandeeEl,!0)[0].focus();else if(null!==t){var i=this.expandeeEl.querySelector("#"+t);i&&i.focus()}}this.el.dispatchEvent(new CustomEvent("expanded",{bubbles:!0,detail:this.expandeeEl}))}}},{key:"toggle",value:function(){!0===this.isExpanded()?this.collapse():this.expand(this.keyDownFlag),this.keyDownFlag=!1}},{key:"click",set:function(e){!0===e?(this.hostEl.addEventListener("keydown",this._keyDownListener),this.hostEl.addEventListener("click",this._clickListener),!0===this.options.autoCollapse&&this.expandeeEl.addEventListener("focusExit",this._exitListener)):(this.hostEl.removeEventListener("keydown",this._keyDownListener),this.hostEl.removeEventListener("click",this._clickListener),!0===this.options.autoCollapse&&this.expandeeEl.removeEventListener("focusExit",this._exitListener))}},{key:"focus",set:function(e){!0===e?(this.hostEl.addEventListener("focus",this._focusListener),!0===this.options.autoCollapse&&this.el.addEventListener("focusExit",this._expandeeExitListener)):(this.hostEl.removeEventListener("focus",this._focusListener),!0===this.options.autoCollapse&&this.el.removeEventListener("focusExit",this._expandeeExitListener))}},{key:"hover",set:function(e){!0===e?(this.hostEl.addEventListener("mouseenter",this._hoverListener),!0===this.options.autoCollapse&&this.el.addEventListener("mouseleave",this._leaveListener)):(this.hostEl.removeEventListener("mouseenter",this._hoverListener),!0===this.options.autoCollapse&&this.el.removeEventListener("mouseleave",this._leaveListener))}}]),e}()});
$_mod.installed("@ebay/skin$3.1.0","makeup-roving-tabindex","0.0.3");
$_mod.main("/makeup-roving-tabindex$0.0.3","");
$_mod.installed("makeup-roving-tabindex$0.0.3","makeup-navigation-emitter","0.0.4");
$_mod.main("/makeup-navigation-emitter$0.0.4","");
$_mod.installed("makeup-navigation-emitter$0.0.4","custom-event-polyfill","0.3.0");
$_mod.def("/makeup-navigation-emitter$0.0.4/util",function(t,e,r,i,o){"use strict";function n(t){return Array.prototype.slice.call(t)}r.exports={nodeListToArray:n}});
$_mod.installed("makeup-navigation-emitter$0.0.4","makeup-key-emitter","0.0.2");
$_mod.main("/makeup-key-emitter$0.0.2","");
$_mod.installed("makeup-key-emitter$0.0.2","custom-event-polyfill","0.3.0");
$_mod.def("/makeup-key-emitter$0.0.2/util",function(e,r,t,o,a){"use strict";function i(e){return e.charAt(0).toLowerCase()+e.slice(1)}var n={13:"Enter",27:"Escape",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown"};t.exports={keyCodeToKeyMap:n,uncapitalizeFirstLetter:i}});
$_mod.def("/makeup-key-emitter$0.0.2/index",function(e,t,n,o,a){"use strict";function i(e,t,n){if(!e.shiftKey){var o=v.keyCodeToKeyMap[e.keyCode];switch(o){case"Enter":case"Escape":case"Spacebar":case"PageUp":case"PageDown":case"End":case"Home":case"ArrowLeft":case"ArrowUp":case"ArrowRight":case"ArrowDown":t.dispatchEvent(new CustomEvent(v.uncapitalizeFirstLetter(o+"Key"+n),{detail:e,bubbles:!0}));break;default:return}}}function r(e){i(e,this,"Down")}function c(e){i(e,this,"Up")}function s(e){e.addEventListener("keydown",r)}function d(e){e.addEventListener("keyup",c)}function u(e){e.removeEventListener("keydown",r)}function f(e){e.removeEventListener("keyup",c)}function p(e){s(e),d(e)}function y(e){u(e),f(e)}var v=e("/makeup-key-emitter$0.0.2/util");n.exports={addKeyDown:s,addKeyUp:d,removeKeyDown:u,removeKeyUp:f,add:p,remove:y}});
$_mod.installed("makeup-navigation-emitter$0.0.4","makeup-exit-emitter","0.0.2");
$_mod.def("/makeup-navigation-emitter$0.0.4/index",function(t,e,n,i,o){"use strict";function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t){t.forEach(function(t,e){t.setAttribute(w,e)})}function d(){this.atStart()?this.options.wrap&&(this.index=this.items.length-1):this.index--}function h(){this.atEnd()?this.options.wrap&&(this.index=0):this.index++}function c(t){var e=t.target.dataset.makeupIndex;void 0!==e&&(this.index=e)}function l(){this.index=0}function f(){this.index=this.items.length}function p(){null!==this.options.autoReset&&(this._index=this.options.autoReset,this._el.dispatchEvent(new CustomEvent("navigationModelReset",{detail:{toIndex:this.options.autoReset},bubbles:!1})))}function v(){this.items=_.nodeListToArray(this._el.querySelectorAll(this._itemSelector)),u(this.items),this._el.dispatchEvent(new CustomEvent("navigationModelMutation"))}var y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},_=t("/makeup-navigation-emitter$0.0.4/util"),x=t("/makeup-key-emitter$0.0.2/index"),m=t("/makeup-exit-emitter$0.0.2/index"),w="data-makeup-index",E={autoInit:0,autoReset:null,wrap:!1},L=function t(e,n,i){a(this,t),this.options=b({},E,i),this._el=e,this._itemSelector=n,this.items=_.nodeListToArray(e.querySelectorAll(n))},k=function(t){function e(t,n,i){a(this,e);var o=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));return null!==o.options.autoInit&&(o._index=o.options.autoInit,o._el.dispatchEvent(new CustomEvent("navigationModelInit",{detail:{toIndex:o.options.autoInit},bubbles:!1}))),o}return r(e,t),y(e,[{key:"atEnd",value:function(){return this.index===this.items.length-1}},{key:"atStart",value:function(){return this.index<=0}},{key:"index",get:function(){return this._index},set:function(t){t!==this.index&&(this._el.dispatchEvent(new CustomEvent("navigationModelChange",{detail:{toIndex:t,fromIndex:this.index},bubbles:!1})),this._index=t)}}]),e}(L),g=function(){function t(e,n){a(this,t),this.model=n,this._keyPrevListener=d.bind(n),this._keyNextListener=h.bind(n),this._keyHomeListener=l.bind(n),this._keyEndListener=f.bind(n),this._clickListener=c.bind(n),this._focusExitListener=p.bind(n),this._observer=new MutationObserver(v.bind(n)),u(n.items),x.addKeyDown(e),m.addFocusExit(e),e.addEventListener("arrowLeftKeyDown",this._keyPrevListener),e.addEventListener("arrowRightKeyDown",this._keyNextListener),e.addEventListener("arrowUpKeyDown",this._keyPrevListener),e.addEventListener("arrowDownKeyDown",this._keyNextListener),e.addEventListener("homeKeyDown",this._keyHomeListener),e.addEventListener("endKeyDown",this._keyEndListener),e.addEventListener("click",this._clickListener),e.addEventListener("focusExit",this._focusExitListener),this._observer.observe(e,{childList:!0,subtree:!0})}return y(t,null,[{key:"createLinear",value:function(e,n,i){return new t(e,new k(e,n,i))}}]),t}();n.exports=g});
$_mod.def("/makeup-roving-tabindex$0.0.3/util",function(t,r,e,o,i){"use strict";function n(t){return Array.prototype.slice.call(t)}e.exports={nodeListToArray:n}});
$_mod.def("/makeup-roving-tabindex$0.0.3/index",function(t,e,n,i,o){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(){var t=this._navigationEmitter.model.index;this._items=p.nodeListToArray(this._el.querySelectorAll(this._itemSelector)),this._items.forEach(function(e,n){n!==t?e.setAttribute("tabindex","-1"):e.setAttribute("tabindex","0")})}function d(t){this._index=t.detail.toIndex,this._items.forEach(function(t){t.setAttribute("tabindex","-1")}),this._items[t.detail.toIndex].setAttribute("tabindex","0")}function c(t){this._index=t.detail.toIndex,this._items.forEach(function(t){t.setAttribute("tabindex","-1")}),this._items[t.detail.toIndex].setAttribute("tabindex","0")}function l(t){var e=this._items[t.detail.fromIndex],n=this._items[t.detail.toIndex];e&&e.setAttribute("tabindex","-1"),n&&(n.setAttribute("tabindex","0"),n.focus()),this._el.dispatchEvent(new CustomEvent("rovingTabindexChange",{detail:{toIndex:t.detail.toIndex,fromIndex:t.detail.fromIndex}}))}function f(t,e,n){return new v(t,e,n)}var h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},b=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_=t("/makeup-navigation-emitter$0.0.4/index"),p=t("/makeup-roving-tabindex$0.0.3/util"),x={autoReset:null,index:0},m=function t(e){s(this,t),this._el=e,this._onMutationListener=u.bind(this),this._onChangeListener=l.bind(this),this._onInitListener=d.bind(this),this._onResetListener=c.bind(this),e.addEventListener("navigationModelMutation",this._onMutationListener),e.addEventListener("navigationModelChange",this._onChangeListener),e.addEventListener("navigationModelInit",this._onInitListener),e.addEventListener("navigationModelReset",this._onResetListener)},v=function(t){function e(t,n,i){s(this,e);var o=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o._options=h({},x,i),o._itemSelector=n,o._items=p.nodeListToArray(t.querySelectorAll(n)),o._navigationEmitter=_.createLinear(t,n,{autoInit:o._options.index,autoReset:o._options.autoReset}),o}return a(e,t),b(e,[{key:"wrap",set:function(t){this._navigationEmitter.model.options.wrap=t}}]),e}(m);n.exports={createLinear:f}});
$_mod.installed("@ebay/skin$3.1.0","makeup-key-emitter","0.0.2");
$_mod.installed("@ebay/skin$3.1.0","makeup-prevent-scroll-keys","0.0.1");
$_mod.main("/makeup-prevent-scroll-keys$0.0.1","");
$_mod.def("/makeup-prevent-scroll-keys$0.0.1/index",function(e,n,o,t,d){"use strict";function r(e){(e.keyCode>=32&&e.keyCode<=36||38===e.keyCode||40===e.keyCode)&&e.preventDefault()}function i(e){e.addEventListener("keydown",r)}function k(e){e.removeEventListener("keydown",r)}o.exports={add:i,remove:k}});
$_mod.def("/@ebay/skin$3.1.0/docs/src/js/ds6/main",function(e,t,n,r,c){function o(e){return Array.prototype.slice.call(e)}var a=e("/makeup-expander$0.0.3/index"),i=e("/makeup-roving-tabindex$0.0.3/index"),u=e("/makeup-key-emitter$0.0.2/index"),d=e("/makeup-prevent-scroll-keys$0.0.1/index");o(document.querySelectorAll('.btn:not([aria-disabled="true"])')).forEach(function(e,t){e.addEventListener("click",function(e){alert("You clicked "+this)})}),o(document.querySelectorAll(".expand-btn-example")).forEach(function(e,t){e.addEventListener("click",function(e){var t="true"===this.getAttribute("aria-expanded");this.setAttribute("aria-expanded",!t)})}),o(document.querySelectorAll("[role=menu]")).forEach(function(e,t){i.createLinear(e,"[role^=menuitem]",{autoReset:0})}),o(document.querySelectorAll(".menu, .fake-menu")).forEach(function(e,t){new a(e,{click:!0,focusManagement:"interactive",hostSelector:".expand-btn",contentSelector:".menu__items, .fake-menu__items"});u.addKeyDown(e),e.addEventListener("escapeKeyDown",function(){this.querySelector(".expand-btn").focus()})}),o(document.querySelectorAll("[role^=menuitem]")).forEach(function(e,t){d.add(e)})});
$_mod.run("/@ebay/skin$3.1.0/docs/src/js/ds6/main");