(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.bootstrap-vue"],{f479:function(t,e,n){"use strict";n.d(e,"a",(function(){return Wt}));var r=n("2b0e"),o="undefined"!=typeof window,i="undefined"!=typeof document,c="undefined"!=typeof navigator,u=o&&i&&c,a=o?window:{},s=i?document:{},l=c?navigator:{},f=(l.userAgent||"").toLowerCase(),p=(f.indexOf("jsdom"),/msie|trident/.test(f),function(){var t=!1;if(u)try{var e={get passive(){t=!0}};a.addEventListener("test",e,e),a.removeEventListener("test",e,e)}catch(e){t=!1}}(),u&&("ontouchstart"in s.documentElement||l.maxTouchPoints),u&&Boolean(a.PointerEvent||a.MSPointerEvent),u&&"IntersectionObserver"in a&&"IntersectionObserverEntry"in a&&"intersectionRatio"in a.IntersectionObserverEntry.prototype),h=Array,b=Boolean,d=(Date,Number),v=(RegExp,String),y=[h,v],m=[b,v],g=[d,v],O=/^\d+$/;function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}function P(t){var e=D();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return k(this,n)}}function k(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){var e="function"==typeof Map?new Map:void 0;return(E=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return x(t,arguments,R(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),A(r,t)})(t)}function x(t,e,n){return(x=D()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&A(o,n.prototype),o}).apply(null,arguments)}function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=o?a.Element:function(t){S(n,t);var e=P(n);function n(){return j(this,n),e.apply(this,arguments)}return n}(E(Object));o&&a.HTMLElement,o&&a.SVGElement,o&&a.File;function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var T=function(t){return M(t)},I=function(t){return void 0===t},z=function(t){return null===t},C=function(t){return I(t)||z(t)},B=function(t){return"function"===T(t)},N=function(t){return"string"===T(t)},F=function(t){return Array.isArray(t)},L=function(t){return null!==t&&"object"===M(t)},$=function(t){return"[object Object]"===Object.prototype.toString.call(t)},q=function(t){return t instanceof Date},H=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Array.prototype.concat.apply([],e)},W=function(t){return t},J=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,n=parseInt(t,10);return isNaN(n)?e:n};function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(Object(n),!0).forEach((function(e){V(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var K=function(t){return Object.keys(t)},Q=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},X=function(t){return G({},t)};function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(n),!0).forEach((function(e){tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function et(t){return function(t){if(Array.isArray(t))return nt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return nt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nt(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var rt=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return F(e)?e.reduce((function(e,n){return[].concat(et(e),[t(n,n)])}),[]):$(e)?K(e).reduce((function(n,r){return Z(Z({},n),{},tt({},r,t(e[r],e[r])))}),{}):n},ot=["xs","sm","md","lg","xl"],it=function(t){var e,n,r=(e=null,Object.create(e,n));return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var i=JSON.stringify(n);return r[i]=r[i]||t.apply(null,n)}},ct=r.a.prototype,ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=ct.$bvConfig;return n?n.getConfigValue(t,e):rt(e)},at=function(){return ut("breakpoints",ot)},st=it((function(){return at()})),lt=function(){return rt(st())},ft=(it((function(){var t=lt();return t[0]="",t})),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return C(t)?"":F(t)||$(t)&&t.toString===Object.prototype.toString?JSON.stringify(t,null,e):String(t)});function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ht(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){bt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var dt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=!0===n;return r=o?r:n,ht(ht(ht({},t?{type:t}:{}),o?{required:o}:I(e)?{}:{default:L(e)?function(){return e}:e}),I(r)?{}:{validator:r})},vt=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W;return(F(t)?t.slice():K(t)).reduce((function(t,r){return t[n(r)]=e[r],t}),{})},yt=function(t,e,n){return ht(ht({},rt(t)),{},{default:function(){var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return e?ut("".concat(t,".").concat(e),n):ut(t,{})}(n,e,t.default);return B(r)?r():r}})},mt=function(t,e){return K(t).reduce((function(n,r){return ht(ht({},n),{},bt({},r,yt(t[r],r,e)))}),{})},gt=(yt({},"","").default.name,_.prototype),Ot=(["button","[href]:not(.disabled)","input","select","textarea","[tabindex]","[contenteditable]"].map((function(t){return"".concat(t,":not(:disabled):not([disabled])")})).join(", "),gt.matches||gt.msMatchesSelector||gt.webkitMatchesSelector),wt=(gt.closest,a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.msRequestAnimationFrame||a.oRequestAnimationFrame||function(t){return setTimeout(t,16)}),jt=(a.MutationObserver||a.WebKitMutationObserver||a.MozMutationObserver,function(t){return!(!t||t.nodeType!==Node.ELEMENT_NODE)}),St=function(t,e){return!!jt(t)&&Ot.call(t,e)},Pt=function t(e,n){if(e===n)return!0;var r=q(e),o=q(n);if(r||o)return!(!r||!o)&&e.getTime()===n.getTime();if(r=F(e),o=F(n),r||o)return!(!r||!o)&&function(t,e){if(t.length!==e.length)return!1;for(var n=!0,r=0;n&&r<t.length;r++)n=Pt(t[r],e[r]);return n}(e,n);if(r=L(e),o=L(n),r||o){if(!r||!o)return!1;if(K(e).length!==K(n).length)return!1;for(var i in e){var c=Q(e,i),u=Q(n,i);if(c&&!u||!c&&u||!t(e[i],n[i]))return!1}}return String(e)===String(n)};function kt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var Et="__bv__visibility_observer",xt=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.callback=n.callback,this.margin=n.margin||0,this.once=n.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver(r)}var e,n,r;return e=t,(n=[{key:"createObserver",value:function(t){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&B(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(t){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}t.context.$nextTick((function(){wt((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},n=Boolean(e.isIntersecting||e.intersectionRatio>0);n!==this.visible&&(this.visible=n,this.callback(n),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}])&&kt(e.prototype,n),r&&kt(e,r),t}(),Dt=function(t){var e=t[Et];e&&e.stop&&e.stop(),delete t[Et]},At=function(t,e,n){var r=e.value,o=e.modifiers,i={margin:"0px",once:!1,callback:r};K(o).forEach((function(t){O.test(t)?i.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(i.once=!0)})),Dt(t),t[Et]=new xt(t,i,n),t[Et]._prevModifiers=X(o)},Rt={bind:At,componentUpdated:function(t,e,n){var r=e.value,o=e.oldValue,i=e.modifiers;i=X(i),!t||r===o&&t[Et]&&Pt(i,t[Et]._prevModifiers)||At(t,{value:r,modifiers:i},n)},unbind:function(t){Dt(t)}},_t=n("b42e");function Mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Tt,It='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',zt=mt({alt:dt(v),blank:dt(b,!1),blankColor:dt(v,"transparent"),block:dt(b,!1),center:dt(b,!1),fluid:dt(b,!1),fluidGrow:dt(b,!1),height:dt(g),left:dt(b,!1),right:dt(b,!1),rounded:dt(m,!1),sizes:dt(y),src:dt(v),srcset:dt(y),thumbnail:dt(b,!1),width:dt(g)},"BImg"),Ct=r.a.extend({name:"BImg",functional:!0,props:zt,render:function(t,e){var n,r=e.props,o=e.data,i=r.alt,c=r.src,u=r.block,a=r.fluidGrow,s=r.rounded,l=J(r.width)||null,f=J(r.height)||null,p=null,h=H(r.srcset).filter(W).join(","),b=H(r.sizes).filter(W).join(",");return r.blank&&(!f&&l?f=l:!l&&f&&(l=f),l||f||(l=1,f=1),c=function(t,e,n){var r=encodeURIComponent(It.replace("%{w}",ft(t)).replace("%{h}",ft(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(l,f,r.blankColor||"transparent"),h=null,b=null),r.left?p="float-left":r.right?p="float-right":r.center&&(p="mx-auto",u=!0),t("img",Object(_t.a)(o,{attrs:{src:c,alt:i,width:l?ft(l):null,height:f?ft(f):null,srcset:h||null,sizes:b||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||a,"w-100":a,rounded:""===s||!0===s},Mt(n,"rounded-".concat(s),N(s)&&""!==s),Mt(n,p,p),Mt(n,"d-block",u),n)}))}});function Bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Nt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Bt(Object(n),!0).forEach((function(e){Ft(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Lt,$t,qt=($t=["blank"],K(Lt=zt).filter((function(t){return-1===$t.indexOf(t)})).reduce((function(t,e){return G(G({},t),{},V({},e,Lt[e]))}),{})),Ht=mt(Nt(Nt({},qt),{},Ft({blankColor:dt(v,"transparent"),blankHeight:dt(g),blankSrc:dt(v,null),blankWidth:dt(g),offset:dt(g,360)},"show",dt(b,!1))),"BImgLazy"),Wt=r.a.extend({name:"BImgLazy",directives:{"b-visible":Rt},props:Ht,data:function(){return{isShown:this.show}},computed:{computedSrc:function(){var t=this.blankSrc;return!t||this.isShown?this.src:t},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){var t=this.width;return this.isShown?t:this.blankWidth||t},computedHeight:function(){var t=this.height;return this.isShown?t:this.blankHeight||t},computedSrcset:function(){var t=H(this.srcset).filter(W).join(",");return!this.blankSrc||this.isShown?t:null},computedSizes:function(){var t=H(this.sizes).filter(W).join(",");return!this.blankSrc||this.isShown?t:null}},watch:(Tt={},Ft(Tt,"show",(function(t,e){if(t!==e){var n=!p||t;this.isShown=n,n!==t&&this.$nextTick(this.updateShowProp)}})),Ft(Tt,"isShown",(function(t,e){t!==e&&this.updateShowProp()})),Tt),mounted:function(){this.isShown=!p||this.show},methods:{updateShowProp:function(){this.$emit("update:show",this.isShown)},doShow:function(t){!t&&null!==t||this.isShown||(this.isShown=!0)}},render:function(t){var e,n=[];this.isShown||n.push({name:"b-visible",value:this.doShow,modifiers:(e={},Ft(e,"".concat(J(this.offset,0)),!0),Ft(e,"once",!0),e)});return t(Ct,{directives:n,props:Nt({src:this.computedSrc,blank:this.computedBlank,width:this.computedWidth,height:this.computedHeight,srcset:this.computedSrcset||null,sizes:this.computedSizes||null},vt(qt,this.$props))})}})}}]);
//# sourceMappingURL=npm.bootstrap-vue.7aff5f7a.js.map