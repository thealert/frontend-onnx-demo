var xw=Object.defineProperty;var Sw=(e,t,r)=>t in e?xw(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Vl=(e,t,r)=>Sw(e,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Tw={};/*!
 * Vue.js v2.7.16
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */var Xe=Object.freeze({}),fe=Array.isArray;function oe(e){return e==null}function P(e){return e!=null}function Ie(e){return e===!0}function kw(e){return e===!1}function Ei(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"||typeof e=="boolean"}function Ce(e){return typeof e=="function"}function We(e){return e!==null&&typeof e=="object"}var Js=Object.prototype.toString;function et(e){return Js.call(e)==="[object Object]"}function Cw(e){return Js.call(e)==="[object RegExp]"}function Ch(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function gs(e){return P(e)&&typeof e.then=="function"&&typeof e.catch=="function"}function Iw(e){return e==null?"":Array.isArray(e)||et(e)&&e.toString===Js?JSON.stringify(e,Ew,2):String(e)}function Ew(e,t){return t&&t.__v_isRef?t.value:t}function wi(e){var t=parseFloat(e);return isNaN(t)?e:t}function wt(e,t){for(var r=Object.create(null),i=e.split(","),n=0;n<i.length;n++)r[i[n]]=!0;return t?function(a){return r[a.toLowerCase()]}:function(a){return r[a]}}wt("slot,component",!0);var zw=wt("key,ref,slot,slot-scope,is");function rr(e,t){var r=e.length;if(r){if(t===e[r-1]){e.length=r-1;return}var i=e.indexOf(t);if(i>-1)return e.splice(i,1)}}var Aw=Object.prototype.hasOwnProperty;function He(e,t){return Aw.call(e,t)}function Cr(e){var t=Object.create(null);return function(i){var n=t[i];return n||(t[i]=e(i))}}var Ow=/-(\w)/g,_r=Cr(function(e){return e.replace(Ow,function(t,r){return r?r.toUpperCase():""})}),Nw=Cr(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Mw=/\B([A-Z])/g,zi=Cr(function(e){return e.replace(Mw,"-$1").toLowerCase()});function Rw(e,t){function r(i){var n=arguments.length;return n?n>1?e.apply(t,arguments):e.call(t,i):e.call(t)}return r._length=e.length,r}function Pw(e,t){return e.bind(t)}var Ih=Function.prototype.bind?Pw:Rw;function ys(e,t){t=t||0;for(var r=e.length-t,i=new Array(r);r--;)i[r]=e[r+t];return i}function Te(e,t){for(var r in t)e[r]=t[r];return e}function Eh(e){for(var t={},r=0;r<e.length;r++)e[r]&&Te(t,e[r]);return t}function Pe(e,t,r){}var Vi=function(e,t,r){return!1},zh=function(e){return e};function wr(e,t){if(e===t)return!0;var r=We(e),i=We(t);if(r&&i)try{var n=Array.isArray(e),a=Array.isArray(t);if(n&&a)return e.length===t.length&&e.every(function(l,d){return wr(l,t[d])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(!n&&!a){var s=Object.keys(e),o=Object.keys(t);return s.length===o.length&&s.every(function(l){return wr(e[l],t[l])})}else return!1}catch{return!1}else return!r&&!i?String(e)===String(t):!1}function Ah(e,t){for(var r=0;r<e.length;r++)if(wr(e[r],t))return r;return-1}function $n(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function Dw(e,t){return e===t?e===0&&1/e!==1/t:e===e||t===t}var Kl="data-server-rendered",Wn=["component","directive","filter"],Oh=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],at={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Vi,isReservedAttr:Vi,isUnknownElement:Vi,getTagNamespace:Pe,parsePlatformTagName:zh,mustUseProp:Vi,async:!0,_lifecycleHooks:Oh},Bw=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Nh(e){var t=(e+"").charCodeAt(0);return t===36||t===95}function Kt(e,t,r,i){Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}var Uw=new RegExp("[^".concat(Bw.source,".$_\\d]"));function Lw(e){if(!Uw.test(e)){var t=e.split(".");return function(r){for(var i=0;i<t.length;i++){if(!r)return;r=r[t[i]]}return r}}}var Ww="__proto__"in{},rt=typeof window<"u",ot=rt&&window.navigator.userAgent.toLowerCase(),Gr=ot&&/msie|trident/.test(ot),Hr=ot&&ot.indexOf("msie 9.0")>0,Mh=ot&&ot.indexOf("edge/")>0;ot&&ot.indexOf("android")>0;var qw=ot&&/iphone|ipad|ipod|ios/.test(ot),Zl=ot&&ot.match(/firefox\/(\d+)/),vs={}.watch,Rh=!1;if(rt)try{var Ql={};Object.defineProperty(Ql,"passive",{get:function(){Rh=!0}}),window.addEventListener("test-passive",null,Ql)}catch{}var Ki,Ai=function(){return Ki===void 0&&(!rt&&typeof global<"u"?Ki=global.process&&Tw.VUE_ENV==="server":Ki=!1),Ki},xn=rt&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Ur(e){return typeof e=="function"&&/native code/.test(e.toString())}var Oi=typeof Symbol<"u"&&Ur(Symbol)&&typeof Reflect<"u"&&Ur(Reflect.ownKeys),bi;typeof Set<"u"&&Ur(Set)?bi=Set:bi=function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(t){return this.set[t]===!0},e.prototype.add=function(t){this.set[t]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var Lr=null;function Yt(e){e===void 0&&(e=null),e||Lr&&Lr._scope.off(),Lr=e,e&&e._scope.on()}var tt=function(){function e(t,r,i,n,a,s,o,l){this.tag=t,this.data=r,this.children=i,this.text=n,this.elm=a,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=r&&r.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),gr=function(e){e===void 0&&(e="");var t=new tt;return t.text=e,t.isComment=!0,t};function Rr(e){return new tt(void 0,void 0,void 0,String(e))}function _s(e){var t=new tt(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Gw=0,mn=[],Hw=function(){for(var e=0;e<mn.length;e++){var t=mn[e];t.subs=t.subs.filter(function(r){return r}),t._pending=!1}mn.length=0},Xt=function(){function e(){this._pending=!1,this.id=Gw++,this.subs=[]}return e.prototype.addSub=function(t){this.subs.push(t)},e.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,mn.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(t){for(var r=this.subs.filter(function(s){return s}),i=0,n=r.length;i<n;i++){var a=r[i];a.update()}},e}();Xt.target=null;var gn=[];function Fr(e){gn.push(e),Xt.target=e}function jr(){gn.pop(),Xt.target=gn[gn.length-1]}var Ph=Array.prototype,Sn=Object.create(Ph),Fw=["push","pop","shift","unshift","splice","sort","reverse"];Fw.forEach(function(e){var t=Ph[e];Kt(Sn,e,function(){for(var i=[],n=0;n<arguments.length;n++)i[n]=arguments[n];var a=t.apply(this,i),s=this.__ob__,o;switch(e){case"push":case"unshift":o=i;break;case"splice":o=i.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),a})});var Yl=Object.getOwnPropertyNames(Sn),Dh={},eo=!0;function Jt(e){eo=e}var jw={notify:Pe,depend:Pe,addSub:Pe,removeSub:Pe},Xl=function(){function e(t,r,i){if(r===void 0&&(r=!1),i===void 0&&(i=!1),this.value=t,this.shallow=r,this.mock=i,this.dep=i?jw:new Xt,this.vmCount=0,Kt(t,"__ob__",this),fe(t)){if(!i)if(Ww)t.__proto__=Sn;else for(var n=0,a=Yl.length;n<a;n++){var s=Yl[n];Kt(t,s,Sn[s])}r||this.observeArray(t)}else for(var o=Object.keys(t),n=0;n<o.length;n++){var s=o[n];br(t,s,Dh,void 0,r,i)}}return e.prototype.observeArray=function(t){for(var r=0,i=t.length;r<i;r++)Nt(t[r],!1,this.mock)},e}();function Nt(e,t,r){if(e&&He(e,"__ob__")&&e.__ob__ instanceof Xl)return e.__ob__;if(eo&&(r||!Ai())&&(fe(e)||et(e))&&Object.isExtensible(e)&&!e.__v_skip&&!kt(e)&&!(e instanceof tt))return new Xl(e,t,r)}function br(e,t,r,i,n,a,s){s===void 0&&(s=!1);var o=new Xt,l=Object.getOwnPropertyDescriptor(e,t);if(!(l&&l.configurable===!1)){var d=l&&l.get,p=l&&l.set;(!d||p)&&(r===Dh||arguments.length===2)&&(r=e[t]);var f=n?r&&r.__ob__:Nt(r,!1,a);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var y=d?d.call(e):r;return Xt.target&&(o.depend(),f&&(f.dep.depend(),fe(y)&&Uh(y))),kt(y)&&!n?y.value:y},set:function(y){var v=d?d.call(e):r;if(Dw(v,y)){if(p)p.call(e,y);else{if(d)return;if(!n&&kt(v)&&!kt(y)){v.value=y;return}else r=y}f=n?y&&y.__ob__:Nt(y,!1,a),o.notify()}}}),o}}function to(e,t,r){if(!ro(e)){var i=e.__ob__;return fe(e)&&Ch(t)?(e.length=Math.max(e.length,t),e.splice(t,1,r),i&&!i.shallow&&i.mock&&Nt(r,!1,!0),r):t in e&&!(t in Object.prototype)?(e[t]=r,r):e._isVue||i&&i.vmCount?r:i?(br(i.value,t,r,void 0,i.shallow,i.mock),i.dep.notify(),r):(e[t]=r,r)}}function Bh(e,t){if(fe(e)&&Ch(t)){e.splice(t,1);return}var r=e.__ob__;e._isVue||r&&r.vmCount||ro(e)||He(e,t)&&(delete e[t],r&&r.dep.notify())}function Uh(e){for(var t=void 0,r=0,i=e.length;r<i;r++)t=e[r],t&&t.__ob__&&t.__ob__.dep.depend(),fe(t)&&Uh(t)}function Lh(e){return Vw(e,!0),Kt(e,"__v_isShallow",!0),e}function Vw(e,t){ro(e)||Nt(e,t,Ai())}function ro(e){return!!(e&&e.__v_isReadonly)}function kt(e){return!!(e&&e.__v_isRef===!0)}function ws(e,t,r){Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:function(){var i=t[r];if(kt(i))return i.value;var n=i&&i.__ob__;return n&&n.dep.depend(),i},set:function(i){var n=t[r];kt(n)&&!kt(i)?n.value=i:t[r]=i}})}var Ve,Kw=function(){function e(t){t===void 0&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}return e.prototype.run=function(t){if(this.active){var r=Ve;try{return Ve=this,t()}finally{Ve=r}}},e.prototype.on=function(){Ve=this},e.prototype.off=function(){Ve=this.parent},e.prototype.stop=function(t){if(this.active){var r=void 0,i=void 0;for(r=0,i=this.effects.length;r<i;r++)this.effects[r].teardown();for(r=0,i=this.cleanups.length;r<i;r++)this.cleanups[r]();if(this.scopes)for(r=0,i=this.scopes.length;r<i;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){var n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Zw(e,t){t===void 0&&(t=Ve),t&&t.active&&t.effects.push(e)}function Qw(){return Ve}function Yw(e){var t=e._provided,r=e.$parent&&e.$parent._provided;return r===t?e._provided=Object.create(r):t}var Jl=Cr(function(e){var t=e.charAt(0)==="&";e=t?e.slice(1):e;var r=e.charAt(0)==="~";e=r?e.slice(1):e;var i=e.charAt(0)==="!";return e=i?e.slice(1):e,{name:e,once:r,capture:i,passive:t}});function bs(e,t){function r(){var i=r.fns;if(fe(i))for(var n=i.slice(),a=0;a<n.length;a++)er(n[a],null,arguments,t,"v-on handler");else return er(i,null,arguments,t,"v-on handler")}return r.fns=e,r}function Wh(e,t,r,i,n,a){var s,o,l,d;for(s in e)o=e[s],l=t[s],d=Jl(s),oe(o)||(oe(l)?(oe(o.fns)&&(o=e[s]=bs(o,a)),Ie(d.once)&&(o=e[s]=n(d.name,o,d.capture)),r(d.name,o,d.capture,d.passive,d.params)):o!==l&&(l.fns=o,e[s]=l));for(s in t)oe(e[s])&&(d=Jl(s),i(d.name,t[s],d.capture))}function jt(e,t,r){e instanceof tt&&(e=e.data.hook||(e.data.hook={}));var i,n=e[t];function a(){r.apply(this,arguments),rr(i.fns,a)}oe(n)?i=bs([a]):P(n.fns)&&Ie(n.merged)?(i=n,i.fns.push(a)):i=bs([n,a]),i.merged=!0,e[t]=i}function Xw(e,t,r){var i=t.options.props;if(!oe(i)){var n={},a=e.attrs,s=e.props;if(P(a)||P(s))for(var o in i){var l=zi(o);ed(n,s,o,l,!0)||ed(n,a,o,l,!1)}return n}}function ed(e,t,r,i,n){if(P(t)){if(He(t,r))return e[r]=t[r],n||delete t[r],!0;if(He(t,i))return e[r]=t[i],n||delete t[i],!0}return!1}function Jw(e){for(var t=0;t<e.length;t++)if(fe(e[t]))return Array.prototype.concat.apply([],e);return e}function io(e){return Ei(e)?[Rr(e)]:fe(e)?qh(e):void 0}function Jr(e){return P(e)&&P(e.text)&&kw(e.isComment)}function qh(e,t){var r=[],i,n,a,s;for(i=0;i<e.length;i++)n=e[i],!(oe(n)||typeof n=="boolean")&&(a=r.length-1,s=r[a],fe(n)?n.length>0&&(n=qh(n,"".concat(t||"","_").concat(i)),Jr(n[0])&&Jr(s)&&(r[a]=Rr(s.text+n[0].text),n.shift()),r.push.apply(r,n)):Ei(n)?Jr(s)?r[a]=Rr(s.text+n):n!==""&&r.push(Rr(n)):Jr(n)&&Jr(s)?r[a]=Rr(s.text+n.text):(Ie(e._isVList)&&P(n.tag)&&oe(n.key)&&P(t)&&(n.key="__vlist".concat(t,"_").concat(i,"__")),r.push(n)));return r}function eb(e,t){var r=null,i,n,a,s;if(fe(e)||typeof e=="string")for(r=new Array(e.length),i=0,n=e.length;i<n;i++)r[i]=t(e[i],i);else if(typeof e=="number")for(r=new Array(e),i=0;i<e;i++)r[i]=t(i+1,i);else if(We(e))if(Oi&&e[Symbol.iterator]){r=[];for(var o=e[Symbol.iterator](),l=o.next();!l.done;)r.push(t(l.value,r.length)),l=o.next()}else for(a=Object.keys(e),r=new Array(a.length),i=0,n=a.length;i<n;i++)s=a[i],r[i]=t(e[s],s,i);return P(r)||(r=[]),r._isVList=!0,r}function tb(e,t,r,i){var n=this.$scopedSlots[e],a;n?(r=r||{},i&&(r=Te(Te({},i),r)),a=n(r)||(Ce(t)?t():t)):a=this.$slots[e]||(Ce(t)?t():t);var s=r&&r.slot;return s?this.$createElement("template",{slot:s},a):a}function rb(e){return zn(this.$options,"filters",e)||zh}function td(e,t){return fe(e)?e.indexOf(t)===-1:e!==t}function ib(e,t,r,i,n){var a=at.keyCodes[t]||r;return n&&i&&!at.keyCodes[t]?td(n,i):a?td(a,e):i?zi(i)!==t:e===void 0}function nb(e,t,r,i,n){if(r&&We(r)){fe(r)&&(r=Eh(r));var a=void 0,s=function(l){if(l==="class"||l==="style"||zw(l))a=e;else{var d=e.attrs&&e.attrs.type;a=i||at.mustUseProp(t,d,l)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var p=_r(l),f=zi(l);if(!(p in a)&&!(f in a)&&(a[l]=r[l],n)){var g=e.on||(e.on={});g["update:".concat(l)]=function(y){r[l]=y}}};for(var o in r)s(o)}return e}function ab(e,t){var r=this._staticTrees||(this._staticTrees=[]),i=r[e];return i&&!t||(i=r[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),Gh(i,"__static__".concat(e),!1)),i}function sb(e,t,r){return Gh(e,"__once__".concat(t).concat(r?"_".concat(r):""),!0),e}function Gh(e,t,r){if(fe(e))for(var i=0;i<e.length;i++)e[i]&&typeof e[i]!="string"&&rd(e[i],"".concat(t,"_").concat(i),r);else rd(e,t,r)}function rd(e,t,r){e.isStatic=!0,e.key=t,e.isOnce=r}function ob(e,t){if(t&&et(t)){var r=e.on=e.on?Te({},e.on):{};for(var i in t){var n=r[i],a=t[i];r[i]=n?[].concat(n,a):a}}return e}function Hh(e,t,r,i){t=t||{$stable:!r};for(var n=0;n<e.length;n++){var a=e[n];fe(a)?Hh(a,t,r):a&&(a.proxy&&(a.fn.proxy=!0),t[a.key]=a.fn)}return i&&(t.$key=i),t}function ub(e,t){for(var r=0;r<t.length;r+=2){var i=t[r];typeof i=="string"&&i&&(e[t[r]]=t[r+1])}return e}function lb(e,t){return typeof e=="string"?t+e:e}function Fh(e){e._o=sb,e._n=wi,e._s=Iw,e._l=eb,e._t=tb,e._q=wr,e._i=Ah,e._m=ab,e._f=rb,e._k=ib,e._b=nb,e._v=Rr,e._e=gr,e._u=Hh,e._g=ob,e._d=ub,e._p=lb}function no(e,t){if(!e||!e.length)return{};for(var r={},i=0,n=e.length;i<n;i++){var a=e[i],s=a.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,(a.context===t||a.fnContext===t)&&s&&s.slot!=null){var o=s.slot,l=r[o]||(r[o]=[]);a.tag==="template"?l.push.apply(l,a.children||[]):l.push(a)}else(r.default||(r.default=[])).push(a)}for(var d in r)r[d].every(db)&&delete r[d];return r}function db(e){return e.isComment&&!e.asyncFactory||e.text===" "}function $i(e){return e.isComment&&e.asyncFactory}function vi(e,t,r,i){var n,a=Object.keys(r).length>0,s=t?!!t.$stable:!a,o=t&&t.$key;if(!t)n={};else{if(t._normalized)return t._normalized;if(s&&i&&i!==Xe&&o===i.$key&&!a&&!i.$hasNormal)return i;n={};for(var l in t)t[l]&&l[0]!=="$"&&(n[l]=cb(e,r,l,t[l]))}for(var d in r)d in n||(n[d]=pb(r,d));return t&&Object.isExtensible(t)&&(t._normalized=n),Kt(n,"$stable",s),Kt(n,"$key",o),Kt(n,"$hasNormal",a),n}function cb(e,t,r,i){var n=function(){var a=Lr;Yt(e);var s=arguments.length?i.apply(null,arguments):i({});s=s&&typeof s=="object"&&!fe(s)?[s]:io(s);var o=s&&s[0];return Yt(a),s&&(!o||s.length===1&&o.isComment&&!$i(o))?void 0:s};return i.proxy&&Object.defineProperty(t,r,{get:n,enumerable:!0,configurable:!0}),n}function pb(e,t){return function(){return e[t]}}function fb(e){var t=e.$options,r=t.setup;if(r){var i=e._setupContext=hb(e);Yt(e),Fr();var n=er(r,null,[e._props||Lh({}),i],e,"setup");if(jr(),Yt(),Ce(n))t.render=n;else if(We(n))if(e._setupState=n,n.__sfc){var s=e._setupProxy={};for(var a in n)a!=="__sfc"&&ws(s,n,a)}else for(var a in n)Nh(a)||ws(e,n,a)}}function hb(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};Kt(t,"_v_attr_proxy",!0),Tn(t,e.$attrs,Xe,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Tn(t,e.$listeners,Xe,e,"$listeners")}return e._listenersProxy},get slots(){return gb(e)},emit:Ih(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach(function(r){return ws(e,t,r)})}}}function Tn(e,t,r,i,n){var a=!1;for(var s in t)s in e?t[s]!==r[s]&&(a=!0):(a=!0,mb(e,s,i,n));for(var s in e)s in t||(a=!0,delete e[s]);return a}function mb(e,t,r,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return r[i][t]}})}function gb(e){return e._slotsProxy||jh(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function jh(e,t){for(var r in t)e[r]=t[r];for(var r in e)r in t||delete e[r]}function yb(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,i=r&&r.context;e.$slots=no(t._renderChildren,i),e.$scopedSlots=r?vi(e.$parent,r.data.scopedSlots,e.$slots):Xe,e._c=function(a,s,o,l){return kn(e,a,s,o,l,!1)},e.$createElement=function(a,s,o,l){return kn(e,a,s,o,l,!0)};var n=r&&r.data;br(e,"$attrs",n&&n.attrs||Xe,null,!0),br(e,"$listeners",t._parentListeners||Xe,null,!0)}var yn=null;function vb(e){Fh(e.prototype),e.prototype.$nextTick=function(t){return ao(t,this)},e.prototype._render=function(){var t=this,r=t.$options,i=r.render,n=r._parentVnode;n&&t._isMounted&&(t.$scopedSlots=vi(t.$parent,n.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&jh(t._slotsProxy,t.$scopedSlots)),t.$vnode=n;var a=Lr,s=yn,o;try{Yt(t),yn=t,o=i.call(t._renderProxy,t.$createElement)}catch(l){$r(l,t,"render"),o=t._vnode}finally{yn=s,Yt(a)}return fe(o)&&o.length===1&&(o=o[0]),o instanceof tt||(o=gr()),o.parent=n,o}}function pa(e,t){return(e.__esModule||Oi&&e[Symbol.toStringTag]==="Module")&&(e=e.default),We(e)?t.extend(e):e}function _b(e,t,r,i,n){var a=gr();return a.asyncFactory=e,a.asyncMeta={data:t,context:r,children:i,tag:n},a}function wb(e,t){if(Ie(e.error)&&P(e.errorComp))return e.errorComp;if(P(e.resolved))return e.resolved;var r=yn;if(r&&P(e.owners)&&e.owners.indexOf(r)===-1&&e.owners.push(r),Ie(e.loading)&&P(e.loadingComp))return e.loadingComp;if(r&&!P(e.owners)){var i=e.owners=[r],n=!0,a=null,s=null;r.$on("hook:destroyed",function(){return rr(i,r)});var o=function(f){for(var g=0,y=i.length;g<y;g++)i[g].$forceUpdate();f&&(i.length=0,a!==null&&(clearTimeout(a),a=null),s!==null&&(clearTimeout(s),s=null))},l=$n(function(f){e.resolved=pa(f,t),n?i.length=0:o(!0)}),d=$n(function(f){P(e.errorComp)&&(e.error=!0,o(!0))}),p=e(l,d);return We(p)&&(gs(p)?oe(e.resolved)&&p.then(l,d):gs(p.component)&&(p.component.then(l,d),P(p.error)&&(e.errorComp=pa(p.error,t)),P(p.loading)&&(e.loadingComp=pa(p.loading,t),p.delay===0?e.loading=!0:a=setTimeout(function(){a=null,oe(e.resolved)&&oe(e.error)&&(e.loading=!0,o(!1))},p.delay||200)),P(p.timeout)&&(s=setTimeout(function(){s=null,oe(e.resolved)&&d(null)},p.timeout)))),n=!1,e.loading?e.loadingComp:e.resolved}}function Vh(e){if(fe(e))for(var t=0;t<e.length;t++){var r=e[t];if(P(r)&&(P(r.componentOptions)||$i(r)))return r}}var bb=1,Kh=2;function kn(e,t,r,i,n,a){return(fe(r)||Ei(r))&&(n=i,i=r,r=void 0),Ie(a)&&(n=Kh),$b(e,t,r,i,n)}function $b(e,t,r,i,n){if(P(r)&&P(r.__ob__)||(P(r)&&P(r.is)&&(t=r.is),!t))return gr();fe(i)&&Ce(i[0])&&(r=r||{},r.scopedSlots={default:i[0]},i.length=0),n===Kh?i=io(i):n===bb&&(i=Jw(i));var a,s;if(typeof t=="string"){var o=void 0;s=e.$vnode&&e.$vnode.ns||at.getTagNamespace(t),at.isReservedTag(t)?a=new tt(at.parsePlatformTagName(t),r,i,void 0,void 0,e):(!r||!r.pre)&&P(o=zn(e.$options,"components",t))?a=dd(o,r,e,i,t):a=new tt(t,r,i,void 0,void 0,e)}else a=dd(t,r,e,i);return fe(a)?a:P(a)?(P(s)&&Zh(a,s),P(r)&&xb(r),a):gr()}function Zh(e,t,r){if(e.ns=t,e.tag==="foreignObject"&&(t=void 0,r=!0),P(e.children))for(var i=0,n=e.children.length;i<n;i++){var a=e.children[i];P(a.tag)&&(oe(a.ns)||Ie(r)&&a.tag!=="svg")&&Zh(a,t,r)}}function xb(e){We(e.style)&&Cn(e.style),We(e.class)&&Cn(e.class)}function $r(e,t,r){Fr();try{if(t)for(var i=t;i=i.$parent;){var n=i.$options.errorCaptured;if(n)for(var a=0;a<n.length;a++)try{var s=n[a].call(i,e,t,r)===!1;if(s)return}catch(o){id(o,i,"errorCaptured hook")}}id(e,t,r)}finally{jr()}}function er(e,t,r,i,n){var a;try{a=r?e.apply(t,r):e.call(t),a&&!a._isVue&&gs(a)&&!a._handled&&(a.catch(function(s){return $r(s,i,n+" (Promise/async)")}),a._handled=!0)}catch(s){$r(s,i,n)}return a}function id(e,t,r){if(at.errorHandler)try{return at.errorHandler.call(null,e,t,r)}catch(i){i!==e&&nd(i)}nd(e)}function nd(e,t,r){if(rt&&typeof console<"u")console.error(e);else throw e}var $s=!1,xs=[],Ss=!1;function Zi(){Ss=!1;var e=xs.slice(0);xs.length=0;for(var t=0;t<e.length;t++)e[t]()}var fi;if(typeof Promise<"u"&&Ur(Promise)){var Sb=Promise.resolve();fi=function(){Sb.then(Zi),qw&&setTimeout(Pe)},$s=!0}else if(!Gr&&typeof MutationObserver<"u"&&(Ur(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var Qi=1,Tb=new MutationObserver(Zi),ad=document.createTextNode(String(Qi));Tb.observe(ad,{characterData:!0}),fi=function(){Qi=(Qi+1)%2,ad.data=String(Qi)},$s=!0}else typeof setImmediate<"u"&&Ur(setImmediate)?fi=function(){setImmediate(Zi)}:fi=function(){setTimeout(Zi,0)};function ao(e,t){var r;if(xs.push(function(){if(e)try{e.call(t)}catch(i){$r(i,t,"nextTick")}else r&&r(t)}),Ss||(Ss=!0,fi()),!e&&typeof Promise<"u")return new Promise(function(i){r=i})}var kb="2.7.16",sd=new bi;function Cn(e){return vn(e,sd),sd.clear(),e}function vn(e,t){var r,i,n=fe(e);if(!(!n&&!We(e)||e.__v_skip||Object.isFrozen(e)||e instanceof tt)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(n)for(r=e.length;r--;)vn(e[r],t);else if(kt(e))vn(e.value,t);else for(i=Object.keys(e),r=i.length;r--;)vn(e[i[r]],t)}}var Cb=0,so=function(){function e(t,r,i,n,a){Zw(this,Ve&&!Ve._vm?Ve:t?t._scope:void 0),(this.vm=t)&&a&&(t._watcher=this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++Cb,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new bi,this.newDepIds=new bi,this.expression="",Ce(r)?this.getter=r:(this.getter=Lw(r),this.getter||(this.getter=Pe)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){Fr(this);var t,r=this.vm;try{t=this.getter.call(r,r)}catch(i){if(this.user)$r(i,r,'getter for watcher "'.concat(this.expression,'"'));else throw i}finally{this.deep&&Cn(t),jr(),this.cleanupDeps()}return t},e.prototype.addDep=function(t){var r=t.id;this.newDepIds.has(r)||(this.newDepIds.add(r),this.newDeps.push(t),this.depIds.has(r)||t.addSub(this))},e.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var r=this.deps[t];this.newDepIds.has(r.id)||r.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gb(this)},e.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||We(t)||this.deep){var r=this.value;if(this.value=t,this.user){var i='callback for watcher "'.concat(this.expression,'"');er(this.cb,this.vm,[t,r],this.vm,i)}else this.cb.call(this.vm,t,r)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&rr(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function Ib(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Qh(e,t)}var xi;function Eb(e,t){xi.$on(e,t)}function zb(e,t){xi.$off(e,t)}function Ab(e,t){var r=xi;return function i(){var n=t.apply(null,arguments);n!==null&&r.$off(e,i)}}function Qh(e,t,r){xi=e,Wh(t,r||{},Eb,zb,Ab,e),xi=void 0}function Ob(e){var t=/^hook:/;e.prototype.$on=function(r,i){var n=this;if(fe(r))for(var a=0,s=r.length;a<s;a++)n.$on(r[a],i);else(n._events[r]||(n._events[r]=[])).push(i),t.test(r)&&(n._hasHookEvent=!0);return n},e.prototype.$once=function(r,i){var n=this;function a(){n.$off(r,a),i.apply(n,arguments)}return a.fn=i,n.$on(r,a),n},e.prototype.$off=function(r,i){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(fe(r)){for(var a=0,s=r.length;a<s;a++)n.$off(r[a],i);return n}var o=n._events[r];if(!o)return n;if(!i)return n._events[r]=null,n;for(var l,d=o.length;d--;)if(l=o[d],l===i||l.fn===i){o.splice(d,1);break}return n},e.prototype.$emit=function(r){var i=this,n=i._events[r];if(n){n=n.length>1?ys(n):n;for(var a=ys(arguments,1),s='event handler for "'.concat(r,'"'),o=0,l=n.length;o<l;o++)er(n[o],i,a,i,s)}return i}}var yr=null;function Yh(e){var t=yr;return yr=e,function(){yr=t}}function Nb(e){var t=e.$options,r=t.parent;if(r&&!t.abstract){for(;r.$options.abstract&&r.$parent;)r=r.$parent;r.$children.push(e)}e.$parent=r,e.$root=r?r.$root:e,e.$children=[],e.$refs={},e._provided=r?r._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Mb(e){e.prototype._update=function(t,r){var i=this,n=i.$el,a=i._vnode,s=Yh(i);i._vnode=t,a?i.$el=i.__patch__(a,t):i.$el=i.__patch__(i.$el,t,r,!1),s(),n&&(n.__vue__=null),i.$el&&(i.$el.__vue__=i);for(var o=i;o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode;)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},e.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){vt(t,"beforeDestroy"),t._isBeingDestroyed=!0;var r=t.$parent;r&&!r._isBeingDestroyed&&!t.$options.abstract&&rr(r.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),vt(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Rb(e,t,r){e.$el=t,e.$options.render||(e.$options.render=gr),vt(e,"beforeMount");var i;i=function(){e._update(e._render(),r)};var n={before:function(){e._isMounted&&!e._isDestroyed&&vt(e,"beforeUpdate")}};new so(e,i,Pe,n,!0),r=!1;var a=e._preWatchers;if(a)for(var s=0;s<a.length;s++)a[s].run();return e.$vnode==null&&(e._isMounted=!0,vt(e,"mounted")),e}function Pb(e,t,r,i,n){var a=i.data.scopedSlots,s=e.$scopedSlots,o=!!(a&&!a.$stable||s!==Xe&&!s.$stable||a&&e.$scopedSlots.$key!==a.$key||!a&&e.$scopedSlots.$key),l=!!(n||e.$options._renderChildren||o),d=e.$vnode;e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=n;var p=i.data.attrs||Xe;e._attrsProxy&&Tn(e._attrsProxy,p,d.data&&d.data.attrs||Xe,e,"$attrs")&&(l=!0),e.$attrs=p,r=r||Xe;var f=e.$options._parentListeners;if(e._listenersProxy&&Tn(e._listenersProxy,r,f||Xe,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,Qh(e,r,f),t&&e.$options.props){Jt(!1);for(var g=e._props,y=e.$options._propKeys||[],v=0;v<y.length;v++){var b=y[v],S=e.$options.props;g[b]=fo(b,S,t,e)}Jt(!0),e.$options.propsData=t}l&&(e.$slots=no(n,i.context),e.$forceUpdate())}function Xh(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function oo(e,t){if(t){if(e._directInactive=!1,Xh(e))return}else if(e._directInactive)return;if(e._inactive||e._inactive===null){e._inactive=!1;for(var r=0;r<e.$children.length;r++)oo(e.$children[r]);vt(e,"activated")}}function Jh(e,t){if(!(t&&(e._directInactive=!0,Xh(e)))&&!e._inactive){e._inactive=!0;for(var r=0;r<e.$children.length;r++)Jh(e.$children[r]);vt(e,"deactivated")}}function vt(e,t,r,i){i===void 0&&(i=!0),Fr();var n=Lr,a=Qw();i&&Yt(e);var s=e.$options[t],o="".concat(t," hook");if(s)for(var l=0,d=s.length;l<d;l++)er(s[l],e,null,e,o);e._hasHookEvent&&e.$emit("hook:"+t),i&&(Yt(n),a&&a.on()),jr()}var At=[],uo=[],In={},Ts=!1,lo=!1,Pr=0;function Db(){Pr=At.length=uo.length=0,In={},Ts=lo=!1}var em=0,ks=Date.now;if(rt&&!Gr){var fa=window.performance;fa&&typeof fa.now=="function"&&ks()>document.createEvent("Event").timeStamp&&(ks=function(){return fa.now()})}var Bb=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Ub(){em=ks(),lo=!0;var e,t;for(At.sort(Bb),Pr=0;Pr<At.length;Pr++)e=At[Pr],e.before&&e.before(),t=e.id,In[t]=null,e.run();var r=uo.slice(),i=At.slice();Db(),qb(r),Lb(i),Hw(),xn&&at.devtools&&xn.emit("flush")}function Lb(e){for(var t=e.length;t--;){var r=e[t],i=r.vm;i&&i._watcher===r&&i._isMounted&&!i._isDestroyed&&vt(i,"updated")}}function Wb(e){e._inactive=!1,uo.push(e)}function qb(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,oo(e[t],!0)}function Gb(e){var t=e.id;if(In[t]==null&&!(e===Xt.target&&e.noRecurse)){if(In[t]=!0,!lo)At.push(e);else{for(var r=At.length-1;r>Pr&&At[r].id>e.id;)r--;At.splice(r+1,0,e)}Ts||(Ts=!0,ao(Ub))}}function Hb(e){var t=e.$options.provide;if(t){var r=Ce(t)?t.call(e):t;if(!We(r))return;for(var i=Yw(e),n=Oi?Reflect.ownKeys(r):Object.keys(r),a=0;a<n.length;a++){var s=n[a];Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(r,s))}}}function Fb(e){var t=tm(e.$options.inject,e);t&&(Jt(!1),Object.keys(t).forEach(function(r){br(e,r,t[r])}),Jt(!0))}function tm(e,t){if(e){for(var r=Object.create(null),i=Oi?Reflect.ownKeys(e):Object.keys(e),n=0;n<i.length;n++){var a=i[n];if(a!=="__ob__"){var s=e[a].from;if(s in t._provided)r[a]=t._provided[s];else if("default"in e[a]){var o=e[a].default;r[a]=Ce(o)?o.call(t):o}}}return r}}function co(e,t,r,i,n){var a=this,s=n.options,o;He(i,"_uid")?(o=Object.create(i),o._original=i):(o=i,i=i._original);var l=Ie(s._compiled),d=!l;this.data=e,this.props=t,this.children=r,this.parent=i,this.listeners=e.on||Xe,this.injections=tm(s.inject,i),this.slots=function(){return a.$slots||vi(i,e.scopedSlots,a.$slots=no(r,i)),a.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return vi(i,e.scopedSlots,this.slots())}}),l&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=vi(i,e.scopedSlots,this.$slots)),s._scopeId?this._c=function(p,f,g,y){var v=kn(o,p,f,g,y,d);return v&&!fe(v)&&(v.fnScopeId=s._scopeId,v.fnContext=i),v}:this._c=function(p,f,g,y){return kn(o,p,f,g,y,d)}}Fh(co.prototype);function jb(e,t,r,i,n){var a=e.options,s={},o=a.props;if(P(o))for(var l in o)s[l]=fo(l,o,t||Xe);else P(r.attrs)&&ud(s,r.attrs),P(r.props)&&ud(s,r.props);var d=new co(r,s,n,i,e),p=a.render.call(null,d._c,d);if(p instanceof tt)return od(p,r,d.parent,a);if(fe(p)){for(var f=io(p)||[],g=new Array(f.length),y=0;y<f.length;y++)g[y]=od(f[y],r,d.parent,a);return g}}function od(e,t,r,i,n){var a=_s(e);return a.fnContext=r,a.fnOptions=i,t.slot&&((a.data||(a.data={})).slot=t.slot),a}function ud(e,t){for(var r in t)e[_r(r)]=t[r]}function En(e){return e.name||e.__name||e._componentTag}var po={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;po.prepatch(r,r)}else{var i=e.componentInstance=Vb(e,yr);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var r=t.componentOptions,i=t.componentInstance=e.componentInstance;Pb(i,r.propsData,r.listeners,t,r.children)},insert:function(e){var t=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,vt(r,"mounted")),e.data.keepAlive&&(t._isMounted?Wb(r):oo(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Jh(t,!0):t.$destroy())}},ld=Object.keys(po);function dd(e,t,r,i,n){if(!oe(e)){var a=r.$options._base;if(We(e)&&(e=a.extend(e)),typeof e=="function"){var s;if(oe(e.cid)&&(s=e,e=wb(s,a),e===void 0))return _b(s,t,r,i,n);t=t||{},mo(e),P(t.model)&&Qb(e.options,t);var o=Xw(t,e);if(Ie(e.options.functional))return jb(e,o,t,r,i);var l=t.on;if(t.on=t.nativeOn,Ie(e.options.abstract)){var d=t.slot;t={},d&&(t.slot=d)}Kb(t);var p=En(e.options)||n,f=new tt("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,r,{Ctor:e,propsData:o,listeners:l,tag:n,children:i},s);return f}}}function Vb(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return P(i)&&(r.render=i.render,r.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(r)}function Kb(e){for(var t=e.hook||(e.hook={}),r=0;r<ld.length;r++){var i=ld[r],n=t[i],a=po[i];n!==a&&!(n&&n._merged)&&(t[i]=n?Zb(a,n):a)}}function Zb(e,t){var r=function(i,n){e(i,n),t(i,n)};return r._merged=!0,r}function Qb(e,t){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var n=t.on||(t.on={}),a=n[i],s=t.model.callback;P(a)?(fe(a)?a.indexOf(s)===-1:a!==s)&&(n[i]=[s].concat(a)):n[i]=s}var Yb=Pe,Tt=at.optionMergeStrategies;function Si(e,t,r){if(r===void 0&&(r=!0),!t)return e;for(var i,n,a,s=Oi?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)i=s[o],i!=="__ob__"&&(n=e[i],a=t[i],!r||!He(e,i)?to(e,i,a):n!==a&&et(n)&&et(a)&&Si(n,a));return e}function cd(e,t,r){return r?function(){var n=Ce(t)?t.call(r,r):t,a=Ce(e)?e.call(r,r):e;return n?Si(n,a):a}:t?e?function(){return Si(Ce(t)?t.call(this,this):t,Ce(e)?e.call(this,this):e)}:t:e}Tt.data=function(e,t,r){return r?cd(e,t,r):t&&typeof t!="function"?e:cd(e,t)};function Xb(e,t){var r=t?e?e.concat(t):fe(t)?t:[t]:e;return r&&Jb(r)}function Jb(e){for(var t=[],r=0;r<e.length;r++)t.indexOf(e[r])===-1&&t.push(e[r]);return t}Oh.forEach(function(e){Tt[e]=Xb});function e$(e,t,r,i){var n=Object.create(e||null);return t?Te(n,t):n}Wn.forEach(function(e){Tt[e+"s"]=e$});Tt.watch=function(e,t,r,i){if(e===vs&&(e=void 0),t===vs&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var n={};Te(n,e);for(var a in t){var s=n[a],o=t[a];s&&!fe(s)&&(s=[s]),n[a]=s?s.concat(o):fe(o)?o:[o]}return n};Tt.props=Tt.methods=Tt.inject=Tt.computed=function(e,t,r,i){if(!e)return t;var n=Object.create(null);return Te(n,e),t&&Te(n,t),n};Tt.provide=function(e,t){return e?function(){var r=Object.create(null);return Si(r,Ce(e)?e.call(this):e),t&&Si(r,Ce(t)?t.call(this):t,!1),r}:t};var t$=function(e,t){return t===void 0?e:t};function r$(e,t){var r=e.props;if(r){var i={},n,a,s;if(fe(r))for(n=r.length;n--;)a=r[n],typeof a=="string"&&(s=_r(a),i[s]={type:null});else if(et(r))for(var o in r)a=r[o],s=_r(o),i[s]=et(a)?a:{type:a};e.props=i}}function i$(e,t){var r=e.inject;if(r){var i=e.inject={};if(fe(r))for(var n=0;n<r.length;n++)i[r[n]]={from:r[n]};else if(et(r))for(var a in r){var s=r[a];i[a]=et(s)?Te({from:a},s):{from:s}}}}function n$(e){var t=e.directives;if(t)for(var r in t){var i=t[r];Ce(i)&&(t[r]={bind:i,update:i})}}function xr(e,t,r){if(Ce(t)&&(t=t.options),r$(t),i$(t),n$(t),!t._base&&(t.extends&&(e=xr(e,t.extends,r)),t.mixins))for(var i=0,n=t.mixins.length;i<n;i++)e=xr(e,t.mixins[i],r);var a={},s;for(s in e)o(s);for(s in t)He(e,s)||o(s);function o(l){var d=Tt[l]||t$;a[l]=d(e[l],t[l],r,l)}return a}function zn(e,t,r,i){if(typeof r=="string"){var n=e[t];if(He(n,r))return n[r];var a=_r(r);if(He(n,a))return n[a];var s=Nw(a);if(He(n,s))return n[s];var o=n[r]||n[a]||n[s];return o}}function fo(e,t,r,i){var n=t[e],a=!He(r,e),s=r[e],o=fd(Boolean,n.type);if(o>-1){if(a&&!He(n,"default"))s=!1;else if(s===""||s===zi(e)){var l=fd(String,n.type);(l<0||o<l)&&(s=!0)}}if(s===void 0){s=a$(i,n,e);var d=eo;Jt(!0),Nt(s),Jt(d)}return s}function a$(e,t,r){if(He(t,"default")){var i=t.default;return e&&e.$options.propsData&&e.$options.propsData[r]===void 0&&e._props[r]!==void 0?e._props[r]:Ce(i)&&Cs(t.type)!=="Function"?i.call(e):i}}var s$=/^\s*function (\w+)/;function Cs(e){var t=e&&e.toString().match(s$);return t?t[1]:""}function pd(e,t){return Cs(e)===Cs(t)}function fd(e,t){if(!fe(t))return pd(t,e)?0:-1;for(var r=0,i=t.length;r<i;r++)if(pd(t[r],e))return r;return-1}var Ft={enumerable:!0,configurable:!0,get:Pe,set:Pe};function ho(e,t,r){Ft.get=function(){return this[t][r]},Ft.set=function(n){this[t][r]=n},Object.defineProperty(e,r,Ft)}function o$(e){var t=e.$options;if(t.props&&u$(e,t.props),fb(e),t.methods&&f$(e,t.methods),t.data)l$(e);else{var r=Nt(e._data={});r&&r.vmCount++}t.computed&&p$(e,t.computed),t.watch&&t.watch!==vs&&h$(e,t.watch)}function u$(e,t){var r=e.$options.propsData||{},i=e._props=Lh({}),n=e.$options._propKeys=[],a=!e.$parent;a||Jt(!1);var s=function(l){n.push(l);var d=fo(l,t,r,e);br(i,l,d,void 0,!0),l in e||ho(e,"_props",l)};for(var o in t)s(o);Jt(!0)}function l$(e){var t=e.$options.data;t=e._data=Ce(t)?d$(t,e):t||{},et(t)||(t={});var r=Object.keys(t),i=e.$options.props;e.$options.methods;for(var n=r.length;n--;){var a=r[n];i&&He(i,a)||Nh(a)||ho(e,"_data",a)}var s=Nt(t);s&&s.vmCount++}function d$(e,t){Fr();try{return e.call(t,t)}catch(r){return $r(r,t,"data()"),{}}finally{jr()}}var c$={lazy:!0};function p$(e,t){var r=e._computedWatchers=Object.create(null),i=Ai();for(var n in t){var a=t[n],s=Ce(a)?a:a.get;i||(r[n]=new so(e,s||Pe,Pe,c$)),n in e||rm(e,n,a)}}function rm(e,t,r){var i=!Ai();Ce(r)?(Ft.get=i?hd(t):md(r),Ft.set=Pe):(Ft.get=r.get?i&&r.cache!==!1?hd(t):md(r.get):Pe,Ft.set=r.set||Pe),Object.defineProperty(e,t,Ft)}function hd(e){return function(){var r=this._computedWatchers&&this._computedWatchers[e];if(r)return r.dirty&&r.evaluate(),Xt.target&&r.depend(),r.value}}function md(e){return function(){return e.call(this,this)}}function f$(e,t){e.$options.props;for(var r in t)e[r]=typeof t[r]!="function"?Pe:Ih(t[r],e)}function h$(e,t){for(var r in t){var i=t[r];if(fe(i))for(var n=0;n<i.length;n++)Is(e,r,i[n]);else Is(e,r,i)}}function Is(e,t,r,i){return et(r)&&(i=r,r=r.handler),typeof r=="string"&&(r=e[r]),e.$watch(t,r,i)}function m$(e){var t={};t.get=function(){return this._data};var r={};r.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",r),e.prototype.$set=to,e.prototype.$delete=Bh,e.prototype.$watch=function(i,n,a){var s=this;if(et(n))return Is(s,i,n,a);a=a||{},a.user=!0;var o=new so(s,i,n,a);if(a.immediate){var l='callback for immediate watcher "'.concat(o.expression,'"');Fr(),er(n,s,[o.value],s,l),jr()}return function(){o.teardown()}}}var g$=0;function y$(e){e.prototype._init=function(t){var r=this;r._uid=g$++,r._isVue=!0,r.__v_skip=!0,r._scope=new Kw(!0),r._scope.parent=void 0,r._scope._vm=!0,t&&t._isComponent?v$(r,t):r.$options=xr(mo(r.constructor),t||{},r),r._renderProxy=r,r._self=r,Nb(r),Ib(r),yb(r),vt(r,"beforeCreate",void 0,!1),Fb(r),o$(r),Hb(r),vt(r,"created"),r.$options.el&&r.$mount(r.$options.el)}}function v$(e,t){var r=e.$options=Object.create(e.constructor.options),i=t._parentVnode;r.parent=t.parent,r._parentVnode=i;var n=i.componentOptions;r.propsData=n.propsData,r._parentListeners=n.listeners,r._renderChildren=n.children,r._componentTag=n.tag,t.render&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns)}function mo(e){var t=e.options;if(e.super){var r=mo(e.super),i=e.superOptions;if(r!==i){e.superOptions=r;var n=_$(e);n&&Te(e.extendOptions,n),t=e.options=xr(r,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function _$(e){var t,r=e.options,i=e.sealedOptions;for(var n in r)r[n]!==i[n]&&(t||(t={}),t[n]=r[n]);return t}function Ae(e){this._init(e)}y$(Ae);m$(Ae);Ob(Ae);Mb(Ae);vb(Ae);function w$(e){e.use=function(t){var r=this._installedPlugins||(this._installedPlugins=[]);if(r.indexOf(t)>-1)return this;var i=ys(arguments,1);return i.unshift(this),Ce(t.install)?t.install.apply(t,i):Ce(t)&&t.apply(null,i),r.push(t),this}}function b$(e){e.mixin=function(t){return this.options=xr(this.options,t),this}}function $$(e){e.cid=0;var t=1;e.extend=function(r){r=r||{};var i=this,n=i.cid,a=r._Ctor||(r._Ctor={});if(a[n])return a[n];var s=En(r)||En(i.options),o=function(d){this._init(d)};return o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.cid=t++,o.options=xr(i.options,r),o.super=i,o.options.props&&x$(o),o.options.computed&&S$(o),o.extend=i.extend,o.mixin=i.mixin,o.use=i.use,Wn.forEach(function(l){o[l]=i[l]}),s&&(o.options.components[s]=o),o.superOptions=i.options,o.extendOptions=r,o.sealedOptions=Te({},o.options),a[n]=o,o}}function x$(e){var t=e.options.props;for(var r in t)ho(e.prototype,"_props",r)}function S$(e){var t=e.options.computed;for(var r in t)rm(e.prototype,r,t[r])}function T$(e){Wn.forEach(function(t){e[t]=function(r,i){return i?(t==="component"&&et(i)&&(i.name=i.name||r,i=this.options._base.extend(i)),t==="directive"&&Ce(i)&&(i={bind:i,update:i}),this.options[t+"s"][r]=i,i):this.options[t+"s"][r]}})}function gd(e){return e&&(En(e.Ctor.options)||e.tag)}function Yi(e,t){return fe(e)?e.indexOf(t)>-1:typeof e=="string"?e.split(",").indexOf(t)>-1:Cw(e)?e.test(t):!1}function yd(e,t){var r=e.cache,i=e.keys,n=e._vnode,a=e.$vnode;for(var s in r){var o=r[s];if(o){var l=o.name;l&&!t(l)&&Es(r,s,i,n)}}a.componentOptions.children=void 0}function Es(e,t,r,i){var n=e[t];n&&(!i||n.tag!==i.tag)&&n.componentInstance.$destroy(),e[t]=null,rr(r,t)}var vd=[String,RegExp,Array],k$={name:"keep-alive",abstract:!0,props:{include:vd,exclude:vd,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,r=e.keys,i=e.vnodeToCache,n=e.keyToCache;if(i){var a=i.tag,s=i.componentInstance,o=i.componentOptions;t[n]={name:gd(o),tag:a,componentInstance:s},r.push(n),this.max&&r.length>parseInt(this.max)&&Es(t,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Es(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){yd(e,function(r){return Yi(t,r)})}),this.$watch("exclude",function(t){yd(e,function(r){return!Yi(t,r)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Vh(e),r=t&&t.componentOptions;if(r){var i=gd(r),n=this,a=n.include,s=n.exclude;if(a&&(!i||!Yi(a,i))||s&&i&&Yi(s,i))return t;var o=this,l=o.cache,d=o.keys,p=t.key==null?r.Ctor.cid+(r.tag?"::".concat(r.tag):""):t.key;l[p]?(t.componentInstance=l[p].componentInstance,rr(d,p),d.push(p)):(this.vnodeToCache=t,this.keyToCache=p),t.data.keepAlive=!0}return t||e&&e[0]}},C$={KeepAlive:k$};function I$(e){var t={};t.get=function(){return at},Object.defineProperty(e,"config",t),e.util={warn:Yb,extend:Te,mergeOptions:xr,defineReactive:br},e.set=to,e.delete=Bh,e.nextTick=ao,e.observable=function(r){return Nt(r),r},e.options=Object.create(null),Wn.forEach(function(r){e.options[r+"s"]=Object.create(null)}),e.options._base=e,Te(e.options.components,C$),w$(e),b$(e),$$(e),T$(e)}I$(Ae);Object.defineProperty(Ae.prototype,"$isServer",{get:Ai});Object.defineProperty(Ae.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(Ae,"FunctionalRenderContext",{value:co});Ae.version=kb;var E$=wt("style,class"),z$=wt("input,textarea,option,select,progress"),A$=function(e,t,r){return r==="value"&&z$(e)&&t!=="button"||r==="selected"&&e==="option"||r==="checked"&&e==="input"||r==="muted"&&e==="video"},im=wt("contenteditable,draggable,spellcheck"),O$=wt("events,caret,typing,plaintext-only"),N$=function(e,t){return An(t)||t==="false"?"false":e==="contenteditable"&&O$(t)?t:"true"},M$=wt("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),zs="http://www.w3.org/1999/xlink",go=function(e){return e.charAt(5)===":"&&e.slice(0,5)==="xlink"},nm=function(e){return go(e)?e.slice(6,e.length):""},An=function(e){return e==null||e===!1};function R$(e){for(var t=e.data,r=e,i=e;P(i.componentInstance);)i=i.componentInstance._vnode,i&&i.data&&(t=_d(i.data,t));for(;P(r=r.parent);)r&&r.data&&(t=_d(t,r.data));return P$(t.staticClass,t.class)}function _d(e,t){return{staticClass:yo(e.staticClass,t.staticClass),class:P(e.class)?[e.class,t.class]:t.class}}function P$(e,t){return P(e)||P(t)?yo(e,vo(t)):""}function yo(e,t){return e?t?e+" "+t:e:t||""}function vo(e){return Array.isArray(e)?D$(e):We(e)?B$(e):typeof e=="string"?e:""}function D$(e){for(var t="",r,i=0,n=e.length;i<n;i++)P(r=vo(e[i]))&&r!==""&&(t&&(t+=" "),t+=r);return t}function B$(e){var t="";for(var r in e)e[r]&&(t&&(t+=" "),t+=r);return t}var U$={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},L$=wt("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),_o=wt("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),am=function(e){return L$(e)||_o(e)};function W$(e){if(_o(e))return"svg";if(e==="math")return"math"}var Xi=Object.create(null);function q$(e){if(!rt)return!0;if(am(e))return!1;if(e=e.toLowerCase(),Xi[e]!=null)return Xi[e];var t=document.createElement(e);return e.indexOf("-")>-1?Xi[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Xi[e]=/HTMLUnknownElement/.test(t.toString())}var As=wt("text,number,password,search,email,tel,url");function G$(e){if(typeof e=="string"){var t=document.querySelector(e);return t||document.createElement("div")}else return e}function H$(e,t){var r=document.createElement(e);return e!=="select"||t.data&&t.data.attrs&&t.data.attrs.multiple!==void 0&&r.setAttribute("multiple","multiple"),r}function F$(e,t){return document.createElementNS(U$[e],t)}function j$(e){return document.createTextNode(e)}function V$(e){return document.createComment(e)}function K$(e,t,r){e.insertBefore(t,r)}function Z$(e,t){e.removeChild(t)}function Q$(e,t){e.appendChild(t)}function Y$(e){return e.parentNode}function X$(e){return e.nextSibling}function J$(e){return e.tagName}function e1(e,t){e.textContent=t}function t1(e,t){e.setAttribute(t,"")}var r1=Object.freeze({__proto__:null,createElement:H$,createElementNS:F$,createTextNode:j$,createComment:V$,insertBefore:K$,removeChild:Z$,appendChild:Q$,parentNode:Y$,nextSibling:X$,tagName:J$,setTextContent:e1,setStyleScope:t1}),i1={create:function(e,t){Dr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Dr(e,!0),Dr(t))},destroy:function(e){Dr(e,!0)}};function Dr(e,t){var r=e.data.ref;if(P(r)){var i=e.context,n=e.componentInstance||e.elm,a=t?null:n,s=t?void 0:n;if(Ce(r)){er(r,i,[a],i,"template ref function");return}var o=e.data.refInFor,l=typeof r=="string"||typeof r=="number",d=kt(r),p=i.$refs;if(l||d){if(o){var f=l?p[r]:r.value;t?fe(f)&&rr(f,n):fe(f)?f.includes(n)||f.push(n):l?(p[r]=[n],wd(i,r,p[r])):r.value=[n]}else if(l){if(t&&p[r]!==n)return;p[r]=s,wd(i,r,a)}else if(d){if(t&&r.value!==n)return;r.value=a}}}}function wd(e,t,r){var i=e._setupState;i&&He(i,t)&&(kt(i[t])?i[t].value=r:i[t]=r)}var Vt=new tt("",{},[]),ei=["create","activate","update","remove","destroy"];function or(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&P(e.data)===P(t.data)&&n1(e,t)||Ie(e.isAsyncPlaceholder)&&oe(t.asyncFactory.error))}function n1(e,t){if(e.tag!=="input")return!0;var r,i=P(r=e.data)&&P(r=r.attrs)&&r.type,n=P(r=t.data)&&P(r=r.attrs)&&r.type;return i===n||As(i)&&As(n)}function a1(e,t,r){var i,n,a={};for(i=t;i<=r;++i)n=e[i].key,P(n)&&(a[n]=i);return a}function s1(e){var t,r,i={},n=e.modules,a=e.nodeOps;for(t=0;t<ei.length;++t)for(i[ei[t]]=[],r=0;r<n.length;++r)P(n[r][ei[t]])&&i[ei[t]].push(n[r][ei[t]]);function s(z){return new tt(a.tagName(z).toLowerCase(),{},[],void 0,z)}function o(z,A){function I(){--I.listeners===0&&l(z)}return I.listeners=A,I}function l(z){var A=a.parentNode(z);P(A)&&a.removeChild(A,z)}function d(z,A,I,W,H,V,Z){if(P(z.elm)&&P(V)&&(z=V[Z]=_s(z)),z.isRootInsert=!H,!p(z,A,I,W)){var G=z.data,te=z.children,U=z.tag;P(U)?(z.elm=z.ns?a.createElementNS(z.ns,U):a.createElement(U,z),_(z),v(z,te,A),P(G)&&S(z,A),y(I,z.elm,W)):Ie(z.isComment)?(z.elm=a.createComment(z.text),y(I,z.elm,W)):(z.elm=a.createTextNode(z.text),y(I,z.elm,W))}}function p(z,A,I,W){var H=z.data;if(P(H)){var V=P(z.componentInstance)&&H.keepAlive;if(P(H=H.hook)&&P(H=H.init)&&H(z,!1),P(z.componentInstance))return f(z,A),y(I,z.elm,W),Ie(V)&&g(z,A,I,W),!0}}function f(z,A){P(z.data.pendingInsert)&&(A.push.apply(A,z.data.pendingInsert),z.data.pendingInsert=null),z.elm=z.componentInstance.$el,b(z)?(S(z,A),_(z)):(Dr(z),A.push(z))}function g(z,A,I,W){for(var H,V=z;V.componentInstance;)if(V=V.componentInstance._vnode,P(H=V.data)&&P(H=H.transition)){for(H=0;H<i.activate.length;++H)i.activate[H](Vt,V);A.push(V);break}y(I,z.elm,W)}function y(z,A,I){P(z)&&(P(I)?a.parentNode(I)===z&&a.insertBefore(z,A,I):a.appendChild(z,A))}function v(z,A,I){if(fe(A))for(var W=0;W<A.length;++W)d(A[W],I,z.elm,null,!0,A,W);else Ei(z.text)&&a.appendChild(z.elm,a.createTextNode(String(z.text)))}function b(z){for(;z.componentInstance;)z=z.componentInstance._vnode;return P(z.tag)}function S(z,A){for(var I=0;I<i.create.length;++I)i.create[I](Vt,z);t=z.data.hook,P(t)&&(P(t.create)&&t.create(Vt,z),P(t.insert)&&A.push(z))}function _(z){var A;if(P(A=z.fnScopeId))a.setStyleScope(z.elm,A);else for(var I=z;I;)P(A=I.context)&&P(A=A.$options._scopeId)&&a.setStyleScope(z.elm,A),I=I.parent;P(A=yr)&&A!==z.context&&A!==z.fnContext&&P(A=A.$options._scopeId)&&a.setStyleScope(z.elm,A)}function w(z,A,I,W,H,V){for(;W<=H;++W)d(I[W],V,z,A,!1,I,W)}function k(z){var A,I,W=z.data;if(P(W))for(P(A=W.hook)&&P(A=A.destroy)&&A(z),A=0;A<i.destroy.length;++A)i.destroy[A](z);if(P(A=z.children))for(I=0;I<z.children.length;++I)k(z.children[I])}function T(z,A,I){for(;A<=I;++A){var W=z[A];P(W)&&(P(W.tag)?(E(W),k(W)):l(W.elm))}}function E(z,A){if(P(A)||P(z.data)){var I,W=i.remove.length+1;for(P(A)?A.listeners+=W:A=o(z.elm,W),P(I=z.componentInstance)&&P(I=I._vnode)&&P(I.data)&&E(I,A),I=0;I<i.remove.length;++I)i.remove[I](z,A);P(I=z.data.hook)&&P(I=I.remove)?I(z,A):A()}else l(z.elm)}function M(z,A,I,W,H){for(var V=0,Z=0,G=A.length-1,te=A[0],U=A[G],L=I.length-1,Y=I[0],J=I[L],ge,Be,Ue,it,Rt=!H;V<=G&&Z<=L;)oe(te)?te=A[++V]:oe(U)?U=A[--G]:or(te,Y)?($(te,Y,W,I,Z),te=A[++V],Y=I[++Z]):or(U,J)?($(U,J,W,I,L),U=A[--G],J=I[--L]):or(te,J)?($(te,J,W,I,L),Rt&&a.insertBefore(z,te.elm,a.nextSibling(U.elm)),te=A[++V],J=I[--L]):or(U,Y)?($(U,Y,W,I,Z),Rt&&a.insertBefore(z,U.elm,te.elm),U=A[--G],Y=I[++Z]):(oe(ge)&&(ge=a1(A,V,G)),Be=P(Y.key)?ge[Y.key]:O(Y,A,V,G),oe(Be)?d(Y,W,z,te.elm,!1,I,Z):(Ue=A[Be],or(Ue,Y)?($(Ue,Y,W,I,Z),A[Be]=void 0,Rt&&a.insertBefore(z,Ue.elm,te.elm)):d(Y,W,z,te.elm,!1,I,Z)),Y=I[++Z]);V>G?(it=oe(I[L+1])?null:I[L+1].elm,w(z,it,I,Z,L,W)):Z>L&&T(A,V,G)}function O(z,A,I,W){for(var H=I;H<W;H++){var V=A[H];if(P(V)&&or(z,V))return H}}function $(z,A,I,W,H,V){if(z!==A){P(A.elm)&&P(W)&&(A=W[H]=_s(A));var Z=A.elm=z.elm;if(Ie(z.isAsyncPlaceholder)){P(A.asyncFactory.resolved)?Q(z.elm,A,I):A.isAsyncPlaceholder=!0;return}if(Ie(A.isStatic)&&Ie(z.isStatic)&&A.key===z.key&&(Ie(A.isCloned)||Ie(A.isOnce))){A.componentInstance=z.componentInstance;return}var G,te=A.data;P(te)&&P(G=te.hook)&&P(G=G.prepatch)&&G(z,A);var U=z.children,L=A.children;if(P(te)&&b(A)){for(G=0;G<i.update.length;++G)i.update[G](z,A);P(G=te.hook)&&P(G=G.update)&&G(z,A)}oe(A.text)?P(U)&&P(L)?U!==L&&M(Z,U,L,I,V):P(L)?(P(z.text)&&a.setTextContent(Z,""),w(Z,null,L,0,L.length-1,I)):P(U)?T(U,0,U.length-1):P(z.text)&&a.setTextContent(Z,""):z.text!==A.text&&a.setTextContent(Z,A.text),P(te)&&P(G=te.hook)&&P(G=G.postpatch)&&G(z,A)}}function D(z,A,I){if(Ie(I)&&P(z.parent))z.parent.data.pendingInsert=A;else for(var W=0;W<A.length;++W)A[W].data.hook.insert(A[W])}var F=wt("attrs,class,staticClass,staticStyle,key");function Q(z,A,I,W){var H,V=A.tag,Z=A.data,G=A.children;if(W=W||Z&&Z.pre,A.elm=z,Ie(A.isComment)&&P(A.asyncFactory))return A.isAsyncPlaceholder=!0,!0;if(P(Z)&&(P(H=Z.hook)&&P(H=H.init)&&H(A,!0),P(H=A.componentInstance)))return f(A,I),!0;if(P(V)){if(P(G))if(!z.hasChildNodes())v(A,G,I);else if(P(H=Z)&&P(H=H.domProps)&&P(H=H.innerHTML)){if(H!==z.innerHTML)return!1}else{for(var te=!0,U=z.firstChild,L=0;L<G.length;L++){if(!U||!Q(U,G[L],I,W)){te=!1;break}U=U.nextSibling}if(!te||U)return!1}if(P(Z)){var Y=!1;for(var J in Z)if(!F(J)){Y=!0,S(A,I);break}!Y&&Z.class&&Cn(Z.class)}}else z.data!==A.text&&(z.data=A.text);return!0}return function(A,I,W,H){if(oe(I)){P(A)&&k(A);return}var V=!1,Z=[];if(oe(A))V=!0,d(I,Z);else{var G=P(A.nodeType);if(!G&&or(A,I))$(A,I,Z,null,null,H);else{if(G){if(A.nodeType===1&&A.hasAttribute(Kl)&&(A.removeAttribute(Kl),W=!0),Ie(W)&&Q(A,I,Z))return D(I,Z,!0),A;A=s(A)}var te=A.elm,U=a.parentNode(te);if(d(I,Z,te._leaveCb?null:U,a.nextSibling(te)),P(I.parent))for(var L=I.parent,Y=b(I);L;){for(var J=0;J<i.destroy.length;++J)i.destroy[J](L);if(L.elm=I.elm,Y){for(var ge=0;ge<i.create.length;++ge)i.create[ge](Vt,L);var Be=L.data.hook.insert;if(Be.merged)for(var Ue=Be.fns.slice(1),it=0;it<Ue.length;it++)Ue[it]()}else Dr(L);L=L.parent}P(U)?T([A],0,0):P(A.tag)&&k(A)}}return D(I,Z,V),I.elm}}var o1={create:ha,update:ha,destroy:function(t){ha(t,Vt)}};function ha(e,t){(e.data.directives||t.data.directives)&&u1(e,t)}function u1(e,t){var r=e===Vt,i=t===Vt,n=bd(e.data.directives,e.context),a=bd(t.data.directives,t.context),s=[],o=[],l,d,p;for(l in a)d=n[l],p=a[l],d?(p.oldValue=d.value,p.oldArg=d.arg,ti(p,"update",t,e),p.def&&p.def.componentUpdated&&o.push(p)):(ti(p,"bind",t,e),p.def&&p.def.inserted&&s.push(p));if(s.length){var f=function(){for(var g=0;g<s.length;g++)ti(s[g],"inserted",t,e)};r?jt(t,"insert",f):f()}if(o.length&&jt(t,"postpatch",function(){for(var g=0;g<o.length;g++)ti(o[g],"componentUpdated",t,e)}),!r)for(l in n)a[l]||ti(n[l],"unbind",e,e,i)}var l1=Object.create(null);function bd(e,t){var r=Object.create(null);if(!e)return r;var i,n;for(i=0;i<e.length;i++){if(n=e[i],n.modifiers||(n.modifiers=l1),r[d1(n)]=n,t._setupState&&t._setupState.__sfc){var a=n.def||zn(t,"_setupState","v-"+n.name);typeof a=="function"?n.def={bind:a,update:a}:n.def=a}n.def=n.def||zn(t.$options,"directives",n.name)}return r}function d1(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function ti(e,t,r,i,n){var a=e.def&&e.def[t];if(a)try{a(r.elm,e,r,i,n)}catch(s){$r(s,r.context,"directive ".concat(e.name," ").concat(t," hook"))}}var c1=[i1,o1];function $d(e,t){var r=t.componentOptions;if(!(P(r)&&r.Ctor.options.inheritAttrs===!1)&&!(oe(e.data.attrs)&&oe(t.data.attrs))){var i,n,a,s=t.elm,o=e.data.attrs||{},l=t.data.attrs||{};(P(l.__ob__)||Ie(l._v_attr_proxy))&&(l=t.data.attrs=Te({},l));for(i in l)n=l[i],a=o[i],a!==n&&xd(s,i,n,t.data.pre);(Gr||Mh)&&l.value!==o.value&&xd(s,"value",l.value);for(i in o)oe(l[i])&&(go(i)?s.removeAttributeNS(zs,nm(i)):im(i)||s.removeAttribute(i))}}function xd(e,t,r,i){i||e.tagName.indexOf("-")>-1?Sd(e,t,r):M$(t)?An(r)?e.removeAttribute(t):(r=t==="allowfullscreen"&&e.tagName==="EMBED"?"true":t,e.setAttribute(t,r)):im(t)?e.setAttribute(t,N$(t,r)):go(t)?An(r)?e.removeAttributeNS(zs,nm(t)):e.setAttributeNS(zs,t,r):Sd(e,t,r)}function Sd(e,t,r){if(An(r))e.removeAttribute(t);else{if(Gr&&!Hr&&e.tagName==="TEXTAREA"&&t==="placeholder"&&r!==""&&!e.__ieph){var i=function(n){n.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,r)}}var p1={create:$d,update:$d};function Td(e,t){var r=t.elm,i=t.data,n=e.data;if(!(oe(i.staticClass)&&oe(i.class)&&(oe(n)||oe(n.staticClass)&&oe(n.class)))){var a=R$(t),s=r._transitionClasses;P(s)&&(a=yo(a,vo(s))),a!==r._prevClass&&(r.setAttribute("class",a),r._prevClass=a)}}var f1={create:Td,update:Td},ma="__r",ga="__c";function h1(e){if(P(e[ma])){var t=Gr?"change":"input";e[t]=[].concat(e[ma],e[t]||[]),delete e[ma]}P(e[ga])&&(e.change=[].concat(e[ga],e.change||[]),delete e[ga])}var Ti;function m1(e,t,r){var i=Ti;return function n(){var a=t.apply(null,arguments);a!==null&&sm(e,n,r,i)}}var g1=$s&&!(Zl&&Number(Zl[1])<=53);function y1(e,t,r,i){if(g1){var n=em,a=t;t=a._wrapper=function(s){if(s.target===s.currentTarget||s.timeStamp>=n||s.timeStamp<=0||s.target.ownerDocument!==document)return a.apply(this,arguments)}}Ti.addEventListener(e,t,Rh?{capture:r,passive:i}:r)}function sm(e,t,r,i){(i||Ti).removeEventListener(e,t._wrapper||t,r)}function ya(e,t){if(!(oe(e.data.on)&&oe(t.data.on))){var r=t.data.on||{},i=e.data.on||{};Ti=t.elm||e.elm,h1(r),Wh(r,i,y1,sm,m1,t.context),Ti=void 0}}var v1={create:ya,update:ya,destroy:function(e){return ya(e,Vt)}},Ji;function kd(e,t){if(!(oe(e.data.domProps)&&oe(t.data.domProps))){var r,i,n=t.elm,a=e.data.domProps||{},s=t.data.domProps||{};(P(s.__ob__)||Ie(s._v_attr_proxy))&&(s=t.data.domProps=Te({},s));for(r in a)r in s||(n[r]="");for(r in s){if(i=s[r],r==="textContent"||r==="innerHTML"){if(t.children&&(t.children.length=0),i===a[r])continue;n.childNodes.length===1&&n.removeChild(n.childNodes[0])}if(r==="value"&&n.tagName!=="PROGRESS"){n._value=i;var o=oe(i)?"":String(i);_1(n,o)&&(n.value=o)}else if(r==="innerHTML"&&_o(n.tagName)&&oe(n.innerHTML)){Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>".concat(i,"</svg>");for(var l=Ji.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;l.firstChild;)n.appendChild(l.firstChild)}else if(i!==a[r])try{n[r]=i}catch{}}}}function _1(e,t){return!e.composing&&(e.tagName==="OPTION"||w1(e,t)||b1(e,t))}function w1(e,t){var r=!0;try{r=document.activeElement!==e}catch{}return r&&e.value!==t}function b1(e,t){var r=e.value,i=e._vModifiers;if(P(i)){if(i.number)return wi(r)!==wi(t);if(i.trim)return r.trim()!==t.trim()}return r!==t}var $1={create:kd,update:kd},x1=Cr(function(e){var t={},r=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(r).forEach(function(n){if(n){var a=n.split(i);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t});function va(e){var t=om(e.style);return e.staticStyle?Te(e.staticStyle,t):t}function om(e){return Array.isArray(e)?Eh(e):typeof e=="string"?x1(e):e}function S1(e,t){for(var r={},i,n=e;n.componentInstance;)n=n.componentInstance._vnode,n&&n.data&&(i=va(n.data))&&Te(r,i);(i=va(e.data))&&Te(r,i);for(var a=e;a=a.parent;)a.data&&(i=va(a.data))&&Te(r,i);return r}var T1=/^--/,Cd=/\s*!important$/,Id=function(e,t,r){if(T1.test(t))e.style.setProperty(t,r);else if(Cd.test(r))e.style.setProperty(zi(t),r.replace(Cd,""),"important");else{var i=k1(t);if(Array.isArray(r))for(var n=0,a=r.length;n<a;n++)e.style[i]=r[n];else e.style[i]=r}},Ed=["Webkit","Moz","ms"],en,k1=Cr(function(e){if(en=en||document.createElement("div").style,e=_r(e),e!=="filter"&&e in en)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<Ed.length;r++){var i=Ed[r]+t;if(i in en)return i}});function zd(e,t){var r=t.data,i=e.data;if(!(oe(r.staticStyle)&&oe(r.style)&&oe(i.staticStyle)&&oe(i.style))){var n,a,s=t.elm,o=i.staticStyle,l=i.normalizedStyle||i.style||{},d=o||l,p=om(t.data.style)||{};t.data.normalizedStyle=P(p.__ob__)?Te({},p):p;var f=S1(t);for(a in d)oe(f[a])&&Id(s,a,"");for(a in f)n=f[a],Id(s,a,n??"")}}var C1={create:zd,update:zd},um=/\s+/;function lm(e,t){if(!(!t||!(t=t.trim())))if(e.classList)t.indexOf(" ")>-1?t.split(um).forEach(function(i){return e.classList.add(i)}):e.classList.add(t);else{var r=" ".concat(e.getAttribute("class")||""," ");r.indexOf(" "+t+" ")<0&&e.setAttribute("class",(r+t).trim())}}function dm(e,t){if(!(!t||!(t=t.trim())))if(e.classList)t.indexOf(" ")>-1?t.split(um).forEach(function(n){return e.classList.remove(n)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var r=" ".concat(e.getAttribute("class")||""," "),i=" "+t+" ";r.indexOf(i)>=0;)r=r.replace(i," ");r=r.trim(),r?e.setAttribute("class",r):e.removeAttribute("class")}}function cm(e){if(e){if(typeof e=="object"){var t={};return e.css!==!1&&Te(t,Ad(e.name||"v")),Te(t,e),t}else if(typeof e=="string")return Ad(e)}}var Ad=Cr(function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}}),pm=rt&&!Hr,Mr="transition",_a="animation",_n="transition",On="transitionend",Os="animation",fm="animationend";pm&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(_n="WebkitTransition",On="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Os="WebkitAnimation",fm="webkitAnimationEnd"));var Od=rt?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function hm(e){Od(function(){Od(e)})}function vr(e,t){var r=e._transitionClasses||(e._transitionClasses=[]);r.indexOf(t)<0&&(r.push(t),lm(e,t))}function Ot(e,t){e._transitionClasses&&rr(e._transitionClasses,t),dm(e,t)}function mm(e,t,r){var i=gm(e,t),n=i.type,a=i.timeout,s=i.propCount;if(!n)return r();var o=n===Mr?On:fm,l=0,d=function(){e.removeEventListener(o,p),r()},p=function(f){f.target===e&&++l>=s&&d()};setTimeout(function(){l<s&&d()},a+1),e.addEventListener(o,p)}var I1=/\b(transform|all)(,|$)/;function gm(e,t){var r=window.getComputedStyle(e),i=(r[_n+"Delay"]||"").split(", "),n=(r[_n+"Duration"]||"").split(", "),a=Nd(i,n),s=(r[Os+"Delay"]||"").split(", "),o=(r[Os+"Duration"]||"").split(", "),l=Nd(s,o),d,p=0,f=0;t===Mr?a>0&&(d=Mr,p=a,f=n.length):t===_a?l>0&&(d=_a,p=l,f=o.length):(p=Math.max(a,l),d=p>0?a>l?Mr:_a:null,f=d?d===Mr?n.length:o.length:0);var g=d===Mr&&I1.test(r[_n+"Property"]);return{type:d,timeout:p,propCount:f,hasTransform:g}}function Nd(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(r,i){return Md(r)+Md(e[i])}))}function Md(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Ns(e,t){var r=e.elm;P(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var i=cm(e.data.transition);if(!oe(i)&&!(P(r._enterCb)||r.nodeType!==1)){for(var n=i.css,a=i.type,s=i.enterClass,o=i.enterToClass,l=i.enterActiveClass,d=i.appearClass,p=i.appearToClass,f=i.appearActiveClass,g=i.beforeEnter,y=i.enter,v=i.afterEnter,b=i.enterCancelled,S=i.beforeAppear,_=i.appear,w=i.afterAppear,k=i.appearCancelled,T=i.duration,E=yr,M=yr.$vnode;M&&M.parent;)E=M.context,M=M.parent;var O=!E._isMounted||!e.isRootInsert;if(!(O&&!_&&_!=="")){var $=O&&d?d:s,D=O&&f?f:l,F=O&&p?p:o,Q=O&&S||g,z=O&&Ce(_)?_:y,A=O&&w||v,I=O&&k||b,W=wi(We(T)?T.enter:T),H=n!==!1&&!Hr,V=wo(z),Z=r._enterCb=$n(function(){H&&(Ot(r,F),Ot(r,D)),Z.cancelled?(H&&Ot(r,$),I&&I(r)):A&&A(r),r._enterCb=null});e.data.show||jt(e,"insert",function(){var G=r.parentNode,te=G&&G._pending&&G._pending[e.key];te&&te.tag===e.tag&&te.elm._leaveCb&&te.elm._leaveCb(),z&&z(r,Z)}),Q&&Q(r),H&&(vr(r,$),vr(r,D),hm(function(){Ot(r,$),Z.cancelled||(vr(r,F),V||(vm(W)?setTimeout(Z,W):mm(r,a,Z)))})),e.data.show&&(t&&t(),z&&z(r,Z)),!H&&!V&&Z()}}}function ym(e,t){var r=e.elm;P(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());var i=cm(e.data.transition);if(oe(i)||r.nodeType!==1)return t();if(P(r._leaveCb))return;var n=i.css,a=i.type,s=i.leaveClass,o=i.leaveToClass,l=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,g=i.leaveCancelled,y=i.delayLeave,v=i.duration,b=n!==!1&&!Hr,S=wo(p),_=wi(We(v)?v.leave:v),w=r._leaveCb=$n(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),b&&(Ot(r,o),Ot(r,l)),w.cancelled?(b&&Ot(r,s),g&&g(r)):(t(),f&&f(r)),r._leaveCb=null});y?y(k):k();function k(){w.cancelled||(!e.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),d&&d(r),b&&(vr(r,s),vr(r,l),hm(function(){Ot(r,s),w.cancelled||(vr(r,o),S||(vm(_)?setTimeout(w,_):mm(r,a,w)))})),p&&p(r,w),!b&&!S&&w())}}function vm(e){return typeof e=="number"&&!isNaN(e)}function wo(e){if(oe(e))return!1;var t=e.fns;return P(t)?wo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Rd(e,t){t.data.show!==!0&&Ns(t)}var E1=rt?{create:Rd,activate:Rd,remove:function(e,t){e.data.show!==!0?ym(e,t):t()}}:{},z1=[p1,f1,v1,$1,C1,E1],A1=z1.concat(c1),O1=s1({nodeOps:r1,modules:A1});Hr&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&bo(e,"input")});var _m={inserted:function(e,t,r,i){r.tag==="select"?(i.elm&&!i.elm._vOptions?jt(r,"postpatch",function(){_m.componentUpdated(e,t,r)}):Pd(e,t,r.context),e._vOptions=[].map.call(e.options,Nn)):(r.tag==="textarea"||As(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",N1),e.addEventListener("compositionend",Ud),e.addEventListener("change",Ud),Hr&&(e.vmodel=!0)))},componentUpdated:function(e,t,r){if(r.tag==="select"){Pd(e,t,r.context);var i=e._vOptions,n=e._vOptions=[].map.call(e.options,Nn);if(n.some(function(s,o){return!wr(s,i[o])})){var a=e.multiple?t.value.some(function(s){return Bd(s,n)}):t.value!==t.oldValue&&Bd(t.value,n);a&&bo(e,"change")}}}};function Pd(e,t,r){Dd(e,t),(Gr||Mh)&&setTimeout(function(){Dd(e,t)},0)}function Dd(e,t,r){var i=t.value,n=e.multiple;if(!(n&&!Array.isArray(i))){for(var a,s,o=0,l=e.options.length;o<l;o++)if(s=e.options[o],n)a=Ah(i,Nn(s))>-1,s.selected!==a&&(s.selected=a);else if(wr(Nn(s),i)){e.selectedIndex!==o&&(e.selectedIndex=o);return}n||(e.selectedIndex=-1)}}function Bd(e,t){return t.every(function(r){return!wr(r,e)})}function Nn(e){return"_value"in e?e._value:e.value}function N1(e){e.target.composing=!0}function Ud(e){e.target.composing&&(e.target.composing=!1,bo(e.target,"input"))}function bo(e,t){var r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),e.dispatchEvent(r)}function Ms(e){return e.componentInstance&&(!e.data||!e.data.transition)?Ms(e.componentInstance._vnode):e}var M1={bind:function(e,t,r){var i=t.value;r=Ms(r);var n=r.data&&r.data.transition,a=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;i&&n?(r.data.show=!0,Ns(r,function(){e.style.display=a})):e.style.display=i?a:"none"},update:function(e,t,r){var i=t.value,n=t.oldValue;if(!i!=!n){r=Ms(r);var a=r.data&&r.data.transition;a?(r.data.show=!0,i?Ns(r,function(){e.style.display=e.__vOriginalDisplay}):ym(r,function(){e.style.display="none"})):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,r,i,n){n||(e.style.display=e.__vOriginalDisplay)}},R1={model:_m,show:M1},wm={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Rs(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Rs(Vh(t.children)):e}function bm(e){var t={},r=e.$options;for(var i in r.propsData)t[i]=e[i];var n=r._parentListeners;for(var i in n)t[_r(i)]=n[i];return t}function Ld(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function P1(e){for(;e=e.parent;)if(e.data.transition)return!0}function D1(e,t){return t.key===e.key&&t.tag===e.tag}var B1=function(e){return e.tag||$i(e)},U1=function(e){return e.name==="show"},L1={name:"transition",props:wm,abstract:!0,render:function(e){var t=this,r=this.$slots.default;if(r&&(r=r.filter(B1),!!r.length)){var i=this.mode,n=r[0];if(P1(this.$vnode))return n;var a=Rs(n);if(!a)return n;if(this._leaving)return Ld(e,n);var s="__transition-".concat(this._uid,"-");a.key=a.key==null?a.isComment?s+"comment":s+a.tag:Ei(a.key)?String(a.key).indexOf(s)===0?a.key:s+a.key:a.key;var o=(a.data||(a.data={})).transition=bm(this),l=this._vnode,d=Rs(l);if(a.data.directives&&a.data.directives.some(U1)&&(a.data.show=!0),d&&d.data&&!D1(a,d)&&!$i(d)&&!(d.componentInstance&&d.componentInstance._vnode.isComment)){var p=d.data.transition=Te({},o);if(i==="out-in")return this._leaving=!0,jt(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Ld(e,n);if(i==="in-out"){if($i(a))return l;var f,g=function(){f()};jt(o,"afterEnter",g),jt(o,"enterCancelled",g),jt(p,"delayLeave",function(y){f=y})}}return n}}},$m=Te({tag:String,moveClass:String},wm);delete $m.mode;var W1={props:$m,beforeMount:function(){var e=this,t=this._update;this._update=function(r,i){var n=Yh(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,n(),t.call(e,r,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),i=this.prevChildren=this.children,n=this.$slots.default||[],a=this.children=[],s=bm(this),o=0;o<n.length;o++){var l=n[o];l.tag&&l.key!=null&&String(l.key).indexOf("__vlist")!==0&&(a.push(l),r[l.key]=l,(l.data||(l.data={})).transition=s)}if(i){for(var d=[],p=[],o=0;o<i.length;o++){var l=i[o];l.data.transition=s,l.data.pos=l.elm.getBoundingClientRect(),r[l.key]?d.push(l):p.push(l)}this.kept=e(t,null,d),this.removed=p}return e(t,null,a)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,t)||(e.forEach(q1),e.forEach(G1),e.forEach(H1),this._reflow=document.body.offsetHeight,e.forEach(function(r){if(r.data.moved){var i=r.elm,n=i.style;vr(i,t),n.transform=n.WebkitTransform=n.transitionDuration="",i.addEventListener(On,i._moveCb=function a(s){s&&s.target!==i||(!s||/transform$/.test(s.propertyName))&&(i.removeEventListener(On,a),i._moveCb=null,Ot(i,t))})}}))},methods:{hasMove:function(e,t){if(!pm)return!1;if(this._hasMove)return this._hasMove;var r=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(n){dm(r,n)}),lm(r,t),r.style.display="none",this.$el.appendChild(r);var i=gm(r);return this.$el.removeChild(r),this._hasMove=i.hasTransform}}};function q1(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function G1(e){e.data.newPos=e.elm.getBoundingClientRect()}function H1(e){var t=e.data.pos,r=e.data.newPos,i=t.left-r.left,n=t.top-r.top;if(i||n){e.data.moved=!0;var a=e.elm.style;a.transform=a.WebkitTransform="translate(".concat(i,"px,").concat(n,"px)"),a.transitionDuration="0s"}}var F1={Transition:L1,TransitionGroup:W1};Ae.config.mustUseProp=A$;Ae.config.isReservedTag=am;Ae.config.isReservedAttr=E$;Ae.config.getTagNamespace=W$;Ae.config.isUnknownElement=q$;Te(Ae.options.directives,R1);Te(Ae.options.components,F1);Ae.prototype.__patch__=rt?O1:Pe;Ae.prototype.$mount=function(e,t){return e=e&&rt?G$(e):void 0,Rb(this,e,t)};rt&&setTimeout(function(){at.devtools&&xn&&xn.emit("init",Ae)},0);/*!
 * ONNX Runtime Web v1.24.3
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var $o=Object.defineProperty,j1=Object.getOwnPropertyDescriptor,V1=Object.getOwnPropertyNames,K1=Object.prototype.hasOwnProperty,Z1=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),j=(e,t)=>()=>(e&&(t=e(e=0)),t),Vr=(e,t)=>{for(var r in t)$o(e,r,{get:t[r],enumerable:!0})},Q1=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of V1(t))!K1.call(e,n)&&n!==r&&$o(e,n,{get:()=>t[n],enumerable:!(i=j1(t,n))||i.enumerable});return e},ki=e=>Q1($o({},"__esModule",{value:!0}),e),ri,qt,mr,Wd,xm,Sm=j(()=>{ri=new Map,qt=[],mr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=ri.get(e);if(i===void 0)ri.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=qt.indexOf(e);n!==-1&&qt.splice(n,1);for(let a=0;a<qt.length;a++)if(ri.get(qt[a]).priority<=r){qt.splice(a,0,e);return}qt.push(e)}return}throw new TypeError("not a valid backend")},Wd=async e=>{let t=ri.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},xm=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?qt:r,n,a=[],s=new Set;for(let l of i){let d=await Wd(l);typeof d=="string"?a.push({name:l,err:d}):(n||(n=d),n===d&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),Y1=j(()=>{Sm()}),Tm,X1=j(()=>{Tm="1.24.3"}),wa,Ne,km=j(()=>{X1(),wa="warning",Ne={wasm:{},webgl:{},webgpu:{},versions:{common:Tm},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);wa=e}},get logLevel(){return wa}},Object.defineProperty(Ne,"logLevel",{enumerable:!0})}),we,J1=j(()=>{km(),we=Ne}),Cm,Im,e2=j(()=>{Cm=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let p=a*n,f=0,g=p,y=p*2,v=-1;s==="RGBA"?(f=0,g=p,y=p*2,v=p*3):s==="RGB"?(f=0,g=p,y=p*2):s==="RBG"&&(f=0,y=p,g=p*2);for(let b=0;b<a;b++)for(let S=0;S<n;S++){let _=(e.data[f++]-d[0])*l[0],w=(e.data[g++]-d[1])*l[1],k=(e.data[y++]-d[2])*l[2],T=v===-1?255:(e.data[v++]-d[3])*l[3];i.fillStyle="rgba("+_+","+w+","+k+","+T+")",i.fillRect(S,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Im=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let f=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,v=1,b=2,S=3,_=0,w=f,k=f*2,T=-1;o==="RGBA"?(_=0,w=f,k=f*2,T=f*3):o==="RGB"?(_=0,w=f,k=f*2):o==="RBG"&&(_=0,k=f,w=f*2),i=r.createImageData(n,a);for(let E=0;E<a*n;y+=g,v+=g,b+=g,S+=g,E++)i.data[y]=(e.data[_++]-p[0])*d[0],i.data[v]=(e.data[w++]-p[1])*d[1],i.data[b]=(e.data[k++]-p[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-p[3])*d[3]}else throw new Error("Can not access image data");return i}}),tn,Em,zm,Am,Om,Nm,t2=j(()=>{xo(),tn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,p=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,g=0,y=1,v=2,b=3,S=0,_=d,w=d*2,k=-1;o==="RGB"&&(f=3,g=0,y=1,v=2,b=-1),l==="RGBA"?k=d*3:l==="RBG"?(S=0,w=d,_=d*2):l==="BGR"&&(w=0,_=d,S=d*2);for(let T=0;T<d;T++,g+=f,v+=f,y+=f,b+=f)p[S++]=(e[g]+s[0])/a[0],p[_++]=(e[y]+s[1])/a[1],p[w++]=(e[v]+s[2])/a[2],k!==-1&&b!==-1&&(p[k++]=(e[b]+s[3])/a[3]);return l==="RGBA"?new Ye("float32",p,[1,4,r,i]):new Ye("float32",p,[1,3,r,i])},Em=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=g,o.width=y}else o.tensorFormat="RGBA",o.height=g,o.width=y;f.drawImage(e,0,0),s=f.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=p,o.width=f,t!==void 0){let g=l();g.width=f,g.height=p;let y=d(g);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=l();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let g=e.height,y=e.width;return f.drawImage(e,0,0,y,g),s=f.getImageData(0,0,y,g).data,o.height=g,o.width=y,tn(s,o)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,f)=>{let g=l(),y=d(g);if(!e||!y)return f();let v=new Image;v.crossOrigin="Anonymous",v.src=e,v.onload=()=>{g.width=v.width,g.height=v.height,y.drawImage(v,0,0,g.width,g.height);let b=y.getImageData(0,0,g.width,g.height);o.height=g.height,o.width=g.width,p(tn(b.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return tn(s,o);throw new Error("Input data provided is not supported - aborted tensor creation")},zm=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new Ye({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},Am=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Ye({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Om=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Ye({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},Nm=(e,t,r)=>new Ye({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),pr,hi,ba,Mm,r2=j(()=>{pr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),hi=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ba=!1,Mm=()=>{if(!ba){ba=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(pr.set("int64",BigInt64Array),hi.set(BigInt64Array,"int64")),t&&(pr.set("uint64",BigUint64Array),hi.set(BigUint64Array,"uint64")),i?(pr.set("float16",r),hi.set(r,"float16")):pr.set("float16",Uint16Array)}}}),Rm,Pm,i2=j(()=>{xo(),Rm=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Pm=(e,t)=>{switch(e.location){case"cpu":return new Ye(e.type,e.data,t);case"cpu-pinned":return new Ye({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ye({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ye({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ye({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ye,xo=j(()=>{e2(),t2(),r2(),i2(),Ye=class{constructor(e,t,r){Mm();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=pr.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=pr.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=hi.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(o===void 0)o=[s.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=s,this.dataLocation="cpu"}let a=Rm(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Em(e,t)}static fromTexture(e,t){return zm(e,t)}static fromGpuBuffer(e,t){return Am(e,t)}static fromMLTensor(e,t){return Om(e,t)}static fromPinnedBuffer(e,t,r){return Nm(e,t,r)}toDataURL(e){return Cm(this,e)}toImageData(e){return Im(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Pm(this,e)}}}),gt,Dm=j(()=>{xo(),gt=Ye}),Ci,$a,_t,st,Zt,Qt,Bm=j(()=>{km(),Ci=(e,t)=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||console.timeStamp(`${e}::ORT::${t}`)},$a=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let s=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(s+=`::${t}`),Ci("CPU",s);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},_t=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||$a("BEGIN",e)},st=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||$a("END",e)},Zt=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||console.time(`ORT::${e}`)},Qt=e=>{(typeof Ne.trace>"u"?!Ne.wasm.trace:!Ne.trace)||console.timeEnd(`ORT::${e}`)}}),Um,n2=j(()=>{Sm(),Dm(),Bm(),Um=class Lm{constructor(t){this.handler=t}async run(t,r,i){_t(),Zt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof gt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof gt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let g=r[f];(g===null||g instanceof gt)&&(d=!0,s=!1,n[f]=g)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,a),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let p=o[d];p instanceof gt?l[d]=p:l[d]=new gt(p.type,p.data,p.dims)}return Qt("InferenceSession.run"),st(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){_t(),Zt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(g=t.byteLength-f,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||f+g>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,f,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await xm(s),d=await o.createInferenceSessionHandler(a,l);return Qt("InferenceSession.create"),st(),new Lm(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),qn,a2=j(()=>{n2(),qn=Um}),s2=j(()=>{}),o2=j(()=>{}),u2=j(()=>{}),l2=j(()=>{}),Wm={};Vr(Wm,{InferenceSession:()=>qn,TRACE:()=>Ci,TRACE_EVENT_BEGIN:()=>Zt,TRACE_EVENT_END:()=>Qt,TRACE_FUNC_BEGIN:()=>_t,TRACE_FUNC_END:()=>st,Tensor:()=>gt,env:()=>we,registerBackend:()=>mr});var ut=j(()=>{Y1(),J1(),a2(),Dm(),s2(),o2(),Bm(),u2(),l2()}),So=j(()=>{}),qm={};Vr(qm,{default:()=>Gm});var xa,Sa,Gm,d2=j(()=>{var e;Kv(),Ir(),To(),xa="ort-wasm-proxy-worker",Sa=((e=globalThis.self)==null?void 0:e.name)===xa,Sa&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":ko(i.wasm).then(()=>{Go(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:a}=i;Ho(a,n).then(()=>{postMessage({type:r})},s=>{postMessage({type:r,err:s})});break}case"copy-from":{let{buffer:n}=i,a=Ln(n);postMessage({type:r,out:a});break}case"create":{let{model:n,options:a}=i;Fo(n,a).then(s=>{postMessage({type:r,out:s})},s=>{postMessage({type:r,err:s})});break}case"release":jo(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:a,inputs:s,outputIndices:o,options:l}=i;Vo(n,a,s,o,new Array(o.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},Zo([...s,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":Ko(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),Gm=Sa?null:t=>new Worker(t??Qe,{type:"module",name:xa})}),Hm={};Vr(Hm,{default:()=>Fm});async function qd(e={}){var Fl,jl;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((Fl=self.name)==null?void 0:Fl.startsWith("em-pthread"));t.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Zc||(t.Zc=new Map)).set(u,c)},t.unmountExternalData=()=>{delete t.Zc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,ae:!0}).buffer.constructor;let a=u=>async(...c)=>{var m;try{if(t.$c)throw Error("Session already started");let h=t.$c={Nd:c[0],errors:[]},x=await u(...c);if(t.$c!==h)throw Error("Session mismatch");(m=t.gd)==null||m.flush();let C=h.errors;if(0<C.length){let N=await Promise.all(C);if(N=N.filter(B=>B),0<N.length)throw Error(N.join(`
`))}return x}finally{t.$c=null}};t.jsepInit=(u,c)=>{if(u==="webgpu"){[t.gd,t.Dd,t.Hd,t.jd,t.Gd,t.ac,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=c;let m=t.gd;t.jsepRegisterBuffer=(h,x,C,N)=>m.registerBuffer(h,x,C,N),t.jsepGetBuffer=h=>m.getBuffer(h),t.jsepCreateDownloader=(h,x,C)=>m.createDownloader(h,x,C),t.jsepOnCreateSession=h=>{m.onCreateSession(h)},t.jsepOnReleaseSession=h=>{m.onReleaseSession(h)},t.jsepOnRunStart=h=>m.onRunStart(h),t.Ld=(h,x)=>{m.upload(h,x)}}else if(u==="webnn"){let m=c[0];[t.Zd,t.vd,t.webnnEnsureTensor,t.xd,t.webnnDownloadTensor,t.Yd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.xd,t.webnnRegisterMLContext=t.Yd,t.webnnOnRunStart=h=>m.onRunStart(h),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=h=>{m.onReleaseSession(h)},t.webnnCreateMLTensorDownloader=(h,x)=>m.createMLTensorDownloader(h,x),t.webnnRegisterMLTensor=(h,x,C,N)=>m.registerMLTensor(h,x,C,N),t.webnnCreateMLContext=h=>m.createMLContext(h),t.webnnRegisterMLConstant=(h,x,C,N,B,K)=>m.registerMLConstant(h,x,C,N,B,t.Zc,K),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let u=c=>(...m)=>{let h=$t;return m=c(...m),$t!=h?new Promise((x,C)=>{Jn={resolve:x,reject:C}}):m};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=u(t[c])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s==null||s()};var o,l,d=(u,c)=>{throw c},p=import.meta.url,f="";if(r||i){try{f=new URL(".",p).href}catch{}i&&(l=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),o=async u=>{if(O(u))return new Promise((m,h)=>{var x=new XMLHttpRequest;x.open("GET",u,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?m(x.response):h(x.status)},x.onerror=h,x.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var g,y,v,b,S,_,w=console.log.bind(console),k=console.error.bind(console),T=w,E=k,M=!1,O=u=>u.startsWith("file://");function $(){Bt.buffer!=F.buffer&&L()}if(n){let u=function(c){try{var m=c.data,h=m.Uc;if(h==="load"){let x=[];self.onmessage=C=>x.push(C),_=()=>{postMessage({Uc:"loaded"});for(let C of x)u(C);self.onmessage=u};for(let C of m.Ad)t[C]&&!t[C].proxy||(t[C]=(...N)=>{postMessage({Uc:"callHandler",zd:C,args:N})},C=="print"&&(T=t[C]),C=="printErr"&&(E=t[C]));Bt=m.Vd,L(),y=m.Wd,Be(),ji()}else if(h==="run"){(function(x){var C=($(),W)[x+52>>>2>>>0];x=($(),W)[x+56>>>2>>>0],el(C,C-x),de(C)})(m.Tc),na(m.Tc,0,0,1,0,0),tu(),Qn(m.Tc),D||(Ku(),D=!0);try{h_(m.Pd,m.dd)}catch(x){if(x!="unwind")throw x}}else m.target!=="setimmediate"&&(h==="checkMailbox"?D&&Ui():h&&(E(`worker: received unknown command ${h}`),E(m)))}catch(x){throw Zu(),x}};var D=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}var F,Q,z,A,I,W,H,V,Z,G,te,U=!1;function L(){var u=Bt.buffer;t.HEAP8=F=new Int8Array(u),z=new Int16Array(u),t.HEAPU8=Q=new Uint8Array(u),A=new Uint16Array(u),t.HEAP32=I=new Int32Array(u),t.HEAPU32=W=new Uint32Array(u),H=new Float32Array(u),V=new Float64Array(u),Z=new BigInt64Array(u),G=new BigUint64Array(u)}function Y(){U=!0,n?_():It.tb()}function J(u){throw E(u="Aborted("+u+")"),M=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S==null||S(u),u}function ge(){return{a:{ma:D0,hb:P0,g:m_,J:g_,f:y_,o:v_,h:__,ha:w_,b:b_,T:$_,Ia:ou,n:x_,_:cu,Ya:pu,Ea:fu,Ga:hu,Za:mu,Wa:gu,Pa:yu,Va:vu,ka:_u,Fa:wu,Ca:bu,Xa:$u,Da:xu,cb:S_,ea:T_,xa:k_,va:I_,da:z_,O:A_,H:O_,wa:N_,Z:L_,ya:W_,Sa:q_,Aa:H_,Ja:F_,ta:j_,fa:V_,Ra:Qn,$a:K_,R:X_,s:i0,c:Kn,ib:n0,y:a0,M:s0,D:o0,m:u0,t:Au,jb:l0,I:d0,S:c0,j:p0,v:f0,r:h0,l:m0,Ma:g0,Na:y0,Oa:v0,Ka:Ru,La:Pu,ua:Du,eb:w0,bb:$0,u:x0,aa:S0,ga:T0,ab:b0,V:k0,_a:C0,Ba:I0,F:_0,U:E0,la:Hi,za:A0,gb:z0,fb:O0,Ta:Wu,Ua:qu,Ha:Kr,$:Gu,ja:Hu,Qa:Fu,ia:ju,lb:ww,na:fw,mb:_w,oa:pw,G:iw,d:W0,q:U0,w:B0,B:Y0,pb:lw,K:ew,x:G0,pa:dw,X:hw,ba:uw,nb:vw,ob:yw,ra:nw,qa:ow,qb:aw,N:tw,Y:cw,e:q0,A:H0,k:L0,kb:bw,p:j0,z:V0,C:F0,E:K0,L:X0,rb:rw,Q:mw,ca:J0,W:gw,sb:Q0,sa:Z0,P:sw,i:M0,a:Bt,db:Ze}}}async function Be(){function u(h,x){var C=It=h.exports;h={};for(let[N,B]of Object.entries(C))typeof B=="function"?(C=Z_(B),h[N]=C):h[N]=B;return It=h,It=function(){var N=It,B=X=>le=>X(le)>>>0,K=X=>()=>X()>>>0;return(N=Object.assign({},N)).ub=B(N.ub),N.Yb=K(N.Yb),N._b=B(N._b),N.mc=B(N.mc),N.nc=K(N.nc),N.rc=B(N.rc),N}(),Jo.push(It.$b),Vu=(h=It).ub,Ku=h.vb,t._OrtInit=h.wb,t._OrtGetLastError=h.xb,t._OrtCreateSessionOptions=h.yb,t._OrtAppendExecutionProvider=h.zb,t._OrtAddFreeDimensionOverride=h.Ab,t._OrtAddSessionConfigEntry=h.Bb,t._OrtReleaseSessionOptions=h.Cb,t._OrtCreateSession=h.Db,t._OrtReleaseSession=h.Eb,t._OrtGetInputOutputCount=h.Fb,t._OrtGetInputOutputMetadata=h.Gb,t._OrtFree=h.Hb,t._OrtCreateTensor=h.Ib,t._OrtGetTensorData=h.Jb,t._OrtReleaseTensor=h.Kb,t._OrtCreateRunOptions=h.Lb,t._OrtAddRunConfigEntry=h.Mb,t._OrtReleaseRunOptions=h.Nb,t._OrtCreateBinding=h.Ob,t._OrtBindInput=h.Pb,t._OrtBindOutput=h.Qb,t._OrtClearBoundOutputs=h.Rb,t._OrtReleaseBinding=h.Sb,t._OrtRunWithBinding=h.Tb,t._OrtRun=h.Ub,t._OrtEndProfiling=h.Vb,t._JsepOutput=h.Wb,t._JsepGetNodeName=h.Xb,Fi=h.Yb,xt=t._free=h.Zb,Yr=t._malloc=h._b,na=h.bc,Zu=h.cc,Qu=h.dc,Yu=h.ec,aa=h.fc,Xu=h.gc,Ju=h.hc,pe=h.ic,Xr=h.jc,el=h.kc,de=h.lc,sa=h.mc,ce=h.nc,tl=h.oc,oa=h.pc,rl=h.qc,il=h.rc,nl=h.sc,ua=h.tc,al=h.uc,sl=h.vc,ol=h.wc,ul=h.xc,ll=h.yc,dl=h.zc,cl=h.Ac,pl=h.Bc,fl=h.Cc,hl=h.Dc,ml=h.Ec,gl=h.Fc,yl=h.Gc,vl=h.Hc,_l=h.Ic,wl=h.Jc,bl=h.Kc,$l=h.Lc,xl=h.Mc,Sl=h.Nc,Tl=h.Oc,kl=h.Pc,Cl=h.Rc,Il=h.Sc,El=h.bd,zl=h.cd,Al=h.hd,Ol=h.kd,Nl=h.ld,Ml=h.md,Rl=h.nd,Pl=h.od,Dl=h.pd,Bl=h.qd,Ul=h.rd,Ll=h.wd,Wl=h.Rd,ql=h.Sd,Gl=h.Td,Hl=h.Ud,y=x,It}var c,m=ge();return t.instantiateWasm?new Promise(h=>{t.instantiateWasm(m,(x,C)=>{h(u(x,C))})}):n?u(new WebAssembly.Instance(y,ge()),y):(te??(te=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/frontend-onnx-demo/assets/ort-wasm-simd-threaded.jsep-C887KxcQ.wasm",import.meta.url).href),c=await async function(h){var x=te;if(!g&&!O(x))try{var C=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(C,h)}catch(N){E(`wasm streaming compile failed: ${N}`),E("falling back to ArrayBuffer instantiation")}return async function(N,B){try{var K=await async function(X){if(!g)try{var le=await o(X);return new Uint8Array(le)}catch{}if(X==te&&g)X=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";X=l(X)}return X}(N);return await WebAssembly.instantiate(K,B)}catch(X){E(`failed to asynchronously prepare wasm: ${X}`),J(X)}}(x,h)}(m),u(c.instance,c.module))}class Ue{constructor(c){Vl(this,"name","ExitStatus");this.message=`Program terminated with exit(${c})`,this.status=c}}var it=u=>{u.terminate(),u.onmessage=()=>{}},Rt=[],Ke=0,Fe=null,Pt=u=>{Dt.length==0&&(iu(),ru(Dt[0]));var c=Dt.pop();if(!c)return 6;Zr.push(c),nr[u.Tc]=c,c.Tc=u.Tc;var m={Uc:"run",Pd:u.Od,dd:u.dd,Tc:u.Tc};return c.postMessage(m,u.ud),0},xe=0,ae=(u,c,...m)=>{var h,x=16*m.length,C=ce(),N=sa(x),B=N>>>3;for(h of m)typeof h=="bigint"?(($(),Z)[B++>>>0]=1n,($(),Z)[B++>>>0]=h):(($(),Z)[B++>>>0]=0n,($(),V)[B++>>>0]=h);return u=Qu(u,0,x,N,c),de(C),u};function Ze(u){if(n)return ae(0,1,u);if(v=u,!(0<xe)){for(var c of Zr)it(c);for(c of Dt)it(c);Dt=[],Zr=[],nr={},M=!0}d(0,new Ue(u))}function Mi(u){if(n)return ae(1,0,u);Kr(u)}var Kr=u=>{if(v=u,n)throw Mi(u),"unwind";Ze(u)},Dt=[],Zr=[],Jo=[],nr={},eu=u=>{var c=u.Tc;delete nr[c],Dt.push(u),Zr.splice(Zr.indexOf(u),1),u.Tc=0,Yu(c)};function tu(){Jo.forEach(u=>u())}var ru=u=>new Promise(c=>{u.onmessage=x=>{var C=x.data;if(x=C.Uc,C.ad&&C.ad!=Fi()){var N=nr[C.ad];N?N.postMessage(C,C.ud):E(`Internal error! Worker sent a message "${x}" to target pthread ${C.ad}, but that thread no longer exists!`)}else x==="checkMailbox"?Ui():x==="spawnThread"?Pt(C):x==="cleanupThread"?Bi(()=>{eu(nr[C.Qd])}):x==="loaded"?(u.loaded=!0,c(u)):C.target==="setimmediate"?u.postMessage(C):x==="uncaughtException"?u.onerror(C.error):x==="callHandler"?t[C.zd](...C.args):x&&E(`worker sent an unknown command ${x}`)},u.onerror=x=>{throw E(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var m,h=[];for(m of[])t.propertyIsEnumerable(m)&&h.push(m);u.postMessage({Uc:"load",Ad:h,Vd:Bt,Wd:y})});function iu(){var u=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Dt.push(u)}var Bt,h_=(u,c)=>{xe=0,u=ua(u,c),0<xe?v=u:aa(u)},Ri=[],Pi=0;function m_(u){var c=new Hn(u>>>=0);return($(),F)[c.Vc+12>>>0]==0&&(nu(c,!0),Pi--),au(c,!1),Ri.push(c),il(u)}var zr=0,g_=()=>{pe(0,0);var u=Ri.pop();tl(u.ed),zr=0};function nu(u,c){c=c?1:0,($(),F)[u.Vc+12>>>0]=c}function au(u,c){c=c?1:0,($(),F)[u.Vc+13>>>0]=c}class Hn{constructor(c){this.ed=c,this.Vc=c-24}}var Fn=u=>{var c=zr;if(!c)return Xr(0),0;var m=new Hn(c);($(),W)[m.Vc+16>>>2>>>0]=c;var h=($(),W)[m.Vc+4>>>2>>>0];if(!h)return Xr(0),c;for(var x of u){if(x===0||x===h)break;if(rl(x,h,m.Vc+16))return Xr(x),c}return Xr(h),c};function y_(){return Fn([])}function v_(u){return Fn([u>>>0])}function __(u,c,m,h){return Fn([u>>>0,c>>>0,m>>>0,h>>>0])}var w_=()=>{var u=Ri.pop();u||J("no exception to throw");var c=u.ed;throw($(),F)[u.Vc+13>>>0]==0&&(Ri.push(u),au(u,!0),nu(u,!1),Pi++),oa(c),zr=c};function b_(u,c,m){var h=new Hn(u>>>=0);throw c>>>=0,m>>>=0,($(),W)[h.Vc+16>>>2>>>0]=0,($(),W)[h.Vc+4>>>2>>>0]=c,($(),W)[h.Vc+8>>>2>>>0]=m,oa(u),Pi++,zr=u}var $_=()=>Pi;function su(u,c,m,h){return n?ae(2,1,u,c,m,h):ou(u,c,m,h)}function ou(u,c,m,h){if(u>>>=0,c>>>=0,m>>>=0,h>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return n&&x.length===0?su(u,c,m,h):(u={Od:m,Tc:u,dd:h,ud:x},n?(u.Uc="spawnThread",postMessage(u,x),0):Pt(u))}function x_(u){throw zr||(zr=u>>>0),zr}var uu=globalThis.TextDecoder&&new TextDecoder,lu=(u,c,m,h)=>{if(m=c+m,h)return m;for(;u[c]&&!(c>=m);)++c;return c},du=(u,c=0,m,h)=>{if(16<(m=lu(u,c>>>=0,m,h))-c&&u.buffer&&uu)return uu.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,m):u.slice(c,m));for(h="";c<m;){var x=u[c++];if(128&x){var C=63&u[c++];if((224&x)==192)h+=String.fromCharCode((31&x)<<6|C);else{var N=63&u[c++];65536>(x=(240&x)==224?(15&x)<<12|C<<6|N:(7&x)<<18|C<<12|N<<6|63&u[c++])?h+=String.fromCharCode(x):(x-=65536,h+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else h+=String.fromCharCode(x)}return h},ze=(u,c,m)=>(u>>>=0)?du(($(),Q),u,c,m):"";function cu(u,c,m){return n?ae(3,1,u,c,m):0}function pu(u,c){if(n)return ae(4,1,u,c)}function fu(u,c){if(n)return ae(5,1,u,c)}function hu(u,c,m){if(n)return ae(6,1,u,c,m)}function mu(u,c,m){return n?ae(7,1,u,c,m):0}function gu(u,c){if(n)return ae(8,1,u,c)}function yu(u,c,m){if(n)return ae(9,1,u,c,m)}function vu(u,c,m,h){if(n)return ae(10,1,u,c,m,h)}function _u(u,c,m,h){if(n)return ae(11,1,u,c,m,h)}function wu(u,c,m,h){if(n)return ae(12,1,u,c,m,h)}function bu(u){if(n)return ae(13,1,u)}function $u(u,c){if(n)return ae(14,1,u,c)}function xu(u,c,m){if(n)return ae(15,1,u,c,m)}var S_=()=>J(""),bt=u=>{u>>>=0;for(var c="";;){var m=($(),Q)[u++>>>0];if(!m)return c;c+=String.fromCharCode(m)}},jn={},Vn={},Ar=class extends Error{constructor(u){super(u),this.name="BindingError"}};function Ct(u,c,m={}){return function(h,x,C={}){var N=x.name;if(!h)throw new Ar(`type "${N}" must have a positive integer typeid pointer`);if(Vn.hasOwnProperty(h)){if(C.Bd)return;throw new Ar(`Cannot register type '${N}' twice`)}Vn[h]=x,jn.hasOwnProperty(h)&&(x=jn[h],delete jn[h],x.forEach(B=>B()))}(u,c,m)}var Su=(u,c,m)=>{switch(c){case 1:return m?h=>($(),F)[h>>>0]:h=>($(),Q)[h>>>0];case 2:return m?h=>($(),z)[h>>>1>>>0]:h=>($(),A)[h>>>1>>>0];case 4:return m?h=>($(),I)[h>>>2>>>0]:h=>($(),W)[h>>>2>>>0];case 8:return m?h=>($(),Z)[h>>>3>>>0]:h=>($(),G)[h>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${u}`)}};function T_(u,c,m,h,x){u>>>=0,m>>>=0,c=bt(c>>>0);let C=N=>N;if(h=h===0n){let N=8*m;C=B=>BigInt.asUintN(N,B),x=C(x)}Ct(u,{name:c,Qc:C,Xc:(N,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Wc:Su(c,m,!h),Yc:null})}function k_(u,c,m,h){Ct(u>>>=0,{name:c=bt(c>>>0),Qc:function(x){return!!x},Xc:function(x,C){return C?m:h},Wc:function(x){return this.Qc(($(),Q)[x>>>0])},Yc:null})}var Tu=[],ar=[0,1,,1,null,1,!0,1,!1,1];function Kn(u){9<(u>>>=0)&&--ar[u+1]==0&&(ar[u]=void 0,Tu.push(u))}var nt=u=>{if(!u)throw new Ar(`Cannot use deleted val. handle = ${u}`);return ar[u]},lt=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Tu.pop()||ar.length;return ar[c]=u,ar[c+1]=1,c}};function Zn(u){return this.Qc(($(),W)[u>>>2>>>0])}var C_={name:"emscripten::val",Qc:u=>{var c=nt(u);return Kn(u),c},Xc:(u,c)=>lt(c),Wc:Zn,Yc:null};function I_(u){return Ct(u>>>0,C_)}var E_=(u,c)=>{switch(c){case 4:return function(m){return this.Qc(($(),H)[m>>>2>>>0])};case 8:return function(m){return this.Qc(($(),V)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${u}`)}};function z_(u,c,m){m>>>=0,Ct(u>>>=0,{name:c=bt(c>>>0),Qc:h=>h,Xc:(h,x)=>x,Wc:E_(c,m),Yc:null})}function A_(u,c,m,h,x){u>>>=0,m>>>=0,c=bt(c>>>0);let C=B=>B;if(h===0){var N=32-8*m;C=B=>B<<N>>>N,x=C(x)}Ct(u,{name:c,Qc:C,Xc:(B,K)=>K,Wc:Su(c,m,h!==0),Yc:null})}function O_(u,c,m){function h(C){var N=($(),W)[C>>>2>>>0];return C=($(),W)[C+4>>>2>>>0],new x(($(),F).buffer,C,N)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];Ct(u>>>=0,{name:m=bt(m>>>0),Qc:h,Wc:h},{Bd:!0})}var Ut=(u,c,m)=>{var h=($(),Q);if(c>>>=0,0<m){var x=c;m=c+m-1;for(var C=0;C<u.length;++C){var N=u.codePointAt(C);if(127>=N){if(c>=m)break;h[c++>>>0]=N}else if(2047>=N){if(c+1>=m)break;h[c++>>>0]=192|N>>6,h[c++>>>0]=128|63&N}else if(65535>=N){if(c+2>=m)break;h[c++>>>0]=224|N>>12,h[c++>>>0]=128|N>>6&63,h[c++>>>0]=128|63&N}else{if(c+3>=m)break;h[c++>>>0]=240|N>>18,h[c++>>>0]=128|N>>12&63,h[c++>>>0]=128|N>>6&63,h[c++>>>0]=128|63&N,C++}}h[c>>>0]=0,u=c-x}else u=0;return u},Di=u=>{for(var c=0,m=0;m<u.length;++m){var h=u.charCodeAt(m);127>=h?c++:2047>=h?c+=2:55296<=h&&57343>=h?(c+=4,++m):c+=3}return c};function N_(u,c){Ct(u>>>=0,{name:c=bt(c>>>0),Qc(m){var h=($(),W)[m>>>2>>>0];return h=ze(m+4,h,!0),xt(m),h},Xc(m,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var x=typeof h=="string";if(!(x||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1))throw new Ar("Cannot pass non-string to std::string");var C=x?Di(h):h.length,N=Yr(4+C+1),B=N+4;return($(),W)[N>>>2>>>0]=C,x?Ut(h,B,C+1):($(),Q).set(h,B>>>0),m!==null&&m.push(xt,N),N},Wc:Zn,Yc(m){xt(m)}})}var ku=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,M_=(u,c,m)=>{if(u>>>=1,16<(c=lu(($(),A),u,c/2,m))-u&&ku)return ku.decode(($(),A).slice(u,c));for(m="";u<c;++u){var h=($(),A)[u>>>0];m+=String.fromCharCode(h)}return m},R_=(u,c,m)=>{if(m??(m=2147483647),2>m)return 0;var h=c;m=(m-=2)<2*u.length?m/2:u.length;for(var x=0;x<m;++x){var C=u.charCodeAt(x);($(),z)[c>>>1>>>0]=C,c+=2}return($(),z)[c>>>1>>>0]=0,c-h},P_=u=>2*u.length,D_=(u,c,m)=>{var h="";u>>>=2;for(var x=0;!(x>=c/4);x++){var C=($(),W)[u+x>>>0];if(!C&&!m)break;h+=String.fromCodePoint(C)}return h},B_=(u,c,m)=>{if(c>>>=0,m??(m=2147483647),4>m)return 0;var h=c;m=h+m-4;for(var x=0;x<u.length;++x){var C=u.codePointAt(x);if(65535<C&&x++,($(),I)[c>>>2>>>0]=C,(c+=4)+4>m)break}return($(),I)[c>>>2>>>0]=0,c-h},U_=u=>{for(var c=0,m=0;m<u.length;++m)65535<u.codePointAt(m)&&m++,c+=4;return c};function L_(u,c,m){if(u>>>=0,c>>>=0,m=bt(m>>>=0),c===2)var h=M_,x=R_,C=P_;else h=D_,x=B_,C=U_;Ct(u,{name:m,Qc:N=>{var B=($(),W)[N>>>2>>>0];return B=h(N+4,B*c,!0),xt(N),B},Xc:(N,B)=>{if(typeof B!="string")throw new Ar(`Cannot pass non-string to C++ string type ${m}`);var K=C(B),X=Yr(4+K+c);return($(),W)[X>>>2>>>0]=K/c,x(B,X+4,K+c),N!==null&&N.push(xt,X),X},Wc:Zn,Yc(N){xt(N)}})}function W_(u,c){Ct(u>>>=0,{Cd:!0,name:c=bt(c>>>0),Qc:()=>{},Xc:()=>{}})}function q_(u){na(u>>>0,!i,1,!r,131072,!1),tu()}var Bi=u=>{if(!M)try{if(u(),!(0<xe))try{n?Fi()&&aa(v):Kr(v)}catch(c){c instanceof Ue||c=="unwind"||d(0,c)}}catch(c){c instanceof Ue||c=="unwind"||d(0,c)}},G_=!Atomics.waitAsync||((jl=globalThis.navigator)==null?void 0:jl.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Qn(u){u>>>=0,G_||(Atomics.waitAsync(($(),I),u>>>2,u).value.then(Ui),u+=128,Atomics.store(($(),I),u>>>2,1))}var Ui=()=>Bi(()=>{var u=Fi();u&&(Qn(u),Ju())});function H_(u,c){(u>>>=0)==c>>>0?setTimeout(Ui):n?postMessage({ad:u,Uc:"checkMailbox"}):(u=nr[u])&&u.postMessage({Uc:"checkMailbox"})}var Yn=[];function F_(u,c,m,h,x){for(c>>>=0,x>>>=0,Yn.length=0,m=x>>>3,h=x+h>>>3;m<h;){var C;C=($(),Z)[m++>>>0]?($(),Z)[m++>>>0]:($(),V)[m++>>>0],Yn.push(C)}return(c?la[c]:R0[u])(...Yn)}var j_=()=>{xe=0};function V_(u){u>>>=0,n?postMessage({Uc:"cleanupThread",Qd:u}):eu(nr[u])}function K_(u){}var Li=u=>{try{u()}catch(c){J(c)}};function Z_(u){var c=(...m)=>{Wi.push(u);try{return u(...m)}finally{M||(Wi.pop(),$t&&Lt===1&&Wi.length===0&&(Lt=0,xe+=1,Li(ql),typeof Fibers<"u"&&Fibers.ce()))}};return Eu.set(u,c),c}var Lt=0,$t=null,Cu=0,Wi=[],Xn=new Map,Iu=new Map,Eu=new Map,Q_=0,Jn=null,Y_=[],zu=u=>function(c){if(!M){if(Lt===0){var m=!1,h=!1;c((x=0)=>{if(!M&&(Cu=x,m=!0,h)){Lt=2,Li(()=>Gl($t)),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.resume(),x=!1;try{var C=function(){var K=($(),I)[$t+8>>>2>>>0];return K=Iu.get(K),K=Eu.get(K),--xe,K()}()}catch(K){C=K,x=!0}var N=!1;if(!$t){var B=Jn;B&&(Jn=null,(x?B.reject:B.resolve)(C),N=!0)}if(x&&!N)throw C}}),h=!0,m||(Lt=1,$t=function(){var x=Yr(65548),C=x+12;if(($(),W)[x>>>2>>>0]=C,($(),W)[x+4>>>2>>>0]=C+65536,C=Wi[0],!Xn.has(C)){var N=Q_++;Xn.set(C,N),Iu.set(N,C)}return C=Xn.get(C),($(),I)[x+8>>>2>>>0]=C,x}(),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.pause(),Li(()=>Wl($t)))}else Lt===2?(Lt=0,Li(Hl),xt($t),$t=null,Y_.forEach(Bi)):J(`invalid state: ${Lt}`);return Cu}}(c=>{u().then(c)});function X_(u){return u>>>=0,zu(async()=>{var c=await nt(u);return lt(c)})}var ea=[],J_=u=>{var c=ea.length;return ea.push(u),c},e0=(u,c)=>{for(var m=Array(u),h=0;h<u;++h){var x=h,C=($(),W)[c+4*h>>>2>>>0],N=Vn[C];if(N===void 0)throw u=`parameter ${h}`,C=Vu(C),c=bt(C),xt(C),new Ar(`${u} has unknown type ${c}`);m[x]=N}return m},t0=(u,c,m)=>{var h=[];return u=u(h,m),h.length&&(($(),W)[c>>>2>>>0]=lt(h)),u},r0={},qi=u=>{var c=r0[u];return c===void 0?bt(u):c};function i0(u,c,m){var[h,...x]=e0(u,c>>>0);c=h.Xc.bind(h);var C=x.map(K=>K.Wc.bind(K));u--;var N={toValue:nt};switch(u=C.map((K,X)=>{var le=`argFromPtr${X}`;return N[le]=K,`${le}(args${X?"+"+8*X:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:N.getStringOrSymbol=qi,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${u})`,h.Cd||(N.toReturnWire=c,N.emval_returnValue=t0,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(N),B)(...Object.values(N)),B=`methodCaller<(${x.map(K=>K.name)}) => ${h.name}>`,J_(Object.defineProperty(m,"name",{value:B}))}function n0(u,c){return c>>>=0,(u=nt(u>>>0))==nt(c)}function a0(u){return(u>>>=0)?(u=qi(u),lt(globalThis[u])):lt(globalThis)}function s0(u){return u=qi(u>>>0),lt(t[u])}function o0(u,c){return c>>>=0,u=nt(u>>>0),c=nt(c),lt(u[c])}function u0(u){9<(u>>>=0)&&(ar[u+1]+=1)}function Au(u,c,m,h,x){return ea[u>>>0](c>>>0,m>>>0,h>>>0,x>>>0)}function l0(u,c,m,h,x){return Au(u>>>0,c>>>0,m>>>0,h>>>0,x>>>0)}function d0(){return lt([])}function c0(u){u=nt(u>>>0);for(var c=Array(u.length),m=0;m<u.length;m++)c[m]=u[m];return lt(c)}function p0(u){return lt(qi(u>>>0))}function f0(){return lt({})}function h0(u){for(var c=nt(u>>>=0);c.length;){var m=c.pop();c.pop()(m)}Kn(u)}function m0(u,c,m){c>>>=0,m>>>=0,u=nt(u>>>0),c=nt(c),m=nt(m),u[c]=m}function g0(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),($(),I)[c>>>2>>>0]=u.getUTCSeconds(),($(),I)[c+4>>>2>>>0]=u.getUTCMinutes(),($(),I)[c+8>>>2>>>0]=u.getUTCHours(),($(),I)[c+12>>>2>>>0]=u.getUTCDate(),($(),I)[c+16>>>2>>>0]=u.getUTCMonth(),($(),I)[c+20>>>2>>>0]=u.getUTCFullYear()-1900,($(),I)[c+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),I)[c+28>>>2>>>0]=u}var Ou=u=>u%4==0&&(u%100!=0||u%400==0),Nu=[0,31,60,91,121,152,182,213,244,274,305,335],Mu=[0,31,59,90,120,151,181,212,243,273,304,334];function y0(u,c){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),c>>>=0,u=new Date(1e3*u),($(),I)[c>>>2>>>0]=u.getSeconds(),($(),I)[c+4>>>2>>>0]=u.getMinutes(),($(),I)[c+8>>>2>>>0]=u.getHours(),($(),I)[c+12>>>2>>>0]=u.getDate(),($(),I)[c+16>>>2>>>0]=u.getMonth(),($(),I)[c+20>>>2>>>0]=u.getFullYear()-1900,($(),I)[c+24>>>2>>>0]=u.getDay();var m=(Ou(u.getFullYear())?Nu:Mu)[u.getMonth()]+u.getDate()-1|0;($(),I)[c+28>>>2>>>0]=m,($(),I)[c+36>>>2>>>0]=-60*u.getTimezoneOffset(),m=new Date(u.getFullYear(),6,1).getTimezoneOffset();var h=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(m!=h&&u.getTimezoneOffset()==Math.min(h,m)),($(),I)[c+32>>>2>>>0]=u}function v0(u){u>>>=0;var c=new Date(($(),I)[u+20>>>2>>>0]+1900,($(),I)[u+16>>>2>>>0],($(),I)[u+12>>>2>>>0],($(),I)[u+8>>>2>>>0],($(),I)[u+4>>>2>>>0],($(),I)[u>>>2>>>0],0),m=($(),I)[u+32>>>2>>>0],h=c.getTimezoneOffset(),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),C=new Date(c.getFullYear(),0,1).getTimezoneOffset(),N=Math.min(C,x);return 0>m?($(),I)[u+32>>>2>>>0]=+(x!=C&&N==h):0<m!=(N==h)&&(x=Math.max(C,x),c.setTime(c.getTime()+6e4*((0<m?N:x)-h))),($(),I)[u+24>>>2>>>0]=c.getDay(),m=(Ou(c.getFullYear())?Nu:Mu)[c.getMonth()]+c.getDate()-1|0,($(),I)[u+28>>>2>>>0]=m,($(),I)[u>>>2>>>0]=c.getSeconds(),($(),I)[u+4>>>2>>>0]=c.getMinutes(),($(),I)[u+8>>>2>>>0]=c.getHours(),($(),I)[u+12>>>2>>>0]=c.getDate(),($(),I)[u+16>>>2>>>0]=c.getMonth(),($(),I)[u+20>>>2>>>0]=c.getYear(),u=c.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function Ru(u,c,m,h,x,C,N){return n?ae(16,1,u,c,m,h,x,C,N):-52}function Pu(u,c,m,h,x,C){if(n)return ae(17,1,u,c,m,h,x,C)}var Qr={},_0=()=>performance.timeOrigin+performance.now();function Du(u,c){if(n)return ae(18,1,u,c);if(Qr[u]&&(clearTimeout(Qr[u].id),delete Qr[u]),!c)return 0;var m=setTimeout(()=>{delete Qr[u],Bi(()=>Xu(u,performance.timeOrigin+performance.now()))},c);return Qr[u]={id:m,be:c},0}function w0(u,c,m,h){u>>>=0,c>>>=0,m>>>=0,h>>>=0;var x=new Date().getFullYear(),C=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var N=Math.max(C,x);($(),W)[u>>>2>>>0]=60*N,($(),I)[c>>>2>>>0]=+(C!=x),u=(c=B=>{var K=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(K/60)).padStart(2,"0")}${String(K%60).padStart(2,"0")}`})(C),c=c(x),x<C?(Ut(u,m,17),Ut(c,h,17)):(Ut(u,h,17),Ut(c,m,17))}var b0=()=>Date.now();function $0(u,c,m){return m>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),($(),Z)[m>>>3>>>0]=BigInt(u),0):28}var ta=[],Bu=(u,c)=>{ta.length=0;for(var m;m=($(),Q)[u++>>>0];){var h=m!=105;c+=(h&=m!=112)&&c%8?4:0,ta.push(m==112?($(),W)[c>>>2>>>0]:m==106?($(),Z)[c>>>3>>>0]:m==105?($(),I)[c>>>2>>>0]:($(),V)[c>>>3>>>0]),c+=h?8:4}return ta};function x0(u,c,m){return u>>>=0,c=Bu(c>>>0,m>>>0),la[u](...c)}function S0(u,c,m){return u>>>=0,c=Bu(c>>>0,m>>>0),la[u](...c)}var T0=()=>{};function k0(u,c){return E(ze(u>>>0,c>>>0))}var C0=()=>{throw xe+=1,"unwind"};function I0(){return 4294901760}var E0=()=>navigator.hardwareConcurrency,sr={},Gi=u=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+c[1]:0},Uu=u=>{for(var c of u)(u=Gi(c))&&(sr[u]=c)};function z0(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),Uu(u),sr.sd=Gi(u[3]),sr.Md=u,sr.sd}function Hi(u){if(!(u=sr[u>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(u))u=c[1];else{if(!(c=/^(.+?)@/.exec(u)))return 0;u=c[1]}xt(Hi.td??0),c=Di(u)+1;var m=Yr(c);return m&&Ut(u,m,c),Hi.td=m,Hi.td}function A0(u){u>>>=0;var c=($(),Q).length;if(u<=c||4294901760<u)return!1;for(var m=1;4>=m;m*=2){var h=c*(1+.2/m);h=Math.min(h,u+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(u,h)/65536))-Bt.buffer.byteLength+65535)/65536|0;try{Bt.grow(h),L();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function O0(u,c,m){if(u>>>=0,c>>>=0,sr.sd==u)var h=sr.Md;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),Uu(h);for(var x=3;h[x]&&Gi(h[x])!=u;)++x;for(u=0;u<m&&h[u+x];++u)($(),I)[c+4*u>>>2>>>0]=Gi(h[u+x]);return u}var ra,ia={},Lu=()=>{var h;if(!ra){var u,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((h=globalThis.navigator)==null?void 0:h.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in ia)ia[u]===void 0?delete c[u]:c[u]=ia[u];var m=[];for(u in c)m.push(`${u}=${c[u]}`);ra=m}return ra};function Wu(u,c){if(n)return ae(19,1,u,c);u>>>=0,c>>>=0;var m,h=0,x=0;for(m of Lu()){var C=c+h;($(),W)[u+x>>>2>>>0]=C,h+=Ut(m,C,1/0)+1,x+=4}return 0}function qu(u,c){if(n)return ae(20,1,u,c);u>>>=0,c>>>=0;var m=Lu();for(var h of(($(),W)[u>>>2>>>0]=m.length,u=0,m))u+=Di(h)+1;return($(),W)[c>>>2>>>0]=u,0}function Gu(u){return n?ae(21,1,u):52}function Hu(u,c,m,h){return n?ae(22,1,u,c,m,h):52}function Fu(u,c,m,h){return n?ae(23,1,u,c,m,h):70}var N0=[null,[],[]];function ju(u,c,m,h){if(n)return ae(24,1,u,c,m,h);c>>>=0,m>>>=0,h>>>=0;for(var x=0,C=0;C<m;C++){var N=($(),W)[c>>>2>>>0],B=($(),W)[c+4>>>2>>>0];c+=8;for(var K=0;K<B;K++){var X=u,le=($(),Q)[N+K>>>0],me=N0[X];le===0||le===10?((X===1?T:E)(du(me)),me.length=0):me.push(le)}x+=B}return($(),W)[h>>>2>>>0]=x,0}function M0(u){return u>>>0}n||function(){for(var u=t.numThreads-1;u--;)iu();Rt.push(async()=>{var c=async function(){if(!n)return Promise.all(Dt.map(ru))}();Ke++,await c,--Ke==0&&Fe&&(c=Fe,Fe=null,c())})}(),n||(Bt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),L()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>ce(),t.stackRestore=u=>de(u),t.stackAlloc=u=>sa(u),t.setValue=function(u,c,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":($(),F)[u>>>0]=c;break;case"i16":($(),z)[u>>>1>>>0]=c;break;case"i32":($(),I)[u>>>2>>>0]=c;break;case"i64":($(),Z)[u>>>3>>>0]=BigInt(c);break;case"float":($(),H)[u>>>2>>>0]=c;break;case"double":($(),V)[u>>>3>>>0]=c;break;case"*":($(),W)[u>>>2>>>0]=c;break;default:J(`invalid type for setValue: ${m}`)}},t.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return($(),F)[u>>>0];case"i16":return($(),z)[u>>>1>>>0];case"i32":return($(),I)[u>>>2>>>0];case"i64":return($(),Z)[u>>>3>>>0];case"float":return($(),H)[u>>>2>>>0];case"double":return($(),V)[u>>>3>>>0];case"*":return($(),W)[u>>>2>>>0];default:J(`invalid type for getValue: ${c}`)}},t.UTF8ToString=ze,t.stringToUTF8=Ut,t.lengthBytesUTF8=Di;var Vu,Ku,Fi,xt,Yr,na,Zu,Qu,Yu,aa,Xu,Ju,pe,Xr,el,de,sa,ce,tl,oa,rl,il,nl,ua,al,sl,ol,ul,ll,dl,cl,pl,fl,hl,ml,gl,yl,vl,_l,wl,bl,$l,xl,Sl,Tl,kl,Cl,Il,El,zl,Al,Ol,Nl,Ml,Rl,Pl,Dl,Bl,Ul,Ll,Wl,ql,Gl,Hl,It,R0=[Ze,Mi,su,cu,pu,fu,hu,mu,gu,yu,vu,_u,wu,bu,$u,xu,Ru,Pu,Du,Wu,qu,Gu,Hu,Fu,ju],la={929356:(u,c,m,h,x)=>{if(t===void 0||!t.Zc)return 1;if((u=ze(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Zc.get(u)))return 2;if(c=Number(c>>>0),m=Number(m>>>0),h=Number(h>>>0),c+m>u.byteLength)return 3;try{let C=u.subarray(c,c+m);switch(x){case 0:($(),Q).set(C,h>>>0);break;case 1:t.Xd?t.Xd(h,C):t.Ld(h,C);break;default:return 4}return 0}catch{return 4}},930180:(u,c,m)=>{t.xd(u,($(),Q).subarray(c>>>0,c+m>>>0))},930244:()=>t.Zd(),930286:u=>{t.vd(u)},930323:()=>{t.Ed()},930354:()=>{t.Fd()},930383:()=>{t.Jd()},930408:u=>t.Dd(u),930441:u=>t.Hd(u),930473:(u,c,m)=>{t.jd(Number(u),Number(c),Number(m),!0)},930536:(u,c,m)=>{t.jd(Number(u),Number(c),Number(m))},930593:()=>typeof wasmOffsetConverter<"u",930650:u=>{t.ac("Abs",u,void 0)},930701:u=>{t.ac("Neg",u,void 0)},930752:u=>{t.ac("Floor",u,void 0)},930805:u=>{t.ac("Ceil",u,void 0)},930857:u=>{t.ac("Reciprocal",u,void 0)},930915:u=>{t.ac("Sqrt",u,void 0)},930967:u=>{t.ac("Exp",u,void 0)},931018:u=>{t.ac("Erf",u,void 0)},931069:u=>{t.ac("Sigmoid",u,void 0)},931124:(u,c,m)=>{t.ac("HardSigmoid",u,{alpha:c,beta:m})},931203:u=>{t.ac("Log",u,void 0)},931254:u=>{t.ac("Sin",u,void 0)},931305:u=>{t.ac("Cos",u,void 0)},931356:u=>{t.ac("Tan",u,void 0)},931407:u=>{t.ac("Asin",u,void 0)},931459:u=>{t.ac("Acos",u,void 0)},931511:u=>{t.ac("Atan",u,void 0)},931563:u=>{t.ac("Sinh",u,void 0)},931615:u=>{t.ac("Cosh",u,void 0)},931667:u=>{t.ac("Asinh",u,void 0)},931720:u=>{t.ac("Acosh",u,void 0)},931773:u=>{t.ac("Atanh",u,void 0)},931826:u=>{t.ac("Tanh",u,void 0)},931878:u=>{t.ac("Not",u,void 0)},931929:(u,c,m)=>{t.ac("Clip",u,{min:c,max:m})},931998:u=>{t.ac("Clip",u,void 0)},932050:(u,c)=>{t.ac("Elu",u,{alpha:c})},932108:u=>{t.ac("Gelu",u,void 0)},932160:u=>{t.ac("Relu",u,void 0)},932212:(u,c)=>{t.ac("LeakyRelu",u,{alpha:c})},932276:(u,c)=>{t.ac("ThresholdedRelu",u,{alpha:c})},932346:(u,c)=>{t.ac("Cast",u,{to:c})},932404:u=>{t.ac("Add",u,void 0)},932455:u=>{t.ac("Sub",u,void 0)},932506:u=>{t.ac("Mul",u,void 0)},932557:u=>{t.ac("Div",u,void 0)},932608:u=>{t.ac("Pow",u,void 0)},932659:u=>{t.ac("Equal",u,void 0)},932712:u=>{t.ac("Greater",u,void 0)},932767:u=>{t.ac("GreaterOrEqual",u,void 0)},932829:u=>{t.ac("Less",u,void 0)},932881:u=>{t.ac("LessOrEqual",u,void 0)},932940:(u,c,m,h,x)=>{t.ac("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},933115:(u,c,m,h,x)=>{t.ac("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},933289:(u,c,m,h,x)=>{t.ac("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},933463:(u,c,m,h,x)=>{t.ac("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},933638:(u,c,m,h,x)=>{t.ac("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},933812:(u,c,m,h,x)=>{t.ac("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},933985:(u,c,m,h,x)=>{t.ac("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},934158:(u,c,m,h,x)=>{t.ac("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},934335:(u,c,m,h,x)=>{t.ac("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},934515:(u,c,m,h,x)=>{t.ac("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!m,axes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},934695:u=>{t.ac("Where",u,void 0)},934748:(u,c,m)=>{t.ac("Transpose",u,{perm:c?Array.from(($(),I).subarray(Number(c)>>>0,Number(m)>>>0)):[]})},934872:(u,c,m,h)=>{t.ac("DepthToSpace",u,{blocksize:c,mode:ze(m),format:h?"NHWC":"NCHW"})},935005:(u,c,m,h)=>{t.ac("DepthToSpace",u,{blocksize:c,mode:ze(m),format:h?"NHWC":"NCHW"})},935138:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se,Wt)=>{t.ac("ConvTranspose",u,{format:K?"NHWC":"NCHW",autoPad:c,dilations:[m],group:h,kernelShape:[x],pads:[C,N],strides:[B],wIsConst:()=>!!($(),F)[X>>>0],outputPadding:le?Array.from(($(),I).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:be?Array.from(($(),I).subarray(Number(be)>>>0,Number(Se)>>>0)):[],activation:ze(Wt)})},935571:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se)=>{t.ac("ConvTranspose",u,{format:B?"NHWC":"NCHW",autoPad:c,dilations:Array.from(($(),I).subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:h,kernelShape:Array.from(($(),I).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),I).subarray(Number(C)>>>0,4+(Number(C)>>>0)>>>0)),strides:Array.from(($(),I).subarray(Number(N)>>>0,2+(Number(N)>>>0)>>>0)),wIsConst:()=>!!($(),F)[K>>>0],outputPadding:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from(($(),I).subarray(Number(me)>>>0,Number(be)>>>0)):[],activation:ze(Se)})},936232:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se,Wt)=>{t.ac("ConvTranspose",u,{format:K?"NHWC":"NCHW",autoPad:c,dilations:[m],group:h,kernelShape:[x],pads:[C,N],strides:[B],wIsConst:()=>!!($(),F)[X>>>0],outputPadding:le?Array.from(($(),I).subarray(Number(le)>>>0,Number(me)>>>0)):[],outputShape:be?Array.from(($(),I).subarray(Number(be)>>>0,Number(Se)>>>0)):[],activation:ze(Wt)})},936665:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se)=>{t.ac("ConvTranspose",u,{format:B?"NHWC":"NCHW",autoPad:c,dilations:Array.from(($(),I).subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),group:h,kernelShape:Array.from(($(),I).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),I).subarray(Number(C)>>>0,4+(Number(C)>>>0)>>>0)),strides:Array.from(($(),I).subarray(Number(N)>>>0,2+(Number(N)>>>0)>>>0)),wIsConst:()=>!!($(),F)[K>>>0],outputPadding:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],outputShape:me?Array.from(($(),I).subarray(Number(me)>>>0,Number(be)>>>0)):[],activation:ze(Se)})},937326:(u,c)=>{t.ac("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},937417:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se)=>{t.ac("AveragePool",u,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:C?Array.from(($(),I).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from(($(),I).subarray(Number(B)>>>0,Number(K)>>>0)):[],pads:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),I).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},937896:(u,c)=>{t.ac("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},937987:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se)=>{t.ac("AveragePool",u,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:C?Array.from(($(),I).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from(($(),I).subarray(Number(B)>>>0,Number(K)>>>0)):[],pads:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),I).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},938466:(u,c)=>{t.ac("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},938553:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se)=>{t.ac("MaxPool",u,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:C?Array.from(($(),I).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from(($(),I).subarray(Number(B)>>>0,Number(K)>>>0)):[],pads:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),I).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},939028:(u,c)=>{t.ac("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},939115:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se)=>{t.ac("MaxPool",u,{format:Se?"NHWC":"NCHW",auto_pad:c,ceil_mode:m,count_include_pad:h,storage_order:x,dilations:C?Array.from(($(),I).subarray(Number(C)>>>0,Number(N)>>>0)):[],kernel_shape:B?Array.from(($(),I).subarray(Number(B)>>>0,Number(K)>>>0)):[],pads:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],strides:me?Array.from(($(),I).subarray(Number(me)>>>0,Number(be)>>>0)):[]})},939590:(u,c,m,h,x)=>{t.ac("Gemm",u,{alpha:c,beta:m,transA:h,transB:x})},939694:u=>{t.ac("MatMul",u,void 0)},939748:(u,c,m,h)=>{t.ac("ArgMax",u,{keepDims:!!c,selectLastIndex:!!m,axis:h})},939856:(u,c,m,h)=>{t.ac("ArgMin",u,{keepDims:!!c,selectLastIndex:!!m,axis:h})},939964:(u,c)=>{t.ac("Softmax",u,{axis:c})},940027:(u,c)=>{t.ac("Concat",u,{axis:c})},940087:(u,c,m,h,x)=>{t.ac("Split",u,{axis:c,numOutputs:m,splitSizes:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},940243:u=>{t.ac("Expand",u,void 0)},940297:(u,c)=>{t.ac("Gather",u,{axis:Number(c)})},940368:(u,c)=>{t.ac("GatherElements",u,{axis:Number(c)})},940447:(u,c)=>{t.ac("GatherND",u,{batch_dims:Number(c)})},940526:(u,c,m,h,x,C,N,B,K,X,le)=>{t.ac("Resize",u,{antialias:c,axes:m?Array.from(($(),I).subarray(Number(m)>>>0,Number(h)>>>0)):[],coordinateTransformMode:ze(x),cubicCoeffA:C,excludeOutside:N,extrapolationValue:B,keepAspectRatioPolicy:ze(K),mode:ze(X),nearestMode:ze(le)})},940888:(u,c,m,h,x,C,N)=>{t.ac("Slice",u,{starts:c?Array.from(($(),I).subarray(Number(c)>>>0,Number(m)>>>0)):[],ends:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[],axes:C?Array.from(($(),I).subarray(Number(C)>>>0,Number(N)>>>0)):[]})},941152:u=>{t.ac("Tile",u,void 0)},941204:(u,c,m)=>{t.ac("InstanceNormalization",u,{epsilon:c,format:m?"NHWC":"NCHW"})},941318:(u,c,m)=>{t.ac("InstanceNormalization",u,{epsilon:c,format:m?"NHWC":"NCHW"})},941432:u=>{t.ac("Range",u,void 0)},941485:(u,c)=>{t.ac("Einsum",u,{equation:ze(c)})},941566:(u,c,m,h,x)=>{t.ac("Pad",u,{mode:c,value:m,pads:h?Array.from(($(),I).subarray(Number(h)>>>0,Number(x)>>>0)):[]})},941709:(u,c,m,h,x,C)=>{t.ac("BatchNormalization",u,{epsilon:c,momentum:m,spatial:!!x,trainingMode:!!h,format:C?"NHWC":"NCHW"})},941878:(u,c,m,h,x,C)=>{t.ac("BatchNormalization",u,{epsilon:c,momentum:m,spatial:!!x,trainingMode:!!h,format:C?"NHWC":"NCHW"})},942047:(u,c,m)=>{t.ac("CumSum",u,{exclusive:Number(c),reverse:Number(m)})},942144:(u,c,m)=>{t.ac("DequantizeLinear",u,{axis:c,blockSize:m})},942234:(u,c,m,h,x)=>{t.ac("GridSample",u,{align_corners:c,mode:ze(m),padding_mode:ze(h),format:x?"NHWC":"NCHW"})},942404:(u,c,m,h,x)=>{t.ac("GridSample",u,{align_corners:c,mode:ze(m),padding_mode:ze(h),format:x?"NHWC":"NCHW"})},942574:(u,c)=>{t.ac("ScatterND",u,{reduction:ze(c)})},942659:(u,c,m,h,x,C,N,B,K)=>{t.ac("Attention",u,{numHeads:c,isUnidirectional:m,maskFilterValue:h,scale:x,doRotary:C,qkvHiddenSizes:N?Array.from(($(),I).subarray(Number(B)>>>0,Number(B)+N>>>0)):[],pastPresentShareBuffer:!!K})},942931:u=>{t.ac("BiasAdd",u,void 0)},942986:u=>{t.ac("BiasSplitGelu",u,void 0)},943047:u=>{t.ac("FastGelu",u,void 0)},943103:(u,c,m,h,x,C,N,B,K,X,le,me,be,Se,Wt,da)=>{t.ac("Conv",u,{format:me?"NHWC":"NCHW",auto_pad:c,dilations:m?Array.from(($(),I).subarray(Number(m)>>>0,Number(h)>>>0)):[],group:x,kernel_shape:C?Array.from(($(),I).subarray(Number(C)>>>0,Number(N)>>>0)):[],pads:B?Array.from(($(),I).subarray(Number(B)>>>0,Number(K)>>>0)):[],strides:X?Array.from(($(),I).subarray(Number(X)>>>0,Number(le)>>>0)):[],w_is_const:()=>!!($(),F)[Number(be)>>>0],activation:ze(Se),activation_params:Wt?Array.from(($(),H).subarray(Number(Wt)>>>0,Number(da)>>>0)):[]})},943687:u=>{t.ac("Gelu",u,void 0)},943739:(u,c,m,h,x,C,N,B,K)=>{t.ac("GroupQueryAttention",u,{numHeads:c,kvNumHeads:m,scale:h,softcap:x,doRotary:C,rotaryInterleaved:N,smoothSoftmax:B,localWindowSize:K})},943956:(u,c,m,h)=>{t.ac("LayerNormalization",u,{axis:c,epsilon:m,simplified:!!h})},944067:(u,c,m,h)=>{t.ac("LayerNormalization",u,{axis:c,epsilon:m,simplified:!!h})},944178:(u,c,m,h,x,C)=>{t.ac("MatMulNBits",u,{k:c,n:m,accuracyLevel:h,bits:x,blockSize:C})},944305:(u,c,m,h,x,C)=>{t.ac("MultiHeadAttention",u,{numHeads:c,isUnidirectional:m,maskFilterValue:h,scale:x,doRotary:C})},944464:(u,c)=>{t.ac("QuickGelu",u,{alpha:c})},944528:(u,c,m,h,x)=>{t.ac("RotaryEmbedding",u,{interleaved:!!c,numHeads:m,rotaryEmbeddingDim:h,scale:x})},944667:(u,c,m)=>{t.ac("SkipLayerNormalization",u,{epsilon:c,simplified:!!m})},944769:(u,c,m)=>{t.ac("SkipLayerNormalization",u,{epsilon:c,simplified:!!m})},944871:(u,c,m,h)=>{t.ac("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:m,blockSize:h})},944992:u=>{t.Id(u)},945026:(u,c)=>t.Kd(Number(u),Number(c),t.$c.Nd,t.$c.errors)};function P0(u,c,m){return zu(async()=>{await t.Gd(Number(u),Number(c),Number(m))})}function D0(){return typeof wasmOffsetConverter<"u"}function B0(u,c,m,h){var x=ce();try{return pl(u,c,m,h)}catch(C){if(de(x),C!==C+0)throw C;pe(1,0)}}function U0(u,c,m){var h=ce();try{return ul(u,c,m)}catch(x){if(de(h),x!==x+0)throw x;pe(1,0)}}function L0(u,c,m){var h=ce();try{nl(u,c,m)}catch(x){if(de(h),x!==x+0)throw x;pe(1,0)}}function W0(u,c){var m=ce();try{return ua(u,c)}catch(h){if(de(m),h!==h+0)throw h;pe(1,0)}}function q0(u){var c=ce();try{al(u)}catch(m){if(de(c),m!==m+0)throw m;pe(1,0)}}function G0(u,c,m,h,x,C,N){var B=ce();try{return dl(u,c,m,h,x,C,N)}catch(K){if(de(B),K!==K+0)throw K;pe(1,0)}}function H0(u,c){var m=ce();try{fl(u,c)}catch(h){if(de(m),h!==h+0)throw h;pe(1,0)}}function F0(u,c,m,h,x,C){var N=ce();try{sl(u,c,m,h,x,C)}catch(B){if(de(N),B!==B+0)throw B;pe(1,0)}}function j0(u,c,m,h){var x=ce();try{cl(u,c,m,h)}catch(C){if(de(x),C!==C+0)throw C;pe(1,0)}}function V0(u,c,m,h,x){var C=ce();try{ol(u,c,m,h,x)}catch(N){if(de(C),N!==N+0)throw N;pe(1,0)}}function K0(u,c,m,h,x,C,N){var B=ce();try{ml(u,c,m,h,x,C,N)}catch(K){if(de(B),K!==K+0)throw K;pe(1,0)}}function Z0(u,c,m,h,x,C,N){var B=ce();try{gl(u,c,m,h,x,C,N)}catch(K){if(de(B),K!==K+0)throw K;pe(1,0)}}function Q0(u,c,m,h,x,C,N,B){var K=ce();try{wl(u,c,m,h,x,C,N,B)}catch(X){if(de(K),X!==X+0)throw X;pe(1,0)}}function Y0(u,c,m,h,x){var C=ce();try{return hl(u,c,m,h,x)}catch(N){if(de(C),N!==N+0)throw N;pe(1,0)}}function X0(u,c,m,h,x,C,N,B){var K=ce();try{bl(u,c,m,h,x,C,N,B)}catch(X){if(de(K),X!==X+0)throw X;pe(1,0)}}function J0(u,c,m,h,x,C,N,B,K,X,le,me){var be=ce();try{yl(u,c,m,h,x,C,N,B,K,X,le,me)}catch(Se){if(de(be),Se!==Se+0)throw Se;pe(1,0)}}function ew(u,c,m,h,x,C){var N=ce();try{return vl(u,c,m,h,x,C)}catch(B){if(de(N),B!==B+0)throw B;pe(1,0)}}function tw(u,c,m){var h=ce();try{return $l(u,c,m)}catch(x){if(de(h),x!==x+0)throw x;return pe(1,0),0n}}function rw(u,c,m,h,x,C,N,B,K){var X=ce();try{ll(u,c,m,h,x,C,N,B,K)}catch(le){if(de(X),le!==le+0)throw le;pe(1,0)}}function iw(u){var c=ce();try{return xl(u)}catch(m){if(de(c),m!==m+0)throw m;pe(1,0)}}function nw(u,c,m){var h=ce();try{return Sl(u,c,m)}catch(x){if(de(h),x!==x+0)throw x;pe(1,0)}}function aw(u,c){var m=ce();try{return Ll(u,c)}catch(h){if(de(m),h!==h+0)throw h;return pe(1,0),0n}}function sw(u,c,m,h,x){var C=ce();try{Tl(u,c,m,h,x)}catch(N){if(de(C),N!==N+0)throw N;pe(1,0)}}function ow(u){var c=ce();try{return kl(u)}catch(m){if(de(c),m!==m+0)throw m;return pe(1,0),0n}}function uw(u,c,m,h,x,C){var N=ce();try{return Ol(u,c,m,h,x,C)}catch(B){if(de(N),B!==B+0)throw B;pe(1,0)}}function lw(u,c,m,h,x,C){var N=ce();try{return Nl(u,c,m,h,x,C)}catch(B){if(de(N),B!==B+0)throw B;pe(1,0)}}function dw(u,c,m,h,x,C,N,B){var K=ce();try{return _l(u,c,m,h,x,C,N,B)}catch(X){if(de(K),X!==X+0)throw X;pe(1,0)}}function cw(u,c,m,h,x){var C=ce();try{return Ml(u,c,m,h,x)}catch(N){if(de(C),N!==N+0)throw N;return pe(1,0),0n}}function pw(u,c,m,h){var x=ce();try{return Rl(u,c,m,h)}catch(C){if(de(x),C!==C+0)throw C;pe(1,0)}}function fw(u,c,m,h){var x=ce();try{return Pl(u,c,m,h)}catch(C){if(de(x),C!==C+0)throw C;pe(1,0)}}function hw(u,c,m,h,x,C,N,B,K,X,le,me){var be=ce();try{return Dl(u,c,m,h,x,C,N,B,K,X,le,me)}catch(Se){if(de(be),Se!==Se+0)throw Se;pe(1,0)}}function mw(u,c,m,h,x,C,N,B,K,X,le){var me=ce();try{zl(u,c,m,h,x,C,N,B,K,X,le)}catch(be){if(de(me),be!==be+0)throw be;pe(1,0)}}function gw(u,c,m,h,x,C,N,B,K,X,le,me,be,Se,Wt,da){var $w=ce();try{Al(u,c,m,h,x,C,N,B,K,X,le,me,be,Se,Wt,da)}catch(ca){if(de($w),ca!==ca+0)throw ca;pe(1,0)}}function yw(u,c,m,h){var x=ce();try{return Bl(u,c,m,h)}catch(C){if(de(x),C!==C+0)throw C;pe(1,0)}}function vw(u,c,m,h,x){var C=ce();try{return Ul(u,c,m,h,x)}catch(N){if(de(C),N!==N+0)throw N;pe(1,0)}}function _w(u,c,m){var h=ce();try{return Cl(u,c,m)}catch(x){if(de(h),x!==x+0)throw x;pe(1,0)}}function ww(u,c,m){var h=ce();try{return Il(u,c,m)}catch(x){if(de(h),x!==x+0)throw x;pe(1,0)}}function bw(u,c,m,h){var x=ce();try{El(u,c,m,h)}catch(C){if(de(x),C!==C+0)throw C;pe(1,0)}}function ji(){if(0<Ke)Fe=ji;else if(n)b==null||b(t),Y();else{for(var u=Rt;0<u.length;)u.shift()(t);0<Ke?Fe=ji:(t.calledRun=!0,M||(Y(),b==null||b(t)))}}return n||(It=await Be(),ji()),t.PTR_SIZE=4,U?t:new Promise((u,c)=>{b=u,S=c})}var Fm,Gd,c2=j(()=>{var e,t;Fm=qd,Gd=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),Gd&&qd()}),Ta,Ps,Hd,Qe,jm,rn,Fd,jd,ka,Vd,Ca,Vm,Ia,Km,To=j(()=>{So(),Ta=typeof location>"u"?void 0:location.origin,Ps=import.meta.url>"file:"&&import.meta.url<"file;",Hd=()=>{{if(Ps){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ta).href}return import.meta.url}},Qe=Hd(),jm=()=>{if(Qe&&!Qe.startsWith("blob:"))return Qe.substring(0,Qe.lastIndexOf("/")+1)},rn=(e,t)=>{try{let r=t??Qe;return(r?new URL(e,r):new URL(e)).origin===Ta}catch{return!1}},Fd=(e,t)=>{let r=t??Qe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},jd=(e,t)=>`${t??"./"}${e}`,ka=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Vd=async e=>(await import(e)).default,Ca=(d2(),ki(qm)).default,Vm=async()=>{if(!Qe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(rn(Qe))return[void 0,Ca()];let e=await ka(Qe);return[e,Ca(e)]},Ia=(c2(),ki(Hm)).default,Km=async(e,t,r,i)=>{let n=Ia&&!(e||t);if(n)if(Qe)n=rn(Qe)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Ia];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??Fd(a,t),o=r&&s&&!rn(s,t),l=o?await ka(s):s??jd(a,t);return[o?l:void 0,await Vd(l)]}}}),Ea,nn,ii,za,Kd,Zd,Qd,ko,$e,Ir=j(()=>{To(),nn=!1,ii=!1,za=!1,Kd=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Zd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Qd=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ko=async e=>{if(nn)return Promise.resolve();if(ii)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(za)throw new Error("previous call to 'initializeWebAssembly()' failed.");ii=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Qd())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Zd())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=Kd();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n==null?void 0:n.mjs,o=(s==null?void 0:s.href)??s,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,p=e.wasmBinary,[f,g]=await Km(o,a,r>1,!!p||!!d),y=!1,v=[];if(t>0&&v.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),v.push(new Promise((b,S)=>{let _={numThreads:r};if(p)_.wasmBinary=p,_.locateFile=w=>w;else if(d||a)_.locateFile=w=>d??a+w;else if(o&&o.indexOf("blob:")!==0)_.locateFile=w=>new URL(w,o).href;else if(f){let w=jm();w&&(_.locateFile=k=>w+k)}g(_).then(w=>{ii=!1,nn=!0,Ea=w,b(),f&&URL.revokeObjectURL(f)},w=>{ii=!1,za=!0,S(w)})})),await Promise.race(v),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},$e=()=>{if(nn&&Ea)return Ea;throw new Error("WebAssembly is not initialized yet.")}}),mt,Mn,_e,Co=j(()=>{Ir(),mt=(e,t)=>{let r=$e(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Mn=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")Mn(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},_e=e=>{let t=$e(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),o=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),Zm,p2=j(()=>{Ir(),Co(),Zm=e=>{let t=$e(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let a=0;return(e==null?void 0:e.tag)!==void 0&&(a=mt(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&_e("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Mn(e.extra,"",new WeakSet,(s,o)=>{let l=mt(s,i),d=mt(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&_e(`Can't set a run config entry: ${s} - ${o}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Yd,Xd,Jd,ni,ec,Qm,f2=j(()=>{Ir(),Co(),Yd=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Xd=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Jd=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ni=(e,t,r,i)=>{let n=mt(t,i),a=mt(r,i);$e()._OrtAddSessionConfigEntry(e,n,a)!==0&&_e(`Can't set a session config entry: ${t} - ${r}.`)},ec=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let f=n==null?void 0:n.deviceType;f&&ni(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f!=null&&f.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);ni(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let o=mt(a,r),l=s.length,d=0,p=0;if(l>0){d=$e()._malloc(l*$e().PTR_SIZE),r.push(d),p=$e()._malloc(l*$e().PTR_SIZE),r.push(p);for(let f=0;f<l;f++)$e().setValue(d+f*$e().PTR_SIZE,s[f][0],"*"),$e().setValue(p+f*$e().PTR_SIZE,s[f][1],"*")}await $e()._OrtAppendExecutionProvider(e,o,d,p,l)!==0&&_e(`Can't append execution provider: ${a}.`)}},Qm=async e=>{let t=$e(),r=0,i=[],n=e||{};Jd(n);try{let a=Yd(n.graphOptimizationLevel??"all"),s=Xd(n.executionMode??"sequential"),o=typeof n.logId=="string"?mt(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof n.optimizedModelFilePath=="string"?mt(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,o,l,d,p),r===0&&_e("Can't create session options."),n.executionProviders&&await ec(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);ni(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[f,g]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=mt(f,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&_e(`Can't set a free dimension override: ${f} - ${g}.`)}return n.extra!==void 0&&Mn(n.extra,"",new WeakSet,(f,g)=>{ni(r,f,g,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&_e("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),fr,zt,hr,Gn,Rn,Io,Eo,Ds,ne=j(()=>{fr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},zt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},hr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},Gn=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Rn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Io=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Eo=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ds=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),zo,Ym=j(()=>{So(),zo=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let s=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(a,s,d).set(l),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),tc,rc,ic,nc,Ao,ac,he,Mt=j(()=>{ne(),tc=["V","I","W","E","F"],rc=(e,t)=>{console.log(`[${tc[e]},${new Date().toISOString()}]${t}`)},Ao=(e,t)=>{ic=e,nc=t},ac=(e,t)=>{let r=Rn(e),i=Rn(ic);r>=i&&rc(r,typeof t=="function"?t():t)},he=(...e)=>{nc&&ac(...e)}}),sc,Wr,R,Pn,Xm,Jm,eg,se=j(()=>{sc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Wr=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let o=sc.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[s[a-2],s[a-1]]=o}for(let o=r?3:1;o<=a;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let p=Math.max(l,d);if(l&&d)s[a-o]=Math.max(l,d);else{if(p>1)return;s[a-o]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class wn{static size(t){return wn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return wn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return wn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Pn=class mi{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<a.length){if(a[o]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let o=0;o<i.length*2;o++)if(o<s.length){if(s[o]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[o]>=i[o]||s[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,o){if(o){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)mi.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,a,s,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return mi.computeShapeHelper(t,r,l,i,n,a,s,o),l}static computeConvOutputShape(t,r,i,n,a,s,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return mi.computeShapeHelper(!1,t,l,i,n,a,s,o),l}static computeShapeHelper(t,r,i,n,a,s,o,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(mi.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,a,s,o,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(p+1)/2:p/2),a[o]=p-a[s],Math.floor((t+p-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[o]-d)/r+1)}},Xm=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,o;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||o<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Wr.isValidBroadcast(n,[a,o]))throw new Error("gemm: invalid bias shape for broadcast");return[a,o,s]}},Jm=-34028234663852886e22,eg=34028234663852886e22}),Oo,tg=j(()=>{ne(),Oo=(e,t)=>new(Gn(t))(e)}),Aa,Bs,Oa,oc,Na,uc,Ma,Ra,Pa,lc,rg,h2=j(()=>{ne(),Mt(),Aa=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Bs=(e,t)=>{if(t==="int32")return e;let r=Aa.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(Gn(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let o=0;o<n;o++){let l=a[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[o]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Oa=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},oc=1,Na=()=>oc++,uc=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Ma=(e,t)=>{let r=Aa.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Ra=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Ma(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Oa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Pa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!(a!=null&&a.input.dataTypes.includes(t))){if(s=uc.get(t),!s||(a==null?void 0:a.input.dataTypes.includes(s)))throw new Error(`WebNN backend does not support data type: ${t}`);he("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Ma(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Bs(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Oa(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},lc=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Na();return this.tensorTrackersById.set(e,new Pa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Na(),s=new Ra({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Pa(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let o=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(o,t,r)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new Ra({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},rg=(...e)=>new lc(...e)}),ai,dc,ig,m2=j(()=>{ne(),Ir(),tg(),h2(),Mt(),ai=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),dc=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},ig=class{constructor(e){this.tensorManager=rg(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ao(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>dc(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=ai.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ai.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!$e().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Oo(r,t)}}registerMLTensor(e,t,r,i){let n=ai.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=a.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let f=Bs(new Uint8Array(d),"int64");p=new Int32Array(f.buffer),n.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ai.get(fr(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),No=j(()=>{}),Da,an,sn,cc,pc,Ba,Us,fc,ng,g2=j(()=>{Mt(),No(),Da=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),an=[],sn=e=>Math.ceil(Number(e)/16)*16,cc=e=>{for(let t=0;t<an.length;t++){let r=an[t];if(e<=r)return r}return Math.ceil(e/16)*16},pc=1,Ba=()=>pc++,Us=async(e,t,r,i)=>{let n=sn(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let o=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{a.destroy()}},fc=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Da)an.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=sn(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),o.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=sn(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Ba();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=cc(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Ba(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await Us(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Da.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ng=(...e)=>new fc(...e)}),hc,ve,Ee=j(()=>{hc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ve=e=>new hc(e)}),qr,on,Oe,Le,ie,ke,Ls,Br,tr,re,si,q,ee,ag,Mo,mc,sg,ue=j(()=>{ne(),se(),qr=64,on=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Oe=(e,t=1)=>{let r=on(e,t);return typeof r=="string"?r:r[0]},Le=(e,t=1)=>{let r=on(e,t);return typeof r=="string"?r:r[1]},ie=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},ke=e=>e%4===0?4:e%2===0?2:1,Ls=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Br=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,tr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,si=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,o=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=on(t,n),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],g={indices:l,value:p,storage:f,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,v={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=a?"uniforms.":"",S=`${b}${e}_shape`,_=`${b}${e}_strides`,w="";for(let U=0;U<s-1;U++)w+=`
    let dim${U} = current / ${re(_,U,s)};
    let rest${U} = current % ${re(_,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;w+=`indices[${s-1}] = current;`;let k=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${w}
    return indices;
  }`,T=U=>(v.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),E=[];if(s>=2)for(let U=s-1;U>=0;U--)E.push(`${re(_,U,s)} * (indices[${U}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,O=U=>(v.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),$=(...U)=>s===0?"0u":`${g.indices}(${U.map(y).join(",")})`,D=(U,L)=>s<2?`${U}`:`${re(U,L,s)}`,F=(U,L,Y)=>s<2?`${U}=${Y};`:`${re(U,L,s)}=${Y};`,Q={},z=(U,L)=>{v.broadcastedIndicesToOffset=!0;let Y=`${L.name}broadcastedIndicesTo${e}Offset`;if(Y in Q)return`${Y}(${U})`;let J=[];for(let ge=s-1;ge>=0;ge--){let Be=L.indicesGet("outputIndices",ge+L.rank-s);J.push(`${D(_,ge)} * (${Be} % ${D(S,ge)})`)}return Q[Y]=`fn ${Y}(outputIndices: ${L.type.indices}) -> u32 {
             return ${J.length>0?J.join("+"):"0u"};
           }`,`${Y}(${U})`},A=(U,L)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${L};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${L}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),I=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),W=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${p} {
    return ${I(`i2o_${e}(indices)`)};
  }`,H=s<2?"":(()=>{let U=o.map(Y=>`d${Y}: u32`).join(", "),L=o.map(Y=>`d${Y}`).join(", ");return`
  fn get_${e}(${U}) -> ${p} {
    return get_${e}ByIndices(${$(L)});
  }`})(),V=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let L=U.map(y).join(",");return s===0?I("0u"):s===1?I(L[0]):(v.get=!0,v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}(${L})`)},Z=U=>s<2?I(U):(v.getByIndices=!0,v.indicesToOffset=!0,`get_${e}ByIndices(${U})`),G=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${p}) {
    ${A(`i2o_${e}(indices)`,"value")}
  }`,te=s<2?"":(()=>{let U=o.map(Y=>`d${Y}: u32`).join(", "),L=o.map(Y=>`d${Y}`).join(", ");return`
  fn set_${e}(${U}, value: ${p}) {
    set_${e}ByIndices(${$(L)}, value);
  }`})();return{impl:()=>{let U=[],L=!1;return v.offsetToIndices&&(U.push(k),L=!0),v.indicesToOffset&&(U.push(M),L=!0),v.broadcastedIndicesToOffset&&(Object.values(Q).forEach(Y=>U.push(Y)),L=!0),v.set&&(U.push(te),L=!0),v.setByIndices&&(U.push(G),L=!0),v.get&&(U.push(H),L=!0),v.getByIndices&&(U.push(W),L=!0),!a&&L&&U.unshift(`const ${S} = ${g.indices}(${r.join(",")});`,`const ${_} = ${g.indices}(${R.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:T,indicesToOffset:O,broadcastedIndicesToOffset:z,indices:$,indicesGet:D,indicesSet:F,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let L=U[s];if(typeof L!="string")throw new Error("value must be string");let Y=U.slice(0,s).map(y).join(",");return s===0?A("0u",L):s===1?A(Y[0],L):(v.set=!0,v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}(${Y}, ${L})`)},setByOffset:A,setByIndices:(U,L)=>s<2?A(U,L):(v.setByIndices=!0,v.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${L});`),get:V,getByOffset:I,getByIndices:Z,usage:i,name:e,strides:_,shape:S,rank:s}},q=(e,t,r,i=1)=>si(e,t,r,"input",i),ee=(e,t,r,i=1)=>si(e,t,r,"output",i),ag=(e,t,r)=>si(e,t,r,"atomicOutput",1),Mo=(e,t,r,i=1)=>si(e,t,r,"internal",i),mc=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=qr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},sg=(e,t)=>new mc(e,t)}),gc,Ua,yc,vc,_c,wc,Je,og,ug,ir=j(()=>{ne(),se(),Ee(),ue(),gc=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ua=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),yc=(e,t)=>R.sortBasedOnPerm(e,Ua(e.length,t)),vc=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},_c=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},wc=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Je=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Ua(i,t),a=yc(e.dims,n),s=e.dims,o=a,l=i<2||wc(n,e.dims),d;if(l)return d=v=>{let b=q("input",r,s,4),S=ee("output",r,o,4);return`
  ${v.registerUniform("output_size","u32").declareVariables(b,S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64/4)},programUniforms:[{type:12,data:Math.ceil(v/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=_c(e.dims,n),g=R.areEqual(f,[2,3,1]),y=R.areEqual(f,[3,1,2]);if(p.length===2||g||y){s=g?[p[0],p[1]*p[2]]:y?[p[0]*p[1],p[2]]:p,o=[s[1],s[0]];let v=16;return d=b=>{let S=q("a",r,s.length),_=ee("output",r,o.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(S,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${v+1}>, ${v}>;
  ${b.mainStart([v,v,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${v} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${v}u + local_id.x;
    let input_row = workgroup_id_x * ${v}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${v}u + local_id.x;
    let output_row = workgroup_id_y * ${v}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/v),y:Math.ceil(o[0]/v)},programUniforms:[{type:12,data:b},...ie(s,o)]}},getShaderSource:d}}return d=v=>{let b=q("a",r,s.length),S=ee("output",r,o.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(b,S)}

  ${vc(n,i,b,S)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=R.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...ie(s,o)]}},getShaderSource:d}},og=(e,t)=>{gc(e.inputs,t.perm),e.compute(Je(e.inputs[0],t.perm))},ug=e=>ve({perm:e.perm})}),bc,$c,xc,Sc,Tc,kc,Cc,Ic,Ec,zc,dt,lg,dg,cg,pg,fg,hg,mg,gg,yg,vg,y2=j(()=>{ne(),se(),ue(),Ro(),ir(),bc={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},$c={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},xc={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Sc={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Tc=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},kc=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},Cc=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},Ic=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ec=(e,t)=>{let r=[];if(!Ic(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},zc=(e,t,r,i,n,a,s)=>{let o=r[0].dims,l=R.size(a),d=R.size(s),p=q("_A",r[0].dataType,o),f=ee("output",n,a),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,v=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${xc[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${bc[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${$c[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${Sc[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},dt=(e,t,r,i)=>{let n=e.inputs.length===1?r:Ws(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,v)=>v));let s=R.normalizeAxes(a,e.inputs[0].dims.length),o=s,l=e.inputs[0],d=Ec(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Je(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Tc(o.length,l.dims.length));let[p,f]=kc(l.dims,o),g=p;n.keepDims&&(g=Cc(p,s)),e.compute(zc(t,n.cacheKey,[l],i,e.inputs[0].dataType,g,f),{inputs:[l]})},lg=(e,t)=>{dt(e,"ReduceMeanShared",t,"mean")},dg=(e,t)=>{dt(e,"ReduceL1Shared",t,"l1")},cg=(e,t)=>{dt(e,"ReduceL2Shared",t,"l2")},pg=(e,t)=>{dt(e,"ReduceLogSumExpShared",t,"logSumExp")},fg=(e,t)=>{dt(e,"ReduceMaxShared",t,"max")},hg=(e,t)=>{dt(e,"ReduceMinShared",t,"min")},mg=(e,t)=>{dt(e,"ReduceProdShared",t,"prod")},gg=(e,t)=>{dt(e,"ReduceSumShared",t,"sum")},yg=(e,t)=>{dt(e,"ReduceSumSquareShared",t,"sumSquare")},vg=(e,t)=>{dt(e,"ReduceLogSumShared",t,"logSum")}}),ct,Ac,Dn,Ws,pt,Oc,Nc,Mc,Rc,Pc,Dc,Bc,Uc,Lc,Wc,ft,_g,wg,bg,$g,xg,Sg,Tg,kg,Cg,Ig,Ro=j(()=>{ne(),se(),Ee(),ue(),y2(),ct=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ac=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Dn=(e,t,r,i,n,a,s=!1,o=!1)=>{let l=[],d=r[0].dims,p=d.length,f=R.normalizeAxes(n,p),g=!o&&f.length===0;d.forEach((b,S)=>{g||f.indexOf(S)>=0?s&&l.push(1):l.push(b)});let y=l.length,v=R.size(l);return{name:e,shaderCache:t,getShaderSource:b=>{let S=[],_=q("_A",r[0].dataType,p),w=ee("output",a,y),k=i(_,w,f),T=k[2];for(let E=0,M=0;E<p;E++)g||f.indexOf(E)>=0?(s&&M++,T=`for(var j${E}: u32 = 0; j${E} < ${d[E]}; j${E}++) {
                  ${k[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${_.indicesSet("input_indices",E,`j${E}`)}
                  ${T}
                }`):(S.push(`${_.indicesSet("input_indices",E,w.indicesGet("output_indices",M))};`),M++);return`

        ${b.registerUniform("output_size","u32").declareVariables(_,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${T}
          ${k[3]}
          ${k.length===4?w.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...ie(d,l)]})}},Ws=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ve({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},pt=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:Ws(n,r);e.compute(Dn(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?Ac:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Oc=(e,t)=>{ct(e.inputs),pt(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Nc=(e,t)=>{ct(e.inputs),pt(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Mc=(e,t)=>{ct(e.inputs),pt(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Rc=(e,t)=>{ct(e.inputs),pt(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Pc=(e,t)=>{ct(e.inputs),pt(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Dc=(e,t)=>{ct(e.inputs),pt(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},Bc=(e,t)=>{ct(e.inputs),pt(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},Uc=(e,t)=>{ct(e.inputs),pt(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Lc=(e,t)=>{ct(e.inputs),pt(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Wc=(e,t)=>{ct(e.inputs),pt(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},ft=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},_g=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Dc(e,t):lg(e,t)},wg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Nc(e,t):dg(e,t)},bg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mc(e,t):cg(e,t)},$g=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Rc(e,t):pg(e,t)},xg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Pc(e,t):fg(e,t)},Sg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bc(e,t):hg(e,t)},Tg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Uc(e,t):mg(e,t)},kg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lc(e,t):gg(e,t)},Cg=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Wc(e,t):yg(e,t)},Ig=(e,t)=>{ft(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Oc(e,t):vg(e,t)}}),La,Eg,zg,qs,v2=j(()=>{ne(),Ee(),Ro(),La=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Eg=(e,t)=>{La(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Dn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},zg=(e,t)=>{La(e.inputs);let r=(i,n,a)=>{let s=[];for(let o=0;o<i.rank;o++)(a.indexOf(o)>=0||a.length===0)&&s.push(`input_indices[${o}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Dn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},qs=e=>ve(e)}),qc,un,Gc,Hc,Fc,Ii,jc,Ag,Po=j(()=>{ne(),se(),No(),ue(),qc=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5];if(s&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],p=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,g=f,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let v=d;if(f!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(s){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=s.dims[3])}let S=v+b,_=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:v,totalSequenceLength:S,maxSequenceLength:_,inputHiddenSize:p,hiddenSize:f,vHiddenSize:y,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},un=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Gc=(e,t,r,i,n,a,s,o)=>{let l=ke(s?1:a),d=64,p=a/l;p<d&&(d=32);let f=Math.ceil(a/l/d),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:p},{type:12,data:f}],y=Oe(e.dataType,l),v=Le(1,l),b=["type"];s&&b.push("type"),o&&b.push("type");let S=_=>{let w=ee("x",e.dataType,e.dims,l),k=[w],T=s?q("seq_lens",s.dataType,s.dims):void 0;T&&k.push(T);let E=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;E&&k.push(E);let M=Le(e.dataType),O=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${_.registerUniforms(O).declareVariables(...k)}
  ${_.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${un(T,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${v}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${v}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${v}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${v}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${v}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:b},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},Hc=(e,t,r,i,n,a,s,o,l)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],f=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=f?[a.batchSize,g,d,a.headSize]:void 0,v=a.nReps?a.nReps:1,b=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=ke(a.headSize),_=a.headSize/S,w=12,k={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},T=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:b},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:v}],E=f&&i&&R.size(i.dims)>0,M=["type","type"];E&&M.push("type"),n&&M.push("type"),o&&M.push("type"),l&&M.push("type");let O=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&O.push({dims:y,dataType:t.dataType,gpuDataType:0});let $=D=>{let F=q("q",t.dataType,t.dims,S),Q=q("key",r.dataType,r.dims,S),z=[F,Q];if(E){let G=q("past_key",i.dataType,i.dims,S);z.push(G)}n&&z.push(q("attention_bias",n.dataType,n.dims));let A=o?q("seq_lens",o.dataType,o.dims):void 0;A&&z.push(A);let I=l?q("total_sequence_length_input",l.dataType,l.dims):void 0;I&&z.push(I);let W=ee("output",t.dataType,p),H=[W];f&&H.push(ee("present_key",t.dataType,y,S));let V=Le(1,S),Z=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${F.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${F.type.storage}, ${w*w}>;
  ${D.registerUniforms(Z).declareVariables(...z,...H)}
  ${D.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${v===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${v===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${un(A,I,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${V}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${V}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:O,dispatchGroup:k,programUniforms:T}),getShaderSource:$}},Fc=(e,t,r,i,n,a,s=void 0,o=void 0)=>{let l=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,f=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=f?[n.batchSize,g,l,n.headSize]:void 0,v=[n.batchSize,n.sequenceLength,p],b=12,S={x:Math.ceil(n.vHeadSize/b),y:Math.ceil(n.sequenceLength/b),z:n.batchSize*n.numHeads},_=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=f&&i&&R.size(i.dims)>0,k=["type","type"];w&&k.push("type"),s&&k.push("type"),o&&k.push("type");let T=[{dims:v,dataType:t.dataType,gpuDataType:0}];f&&T.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=M=>{let O=q("probs",t.dataType,t.dims),$=q("v",r.dataType,r.dims),D=[O,$];w&&D.push(q("past_value",i.dataType,i.dims));let F=s?q("seq_lens",s.dataType,s.dims):void 0;s&&D.push(F);let Q=o?q("total_sequence_length_input",o.dataType,o.dims):void 0;o&&D.push(Q);let z=[ee("output",t.dataType,v)];f&&z.push(ee("present_value",t.dataType,y));let A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${O.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${O.type.value}, ${b*b}>;
  ${M.registerUniforms(A).declareVariables(...D,...z)}
  ${M.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${un(F,Q,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${O.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:_}),getShaderSource:E}},Ii=(e,t,r,i,n,a,s,o,l,d,p=void 0,f=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(o?1:0)),y=g>1?d.pastSequenceLength:0,v=y+d.kvSequenceLength,b=l&&R.size(l.dims)>0?l:void 0,S=[t,r];g>1&&s&&R.size(s.dims)>0&&S.push(s),b&&S.push(b),p&&S.push(p),f&&S.push(f);let _=e.compute(Hc(g,t,r,s,b,d,y,p,f),{inputs:S,outputs:g>1?[-1,1]:[-1]})[0];e.compute(Gc(_,d.batchSize,d.numHeads,y,d.sequenceLength,v,p,f),{inputs:p&&f?[_,p,f]:[_],outputs:[]});let w=[_,i];g>1&&o&&R.size(o.dims)>0&&w.push(o),p&&w.push(p),f&&w.push(f),e.compute(Fc(g,_,i,o,d,y,p,f),{inputs:w,outputs:g>1?[0,2]:[0]})},jc=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,o={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let g=ee("output_q",l[0].dataType,r),y=ee("output_k",l[0].dataType,r),v=ee("output_v",l[0].dataType,r),b=q("input",l[0].dataType,l[0].dims),S=q("weight",l[1].dataType,l[1].dims),_=q("bias",l[2].dataType,l[2].dims),w=b.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(k).declareVariables(b,S,_,g,y,v)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:p},{inputs:l,outputs:[-1,-1,-1]})},Ag=(e,t)=>{let r=qc(e.inputs,t),[i,n,a]=jc(e,r);return Ii(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Vc,Kc,Zc,Og,_2=j(()=>{ut(),ne(),se(),Ee(),ue(),Vc=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Kc=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?ke(a[a.length-1]):1,o=n==="NHWC"&&a.length>1?s:1,l=R.size(a)/s,d=i,p=d?a.length:a,f=q("x",e[0].dataType,e[0].dims,s),g=q("scale",e[1].dataType,e[1].dims,o),y=q("bias",e[2].dataType,e[2].dims,o),v=q("inputMean",e[3].dataType,e[3].dims,o),b=q("inputVar",e[4].dataType,e[4].dims,o),S=ee("y",e[0].dataType,p,s),_=()=>{let k="";if(i)k=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")k=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let T=1;T<g.rank;T++)k+=`cIndices[${T}] = outputIndices[${T}];`;k+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return k},w=k=>`
  const epsilon = ${r};
  ${k.registerUniform("outputSize","u32").declareVariables(f,g,y,v,b,S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${_()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${v.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ie(a)]:[{type:12,data:l}]})}},Zc=e=>ve(e),Og=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Zc({...t,outputCount:i});if(we.webgpu.validateInputContent&&Vc(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Kc(r,n))}}),Qc,Yc,Ng,w2=j(()=>{se(),ue(),Qc=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Yc=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,a=q("input",n,t,4),s=q("bias",n,[r],4),o=q("residual",n,t,4),l=ee("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Ng=e=>{Qc(e.inputs),e.compute(Yc(e.inputs))}}),Xc,ye,Mg,Rg,Pg,Dg,Bg,Ug,Lg,Wg,qg,Jc,Gg,Hg,Fg,jg,gi,Vg,bn,Kg,Zg,Qg,Yg,Xg,Jg,ey,ty,ry,iy,ny,ay,sy,oy,uy,ly,Wa,dy,Gs,Hs,cy,py,fy,ep,tp,hy,Do=j(()=>{ne(),se(),Ee(),ue(),Xc=(e,t,r,i,n,a,s)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=q("inputData",r,[o],4),p=ee("outputData",i,[o],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",l)}
  }`},ye=(e,t,r,i,n,a=e.dataType,s,o)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Xc(d,R.size(e.dims),e.dataType,a,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},Mg=e=>{e.compute(ye(e.inputs[0],"Abs","abs"))},Rg=e=>{e.compute(ye(e.inputs[0],"Acos","acos"))},Pg=e=>{e.compute(ye(e.inputs[0],"Acosh","acosh"))},Dg=e=>{e.compute(ye(e.inputs[0],"Asin","asin"))},Bg=e=>{e.compute(ye(e.inputs[0],"Asinh","asinh"))},Ug=e=>{e.compute(ye(e.inputs[0],"Atan","atan"))},Lg=e=>{e.compute(ye(e.inputs[0],"Atanh","atanh"))},Wg=e=>ve(e),qg=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ye(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Jc=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ve({min:t,max:r})},Gg=(e,t)=>{let r=t||Jc(e.inputs),i=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Hg=e=>{e.compute(ye(e.inputs[0],"Ceil","ceil"))},Fg=e=>{e.compute(ye(e.inputs[0],"Cos","cos"))},jg=e=>{e.compute(ye(e.inputs[0],"Cosh","cosh"))},gi=e=>ve(e),Vg=(e,t)=>{let r=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},bn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Kg=e=>{let t=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,bn(t)))},Zg=e=>{e.compute(ye(e.inputs[0],"Exp","exp"))},Qg=e=>{e.compute(ye(e.inputs[0],"Floor","floor"))},Yg=e=>{let t=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,bn(t)))},Xg=(e,t)=>{let r=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Jg=e=>{e.compute(ye(e.inputs[0],"Not",t=>`!${t}`))},ey=e=>{e.compute(ye(e.inputs[0],"Neg",t=>`-${t}`))},ty=e=>{e.compute(ye(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ry=e=>{let t=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},iy=e=>{e.compute(ye(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},ny=e=>ve(e),ay=(e,t)=>{let r=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},sy=e=>{e.compute(ye(e.inputs[0],"Sin","sin"))},oy=e=>{e.compute(ye(e.inputs[0],"Sinh","sinh"))},uy=e=>{e.compute(ye(e.inputs[0],"Sqrt","sqrt"))},ly=e=>{e.compute(ye(e.inputs[0],"Tan","tan"))},Wa=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,dy=e=>{e.compute(ye(e.inputs[0],"Tanh",Wa))},Gs=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Wa("v")};
}
`,Hs=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,cy=e=>{let t=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"FastGelu",Hs,Gs(t),void 0,e.inputs[0].dataType))},py=(e,t)=>{let r=Le(e.inputs[0].dataType);return e.compute(ye(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},fy=e=>{e.compute(ye(e.inputs[0],"Log","log"))},ep=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,tp=e=>`quick_gelu_impl(${e})`,hy=(e,t)=>{let r=Le(e.inputs[0].dataType);e.compute(ye(e.inputs[0],"QuickGelu",tp,ep(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),rp,ip,my,b2=j(()=>{se(),ue(),Do(),rp=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ip=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=q("input",e[0].dataType,e[0].dims,4),i=q("bias",e[0].dataType,[e[0].dims[2]],4),n=ee("output",e[0].dataType,t,4),a=R.size(t)/4,s=Oe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${bn(s)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},my=e=>{rp(e.inputs),e.compute(ip(e.inputs))}}),np,ap,ht,gy,yy,vy,_y,wy,by,$y,xy,Sy,Ty,$2=j(()=>{ne(),se(),ue(),np=(e,t,r,i,n,a,s,o,l,d,p,f)=>{let g,y;typeof o=="string"?g=y=(w,k)=>`${o}((${w}),(${k}))`:typeof o=="function"?g=y=o:(g=o.scalar,y=o.vector);let v=ee("outputData",p,i.length,4),b=q("aData",l,t.length,4),S=q("bData",d,r.length,4),_;if(n)if(a){let w=R.size(t)===1,k=R.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;w||k?_=v.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):_=`
            let outputIndices = ${v.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",v)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",v)};
            ${v.setByOffset("global_idx",y(s||T?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=v.setByOffset("global_idx",y(b.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(k,T,E="")=>{let M=`aData[indexA${T}][componentA${T}]`,O=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${v.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${b.broadcastedIndicesToOffset(`outputIndices${T}`,v)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,v)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${k}[${T}] = ${E}(${g(M,O)});
          `};p===9?_=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,S,v)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},ap=(e,t,r,i,n,a,s=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(o,l),p=o,f=R.size(o),g=!1,y=!1,v=[d];if(d){let b=Wr.calcShape(o,l,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");p=b.slice(),f=R.size(p);let S=R.size(o)===1,_=R.size(l)===1,w=o.length>0&&o[o.length-1]%4===0,k=l.length>0&&l[l.length-1]%4===0;v.push(S),v.push(_),v.push(w),v.push(k);let T=1;for(let E=1;E<p.length;E++){let M=o[o.length-E],O=l[l.length-E];if(M===O)T*=M;else break}T%4===0?(y=!0,g=!0):(S||_||w||k)&&(g=!0)}else g=!0;return v.push(g),{name:e,shaderCache:{hint:t+v.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>np(b,o,l,p,g,d,y,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(p)/4)},...ie(o,l,p)]})}},ht=(e,t,r,i,n,a)=>{e.compute(ap(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},gy=e=>{ht(e,"Add",(t,r)=>`${t}+${r}`)},yy=e=>{ht(e,"Div",(t,r)=>`${t}/${r}`)},vy=e=>{ht(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},_y=e=>{ht(e,"Mul",(t,r)=>`${t}*${r}`)},wy=e=>{let t=q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;ht(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},by=e=>{ht(e,"Sub",(t,r)=>`${t}-${r}`)},$y=e=>{ht(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},xy=e=>{ht(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Sy=e=>{ht(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Ty=e=>{ht(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),sp,op,up,lp,ky,Cy,x2=j(()=>{ne(),se(),Ee(),ue(),sp=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,o)=>{if(o!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},op=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,up=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},lp=(e,t,r,i)=>{let n=R.size(r),a=new Array(e.length),s=new Array(e.length),o=0,l=[],d=[],p=[{type:12,data:n}];for(let b=0;b<e.length;++b)o+=e[b].dims[t],a[b]=o,d.push(e[b].dims.length),s[b]=q(`input${b}`,i,d[b]),l.push("rank"),p.push({type:12,data:a[b]});for(let b=0;b<e.length;++b)p.push(...ie(e[b].dims));p.push(...ie(r));let f=ee("output",i,r.length),g=f.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),v=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)b.registerUniform(`sizeInConcatAxis${S}`,"u32");return b.declareVariables(...s,f)})()}

  ${op(a.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${up(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:v}},ky=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);sp(r,n);let a=i.slice();a[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(o=>R.size(o.dims)>0);e.compute(lp(s,n,a,r[0].dataType),{inputs:s})},Cy=e=>ve({axis:e.axis})}),Sr,Tr,kr,Bo,Er=j(()=>{ne(),se(),Sr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Tr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},kr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Bo=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Jm,eg];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Me,Iy,Uo=j(()=>{Me=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Iy=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ey,S2=j(()=>{Ey=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),_i,Lo,Wo=j(()=>{ne(),se(),ue(),Er(),_i=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,o)=>`
      if (${re(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,re(n,o+a,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Lo=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s[s.length-2],d=o[o.length-1],p=s[s.length-1],f=ke(d),g=ke(p),y=ke(l),v=R.size(r)/f/y,b=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),_=[R.size(S),l,d],w=[{type:12,data:v},{type:12,data:l},{type:12,data:d},{type:12,data:p}];Tr(t,w),w.push(...ie(S,s,o)),b&&w.push(...ie(e[2].dims)),w.push(...ie(_));let k=T=>{let E=Mo("batch_dims",e[0].dataType,S.length),M=q("a",e[0].dataType,s.length,g),O=q("b",e[1].dataType,o.length,f),$=ee("output",e[0].dataType,_.length,f),D=Oe($.type.tensor),F=Sr(t,$.type.value,D),Q=[M,O],z="";if(b){let W=n?f:1;Q.push(q("bias",e[2].dataType,e[2].dims.length,W)),z=`${n?`value += bias[col / ${W}];`:`value += ${$.type.value}(bias[row + i]);`}`}let A=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];kr(t,A);let I=()=>{let W=`var a_data: ${M.type.value};`;for(let H=0;H<g;H++)W+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${f}];`;for(let H=0;H<y;H++){W+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${g}];`;for(let V=0;V<g;V++)W+=`
            values[${H}] = fma(${O.type.value}(a_data${g===1?"":`[${V}]`}), b_data${V}, values[${H}]);
`}return W};return`
  ${T.registerUniforms(A).registerInternalVariables(E).declareVariables(...Q,$)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${_i("a_indices",M,M.rank-2,E.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${O.type.indices};
    ${_i("b_indices",O,O.rank-2,E.rank,"batch_indices")}
    ${O.indicesSet("b_indices",O.rank-2,0)}
    ${O.indicesSet("b_indices",O.rank-1,0)}
    let b_offset = ${O.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${I()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${z}
      ${F}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${g};${y};${n}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:w}),getShaderSource:k}}}),dp,cp,Fs,qa,pp,js,fp,Bn,qo=j(()=>{ne(),se(),ue(),Er(),Wo(),Uo(),dp=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,cp=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Fs=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],p=n?l:a,f=n?a:l,g=p/t[0],y=a/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${p/g}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${dp(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${cp(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},qa=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,pp=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",js=(e,t,r="f32",i,n=!1,a=32,s=!1,o=32,l=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=n?d:a,g=n?a:d;if(!(g%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],v=f/t[0],b=a/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${qa(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${v};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${v}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${qa(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${pp(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(o/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},fp=(e,t,r,i,n=!1)=>{let[a,s,o,l]=i,d=Oe(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Me(e,d)} {
      var value = ${Me(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${_i("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Me(e,d)} {
      var value = ${Me(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${_i("bIndices",o,o.rank-2,a.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Me(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Me(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Bn=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,o=e[1].dims,l=s.slice(0,-2),d=o.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),f=R.size(p),g=s[s.length-2],y=s[s.length-1],v=o[o.length-1],b=y%4===0&&v%4===0,S=g<=8?[4,1,1]:[4,4,1],_=[8,8,1],w=[Math.ceil(v/_[0]/S[0]),Math.ceil(g/_[1]/S[1]),Math.ceil(f/_[2]/S[2])],k=b?4:1,T=[...l,g,y/k],E=T.length,M=[...d,y,v/k],O=M.length,$=[f,g,v/k],D=[{type:6,data:g},{type:6,data:v},{type:6,data:y}];Tr(t,D),D.push(...ie(p,T,M));let F=["rank","rank"],Q=e.length>2;Q&&(D.push(...ie(e[2].dims)),F.push("rank")),D.push(...ie($));let z=A=>{let I=p.length,W=Mo("batchDims",e[0].dataType,I,1),H=Oe(e[0].dataType),V=q("a",e[0].dataType,E,k),Z=q("b",e[1].dataType,O,k),G=ee("result",e[0].dataType,$.length,k),te=[V,Z];if(Q){let ge=n?k:1;te.push(q("bias",e[2].dataType,e[2].dims.length,ge))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];kr(t,U);let L=Oe(G.type.tensor),Y=Sr(t,G.type.value,L),J=fp(k,Q,Y,[W,V,Z,G],n);return`
  ${A.registerUniforms(U).registerInternalVariables(W).declareVariables(...te,G)}
  ${J}
  ${b?Fs(S,_,H,W):js(S,_,H,W)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${b};${n}`,inputDependencies:F},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:D}),getShaderSource:z}}}),hp,zy,T2=j(()=>{ne(),Mt(),ue(),Er(),Uo(),S2(),qo(),hp=(e,t,r,i,n=!1,a,s=4,o=4,l=4,d="f32")=>{let p=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},f=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,v=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",_=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Me(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${v} && xCol >= 0 && xCol < ${b}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,k=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Me(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Me(s,d)}(0.0);`,T=e?i&&r?f(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(o)}
    }
    return ${Me(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(o)}
    }
    return ${Me(o,d)}(0.0);`,E=Me(l,d),M=Me(e?s:o,d),O=Me(e?o:s,d),$=Sr(a,E,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?k:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${O} {
      ${e?T:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Iy(n)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},zy=(e,t,r,i,n,a,s,o,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],g=d?r[2]:r[3],y=d?r[1]:r[2],v=d?r[3]:r[1],b=d&&(p%4===0||p%3===0)&&v%4===0,S=d?v:g*y,_=d?g*y:v,w=[8,8,1],k=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/w[0]/k[0]),Math.ceil(_/w[1]/k[1]),Math.ceil(f/w[2]/k[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let E=b?d&&p%4!==0?3:4:1,M=w[1]*k[1],O=w[0]*k[0],$=Math.max(w[0]*E,w[1]),D=i%M===0,F=n%O===0,Q=a%$===0,z=b?[E,4,4]:[1,1,1],A=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Tr(t,A),A.push(...ie(e[0].dims,e[1].dims));let I=["rank","rank"];s&&(A.push(...ie(e[2].dims)),I.push("rank")),A.push(...ie(r));let W=H=>{let V=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];kr(t,V);let Z=b?4:1,G=Oe(e[0].dataType),te=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${G}>`:G}) {
        result[flatIndex] = ${b?`vec4<${G}>`:G}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${G}>`:G}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,U=q("x",e[0].dataType,e[0].dims.length,E===3?1:E),L=q("w",e[1].dataType,e[1].dims.length,Z),Y=[U,L],J=ee("result",e[0].dataType,r.length,Z);if(s){let ge=q("bias",e[2].dataType,e[2].dims.length,Z);Y.push(ge),te+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${G}>`:G} {
          return bias[coords.${d?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Ey("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(V).declareVariables(...Y,J)}
        ${te}
        ${hp(d,D,F,Q,s,t,z[0],z[1],z[2],G)}
        ${b?Fs(k,w,G,void 0,!d,$):js(k,w,G,void 0,!d,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${b};${D};${F};${Q};${M};${O};${$}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:A}),getShaderSource:W}}}),mp,Ga,oi,gp,Ha,yp,Ay,Oy,k2=j(()=>{ne(),Mt(),se(),ue(),Er(),Uo(),mp=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ga=e=>typeof e=="number"?[e,e,e]:e,oi=(e,t)=>t<=1?e:e+(e-1)*(t-1),gp=(e,t,r,i=1)=>{let n=oi(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Ha=(e,t,r,i,n)=>{n==null&&(n=gp(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},yp=(e,t,r,i,n,a,s,o,l,d)=>{let p,f,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let v=Ha([t,r,i,1],[o,l,d],1,[n,a,s],e);f=v[0],g=v[1],y=v[2]}else if(Array.isArray(e)){if(!e.every((b,S,_)=>b===_[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let v=Ha([t,r,i,1],[o,l,d],1,[n,a,s],e[0]);f=v[0],g=v[1],y=v[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),g=Math.ceil(r/a),y=Math.ceil(i/s);let v=(f-1)*n+o-t,b=(g-1)*a+l-r,S=(y-1)*s+d-i,_=Math.floor(v/2),w=v-_,k=Math.floor(b/2),T=b-k,E=Math.floor(S/2),M=S-E;p={top:k,bottom:T,left:E,right:M,front:_,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:g,outWidth:y}},Ay=(e,t,r,i,n,a=!1,s="channelsLast")=>{let o,l,d,p,f;if(s==="channelsLast")[o,l,d,p,f]=e;else if(s==="channelsFirst")[o,f,l,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,y,v,b]=t,[S,_,w]=Ga(r),[k,T,E]=Ga(i),M=oi(y,k),O=oi(v,T),$=oi(b,E),{padInfo:D,outDepth:F,outHeight:Q,outWidth:z}=yp(n,l,d,p,S,_,w,M,O,$),A=a?g*f:g,I=[0,0,0,0,0];return s==="channelsFirst"?I=[o,A,F,Q,z]:s==="channelsLast"&&(I=[o,F,Q,z,A]),{batchSize:o,dataFormat:s,inDepth:l,inHeight:d,inWidth:p,inChannels:f,outDepth:F,outHeight:Q,outWidth:z,outChannels:A,padInfo:D,strideDepth:S,strideHeight:_,strideWidth:w,filterDepth:y,filterHeight:v,filterWidth:b,effectiveFilterDepth:M,effectiveFilterHeight:O,effectiveFilterWidth:$,dilationDepth:k,dilationHeight:T,dilationWidth:E,inShape:e,outShape:I,filterShape:t}},Oy=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((S,_)=>_)},d=[Math.ceil(mp(l.x.map(S=>r[S]))/o[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=R.size(r),g=[{type:12,data:f},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Tr(t,g),g.push(...ie(e[0].dims,e[1].dims));let y=["rank","rank"],v=e.length===3;v&&(g.push(...ie(e[2].dims)),y.push("rank")),g.push(...ie(r));let b=S=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];kr(t,_);let w=1,k=Oe(e[0].dataType),T=q("x",e[0].dataType,e[0].dims.length,p),E=q("W",e[1].dataType,e[1].dims.length,w),M=[T,E],O=ee("result",e[0].dataType,r.length,w),$="";if(v){let Q=q("bias",e[2].dataType,e[2].dims.length,w);M.push(Q),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${k} {
          return bias[${s?re("coords",4,5):re("coords",1,5)}];
        }`}let D=Me(p,k),F=Sr(t,D,k);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${S.registerUniforms(_).declareVariables(...M,O)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${O.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,T.rank)};
              let d2 = ${s?re("coords",T.rank-1,T.rank):re("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?re("coords",1,T.rank):re("coords",2,T.rank)},
              ${s?re("coords",2,T.rank):re("coords",3,T.rank)},
              ${s?re("coords",3,T.rank):re("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?re("uniforms.x_shape",1,T.rank):re("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?re("uniforms.x_shape",2,T.rank):re("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?re("uniforms.x_shape",3,T.rank):re("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?re("uniforms.x_shape",4,T.rank):re("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${v?"value = value + getBiasByOutputCoords(coords)":""};
              ${F}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${v}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:g}),getShaderSource:b}}}),Ny,My,C2=j(()=>{ne(),se(),ue(),Er(),Ny=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],p=d/t.group,f=l&&p>=4?ke(d):1,g=R.size(r)/f,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Tr(t,y),y.push(...ie(s,[o[0],o[1],o[2],o[3]/f]));let v=n?["rank","rank","rank"]:["rank","rank"];y.push(...ie([r[0],r[1],r[2],r[3]/f]));let b=S=>{let _=ee("output",e[0].dataType,r.length,f),w=Oe(_.type.tensor),k=Sr(t,_.type.value,w),T=q("x",e[0].dataType,s.length),E=q("w",e[1].dataType,o.length,f),M=[T,E];n&&M.push(q("b",e[2].dataType,e[2].dims,f));let O=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];kr(t,O);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(O).declareVariables(...M,_)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${$}
    ${a}
    ${k}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},My=(e,t,r,i)=>{let n=e.length>2,a=ke(r[3]),s=ke(r[2]),o=R.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Tr(t,f),f.push(...ie(l,d,p));let g=(s-1)*t.strides[1]+d[1],y=v=>{let b=ee("output",e[0].dataType,p.length,a),S=Oe(b.type.tensor),_=Sr(t,b.type.value,S),w=q("x",e[0].dataType,l.length,a),k=q("w",e[1].dataType,d.length,a),T=[w,k];n&&T.push(q("b",e[2].dataType,e[2].dims,a));let E=n?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return kr(t,M),`
  ${v.registerUniforms(M).declareVariables(...T,b)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${g}>;
    var values: array<${b.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${_}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${g};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:f}),getShaderSource:y}}}),vp,ln,_p,dn,Vs,Fa,wp,bp,Ks,I2=j(()=>{se(),T2(),k2(),qo(),C2(),Er(),Wo(),ir(),vp=(e,t,r,i,n,a)=>{let s=e[0],o=e.slice(a?1:2,a?3:4),l=o.length,d=t[0],p=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),f=o.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-p[y]+n[y])/n[y]));return f.splice(0,0,s),f.splice(a?3:1,0,d),f},ln=[2,3,1,0],_p=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},dn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Pn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Vs=e=>{let t=Bo(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Fa=(e,t,r,i)=>{let n=r.format==="NHWC",a=vp(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let M=[t[0]];if(n){let O=e.kernelCustomData.wT??e.compute(Je(t[1],ln),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=O),M.push(O)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(My(M,r,a,i),{inputs:M}):e.compute(Ny(M,r,a,i),{inputs:M});return}let s=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],p=t[1].dims[2],f=t[1].dims[3],g=a[n?1:2],y=a[n?2:3],v=a[n?3:1],b=n&&p===o&&f===l&&r.pads[0]===0&&r.pads[1]===0;if(b||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let M=a[0],O,$,D,F=[];if(n){let A=e.kernelCustomData.wT??e.compute(Je(t[1],ln),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),b){let I=o*l*d;O=t[0].reshape([1,M,I]),$=A.reshape([1,I,v]),D=[1,M,v]}else O=t[0].reshape([M,o*l,d]),$=A.reshape([1,d,v]),D=[M,g*y,v];F.push(O),F.push($)}else O=t[0].reshape([M,d,o*l]),$=t[1].reshape([1,v,d]),D=[M,v,g*y],F.push($),F.push(O);s&&F.push(t[2]);let Q=D[2],z=F[0].dims[F[0].dims.length-1];Q<8&&z<8?e.compute(Lo(F,r,a,D,n,i),{inputs:F}):e.compute(Bn(F,r,a,D,n,i),{inputs:F});return}let S=!0,_=e.kernelCustomData.wT??e.compute(Je(t[1],ln),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let w=[t[0],_];s&&w.push(t[2]);let k=n?g*y:v,T=n?v:g*y,E=p*f*d;e.compute(zy(w,r,a,k,T,E,s,S,i),{inputs:w})},wp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=dn({...t,pads:n,strides:a,dilations:s,kernelShape:o},i);Fa(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},bp=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=dn(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Ay(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Oy(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Ks=(e,t)=>{if(_p(e.inputs,t),e.inputs[0].dims.length===3)wp(e,t);else if(e.inputs[0].dims.length===5)bp(e,e.inputs,t);else{let r=dn(t,e.inputs);Fa(e,e.inputs,r)}}}),Ry,E2=j(()=>{ne(),Mt(),se(),ue(),Ry=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,o=e[1].dims,l=o[2]/s,d=o[3],p=a?ke(l):1,f=a&&d===1&&l>=4,g=f?Math.floor(l/4)*4:Math.floor(l/p)*p,y=l-g,v=a?ke(d):1,b=a?d===1?p:v:1,S=R.size(n)/v,_=[Math.ceil(S/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let w=["rank","rank"],k=[t.strides[0],t.strides[1]],T=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],M=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],O=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:k},{type:12,data:T},{type:12,data:E},{type:12,data:M},{type:6,data:O},{type:12,data:g},{type:12,data:l},{type:12,data:d},...ie(e[0].dims,e[1].dims)];i&&($.push(...ie(e[2].dims)),w.push("rank")),$.push(...ie(n));let D=F=>{let Q=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:k.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:O.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],z=Oe(e[0].dataType),A=a?1:2,I=a?2:3,W=a?3:1,H=q("W",e[1].dataType,e[1].dims.length,b),V=q("Dy",e[0].dataType,e[0].dims.length,p),Z=[V,H];i&&Z.push(q("bias",e[2].dataType,[n[W]].length,v));let G=ee("result",e[0].dataType,n.length,v),te=()=>{let Y="";if(f)p===4?Y+=`
        let xValue = ${V.getByOffset("x_offset")};
        let wValue = ${H.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?Y+=`
          dotProd = dotProd + dot(vec4<${z}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}), vec4<${z}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(Y+=`
          dotProd = dotProd + dot(vec4<${z}>(${V.getByOffset("x_offset")}, ${V.getByOffset("x_offset + 1u")}, ${V.getByOffset("x_offset + 2u")}, ${V.getByOffset("x_offset + 3u")}), vec4<${z}>(${H.getByOffset("w_offset")}, ${H.getByOffset("w_offset + 1u")}, ${H.getByOffset("w_offset + 2u")}, ${H.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Y+=`
                  let xValue = ${a?V.getByOffset(`${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):V.get("batch","inputChannel","idyR","idyC")};
        `,p===1)Y+=`
          let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${H.getByOffset(`w_offset / ${b}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let J=0;J<p;J++)Y+=`
            let wValue${J} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${J}, wOutChannel)`)} / ${b}`)};
            dotProd = dotProd + xValue[${J}] * wValue${J};`;return Y},U=()=>{if(y===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let Y="";if(p===1){Y+="dotProd = dotProd";for(let J=0;J<y;J++)Y+=`
            + ${V.getByOffset(`x_offset + ${J}`)} * ${H.getByOffset(`w_offset + ${J}`)}`;Y+=";"}else if(p===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Y+=`
          let xValue = ${V.getByOffset("x_offset")};
          let wValue = ${H.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Y},L=`
            let outputIndices = ${G.offsetToIndices(`global_idx * ${v}`)};
            let batch = ${G.indicesGet("outputIndices",0)};
            let d1 = ${G.indicesGet("outputIndices",W)};
            let r = ${G.indicesGet("outputIndices",A)};
            let c = ${G.indicesGet("outputIndices",I)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${G.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${z}(dyRCorner) + ${z}(wR)) / ${z}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${z}(uniforms.Dy_shape[${A}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${z}(dyCCorner) + ${z}(wC)) / ${z}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${z}(uniforms.Dy_shape[${I}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${V.indicesToOffset(`${V.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${H.indicesToOffset(`${H.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${b};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${te()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${v}]`:""};
            ${G.setByOffset("global_idx","value")};
          `;return`
    ${F.registerUniforms(Q).declareVariables(...Z,G)}
      ${F.mainStart()}
      ${F.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${b}${v}${f}${y}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:D}}}),$p,xp,Sp,ja,Py,Tp,Va,kp,Dy,z2=j(()=>{E2(),Er(),ir(),$p=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,xp=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},Sp=(e,t,r,i,n,a,s,o,l,d)=>{let p=e.length-2,f=d.length===0;l.length<p&&l.push(...Array(p-l.length).fill(0));let g=e[0],y=t[o?3:1]*n;for(let v=0,b=e.length-p-(o?1:0);v<p;++v,++b){let S=e[b],_=f?S*s[v]:d[v],w=$p(S,s[v],a[v],t[b],r[v],_);xp(w,i,a,v,v+p),f&&d.push(s[v]*(S-1)+l[v]+(t[b]-1)*r[v]+1-a[v]-a[v+p])}d.splice(0,0,g),d.splice(o?3:1,0,y)},ja=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,g)=>f*g,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;l=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,g)=>f+g,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}Sp(o,r,l,e.autoPad,e.group,n,d,i,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:d}),p},Py=e=>{let t=Bo(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:p,outputShape:f,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Tp=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,o)=>s+o,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,o)=>s+o,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,o)=>s+o,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,o)=>s+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Va=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Je(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(Ry(a,r,i),{inputs:a})},kp=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=ja({...t,pads:o,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);Va(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Dy=(e,t)=>{if(Tp(e.inputs,t),e.inputs[0].dims.length===3)kp(e,t);else{let r=ja(t,e.inputs);Va(e,e.inputs,r)}}}),Cp,By,Uy,A2=j(()=>{ne(),se(),Ee(),ue(),Cp=(e,t,r,i)=>{let n=R.size(t),a=t.length,s=q("input",e,a),o=ee("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,a),p=f=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=re("uniforms.input_shape","uniforms.axis",a),v=i.reverse?g+(i.exclusive?" + 1":""):"0",b=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,o)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${v};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...ie(t,t)]}),getShaderSource:p}},By=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Cp(i,r,n,t),{inputs:[0]})},Uy=e=>{let t=e.exclusive===1,r=e.reverse===1;return ve({exclusive:t,reverse:r})}}),Ip,Ep,zp,Ly,Wy,O2=j(()=>{ne(),se(),Ee(),ue(),Ip=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ep=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},zp=(e,t)=>{let r,i,n,a,s,o,l=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=p?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],o=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],o=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),g=f.dims.length,y=e.dataType,v=q("a",y,g),b=ee("output",y,g),S=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(v,b)}

  ${Ep(o,g,v,b)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let w=l?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],k=R.size(w),T=f.dims,E=R.sortBasedOnPerm(T,o);return{outputs:[{dims:w,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...ie(T,E)]}},getShaderSource:S}},Ly=(e,t)=>{Ip(e.inputs),e.compute(zp(e.inputs[0],t))},Wy=e=>ve({blocksize:e.blocksize,mode:e.mode,format:e.format})}),cn,ui,Ka,Ap,Op,Np,Mp,Za,Rp,qy,Gy,N2=j(()=>{ne(),se(),Ee(),ue(),cn="[a-zA-Z]|\\.\\.\\.",ui="("+cn+")+",Ka="^"+ui+"$",Ap="("+ui+",)*"+ui,Op="^"+Ap+"$",Np=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Mp=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Op)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,s)=>{let o=e[s].dims.slice();if(!a.match(RegExp(Ka)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,o,s);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,s])=>s.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(ui)))throw new Error("Invalid RHS");(n=i.match(RegExp(cn,"g")))==null||n.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let s=this.symbolToInfo.get(a);if(s===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(s.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],o=0;if(!e.match(RegExp(Ka))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(cn,"g")),d=new Np(i);return l==null||l.forEach((p,f)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let g=n-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(o,o+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let v=String.fromCharCode(48+y);d.addSymbol(v,f+y),this.addSymbol(v,r[o++],i)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[o++],i)}),d}},Za=e=>e+"_max",Rp=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,p)=>q(`input${p}`,t,d)),a=R.size(i),s=ee("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let p=[],f="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",v=[],b=[],S=[],_=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,E)=>{var M;if(r.rhs.symbolToIndices.has(E)){let O=(M=r.rhs.symbolToIndices.get(E))==null?void 0:M[0];O!==void 0&&r.lhs.forEach(($,D)=>{if(T.inputIndices.includes(D)){let F=$.symbolToIndices.get(E);if(F===void 0)throw new Error("Invalid symbol error");F.forEach(Q=>{p.push(`${n[D].indicesSet(`input${D}Indices`,Q,s.indicesGet("outputIndices",O))}`)})}})}else r.lhs.forEach((O,$)=>{if(T.inputIndices.includes($)){let D=O.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(F=>{v.push(`${n[$].indicesSet(`input${$}Indices`,F,`${E}`)}`)}),_.push(`prod *= ${n[$].getByIndices(`input${$}Indices`)};`)}}),b.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Za(E)}; ${E}++) {`),S.push("}")});let k=w?[...p,`let sum = ${n.map((T,E)=>T.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...p,g,...b,...v,f,..._,y,...S];return`
            ${d.registerUniforms(o.map(T=>({name:`${Za(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((T,E)=>`var input${E}Indices: ${n[E].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(f=>r.symbolToInfo.has(f)).map(f=>{var g;return{type:12,data:((g=r.symbolToInfo.get(f))==null?void 0:g.dimValue)||0}});d.push({type:12,data:a});let p=e.map((f,g)=>[...ie(f)]).reduce((f,g)=>f.concat(g),d);return p.push(...ie(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:l}},qy=(e,t)=>{let r=new Mp(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(Rp(n,e.inputs[0].dataType,r,i))},Gy=e=>{let t=e.equation.replace(/\s+/g,"");return ve({equation:t})}}),Pp,Qa,Dp,Bp,Hy,M2=j(()=>{ne(),se(),ue(),Pp=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Qa=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},Dp=(e,t)=>e.length>t.length?Qa(e,t):Qa(t,e),Bp=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Dp(t,r),n=e[0].dataType,a=n===9||R.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/o),d=f=>{let g=q("input",n,t.length,s),y=ee("output",n,i.length,o),v;if(n===9){let b=(S,_,w="")=>`
          let outputIndices${_} = ${y.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${g.broadcastedIndicesToOffset(`outputIndices${_}`,y)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${S}[${_}] = ${w}(${g.getByOffset(`index${_}`)}[component${_}]);
        `;v=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else v=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${v}`},p=[{type:12,data:l},...ie(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p})}},Hy=e=>{Pp(e.inputs),e.compute(Bp(e.inputs),{inputs:[0]})}}),Up,Fy,R2=j(()=>{ne(),se(),ue(),Do(),Up=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,a=s=>{let o=q("x",t,[1],4),l=q("bias",t,[1],4),d=ee("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(o,l,d)}

    ${Gs(Le(t))}

    ${s.mainStart(qr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Hs("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/qr/4)}})}},Fy=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?cy(e):e.compute(Up(e.inputs))}}),Lp,Wp,jy,Vy,P2=j(()=>{ne(),se(),Ee(),ue(),Lp=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Wp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let o=r[a],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(s)/l),p=[{type:12,data:d},{type:6,data:o},{type:12,data:a},...ie(e[0].dims,e[1].dims,s)],f=g=>{let y=q("data",e[0].dataType,e[0].dims.length,l),v=q("inputIndices",e[1].dataType,e[1].dims.length),b=ee("output",e[0].dataType,s.length,l),S=w=>{let k=i.length,T=`var indicesIndices${w}  = ${v.type.indices}(0);`;for(let E=0;E<k;E++)T+=`${k>1?`indicesIndices${w}[${E}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${E}]`:`outputIndices${w}`};`;T+=`
          var idx${w} = ${v.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let E=0,M=0;E<n;E++)E===a?(T+=`${n>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = u32(idx${w});`,M+=k):(T+=`${n>1?`dataIndices${w}[${E}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${M}]`:`outputIndices${w}`};`,M++);return T},_;if(e[0].dataType===9){let w=(k,T,E="")=>`
          let outputIndices${T} = ${b.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${y.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${k}[${T}] = ${E}(${y.getByOffset(`index${T}`)}[component${T}]);
        `;_=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,v,b)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},jy=e=>ve({axis:e.axis}),Vy=(e,t)=>{let r=e.inputs;Lp(r),e.compute(Wp(e.inputs,t))}}),qp,Ky,Zy,D2=j(()=>{ne(),se(),ue(),qp=(e,t,r,i,n,a,s,o,l)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:o},{type:12,data:l}],p=[a];d.push(...ie(t.dims,p));let f=g=>{let y=q("indices_data",t.dataType,t.dims.length),v=ee("input_slice_offsets_data",12,1,1),b=[y,v],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(S).declareVariables(...b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Ky=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],o=R.sizeToDimension(a,a.length-1),l=R.sizeFromDimension(i,t.batchDims+s),d=R.sizeToDimension(i,t.batchDims),p=R.sizeFromDimension(i,t.batchDims),f=o/d,g=new Array(s),y=l;for(let T=0;T<s;++T)g[s-1-T]=y,y*=i[t.batchDims+s-1-T];let v=qp(e,r[1],g,t.batchDims,i,o,f,p,s),b=t.batchDims+s;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice(b)),_=R.size(S),w=[{type:12,data:_},{type:12,data:l},...ie(r[0].dims,v.dims,S)],k=T=>{let E=q("data",r[0].dataType,r[0].dims.length),M=q("slice_offsets",12,v.dims.length),O=ee("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,M,O)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:k},{inputs:[r[0],v]})},Zy=e=>({batchDims:e.batch_dims,cacheKey:""})}),Gp,Hp,Qy,Yy,B2=j(()=>{ne(),se(),Ee(),ue(),Gp=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===a.dims[l]:o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((o,l)=>o===a.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Hp=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=R.normalizeAxis(t.gatherAxis,n),s=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(a,1,...i);let l=R.size(o),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ie(...e.map((y,v)=>y.dims),o)],g=y=>{let v=q("data",e[0].dataType,e[0].dims.length),b=q("inputIndices",e[1].dataType,e[1].dims.length),S=q("scales",e[2].dataType,e[2].dims.length),_=e.length>3?q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=ee("output",d,o.length),k=[v,b,S];_&&k.push(_);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(T).declareVariables(...k,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${v.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${v.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${v.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${v.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${v.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${v.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Le(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,v)=>v!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,v)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:g}},Qy=(e,t)=>{let r=e.inputs;Gp(r,t),e.compute(Hp(e.inputs,t))},Yy=e=>ve({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Fp,jp,Xy,Jy,U2=j(()=>{ne(),se(),Ee(),ue(),Fp=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},jp=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,o=R.normalizeAxis(t.axis,n),l=r[o],d=a.slice(0),p=R.size(d),f=q("input",i,n),g=q("indicesInput",s,a.length),y=ee("output",i,d.length),v=[{type:12,data:p},{type:6,data:l},{type:12,data:o}];return v.push(...ie(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:v}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,g,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},Xy=e=>ve({axis:e.axis}),Jy=(e,t)=>{let r=e.inputs;Fp(r),e.compute(jp(e.inputs,t))}}),Vp,Kp,ev,tv,L2=j(()=>{ne(),se(),ue(),Vp=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Kp=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=Xm.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,a];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(a/l),p=Math.ceil(n/l),f=!0,g=R.size(o),y=[{type:12,data:f?d:g},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],v=["type","type"];e.length===3&&(y.push(...ie(e[2].dims)),v.push("rank")),y.push(...ie(o));let b=_=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",T=q("a",e[0].dataType,e[0].dims),E=q("b",e[1].dataType,e[1].dims),M=T.type.value,O=null,$=[T,E];e.length===3&&(O=q("c",e[2].dataType,e[2].dims.length),$.push(O));let D=ee("output",e[0].dataType,o.length);$.push(D);let F=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(F).declareVariables(...$)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${k}
    ${O!=null?`let cOffset = ${O.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${M}(uniforms.beta) * ${O.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=_=>{let w=q("a",e[0].dataType,e[0].dims),k=q("b",e[1].dataType,e[1].dims),T=null,E=[w,k];e.length===3&&(T=q("c",e[2].dataType,e[2].dims.length),E.push(T));let M=ee("output",e[0].dataType,o.length);E.push(M);let O=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let F=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(O).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${l}>, ${l}>;
  ${_.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${F}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:b}},ev=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},tv=(e,t)=>{Vp(e.inputs),e.compute(Kp(e.inputs,t))}}),St,Et,ur,lr,Zp,Qp,Yp,Xp,Jp,ef,tf,rf,rv,iv,W2=j(()=>{ne(),se(),Ee(),ue(),[St,Et,ur,lr]=[0,1,2,3],Zp=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Qp=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Yp=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Xp=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Jp=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,ef=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${St}] = batch;
     indices[${Et}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ur}] = u32(r);
            indices[${lr}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${ur}] = u32(clamp(r, 0, H - 1));
          indices[${lr}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ur}] = gs_reflect(r, border[1], border[3]);
          indices[${lr}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,tf=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${St}], indices[${Et}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${St}], indices[${Et}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${St}], indices[${Et}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${St}], indices[${Et}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${St}], indices[${Et}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${St}], indices[${Et}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,rf=(e,t)=>{let r=q("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=q("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[St,Et,ur,lr]=[0,3,1,2]);let s=ee("output",e[0].dataType,a.length),o=r.type.value,l=R.size(a),d=[{type:12,data:l},...ie(e[0].dims,i,a)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Qp}
  ${Yp(o)}
  ${Xp(t)}
  ${Jp(t)}
  ${ef(r,o,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ur}]);
      let W_in = i32(uniforms.x_shape[${lr}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${St}], indices[${ur}], indices[${lr}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${tf(s,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let g=R.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:d}},getShaderSource:p}},rv=(e,t)=>{Zp(e.inputs),e.compute(rf(e.inputs,t))},iv=e=>ve({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),qe,nf,nv,Ya,af,yi,av,sv=j(()=>{ne(),se(),Ee(),No(),Po(),ue(),ir(),qe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,nf=(e,t)=>{let r=e[0],i=qe(e,1),n=qe(e,2),a=qe(e,3),s=qe(e,4),o=qe(e,5),l=qe(e,6),d=qe(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=f,v=0,b=0,S=Math.floor(g/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=l.dims[2],b=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(a&&R.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=v+y,k=0;if(s&&R.size(s.dims)>0){k=8;let O=s.dims;throw O.length===1?O[0]===p?k=1:O[0]===3*p+2&&(k=3):O.length===2&&O[0]===p&&O[1]===w&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,E=g;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=n.dims[1]*n.dims[3],T=!0}}let M=!1;if(s&&R.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==p||o.dims[1]!==t.numHeads||o.dims[2]!==f||o.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:v,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:S,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:M,passPastInKv:T,qkvFormat:_}},nv=e=>ve({...e}),Ya=ve({perm:[0,2,1,3]}),af=(e,t,r,i,n,a,s)=>{let o=[i,n,a],l=R.size(o),d=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],p=f=>{let g=ee("qkv_with_bias",t.dataType,o),y=q("qkv",t.dataType,o),v=q("bias",r.dataType,o),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(b).declareVariables(y,v,g)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},yi=(e,t,r,i,n,a,s,o)=>{let l=a;if(s&&R.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=af(e,a,s,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Je(l,Ya.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Je(l,Ya.perm),{inputs:[l],outputs:[-1]})[0]},av=(e,t)=>{let r=nf(e.inputs,t),i=e.inputs[0],n=qe(e.inputs,1),a=qe(e.inputs,2),s=qe(e.inputs,3),o=qe(e.inputs,4),l=qe(e.inputs,5),d=qe(e.inputs,6),p=qe(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let f=n&&a&&n.dims.length===4&&a.dims.length===4,g=yi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return Ii(e,g,n,a,o,void 0,d,p,l,r);if(!n||!a)throw new Error("key and value must be provided");let y=yi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),v=yi(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);Ii(e,g,y,v,o,void 0,d,p,l,r)}}),sf,of,uf,lf,Zs,ov,uv,lv=j(()=>{ne(),se(),Ee(),ue(),sf=e=>{if(!e||e.length<1)throw new Error("too few inputs")},of=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),ve({numOutputs:i,axis:t.axis,splitSizes:r})},uf=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,lf=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Zs=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,a=R.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),o=q("input",n,r.length),l=new Array(t.numOutputs),d=[],p=[],f=0,g=[{type:12,data:i}];for(let v=0;v<t.numOutputs;v++){f+=t.splitSizes[v],l[v]=f;let b=r.slice();b[a]=t.splitSizes[v],p.push(b),s[v]=ee(`output${v}`,n,b.length),d.push({dims:p[v],dataType:e[0].dataType})}g.push({type:12,data:l},...ie(r,...p));let y=v=>`
  ${v.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...s)}
  ${uf(l.length)}
  ${lf(s)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${re("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},ov=(e,t)=>{sf(e.inputs);let r=e.inputs.length===1?t:of(e.inputs,t);e.compute(Zs(e.inputs,r),{inputs:[0]})},uv=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return ve({axis:t,numOutputs:i,splitSizes:r})}}),df,Un,dv,cv=j(()=>{ne(),se(),Ee(),ue(),df=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!R.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],p=n.dims[0],f=R.sizeFromDimension(r.dims,1)/d,g=o===0?n.dims[1]*2:f/s;if(o>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(g/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Un=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,p=e[2].dims[1],f=n===0?p*2:d/i,g=new Array(s,l,d/f,f-p),y=R.computeStrides(g),v=[{type:1,data:a},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,f,l*f,1]}):[],...ie(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=S=>{let _=q("input",e[0].dataType,e[0].dims.length),w=q("position_ids",e[1].dataType,e[1].dims.length),k=q("cos_cache",e[2].dataType,e[2].dims.length),T=q("sin_cache",e[3].dataType,e[3].dims.length),E=ee("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(_,w,k,T,E)}

        ${S.mainStart(qr)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",ee("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${_.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ve({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(g)/qr)},programUniforms:v})}},dv=(e,t)=>{df(e.inputs,t),e.compute(Un(e.inputs,t))}}),cf,pf,Xa,ff,pv,q2=j(()=>{Ee(),ne(),Po(),sv(),lv(),ir(),cv(),ue(),cf=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],p=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,g=0,y=!i||i.dims.length===0,v=Math.floor(y?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);y&&(p=v*t.numHeads);let b=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(b&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===v)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=a.dims[2]}else if(b||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let w=0,k=!1,T=t.kvNumHeads?v*t.kvNumHeads:p;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],k=!0}}let E=e.length>4?e[5]:void 0;if(E&&E.dims.length!==1&&E.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:g,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:v,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:_}},pf=ve({perm:[0,2,1,3]}),Xa=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Je(i,pf.perm),{inputs:[i],outputs:[-1]})[0]),i},ff=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=p=>{let f=q("seq_lens",r.dataType,r.dims),g=q("total_seq_lens",i.dataType,i.dims),y=ee("pos_ids",n,s),v=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(v).declareVariables(f,g,y)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},pv=(e,t)=>{var T;let r=cf(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=ve({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[g,y,v]=!n&&!a?e.compute(Zs([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],b,S;if(t.doRotary){let E=e.compute(ff(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],M=e.inputs[7],O=e.inputs[8],$=ve({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),D=[g,E,M,O],F=[-1];b=e.compute(Un(D,$),{inputs:D,outputs:F})[0],D.splice(0,1,y);let Q=ve({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(Un(D,Q),{inputs:D,outputs:F})[0]}let _=yi(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?b:g,void 0,0),w=Xa(e,t.doRotary?S:y,r),k=Xa(e,v,r);Ii(e,_,w,k,void 0,void 0,s,o,void 0,r,l,d)}}),Ja,hf,mf,fv,G2=j(()=>{ne(),se(),ir(),ue(),Ja=(e,t,r,i,n,a,s,o)=>{let l=ke(a),d=l===1?"f32":`vec${l}f`,p=l===1?"vec2f":`mat2x${l}f`,f=n*s,g=64;f===1&&(g=256);let y=[n,s,a/l],v=[n,s,2],b=["rank","type","type"],S=[];S.push(...ie(y,v));let _=w=>{let k=q("x",t.dataType,3,l),T=q("scale",r.dataType,r.dims),E=q("bias",i.dataType,i.dims),M=ee("output",1,3,2),O=[k,T,E,M];return`
  var<workgroup> workgroup_shared : array<${p}, ${g}>;
  const workgroup_size = ${g}u;
  ${w.declareVariables(...O)}
  ${w.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${tr("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${tr("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${g}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:v,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:_},{inputs:[t,r,i],outputs:[-1]})[0]},hf=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],o=i[1],l=R.sizeFromDimension(i,a),d=ke(l),p=R.size(n)/d,f=Ja(e,t[0],t[1],t[2],s,l,o,r.epsilon),g=[s,o,l/d],y=[s,o],v=["type","none"],b=S=>{let _=q("x",t[0].dataType,g.length,d),w=q("scale_shift",1,y.length,2),k=ee("output",t[0].dataType,g.length,d),T=[_,w,k];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ie(g,y,g)]}),getShaderSource:b},{inputs:[t[0],f]})},mf=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],o=R.sizeFromDimension(i,1)/s,l=ke(s),d=R.size(n)/l,p=[{type:12,data:o},{type:12,data:Math.floor(s/l)}],f=["type","type"],g=!1,y=[0,i.length-1];for(let _=0;_<i.length-2;_++)g=g||i[_+1]!==1,y.push(_+1);g=g&&i[i.length-1]!==1;let v=g?e.compute(Je(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(_,w)=>i[y[w]])),b=Ja(e,v,t[1],t[2],a,o,s,r.epsilon),S=_=>{let w=Oe(t[0].dataType),k=l===1?"vec2f":`mat${l}x2f`,T=O=>{let $=O===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${w}(${D}(scale.${$}))`;case 2:return`vec2<${w}>(${D}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${w}>(${D}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=q("input",t[0].dataType,t[0].dims,l),M=ee("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:S},{inputs:[t[0],b]})},fv=(e,t)=>{t.format==="NHWC"?mf(e,e.inputs,t):hf(e,e.inputs,t)}}),gf,yf,hv,H2=j(()=>{ne(),se(),ue(),gf=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},yf=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],o=n,l=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,l),p=R.sizeFromDimension(n,l),f=R.size(a.dims),g=s?R.size(s.dims):0;if(f!==p||s&&g!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${g}`);let y=[];for(let E=0;E<n.length;++E)E<l?y.push(n[E]):y.push(1);let v=ke(p),b=["type","type"],S=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/v)},{type:1,data:t.epsilon}];s&&b.push("type");let _=r>1,w=r>2,k=E=>{let M=Oe(e[0].dataType),O=[q("x",e[0].dataType,e[0].dims,v),q("scale",a.dataType,a.dims,v)];s&&O.push(q("bias",s.dataType,s.dims,v)),O.push(ee("output",e[0].dataType,o,v)),_&&O.push(ee("mean_data_output",1,y)),w&&O.push(ee("inv_std_output",1,y));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms($).declareVariables(...O)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ls("f32",v)};
    var mean_square_vector = ${Ls("f32",v)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Br(M,v,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${tr("mean_vector",v)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${tr("mean_square_vector",v)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Br(M,v,"x[j + offset]")};
      let f32scale = ${Br(M,v,"scale[j]")};
      output[j + offset] = ${O[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Br(M,v,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:o,dataType:e[0].dataType}];return _&&T.push({dims:y,dataType:1}),w&&T.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${v};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:k}},hv=(e,t)=>{gf(e.inputs),e.compute(yf(e.inputs,t,e.outputCount))}}),vf,mv,F2=j(()=>{se(),Wo(),qo(),vf=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},mv=e=>{vf(e.inputs);let t=Wr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Lo(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=R.size(e.inputs[0].dims.slice(0,-2)),s=R.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let o=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,a,r],p=[o,l];e.compute(Bn(p,{activation:""},t,d),{inputs:p})}else e.compute(Bn(e.inputs,{activation:""},t))}}}),_f,wf,bf,gv,yv,j2=j(()=>{ne(),se(),Ee(),ue(),_f=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!R.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},wf=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=ke(t.k),g=ke(d),y=ke(s),v=o.concat([n,s]),b=n>1&&s/y%2===0?2:1,S=R.size(v)/y/b,_=64,w=[],k=[l,n,a/f],T=R.convertShape(e[1].dims).slice();T.splice(-1,1,d/g),w.push(...ie(k)),w.push(...ie(T)),w.push(...ie(e[2].dims)),e.length===4&&w.push(...ie(R.convertShape(e[3].dims)));let E=[l,n,s/y];w.push(...ie(E));let M=O=>{let $=k.length,D=q("a",e[0].dataType,$,f),F=q("b",12,T.length,g),Q=q("scales",e[2].dataType,e[2].dims.length),z=[D,F,Q],A=e.length===4?q("zero_points",12,e[3].dims.length):void 0;A&&z.push(A);let I=E.length,W=ee("output",e[0].dataType,I,y),H=Oe(e[0].dataType),V=(()=>{switch(f){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${f}-component is not supported.`)}})(),Z=()=>{let U=`
          // reuse a data
            var input_offset = ${D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`)};
            var a_data: ${V};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${D.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<y*b;L++)U+=`
            b_value = ${g===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${V}(${Array.from({length:4},(Y,J)=>`${H}(b_value_lower[${J}]), ${H}(b_value_upper[${J}])`).join(", ")});
            b_dequantized_values = ${f===1?`${V}(${Array.from({length:8},(Y,J)=>`(b_quantized_values[${J}] - ${A?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${V}(${Array(8).fill(`${A?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(L/y)}]${y>1?`[${L%y}]`:""} += ${Array.from({length:8/f},(Y,J)=>`${f===1?`a_data[${J}] * b_dequantized_values[${J}]`:`dot(a_data[${J}], b_dequantized_values[${J}])`}`).join(" + ")};
          `;return U},G=()=>{let U=`
            var col_index = col * ${y};
            ${A?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${H}(8);`}
            `;for(let L=0;L<y*b;L++)U+=`
            let scale${L} = ${Q.getByOffset("col_index * nBlocksPerCol + block")};
            ${A?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${A.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${H}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return U},te=()=>{let U=`col_index = col * ${y};`;for(let L=0;L<y*b;L++)U+=`
            let b${L}_data = ${F.getByIndices(`${F.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${V};
            var b_dequantized_values: ${V};`,U};return`
        var<workgroup> workgroup_shared: array<${W.type.value}, ${b*_}>;
        ${O.declareVariables(...z,W)}
        ${O.mainStart([_,1,1])}
          let output_indices = ${W.offsetToIndices(`(global_idx / ${_}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${G()}
            for (var word: u32 = 0; word < ${d}; word += ${g}) {
              ${te()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${Z()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${W.type.value} = ${W.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${W.setByIndices(`${W.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${g};${y};${b};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:v,dataType:p}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:M}},bf=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,p=e[0].dataType,f=ke(t.k),g=ke(d),y=o.concat([n,s]),v=128,b=s%8===0?8:s%4===0?4:1,S=v/b,_=S*g*8,w=_/f,k=_/t.blockSize,T=R.size(y)/b,E=[],M=[l,n,a/f],O=R.convertShape(e[1].dims).slice();O.splice(-1,1,d/g),E.push(...ie(M)),E.push(...ie(O)),E.push(...ie(e[2].dims)),e.length===4&&E.push(...ie(R.convertShape(e[3].dims)));let $=[l,n,s];E.push(...ie($));let D=F=>{let Q=M.length,z=q("a",e[0].dataType,Q,f),A=q("b",12,O.length,g),I=q("scales",e[2].dataType,e[2].dims.length),W=[z,A,I],H=e.length===4?q("zero_points",12,e[3].dims.length):void 0;H&&W.push(H);let V=$.length,Z=ee("output",e[0].dataType,V),G=Oe(e[0].dataType),te=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${G}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${G}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${z.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${Z.type.value}, ${S}>, ${b}>;
        ${F.declareVariables(...W,Z)}
        ${F.mainStart([S,b,1])}
          let output_indices = ${Z.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${v})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${z.getByIndices(`${z.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${z.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${H?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${G}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${G}(8);`}
            let scale = ${I.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${A.getByIndices(`${A.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${g}; i++) {
              ${te()}
              let b_value = ${g===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${G}>(${Array.from({length:4},(U,L)=>`${G}(b_value_lower[${L}]), ${G}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${G}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(U,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${Z.type.value} = ${Z.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Z.setByIndices(`${Z.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${g};${S};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:p}],dispatchGroup:{x:T},programUniforms:E}),getShaderSource:D}},gv=(e,t)=>{_f(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(bf(e.inputs,t)):e.compute(wf(e.inputs,t))},yv=e=>ve(e)}),$f,xf,Sf,Tf,kf,Cf,If,Ef,vv,V2=j(()=>{ne(),se(),ue(),$f=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},xf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${re("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${re("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${re("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Sf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${re("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${re("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${re("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${re("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Tf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${re("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${re("uniforms.x_shape",n,t)})) {
                  k = i32(${re("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${re("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},kf=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${re("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${re("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${re("uniforms.x_shape",n,t)})) {
                  k -= i32(${re("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${re("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Cf=(e,t,r)=>{switch(r.mode){case 0:return xf(e,t,r.pads.length);case 1:return Sf(e,t,r.pads.length);case 2:return Tf(e,t,r.pads.length);case 3:return kf(e,t,r.pads.length);default:throw new Error("Invalid mode")}},If=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ie(e[0].dims,r));let o=["rank"],l=d=>{let p=ee("output",e[0].dataType,r.length),f=q("x",e[0].dataType,i.length),g=f.type.value,y=Cf(p,i.length,t),v=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&v.push({name:"constant_value",type:s?g:"f32"}),`
            ${d.registerUniforms(v).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:a}),getShaderSource:l}},Ef=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)a[Number(o[l])]=Number(r[l]),a[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>a[Number(l)]=Number(o));let s=[];return a.forEach(o=>s.push(o)),{mode:t.mode,value:i,pads:s}}else return t},vv=(e,t)=>{$f(e.inputs);let r=Ef(e.inputs,t);e.compute(If(e.inputs,r),{inputs:[0]})}}),li,es,ts,rs,is,zf,Af,ns,as,_v,wv,ss,bv,$v,os,xv,Sv,Tv,kv,K2=j(()=>{ut(),ne(),se(),ue(),li=e=>{if(we.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},es=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),o=t.strides.slice(),l=a?t.dilations.slice():[],d=t.pads.slice();Pn.adjustPoolAttributes(r,n,s,o,l,d);let p=Pn.computePoolOutputShape(r,n,o,l,s,d,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:s,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:o,pads:d,cacheKey:t.cacheKey});let g=p.slice();return g.push(g.splice(1,1)[0]),[f,i?g:p]},ts=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);a.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],v=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];g=!!(b+S),a.push({type:12,data:y},{type:12,data:v},{type:12,data:b},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,f,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);a.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,p)=>d+p);return[a,s,!!l,!1,!1]}},rs=(e,t,r,i,n,a,s,o,l,d,p,f)=>{let g=n.format==="NHWC",y=t.type.value,v=ee("output",t.type.tensor,i);if(n.kernelShape.length<=2){let b="",S="",_="",w=r-(g?2:1);if(p?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let k=r-(g?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${S}
              ${b}
              ${_}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=n.kernelShape.length,S=n.pads.length,_="";return d?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,v)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${v.offsetToIndices("global_idx")};
              var xIndices = ${v.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${re("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${re("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${re("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${re("uniforms.pads","j - 2u",S)};
                  ${_}
              }
              ${s}

              output[global_idx] = value;
            }`}},is=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,zf=e=>`${is(e)};${e.countIncludePad}`,Af=e=>`${is(e)};${e.storageOrder};${e.dilations}`,ns=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),as=(e,t,r,i)=>{let[n,a]=es(t,i,r),s=q("x",t.dataType,t.dims.length),o=s.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[p,f,g,y,v]=ts(a,n);p.push(...ie(t.dims,a));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${v}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:p}),getShaderSource:S=>rs(S,s,t.dims.length,a.length,n,l,d,0,f,g,y,v)}},_v=e=>{let t=e.count_include_pad!==0,r=ns(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:zf(i)}},wv=(e,t)=>{li(e.inputs),e.compute(as("AveragePool",e.inputs[0],!1,t))},ss={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},bv=e=>{let t=e.format;return{format:t,...ss,cacheKey:t}},$v=(e,t)=>{li(e.inputs),e.compute(as("GlobalAveragePool",e.inputs[0],!0,t))},os=(e,t,r,i)=>{let[n,a]=es(t,i,r),s=`
      value = max(x_val, value);
    `,o="",l=q("x",t.dataType,t.dims.length),d=["rank"],[p,f,g,y,v]=ts(a,n);return p.push(...ie(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${v}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(a)/64)},programUniforms:p}),getShaderSource:b=>rs(b,l,t.dims.length,a.length,n,s,o,t.dataType===10?-65504:-1e5,f,g,y,v)}},xv=(e,t)=>{li(e.inputs),e.compute(os("MaxPool",e.inputs[0],!1,t))},Sv=e=>{let t=e.storage_order,r=e.dilations,i=ns(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Af(n)}},Tv=e=>{let t=e.format;return{format:t,...ss,cacheKey:t}},kv=(e,t)=>{li(e.inputs),e.compute(os("GlobalMaxPool",e.inputs[0],!0,t))}}),Of,Nf,Cv,Iv,Z2=j(()=>{ne(),se(),Ee(),ue(),Of=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Nf=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,o=R.size(a),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,g=f?l?[Math.ceil(R.size(f.dims)/4)]:f.dims:void 0,y=p.length===0||p.length===1&&p[0]===1,v=y===!1&&p.length===1,b=ke(o),S=y&&(!l||b===4),_=S?b:1,w=S&&!l?b:1,k=q("input",l?12:i,d.length,w),T=q("scale",s,p.length),E=f?q("zero_point",l?12:i,g.length):void 0,M=ee("output",s,a.length,_),O=[k,T];E&&O.push(E);let $=[d,p];f&&$.push(g);let D=[{type:12,data:o/_},{type:12,data:r},{type:12,data:t.blockSize},...ie(...$,a)],F=Q=>{let z=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Q.registerUniforms(z).declareVariables(...O,M)}
      ${Q.mainStart()}
          ${Q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${T.getByOffset("0")}`:v?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:v?l?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:F,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:D})}},Cv=(e,t)=>{Of(e.inputs,t),e.compute(Nf(e.inputs,t))},Iv=e=>ve({axis:e.axis,blockSize:e.blockSize})}),Mf,Rf,Ev,Q2=j(()=>{ut(),ne(),ue(),Mf=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},Rf=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,o=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ie(a)],l=d=>{let p=ee("output",i,a.length),f=p.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(g).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:o})}},Ev=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),we.webgpu.validateInputContent&&Mf(t,r,i),e.compute(Rf(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Pf,Df,zv,Av,Y2=j(()=>{ne(),se(),Ee(),ue(),Pf=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Df=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(R.sizeToDimension(i,i.length-1)/a),o=i[i.length-1],l=R.sizeFromDimension(r,o),d=[{type:12,data:s},{type:12,data:o},{type:12,data:l},...ie(e[1].dims,e[2].dims,n)],p=f=>{let g=q("indices",e[1].dataType,e[1].dims.length),y=q("updates",e[2].dataType,e[2].dims.length,a),v=t.reduction!=="none"&&t.reduction!==""?ag("output",e[0].dataType,n.length):ee("output",e[0].dataType,n.length,a);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,v)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Pf(t.reduction,"output[data_offset + i]","value",v.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},zv=e=>ve({reduction:e.reduction}),Av=(e,t)=>{e.compute(Df(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Bf,Uf,Lf,us,Wf,qf,Gf,Hf,Ff,jf,Vf,Kf,ls,Zf,Qf,Yf,Xf,Jf,Ov,Nv,X2=j(()=>{ne(),se(),Ee(),ue(),Bf=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Uf=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},Lf=(e,t,r,i,n,a)=>{let[s,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Bf(i,t),t.axes.length>0&&Uf(i,t.axes,d).forEach((p,f)=>i[f]=p)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(p=>n.push(Number(p))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},us=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,Wf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${us("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${us("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",qf=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Gf=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},Hf=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},Ff=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},jf=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${re("uniforms.scales","i",i)};
        var roi_low = ${re("uniforms.roi","i",n)};
        var roi_hi = ${re("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${re("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Vf=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${re("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${re("uniforms.roi","i",a)};
          var roi_hi = ${re("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${re("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Kf=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ls=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Zf=(e,t,r,i,n)=>{let[a,s,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${ls(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Qf=(e,t,r,i,n,a,s,o,l,d)=>{let p=r.length===2,[f,g]=p?[0,1]:[2,3],y=e.type.value,v=b=>{let S=b===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[b]},
        ${i[b]}, ${r[b]}, ${a[b]}, ${a[b]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[b]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${r[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${S})`)};
          data[i + 1] = ${b===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${v(f)};
    ${v(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Yf=(e,t,r,i,n)=>{let[a,s,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${ls(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${o}];
      var width:${p} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Xf=(e,t,r,i,n,a)=>{let s=e.dims,o=Gf(a,t.axes,s.length),l=Hf(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,k)=>w===0?1:l[k]/w),t.keepAspectRatioPolicy!=="stretch"&&(l=Ff(s,d,t)));let p=ee("output",e.dataType,l.length),f=q("input",e.dataType,s.length),g=R.size(l),y=s.length===l.length&&s.every((w,k)=>w===l[k]),v=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,S=f.type.value,_=w=>`
      ${y?"":`
      ${Wf(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Kf(f,s)};
              ${qf(t.nearestMode,r,S)};
              ${Vf(f,p,s,l,d.length,o.length,v)};
              `;case"linear":return`
              ${jf(p,s,l,d.length,o.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Zf(f,p,s,v,b)}`;if(s.length===3||s.length===5)return`${Yf(f,p,s,v,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Qf(f,p,s,l,d,o,t.cubicCoeffA,v,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(f,p)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:d},{type:1,data:o},...ie(s,l)]})}},Jf=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ov=(e,t)=>{let r=[],i=[],n=[],a=Jf(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Lf(e.inputs,t,a,r,i,n),e.compute(Xf(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Nv=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return ve({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),eh,th,Mv,J2=j(()=>{ne(),se(),ue(),eh=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},th=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=R.size(a),o=a,l=s,d=a.slice(-1)[0],p=i?a.slice(0,-1).concat(1):[],f=!n&&e.length>3,g=e.length>4,y=i&&r>1,v=i&&r>2,b=r>3,S=64,_=ke(d),w=[{type:12,data:l},{type:12,data:_},{type:12,data:d},{type:1,data:t.epsilon}],k=E=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],O=[q("x",e[0].dataType,e[0].dims,_),q("skip",e[1].dataType,e[1].dims,_),q("gamma",e[2].dataType,e[2].dims,_)];f&&O.push(q("beta",e[3].dataType,e[3].dims,_)),g&&O.push(q("bias",e[4].dataType,e[4].dims,_)),O.push(ee("output",e[0].dataType,o,_)),y&&O.push(ee("mean_output",1,p)),v&&O.push(ee("inv_std_output",1,p)),b&&O.push(ee("input_skip_bias_sum",e[0].dataType,o,_));let $=Oe(e[0].dataType),D=Oe(1,_);return`

      ${E.registerUniforms(M).declareVariables(...O)}
      var<workgroup> sum_shared : array<${D}, ${S}>;
      var<workgroup> sum_squared_shared : array<${D}, ${S}>;

      ${E.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Br($,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${tr("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${tr("square_sum",_)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${v?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:o,dataType:e[0].dataType}];return r>1&&T.push({dims:p,dataType:1}),r>2&&T.push({dims:p,dataType:1}),r>3&&T.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${y};${v};${b}`,inputDependencies:e.map((E,M)=>"type")},getShaderSource:k,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:w})}},Mv=(e,t)=>{eh(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(th(e.inputs,t,e.outputCount,!1),{outputs:r})}}),rh,di,ih,ds,nh,ah,Rv,Pv,ex=j(()=>{ne(),se(),Ee(),ue(),rh=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},di=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},ih=(e,t)=>{if(e.length>1){let r=di(e,1),i=di(e,2),n=di(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),ve({starts:r,ends:i,axes:n})}else return t},ds=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},nh=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${re("uniforms.input_shape","i",r.length)};
            let steps_i = ${re("uniforms.steps","i",r.length)};
            let signs_i = ${re("uniforms.signs","i",r.length)};
            let starts_i = ${re("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,ah=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=di(e,4);a.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((_,w)=>ds(_,w,r,n,a)),o=t.ends.map((_,w)=>ds(_,w,r,n,a));if(n.length!==s.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let _=0;_<r.length;++_)n.includes(_)||(s.splice(_,0,0),o.splice(_,0,r[_]),a.splice(_,0,1));let l=a.map(_=>Math.sign(_));a.forEach((_,w,k)=>{if(_<0){let T=(o[w]-s[w])/_,E=s[w],M=E+T*a[w];s[w]=M,o[w]=E,k[w]=-_}});let d=r.slice(0);n.forEach((_,w)=>{d[_]=Math.ceil((o[_]-s[_])/a[_])});let p={dims:d,dataType:e[0].dataType},f=ee("output",e[0].dataType,d.length),g=q("input",e[0].dataType,e[0].dims.length),y=R.size(d),v=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],b=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:a},...ie(e[0].dims,d)],S=_=>`
      ${_.registerUniforms(v).declareVariables(g,f)}
        ${nh(g,f,r)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},Rv=(e,t)=>{rh(e.inputs,t);let r=ih(e.inputs,t);e.compute(ah(e.inputs,r),{inputs:[0]})},Pv=e=>{let t=e.starts,r=e.ends,i=e.axes;return ve({starts:t,ends:r,axes:i})}}),sh,oh,Dv,Bv,tx=j(()=>{ne(),se(),Ee(),ir(),ue(),sh=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},oh=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),a=i.length,s=R.normalizeAxis(t.axis,a),o=s<i.length-1,l,d=[];o?(d=Array.from({length:a},(O,$)=>$),d[s]=a-1,d[a-1]=s,l=e.compute(Je(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let p=l.dims,f=p[a-1],g=n/f,y=ke(f),v=f/y,b=64;g===1&&(b=256);let S=(O,$)=>$===4?`max(max(${O}.x, ${O}.y), max(${O}.z, ${O}.w))`:$===2?`max(${O}.x, ${O}.y)`:$===3?`max(max(${O}.x, ${O}.y), ${O}.z)`:O,_=q("x",l.dataType,l.dims,y),w=ee("result",l.dataType,l.dims,y),k=_.type.value,T=Oe(l.dataType)==="f32"?`var threadMax = ${k}(-3.4028234663852886e+38f);`:`var threadMax = ${k}(-65504.0h);`,E=O=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${O.registerUniform("packedCols","i32").declareVariables(_,w)}
      ${O.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${tr("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${k}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:v}]}),getShaderSource:E},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Je(M,d),{inputs:[M]})},Dv=(e,t)=>{sh(e.inputs),oh(e,t)},Bv=e=>ve({axis:e.axis})}),cs,uh,lh,dh,Uv,rx=j(()=>{ne(),se(),ue(),cs=e=>Array.from(e.getBigInt64Array(),Number),uh=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(cs(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},lh=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},dh=(e,t)=>{let r=e[0].dims,i=t??cs(e[1]),n=lh(r,i),a=R.size(n),s=e[0].dataType,o=q("input",s,r.length),l=ee("output",s,n.length),d=p=>`
      const inputShape = ${o.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(o,l)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ie(e[0].dims,n)]}),getShaderSource:d}},Uv=e=>{uh(e.inputs),e.compute(dh(e.inputs),{inputs:[0]})}}),ch,ph,Lv,ix=j(()=>{ne(),se(),ue(),ch=(e,t,r,i,n)=>{let a=ee("output_data",n,r.length,4),s=q("a_data",t[1].dataType,t[1].dims.length,4),o=q("b_data",t[2].dataType,t[2].dims.length,4),l=q("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,g,y)=>`select(${g}, ${f}, ${y})`;if(!i)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let f=(g,y,v="")=>{let b=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,_=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${v}(${p(b,S,_)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,o,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},ph=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(R.areEqual(t,r)&&R.areEqual(r,i)),s=t,o=R.size(t);if(a){let d=Wr.calcShape(Wr.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,o=R.size(s)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>ch(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...ie(i,t,r,s)]})}},Lv=e=>{e.compute(ph(e.inputs))}}),Wv,nx=j(()=>{v2(),Po(),_2(),w2(),b2(),$2(),x2(),I2(),z2(),A2(),O2(),N2(),M2(),R2(),P2(),D2(),B2(),U2(),L2(),W2(),q2(),G2(),H2(),F2(),j2(),sv(),V2(),K2(),Z2(),Q2(),Y2(),Ro(),X2(),cv(),J2(),ex(),tx(),lv(),rx(),ir(),Do(),ix(),Wv=new Map([["Abs",[Mg]],["Acos",[Rg]],["Acosh",[Pg]],["Add",[gy]],["ArgMax",[zg,qs]],["ArgMin",[Eg,qs]],["Asin",[Dg]],["Asinh",[Bg]],["Atan",[Ug]],["Atanh",[Lg]],["Attention",[Ag]],["AveragePool",[wv,_v]],["BatchNormalization",[Og]],["BiasAdd",[Ng]],["BiasSplitGelu",[my]],["Cast",[qg,Wg]],["Ceil",[Hg]],["Clip",[Gg]],["Concat",[ky,Cy]],["Conv",[Ks,Vs]],["ConvTranspose",[Dy,Py]],["Cos",[Fg]],["Cosh",[jg]],["CumSum",[By,Uy]],["DepthToSpace",[Ly,Wy]],["DequantizeLinear",[Cv,Iv]],["Div",[yy]],["Einsum",[qy,Gy]],["Elu",[Vg,gi]],["Equal",[vy]],["Erf",[Kg]],["Exp",[Zg]],["Expand",[Hy]],["FastGelu",[Fy]],["Floor",[Qg]],["FusedConv",[Ks,Vs]],["Gather",[Vy,jy]],["GatherElements",[Jy,Xy]],["GatherBlockQuantized",[Qy,Yy]],["GatherND",[Ky,Zy]],["Gelu",[Yg]],["Gemm",[tv,ev]],["GlobalAveragePool",[$v,bv]],["GlobalMaxPool",[kv,Tv]],["Greater",[$y]],["GreaterOrEqual",[Sy]],["GridSample",[rv,iv]],["GroupQueryAttention",[pv]],["HardSigmoid",[ay,ny]],["InstanceNormalization",[fv]],["LayerNormalization",[hv]],["LeakyRelu",[Xg,gi]],["Less",[xy]],["LessOrEqual",[Ty]],["Log",[fy]],["MatMul",[mv]],["MatMulNBits",[gv,yv]],["MaxPool",[xv,Sv]],["Mul",[_y]],["MultiHeadAttention",[av,nv]],["Neg",[ey]],["Not",[Jg]],["Pad",[vv]],["Pow",[wy]],["QuickGelu",[hy,gi]],["Range",[Ev]],["Reciprocal",[ty]],["ReduceMin",[Sg]],["ReduceMean",[_g]],["ReduceMax",[xg]],["ReduceSum",[kg]],["ReduceProd",[Tg]],["ReduceL1",[wg]],["ReduceL2",[bg]],["ReduceLogSum",[Ig]],["ReduceLogSumExp",[$g]],["ReduceSumSquare",[Cg]],["Relu",[ry]],["Resize",[Ov,Nv]],["RotaryEmbedding",[dv]],["ScatterND",[Av,zv]],["Sigmoid",[iy]],["Sin",[sy]],["Sinh",[oy]],["Slice",[Rv,Pv]],["SkipLayerNormalization",[Mv]],["Split",[ov,uv]],["Sqrt",[uy]],["Softmax",[Dv,Bv]],["Sub",[by]],["Tan",[ly]],["Tanh",[dy]],["ThresholdedRelu",[py,gi]],["Tile",[Uv]],["Transpose",[og,ug]],["Where",[Lv]]])}),qv,ax=j(()=>{ut(),Mt(),ue(),qv=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){_t(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),st(e.programInfo.name)}dispose(){}build(e,t){_t(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=sg(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,o=r.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return st(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Gv={};Vr(Gv,{WebGpuBackend:()=>Hv});var fh,hh,mh,Hv,sx=j(()=>{ut(),ne(),Mt(),tg(),g2(),nx(),ax(),fh=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},hh=(e,t,r)=>{var n,a;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${fh(t,((a=e.shaderCache)==null?void 0:a.inputDependencies)??new Array(t.length).fill("dims"))}`,i},mh=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Hv=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=a=>t.features.has(a)&&r.push(a)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new mh(t.info||await t.requestAdapterInfo()),this.gpuDataManager=ng(this),this.programManager=new qv(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ao(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;_t(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let a=r[n],s=a.kernelId,o=this.kernels.get(s),l=o.kernelType,d=o.kernelName,p=a.programName,f=a.inputTensorViews,g=a.outputTensorViews,y=t[n*2],v=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),S=Number(v-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(_=>({dims:_.dims,dataType:zt(_.dataType)})),outputsMetadata:g.map(_=>({dims:_.dims,dataType:zt(_.dataType)})),kernelId:s,kernelType:l,kernelName:d,programName:p,startTime:b,endTime:S});else{let _="";f.forEach((k,T)=>{_+=`input[${T}]: [${k.dims}] | ${zt(k.dataType)}, `});let w="";g.forEach((k,T)=>{w+=`output[${T}]: [${k.dims}] | ${zt(k.dataType)}, `}),console.log(`[profiling] kernel "${s}|${l}|${d}|${p}" ${_}${w}start time: ${b} ns, execution time: ${S-b} ns`)}Ci("GPU",`${p}::${y}::${v}`)}e.unmap(),this.pendingQueries.delete(e)}),st()}run(e,t,r,i,n,a){_t(e.name);let s=[];for(let w=0;w<t.length;++w){let k=t[w].data;if(k===0)continue;let T=this.gpuDataManager.get(k);if(!T)throw new Error(`no GPU data for input: ${k}`);s.push(T)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),p=r.length===0?o.map((w,k)=>k):r;if(p.length!==o.length)throw new Error(`Output size ${p.length} must be equal to ${o.length}.`);let f=[],g=[];for(let w=0;w<o.length;++w){if(!Number.isInteger(p[w])||p[w]<-3||p[w]>=a)throw new Error(`Invalid output index: ${p[w]}`);if(p[w]===-3)continue;let k=p[w]===-1,T=p[w]===-2,E=k||T?n(o[w].dataType,o[w].dims):i(p[w],o[w].dataType,o[w].dims);if(f.push(E),E.data===0)continue;let M=this.gpuDataManager.get(E.data);if(!M)throw new Error(`no GPU data for output: ${E.data}`);if(k&&this.temporaryData.push(M),T){let O=this.kernelPersistentData.get(this.currentKernelId);O||(O=[],this.kernelPersistentData.set(this.currentKernelId,O)),O.push(M)}g.push(M)}if(s.length!==t.length||g.length!==f.length){if(g.length===0)return st(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let w=0,k=[];d.forEach(O=>{let $=typeof O.data=="number"?[O.data]:O.data;if($.length===0)return;let D=O.type===10?2:4,F,Q;O.type===10?(Q=$.length>4?16:$.length>2?8:$.length*D,F=$.length>4?16:D*$.length):(Q=$.length<=2?$.length*D:16,F=16),w=Math.ceil(w/Q)*Q,k.push(w);let z=O.type===10?8:4;w+=$.length>4?Math.ceil($.length/z)*F:$.length*D});let T=16;w=Math.ceil(w/T)*T;let E=new ArrayBuffer(w);d.forEach((O,$)=>{let D=k[$],F=typeof O.data=="number"?[O.data]:O.data;if(O.type===6)new Int32Array(E,D,F.length).set(F);else if(O.type===12)new Uint32Array(E,D,F.length).set(F);else if(O.type===10)new Uint16Array(E,D,F.length).set(F);else if(O.type===1)new Float32Array(E,D,F.length).set(F);else throw new Error(`Unsupported uniform type: ${zt(O.type)}`)});let M=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,E,0,w),this.gpuDataManager.release(M.id),y={offset:0,size:w,buffer:M.buffer}}let v=this.programManager.normalizeDispatchGroupSize(l),b=v[1]===1&&v[2]===1,S=hh(e,t,b),_=this.programManager.getArtifact(S);if(_||(_=this.programManager.build(e,v),this.programManager.setArtifact(S,_),he("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&_.uniformVariablesInfo){if(d.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${d.length} in program "${_.programInfo.name}".`);for(let w=0;w<d.length;w++){let k=d[w],T=k.type,E=typeof k.data=="number"?1:k.data.length,[M,O]=_.uniformVariablesInfo[w];if(T!==M||E!==O)throw new Error(`Uniform variable ${w} mismatch: expect type ${M} with size ${O}, got type ${T} with size ${E} in program "${_.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${v[0]}x${v[1]}x${v[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(_,s,g,v,y),st(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Wv.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Us(this,e,t);return Oo(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Fv={};Vr(Fv,{init:()=>jv});var pn,gh,jv,ox=j(()=>{ne(),Mt(),se(),m2(),pn=class Vv{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Vv(this.module,this.dataType,this.data,t)}},gh=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let o=[];for(let l=0;l<s;l++){let d=Number(e.getValue(i*n++,a)),p=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,a)),g=[];for(let y=0;y<f;y++)g.push(Number(e.getValue(i*n++,a)));o.push(new pn(e,d,p,g))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var s;let r=((s=t==null?void 0:t.inputs)==null?void 0:s.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(o,l,d)=>new pn(this.module,l,this.output(o,d),d),a=(o,l)=>{let d=hr(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new pn(this.module,o,p,l)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},jv=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(sx(),ki(Gv)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,o=>s.alloc(Number(o)),o=>s.free(o),(o,l,d,p=!1)=>{if(p)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),s.memcpy(Number(o),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));s.upload(Number(l),f)}},async(o,l,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await s.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>s.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>s.releaseKernel(o),(o,l,d,p)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let f=new gh(t,s,Number(l));return s.computeKernel(Number(o),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new ig(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,o,l,d,p)=>a.ensureTensor(s,o,l,d,p),(s,o)=>{a.uploadTensor(s,o)},async(s,o)=>a.downloadTensor(s,o),(s,o)=>a.registerMLContext(s,o),!!r.trace])}}}),yh,Go,Ho,Gt,vh,ps,Ln,Fo,jo,fs,Vo,Ko,Zo,Kv=j(()=>{ut(),p2(),f2(),ne(),Ir(),Co(),Ym(),yh=(e,t)=>{$e()._OrtInit(e,t)!==0&&_e("Can't initialize onnxruntime.")},Go=async e=>{yh(e.wasm.numThreads,Rn(e.logLevel))},Ho=async(e,t)=>{var i,n;(n=(i=$e()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let a=(ox(),ki(Fv)).init;t==="webgpu"&&await a("webgpu",$e(),e,r),t==="webnn"&&await a("webnn",$e(),e)}},Gt=new Map,vh=e=>{let t=$e(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&_e("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},ps=(e,t)=>{let r=$e(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&_e("Can't get session input/output metadata.");let o=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],p=[];for(let f=0;f<d;f++){let g=Number(r.getValue(n+8+f*a,"*"));p.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(f+d)*a,"*")))}return[o,l,p]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Ln=e=>{let t=$e(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Fo=async(e,t)=>{var f,g,y,v;let r,i,n=$e();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Ln(e);let a=0,s=0,o=0,l=[],d=[],p=[];try{if([s,l]=await Qm(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let $=[];for(let D of t.externalData){let F=typeof D=="string"?D:D.path;$.push(zo(typeof D=="string"?D:D.data).then(Q=>{n.mountExternalData(F,Q)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof $!="string"){let D=$,F=D==null?void 0:D.context,Q=D==null?void 0:D.gpuDevice,z=D==null?void 0:D.deviceType,A=D==null?void 0:D.powerPreference;F?n.currentContext=F:Q?n.currentContext=await n.webnnCreateMLContext(Q):n.currentContext=await n.webnnCreateMLContext({deviceType:z,powerPreference:A})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),(f=n.webgpuOnCreateSession)==null||f.call(n,a),a===0&&_e("Can't create a session."),(g=n.jsepOnCreateSession)==null||g.call(n),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[b,S]=vh(a),_=!!(t!=null&&t.enableGraphCapture),w=[],k=[],T=[],E=[],M=[];for(let $=0;$<b;$++){let[D,F,Q]=ps(a,$);D===0&&_e("Can't get an input name."),d.push(D);let z=n.UTF8ToString(D);w.push(z),T.push(F===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:zt(F),shape:Q})}for(let $=0;$<S;$++){let[D,F,Q]=ps(a,$+b);D===0&&_e("Can't get an output name."),p.push(D);let z=n.UTF8ToString(D);k.push(z),E.push(F===0?{name:z,isTensor:!1}:{name:z,isTensor:!0,type:zt(F),shape:Q});{if(_&&(t==null?void 0:t.preferredOutputLocation)===void 0){M.push("gpu-buffer");continue}let A=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[z])??"cpu",I=n.webnnIsGraphOutput;if(A==="cpu"&&I&&I(a,z)){M.push("ml-tensor-cpu-output");continue}if(A!=="cpu"&&A!=="cpu-pinned"&&A!=="gpu-buffer"&&A!=="ml-tensor")throw new Error(`Not supported preferred output location: ${A}.`);if(_&&A!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${A}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);M.push(A)}}let O=null;return M.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(a),o===0&&_e("Can't create IO binding."),O={handle:o,outputPreferredLocations:M,outputPreferredLocationsEncoded:M.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>Ds($))}),Gt.set(a,[a,d,p,O,_,!1]),[a,w,k,T,E]}catch(b){throw d.forEach(S=>n._OrtFree(S)),p.forEach(S=>n._OrtFree(S)),o!==0&&n._OrtReleaseBinding(o)!==0&&_e("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&_e("Can't release session."),b}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&_e("Can't release session options."),l.forEach(b=>n._free(b)),(v=n.unmountExternalData)==null||v.call(n)}},jo=e=>{var l,d,p;let t=$e(),r=Gt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,o]=r;s&&(o&&t._OrtClearBoundOutputs(s.handle)!==0&&_e("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&_e("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(p=t.webgpuOnReleaseSession)==null||p.call(t,e),n.forEach(f=>t._OrtFree(f)),a.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(i)!==0&&_e("Can't release session."),Gt.delete(e)},fs=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let o=$e(),l=o.PTR_SIZE,d=e[0],p=e[1],f=e[3],g=f,y,v;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let _=e[2].gpuBuffer;v=hr(fr(d),p);{let w=o.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=w(i,a,_,v)}}else if(f==="ml-tensor"){let _=e[2].mlTensor;v=hr(fr(d),p);let w=o.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=w(i,_,fr(d),p)}else{let _=e[2];if(Array.isArray(_)){v=l*_.length,y=o._malloc(v),r.push(y);for(let w=0;w<_.length;w++){if(typeof _[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);o.setValue(y+w*l,mt(_[w],r),"*")}}else{let w=o.webnnIsGraphInput,k=o.webnnIsGraphOutput;if(d!=="string"&&w&&k){let T=o.UTF8ToString(n);if(w(i,T)||k(i,T)){let E=fr(d);v=hr(E,p),g="ml-tensor";let M=o.webnnCreateTemporaryTensor,O=o.webnnUploadTensor;if(!M||!O)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await M(i,E,p);O($,new Uint8Array(_.buffer,_.byteOffset,_.byteLength)),y=$}else v=_.byteLength,y=o._malloc(v),r.push(y),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,v),y)}else v=_.byteLength,y=o._malloc(v),r.push(y),o.HEAPU8.set(new Uint8Array(_.buffer,_.byteOffset,v),y)}}let b=o.stackSave(),S=o.stackAlloc(4*p.length);try{p.forEach((w,k)=>o.setValue(S+k*l,w,l===4?"i32":"i64"));let _=o._OrtCreateTensor(fr(d),y,v,S,p.length,Ds(g));_===0&&_e(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(_)}finally{o.stackRestore(b)}},Vo=async(e,t,r,i,n,a)=>{var z,A,I,W;let s=$e(),o=s.PTR_SIZE,l=Gt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],f=l[2],g=l[3],y=l[4],v=l[5],b=t.length,S=i.length,_=0,w=[],k=[],T=[],E=[],M=[],O=s.stackSave(),$=s.stackAlloc(b*o),D=s.stackAlloc(b*o),F=s.stackAlloc(S*o),Q=s.stackAlloc(S*o);try{[_,w]=Zm(a),Zt("wasm prepareInputOutputTensor");for(let G=0;G<b;G++)await fs(r[G],k,E,e,p[t[G]],t[G],y);for(let G=0;G<S;G++)await fs(n[G],T,E,e,f[i[G]],b+i[G],y);Qt("wasm prepareInputOutputTensor");for(let G=0;G<b;G++)s.setValue($+G*o,k[G],"*"),s.setValue(D+G*o,p[t[G]],"*");for(let G=0;G<S;G++)s.setValue(F+G*o,T[G],"*"),s.setValue(Q+G*o,f[i[G]],"*");if(g&&!v){let{handle:G,outputPreferredLocations:te,outputPreferredLocationsEncoded:U}=g;if(p.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${p.length}).`);Zt("wasm bindInputsOutputs");for(let L=0;L<b;L++){let Y=t[L];await s._OrtBindInput(G,p[Y],k[L])!==0&&_e(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<S;L++){let Y=i[L];(z=n[L])!=null&&z[3]?(M.push(T[L]),s._OrtBindOutput(G,f[Y],T[L],0)!==0&&_e(`Can't bind pre-allocated output[${L}] for session=${e}.`)):s._OrtBindOutput(G,f[Y],0,U[Y])!==0&&_e(`Can't bind output[${L}] to ${te[L]} for session=${e}.`)}Qt("wasm bindInputsOutputs"),Gt.set(e,[d,p,f,g,y,!0])}(A=s.jsepOnRunStart)==null||A.call(s,d),(I=s.webnnOnRunStart)==null||I.call(s,d);let H;g?H=await s._OrtRunWithBinding(d,g.handle,S,F,_):H=await s._OrtRun(d,D,$,b,Q,S,F,_),H!==0&&_e("failed to call OrtRun().");let V=[],Z=[];Zt("wasm ProcessOutputTensor");for(let G=0;G<S;G++){let te=Number(s.getValue(F+G*o,"*"));if(te===T[G]||M.includes(T[G])){V.push(n[G]),te!==T[G]&&s._OrtReleaseTensor(te)!==0&&_e("Can't release tensor.");continue}let U=s.stackSave(),L=s.stackAlloc(4*o),Y=!1,J,ge=0;try{s._OrtGetTensorData(te,L,L+o,L+2*o,L+3*o)!==0&&_e(`Can't access output tensor data on index ${G}.`);let Be=o===4?"i32":"i64",Ue=Number(s.getValue(L,Be));ge=s.getValue(L+o,"*");let it=s.getValue(L+o*2,"*"),Rt=Number(s.getValue(L+o*3,Be)),Ke=[];for(let xe=0;xe<Rt;xe++)Ke.push(Number(s.getValue(it+xe*o,Be)));s._OrtFree(it)!==0&&_e("Can't free memory for tensor dims.");let Fe=Ke.reduce((xe,ae)=>xe*ae,1);J=zt(Ue);let Pt=g==null?void 0:g.outputPreferredLocations[i[G]];if(J==="string"){if(Pt==="gpu-buffer"||Pt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let xe=[];for(let ae=0;ae<Fe;ae++){let Ze=s.getValue(ge+ae*o,"*"),Mi=s.getValue(ge+(ae+1)*o,"*"),Kr=ae===Fe-1?void 0:Mi-Ze;xe.push(s.UTF8ToString(Ze,Kr))}V.push([J,Ke,xe,"cpu"])}else if(Pt==="gpu-buffer"&&Fe>0){let xe=s.jsepGetBuffer;if(!xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ae=xe(ge),Ze=hr(Ue,Fe);if(Ze===void 0||!Io(J))throw new Error(`Unsupported data type: ${J}`);Y=!0,V.push([J,Ke,{gpuBuffer:ae,download:s.jsepCreateDownloader(ae,Ze,J),dispose:()=>{s._OrtReleaseTensor(te)!==0&&_e("Can't release tensor.")}},"gpu-buffer"])}else if(Pt==="ml-tensor"&&Fe>0){let xe=s.webnnEnsureTensor,ae=s.webnnIsGraphInputOutputTypeSupported;if(!xe||!ae)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(hr(Ue,Fe)===void 0||!Eo(J))throw new Error(`Unsupported data type: ${J}`);if(!ae(e,J,!1))throw new Error(`preferredLocation "ml-tensor" for ${J} output is not supported by current WebNN Context.`);let Ze=await xe(e,ge,Ue,Ke,!1);Y=!0,V.push([J,Ke,{mlTensor:Ze,download:s.webnnCreateMLTensorDownloader(ge,J),dispose:()=>{s.webnnReleaseTensorId(ge),s._OrtReleaseTensor(te)}},"ml-tensor"])}else if(Pt==="ml-tensor-cpu-output"&&Fe>0){let xe=s.webnnCreateMLTensorDownloader(ge,J)(),ae=V.length;Y=!0,Z.push((async()=>{let Ze=[ae,await xe];return s.webnnReleaseTensorId(ge),s._OrtReleaseTensor(te),Ze})()),V.push([J,Ke,[],"cpu"])}else{let xe=Gn(J),ae=new xe(Fe);new Uint8Array(ae.buffer,ae.byteOffset,ae.byteLength).set(s.HEAPU8.subarray(ge,ge+ae.byteLength)),V.push([J,Ke,ae,"cpu"])}}finally{s.stackRestore(U),J==="string"&&ge&&s._free(ge),Y||s._OrtReleaseTensor(te)}}g&&!y&&(s._OrtClearBoundOutputs(g.handle)!==0&&_e("Can't clear bound outputs."),Gt.set(e,[d,p,f,g,y,!1]));for(let[G,te]of await Promise.all(Z))V[G][2]=te;return Qt("wasm ProcessOutputTensor"),V}finally{(W=s.webnnOnRunEnd)==null||W.call(s,d),s.stackRestore(O),k.forEach(H=>s._OrtReleaseTensor(H)),T.forEach(H=>s._OrtReleaseTensor(H)),E.forEach(H=>s._free(H)),_!==0&&s._OrtReleaseRunOptions(_),w.forEach(H=>s._free(H))}},Ko=e=>{let t=$e(),r=Gt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&_e("Can't get an profile file name."),t._OrtFree(n)},Zo=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),Ht,je,Or,ci,pi,fn,hs,hn,dr,cr,_h,Zv,Qv,Yv,Xv,Jv,e_,t_,r_=j(()=>{ut(),Kv(),Ir(),To(),Ht=()=>!!we.wasm.proxy&&typeof document<"u",Or=!1,ci=!1,pi=!1,hn=new Map,dr=(e,t)=>{let r=hn.get(e);r?r.push(t):hn.set(e,[t])},cr=()=>{if(Or||!ci||pi||!je)throw new Error("worker not ready")},_h=e=>{switch(e.data.type){case"init-wasm":Or=!1,e.data.err?(pi=!0,hs[1](e.data.err)):(ci=!0,hs[0]()),fn&&(URL.revokeObjectURL(fn),fn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=hn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Zv=async()=>{if(!ci){if(Or)throw new Error("multiple calls to 'initWasm()' detected.");if(pi)throw new Error("previous call to 'initWasm()' failed.");if(Or=!0,Ht())return new Promise((e,t)=>{je==null||je.terminate(),Vm().then(([r,i])=>{try{je=i,je.onerror=a=>t(a),je.onmessage=_h,hs=[e,t];let n={type:"init-wasm",in:we};!n.in.wasm.wasmPaths&&(r||Ps)&&(n.in.wasm.wasmPaths={wasm:new URL("/frontend-onnx-demo/assets/ort-wasm-simd-threaded.jsep-C887KxcQ.wasm",import.meta.url).href}),je.postMessage(n),fn=r}catch(n){t(n)}},t)});try{await ko(we.wasm),await Go(we),ci=!0}catch(e){throw pi=!0,e}finally{Or=!1}}},Qv=async e=>{if(Ht())return cr(),new Promise((t,r)=>{dr("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:we}};je.postMessage(i)});await Ho(we,e)},Yv=async e=>Ht()?(cr(),new Promise((t,r)=>{dr("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};je.postMessage(i,[e.buffer])})):Ln(e),Xv=async(e,t)=>{if(Ht()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return cr(),new Promise((r,i)=>{dr("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),je.postMessage(n,a)})}else return Fo(e,t)},Jv=async e=>{if(Ht())return cr(),new Promise((t,r)=>{dr("release",[t,r]);let i={type:"release",in:e};je.postMessage(i)});jo(e)},e_=async(e,t,r,i,n,a)=>{if(Ht()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return cr(),new Promise((s,o)=>{dr("run",[s,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};je.postMessage(d,Zo(l))})}else return Vo(e,t,r,i,n,a)},t_=async e=>{if(Ht())return cr(),new Promise((t,r)=>{dr("end-profiling",[t,r]);let i={type:"end-profiling",in:e};je.postMessage(i)});Ko(e)}}),ms,wh,i_,ux=j(()=>{ut(),r_(),ne(),So(),Ym(),ms=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},wh=e=>{switch(e[3]){case"cpu":return new gt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Io(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return gt.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Eo(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return gt.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},i_=class{async fetchModelAndCopyToWasmMemory(e){return Yv(await zo(e))}async loadModel(e,t){_t();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Xv(r,t),st()}async dispose(){return Jv(this.sessionId)}async run(e,t,r){_t();let i=[],n=[];Object.entries(e).forEach(f=>{let g=f[0],y=f[1],v=this.inputNames.indexOf(g);if(v===-1)throw new Error(`invalid input '${g}'`);i.push(y),n.push(v)});let a=[],s=[];Object.entries(t).forEach(f=>{let g=f[0],y=f[1],v=this.outputNames.indexOf(g);if(v===-1)throw new Error(`invalid output '${g}'`);a.push(y),s.push(v)});let o=i.map((f,g)=>ms(f,()=>`input "${this.inputNames[n[g]]}"`)),l=a.map((f,g)=>f?ms(f,()=>`output "${this.outputNames[s[g]]}"`):null),d=await e_(this.sessionId,n,o,s,l,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[s[f]]]=a[f]??wh(d[f]);return st(),p}startProfiling(){}endProfiling(){t_(this.sessionId)}}}),n_={};Vr(n_,{OnnxruntimeWebAssemblyBackend:()=>Ys,initializeFlags:()=>Qs,wasmBackend:()=>a_});var Qs,Ys,a_,lx=j(()=>{ut(),r_(),ux(),Qs=()=>{(typeof we.wasm.initTimeout!="number"||we.wasm.initTimeout<0)&&(we.wasm.initTimeout=0);let e=we.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),we.wasm.simd=!1),typeof we.wasm.proxy!="boolean"&&(we.wasm.proxy=!1),typeof we.wasm.trace!="boolean"&&(we.wasm.trace=!1),typeof we.wasm.numThreads!="number"||!Number.isInteger(we.wasm.numThreads)||we.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)we.wasm.numThreads=1;else{let t=typeof navigator>"u"?Z1("node:os").cpus().length:navigator.hardwareConcurrency;we.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Ys=class{async init(e){Qs(),await Zv(),await Qv(e)}async createInferenceSessionHandler(e,t){let r=new i_;return await r.loadModel(e,t),r}},a_=new Ys});ut();ut();ut();var dx="1.24.3",cx=Wm;{let e=(lx(),ki(n_)).wasmBackend;mr("webgpu",e,5),mr("webnn",e,5),mr("cpu",e,10),mr("wasm",e,10)}Object.defineProperty(we.versions,"web",{value:dx,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const px=Object.freeze(Object.defineProperty({__proto__:null,get InferenceSession(){return qn},get TRACE(){return Ci},get TRACE_EVENT_BEGIN(){return Zt},get TRACE_EVENT_END(){return Qt},get TRACE_FUNC_BEGIN(){return _t},get TRACE_FUNC_END(){return st},get Tensor(){return gt},default:cx,get env(){return we},get registerBackend(){return mr}},Symbol.toStringTag,{value:"Module"}));function Qo(e,t,r,i,n,a,s,o){var l=typeof e=="function"?e.options:e;return t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),a&&(l._scopeId="data-v-"+a),{exports:e,options:l}}const De=9,fx=4,bh=De-fx,s_=24,o_=27,u_=40,l_=36;function $h(e,t){return(e+t)*s_+u_}function xh(e,t){return(e-t+De-1)*o_+l_}const hx=280,mx=80,gx={name:"GameBoard",props:{board:{type:Array,default:null},checkers:{type:Object,default:null},validMoves:{type:Object,default:()=>({})},selectedPiece:{type:Array,default:null},lastMove:{type:Object,default:null},extraMove:{type:Object,default:null},currentPlayer:{type:Number,default:1},isHumanTurn:{type:Boolean,default:!1},aiThinking:{type:Boolean,default:!1},winner:{type:Number,default:null},flipped:{type:Boolean,default:!1}},data(){return{transitionsEnabled:!1,animOverrides:{}}},mounted(){setTimeout(()=>{this.transitionsEnabled=!0},200)},watch:{lastMove(e,t){!e||e===t||this._triggerMoveAnim(e)},extraMove(e,t){!e||e===t||this._triggerMoveAnim(e)},board(){this.animOverrides={}}},computed:{svgWidth(){return(De-1)*2*s_+u_*2+20},viewBox(){const e=(De-1)*2*o_+l_*2+20;return`0 0 ${this.svgWidth} ${e}`},turnIndicatorClass(){return(this.flipped?this.currentPlayer===2:this.currentPlayer===1)?"turn-dot-p1":"turn-dot-p2"},turnLabel(){return this.isHumanTurn?"你":this.aiThinking?"AI":(this.flipped?this.currentPlayer===2:this.currentPlayer===1)?"P1":"P2"},allCells(){if(!this.board)return[];const e=[];for(let t=0;t<De;t++)for(let r=0;r<De;r++){const i=this.board[t][r];e.push({i:t,j:r,key:t+"-"+r,cx:this.cx(t,r),cy:this.cy(t,r),player:i,checkerId:i>0?this.getCheckerId(t,r,i):-1,isSelected:this.selectedPiece!==null&&this.selectedPiece[0]===t&&this.selectedPiece[1]===r})}return e},pieceCells(){return this.allCells.filter(e=>e.player>0)},emptyCells(){return this.allCells.filter(e=>e.player===0&&!this._isTarget(e.i,e.j))},validTargetCells(){if(!this.selectedPiece||!this.validMoves)return[];const e=this.selectedPiece[0]+","+this.selectedPiece[1],t=this.validMoves[e];return t?t.map(r=>({i:r[0],j:r[1],key:r[0]+"-"+r[1],cx:this.cx(r[0],r[1]),cy:this.cy(r[0],r[1])})):[]},movePath(){return this.lastMove?this.lastMove.path&&this.lastMove.path.length>=2?this.lastMove.path:[this.lastMove.from,this.lastMove.to]:[]},extraMovePath(){return this.extraMove?this.extraMove.path&&this.extraMove.path.length>=2?this.extraMove.path:[this.extraMove.from,this.extraMove.to]:[]},p1GoalCells(){return this.allCells.filter(e=>e.j>=e.i+bh)},p2GoalCells(){return this.allCells.filter(e=>e.i>=e.j+bh)},connections(){const e=[];for(let t=0;t<De;t++)for(let r=0;r<De;r++){const i=this.cx(t,r),n=this.cy(t,r);t+1<De&&e.push({x1:i,y1:n,x2:this.cx(t+1,r),y2:this.cy(t+1,r)}),r+1<De&&e.push({x1:i,y1:n,x2:this.cx(t,r+1),y2:this.cy(t,r+1)}),t+1<De&&r+1<De&&e.push({x1:i,y1:n,x2:this.cx(t+1,r+1),y2:this.cy(t+1,r+1)})}return e}},methods:{cx(e,t){return this.flipped?$h(De-1-e,De-1-t):$h(e,t)},cy(e,t){return this.flipped?xh(De-1-e,De-1-t):xh(e,t)},hCoord(e,t){return{row:e-t+De,col:Math.min(e,t)+1}},getCheckerId(e,t,r){if(!this.checkers)return 0;const i=this.checkers[String(r)];if(!i)return 0;for(const n in i)if(i[n][0]===e&&i[n][1]===t)return parseInt(n);return 0},_isTarget(e,t){if(!this.selectedPiece||!this.validMoves)return!1;const r=this.selectedPiece[0]+","+this.selectedPiece[1],i=this.validMoves[r];return i?i.some(n=>n[0]===e&&n[1]===t):!1},_triggerMoveAnim(e){const t=e.path&&e.path.length>=2?e.path:[e.from,e.to];if(t.length<=2)return;const r=e.player,i=t[t.length-1],n=this.getCheckerId(i[0],i[1],r);if(n<0)return;const a=r+"-"+n;this.$set(this.animOverrides,a,{x:this.cx(t[0][0],t[0][1]),y:this.cy(t[0][0],t[0][1])}),this._chainAnim(a,t,0)},pieceTransform(e){const t=e.player+"-"+e.checkerId,r=this.animOverrides[t],i=r?r.x:e.cx,n=r?r.y:e.cy;return`translate(${i}px, ${n}px)`},_chainAnim(e,t,r){if(r>=t.length-1){this.$delete(this.animOverrides,e);return}this.$nextTick(()=>{const i=t[r+1];this.$set(this.animOverrides,e,{x:this.cx(i[0],i[1]),y:this.cy(i[0],i[1])}),setTimeout(()=>{this._chainAnim(e,t,r+1)},hx+mx)})},pieceClass(e){return[(this.flipped?e.player===2:e.player===1)?"piece-p1":"piece-p2",e.isSelected?"piece-selected":""]},onClick(e,t){this.$emit("cell-click",{i:e,j:t})}}};var yx=function(){var t=this,r=t._self._c;return r("div",{staticClass:"board-container"},[r("svg",{staticClass:"board-svg",attrs:{viewBox:t.viewBox}},[t._l(t.p1GoalCells,function(i){return r("circle",{key:"gz1-"+i.key,class:["goal-zone",t.flipped?"goal-p2":"goal-p1"],attrs:{cx:i.cx,cy:i.cy,r:"22"}})}),t._l(t.p2GoalCells,function(i){return r("circle",{key:"gz2-"+i.key,class:["goal-zone",t.flipped?"goal-p1":"goal-p2"],attrs:{cx:i.cx,cy:i.cy,r:"22"}})}),t._l(t.connections,function(i,n){return r("line",{key:"ln-"+n,staticClass:"board-line",attrs:{x1:i.x1,y1:i.y1,x2:i.x2,y2:i.y2}})}),t._l(t.emptyCells,function(i){return r("circle",{key:"e-"+i.key,staticClass:"cell-empty",attrs:{cx:i.cx,cy:i.cy,r:"14"},on:{click:function(n){return t.onClick(i.i,i.j)}}},[r("title",[t._v("行"+t._s(t.hCoord(i.i,i.j).row)+" 列"+t._s(t.hCoord(i.i,i.j).col)+" ("+t._s(i.i)+","+t._s(i.j)+")")])])}),t._l(t.validTargetCells,function(i){return r("circle",{key:"vt-"+i.key,staticClass:"valid-target",attrs:{cx:i.cx,cy:i.cy,r:"14"},on:{click:function(n){return t.onClick(i.i,i.j)}}},[r("title",[t._v("移动到 行"+t._s(t.hCoord(i.i,i.j).row)+" 列"+t._s(t.hCoord(i.i,i.j).col))])])}),t._l(t.pieceCells,function(i){return r("g",{key:"pc-"+i.player+"-"+i.checkerId,class:["piece-group",{"no-transition":!t.transitionsEnabled}],style:{transform:t.pieceTransform(i)},on:{click:function(n){return t.onClick(i.i,i.j)}}},[r("circle",{class:t.pieceClass(i),attrs:{cx:"0",cy:"0",r:"16"}},[r("title",[t._v("Player "+t._s(i.player)+" 棋子#"+t._s(i.checkerId+1)+" ("+t._s(i.i)+","+t._s(i.j)+")")])]),r("text",{staticClass:"piece-label",attrs:{x:"0",y:"1","text-anchor":"middle","dominant-baseline":"middle"}},[t._v(t._s(i.checkerId+1))])])}),t.lastMove&&t.movePath.length>=2?[r("circle",{staticClass:"last-move-from",attrs:{cx:t.cx(t.movePath[0][0],t.movePath[0][1]),cy:t.cy(t.movePath[0][0],t.movePath[0][1]),r:"18"}}),r("circle",{staticClass:"last-move-to",attrs:{cx:t.cx(t.movePath[t.movePath.length-1][0],t.movePath[t.movePath.length-1][1]),cy:t.cy(t.movePath[t.movePath.length-1][0],t.movePath[t.movePath.length-1][1]),r:"18"}})]:t._e(),t.extraMove&&t.extraMovePath.length>=2?[r("circle",{staticClass:"extra-move-from",attrs:{cx:t.cx(t.extraMovePath[0][0],t.extraMovePath[0][1]),cy:t.cy(t.extraMovePath[0][0],t.extraMovePath[0][1]),r:"18"}}),r("circle",{staticClass:"extra-move-to",attrs:{cx:t.cx(t.extraMovePath[t.extraMovePath.length-1][0],t.extraMovePath[t.extraMovePath.length-1][1]),cy:t.cy(t.extraMovePath[t.extraMovePath.length-1][0],t.extraMovePath[t.extraMovePath.length-1][1]),r:"18"}})]:t._e(),t.winner?t._e():r("g",{attrs:{transform:`translate(${t.svgWidth-16}, 16)`}},[r("circle",{class:t.turnIndicatorClass,attrs:{cx:"0",cy:"0",r:"10"}}),r("text",{staticClass:"turn-label",attrs:{x:"0",y:"18","text-anchor":"middle"}},[t._v(" "+t._s(t.turnLabel)+" ")])])],2)])},vx=[],_x=Qo(gx,yx,vx,!1,null,"f9073a6a");const wx=_x.exports,bx={name:"GameStatus",props:{currentPlayer:{type:Number,default:1},humanPlayer:{type:Number,default:1},totalMoves:{type:Number,default:0},winner:{default:null},isDraw:{type:Boolean,default:!1},pendingDrawCheck:{type:Boolean,default:!1},aiThinking:{type:Boolean,default:!1},mode:{type:String,default:"human_vs_ai"},autoPlay:{type:Boolean,default:!1},moveHistory:{type:Array,default:()=>[]},flipped:{type:Boolean,default:!1}},computed:{recentMoves(){return this.moveHistory.slice(-10)},displayColor(){return e=>(this.flipped?e===1?2:1:e)===1?{cls:"text-p1",icon:"🔴",name:"Player 1"}:{cls:"text-p2",icon:"🔵",name:"Player 2"}}}};var $x=function(){var t=this,r=t._self._c;return r("div",[r("div",{staticClass:"card"},[r("h3",[t._v("游戏信息")]),r("div",{staticClass:"status-item"},[r("span",[t._v("当前回合")]),r("span",{class:t.displayColor(t.currentPlayer).cls},[t._v(" "+t._s(t.displayColor(t.currentPlayer).icon)+" "+t._s(t.displayColor(t.currentPlayer).name)+" "),t.mode==="human_vs_ai"?[t._v(" "+t._s(t.currentPlayer===t.humanPlayer?" (你)":" (AI)")+" ")]:t._e()],2)]),r("div",{staticClass:"status-item"},[r("span",[t._v("总步数")]),r("span",[t._v(t._s(t.totalMoves))])]),r("div",{staticClass:"status-item"},[r("span",[t._v(t._s(t.displayColor(1).icon)+" "+t._s(t.displayColor(1).name)+" 步数")]),r("span",[t._v(t._s(Math.ceil(t.totalMoves/2)))])]),r("div",{staticClass:"status-item"},[r("span",[t._v(t._s(t.displayColor(2).icon)+" "+t._s(t.displayColor(2).name)+" 步数")]),r("span",[t._v(t._s(Math.floor(t.totalMoves/2)))])]),t.pendingDrawCheck?r("div",{staticClass:"pending-draw-banner"},[t._v(" ⚡ P1 已完成目标！P2 还有最后一步机会 "),r("div",{staticClass:"winner-sub"},[t._v("如果 P2 也能完成目标，则为平局")])]):t.isDraw?r("div",{staticClass:"winner-banner winner-draw"},[t._v(" 🤝 平局 (Draw)！ "),r("div",{staticClass:"winner-sub"},[t._v("双方均在 "+t._s(Math.ceil(t.totalMoves/2))+" 步内完成目标，共 "+t._s(t.totalMoves)+" 步")])]):t.winner?r("div",{staticClass:"winner-banner",class:t.displayColor(t.winner).cls==="text-p1"?"winner-p1":"winner-p2"},[t._v(" 🎉 "+t._s(t.displayColor(t.winner).name)+" "+t._s(t.displayColor(t.winner).icon)+" 获胜！ "),t.mode==="human_vs_ai"?[t._v(" "+t._s(t.winner===t.humanPlayer?"(你赢了!)":"(AI 赢了)")+" ")]:t._e(),r("div",{staticClass:"winner-sub"},[t._v("共 "+t._s(t.totalMoves)+" 步")])],2):t._e(),t.aiThinking?r("div",{staticClass:"thinking"},[r("div",{staticClass:"spinner"}),r("span",[t._v("AI 思考中...")])]):t._e(),t.mode==="ai_vs_ai"&&!t.winner?[r("div",{staticClass:"btn-group"},[t.autoPlay?r("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(i){return t.$emit("stop-auto")}}},[t._v(" ⏸ 暂停 ")]):r("button",{staticClass:"btn btn-success btn-sm",attrs:{disabled:t.aiThinking},on:{click:function(i){return t.$emit("start-auto")}}},[t._v(" ▶ 自动 ")]),r("button",{staticClass:"btn btn-secondary btn-sm",attrs:{disabled:t.aiThinking||t.autoPlay},on:{click:function(i){return t.$emit("step")}}},[t._v(" ⏭ 单步 ")])])]:t._e()],2),t.moveHistory.length>0?r("div",{staticClass:"card"},[t._m(0),r("div",{staticClass:"move-list"},t._l(t.recentMoves,function(i,n){return r("div",{key:n,staticClass:"move-item"},[r("span",{staticClass:"move-num"},[t._v("#"+t._s(t.moveHistory.length-t.recentMoves.length+n+1))]),r("span",{class:t.displayColor(i.player).cls},[t._v(" "+t._s(t.displayColor(i.player).icon)+" ")]),r("span",{staticClass:"move-coord"},[t._v(" ("+t._s(i.from[0])+","+t._s(i.from[1])+") → ("+t._s(i.to[0])+","+t._s(i.to[1])+") "),i.path&&i.path.length>2?r("span",{staticClass:"jump-badge"},[t._v(t._s(i.path.length-1)+"跳")]):t._e()])])}),0)]):t._e()])},xx=[function(){var e=this,t=e._self._c;return t("h3",[e._v("走棋记录 "),t("span",{staticClass:"history-badge"},[e._v("最近")])])}],Sx=Qo(bx,$x,xx,!1,null,"5ed07d0e");const Tx=Sx.exports,Re=9,Ge=9,Nr=11,kx=810,Cx=5,d_=16,Sh=[[-1,0],[0,1],[1,1],[1,0],[0,-1],[-1,-1]],Ix={current_player:1,hist_moves:[],checkers:{1:{0:[8,0],1:[7,0],2:[8,1],3:[6,0],4:[7,1],5:[8,2],6:[5,0],7:[6,1],8:[7,2],9:[8,3]},2:{0:[0,8],1:[1,8],2:[0,7],3:[2,8],4:[1,7],5:[0,6],6:[3,8],7:[2,7],8:[1,6],9:[0,5]}}};function c_(e){return JSON.parse(JSON.stringify(e))}function yt(e,t){return e>=0&&e<Re&&t>=0&&t<Ge}function Ex(e,t,r){return e*Re*Ge+t*Re+r}function zx(e,t){const r=new Float32Array(Re*Ge*Nr),i=Number(e.current_player);if(i!==1&&i!==2)throw new Error("state.current_player 必须是 1 或 2");const n=(v,b,S,_)=>{const w=(v*Ge+b)*Nr+S;r[w]=_},a=i===1?2:1,s=e.checkers||{},o=s[String(i)]||{},l=s[String(a)]||{};Object.entries(o).forEach(([v,b])=>{const S=Number(b[0]),_=Number(b[1]);yt(S,_)&&n(S,_,0,Number(v)+1)}),Object.entries(l).forEach(([v,b])=>{const S=Number(b[0]),_=Number(b[1]);yt(S,_)&&n(S,_,1,Number(v)+1)});const d=Array.from({length:Re},(v,b)=>Array.from({length:Ge},(S,_)=>r[(b*Ge+_)*Nr])),p=Array.from({length:Re},(v,b)=>Array.from({length:Ge},(S,_)=>r[(b*Ge+_)*Nr+1])),f=e.hist_moves||[];let g=a,y=f.length-1;for(let v=1;v<Cx&&!(y<0);v+=1){const b=f[y];if(!Array.isArray(b)||b.length<2)break;const S=b[0],_=b[1],w=Number(S[0]),k=Number(S[1]),T=Number(_[0]),E=Number(_[1]);if(!yt(w,k)||!yt(T,E))break;if(g===i){const $=d[T][E];d[T][E]=d[w][k],d[w][k]=$}else{const $=p[T][E];p[T][E]=p[w][k],p[w][k]=$}y-=1,g=3-g;const M=v*2,O=v*2+1;for(let $=0;$<Re;$+=1)for(let D=0;D<Ge;D+=1)n($,D,M,d[$][D]),n($,D,O,p[$][D])}if(i===2)for(let v=0;v<Re;v+=1)for(let b=0;b<Ge;b+=1)n(v,b,Nr-1,1);return new t.Tensor("float32",r,[1,Re,Ge,Nr])}function Ax(e){const t=Array.from({length:Re},()=>Array(Ge).fill(0));return[1,2].forEach(r=>{const i=(e.checkers||{})[String(r)]||{};Object.values(i).forEach(n=>{const a=Number(n[0]),s=Number(n[1]);yt(a,s)&&(t[a][s]=r)})}),t}function Ni(e,t){const r=Ax(e),i=[];for(let s=0;s<Ge;s+=1)for(let o=0;o<Re;o+=1)i.push(r[s][o]);const n=(e.checkers||{})[String(t)]||{},a={};return Object.values(n).forEach(s=>{const o=Number(s[0]),l=Number(s[1]);if(!yt(o,l))return;const d=`${o},${l}`,p=[],f=new Set;Sh.forEach(([b,S])=>{const _=o+b,w=l+S;yt(_,w)&&r[_][w]===0&&(p.push([_,w]),f.add(`${_},${w}`))});const g=i[o*Re+l];i[o*Re+l]=0;const y=[[o,l]],v=new Set;for(;y.length;){const[b,S]=y.pop();Sh.forEach(([_,w])=>{const k=b+_,T=S+w,E=b+_*2,M=S+w*2;if(!yt(k,T)||!yt(E,M)||i[k*Re+T]===0||i[E*Re+M]!==0)return;const O=`${E},${M}`;v.has(O)||(v.add(O),f.has(O)||(p.push([E,M]),f.add(O)),y.push([E,M]))})}i[o*Re+l]=g,a[d]=p}),a}function Ox(e){const t=Number(e.current_player),r=e.valid_moves||Ni(e,t),i=(e.checkers||{})[String(t)]||{},n={};Object.entries(i).forEach(([s,o])=>{n[`${Number(o[0])},${Number(o[1])}`]=Number(s)});const a=[];return Object.entries(r).forEach(([s,o])=>{const l=n[s];l===void 0||!Array.isArray(o)||o.forEach(d=>{const p=Number(d[0]),f=Number(d[1]);yt(p,f)&&a.push({fromKey:s,checkerId:l,toI:p,toJ:f,policyIndex:Ex(l,p,f),key:`${l}:${p},${f}`})})}),a}function Nx(e,t){const r=c_(e),i=String(r.current_player);return r.checkers[i][String(t.checkerId)]=[t.toI,t.toJ],r.current_player=r.current_player===1?2:1,delete r.valid_moves,r}function p_(e){const t=Array.from({length:Re},()=>Array(Ge).fill(0));return[1,2].forEach(r=>{const i=(e.checkers||{})[String(r)]||{};Object.values(i).forEach(n=>{const a=Number(n[0]),s=Number(n[1]);yt(a,s)&&(t[a][s]=r)})}),t}function Mx(){const t=[];for(let i=0;i<4;i+=1)for(let n=0;n<=i;n+=1)t.push([i-n,Re-1-n]);const r=[];for(let i=0;i<4;i+=1)for(let n=0;n<=i;n+=1)r.push([Ge-1-i+n,n]);return{p1Zone:t,p2Zone:r}}const{p1Zone:Rx,p2Zone:Px}=Mx();function Th(e,t){const r=p_(e),i=t===1?Rx:Px;for(let n=0;n<i.length;n+=1){const[a,s]=i[n];if(r[a][s]!==t)return!1}return!0}function Yo(e){return Th(e,1)?1:Th(e,2)?2:0}function Xo(e){const t=e.state,r=Number(t.current_player),i=e.winner!==null&&!e._pending_draw_check;return{board:p_(t),checkers:t.checkers,current_player:r,winner:e.winner,is_draw:e.is_draw,total_moves:e.total_moves,mode:e.mode,human_player:e.human_player,pending_draw_check:!!e._pending_draw_check,valid_moves:i?{}:Ni(t,r)}}const kh=1e-5,Dx=1;function Bx(e){let t=-1/0;for(let a=0;a<e.length;a+=1)e[a]>t&&(t=e[a]);const r=new Float64Array(e.length);let i=0;for(let a=0;a<e.length;a+=1){const s=Math.exp(e[a]-t);r[a]=s,i+=s}const n=new Float32Array(e.length);for(let a=0;a<e.length;a+=1)n[a]=r[a]/i;return n}async function Ux(e,t){const{evaluateState:r,simulations:i=1280,cPuct:n=1.5,maxDepth:a=64,treeTau:s=.01}=t,o={state:e,currPlayer:Number(e.current_player),expanded:!1,actions:[],stats:{},children:{},totalN:0},l=async S=>{const{policy:_,value:w}=await r(S.state),k=Ox(S.state),T=k.map(O=>Math.max(0,_[O.policyIndex]||0)),E=T.reduce((O,$)=>O+$,0),M=E>0?T.map(O=>O/E):T.map(()=>1/Math.max(1,T.length));return S.expanded=!0,S.actions=k,S.totalN=0,S.stats={},S.children={},k.forEach((O,$)=>{S.stats[O.key]={N:0,W:0,Q:0,P:M[$],priorIndex:O.policyIndex}}),w},d=S=>{let _=-1/0;const w=[],k=Math.sqrt(Math.max(1,S.totalN));return S.actions.forEach(T=>{const E=S.stats[T.key],M=E.Q+n*E.P*k/(1+E.N);M>_+kh?(_=M,w.length=0,w.push(T)):Math.abs(M-_)<kh&&w.push(T)}),w[Math.floor(Math.random()*w.length)]},p=(S,_,w)=>{for(let k=_.length-1;k>=0;k-=1){const T=_[k],E=T.node.stats[T.action.key],M=T.node.currPlayer===S?1:-1;E.N+=1,E.W+=w*M,E.Q=E.W/E.N,T.node.totalN+=1}},f=async()=>{const S=[];let _=o,w=0;for(;w<a;){if(!_.expanded){if(Yo(_.state)){for(let M=S.length-1;M>=0;M-=1){const O=S[M],$=O.node.stats[O.action.key],D=O.node.currPlayer===_.currPlayer?-1:1;$.N+=1,$.W+=Dx*D,$.Q=$.W/$.N,O.node.totalN+=1}return}const E=await l(_);p(_.currPlayer,S,E);return}if(!_.actions||_.actions.length===0){p(_.currPlayer,S,-1);return}const k=d(_);if(S.push({node:_,action:k}),!_.children[k.key]){const T=Nx(_.state,k);_.children[k.key]={state:T,currPlayer:Number(T.current_player),expanded:!1,actions:[],stats:{},children:{},totalN:0}}_=_.children[k.key],w+=1}p(_.currPlayer,S,0)};for(let S=0;S<i;S+=1)await f();const g=(o.actions||[]).map(S=>{const _=o.stats[S.key];return{action:S,N:_.N,Q:_.Q,P:_.P}}).sort((S,_)=>_.N-S.N),y=new Float64Array(kx);if(o.actions&&o.actions.length>0){if(s<.1){const _=Math.max(...o.actions.map(w=>o.stats[w.key].N));o.actions.forEach(w=>{const k=o.stats[w.key];y[w.policyIndex]=k.N===_?1:0})}else o.actions.forEach(_=>{const w=o.stats[_.key];y[_.policyIndex]=Math.pow(w.N,1/s)});let S=y.reduce((_,w)=>_+w,0);if(S<=0&&(o.actions.forEach(_=>{y[_.policyIndex]=o.stats[_.key].P}),S=y.reduce((_,w)=>_+w,0)),S>0)for(let _=0;_<y.length;_+=1)y[_]/=S}let v=-1;if(o.actions&&o.actions.length>0){const S=Math.random();let _=0;for(let w=0;w<y.length;w+=1)if(_+=y[w],S<=_){v=w;break}v<0&&(v=o.actions[0].policyIndex)}let b=null;return v>=0&&(b=o.actions.find(S=>S.policyIndex===v)||null),{ranked:g,root:o,pi:y,sampled:b}}const Xs=new Map;let Lx=1;function f_(e){const t=Xs.get(e);if(!t)throw new Error("Game not found");return t}function Wx(e,t,r={}){const i=c_(t);Array.isArray(i.hist_moves)||(i.hist_moves=[]),i.valid_moves||(i.valid_moves=Ni(i,Number(i.current_player)));const a={mode:"human_vs_ai",human_player:1,winner:null,is_draw:!1,total_moves:0,...Xs.get(e),...r,state:i};return Xs.set(e,a),a}function qx(e={}){const t=`local-${Lx++}`,r=e.mode||"human_vs_ai",i=Number(e.human_player||1),n=Wx(t,Ix,{mode:r,human_player:i,total_moves:0,winner:null,is_draw:!1}),a=Xo(n);return a.game_id=t,a}function Gx(e,t,r){const i=f_(e);if(i.winner)throw new Error("Game is already over");const n=Number(i.state.current_player),a=`${Number(t[0])},${Number(t[1])}`;if(!((i.state.valid_moves||Ni(i.state,n))[a]||[]).some(y=>Number(y[0])===Number(r[0])&&Number(y[1])===Number(r[1])))throw new Error("Invalid move");const d=i.state.checkers[String(n)]||{};let p=null;if(Object.entries(d).forEach(([y,v])=>{Number(v[0])===Number(t[0])&&Number(v[1])===Number(t[1])&&(p=Number(y))}),p===null)throw new Error("Checker not found");d[String(p)]=[Number(r[0]),Number(r[1])],i.state.hist_moves.length===d_&&i.state.hist_moves.shift(),i.state.hist_moves.push([[Number(t[0]),Number(t[1])],[Number(r[0]),Number(r[1])]]),i.state.current_player=n===1?2:1,delete i.state.valid_moves,i.total_moves+=1;const f=Yo(i.state);f&&(i.winner=f);const g=Xo(i);return g.last_move={from:[Number(t[0]),Number(t[1])],to:[Number(r[0]),Number(r[1])],player:n,path:[[Number(t[0]),Number(t[1])],[Number(r[0]),Number(r[1])]]},g}async function Hx(e,t){const{evaluateState:r,simulations:i=1280,cPuct:n=3.5,treeTau:a=.01}=t||{};if(typeof r!="function")throw new Error("evaluateState is required");const s=f_(e);if(s.winner)throw new Error("Game is already over");const o=Number(s.state.current_player),l=s.state.valid_moves||Ni(s.state,o);s.state.valid_moves=l;const{ranked:d,sampled:p}=await Ux(s.state,{evaluateState:r,simulations:i,cPuct:n,maxDepth:64,treeTau:a});if(!d.length)throw new Error("No legal move");const f=p||d[0].action,g=d.find(w=>w.action.key===f.key)||d[0],y=f.fromKey.split(",").map(Number),v=[f.toI,f.toJ],b=String(o);s.state.checkers[b][String(f.checkerId)]=v,s.state.hist_moves.length===d_&&s.state.hist_moves.shift(),s.state.hist_moves.push([y,v]),s.state.current_player=o===1?2:1,delete s.state.valid_moves,s.total_moves+=1;const S=Yo(s.state);S&&(s.winner=S);const _=Xo(s);return _.last_move={from:y,to:v,player:o,path:[y,v]},_.mcts={simulations:i,root_actions:d.length,top1:{checker:f.checkerId,to:v,N:g.N,Q:g.Q,P:g.P}},_}async function Fx(e,t,r,i,n){var d,p;const a=zx(n,i),s=await e.run({[t]:a}),o=((d=s[r[0]])==null?void 0:d.data)??[],l=((p=s[r[1]])==null?void 0:p.data)??[];return{policy:Bx(o),value:l.length>0?Number(l[0]):0}}const jx="/models/version0090.onnx",Vx="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/",Kx={name:"App",components:{GameBoard:wx,GameStatus:Tx},data(){return{session:null,inputName:null,outputNames:[],modelLoaded:!1,loadingModel:!1,mctsSimulations:1280,mode:"human_vs_ai",humanPlayer:1,gameId:null,gameStarted:!1,board:null,checkers:null,currentPlayer:1,validMoves:{},winner:null,isDraw:!1,pendingDrawCheck:!1,totalMoves:0,lastMove:null,moveHistory:[],selectedPiece:null,aiThinking:!1,autoPlay:!1,loading:!1,error:null}},computed:{isHumanTurn(){return!this.gameStarted||this.winner&&!this.pendingDrawCheck||this.mode==="ai_vs_ai"?!1:this.currentPlayer===this.humanPlayer}},methods:{async loadModel(){this.loadingModel=!0,this.error=null;try{const e=await fetch(jx);if(!e.ok)throw new Error(`模型资源加载失败: ${e.status}`);const t=await e.arrayBuffer();we.wasm.numThreads=Math.min(4,navigator.hardwareConcurrency||2),we.wasm.simd=!0,we.wasm.wasmPaths=Vx;const r=await qn.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"});this.session=r,this.inputName=r.inputNames[0],this.outputNames=r.outputNames,this.modelLoaded=!0}catch(e){this.error=e.message}finally{this.loadingModel=!1}},applyState(e){this.board=e.board,this.checkers=e.checkers,this.currentPlayer=e.current_player,this.validMoves=e.valid_moves||{},this.winner=e.winner,this.isDraw=e.is_draw||!1,this.pendingDrawCheck=e.pending_draw_check||!1,this.totalMoves=e.total_moves||0,e.last_move&&(this.lastMove=e.last_move,this.moveHistory.push(e.last_move))},async newGame(){this.loading=!0,this.error=null,this.selectedPiece=null,this.lastMove=null,this.moveHistory=[],this.winner=null,this.autoPlay=!1;try{if(!this.modelLoaded&&(await this.loadModel(),!this.modelLoaded))throw new Error("模型加载失败，无法开始游戏");const e=qx({mode:this.mode,human_player:this.humanPlayer});this.gameId=e.game_id,this.applyState(e),this.gameStarted=!0,this.mode==="human_vs_ai"&&!this.isHumanTurn&&!this.winner&&setTimeout(()=>this.requestAiMove(),200)}catch(e){this.error=e.message}finally{this.loading=!1}},isValidTarget(e,t){if(!this.selectedPiece)return!1;const r=`${this.selectedPiece[0]},${this.selectedPiece[1]}`;return(this.validMoves[r]||[]).some(n=>n[0]===e&&n[1]===t)},handleCellClick({i:e,j:t}){if(this.aiThinking||this.winner||!this.gameStarted||!this.isHumanTurn)return;const r=this.board[e][t];if(this.selectedPiece){if(this.isValidTarget(e,t)){this.makeHumanMove(this.selectedPiece,[e,t]),this.selectedPiece=null;return}this.selectedPiece=r===this.currentPlayer?[e,t]:null;return}r===this.currentPlayer&&(this.selectedPiece=[e,t])},async makeHumanMove(e,t){this.loading=!0,this.error=null;try{const r=Gx(this.gameId,e,t);this.applyState(r),this.mode==="human_vs_ai"&&!this.winner&&!this.isHumanTurn&&setTimeout(()=>this.requestAiMove(),200)}catch(r){this.error=r.message}finally{this.loading=!1}},async requestAiMove(){if(!this.modelLoaded){this.error="请先加载模型";return}this.aiThinking=!0,this.error=null;try{const e=await Hx(this.gameId,{simulations:this.mctsSimulations,cPuct:3.5,treeTau:.01,evaluateState:t=>Fx(this.session,this.inputName,this.outputNames,px,t)});this.applyState(e)}catch(e){this.error=e.message,this.autoPlay=!1}finally{this.aiThinking=!1}},startAutoPlay(){this.autoPlay=!0,this.autoPlayLoop()},stopAutoPlay(){this.autoPlay=!1},async stepOnce(){await this.requestAiMove()},async autoPlayLoop(){if(!this.autoPlay||this.winner){this.autoPlay=!1;return}await this.requestAiMove(),this.autoPlay&&!this.winner&&setTimeout(()=>this.autoPlayLoop(),500)}}};var Zx=function(){var t=this,r=t._self._c;return r("div",{staticClass:"app-container"},[t._m(0),t.error?r("div",{staticClass:"error-banner"},[r("span",[t._v(t._s(t.error))]),r("button",{on:{click:function(i){t.error=null}}},[t._v("✕")])]):t._e(),r("main",{staticClass:"main-content"},[r("aside",{staticClass:"sidebar"},[r("div",{staticClass:"card"},[r("h3",[t._v("设置")]),r("div",{staticClass:"form-group"},[r("label",[t._v("模式")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],on:{change:function(i){var n=Array.prototype.filter.call(i.target.options,function(a){return a.selected}).map(function(a){var s="_value"in a?a._value:a.value;return s});t.mode=i.target.multiple?n:n[0]}}},[r("option",{attrs:{value:"human_vs_ai"}},[t._v("人机对战")]),r("option",{attrs:{value:"ai_vs_ai"}},[t._v("AI 对战")])])]),t.mode==="human_vs_ai"?r("div",{staticClass:"form-group"},[r("label",[t._v("你执")]),r("select",{directives:[{name:"model",rawName:"v-model.number",value:t.humanPlayer,expression:"humanPlayer",modifiers:{number:!0}}],on:{change:function(i){var n=Array.prototype.filter.call(i.target.options,function(a){return a.selected}).map(function(a){var s="_value"in a?a._value:a.value;return t._n(s)});t.humanPlayer=i.target.multiple?n:n[0]}}},[r("option",{domProps:{value:1}},[t._v("先手")]),r("option",{domProps:{value:2}},[t._v("后手")])])]):t._e(),r("div",{staticClass:"form-group"},[r("label",[t._v("MCTS 模拟次数")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.mctsSimulations,expression:"mctsSimulations",modifiers:{number:!0}}],attrs:{type:"number",min:"1"},domProps:{value:t.mctsSimulations},on:{input:function(i){i.target.composing||(t.mctsSimulations=t._n(i.target.value))},blur:function(i){return t.$forceUpdate()}}})]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:t.loading||t.aiThinking},on:{click:t.newGame}},[t._v(" "+t._s(t.gameStarted?"重新开始":"开始游戏")+" ")])]),t.gameStarted?r("GameStatus",{attrs:{"current-player":t.currentPlayer,"human-player":t.humanPlayer,"total-moves":t.totalMoves,winner:t.winner,"is-draw":t.isDraw,"pending-draw-check":t.pendingDrawCheck,"ai-thinking":t.aiThinking,mode:t.mode,"auto-play":t.autoPlay,"move-history":t.moveHistory,flipped:t.mode==="human_vs_ai"&&t.humanPlayer===2},on:{"start-auto":t.startAutoPlay,"stop-auto":t.stopAutoPlay,step:t.stepOnce}}):t._e()],1),r("section",{staticClass:"board-area"},[t.gameStarted?r("GameBoard",{attrs:{board:t.board,checkers:t.checkers,"valid-moves":t.validMoves,"selected-piece":t.selectedPiece,"last-move":t.lastMove,"extra-move":null,"current-player":t.currentPlayer,"is-human-turn":t.isHumanTurn,"ai-thinking":t.aiThinking,winner:t.winner,flipped:t.mode==="human_vs_ai"&&t.humanPlayer===2},on:{"cell-click":t.handleCellClick}}):t._e()],1)])])},Qx=[function(){var e=this,t=e._self._c;return t("header",{staticClass:"app-header"},[t("h1",[e._v("♟ 中国跳棋（纯前端）")]),t("p",[e._v("Local ONNX + Local MCTS")])])}],Yx=Qo(Kx,Zx,Qx,!1,null,"d6c322da");const Xx=Yx.exports;new Ae({render:e=>e(Xx)}).$mount("#app");
