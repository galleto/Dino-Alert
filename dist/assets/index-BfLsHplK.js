var V_=Object.defineProperty;var G_=(t,e,n)=>e in t?V_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pi=(t,e,n)=>G_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var xg={exports:{}},tc={},yg={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),W_=Symbol.for("react.portal"),X_=Symbol.for("react.fragment"),q_=Symbol.for("react.strict_mode"),$_=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),K_=Symbol.for("react.context"),Z_=Symbol.for("react.forward_ref"),Q_=Symbol.for("react.suspense"),J_=Symbol.for("react.memo"),ex=Symbol.for("react.lazy"),_f=Symbol.iterator;function tx(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var Sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mg=Object.assign,Eg={};function ia(t,e,n){this.props=t,this.context=e,this.refs=Eg,this.updater=n||Sg}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wg(){}wg.prototype=ia.prototype;function Qd(t,e,n){this.props=t,this.context=e,this.refs=Eg,this.updater=n||Sg}var Jd=Qd.prototype=new wg;Jd.constructor=Qd;Mg(Jd,ia.prototype);Jd.isPureReactComponent=!0;var xf=Array.isArray,Tg=Object.prototype.hasOwnProperty,eh={current:null},Ag={key:!0,ref:!0,__self:!0,__source:!0};function bg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Tg.call(e,i)&&!Ag.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:uo,type:t,key:s,ref:a,props:r,_owner:eh.current}}function nx(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function ix(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yf=/\/+/g;function kc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ix(""+t.key):e.toString(36)}function ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case uo:case W_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+kc(a,0):i,xf(r)?(n="",t!=null&&(n=t.replace(yf,"$&/")+"/"),ol(r,e,n,"",function(c){return c})):r!=null&&(th(r)&&(r=nx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",xf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+kc(s,o);a+=ol(s,e,n,l,r)}else if(l=tx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+kc(s,o++),a+=ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function yo(t,e,n){if(t==null)return t;var i=[],r=0;return ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},ll={transition:null},sx={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:ll,ReactCurrentOwner:eh};function Cg(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:yo,forEach:function(t,e,n){yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return yo(t,function(){e++}),e},toArray:function(t){return yo(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=ia;We.Fragment=X_;We.Profiler=$_;We.PureComponent=Qd;We.StrictMode=q_;We.Suspense=Q_;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sx;We.act=Cg;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!Ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:uo,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:K_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Y_,_context:t},t.Consumer=t};We.createElement=bg;We.createFactory=function(t){var e=bg.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:Z_,render:t}};We.isValidElement=th;We.lazy=function(t){return{$$typeof:ex,_payload:{_status:-1,_result:t},_init:rx}};We.memo=function(t,e){return{$$typeof:J_,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};We.unstable_act=Cg;We.useCallback=function(t,e){return an.current.useCallback(t,e)};We.useContext=function(t){return an.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return an.current.useDeferredValue(t)};We.useEffect=function(t,e){return an.current.useEffect(t,e)};We.useId=function(){return an.current.useId()};We.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return an.current.useMemo(t,e)};We.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};We.useRef=function(t){return an.current.useRef(t)};We.useState=function(t){return an.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return an.current.useTransition()};We.version="18.3.1";yg.exports=We;var ce=yg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=ce,ox=Symbol.for("react.element"),lx=Symbol.for("react.fragment"),cx=Object.prototype.hasOwnProperty,ux=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dx={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)cx.call(e,i)&&!dx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ox,type:t,key:s,ref:a,props:r,_owner:ux.current}}tc.Fragment=lx;tc.jsx=Rg;tc.jsxs=Rg;xg.exports=tc;var p=xg.exports,Pg={exports:{}},Cn={},Lg={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,F){var H=k.length;k.push(F);e:for(;0<H;){var Z=H-1>>>1,J=k[Z];if(0<r(J,F))k[Z]=F,k[H]=J,H=Z;else break e}}function n(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var F=k[0],H=k.pop();if(H!==F){k[0]=H;e:for(var Z=0,J=k.length,$=J>>>1;Z<$;){var Q=2*(Z+1)-1,fe=k[Q],_e=Q+1,xe=k[_e];if(0>r(fe,H))_e<J&&0>r(xe,fe)?(k[Z]=xe,k[_e]=H,Z=_e):(k[Z]=fe,k[Q]=H,Z=Q);else if(_e<J&&0>r(xe,H))k[Z]=xe,k[_e]=H,Z=_e;else break e}}return F}function r(k,F){var H=k.sortIndex-F.sortIndex;return H!==0?H:k.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(k){for(var F=n(c);F!==null;){if(F.callback===null)i(c);else if(F.startTime<=k)i(c),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(c)}}function S(k){if(y=!1,x(k),!_)if(n(l)!==null)_=!0,X(w);else{var F=n(c);F!==null&&K(S,F.startTime-k)}}function w(k,F){_=!1,y&&(y=!1,u(P),P=-1),m=!0;var H=h;try{for(x(F),f=n(l);f!==null&&(!(f.expirationTime>F)||k&&!N());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var J=Z(f.expirationTime<=F);F=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),x(F)}else i(l);f=n(l)}if(f!==null)var $=!0;else{var Q=n(c);Q!==null&&K(S,Q.startTime-F),$=!1}return $}finally{f=null,h=H,m=!1}}var T=!1,M=null,P=-1,E=5,b=-1;function N(){return!(t.unstable_now()-b<E)}function O(){if(M!==null){var k=t.unstable_now();b=k;var F=!0;try{F=M(!0,k)}finally{F?Y():(T=!1,M=null)}}else T=!1}var Y;if(typeof g=="function")Y=function(){g(O)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=O,Y=function(){B.postMessage(null)}}else Y=function(){v(O,0)};function X(k){M=k,T||(T=!0,Y())}function K(k,F){P=v(function(){k(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,X(w))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var H=h;h=F;try{return k()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var H=h;h=k;try{return F()}finally{h=H}},t.unstable_scheduleCallback=function(k,F,H){var Z=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Z+H:Z):H=Z,k){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,k={id:d++,callback:F,priorityLevel:k,startTime:H,expirationTime:J,sortIndex:-1},H>Z?(k.sortIndex=H,e(c,k),n(l)===null&&k===n(c)&&(y?(u(P),P=-1):y=!0,K(S,H-Z))):(k.sortIndex=J,e(l,k),_||m||(_=!0,X(w))),k},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(k){var F=h;return function(){var H=h;h=F;try{return k.apply(this,arguments)}finally{h=H}}}})(Ng);Lg.exports=Ng;var hx=Lg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fx=ce,bn=hx;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dg=new Set,Ba={};function Kr(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(Ba[t]=e,t=0;t<e.length;t++)Dg.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,px=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},Mf={};function mx(t){return qu.call(Mf,t)?!0:qu.call(Sf,t)?!1:px.test(t)?Mf[t]=!0:(Sf[t]=!0,!1)}function gx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vx(t,e,n,i){if(e===null||typeof e>"u"||gx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);Bt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);Bt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);Bt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vx(e,n,r,i)&&(n=null),i||r===null?mx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),Ig=Symbol.for("react.provider"),Ug=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),kg=Symbol.for("react.offscreen"),Ef=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=Ef&&t[Ef]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Oc;function wa(t){if(Oc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Oc=e&&e[1]||""}return`
`+Oc+t}var Fc=!1;function zc(t,e){if(!t||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function _x(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ms:return"Fragment";case Ss:return"Portal";case $u:return"Profiler";case sh:return"StrictMode";case Yu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ug:return(t.displayName||"Context")+".Consumer";case Ig:return(t._context.displayName||"Context")+".Provider";case ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function xx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Og(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yx(t){var e=Og(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mo(t){t._valueTracker||(t._valueTracker=yx(t))}function Fg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Og(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zg(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function Ju(t,e){zg(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&ed(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ed(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Af(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ta(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function Bg(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Eo,jg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sx=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){Sx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function Vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function Gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Vg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Mx=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function id(t,e){if(e){if(Mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sd=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ad=null,ks=null,Os=null;function Cf(t){if(t=po(t)){if(typeof ad!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ac(e),ad(t.stateNode,t.type,e))}}function Wg(t){ks?Os?Os.push(t):Os=[t]:ks=t}function Xg(){if(ks){var t=ks,e=Os;if(Os=ks=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function qg(t,e){return t(e)}function $g(){}var Bc=!1;function Yg(t,e,n){if(Bc)return t(e,n);Bc=!0;try{return qg(t,e,n)}finally{Bc=!1,(ks!==null||Os!==null)&&($g(),Xg())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var i=ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var od=!1;if(Ri)try{var da={};Object.defineProperty(da,"passive",{get:function(){od=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{od=!1}function Ex(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ra=!1,Sl=null,Ml=!1,ld=null,wx={onError:function(t){Ra=!0,Sl=t}};function Tx(t,e,n,i,r,s,a,o,l){Ra=!1,Sl=null,Ex.apply(wx,arguments)}function Ax(t,e,n,i,r,s,a,o,l){if(Tx.apply(this,arguments),Ra){if(Ra){var c=Sl;Ra=!1,Sl=null}else throw Error(re(198));Ml||(Ml=!0,ld=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Zr(t)!==t)throw Error(re(188))}function bx(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rf(r),t;if(s===i)return Rf(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Zg(t){return t=bx(t),t!==null?Qg(t):null}function Qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qg(t);if(e!==null)return e;t=t.sibling}return null}var Jg=bn.unstable_scheduleCallback,Pf=bn.unstable_cancelCallback,Cx=bn.unstable_shouldYield,Rx=bn.unstable_requestPaint,St=bn.unstable_now,Px=bn.unstable_getCurrentPriorityLevel,ch=bn.unstable_ImmediatePriority,e0=bn.unstable_UserBlockingPriority,El=bn.unstable_NormalPriority,Lx=bn.unstable_LowPriority,t0=bn.unstable_IdlePriority,nc=null,ci=null;function Nx(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(nc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:Ux,Dx=Math.log,Ix=Math.LN2;function Ux(t){return t>>>=0,t===0?32:31-(Dx(t)/Ix|0)|0}var wo=64,To=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Aa(o):(s&=a,s!==0&&(i=Aa(s)))}else a=n&~r,a!==0?i=Aa(a):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function kx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=kx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=wo;return wo<<=1,!(wo&4194240)&&(wo=64),t}function Hc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function Fx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function i0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r0,dh,s0,a0,o0,ud=!1,Ao=[],Ji=null,er=null,tr=null,Va=new Map,Ga=new Map,Wi=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function ha(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=po(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Bx(t,e,n,i,r){switch(e){case"focusin":return Ji=ha(Ji,t,e,n,i,r),!0;case"dragenter":return er=ha(er,t,e,n,i,r),!0;case"mouseover":return tr=ha(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Va.set(s,ha(Va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ga.set(s,ha(Ga.get(s)||null,t,e,n,i,r)),!0}return!1}function l0(t){var e=Lr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Kg(n),e!==null){t.blockedOn=e,o0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);sd=i,n.target.dispatchEvent(i),sd=null}else return e=po(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){cl(t)&&n.delete(e)}function Hx(){ud=!1,Ji!==null&&cl(Ji)&&(Ji=null),er!==null&&cl(er)&&(er=null),tr!==null&&cl(tr)&&(tr=null),Va.forEach(Nf),Ga.forEach(Nf)}function fa(t,e){t.blockedOn===e&&(t.blockedOn=null,ud||(ud=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,Hx)))}function Wa(t){function e(r){return fa(r,t)}if(0<Ao.length){fa(Ao[0],t);for(var n=1;n<Ao.length;n++){var i=Ao[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&fa(Ji,t),er!==null&&fa(er,t),tr!==null&&fa(tr,t),Va.forEach(e),Ga.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&Wi.shift()}var Fs=Ii.ReactCurrentBatchConfig,Tl=!0;function jx(t,e,n,i){var r=et,s=Fs.transition;Fs.transition=null;try{et=1,hh(t,e,n,i)}finally{et=r,Fs.transition=s}}function Vx(t,e,n,i){var r=et,s=Fs.transition;Fs.transition=null;try{et=4,hh(t,e,n,i)}finally{et=r,Fs.transition=s}}function hh(t,e,n,i){if(Tl){var r=dd(t,e,n,i);if(r===null)Zc(t,e,i,Al,n),Lf(t,i);else if(Bx(r,t,e,n,i))i.stopPropagation();else if(Lf(t,i),e&4&&-1<zx.indexOf(t)){for(;r!==null;){var s=po(r);if(s!==null&&r0(s),s=dd(t,e,n,i),s===null&&Zc(t,e,i,Al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zc(t,e,i,null,n)}}var Al=null;function dd(t,e,n,i){if(Al=null,t=lh(i),t=Lr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function c0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Px()){case ch:return 1;case e0:return 4;case El:case Lx:return 16;case t0:return 536870912;default:return 16}default:return 16}}var $i=null,fh=null,ul=null;function u0(){if(ul)return ul;var t,e=fh,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function bo(){return!0}function Df(){return!1}function Rn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bo:Df,this.isPropagationStopped=Df,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=Rn(ra),fo=gt({},ra,{view:0,detail:0}),Gx=Rn(fo),jc,Vc,pa,ic=gt({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pa&&(pa&&t.type==="mousemove"?(jc=t.screenX-pa.screenX,Vc=t.screenY-pa.screenY):Vc=jc=0,pa=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),If=Rn(ic),Wx=gt({},ic,{dataTransfer:0}),Xx=Rn(Wx),qx=gt({},fo,{relatedTarget:0}),Gc=Rn(qx),$x=gt({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Yx=Rn($x),Kx=gt({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=Rn(Kx),Qx=gt({},ra,{data:0}),Uf=Rn(Qx),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ty[t])?!!e[t]:!1}function mh(){return ny}var iy=gt({},fo,{key:function(t){if(t.key){var e=Jx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ry=Rn(iy),sy=gt({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=Rn(sy),ay=gt({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),oy=Rn(ay),ly=gt({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=Rn(ly),uy=gt({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Rn(uy),hy=[9,13,27,32],gh=Ri&&"CompositionEvent"in window,Pa=null;Ri&&"documentMode"in document&&(Pa=document.documentMode);var fy=Ri&&"TextEvent"in window&&!Pa,d0=Ri&&(!gh||Pa&&8<Pa&&11>=Pa),Of=" ",Ff=!1;function h0(t,e){switch(t){case"keyup":return hy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function py(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(Ff=!0,Of);case"textInput":return t=e.data,t===Of&&Ff?null:t;default:return null}}function my(t,e){if(Es)return t==="compositionend"||!gh&&h0(t,e)?(t=u0(),ul=fh=$i=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gy[t.type]:e==="textarea"}function p0(t,e,n,i){Wg(i),e=bl(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,Xa=null;function vy(t){T0(t,0)}function rc(t){var e=As(t);if(Fg(e))return t}function _y(t,e){if(t==="change")return e}var m0=!1;if(Ri){var Wc;if(Ri){var Xc="oninput"in document;if(!Xc){var Bf=document.createElement("div");Bf.setAttribute("oninput","return;"),Xc=typeof Bf.oninput=="function"}Wc=Xc}else Wc=!1;m0=Wc&&(!document.documentMode||9<document.documentMode)}function Hf(){La&&(La.detachEvent("onpropertychange",g0),Xa=La=null)}function g0(t){if(t.propertyName==="value"&&rc(Xa)){var e=[];p0(e,Xa,t,lh(t)),Yg(vy,e)}}function xy(t,e,n){t==="focusin"?(Hf(),La=e,Xa=n,La.attachEvent("onpropertychange",g0)):t==="focusout"&&Hf()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rc(Xa)}function Sy(t,e){if(t==="click")return rc(e)}function My(t,e){if(t==="input"||t==="change")return rc(e)}function Ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:Ey;function qa(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!qu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,e){var n=jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _0(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wy(t){var e=_0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(i!==null&&vh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vf(n,s);var a=Vf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ty=Ri&&"documentMode"in document&&11>=document.documentMode,ws=null,hd=null,Na=null,fd=!1;function Gf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||ws==null||ws!==yl(i)||(i=ws,"selectionStart"in i&&vh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Na&&qa(Na,i)||(Na=i,i=bl(hd,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Co(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},qc={},x0={};Ri&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function sc(t){if(qc[t])return qc[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return qc[t]=e[n];return t}var y0=sc("animationend"),S0=sc("animationiteration"),M0=sc("animationstart"),E0=sc("transitionend"),w0=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){w0.set(t,e),Kr(e,[t])}for(var $c=0;$c<Wf.length;$c++){var Yc=Wf[$c],Ay=Yc.toLowerCase(),by=Yc[0].toUpperCase()+Yc.slice(1);vr(Ay,"on"+by)}vr(y0,"onAnimationEnd");vr(S0,"onAnimationIteration");vr(M0,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(E0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Xf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ax(i,e,void 0,t),t.currentTarget=null}function T0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,o,c),s=l}}}if(Ml)throw t=ld,Ml=!1,ld=null,t}function at(t,e){var n=e[_d];n===void 0&&(n=e[_d]=new Set);var i=t+"__bubble";n.has(i)||(A0(e,t,2,!1),n.add(i))}function Kc(t,e,n){var i=0;e&&(i|=4),A0(n,t,i,e)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function $a(t){if(!t[Ro]){t[Ro]=!0,Dg.forEach(function(n){n!=="selectionchange"&&(Cy.has(n)||Kc(n,!1,t),Kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ro]||(e[Ro]=!0,Kc("selectionchange",!1,e))}}function A0(t,e,n,i){switch(c0(e)){case 1:var r=jx;break;case 4:r=Vx;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Yg(function(){var c=s,d=lh(n),f=[];e:{var h=w0.get(t);if(h!==void 0){var m=ph,_=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":m=ry;break;case"focusin":_="focus",m=Gc;break;case"focusout":_="blur",m=Gc;break;case"beforeblur":case"afterblur":m=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=oy;break;case y0:case S0:case M0:m=Yx;break;case E0:m=cy;break;case"scroll":m=Gx;break;case"wheel":m=dy;break;case"copy":case"cut":case"paste":m=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kf}var y=(e&4)!==0,v=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=ja(g,u),S!=null&&y.push(Ya(g,S,x)))),v)break;g=g.return}0<y.length&&(h=new m(h,_,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==sd&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Pi]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Lr(_):null,_!==null&&(v=Zr(_),_!==v||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=If,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=kf,S="onPointerLeave",u="onPointerEnter",g="pointer"),v=m==null?h:As(m),x=_==null?h:As(_),h=new y(S,g+"leave",m,n,d),h.target=v,h.relatedTarget=x,S=null,Lr(d)===c&&(y=new y(u,g+"enter",_,n,d),y.target=x,y.relatedTarget=v,S=y),v=S,m&&_)t:{for(y=m,u=_,g=0,x=y;x;x=Jr(x))g++;for(x=0,S=u;S;S=Jr(S))x++;for(;0<g-x;)y=Jr(y),g--;for(;0<x-g;)u=Jr(u),x--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=Jr(y),u=Jr(u)}y=null}else y=null;m!==null&&qf(f,h,m,y,!1),_!==null&&v!==null&&qf(f,v,_,y,!0)}}e:{if(h=c?As(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=_y;else if(zf(h))if(m0)w=My;else{w=yy;var T=xy}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Sy);if(w&&(w=w(t,c))){p0(f,w,n,d);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&ed(h,"number",h.value)}switch(T=c?As(c):window,t){case"focusin":(zf(T)||T.contentEditable==="true")&&(ws=T,hd=c,Na=null);break;case"focusout":Na=hd=ws=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Gf(f,n,d);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Gf(f,n,d)}var M;if(gh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Es?h0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(d0&&n.locale!=="ko"&&(Es||P!=="onCompositionStart"?P==="onCompositionEnd"&&Es&&(M=u0()):($i=d,fh="value"in $i?$i.value:$i.textContent,Es=!0)),T=bl(c,P),0<T.length&&(P=new Uf(P,t,null,n,d),f.push({event:P,listeners:T}),M?P.data=M:(M=f0(n),M!==null&&(P.data=M)))),(M=fy?py(t,n):my(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(d=new Uf("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=M))}T0(f,e)})}function Ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ja(t,n),s!=null&&i.unshift(Ya(t,s,r)),s=ja(t,e),s!=null&&i.push(Ya(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ja(n,s),l!=null&&a.unshift(Ya(n,l,o))):r||(l=ja(n,s),l!=null&&a.push(Ya(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ry=/\r\n?/g,Py=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Py,"")}function Po(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(re(425))}function Cl(){}var pd=null,md=null;function gd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,Ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(Dy)}:vd;function Dy(t){setTimeout(function(){throw t})}function Qc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Wa(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),li="__reactFiber$"+sa,Ka="__reactProps$"+sa,Pi="__reactContainer$"+sa,_d="__reactEvents$"+sa,Iy="__reactListeners$"+sa,Uy="__reactHandles$"+sa;function Lr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kf(t);t!==null;){if(n=t[li])return n;t=Kf(t)}return e}t=n,n=t.parentNode}return null}function po(t){return t=t[li]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ac(t){return t[Ka]||null}var xd=[],bs=-1;function _r(t){return{current:t}}function lt(t){0>bs||(t.current=xd[bs],xd[bs]=null,bs--)}function rt(t,e){bs++,xd[bs]=t.current,t.current=e}var hr={},Zt=_r(hr),hn=_r(!1),Br=hr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Rl(){lt(hn),lt(Zt)}function Zf(t,e,n){if(Zt.current!==hr)throw Error(re(168));rt(Zt,e),rt(hn,n)}function b0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,xx(t)||"Unknown",r));return gt({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Br=Zt.current,rt(Zt,t),rt(hn,hn.current),!0}function Qf(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=b0(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,lt(hn),lt(Zt),rt(Zt,t)):lt(hn),rt(hn,n)}var Mi=null,oc=!1,Jc=!1;function C0(t){Mi===null?Mi=[t]:Mi.push(t)}function ky(t){oc=!0,C0(t)}function xr(){if(!Jc&&Mi!==null){Jc=!0;var t=0,e=et;try{var n=Mi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,oc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),Jg(ch,xr),r}finally{et=e,Jc=!1}}return null}var Cs=[],Rs=0,Ll=null,Nl=0,Dn=[],In=0,Hr=null,Ti=1,Ai="";function Ar(t,e){Cs[Rs++]=Nl,Cs[Rs++]=Ll,Ll=t,Nl=e}function R0(t,e,n){Dn[In++]=Ti,Dn[In++]=Ai,Dn[In++]=Hr,Hr=t;var i=Ti;t=Ai;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ti=1<<32-Jn(e)+r|n<<r|i,Ai=s+t}else Ti=1<<s|n<<r|i,Ai=t}function _h(t){t.return!==null&&(Ar(t,1),R0(t,1,0))}function xh(t){for(;t===Ll;)Ll=Cs[--Rs],Cs[Rs]=null,Nl=Cs[--Rs],Cs[Rs]=null;for(;t===Hr;)Hr=Dn[--In],Dn[In]=null,Ai=Dn[--In],Dn[In]=null,Ti=Dn[--In],Dn[In]=null}var Tn=null,En=null,ct=!1,$n=null;function P0(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:Ti,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sd(t){if(ct){var e=En;if(e){var n=e;if(!Jf(t,e)){if(yd(t))throw Error(re(418));e=nr(n.nextSibling);var i=Tn;e&&Jf(t,e)?P0(i,n):(t.flags=t.flags&-4097|2,ct=!1,Tn=t)}}else{if(yd(t))throw Error(re(418));t.flags=t.flags&-4097|2,ct=!1,Tn=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Lo(t){if(t!==Tn)return!1;if(!ct)return ep(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gd(t.type,t.memoizedProps)),e&&(e=En)){if(yd(t))throw L0(),Error(re(418));for(;e;)P0(t,e),e=nr(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?nr(t.stateNode.nextSibling):null;return!0}function L0(){for(var t=En;t;)t=nr(t.nextSibling)}function Xs(){En=Tn=null,ct=!1}function yh(t){$n===null?$n=[t]:$n.push(t)}var Oy=Ii.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function No(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function N0(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=ar(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,x,S){return g===null||g.tag!==6?(g=au(x,u.mode,S),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,S){var w=x.type;return w===Ms?d(u,g,x.props.children,S,x.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ji&&tp(w)===g.type)?(S=r(g,x.props),S.ref=ma(u,g,x),S.return=u,S):(S=_l(x.type,x.key,x.props,null,u.mode,S),S.ref=ma(u,g,x),S.return=u,S)}function c(u,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=ou(x,u.mode,S),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,S,w){return g===null||g.tag!==7?(g=Ur(x,u.mode,S,w),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=au(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return x=_l(g.type,g.key,g.props,null,u.mode,x),x.ref=ma(u,null,g),x.return=u,x;case Ss:return g=ou(g,u.mode,x),g.return=u,g;case ji:var S=g._init;return f(u,S(g._payload),x)}if(Ta(g)||ua(g))return g=Ur(g,u.mode,x,null),g.return=u,g;No(u,g)}return null}function h(u,g,x,S){var w=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:o(u,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case So:return x.key===w?l(u,g,x,S):null;case Ss:return x.key===w?c(u,g,x,S):null;case ji:return w=x._init,h(u,g,w(x._payload),S)}if(Ta(x)||ua(x))return w!==null?null:d(u,g,x,S,null);No(u,x)}return null}function m(u,g,x,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,o(g,u,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case So:return u=u.get(S.key===null?x:S.key)||null,l(g,u,S,w);case Ss:return u=u.get(S.key===null?x:S.key)||null,c(g,u,S,w);case ji:var T=S._init;return m(u,g,x,T(S._payload),w)}if(Ta(S)||ua(S))return u=u.get(x)||null,d(g,u,S,w,null);No(g,S)}return null}function _(u,g,x,S){for(var w=null,T=null,M=g,P=g=0,E=null;M!==null&&P<x.length;P++){M.index>P?(E=M,M=null):E=M.sibling;var b=h(u,M,x[P],S);if(b===null){M===null&&(M=E);break}t&&M&&b.alternate===null&&e(u,M),g=s(b,g,P),T===null?w=b:T.sibling=b,T=b,M=E}if(P===x.length)return n(u,M),ct&&Ar(u,P),w;if(M===null){for(;P<x.length;P++)M=f(u,x[P],S),M!==null&&(g=s(M,g,P),T===null?w=M:T.sibling=M,T=M);return ct&&Ar(u,P),w}for(M=i(u,M);P<x.length;P++)E=m(M,u,P,x[P],S),E!==null&&(t&&E.alternate!==null&&M.delete(E.key===null?P:E.key),g=s(E,g,P),T===null?w=E:T.sibling=E,T=E);return t&&M.forEach(function(N){return e(u,N)}),ct&&Ar(u,P),w}function y(u,g,x,S){var w=ua(x);if(typeof w!="function")throw Error(re(150));if(x=w.call(x),x==null)throw Error(re(151));for(var T=w=null,M=g,P=g=0,E=null,b=x.next();M!==null&&!b.done;P++,b=x.next()){M.index>P?(E=M,M=null):E=M.sibling;var N=h(u,M,b.value,S);if(N===null){M===null&&(M=E);break}t&&M&&N.alternate===null&&e(u,M),g=s(N,g,P),T===null?w=N:T.sibling=N,T=N,M=E}if(b.done)return n(u,M),ct&&Ar(u,P),w;if(M===null){for(;!b.done;P++,b=x.next())b=f(u,b.value,S),b!==null&&(g=s(b,g,P),T===null?w=b:T.sibling=b,T=b);return ct&&Ar(u,P),w}for(M=i(u,M);!b.done;P++,b=x.next())b=m(M,u,P,b.value,S),b!==null&&(t&&b.alternate!==null&&M.delete(b.key===null?P:b.key),g=s(b,g,P),T===null?w=b:T.sibling=b,T=b);return t&&M.forEach(function(O){return e(u,O)}),ct&&Ar(u,P),w}function v(u,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Ms&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case So:e:{for(var w=x.key,T=g;T!==null;){if(T.key===w){if(w=x.type,w===Ms){if(T.tag===7){n(u,T.sibling),g=r(T,x.props.children),g.return=u,u=g;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ji&&tp(w)===T.type){n(u,T.sibling),g=r(T,x.props),g.ref=ma(u,T,x),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}x.type===Ms?(g=Ur(x.props.children,u.mode,S,x.key),g.return=u,u=g):(S=_l(x.type,x.key,x.props,null,u.mode,S),S.ref=ma(u,g,x),S.return=u,u=S)}return a(u);case Ss:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=ou(x,u.mode,S),g.return=u,u=g}return a(u);case ji:return T=x._init,v(u,g,T(x._payload),S)}if(Ta(x))return _(u,g,x,S);if(ua(x))return y(u,g,x,S);No(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=au(x,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return v}var qs=N0(!0),D0=N0(!1),Dl=_r(null),Il=null,Ps=null,Sh=null;function Mh(){Sh=Ps=Il=null}function Eh(t){var e=Dl.current;lt(Dl),t._currentValue=e}function Md(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){Il=t,Sh=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Il===null)throw Error(re(308));Ps=t,Il.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Nr=null;function wh(t){Nr===null?Nr=[t]:Nr.push(t)}function I0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function Th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,m=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=gt({},f,h);break e;case 2:Vi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=a,t.lanes=a,t.memoizedState=f}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var mo={},ui=_r(mo),Za=_r(mo),Qa=_r(mo);function Dr(t){if(t===mo)throw Error(re(174));return t}function Ah(t,e){switch(rt(Qa,e),rt(Za,t),rt(ui,mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nd(e,t)}lt(ui),rt(ui,e)}function $s(){lt(ui),lt(Za),lt(Qa)}function k0(t){Dr(Qa.current);var e=Dr(ui.current),n=nd(e,t.type);e!==n&&(rt(Za,t),rt(ui,n))}function bh(t){Za.current===t&&(lt(ui),lt(Za))}var pt=_r(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function Ch(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var fl=Ii.ReactCurrentDispatcher,tu=Ii.ReactCurrentBatchConfig,jr=0,mt=null,wt=null,Dt=null,Ol=!1,Da=!1,Ja=0,Fy=0;function Vt(){throw Error(re(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Ph(t,e,n,i,r,s){if(jr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?jy:Vy,t=n(i,r),Da){s=0;do{if(Da=!1,Ja=0,25<=s)throw Error(re(301));s+=1,Dt=wt=null,e.updateQueue=null,fl.current=Gy,t=n(i,r)}while(Da)}if(fl.current=Fl,e=wt!==null&&wt.next!==null,jr=0,Dt=wt=mt=null,Ol=!1,e)throw Error(re(300));return t}function Lh(){var t=Ja!==0;return Ja=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Hn(){if(wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Dt===null?mt.memoizedState:Dt.next;if(e!==null)Dt=e,wt=t;else{if(t===null)throw Error(re(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Dt===null?mt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function eo(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((jr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,mt.lanes|=d,Vr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ti(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function iu(t){var e=Hn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function O0(){}function F0(t,e){var n=mt,i=Hn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Nh(H0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,to(9,B0.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(re(349));jr&30||z0(n,e,r)}return r}function z0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function B0(t,e,n,i){e.value=n,e.getSnapshot=i,j0(e)&&V0(t)}function H0(t,e,n){return n(function(){j0(e)&&V0(t)})}function j0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function V0(t){var e=Li(t,1);e!==null&&ei(e,t,1,-1)}function rp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:t},e.queue=t,t=t.dispatch=Hy.bind(null,mt,t),[e.memoizedState,t]}function to(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function G0(){return Hn().memoizedState}function pl(t,e,n,i){var r=si();mt.flags|=t,r.memoizedState=to(1|e,n,void 0,i===void 0?null:i)}function lc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&Rh(i,a.deps)){r.memoizedState=to(e,n,s,i);return}}mt.flags|=t,r.memoizedState=to(1|e,n,s,i)}function sp(t,e){return pl(8390656,8,t,e)}function Nh(t,e){return lc(2048,8,t,e)}function W0(t,e){return lc(4,2,t,e)}function X0(t,e){return lc(4,4,t,e)}function q0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $0(t,e,n){return n=n!=null?n.concat([t]):null,lc(4,4,q0.bind(null,e,t),n)}function Dh(){}function Y0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function K0(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Z0(t,e,n){return jr&21?(ti(n,e)||(n=n0(),mt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function zy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=tu.transition;tu.transition={};try{t(!1),e()}finally{et=n,tu.transition=i}}function Q0(){return Hn().memoizedState}function By(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},J0(t))ev(e,n);else if(n=I0(t,e,n,i),n!==null){var r=sn();ei(n,t,i,r),tv(n,e,i)}}function Hy(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(J0(t))ev(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=I0(t,e,r,i),n!==null&&(r=sn(),ei(n,t,i,r),tv(n,e,i))}}function J0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function ev(t,e){Da=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var Fl={readContext:Bn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},jy={readContext:Bn,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,q0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=By.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Dh,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=zy.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=si();if(ct){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ut===null)throw Error(re(349));jr&30||z0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(H0.bind(null,i,s,t),[t]),i.flags|=2048,to(9,B0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Ut.identifierPrefix;if(ct){var n=Ai,i=Ti;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Vy={readContext:Bn,useCallback:Y0,useContext:Bn,useEffect:Nh,useImperativeHandle:$0,useInsertionEffect:W0,useLayoutEffect:X0,useMemo:K0,useReducer:nu,useRef:G0,useState:function(){return nu(eo)},useDebugValue:Dh,useDeferredValue:function(t){var e=Hn();return Z0(e,wt.memoizedState,t)},useTransition:function(){var t=nu(eo)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:F0,useId:Q0,unstable_isNewReconciler:!1},Gy={readContext:Bn,useCallback:Y0,useContext:Bn,useEffect:Nh,useImperativeHandle:$0,useInsertionEffect:W0,useLayoutEffect:X0,useMemo:K0,useReducer:iu,useRef:G0,useState:function(){return iu(eo)},useDebugValue:Dh,useDeferredValue:function(t){var e=Hn();return wt===null?e.memoizedState=t:Z0(e,wt.memoizedState,t)},useTransition:function(){var t=iu(eo)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:O0,useSyncExternalStore:F0,useId:Q0,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=sr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(ei(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=sr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(ei(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=sr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(ei(e,t,i,n),hl(e,t,i))}};function ap(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!qa(n,i)||!qa(r,s):!0}function nv(t,e,n){var i=!1,r=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=fn(e)?Br:Zt.current,i=e.contextTypes,s=(i=i!=null)?Ws(t,r):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cc.enqueueReplaceState(e,e.state,null)}function wd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Th(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=fn(e)?Br:Zt.current,r.context=Ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cc.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=_x(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function iv(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,Ud=i),Td(t,e)},n}function rv(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Td(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Wy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sS.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var Xy=Ii.ReactCurrentOwner,dn=!1;function nn(t,e,n,i){e.child=t===null?D0(e,null,n,i):qs(e,t.child,n,i)}function dp(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=Ph(t,e,n,i,s,r),n=Lh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ct&&n&&_h(e),e.flags|=1,nn(t,e,i,r),e.child)}function hp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sv(t,e,s,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(a,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function sv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qa(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Ad(t,e,n,i,r)}function av(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ns,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Ns,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Ns,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Ns,xn),xn|=i;return nn(t,e,r,n),e.child}function ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ad(t,e,n,i,r){var s=fn(n)?Br:Zt.current;return s=Ws(e,s),zs(e,r),n=Ph(t,e,n,i,s,r),i=Lh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(ct&&i&&_h(e),e.flags|=1,nn(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(fn(n)){var s=!0;Pl(e)}else s=!1;if(zs(e,r),e.stateNode===null)ml(t,e),nv(e,n,i),wd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=fn(n)?Br:Zt.current,c=Ws(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&op(e,a,i,c),Vi=!1;var h=e.memoizedState;a.state=h,Ul(e,i,a,r),l=e.memoizedState,o!==i||h!==l||hn.current||Vi?(typeof d=="function"&&(Ed(e,n,d,i),l=e.memoizedState),(o=Vi||ap(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,U0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Xn(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=fn(n)?Br:Zt.current,l=Ws(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&op(e,a,i,l),Vi=!1,h=e.memoizedState,a.state=h,Ul(e,i,a,r);var _=e.memoizedState;o!==f||h!==_||hn.current||Vi?(typeof m=="function"&&(Ed(e,n,m,i),_=e.memoizedState),(c=Vi||ap(e,n,c,i,h,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return bd(t,e,n,i,s,r)}function bd(t,e,n,i,r,s){ov(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Qf(e,n,!1),Ni(t,e,s);i=e.stateNode,Xy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=qs(e,t.child,null,s),e.child=qs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&Qf(e,n,!0),e.child}function lv(t){var e=t.stateNode;e.pendingContext?Zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zf(t,e.context,!1),Ah(t,e.containerInfo)}function pp(t,e,n,i,r){return Xs(),yh(r),e.flags|=256,nn(t,e,n,i),e.child}var Cd={dehydrated:null,treeContext:null,retryLane:0};function Rd(t){return{baseLanes:t,cachePool:null,transitions:null}}function cv(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=hc(a,i,0,null),t=Ur(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Rd(n),e.memoizedState=Cd,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return qy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Ur(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Rd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Cd,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Do(t,e,n,i){return i!==null&&yh(i),qs(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=ru(Error(re(422))),Do(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),s=Ur(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qs(e,t.child,null,a),e.child.memoizedState=Rd(a),e.memoizedState=Cd,s);if(!(e.mode&1))return Do(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=ru(s,i,void 0),Do(t,e,a,i)}if(o=(a&t.childLanes)!==0,dn||o){if(i=Ut,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),ei(i,t,r,-1))}return Bh(),i=ru(Error(re(421))),Do(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=nr(r.nextSibling),Tn=e,ct=!0,$n=null,t!==null&&(Dn[In++]=Ti,Dn[In++]=Ai,Dn[In++]=Hr,Ti=t.id,Ai=t.overflow,Hr=e),e=Ih(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Md(t.return,e,n)}function su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}su(e,!0,n,null,s);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $y(t,e,n){switch(e.tag){case 3:lv(e),Xs();break;case 5:k0(e);break;case 1:fn(e.type)&&Pl(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?cv(t,e,n):(rt(pt,pt.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,av(t,e,n)}return Ni(t,e,n)}var dv,Pd,hv,fv;dv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pd=function(){};hv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(ui.current);var s=null;switch(n){case"input":r=Qu(t,r),i=Qu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=td(t,r),i=td(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}id(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ba.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ba.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ga(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Yy(t,e,n){var i=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return fn(e.type)&&Rl(),Gt(e),null;case 3:return i=e.stateNode,$s(),lt(hn),lt(Zt),Ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Fd($n),$n=null))),Pd(t,e),Gt(e),null;case 5:bh(e);var r=Dr(Qa.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Gt(e),null}if(t=Dr(ui.current),Lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ba.length;r++)at(ba[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":wf(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Af(i,s),at("invalid",i)}id(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Po(i.textContent,o,t),r=["children",""+o]):Ba.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":Mo(i),Tf(i,s,!0);break;case"textarea":Mo(i),bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[Ka]=i,dv(t,e,!1,!1),e.stateNode=t;e:{switch(a=rd(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<ba.length;r++)at(ba[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":wf(t,i),r=Qu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Af(t,i),r=td(t,i),at("invalid",t);break;default:r=i}id(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Gg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ba.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&rh(t,s,l,a))}switch(n){case"input":Mo(t),Tf(t,i,!1);break;case"textarea":Mo(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Us(t,!!i.multiple,s,!1):i.defaultValue!=null&&Us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)fv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Dr(Qa.current),Dr(ui.current),Lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:Po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Gt(e),null;case 13:if(lt(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&En!==null&&e.mode&1&&!(e.flags&128))L0(),Xs(),e.flags|=98560,s=!1;else if(s=Lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[li]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else $n!==null&&(Fd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Tt===0&&(Tt=3):Bh())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return $s(),Pd(t,e),t===null&&$a(e.stateNode.containerInfo),Gt(e),null;case 10:return Eh(e.type._context),Gt(e),null;case 17:return fn(e.type)&&Rl(),Gt(e),null;case 19:if(lt(pt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ga(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=kl(t),a!==null){for(e.flags|=128,ga(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ks&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304)}else{if(!i)if(t=kl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Gt(e),null}else 2*St()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,ga(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return zh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ky(t,e){switch(xh(e),e.tag){case 1:return fn(e.type)&&Rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),lt(hn),lt(Zt),Ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bh(e),null;case 13:if(lt(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(pt),null;case 4:return $s(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var Io=!1,Yt=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Ld(t,e,n){try{n()}catch(i){_t(t,e,i)}}var gp=!1;function Qy(t,e){if(pd=Tl,t=_0(),vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:t,selectionRange:n},Tl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,v=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xn(e.type,y),v);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){_t(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=gp,gp=!1,_}function Ia(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ld(e,n,s)}r=r.next}while(r!==i)}}function uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pv(t){var e=t.alternate;e!==null&&(t.alternate=null,pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Ka],delete e[_d],delete e[Iy],delete e[Uy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mv(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}function Id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Id(t,e,n),t=t.sibling;t!==null;)Id(t,e,n),t=t.sibling}var kt=null,qn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)gv(t,e,n),n=n.sibling}function gv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(nc,n)}catch{}switch(n.tag){case 5:Yt||Ls(n,e);case 6:var i=kt,r=qn;kt=null,Ui(t,e,n),kt=i,qn=r,kt!==null&&(qn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(qn?(t=kt,n=n.stateNode,t.nodeType===8?Qc(t.parentNode,n):t.nodeType===1&&Qc(t,n),Wa(t)):Qc(kt,n.stateNode));break;case 4:i=kt,r=qn,kt=n.stateNode.containerInfo,qn=!0,Ui(t,e,n),kt=i,qn=r;break;case 0:case 11:case 14:case 15:if(!Yt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Ld(n,e,a),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!Yt&&(Ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(Yt=(i=Yt)||n.memoizedState!==null,Ui(t,e,n),Yt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function _p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zy),e.forEach(function(i){var r=oS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,qn=!1;break e;case 3:kt=o.stateNode.containerInfo,qn=!0;break e;case 4:kt=o.stateNode.containerInfo,qn=!0;break e}o=o.return}if(kt===null)throw Error(re(160));gv(s,a,r),kt=null,qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vv(e,t),e=e.sibling}function vv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(e,t),ri(t),i&4){try{Ia(3,t,t.return),uc(3,t)}catch(y){_t(t,t.return,y)}try{Ia(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:jn(e,t),ri(t),i&512&&n!==null&&Ls(n,n.return);break;case 5:if(jn(e,t),ri(t),i&512&&n!==null&&Ls(n,n.return),t.flags&32){var r=t.stateNode;try{Ha(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&zg(r,s),rd(o,a);var c=rd(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?Gg(r,f):d==="dangerouslySetInnerHTML"?jg(r,f):d==="children"?Ha(r,f):rh(r,d,f,c)}switch(o){case"input":Ju(r,s);break;case"textarea":Bg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Us(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Us(r,!!s.multiple,s.defaultValue,!0):Us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ka]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(jn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(jn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:jn(e,t),ri(t);break;case 13:jn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=St())),i&4&&_p(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Yt=(c=Yt)||d,jn(e,t),Yt=c):jn(e,t),ri(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ia(4,h,h.return);break;case 1:Ls(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:Ls(h,h.return);break;case 22:if(h.memoizedState!==null){yp(f);continue}}m!==null?(m.return=h,ge=m):yp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Vg("display",a))}catch(y){_t(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){_t(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,t),ri(t),i&4&&_p(t);break;case 21:break;default:jn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=vp(t);Id(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=vp(t);Dd(t,o,a);break;default:throw Error(re(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jy(t,e,n){ge=t,_v(t)}function _v(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Io;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Yt;o=Io;var c=Yt;if(Io=a,(Yt=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Sp(r):l!==null?(l.return=a,ge=l):Sp(r);for(;s!==null;)ge=s,_v(s),s=s.sibling;ge=r,Io=o,Yt=c}xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):xp(t)}}function xp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Yt||uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Yt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Yt||e.flags&512&&Nd(e)}catch(h){_t(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function yp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Sp(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Nd(e)}catch(l){_t(e,s,l)}break;case 5:var a=e.return;try{Nd(e)}catch(l){_t(e,a,l)}}}catch(l){_t(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var eS=Math.ceil,zl=Ii.ReactCurrentDispatcher,Uh=Ii.ReactCurrentOwner,zn=Ii.ReactCurrentBatchConfig,Ze=0,Ut=null,Et=null,zt=0,xn=0,Ns=_r(0),Tt=0,no=null,Vr=0,dc=0,kh=0,Ua=null,cn=null,Oh=0,Ks=1/0,Si=null,Bl=!1,Ud=null,rr=null,Uo=!1,Yi=null,Hl=0,ka=0,kd=null,gl=-1,vl=0;function sn(){return Ze&6?St():gl!==-1?gl:gl=St()}function sr(t){return t.mode&1?Ze&2&&zt!==0?zt&-zt:Oy.transition!==null?(vl===0&&(vl=n0()),vl):(t=et,t!==0||(t=window.event,t=t===void 0?16:c0(t.type)),t):1}function ei(t,e,n,i){if(50<ka)throw ka=0,kd=null,Error(re(185));ho(t,n,i),(!(Ze&2)||t!==Ut)&&(t===Ut&&(!(Ze&2)&&(dc|=n),Tt===4&&Xi(t,zt)),pn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ks=St()+500,oc&&xr()))}function pn(t,e){var n=t.callbackNode;Ox(t,e);var i=wl(t,t===Ut?zt:0);if(i===0)n!==null&&Pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pf(n),e===1)t.tag===0?ky(Mp.bind(null,t)):C0(Mp.bind(null,t)),Ny(function(){!(Ze&6)&&xr()}),n=null;else{switch(i0(i)){case 1:n=ch;break;case 4:n=e0;break;case 16:n=El;break;case 536870912:n=t0;break;default:n=El}n=Av(n,xv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xv(t,e){if(gl=-1,vl=0,Ze&6)throw Error(re(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=wl(t,t===Ut?zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=jl(t,i);else{e=i;var r=Ze;Ze|=2;var s=Sv();(Ut!==t||zt!==e)&&(Si=null,Ks=St()+500,Ir(t,e));do try{iS();break}catch(o){yv(t,o)}while(!0);Mh(),zl.current=s,Ze=r,Et!==null?e=0:(Ut=null,zt=0,e=Tt)}if(e!==0){if(e===2&&(r=cd(t),r!==0&&(i=r,e=Od(t,r))),e===1)throw n=no,Ir(t,0),Xi(t,i),pn(t,St()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!tS(r)&&(e=jl(t,i),e===2&&(s=cd(t),s!==0&&(i=s,e=Od(t,s))),e===1))throw n=no,Ir(t,0),Xi(t,i),pn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:br(t,cn,Si);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Oh+500-St(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=vd(br.bind(null,t,cn,Si),e);break}br(t,cn,Si);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eS(i/1960))-i,10<i){t.timeoutHandle=vd(br.bind(null,t,cn,Si),i);break}br(t,cn,Si);break;case 5:br(t,cn,Si);break;default:throw Error(re(329))}}}return pn(t,St()),t.callbackNode===n?xv.bind(null,t):null}function Od(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=jl(t,e),t!==2&&(e=cn,cn=n,e!==null&&Fd(e)),t}function Fd(t){cn===null?cn=t:cn.push.apply(cn,t)}function tS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~kh,e&=~dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(Ze&6)throw Error(re(327));Bs();var e=wl(t,0);if(!(e&1))return pn(t,St()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var i=cd(t);i!==0&&(e=i,n=Od(t,i))}if(n===1)throw n=no,Ir(t,0),Xi(t,e),pn(t,St()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,cn,Si),pn(t,St()),null}function Fh(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ks=St()+500,oc&&xr())}}function Gr(t){Yi!==null&&Yi.tag===0&&!(Ze&6)&&Bs();var e=Ze;Ze|=1;var n=zn.transition,i=et;try{if(zn.transition=null,et=1,t)return t()}finally{et=i,zn.transition=n,Ze=e,!(Ze&6)&&xr()}}function zh(){xn=Ns.current,lt(Ns)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ly(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rl();break;case 3:$s(),lt(hn),lt(Zt),Ch();break;case 5:bh(i);break;case 4:$s();break;case 13:lt(pt);break;case 19:lt(pt);break;case 10:Eh(i.type._context);break;case 22:case 23:zh()}n=n.return}if(Ut=t,Et=t=ar(t.current,null),zt=xn=e,Tt=0,no=null,kh=dc=Vr=0,cn=Ua=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Nr=null}return t}function yv(t,e){do{var n=Et;try{if(Mh(),fl.current=Fl,Ol){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(jr=0,Dt=wt=mt=null,Da=!1,Ja=0,Uh.current=null,n===null||n.return===null){Tt=1,no=e,Et=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=zt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=cp(a);if(m!==null){m.flags&=-257,up(m,a,o,s,e),m.mode&1&&lp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){lp(s,c,e),Bh();break e}l=Error(re(426))}}else if(ct&&o.mode&1){var v=cp(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),up(v,a,o,s,e),yh(Ys(l,o));break e}}s=l=Ys(l,o),Tt!==4&&(Tt=2),Ua===null?Ua=[s]:Ua.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=iv(s,l,e);np(s,u);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(rr===null||!rr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=rv(s,o,e);np(s,S);break e}}s=s.return}while(s!==null)}Ev(n)}catch(w){e=w,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Sv(){var t=zl.current;return zl.current=Fl,t===null?Fl:t}function Bh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ut===null||!(Vr&268435455)&&!(dc&268435455)||Xi(Ut,zt)}function jl(t,e){var n=Ze;Ze|=2;var i=Sv();(Ut!==t||zt!==e)&&(Si=null,Ir(t,e));do try{nS();break}catch(r){yv(t,r)}while(!0);if(Mh(),Ze=n,zl.current=i,Et!==null)throw Error(re(261));return Ut=null,zt=0,Tt}function nS(){for(;Et!==null;)Mv(Et)}function iS(){for(;Et!==null&&!Cx();)Mv(Et)}function Mv(t){var e=Tv(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Ev(t):Et=e,Uh.current=null}function Ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ky(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,Et=null;return}}else if(n=Yy(n,e,xn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Tt===0&&(Tt=5)}function br(t,e,n){var i=et,r=zn.transition;try{zn.transition=null,et=1,rS(t,e,n,i)}finally{zn.transition=r,et=i}return null}function rS(t,e,n,i){do Bs();while(Yi!==null);if(Ze&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fx(t,s),t===Ut&&(Et=Ut=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,Av(El,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var a=et;et=1;var o=Ze;Ze|=4,Uh.current=null,Qy(t,n),vv(n,t),wy(md),Tl=!!pd,md=pd=null,t.current=n,Jy(n),Rx(),Ze=o,et=a,zn.transition=s}else t.current=n;if(Uo&&(Uo=!1,Yi=t,Hl=r),s=t.pendingLanes,s===0&&(rr=null),Nx(n.stateNode),pn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=Ud,Ud=null,t;return Hl&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===kd?ka++:(ka=0,kd=t):ka=0,xr(),null}function Bs(){if(Yi!==null){var t=i0(Hl),e=zn.transition,n=et;try{if(zn.transition=null,et=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,Hl=0,Ze&6)throw Error(re(331));var r=Ze;for(Ze|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:Ia(8,d,s)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,m=d.return;if(pv(d),d===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ia(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var g=t.current;for(ge=g;ge!==null;){a=ge;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ge=x;else e:for(a=g;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:uc(9,o)}}catch(w){_t(o,o.return,w)}if(o===a){ge=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ge=S;break e}ge=o.return}}if(Ze=r,xr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(nc,t)}catch{}i=!0}return i}finally{et=n,zn.transition=e}}return!1}function Ep(t,e,n){e=Ys(n,e),e=iv(t,e,1),t=ir(t,e,1),e=sn(),t!==null&&(ho(t,1,e),pn(t,e))}function _t(t,e,n){if(t.tag===3)Ep(t,t,n);else for(;e!==null;){if(e.tag===3){Ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ys(n,t),t=rv(e,t,1),e=ir(e,t,1),t=sn(),e!==null&&(ho(e,1,t),pn(e,t));break}}e=e.return}}function sS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(zt&n)===n&&(Tt===4||Tt===3&&(zt&130023424)===zt&&500>St()-Oh?Ir(t,0):kh|=n),pn(t,e)}function wv(t,e){e===0&&(t.mode&1?(e=To,To<<=1,!(To&130023424)&&(To=4194304)):e=1);var n=sn();t=Li(t,e),t!==null&&(ho(t,e,n),pn(t,n))}function aS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wv(t,n)}function oS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),wv(t,n)}var Tv;Tv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,$y(t,e,n);dn=!!(t.flags&131072)}else dn=!1,ct&&e.flags&1048576&&R0(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=Ws(e,Zt.current);zs(e,n),r=Ph(null,e,i,t,r,n);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Th(e),r.updater=cc,e.stateNode=r,r._reactInternals=e,wd(e,i,t,n),e=bd(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&_h(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cS(i),t=Xn(i,t),r){case 0:e=Ad(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=dp(null,e,i,t,n);break e;case 14:e=hp(null,e,i,Xn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Ad(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),fp(t,e,i,r,n);case 3:e:{if(lv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,U0(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(re(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(re(424)),e),e=pp(t,e,i,n,r);break e}else for(En=nr(e.stateNode.containerInfo.firstChild),Tn=e,ct=!0,$n=null,n=D0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),i===r){e=Ni(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return k0(e),t===null&&Sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,gd(i,r)?a=null:s!==null&&gd(i,s)&&(e.flags|=32),ov(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Sd(e),null;case 13:return cv(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=qs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),dp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,rt(Dl,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!hn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Md(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Md(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=Bn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),hp(t,e,i,r,n);case 15:return sv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),ml(t,e),e.tag=1,fn(i)?(t=!0,Pl(e)):t=!1,zs(e,n),nv(e,i,r),wd(e,i,r,n),bd(null,e,i,!0,t,n);case 19:return uv(t,e,n);case 22:return av(t,e,n)}throw Error(re(156,e.tag))};function Av(t,e){return Jg(t,e)}function lS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new lS(t,e,n,i)}function Hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cS(t){if(typeof t=="function")return Hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ah)return 11;if(t===oh)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Ms:return Ur(n.children,r,s,e);case sh:a=8,r|=8;break;case $u:return t=On(12,n,e,r|2),t.elementType=$u,t.lanes=s,t;case Yu:return t=On(13,n,e,r),t.elementType=Yu,t.lanes=s,t;case Ku:return t=On(19,n,e,r),t.elementType=Ku,t.lanes=s,t;case kg:return hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ig:a=10;break e;case Ug:a=9;break e;case ah:a=11;break e;case oh:a=14;break e;case ji:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ur(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=On(22,t,i,e),t.elementType=kg,t.lanes=n,t.stateNode={isHidden:!1},t}function au(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hc(0),this.expirationTimes=Hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,s,a,o,l){return t=new uS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(s),t}function dS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function bv(t){if(!t)return hr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(fn(n))return b0(t,n,e)}return e}function Cv(t,e,n,i,r,s,a,o,l){return t=jh(n,i,!0,t,r,s,a,o,l),t.context=bv(null),n=t.current,i=sn(),r=sr(n),s=Ci(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,ho(t,r,i),pn(t,i),t}function fc(t,e,n,i){var r=e.current,s=sn(),a=sr(r);return n=bv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(ei(t,r,a,s),hl(t,r,a)),a}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){wp(t,e),(t=t.alternate)&&wp(t,e)}function hS(){return null}var Rv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gh(t){this._internalRoot=t}pc.prototype.render=Gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));fc(t,e,null,null)};pc.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){fc(null,t,null,null)}),e[Pi]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&l0(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function fS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vl(a);s.call(c)}}var a=Cv(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[Pi]=a.current,$a(t.nodeType===8?t.parentNode:t),Gr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Vl(l);o.call(c)}}var l=jh(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[Pi]=l.current,$a(t.nodeType===8?t.parentNode:t),Gr(function(){fc(e,l,n,i)}),l}function gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Vl(a);o.call(l)}}fc(e,a,t,r)}else a=fS(n,e,t,r,i);return Vl(a)}r0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(uh(e,n|1),pn(e,St()),!(Ze&6)&&(Ks=St()+500,xr()))}break;case 13:Gr(function(){var i=Li(t,1);if(i!==null){var r=sn();ei(i,t,1,r)}}),Vh(t,1)}};dh=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=sn();ei(e,t,134217728,n)}Vh(t,134217728)}};s0=function(t){if(t.tag===13){var e=sr(t),n=Li(t,e);if(n!==null){var i=sn();ei(n,t,e,i)}Vh(t,e)}};a0=function(){return et};o0=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};ad=function(t,e,n){switch(e){case"input":if(Ju(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ac(i);if(!r)throw Error(re(90));Fg(i),Ju(i,r)}}}break;case"textarea":Bg(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};qg=Fh;$g=Gr;var pS={usingClientEntryPoint:!1,Events:[po,As,ac,Wg,Xg,Fh]},va={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zg(t),t===null?null:t.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||hS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{nc=ko.inject(mS),ci=ko}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(re(200));return dS(t,e,null,n)};Cn.createRoot=function(t,e){if(!Wh(t))throw Error(re(299));var n=!1,i="",r=Rv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,$a(t.nodeType===8?t.parentNode:t),new Gh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Zg(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Gr(t)};Cn.hydrate=function(t,e,n){if(!mc(e))throw Error(re(200));return gc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Rv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Cv(e,null,t,1,n??null,r,!1,s,a),t[Pi]=e.current,$a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pc(e)};Cn.render=function(t,e,n){if(!mc(e))throw Error(re(200));return gc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!mc(t))throw Error(re(40));return t._reactRootContainer?(Gr(function(){gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Cn.unstable_batchedUpdates=Fh;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return gc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function Pv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pv)}catch(t){console.error(t)}}Pv(),Pg.exports=Cn;var gS=Pg.exports,Lv,Ap=gS;Lv=Ap.createRoot,Ap.hydrateRoot;const yn=60,Xh=9,wn={normal:{label:"Normal",short:"Normal",rank:0,description:"Lecturas dentro de lo habitual."},suspicious:{label:"Señal sospechosa",short:"Revisar",rank:2,description:"Algo se desvía de lo habitual y conviene revisarlo."},risk:{label:"Riesgo elevado",short:"Riesgo",rank:3,description:"La desviación es fuerte o sostenida; atiéndelo pronto."},nodata:{label:"Monitoreo interrumpido",short:"Sin datos",rank:1,description:"No llegan lecturas; no podemos confirmar su estado."}},vc={server:{label:"Servidor"},machine:{label:"Equipo de trabajo"},service:{label:"Aplicación o servicio"},storage:{label:"Almacenamiento"},network:{label:"Red"}},Hs={servers:{label:"Sala de servidores"},apps:{label:"Aplicaciones y servicios"},data:{label:"Datos y respaldos"},network:{label:"Red y acceso"},stations:{label:"Equipos de trabajo"}},Fn={cpu:{label:"Procesador",unit:"%",percent:!0,threshold:85},ram:{label:"Memoria",unit:"%",percent:!0,threshold:85},disk:{label:"Disco",unit:"%",percent:!0,threshold:90},latency:{label:"Tiempo de respuesta",unit:"ms",percent:!1,thresholdFactor:2.5},errors:{label:"Errores",unit:"/min",percent:!1,threshold:5}},vS={server:{cpu:34,ram:54,disk:47,latency:42,errors:.4},service:{cpu:22,ram:40,disk:30,latency:120,errors:.6},storage:{cpu:10,ram:24,disk:61,latency:14,errors:.1},network:{cpu:17,ram:30,disk:12,latency:8,errors:.2},machine:{cpu:25,ram:46,disk:55,latency:28,errors:.1}},Zs=[{id:"alameda",name:"Ferretería Alameda",sector:"Comercio minorista con 3 sucursales",components:[{id:"srv-pos",name:"Servidor de cajas",type:"server",zone:"servers",description:"Procesa las ventas de las tres sucursales."},{id:"srv-db",name:"Base de datos de inventario",type:"server",zone:"servers",role:"db",description:"Existencias, precios y pedidos a proveedores."},{id:"srv-erp",name:"Servidor administrativo",type:"server",zone:"servers",description:"Contabilidad, compras y nómina."},{id:"svc-shop",name:"Tienda en línea",type:"service",zone:"apps",role:"web",description:"Catálogo y pedidos de clientes por internet."},{id:"svc-bill",name:"Facturación electrónica",type:"service",zone:"apps",role:"app",description:"Emite y timbra las facturas."},{id:"svc-mail",name:"Correo corporativo",type:"service",zone:"apps",description:"Correo del equipo y de proveedores."},{id:"st-nas",name:"Respaldo local",type:"storage",zone:"data",role:"storage",description:"Copias nocturnas de inventario y ventas."},{id:"st-docs",name:"Archivo de documentos",type:"storage",zone:"data",description:"Facturas, contratos y comprobantes."},{id:"net-gw",name:"Router principal",type:"network",zone:"network",role:"gateway",description:"Conexión a internet de la matriz."},{id:"net-fw",name:"Firewall",type:"network",zone:"network",description:"Filtra el tráfico que entra y sale."},{id:"pc-centro",name:"Caja sucursal Centro",type:"machine",zone:"stations",role:"station",description:"Punto de venta principal."},{id:"pc-norte",name:"Caja sucursal Norte",type:"machine",zone:"stations",description:"Punto de venta de la sucursal Norte."}],links:[["net-gw","net-fw"],["net-fw","svc-shop"],["net-fw","svc-mail"],["svc-shop","srv-db"],["svc-bill","srv-db"],["srv-pos","srv-db"],["pc-centro","srv-pos"],["pc-norte","srv-pos"],["srv-db","st-nas"],["svc-bill","st-docs"],["srv-erp","srv-db"]]},{id:"sierra",name:"Transportes Sierra Norte",sector:"Logística regional, 40 unidades",components:[{id:"srv-app",name:"Servidor de aplicaciones",type:"server",zone:"servers",description:"Planeación de rutas y asignación de viajes."},{id:"srv-db",name:"Base de datos de flota",type:"server",zone:"servers",role:"db",description:"Unidades, operadores, viajes y mantenimiento."},{id:"svc-portal",name:"Portal de clientes",type:"service",zone:"apps",role:"web",description:"Seguimiento de envíos para clientes."},{id:"svc-gps",name:"Rastreo GPS",type:"service",zone:"apps",role:"app",description:"Recibe la ubicación de las unidades."},{id:"svc-pay",name:"Nómina y viáticos",type:"service",zone:"apps",description:"Pagos a operadores."},{id:"st-cloud",name:"Respaldo en la nube",type:"storage",zone:"data",role:"storage",description:"Copia diaria de la base de datos."},{id:"st-local",name:"Almacenamiento local",type:"storage",zone:"data",description:"Documentos de embarque escaneados."},{id:"net-gw",name:"Enlace de internet",type:"network",zone:"network",role:"gateway",description:"Conexión principal de la oficina."},{id:"net-vpn",name:"VPN de patios",type:"network",zone:"network",description:"Conecta los patios de maniobra."},{id:"pc-desp",name:"Estación de despacho",type:"machine",zone:"stations",role:"station",description:"Donde se asignan y vigilan los viajes."},{id:"pc-taller",name:"Equipo de taller",type:"machine",zone:"stations",description:"Bitácora de mantenimiento."}],links:[["net-gw","svc-portal"],["net-gw","svc-gps"],["net-gw","net-vpn"],["svc-portal","srv-db"],["svc-gps","srv-app"],["srv-app","srv-db"],["svc-pay","srv-db"],["srv-db","st-cloud"],["pc-desp","srv-app"],["pc-taller","net-vpn"],["srv-app","st-local"]]},{id:"nogal",name:"Clínica Dental Nogal",sector:"Salud, 4 consultorios",components:[{id:"srv-main",name:"Servidor principal",type:"server",zone:"servers",description:"Sistema de gestión de la clínica."},{id:"srv-db",name:"Expedientes clínicos",type:"server",zone:"servers",role:"db",description:"Historias clínicas y tratamientos."},{id:"svc-agenda",name:"Agenda de citas en línea",type:"service",zone:"apps",role:"web",description:"Pacientes reservan y confirman citas."},{id:"svc-xray",name:"Visor de radiografías",type:"service",zone:"apps",role:"app",description:"Consulta de imágenes en los consultorios."},{id:"svc-pay",name:"Cobro con terminal",type:"service",zone:"apps",description:"Pagos con tarjeta en recepción."},{id:"st-img",name:"Almacén de imágenes",type:"storage",zone:"data",role:"storage",description:"Radiografías y fotografías clínicas."},{id:"st-bkp",name:"Respaldo cifrado",type:"storage",zone:"data",description:"Copia semanal fuera de sitio."},{id:"net-gw",name:"Router de la clínica",type:"network",zone:"network",role:"gateway",description:"Conexión a internet."},{id:"net-wifi",name:"Wi-Fi interno",type:"network",zone:"network",description:"Red de consultorios y recepción."},{id:"pc-recep",name:"Recepción",type:"machine",zone:"stations",role:"station",description:"Registro de pacientes y cobro."},{id:"pc-c1",name:"Consultorio 1",type:"machine",zone:"stations",description:"Equipo del consultorio 1."},{id:"pc-c2",name:"Consultorio 2",type:"machine",zone:"stations",description:"Equipo del consultorio 2."}],links:[["net-gw","svc-agenda"],["net-gw","net-wifi"],["svc-agenda","srv-db"],["srv-main","srv-db"],["svc-xray","st-img"],["svc-pay","srv-main"],["pc-recep","net-wifi"],["pc-c1","net-wifi"],["pc-c2","net-wifi"],["net-wifi","srv-main"],["srv-db","st-bkp"],["svc-xray","srv-main"]]}],fr={"latency-drift":{label:"Respuesta lenta",title:t=>`Respuesta lenta en ${t}`,metrics:["latency","errors"],delta:(t,e,n)=>t==="latency"?n*Math.min(e*.09,2.6):t==="errors"&&e>8?Math.min((e-8)*.08,1.2):0,summary:"El tiempo de respuesta sube de forma sostenida, sin un pico aislado.",interpretations:["Consultas más pesadas de lo habitual o una tabla que creció mucho.","Otro proceso compitiendo por el mismo servidor.","Problemas de red entre la aplicación y este componente."],recommendations:["Revisa qué procesos o consultas se ejecutaron desde que comenzó la señal.","Compara con la misma hora de días anteriores para descartar un patrón normal.","Si la tendencia continúa, avisa a quien da soporte a este sistema."]},"error-burst":{label:"Aumento de errores",title:t=>`Aumento de errores en ${t}`,metrics:["errors","latency"],delta:(t,e,n)=>t==="errors"?Math.min(e*.45,9)+(e%5===0?2.2:0):t==="latency"?n*Math.min(e*.02,.5):0,summary:"Las respuestas fallidas aumentan cada minuto por encima de lo habitual.",interpretations:["Un cambio reciente (actualización o configuración) podría estar fallando.","Un servicio del que depende podría estar respondiendo con errores.","Tráfico inusual, por ejemplo, intentos repetidos de acceso."],recommendations:["Prueba la aplicación como lo haría un cliente y anota qué falla.","Revisa si hubo cambios o actualizaciones antes de que empezara la señal.","Verifica el estado de los componentes de los que depende."]},"cpu-saturation":{label:"Procesador saturado",title:t=>`Procesador cerca del límite en ${t}`,metrics:["cpu","latency","ram"],delta:(t,e,n)=>t==="cpu"?Math.min(e*3.4,93-n):t==="latency"?n*Math.min(e*.05,1.8):t==="ram"?Math.min(e*.8,15):0,summary:"El uso de procesador sube rápido y se mantiene cerca del máximo.",interpretations:["Un proceso que se quedó en ciclo o una tarea programada pesada.","Más usuarios o pedidos de los que el servidor suele atender.","Software no autorizado consumiendo recursos (poco probable, pero conviene descartarlo)."],recommendations:["Identifica qué proceso consume más procesador en este momento.","Si es una tarea programada, muévela a un horario de menor uso.","Si nadie reconoce el proceso, trátalo como un incidente de seguridad."]},"disk-fill":{label:"Disco llenándose",title:t=>`Disco casi lleno en ${t}`,metrics:["disk","latency"],delta:(t,e,n)=>t==="disk"?Math.min(e*1.5,97-n):t==="latency"&&e>15?n*.4:0,summary:"El espacio usado crece a un ritmo constante; a esta velocidad se llenaría pronto.",interpretations:["Un respaldo o archivo de registro que crece sin control.","Copias duplicadas que no se están limpiando."],recommendations:["Ubica las carpetas que más crecieron en la última hora.","Confirma que los respaldos antiguos se eliminan según lo previsto.","Libera espacio antes de que el disco llegue al 95 %."]},"memory-leak":{label:"Memoria en aumento",title:t=>`Memoria en aumento constante en ${t}`,metrics:["ram","cpu"],delta:(t,e,n)=>t==="ram"?Math.min(e*1.3,93-n):t==="cpu"?Math.min(e*.4,10):0,summary:"La memoria usada aumenta sin bajar, aunque la actividad no cambia.",interpretations:["La aplicación podría no estar liberando memoria (fuga de memoria).","Una caché configurada sin límite."],recommendations:["Programa un reinicio controlado del servicio en un horario de baja actividad.","Reporta el patrón al proveedor de la aplicación."]},"no-data":{label:"Sin lecturas",title:t=>`Sin lecturas de ${t}`,metrics:["cpu","latency"],delta:()=>0,summary:"Dejaron de llegar lecturas. Sin datos no es posible confirmar si funciona o no.",interpretations:["El agente de monitoreo se detuvo o el equipo se apagó.","Un corte de red entre este componente y DinoAlert.","El componente funciona, pero no está enviando información."],recommendations:["Verifica físicamente que el equipo esté encendido y conectado.","Revisa si otros componentes de la misma red también dejaron de reportar.","Reinicia el agente de monitoreo si el equipo funciona con normalidad."]}},Gl=[{id:"normal",name:"Operación normal",description:"Todas las lecturas se mantienen en su rango habitual.",signals:[]},{id:"suspicious",name:"Señales sospechosas",description:"La base de datos responde cada vez más lento y la aplicación web empieza a fallar.",signals:[{role:"db",kind:"latency-drift",start:28,severity:"suspicious"},{role:"web",kind:"error-burst",start:36,severity:"suspicious"}]},{id:"elevated",name:"Riesgo elevado",description:"Varias señales se acumulan y dos de ellas escalan a riesgo.",signals:[{role:"db",kind:"cpu-saturation",start:18,severity:"suspicious",escalate:{at:32,to:"risk"}},{role:"storage",kind:"disk-fill",start:22,severity:"suspicious",escalate:{at:40,to:"risk"}},{role:"app",kind:"memory-leak",start:26,severity:"suspicious"},{role:"web",kind:"error-burst",start:34,severity:"suspicious"}]},{id:"dataloss",name:"Pérdida de información",description:"Algunos componentes dejan de reportar y no se puede confirmar su estado.",signals:[{role:"station",kind:"no-data",start:24,severity:"nodata"},{role:"gateway",kind:"no-data",start:30,severity:"nodata"},{role:"web",kind:"latency-drift",start:38,severity:"suspicious"}]}],_S=[{at:2,type:"respaldo",role:"storage",text:"Respaldo incremental completado"},{at:9,type:"acceso",role:"gateway",text:"Inicio de sesión de administración"},{at:15,type:"actualización",role:"app",text:"Actualización de seguridad aplicada"},{at:21,type:"mantenimiento",role:"station",text:"Reinicio programado del equipo"},{at:33,type:"respaldo",role:"storage",text:"Verificación de respaldo correcta"},{at:44,type:"acceso",role:"db",text:"Consulta de reportes de fin de mes"},{at:52,type:"mantenimiento",role:"gateway",text:"Renovación de certificado completada"}],bp=[{kind:"latency-drift",priority:"media"},{kind:"error-burst",priority:"media"},{kind:"cpu-saturation",priority:"alta"},{kind:"disk-fill",priority:"alta"},{kind:"memory-leak",priority:"baja"},{kind:"no-data",priority:"baja"}],or={alta:{label:"Alta",rank:3},media:{label:"Media",rank:2},baja:{label:"Baja",rank:1},info:{label:"Informativa",rank:0}},xS={activa:{label:"Activa"},revision:{label:"En revisión"},cerrada:{label:"Cerrada"}};function qh(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function ai(t,e){const n=Math.sin(t*137e-6+e*12.9898)*43758.5453;return n-Math.floor(n)}function Cp(t,e){return(ai(t,e)*.6+ai(t,e-1)*.25+ai(t,e-2)*.15)*2-1}const yS=(t,e,n)=>Math.min(n,Math.max(e,t));function Ft(t){const e=Xh*60+t,n=Math.floor(e/60)%24,i=e%60;return`${String(n).padStart(2,"0")}:${String(i).padStart(2,"0")}`}const SS=t=>Zs.find(e=>e.id===t)||Zs[0],MS=t=>Gl.find(e=>e.id===t)||Gl[0];function ni(t,e){return t.components.find(n=>n.id===e)||null}function Nv(t){const e=vS[t.type],n=qh(t.id+t.name),i=.85+n%30/100;return{cpu:e.cpu*i,ram:e.ram*(.9+n%17/100),disk:e.disk*(.88+n%23/100),latency:e.latency*i,errors:e.errors}}function io(t,e){return e.signals.map((n,i)=>{const r=t.components.find(s=>s.role===n.role);return r?{...n,index:i,componentId:r.id}:null}).filter(Boolean)}function Dv(t,e){return e<t.start?null:t.escalate&&e>=t.escalate.at?t.escalate.to:t.severity}function Iv(t,e,n,i){const r=i.filter(c=>c.componentId===t.id&&n>=c.start);if(r.some(c=>c.kind==="no-data"))return null;const s=Nv(t)[e],a=qh(`${t.id}:${e}`),o=Math.sin((n+a%60)/9)*.05;let l=s*(1+Cp(a,n)*.07+o);e==="errors"&&(l=Math.max(0,s+Cp(a,n)*s*.8));for(const c of r)l+=fr[c.kind].delta(e,n-c.start,s);return Fn[e].percent&&(l=yS(l,0,99)),e==="latency"&&(l=Math.max(1,l)),e==="errors"&&(l=Math.max(0,l)),Math.round(l*10)/10}function _c(t,e,n){const i=[];for(let r=0;r<yn;r++)i.push(Iv(t,e,r,n));return i}function Uv(t,e){const n=Fn[e];return n.thresholdFactor?Math.round(Nv(t)[e]*n.thresholdFactor):n.threshold}function Wr(t,e){if(e==null)return"Sin datos";const n=Fn[t];return t==="errors"?`${e.toFixed(1)} ${n.unit}`:n.percent?`${Math.round(e)} %`:`${Math.round(e)} ${n.unit}`}function ES(t,e,n){return e==="risk"?"alta":e==="suspicious"||e==="nodata"&&n.role==="gateway"?"media":"baja"}function wS(t,e){for(let n=e;n>=0;n--)if(t[n]!==null)return{t:n,v:t[n]};return null}function TS(t,e,n,i){const r=fr[t.kind];if(t.kind==="no-data"){const s=i-t.start+1;return[`No se reciben lecturas desde las ${Ft(t.start)} (${s} min).`,`La última lectura válida fue a las ${Ft(Math.max(0,t.start-1))}.`]}return r.metrics.slice(0,2).map(s=>{const a=_c(e,s,n),o=a[Math.max(0,t.start-1)],l=wS(a,i),c=Fn[s].label.toLowerCase();if(!l||o===null)return`Sin lecturas suficientes de ${c}.`;const d=l.v>=o?"subió":"bajó";return`El ${c==="memoria"?"uso de memoria":c} ${d} de ${Wr(s,o)} a ${Wr(s,l.v)} desde las ${Ft(t.start)}.`})}function AS(t,e,n){const i=[{tick:Math.max(0,t.start-1),label:"Última lectura dentro de lo habitual",type:"normal"},{tick:t.start,label:t.kind==="no-data"?"Se deja de recibir información":"Primera desviación observada",type:t.severity}];return t.escalate&&e>=t.escalate.at&&i.push({tick:t.escalate.at,label:"La señal se mantiene y escala a riesgo elevado",type:"risk"}),e>t.start&&i.push({tick:e,label:"Lectura más reciente",type:"current"}),n&&i.push({tick:e,label:n==="cerrada"?"Alerta cerrada por el usuario":"Marcada en revisión por el usuario",type:"user"}),i.map(r=>({...r,time:Ft(r.tick)}))}function bS(t,e,n,i={}){const r=io(t,e);return r.filter(s=>n>=s.start).map(s=>{const a=ni(t,s.componentId),o=fr[s.kind],l=Dv(s,n),c=`${t.id}-${e.id}-${s.index}`,d=i[c];return{id:c,kind:s.kind,kindLabel:o.label,title:o.title(a.name),componentId:a.id,componentName:a.name,severity:l,priority:ES(s,l,a),status:d||"activa",startTick:s.start,startedAt:Ft(s.start),escalateTick:s.escalate?s.escalate.at:null,escalated:!!(s.escalate&&n>=s.escalate.at),durationMin:n-s.start+1,summary:o.summary,metrics:o.metrics,observations:TS(s,a,r,n),interpretations:o.interpretations,recommendations:o.recommendations,timeline:AS(s,n,d)}}).sort(CS)}function CS(t,e){const n=or[e.priority].rank-or[t.priority].rank;return n!==0?n:e.startTick-t.startTick}function RS(t,e,n){const i=io(t,e),r=[];for(const s of _S){if(s.at>n)continue;const a=t.components.find(o=>o.role===s.role);a&&r.push({id:`ev-${s.at}`,tick:s.at,time:Ft(s.at),type:s.type,componentId:a.id,componentName:a.name,text:s.text,level:"info"})}for(const s of i){const a=ni(t,s.componentId);n>=s.start&&r.push({id:`sig-${s.index}`,tick:s.start,time:Ft(s.start),type:"alerta",componentId:a.id,componentName:a.name,text:fr[s.kind].title(a.name),level:s.severity,alertId:`${t.id}-${e.id}-${s.index}`}),s.escalate&&n>=s.escalate.at&&r.push({id:`esc-${s.index}`,tick:s.escalate.at,time:Ft(s.escalate.at),type:"alerta",componentId:a.id,componentName:a.name,text:`Escala a riesgo elevado: ${a.name}`,level:"risk",alertId:`${t.id}-${e.id}-${s.index}`})}return r.sort((s,a)=>a.tick-s.tick)}function PS(t,e,n,i){const r=SS(t),s=MS(e),a=io(r,s),o={},l={};for(const h of r.components){let m="normal";for(const _ of a){if(_.componentId!==h.id)continue;const y=Dv(_,n);y&&wn[y].rank>wn[m].rank&&(m=y)}o[h.id]=m,l[h.id]={};for(const _ of Object.keys(Fn))l[h.id][_]=Iv(h,_,n,a)}const c={normal:0,suspicious:0,risk:0,nodata:0};Object.values(o).forEach(h=>{c[h]+=1});let d="normal";for(const h of Object.values(o))wn[h].rank>wn[d].rank&&(d=h);const f=bS(r,s,n,i);return{client:r,scenario:s,signals:a,tick:n,time:Ft(n),states:o,metricsNow:l,counts:c,overall:d,overallText:LS(c),alerts:f,openAlerts:f.filter(h=>h.status!=="cerrada"),events:RS(r,s,n)}}function LS(t){const e=[],n=(r,s,a)=>`${r} ${r===1?s:a}`;if(t.risk&&e.push(`riesgo elevado en ${n(t.risk,"componente","componentes")}`),t.suspicious&&e.push(`${n(t.suspicious,"señal","señales")} por revisar`),t.nodata&&e.push(`${n(t.nodata,"componente","componentes")} sin datos`),!e.length)return"Todo en orden";const i=e.length===1?e[0]:`${e.slice(0,-1).join(", ")} y ${e[e.length-1]}`;return i.charAt(0).toUpperCase()+i.slice(1)}function kv(t,e){const n=[],i=[];for(const[r,s]of t.links)r===e&&n.push(s),s===e&&i.push(r);return{dependsOn:n,usedBy:i}}const NS=864e5;function DS(t){const e=qh(t.id),n=[],i=new Date(2026,9,9,Xh,0,0).getTime(),r=["mantenimiento","respaldo","acceso","actualización"];for(let s=0;s<22;s++){const a=ai(e,s*3+1),o=1+Math.floor(ai(e,s*7+2)*14),l=Math.floor(ai(e,s*11+5)*600),c=t.components[Math.floor(ai(e,s*13+3)*t.components.length)],d=new Date(i-o*NS+l*6e4-120*6e4);if(a<.55){const f=bp[Math.floor(ai(e,s*17)*bp.length)];n.push({id:`h-${t.id}-${s}`,date:d,componentId:c.id,componentName:c.name,type:"alerta",title:fr[f.kind].title(c.name),priority:f.priority,status:ai(e,s*19)<.85?"cerrada":"revision",summary:fr[f.kind].summary,historical:!0})}else{const f=r[Math.floor(ai(e,s*23)*r.length)],h={mantenimiento:"Mantenimiento programado",respaldo:"Respaldo completado",acceso:"Acceso de administración registrado",actualización:"Actualización instalada"};n.push({id:`h-${t.id}-${s}`,date:d,componentId:c.id,componentName:c.name,type:f,title:`${h[f]}: ${c.name}`,priority:"info",status:"cerrada",summary:"Evento rutinario registrado.",historical:!0})}}return n}function Rp(t){return new Date(2026,9,9,Xh,t,0)}const Pp="(prefers-reduced-motion: reduce)";function IS(){const[t,e]=ce.useState(()=>{var n;return typeof window<"u"&&((n=window.matchMedia)==null?void 0:n.call(window,Pp).matches)});return ce.useEffect(()=>{var r,s;const n=(r=window.matchMedia)==null?void 0:r.call(window,Pp);if(!n)return;const i=()=>e(n.matches);return(s=n.addEventListener)==null||s.call(n,"change",i),()=>{var a;return(a=n.removeEventListener)==null?void 0:a.call(n,"change",i)}},[]),t}function Lp(){const t=window.location.hash.replace(/^#\/?/,""),[e="",...n]=t.split("/").filter(Boolean);return{page:e||"monitoreo",param:n.length?decodeURIComponent(n.join("/")):null}}function US(){const[t,e]=ce.useState(Lp);ce.useEffect(()=>{const i=()=>e(Lp());return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const n=ce.useCallback((i,r)=>{window.location.hash=r?`/${i}/${encodeURIComponent(r)}`:`/${i}`},[]);return{...t,navigate:n}}const Ov=ce.createContext(null),zd={theme:"dark",motion:"system",labels:"all",quality:"high"},ki={clientId:Zs[0].id,scenarioId:"suspicious",tick:45,speed:1};function kS({children:t}){const e=US(),[n,i]=ce.useState(ki.clientId),[r,s]=ce.useState(ki.scenarioId),[a,o]=ce.useState(ki.tick),[l,c]=ce.useState(!1),[d,f]=ce.useState(ki.speed),[h,m]=ce.useState({}),[_,y]=ce.useState(zd),[v,u]=ce.useState(null),[g,x]=ce.useState(null),[S,w]=ce.useState(null),T=ce.useRef(null),M=IS(),P=_.motion==="system"?M:_.motion==="reduced";ce.useEffect(()=>{if(!l)return;const k=setInterval(()=>{o(F=>F>=yn-1?(c(!1),F):F+1)},1e3/d);return()=>clearInterval(k)},[l,d]),ce.useEffect(()=>{document.documentElement.dataset.theme=_.theme,document.documentElement.dataset.motion=P?"reduced":"full"},[_.theme,P]);const E=ce.useCallback(k=>{w({message:k,id:Date.now()}),clearTimeout(T.current),T.current=setTimeout(()=>w(null),3200)},[]),b=ce.useCallback(k=>{i(k),u(null),x(null);const F=Zs.find(H=>H.id===k);F&&E(`Mostrando ${F.name}`)},[E]),N=ce.useCallback(k=>{s(k)},[]),O=ce.useCallback((k,F)=>{m(H=>{const Z={...H};return F==="activa"?delete Z[k]:Z[k]=F,Z}),E(F==="cerrada"?"Alerta cerrada":F==="revision"?"Alerta marcada en revisión":"Alerta reabierta")},[E]),Y=ce.useCallback((k,F="monitoreo")=>{x(k),u({id:k,nonce:Date.now()}),e.page!==F&&F&&e.navigate(F)},[e]),I=ce.useCallback(()=>{i(ki.clientId),s(ki.scenarioId),o(ki.tick),f(ki.speed),c(!1),m({}),y(zd),u(null),x(null),E("Configuración de demostración restablecida")},[E]),B=ce.useMemo(()=>PS(n,r,a,h),[n,r,a,h]),X=ce.useMemo(()=>DS(B.client),[B.client]),K={route:e,clientId:n,setClientId:b,scenarioId:r,setScenarioId:N,tick:a,setTick:o,playing:l,setPlaying:c,speed:d,setSpeed:f,overrides:h,setAlertStatus:O,prefs:_,setPrefs:y,reducedMotion:P,focusRequest:v,setFocusRequest:u,locateComponent:Y,selectedId:g,setSelectedId:x,snapshot:B,history:X,toast:S,notify:E,resetDemo:I};return p.jsx(Ov.Provider,{value:K,children:t})}function Pn(){const t=ce.useContext(Ov);if(!t)throw new Error("useDemo debe usarse dentro de DemoProvider");return t}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var FS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=ce.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>ce.createElement("svg",{ref:l,...FS,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Fv("lucide",r),...o},[...a.map(([c,d])=>ce.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(t,e)=>{const n=ce.forwardRef(({className:i,...r},s)=>ce.createElement(zS,{ref:s,iconNode:e,className:Fv(`lucide-${OS(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=Xe("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=Xe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=Xe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=Xe("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=Xe("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=Xe("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=Xe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=Xe("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=Xe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=Xe("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=Xe("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Xe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=Xe("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=Xe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=Xe("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=Xe("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=Xe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=Xe("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=Xe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=Xe("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Xe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=Xe("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=Xe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=Xe("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=Xe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=Xe("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=Xe("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=Xe("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=Xe("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=Xe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=Xe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=Xe("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=Xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=Xe("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=Xe("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);function Yv({compact:t=!1}){return p.jsxs("span",{className:"logo",children:[p.jsxs("svg",{viewBox:"0 0 40 32",width:"34",height:"28","aria-hidden":"true",children:[p.jsx("path",{d:"M4 25v-8c0-6 4-10 11-10h9c5 0 9 3 9 7.5V18h-8v2.6h5v3H19.5V26l-2.6 3.5h-3.7l-1.2-4.5H4z",fill:"var(--pink)"}),p.jsx("path",{d:"M24 18h9v1.5c0 1.2-1 2.1-2.2 2.1H24z",fill:"var(--pink-light)"}),p.jsx("circle",{cx:"25",cy:"12",r:"1.8",fill:"var(--bg-0)"}),p.jsx("path",{d:"M33 4l3-2M35.5 8.5l3.2-.6M31 1.5l.6-1.5",stroke:"var(--yellow)",strokeWidth:"1.4",strokeLinecap:"round"})]}),!t&&p.jsx("span",{className:"logo__word",children:"DinoAlert"})]})}const rM=[{page:"monitoreo",label:"Monitoreo",icon:ZS},{page:"alertas",label:"Alertas",icon:GS},{page:"infraestructura",label:"Infraestructura",icon:QS},{page:"diagnostico",label:"Diagnóstico",icon:Sc},{page:"historial",label:"Historial",icon:$S},{page:"simulacion",label:"Laboratorio",icon:Yh},{page:"configuracion",label:"Configuración",icon:JS}];function sM(){const{route:t,snapshot:e}=Pn(),n=e.openAlerts.length;return p.jsxs("nav",{className:"sidebar","aria-label":"Navegación principal",children:[p.jsx("a",{href:"#/monitoreo",className:"sidebar__brand","aria-label":"DinoAlert, ir al centro de monitoreo",children:p.jsx(Yv,{})}),p.jsx("p",{className:"sidebar__slogan",children:"Detecta hoy, evita la llamada."}),p.jsx("ul",{className:"sidebar__list",children:rM.map(({page:i,label:r,icon:s})=>p.jsx("li",{children:p.jsxs("a",{href:`#/${i}`,className:"nav-link","aria-current":t.page===i?"page":void 0,children:[p.jsx(s,{size:19,"aria-hidden":"true"}),p.jsx("span",{className:"nav-link__label",children:r}),i==="alertas"&&n>0&&p.jsx("span",{className:"nav-count","aria-label":`${n} abiertas`,children:n})]})},i))})]})}const aM={normal:go,suspicious:$h,risk:qv,nodata:$v};function pr({status:t="normal",size:e=16,...n}){const i=aM[t]||go;return p.jsx(i,{size:e,"aria-hidden":"true",className:`status-icon status-icon--${t}`,...n})}function kr({status:t="normal",short:e=!1}){return p.jsxs("span",{className:"badge badge--status","data-status":t,children:[p.jsx(pr,{status:t,size:14}),e?wn[t].short:wn[t].label]})}function mr({priority:t}){const e=or[t]||or.info;return p.jsxs("span",{className:"badge badge--priority","data-priority":t,children:[p.jsx("span",{className:"priority-bars","aria-hidden":"true",children:[1,2,3].map(n=>p.jsx("i",{"data-on":n<=e.rank},n))}),t==="info"?e.label:`Prioridad ${e.label.toLowerCase()}`]})}function Zh({status:t}){var e;return p.jsx("span",{className:"badge badge--alert-status","data-astatus":t,children:((e=xS[t])==null?void 0:e.label)||t})}function Xr({children:t="Datos simulados"}){return p.jsx("span",{className:"sim-tag",title:"Información de demostración generada en el navegador; no proviene de un detector real.",children:t})}function oM(){const{clientId:t,setClientId:e,snapshot:n,playing:i,setPlaying:r,route:s,prefs:a,setPrefs:o}=Pn();return p.jsxs("header",{className:"topbar",children:[p.jsx("a",{href:"#/monitoreo",className:"topbar__brand","aria-label":"DinoAlert",children:p.jsx(Yv,{compact:!0})}),p.jsxs("div",{className:"client-select",children:[p.jsx(XS,{size:17,"aria-hidden":"true"}),p.jsx("label",{htmlFor:"client-select",className:"sr-only",children:"Cliente"}),p.jsx("select",{id:"client-select",value:t,onChange:l=>e(l.target.value),children:Zs.map(l=>p.jsx("option",{value:l.id,children:l.name},l.id))})]}),p.jsxs("div",{className:"overall","data-status":n.overall,role:"status","aria-live":"polite",children:[p.jsx(pr,{status:n.overall,size:18}),p.jsx("span",{className:"overall__text",children:n.overallText})]}),p.jsxs("div",{className:"topbar__right",children:[p.jsxs("button",{type:"button",className:"scenario-chip",onClick:()=>s.navigate("simulacion"),title:"Cambiar escenario en el laboratorio",children:["Escenario: ",n.scenario.name]}),p.jsxs("span",{className:"clock",title:"Hora de la última lectura simulada",children:[p.jsx(Hv,{size:15,"aria-hidden":"true"}),"Última lectura ",n.time]}),p.jsx("button",{type:"button",className:"icon-btn",onClick:()=>r(!i),"aria-label":i?"Pausar simulación":"Reproducir simulación",title:i?"Pausar simulación":"Reproducir simulación",children:i?p.jsx(Vv,{size:17}):p.jsx(Gv,{size:17})}),p.jsx("button",{type:"button",className:"icon-btn",onClick:()=>o({...a,theme:a.theme==="dark"?"light":"dark"}),"aria-label":a.theme==="dark"?"Usar tema claro":"Usar tema oscuro",title:"Cambiar tema",children:a.theme==="dark"?p.jsx(Xv,{size:17}):p.jsx(jv,{size:17})}),p.jsx(Xr,{})]})]})}function lM(){const{toast:t}=Pn();return p.jsx("div",{className:"toast-region",role:"status","aria-live":"polite",children:t&&p.jsxs("div",{className:"toast",children:[p.jsx(go,{size:16,"aria-hidden":"true"}),t.message]},t.id)})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="160",es={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,Np=1,uM=2,Kv=1,Zv=2,yi=3,gr=0,mn=1,wi=2,lr=0,js=1,Bd=2,Dp=3,Ip=4,dM=5,Rr=100,hM=101,fM=102,Up=103,kp=104,pM=200,mM=201,gM=202,vM=203,Hd=204,jd=205,_M=206,xM=207,yM=208,SM=209,MM=210,EM=211,wM=212,TM=213,AM=214,bM=0,CM=1,RM=2,Xl=3,PM=4,LM=5,NM=6,DM=7,Qv=0,IM=1,UM=2,cr=0,kM=1,OM=2,FM=3,zM=4,BM=5,HM=6,Jv=300,Qs=301,Js=302,Vd=303,Gd=304,Mc=306,Wd=1e3,Kn=1001,Xd=1002,rn=1003,Op=1004,lu=1005,Un=1006,jM=1007,ro=1008,ur=1009,VM=1010,GM=1011,Jh=1012,e_=1013,Ki=1014,Zi=1015,so=1016,t_=1017,n_=1018,Or=1020,WM=1021,Zn=1023,XM=1024,qM=1025,Fr=1026,ea=1027,$M=1028,i_=1029,YM=1030,r_=1031,s_=1033,cu=33776,uu=33777,du=33778,hu=33779,Fp=35840,zp=35841,Bp=35842,Hp=35843,a_=36196,jp=37492,Vp=37496,Gp=37808,Wp=37809,Xp=37810,qp=37811,$p=37812,Yp=37813,Kp=37814,Zp=37815,Qp=37816,Jp=37817,em=37818,tm=37819,nm=37820,im=37821,fu=36492,rm=36494,sm=36495,KM=36283,am=36284,om=36285,lm=36286,o_=3e3,zr=3001,ZM=3200,QM=3201,l_=0,JM=1,kn="",Ot="srgb",Di="srgb-linear",ef="display-p3",Ec="display-p3-linear",ql="linear",ot="srgb",$l="rec709",Yl="p3",ns=7680,cm=519,e1=512,t1=513,n1=514,c_=515,i1=516,r1=517,s1=518,a1=519,um=35044,dm="300 es",qd=1035,bi=2e3,Kl=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hm=1234567;const Oa=Math.PI/180,ao=180/Math.PI;function aa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function It(t,e,n){return Math.max(e,Math.min(n,t))}function tf(t,e){return(t%e+e)%e}function o1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function l1(t,e,n){return t!==e?(n-t)/(e-t):0}function Fa(t,e,n){return(1-n)*t+n*e}function c1(t,e,n,i){return Fa(t,e,1-Math.exp(-n*i))}function u1(t,e=1){return e-Math.abs(tf(t,e*2)-e)}function d1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function h1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function f1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function p1(t,e){return t+Math.random()*(e-t)}function m1(t){return t*(.5-Math.random())}function g1(t){t!==void 0&&(hm=t);let e=hm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function v1(t){return t*Oa}function _1(t){return t*ao}function $d(t){return(t&t-1)===0&&t!==0}function x1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Zl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function y1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*d,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qi={DEG2RAD:Oa,RAD2DEG:ao,generateUUID:aa,clamp:It,euclideanModulo:tf,mapLinear:o1,inverseLerp:l1,lerp:Fa,damp:c1,pingpong:u1,smoothstep:d1,smootherstep:h1,randInt:f1,randFloat:p1,randFloatSpread:m1,seededRandom:g1,degToRad:v1,radToDeg:_1,isPowerOfTwo:$d,ceilPowerOfTwo:x1,floorPowerOfTwo:Zl,setQuaternionFromProperEuler:y1,normalize:en,denormalize:ys};class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],y=r[0],v=r[3],u=r[6],g=r[1],x=r[4],S=r[7],w=r[2],T=r[5],M=r[8];return s[0]=a*y+o*g+l*w,s[3]=a*v+o*x+l*T,s[6]=a*u+o*S+l*M,s[1]=c*y+d*g+f*w,s[4]=c*v+d*x+f*T,s[7]=c*u+d*S+f*M,s[2]=h*y+m*g+_*w,s[5]=h*v+m*x+_*T,s[8]=h*u+m*S+_*M,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,m=c*s-a*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(pu.makeScale(e,n)),this}rotate(e){return this.premultiply(pu.makeRotation(-e)),this}translate(e,n){return this.premultiply(pu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pu=new Ge;function u_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function S1(){const t=Ql("canvas");return t.style.display="block",t}const fm={};function za(t){t in fm||(fm[t]=!0,console.warn(t))}const pm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oo={[Di]:{transfer:ql,primaries:$l,toReference:t=>t,fromReference:t=>t},[Ot]:{transfer:ot,primaries:$l,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ec]:{transfer:ql,primaries:Yl,toReference:t=>t.applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm)},[ef]:{transfer:ot,primaries:Yl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(mm),fromReference:t=>t.applyMatrix3(pm).convertLinearToSRGB()}},M1=new Set([Di,Ec]),tt={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!M1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Oo[e].toReference,r=Oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Oo[t].primaries},getTransfer:function(t){return t===kn?ql:Oo[t].transfer}};function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class d_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Ql("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E1=0;class h_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=aa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(gu(r[a].image)):s.push(gu(r[a]))}else s=gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?d_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w1=0;class An extends Qr{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,i=Kn,r=Kn,s=Un,a=ro,o=Zn,l=ur,c=An.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=aa(),this.name="",this.source=new h_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===zr?Ot:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?zr:o_}set encoding(e){za("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zr?Ot:kn}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Jv;An.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],y=l[2],v=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-v)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+v)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(m+1)/2,w=(u+1)/2,T=(d+h)/4,M=(f+y)/4,P=(_+v)/4;return x>S&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=M/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=P/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-_)*(v-_)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(v-_)/g,this.y=(f-y)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T1 extends Qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(za("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===zr?Ot:kn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new h_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends T1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class f_ extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class A1 extends An{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==m||d!==_){let v=1-o;const u=l*h+c*m+d*_+f*y,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,u*g);v=Math.sin(v*T)/w,o=Math.sin(o*T)/w}const S=o*g;if(l=l*v+h*S,c=c*v+m*S,d=d*v+_*S,f=f*v+y*S,v===1-o){const w=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=w,c*=w,d*=w,f*=w}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*f+l*m-c*h,e[n+1]=l*_+d*h+c*f-o*m,e[n+2]=c*_+d*m+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vu.copy(this).projectOnVector(e),this.sub(vu)}reflect(e){return this.sub(vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vu=new D,gm=new $r;class vo{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),zo.subVectors(this.max,_a),rs.subVectors(e.a,_a),ss.subVectors(e.b,_a),as.subVectors(e.c,_a),Oi.subVectors(ss,rs),Fi.subVectors(as,ss),Mr.subVectors(rs,as);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-Mr.z,Mr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,Mr.z,0,-Mr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-Mr.y,Mr.x,0];return!_u(n,rs,ss,as,zo)||(n=[1,0,0,0,1,0,0,0,1],!_u(n,rs,ss,as,zo))?!1:(Bo.crossVectors(Oi,Fi),n=[Bo.x,Bo.y,Bo.z],_u(n,rs,ss,as,zo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new D,new D,new D,new D,new D,new D,new D,new D],Vn=new D,Fo=new vo,rs=new D,ss=new D,as=new D,Oi=new D,Fi=new D,Mr=new D,_a=new D,zo=new D,Bo=new D,Er=new D;function _u(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),d=i.dot(Er);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const b1=new vo,xa=new D,xu=new D;class wc{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):b1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const n=xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(xu)),this.expandByPoint(xa.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new D,yu=new D,Ho=new D,zi=new D,Su=new D,jo=new D,Mu=new D;class Tc{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),Ho.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(yu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ho),o=zi.dot(this.direction),l=-zi.dot(Ho),c=zi.lengthSq(),d=Math.abs(1-a*a);let f,h,m,_;if(d>0)if(f=a*l-o,h=a*o-l,_=s*d,f>=0)if(h>=-_)if(h<=_){const y=1/d;f*=y,h*=y,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yu).addScaledVector(Ho,h),m}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),jo.subVectors(i,e),Mu.crossVectors(Su,jo);let a=this.direction.dot(Mu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);const l=o*this.direction.dot(jo.crossVectors(zi,jo));if(l<0)return null;const c=o*this.direction.dot(Su.cross(zi));if(c<0||l+c>a)return null;const d=-o*zi.dot(Mu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,v){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,v)}set(e,n,i,r,s,a,o,l,c,d,f,h,m,_,y,v){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=y,u[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/os.setFromMatrixColumn(e,0).length(),s=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,m=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h+y*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,y=c*f;n[0]=h-y*o,n[4]=-a*f,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,_=o*d,y=o*f;n[0]=l*d,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-h*f,n[8]=_*f+m,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=a*d,n[9]=m*f-_,n[2]=_*f-m,n[6]=o*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C1,e,R1)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Bi.crossVectors(i,vn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Bi.crossVectors(i,vn)),Bi.normalize(),Vo.crossVectors(vn,Bi),r[0]=Bi.x,r[4]=Vo.x,r[8]=vn.x,r[1]=Bi.y,r[5]=Vo.y,r[9]=vn.y,r[2]=Bi.z,r[6]=Vo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],y=i[6],v=i[10],u=i[14],g=i[3],x=i[7],S=i[11],w=i[15],T=r[0],M=r[4],P=r[8],E=r[12],b=r[1],N=r[5],O=r[9],Y=r[13],I=r[2],B=r[6],X=r[10],K=r[14],k=r[3],F=r[7],H=r[11],Z=r[15];return s[0]=a*T+o*b+l*I+c*k,s[4]=a*M+o*N+l*B+c*F,s[8]=a*P+o*O+l*X+c*H,s[12]=a*E+o*Y+l*K+c*Z,s[1]=d*T+f*b+h*I+m*k,s[5]=d*M+f*N+h*B+m*F,s[9]=d*P+f*O+h*X+m*H,s[13]=d*E+f*Y+h*K+m*Z,s[2]=_*T+y*b+v*I+u*k,s[6]=_*M+y*N+v*B+u*F,s[10]=_*P+y*O+v*X+u*H,s[14]=_*E+y*Y+v*K+u*Z,s[3]=g*T+x*b+S*I+w*k,s[7]=g*M+x*N+S*B+w*F,s[11]=g*P+x*O+S*X+w*H,s[15]=g*E+x*Y+S*K+w*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],y=e[7],v=e[11],u=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+y*(+n*l*m-n*c*h+s*a*h-r*a*m+r*c*d-s*l*d)+v*(+n*c*f-n*o*m-s*a*f+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],y=e[13],v=e[14],u=e[15],g=f*v*c-y*h*c+y*l*m-o*v*m-f*l*u+o*h*u,x=_*h*c-d*v*c-_*l*m+a*v*m+d*l*u-a*h*u,S=d*y*c-_*f*c+_*o*m-a*y*m-d*o*u+a*f*u,w=_*f*l-d*y*l-_*o*h+a*y*h+d*o*v-a*f*v,T=n*g+i*x+r*S+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=g*M,e[1]=(y*h*s-f*v*s-y*r*m+i*v*m+f*r*u-i*h*u)*M,e[2]=(o*v*s-y*l*s+y*r*c-i*v*c-o*r*u+i*l*u)*M,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*M,e[4]=x*M,e[5]=(d*v*s-_*h*s+_*r*m-n*v*m-d*r*u+n*h*u)*M,e[6]=(_*l*s-a*v*s-_*r*c+n*v*c+a*r*u-n*l*u)*M,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*m+n*l*m)*M,e[8]=S*M,e[9]=(_*f*s-d*y*s-_*i*m+n*y*m+d*i*u-n*f*u)*M,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*M,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*m-n*o*m)*M,e[12]=w*M,e[13]=(d*y*r-_*f*r+_*i*h-n*y*h-d*i*v+n*f*v)*M,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*v-n*o*v)*M,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*M,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,m=s*d,_=s*f,y=a*d,v=a*f,u=o*f,g=l*c,x=l*d,S=l*f,w=i.x,T=i.y,M=i.z;return r[0]=(1-(y+u))*w,r[1]=(m+S)*w,r[2]=(_-x)*w,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+u))*T,r[6]=(v+g)*T,r[7]=0,r[8]=(_+x)*M,r[9]=(v-g)*M,r[10]=(1-(h+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=os.set(r[0],r[1],r[2]).length();const a=os.set(r[4],r[5],r[6]).length(),o=os.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,d=1/a,f=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=d,Gn.elements[5]*=d,Gn.elements[6]*=d,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=bi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===bi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Kl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=bi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,m=(i+r)*d;let _,y;if(o===bi)_=(a+s)*f,y=-2*f;else if(o===Kl)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const os=new D,Gn=new dt,C1=new D(0,0,0),R1=new D(1,1,1),Bi=new D,Vo=new D,vn=new D,vm=new dt,_m=new $r;class Ac{constructor(e=0,n=0,i=0,r=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P1=0;const xm=new D,ls=new $r,vi=new dt,Go=new D,ya=new D,L1=new D,N1=new $r,ym=new D(1,0,0),Sm=new D(0,1,0),Mm=new D(0,0,1),D1={type:"added"},I1={type:"removed"};class At extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=aa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,n=new Ac,i=new $r,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ge}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return xm.copy(e).applyQuaternion(this.quaternion),this.position.add(xm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Go.copy(e):Go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ya,Go,this.up):vi.lookAt(Go,ya,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(vi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(D1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(I1)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,L1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,N1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new D,_i=new D,Eu=new D,xi=new D,cs=new D,us=new D,Em=new D,wu=new D,Tu=new D,Au=new D;let Wo=!1;class Yn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),_i.subVectors(i,n),Eu.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(Eu),c=_i.dot(_i),d=_i.dot(Eu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,n,i,r,s,a,o,l){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),_i.subVectors(e,n),Wn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Wo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wo=!0),Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;cs.subVectors(r,i),us.subVectors(s,i),wu.subVectors(e,i);const l=cs.dot(wu),c=us.dot(wu);if(l<=0&&c<=0)return n.copy(i);Tu.subVectors(e,r);const d=cs.dot(Tu),f=us.dot(Tu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(cs,a);Au.subVectors(e,s);const m=cs.dot(Au),_=us.dot(Au);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(us,o);const v=d*_-m*f;if(v<=0&&f-d>=0&&m-_>=0)return Em.subVectors(s,r),o=(f-d)/(f-d+(m-_)),n.copy(r).addScaledVector(Em,o);const u=1/(v+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(cs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function bu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=tf(e,1),n=It(n,0,1),i=It(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=bu(a,s,e+1/3),this.g=bu(a,s,e),this.b=bu(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=p_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=mu(e.r),this.g=mu(e.g),this.b=mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(It(Xt.r*255,0,255))*65536+Math.round(It(Xt.g*255,0,255))*256+Math.round(It(Xt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ot){tt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(Xo);const i=Fa(Hi.h,Xo.h,n),r=Fa(Hi.s,Xo.s,n),s=Fa(Hi.l,Xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ke;Ke.NAMES=p_;let U1=0;class oa extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U1++}),this.uuid=aa(),this.name="",this.type="Material",this.blending=js,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=jd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hd&&(i.blendSrc=this.blendSrc),this.blendDst!==jd&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class di extends oa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new D,qo=new Ae;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=um,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==um&&(e.usage=this.usage),e}}class m_ extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class g_ extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class nt extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let k1=0;const Nn=new dt,Cu=new At,ds=new D,_n=new vo,Sa=new vo,Nt=new D;class Ht extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=aa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(u_(e)?g_:m_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new nt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(_n.min,Sa.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,Sa.max),_n.expandByPoint(Nt)):(_n.expandByPoint(Sa.min),_n.expandByPoint(Sa.max))}_n.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Nt.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Nt.add(ds)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let b=0;b<o;b++)c[b]=new D,d[b]=new D;const f=new D,h=new D,m=new D,_=new Ae,y=new Ae,v=new Ae,u=new D,g=new D;function x(b,N,O){f.fromArray(r,b*3),h.fromArray(r,N*3),m.fromArray(r,O*3),_.fromArray(a,b*2),y.fromArray(a,N*2),v.fromArray(a,O*2),h.sub(f),m.sub(f),y.sub(_),v.sub(_);const Y=1/(y.x*v.y-v.x*y.y);isFinite(Y)&&(u.copy(h).multiplyScalar(v.y).addScaledVector(m,-y.y).multiplyScalar(Y),g.copy(m).multiplyScalar(y.x).addScaledVector(h,-v.x).multiplyScalar(Y),c[b].add(u),c[N].add(u),c[O].add(u),d[b].add(g),d[N].add(g),d[O].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,N=S.length;b<N;++b){const O=S[b],Y=O.start,I=O.count;for(let B=Y,X=Y+I;B<X;B+=3)x(i[B+0],i[B+1],i[B+2])}const w=new D,T=new D,M=new D,P=new D;function E(b){M.fromArray(s,b*3),P.copy(M);const N=c[b];w.copy(N),w.sub(M.multiplyScalar(M.dot(N))).normalize(),T.crossVectors(P,N);const Y=T.dot(d[b])<0?-1:1;l[b*4]=w.x,l[b*4+1]=w.y,l[b*4+2]=w.z,l[b*4+3]=Y}for(let b=0,N=S.length;b<N;++b){const O=S[b],Y=O.start,I=O.count;for(let B=Y,X=Y+I;B<X;B+=3)E(i[B+0]),E(i[B+1]),E(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,d=new D,f=new D;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),v=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,v),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let y=0,v=l.length;y<v;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new hi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ht,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new dt,wr=new Tc,$o=new wc,Tm=new D,hs=new D,fs=new D,ps=new D,Ru=new D,Yo=new D,Ko=new Ae,Zo=new Ae,Qo=new Ae,Am=new D,bm=new D,Cm=new D,Jo=new D,el=new D;class xt extends At{constructor(e=new Ht,n=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Ru.fromBufferAttribute(f,e),a?Yo.addScaledVector(Ru,d):Yo.addScaledVector(Ru.sub(n),d))}n.add(Yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!($o.containsPoint(wr.origin)===!1&&(wr.intersectSphere($o,Tm)===null||wr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),wr.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,wr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const v=h[_],u=a[v.materialIndex],g=Math.max(v.start,m.start),x=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let S=g,w=x;S<w;S+=3){const T=o.getX(S),M=o.getX(S+1),P=o.getX(S+2);r=tl(this,u,e,i,c,d,f,T,M,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const g=o.getX(v),x=o.getX(v+1),S=o.getX(v+2);r=tl(this,a,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=h.length;_<y;_++){const v=h[_],u=a[v.materialIndex],g=Math.max(v.start,m.start),x=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let S=g,w=x;S<w;S+=3){const T=S,M=S+1,P=S+2;r=tl(this,u,e,i,c,d,f,T,M,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let v=_,u=y;v<u;v+=3){const g=v,x=v+1,S=v+2;r=tl(this,a,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function O1(t,e,n,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===gr,o),l===null)return null;el.copy(o),el.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(el);return c<n.near||c>n.far?null:{distance:c,point:el.clone(),object:t}}function tl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,hs),t.getVertexPosition(l,fs),t.getVertexPosition(c,ps);const d=O1(t,e,n,i,hs,fs,ps,Jo);if(d){r&&(Ko.fromBufferAttribute(r,o),Zo.fromBufferAttribute(r,l),Qo.fromBufferAttribute(r,c),d.uv=Yn.getInterpolation(Jo,hs,fs,ps,Ko,Zo,Qo,new Ae)),s&&(Ko.fromBufferAttribute(s,o),Zo.fromBufferAttribute(s,l),Qo.fromBufferAttribute(s,c),d.uv1=Yn.getInterpolation(Jo,hs,fs,ps,Ko,Zo,Qo,new Ae),d.uv2=d.uv1),a&&(Am.fromBufferAttribute(a,o),bm.fromBufferAttribute(a,l),Cm.fromBufferAttribute(a,c),d.normal=Yn.getInterpolation(Jo,hs,fs,ps,Am,bm,Cm,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(hs,fs,ps,f.normal),d.face=f}return d}class $t extends Ht{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function _(y,v,u,g,x,S,w,T,M,P,E){const b=S/M,N=w/P,O=S/2,Y=w/2,I=T/2,B=M+1,X=P+1;let K=0,k=0;const F=new D;for(let H=0;H<X;H++){const Z=H*N-Y;for(let J=0;J<B;J++){const $=J*b-O;F[y]=$*g,F[v]=Z*x,F[u]=I,c.push(F.x,F.y,F.z),F[y]=0,F[v]=0,F[u]=T>0?1:-1,d.push(F.x,F.y,F.z),f.push(J/M),f.push(1-H/P),K+=1}}for(let H=0;H<P;H++)for(let Z=0;Z<M;Z++){const J=h+Z+B*H,$=h+Z+B*(H+1),Q=h+(Z+1)+B*(H+1),fe=h+(Z+1)+B*H;l.push(J,$,fe),l.push($,Q,fe),k+=6}o.addGroup(m,k,E),m+=k,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=ta(t[n]);for(const r in i)e[r]=i[r]}return e}function F1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function v_(t){return t.getRenderTarget()===null?t.outputColorSpace:tt.workingColorSpace}const z1={clone:ta,merge:tn};var B1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends oa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B1,this.fragmentShader=H1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=F1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class __ extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends __{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ms=-90,gs=1;class j1 extends At{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new Sn(ms,gs,e,n);s.layers=this.layers,this.add(s);const a=new Sn(ms,gs,e,n);a.layers=this.layers,this.add(a);const o=new Sn(ms,gs,e,n);o.layers=this.layers,this.add(o);const l=new Sn(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new Sn(ms,gs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class x_ extends An{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Qs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(za("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zr?Ot:kn),this.texture=new x_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Un}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $t(5,5,5),s=new Yr({name:"CubemapFromEquirect",uniforms:ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:lr});s.uniforms.tEquirect.value=n;const a=new xt(r,s),o=n.minFilter;return n.minFilter===ro&&(n.minFilter=Un),new j1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Pu=new D,G1=new D,W1=new Ge;class Gi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pu.subVectors(i,n).cross(G1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||W1.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new wc,nl=new D;class rf{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],m=r[8],_=r[9],y=r[10],v=r[11],u=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,v-m,S-u).normalize(),i[1].setComponents(l+s,h+c,v+m,S+u).normalize(),i[2].setComponents(l+a,h+d,v+_,S+g).normalize(),i[3].setComponents(l-a,h-d,v-_,S-g).normalize(),i[4].setComponents(l-o,h-f,v-y,S-x).normalize(),n===bi)i[5].setComponents(l+o,h+f,v+y,S+x).normalize();else if(n===Kl)i[5].setComponents(o,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function X1(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const f=c.array,h=c.usage,m=f.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,f){const h=d.array,m=d._updateRange,_=d.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,v=_.length;y<v;y++){const u=_[y];n?t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(f,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,d));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,d),f.version=c.version}}return{get:a,remove:o,update:l}}class bc extends Ht{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,m=[],_=[],y=[],v=[];for(let u=0;u<d;u++){const g=u*h-a;for(let x=0;x<c;x++){const S=x*f-s;_.push(S,-g,0),y.push(0,0,1),v.push(x/o),v.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const x=g+c*u,S=g+c*(u+1),w=g+1+c*(u+1),T=g+1+c*u;m.push(x,S,T),m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}var q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Q1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EE="gl_FragColor = linearToOutputTexel( gl_FragColor );",wE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,TE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,eT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:q1,alphahash_pars_fragment:$1,alphamap_fragment:Y1,alphamap_pars_fragment:K1,alphatest_fragment:Z1,alphatest_pars_fragment:Q1,aomap_fragment:J1,aomap_pars_fragment:eE,batching_pars_vertex:tE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:rE,bsdfs:sE,iridescence_fragment:aE,bumpmap_pars_fragment:oE,clipping_planes_fragment:lE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:dE,color_fragment:hE,color_pars_fragment:fE,color_pars_vertex:pE,color_vertex:mE,common:gE,cube_uv_reflection_fragment:vE,defaultnormal_vertex:_E,displacementmap_pars_vertex:xE,displacementmap_vertex:yE,emissivemap_fragment:SE,emissivemap_pars_fragment:ME,colorspace_fragment:EE,colorspace_pars_fragment:wE,envmap_fragment:TE,envmap_common_pars_fragment:AE,envmap_pars_fragment:bE,envmap_pars_vertex:CE,envmap_physical_pars_fragment:BE,envmap_vertex:RE,fog_vertex:PE,fog_pars_vertex:LE,fog_fragment:NE,fog_pars_fragment:DE,gradientmap_pars_fragment:IE,lightmap_fragment:UE,lightmap_pars_fragment:kE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:FE,lights_pars_begin:zE,lights_toon_fragment:HE,lights_toon_pars_fragment:jE,lights_phong_fragment:VE,lights_phong_pars_fragment:GE,lights_physical_fragment:WE,lights_physical_pars_fragment:XE,lights_fragment_begin:qE,lights_fragment_maps:$E,lights_fragment_end:YE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:JE,map_fragment:ew,map_pars_fragment:tw,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:sw,morphcolor_vertex:aw,morphnormal_vertex:ow,morphtarget_pars_vertex:lw,morphtarget_vertex:cw,normal_fragment_begin:uw,normal_fragment_maps:dw,normal_pars_fragment:hw,normal_pars_vertex:fw,normal_vertex:pw,normalmap_pars_fragment:mw,clearcoat_normal_fragment_begin:gw,clearcoat_normal_fragment_maps:vw,clearcoat_pars_fragment:_w,iridescence_pars_fragment:xw,opaque_fragment:yw,packing:Sw,premultiplied_alpha_fragment:Mw,project_vertex:Ew,dithering_fragment:ww,dithering_pars_fragment:Tw,roughnessmap_fragment:Aw,roughnessmap_pars_fragment:bw,shadowmap_pars_fragment:Cw,shadowmap_pars_vertex:Rw,shadowmap_vertex:Pw,shadowmask_pars_fragment:Lw,skinbase_vertex:Nw,skinning_pars_vertex:Dw,skinning_vertex:Iw,skinnormal_vertex:Uw,specularmap_fragment:kw,specularmap_pars_fragment:Ow,tonemapping_fragment:Fw,tonemapping_pars_fragment:zw,transmission_fragment:Bw,transmission_pars_fragment:Hw,uv_pars_fragment:jw,uv_pars_vertex:Vw,uv_vertex:Gw,worldpos_vertex:Ww,background_vert:Xw,background_frag:qw,backgroundCube_vert:$w,backgroundCube_frag:Yw,cube_vert:Kw,cube_frag:Zw,depth_vert:Qw,depth_frag:Jw,distanceRGBA_vert:eT,distanceRGBA_frag:tT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:rT,linedashed_frag:sT,meshbasic_vert:aT,meshbasic_frag:oT,meshlambert_vert:lT,meshlambert_frag:cT,meshmatcap_vert:uT,meshmatcap_frag:dT,meshnormal_vert:hT,meshnormal_frag:fT,meshphong_vert:pT,meshphong_frag:mT,meshphysical_vert:gT,meshphysical_frag:vT,meshtoon_vert:_T,meshtoon_frag:xT,points_vert:yT,points_frag:ST,shadow_vert:MT,shadow_frag:ET,sprite_vert:wT,sprite_frag:TT},he={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},oi={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};oi.physical={uniforms:tn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const il={r:0,b:0,g:0};function AT(t,e,n,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function _(v,u){let g=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?n:e).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Mc)?(d===void 0&&(d=new xt(new $t(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:ta(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=tt.getTransfer(x.colorSpace)!==ot,(f!==x||h!==x.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=x,h=x.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new xt(new bc(2,2),new Yr({name:"BackgroundMaterial",uniforms:ta(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function y(v,u){v.getRGB(il,v_(t)),i.buffers.color.setClear(il.r,il.g,il.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(v,u=1){o.set(v),l=u,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,y(o,l)},render:_}}function bT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=v(null);let c=l,d=!1;function f(I,B,X,K,k){let F=!1;if(a){const H=y(K,X,B);c!==H&&(c=H,m(c.object)),F=u(I,K,X,k),F&&g(I,K,X,k)}else{const H=B.wireframe===!0;(c.geometry!==K.id||c.program!==X.id||c.wireframe!==H)&&(c.geometry=K.id,c.program=X.id,c.wireframe=H,F=!0)}k!==null&&n.update(k,t.ELEMENT_ARRAY_BUFFER),(F||d)&&(d=!1,P(I,B,X,K),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(k).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function y(I,B,X){const K=X.wireframe===!0;let k=o[I.id];k===void 0&&(k={},o[I.id]=k);let F=k[B.id];F===void 0&&(F={},k[B.id]=F);let H=F[K];return H===void 0&&(H=v(h()),F[K]=H),H}function v(I){const B=[],X=[],K=[];for(let k=0;k<r;k++)B[k]=0,X[k]=0,K[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:K,object:I,attributes:{},index:null}}function u(I,B,X,K){const k=c.attributes,F=B.attributes;let H=0;const Z=X.getAttributes();for(const J in Z)if(Z[J].location>=0){const Q=k[J];let fe=F[J];if(fe===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),Q===void 0||Q.attribute!==fe||fe&&Q.data!==fe.data)return!0;H++}return c.attributesNum!==H||c.index!==K}function g(I,B,X,K){const k={},F=B.attributes;let H=0;const Z=X.getAttributes();for(const J in Z)if(Z[J].location>=0){let Q=F[J];Q===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));const fe={};fe.attribute=Q,Q&&Q.data&&(fe.data=Q.data),k[J]=fe,H++}c.attributes=k,c.attributesNum=H,c.index=K}function x(){const I=c.newAttributes;for(let B=0,X=I.length;B<X;B++)I[B]=0}function S(I){w(I,0)}function w(I,B){const X=c.newAttributes,K=c.enabledAttributes,k=c.attributeDivisors;X[I]=1,K[I]===0&&(t.enableVertexAttribArray(I),K[I]=1),k[I]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),k[I]=B)}function T(){const I=c.newAttributes,B=c.enabledAttributes;for(let X=0,K=B.length;X<K;X++)B[X]!==I[X]&&(t.disableVertexAttribArray(X),B[X]=0)}function M(I,B,X,K,k,F,H){H===!0?t.vertexAttribIPointer(I,B,X,k,F):t.vertexAttribPointer(I,B,X,K,k,F)}function P(I,B,X,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=K.attributes,F=X.getAttributes(),H=B.defaultAttributeValues;for(const Z in F){const J=F[Z];if(J.location>=0){let $=k[Z];if($===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const Q=$.normalized,fe=$.itemSize,_e=n.get($);if(_e===void 0)continue;const xe=_e.buffer,De=_e.type,Ie=_e.bytesPerElement,Ce=i.isWebGL2===!0&&(De===t.INT||De===t.UNSIGNED_INT||$.gpuType===e_);if($.isInterleavedBufferAttribute){const qe=$.data,j=qe.stride,Rt=$.offset;if(qe.isInstancedInterleavedBuffer){for(let Te=0;Te<J.locationSize;Te++)w(J.location+Te,qe.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Te=0;Te<J.locationSize;Te++)S(J.location+Te);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Te=0;Te<J.locationSize;Te++)M(J.location+Te,fe/J.locationSize,De,Q,j*Ie,(Rt+fe/J.locationSize*Te)*Ie,Ce)}else{if($.isInstancedBufferAttribute){for(let qe=0;qe<J.locationSize;qe++)w(J.location+qe,$.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let qe=0;qe<J.locationSize;qe++)S(J.location+qe);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let qe=0;qe<J.locationSize;qe++)M(J.location+qe,fe/J.locationSize,De,Q,fe*Ie,fe/J.locationSize*qe*Ie,Ce)}}else if(H!==void 0){const Q=H[Z];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(J.location,Q);break;case 3:t.vertexAttrib3fv(J.location,Q);break;case 4:t.vertexAttrib4fv(J.location,Q);break;default:t.vertexAttrib1fv(J.location,Q)}}}}T()}function E(){O();for(const I in o){const B=o[I];for(const X in B){const K=B[X];for(const k in K)_(K[k].object),delete K[k];delete B[X]}delete o[I]}}function b(I){if(o[I.id]===void 0)return;const B=o[I.id];for(const X in B){const K=B[X];for(const k in K)_(K[k].object),delete K[k];delete B[X]}delete o[I.id]}function N(I){for(const B in o){const X=o[B];if(X[I.id]===void 0)continue;const K=X[I.id];for(const k in K)_(K[k].object),delete K[k];delete X[I.id]}}function O(){Y(),d=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:Y,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function CT(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,f){t.drawArrays(s,d,f),n.update(f,s,1)}function l(d,f,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,d,f,h),n.update(f,s,h)}function c(d,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(d[_],f[_]);else{m.multiDrawArraysWEBGL(s,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function RT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=a||e.has("OES_texture_float"),w=x&&S,T=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:v,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:T}}function PT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Gi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,y=f.clipIntersection,v=f.clipShadows,u=t.get(f);if(!r||_===null||_.length===0||s&&!v)s?d(null):c();else{const g=s?0:i,x=g*4;let S=u.clippingState||null;l.value=S,S=d(_,h,x,m);for(let w=0;w!==x;++w)S[w]=n[w];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const y=f!==null?f.length:0;let v=null;if(y!==0){if(v=l.value,_!==!0||v===null){const u=m+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<u)&&(v=new Float32Array(u));for(let x=0,S=m;x!==y;++x,S+=4)a.copy(f[x]).applyMatrix4(g,o),a.normal.toArray(v,S),v[S+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}function LT(t){let e=new WeakMap;function n(a,o){return o===Vd?a.mapping=Qs:o===Gd&&(a.mapping=Js),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Vd||o===Gd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new V1(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class S_ extends __{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,Rm=[.125,.215,.35,.446,.526,.582],Pr=20,Lu=new S_,Pm=new Ke;let Nu=null,Du=0,Iu=0;const Cr=(1+Math.sqrt(5))/2,vs=1/Cr,Lm=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Cr,vs),new D(0,Cr,-vs),new D(vs,0,Cr),new D(-vs,0,Cr),new D(Cr,vs,0),new D(-Cr,vs,0)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Nu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu,Du,Iu),e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:so,format:Zn,colorSpace:Di,depthBuffer:!1},r=Dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NT(s)),this._blurMaterial=DT(s,e,n)}return r}_compileMaterial(e){const n=new xt(this._lodPlanes[0],e);this._renderer.compile(n,Lu)}_sceneToCubeUV(e,n,i,r){const o=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Pm),d.toneMapping=cr,d.autoClear=!1;const m=new di({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new xt(new $t,m);let y=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,y=!0):(m.color.copy(Pm),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;rl(r,g*x,u>2?x:0,x,x),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qs||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new xt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Lu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lm[(r-1)%Lm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new xt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),y=s/_,v=isFinite(s)?1+Math.floor(d*y):Pr;v>Pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Pr}`);const u=[];let g=0;for(let M=0;M<Pr;++M){const P=M/y,E=Math.exp(-P*P/2);u.push(E),M===0?g+=E:M<v&&(g+=2*E)}for(let M=0;M<u.length;M++)u[M]=u[M]/g;h.envMap.value=e.texture,h.samples.value=v,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const S=this._sizeLods[r],w=3*S*(r>x-Ds?r-x+Ds:0),T=4*(this._cubeSize-S);rl(n,w,T,3*S,2*S),l.setRenderTarget(n),l.render(f,Lu)}}function NT(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+Rm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Ds?l=Rm[a-t+Ds-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,y=3,v=2,u=1,g=new Float32Array(y*_*m),x=new Float32Array(v*_*m),S=new Float32Array(u*_*m);for(let T=0;T<m;T++){const M=T%3*2/3-1,P=T>2?0:-1,E=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];g.set(E,y*_*T),x.set(h,v*_*T);const b=[T,T,T,T,T,T];S.set(b,u*_*T)}const w=new Ht;w.setAttribute("position",new hi(g,y)),w.setAttribute("uv",new hi(x,v)),w.setAttribute("faceIndex",new hi(S,u)),e.push(w),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dm(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=Mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DT(t,e,n){const i=new Float32Array(Pr),r=new D(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Im(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Um(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function IT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vd||l===Gd,d=l===Qs||l===Js;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||d&&f&&r(f)){n===null&&(n=new Nm(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function UT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kT(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let v=0,u=y.length;v<u;v++)e.remove(y[v])}h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const y=m[_];for(let v=0,u=y.length;v<u;v++)e.update(y[v],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let x=0,S=g.length;x<S;x+=3){const w=g[x+0],T=g[x+1],M=g[x+2];h.push(w,T,T,M,M,w)}}else if(_!==void 0){const g=_.array;y=_.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const w=x+0,T=x+1,M=x+2;h.push(w,T,T,M,M,w)}}else return;const v=new(u_(h)?g_:m_)(h,1);v.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,v)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function OT(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function f(m,_,y){if(y===0)return;let v,u;if(r)v=t,u="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[u](s,_,o,m*l,y),n.update(_,s,y)}function h(m,_,y){if(y===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let u=0;u<y;u++)this.render(m[u]/l,_[u]);else{v.multiDrawElementsWEBGL(s,_,0,o,m,0,y);let u=0;for(let g=0;g<y;g++)u+=_[g];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=f,this.renderMultiDraw=h}function FT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zT(t,e){return t[0]-e[0]}function BT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function HT(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let v=s.get(d);if(v===void 0||v.count!==y){let B=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",B)};var m=B;v!==void 0&&v.texture.dispose();const x=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,T=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let E=0;x===!0&&(E=1),S===!0&&(E=2),w===!0&&(E=3);let b=d.attributes.position.count*E,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const O=new Float32Array(b*N*4*y),Y=new f_(O,b,N,y);Y.type=Zi,Y.needsUpdate=!0;const I=E*4;for(let X=0;X<y;X++){const K=T[X],k=M[X],F=P[X],H=b*N*4*X;for(let Z=0;Z<K.count;Z++){const J=Z*I;x===!0&&(a.fromBufferAttribute(K,Z),O[H+J+0]=a.x,O[H+J+1]=a.y,O[H+J+2]=a.z,O[H+J+3]=0),S===!0&&(a.fromBufferAttribute(k,Z),O[H+J+4]=a.x,O[H+J+5]=a.y,O[H+J+6]=a.z,O[H+J+7]=0),w===!0&&(a.fromBufferAttribute(F,Z),O[H+J+8]=a.x,O[H+J+9]=a.y,O[H+J+10]=a.z,O[H+J+11]=F.itemSize===4?a.w:1)}}v={count:y,texture:Y,size:new Ae(b,N)},s.set(d,v),d.addEventListener("dispose",B)}let u=0;for(let x=0;x<h.length;x++)u+=h[x];const g=d.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const _=h===void 0?0:h.length;let y=i[d.id];if(y===void 0||y.length!==_){y=[];for(let S=0;S<_;S++)y[S]=[S,0];i[d.id]=y}for(let S=0;S<_;S++){const w=y[S];w[0]=S,w[1]=h[S]}y.sort(BT);for(let S=0;S<8;S++)S<_&&y[S][1]?(o[S][0]=y[S][0],o[S][1]=y[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(zT);const v=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const w=o[S],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(v&&d.getAttribute("morphTarget"+S)!==v[T]&&d.setAttribute("morphTarget"+S,v[T]),u&&d.getAttribute("morphNormal"+S)!==u[T]&&d.setAttribute("morphNormal"+S,u[T]),r[S]=M,g+=M):(v&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const x=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",x),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function jT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class M_ extends An{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Fr,d!==Fr&&d!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Fr&&(i=Ki),i===void 0&&d===ea&&(i=Or),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const E_=new An,w_=new M_(1,1);w_.compareFunction=c_;const T_=new f_,A_=new A1,b_=new x_,km=[],Om=[],Fm=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function la(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=km[r];if(s===void 0&&(s=new Float32Array(r),km[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cc(t,e){let n=Om[e];n===void 0&&(n=new Int32Array(e),Om[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function VT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),Ct(n,i)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;zm.set(i),t.uniformMatrix3fv(this.addr,!1,zm),Ct(n,i)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(bt(n,i))return;Fm.set(i),t.uniformMatrix4fv(this.addr,!1,Fm),Ct(n,i)}}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function eA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?w_:E_;n.setTexture2D(e||s,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||A_,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||b_,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||T_,r)}function lA(t){switch(t){case 5126:return VT;case 35664:return GT;case 35665:return WT;case 35666:return XT;case 35674:return qT;case 35675:return $T;case 35676:return YT;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return oA}}function cA(t,e){t.uniform1fv(this.addr,e)}function uA(t,e){const n=la(e,this.size,2);t.uniform2fv(this.addr,n)}function dA(t,e){const n=la(e,this.size,3);t.uniform3fv(this.addr,n)}function hA(t,e){const n=la(e,this.size,4);t.uniform4fv(this.addr,n)}function fA(t,e){const n=la(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pA(t,e){const n=la(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mA(t,e){const n=la(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gA(t,e){t.uniform1iv(this.addr,e)}function vA(t,e){t.uniform2iv(this.addr,e)}function _A(t,e){t.uniform3iv(this.addr,e)}function xA(t,e){t.uniform4iv(this.addr,e)}function yA(t,e){t.uniform1uiv(this.addr,e)}function SA(t,e){t.uniform2uiv(this.addr,e)}function MA(t,e){t.uniform3uiv(this.addr,e)}function EA(t,e){t.uniform4uiv(this.addr,e)}function wA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||E_,s[a])}function TA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||A_,s[a])}function AA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||b_,s[a])}function bA(t,e,n){const i=this.cache,r=e.length,s=Cc(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||T_,s[a])}function CA(t){switch(t){case 5126:return cA;case 35664:return uA;case 35665:return dA;case 35666:return hA;case 35674:return fA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return vA;case 35668:case 35672:return _A;case 35669:case 35673:return xA;case 5125:return yA;case 36294:return SA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return bA}}class RA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lA(n.type)}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=CA(n.type)}}class LA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function Hm(t,e){t.seq.push(e),t.map[e.id]=e}function NA(t,e,n){const i=t.name,r=i.length;for(Uu.lastIndex=0;;){const s=Uu.exec(i),a=Uu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hm(n,c===void 0?new RA(o,t,e):new PA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new LA(o),Hm(n,f)),n=f}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);NA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function jm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DA=37297;let IA=0;function UA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function kA(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Yl&&n===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&n===Yl&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case Ec:return[i,"LinearTransferOETF"];case Ot:case ef:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UA(t.getShaderSource(e),a)}else return r}function OA(t,e){const n=kA(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function FA(t,e){let n;switch(e){case kM:n="Linear";break;case OM:n="Reinhard";break;case FM:n="OptimizedCineon";break;case zM:n="ACESFilmic";break;case HM:n="AgX";break;case BM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function zA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function BA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Is).join(`
`)}function HA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Is(t){return t!==""}function Gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(t){return t.replace(VA,WA)}const GA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WA(t,e){let n=ze[e];if(n===void 0){const i=GA.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yd(n)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(XA,qA)}function qA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $A(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function YA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Qs:case Js:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function ZA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Qv:e="ENVMAP_BLENDING_MULTIPLY";break;case IM:e="ENVMAP_BLENDING_MIX";break;case UM:e="ENVMAP_BLENDING_ADD";break}return e}function QA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function JA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$A(n),c=YA(n),d=KA(n),f=ZA(n),h=QA(n),m=n.isWebGL2?"":zA(n),_=BA(n),y=HA(s),v=r.createProgram();let u,g,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Is).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Is).join(`
`),g.length>0&&(g+=`
`)):(u=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),g=[m,qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?ze.tonemapping_pars_fragment:"",n.toneMapping!==cr?FA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,OA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),a=Yd(a),a=Gm(a,n),a=Wm(a,n),o=Yd(o),o=Gm(o,n),o=Wm(o,n),a=Xm(a),o=Xm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+u+a,w=x+g+o,T=jm(r,r.VERTEX_SHADER,S),M=jm(r,r.FRAGMENT_SHADER,w);r.attachShader(v,T),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(O){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),I=r.getShaderInfoLog(T).trim(),B=r.getShaderInfoLog(M).trim();let X=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,T,M);else{const k=Vm(r,T,"vertex"),F=Vm(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+k+`
`+F)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(I===""||B==="")&&(K=!1);K&&(O.diagnostics={runnable:X,programLog:Y,vertexShader:{log:I,prefix:u},fragmentShader:{log:B,prefix:g}})}r.deleteShader(T),r.deleteShader(M),E=new xl(r,v),b=jA(r,v)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,DA)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=M,this}let eb=0;class tb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nb(e),n.set(e,i)),i}}class nb{constructor(e){this.id=eb++,this.code=e,this.usedTimes=0}}function ib(t,e,n,i,r,s,a){const o=new nf,l=new tb,c=[],d=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function v(E,b,N,O,Y){const I=O.fog,B=Y.geometry,X=E.isMeshStandardMaterial?O.environment:null,K=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),k=K&&K.mapping===Mc?K.image.height:null,F=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const H=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Z=H!==void 0?H.length:0;let J=0;B.morphAttributes.position!==void 0&&(J=1),B.morphAttributes.normal!==void 0&&(J=2),B.morphAttributes.color!==void 0&&(J=3);let $,Q,fe,_e;if(F){const Qt=oi[F];$=Qt.vertexShader,Q=Qt.fragmentShader}else $=E.vertexShader,Q=E.fragmentShader,l.update(E),fe=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const xe=t.getRenderTarget(),De=Y.isInstancedMesh===!0,Ie=Y.isBatchedMesh===!0,Ce=!!E.map,qe=!!E.matcap,j=!!K,Rt=!!E.aoMap,Te=!!E.lightMap,Le=!!E.bumpMap,ye=!!E.normalMap,st=!!E.displacementMap,Ue=!!E.emissiveMap,R=!!E.metalnessMap,A=!!E.roughnessMap,V=E.anisotropy>0,se=E.clearcoat>0,ne=E.iridescence>0,ie=E.sheen>0,Se=E.transmission>0,pe=V&&!!E.anisotropyMap,ve=se&&!!E.clearcoatMap,Re=se&&!!E.clearcoatNormalMap,Oe=se&&!!E.clearcoatRoughnessMap,te=ne&&!!E.iridescenceMap,$e=ne&&!!E.iridescenceThicknessMap,L=ie&&!!E.sheenColorMap,ee=ie&&!!E.sheenRoughnessMap,de=!!E.specularMap,ae=!!E.specularColorMap,Me=!!E.specularIntensityMap,je=Se&&!!E.transmissionMap,Ye=Se&&!!E.thicknessMap,Be=!!E.gradientMap,ue=!!E.alphaMap,U=E.alphaTest>0,oe=!!E.alphaHash,le=!!E.extensions,be=!!B.attributes.uv1,Ee=!!B.attributes.uv2,Qe=!!B.attributes.uv3;let Je=cr;return E.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Je=t.toneMapping),{isWebGL2:d,shaderID:F,shaderType:E.type,shaderName:E.name,vertexShader:$,fragmentShader:Q,defines:E.defines,customVertexShaderID:fe,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ie,instancing:De,instancingColor:De&&Y.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Di,map:Ce,matcap:qe,envMap:j,envMapMode:j&&K.mapping,envMapCubeUVHeight:k,aoMap:Rt,lightMap:Te,bumpMap:Le,normalMap:ye,displacementMap:h&&st,emissiveMap:Ue,normalMapObjectSpace:ye&&E.normalMapType===JM,normalMapTangentSpace:ye&&E.normalMapType===l_,metalnessMap:R,roughnessMap:A,anisotropy:V,anisotropyMap:pe,clearcoat:se,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:Oe,iridescence:ne,iridescenceMap:te,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:L,sheenRoughnessMap:ee,specularMap:de,specularColorMap:ae,specularIntensityMap:Me,transmission:Se,transmissionMap:je,thicknessMap:Ye,gradientMap:Be,opaque:E.transparent===!1&&E.blending===js,alphaMap:ue,alphaTest:U,alphaHash:oe,combine:E.combine,mapUv:Ce&&y(E.map.channel),aoMapUv:Rt&&y(E.aoMap.channel),lightMapUv:Te&&y(E.lightMap.channel),bumpMapUv:Le&&y(E.bumpMap.channel),normalMapUv:ye&&y(E.normalMap.channel),displacementMapUv:st&&y(E.displacementMap.channel),emissiveMapUv:Ue&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:A&&y(E.roughnessMap.channel),anisotropyMapUv:pe&&y(E.anisotropyMap.channel),clearcoatMapUv:ve&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Re&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:L&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ee&&y(E.sheenRoughnessMap.channel),specularMapUv:de&&y(E.specularMap.channel),specularColorMapUv:ae&&y(E.specularColorMap.channel),specularIntensityMapUv:Me&&y(E.specularIntensityMap.channel),transmissionMapUv:je&&y(E.transmissionMap.channel),thicknessMapUv:Ye&&y(E.thicknessMap.channel),alphaMapUv:ue&&y(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:Ee,vertexUv3s:Qe,pointsUvs:Y.isPoints===!0&&!!B.attributes.uv&&(Ce||ue),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ce&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wi,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:le&&E.extensions.derivatives===!0,extensionFragDepth:le&&E.extensions.fragDepth===!0,extensionDrawBuffers:le&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const N in E.defines)b.push(N),b.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(g(b,E),x(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const b=_[E.type];let N;if(b){const O=oi[b];N=z1.clone(O.uniforms)}else N=E.uniforms;return N}function w(E,b){let N;for(let O=0,Y=c.length;O<Y;O++){const I=c[O];if(I.cacheKey===b){N=I,++N.usedTimes;break}}return N===void 0&&(N=new JA(t,b,E,s),c.push(N)),N}function T(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function M(E){l.remove(E)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:S,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:P}}function rb(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function sb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function $m(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ym(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,m,_,y,v){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:v},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=y,u.group=v),e++,u}function o(f,h,m,_,y,v){const u=a(f,h,m,_,y,v);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,h,m,_,y,v){const u=a(f,h,m,_,y,v);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||sb),i.length>1&&i.sort(h||$m),r.length>1&&r.sort(h||$m)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function ab(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ym,t.set(i,[a])):r>=s.length?(a=new Ym,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ob(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ke};break;case"SpotLight":n={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function lb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cb=0;function ub(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function db(t,e){const n=new ob,i=lb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new D);const s=new D,a=new dt,o=new dt;function l(d,f){let h=0,m=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let y=0,v=0,u=0,g=0,x=0,S=0,w=0,T=0,M=0,P=0,E=0;d.sort(ub);const b=f===!0?Math.PI:1;for(let O=0,Y=d.length;O<Y;O++){const I=d[O],B=I.color,X=I.intensity,K=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*X*b,m+=B.g*X*b,_+=B.b*X*b;else if(I.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(I.sh.coefficients[F],X);E++}else if(I.isDirectionalLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const H=I.shadow,Z=i.get(I);Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,r.directionalShadow[y]=Z,r.directionalShadowMap[y]=k,r.directionalShadowMatrix[y]=I.shadow.matrix,S++}r.directional[y]=F,y++}else if(I.isSpotLight){const F=n.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(B).multiplyScalar(X*b),F.distance=K,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,r.spot[u]=F;const H=I.shadow;if(I.map&&(r.spotLightMap[M]=I.map,M++,H.updateMatrices(I),I.castShadow&&P++),r.spotLightMatrix[u]=H.matrix,I.castShadow){const Z=i.get(I);Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,r.spotShadow[u]=Z,r.spotShadowMap[u]=k,T++}u++}else if(I.isRectAreaLight){const F=n.get(I);F.color.copy(B).multiplyScalar(X),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=F,g++}else if(I.isPointLight){const F=n.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity*b),F.distance=I.distance,F.decay=I.decay,I.castShadow){const H=I.shadow,Z=i.get(I);Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,r.pointShadow[v]=Z,r.pointShadowMap[v]=k,r.pointShadowMatrix[v]=I.shadow.matrix,w++}r.point[v]=F,v++}else if(I.isHemisphereLight){const F=n.get(I);F.skyColor.copy(I.color).multiplyScalar(X*b),F.groundColor.copy(I.groundColor).multiplyScalar(X*b),r.hemi[x]=F,x++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const N=r.hash;(N.directionalLength!==y||N.pointLength!==v||N.spotLength!==u||N.rectAreaLength!==g||N.hemiLength!==x||N.numDirectionalShadows!==S||N.numPointShadows!==w||N.numSpotShadows!==T||N.numSpotMaps!==M||N.numLightProbes!==E)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=g,r.point.length=v,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=E,N.directionalLength=y,N.pointLength=v,N.spotLength=u,N.rectAreaLength=g,N.hemiLength=x,N.numDirectionalShadows=S,N.numPointShadows=w,N.numSpotShadows=T,N.numSpotMaps=M,N.numLightProbes=E,r.version=cb++)}function c(d,f){let h=0,m=0,_=0,y=0,v=0;const u=f.matrixWorldInverse;for(let g=0,x=d.length;g<x;g++){const S=d[g];if(S.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),h++}else if(S.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const w=r.rectArea[y];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(S.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const w=r.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(u),v++}}}return{setup:l,setupView:c,state:r}}function Km(t,e){const n=new db(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hb(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Km(t,e),n.set(s,[l])):a>=o.length?(l=new Km(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class fb extends oa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pb extends oa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vb(t,e,n){let i=new rf;const r=new Ae,s=new Ae,a=new ut,o=new fb({depthPacking:QM}),l=new pb,c={},d=n.maxTextureSize,f={[gr]:mn,[mn]:gr,[wi]:wi},h=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ht;_.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xt(_,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kv;let u=this.type;this.render=function(T,M,P){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),b=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(lr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=u!==yi&&this.type===yi,I=u===yi&&this.type!==yi;for(let B=0,X=T.length;B<X;B++){const K=T[B],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const F=k.getFrameExtents();if(r.multiply(F),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,k.mapSize.y=s.y)),k.map===null||Y===!0||I===!0){const Z=this.type!==yi?{minFilter:rn,magFilter:rn}:{};k.map!==null&&k.map.dispose(),k.map=new qr(r.x,r.y,Z),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}t.setRenderTarget(k.map),t.clear();const H=k.getViewportCount();for(let Z=0;Z<H;Z++){const J=k.getViewport(Z);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),O.viewport(a),k.updateMatrices(K,Z),i=k.getFrustum(),S(M,P,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===yi&&g(k,P),k.needsUpdate=!1}u=this.type,v.needsUpdate=!1,t.setRenderTarget(E,b,N)};function g(T,M){const P=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(M,null,P,h,y,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(M,null,P,m,y,null)}function x(T,M,P,E){let b=null;const N=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)b=N;else if(b=P.isPointLight===!0?l:o,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const O=b.uuid,Y=M.uuid;let I=c[O];I===void 0&&(I={},c[O]=I);let B=I[Y];B===void 0&&(B=b.clone(),I[Y]=B,M.addEventListener("dispose",w)),b=B}if(b.visible=M.visible,b.wireframe=M.wireframe,E===yi?b.side=M.shadowSide!==null?M.shadowSide:M.side:b.side=M.shadowSide!==null?M.shadowSide:f[M.side],b.alphaMap=M.alphaMap,b.alphaTest=M.alphaTest,b.map=M.map,b.clipShadows=M.clipShadows,b.clippingPlanes=M.clippingPlanes,b.clipIntersection=M.clipIntersection,b.displacementMap=M.displacementMap,b.displacementScale=M.displacementScale,b.displacementBias=M.displacementBias,b.wireframeLinewidth=M.wireframeLinewidth,b.linewidth=M.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=t.properties.get(b);O.light=P}return b}function S(T,M,P,E,b){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===yi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),I=T.material;if(Array.isArray(I)){const B=Y.groups;for(let X=0,K=B.length;X<K;X++){const k=B[X],F=I[k.materialIndex];if(F&&F.visible){const H=x(T,F,E,b);T.onBeforeShadow(t,T,M,P,Y,H,k),t.renderBufferDirect(P,null,Y,H,T,k),T.onAfterShadow(t,T,M,P,Y,H,k)}}}else if(I.visible){const B=x(T,I,E,b);T.onBeforeShadow(t,T,M,P,Y,B,null),t.renderBufferDirect(P,null,Y,B,T,null),T.onAfterShadow(t,T,M,P,Y,B,null)}}const O=T.children;for(let Y=0,I=O.length;Y<I;Y++)S(O[Y],M,P,E,b)}function w(T){T.target.removeEventListener("dispose",w);for(const P in c){const E=c[P],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function _b(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const oe=new ut;let le=null;const be=new ut(0,0,0,0);return{setMask:function(Ee){le!==Ee&&!U&&(t.colorMask(Ee,Ee,Ee,Ee),le=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,Qe,Je,Pt,Qt){Qt===!0&&(Ee*=Pt,Qe*=Pt,Je*=Pt),oe.set(Ee,Qe,Je,Pt),be.equals(oe)===!1&&(t.clearColor(Ee,Qe,Je,Pt),be.copy(oe))},reset:function(){U=!1,le=null,be.set(-1,0,0,0)}}}function s(){let U=!1,oe=null,le=null,be=null;return{setTest:function(Ee){Ee?Ie(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Ee){oe!==Ee&&!U&&(t.depthMask(Ee),oe=Ee)},setFunc:function(Ee){if(le!==Ee){switch(Ee){case bM:t.depthFunc(t.NEVER);break;case CM:t.depthFunc(t.ALWAYS);break;case RM:t.depthFunc(t.LESS);break;case Xl:t.depthFunc(t.LEQUAL);break;case PM:t.depthFunc(t.EQUAL);break;case LM:t.depthFunc(t.GEQUAL);break;case NM:t.depthFunc(t.GREATER);break;case DM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Ee}},setLocked:function(Ee){U=Ee},setClear:function(Ee){be!==Ee&&(t.clearDepth(Ee),be=Ee)},reset:function(){U=!1,oe=null,le=null,be=null}}}function a(){let U=!1,oe=null,le=null,be=null,Ee=null,Qe=null,Je=null,Pt=null,Qt=null;return{setTest:function(it){U||(it?Ie(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(it){oe!==it&&!U&&(t.stencilMask(it),oe=it)},setFunc:function(it,Jt,ii){(le!==it||be!==Jt||Ee!==ii)&&(t.stencilFunc(it,Jt,ii),le=it,be=Jt,Ee=ii)},setOp:function(it,Jt,ii){(Qe!==it||Je!==Jt||Pt!==ii)&&(t.stencilOp(it,Jt,ii),Qe=it,Je=Jt,Pt=ii)},setLocked:function(it){U=it},setClear:function(it){Qt!==it&&(t.clearStencil(it),Qt=it)},reset:function(){U=!1,oe=null,le=null,be=null,Ee=null,Qe=null,Je=null,Pt=null,Qt=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,y=[],v=null,u=!1,g=null,x=null,S=null,w=null,T=null,M=null,P=null,E=new Ke(0,0,0),b=0,N=!1,O=null,Y=null,I=null,B=null,X=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,F=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=F>=1):H.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=F>=2);let Z=null,J={};const $=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),fe=new ut().fromArray($),_e=new ut().fromArray(Q);function xe(U,oe,le,be){const Ee=new Uint8Array(4),Qe=t.createTexture();t.bindTexture(U,Qe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<le;Je++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,be,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(oe+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return Qe}const De={};De[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),De[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),De[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(t.DEPTH_TEST),l.setFunc(Xl),Ue(!1),R(Np),Ie(t.CULL_FACE),ye(lr);function Ie(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Ce(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function qe(U,oe){return m[U]!==oe?(t.bindFramebuffer(U,oe),m[U]=oe,i&&(U===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=oe),U===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function j(U,oe){let le=y,be=!1;if(U)if(le=_.get(oe),le===void 0&&(le=[],_.set(oe,le)),U.isWebGLMultipleRenderTargets){const Ee=U.texture;if(le.length!==Ee.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Qe=0,Je=Ee.length;Qe<Je;Qe++)le[Qe]=t.COLOR_ATTACHMENT0+Qe;le.length=Ee.length,be=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,be=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,be=!0);be&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Rt(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const Te={[Rr]:t.FUNC_ADD,[hM]:t.FUNC_SUBTRACT,[fM]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[Up]=t.MIN,Te[kp]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(Te[Up]=U.MIN_EXT,Te[kp]=U.MAX_EXT)}const Le={[pM]:t.ZERO,[mM]:t.ONE,[gM]:t.SRC_COLOR,[Hd]:t.SRC_ALPHA,[MM]:t.SRC_ALPHA_SATURATE,[yM]:t.DST_COLOR,[_M]:t.DST_ALPHA,[vM]:t.ONE_MINUS_SRC_COLOR,[jd]:t.ONE_MINUS_SRC_ALPHA,[SM]:t.ONE_MINUS_DST_COLOR,[xM]:t.ONE_MINUS_DST_ALPHA,[EM]:t.CONSTANT_COLOR,[wM]:t.ONE_MINUS_CONSTANT_COLOR,[TM]:t.CONSTANT_ALPHA,[AM]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(U,oe,le,be,Ee,Qe,Je,Pt,Qt,it){if(U===lr){u===!0&&(Ce(t.BLEND),u=!1);return}if(u===!1&&(Ie(t.BLEND),u=!0),U!==dM){if(U!==g||it!==N){if((x!==Rr||T!==Rr)&&(t.blendEquation(t.FUNC_ADD),x=Rr,T=Rr),it)switch(U){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,w=null,M=null,P=null,E.set(0,0,0),b=0,g=U,N=it}return}Ee=Ee||oe,Qe=Qe||le,Je=Je||be,(oe!==x||Ee!==T)&&(t.blendEquationSeparate(Te[oe],Te[Ee]),x=oe,T=Ee),(le!==S||be!==w||Qe!==M||Je!==P)&&(t.blendFuncSeparate(Le[le],Le[be],Le[Qe],Le[Je]),S=le,w=be,M=Qe,P=Je),(Pt.equals(E)===!1||Qt!==b)&&(t.blendColor(Pt.r,Pt.g,Pt.b,Qt),E.copy(Pt),b=Qt),g=U,N=!1}function st(U,oe){U.side===wi?Ce(t.CULL_FACE):Ie(t.CULL_FACE);let le=U.side===mn;oe&&(le=!le),Ue(le),U.blending===js&&U.transparent===!1?ye(lr):ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const be=U.stencilWrite;c.setTest(be),be&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){O!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),O=U)}function R(U){U!==cM?(Ie(t.CULL_FACE),U!==Y&&(U===Np?t.cullFace(t.BACK):U===uM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),Y=U}function A(U){U!==I&&(k&&t.lineWidth(U),I=U)}function V(U,oe,le){U?(Ie(t.POLYGON_OFFSET_FILL),(B!==oe||X!==le)&&(t.polygonOffset(oe,le),B=oe,X=le)):Ce(t.POLYGON_OFFSET_FILL)}function se(U){U?Ie(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function ne(U){U===void 0&&(U=t.TEXTURE0+K-1),Z!==U&&(t.activeTexture(U),Z=U)}function ie(U,oe,le){le===void 0&&(Z===null?le=t.TEXTURE0+K-1:le=Z);let be=J[le];be===void 0&&(be={type:void 0,texture:void 0},J[le]=be),(be.type!==U||be.texture!==oe)&&(Z!==le&&(t.activeTexture(le),Z=le),t.bindTexture(U,oe||De[U]),be.type=U,be.texture=oe)}function Se(){const U=J[Z];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(U){fe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function je(U){_e.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),_e.copy(U))}function Ye(U,oe){let le=f.get(oe);le===void 0&&(le=new WeakMap,f.set(oe,le));let be=le.get(U);be===void 0&&(be=t.getUniformBlockIndex(oe,U.name),le.set(U,be))}function Be(U,oe){const be=f.get(oe).get(U);d.get(oe)!==be&&(t.uniformBlockBinding(oe,be,U.__bindingPointIndex),d.set(oe,be))}function ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},Z=null,J={},m={},_=new WeakMap,y=[],v=null,u=!1,g=null,x=null,S=null,w=null,T=null,M=null,P=null,E=new Ke(0,0,0),b=0,N=!1,O=null,Y=null,I=null,B=null,X=null,fe.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ie,disable:Ce,bindFramebuffer:qe,drawBuffers:j,useProgram:Rt,setBlending:ye,setMaterial:st,setFlipSided:Ue,setCullFace:R,setLineWidth:A,setPolygonOffset:V,setScissorTest:se,activeTexture:ne,bindTexture:ie,unbindTexture:Se,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:de,texImage3D:ae,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:L,texStorage3D:ee,texSubImage2D:Re,texSubImage3D:Oe,compressedTexSubImage2D:te,compressedTexSubImage3D:$e,scissor:Me,viewport:je,reset:ue}}function xb(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return m?new OffscreenCanvas(R,A):Ql("canvas")}function y(R,A,V,se){let ne=1;if((R.width>se||R.height>se)&&(ne=se/Math.max(R.width,R.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=A?Zl:Math.floor,Se=ie(ne*R.width),pe=ie(ne*R.height);f===void 0&&(f=_(Se,pe));const ve=V?_(Se,pe):f;return ve.width=Se,ve.height=pe,ve.getContext("2d").drawImage(R,0,0,Se,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+pe+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function v(R){return $d(R.width)&&$d(R.height)}function u(R){return o?!1:R.wrapS!==Kn||R.wrapT!==Kn||R.minFilter!==rn&&R.minFilter!==Un}function g(R,A){return R.generateMipmaps&&A&&R.minFilter!==rn&&R.minFilter!==Un}function x(R){t.generateMipmap(R)}function S(R,A,V,se,ne=!1){if(o===!1)return A;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=A;if(A===t.RED&&(V===t.FLOAT&&(ie=t.R32F),V===t.HALF_FLOAT&&(ie=t.R16F),V===t.UNSIGNED_BYTE&&(ie=t.R8)),A===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ie=t.R8UI),V===t.UNSIGNED_SHORT&&(ie=t.R16UI),V===t.UNSIGNED_INT&&(ie=t.R32UI),V===t.BYTE&&(ie=t.R8I),V===t.SHORT&&(ie=t.R16I),V===t.INT&&(ie=t.R32I)),A===t.RG&&(V===t.FLOAT&&(ie=t.RG32F),V===t.HALF_FLOAT&&(ie=t.RG16F),V===t.UNSIGNED_BYTE&&(ie=t.RG8)),A===t.RGBA){const Se=ne?ql:tt.getTransfer(se);V===t.FLOAT&&(ie=t.RGBA32F),V===t.HALF_FLOAT&&(ie=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ie=Se===ot?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(R,A,V){return g(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==Un?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function T(R){return R===rn||R===Op||R===lu?t.NEAREST:t.LINEAR}function M(R){const A=R.target;A.removeEventListener("dispose",M),E(A),A.isVideoTexture&&d.delete(A)}function P(R){const A=R.target;A.removeEventListener("dispose",P),N(A)}function E(R){const A=i.get(R);if(A.__webglInit===void 0)return;const V=R.source,se=h.get(V);if(se){const ne=se[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(R),Object.keys(se).length===0&&h.delete(V)}i.remove(R)}function b(R){const A=i.get(R);t.deleteTexture(A.__webglTexture);const V=R.source,se=h.get(V);delete se[A.__cacheKey],a.memory.textures--}function N(R){const A=R.texture,V=i.get(R),se=i.get(A);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(V.__webglFramebuffer[ne]))for(let ie=0;ie<V.__webglFramebuffer[ne].length;ie++)t.deleteFramebuffer(V.__webglFramebuffer[ne][ie]);else t.deleteFramebuffer(V.__webglFramebuffer[ne]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ne])}else{if(Array.isArray(V.__webglFramebuffer))for(let ne=0;ne<V.__webglFramebuffer.length;ne++)t.deleteFramebuffer(V.__webglFramebuffer[ne]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,ie=A.length;ne<ie;ne++){const Se=i.get(A[ne]);Se.__webglTexture&&(t.deleteTexture(Se.__webglTexture),a.memory.textures--),i.remove(A[ne])}i.remove(A),i.remove(R)}let O=0;function Y(){O=0}function I(){const R=O;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function B(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function X(R,A){const V=i.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(V,R,A);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+A)}function K(R,A){const V=i.get(R);if(R.version>0&&V.__version!==R.version){fe(V,R,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+A)}function k(R,A){const V=i.get(R);if(R.version>0&&V.__version!==R.version){fe(V,R,A);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+A)}function F(R,A){const V=i.get(R);if(R.version>0&&V.__version!==R.version){_e(V,R,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+A)}const H={[Wd]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[Xd]:t.MIRRORED_REPEAT},Z={[rn]:t.NEAREST,[Op]:t.NEAREST_MIPMAP_NEAREST,[lu]:t.NEAREST_MIPMAP_LINEAR,[Un]:t.LINEAR,[jM]:t.LINEAR_MIPMAP_NEAREST,[ro]:t.LINEAR_MIPMAP_LINEAR},J={[e1]:t.NEVER,[a1]:t.ALWAYS,[t1]:t.LESS,[c_]:t.LEQUAL,[n1]:t.EQUAL,[s1]:t.GEQUAL,[i1]:t.GREATER,[r1]:t.NOTEQUAL};function $(R,A,V){if(V?(t.texParameteri(R,t.TEXTURE_WRAP_S,H[A.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,H[A.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,H[A.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Z[A.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Z[A.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(A.wrapS!==Kn||A.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(A.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==rn&&A.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===rn||A.minFilter!==lu&&A.minFilter!==ro||A.type===Zi&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===so&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(t.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Q(R,A){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",M));const se=A.source;let ne=h.get(se);ne===void 0&&(ne={},h.set(se,ne));const ie=B(A);if(ie!==R.__cacheKey){ne[ie]===void 0&&(ne[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[ie].usedTimes++;const Se=ne[R.__cacheKey];Se!==void 0&&(ne[R.__cacheKey].usedTimes--,Se.usedTimes===0&&b(A)),R.__cacheKey=ie,R.__webglTexture=ne[ie].texture}return V}function fe(R,A,V){let se=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(se=t.TEXTURE_3D);const ne=Q(R,A),ie=A.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+V);const Se=i.get(ie);if(ie.version!==Se.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const pe=tt.getPrimaries(tt.workingColorSpace),ve=A.colorSpace===kn?null:tt.getPrimaries(A.colorSpace),Re=A.colorSpace===kn||pe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Oe=u(A)&&v(A.image)===!1;let te=y(A.image,Oe,!1,r.maxTextureSize);te=Ue(A,te);const $e=v(te)||o,L=s.convert(A.format,A.colorSpace);let ee=s.convert(A.type),de=S(A.internalFormat,L,ee,A.colorSpace,A.isVideoTexture);$(se,A,$e);let ae;const Me=A.mipmaps,je=o&&A.isVideoTexture!==!0&&de!==a_,Ye=Se.__version===void 0||ne===!0,Be=w(A,te,$e);if(A.isDepthTexture)de=t.DEPTH_COMPONENT,o?A.type===Zi?de=t.DEPTH_COMPONENT32F:A.type===Ki?de=t.DEPTH_COMPONENT24:A.type===Or?de=t.DEPTH24_STENCIL8:de=t.DEPTH_COMPONENT16:A.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Fr&&de===t.DEPTH_COMPONENT&&A.type!==Jh&&A.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ki,ee=s.convert(A.type)),A.format===ea&&de===t.DEPTH_COMPONENT&&(de=t.DEPTH_STENCIL,A.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Or,ee=s.convert(A.type))),Ye&&(je?n.texStorage2D(t.TEXTURE_2D,1,de,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,de,te.width,te.height,0,L,ee,null));else if(A.isDataTexture)if(Me.length>0&&$e){je&&Ye&&n.texStorage2D(t.TEXTURE_2D,Be,de,Me[0].width,Me[0].height);for(let ue=0,U=Me.length;ue<U;ue++)ae=Me[ue],je?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,ae.width,ae.height,L,ee,ae.data):n.texImage2D(t.TEXTURE_2D,ue,de,ae.width,ae.height,0,L,ee,ae.data);A.generateMipmaps=!1}else je?(Ye&&n.texStorage2D(t.TEXTURE_2D,Be,de,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,L,ee,te.data)):n.texImage2D(t.TEXTURE_2D,0,de,te.width,te.height,0,L,ee,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){je&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,de,Me[0].width,Me[0].height,te.depth);for(let ue=0,U=Me.length;ue<U;ue++)ae=Me[ue],A.format!==Zn?L!==null?je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,ae.width,ae.height,te.depth,L,ae.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ue,de,ae.width,ae.height,te.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,ue,0,0,0,ae.width,ae.height,te.depth,L,ee,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ue,de,ae.width,ae.height,te.depth,0,L,ee,ae.data)}else{je&&Ye&&n.texStorage2D(t.TEXTURE_2D,Be,de,Me[0].width,Me[0].height);for(let ue=0,U=Me.length;ue<U;ue++)ae=Me[ue],A.format!==Zn?L!==null?je?n.compressedTexSubImage2D(t.TEXTURE_2D,ue,0,0,ae.width,ae.height,L,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ue,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,ae.width,ae.height,L,ee,ae.data):n.texImage2D(t.TEXTURE_2D,ue,de,ae.width,ae.height,0,L,ee,ae.data)}else if(A.isDataArrayTexture)je?(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,de,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,L,ee,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,L,ee,te.data);else if(A.isData3DTexture)je?(Ye&&n.texStorage3D(t.TEXTURE_3D,Be,de,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,L,ee,te.data)):n.texImage3D(t.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,L,ee,te.data);else if(A.isFramebufferTexture){if(Ye)if(je)n.texStorage2D(t.TEXTURE_2D,Be,de,te.width,te.height);else{let ue=te.width,U=te.height;for(let oe=0;oe<Be;oe++)n.texImage2D(t.TEXTURE_2D,oe,de,ue,U,0,L,ee,null),ue>>=1,U>>=1}}else if(Me.length>0&&$e){je&&Ye&&n.texStorage2D(t.TEXTURE_2D,Be,de,Me[0].width,Me[0].height);for(let ue=0,U=Me.length;ue<U;ue++)ae=Me[ue],je?n.texSubImage2D(t.TEXTURE_2D,ue,0,0,L,ee,ae):n.texImage2D(t.TEXTURE_2D,ue,de,L,ee,ae);A.generateMipmaps=!1}else je?(Ye&&n.texStorage2D(t.TEXTURE_2D,Be,de,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,L,ee,te)):n.texImage2D(t.TEXTURE_2D,0,de,L,ee,te);g(A,$e)&&x(se),Se.__version=ie.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function _e(R,A,V){if(A.image.length!==6)return;const se=Q(R,A),ne=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const ie=i.get(ne);if(ne.version!==ie.__version||se===!0){n.activeTexture(t.TEXTURE0+V);const Se=tt.getPrimaries(tt.workingColorSpace),pe=A.colorSpace===kn?null:tt.getPrimaries(A.colorSpace),ve=A.colorSpace===kn||Se===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=A.isCompressedTexture||A.image[0].isCompressedTexture,Oe=A.image[0]&&A.image[0].isDataTexture,te=[];for(let ue=0;ue<6;ue++)!Re&&!Oe?te[ue]=y(A.image[ue],!1,!0,r.maxCubemapSize):te[ue]=Oe?A.image[ue].image:A.image[ue],te[ue]=Ue(A,te[ue]);const $e=te[0],L=v($e)||o,ee=s.convert(A.format,A.colorSpace),de=s.convert(A.type),ae=S(A.internalFormat,ee,de,A.colorSpace),Me=o&&A.isVideoTexture!==!0,je=ie.__version===void 0||se===!0;let Ye=w(A,$e,L);$(t.TEXTURE_CUBE_MAP,A,L);let Be;if(Re){Me&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ye,ae,$e.width,$e.height);for(let ue=0;ue<6;ue++){Be=te[ue].mipmaps;for(let U=0;U<Be.length;U++){const oe=Be[U];A.format!==Zn?ee!==null?Me?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,oe.width,oe.height,ee,oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,ae,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,oe.width,oe.height,ee,de,oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,ae,oe.width,oe.height,0,ee,de,oe.data)}}}else{Be=A.mipmaps,Me&&je&&(Be.length>0&&Ye++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Ye,ae,te[0].width,te[0].height));for(let ue=0;ue<6;ue++)if(Oe){Me?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,te[ue].width,te[ue].height,ee,de,te[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ae,te[ue].width,te[ue].height,0,ee,de,te[ue].data);for(let U=0;U<Be.length;U++){const le=Be[U].image[ue].image;Me?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,le.width,le.height,ee,de,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,ae,le.width,le.height,0,ee,de,le.data)}}else{Me?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ee,de,te[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ae,ee,de,te[ue]);for(let U=0;U<Be.length;U++){const oe=Be[U];Me?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,ee,de,oe.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,ae,ee,de,oe.image[ue])}}}g(A,L)&&x(t.TEXTURE_CUBE_MAP),ie.__version=ne.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function xe(R,A,V,se,ne,ie){const Se=s.convert(V.format,V.colorSpace),pe=s.convert(V.type),ve=S(V.internalFormat,Se,pe,V.colorSpace);if(!i.get(A).__hasExternalTextures){const Oe=Math.max(1,A.width>>ie),te=Math.max(1,A.height>>ie);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ie,ve,Oe,te,A.depth,0,Se,pe,null):n.texImage2D(ne,ie,ve,Oe,te,0,Se,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ye(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(V).__webglTexture,0,Le(A)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(V).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function De(R,A,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let se=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||ye(A)){const ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Zi?se=t.DEPTH_COMPONENT32F:ne.type===Ki&&(se=t.DEPTH_COMPONENT24));const ie=Le(A);ye(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,se,A.width,A.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,se,A.width,A.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,A.width,A.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const se=Le(A);V&&ye(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,A.width,A.height):ye(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<se.length;ne++){const ie=se[ne],Se=s.convert(ie.format,ie.colorSpace),pe=s.convert(ie.type),ve=S(ie.internalFormat,Se,pe,ie.colorSpace),Re=Le(A);V&&ye(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,A.width,A.height):ye(A)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,ve,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,ve,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ie(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),X(A.depthTexture,0);const se=i.get(A.depthTexture).__webglTexture,ne=Le(A);if(A.depthTexture.format===Fr)ye(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(A.depthTexture.format===ea)ye(A)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const A=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ie(A.__webglFramebuffer,R)}else if(V){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=t.createRenderbuffer(),De(A.__webglDepthbuffer[se],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),De(A.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,A,V){const se=i.get(R);A!==void 0&&xe(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ce(R)}function j(R){const A=R.texture,V=i.get(R),se=i.get(A);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=A.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,Se=v(R)||o;if(ne){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let ve=0;ve<A.mipmaps.length;ve++)V.__webglFramebuffer[pe][ve]=t.createFramebuffer()}else V.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(o&&A.mipmaps&&A.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)V.__webglFramebuffer[pe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const pe=R.texture;for(let ve=0,Re=pe.length;ve<Re;ve++){const Oe=i.get(pe[ve]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&ye(R)===!1){const pe=ie?A:[A];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<pe.length;ve++){const Re=pe[ve];V.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);const Oe=s.convert(Re.format,Re.colorSpace),te=s.convert(Re.type),$e=S(Re.internalFormat,Oe,te,Re.colorSpace,R.isXRRenderTarget===!0),L=Le(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,L,$e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),De(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),$(t.TEXTURE_CUBE_MAP,A,Se);for(let pe=0;pe<6;pe++)if(o&&A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)xe(V.__webglFramebuffer[pe][ve],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else xe(V.__webglFramebuffer[pe],R,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(A,Se)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const pe=R.texture;for(let ve=0,Re=pe.length;ve<Re;ve++){const Oe=pe[ve],te=i.get(Oe);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),$(t.TEXTURE_2D,Oe,Se),xe(V.__webglFramebuffer,R,Oe,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),g(Oe,Se)&&x(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(pe,se.__webglTexture),$(pe,A,Se),o&&A.mipmaps&&A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)xe(V.__webglFramebuffer[ve],R,A,t.COLOR_ATTACHMENT0,pe,ve);else xe(V.__webglFramebuffer,R,A,t.COLOR_ATTACHMENT0,pe,0);g(A,Se)&&x(pe),n.unbindTexture()}R.depthBuffer&&Ce(R)}function Rt(R){const A=v(R)||o,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ne=V.length;se<ne;se++){const ie=V[se];if(g(ie,A)){const Se=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(ie).__webglTexture;n.bindTexture(Se,pe),x(Se),n.unbindTexture()}}}function Te(R){if(o&&R.samples>0&&ye(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,se=R.height;let ne=t.COLOR_BUFFER_BIT;const ie=[],Se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(R),ve=R.isWebGLMultipleRenderTargets===!0;if(ve)for(let Re=0;Re<A.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){ie.push(t.COLOR_ATTACHMENT0+Re),R.depthBuffer&&ie.push(Se);const Oe=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),ve){const te=i.get(A[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,V,se,0,0,V,se,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<A.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,pe.__webglColorRenderbuffer[Re]);const Oe=i.get(A[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}}function Le(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const A=i.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function st(R){const A=a.render.frame;d.get(R)!==A&&(d.set(R,A),R.update())}function Ue(R,A){const V=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===qd||V!==Di&&V!==kn&&(tt.getTransfer(V)===ot?o===!1?e.has("EXT_sRGB")===!0&&se===Zn?(R.format=qd,R.minFilter=Un,R.generateMipmaps=!1):A=d_.sRGBToLinear(A):(se!==Zn||ne!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),A}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=k,this.setTextureCube=F,this.rebindTextures=qe,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ye}function yb(t,e,n){const i=n.isWebGL2;function r(s,a=kn){let o;const l=tt.getTransfer(a);if(s===ur)return t.UNSIGNED_BYTE;if(s===t_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===n_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===VM)return t.BYTE;if(s===GM)return t.SHORT;if(s===Jh)return t.UNSIGNED_SHORT;if(s===e_)return t.INT;if(s===Ki)return t.UNSIGNED_INT;if(s===Zi)return t.FLOAT;if(s===so)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===WM)return t.ALPHA;if(s===Zn)return t.RGBA;if(s===XM)return t.LUMINANCE;if(s===qM)return t.LUMINANCE_ALPHA;if(s===Fr)return t.DEPTH_COMPONENT;if(s===ea)return t.DEPTH_STENCIL;if(s===qd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$M)return t.RED;if(s===i_)return t.RED_INTEGER;if(s===YM)return t.RG;if(s===r_)return t.RG_INTEGER;if(s===s_)return t.RGBA_INTEGER;if(s===cu||s===uu||s===du||s===hu)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===cu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===cu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fp||s===zp||s===Bp||s===Hp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Fp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===a_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===jp||s===Vp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===jp)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Vp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gp||s===Wp||s===Xp||s===qp||s===$p||s===Yp||s===Kp||s===Zp||s===Qp||s===Jp||s===em||s===tm||s===nm||s===im)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Qp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jp)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===em)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tm)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nm)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===im)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fu||s===rm||s===sm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===fu)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===KM||s===am||s===om||s===lm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===fu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===am)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===om)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Or?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Sb extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class un extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),u=this._getHandJoint(c,y);v!==null&&(u.matrix.fromArray(v.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=v.radius),u.visible=v!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new un;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Eb extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const y=n.getContextAttributes();let v=null,u=null;const g=[],x=[],S=new Ae;let w=null;const T=new Sn;T.layers.enable(1),T.viewport=new ut;const M=new Sn;M.layers.enable(2),M.viewport=new ut;const P=[T,M],E=new Sb;E.layers.enable(1),E.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=g[$];return Q===void 0&&(Q=new ku,g[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=g[$];return Q===void 0&&(Q=new ku,g[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=g[$];return Q===void 0&&(Q=new ku,g[$]=Q),Q.getHandSpace()};function O($){const Q=x.indexOf($.inputSource);if(Q===-1)return;const fe=g[Q];fe!==void 0&&(fe.update($.inputSource,$.frame,c||a),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",I);for(let $=0;$<g.length;$++){const Q=x[$];Q!==null&&(x[$]=null,g[$].disconnect(Q))}b=null,N=null,e.setRenderTarget(v),m=null,h=null,f=null,r=null,u=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new qr(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let Q=null,fe=null,_e=null;y.depth&&(_e=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=y.stencil?ea:Fr,fe=y.stencil?Or:Ki);const xe={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new qr(h.textureWidth,h.textureHeight,{format:Zn,type:ur,depthTexture:new M_(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const De=e.properties.get(u);De.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I($){for(let Q=0;Q<$.removed.length;Q++){const fe=$.removed[Q],_e=x.indexOf(fe);_e>=0&&(x[_e]=null,g[_e].disconnect(fe))}for(let Q=0;Q<$.added.length;Q++){const fe=$.added[Q];let _e=x.indexOf(fe);if(_e===-1){for(let De=0;De<g.length;De++)if(De>=x.length){x.push(fe),_e=De;break}else if(x[De]===null){x[De]=fe,_e=De;break}if(_e===-1)break}const xe=g[_e];xe&&xe.connect(fe)}}const B=new D,X=new D;function K($,Q,fe){B.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(fe.matrixWorld);const _e=B.distanceTo(X),xe=Q.projectionMatrix.elements,De=fe.projectionMatrix.elements,Ie=xe[14]/(xe[10]-1),Ce=xe[14]/(xe[10]+1),qe=(xe[9]+1)/xe[5],j=(xe[9]-1)/xe[5],Rt=(xe[8]-1)/xe[0],Te=(De[8]+1)/De[0],Le=Ie*Rt,ye=Ie*Te,st=_e/(-Rt+Te),Ue=st*-Rt;Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ue),$.translateZ(st),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Ie+st,A=Ce+st,V=Le-Ue,se=ye+(_e-Ue),ne=qe*Ce/A*R,ie=j*Ce/A*R;$.projectionMatrix.makePerspective(V,se,ne,ie,R,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function k($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;E.near=M.near=T.near=$.near,E.far=M.far=T.far=$.far,(b!==E.near||N!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,N=E.far);const Q=$.parent,fe=E.cameras;k(E,Q);for(let _e=0;_e<fe.length;_e++)k(fe[_e],Q);fe.length===2?K(E,T,M):E.projectionMatrix.copy(T.projectionMatrix),F($,E,Q)};function F($,Q,fe){fe===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ao*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)};let H=null;function Z($,Q){if(d=Q.getViewerPose(c||a),_=Q,d!==null){const fe=d.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;fe.length!==E.cameras.length&&(E.cameras.length=0,_e=!0);for(let xe=0;xe<fe.length;xe++){const De=fe[xe];let Ie=null;if(m!==null)Ie=m.getViewport(De);else{const qe=f.getViewSubImage(h,De);Ie=qe.viewport,xe===0&&(e.setRenderTargetTextures(u,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Ce=P[xe];Ce===void 0&&(Ce=new Sn,Ce.layers.enable(xe),Ce.viewport=new ut,P[xe]=Ce),Ce.matrix.fromArray(De.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(De.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),xe===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_e===!0&&E.cameras.push(Ce)}}for(let fe=0;fe<g.length;fe++){const _e=x[fe],xe=g[fe];_e!==null&&xe!==void 0&&xe.update(_e,Q,c||a)}H&&H($,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const J=new y_;J.setAnimationLoop(Z),this.setAnimationLoop=function($){H=$},this.dispose=function(){}}}function wb(t,e){function n(v,u){v.matrixAutoUpdate===!0&&v.updateMatrix(),u.value.copy(v.matrix)}function i(v,u){u.color.getRGB(v.fogColor.value,v_(t)),u.isFog?(v.fogNear.value=u.near,v.fogFar.value=u.far):u.isFogExp2&&(v.fogDensity.value=u.density)}function r(v,u,g,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(v,u):u.isMeshToonMaterial?(s(v,u),f(v,u)):u.isMeshPhongMaterial?(s(v,u),d(v,u)):u.isMeshStandardMaterial?(s(v,u),h(v,u),u.isMeshPhysicalMaterial&&m(v,u,S)):u.isMeshMatcapMaterial?(s(v,u),_(v,u)):u.isMeshDepthMaterial?s(v,u):u.isMeshDistanceMaterial?(s(v,u),y(v,u)):u.isMeshNormalMaterial?s(v,u):u.isLineBasicMaterial?(a(v,u),u.isLineDashedMaterial&&o(v,u)):u.isPointsMaterial?l(v,u,g,x):u.isSpriteMaterial?c(v,u):u.isShadowMaterial?(v.color.value.copy(u.color),v.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(v,u){v.opacity.value=u.opacity,u.color&&v.diffuse.value.copy(u.color),u.emissive&&v.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.bumpMap&&(v.bumpMap.value=u.bumpMap,n(u.bumpMap,v.bumpMapTransform),v.bumpScale.value=u.bumpScale,u.side===mn&&(v.bumpScale.value*=-1)),u.normalMap&&(v.normalMap.value=u.normalMap,n(u.normalMap,v.normalMapTransform),v.normalScale.value.copy(u.normalScale),u.side===mn&&v.normalScale.value.negate()),u.displacementMap&&(v.displacementMap.value=u.displacementMap,n(u.displacementMap,v.displacementMapTransform),v.displacementScale.value=u.displacementScale,v.displacementBias.value=u.displacementBias),u.emissiveMap&&(v.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,v.emissiveMapTransform)),u.specularMap&&(v.specularMap.value=u.specularMap,n(u.specularMap,v.specularMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(v.envMap.value=g,v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=u.reflectivity,v.ior.value=u.ior,v.refractionRatio.value=u.refractionRatio),u.lightMap){v.lightMap.value=u.lightMap;const x=t._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=u.lightMapIntensity*x,n(u.lightMap,v.lightMapTransform)}u.aoMap&&(v.aoMap.value=u.aoMap,v.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,v.aoMapTransform))}function a(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform))}function o(v,u){v.dashSize.value=u.dashSize,v.totalSize.value=u.dashSize+u.gapSize,v.scale.value=u.scale}function l(v,u,g,x){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.size.value=u.size*g,v.scale.value=x*.5,u.map&&(v.map.value=u.map,n(u.map,v.uvTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function c(v,u){v.diffuse.value.copy(u.color),v.opacity.value=u.opacity,v.rotation.value=u.rotation,u.map&&(v.map.value=u.map,n(u.map,v.mapTransform)),u.alphaMap&&(v.alphaMap.value=u.alphaMap,n(u.alphaMap,v.alphaMapTransform)),u.alphaTest>0&&(v.alphaTest.value=u.alphaTest)}function d(v,u){v.specular.value.copy(u.specular),v.shininess.value=Math.max(u.shininess,1e-4)}function f(v,u){u.gradientMap&&(v.gradientMap.value=u.gradientMap)}function h(v,u){v.metalness.value=u.metalness,u.metalnessMap&&(v.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,v.metalnessMapTransform)),v.roughness.value=u.roughness,u.roughnessMap&&(v.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,v.roughnessMapTransform)),e.get(u).envMap&&(v.envMapIntensity.value=u.envMapIntensity)}function m(v,u,g){v.ior.value=u.ior,u.sheen>0&&(v.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),v.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(v.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,v.sheenColorMapTransform)),u.sheenRoughnessMap&&(v.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,v.sheenRoughnessMapTransform))),u.clearcoat>0&&(v.clearcoat.value=u.clearcoat,v.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(v.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,v.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(v.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&v.clearcoatNormalScale.value.negate())),u.iridescence>0&&(v.iridescence.value=u.iridescence,v.iridescenceIOR.value=u.iridescenceIOR,v.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(v.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,v.iridescenceMapTransform)),u.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),u.transmission>0&&(v.transmission.value=u.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(v.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,v.transmissionMapTransform)),v.thickness.value=u.thickness,u.thicknessMap&&(v.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=u.attenuationDistance,v.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(v.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(v.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=u.specularIntensity,v.specularColor.value.copy(u.specularColor),u.specularColorMap&&(v.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,v.specularColorMapTransform)),u.specularIntensityMap&&(v.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,v.specularIntensityMapTransform))}function _(v,u){u.matcap&&(v.matcap.value=u.matcap)}function y(v,u){const g=e.get(u).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(_(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",v));const w=x.program;i.updateUBOMapping(g,w);const T=e.render.frame;s[g.id]!==T&&(h(g),s[g.id]=T)}function d(g){const x=f();g.__bindingPointIndex=x;const S=t.createBuffer(),w=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,w,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,w=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,M=S.length;T<M;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,b=P.length;E<b;E++){const N=P[E];if(m(N,T,E,w)===!0){const O=N.__offset,Y=Array.isArray(N.value)?N.value:[N.value];let I=0;for(let B=0;B<Y.length;B++){const X=Y[B],K=y(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,O+I,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,x,S,w){const T=g.value,M=x+"_"+S;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const P=w[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(g){const x=g.uniforms;let S=0;const w=16;for(let M=0,P=x.length;M<P;M++){const E=Array.isArray(x[M])?x[M]:[x[M]];for(let b=0,N=E.length;b<N;b++){const O=E[b],Y=Array.isArray(O.value)?O.value:[O.value];for(let I=0,B=Y.length;I<B;I++){const X=Y[I],K=y(X),k=S%w;k!==0&&w-k<K.boundary&&(S+=w-k),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=K.storage}}}const T=S%w;return T>0&&(S+=w-T),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function v(g){const x=g.target;x.removeEventListener("dispose",v);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class C_{constructor(e={}){const{canvas:n=S1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,v=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const x=this;let S=!1,w=0,T=0,M=null,P=-1,E=null;const b=new ut,N=new ut;let O=null;const Y=new Ke(0);let I=0,B=n.width,X=n.height,K=1,k=null,F=null;const H=new ut(0,0,B,X),Z=new ut(0,0,B,X);let J=!1;const $=new rf;let Q=!1,fe=!1,_e=null;const xe=new dt,De=new Ae,Ie=new D,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return M===null?K:1}let j=i;function Rt(C,z){for(let W=0;W<C.length;W++){const q=C[W],G=n.getContext(q,z);if(G!==null)return G}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qh}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",oe,!1),j===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),j=Rt(z,C),j===null)throw Rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&j instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Te,Le,ye,st,Ue,R,A,V,se,ne,ie,Se,pe,ve,Re,Oe,te,$e,L,ee,de,ae,Me,je;function Ye(){Te=new UT(j),Le=new RT(j,Te,e),Te.init(Le),ae=new yb(j,Te,Le),ye=new _b(j,Te,Le),st=new FT(j),Ue=new rb,R=new xb(j,Te,ye,Ue,Le,ae,st),A=new LT(x),V=new IT(x),se=new X1(j,Le),Me=new bT(j,Te,se,Le),ne=new kT(j,se,st,Me),ie=new jT(j,ne,se,st),L=new HT(j,Le,R),Oe=new PT(Ue),Se=new ib(x,A,V,Te,Le,Me,Oe),pe=new wb(x,Ue),ve=new ab,Re=new hb(Te,Le),$e=new AT(x,A,V,ye,ie,h,l),te=new vb(x,ie,Le),je=new Tb(j,st,Le,ye),ee=new CT(j,Te,st,Le),de=new OT(j,Te,st,Le),st.programs=Se.programs,x.capabilities=Le,x.extensions=Te,x.properties=Ue,x.renderLists=ve,x.shadowMap=te,x.state=ye,x.info=st}Ye();const Be=new Eb(x,j);this.xr=Be,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(B,X,!1))},this.getSize=function(C){return C.set(B,X)},this.setSize=function(C,z,W=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,X=z,n.width=Math.floor(C*K),n.height=Math.floor(z*K),W===!0&&(n.style.width=C+"px",n.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(B*K,X*K).floor()},this.setDrawingBufferSize=function(C,z,W){B=C,X=z,K=W,n.width=Math.floor(C*W),n.height=Math.floor(z*W),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,z,W,q){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,z,W,q),ye.viewport(b.copy(H).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,z,W,q){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,z,W,q),ye.scissor(N.copy(Z).multiplyScalar(K).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){ye.setScissorTest(J=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(C=!0,z=!0,W=!0){let q=0;if(C){let G=!1;if(M!==null){const me=M.texture.format;G=me===s_||me===r_||me===i_}if(G){const me=M.texture.type,we=me===ur||me===Ki||me===Jh||me===Or||me===t_||me===n_,Pe=$e.getClearColor(),Ne=$e.getClearAlpha(),He=Pe.r,ke=Pe.g,Fe=Pe.b;we?(m[0]=He,m[1]=ke,m[2]=Fe,m[3]=Ne,j.clearBufferuiv(j.COLOR,0,m)):(_[0]=He,_[1]=ke,_[2]=Fe,_[3]=Ne,j.clearBufferiv(j.COLOR,0,_))}else q|=j.COLOR_BUFFER_BIT}z&&(q|=j.DEPTH_BUFFER_BIT),W&&(q|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",oe,!1),ve.dispose(),Re.dispose(),Ue.dispose(),A.dispose(),V.dispose(),ie.dispose(),Me.dispose(),je.dispose(),Se.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Qt),Be.removeEventListener("sessionend",it),_e&&(_e.dispose(),_e=null),Jt.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=st.autoReset,z=te.enabled,W=te.autoUpdate,q=te.needsUpdate,G=te.type;Ye(),st.autoReset=C,te.enabled=z,te.autoUpdate=W,te.needsUpdate=q,te.type=G}function oe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const z=C.target;z.removeEventListener("dispose",le),be(z)}function be(C){Ee(C),Ue.remove(C)}function Ee(C){const z=Ue.get(C).programs;z!==void 0&&(z.forEach(function(W){Se.releaseProgram(W)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,W,q,G,me){z===null&&(z=Ce);const we=G.isMesh&&G.matrixWorld.determinant()<0,Pe=z_(C,z,W,q,G);ye.setMaterial(q,we);let Ne=W.index,He=1;if(q.wireframe===!0){if(Ne=ne.getWireframeAttribute(W),Ne===void 0)return;He=2}const ke=W.drawRange,Fe=W.attributes.position;let yt=ke.start*He,gn=(ke.start+ke.count)*He;me!==null&&(yt=Math.max(yt,me.start*He),gn=Math.min(gn,(me.start+me.count)*He)),Ne!==null?(yt=Math.max(yt,0),gn=Math.min(gn,Ne.count)):Fe!=null&&(yt=Math.max(yt,0),gn=Math.min(gn,Fe.count));const Lt=gn-yt;if(Lt<0||Lt===1/0)return;Me.setup(G,q,Pe,W,Ne);let fi,ht=ee;if(Ne!==null&&(fi=se.get(Ne),ht=de,ht.setIndex(fi)),G.isMesh)q.wireframe===!0?(ye.setLineWidth(q.wireframeLinewidth*qe()),ht.setMode(j.LINES)):ht.setMode(j.TRIANGLES);else if(G.isLine){let Ve=q.linewidth;Ve===void 0&&(Ve=1),ye.setLineWidth(Ve*qe()),G.isLineSegments?ht.setMode(j.LINES):G.isLineLoop?ht.setMode(j.LINE_LOOP):ht.setMode(j.LINE_STRIP)}else G.isPoints?ht.setMode(j.POINTS):G.isSprite&&ht.setMode(j.TRIANGLES);if(G.isBatchedMesh)ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ht.renderInstances(yt,Lt,G.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Nc=Math.min(W.instanceCount,Ve);ht.renderInstances(yt,Lt,Nc)}else ht.render(yt,Lt)};function Qe(C,z,W){C.transparent===!0&&C.side===wi&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,xo(C,z,W),C.side=gr,C.needsUpdate=!0,xo(C,z,W),C.side=wi):xo(C,z,W)}this.compile=function(C,z,W=null){W===null&&(W=C),v=Re.get(W),v.init(),g.push(v),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),C!==W&&C.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights(x._useLegacyLights);const q=new Set;return C.traverse(function(G){const me=G.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Pe=me[we];Qe(Pe,W,G),q.add(Pe)}else Qe(me,W,G),q.add(me)}),g.pop(),v=null,q},this.compileAsync=function(C,z,W=null){const q=this.compile(C,z,W);return new Promise(G=>{function me(){if(q.forEach(function(we){Ue.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){G(C);return}setTimeout(me,10)}Te.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Je=null;function Pt(C){Je&&Je(C)}function Qt(){Jt.stop()}function it(){Jt.start()}const Jt=new y_;Jt.setAnimationLoop(Pt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(C){Je=C,Be.setAnimationLoop(C),C===null?Jt.stop():Jt.start()},Be.addEventListener("sessionstart",Qt),Be.addEventListener("sessionend",it),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(z),z=Be.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,z,M),v=Re.get(C,g.length),v.init(),g.push(v),xe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,Q=Oe.init(this.clippingPlanes,fe),y=ve.get(C,u.length),y.init(),u.push(y),ii(C,z,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(k,F),this.info.render.frame++,Q===!0&&Oe.beginShadows();const W=v.state.shadowsArray;if(te.render(W,C,z),Q===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(y,C),v.setupLights(x._useLegacyLights),z.isArrayCamera){const q=z.cameras;for(let G=0,me=q.length;G<me;G++){const we=q[G];hf(y,C,we,we.viewport)}}else hf(y,C,z);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,z),Me.resetDefaultState(),P=-1,E=null,g.pop(),g.length>0?v=g[g.length-1]:v=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function ii(C,z,W,q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||$.intersectsSprite(C)){q&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xe);const we=ie.update(C),Pe=C.material;Pe.visible&&y.push(C,we,Pe,W,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||$.intersectsObject(C))){const we=ie.update(C),Pe=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ie.copy(we.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(xe)),Array.isArray(Pe)){const Ne=we.groups;for(let He=0,ke=Ne.length;He<ke;He++){const Fe=Ne[He],yt=Pe[Fe.materialIndex];yt&&yt.visible&&y.push(C,we,yt,W,Ie.z,Fe)}}else Pe.visible&&y.push(C,we,Pe,W,Ie.z,null)}}const me=C.children;for(let we=0,Pe=me.length;we<Pe;we++)ii(me[we],z,W,q)}function hf(C,z,W,q){const G=C.opaque,me=C.transmissive,we=C.transparent;v.setupLightsView(W),Q===!0&&Oe.setGlobalState(x.clippingPlanes,W),me.length>0&&F_(G,me,z,W),q&&ye.viewport(b.copy(q)),G.length>0&&_o(G,z,W),me.length>0&&_o(me,z,W),we.length>0&&_o(we,z,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function F_(C,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const me=Le.isWebGL2;_e===null&&(_e=new qr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?so:ur,minFilter:ro,samples:me?4:0})),x.getDrawingBufferSize(De),me?_e.setSize(De.x,De.y):_e.setSize(Zl(De.x),Zl(De.y));const we=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Y),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Pe=x.toneMapping;x.toneMapping=cr,_o(C,W,q),R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e);let Ne=!1;for(let He=0,ke=z.length;He<ke;He++){const Fe=z[He],yt=Fe.object,gn=Fe.geometry,Lt=Fe.material,fi=Fe.group;if(Lt.side===wi&&yt.layers.test(q.layers)){const ht=Lt.side;Lt.side=mn,Lt.needsUpdate=!0,ff(yt,W,q,gn,Lt,fi),Lt.side=ht,Lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e)),x.setRenderTarget(we),x.setClearColor(Y,I),x.toneMapping=Pe}function _o(C,z,W){const q=z.isScene===!0?z.overrideMaterial:null;for(let G=0,me=C.length;G<me;G++){const we=C[G],Pe=we.object,Ne=we.geometry,He=q===null?we.material:q,ke=we.group;Pe.layers.test(W.layers)&&ff(Pe,z,W,Ne,He,ke)}}function ff(C,z,W,q,G,me){C.onBeforeRender(x,z,W,q,G,me),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(x,z,W,q,C,me),G.transparent===!0&&G.side===wi&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,x.renderBufferDirect(W,z,q,G,C,me),G.side=gr,G.needsUpdate=!0,x.renderBufferDirect(W,z,q,G,C,me),G.side=wi):x.renderBufferDirect(W,z,q,G,C,me),C.onAfterRender(x,z,W,q,G,me)}function xo(C,z,W){z.isScene!==!0&&(z=Ce);const q=Ue.get(C),G=v.state.lights,me=v.state.shadowsArray,we=G.state.version,Pe=Se.getParameters(C,G.state,me,z,W),Ne=Se.getProgramCacheKey(Pe);let He=q.programs;q.environment=C.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(C.isMeshStandardMaterial?V:A).get(C.envMap||q.environment),He===void 0&&(C.addEventListener("dispose",le),He=new Map,q.programs=He);let ke=He.get(Ne);if(ke!==void 0){if(q.currentProgram===ke&&q.lightsStateVersion===we)return mf(C,Pe),ke}else Pe.uniforms=Se.getUniforms(C),C.onBuild(W,Pe,x),C.onBeforeCompile(Pe,x),ke=Se.acquireProgram(Pe,Ne),He.set(Ne,ke),q.uniforms=Pe.uniforms;const Fe=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=Oe.uniform),mf(C,Pe),q.needsLights=H_(C),q.lightsStateVersion=we,q.needsLights&&(Fe.ambientLightColor.value=G.state.ambient,Fe.lightProbe.value=G.state.probe,Fe.directionalLights.value=G.state.directional,Fe.directionalLightShadows.value=G.state.directionalShadow,Fe.spotLights.value=G.state.spot,Fe.spotLightShadows.value=G.state.spotShadow,Fe.rectAreaLights.value=G.state.rectArea,Fe.ltc_1.value=G.state.rectAreaLTC1,Fe.ltc_2.value=G.state.rectAreaLTC2,Fe.pointLights.value=G.state.point,Fe.pointLightShadows.value=G.state.pointShadow,Fe.hemisphereLights.value=G.state.hemi,Fe.directionalShadowMap.value=G.state.directionalShadowMap,Fe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Fe.spotShadowMap.value=G.state.spotShadowMap,Fe.spotLightMatrix.value=G.state.spotLightMatrix,Fe.spotLightMap.value=G.state.spotLightMap,Fe.pointShadowMap.value=G.state.pointShadowMap,Fe.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=ke,q.uniformsList=null,ke}function pf(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=xl.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function mf(C,z){const W=Ue.get(C);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function z_(C,z,W,q,G){z.isScene!==!0&&(z=Ce),R.resetTextureUnits();const me=z.fog,we=q.isMeshStandardMaterial?z.environment:null,Pe=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Di,Ne=(q.isMeshStandardMaterial?V:A).get(q.envMap||we),He=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!W.morphAttributes.position,yt=!!W.morphAttributes.normal,gn=!!W.morphAttributes.color;let Lt=cr;q.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const fi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=fi!==void 0?fi.length:0,Ve=Ue.get(q),Nc=v.state.lights;if(Q===!0&&(fe===!0||C!==E)){const Ln=C===E&&q.id===P;Oe.setState(q,C,Ln)}let vt=!1;q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Nc.state.version||Ve.outputColorSpace!==Pe||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||Ve.envMap!==Ne||q.fog===!0&&Ve.fog!==me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Oe.numPlanes||Ve.numIntersection!==Oe.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==ke||Ve.morphTargets!==Fe||Ve.morphNormals!==yt||Ve.morphColors!==gn||Ve.toneMapping!==Lt||Le.isWebGL2===!0&&Ve.morphTargetsCount!==ht)&&(vt=!0):(vt=!0,Ve.__version=q.version);let yr=Ve.currentProgram;vt===!0&&(yr=xo(q,z,G));let gf=!1,ca=!1,Dc=!1;const jt=yr.getUniforms(),Sr=Ve.uniforms;if(ye.useProgram(yr.program)&&(gf=!0,ca=!0,Dc=!0),q.id!==P&&(P=q.id,ca=!0),gf||E!==C){jt.setValue(j,"projectionMatrix",C.projectionMatrix),jt.setValue(j,"viewMatrix",C.matrixWorldInverse);const Ln=jt.map.cameraPosition;Ln!==void 0&&Ln.setValue(j,Ie.setFromMatrixPosition(C.matrixWorld)),Le.logarithmicDepthBuffer&&jt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&jt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,ca=!0,Dc=!0)}if(G.isSkinnedMesh){jt.setOptional(j,G,"bindMatrix"),jt.setOptional(j,G,"bindMatrixInverse");const Ln=G.skeleton;Ln&&(Le.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),jt.setValue(j,"boneTexture",Ln.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(jt.setOptional(j,G,"batchingTexture"),jt.setValue(j,"batchingTexture",G._matricesTexture,R));const Ic=W.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0&&Le.isWebGL2===!0)&&L.update(G,W,yr),(ca||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,jt.setValue(j,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Sr.envMap.value=Ne,Sr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ca&&(jt.setValue(j,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&B_(Sr,Dc),me&&q.fog===!0&&pe.refreshFogUniforms(Sr,me),pe.refreshMaterialUniforms(Sr,q,K,X,_e),xl.upload(j,pf(Ve),Sr,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(xl.upload(j,pf(Ve),Sr,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&jt.setValue(j,"center",G.center),jt.setValue(j,"modelViewMatrix",G.modelViewMatrix),jt.setValue(j,"normalMatrix",G.normalMatrix),jt.setValue(j,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ln=q.uniformsGroups;for(let Uc=0,j_=Ln.length;Uc<j_;Uc++)if(Le.isWebGL2){const vf=Ln[Uc];je.update(vf,yr),je.bind(vf,yr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yr}function B_(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function H_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,z,W){Ue.get(C.texture).__webglTexture=z,Ue.get(C.depthTexture).__webglTexture=W;const q=Ue.get(C);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const W=Ue.get(C);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,W=0){M=C,w=z,T=W;let q=!0,G=null,me=!1,we=!1;if(C){const Ne=Ue.get(C);Ne.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(j.FRAMEBUFFER,null),q=!1):Ne.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ne.__hasExternalTextures&&R.rebindTextures(C,Ue.get(C.texture).__webglTexture,Ue.get(C.depthTexture).__webglTexture);const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(we=!0);const ke=Ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?G=ke[z][W]:G=ke[z],me=!0):Le.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?G=Ue.get(C).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[W]:G=ke,b.copy(C.viewport),N.copy(C.scissor),O=C.scissorTest}else b.copy(H).multiplyScalar(K).floor(),N.copy(Z).multiplyScalar(K).floor(),O=J;if(ye.bindFramebuffer(j.FRAMEBUFFER,G)&&Le.drawBuffers&&q&&ye.drawBuffers(C,G),ye.viewport(b),ye.scissor(N),ye.setScissorTest(O),me){const Ne=Ue.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,W)}else if(we){const Ne=Ue.get(C.texture),He=z||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,He)}P=-1},this.readRenderTargetPixels=function(C,z,W,q,G,me,we){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){ye.bindFramebuffer(j.FRAMEBUFFER,Pe);try{const Ne=C.texture,He=Ne.format,ke=Ne.type;if(He!==Zn&&ae.convert(He)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=ke===so&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(ke!==ur&&ae.convert(ke)!==j.getParameter(j.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Zi&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-q&&W>=0&&W<=C.height-G&&j.readPixels(z,W,q,G,ae.convert(He),ae.convert(ke),me)}finally{const Ne=M!==null?Ue.get(M).__webglFramebuffer:null;ye.bindFramebuffer(j.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(C,z,W=0){const q=Math.pow(2,-W),G=Math.floor(z.image.width*q),me=Math.floor(z.image.height*q);R.setTexture2D(z,0),j.copyTexSubImage2D(j.TEXTURE_2D,W,0,0,C.x,C.y,G,me),ye.unbindTexture()},this.copyTextureToTexture=function(C,z,W,q=0){const G=z.image.width,me=z.image.height,we=ae.convert(W.format),Pe=ae.convert(W.type);R.setTexture2D(W,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,W.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,q,C.x,C.y,G,me,we,Pe,z.image.data):z.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,q,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,q,C.x,C.y,we,Pe,z.image),q===0&&W.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(C,z,W,q,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=C.max.x-C.min.x+1,we=C.max.y-C.min.y+1,Pe=C.max.z-C.min.z+1,Ne=ae.convert(q.format),He=ae.convert(q.type);let ke;if(q.isData3DTexture)R.setTexture3D(q,0),ke=j.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)R.setTexture2DArray(q,0),ke=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Fe=j.getParameter(j.UNPACK_ROW_LENGTH),yt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),gn=j.getParameter(j.UNPACK_SKIP_PIXELS),Lt=j.getParameter(j.UNPACK_SKIP_ROWS),fi=j.getParameter(j.UNPACK_SKIP_IMAGES),ht=W.isCompressedTexture?W.mipmaps[G]:W.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,ht.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ht.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,C.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,C.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,C.min.z),W.isDataTexture||W.isData3DTexture?j.texSubImage3D(ke,G,z.x,z.y,z.z,me,we,Pe,Ne,He,ht.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(ke,G,z.x,z.y,z.z,me,we,Pe,Ne,ht.data)):j.texSubImage3D(ke,G,z.x,z.y,z.z,me,we,Pe,Ne,He,ht),j.pixelStorei(j.UNPACK_ROW_LENGTH,Fe),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,gn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Lt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,fi),G===0&&q.generateMipmaps&&j.generateMipmap(ke),ye.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ye.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,ye.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ef?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?zr:o_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zr?Ot:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ab extends C_{}Ab.prototype.isWebGL1Renderer=!0;class af{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=n,this.far=i}clone(){return new af(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bb extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Jl extends oa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zm=new D,Qm=new D,Jm=new dt,Ou=new Tc,sl=new wc;class R_ extends At{constructor(e=new Ht,n=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Zm.fromBufferAttribute(n,r-1),Qm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Zm.distanceTo(Qm);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sl.copy(i.boundingSphere),sl.applyMatrix4(r),sl.radius+=s,e.ray.intersectsSphere(sl)===!1)return;Jm.copy(r).invert(),Ou.copy(e.ray).applyMatrix4(Jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new D,d=new D,f=new D,h=new D,m=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const u=Math.max(0,a.start),g=Math.min(_.count,a.start+a.count);for(let x=u,S=g-1;x<S;x+=m){const w=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(v,w),d.fromBufferAttribute(v,T),Ou.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||n.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),g=Math.min(v.count,a.start+a.count);for(let x=u,S=g-1;x<S;x+=m){if(c.fromBufferAttribute(v,x),d.fromBufferAttribute(v,x+1),Ou.distanceSqToSegment(c,d,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(h);T<e.near||T>e.far||n.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const eg=new D,tg=new D;class P_ extends R_{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)eg.fromBufferAttribute(n,r),tg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+eg.distanceTo(tg);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],h=i[r+1]-d,m=(a-d)/h;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Ae:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],s=[],a=[],o=new D,l=new dt;for(let m=0;m<=e;m++){const _=m/e;r[m]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(It(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(It(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],m*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Rb(t,e){const n=1-t;return n*n*e}function Pb(t,e){return 2*(1-t)*t*e}function Lb(t,e){return t*t*e}function Fu(t,e,n,i){return Rb(t,e)+Pb(t,n)+Lb(t,i)}class Nb extends Cb{constructor(e=new D,n=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new D){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(Fu(e,r.x,s.x,a.x),Fu(e,r.y,s.y,a.y),Fu(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rc extends Ht{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new D,d=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const m=i+f/n*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qn extends Ht{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],m=[];let _=0;const y=[],v=i/2;let u=0;g(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(m,2));function g(){const S=new D,w=new D;let T=0;const M=(n-e)/i;for(let P=0;P<=s;P++){const E=[],b=P/s,N=b*(n-e)+e;for(let O=0;O<=r;O++){const Y=O/r,I=Y*l+o,B=Math.sin(I),X=Math.cos(I);w.x=N*B,w.y=-b*i+v,w.z=N*X,f.push(w.x,w.y,w.z),S.set(B,M,X).normalize(),h.push(S.x,S.y,S.z),m.push(Y,1-b),E.push(_++)}y.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const b=y[E][P],N=y[E+1][P],O=y[E+1][P+1],Y=y[E][P+1];d.push(b,N,Y),d.push(N,O,Y),T+=6}c.addGroup(u,T,0),u+=T}function x(S){const w=_,T=new Ae,M=new D;let P=0;const E=S===!0?e:n,b=S===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,v*b,0),h.push(0,b,0),m.push(.5,.5),_++;const N=_;for(let O=0;O<=r;O++){const I=O/r*l+o,B=Math.cos(I),X=Math.sin(I);M.x=E*X,M.y=v*b,M.z=E*B,f.push(M.x,M.y,M.z),h.push(0,b,0),T.x=B*.5+.5,T.y=X*.5*b+.5,m.push(T.x,T.y),_++}for(let O=0;O<r;O++){const Y=w+O,I=N+O;S===!0?d.push(I,I+1,Y):d.push(I+1,I,Y),P+=3}c.addGroup(u,P,S===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oo extends Qn{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new oo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends Ht{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(s.slice(),3)),this.setAttribute("uv",new nt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const x=new D,S=new D,w=new D;for(let T=0;T<n.length;T+=3)m(n[T+0],x),m(n[T+1],S),m(n[T+2],w),l(x,S,w,g)}function l(g,x,S,w){const T=w+1,M=[];for(let P=0;P<=T;P++){M[P]=[];const E=g.clone().lerp(S,P/T),b=x.clone().lerp(S,P/T),N=T-P;for(let O=0;O<=N;O++)O===0&&P===T?M[P][O]=E:M[P][O]=E.clone().lerp(b,O/N)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const b=Math.floor(E/2);E%2===0?(h(M[P][b+1]),h(M[P+1][b]),h(M[P][b])):(h(M[P][b+1]),h(M[P+1][b+1]),h(M[P+1][b]))}}function c(g){const x=new D;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(g),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function d(){const g=new D;for(let x=0;x<s.length;x+=3){g.x=s[x+0],g.y=s[x+1],g.z=s[x+2];const S=v(g)/2/Math.PI+.5,w=u(g)/Math.PI+.5;a.push(S,1-w)}_(),f()}function f(){for(let g=0;g<a.length;g+=6){const x=a[g+0],S=a[g+2],w=a[g+4],T=Math.max(x,S,w),M=Math.min(x,S,w);T>.9&&M<.1&&(x<.2&&(a[g+0]+=1),S<.2&&(a[g+2]+=1),w<.2&&(a[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function m(g,x){const S=g*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function _(){const g=new D,x=new D,S=new D,w=new D,T=new Ae,M=new Ae,P=new Ae;for(let E=0,b=0;E<s.length;E+=9,b+=6){g.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),T.set(a[b+0],a[b+1]),M.set(a[b+2],a[b+3]),P.set(a[b+4],a[b+5]),w.copy(g).add(x).add(S).divideScalar(3);const N=v(w);y(T,b+0,g,N),y(M,b+2,x,N),y(P,b+4,S,N)}}function y(g,x,S,w){w<0&&g.x===1&&(a[x]=g.x-1),S.x===0&&S.z===0&&(a[x]=w/2/Math.PI+.5)}function v(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.vertices,e.indices,e.radius,e.details)}}class of extends Pc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new of(e.radius,e.detail)}}class ec extends Pc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new ec(e.radius,e.detail)}}class Lc extends Ht{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,m=new D,_=new Ae;for(let y=0;y<=r;y++){for(let v=0;v<=i;v++){const u=s+v/i*a;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,d.push(_.x,_.y)}f+=h}for(let y=0;y<r;y++){const v=y*(i+1);for(let u=0;u<i;u++){const g=u+v,x=g,S=g+i+1,w=g+i+2,T=g+1;o.push(x,S,T),o.push(S,w,T)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ei extends Ht{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new D,h=new D,m=[],_=[],y=[],v=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let w=0;w<=n;w++){const T=w/n;f.x=-e*Math.cos(r+T*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+T*s)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),v.push(T+S,1-x),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=d[u][g+1],S=d[u][g],w=d[u+1][g],T=d[u+1][g+1];(u!==0||a>0)&&m.push(x,S,T),(u!==i-1||l<Math.PI)&&m.push(S,w,T)}this.setIndex(m),this.setAttribute("position",new nt(_,3)),this.setAttribute("normal",new nt(y,3)),this.setAttribute("uv",new nt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lo extends Ht{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],d=new D,f=new D,h=new D;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const y=_/r*s,v=m/i*Math.PI*2;f.x=(e+n*Math.cos(v))*Math.cos(y),f.y=(e+n*Math.cos(v))*Math.sin(y),f.z=n*Math.sin(v),o.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const y=(r+1)*m+_-1,v=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,g=(r+1)*m+_;a.push(y,v,g),a.push(v,u,g)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mn extends oa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l_,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lf extends At{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Db extends lf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const zu=new dt,ng=new D,ig=new D;class L_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),n.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ig),n.updateMatrixWorld(),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rg=new dt,Ma=new D,Bu=new D;class Ib extends L_{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ma),Bu.copy(i.position),Bu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Bu),i.updateMatrixWorld(),r.makeTranslation(-Ma.x,-Ma.y,-Ma.z),rg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rg)}}class Ub extends lf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ib}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kb extends L_{constructor(){super(new S_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ob extends lf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=sg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function sg(){return(typeof performance>"u"?Date:performance).now()}class zb{constructor(e,n,i=0,r=1/0){this.ray=new Tc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Kd(e,this,i,n),i.sort(ag),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kd(e[r],this,i,n);return i.sort(ag),i}}function ag(t,e){return t.distance-e.distance}function Kd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Kd(r[s],e,n,!0)}}class og{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(It(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);const lg={type:"change"},Hu={type:"start"},cg={type:"end"},al=new Tc,ug=new Gi,Bb=Math.cos(70*qi.DEG2RAD);class Hb extends Qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ie),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ie),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(lg),i.update(),s=r.NONE},this.update=function(){const L=new D,ee=new $r().setFromUnitVectors(e.up,new D(0,1,0)),de=ee.clone().invert(),ae=new D,Me=new $r,je=new D,Ye=2*Math.PI;return function(ue=null){const U=i.object.position;L.copy(U).sub(i.target),L.applyQuaternion(ee),o.setFromVector3(L),i.autoRotate&&s===r.NONE&&N(E(ue)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let oe=i.minAzimuthAngle,le=i.maxAzimuthAngle;isFinite(oe)&&isFinite(le)&&(oe<-Math.PI?oe+=Ye:oe>Math.PI&&(oe-=Ye),le<-Math.PI?le+=Ye:le>Math.PI&&(le-=Ye),oe<=le?o.theta=Math.max(oe,Math.min(le,o.theta)):o.theta=o.theta>(oe+le)/2?Math.max(oe,o.theta):Math.min(le,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?o.radius=F(o.radius):o.radius=F(o.radius*c),L.setFromSpherical(o),L.applyQuaternion(de),U.copy(i.target).add(L),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let be=!1;if(i.zoomToCursor&&T){let Ee=null;if(i.object.isPerspectiveCamera){const Qe=L.length();Ee=F(Qe*c);const Je=Qe-Ee;i.object.position.addScaledVector(S,Je),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new D(w.x,w.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),be=!0;const Je=new D(w.x,w.y,0);Je.unproject(i.object),i.object.position.sub(Je).add(Qe),i.object.updateMatrixWorld(),Ee=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ee!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ee).add(i.object.position):(al.origin.copy(i.object.position),al.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(al.direction))<Bb?e.lookAt(i.target):(ug.setFromNormalAndCoplanarPoint(i.object.up,i.target),al.intersectPlane(ug,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),be=!0);return c=1,T=!1,be||ae.distanceToSquared(i.object.position)>a||8*(1-Me.dot(i.object.quaternion))>a||je.distanceToSquared(i.target)>0?(i.dispatchEvent(lg),ae.copy(i.object.position),Me.copy(i.object.quaternion),je.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ve),i.domElement.removeEventListener("pointerdown",Ue),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",ne),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",A),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ie),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new og,l=new og;let c=1;const d=new D,f=new Ae,h=new Ae,m=new Ae,_=new Ae,y=new Ae,v=new Ae,u=new Ae,g=new Ae,x=new Ae,S=new D,w=new Ae;let T=!1;const M=[],P={};function E(L){return L!==null?2*Math.PI/60*i.autoRotateSpeed*L:2*Math.PI/60/60*i.autoRotateSpeed}function b(L){const ee=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,i.zoomSpeed*ee)}function N(L){l.theta-=L}function O(L){l.phi-=L}const Y=function(){const L=new D;return function(de,ae){L.setFromMatrixColumn(ae,0),L.multiplyScalar(-de),d.add(L)}}(),I=function(){const L=new D;return function(de,ae){i.screenSpacePanning===!0?L.setFromMatrixColumn(ae,1):(L.setFromMatrixColumn(ae,0),L.crossVectors(i.object.up,L)),L.multiplyScalar(de),d.add(L)}}(),B=function(){const L=new D;return function(de,ae){const Me=i.domElement;if(i.object.isPerspectiveCamera){const je=i.object.position;L.copy(je).sub(i.target);let Ye=L.length();Ye*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*de*Ye/Me.clientHeight,i.object.matrix),I(2*ae*Ye/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(de*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),I(ae*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function X(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(L){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function k(L,ee){if(!i.zoomToCursor)return;T=!0;const de=i.domElement.getBoundingClientRect(),ae=L-de.left,Me=ee-de.top,je=de.width,Ye=de.height;w.x=ae/je*2-1,w.y=-(Me/Ye)*2+1,S.set(w.x,w.y,1).unproject(i.object).sub(i.object.position).normalize()}function F(L){return Math.max(i.minDistance,Math.min(i.maxDistance,L))}function H(L){f.set(L.clientX,L.clientY)}function Z(L){k(L.clientX,L.clientX),u.set(L.clientX,L.clientY)}function J(L){_.set(L.clientX,L.clientY)}function $(L){h.set(L.clientX,L.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ee=i.domElement;N(2*Math.PI*m.x/ee.clientHeight),O(2*Math.PI*m.y/ee.clientHeight),f.copy(h),i.update()}function Q(L){g.set(L.clientX,L.clientY),x.subVectors(g,u),x.y>0?X(b(x.y)):x.y<0&&K(b(x.y)),u.copy(g),i.update()}function fe(L){y.set(L.clientX,L.clientY),v.subVectors(y,_).multiplyScalar(i.panSpeed),B(v.x,v.y),_.copy(y),i.update()}function _e(L){k(L.clientX,L.clientY),L.deltaY<0?K(b(L.deltaY)):L.deltaY>0&&X(b(L.deltaY)),i.update()}function xe(L){let ee=!1;switch(L.code){case i.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?O(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?O(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):B(-i.keyPanSpeed,0),ee=!0;break}ee&&(L.preventDefault(),i.update())}function De(L){if(M.length===1)f.set(L.pageX,L.pageY);else{const ee=$e(L),de=.5*(L.pageX+ee.x),ae=.5*(L.pageY+ee.y);f.set(de,ae)}}function Ie(L){if(M.length===1)_.set(L.pageX,L.pageY);else{const ee=$e(L),de=.5*(L.pageX+ee.x),ae=.5*(L.pageY+ee.y);_.set(de,ae)}}function Ce(L){const ee=$e(L),de=L.pageX-ee.x,ae=L.pageY-ee.y,Me=Math.sqrt(de*de+ae*ae);u.set(0,Me)}function qe(L){i.enableZoom&&Ce(L),i.enablePan&&Ie(L)}function j(L){i.enableZoom&&Ce(L),i.enableRotate&&De(L)}function Rt(L){if(M.length==1)h.set(L.pageX,L.pageY);else{const de=$e(L),ae=.5*(L.pageX+de.x),Me=.5*(L.pageY+de.y);h.set(ae,Me)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ee=i.domElement;N(2*Math.PI*m.x/ee.clientHeight),O(2*Math.PI*m.y/ee.clientHeight),f.copy(h)}function Te(L){if(M.length===1)y.set(L.pageX,L.pageY);else{const ee=$e(L),de=.5*(L.pageX+ee.x),ae=.5*(L.pageY+ee.y);y.set(de,ae)}v.subVectors(y,_).multiplyScalar(i.panSpeed),B(v.x,v.y),_.copy(y)}function Le(L){const ee=$e(L),de=L.pageX-ee.x,ae=L.pageY-ee.y,Me=Math.sqrt(de*de+ae*ae);g.set(0,Me),x.set(0,Math.pow(g.y/u.y,i.zoomSpeed)),X(x.y),u.copy(g);const je=(L.pageX+ee.x)*.5,Ye=(L.pageY+ee.y)*.5;k(je,Ye)}function ye(L){i.enableZoom&&Le(L),i.enablePan&&Te(L)}function st(L){i.enableZoom&&Le(L),i.enableRotate&&Rt(L)}function Ue(L){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(L.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",A)),Re(L),L.pointerType==="touch"?Se(L):V(L))}function R(L){i.enabled!==!1&&(L.pointerType==="touch"?pe(L):se(L))}function A(L){Oe(L),M.length===0&&(i.domElement.releasePointerCapture(L.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",A)),i.dispatchEvent(cg),s=r.NONE}function V(L){let ee;switch(L.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case es.DOLLY:if(i.enableZoom===!1)return;Z(L),s=r.DOLLY;break;case es.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enablePan===!1)return;J(L),s=r.PAN}else{if(i.enableRotate===!1)return;H(L),s=r.ROTATE}break;case es.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(i.enableRotate===!1)return;H(L),s=r.ROTATE}else{if(i.enablePan===!1)return;J(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Hu)}function se(L){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;$(L);break;case r.DOLLY:if(i.enableZoom===!1)return;Q(L);break;case r.PAN:if(i.enablePan===!1)return;fe(L);break}}function ne(L){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(L.preventDefault(),i.dispatchEvent(Hu),_e(L),i.dispatchEvent(cg))}function ie(L){i.enabled===!1||i.enablePan===!1||xe(L)}function Se(L){switch(te(L),M.length){case 1:switch(i.touches.ONE){case ts.ROTATE:if(i.enableRotate===!1)return;De(L),s=r.TOUCH_ROTATE;break;case ts.PAN:if(i.enablePan===!1)return;Ie(L),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ts.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;qe(L),s=r.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;j(L),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Hu)}function pe(L){switch(te(L),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Rt(L),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Te(L),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ye(L),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;st(L),i.update();break;default:s=r.NONE}}function ve(L){i.enabled!==!1&&L.preventDefault()}function Re(L){M.push(L.pointerId)}function Oe(L){delete P[L.pointerId];for(let ee=0;ee<M.length;ee++)if(M[ee]==L.pointerId){M.splice(ee,1);return}}function te(L){let ee=P[L.pointerId];ee===void 0&&(ee=new Ae,P[L.pointerId]=ee),ee.set(L.pageX,L.pageY)}function $e(L){const ee=L.pointerId===M[0]?M[1]:M[0];return P[ee]}i.domElement.addEventListener("contextmenu",ve),i.domElement.addEventListener("pointerdown",Ue),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",ne,{passive:!1}),this.update()}}class cf extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Ae(.5,.5),this.addEventListener("removed",function(){this.traverse(function(n){n.element instanceof Element&&n.element.parentNode!==null&&n.element.parentNode.removeChild(n.element)})})}copy(e,n){return super.copy(e,n),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const _s=new D,dg=new dt,hg=new dt,fg=new D,pg=new D;class jb{constructor(e={}){const n=this;let i,r,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),dg.copy(_.matrixWorldInverse),hg.multiplyMatrices(_.projectionMatrix,dg),c(m,m,_),h(m)},this.setSize=function(m,_){i=m,r=_,s=i/2,a=r/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m,_,y){if(m.isCSS2DObject){_s.setFromMatrixPosition(m.matrixWorld),_s.applyMatrix4(hg);const v=m.visible===!0&&_s.z>=-1&&_s.z<=1&&m.layers.test(y.layers)===!0;if(m.element.style.display=v===!0?"":"none",v===!0){m.onBeforeRender(n,_,y);const g=m.element;g.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(_s.x*s+s)+"px,"+(-_s.y*a+a)+"px)",g.parentNode!==l&&l.appendChild(g),m.onAfterRender(n,_,y)}const u={distanceToCameraSquared:d(y,m)};o.objects.set(m,u)}for(let v=0,u=m.children.length;v<u;v++)c(m.children[v],_,y)}function d(m,_){return fg.setFromMatrixPosition(m.matrixWorld),pg.setFromMatrixPosition(_.matrixWorld),fg.distanceToSquared(pg)}function f(m){const _=[];return m.traverse(function(y){y.isCSS2DObject&&_.push(y)}),_}function h(m){const _=f(m).sort(function(v,u){if(v.renderOrder!==u.renderOrder)return u.renderOrder-v.renderOrder;const g=o.objects.get(v).distanceToCameraSquared,x=o.objects.get(u).distanceToCameraSquared;return g-x}),y=_.length;for(let v=0,u=_.length;v<u;v++)_[v].element.style.zIndex=y-v}}}const qt={background:"#171124",floor:"#1f1630",floorEdge:"#302044",grid:"#3b2a55",body:"#2b2140",bodyLight:"#3a2c55",link:"#5a4878",pink:"#FF3D96",pinkLight:"#FF80BC",white:"#F7F5FA"},Kt={normal:"#A99AD1",suspicious:"#FF3D96",risk:"#FF8A3D",nodata:"#6E6680"},mg={servers:{center:[0,0,-5.6],axis:"x",spacing:2.3},apps:{center:[-7.2,0,-.6],axis:"z",spacing:2.4},data:{center:[7.2,0,-.6],axis:"z",spacing:2.4},network:{center:[-3.2,0,5.4],axis:"x",spacing:2.4},stations:{center:[4.2,0,5.4],axis:"x",spacing:2.2}};function Vb(t){const e={};t.forEach(r=>{var s;(e[s=r.zone]||(e[s]=[])).push(r)});const n={},i=[];return Object.entries(e).forEach(([r,s])=>{const a=mg[r]||mg.servers,o=s.length;s.forEach((c,d)=>{const f=(d-(o-1)/2)*a.spacing,[h,m,_]=a.center;n[c.id]=a.axis==="x"?[h+f,m,_]:[h,m,_+f]});const l=(o-1)*a.spacing+2.2;i.push({zone:r,center:a.center,size:a.axis==="x"?[l,2.4]:[2.4,l]})}),{positions:n,zones:i}}const Gb={normal:{glyph:"✓",text:"Normal"},suspicious:{glyph:"!",text:"Revisar"},risk:{glyph:"▲",text:"Riesgo"},nodata:{glyph:"?",text:"Sin datos"}};function Wb(t,e){const n=[],i=Math.PI*2/e;for(let r=0;r<e;r++){const s=r*i,a=s+i*.55;for(let o=0;o<4;o++){const l=s+(a-s)*o/4,c=s+(a-s)*(o+1)/4;n.push(new D(Math.cos(l)*t,0,Math.sin(l)*t)),n.push(new D(Math.cos(c)*t,0,Math.sin(c)*t))}}return new Ht().setFromPoints(n)}function Xb(){const t={rack:new $t(1.15,2.5,.95),rackFace:new $t(.95,.44,.03),rackLed:new $t(.72,.05,.02),monitor:new $t(1.1,.7,.08),screen:new bc(.98,.58),stand:new Qn(.05,.05,.55,8),desk:new $t(1.55,.08,.85),deskLeg:new $t(.08,.7,.08),core:new ec(.5,0),shell:new ec(.78,1),pedestal:new Qn(.32,.45,.22,6),disk:new Qn(.62,.62,.3,28),diskRing:new lo(.63,.025,6,40),ring:new lo(.55,.09,10,40),ringBase:new $t(.9,.32,.6),halo:new Lc(1,1.12,48),haloFill:new Rc(1,48),dashed:Wb(1.22,16),hit:new Qn(1,1,1,10)};t.halo.rotateX(-Math.PI/2),t.haloFill.rotateX(-Math.PI/2);const e={body:new Mn({color:qt.body,roughness:.55,metalness:.35}),bodyLight:new Mn({color:qt.bodyLight,roughness:.5,metalness:.25}),ghost:new Mn({color:"#4a4458",roughness:1,transparent:!0,opacity:.4}),shell:new di({color:qt.pinkLight,wireframe:!0,transparent:!0,opacity:.18}),hit:new di({visible:!1})};return{geometries:t,materials:e}}function ln(t,e,{cast:n=!0,receive:i=!1}={}){const r=new xt(t,e);return r.castShadow=n,r.receiveShadow=i,r}function qb(t,e,n){const{geometries:i,materials:r}=n,s=new un;s.position.set(...e),s.name=t.id;const a=new Mn({color:"#2a2238",emissive:Kt.normal,emissiveIntensity:.7}),o=[];let l=null,c=null,d=1.2,f=.8;if(t.type==="server"){const w=ln(i.rack,r.body);w.position.y=1.25,o.push(w),s.add(w);for(let T=0;T<4;T++){const M=ln(i.rackFace,r.bodyLight,{cast:!1});M.position.set(0,.45+T*.55,.48),s.add(M);const P=ln(i.rackLed,a,{cast:!1});P.position.set(0,.32+T*.55,.5),s.add(P)}d=2.5,f=.75}else if(t.type==="machine"){const w=ln(i.desk,r.bodyLight);w.position.y=.74,o.push(w),s.add(w),[[-.68,-.34],[.68,-.34],[-.68,.34],[.68,.34]].forEach(([E,b])=>{const N=ln(i.deskLeg,r.body);N.position.set(E,.35,b),s.add(N)});const T=ln(i.stand,r.body);T.position.y=1.05,s.add(T);const M=ln(i.monitor,r.body);M.position.y=1.55,o.push(M),s.add(M);const P=ln(i.screen,a,{cast:!1});P.position.set(0,1.55,.045),s.add(P),d=1.95,f=.85}else if(t.type==="service"){const w=ln(i.pedestal,r.body);w.position.y=.11,s.add(w),c=new un,c.position.y=1.5;const T=ln(i.core,a),M=new xt(i.shell,r.shell);c.add(T,M),s.add(c),l=c,d=2.3,f=.85,o.push(w)}else if(t.type==="storage"){for(let w=0;w<3;w++){const T=ln(i.disk,r.body);T.position.y=.2+w*.4,o.push(T),s.add(T);const M=ln(i.diskRing,a,{cast:!1});M.rotation.x=Math.PI/2,M.position.y=.2+w*.4+.08,s.add(M)}d=1.3,f=.8}else{const w=ln(i.ringBase,r.body);w.position.y=.16,o.push(w),s.add(w);const T=ln(i.ring,a);T.position.y=1.05,s.add(T),l=T,d=1.75,f=.75}o.forEach(w=>{w.userData.baseMaterial=w.material});const h=new di({color:Kt.normal,transparent:!0,opacity:.35,depthWrite:!1}),m=new di({color:Kt.normal,transparent:!0,opacity:0,depthWrite:!1}),_=new xt(i.halo,h);_.position.y=.03,s.add(_);const y=new xt(i.haloFill,m);y.position.y=.025,s.add(y);const v=new Jl({color:Kt.nodata,transparent:!0,opacity:.9}),u=new P_(i.dashed,v);u.position.y=.04,u.visible=!1,s.add(u);const g=new xt(i.hit,r.hit);g.scale.set(f,d+.4,f),g.position.y=(d+.4)/2,g.userData.componentId=t.id,s.add(g);const x=document.createElement("div");x.className="scene-label",x.innerHTML='<span class="scene-label__name"></span><span class="scene-label__status"><b aria-hidden="true"></b><span></span></span>',x.querySelector(".scene-label__name").textContent=t.name;const S=new cf(x);return S.position.set(0,d+.45,0),s.add(S),{id:t.id,comp:t,group:s,hit:g,label:S,labelEl:x,ledMat:a,haloMat:h,fillMat:m,halo:_,fill:y,dashed:u,bodyMeshes:o,spinner:l,floater:c,height:d,status:"normal",phase:Math.random()*Math.PI*2}}function $b(t,e,n,i={}){t.status=e,t.dimmed=!!i.dimmed;const r=Kt[e],s={normal:.7,suspicious:1.8,risk:2.4,nodata:.05}[e];t.ledMat.emissive.set(r),t.ledMat.emissiveIntensity=t.dimmed?.08:s,t.haloMat.color.set(r),t.fillMat.color.set(r),t.halo.visible=e!=="nodata"&&!t.dimmed,t.halo.scale.set(1,1,1),t.haloMat.opacity=e==="normal"?.28:.75,t.fill.visible=!t.dimmed,t.fillMat.opacity=e==="risk"?.16:e==="suspicious"?.1:0,t.dashed.visible=e==="nodata"&&!t.dimmed,t.bodyMeshes.forEach(o=>{o.material=e==="nodata"||t.dimmed?n.materials.ghost:o.userData.baseMaterial});const a=Gb[e];t.labelEl.dataset.status=e,t.labelEl.dataset.dimmed=t.dimmed?"true":"false",t.labelEl.querySelector(".scene-label__status b").textContent=a.glyph,t.labelEl.querySelector(".scene-label__status span").textContent=a.text,Zd(t,i.labels,i.selected)}function Zd(t,e,n){const i=e==="flagged"&&t.status==="normal"&&!n;t.labelEl.dataset.hidden=i?"true":"false",t.labelEl.dataset.selected=n?"true":"false"}function Yb(t,e){const n=e+t.phase;if(t.spinner&&(t.spinner.rotation.y+=t.status==="risk"?.02:.008),t.floater&&(t.floater.position.y=1.5+Math.sin(n*1.2)*.08),!t.dimmed){if(t.impact>0){t.impact=Math.max(0,t.impact-.025);const i=t.status==="risk"?.16:t.status==="suspicious"?.1:0,r=t.impact>0?1+(1-t.impact)*1.4:1;t.fill.scale.set(r,1,r),t.fillMat.opacity=i+t.impact*.45}if(t.status==="suspicious"||t.status==="risk"){const i=t.status==="risk"?3.4:2.2,r=(Math.sin(n*i)+1)/2,s=1+r*(t.status==="risk"?.35:.22);t.halo.scale.set(s,1,s),t.haloMat.opacity=.85-r*.55,t.ledMat.emissiveIntensity=(t.status==="risk"?1.8:1.2)+r*1.2}else t.halo.scale.x!==1&&t.halo.scale.set(1,1,1);t.status==="nodata"&&(t.dashed.rotation.y+=.004)}}const ju={normal:"Todo en orden",suspicious:"Hay señales por revisar",risk:"Riesgo elevado: revisa las alertas",nodata:"Faltan lecturas de algunos equipos"};function Kb(){const t=new un;t.name="dino";const e=[],n=new Mn({color:qt.pink,roughness:.45,metalness:.05}),i=new Mn({color:qt.pinkLight,roughness:.5}),r=new Mn({color:"#ffffff",roughness:.3}),s=new Mn({color:"#171124",roughness:.4}),a=new Mn({color:"#2a2238",emissive:Kt.normal,emissiveIntensity:1.2});e.push(n,i,r,s,a);const o=(u,g,x,S,w,T)=>{e.push(u);const M=new xt(u,g);return M.castShadow=!0,S&&M.position.set(...S),w&&M.rotation.set(...w),T&&M.scale.set(...T),x.add(M),M},l=new un;t.add(l),o(new Ei(.7,24,16),n,l,[0,1.25,0],[-.3,0,0],[.85,1,1.15]),o(new Ei(.5,20,14),i,l,[0,1.15,.42],[-.3,0,0],[.75,.95,.55]);const c=o(new Rc(.11,20),a,l,[0,1.42,.62],[-.35,0,0]);c.castShadow=!1,o(new oo(.36,1.7,16),n,l,[0,1,-1.05],[-Math.PI/2-.28,0,0]),[[1.98,-.1],[1.85,-.48],[1.58,-.82],[1.28,-1.12]].forEach(([u,g])=>{o(new oo(.1,.24,6),i,l,[0,u,g],[-.5,0,0])});const d=new un;d.position.set(0,2.05,.5),l.add(d),o(new $t(.76,.6,.98),n,d,[0,.1,.22]);const f=new un;f.position.set(0,-.2,-.15),d.add(f),o(new $t(.62,.16,.82),i,f,[0,-.02,.4]),[-1,1].forEach(u=>{o(new Ei(.11,12,10),r,d,[.36*u,.24,.32]),o(new Ei(.055,10,8),s,d,[.43*u,.25,.36]),o(new Ei(.035,8,6),s,d,[.18*u,.22,.72])});const h=[-1,1].map(u=>{const g=new un;return g.position.set(.38*u,1.55,.5),l.add(g),o(new Qn(.06,.05,.36,8),n,g,[0,-.15,.08],[.9,0,0]),g});[-1,1].forEach(u=>{o(new Ei(.32,16,12),n,t,[.36*u,.85,-.05],null,[.9,1.15,1.1]),o(new Qn(.13,.11,.6,10),n,t,[.36*u,.38,0]),o(new $t(.3,.12,.5),i,t,[.36*u,.06,.12])});const m=document.createElement("div");m.className="dino-bubble-anchor";const _=document.createElement("div");_.className="dino-bubble",_.textContent=ju.normal,m.appendChild(_);const y=new cf(m);y.position.set(0,3.2,.4),t.add(y);const v={mood:"normal",lookYaw:0};return{root:t,bubbleEl:_,setMood(u){v.mood=u,_.textContent=ju[u]||ju.normal,_.dataset.mood=u,a.emissive.set(Kt[u]||Kt.normal),a.emissiveIntensity=u==="nodata"?.2:1.4},setLook(u){v.lookYaw=u},applyStaticPose(){const u=v.mood;d.rotation.set(u==="risk"?-.1:0,u==="nodata"?.5:v.lookYaw*.6,u==="suspicious"?.22:0),f.rotation.x=u==="risk"?.35:0,h.forEach(g=>{g.rotation.x=u==="risk"?-1.1:0}),l.rotation.x=u==="risk"?-.12:0,l.position.y=0},animate(u){const g=v.mood,x=Math.sin(u*1.6)*.03;l.position.y=g==="risk"?Math.abs(Math.sin(u*4))*.12:x,l.rotation.x=qi.lerp(l.rotation.x,g==="risk"?-.12:0,.08);const S=g==="nodata"?Math.sin(u*.8)*.7:v.lookYaw*.6+Math.sin(u*.5)*.06;d.rotation.y=qi.lerp(d.rotation.y,S,.06),d.rotation.z=qi.lerp(d.rotation.z,g==="suspicious"?.22:0,.06),f.rotation.x=qi.lerp(f.rotation.x,g==="risk"?.3+Math.sin(u*6)*.05:.02,.15),h.forEach((w,T)=>{const M=g==="risk"?-1.1+Math.sin(u*6+T)*.15:Math.sin(u*1.6+T)*.08;w.rotation.x=qi.lerp(w.rotation.x,M,.12)})},dispose(){e.forEach(u=>u.dispose())}}}function Zb(t=2){const e=new un,n=new of(.3,0),i=new oo(.26,1.8,12,1,!0);i.translate(0,.9,0),i.rotateX(-Math.PI/2);const r=new D,s=Array.from({length:t},()=>{const a=new Mn({color:"#3a2a3a",emissive:Kt.risk,emissiveIntensity:1.6,roughness:.8,transparent:!0}),o=new di({color:Kt.risk,transparent:!0,opacity:.45,blending:Bd,depthWrite:!1}),l=new un,c=new xt(n,a),d=new xt(i,o);return l.add(c,d),l.visible=!1,e.add(l),{g:l,rock:c,rockMat:a,trailMat:o,active:!1,t:0,from:new D,to:new D,targetId:null}});return{group:e,get activeCount(){return s.filter(a=>a.active).length},spawn(a,o,l,c){const d=s.find(h=>!h.active);if(!d)return!1;const f=Kt[c==="risk"?"risk":"suspicious"];return d.rockMat.emissive.set(f),d.trailMat.color.set(f),d.active=!0,d.t=0,d.targetId=a,d.from.set(o.x-5,13,o.z-6),d.to.set(o.x,l+1.3,o.z),d.g.position.copy(d.from),d.g.lookAt(d.to),d.g.visible=!0,d.g.scale.setScalar(c==="risk"?1:.7),!0},update(a,o){for(const l of s){if(!l.active)continue;l.t+=a;const c=2.2;if(l.t<=c){const d=l.t/c,f=d*d*(3-2*d);r.lerpVectors(l.from,l.to,f),l.g.position.copy(r),l.rock.rotation.x+=a*2,l.rockMat.opacity=1,l.trailMat.opacity=.45}else{l.arrived||(l.arrived=!0,o==null||o(l.targetId));const d=Math.max(0,1-(l.t-c)/.6);l.rockMat.opacity=d,l.trailMat.opacity=.45*d,d<=0&&(l.active=!1,l.arrived=!1,l.g.visible=!1)}}},clear(){s.forEach(a=>{a.active=!1,a.arrived=!1,a.g.visible=!1})},dispose(){n.dispose(),i.dispose(),s.forEach(a=>{a.rockMat.dispose(),a.trailMat.dispose()})}}}const gg=new D(9,12.5,18.5),vg=new D(0,.8,0),Vu=new D(-8.8,0,5.4),Gu={normal:0,nodata:1,suspicious:2,risk:3};class Qb{constructor(e,{onSelect:n,onError:i,quality:r="high",reducedMotion:s=!1,labels:a="all",compact:o=!1}={}){pi(this,"onPointerDown",e=>{this.downAt={x:e.clientX,y:e.clientY}});pi(this,"onPointerUp",e=>{var i;if(!this.downAt)return;const n=Math.hypot(e.clientX-this.downAt.x,e.clientY-this.downAt.y);this.downAt=null,!(n>6)&&((i=this.onSelect)==null||i.call(this,this.pick(e)))});pi(this,"onPointerMove",e=>{var i,r;if(e.buttons)return;const n=this.pick(e);n!==this.hoveredId&&(this.hoveredId&&((i=this.nodes.get(this.hoveredId))==null||i.labelEl.removeAttribute("data-hover")),this.hoveredId=n,n&&((r=this.nodes.get(n))==null||r.labelEl.setAttribute("data-hover","true")),this.renderer.domElement.style.cursor=n?"pointer":"grab",this.requestRender())});pi(this,"onPointerLeave",()=>{var e;this.hoveredId&&((e=this.nodes.get(this.hoveredId))==null||e.labelEl.removeAttribute("data-hover")),this.hoveredId=null});pi(this,"onControlsChange",()=>{const e=this.controls.target,n=Math.hypot(e.x,e.z);n>8&&(e.x*=8/n,e.z*=8/n),e.y=qi.clamp(e.y,0,3),this.requestRender()});pi(this,"onContextLost",e=>{var n;e.preventDefault(),this.stop(),(n=this.onError)==null||n.call(this,new Error("Se perdió el contexto WebGL"))});pi(this,"updateRunning",()=>{this.visible&&!document.hidden?this.start():this.stop()});pi(this,"loop",()=>{if(this.raf=0,this.disposed)return;const e=Math.min(this.clock.getDelta(),.05),n=this.clock.elapsedTime;let i=!1;if(this.tween){const r=this.tween;r.t+=e/r.duration;const s=Math.min(1,r.t),a=1-Math.pow(1-s,3);this.camera.position.lerpVectors(r.fromPos,r.toPos,a),this.controls.target.lerpVectors(r.fromTarget,r.toTarget,a),s>=1&&(this.tween=null),this.needsRender=!0,i=!0}this.controls.update()&&(this.needsRender=!0,i=!0),this.reducedMotion||(this.nodes.forEach(r=>Yb(r,n)),this.links.forEach(r=>{if(!r.pulse.visible)return;const s=(n*r.speed+r.offset)%1;r.curve.getPoint(s,r.pulse.position)}),this.mascot.animate(n),this.selectRing.visible&&(this.selectRing.rotation.y+=e*.6),this.updateMeteors(e),this.needsRender=!0,i=!0),this.needsRender&&(this.renderer.render(this.scene,this.camera),this.labelRenderer.render(this.scene,this.camera),this.needsRender=!1),i&&this.start()});this.container=e,this.onSelect=n,this.onError=i,this.quality=r,this.reducedMotion=s,this.labels=a,this.compact=o,this.nodes=new Map,this.links=[],this.states={},this.dimmed=null,this.selectedId=null,this.hoveredId=null,this.visible=!0,this.needsRender=!0,this.tween=null,this.meteorTimer=1.2,this.meteorCursor=0,this.raf=0,this.disposed=!1;const{clientWidth:l,clientHeight:c}=e,d=r==="high";this.renderer=new C_({antialias:d,powerPreference:"default"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,d?1.75:1)),this.renderer.setSize(l||300,c||300),this.renderer.shadowMap.enabled=d,this.renderer.shadowMap.type=Zv,this.renderer.domElement.className="scene-canvas",this.renderer.domElement.setAttribute("aria-hidden","true"),e.appendChild(this.renderer.domElement),this.labelRenderer=new jb,this.labelRenderer.setSize(l||300,c||300),this.labelRenderer.domElement.className="scene-labels",e.appendChild(this.labelRenderer.domElement),this.scene=new bb,this.scene.background=new Ke(qt.background),this.scene.fog=new af(qt.background,30,62),this.camera=new Sn(o?46:40,(l||1)/(c||1),.1,200),this.camera.position.copy(gg),o&&this.camera.position.multiplyScalar(1.12),this.controls=new Hb(this.camera,this.renderer.domElement),this.controls.target.copy(vg),this.controls.enableDamping=!s,this.controls.dampingFactor=.08,this.controls.minDistance=8,this.controls.maxDistance=36,this.controls.minPolarAngle=.3,this.controls.maxPolarAngle=1.32,this.controls.screenSpacePanning=!1,this.controls.addEventListener("change",this.onControlsChange),this.clock=new Fb,this.controls.update(),this.assets=Xb(),this.buildEnvironment(),this.mascot=Kb(),this.mascot.root.position.copy(Vu),this.mascot.root.rotation.y=.5,this.mascot.root.scale.setScalar(.92),this.scene.add(this.mascot.root),this.meteors=Zb(2),this.scene.add(this.meteors.group),this.infra=new un,this.scene.add(this.infra);const f=new Lc(1.32,1.46,48);f.rotateX(-Math.PI/2),this.selectRing=new xt(f,new di({color:qt.white,transparent:!0,opacity:.9,depthWrite:!1})),this.selectRing.visible=!1,this.scene.add(this.selectRing),this.raycaster=new zb,this.pointer=new Ae;const h=this.renderer.domElement;h.addEventListener("pointerdown",this.onPointerDown),h.addEventListener("pointerup",this.onPointerUp),h.addEventListener("pointermove",this.onPointerMove),h.addEventListener("pointerleave",this.onPointerLeave),h.addEventListener("webglcontextlost",this.onContextLost),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.intersection=new IntersectionObserver(([m])=>{this.visible=m.isIntersecting,this.updateRunning()}),this.intersection.observe(e),document.addEventListener("visibilitychange",this.updateRunning),this.updateRunning()}buildEnvironment(){const e=this.scene;e.add(new Db("#d9c8ff","#171124",.75));const n=new Ob("#ffffff",1.25);n.position.set(8,16,7),n.castShadow=this.quality==="high",n.shadow.mapSize.set(1024,1024),Object.assign(n.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:45}),n.shadow.bias=-8e-4,e.add(n);const i=new Ub(qt.pink,.6,26,2);i.position.set(0,5,0),e.add(i);const r=new Qn(13,13.4,.5,72),s=new xt(r,new Mn({color:qt.floor,roughness:.92,metalness:.05}));s.position.y=-.25,s.receiveShadow=!0,e.add(s);const a=new lo(13.05,.05,6,120);a.rotateX(Math.PI/2);const o=new xt(a,new di({color:qt.pink,transparent:!0,opacity:.55}));o.position.y=.01,e.add(o);const l=[];[4.2,8.4,12.4].forEach(h=>{for(let m=0;m<96;m++){const _=m/96*Math.PI*2,y=(m+1)/96*Math.PI*2;l.push(new D(Math.cos(_)*h,.012,Math.sin(_)*h),new D(Math.cos(y)*h,.012,Math.sin(y)*h))}});for(let h=0;h<12;h++){const m=h/12*Math.PI*2;l.push(new D(Math.cos(m)*1.5,.012,Math.sin(m)*1.5),new D(Math.cos(m)*12.4,.012,Math.sin(m)*12.4))}const c=new P_(new Ht().setFromPoints(l),new Jl({color:qt.grid,transparent:!0,opacity:.55}));e.add(c);const d=new Qn(.9,1.1,.18,32),f=new xt(d,new Mn({color:qt.floorEdge,emissive:qt.pink,emissiveIntensity:.15}));f.position.y=.09,f.receiveShadow=!0,e.add(f)}setInfrastructure(e,n){this.clearInfrastructure();const{positions:i,zones:r}=Vb(e);this.positions=i;const s=new Mn({color:"#251a39",roughness:.9});this.zoneMaterials=[s],r.forEach(o=>{var m;const l=new $t(o.size[0],.06,o.size[1]),c=new xt(l,s);c.position.set(o.center[0],.03,o.center[2]),c.receiveShadow=!0,this.infra.add(c);const d=document.createElement("div");d.className="scene-zone",d.textContent=((m=Hs[o.zone])==null?void 0:m.label)||o.zone;const f=new cf(d),h=o.size[1]/2+.35;f.position.set(o.center[0],.1,o.center[2]+h),this.infra.add(f)}),e.forEach(o=>{const l=qb(o,i[o.id],this.assets);this.nodes.set(o.id,l),this.infra.add(l.group)});const a=new Ei(.09,10,8);this.pulseGeo=a,n.forEach(([o,l],c)=>{const d=this.nodes.get(o),f=this.nodes.get(l);if(!d||!f)return;const h=new D(d.group.position.x,.12,d.group.position.z),m=new D(f.group.position.x,.12,f.group.position.z),_=h.clone().lerp(m,.5);_.y=1.2+h.distanceTo(m)*.12;const y=new Nb(h,_,m),v=new Ht().setFromPoints(y.getPoints(32)),u=new Jl({color:qt.link,transparent:!0,opacity:.7}),g=new R_(v,u),x=new di({color:Kt.normal}),S=new xt(a,x);this.infra.add(g,S),this.links.push({a:o,b:l,curve:y,geo:v,lineMat:u,pulse:S,pulseMat:x,offset:c*.37%1,speed:.12+c%3*.03})}),this.applyAllStates(),this.updateSelectionRing(),this.requestRender()}clearInfrastructure(){var n,i,r;(n=this.meteors)==null||n.clear();const e=[...this.infra.children];e.forEach(s=>{s.traverse(a=>{var o;a.isCSS2DObject&&((o=a.element)!=null&&o.parentNode)&&a.element.parentNode.removeChild(a.element)}),this.infra.remove(s)}),this.nodes.forEach(s=>{s.ledMat.dispose(),s.haloMat.dispose(),s.fillMat.dispose(),s.dashed.material.dispose()}),this.links.forEach(s=>{s.geo.dispose(),s.lineMat.dispose(),s.pulseMat.dispose()}),(i=this.zoneMaterials)==null||i.forEach(s=>s.dispose()),e.forEach(s=>{var a;s.isMesh&&((a=s.geometry)==null?void 0:a.type)==="BoxGeometry"&&!Object.values(this.assets.geometries).includes(s.geometry)&&s.geometry.dispose()}),(r=this.pulseGeo)==null||r.dispose(),this.nodes.clear(),this.links=[]}setStates(e,n){this.states=e||{},this.mood=n||"normal",this.mascot.setMood(this.mood),this.applyAllStates(),this.updateMascotLook(),this.meteorTimer=Math.min(this.meteorTimer,1),this.requestRender()}applyAllStates(){this.nodes.forEach((e,n)=>{$b(e,this.states[n]||"normal",this.assets,{labels:this.labels,dimmed:this.dimmed?!this.dimmed.has(n):!1,selected:n===this.selectedId})}),this.links.forEach(e=>{const n=this.states[e.a]||"normal",i=this.states[e.b]||"normal",r=Gu[n]>=Gu[i]?n:i,s=n==="nodata"||i==="nodata",a=s?Kt.nodata:r==="normal"?qt.link:Kt[r];e.lineMat.color.set(a),e.lineMat.opacity=s?.3:r==="normal"?.6:.9,e.pulseMat.color.set(r==="normal"?Kt.normal:Kt[r]),e.broken=s,e.pulse.visible=!s&&!this.reducedMotion,(!e.pulse.visible||this.reducedMotion)&&e.pulse.position.copy(e.curve.getPoint(.5))})}updateMascotLook(){let e=null,n=0;if(this.nodes.forEach((a,o)=>{const l=Gu[this.states[o]||"normal"];l>n&&(n=l,e=a)}),!e){this.mascot.setLook(0);return}const i=e.group.position.x-Vu.x,r=e.group.position.z-Vu.z,s=Math.atan2(i,r)-this.mascot.root.rotation.y;this.mascot.setLook(Math.max(-1,Math.min(1,s))),this.reducedMotion&&this.mascot.applyStaticPose()}setLabels(e){this.labels=e,this.nodes.forEach((n,i)=>Zd(n,e,i===this.selectedId)),this.requestRender()}setDimmed(e){this.dimmed=e?new Set(e):null,this.applyAllStates(),this.requestRender()}setReducedMotion(e){this.reducedMotion=e,this.controls.enableDamping=!e,e&&(this.meteors.clear(),this.mascot.applyStaticPose()),this.applyAllStates(),this.requestRender()}setSelected(e){this.selectedId=e||null,this.nodes.forEach((n,i)=>Zd(n,this.labels,i===this.selectedId)),this.updateSelectionRing(),this.requestRender()}updateSelectionRing(){const e=this.selectedId&&this.nodes.get(this.selectedId);this.selectRing.visible=!!e,e&&this.selectRing.position.set(e.group.position.x,.05,e.group.position.z)}focusOn(e){const n=this.nodes.get(e);if(!n)return;const i=new D(n.group.position.x,n.height*.5,n.group.position.z),r=this.camera.position.clone().sub(this.controls.target).normalize();r.y<.45&&(r.y=.45,r.normalize());const s=i.clone().add(r.multiplyScalar(this.compact?13:11));this.animateCamera(s,i)}resetView(){const e=gg.clone();this.compact&&e.multiplyScalar(1.12),this.animateCamera(e,vg.clone())}zoom(e){const n=this.camera.position.clone().sub(this.controls.target),i=qi.clamp(n.length()*e,this.controls.minDistance,this.controls.maxDistance),r=this.controls.target.clone().add(n.setLength(i));this.animateCamera(r,this.controls.target.clone(),.35)}animateCamera(e,n,i=.9){if(this.reducedMotion){this.camera.position.copy(e),this.controls.target.copy(n),this.controls.update(),this.requestRender();return}this.tween={fromPos:this.camera.position.clone(),toPos:e,fromTarget:this.controls.target.clone(),toTarget:n,t:0,duration:i},this.start()}pick(e){const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObjects([...this.nodes.values()].map(r=>r.hit),!1);return i.length?i[0].object.userData.componentId:null}requestRender(){this.needsRender=!0,this.start()}start(){this.raf||this.disposed||!this.visible||document.hidden||(this.clock.getDelta(),this.raf=requestAnimationFrame(this.loop))}stop(){this.raf&&cancelAnimationFrame(this.raf),this.raf=0}updateMeteors(e){if(this.meteors.update(e,a=>{const o=this.nodes.get(a);o&&(o.impact=1)}),this.meteorTimer-=e,this.meteorTimer>0)return;const n=[...this.nodes.values()].filter(a=>(a.status==="risk"||a.status==="suspicious")&&!a.dimmed);if(!n.length){this.meteorTimer=2;return}const i=n.filter(a=>a.status==="risk"),r=i.length?i:n,s=r[this.meteorCursor%r.length];this.meteorCursor+=1,this.meteors.spawn(s.id,s.group.position,s.height,s.status),this.meteorTimer=i.length?4.5:8}resize(){const{clientWidth:e,clientHeight:n}=this.container;!e||!n||(this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n),this.labelRenderer.setSize(e,n),this.requestRender())}dispose(){this.disposed=!0,this.stop(),this.resizeObserver.disconnect(),this.intersection.disconnect(),document.removeEventListener("visibilitychange",this.updateRunning);const e=this.renderer.domElement;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerleave",this.onPointerLeave),e.removeEventListener("webglcontextlost",this.onContextLost),this.controls.removeEventListener("change",this.onControlsChange),this.controls.dispose(),this.clearInfrastructure(),this.mascot.dispose(),this.meteors.dispose();const n=new Set;this.scene.traverse(i=>{i.geometry&&!n.has(i.geometry)&&(n.add(i.geometry),i.geometry.dispose()),(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).forEach(s=>{n.has(s)||(n.add(s),s.dispose())})}),Object.values(this.assets.geometries).forEach(i=>i.dispose()),Object.values(this.assets.materials).forEach(i=>i.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),e.remove(),this.labelRenderer.domElement.remove()}}function Jb(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl2")||t.getContext("webgl")))}catch{return!1}}function e2({components:t,states:e,selectedId:n,onSelect:i,reason:r}){const s=Object.keys(Hs).filter(a=>t.some(o=>o.zone===a));return p.jsxs("div",{className:"scene-fallback",children:[p.jsx("p",{className:"scene-fallback__note",children:r==="error"?"La vista 3D se detuvo en este equipo. Mostramos la misma infraestructura en 2D.":"Este navegador no admite WebGL. Mostramos la infraestructura en 2D."}),p.jsx("div",{className:"fallback-zones",children:s.map(a=>p.jsxs("section",{className:"fallback-zone","aria-label":Hs[a].label,children:[p.jsx("h3",{children:Hs[a].label}),p.jsx("div",{className:"fallback-grid",children:t.filter(o=>o.zone===a).map(o=>{const l=e[o.id]||"normal";return p.jsxs("button",{type:"button",className:"fallback-tile","data-status":l,"aria-pressed":n===o.id,onClick:()=>i(o.id),children:[p.jsx(pr,{status:l,size:16}),p.jsx("span",{className:"fallback-tile__name",children:o.name}),p.jsx("span",{className:"fallback-tile__status",children:wn[l].short})]},o.id)})})]},a))})]})}class t2 extends ce.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e){console.error("[DinoAlert] Error en la escena 3D:",e)}render(){return this.state.failed?this.props.fallback:this.props.children}}function n2({components:t,links:e,states:n,mood:i,selectedId:r,onSelect:s,focusRequest:a,reducedMotion:o,quality:l,labels:c,dimmedIds:d,compact:f,onFail:h}){const m=ce.useRef(null),_=ce.useRef(null),y=ce.useRef(s);y.current=s,ce.useEffect(()=>{let u;try{u=new Qb(m.current,{onSelect:g=>{var x;return(x=y.current)==null?void 0:x.call(y,g)},onError:h,quality:l,reducedMotion:o,labels:c,compact:f})}catch(g){console.error("[DinoAlert] No se pudo iniciar WebGL:",g),h==null||h(g);return}return _.current=u,()=>{u.dispose(),_.current=null}},[l,f]),ce.useEffect(()=>{var u;(u=_.current)==null||u.setInfrastructure(t,e)},[t,e,l,f]),ce.useEffect(()=>{var u;(u=_.current)==null||u.setStates(n,i)},[n,i,t,l,f]),ce.useEffect(()=>{var u;(u=_.current)==null||u.setSelected(r)},[r,t,l,f]),ce.useEffect(()=>{var u;(u=_.current)==null||u.setDimmed(d)},[d,t,l,f]),ce.useEffect(()=>{var u;(u=_.current)==null||u.setLabels(c)},[c,l,f]),ce.useEffect(()=>{var u;(u=_.current)==null||u.setReducedMotion(o)},[o,l,f]),ce.useEffect(()=>{var u;a!=null&&a.id&&((u=_.current)==null||u.focusOn(a.id))},[a,t,l,f]);const v=u=>()=>_.current&&u(_.current);return p.jsxs(p.Fragment,{children:[p.jsx("div",{ref:m,className:"scene-host"}),p.jsxs("div",{className:"scene-tools",role:"toolbar","aria-label":"Controles de cámara",children:[p.jsx("button",{type:"button",className:"icon-btn",onClick:v(u=>u.zoom(.8)),"aria-label":"Acercar",title:"Acercar",children:p.jsx(nM,{size:18})}),p.jsx("button",{type:"button",className:"icon-btn",onClick:v(u=>u.zoom(1.25)),"aria-label":"Alejar",title:"Alejar",children:p.jsx(iM,{size:18})}),p.jsx("button",{type:"button",className:"icon-btn",onClick:v(u=>u.resetView()),"aria-label":"Restablecer vista",title:"Restablecer vista",children:p.jsx(yc,{size:18})}),r&&p.jsx("button",{type:"button",className:"icon-btn",onClick:v(u=>u.focusOn(r)),"aria-label":"Centrar componente seleccionado",title:"Centrar selección",children:p.jsx(xc,{size:18})})]})]})}function uf(t){const{components:e,states:n,selectedId:i,onSelect:r,onPick:s,compact:a,showLegend:o=!0,illustrative:l=!0}=t,[c]=ce.useState(()=>Jb()),[d,f]=ce.useState(!1),h=p.jsx(e2,{components:e,states:n,selectedId:i,onSelect:r,reason:d?"error":"unsupported"});return p.jsxs("div",{className:`scene ${a?"scene--compact":""}`,children:[c&&!d?p.jsx(t2,{fallback:h,children:p.jsx(n2,{...t,onFail:()=>f(!0)})}):h,p.jsxs("div",{className:"scene-picker",children:[p.jsx("label",{className:"sr-only",htmlFor:`picker-${a?"c":"m"}`,children:"Ir a un componente"}),p.jsxs("select",{id:`picker-${a?"c":"m"}`,value:i||"",onChange:m=>(s||r)(m.target.value||null),children:[p.jsx("option",{value:"",children:"Ir a un componente…"}),e.map(m=>p.jsxs("option",{value:m.id,children:[m.name," (",wn[n[m.id]||"normal"].short,")"]},m.id))]})]}),o&&p.jsxs("div",{className:"scene-legend","aria-label":"Leyenda de estados",children:[Object.entries(wn).map(([m,_])=>p.jsxs("span",{className:"legend-item","data-status":m,children:[p.jsx("i",{"aria-hidden":"true"}),_.label]},m)),!a&&p.jsx("span",{className:"legend-note",children:"Meteorito: señal que se acerca a un componente"})]}),l&&p.jsx("p",{className:"scene-disclaimer",children:"Representación ilustrativa con datos simulados"})]})}function N_({alert:t,onOpen:e,compact:n=!1}){return p.jsxs("article",{className:`alert-card ${n?"alert-card--compact":""}`,"data-priority":t.priority,"data-astatus":t.status,children:[p.jsx("button",{type:"button",className:"alert-card__hit",onClick:()=>e(t),"aria-label":`Ver detalles: ${t.title}`}),p.jsx("div",{className:"alert-card__icon",children:p.jsx(pr,{status:t.severity,size:18})}),p.jsxs("div",{className:"alert-card__main",children:[p.jsx("h3",{className:"alert-card__title",children:t.title}),!n&&p.jsx("p",{className:"alert-card__summary",children:t.summary}),p.jsxs("div",{className:"alert-card__meta",children:[p.jsx(mr,{priority:t.priority}),!n&&p.jsx(Zh,{status:t.status}),p.jsxs("span",{className:"meta-time",children:[p.jsx(Hv,{size:13,"aria-hidden":"true"}),"Desde ",t.startedAt]}),!n&&p.jsx("span",{className:"meta-comp",children:t.componentName})]})]}),p.jsx("span",{className:"alert-card__go","aria-hidden":"true",children:n?p.jsx(Wl,{size:16}):p.jsxs("span",{className:"link-like",children:["Ver detalles",p.jsx(Wl,{size:15})]})})]})}const i2={normal:"Normal",suspicious:"Señal",risk:"Riesgo",nodata:"Sin datos",current:"Ahora",user:"Acción"};function D_({items:t}){return p.jsx("ol",{className:"timeline",children:t.map((e,n)=>p.jsxs("li",{className:"timeline__item","data-type":e.type,children:[p.jsx("span",{className:"timeline__dot","aria-hidden":"true"}),p.jsx("time",{className:"timeline__time",children:e.time}),p.jsx("span",{className:"timeline__text",children:e.label}),p.jsx("span",{className:"timeline__kind",children:i2[e.type]||""})]},`${e.tick}-${n}`))})}const xs=640,ft={top:18,right:14,bottom:26,left:44};function I_({series:t,tick:e,height:n=190,unit:i="",threshold:r,markers:s=[],domain:a,ariaLabel:o,formatValue:l}){const c=ce.useId().replace(/:/g,""),[d,f]=ce.useState(null),h=n,m=xs-ft.left-ft.right,_=h-ft.top-ft.bottom,y=l||(N=>`${Math.round(N)}${i?` ${i}`:""}`),{yMin:v,yMax:u}=ce.useMemo(()=>{if(a)return{yMin:a[0],yMax:a[1]};let N=(r==null?void 0:r.value)||0;return t.forEach(O=>O.values.forEach((Y,I)=>{Y!==null&&I<=e&&(N=Math.max(N,Y))})),{yMin:0,yMax:Math.max(1,N*1.15)}},[t,e,a,r]),g=N=>ft.left+N/(yn-1)*m,x=N=>ft.top+_-(N-v)/(u-v)*_,S=t.map(N=>{let O="",Y=!1;return N.values.forEach((I,B)=>{if(B>e||I===null){Y=!1;return}O+=`${Y?"L":"M"}${g(B).toFixed(1)},${x(I).toFixed(1)}`,Y=!0}),O}),w=[];if(t[0]){let N=null;t[0].values.forEach((O,Y)=>{Y>e||(O===null&&N===null&&(N=Y),O!==null&&N!==null&&(w.push([N,Y-1]),N=null))}),N!==null&&w.push([N,e])}const T=[0,.5,1].map(N=>v+(u-v)*N),M=[0,10,20,30,40,50,59],P=N=>{const O=N.currentTarget.getBoundingClientRect(),Y=(N.clientX-O.left)/O.width*xs,I=Math.round((Y-ft.left)/m*(yn-1));f(I>=0&&I<=e?I:null)},E=t.map(N=>{for(let O=e;O>=0;O--)if(N.values[O]!==null)return N.values[O];return null}),b=o||`${t.map((N,O)=>`${N.label}: ${E[O]===null?"sin datos":y(E[O])}`).join("; ")} a las ${Ft(e)}`;return p.jsxs("figure",{className:"chart",children:[p.jsxs("svg",{viewBox:`0 0 ${xs} ${h}`,role:"img","aria-label":b,onPointerMove:P,onPointerLeave:()=>f(null),children:[p.jsx("defs",{children:p.jsx("pattern",{id:`hatch-${c}`,width:"6",height:"6",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:p.jsx("line",{x1:"0",y1:"0",x2:"0",y2:"6",className:"chart-hatch"})})}),T.map(N=>p.jsxs("g",{children:[p.jsx("line",{x1:ft.left,x2:xs-ft.right,y1:x(N),y2:x(N),className:"chart-grid"}),p.jsx("text",{x:ft.left-8,y:x(N)+4,className:"chart-axis",textAnchor:"end",children:Math.round(N)})]},N)),M.map(N=>p.jsx("text",{x:g(N),y:h-6,className:"chart-axis",textAnchor:"middle",children:Ft(N)},N)),e<yn-1&&p.jsx("rect",{x:g(e),y:ft.top,width:g(yn-1)-g(e),height:_,className:"chart-future"}),w.map(([N,O])=>p.jsxs("g",{children:[p.jsx("rect",{x:g(N)-2,y:ft.top,width:Math.max(4,g(O)-g(N)+4),height:_,fill:`url(#hatch-${c})`,className:"chart-gap"}),p.jsx("text",{x:(g(N)+g(O))/2,y:ft.top+14,className:"chart-gap-label",textAnchor:"middle",children:"Sin datos"})]},N)),r&&p.jsxs("g",{children:[p.jsx("line",{x1:ft.left,x2:xs-ft.right,y1:x(r.value),y2:x(r.value),className:"chart-threshold"}),p.jsx("text",{x:xs-ft.right,y:x(r.value)-5,className:"chart-threshold-label",textAnchor:"end",children:r.label})]}),s.filter(N=>N.tick<=e).map((N,O)=>p.jsxs("g",{className:`chart-marker chart-marker--${N.type||"start"}`,children:[p.jsx("line",{x1:g(N.tick),x2:g(N.tick),y1:ft.top,y2:ft.top+_}),p.jsx("text",{x:g(N.tick)+4,y:ft.top+_-6,children:N.label})]},`${N.tick}-${O}`)),S.map((N,O)=>p.jsx("path",{d:N,className:"chart-line",style:{stroke:t[O].color}},t[O].label)),p.jsx("line",{x1:g(e),x2:g(e),y1:ft.top-6,y2:ft.top+_,className:"chart-playhead"}),d!==null&&p.jsxs("g",{className:"chart-hover",children:[p.jsx("line",{x1:g(d),x2:g(d),y1:ft.top,y2:ft.top+_}),t.map(N=>N.values[d]!==null&&p.jsx("circle",{cx:g(d),cy:x(N.values[d]),r:"4",style:{fill:N.color}},N.label))]})]}),p.jsx("figcaption",{className:"chart-caption",children:d!==null?p.jsxs("span",{children:[Ft(d),": ",t.map(N=>`${N.label} ${N.values[d]===null?"sin datos":y(N.values[d])}`).join(", ")]}):p.jsx("span",{className:"chart-legend",children:t.map((N,O)=>p.jsxs("span",{children:[p.jsx("i",{style:{background:N.color},"aria-hidden":"true"}),N.label,": ",E[O]===null?"sin datos":y(E[O])]},N.label))})})]})}const r2={cpu:"var(--pink)",ram:"var(--pink-light)",disk:"var(--orange)",latency:"var(--pink)",errors:"var(--orange)"};function U_({snapshot:t,alert:e,metric:n,height:i=170}){const r=ni(t.client,e.componentId),s=ce.useMemo(()=>_c(r,n,t.signals),[r,n,t.signals]),a=[{tick:e.startTick,label:"Inicio",type:"start"}];e.escalateTick!==null&&a.push({tick:e.escalateTick,label:"Escala",type:"risk"});const o=Fn[n];return p.jsxs("div",{className:"evidence",children:[p.jsxs("h4",{className:"evidence__title",children:[o.label," ",p.jsxs("span",{children:["(",o.unit,")"]})]}),p.jsx(I_,{series:[{label:o.label,values:s,color:r2[n]}],tick:t.tick,unit:o.unit,height:i,threshold:{value:Uv(r,n),label:"Límite de referencia"},markers:a,domain:o.percent?[0,100]:void 0,formatValue:l=>Wr(n,l)})]})}function df({alert:t,onClose:e}){const{snapshot:n,setAlertStatus:i,locateComponent:r,route:s}=Pn();if(!t)return null;const a=o=>()=>{o(),e==null||e()};return p.jsxs("div",{className:"alert-detail",children:[p.jsxs("div",{className:"badge-row",children:[p.jsx(mr,{priority:t.priority}),p.jsx(Zh,{status:t.status}),p.jsx(Xr,{})]}),p.jsx("p",{className:"lead",children:t.summary}),p.jsxs("dl",{className:"facts",children:[p.jsxs("div",{children:[p.jsx("dt",{children:"Componente"}),p.jsx("dd",{children:t.componentName})]}),p.jsxs("div",{children:[p.jsx("dt",{children:"Comenzó"}),p.jsxs("dd",{children:[t.startedAt," (hace ",t.durationMin," min simulados)"]})]}),p.jsxs("div",{children:[p.jsx("dt",{children:"Estado del componente"}),p.jsx("dd",{children:p.jsx(kr,{status:t.severity})})]})]}),p.jsx("h3",{className:"h-sub",children:"Lo que se observó"}),p.jsx("ul",{className:"plain-list",children:t.observations.map(o=>p.jsx("li",{children:o},o))}),p.jsx(U_,{snapshot:n,alert:t,metric:t.metrics[0],height:150}),p.jsx("h3",{className:"h-sub",children:"Cronología"}),p.jsx(D_,{items:t.timeline}),p.jsx("h3",{className:"h-sub",children:"Qué revisar"}),p.jsx("ol",{className:"steps-list",children:t.recommendations.map(o=>p.jsx("li",{children:o},o))}),t.status==="cerrada"&&t.severity!=="normal"&&p.jsx("p",{className:"note",children:"Cerraste esta alerta, pero las lecturas simuladas siguen mostrando la señal en el componente."}),p.jsxs("div",{className:"action-row",children:[p.jsxs("button",{type:"button",className:"btn btn--primary",onClick:a(()=>s.navigate("diagnostico",t.id)),children:[p.jsx(Sc,{size:16,"aria-hidden":"true"}),"Abrir diagnóstico"]}),p.jsxs("button",{type:"button",className:"btn",onClick:a(()=>r(t.componentId)),children:[p.jsx(xc,{size:16,"aria-hidden":"true"}),"Ubicar en la escena"]})]}),p.jsxs("div",{className:"action-row",children:[t.status!=="revision"&&p.jsxs("button",{type:"button",className:"btn btn--ghost",onClick:()=>i(t.id,"revision"),children:[p.jsx($h,{size:16,"aria-hidden":"true"}),"Marcar en revisión"]}),t.status!=="cerrada"?p.jsxs("button",{type:"button",className:"btn btn--ghost",onClick:()=>i(t.id,"cerrada"),children:[p.jsx(go,{size:16,"aria-hidden":"true"}),"Cerrar alerta"]}):p.jsxs("button",{type:"button",className:"btn btn--ghost",onClick:()=>i(t.id,"activa"),children:[p.jsx(yc,{size:16,"aria-hidden":"true"}),"Reabrir alerta"]})]})]})}function s2({values:t,tick:e,color:n="currentColor",width:i=96,height:r=26,points:s=20}){const a=Math.max(0,e-s+1),o=t.slice(a,e+1),l=o.filter(_=>_!==null);if(!l.length)return p.jsx("span",{className:"sparkline-empty",children:"Sin datos"});const c=Math.max(...l)*1.1||1,d=Math.min(...l)*.9,f=c-d||1;let h="",m=!1;return o.forEach((_,y)=>{if(_===null){m=!1;return}const v=y/Math.max(1,s-1)*i,u=r-(_-d)/f*r;h+=`${m?"L":"M"}${v.toFixed(1)},${u.toFixed(1)}`,m=!0}),p.jsx("svg",{className:"sparkline",width:i,height:r,viewBox:`0 0 ${i} ${r}`,"aria-hidden":"true",children:p.jsx("path",{d:h,fill:"none",stroke:n,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function k_({componentId:t,onLocate:e,locateLabel:n="Centrar en la escena"}){const{snapshot:i,route:r}=Pn(),s=ni(i.client,t),a=ce.useMemo(()=>{if(!s)return{};const h={};return Object.keys(Fn).forEach(m=>{h[m]=_c(s,m,i.signals)}),h},[s,i.signals]);if(!s)return null;const o=i.states[s.id],l=i.alerts.filter(h=>h.componentId===s.id),c=i.events.filter(h=>h.componentId===s.id).slice(0,4),d=kv(i.client,s.id),f=h=>{var m;return((m=ni(i.client,h))==null?void 0:m.name)||h};return p.jsxs("div",{className:"comp-detail",children:[p.jsxs("div",{className:"badge-row",children:[p.jsx(kr,{status:o}),p.jsx(Xr,{children:"Métricas simuladas"})]}),p.jsx("p",{className:"lead",children:s.description}),p.jsxs("p",{className:"muted small",children:[vc[s.type].label," en ",Hs[s.zone].label.toLowerCase(),". ",wn[o].description]}),p.jsxs("h3",{className:"h-sub",children:["Lecturas a las ",i.time]}),p.jsx("ul",{className:"metric-list",children:Object.entries(Fn).map(([h,m])=>p.jsxs("li",{children:[p.jsx("span",{className:"metric-list__label",children:m.label}),p.jsx(s2,{values:a[h],tick:i.tick,color:o==="normal"?"var(--lilac)":o==="risk"?"var(--orange)":"var(--pink)"}),p.jsx("span",{className:"metric-list__value",children:Wr(h,i.metricsNow[s.id][h])})]},h))}),p.jsx("h3",{className:"h-sub",children:"Alertas relacionadas"}),l.length?p.jsx("ul",{className:"link-list",children:l.map(h=>p.jsx("li",{children:p.jsxs("button",{type:"button",className:"link-row",onClick:()=>r.navigate("diagnostico",h.id),children:[p.jsx("span",{children:h.title}),p.jsx(mr,{priority:h.priority})]})},h.id))}):p.jsx("p",{className:"muted small",children:"Sin alertas en este escenario."}),p.jsx("h3",{className:"h-sub",children:"Conexiones"}),p.jsxs("ul",{className:"dep-list",children:[d.dependsOn.map(h=>p.jsxs("li",{children:[p.jsx(Bv,{size:14,"aria-hidden":"true"}),"Depende de ",f(h)," ",p.jsx(kr,{status:i.states[h],short:!0})]},`o${h}`)),d.usedBy.map(h=>p.jsxs("li",{children:[p.jsx(zv,{size:14,"aria-hidden":"true"}),"Lo usa ",f(h)," ",p.jsx(kr,{status:i.states[h],short:!0})]},`i${h}`)),!d.dependsOn.length&&!d.usedBy.length&&p.jsx("li",{className:"muted",children:"Sin conexiones registradas."})]}),p.jsx("h3",{className:"h-sub",children:"Eventos recientes"}),c.length?p.jsx("ul",{className:"event-list",children:c.map(h=>p.jsxs("li",{children:[p.jsx("time",{children:h.time}),h.text]},h.id))}):p.jsx("p",{className:"muted small",children:"Sin eventos en la ventana simulada."}),p.jsxs("div",{className:"action-row",children:[e&&p.jsxs("button",{type:"button",className:"btn",onClick:()=>e(s.id),children:[p.jsx(xc,{size:16,"aria-hidden":"true"}),n]}),l[0]&&p.jsxs("button",{type:"button",className:"btn btn--primary",onClick:()=>r.navigate("diagnostico",l[0].id),children:[p.jsx(Sc,{size:16,"aria-hidden":"true"}),"Abrir diagnóstico"]})]})]})}function co({open:t,title:e,subtitle:n,onClose:i,children:r,footer:s,wide:a=!1}){const o=ce.useRef(null),l=ce.useRef(null),c=ce.useRef(i);return c.current=i,ce.useEffect(()=>{var f;if(!t)return;l.current=document.activeElement,(f=o.current)==null||f.focus({preventScroll:!0});const d=h=>{var m;h.key==="Escape"&&((m=c.current)==null||m.call(c))};return window.addEventListener("keydown",d),()=>{var h;window.removeEventListener("keydown",d),(h=l.current)!=null&&h.focus&&l.current.focus()}},[t,e]),t?p.jsxs("aside",{className:`side-panel ${a?"side-panel--wide":""}`,role:"dialog","aria-label":e,tabIndex:-1,ref:o,children:[p.jsxs("header",{className:"side-panel__head",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"side-panel__title",children:e}),n&&p.jsx("div",{className:"side-panel__sub",children:n})]}),p.jsx("button",{type:"button",className:"icon-btn",onClick:i,"aria-label":"Cerrar panel",children:p.jsx(tM,{size:18})})]}),p.jsx("div",{className:"side-panel__body",children:r}),s&&p.jsx("footer",{className:"side-panel__foot",children:s})]}):null}function na({icon:t,title:e,children:n,action:i}){return p.jsxs("div",{className:"empty-state",children:[t&&p.jsx(t,{size:28,"aria-hidden":"true"}),p.jsx("p",{className:"empty-state__title",children:e}),n&&p.jsx("p",{className:"empty-state__text",children:n}),i]})}function O_(){const{snapshot:t,prefs:e,reducedMotion:n,focusRequest:i,selectedId:r,setSelectedId:s,locateComponent:a,route:o}=Pn(),[l,c]=ce.useState(null),{client:d}=t,f=t.alerts.find(_=>_.id===l)||null,h=r?ni(d,r):null,m=t.openAlerts.slice(0,3);return p.jsxs("div",{className:"monitor",children:[p.jsxs("section",{className:"monitor__stage","aria-labelledby":"monitor-title",children:[p.jsx("div",{className:"stage-head",children:p.jsxs("div",{children:[p.jsx("h1",{id:"monitor-title",className:"page-title",children:d.name}),p.jsxs("p",{className:"page-sub",children:[d.sector,". Centro de monitoreo."]})]})}),p.jsx(uf,{components:d.components,links:d.links,states:t.states,mood:t.overall,selectedId:r,onSelect:_=>{s(_),_&&c(null)},onPick:_=>{_?(a(_,null),c(null)):s(null)},focusRequest:i,reducedMotion:n,quality:e.quality,labels:e.labels})]}),p.jsxs("aside",{className:"monitor__aside","aria-label":"Resumen",children:[p.jsxs("section",{className:"panel-block",children:[p.jsx("h2",{className:"block-title",children:"Estado del entorno"}),p.jsxs("p",{className:"overall-big","data-status":t.overall,children:[p.jsx(pr,{status:t.overall,size:22}),t.overallText]}),p.jsx("ul",{className:"count-grid",children:Object.entries(wn).map(([_,y])=>p.jsxs("li",{"data-status":_,children:[p.jsx("span",{className:"count-grid__n",children:t.counts[_]}),p.jsxs("span",{className:"count-grid__label",children:[p.jsx(pr,{status:_,size:13}),y.short]})]},_))})]}),p.jsxs("section",{className:"panel-block",children:[p.jsxs("div",{className:"block-head",children:[p.jsx("h2",{className:"block-title",children:"Alertas prioritarias"}),p.jsxs("a",{className:"link-like",href:"#/alertas",children:["Ver todas",p.jsx(Wl,{size:14,"aria-hidden":"true"})]})]}),m.length?p.jsx("div",{className:"stack-sm",children:m.map(_=>p.jsx(N_,{alert:_,compact:!0,onOpen:y=>{c(y.id),s(null)}},_.id))}):p.jsx(na,{title:"Sin alertas abiertas",children:"Prueba un escenario con señales desde el laboratorio de simulación."})]}),p.jsxs("section",{className:"panel-block panel-block--grow",children:[p.jsxs("div",{className:"block-head",children:[p.jsx("h2",{className:"block-title",children:"Últimos eventos"}),p.jsxs("a",{className:"link-like",href:"#/historial",children:["Historial",p.jsx(Wl,{size:14,"aria-hidden":"true"})]})]}),t.events.length?p.jsx("ul",{className:"event-feed",children:t.events.slice(0,6).map(_=>p.jsx("li",{"data-level":_.level,children:p.jsxs("button",{type:"button",className:"event-feed__btn",onClick:()=>{_.alertId?(c(_.alertId),s(null)):(a(_.componentId,null),c(null))},children:[p.jsx("time",{children:_.time}),p.jsx("span",{className:"event-feed__text",children:_.text}),_.type!=="alerta"&&p.jsx("span",{className:"event-feed__comp",children:_.componentName})]})},_.id))}):p.jsx(na,{icon:qS,title:"Aún no hay eventos",children:"La simulación empieza a registrar eventos a partir de las 09:02."})]})]}),p.jsx(co,{open:!!h&&!f,title:(h==null?void 0:h.name)||"",subtitle:"Componente",onClose:()=>s(null),children:h&&p.jsx(k_,{componentId:h.id,onLocate:_=>a(_,null)})}),p.jsx(co,{open:!!f,title:(f==null?void 0:f.title)||"",subtitle:f?`Alerta de ${f.componentName}`:"",onClose:()=>c(null),children:f&&p.jsx(df,{alert:f,onClose:()=>c(null)})}),p.jsx("span",{className:"sr-only","aria-live":"polite",children:o.page==="monitoreo"&&h?`Seleccionado: ${h.name}`:""})]})}function Qi({label:t,options:e,value:n,onChange:i,size:r="md"}){return p.jsx("div",{className:`segmented segmented--${r}`,role:"group","aria-label":t,children:e.map(s=>p.jsxs("button",{type:"button","aria-pressed":n===s.value,onClick:()=>i(s.value),children:[s.icon&&p.jsx(s.icon,{size:15,"aria-hidden":"true"}),s.label]},s.value))})}const a2=[{value:"todas",label:"Todas"},{value:"alta",label:"Alta"},{value:"media",label:"Media"},{value:"baja",label:"Baja"}],o2=[{value:"abiertas",label:"Abiertas"},{value:"activa",label:"Activas"},{value:"revision",label:"En revisión"},{value:"cerrada",label:"Cerradas"},{value:"todas",label:"Todas"}];function l2(){const{snapshot:t,setScenarioId:e,notify:n}=Pn(),[i,r]=ce.useState(""),[s,a]=ce.useState("todas"),[o,l]=ce.useState("abiertas"),[c,d]=ce.useState(""),[f,h]=ce.useState(null),m=ce.useMemo(()=>t.alerts.filter(g=>{if(s!=="todas"&&g.priority!==s||o==="abiertas"&&g.status==="cerrada"||!["abiertas","todas"].includes(o)&&g.status!==o||c&&g.componentId!==c)return!1;const x=i.trim().toLowerCase();return!(x&&!`${g.title} ${g.componentName} ${g.summary}`.toLowerCase().includes(x))}),[t.alerts,s,o,c,i]),_=["alta","media","baja"].map(g=>({p:g,items:m.filter(x=>x.priority===g)})).filter(g=>g.items.length),y=t.alerts.find(g=>g.id===f)||null,v=t.client.components.filter(g=>t.alerts.some(x=>x.componentId===g.id)),u=i||s!=="todas"||o!=="abiertas"||c;return p.jsxs("div",{className:"page",children:[p.jsxs("header",{className:"page-head",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"page-title",children:"Alertas e incidentes"}),p.jsxs("p",{className:"page-sub",children:[t.openAlerts.length," abiertas en ",t.client.name,", escenario “",t.scenario.name,"”."]})]}),p.jsx(Xr,{})]}),p.jsxs("div",{className:"filters",role:"search",children:[p.jsxs("label",{className:"search",children:[p.jsx(Kh,{size:16,"aria-hidden":"true"}),p.jsx("span",{className:"sr-only",children:"Buscar alertas"}),p.jsx("input",{type:"search",placeholder:"Buscar por título o componente",value:i,onChange:g=>r(g.target.value)})]}),p.jsx(Qi,{label:"Prioridad",options:a2,value:s,onChange:a,size:"sm"}),p.jsx(Qi,{label:"Estado",options:o2,value:o,onChange:l,size:"sm"}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Componente"}),p.jsxs("select",{value:c,onChange:g=>d(g.target.value),children:[p.jsx("option",{value:"",children:"Todos los componentes"}),v.map(g=>p.jsx("option",{value:g.id,children:g.name},g.id))]})]})]}),_.length?_.map(g=>p.jsxs("section",{className:"alert-group","aria-labelledby":`grp-${g.p}`,children:[p.jsxs("h2",{id:`grp-${g.p}`,className:"group-title","data-priority":g.p,children:["Prioridad ",or[g.p].label.toLowerCase()," ",p.jsx("span",{children:g.items.length})]}),p.jsx("div",{className:"stack",children:g.items.map(x=>p.jsx(N_,{alert:x,onOpen:S=>h(S.id)},x.id))})]},g.p)):p.jsx(na,{icon:VS,title:t.alerts.length?"Ninguna alerta coincide con los filtros":`No hay alertas a las ${t.time}`,action:t.alerts.length?u&&p.jsx("button",{type:"button",className:"btn",onClick:()=>{r(""),a("todas"),l("abiertas"),d("")},children:"Quitar filtros"}):p.jsx("button",{type:"button",className:"btn",onClick:()=>{e("suspicious"),n("Escenario cambiado a “Señales sospechosas”")},children:"Cargar escenario con señales"}),children:t.alerts.length?"Ajusta la búsqueda o los filtros.":"Las lecturas simuladas están dentro de lo habitual."}),p.jsx(co,{open:!!y,title:(y==null?void 0:y.title)||"",subtitle:y?`Alerta de ${y.componentName}`:"",onClose:()=>h(null),children:y&&p.jsx(df,{alert:y,onClose:()=>h(null)})})]})}function c2({components:t,snapshot:e,selectedId:n,onSelect:i}){return p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"table",children:[p.jsx("caption",{className:"sr-only",children:"Componentes de la infraestructura simulada"}),p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{scope:"col",children:"Componente"}),p.jsx("th",{scope:"col",children:"Tipo"}),p.jsx("th",{scope:"col",children:"Zona"}),p.jsx("th",{scope:"col",children:"Estado"}),p.jsx("th",{scope:"col",className:"num",children:"Procesador"}),p.jsx("th",{scope:"col",className:"num",children:"Respuesta"}),p.jsx("th",{scope:"col",className:"num",children:"Alertas"})]})}),p.jsx("tbody",{children:t.map(r=>{const s=e.metricsNow[r.id],a=e.alerts.filter(o=>o.componentId===r.id&&o.status!=="cerrada").length;return p.jsxs("tr",{"aria-selected":n===r.id,"data-selected":n===r.id,children:[p.jsx("th",{scope:"row",children:p.jsx("button",{type:"button",className:"row-btn",onClick:()=>i(r.id),children:r.name})}),p.jsx("td",{children:vc[r.type].label}),p.jsx("td",{children:Hs[r.zone].label}),p.jsx("td",{children:p.jsx(kr,{status:e.states[r.id],short:!0})}),p.jsx("td",{className:"num",children:Wr("cpu",s.cpu)}),p.jsx("td",{className:"num",children:Wr("latency",s.latency)}),p.jsx("td",{className:"num",children:a||"—"})]},r.id)})})]})})}function u2(){const{snapshot:t,prefs:e,reducedMotion:n,focusRequest:i,setFocusRequest:r,selectedId:s,setSelectedId:a}=Pn(),[o,l]=ce.useState("3d"),[c,d]=ce.useState(""),[f,h]=ce.useState(""),[m,_]=ce.useState(""),{client:y}=t,v=ce.useMemo(()=>y.components.filter(w=>{if(f&&w.type!==f||m&&t.states[w.id]!==m)return!1;const T=c.trim().toLowerCase();return!(T&&!`${w.name} ${w.description}`.toLowerCase().includes(T))}),[y.components,f,m,c,t.states]),u=!!(c||f||m),g=ce.useMemo(()=>u?v.map(w=>w.id):null,[u,v]),x=s?ni(y,s):null,S=w=>{l("3d"),a(w),r({id:w,nonce:Date.now()})};return p.jsxs("div",{className:"page page--infra",children:[p.jsxs("header",{className:"page-head",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"page-title",children:"Explorador de infraestructura"}),p.jsxs("p",{className:"page-sub",children:[y.components.length," componentes representados para ",y.name,"."]})]}),p.jsx(Qi,{label:"Tipo de vista",value:o,onChange:l,options:[{value:"3d",label:"Vista 3D",icon:WS},{value:"list",label:"Lista",icon:KS}]})]}),p.jsxs("div",{className:"filters",role:"search",children:[p.jsxs("label",{className:"search",children:[p.jsx(Kh,{size:16,"aria-hidden":"true"}),p.jsx("span",{className:"sr-only",children:"Buscar componentes"}),p.jsx("input",{type:"search",placeholder:"Buscar componente",value:c,onChange:w=>d(w.target.value)})]}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Tipo"}),p.jsxs("select",{value:f,onChange:w=>h(w.target.value),children:[p.jsx("option",{value:"",children:"Todos los tipos"}),Object.entries(vc).map(([w,T])=>p.jsx("option",{value:w,children:T.label},w))]})]}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Estado"}),p.jsxs("select",{value:m,onChange:w=>_(w.target.value),children:[p.jsx("option",{value:"",children:"Todos los estados"}),Object.entries(wn).map(([w,T])=>p.jsx("option",{value:w,children:T.label},w))]})]}),p.jsxs("span",{className:"filters__count","aria-live":"polite",children:[v.length," de ",y.components.length]})]}),o==="3d"?p.jsxs("div",{className:"infra-stage",children:[p.jsx(uf,{components:y.components,links:y.links,states:t.states,mood:t.overall,selectedId:s,onSelect:a,onPick:w=>w?S(w):a(null),focusRequest:i,reducedMotion:n,quality:e.quality,labels:e.labels,dimmedIds:g}),u&&p.jsx("p",{className:"stage-note",children:"Los componentes que no coinciden con los filtros aparecen atenuados."})]}):v.length?p.jsx(c2,{components:v,snapshot:t,selectedId:s,onSelect:a}):p.jsx(na,{icon:Wv,title:"Ningún componente coincide",action:p.jsx("button",{type:"button",className:"btn",onClick:()=>{d(""),h(""),_("")},children:"Quitar filtros"}),children:"Ajusta la búsqueda, el tipo o el estado."}),p.jsx(co,{open:!!x,title:(x==null?void 0:x.name)||"",subtitle:"Componente",onClose:()=>a(null),children:x&&p.jsx(k_,{componentId:x.id,onLocate:S,locateLabel:o==="3d"?"Centrar en la escena":"Ubicar en la escena 3D"})})]})}function d2(){const{snapshot:t,route:e,locateComponent:n,setAlertStatus:i}=Pn(),r=t.alerts,s=r.find(c=>c.id===e.param)||null;if(!r.length)return p.jsxs("div",{className:"page",children:[p.jsx("header",{className:"page-head",children:p.jsx("h1",{className:"page-title",children:"Diagnóstico"})}),p.jsx(na,{icon:Sc,title:`No hay alertas que diagnosticar a las ${t.time}`,action:p.jsxs("button",{type:"button",className:"btn",onClick:()=>e.navigate("simulacion"),children:[p.jsx(Yh,{size:16,"aria-hidden":"true"}),"Ir al laboratorio"]}),children:"Elige un escenario con señales o avanza la simulación para ver un diagnóstico."})]});if(!s)return p.jsxs("div",{className:"page",children:[p.jsx("header",{className:"page-head",children:p.jsxs("div",{children:[p.jsx("h1",{className:"page-title",children:"Diagnóstico"}),p.jsxs("p",{className:"page-sub",children:[e.param?"Esa alerta no existe en el escenario actual. ":"","Elige una alerta para entender qué está pasando."]})]})}),p.jsx("ul",{className:"pick-list",children:r.map(c=>p.jsx("li",{children:p.jsxs("button",{type:"button",className:"pick-list__btn",onClick:()=>e.navigate("diagnostico",c.id),children:[p.jsx("span",{className:"pick-list__title",children:c.title}),p.jsx(mr,{priority:c.priority}),p.jsxs("span",{className:"muted small",children:["Desde ",c.startedAt]})]})},c.id))})]});const a=ni(t.client,s.componentId),o=kv(t.client,a.id),l=[...o.dependsOn.map(c=>({id:c,rel:"depende de"})),...o.usedBy.map(c=>({id:c,rel:"lo usa"}))];return p.jsxs("div",{className:"page page--diagnosis",children:[p.jsxs("header",{className:"page-head",children:[p.jsxs("div",{children:[p.jsx("p",{className:"page-kicker",children:"Diagnóstico de alerta"}),p.jsx("h1",{className:"page-title",children:s.title}),p.jsxs("div",{className:"badge-row",children:[p.jsx(mr,{priority:s.priority}),p.jsx(Zh,{status:s.status}),p.jsx(kr,{status:s.severity})]})]}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Cambiar de alerta"}),p.jsx("select",{value:s.id,onChange:c=>e.navigate("diagnostico",c.target.value),children:r.map(c=>p.jsx("option",{value:c.id,children:c.title},c.id))})]})]}),p.jsxs("div",{className:"notice",role:"note",children:[p.jsx(YS,{size:18,"aria-hidden":"true"}),p.jsxs("p",{children:["Este diagnóstico usa ",p.jsx("strong",{children:"datos simulados"})," generados en el navegador. Las observaciones describen las lecturas de la demostración; las interpretaciones son hipótesis para orientar la revisión, no conclusiones verificadas."]})]}),p.jsxs("div",{className:"diag-grid",children:[p.jsxs("div",{className:"diag-main",children:[p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Qué se observó"}),p.jsx("p",{className:"tag-line",children:p.jsx(Xr,{children:"Observación sobre datos simulados"})}),p.jsx("ul",{className:"plain-list",children:s.observations.map(c=>p.jsx("li",{children:c},c))}),p.jsxs("dl",{className:"facts facts--row",children:[p.jsxs("div",{children:[p.jsx("dt",{children:"Inicio de la señal"}),p.jsx("dd",{children:s.startedAt})]}),p.jsxs("div",{children:[p.jsx("dt",{children:"Duración"}),p.jsxs("dd",{children:[s.durationMin," min simulados"]})]}),p.jsxs("div",{children:[p.jsx("dt",{children:"Última lectura"}),p.jsx("dd",{children:t.time})]})]})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Métricas que cambiaron"}),p.jsx("div",{className:"evidence-grid",children:s.metrics.map(c=>p.jsx(U_,{snapshot:t,alert:s,metric:c},c))})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Cómo evolucionó"}),p.jsx(D_,{items:s.timeline})]})]}),p.jsxs("div",{className:"diag-side",children:[p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Componente relacionado"}),p.jsxs("p",{className:"comp-head",children:[p.jsx("strong",{children:a.name}),p.jsx("span",{className:"muted small",children:vc[a.type].label})]}),p.jsx("p",{className:"small",children:a.description}),l.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("h3",{className:"h-sub",children:"Podría afectar o verse afectado por"}),p.jsx("ul",{className:"dep-list",children:l.map(c=>{var d;return p.jsxs("li",{children:[c.rel==="depende de"?p.jsx(Bv,{size:14,"aria-hidden":"true"}):p.jsx(zv,{size:14,"aria-hidden":"true"}),c.rel==="depende de"?"Depende de":"Lo usa"," ",(d=ni(t.client,c.id))==null?void 0:d.name,p.jsx(kr,{status:t.states[c.id],short:!0})]},`${c.rel}-${c.id}`)})})]}),p.jsxs("button",{type:"button",className:"btn",onClick:()=>n(a.id),children:[p.jsx(xc,{size:16,"aria-hidden":"true"}),"Ubicar en la escena"]})]}),p.jsxs("section",{className:"card-plain card-plain--hypothesis",children:[p.jsx("h2",{className:"block-title",children:"Posibles interpretaciones"}),p.jsx("p",{className:"tag-line",children:p.jsx("span",{className:"hyp-tag",children:"Hipótesis, no verificadas"})}),p.jsx("ul",{className:"plain-list",children:s.interpretations.map(c=>p.jsx("li",{children:c},c))})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Qué revisar primero"}),p.jsx("ol",{className:"steps-list",children:s.recommendations.map(c=>p.jsx("li",{children:c},c))}),p.jsxs("div",{className:"action-row",children:[s.status!=="revision"&&p.jsx("button",{type:"button",className:"btn btn--primary",onClick:()=>i(s.id,"revision"),children:"Marcar en revisión"}),s.status!=="cerrada"?p.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>i(s.id,"cerrada"),children:"Cerrar alerta"}):p.jsx("button",{type:"button",className:"btn btn--ghost",onClick:()=>i(s.id,"activa"),children:"Reabrir alerta"})]})]})]})]})]})}const _g=new Intl.DateTimeFormat("es-MX",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"}),Wu={activa:"Activa",revision:"En revisión",cerrada:"Cerrada",registrado:"Registrado"},Xu={alerta:"Alerta",mantenimiento:"Mantenimiento",respaldo:"Respaldo",acceso:"Acceso",actualización:"Actualización"};function h2(){const{snapshot:t,history:e}=Pn(),[n,i]=ce.useState(""),[r,s]=ce.useState(""),[a,o]=ce.useState(""),[l,c]=ce.useState(""),[d,f]=ce.useState({key:"date",dir:"desc"}),[h,m]=ce.useState(null),_=ce.useMemo(()=>{const S=t.alerts.map(M=>({id:M.id,date:Rp(M.startTick),componentName:M.componentName,type:"alerta",title:M.title,priority:M.priority,status:M.status,summary:M.summary,alertId:M.id})),w=t.events.filter(M=>M.type!=="alerta").map(M=>({id:`cur-${M.id}`,date:Rp(M.tick),componentName:M.componentName,type:M.type,title:M.text,priority:"info",status:"registrado",summary:"Evento rutinario de la ventana simulada actual."})),T=e.map(M=>({...M,status:M.type==="alerta"?M.status:"registrado"}));return[...S,...w,...T]},[t.alerts,t.events,e]),y=ce.useMemo(()=>{const S=n.trim().toLowerCase(),w=_.filter(M=>!(r&&M.type!==r||a&&M.priority!==a||l&&M.status!==l||S&&!`${M.title} ${M.componentName}`.toLowerCase().includes(S))),T=d.dir==="asc"?1:-1;return w.sort((M,P)=>d.key==="priority"?(or[M.priority].rank-or[P.priority].rank)*T||P.date-M.date:d.key==="component"?M.componentName.localeCompare(P.componentName,"es")*T||P.date-M.date:(M.date-P.date)*T)},[_,n,r,a,l,d]),v=S=>f(w=>({key:S,dir:w.key===S&&w.dir==="desc"?"asc":"desc"})),u=({k:S})=>d.key!==S?p.jsx(HS,{size:13,"aria-hidden":"true"}):d.dir==="asc"?p.jsx(jS,{size:13,"aria-hidden":"true"}):p.jsx(BS,{size:13,"aria-hidden":"true"}),g=S=>d.key===S?d.dir==="asc"?"ascending":"descending":"none",x=h!=null&&h.alertId?t.alerts.find(S=>S.id===h.alertId):null;return p.jsxs("div",{className:"page",children:[p.jsxs("header",{className:"page-head",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"page-title",children:"Historial"}),p.jsx("p",{className:"page-sub",children:"Eventos y alertas de los últimos 14 días más la ventana simulada actual."})]}),p.jsx(Xr,{children:"Historial ficticio"})]}),p.jsxs("div",{className:"filters",role:"search",children:[p.jsxs("label",{className:"search",children:[p.jsx(Kh,{size:16,"aria-hidden":"true"}),p.jsx("span",{className:"sr-only",children:"Buscar en el historial"}),p.jsx("input",{type:"search",placeholder:"Buscar evento o componente",value:n,onChange:S=>i(S.target.value)})]}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Tipo"}),p.jsxs("select",{value:r,onChange:S=>s(S.target.value),children:[p.jsx("option",{value:"",children:"Todos los tipos"}),Object.entries(Xu).map(([S,w])=>p.jsx("option",{value:S,children:w},S))]})]}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Prioridad"}),p.jsxs("select",{value:a,onChange:S=>o(S.target.value),children:[p.jsx("option",{value:"",children:"Todas las prioridades"}),Object.entries(or).map(([S,w])=>p.jsx("option",{value:S,children:w.label},S))]})]}),p.jsxs("label",{className:"select-inline",children:[p.jsx("span",{className:"sr-only",children:"Estado"}),p.jsxs("select",{value:l,onChange:S=>c(S.target.value),children:[p.jsx("option",{value:"",children:"Todos los estados"}),Object.entries(Wu).map(([S,w])=>p.jsx("option",{value:S,children:w},S))]})]}),p.jsxs("span",{className:"filters__count","aria-live":"polite",children:[y.length," registros"]})]}),y.length?p.jsx("div",{className:"table-wrap",children:p.jsxs("table",{className:"table",children:[p.jsx("caption",{className:"sr-only",children:"Historial de eventos y alertas"}),p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{scope:"col","aria-sort":g("date"),children:p.jsxs("button",{type:"button",className:"th-btn",onClick:()=>v("date"),children:["Fecha y hora",p.jsx(u,{k:"date"})]})}),p.jsx("th",{scope:"col","aria-sort":g("component"),children:p.jsxs("button",{type:"button",className:"th-btn",onClick:()=>v("component"),children:["Componente",p.jsx(u,{k:"component"})]})}),p.jsx("th",{scope:"col",children:"Evento"}),p.jsx("th",{scope:"col",children:"Tipo"}),p.jsx("th",{scope:"col","aria-sort":g("priority"),children:p.jsxs("button",{type:"button",className:"th-btn",onClick:()=>v("priority"),children:["Prioridad",p.jsx(u,{k:"priority"})]})}),p.jsx("th",{scope:"col",children:"Estado"}),p.jsx("th",{scope:"col",children:p.jsx("span",{className:"sr-only",children:"Detalle"})})]})}),p.jsx("tbody",{children:y.map(S=>p.jsxs("tr",{"data-current":!S.historical,children:[p.jsxs("td",{className:"nowrap",children:[_g.format(S.date),!S.historical&&p.jsx("span",{className:"now-dot",title:"Ventana simulada actual",children:"hoy"})]}),p.jsx("td",{children:S.componentName}),p.jsx("td",{className:"cell-title",children:S.title}),p.jsx("td",{children:Xu[S.type]||S.type}),p.jsx("td",{children:p.jsx(mr,{priority:S.priority})}),p.jsx("td",{children:Wu[S.status]}),p.jsx("td",{children:p.jsx("button",{type:"button",className:"btn btn--sm",onClick:()=>m(S),children:"Ver detalle"})})]},S.id))})]})}):p.jsx(na,{icon:Wv,title:"Sin registros con esos filtros",action:p.jsx("button",{type:"button",className:"btn",onClick:()=>{i(""),s(""),o(""),c("")},children:"Quitar filtros"}),children:"Prueba con otro tipo, prioridad o estado."}),p.jsx(co,{open:!!h,title:(h==null?void 0:h.title)||"",subtitle:h?_g.format(h.date):"",onClose:()=>m(null),children:x?p.jsx(df,{alert:x,onClose:()=>m(null)}):h&&p.jsxs("div",{className:"alert-detail",children:[p.jsxs("div",{className:"badge-row",children:[p.jsx(mr,{priority:h.priority}),p.jsx(Xr,{children:"Registro de demostración"})]}),p.jsx("p",{className:"lead",children:h.summary}),p.jsxs("dl",{className:"facts",children:[p.jsxs("div",{children:[p.jsx("dt",{children:"Componente"}),p.jsx("dd",{children:h.componentName})]}),p.jsxs("div",{children:[p.jsx("dt",{children:"Tipo"}),p.jsx("dd",{children:Xu[h.type]||h.type})]}),p.jsxs("div",{children:[p.jsx("dt",{children:"Estado"}),p.jsx("dd",{children:Wu[h.status]})]})]}),p.jsx("p",{className:"muted small",children:"Los registros de días anteriores son ficticios y no tienen métricas detalladas en este prototipo."})]})})]})}const f2={normal:go,suspicious:$h,elevated:qv,dataloss:$v},p2=["var(--pink)","var(--orange)","var(--yellow)","var(--pink-light)"];function m2(){const{snapshot:t,scenarioId:e,setScenarioId:n,tick:i,setTick:r,playing:s,setPlaying:a,speed:o,setSpeed:l,prefs:c,reducedMotion:d,selectedId:f,setSelectedId:h,focusRequest:m,route:_,notify:y}=Pn(),{client:v}=t,u=ce.useMemo(()=>{const M=[];return io(v,t.scenario).forEach(P=>{const E=ni(v,P.componentId).name;M.push({tick:P.start,type:P.severity,label:`${fr[P.kind].label}: ${E}`}),P.escalate&&M.push({tick:P.escalate.at,type:"risk",label:`Escala a riesgo: ${E}`})}),M.sort((P,E)=>P.tick-E.tick)},[v,t.scenario]),g=ce.useMemo(()=>{const M=io(v,t.scenario).filter(Y=>Y.kind!=="no-data").slice(0,3),P=M.length?M.map(Y=>({comp:ni(v,Y.componentId),metric:fr[Y.kind].metrics[0]})):[{comp:v.components.find(Y=>Y.role==="db"),metric:"cpu"}],E=P.every(Y=>Fn[Y.metric].percent),N=!P.every(Y=>Y.metric===P[0].metric)&&!E;return{series:P.map((Y,I)=>{const B=_c(Y.comp,Y.metric,t.signals),X=Uv(Y.comp,Y.metric)||1;return{label:`${Fn[Y.metric].label}, ${Y.comp.name}`,color:p2[I],values:N?B.map(K=>K===null?null:Math.round(K/X*100)):B}}),normalize:N,metric:P[0].metric,allPercent:E}},[v,t.scenario,t.signals]),x=M=>{n(M),y(`Escenario: ${Gl.find(P=>P.id===M).name}`)},S=()=>{a(!1),r(0),y("Simulación reiniciada a las 09:00")},w=()=>r(Math.min(yn-1,i+1)),T=()=>{!s&&i>=yn-1&&r(0),a(!s)};return p.jsxs("div",{className:"page page--lab",children:[p.jsx("header",{className:"page-head",children:p.jsxs("div",{children:[p.jsx("h1",{className:"page-title",children:"Laboratorio de simulación"}),p.jsxs("p",{className:"page-sub",children:["Explora cómo se vería ",v.name," en distintas situaciones."]})]})}),p.jsxs("div",{className:"notice notice--sim",role:"note",children:[p.jsx(Yh,{size:18,"aria-hidden":"true"}),p.jsxs("p",{children:["Todo lo que ocurre aquí es ",p.jsx("strong",{children:"simulado"}),". Los escenarios se generan en el navegador para demostrar la interfaz; no hay un detector real conectado."]})]}),p.jsxs("fieldset",{className:"scenario-picker",children:[p.jsx("legend",{className:"block-title",children:"Escenario"}),Gl.map(M=>{const P=f2[M.id];return p.jsxs("label",{className:"scenario-option","data-active":e===M.id,children:[p.jsx("input",{type:"radio",name:"scenario",value:M.id,checked:e===M.id,onChange:()=>x(M.id)}),p.jsx(P,{size:20,"aria-hidden":"true"}),p.jsx("span",{className:"scenario-option__name",children:M.name}),p.jsx("span",{className:"scenario-option__desc",children:M.description})]},M.id)})]}),p.jsxs("section",{className:"player","aria-label":"Controles de la simulación",children:[p.jsxs("div",{className:"player__buttons",children:[p.jsxs("button",{type:"button",className:"btn btn--primary",onClick:T,children:[s?p.jsx(Vv,{size:16,"aria-hidden":"true"}):p.jsx(Gv,{size:16,"aria-hidden":"true"}),s?"Pausar":"Iniciar"]}),p.jsxs("button",{type:"button",className:"btn",onClick:w,disabled:i>=yn-1,children:[p.jsx(eM,{size:16,"aria-hidden":"true"}),"Avanzar 1 min"]}),p.jsxs("button",{type:"button",className:"btn btn--ghost",onClick:S,children:[p.jsx(yc,{size:16,"aria-hidden":"true"}),"Reiniciar"]}),p.jsx(Qi,{label:"Velocidad",size:"sm",value:o,onChange:l,options:[{value:1,label:"1×"},{value:2,label:"2×"},{value:4,label:"4×"}]})]}),p.jsxs("div",{className:"player__clock","aria-live":"off",children:[p.jsx("span",{className:"player__time",children:Ft(i)}),p.jsxs("span",{className:"muted small",children:["minuto ",i+1," de ",yn]})]}),p.jsxs("div",{className:"scrubber",children:[p.jsx("label",{htmlFor:"scrub",className:"sr-only",children:"Minuto simulado"}),p.jsx("input",{id:"scrub",type:"range",min:"0",max:yn-1,value:i,onChange:M=>r(Number(M.target.value)),"aria-valuetext":`${Ft(i)}`,style:{"--p":`${i/(yn-1)*100}%`}}),p.jsx("div",{className:"scrubber__marks","aria-hidden":"true",children:u.map(M=>p.jsx("span",{className:"scrubber__mark","data-type":M.type,"data-past":M.tick<=i,style:{left:`${M.tick/(yn-1)*100}%`},title:`${Ft(M.tick)} ${M.label}`},`${M.tick}-${M.label}`))}),p.jsxs("div",{className:"scrubber__scale","aria-hidden":"true",children:[p.jsx("span",{children:"09:00"}),p.jsx("span",{children:"09:30"}),p.jsx("span",{children:"09:59"})]})]}),u.length>0&&p.jsx("ol",{className:"mark-list",children:u.map(M=>p.jsx("li",{"data-past":M.tick<=i,children:p.jsxs("button",{type:"button",className:"mark-list__btn",onClick:()=>{a(!1),r(M.tick)},children:[p.jsx("time",{children:Ft(M.tick)}),p.jsx(pr,{status:M.type,size:14}),M.label]})},`${M.tick}-${M.label}`))})]}),p.jsxs("div",{className:"lab-grid",children:[p.jsx("div",{className:"lab-scene",children:p.jsx(uf,{compact:!0,components:v.components,links:v.links,states:t.states,mood:t.overall,selectedId:f,onSelect:h,focusRequest:m,reducedMotion:d,quality:c.quality,labels:"flagged"})}),p.jsxs("div",{className:"lab-side",children:[p.jsxs("section",{className:"card-plain",children:[p.jsxs("h2",{className:"block-title",children:["Estado a las ",t.time]}),p.jsxs("p",{className:"overall-big","data-status":t.overall,children:[p.jsx(pr,{status:t.overall,size:20}),t.overallText]}),p.jsx("ul",{className:"count-grid count-grid--inline",children:Object.entries(wn).map(([M,P])=>p.jsxs("li",{"data-status":M,children:[p.jsx("span",{className:"count-grid__n",children:t.counts[M]}),p.jsx("span",{className:"count-grid__label",children:P.short})]},M))})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Alertas generadas"}),t.alerts.length?p.jsx("ul",{className:"link-list",children:t.alerts.map(M=>p.jsx("li",{children:p.jsxs("button",{type:"button",className:"link-row",onClick:()=>_.navigate("diagnostico",M.id),children:[p.jsx("span",{children:M.title}),p.jsx(mr,{priority:M.priority})]})},M.id))}):p.jsxs("p",{className:"muted small",children:["Ninguna todavía. ",u[0]?`La primera señal aparece a las ${Ft(u[0].tick)}.`:"Este escenario no genera alertas."]})]})]})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:g.normalize?"Señales del escenario (% de su límite de referencia)":`${Fn[g.metric].label} de los componentes con señal`}),p.jsx(I_,{series:g.series,tick:i,height:220,unit:g.normalize?"%":Fn[g.metric].unit,markers:u.map(M=>({tick:M.tick,label:"",type:M.type})),domain:!g.normalize&&g.allPercent?[0,100]:void 0,threshold:g.normalize?{value:100,label:"Límite de referencia"}:void 0,formatValue:g.normalize?M=>`${Math.round(M)} %`:M=>Wr(g.metric,M)})]})]})}function Ea({title:t,help:e,children:n}){return p.jsxs("div",{className:"setting-row",children:[p.jsxs("div",{className:"setting-row__text",children:[p.jsx("h3",{children:t}),e&&p.jsx("p",{children:e})]}),p.jsx("div",{className:"setting-row__control",children:n})]})}function g2(){const{prefs:t,setPrefs:e,clientId:n,setClientId:i,resetDemo:r,reducedMotion:s,notify:a}=Pn(),o=(l,c)=>d=>{e({...t,[l]:d}),a(`${c} actualizado`)};return p.jsxs("div",{className:"page page--narrow",children:[p.jsx("header",{className:"page-head",children:p.jsxs("div",{children:[p.jsx("h1",{className:"page-title",children:"Configuración visual"}),p.jsx("p",{className:"page-sub",children:"Estas preferencias solo afectan a esta sesión del navegador; no se guardan en ningún servidor."})]})}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Cliente de demostración"}),p.jsx("div",{className:"client-options",role:"radiogroup","aria-label":"Cliente de demostración",children:Zs.map(l=>p.jsxs("label",{className:"client-option","data-active":n===l.id,children:[p.jsx("input",{type:"radio",name:"client",checked:n===l.id,onChange:()=>i(l.id)}),p.jsx("span",{className:"client-option__name",children:l.name}),p.jsxs("span",{className:"client-option__desc",children:[l.sector,". ",l.components.length," componentes."]})]},l.id))})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Interfaz"}),p.jsx(Ea,{title:"Tema",help:"La escena 3D conserva su fondo oscuro en ambos temas para que las señales mantengan contraste.",children:p.jsx(Qi,{label:"Tema",value:t.theme,onChange:o("theme","Tema"),options:[{value:"dark",label:"Oscuro",icon:jv},{value:"light",label:"Claro",icon:Xv}]})}),p.jsx(Ea,{title:"Animaciones",help:`Con movimiento reducido se detienen pulsos, meteoritos y transiciones de cámara. Estado actual: ${s?"reducido":"completo"}.`,children:p.jsx(Qi,{label:"Animaciones",value:t.motion,onChange:o("motion","Movimiento"),options:[{value:"system",label:"Según el sistema"},{value:"full",label:"Completas"},{value:"reduced",label:"Reducidas"}]})}),p.jsx(Ea,{title:"Etiquetas en la escena",help:"Mostrar el nombre de todos los componentes o solo de los que tienen una señal.",children:p.jsx(Qi,{label:"Etiquetas",value:t.labels,onChange:o("labels","Etiquetas"),options:[{value:"all",label:"Todas"},{value:"flagged",label:"Solo con señal"}]})}),p.jsx(Ea,{title:"Calidad 3D",help:"La opción ligera desactiva sombras y suavizado para equipos más modestos.",children:p.jsx(Qi,{label:"Calidad 3D",value:t.quality,onChange:o("quality","Calidad 3D"),options:[{value:"high",label:"Alta"},{value:"light",label:"Ligera"}]})})]}),p.jsxs("section",{className:"card-plain",children:[p.jsx("h2",{className:"block-title",children:"Restablecer"}),p.jsx(Ea,{title:"Volver a la configuración inicial",help:"Regresa al primer cliente, al escenario de señales sospechosas, a las 09:45 y a las preferencias predeterminadas. También reabre las alertas cerradas.",children:p.jsxs("button",{type:"button",className:"btn",onClick:r,disabled:!1,children:[p.jsx(yc,{size:16,"aria-hidden":"true"}),"Restablecer demostración"]})}),p.jsxs("p",{className:"muted small",children:["Preferencias predeterminadas: tema ",zd.theme==="dark"?"oscuro":"claro",", animaciones según el sistema, todas las etiquetas, calidad alta."]})]})]})}const v2={monitoreo:O_,alertas:l2,infraestructura:u2,diagnostico:d2,historial:h2,simulacion:m2,configuracion:g2};function _2(){const{route:t}=Pn(),e=v2[t.page]||O_;return p.jsxs("div",{className:"app",children:[p.jsx("a",{className:"skip-link",href:"#/",onClick:n=>{var i;n.preventDefault(),(i=document.getElementById("main"))==null||i.focus()},children:"Saltar al contenido"}),p.jsx(sM,{}),p.jsxs("div",{className:"app__main",children:[p.jsx(oM,{}),p.jsx("main",{id:"main",className:"content",tabIndex:-1,"data-page":t.page,children:p.jsx(e,{},t.page)})]}),p.jsx(lM,{})]})}function x2(){return p.jsx(kS,{children:p.jsx(_2,{})})}Lv(document.getElementById("root")).render(p.jsx(ce.StrictMode,{children:p.jsx(x2,{})}));
