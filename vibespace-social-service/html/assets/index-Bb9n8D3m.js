(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))R(b);new MutationObserver(b=>{for(const B of b)if(B.type==="childList")for(const W of B.addedNodes)W.tagName==="LINK"&&W.rel==="modulepreload"&&R(W)}).observe(document,{childList:!0,subtree:!0});function m(b){const B={};return b.integrity&&(B.integrity=b.integrity),b.referrerPolicy&&(B.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?B.credentials="include":b.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function R(b){if(b.ep)return;b.ep=!0;const B=m(b);fetch(b.href,B)}})();function Vu(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var Bi={exports:{}},Lr={},Ui={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu;function zf(){if(Iu)return re;Iu=1;var x=Symbol.for("react.element"),y=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),W=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),X=Symbol.iterator;function $(a){return a===null||typeof a!="object"?null:(a=X&&a[X]||a["@@iterator"],typeof a=="function"?a:null)}var ue={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,J={};function D(a,g,N){this.props=a,this.context=g,this.refs=J,this.updater=N||ue}D.prototype.isReactComponent={},D.prototype.setState=function(a,g){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,g,"setState")},D.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function ye(){}ye.prototype=D.prototype;function xe(a,g,N){this.props=a,this.context=g,this.refs=J,this.updater=N||ue}var V=xe.prototype=new ye;V.constructor=xe,te(V,D.prototype),V.isPureReactComponent=!0;var ie=Array.isArray,M=Object.prototype.hasOwnProperty,ae={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function ve(a,g,N){var j,T={},I=null,z=null;if(g!=null)for(j in g.ref!==void 0&&(z=g.ref),g.key!==void 0&&(I=""+g.key),g)M.call(g,j)&&!ce.hasOwnProperty(j)&&(T[j]=g[j]);var L=arguments.length-2;if(L===1)T.children=N;else if(1<L){for(var K=Array(L),se=0;se<L;se++)K[se]=arguments[se+2];T.children=K}if(a&&a.defaultProps)for(j in L=a.defaultProps,L)T[j]===void 0&&(T[j]=L[j]);return{$$typeof:x,type:a,key:I,ref:z,props:T,_owner:ae.current}}function We(a,g){return{$$typeof:x,type:a.type,key:g,ref:a.ref,props:a.props,_owner:a._owner}}function De(a){return typeof a=="object"&&a!==null&&a.$$typeof===x}function de(a){var g={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(N){return g[N]})}var me=/\/+/g;function Ke(a,g){return typeof a=="object"&&a!==null&&a.key!=null?de(""+a.key):g.toString(36)}function Je(a,g,N,j,T){var I=typeof a;(I==="undefined"||I==="boolean")&&(a=null);var z=!1;if(a===null)z=!0;else switch(I){case"string":case"number":z=!0;break;case"object":switch(a.$$typeof){case x:case y:z=!0}}if(z)return z=a,T=T(z),a=j===""?"."+Ke(z,0):j,ie(T)?(N="",a!=null&&(N=a.replace(me,"$&/")+"/"),Je(T,g,N,"",function(se){return se})):T!=null&&(De(T)&&(T=We(T,N+(!T.key||z&&z.key===T.key?"":(""+T.key).replace(me,"$&/")+"/")+a)),g.push(T)),1;if(z=0,j=j===""?".":j+":",ie(a))for(var L=0;L<a.length;L++){I=a[L];var K=j+Ke(I,L);z+=Je(I,g,N,K,T)}else if(K=$(a),typeof K=="function")for(a=K.call(a),L=0;!(I=a.next()).done;)I=I.value,K=j+Ke(I,L++),z+=Je(I,g,N,K,T);else if(I==="object")throw g=String(a),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return z}function et(a,g,N){if(a==null)return a;var j=[],T=0;return Je(a,j,"","",function(I){return g.call(N,I,T++)}),j}function Fe(a){if(a._status===-1){var g=a._result;g=g(),g.then(function(N){(a._status===0||a._status===-1)&&(a._status=1,a._result=N)},function(N){(a._status===0||a._status===-1)&&(a._status=2,a._result=N)}),a._status===-1&&(a._status=0,a._result=g)}if(a._status===1)return a._result.default;throw a._result}var Ce={current:null},_={transition:null},G={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:_,ReactCurrentOwner:ae};function d(){throw Error("act(...) is not supported in production builds of React.")}return re.Children={map:et,forEach:function(a,g,N){et(a,function(){g.apply(this,arguments)},N)},count:function(a){var g=0;return et(a,function(){g++}),g},toArray:function(a){return et(a,function(g){return g})||[]},only:function(a){if(!De(a))throw Error("React.Children.only expected to receive a single React element child.");return a}},re.Component=D,re.Fragment=m,re.Profiler=b,re.PureComponent=xe,re.StrictMode=R,re.Suspense=E,re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,re.act=d,re.cloneElement=function(a,g,N){if(a==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var j=te({},a.props),T=a.key,I=a.ref,z=a._owner;if(g!=null){if(g.ref!==void 0&&(I=g.ref,z=ae.current),g.key!==void 0&&(T=""+g.key),a.type&&a.type.defaultProps)var L=a.type.defaultProps;for(K in g)M.call(g,K)&&!ce.hasOwnProperty(K)&&(j[K]=g[K]===void 0&&L!==void 0?L[K]:g[K])}var K=arguments.length-2;if(K===1)j.children=N;else if(1<K){L=Array(K);for(var se=0;se<K;se++)L[se]=arguments[se+2];j.children=L}return{$$typeof:x,type:a.type,key:T,ref:I,props:j,_owner:z}},re.createContext=function(a){return a={$$typeof:W,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},a.Provider={$$typeof:B,_context:a},a.Consumer=a},re.createElement=ve,re.createFactory=function(a){var g=ve.bind(null,a);return g.type=a,g},re.createRef=function(){return{current:null}},re.forwardRef=function(a){return{$$typeof:Q,render:a}},re.isValidElement=De,re.lazy=function(a){return{$$typeof:ee,_payload:{_status:-1,_result:a},_init:Fe}},re.memo=function(a,g){return{$$typeof:q,type:a,compare:g===void 0?null:g}},re.startTransition=function(a){var g=_.transition;_.transition={};try{a()}finally{_.transition=g}},re.unstable_act=d,re.useCallback=function(a,g){return Ce.current.useCallback(a,g)},re.useContext=function(a){return Ce.current.useContext(a)},re.useDebugValue=function(){},re.useDeferredValue=function(a){return Ce.current.useDeferredValue(a)},re.useEffect=function(a,g){return Ce.current.useEffect(a,g)},re.useId=function(){return Ce.current.useId()},re.useImperativeHandle=function(a,g,N){return Ce.current.useImperativeHandle(a,g,N)},re.useInsertionEffect=function(a,g){return Ce.current.useInsertionEffect(a,g)},re.useLayoutEffect=function(a,g){return Ce.current.useLayoutEffect(a,g)},re.useMemo=function(a,g){return Ce.current.useMemo(a,g)},re.useReducer=function(a,g,N){return Ce.current.useReducer(a,g,N)},re.useRef=function(a){return Ce.current.useRef(a)},re.useState=function(a){return Ce.current.useState(a)},re.useSyncExternalStore=function(a,g,N){return Ce.current.useSyncExternalStore(a,g,N)},re.useTransition=function(){return Ce.current.useTransition()},re.version="18.3.1",re}var Ru;function Qi(){return Ru||(Ru=1,Ui.exports=zf()),Ui.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu;function Tf(){if(Lu)return Lr;Lu=1;var x=Qi(),y=Symbol.for("react.element"),m=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,b=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function W(Q,E,q){var ee,X={},$=null,ue=null;q!==void 0&&($=""+q),E.key!==void 0&&($=""+E.key),E.ref!==void 0&&(ue=E.ref);for(ee in E)R.call(E,ee)&&!B.hasOwnProperty(ee)&&(X[ee]=E[ee]);if(Q&&Q.defaultProps)for(ee in E=Q.defaultProps,E)X[ee]===void 0&&(X[ee]=E[ee]);return{$$typeof:y,type:Q,key:$,ref:ue,props:X,_owner:b.current}}return Lr.Fragment=m,Lr.jsx=W,Lr.jsxs=W,Lr}var Au;function Pf(){return Au||(Au=1,Bi.exports=Tf()),Bi.exports}var s=Pf(),ne=Qi();const If=Vu(ne);var Gl={},Vi={exports:{}},at={},Wi={exports:{}},$i={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ou;function Rf(){return Ou||(Ou=1,(function(x){function y(_,G){var d=_.length;_.push(G);e:for(;0<d;){var a=d-1>>>1,g=_[a];if(0<b(g,G))_[a]=G,_[d]=g,d=a;else break e}}function m(_){return _.length===0?null:_[0]}function R(_){if(_.length===0)return null;var G=_[0],d=_.pop();if(d!==G){_[0]=d;e:for(var a=0,g=_.length,N=g>>>1;a<N;){var j=2*(a+1)-1,T=_[j],I=j+1,z=_[I];if(0>b(T,d))I<g&&0>b(z,T)?(_[a]=z,_[I]=d,a=I):(_[a]=T,_[j]=d,a=j);else if(I<g&&0>b(z,d))_[a]=z,_[I]=d,a=I;else break e}}return G}function b(_,G){var d=_.sortIndex-G.sortIndex;return d!==0?d:_.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var B=performance;x.unstable_now=function(){return B.now()}}else{var W=Date,Q=W.now();x.unstable_now=function(){return W.now()-Q}}var E=[],q=[],ee=1,X=null,$=3,ue=!1,te=!1,J=!1,D=typeof setTimeout=="function"?setTimeout:null,ye=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(_){for(var G=m(q);G!==null;){if(G.callback===null)R(q);else if(G.startTime<=_)R(q),G.sortIndex=G.expirationTime,y(E,G);else break;G=m(q)}}function ie(_){if(J=!1,V(_),!te)if(m(E)!==null)te=!0,Fe(M);else{var G=m(q);G!==null&&Ce(ie,G.startTime-_)}}function M(_,G){te=!1,J&&(J=!1,ye(ve),ve=-1),ue=!0;var d=$;try{for(V(G),X=m(E);X!==null&&(!(X.expirationTime>G)||_&&!de());){var a=X.callback;if(typeof a=="function"){X.callback=null,$=X.priorityLevel;var g=a(X.expirationTime<=G);G=x.unstable_now(),typeof g=="function"?X.callback=g:X===m(E)&&R(E),V(G)}else R(E);X=m(E)}if(X!==null)var N=!0;else{var j=m(q);j!==null&&Ce(ie,j.startTime-G),N=!1}return N}finally{X=null,$=d,ue=!1}}var ae=!1,ce=null,ve=-1,We=5,De=-1;function de(){return!(x.unstable_now()-De<We)}function me(){if(ce!==null){var _=x.unstable_now();De=_;var G=!0;try{G=ce(!0,_)}finally{G?Ke():(ae=!1,ce=null)}}else ae=!1}var Ke;if(typeof xe=="function")Ke=function(){xe(me)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,et=Je.port2;Je.port1.onmessage=me,Ke=function(){et.postMessage(null)}}else Ke=function(){D(me,0)};function Fe(_){ce=_,ae||(ae=!0,Ke())}function Ce(_,G){ve=D(function(){_(x.unstable_now())},G)}x.unstable_IdlePriority=5,x.unstable_ImmediatePriority=1,x.unstable_LowPriority=4,x.unstable_NormalPriority=3,x.unstable_Profiling=null,x.unstable_UserBlockingPriority=2,x.unstable_cancelCallback=function(_){_.callback=null},x.unstable_continueExecution=function(){te||ue||(te=!0,Fe(M))},x.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):We=0<_?Math.floor(1e3/_):5},x.unstable_getCurrentPriorityLevel=function(){return $},x.unstable_getFirstCallbackNode=function(){return m(E)},x.unstable_next=function(_){switch($){case 1:case 2:case 3:var G=3;break;default:G=$}var d=$;$=G;try{return _()}finally{$=d}},x.unstable_pauseExecution=function(){},x.unstable_requestPaint=function(){},x.unstable_runWithPriority=function(_,G){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var d=$;$=_;try{return G()}finally{$=d}},x.unstable_scheduleCallback=function(_,G,d){var a=x.unstable_now();switch(typeof d=="object"&&d!==null?(d=d.delay,d=typeof d=="number"&&0<d?a+d:a):d=a,_){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=d+g,_={id:ee++,callback:G,priorityLevel:_,startTime:d,expirationTime:g,sortIndex:-1},d>a?(_.sortIndex=d,y(q,_),m(E)===null&&_===m(q)&&(J?(ye(ve),ve=-1):J=!0,Ce(ie,d-a))):(_.sortIndex=g,y(E,_),te||ue||(te=!0,Fe(M))),_},x.unstable_shouldYield=de,x.unstable_wrapCallback=function(_){var G=$;return function(){var d=$;$=G;try{return _.apply(this,arguments)}finally{$=d}}}})($i)),$i}var Du;function Lf(){return Du||(Du=1,Wi.exports=Rf()),Wi.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Af(){if(Fu)return at;Fu=1;var x=Qi(),y=Lf();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var R=new Set,b={};function B(e,t){W(e,t),W(e+"Capture",t)}function W(e,t){for(b[e]=t,e=0;e<t.length;e++)R.add(t[e])}var Q=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ee={},X={};function $(e){return E.call(X,e)?!0:E.call(ee,e)?!1:q.test(e)?X[e]=!0:(ee[e]=!0,!1)}function ue(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function te(e,t,n,r){if(t===null||typeof t>"u"||ue(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function J(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new J(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new J(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new J(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new J(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new J(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new J(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new J(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new J(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new J(e,5,!1,e.toLowerCase(),null,!1,!1)});var ye=/[\-:]([a-z])/g;function xe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ye,xe);D[t]=new J(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ye,xe);D[t]=new J(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ye,xe);D[t]=new J(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new J(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new J(e,1,!1,e.toLowerCase(),null,!0,!0)});function V(e,t,n,r){var l=D.hasOwnProperty(t)?D[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(te(t,n,l,r)&&(n=null),r||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ie=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),ae=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),ve=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),De=Symbol.for("react.provider"),de=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),Ke=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),Ce=Symbol.for("react.offscreen"),_=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var d=Object.assign,a;function g(e){if(a===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);a=t&&t[1]||""}return`
`+a+e}var N=!1;function j(e,t){if(!e||N)return"";N=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(v){var r=v}Reflect.construct(e,[],t)}else{try{t.call()}catch(v){r=v}e.call(t.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack=="string"){for(var l=v.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var c=`
`+l[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=u);break}}}finally{N=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?g(e):""}function T(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=j(e.type,!1),e;case 11:return e=j(e.type.render,!1),e;case 1:return e=j(e.type,!0),e;default:return""}}function I(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ce:return"Fragment";case ae:return"Portal";case We:return"Profiler";case ve:return"StrictMode";case Ke:return"Suspense";case Je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case de:return(e.displayName||"Context")+".Consumer";case De:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return t=e.displayName||null,t!==null?t:I(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return I(e(t))}catch{}}return null}function z(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return I(t);case 8:return t===ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function L(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function K(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function se(e){var t=K(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function he(e){e._valueTracker||(e._valueTracker=se(e))}function ke(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=K(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Me(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oe(e,t){var n=t.checked;return d({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Be(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=L(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tt(e,t){t=t.checked,t!=null&&V(e,"checked",t,!1)}function qe(e,t){tt(e,t);var n=L(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xt(e,t.type,n):t.hasOwnProperty("defaultValue")&&xt(e,t.type,L(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ft(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xt(e,t,n){(t!=="number"||Me(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $e=Array.isArray;function Ut(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+L(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Gn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return d({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Dr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if($e(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:L(n)}}function Kn(e,t){var n=L(t.value),r=L(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sn,Zn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sn=Sn||document.createElement("div"),Sn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ql=["Webkit","ms","Moz","O"];Object.keys(Pt).forEach(function(e){ql.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pt[t]=Pt[e]})});function Br(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pt.hasOwnProperty(e)&&Pt[e]?(""+t).trim():t+"px"}function Ki(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Br(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Rc=d({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(Rc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function eo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var to=null,Cn=null,Nn=null;function qi(e){if(e=wr(e)){if(typeof to!="function")throw Error(m(280));var t=e.stateNode;t&&(t=ul(t),to(e.stateNode,e.type,t))}}function Xi(e){Cn?Nn?Nn.push(e):Nn=[e]:Cn=e}function Zi(){if(Cn){var e=Cn,t=Nn;if(Nn=Cn=null,qi(e),t)for(e=0;e<t.length;e++)qi(t[e])}}function Ji(e,t){return e(t)}function ea(){}var no=!1;function ta(e,t,n){if(no)return e(t,n);no=!0;try{return Ji(e,t,n)}finally{no=!1,(Cn!==null||Nn!==null)&&(ea(),Zi())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var ro=!1;if(Q)try{var er={};Object.defineProperty(er,"passive",{get:function(){ro=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{ro=!1}function Lc(e,t,n,r,l,o,i,u,c){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(k){this.onError(k)}}var tr=!1,Ur=null,Vr=!1,lo=null,Ac={onError:function(e){tr=!0,Ur=e}};function Oc(e,t,n,r,l,o,i,u,c){tr=!1,Ur=null,Lc.apply(Ac,arguments)}function Dc(e,t,n,r,l,o,i,u,c){if(Oc.apply(this,arguments),tr){if(tr){var v=Ur;tr=!1,Ur=null}else throw Error(m(198));Vr||(Vr=!0,lo=v)}}function un(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ra(e){if(un(e)!==e)throw Error(m(188))}function Fc(e){var t=e.alternate;if(!t){if(t=un(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ra(l),e;if(o===r)return ra(l),t;o=o.sibling}throw Error(m(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function la(e){return e=Fc(e),e!==null?oa(e):null}function oa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=oa(e);if(t!==null)return t;e=e.sibling}return null}var ia=y.unstable_scheduleCallback,aa=y.unstable_cancelCallback,Bc=y.unstable_shouldYield,Uc=y.unstable_requestPaint,ze=y.unstable_now,Vc=y.unstable_getCurrentPriorityLevel,oo=y.unstable_ImmediatePriority,sa=y.unstable_UserBlockingPriority,Wr=y.unstable_NormalPriority,Wc=y.unstable_LowPriority,ua=y.unstable_IdlePriority,$r=null,jt=null;function $c(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot($r,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Qc,Hc=Math.log,Yc=Math.LN2;function Qc(e){return e>>>=0,e===0?32:31-(Hc(e)/Yc|0)|0}var Hr=64,Yr=4194304;function nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=nr(u):(o&=i,o!==0&&(r=nr(o)))}else i=n&~l,i!==0?r=nr(i):o!==0&&(r=nr(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wt(t),l=1<<n,r|=e[n],t&=~l;return r}function Gc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-wt(o),u=1<<i,c=l[i];c===-1?((u&n)===0||(u&r)!==0)&&(l[i]=Gc(u,t)):c<=t&&(e.expiredLanes|=u),o&=~u}}function io(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ca(){var e=Hr;return Hr<<=1,(Hr&4194240)===0&&(Hr=64),e}function ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-wt(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function so(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ge=0;function da(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var fa,uo,pa,ma,ha,co=!1,Gr=[],Wt=null,$t=null,Ht=null,lr=new Map,or=new Map,Yt=[],Xc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function ir(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=wr(t),t!==null&&uo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Zc(e,t,n,r,l){switch(t){case"focusin":return Wt=ir(Wt,e,t,n,r,l),!0;case"dragenter":return $t=ir($t,e,t,n,r,l),!0;case"mouseover":return Ht=ir(Ht,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return lr.set(o,ir(lr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,or.set(o,ir(or.get(o)||null,e,t,n,r,l)),!0}return!1}function va(e){var t=cn(e.target);if(t!==null){var n=un(t);if(n!==null){if(t=n.tag,t===13){if(t=na(n),t!==null){e.blockedOn=t,ha(e.priority,function(){pa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=wr(n),t!==null&&uo(t),e.blockedOn=n,!1;t.shift()}return!0}function ya(e,t,n){Kr(e)&&n.delete(t)}function Jc(){co=!1,Wt!==null&&Kr(Wt)&&(Wt=null),$t!==null&&Kr($t)&&($t=null),Ht!==null&&Kr(Ht)&&(Ht=null),lr.forEach(ya),or.forEach(ya)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,co||(co=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,Jc)))}function sr(e){function t(l){return ar(l,e)}if(0<Gr.length){ar(Gr[0],e);for(var n=1;n<Gr.length;n++){var r=Gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&ar(Wt,e),$t!==null&&ar($t,e),Ht!==null&&ar(Ht,e),lr.forEach(t),or.forEach(t),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)va(n),n.blockedOn===null&&Yt.shift()}var En=ie.ReactCurrentBatchConfig,qr=!0;function ed(e,t,n,r){var l=ge,o=En.transition;En.transition=null;try{ge=1,fo(e,t,n,r)}finally{ge=l,En.transition=o}}function td(e,t,n,r){var l=ge,o=En.transition;En.transition=null;try{ge=4,fo(e,t,n,r)}finally{ge=l,En.transition=o}}function fo(e,t,n,r){if(qr){var l=po(e,t,n,r);if(l===null)zo(e,t,r,Xr,n),ga(e,r);else if(Zc(l,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<Xc.indexOf(e)){for(;l!==null;){var o=wr(l);if(o!==null&&fa(o),o=po(e,t,n,r),o===null&&zo(e,t,r,Xr,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else zo(e,t,r,null,n)}}var Xr=null;function po(e,t,n,r){if(Xr=null,e=eo(r),e=cn(e),e!==null)if(t=un(e),t===null)e=null;else if(n=t.tag,n===13){if(e=na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xr=e,null}function xa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vc()){case oo:return 1;case sa:return 4;case Wr:case Wc:return 16;case ua:return 536870912;default:return 16}default:return 16}}var Qt=null,mo=null,Zr=null;function wa(){if(Zr)return Zr;var e,t=mo,n=t.length,r,l="value"in Qt?Qt.value:Qt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Zr=l.slice(e,1<r?1-r:void 0)}function Jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function ka(){return!1}function st(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?el:ka,this.isPropagationStopped=ka,this}return d(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=st(jn),ur=d({},jn,{view:0,detail:0}),nd=st(ur),go,vo,cr,tl=d({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(go=e.screenX-cr.screenX,vo=e.screenY-cr.screenY):vo=go=0,cr=e),go)},movementY:function(e){return"movementY"in e?e.movementY:vo}}),ba=st(tl),rd=d({},tl,{dataTransfer:0}),ld=st(rd),od=d({},ur,{relatedTarget:0}),yo=st(od),id=d({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=st(id),sd=d({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ud=st(sd),cd=d({},jn,{data:0}),Sa=st(cd),dd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pd[e])?!!t[e]:!1}function xo(){return md}var hd=d({},ur,{key:function(e){if(e.key){var t=dd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(e){return e.type==="keypress"?Jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gd=st(hd),vd=d({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ca=st(vd),yd=d({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),xd=st(yd),wd=d({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),kd=st(wd),bd=d({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sd=st(bd),Cd=[9,13,27,32],wo=Q&&"CompositionEvent"in window,dr=null;Q&&"documentMode"in document&&(dr=document.documentMode);var Nd=Q&&"TextEvent"in window&&!dr,Na=Q&&(!wo||dr&&8<dr&&11>=dr),Ea=" ",ja=!1;function Ma(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _a(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Ed(e,t){switch(e){case"compositionend":return _a(t);case"keypress":return t.which!==32?null:(ja=!0,Ea);case"textInput":return e=t.data,e===Ea&&ja?null:e;default:return null}}function jd(e,t){if(Mn)return e==="compositionend"||!wo&&Ma(e,t)?(e=wa(),Zr=mo=Qt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Na&&t.locale!=="ko"?null:t.data;default:return null}}var Md={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Md[e.type]:t==="textarea"}function Ta(e,t,n,r){Xi(r),t=il(t,"onChange"),0<t.length&&(n=new ho("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function _d(e){Ka(e,0)}function nl(e){var t=In(e);if(ke(t))return e}function zd(e,t){if(e==="change")return t}var Pa=!1;if(Q){var ko;if(Q){var bo="oninput"in document;if(!bo){var Ia=document.createElement("div");Ia.setAttribute("oninput","return;"),bo=typeof Ia.oninput=="function"}ko=bo}else ko=!1;Pa=ko&&(!document.documentMode||9<document.documentMode)}function Ra(){fr&&(fr.detachEvent("onpropertychange",La),pr=fr=null)}function La(e){if(e.propertyName==="value"&&nl(pr)){var t=[];Ta(t,pr,e,eo(e)),ta(_d,t)}}function Td(e,t,n){e==="focusin"?(Ra(),fr=t,pr=n,fr.attachEvent("onpropertychange",La)):e==="focusout"&&Ra()}function Pd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(pr)}function Id(e,t){if(e==="click")return nl(t)}function Rd(e,t){if(e==="input"||e==="change")return nl(t)}function Ld(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:Ld;function mr(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!E.call(t,l)||!kt(e[l],t[l]))return!1}return!0}function Aa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oa(e,t){var n=Aa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aa(n)}}function Da(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Da(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fa(){for(var e=window,t=Me();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Me(e.document)}return t}function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ad(e){var t=Fa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Da(n.ownerDocument.documentElement,n)){if(r!==null&&So(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Oa(n,o);var i=Oa(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=Q&&"documentMode"in document&&11>=document.documentMode,_n=null,Co=null,hr=null,No=!1;function Ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;No||_n==null||_n!==Me(r)||(r=_n,"selectionStart"in r&&So(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&mr(hr,r)||(hr=r,r=il(Co,"onSelect"),0<r.length&&(t=new ho("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=_n)))}function rl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:rl("Animation","AnimationEnd"),animationiteration:rl("Animation","AnimationIteration"),animationstart:rl("Animation","AnimationStart"),transitionend:rl("Transition","TransitionEnd")},Eo={},Ua={};Q&&(Ua=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function ll(e){if(Eo[e])return Eo[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ua)return Eo[e]=t[n];return e}var Va=ll("animationend"),Wa=ll("animationiteration"),$a=ll("animationstart"),Ha=ll("transitionend"),Ya=new Map,Qa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Ya.set(e,t),B(t,[e])}for(var jo=0;jo<Qa.length;jo++){var Mo=Qa[jo],Dd=Mo.toLowerCase(),Fd=Mo[0].toUpperCase()+Mo.slice(1);Gt(Dd,"on"+Fd)}Gt(Va,"onAnimationEnd"),Gt(Wa,"onAnimationIteration"),Gt($a,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Ha,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),B("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),B("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),B("onBeforeInput",["compositionend","keypress","textInput","paste"]),B("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),B("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));function Ga(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dc(r,t,void 0,e),e.currentTarget=null}function Ka(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],c=u.instance,v=u.currentTarget;if(u=u.listener,c!==o&&l.isPropagationStopped())break e;Ga(l,u,v),o=c}else for(i=0;i<r.length;i++){if(u=r[i],c=u.instance,v=u.currentTarget,u=u.listener,c!==o&&l.isPropagationStopped())break e;Ga(l,u,v),o=c}}}if(Vr)throw e=lo,Vr=!1,lo=null,e}function be(e,t){var n=t[Ao];n===void 0&&(n=t[Ao]=new Set);var r=e+"__bubble";n.has(r)||(qa(t,e,2,!1),n.add(r))}function _o(e,t,n){var r=0;t&&(r|=4),qa(n,e,r,t)}var ol="_reactListening"+Math.random().toString(36).slice(2);function vr(e){if(!e[ol]){e[ol]=!0,R.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||_o(n,!1,e),_o(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ol]||(t[ol]=!0,_o("selectionchange",!1,t))}}function qa(e,t,n,r){switch(xa(t)){case 1:var l=ed;break;case 4:l=td;break;default:l=fo}n=l.bind(null,t,n,e),l=void 0,!ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function zo(e,t,n,r,l){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;i=i.return}for(;u!==null;){if(i=cn(u),i===null)return;if(c=i.tag,c===5||c===6){r=o=i;continue e}u=u.parentNode}}r=r.return}ta(function(){var v=o,k=eo(n),S=[];e:{var w=Ya.get(e);if(w!==void 0){var P=ho,O=e;switch(e){case"keypress":if(Jr(n)===0)break e;case"keydown":case"keyup":P=gd;break;case"focusin":O="focus",P=yo;break;case"focusout":O="blur",P=yo;break;case"beforeblur":case"afterblur":P=yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=ba;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=xd;break;case Va:case Wa:case $a:P=ad;break;case Ha:P=kd;break;case"scroll":P=nd;break;case"wheel":P=Sd;break;case"copy":case"cut":case"paste":P=ud;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Ca}var F=(t&4)!==0,Te=!F&&e==="scroll",p=F?w!==null?w+"Capture":null:w;F=[];for(var f=v,h;f!==null;){h=f;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,p!==null&&(C=Jn(f,p),C!=null&&F.push(yr(f,C,h)))),Te)break;f=f.return}0<F.length&&(w=new P(w,O,null,n,k),S.push({event:w,listeners:F}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",w&&n!==Jl&&(O=n.relatedTarget||n.fromElement)&&(cn(O)||O[It]))break e;if((P||w)&&(w=k.window===k?k:(w=k.ownerDocument)?w.defaultView||w.parentWindow:window,P?(O=n.relatedTarget||n.toElement,P=v,O=O?cn(O):null,O!==null&&(Te=un(O),O!==Te||O.tag!==5&&O.tag!==6)&&(O=null)):(P=null,O=v),P!==O)){if(F=ba,C="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(F=Ca,C="onPointerLeave",p="onPointerEnter",f="pointer"),Te=P==null?w:In(P),h=O==null?w:In(O),w=new F(C,f+"leave",P,n,k),w.target=Te,w.relatedTarget=h,C=null,cn(k)===v&&(F=new F(p,f+"enter",O,n,k),F.target=h,F.relatedTarget=Te,C=F),Te=C,P&&O)t:{for(F=P,p=O,f=0,h=F;h;h=Tn(h))f++;for(h=0,C=p;C;C=Tn(C))h++;for(;0<f-h;)F=Tn(F),f--;for(;0<h-f;)p=Tn(p),h--;for(;f--;){if(F===p||p!==null&&F===p.alternate)break t;F=Tn(F),p=Tn(p)}F=null}else F=null;P!==null&&Xa(S,w,P,F,!1),O!==null&&Te!==null&&Xa(S,Te,O,F,!0)}}e:{if(w=v?In(v):window,P=w.nodeName&&w.nodeName.toLowerCase(),P==="select"||P==="input"&&w.type==="file")var U=zd;else if(za(w))if(Pa)U=Rd;else{U=Pd;var H=Td}else(P=w.nodeName)&&P.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(U=Id);if(U&&(U=U(e,v))){Ta(S,U,n,k);break e}H&&H(e,w,v),e==="focusout"&&(H=w._wrapperState)&&H.controlled&&w.type==="number"&&xt(w,"number",w.value)}switch(H=v?In(v):window,e){case"focusin":(za(H)||H.contentEditable==="true")&&(_n=H,Co=v,hr=null);break;case"focusout":hr=Co=_n=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,Ba(S,n,k);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":Ba(S,n,k)}var Y;if(wo)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Mn?Ma(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Na&&n.locale!=="ko"&&(Mn||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Mn&&(Y=wa()):(Qt=k,mo="value"in Qt?Qt.value:Qt.textContent,Mn=!0)),H=il(v,Z),0<H.length&&(Z=new Sa(Z,e,null,n,k),S.push({event:Z,listeners:H}),Y?Z.data=Y:(Y=_a(n),Y!==null&&(Z.data=Y)))),(Y=Nd?Ed(e,n):jd(e,n))&&(v=il(v,"onBeforeInput"),0<v.length&&(k=new Sa("onBeforeInput","beforeinput",null,n,k),S.push({event:k,listeners:v}),k.data=Y))}Ka(S,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Jn(e,n),o!=null&&r.unshift(yr(e,o,l)),o=Jn(e,t),o!=null&&r.push(yr(e,o,l))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xa(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,c=u.alternate,v=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&v!==null&&(u=v,l?(c=Jn(n,o),c!=null&&i.unshift(yr(n,c,u))):l||(c=Jn(n,o),c!=null&&i.push(yr(n,c,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Ud=/\r\n?/g,Vd=/\u0000|\uFFFD/g;function Za(e){return(typeof e=="string"?e:""+e).replace(Ud,`
`).replace(Vd,"")}function al(e,t,n){if(t=Za(t),Za(e)!==t&&n)throw Error(m(425))}function sl(){}var To=null,Po=null;function Io(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ro=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,Ja=typeof Promise=="function"?Promise:void 0,$d=typeof queueMicrotask=="function"?queueMicrotask:typeof Ja<"u"?function(e){return Ja.resolve(null).then(e).catch(Hd)}:Ro;function Hd(e){setTimeout(function(){throw e})}function Lo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);sr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function es(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Pn,xr="__reactProps$"+Pn,It="__reactContainer$"+Pn,Ao="__reactEvents$"+Pn,Yd="__reactListeners$"+Pn,Qd="__reactHandles$"+Pn;function cn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[It]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=es(e);e!==null;){if(n=e[Mt])return n;e=es(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[Mt]||e[It],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function ul(e){return e[xr]||null}var Oo=[],Rn=-1;function qt(e){return{current:e}}function Se(e){0>Rn||(e.current=Oo[Rn],Oo[Rn]=null,Rn--)}function we(e,t){Rn++,Oo[Rn]=e.current,e.current=t}var Xt={},He=qt(Xt),nt=qt(!1),dn=Xt;function Ln(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function rt(e){return e=e.childContextTypes,e!=null}function cl(){Se(nt),Se(He)}function ts(e,t,n){if(He.current!==Xt)throw Error(m(168));we(He,t),we(nt,n)}function ns(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(m(108,z(e)||"Unknown",l));return d({},n,r)}function dl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,dn=He.current,we(He,e),we(nt,nt.current),!0}function rs(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=ns(e,t,dn),r.__reactInternalMemoizedMergedChildContext=e,Se(nt),Se(He),we(He,e)):Se(nt),we(nt,n)}var Rt=null,fl=!1,Do=!1;function ls(e){Rt===null?Rt=[e]:Rt.push(e)}function Gd(e){fl=!0,ls(e)}function Zt(){if(!Do&&Rt!==null){Do=!0;var e=0,t=ge;try{var n=Rt;for(ge=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,fl=!1}catch(l){throw Rt!==null&&(Rt=Rt.slice(e+1)),ia(oo,Zt),l}finally{ge=t,Do=!1}}return null}var An=[],On=0,pl=null,ml=0,pt=[],mt=0,fn=null,Lt=1,At="";function pn(e,t){An[On++]=ml,An[On++]=pl,pl=e,ml=t}function os(e,t,n){pt[mt++]=Lt,pt[mt++]=At,pt[mt++]=fn,fn=e;var r=Lt;e=At;var l=32-wt(r)-1;r&=~(1<<l),n+=1;var o=32-wt(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Lt=1<<32-wt(t)+l|n<<l|r,At=o+e}else Lt=1<<o|n<<l|r,At=e}function Fo(e){e.return!==null&&(pn(e,1),os(e,1,0))}function Bo(e){for(;e===pl;)pl=An[--On],An[On]=null,ml=An[--On],An[On]=null;for(;e===fn;)fn=pt[--mt],pt[mt]=null,At=pt[--mt],pt[mt]=null,Lt=pt[--mt],pt[mt]=null}var ut=null,ct=null,Ne=!1,bt=null;function is(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function as(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fn!==null?{id:Lt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,ct=null,!0):!1;default:return!1}}function Uo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vo(e){if(Ne){var t=ct;if(t){var n=t;if(!as(e,t)){if(Uo(e))throw Error(m(418));t=Kt(n.nextSibling);var r=ut;t&&as(e,t)?is(r,n):(e.flags=e.flags&-4097|2,Ne=!1,ut=e)}}else{if(Uo(e))throw Error(m(418));e.flags=e.flags&-4097|2,Ne=!1,ut=e}}}function ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function hl(e){if(e!==ut)return!1;if(!Ne)return ss(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Io(e.type,e.memoizedProps)),t&&(t=ct)){if(Uo(e))throw us(),Error(m(418));for(;t;)is(e,t),t=Kt(t.nextSibling)}if(ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?Kt(e.stateNode.nextSibling):null;return!0}function us(){for(var e=ct;e;)e=Kt(e.nextSibling)}function Dn(){ct=ut=null,Ne=!1}function Wo(e){bt===null?bt=[e]:bt.push(e)}var Kd=ie.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function gl(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cs(e){var t=e._init;return t(e._payload)}function ds(e){function t(p,f){if(e){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function l(p,f){return p=an(p,f),p.index=0,p.sibling=null,p}function o(p,f,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function u(p,f,h,C){return f===null||f.tag!==6?(f=Ri(h,p.mode,C),f.return=p,f):(f=l(f,h),f.return=p,f)}function c(p,f,h,C){var U=h.type;return U===ce?k(p,f,h.props.children,C,h.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Fe&&cs(U)===f.type)?(C=l(f,h.props),C.ref=kr(p,f,h),C.return=p,C):(C=Bl(h.type,h.key,h.props,null,p.mode,C),C.ref=kr(p,f,h),C.return=p,C)}function v(p,f,h,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Li(h,p.mode,C),f.return=p,f):(f=l(f,h.children||[]),f.return=p,f)}function k(p,f,h,C,U){return f===null||f.tag!==7?(f=kn(h,p.mode,C,U),f.return=p,f):(f=l(f,h),f.return=p,f)}function S(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ri(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case M:return h=Bl(f.type,f.key,f.props,null,p.mode,h),h.ref=kr(p,null,f),h.return=p,h;case ae:return f=Li(f,p.mode,h),f.return=p,f;case Fe:var C=f._init;return S(p,C(f._payload),h)}if($e(f)||G(f))return f=kn(f,p.mode,h,null),f.return=p,f;gl(p,f)}return null}function w(p,f,h,C){var U=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return U!==null?null:u(p,f,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case M:return h.key===U?c(p,f,h,C):null;case ae:return h.key===U?v(p,f,h,C):null;case Fe:return U=h._init,w(p,f,U(h._payload),C)}if($e(h)||G(h))return U!==null?null:k(p,f,h,C,null);gl(p,h)}return null}function P(p,f,h,C,U){if(typeof C=="string"&&C!==""||typeof C=="number")return p=p.get(h)||null,u(f,p,""+C,U);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case M:return p=p.get(C.key===null?h:C.key)||null,c(f,p,C,U);case ae:return p=p.get(C.key===null?h:C.key)||null,v(f,p,C,U);case Fe:var H=C._init;return P(p,f,h,H(C._payload),U)}if($e(C)||G(C))return p=p.get(h)||null,k(f,p,C,U,null);gl(f,C)}return null}function O(p,f,h,C){for(var U=null,H=null,Y=f,Z=f=0,Oe=null;Y!==null&&Z<h.length;Z++){Y.index>Z?(Oe=Y,Y=null):Oe=Y.sibling;var pe=w(p,Y,h[Z],C);if(pe===null){Y===null&&(Y=Oe);break}e&&Y&&pe.alternate===null&&t(p,Y),f=o(pe,f,Z),H===null?U=pe:H.sibling=pe,H=pe,Y=Oe}if(Z===h.length)return n(p,Y),Ne&&pn(p,Z),U;if(Y===null){for(;Z<h.length;Z++)Y=S(p,h[Z],C),Y!==null&&(f=o(Y,f,Z),H===null?U=Y:H.sibling=Y,H=Y);return Ne&&pn(p,Z),U}for(Y=r(p,Y);Z<h.length;Z++)Oe=P(Y,p,Z,h[Z],C),Oe!==null&&(e&&Oe.alternate!==null&&Y.delete(Oe.key===null?Z:Oe.key),f=o(Oe,f,Z),H===null?U=Oe:H.sibling=Oe,H=Oe);return e&&Y.forEach(function(sn){return t(p,sn)}),Ne&&pn(p,Z),U}function F(p,f,h,C){var U=G(h);if(typeof U!="function")throw Error(m(150));if(h=U.call(h),h==null)throw Error(m(151));for(var H=U=null,Y=f,Z=f=0,Oe=null,pe=h.next();Y!==null&&!pe.done;Z++,pe=h.next()){Y.index>Z?(Oe=Y,Y=null):Oe=Y.sibling;var sn=w(p,Y,pe.value,C);if(sn===null){Y===null&&(Y=Oe);break}e&&Y&&sn.alternate===null&&t(p,Y),f=o(sn,f,Z),H===null?U=sn:H.sibling=sn,H=sn,Y=Oe}if(pe.done)return n(p,Y),Ne&&pn(p,Z),U;if(Y===null){for(;!pe.done;Z++,pe=h.next())pe=S(p,pe.value,C),pe!==null&&(f=o(pe,f,Z),H===null?U=pe:H.sibling=pe,H=pe);return Ne&&pn(p,Z),U}for(Y=r(p,Y);!pe.done;Z++,pe=h.next())pe=P(Y,p,Z,pe.value,C),pe!==null&&(e&&pe.alternate!==null&&Y.delete(pe.key===null?Z:pe.key),f=o(pe,f,Z),H===null?U=pe:H.sibling=pe,H=pe);return e&&Y.forEach(function(_f){return t(p,_f)}),Ne&&pn(p,Z),U}function Te(p,f,h,C){if(typeof h=="object"&&h!==null&&h.type===ce&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case M:e:{for(var U=h.key,H=f;H!==null;){if(H.key===U){if(U=h.type,U===ce){if(H.tag===7){n(p,H.sibling),f=l(H,h.props.children),f.return=p,p=f;break e}}else if(H.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Fe&&cs(U)===H.type){n(p,H.sibling),f=l(H,h.props),f.ref=kr(p,H,h),f.return=p,p=f;break e}n(p,H);break}else t(p,H);H=H.sibling}h.type===ce?(f=kn(h.props.children,p.mode,C,h.key),f.return=p,p=f):(C=Bl(h.type,h.key,h.props,null,p.mode,C),C.ref=kr(p,f,h),C.return=p,p=C)}return i(p);case ae:e:{for(H=h.key;f!==null;){if(f.key===H)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=l(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Li(h,p.mode,C),f.return=p,p=f}return i(p);case Fe:return H=h._init,Te(p,f,H(h._payload),C)}if($e(h))return O(p,f,h,C);if(G(h))return F(p,f,h,C);gl(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=l(f,h),f.return=p,p=f):(n(p,f),f=Ri(h,p.mode,C),f.return=p,p=f),i(p)):n(p,f)}return Te}var Fn=ds(!0),fs=ds(!1),vl=qt(null),yl=null,Bn=null,$o=null;function Ho(){$o=Bn=yl=null}function Yo(e){var t=vl.current;Se(vl),e._currentValue=t}function Qo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){yl=e,$o=Bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(lt=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if($o!==e)if(e={context:e,memoizedValue:t,next:null},Bn===null){if(yl===null)throw Error(m(308));Bn=e,yl.dependencies={lanes:0,firstContext:e}}else Bn=Bn.next=e;return t}var mn=null;function Go(e){mn===null?mn=[e]:mn.push(e)}function ps(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Go(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Ko(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ms(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ot(e,n)}return l=r.interleaved,l===null?(t.next=t,Go(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ot(e,n)}function xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}function hs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function wl(e,t,n,r){var l=e.updateQueue;Jt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var c=u,v=c.next;c.next=null,i===null?o=v:i.next=v,i=c;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==i&&(u===null?k.firstBaseUpdate=v:u.next=v,k.lastBaseUpdate=c))}if(o!==null){var S=l.baseState;i=0,k=v=c=null,u=o;do{var w=u.lane,P=u.eventTime;if((r&w)===w){k!==null&&(k=k.next={eventTime:P,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var O=e,F=u;switch(w=t,P=n,F.tag){case 1:if(O=F.payload,typeof O=="function"){S=O.call(P,S,w);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=F.payload,w=typeof O=="function"?O.call(P,S,w):O,w==null)break e;S=d({},S,w);break e;case 2:Jt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,w=l.effects,w===null?l.effects=[u]:w.push(u))}else P={eventTime:P,lane:w,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(v=k=P,c=S):k=k.next=P,i|=w;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;w=u,u=w.next,w.next=null,l.lastBaseUpdate=w,l.shared.pending=null}}while(!0);if(k===null&&(c=S),l.baseState=c,l.firstBaseUpdate=v,l.lastBaseUpdate=k,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);vn|=i,e.lanes=i,e.memoizedState=S}}function gs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(m(191,l));l.call(r)}}}var br={},_t=qt(br),Sr=qt(br),Cr=qt(br);function hn(e){if(e===br)throw Error(m(174));return e}function qo(e,t){switch(we(Cr,t),we(Sr,e),we(_t,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xn(t,e)}Se(_t),we(_t,t)}function Vn(){Se(_t),Se(Sr),Se(Cr)}function vs(e){hn(Cr.current);var t=hn(_t.current),n=Xn(t,e.type);t!==n&&(we(Sr,e),we(_t,n))}function Xo(e){Sr.current===e&&(Se(_t),Se(Sr))}var Ee=qt(0);function kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=[];function Jo(){for(var e=0;e<Zo.length;e++)Zo[e]._workInProgressVersionPrimary=null;Zo.length=0}var bl=ie.ReactCurrentDispatcher,ei=ie.ReactCurrentBatchConfig,gn=0,je=null,Ie=null,Le=null,Sl=!1,Nr=!1,Er=0,qd=0;function Ye(){throw Error(m(321))}function ti(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function ni(e,t,n,r,l,o){if(gn=o,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bl.current=e===null||e.memoizedState===null?ef:tf,e=n(r,l),Nr){o=0;do{if(Nr=!1,Er=0,25<=o)throw Error(m(301));o+=1,Le=Ie=null,t.updateQueue=null,bl.current=nf,e=n(r,l)}while(Nr)}if(bl.current=El,t=Ie!==null&&Ie.next!==null,gn=0,Le=Ie=je=null,Sl=!1,t)throw Error(m(300));return e}function ri(){var e=Er!==0;return Er=0,e}function zt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?je.memoizedState=Le=e:Le=Le.next=e,Le}function gt(){if(Ie===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var t=Le===null?je.memoizedState:Le.next;if(t!==null)Le=t,Ie=e;else{if(e===null)throw Error(m(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Le===null?je.memoizedState=Le=e:Le=Le.next=e}return Le}function jr(e,t){return typeof t=="function"?t(e):t}function li(e){var t=gt(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=Ie,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,c=null,v=o;do{var k=v.lane;if((gn&k)===k)c!==null&&(c=c.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var S={lane:k,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};c===null?(u=c=S,i=r):c=c.next=S,je.lanes|=k,vn|=k}v=v.next}while(v!==null&&v!==o);c===null?i=r:c.next=u,kt(r,t.memoizedState)||(lt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,je.lanes|=o,vn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oi(e){var t=gt(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);kt(o,t.memoizedState)||(lt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ys(){}function xs(e,t){var n=je,r=gt(),l=t(),o=!kt(r.memoizedState,l);if(o&&(r.memoizedState=l,lt=!0),r=r.queue,ii(bs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Mr(9,ks.bind(null,n,r,l,t),void 0,null),Ae===null)throw Error(m(349));(gn&30)!==0||ws(n,t,l)}return l}function ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ks(e,t,n,r){t.value=n,t.getSnapshot=r,Ss(t)&&Cs(e)}function bs(e,t,n){return n(function(){Ss(t)&&Cs(e)})}function Ss(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Cs(e){var t=Ot(e,1);t!==null&&Et(t,e,1,-1)}function Ns(e){var t=zt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jd.bind(null,je,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Es(){return gt().memoizedState}function Cl(e,t,n,r){var l=zt();je.flags|=e,l.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=gt();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var i=Ie.memoizedState;if(o=i.destroy,r!==null&&ti(r,i.deps)){l.memoizedState=Mr(t,n,o,r);return}}je.flags|=e,l.memoizedState=Mr(1|t,n,o,r)}function js(e,t){return Cl(8390656,8,e,t)}function ii(e,t){return Nl(2048,8,e,t)}function Ms(e,t){return Nl(4,2,e,t)}function _s(e,t){return Nl(4,4,e,t)}function zs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ts(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,zs.bind(null,t,e),n)}function ai(){}function Ps(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ti(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Is(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ti(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Rs(e,t,n){return(gn&21)===0?(e.baseState&&(e.baseState=!1,lt=!0),e.memoizedState=n):(kt(n,t)||(n=ca(),je.lanes|=n,vn|=n,e.baseState=!0),t)}function Xd(e,t){var n=ge;ge=n!==0&&4>n?n:4,e(!0);var r=ei.transition;ei.transition={};try{e(!1),t()}finally{ge=n,ei.transition=r}}function Ls(){return gt().memoizedState}function Zd(e,t,n){var r=ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},As(e))Os(t,n);else if(n=ps(e,t,n,r),n!==null){var l=Ze();Et(n,e,r,l),Ds(n,t,r)}}function Jd(e,t,n){var r=ln(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))Os(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,kt(u,i)){var c=t.interleaved;c===null?(l.next=l,Go(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=ps(e,t,l,r),n!==null&&(l=Ze(),Et(n,e,r,l),Ds(n,t,r))}}function As(e){var t=e.alternate;return e===je||t!==null&&t===je}function Os(e,t){Nr=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ds(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,so(e,n)}}var El={readContext:ht,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},ef={readContext:ht,useCallback:function(e,t){return zt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4194308,4,zs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cl(4,2,e,t)},useMemo:function(e,t){var n=zt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zd.bind(null,je,e),[r.memoizedState,e]},useRef:function(e){var t=zt();return e={current:e},t.memoizedState=e},useState:Ns,useDebugValue:ai,useDeferredValue:function(e){return zt().memoizedState=e},useTransition:function(){var e=Ns(!1),t=e[0];return e=Xd.bind(null,e[1]),zt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=je,l=zt();if(Ne){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),Ae===null)throw Error(m(349));(gn&30)!==0||ws(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,js(bs.bind(null,r,o,e),[e]),r.flags|=2048,Mr(9,ks.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=zt(),t=Ae.identifierPrefix;if(Ne){var n=At,r=Lt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},tf={readContext:ht,useCallback:Ps,useContext:ht,useEffect:ii,useImperativeHandle:Ts,useInsertionEffect:Ms,useLayoutEffect:_s,useMemo:Is,useReducer:li,useRef:Es,useState:function(){return li(jr)},useDebugValue:ai,useDeferredValue:function(e){var t=gt();return Rs(t,Ie.memoizedState,e)},useTransition:function(){var e=li(jr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:ys,useSyncExternalStore:xs,useId:Ls,unstable_isNewReconciler:!1},nf={readContext:ht,useCallback:Ps,useContext:ht,useEffect:ii,useImperativeHandle:Ts,useInsertionEffect:Ms,useLayoutEffect:_s,useMemo:Is,useReducer:oi,useRef:Es,useState:function(){return oi(jr)},useDebugValue:ai,useDeferredValue:function(e){var t=gt();return Ie===null?t.memoizedState=e:Rs(t,Ie.memoizedState,e)},useTransition:function(){var e=oi(jr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:ys,useSyncExternalStore:xs,useId:Ls,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=d({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:d({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var jl={isMounted:function(e){return(e=e._reactInternals)?un(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=ln(e),o=Dt(r,l);o.payload=t,n!=null&&(o.callback=n),t=en(e,o,l),t!==null&&(Et(t,e,l,r),xl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=ln(e),o=Dt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=en(e,o,l),t!==null&&(Et(t,e,l,r),xl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=ln(e),l=Dt(n,r);l.tag=2,t!=null&&(l.callback=t),t=en(e,l,r),t!==null&&(Et(t,e,r,n),xl(t,e,r))}};function Fs(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(l,o):!0}function Bs(e,t,n){var r=!1,l=Xt,o=t.contextType;return typeof o=="object"&&o!==null?o=ht(o):(l=rt(t)?dn:He.current,r=t.contextTypes,o=(r=r!=null)?Ln(e,l):Xt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Us(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&jl.enqueueReplaceState(t,t.state,null)}function ui(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Ko(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ht(o):(o=rt(t)?dn:He.current,l.context=Ln(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(si(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&jl.enqueueReplaceState(l,l.state,null),wl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Wn(e,t){try{var n="",r=t;do n+=T(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function di(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rf=typeof WeakMap=="function"?WeakMap:Map;function Vs(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rl||(Rl=!0,Ei=r),di(e,t)},n}function Ws(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){di(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){di(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function $s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new rf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=yf.bind(null,e,t,n),t.then(e,e))}function Hs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ys(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var lf=ie.ReactCurrentOwner,lt=!1;function Xe(e,t,n,r){t.child=e===null?fs(t,null,n,r):Fn(t,e.child,n,r)}function Qs(e,t,n,r,l){n=n.render;var o=t.ref;return Un(t,l),r=ni(e,t,n,r,o,l),n=ri(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ft(e,t,l)):(Ne&&n&&Fo(t),t.flags|=1,Xe(e,t,r,l),t.child)}function Gs(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ii(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Ks(e,t,o,r,l)):(e=Bl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&l)===0){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(i,r)&&e.ref===t.ref)return Ft(e,t,l)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function Ks(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(mr(o,r)&&e.ref===t.ref)if(lt=!1,t.pendingProps=r=o,(e.lanes&l)!==0)(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Ft(e,t,l)}return fi(e,t,n,r,l)}function qs(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Hn,dt),dt|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,we(Hn,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,we(Hn,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,we(Hn,dt),dt|=r;return Xe(e,t,l,n),t.child}function Xs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fi(e,t,n,r,l){var o=rt(n)?dn:He.current;return o=Ln(t,o),Un(t,l),n=ni(e,t,n,r,o,l),r=ri(),e!==null&&!lt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ft(e,t,l)):(Ne&&r&&Fo(t),t.flags|=1,Xe(e,t,n,l),t.child)}function Zs(e,t,n,r,l){if(rt(n)){var o=!0;dl(t)}else o=!1;if(Un(t,l),t.stateNode===null)_l(e,t),Bs(t,n,r),ui(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var c=i.context,v=n.contextType;typeof v=="object"&&v!==null?v=ht(v):(v=rt(n)?dn:He.current,v=Ln(t,v));var k=n.getDerivedStateFromProps,S=typeof k=="function"||typeof i.getSnapshotBeforeUpdate=="function";S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||c!==v)&&Us(t,i,r,v),Jt=!1;var w=t.memoizedState;i.state=w,wl(t,r,i,l),c=t.memoizedState,u!==r||w!==c||nt.current||Jt?(typeof k=="function"&&(si(t,n,k,r),c=t.memoizedState),(u=Jt||Fs(t,n,u,r,w,c,v))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=v,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ms(e,t),u=t.memoizedProps,v=t.type===t.elementType?u:St(t.type,u),i.props=v,S=t.pendingProps,w=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=ht(c):(c=rt(n)?dn:He.current,c=Ln(t,c));var P=n.getDerivedStateFromProps;(k=typeof P=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==S||w!==c)&&Us(t,i,r,c),Jt=!1,w=t.memoizedState,i.state=w,wl(t,r,i,l);var O=t.memoizedState;u!==S||w!==O||nt.current||Jt?(typeof P=="function"&&(si(t,n,P,r),O=t.memoizedState),(v=Jt||Fs(t,n,v,r,w,O,c)||!1)?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,O,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,O,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=O),i.props=r,i.state=O,i.context=c,r=v):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),r=!1)}return pi(e,t,n,r,o,l)}function pi(e,t,n,r,l,o){Xs(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&rs(t,n,!1),Ft(e,t,o);r=t.stateNode,lf.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Fn(t,e.child,null,o),t.child=Fn(t,null,u,o)):Xe(e,t,u,o),t.memoizedState=r.state,l&&rs(t,n,!0),t.child}function Js(e){var t=e.stateNode;t.pendingContext?ts(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ts(e,t.context,!1),qo(e,t.containerInfo)}function eu(e,t,n,r,l){return Dn(),Wo(l),t.flags|=256,Xe(e,t,n,r),t.child}var mi={dehydrated:null,treeContext:null,retryLane:0};function hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function tu(e,t,n){var r=t.pendingProps,l=Ee.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),we(Ee,l&1),e===null)return Vo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ul(i,r,0,null),e=kn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hi(n),t.memoizedState=mi,e):gi(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return of(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var c={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=an(l,c),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=an(u,o):(o=kn(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?hi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=mi,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function gi(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ml(e,t,n,r){return r!==null&&Wo(r),Fn(t,e.child,null,n),e=gi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function of(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(m(422))),Ml(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ul({mode:"visible",children:r.children},l,0,null),o=kn(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Fn(t,e.child,null,i),t.child.memoizedState=hi(i),t.memoizedState=mi,o);if((t.mode&1)===0)return Ml(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(m(419)),r=ci(o,r,void 0),Ml(e,t,i,r)}if(u=(i&e.childLanes)!==0,lt||u){if(r=Ae,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Ot(e,l),Et(r,e,l,-1))}return Pi(),r=ci(Error(m(421))),Ml(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=xf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ct=Kt(l.nextSibling),ut=t,Ne=!0,bt=null,e!==null&&(pt[mt++]=Lt,pt[mt++]=At,pt[mt++]=fn,Lt=e.id,At=e.overflow,fn=t),t=gi(t,r.children),t.flags|=4096,t)}function nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qo(e.return,t,n)}function vi(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function ru(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Xe(e,t,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,n,t);else if(e.tag===19)nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(we(Ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&kl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),vi(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}vi(t,!0,n,null,o);break;case"together":vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _l(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:Js(t),Dn();break;case 5:vs(t);break;case 1:rt(t.type)&&dl(t);break;case 4:qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;we(vl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(we(Ee,Ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?tu(e,t,n):(we(Ee,Ee.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);we(Ee,Ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ru(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),we(Ee,Ee.current),r)break;return null;case 22:case 23:return t.lanes=0,qs(e,t,n)}return Ft(e,t,n)}var lu,yi,ou,iu;lu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},yi=function(){},ou=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,hn(_t.current);var o=null;switch(n){case"input":l=oe(e,l),r=oe(e,r),o=[];break;case"select":l=d({},l,{value:void 0}),r=d({},r,{value:void 0}),o=[];break;case"textarea":l=Gn(e,l),r=Gn(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=sl)}Xl(n,r);var i;n=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var u=l[v];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(b.hasOwnProperty(v)?o||(o=[]):(o=o||[]).push(v,null));for(v in r){var c=r[v];if(u=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&c!==u&&(c!=null||u!=null))if(v==="style")if(u){for(i in u)!u.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&u[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(o||(o=[]),o.push(v,n)),n=c;else v==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(v,c)):v==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(v,""+c):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(b.hasOwnProperty(v)?(c!=null&&v==="onScroll"&&be("scroll",e),o||u===c||(o=[])):(o=o||[]).push(v,c))}n&&(o=o||[]).push("style",n);var v=o;(t.updateQueue=v)&&(t.flags|=4)}},iu=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sf(e,t,n){var r=t.pendingProps;switch(Bo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return rt(t.type)&&cl(),Qe(t),null;case 3:return r=t.stateNode,Vn(),Se(nt),Se(He),Jo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(_i(bt),bt=null))),yi(e,t),Qe(t),null;case 5:Xo(t);var l=hn(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)ou(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return Qe(t),null}if(e=hn(_t.current),hl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mt]=t,r[xr]=o,e=(t.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(l=0;l<gr.length;l++)be(gr[l],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":Be(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":Dr(r,o),be("invalid",r)}Xl(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&al(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&al(r.textContent,u,e),l=["children",""+u]):b.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&be("scroll",r)}switch(n){case"input":he(r),ft(r,o,!0);break;case"textarea":he(r),Fr(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=sl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qn(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Mt]=t,e[xr]=r,lu(e,t,!1,!1),t.stateNode=e;e:{switch(i=Zl(n,r),n){case"dialog":be("cancel",e),be("close",e),l=r;break;case"iframe":case"object":case"embed":be("load",e),l=r;break;case"video":case"audio":for(l=0;l<gr.length;l++)be(gr[l],e);l=r;break;case"source":be("error",e),l=r;break;case"img":case"image":case"link":be("error",e),be("load",e),l=r;break;case"details":be("toggle",e),l=r;break;case"input":Be(e,r),l=oe(e,r),be("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=d({},r,{value:void 0}),be("invalid",e);break;case"textarea":Dr(e,r),l=Gn(e,r),be("invalid",e);break;default:l=r}Xl(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?Ki(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zn(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Vt(e,c):typeof c=="number"&&Vt(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(b.hasOwnProperty(o)?c!=null&&o==="onScroll"&&be("scroll",e):c!=null&&V(e,o,c,i))}switch(n){case"input":he(e),ft(e,r,!1);break;case"textarea":he(e),Fr(e);break;case"option":r.value!=null&&e.setAttribute("value",""+L(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ut(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)iu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=hn(Cr.current),hn(_t.current),hl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Mt]=t,(o=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:al(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&al(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Qe(t),null;case 13:if(Se(Ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)us(),Dn(),t.flags|=98560,o=!1;else if(o=hl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(m(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(m(317));o[Mt]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),o=!1}else bt!==null&&(_i(bt),bt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ee.current&1)!==0?Re===0&&(Re=3):Pi())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Vn(),yi(e,t),e===null&&vr(t.stateNode.containerInfo),Qe(t),null;case 10:return Yo(t.type._context),Qe(t),null;case 17:return rt(t.type)&&cl(),Qe(t),null;case 19:if(Se(Ee),o=t.memoizedState,o===null)return Qe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)_r(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=kl(e),i!==null){for(t.flags|=128,_r(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return we(Ee,Ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ze()>Yn&&(t.flags|=128,r=!0,_r(o,!1),t.lanes=4194304)}else{if(!r)if(e=kl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Ne)return Qe(t),null}else 2*ze()-o.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,_r(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ze(),t.sibling=null,n=Ee.current,we(Ee,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return Ti(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function uf(e,t){switch(Bo(t),t.tag){case 1:return rt(t.type)&&cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),Se(nt),Se(He),Jo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Xo(t),null;case 13:if(Se(Ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Ee),null;case 4:return Vn(),null;case 10:return Yo(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var zl=!1,Ge=!1,cf=typeof WeakSet=="function"?WeakSet:Set,A=null;function $n(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function xi(e,t,n){try{n()}catch(r){_e(e,t,r)}}var au=!1;function df(e,t){if(To=qr,e=Fa(),So(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,c=-1,v=0,k=0,S=e,w=null;t:for(;;){for(var P;S!==n||l!==0&&S.nodeType!==3||(u=i+l),S!==o||r!==0&&S.nodeType!==3||(c=i+r),S.nodeType===3&&(i+=S.nodeValue.length),(P=S.firstChild)!==null;)w=S,S=P;for(;;){if(S===e)break t;if(w===n&&++v===l&&(u=i),w===o&&++k===r&&(c=i),(P=S.nextSibling)!==null)break;S=w,w=S.parentNode}S=P}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Po={focusedElem:e,selectionRange:n},qr=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var O=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var F=O.memoizedProps,Te=O.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?F:St(t.type,F),Te);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(C){_e(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return O=au,au=!1,O}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&xi(t,n,o)}l=l.next}while(l!==r)}}function Tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function su(e){var t=e.alternate;t!==null&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[xr],delete t[Ao],delete t[Yd],delete t[Qd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uu(e){return e.tag===5||e.tag===3||e.tag===4}function cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sl));else if(r!==4&&(e=e.child,e!==null))for(ki(e,t,n),e=e.sibling;e!==null;)ki(e,t,n),e=e.sibling}function bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bi(e,t,n),e=e.sibling;e!==null;)bi(e,t,n),e=e.sibling}var Ue=null,Ct=!1;function tn(e,t,n){for(n=n.child;n!==null;)du(e,t,n),n=n.sibling}function du(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount($r,n)}catch{}switch(n.tag){case 5:Ge||$n(n,t);case 6:var r=Ue,l=Ct;Ue=null,tn(e,t,n),Ue=r,Ct=l,Ue!==null&&(Ct?(e=Ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ct?(e=Ue,n=n.stateNode,e.nodeType===8?Lo(e.parentNode,n):e.nodeType===1&&Lo(e,n),sr(e)):Lo(Ue,n.stateNode));break;case 4:r=Ue,l=Ct,Ue=n.stateNode.containerInfo,Ct=!0,tn(e,t,n),Ue=r,Ct=l;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&((o&2)!==0||(o&4)!==0)&&xi(n,t,i),l=l.next}while(l!==r)}tn(e,t,n);break;case 1:if(!Ge&&($n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){_e(n,t,u)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,tn(e,t,n),Ge=r):tn(e,t,n);break;default:tn(e,t,n)}}function fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),t.forEach(function(r){var l=wf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:Ue=u.stateNode,Ct=!1;break e;case 3:Ue=u.stateNode.containerInfo,Ct=!0;break e;case 4:Ue=u.stateNode.containerInfo,Ct=!0;break e}u=u.return}if(Ue===null)throw Error(m(160));du(o,i,l),Ue=null,Ct=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(v){_e(l,t,v)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pu(t,e),t=t.sibling}function pu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Tt(e),r&4){try{zr(3,e,e.return),Tl(3,e)}catch(F){_e(e,e.return,F)}try{zr(5,e,e.return)}catch(F){_e(e,e.return,F)}}break;case 1:Nt(t,e),Tt(e),r&512&&n!==null&&$n(n,n.return);break;case 5:if(Nt(t,e),Tt(e),r&512&&n!==null&&$n(n,n.return),e.flags&32){var l=e.stateNode;try{Vt(l,"")}catch(F){_e(e,e.return,F)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&tt(l,o),Zl(u,i);var v=Zl(u,o);for(i=0;i<c.length;i+=2){var k=c[i],S=c[i+1];k==="style"?Ki(l,S):k==="dangerouslySetInnerHTML"?Zn(l,S):k==="children"?Vt(l,S):V(l,k,S,v)}switch(u){case"input":qe(l,o);break;case"textarea":Kn(l,o);break;case"select":var w=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var P=o.value;P!=null?Ut(l,!!o.multiple,P,!1):w!==!!o.multiple&&(o.defaultValue!=null?Ut(l,!!o.multiple,o.defaultValue,!0):Ut(l,!!o.multiple,o.multiple?[]:"",!1))}l[xr]=o}catch(F){_e(e,e.return,F)}}break;case 6:if(Nt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(m(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(F){_e(e,e.return,F)}}break;case 3:if(Nt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sr(t.containerInfo)}catch(F){_e(e,e.return,F)}break;case 4:Nt(t,e),Tt(e);break;case 13:Nt(t,e),Tt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ni=ze())),r&4&&fu(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(v=Ge)||k,Nt(t,e),Ge=v):Nt(t,e),Tt(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!k&&(e.mode&1)!==0)for(A=e,k=e.child;k!==null;){for(S=A=k;A!==null;){switch(w=A,P=w.child,w.tag){case 0:case 11:case 14:case 15:zr(4,w,w.return);break;case 1:$n(w,w.return);var O=w.stateNode;if(typeof O.componentWillUnmount=="function"){r=w,n=w.return;try{t=r,O.props=t.memoizedProps,O.state=t.memoizedState,O.componentWillUnmount()}catch(F){_e(r,n,F)}}break;case 5:$n(w,w.return);break;case 22:if(w.memoizedState!==null){gu(S);continue}}P!==null?(P.return=w,A=P):gu(S)}k=k.sibling}e:for(k=null,S=e;;){if(S.tag===5){if(k===null){k=S;try{l=S.stateNode,v?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=S.stateNode,c=S.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Br("display",i))}catch(F){_e(e,e.return,F)}}}else if(S.tag===6){if(k===null)try{S.stateNode.nodeValue=v?"":S.memoizedProps}catch(F){_e(e,e.return,F)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;k===S&&(k=null),S=S.return}k===S&&(k=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Nt(t,e),Tt(e),r&4&&fu(e);break;case 21:break;default:Nt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(uu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Vt(l,""),r.flags&=-33);var o=cu(e);bi(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=cu(e);ki(e,u,i);break;default:throw Error(m(161))}}catch(c){_e(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ff(e,t,n){A=e,mu(e)}function mu(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||zl;if(!i){var u=l.alternate,c=u!==null&&u.memoizedState!==null||Ge;u=zl;var v=Ge;if(zl=i,(Ge=c)&&!v)for(A=l;A!==null;)i=A,c=i.child,i.tag===22&&i.memoizedState!==null?vu(l):c!==null?(c.return=i,A=c):vu(l);for(;o!==null;)A=o,mu(o),o=o.sibling;A=l,zl=u,Ge=v}hu(e)}else(l.subtreeFlags&8772)!==0&&o!==null?(o.return=l,A=o):hu(e)}}function hu(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||Tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&gs(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gs(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var v=t.alternate;if(v!==null){var k=v.memoizedState;if(k!==null){var S=k.dehydrated;S!==null&&sr(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}Ge||t.flags&512&&wi(t)}catch(w){_e(t,t.return,w)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function gu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function vu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tl(4,t)}catch(c){_e(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(c){_e(t,l,c)}}var o=t.return;try{wi(t)}catch(c){_e(t,o,c)}break;case 5:var i=t.return;try{wi(t)}catch(c){_e(t,i,c)}}}catch(c){_e(t,t.return,c)}if(t===e){A=null;break}var u=t.sibling;if(u!==null){u.return=t.return,A=u;break}A=t.return}}var pf=Math.ceil,Pl=ie.ReactCurrentDispatcher,Si=ie.ReactCurrentOwner,vt=ie.ReactCurrentBatchConfig,fe=0,Ae=null,Pe=null,Ve=0,dt=0,Hn=qt(0),Re=0,Tr=null,vn=0,Il=0,Ci=0,Pr=null,ot=null,Ni=0,Yn=1/0,Bt=null,Rl=!1,Ei=null,nn=null,Ll=!1,rn=null,Al=0,Ir=0,ji=null,Ol=-1,Dl=0;function Ze(){return(fe&6)!==0?ze():Ol!==-1?Ol:Ol=ze()}function ln(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ve!==0?Ve&-Ve:Kd.transition!==null?(Dl===0&&(Dl=ca()),Dl):(e=ge,e!==0||(e=window.event,e=e===void 0?16:xa(e.type)),e)}function Et(e,t,n,r){if(50<Ir)throw Ir=0,ji=null,Error(m(185));rr(e,n,r),((fe&2)===0||e!==Ae)&&(e===Ae&&((fe&2)===0&&(Il|=n),Re===4&&on(e,Ve)),it(e,r),n===1&&fe===0&&(t.mode&1)===0&&(Yn=ze()+500,fl&&Zt()))}function it(e,t){var n=e.callbackNode;Kc(e,t);var r=Qr(e,e===Ae?Ve:0);if(r===0)n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&aa(n),t===1)e.tag===0?Gd(xu.bind(null,e)):ls(xu.bind(null,e)),$d(function(){(fe&6)===0&&Zt()}),n=null;else{switch(da(r)){case 1:n=oo;break;case 4:n=sa;break;case 16:n=Wr;break;case 536870912:n=ua;break;default:n=Wr}n=ju(n,yu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yu(e,t){if(Ol=-1,Dl=0,(fe&6)!==0)throw Error(m(327));var n=e.callbackNode;if(Qn()&&e.callbackNode!==n)return null;var r=Qr(e,e===Ae?Ve:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Fl(e,r);else{t=r;var l=fe;fe|=2;var o=ku();(Ae!==e||Ve!==t)&&(Bt=null,Yn=ze()+500,xn(e,t));do try{gf();break}catch(u){wu(e,u)}while(!0);Ho(),Pl.current=o,fe=l,Pe!==null?t=0:(Ae=null,Ve=0,t=Re)}if(t!==0){if(t===2&&(l=io(e),l!==0&&(r=l,t=Mi(e,l))),t===1)throw n=Tr,xn(e,0),on(e,r),it(e,ze()),n;if(t===6)on(e,r);else{if(l=e.current.alternate,(r&30)===0&&!mf(l)&&(t=Fl(e,r),t===2&&(o=io(e),o!==0&&(r=o,t=Mi(e,o))),t===1))throw n=Tr,xn(e,0),on(e,r),it(e,ze()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:wn(e,ot,Bt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=Ni+500-ze(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ro(wn.bind(null,e,ot,Bt),t);break}wn(e,ot,Bt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-wt(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pf(r/1960))-r,10<r){e.timeoutHandle=Ro(wn.bind(null,e,ot,Bt),r);break}wn(e,ot,Bt);break;case 5:wn(e,ot,Bt);break;default:throw Error(m(329))}}}return it(e,ze()),e.callbackNode===n?yu.bind(null,e):null}function Mi(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=Fl(e,t),e!==2&&(t=ot,ot=n,t!==null&&_i(t)),e}function _i(e){ot===null?ot=e:ot.push.apply(ot,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!kt(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Ci,t&=~Il,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),r=1<<n;e[n]=-1,t&=~r}}function xu(e){if((fe&6)!==0)throw Error(m(327));Qn();var t=Qr(e,0);if((t&1)===0)return it(e,ze()),null;var n=Fl(e,t);if(e.tag!==0&&n===2){var r=io(e);r!==0&&(t=r,n=Mi(e,r))}if(n===1)throw n=Tr,xn(e,0),on(e,t),it(e,ze()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,ot,Bt),it(e,ze()),null}function zi(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Yn=ze()+500,fl&&Zt())}}function yn(e){rn!==null&&rn.tag===0&&(fe&6)===0&&Qn();var t=fe;fe|=1;var n=vt.transition,r=ge;try{if(vt.transition=null,ge=1,e)return e()}finally{ge=r,vt.transition=n,fe=t,(fe&6)===0&&Zt()}}function Ti(){dt=Hn.current,Se(Hn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wd(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(Bo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:Vn(),Se(nt),Se(He),Jo();break;case 5:Xo(r);break;case 4:Vn();break;case 13:Se(Ee);break;case 19:Se(Ee);break;case 10:Yo(r.type._context);break;case 22:case 23:Ti()}n=n.return}if(Ae=e,Pe=e=an(e.current,null),Ve=dt=t,Re=0,Tr=null,Ci=Il=vn=0,ot=Pr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}mn=null}return e}function wu(e,t){do{var n=Pe;try{if(Ho(),bl.current=El,Sl){for(var r=je.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(gn=0,Le=Ie=je=null,Nr=!1,Er=0,Si.current=null,n===null||n.return===null){Re=1,Tr=t,Pe=null;break}e:{var o=e,i=n.return,u=n,c=t;if(t=Ve,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=c,k=u,S=k.tag;if((k.mode&1)===0&&(S===0||S===11||S===15)){var w=k.alternate;w?(k.updateQueue=w.updateQueue,k.memoizedState=w.memoizedState,k.lanes=w.lanes):(k.updateQueue=null,k.memoizedState=null)}var P=Hs(i);if(P!==null){P.flags&=-257,Ys(P,i,u,o,t),P.mode&1&&$s(o,v,t),t=P,c=v;var O=t.updateQueue;if(O===null){var F=new Set;F.add(c),t.updateQueue=F}else O.add(c);break e}else{if((t&1)===0){$s(o,v,t),Pi();break e}c=Error(m(426))}}else if(Ne&&u.mode&1){var Te=Hs(i);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),Ys(Te,i,u,o,t),Wo(Wn(c,u));break e}}o=c=Wn(c,u),Re!==4&&(Re=2),Pr===null?Pr=[o]:Pr.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Vs(o,c,t);hs(o,p);break e;case 1:u=c;var f=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(nn===null||!nn.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Ws(o,u,t);hs(o,C);break e}}o=o.return}while(o!==null)}Su(n)}catch(U){t=U,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function ku(){var e=Pl.current;return Pl.current=El,e===null?El:e}function Pi(){(Re===0||Re===3||Re===2)&&(Re=4),Ae===null||(vn&268435455)===0&&(Il&268435455)===0||on(Ae,Ve)}function Fl(e,t){var n=fe;fe|=2;var r=ku();(Ae!==e||Ve!==t)&&(Bt=null,xn(e,t));do try{hf();break}catch(l){wu(e,l)}while(!0);if(Ho(),fe=n,Pl.current=r,Pe!==null)throw Error(m(261));return Ae=null,Ve=0,Re}function hf(){for(;Pe!==null;)bu(Pe)}function gf(){for(;Pe!==null&&!Bc();)bu(Pe)}function bu(e){var t=Eu(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?Su(e):Pe=t,Si.current=null}function Su(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=sf(n,t,dt),n!==null){Pe=n;return}}else{if(n=uf(n,t),n!==null){n.flags&=32767,Pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Pe=null;return}}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Re===0&&(Re=5)}function wn(e,t,n){var r=ge,l=vt.transition;try{vt.transition=null,ge=1,vf(e,t,n,r)}finally{vt.transition=l,ge=r}return null}function vf(e,t,n,r){do Qn();while(rn!==null);if((fe&6)!==0)throw Error(m(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(qc(e,o),e===Ae&&(Pe=Ae=null,Ve=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ll||(Ll=!0,ju(Wr,function(){return Qn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=vt.transition,vt.transition=null;var i=ge;ge=1;var u=fe;fe|=4,Si.current=null,df(e,n),pu(n,e),Ad(Po),qr=!!To,Po=To=null,e.current=n,ff(n),Uc(),fe=u,ge=i,vt.transition=o}else e.current=n;if(Ll&&(Ll=!1,rn=e,Al=l),o=e.pendingLanes,o===0&&(nn=null),$c(n.stateNode),it(e,ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Rl)throw Rl=!1,e=Ei,Ei=null,e;return(Al&1)!==0&&e.tag!==0&&Qn(),o=e.pendingLanes,(o&1)!==0?e===ji?Ir++:(Ir=0,ji=e):Ir=0,Zt(),null}function Qn(){if(rn!==null){var e=da(Al),t=vt.transition,n=ge;try{if(vt.transition=null,ge=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Al=0,(fe&6)!==0)throw Error(m(331));var l=fe;for(fe|=4,A=e.current;A!==null;){var o=A,i=o.child;if((A.flags&16)!==0){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var v=u[c];for(A=v;A!==null;){var k=A;switch(k.tag){case 0:case 11:case 15:zr(8,k,o)}var S=k.child;if(S!==null)S.return=k,A=S;else for(;A!==null;){k=A;var w=k.sibling,P=k.return;if(su(k),k===v){A=null;break}if(w!==null){w.return=P,A=w;break}A=P}}}var O=o.alternate;if(O!==null){var F=O.child;if(F!==null){O.child=null;do{var Te=F.sibling;F.sibling=null,F=Te}while(F!==null)}}A=o}}if((o.subtreeFlags&2064)!==0&&i!==null)i.return=o,A=i;else e:for(;A!==null;){if(o=A,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:zr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var f=e.current;for(A=f;A!==null;){i=A;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,A=h;else e:for(i=f;A!==null;){if(u=A,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Tl(9,u)}}catch(U){_e(u,u.return,U)}if(u===i){A=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,A=C;break e}A=u.return}}if(fe=l,Zt(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot($r,e)}catch{}r=!0}return r}finally{ge=n,vt.transition=t}}return!1}function Cu(e,t,n){t=Wn(n,t),t=Vs(e,t,1),e=en(e,t,1),t=Ze(),e!==null&&(rr(e,1,t),it(e,t))}function _e(e,t,n){if(e.tag===3)Cu(e,e,n);else for(;t!==null;){if(t.tag===3){Cu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=Wn(n,e),e=Ws(t,e,1),t=en(t,e,1),e=Ze(),t!==null&&(rr(t,1,e),it(t,e));break}}t=t.return}}function yf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Ve&n)===n&&(Re===4||Re===3&&(Ve&130023424)===Ve&&500>ze()-Ni?xn(e,0):Ci|=n),it(e,t)}function Nu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Yr,Yr<<=1,(Yr&130023424)===0&&(Yr=4194304)));var n=Ze();e=Ot(e,t),e!==null&&(rr(e,t,n),it(e,n))}function xf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function wf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),Nu(e,n)}var Eu;Eu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)lt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return lt=!1,af(e,t,n);lt=(e.flags&131072)!==0}else lt=!1,Ne&&(t.flags&1048576)!==0&&os(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_l(e,t),e=t.pendingProps;var l=Ln(t,He.current);Un(t,n),l=ni(null,t,r,e,l,n);var o=ri();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(o=!0,dl(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ko(t),l.updater=jl,t.stateNode=l,l._reactInternals=t,ui(t,r,e,n),t=pi(null,t,r,!0,o,n)):(t.tag=0,Ne&&o&&Fo(t),Xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_l(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=bf(r),e=St(r,e),l){case 0:t=fi(null,t,r,e,n);break e;case 1:t=Zs(null,t,r,e,n);break e;case 11:t=Qs(null,t,r,e,n);break e;case 14:t=Gs(null,t,r,St(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),fi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),Zs(e,t,r,l,n);case 3:e:{if(Js(t),e===null)throw Error(m(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ms(e,t),wl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Wn(Error(m(423)),t),t=eu(e,t,r,n,l);break e}else if(r!==l){l=Wn(Error(m(424)),t),t=eu(e,t,r,n,l);break e}else for(ct=Kt(t.stateNode.containerInfo.firstChild),ut=t,Ne=!0,bt=null,n=fs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===l){t=Ft(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return vs(t),e===null&&Vo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Io(r,l)?i=null:o!==null&&Io(r,o)&&(t.flags|=32),Xs(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&Vo(t),null;case 13:return tu(e,t,n);case 4:return qo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fn(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),Qs(e,t,r,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,we(vl,r._currentValue),r._currentValue=i,o!==null)if(kt(o.value,i)){if(o.children===l.children&&!nt.current){t=Ft(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Dt(-1,n&-n),c.tag=2;var v=o.updateQueue;if(v!==null){v=v.shared;var k=v.pending;k===null?c.next=c:(c.next=k.next,k.next=c),v.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Qo(o.return,n,t),u.lanes|=n;break}c=c.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(m(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Qo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Un(t,n),l=ht(l),r=r(l),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,l=St(r,t.pendingProps),l=St(r.type,l),Gs(e,t,r,l,n);case 15:return Ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:St(r,l),_l(e,t),t.tag=1,rt(r)?(e=!0,dl(t)):e=!1,Un(t,n),Bs(t,r,l),ui(t,r,l,n),pi(null,t,r,!0,e,n);case 19:return ru(e,t,n);case 22:return qs(e,t,n)}throw Error(m(156,t.tag))};function ju(e,t){return ia(e,t)}function kf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new kf(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return Ii(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===et)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bl(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Ii(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ce:return kn(n.children,l,o,t);case ve:i=8,l|=8;break;case We:return e=yt(12,n,t,l|2),e.elementType=We,e.lanes=o,e;case Ke:return e=yt(13,n,t,l),e.elementType=Ke,e.lanes=o,e;case Je:return e=yt(19,n,t,l),e.elementType=Je,e.lanes=o,e;case Ce:return Ul(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case De:i=10;break e;case de:i=9;break e;case me:i=11;break e;case et:i=14;break e;case Fe:i=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=yt(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function kn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=yt(22,e,r,t),e.elementType=Ce,e.lanes=n,e.stateNode={isHidden:!1},e}function Ri(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Li(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ai(e,t,n,r,l,o,i,u,c){return e=new Sf(e,t,n,u,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=yt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ko(o),e}function Cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mu(e){if(!e)return Xt;e=e._reactInternals;e:{if(un(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(rt(n))return ns(e,n,t)}return t}function _u(e,t,n,r,l,o,i,u,c){return e=Ai(n,r,!0,e,l,o,i,u,c),e.context=Mu(null),n=e.current,r=Ze(),l=ln(n),o=Dt(r,l),o.callback=t??null,en(n,o,l),e.current.lanes=l,rr(e,l,r),it(e,r),e}function Vl(e,t,n,r){var l=t.current,o=Ze(),i=ln(l);return n=Mu(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(l,t,i),e!==null&&(Et(e,l,i,o),xl(e,l,i)),i}function Wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oi(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function Nf(){return null}var Tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}$l.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Vl(e,t,null,null)},$l.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yn(function(){Vl(null,e,null,null)}),t[It]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Yt.length&&t!==0&&t<Yt[n].priority;n++);Yt.splice(n,0,e),n===0&&va(e)}};function Fi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pu(){}function Ef(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var v=Wl(i);o.call(v)}}var i=_u(t,r,e,0,null,!1,!1,"",Pu);return e._reactRootContainer=i,e[It]=i.current,vr(e.nodeType===8?e.parentNode:e),yn(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var v=Wl(c);u.call(v)}}var c=Ai(e,0,!1,null,null,!1,!1,"",Pu);return e._reactRootContainer=c,e[It]=c.current,vr(e.nodeType===8?e.parentNode:e),yn(function(){Vl(t,c,n,r)}),c}function Yl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var c=Wl(i);u.call(c)}}Vl(t,i,e,l)}else i=Ef(n,t,e,l,r);return Wl(i)}fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=nr(t.pendingLanes);n!==0&&(so(t,n|1),it(t,ze()),(fe&6)===0&&(Yn=ze()+500,Zt()))}break;case 13:yn(function(){var r=Ot(e,1);if(r!==null){var l=Ze();Et(r,e,1,l)}}),Oi(e,1)}},uo=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=Ze();Et(t,e,134217728,n)}Oi(e,134217728)}},pa=function(e){if(e.tag===13){var t=ln(e),n=Ot(e,t);if(n!==null){var r=Ze();Et(n,e,t,r)}Oi(e,t)}},ma=function(){return ge},ha=function(e,t){var n=ge;try{return ge=e,t()}finally{ge=n}},to=function(e,t,n){switch(t){case"input":if(qe(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ul(r);if(!l)throw Error(m(90));ke(r),qe(r,l)}}}break;case"textarea":Kn(e,n);break;case"select":t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}},Ji=zi,ea=yn;var jf={usingClientEntryPoint:!1,Events:[wr,In,ul,Xi,Zi,zi]},Rr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mf={bundleType:Rr.bundleType,version:Rr.version,rendererPackageName:Rr.rendererPackageName,rendererConfig:Rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=la(e),e===null?null:e.stateNode},findFiberByHostInstance:Rr.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{$r=Ql.inject(Mf),jt=Ql}catch{}}return at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf,at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fi(t))throw Error(m(200));return Cf(e,t,null,n)},at.createRoot=function(e,t){if(!Fi(e))throw Error(m(299));var n=!1,r="",l=Tu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ai(e,1,!1,null,null,n,!1,r,l),e[It]=t.current,vr(e.nodeType===8?e.parentNode:e),new Di(t)},at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=la(t),e=e===null?null:e.stateNode,e},at.flushSync=function(e){return yn(e)},at.hydrate=function(e,t,n){if(!Hl(t))throw Error(m(200));return Yl(null,e,t,!0,n)},at.hydrateRoot=function(e,t,n){if(!Fi(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Tu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=_u(t,null,e,1,n??null,l,!1,o,i),e[It]=t.current,vr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new $l(t)},at.render=function(e,t,n){if(!Hl(t))throw Error(m(200));return Yl(null,e,t,!1,n)},at.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(m(40));return e._reactRootContainer?(yn(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[It]=null})}),!0):!1},at.unstable_batchedUpdates=zi,at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return Yl(e,t,n,!1,r)},at.version="18.3.1-next-f1338f8080-20240426",at}var Bu;function Of(){if(Bu)return Vi.exports;Bu=1;function x(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x)}catch(y){console.error(y)}}return x(),Vi.exports=Af(),Vi.exports}var Uu;function Df(){if(Uu)return Gl;Uu=1;var x=Of();return Gl.createRoot=x.createRoot,Gl.hydrateRoot=x.hydrateRoot,Gl}var Ff=Df();const Bf=Vu(Ff);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=x=>x==null?void 0:x.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Vf(x,y,m=[]){if(y==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Uf(x),size:24,node:y,...m.length>0?{aliases:m}:{}}}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=x=>{let y="",m=!1;for(const R of x){if(R==="-"||R==="_"||R<=" "){m=y.length>0;continue}y.length===0?y+=R.toLowerCase():y+=m?R.toUpperCase():R,m=!1}return y};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=x=>{const y=Wf(x);return y.charAt(0).toUpperCase()+y.slice(1)};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=(...x)=>x.filter((y,m,R)=>!!y&&y.trim()!==""&&R.indexOf(y)===m).join(" ").trim();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Hi(x){return x!=null}function Hf(x,y={}){var $,ue;const m=y.attributeNames??{},R=te=>m[te]??te,b=x.size??x.width??bn.width,B=x.size??x.height??bn.height,W=(($=x.aliases)==null?void 0:$.filter(te=>typeof te=="string"&&te.trim()!=="").map(te=>`lucide-${te}`))??[],Q=[...x.name?[`lucide-${x.name}`]:[],...W],E=((ue=y.className)==null?void 0:ue.split(" ").filter(Boolean))??[],q=y.includeDefaultClasses===!1?Yi(...E):Yi("lucide",...Q,...E),ee=y.absoluteStrokeWidth?Number(y.strokeWidth??bn["stroke-width"])*Number(x.size??x.width??bn.width)/Number(y.size??y.width??bn.width):y.strokeWidth??bn["stroke-width"];return["svg",{...Object.entries(bn).reduce((te,[J,D])=>(te[R(J)]=D,te),{}),..."color"in y&&y.color&&{[R("stroke")]:y.color},..."size"in y&&Hi(y.size)&&{[R("width")]:y.size,[R("height")]:y.size},..."width"in y&&Hi(y.width)&&{[R("width")]:y.width},..."height"in y&&Hi(y.height)&&{[R("height")]:y.height},[R("stroke-width")]:ee,...q&&{[R("class")]:q},[R("viewBox")]:`0 0 ${b} ${B}`,...y.hasA11yProp===!1?{[R("aria-hidden")]:"true"}:{},..."attributes"in y&&y.attributes},x.node.map(te=>{const[J,D,ye]=te,xe=y.nonScalingStroke?{[R("vector-effect")]:"non-scaling-stroke",...D}:D;return ye?[J,xe,ye]:[J,xe]})]}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Yf(x,y={}){return Hf(x,{...y,attributeNames:{...y.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=x=>{for(const y in x)if(y.startsWith("aria-")||y==="role"||y==="title")return!0;return!1},Gf=ne.createContext({}),Kf=()=>ne.useContext(Gf),qf=ne.forwardRef(({color:x,size:y,width:m,height:R,strokeWidth:b,absoluteStrokeWidth:B,nonScalingStroke:W,className:Q="",children:E,iconNode:q=[],icon:ee={node:q,aliases:[],size:24},...X},$)=>{const{size:ue=24,strokeWidth:te=2,absoluteStrokeWidth:J=!1,nonScalingStroke:D=!1,color:ye="currentColor",className:xe=""}=Kf()??{},V=!!E||Qf(X),[ie,M,ae=[]]=Yf(ee,{color:x??ye,width:m??y??ue,height:R??y??ue,strokeWidth:b??te,absoluteStrokeWidth:B??J,nonScalingStroke:W??D,className:Yi(xe,Q),hasA11yProp:V,attributes:X});return ne.createElement(ie,{ref:$,...M},[...ae.map(([ce,ve])=>ne.createElement(ce,ve)),...Array.isArray(E)?E:[E]])});/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function le(x,y=[],m=[]){const R=typeof x=="string"?Vf(x,y,m):x,b=ne.forwardRef(({className:B,...W},Q)=>ne.createElement(qf,{ref:Q,icon:R,className:B,...W}));return R.name&&(b.displayName=$f(R.name)),b}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Wu.node;const Xf=le(Wu);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};$u.node;const Hu=le($u);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Yu.node;const Zf=le(Yu);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Qu.node;const Jf=le(Qu);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Gu.node;const Ku=le(Gu);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};qu.node;const Xu=le(qu);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Zu.node;const ep=le(Zu);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju={name:"eighth-notes",size:24,node:[["path",{d:"M21 16V3a1 1 0 0 0-1.28-.96l-10 2.917a1 1 0 0 0-.72.96V19",key:"uy6ho8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}],["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}]],aliases:["music"]};Ju.node;const tp=le(Ju);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec={name:"git-fork",size:24,node:[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]};ec.node;const np=le(ec);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};tc.node;const nc=le(tc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};rc.node;const rp=le(rc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};lc.node;const lp=le(lc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};oc.node;const ic=le(oc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac={name:"link-2",size:24,node:[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]};ac.node;const op=le(ac);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};sc.node;const ip=le(sc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};uc.node;const ap=le(uc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};cc.node;const sp=le(cc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc={name:"paintbrush",size:24,node:[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]};dc.node;const up=le(dc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};fc.node;const cp=le(fc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};pc.node;const mc=le(pc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};hc.node;const dp=le(hc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc={name:"puzzle",size:24,node:[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]};gc.node;const vc=le(gc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};yc.node;const fp=le(yc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};xc.node;const pp=le(xc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};wc.node;const mp=le(wc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};kc.node;const hp=le(kc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc={name:"send-horizontal",size:24,node:[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",key:"117uat"}],["path",{d:"M6 12h16",key:"s4cdu5"}]],aliases:["send-horizonal"]};bc.node;const gp=le(bc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Sc.node;const vp=le(Sc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Cc.node;const yp=le(Cc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc={name:"sticker",size:24,node:[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]};Nc.node;const xp=le(Nc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec={name:"tablet",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]};Ec.node;const wp=le(Ec);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};jc.node;const kp=le(jc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};Mc.node;const bp=le(Mc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};_c.node;const Sp=le(_c);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};zc.node;const Cp=le(zc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};Tc.node;const Np=le(Tc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Pc.node;const Kl=le(Pc);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Ic.node;const Ep=le(Ic);var Gi={};(function x(y,m,R,b){var B=!!(y.Worker&&y.Blob&&y.Promise&&y.OffscreenCanvas&&y.OffscreenCanvasRenderingContext2D&&y.HTMLCanvasElement&&y.HTMLCanvasElement.prototype.transferControlToOffscreen&&y.URL&&y.URL.createObjectURL),W=typeof Path2D=="function"&&typeof DOMMatrix=="function",Q=(function(){if(!y.OffscreenCanvas)return!1;try{var d=new OffscreenCanvas(1,1),a=d.getContext("2d");a.fillRect(0,0,1,1);var g=d.transferToImageBitmap();a.createPattern(g,"no-repeat")}catch{return!1}return!0})();function E(){}function q(d){var a=m.exports.Promise,g=a!==void 0?a:y.Promise;return typeof g=="function"?new g(d):(d(E,E),null)}var ee=(function(d,a){return{transform:function(g){if(d)return g;if(a.has(g))return a.get(g);var N=new OffscreenCanvas(g.width,g.height),j=N.getContext("2d");return j.drawImage(g,0,0),a.set(g,N),N},clear:function(){a.clear()}}})(Q,new Map),X=(function(){var d=Math.floor(16.666666666666668),a,g,N={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(a=function(T){var I=Math.random();return N[I]=requestAnimationFrame(function z(L){j===L||j+d-1<L?(j=L,delete N[I],T()):N[I]=requestAnimationFrame(z)}),I},g=function(T){N[T]&&cancelAnimationFrame(N[T])}):(a=function(T){return setTimeout(T,d)},g=function(T){return clearTimeout(T)}),{frame:a,cancel:g}})(),$=(function(){var d,a,g={};function N(j){function T(I,z){j.postMessage({options:I||{},callback:z})}j.init=function(z){var L=z.transferControlToOffscreen();j.postMessage({canvas:L},[L])},j.fire=function(z,L,K){if(a)return T(z,null),a;var se=Math.random().toString(36).slice(2);return a=q(function(he){function ke(Me){Me.data.callback===se&&(delete g[se],j.removeEventListener("message",ke),a=null,ee.clear(),K(),he())}j.addEventListener("message",ke),T(z,se),g[se]=ke.bind(null,{data:{callback:se}})}),a},j.reset=function(){j.postMessage({reset:!0});for(var z in g)g[z](),delete g[z]}}return function(){if(d)return d;if(!R&&B){var j=["var CONFETTI, SIZE = {}, module = {};","("+x.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{d=new Worker(URL.createObjectURL(new Blob([j])))}catch(T){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",T),null}N(d)}return d}})(),ue={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function te(d,a){return a?a(d):d}function J(d){return d!=null}function D(d,a,g){return te(d&&J(d[a])?d[a]:ue[a],g)}function ye(d){return d<0?0:Math.floor(d)}function xe(d,a){return Math.floor(Math.random()*(a-d))+d}function V(d){return parseInt(d,16)}function ie(d){return d.map(M)}function M(d){var a=String(d).replace(/[^0-9a-f]/gi,"");return a.length<6&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),{r:V(a.substring(0,2)),g:V(a.substring(2,4)),b:V(a.substring(4,6))}}function ae(d){var a=D(d,"origin",Object);return a.x=D(a,"x",Number),a.y=D(a,"y",Number),a}function ce(d){d.width=document.documentElement.clientWidth,d.height=document.documentElement.clientHeight}function ve(d){var a=d.getBoundingClientRect();d.width=a.width,d.height=a.height}function We(d){var a=document.createElement("canvas");return a.style.position="fixed",a.style.top="0px",a.style.left="0px",a.style.pointerEvents="none",a.style.zIndex=d,a}function De(d,a,g,N,j,T,I,z,L){d.save(),d.translate(a,g),d.rotate(T),d.scale(N,j),d.arc(0,0,1,I,z,L),d.restore()}function de(d){var a=d.angle*(Math.PI/180),g=d.spread*(Math.PI/180);return{x:d.x,y:d.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:d.startVelocity*.5+Math.random()*d.startVelocity,angle2D:-a+(.5*g-Math.random()*g),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:d.color,shape:d.shape,tick:0,totalTicks:d.ticks,decay:d.decay,drift:d.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:d.gravity*3,ovalScalar:.6,scalar:d.scalar,flat:d.flat}}function me(d,a){a.x+=Math.cos(a.angle2D)*a.velocity+a.drift,a.y+=Math.sin(a.angle2D)*a.velocity+a.gravity,a.velocity*=a.decay,a.flat?(a.wobble=0,a.wobbleX=a.x+10*a.scalar,a.wobbleY=a.y+10*a.scalar,a.tiltSin=0,a.tiltCos=0,a.random=1):(a.wobble+=a.wobbleSpeed,a.wobbleX=a.x+10*a.scalar*Math.cos(a.wobble),a.wobbleY=a.y+10*a.scalar*Math.sin(a.wobble),a.tiltAngle+=.1,a.tiltSin=Math.sin(a.tiltAngle),a.tiltCos=Math.cos(a.tiltAngle),a.random=Math.random()+2);var g=a.tick++/a.totalTicks,N=a.x+a.random*a.tiltCos,j=a.y+a.random*a.tiltSin,T=a.wobbleX+a.random*a.tiltCos,I=a.wobbleY+a.random*a.tiltSin;if(d.fillStyle="rgba("+a.color.r+", "+a.color.g+", "+a.color.b+", "+(1-g)+")",d.beginPath(),W&&a.shape.type==="path"&&typeof a.shape.path=="string"&&Array.isArray(a.shape.matrix))d.fill(Ce(a.shape.path,a.shape.matrix,a.x,a.y,Math.abs(T-N)*.1,Math.abs(I-j)*.1,Math.PI/10*a.wobble));else if(a.shape.type==="bitmap"){var z=Math.PI/10*a.wobble,L=Math.abs(T-N)*.1,K=Math.abs(I-j)*.1,se=a.shape.bitmap.width*a.scalar,he=a.shape.bitmap.height*a.scalar,ke=new DOMMatrix([Math.cos(z)*L,Math.sin(z)*L,-Math.sin(z)*K,Math.cos(z)*K,a.x,a.y]);ke.multiplySelf(new DOMMatrix(a.shape.matrix));var Me=d.createPattern(ee.transform(a.shape.bitmap),"no-repeat");Me.setTransform(ke),d.globalAlpha=1-g,d.fillStyle=Me,d.fillRect(a.x-se/2,a.y-he/2,se,he),d.globalAlpha=1}else if(a.shape==="circle")d.ellipse?d.ellipse(a.x,a.y,Math.abs(T-N)*a.ovalScalar,Math.abs(I-j)*a.ovalScalar,Math.PI/10*a.wobble,0,2*Math.PI):De(d,a.x,a.y,Math.abs(T-N)*a.ovalScalar,Math.abs(I-j)*a.ovalScalar,Math.PI/10*a.wobble,0,2*Math.PI);else if(a.shape==="star")for(var oe=Math.PI/2*3,Be=4*a.scalar,tt=8*a.scalar,qe=a.x,ft=a.y,xt=5,$e=Math.PI/xt;xt--;)qe=a.x+Math.cos(oe)*tt,ft=a.y+Math.sin(oe)*tt,d.lineTo(qe,ft),oe+=$e,qe=a.x+Math.cos(oe)*Be,ft=a.y+Math.sin(oe)*Be,d.lineTo(qe,ft),oe+=$e;else d.moveTo(Math.floor(a.x),Math.floor(a.y)),d.lineTo(Math.floor(a.wobbleX),Math.floor(j)),d.lineTo(Math.floor(T),Math.floor(I)),d.lineTo(Math.floor(N),Math.floor(a.wobbleY));return d.closePath(),d.fill(),a.tick<a.totalTicks}function Ke(d,a,g,N,j){var T=a.slice(),I=d.getContext("2d"),z,L,K=q(function(se){function he(){z=L=null,I.clearRect(0,0,N.width,N.height),ee.clear(),j(),se()}function ke(){R&&!(N.width===b.width&&N.height===b.height)&&(N.width=d.width=b.width,N.height=d.height=b.height),!N.width&&!N.height&&(g(d),N.width=d.width,N.height=d.height),I.clearRect(0,0,N.width,N.height),T=T.filter(function(Me){return me(I,Me)}),T.length?z=X.frame(ke):he()}z=X.frame(ke),L=he});return{addFettis:function(se){return T=T.concat(se),K},canvas:d,promise:K,reset:function(){z&&X.cancel(z),L&&L()}}}function Je(d,a){var g=!d,N=!!D(a||{},"resize"),j=!1,T=D(a,"disableForReducedMotion",Boolean),I=B&&!!D(a||{},"useWorker"),z=I?$():null,L=g?ce:ve,K=d&&z?!!d.__confetti_initialized:!1,se=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,he;function ke(oe,Be,tt){for(var qe=D(oe,"particleCount",ye),ft=D(oe,"angle",Number),xt=D(oe,"spread",Number),$e=D(oe,"startVelocity",Number),Ut=D(oe,"decay",Number),Gn=D(oe,"gravity",Number),Dr=D(oe,"drift",Number),Kn=D(oe,"colors",ie),Fr=D(oe,"ticks",Number),qn=D(oe,"shapes"),Xn=D(oe,"scalar"),Sn=!!D(oe,"flat"),Zn=ae(oe),Vt=qe,Pt=[],ql=d.width*Zn.x,Br=d.height*Zn.y;Vt--;)Pt.push(de({x:ql,y:Br,angle:ft,spread:xt,startVelocity:$e,color:Kn[Vt%Kn.length],shape:qn[xe(0,qn.length)],ticks:Fr,decay:Ut,gravity:Gn,drift:Dr,scalar:Xn,flat:Sn}));return he?he.addFettis(Pt):(he=Ke(d,Pt,L,Be,tt),he.promise)}function Me(oe){var Be=T||D(oe,"disableForReducedMotion",Boolean),tt=D(oe,"zIndex",Number);if(Be&&se)return q(function($e){$e()});g&&he?d=he.canvas:g&&!d&&(d=We(tt),document.body.appendChild(d)),N&&!K&&L(d);var qe={width:d.width,height:d.height};z&&!K&&z.init(d),K=!0,z&&(d.__confetti_initialized=!0);function ft(){if(z){var $e={getBoundingClientRect:function(){if(!g)return d.getBoundingClientRect()}};L($e),z.postMessage({resize:{width:$e.width,height:$e.height}});return}qe.width=qe.height=null}function xt(){he=null,N&&(j=!1,y.removeEventListener("resize",ft)),g&&d&&(document.body.contains(d)&&document.body.removeChild(d),d=null,K=!1)}return N&&!j&&(j=!0,y.addEventListener("resize",ft,!1)),z?z.fire(oe,qe,xt):ke(oe,qe,xt)}return Me.reset=function(){z&&z.reset(),he&&he.reset()},Me}var et;function Fe(){return et||(et=Je(null,{useWorker:!0,resize:!0})),et}function Ce(d,a,g,N,j,T,I){var z=new Path2D(d),L=new Path2D;L.addPath(z,new DOMMatrix(a));var K=new Path2D;return K.addPath(L,new DOMMatrix([Math.cos(I)*j,Math.sin(I)*j,-Math.sin(I)*T,Math.cos(I)*T,g,N])),K}function _(d){if(!W)throw new Error("path confetti are not supported in this browser");var a,g;typeof d=="string"?a=d:(a=d.path,g=d.matrix);var N=new Path2D(a),j=document.createElement("canvas"),T=j.getContext("2d");if(!g){for(var I=1e3,z=I,L=I,K=0,se=0,he,ke,Me=0;Me<I;Me+=2)for(var oe=0;oe<I;oe+=2)T.isPointInPath(N,Me,oe,"nonzero")&&(z=Math.min(z,Me),L=Math.min(L,oe),K=Math.max(K,Me),se=Math.max(se,oe));he=K-z,ke=se-L;var Be=10,tt=Math.min(Be/he,Be/ke);g=[tt,0,0,tt,-Math.round(he/2+z)*tt,-Math.round(ke/2+L)*tt]}return{type:"path",path:a,matrix:g}}function G(d){var a,g=1,N="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof d=="string"?a=d:(a=d.text,g="scalar"in d?d.scalar:g,j="fontFamily"in d?d.fontFamily:j,N="color"in d?d.color:N);var T=10*g,I=""+T+"px "+j,z=new OffscreenCanvas(T,T),L=z.getContext("2d");L.font=I;var K=L.measureText(a),se=Math.ceil(K.actualBoundingBoxRight+K.actualBoundingBoxLeft),he=Math.ceil(K.actualBoundingBoxAscent+K.actualBoundingBoxDescent),ke=2,Me=K.actualBoundingBoxLeft+ke,oe=K.actualBoundingBoxAscent+ke;se+=ke+ke,he+=ke+ke,z=new OffscreenCanvas(se,he),L=z.getContext("2d"),L.font=I,L.fillStyle=N,L.fillText(a,Me,oe);var Be=1/g;return{type:"bitmap",bitmap:z.transferToImageBitmap(),matrix:[Be,0,0,Be,-se*Be/2,-he*Be/2]}}m.exports=function(){return Fe().apply(this,arguments)},m.exports.reset=function(){Fe().reset()},m.exports.create=Je,m.exports.shapeFromPath=_,m.exports.shapeFromText=G})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Gi,!1);const Or=Gi.exports;Gi.exports.create;const jp=({storageUsedBytes:x,totalStorageBytes:y,onOpenVault:m,onOpenMerge:R,onOpenPlaza:b,onOpenWidgets:B,onRunPreview:W,username:Q})=>{const[E,q]=ne.useState(!1),ee=(x/(1024*1024)).toFixed(1),X=(y/(1024*1024*1024)).toFixed(0),$=Math.min(100,x/y*100),ue=()=>{Or({particleCount:100,spread:70,origin:{y:.2},colors:["#00ffcc","#ff007f","#ffea00","#9d00ff"]})},te=()=>{q(!E)};return s.jsxs("header",{className:"h-16 border-b border-[#23233c] bg-[#0c0c1a]/95 backdrop-blur-md px-4 flex items-center justify-between z-50 sticky top-0",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-400 p-[2px] flex items-center justify-center shadow-lg shadow-pink-500/20",children:s.jsx("div",{className:"w-full h-full bg-[#0a0a14] rounded-[6px] flex items-center justify-center",children:s.jsx("span",{className:"text-lg",children:"👾"})})}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h1",{className:"font-bold tracking-wider text-base bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent",children:"VIBESPACE"}),s.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 font-semibold",children:"v0.2 PRO"})]}),s.jsxs("div",{className:"text-[11px] text-gray-400 font-mono flex items-center gap-1.5",children:[s.jsx("span",{children:"space:"}),s.jsxs("span",{className:"text-pink-400 font-semibold",children:["@",Q,".vibespace.io"]})]})]})]}),s.jsxs("div",{className:"hidden md:flex items-center gap-1 bg-[#141428] p-1 rounded-xl border border-[#262646]",children:[s.jsxs("button",{onClick:b,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-[#1f1f3d] transition-all",children:[s.jsx(Ku,{className:"w-3.5 h-3.5 text-cyan-400"}),"The Plaza"]}),s.jsxs("button",{onClick:B,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-yellow-300 hover:text-white hover:bg-[#1f1f3d] transition-all",children:[s.jsx(vc,{className:"w-3.5 h-3.5 text-yellow-400"}),"Widgets"]}),s.jsxs("button",{onClick:R,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-300 hover:text-white hover:bg-[#1f1f3d] transition-all",children:[s.jsx(ic,{className:"w-3.5 h-3.5 text-purple-400"}),"Merge Space"]}),s.jsxs("button",{onClick:m,className:"flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300 hover:bg-[#1f1f3d] transition-all border-l border-[#262646]",title:"Click to manage your 1.00 GB storage vault",children:[s.jsx(nc,{className:"w-3.5 h-3.5 text-pink-400"}),s.jsxs("div",{className:"flex flex-col text-left",children:[s.jsxs("span",{className:"text-[10px] text-gray-400 leading-tight",children:["Locker: ",s.jsxs("strong",{className:"text-white",children:[ee," MB"]})," / ",X," GB"]}),s.jsx("div",{className:"w-20 h-1.5 bg-[#252542] rounded-full overflow-hidden mt-0.5",children:s.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300",style:{width:`${Math.max(4,$)}%`}})})]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("button",{onClick:te,className:`p-2 rounded-lg border text-xs flex items-center gap-1.5 font-mono transition-all ${E?"bg-pink-950/60 border-pink-500/50 text-pink-300":"bg-[#1a1a36] border-[#2f2f5c] text-gray-400 hover:text-white"}`,title:E?"Mute Radio":"Listen to Cyber Radio",children:[E?s.jsx(Sp,{className:"w-3.5 h-3.5 text-pink-400 animate-pulse"}):s.jsx(Cp,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden lg:inline",children:E?"RADIO ON":"RADIO"})]}),s.jsxs("button",{onClick:W,className:"flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-[#1a1a36] hover:bg-[#25254d] text-cyan-300 border border-cyan-500/30 transition-all",children:[s.jsx(mc,{className:"w-3.5 h-3.5 fill-cyan-400"}),s.jsx("span",{className:"hidden sm:inline",children:"Refresh"})]}),s.jsxs("button",{onClick:ue,className:"flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 text-white shadow-lg shadow-pink-500/25 hover:opacity-95 active:scale-95 transition-all",children:[s.jsx(mp,{className:"w-3.5 h-3.5"}),"Publish Space"]})]})]})},Mp={id:"cyberpunk-matrix",name:"NEON_GRID // 2077",creator:"@glitch_phantom",category:"Cyberpunk",badge:"⚡ GLITCH & CANVAS",description:"Animated real-time matrix rain background, retro Web Audio synthesizer, glitch title, and cyber badges.",thumbnail:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60",html:`<div class="cyber-container">
  <!-- Interactive Matrix Rain Background Canvas -->
  <canvas id="matrix-canvas"></canvas>

  <div class="profile-card">
    <div class="glitch-wrapper">
      <h1 class="glitch" data-text="KAIRO // 0x7F">KAIRO // 0x7F</h1>
    </div>
    
    <div class="status-pill">
      <span class="pulsing-dot"></span> NEURAL LINK: ACTIVE
    </div>

    <p class="bio">
      Creative Technologist & Sound Hacker. Building autonomous spaces across the metaverse grid.
    </p>

    <!-- Retro Web Audio Synth Player -->
    <div class="music-station">
      <div class="tape-label">
        <span>📻 SYNTH_WAVE_99.8</span>
        <span id="audio-status">STANDBY</span>
      </div>
      <div class="synth-controls">
        <button id="synth-play-btn" class="cyber-btn primary">▶ PLAY BEAT</button>
        <button id="synth-glitch-btn" class="cyber-btn warning">⚡ SOUND FX</button>
      </div>
    </div>

    <!-- Interactive Badges & Links -->
    <div class="badge-grid">
      <div class="badge" onclick="triggerCyberFX('DATA_FETCH')">👾 01_PROJECTS</div>
      <div class="badge" onclick="triggerCyberFX('SYNTH_WAVE')">🎧 MIXTAPES</div>
      <div class="badge" onclick="triggerCyberFX('TERMINAL')">🛰️ COMM_CHANNEL</div>
    </div>

    <!-- Live Dynamic Visitor Sticker Log -->
    <div class="guestbook-section">
      <h3>⚡ GUESTBOOK TERMINAL</h3>
      <div class="sticker-shelf" id="sticker-shelf">
        <span class="stamp">🔥 @neon: "Insane canvas visuals!"</span>
        <span class="stamp">💎 @morpheus: "Merged our vibes"</span>
      </div>
      <div class="input-bar">
        <input type="text" id="guest-input" placeholder="Transmit a frequency..." />
        <button id="send-guest-btn" class="cyber-btn send">SEND</button>
      </div>
    </div>
  </div>
</div>`,css:`/* CYBERPUNK 2077 STYLES */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Space Grotesk', -apple-system, sans-serif;
}

body {
  background: #05050d;
  color: #00ffcc;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#matrix-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.35;
}

.profile-card {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 520px;
  background: rgba(10, 10, 24, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid #00ffcc;
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.25), inset 0 0 15px rgba(0, 255, 204, 0.05);
  border-radius: 12px;
  padding: 28px;
}

.glitch-wrapper {
  margin-bottom: 12px;
}

.glitch {
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  color: #00ffcc;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 204, 0.8);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 255, 204, 0.1);
  border: 1px solid rgba(0, 255, 204, 0.4);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  letter-spacing: 1px;
  margin-bottom: 16px;
  color: #ff007f;
}

.pulsing-dot {
  width: 8px;
  height: 8px;
  background: #ff007f;
  border-radius: 50%;
  box-shadow: 0 0 8px #ff007f;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.6; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.6; }
}

.bio {
  color: #b3c5d7;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 24px;
}

.music-station {
  background: #080812;
  border: 1px dashed #ff007f;
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 20px;
}

.tape-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #ff007f;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.synth-controls {
  display: flex;
  gap: 10px;
}

.cyber-btn {
  background: transparent;
  border: 1px solid #00ffcc;
  color: #00ffcc;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.cyber-btn:hover {
  background: #00ffcc;
  color: #000;
  box-shadow: 0 0 15px #00ffcc;
}

.cyber-btn.warning {
  border-color: #ff007f;
  color: #ff007f;
}

.cyber-btn.warning:hover {
  background: #ff007f;
  color: #fff;
  box-shadow: 0 0 15px #ff007f;
}

.badge-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}

.badge {
  background: #0f1226;
  border: 1px solid #233157;
  padding: 10px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
}

.badge:hover {
  transform: translateY(-3px);
  border-color: #00ffcc;
  color: #fff;
}

.guestbook-section h3 {
  font-size: 0.85rem;
  letter-spacing: 1px;
  color: #9d00ff;
  margin-bottom: 8px;
}

.sticker-shelf {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 110px;
  overflow-y: auto;
  margin-bottom: 12px;
}

.stamp {
  background: rgba(157, 0, 255, 0.15);
  border-left: 3px solid #9d00ff;
  padding: 6px 10px;
  font-size: 0.8rem;
  color: #e2c0ff;
}

.input-bar {
  display: flex;
  gap: 8px;
}

.input-bar input {
  flex: 1;
  background: #080812;
  border: 1px solid #2a2a44;
  border-radius: 4px;
  padding: 8px 12px;
  color: #fff;
  font-size: 0.85rem;
  outline: none;
}

.input-bar input:focus {
  border-color: #00ffcc;
}

.cyber-btn.send {
  background: #00ffcc;
  color: #000;
  font-weight: bold;
}`,js:`// MATRIX RAIN CANVAS ENGINE
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const letters = '01KAIRO_NET_7FX9AZ0123456789';
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(5, 5, 13, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ffcc';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 35);
}

// BROWSER-NATIVE WEB AUDIO SYNTHESIZER
let audioCtx = null;
let isPlaying = false;
let loopInterval = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function playSynthNote(freq, type = 'sine', duration = 0.2) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

const synthBtn = document.getElementById('synth-play-btn');
const audioStatus = document.getElementById('audio-status');
const synthGlitch = document.getElementById('synth-glitch-btn');

if (synthBtn) {
  synthBtn.addEventListener('click', () => {
    getAudioContext();
    if (!isPlaying) {
      isPlaying = true;
      synthBtn.textContent = '⏸ PAUSE BEAT';
      synthBtn.style.background = '#00ffcc';
      synthBtn.style.color = '#000';
      audioStatus.textContent = 'TRANSMITTING 128 BPM';
      audioStatus.style.color = '#00ffcc';

      const chords = [220, 261.63, 329.63, 392, 440, 523.25];
      let step = 0;
      loopInterval = setInterval(() => {
        playSynthNote(chords[step % chords.length], 'sawtooth', 0.25);
        if (step % 2 === 0) playSynthNote(110, 'sine', 0.3); // sub bass
        step++;
      }, 250);
    } else {
      isPlaying = false;
      clearInterval(loopInterval);
      synthBtn.textContent = '▶ PLAY BEAT';
      synthBtn.style.background = 'transparent';
      synthBtn.style.color = '#00ffcc';
      audioStatus.textContent = 'STANDBY';
      audioStatus.style.color = '#ff007f';
    }
  });
}

if (synthGlitch) {
  synthGlitch.addEventListener('click', () => {
    getAudioContext();
    [880, 1200, 440, 1600].forEach((freq, idx) => {
      setTimeout(() => playSynthNote(freq, 'square', 0.1), idx * 60);
    });
  });
}

window.triggerCyberFX = function(label) {
  playSynthNote(659.25, 'triangle', 0.15);
  alert('Activated Terminal Node: ' + label);
};

// GUESTBOOK INTERACTION
const guestInput = document.getElementById('guest-input');
const sendBtn = document.getElementById('send-guest-btn');
const shelf = document.getElementById('sticker-shelf');

if (sendBtn && guestInput && shelf) {
  sendBtn.addEventListener('click', () => {
    const val = guestInput.value.trim();
    if (val) {
      playSynthNote(520, 'sine', 0.2);
      const span = document.createElement('span');
      span.className = 'stamp';
      span.textContent = '🚀 @guest: "' + val + '"';
      shelf.prepend(span);
      guestInput.value = '';
    }
  });
}`},_p={id:"y2k-retro",name:"SPACE_ANGEL_1999 ★",creator:"@starlight_baby",category:"Y2K Retro",badge:"✨ GEOCITIES & GLITTER",description:"Starry animated space, marquee alerts, 90s pixel hit counter, custom MIDI player, and neon glitter badges.",thumbnail:"https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60",html:`<div class="retro-body">
  <div class="marquee-strip">
    <marquee scrollamount="6">★★★ WELCOME TO MY CYBER ROOM! ★ BEST VIEWED IN 800x600 ★ SIGN MY GUESTBOOK ★ NO HATERS ALLOWED ★★★</marquee>
  </div>

  <div class="win-card">
    <div class="window-header">
      <div class="win-title">💾 C:\\USERS\\STARLIGHT\\PROFILE.EXE</div>
      <div class="win-buttons">
        <button class="win-btn">_</button>
        <button class="win-btn">□</button>
        <button class="win-btn win-close">×</button>
      </div>
    </div>

    <div class="card-interior">
      <div class="avatar-row">
        <div class="retro-avatar">
          <img src="https://api.dicebear.com/7.x/bottts/svg?seed=starlight&backgroundColor=ff66b2" alt="Avatar" />
          <div class="online-tag">● ONLINE NOW</div>
        </div>
        <div class="headline-box">
          <h1 class="sparkle-title">★ Starlight Angel ★</h1>
          <p class="tagline">"In a world of HTML, be someone's rare GIF."</p>
          <div class="retro-stats">
            <span>Mood: ✨ Euphoric</span> | <span>Music: Eiffel 65 - Blue</span>
          </div>
        </div>
      </div>

      <!-- Hit Counter -->
      <div class="counter-box">
        <span class="counter-label">YOU ARE VISITOR #:</span>
        <div class="hit-counter" id="hit-count">00049281</div>
      </div>

      <!-- Retro Chiptune Jukebox -->
      <div class="jukebox">
        <div class="tape-header">💿 WINAMP 2.91 JUKEBOX</div>
        <div class="visualizer-bars">
          <span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span><span class="v-bar"></span>
        </div>
        <div class="jukebox-actions">
          <button id="y2k-play-btn" class="retro-push-btn">▶ PLAY CHIPTUNE</button>
          <button id="y2k-glitter-btn" class="retro-push-btn">✨ DROP GLITTER</button>
        </div>
      </div>

      <!-- Top 4 Friends -->
      <div class="friends-showcase">
        <div class="section-title">💕 STARLIGHT'S TOP 4 FRIENDS</div>
        <div class="friends-grid">
          <div class="friend-badge">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=kairo" />
            <span>@kairo</span>
          </div>
          <div class="friend-badge">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=pixel" />
            <span>@pixel_kat</span>
          </div>
          <div class="friend-badge">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=glitch" />
            <span>@glitchy</span>
          </div>
          <div class="friend-badge">
            <img src="https://api.dicebear.com/7.x/bottts/svg?seed=cyber" />
            <span>@cyber_queen</span>
          </div>
        </div>
      </div>

      <!-- Retro Web Badges -->
      <div class="web-stickers">
        <span class="gif-tag">MADE WITH NOTEPAD</span>
        <span class="gif-tag yellow">NETSCAPE READY</span>
        <span class="gif-tag pink">GET FLASH PLAYER</span>
      </div>
    </div>
  </div>
</div>`,css:`/* Y2K RETRO 1999 STYLES */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'VT323', 'Courier New', monospace;
}

body {
  background: #000 url('https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600&auto=format&fit=crop&q=40') repeat;
  color: #fff;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.retro-body {
  width: 100%;
  max-width: 580px;
}

.marquee-strip {
  background: #ff007f;
  color: #ffea00;
  font-size: 1.1rem;
  padding: 6px 10px;
  border: 2px outset #fff;
  margin-bottom: 16px;
  font-weight: bold;
}

.win-card {
  background: #c0c0c0;
  border: 3px outset #ffffff;
  box-shadow: 6px 6px 0px #000000;
  color: #000;
}

.window-header {
  background: linear-gradient(90deg, #000080, #1084d0);
  color: white;
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  letter-spacing: 1px;
}

.win-buttons {
  display: flex;
  gap: 4px;
}

.win-btn {
  width: 20px;
  height: 20px;
  background: #c0c0c0;
  border: 2px outset #fff;
  font-size: 11px;
  cursor: pointer;
  font-weight: bold;
}

.win-btn:active {
  border: 2px inset #fff;
}

.card-interior {
  padding: 18px;
}

.avatar-row {
  display: flex;
  gap: 16px;
  align-items: center;
  background: #ffffff;
  border: 2px inset #808080;
  padding: 12px;
  margin-bottom: 16px;
}

.retro-avatar {
  text-align: center;
}

.retro-avatar img {
  width: 90px;
  height: 90px;
  border: 3px double #ff007f;
  background: #ffe6f2;
}

.online-tag {
  font-size: 0.85rem;
  color: #008000;
  font-weight: bold;
  margin-top: 4px;
}

.sparkle-title {
  color: #ff007f;
  font-size: 1.8rem;
  text-shadow: 2px 2px #ffea00;
}

.tagline {
  font-style: italic;
  font-size: 1.05rem;
  color: #333;
  margin: 4px 0 8px 0;
}

.retro-stats {
  font-size: 0.95rem;
  color: #555;
}

.counter-box {
  background: #000;
  border: 2px inset #808080;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.counter-label {
  color: #00ff00;
  font-size: 1.1rem;
}

.hit-counter {
  background: #111;
  color: #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 4px;
  padding: 2px 8px;
  border: 1px solid #444;
}

.jukebox {
  background: #000040;
  color: #00ffcc;
  border: 2px solid #00ffcc;
  padding: 12px;
  margin-bottom: 16px;
}

.tape-header {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.visualizer-bars {
  display: flex;
  gap: 4px;
  height: 24px;
  align-items: flex-end;
  margin-bottom: 10px;
}

.v-bar {
  flex: 1;
  background: #ffea00;
  height: 4px;
  transition: height 0.1s;
}

.jukebox-actions {
  display: flex;
  gap: 10px;
}

.retro-push-btn {
  background: #c0c0c0;
  border: 2px outset #fff;
  padding: 6px 12px;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
}

.retro-push-btn:active {
  border: 2px inset #fff;
}

.friends-showcase {
  background: #fff;
  border: 2px inset #808080;
  padding: 10px;
  margin-bottom: 16px;
}

.section-title {
  font-size: 1.1rem;
  color: #000080;
  font-weight: bold;
  margin-bottom: 8px;
}

.friends-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  text-align: center;
}

.friend-badge img {
  width: 50px;
  height: 50px;
  background: #f0f0f0;
  border: 1px solid #333;
}

.friend-badge span {
  display: block;
  font-size: 0.85rem;
  color: #333;
}

.web-stickers {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.gif-tag {
  background: #000;
  color: #00ff00;
  border: 1px solid #00ff00;
  padding: 4px 8px;
  font-size: 0.85rem;
  font-weight: bold;
}

.gif-tag.yellow {
  color: #ffea00;
  border-color: #ffea00;
}

.gif-tag.pink {
  color: #ff007f;
  border-color: #ff007f;
}`,js:`// Y2K RETRO AUDIO & VISUALIZER ENGINE
let y2kAudioCtx = null;
let chiptuneInterval = null;
let isChiptunePlaying = false;

function getY2kAudio() {
  if (!y2kAudioCtx) {
    y2kAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return y2kAudioCtx;
}

function playBeep(freq, type = 'square', dur = 0.15) {
  const ctx = getY2kAudio();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + dur);
}

const playBtn = document.getElementById('y2k-play-btn');
const glitterBtn = document.getElementById('y2k-glitter-btn');
const bars = document.querySelectorAll('.v-bar');

if (playBtn) {
  playBtn.addEventListener('click', () => {
    getY2kAudio();
    if (!isChiptunePlaying) {
      isChiptunePlaying = true;
      playBtn.textContent = '⏸ STOP JUKEBOX';
      
      const melody = [523.25, 659.25, 783.99, 1046.50, 783.99, 659.25, 880, 587.33];
      let step = 0;
      chiptuneInterval = setInterval(() => {
        playBeep(melody[step % melody.length], 'square', 0.18);
        bars.forEach(bar => {
          bar.style.height = Math.floor(Math.random() * 22 + 4) + 'px';
        });
        step++;
      }, 160);
    } else {
      isChiptunePlaying = false;
      clearInterval(chiptuneInterval);
      playBtn.textContent = '▶ PLAY CHIPTUNE';
      bars.forEach(bar => bar.style.height = '4px');
    }
  });
}

if (glitterBtn) {
  glitterBtn.addEventListener('click', () => {
    playBeep(880, 'triangle', 0.1);
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div');
      sparkle.textContent = ['✨', '★', '💖', '⭐'][Math.floor(Math.random() * 4)];
      sparkle.style.position = 'fixed';
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = Math.random() * window.innerHeight + 'px';
      sparkle.style.fontSize = Math.floor(Math.random() * 24 + 16) + 'px';
      sparkle.style.zIndex = '9999';
      sparkle.style.pointerEvents = 'none';
      sparkle.style.transition = 'all 1s ease-out';
      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.style.transform = 'translateY(50px) scale(0)';
        sparkle.style.opacity = '0';
      }, 50);

      setTimeout(() => sparkle.remove(), 1100);
    }
  });
}

// Simulate hit counter increment
const hitEl = document.getElementById('hit-count');
if (hitEl) {
  const current = parseInt(hitEl.textContent, 10);
  hitEl.textContent = String(current + 1).padStart(8, '0');
}`},zp={id:"lofi-chill",name:"LOFI_BEDROOM // 3AM",creator:"@cloud_drifter",category:"Cozy Lofi",badge:"☕ PASTEL & AMBIENT",description:"Warm pastel aesthetic, relaxing generative synth chords, floating stars, and sticky note guestbook.",thumbnail:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&auto=format&fit=crop&q=60",html:`<div class="lofi-wrapper">
  <div class="sky-elements">
    <div class="cloud cloud-1">☁️</div>
    <div class="cloud cloud-2">🌙</div>
    <div class="cloud cloud-3">⭐</div>
  </div>

  <div class="cozy-card">
    <div class="profile-header">
      <div class="avatar-circle">
        <img src="https://api.dicebear.com/7.x/notionists/svg?seed=cozy&backgroundColor=ffd5dc" alt="Avatar" />
      </div>
      <div class="title-meta">
        <h2>Aria / CloudDrifter</h2>
        <p class="pronouns">she/her • digital gardener • tea lover</p>
      </div>
    </div>

    <div class="status-box">
      <span class="bubble">💭</span>
      <span class="status-text">"sipping chamomile and listening to rain on the glass window..."</span>
    </div>

    <!-- Ambient Soundscape Player -->
    <div class="ambient-player">
      <div class="player-info">
        <span class="disc-spin">💿</span>
        <div>
          <div class="song-title">midnight rainy cafe (ambient chords)</div>
          <div class="song-artist">generative lofi engine</div>
        </div>
      </div>
      <button id="lofi-audio-btn" class="lofi-pill-btn">☕ START AMBIENCE</button>
    </div>

    <!-- Sticky Notes Wall -->
    <div class="sticky-wall">
      <div class="note yellow">
        <div class="pin">📌</div>
        <p>remember to take a breath and drink some water today!</p>
        <span class="author">- aria</span>
      </div>
      <div class="note pink">
        <div class="pin">📌</div>
        <p>your space has the coziest vibes on the whole platform 🌸</p>
        <span class="author">- @milo</span>
      </div>
    </div>

    <!-- Interactive mood changer -->
    <div class="mood-selector">
      <span>current energy:</span>
      <button class="mood-tag" onclick="setMood('☕ cozy')">☕ cozy</button>
      <button class="mood-tag" onclick="setMood('🌧️ reflective')">🌧️ reflective</button>
      <button class="mood-tag" onclick="setMood('✨ inspired')">✨ inspired</button>
    </div>
  </div>
</div>`,css:`/* COZY LOFI STYLES */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

body {
  background: #1a162b;
  background-image: radial-gradient(#2b2347 1px, transparent 1px);
  background-size: 24px 24px;
  color: #f3e8ee;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.lofi-wrapper {
  width: 100%;
  max-width: 520px;
  position: relative;
}

.sky-elements {
  position: absolute;
  top: -30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  opacity: 0.8;
}

.cozy-card {
  background: rgba(36, 30, 58, 0.85);
  border: 1px solid rgba(255, 214, 230, 0.2);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(230, 160, 200, 0.1);
  backdrop-filter: blur(16px);
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
}

.avatar-circle img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #ffccd5;
  box-shadow: 0 4px 15px rgba(255, 204, 213, 0.3);
}

.title-meta h2 {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
}

.pronouns {
  font-size: 0.85rem;
  color: #c4b5fd;
  margin-top: 4px;
}

.status-box {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-style: italic;
  color: #e9d5ff;
  margin-bottom: 22px;
}

.ambient-player {
  background: linear-gradient(135deg, #372b5c, #261f42);
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.player-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.disc-spin {
  font-size: 1.6rem;
  animation: spin 6s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

.song-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: #fff;
}

.song-artist {
  font-size: 0.75rem;
  color: #a78bfa;
}

.lofi-pill-btn {
  background: #f472b6;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.lofi-pill-btn:hover {
  background: #ec4899;
  transform: scale(1.04);
}

.sticky-wall {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 22px;
}

.note {
  padding: 14px;
  border-radius: 4px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  font-size: 0.85rem;
  line-height: 1.4;
  color: #2e1065;
}

.note.yellow {
  background: #fef08a;
  transform: rotate(-1.5deg);
}

.note.pink {
  background: #fbcfe8;
  transform: rotate(2deg);
}

.pin {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9rem;
}

.note .author {
  display: block;
  margin-top: 8px;
  font-weight: bold;
  font-size: 0.75rem;
  opacity: 0.8;
}

.mood-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #c4b5fd;
}

.mood-tag {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 0.75rem;
  cursor: pointer;
}`,js:`// LOFI GENERATIVE CHORD AMBIENCE
let lofiAudio = null;
let chordLoop = null;
let isAmbiencePlaying = false;

function getLofiAudio() {
  if (!lofiAudio) {
    lofiAudio = new (window.AudioContext || window.webkitAudioContext)();
  }
  return lofiAudio;
}

function playWarmChord(freqs) {
  const ctx = getLofiAudio();
  freqs.forEach(freq => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Warm lowpass filter for that nostalgic vinyl feel
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, ctx.currentTime);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 3.2);
  });
}

const lofiBtn = document.getElementById('lofi-audio-btn');
if (lofiBtn) {
  lofiBtn.addEventListener('click', () => {
    getLofiAudio();
    if (!isAmbiencePlaying) {
      isAmbiencePlaying = true;
      lofiBtn.textContent = '⏸ PAUSE AMBIENCE';
      lofiBtn.style.background = '#818cf8';

      // Beautiful Jazz / Neo-Soul Chords
      const progressions = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23], // G7
      ];

      let idx = 0;
      playWarmChord(progressions[0]);
      chordLoop = setInterval(() => {
        idx = (idx + 1) % progressions.length;
        playWarmChord(progressions[idx]);
      }, 3500);
    } else {
      isAmbiencePlaying = false;
      clearInterval(chordLoop);
      lofiBtn.textContent = '☕ START AMBIENCE';
      lofiBtn.style.background = '#f472b6';
    }
  });
}

window.setMood = function(mood) {
  alert('Mood set to: ' + mood);
};`},Tp={id:"win95-desktop",name:"RETRO_OS // 95",creator:"@bill_gates_fan95",category:"Win95 OS",badge:"🪟 DESKTOP INTERFACE",description:"Interactive Windows 95 GUI with clickable desktop icons, draggable window aesthetics, sound chimes, and notepad.",thumbnail:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60",html:`<div class="desktop-env">
  <!-- Desktop Icons -->
  <div class="desktop-icon" onclick="openApp('My Computer')">
    <div class="icon-img">💻</div>
    <span>My Computer</span>
  </div>
  <div class="desktop-icon" onclick="openApp('Recycle Bin')">
    <div class="icon-img">🗑️</div>
    <span>Recycle Bin</span>
  </div>
  <div class="desktop-icon" onclick="openApp('Internet Explorer')">
    <div class="icon-img">🌐</div>
    <span>Vibe Net</span>
  </div>
  <div class="desktop-icon" onclick="triggerWinSound()">
    <div class="icon-img">🔊</div>
    <span>Startup Sound</span>
  </div>

  <!-- Main Active Window -->
  <div class="win-window">
    <div class="win-titlebar">
      <span class="win-caption">📁 C:\\USERS\\VIBE_EXPLORER\\ABOUT_ME.TXT</span>
      <div class="win-controls">
        <button class="win-btn">?</button>
        <button class="win-btn">×</button>
      </div>
    </div>
    <div class="win-menubar">
      <span><u>F</u>ile</span>
      <span><u>E</u>dit</span>
      <span><u>S</u>earch</span>
      <span><u>H</u>elp</span>
    </div>
    <div class="win-body">
      <h2>HEY WORLD! WELCOME TO MY OS 95 SPACE.</h2>
      <p>I build interactive web toys, pixel art, and digital installations.</p>
      <hr class="win-divider" />
      <div class="win-field">
        <strong>CURRENT STATUS:</strong> Building the next generation of funky social web.
      </div>
      <div class="win-field">
        <strong>TECH STACK:</strong> HTML5, Web Audio, CSS Grid, Assembly, Coffee.
      </div>
      <div class="win-cta-row">
        <button class="win-action-btn" onclick="triggerWinSound()">▶ PLAY WIN CHIME</button>
        <button class="win-action-btn" onclick="alert('Connection established with host!')">📞 DIAL-UP MODEM</button>
      </div>
    </div>
  </div>

  <!-- Taskbar -->
  <div class="taskbar">
    <button class="start-btn" onclick="alert('Start Menu: Welcome to VibeSpace 95!')">
      <span class="logo">🪟</span> <strong>Start</strong>
    </button>
    <div class="taskbar-item active">
      📁 ABOUT_ME.TXT
    </div>
    <div class="taskbar-clock" id="task-clock">
      04:20 PM
    </div>
  </div>
</div>`,css:`/* WINDOWS 95 RETRO OS */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Tahoma', 'MS Sans Serif', sans-serif;
  user-select: none;
}

body {
  background: #008080; /* Iconic Win95 Teal */
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.desktop-env {
  padding: 20px;
  height: calc(100vh - 36px);
  position: relative;
}

.desktop-icon {
  width: 75px;
  text-align: center;
  color: white;
  margin-bottom: 24px;
  cursor: pointer;
  padding: 4px;
}

.desktop-icon:hover {
  background: rgba(0, 0, 128, 0.4);
}

.icon-img {
  font-size: 2.2rem;
  margin-bottom: 4px;
}

.desktop-icon span {
  font-size: 0.75rem;
  text-shadow: 1px 1px 2px #000;
  display: block;
}

.win-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -50%);
  width: 460px;
  background: #c0c0c0;
  border: 2px outset #ffffff;
  box-shadow: 4px 4px 0px rgba(0,0,0,0.5);
}

.win-titlebar {
  background: linear-gradient(90deg, #000080, #1084d0);
  color: white;
  padding: 3px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.win-controls {
  display: flex;
  gap: 2px;
}

.win-btn {
  background: #c0c0c0;
  border: 1px outset #fff;
  width: 16px;
  height: 16px;
  font-size: 10px;
  cursor: pointer;
  line-height: 14px;
}

.win-menubar {
  background: #c0c0c0;
  padding: 2px 6px;
  display: flex;
  gap: 12px;
  font-size: 0.75rem;
  border-bottom: 1px solid #808080;
}

.win-body {
  padding: 18px;
  background: #ffffff;
  margin: 4px;
  border: 2px inset #808080;
  font-size: 0.85rem;
  color: #000;
  line-height: 1.5;
}

.win-body h2 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.win-divider {
  border: 0;
  border-top: 1px solid #c0c0c0;
  margin: 12px 0;
}

.win-field {
  margin-bottom: 8px;
}

.win-cta-row {
  margin-top: 16px;
  display: flex;
  gap: 10px;
}

.win-action-btn {
  background: #c0c0c0;
  border: 2px outset #ffffff;
  padding: 6px 12px;
  font-size: 0.8rem;
  cursor: pointer;
  font-weight: bold;
}

.win-action-btn:active {
  border: 2px inset #ffffff;
}

/* Taskbar */
.taskbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 36px;
  background: #c0c0c0;
  border-top: 2px outset #ffffff;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  gap: 6px;
  z-index: 9999;
}

.start-btn {
  background: #c0c0c0;
  border: 2px outset #ffffff;
  padding: 3px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  font-weight: bold;
}

.start-btn:active {
  border: 2px inset #ffffff;
}

.taskbar-item {
  background: #c0c0c0;
  border: 2px inset #ffffff;
  padding: 3px 12px;
  font-size: 0.75rem;
  font-weight: bold;
}

.taskbar-clock {
  margin-left: auto;
  border: 2px inset #808080;
  padding: 2px 8px;
  font-size: 0.75rem;
}`,js:`// WIN 95 AUDIO SYNTHESIS CHIME
let winAudio = null;

function getWinAudio() {
  if (!winAudio) {
    winAudio = new (window.AudioContext || window.webkitAudioContext)();
  }
  return winAudio;
}

window.triggerWinSound = function() {
  const ctx = getWinAudio();
  // Classic chord chime arpeggio
  const chimeNotes = [440, 554.37, 659.25, 880, 1108.73];
  chimeNotes.forEach((freq, idx) => {
    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    }, idx * 110);
  });
};

window.openApp = function(name) {
  alert('Launching application: ' + name);
};

// Update taskbar clock
function updateClock() {
  const clock = document.getElementById('task-clock');
  if (clock) {
    const d = new Date();
    clock.textContent = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
setInterval(updateClock, 1000);
updateClock();`},Ar=[Mp,_p,zp,Tp];function Pp(x,y,m,R){const b=x.toLowerCase();let B=y,W=m,Q=R,E="";return b.includes("glitch")||b.includes("scanline")?(E="Injected CRT scanline overlay and chromatic aberration glitch effect",W+=`

/* AI EVOLVED: CRT Scanlines & Glitch */
body::after {
  content: " ";
  display: block;
  position: fixed;
  top: 0; left: 0; bottom: 0; right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 999;
  background-size: 100% 3px, 6px 100%;
  pointer-events: none;
}
.glitch-evolved {
  animation: glitch-anim 2s infinite;
}
@keyframes glitch-anim {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}`):b.includes("music")||b.includes("visualizer")||b.includes("sound")||b.includes("bars")?(E="Added floating responsive audio visualizer spectrum",B.includes("ai-audio-spectrum")||(B+=`

<!-- AI EVOLVED: Reactive Audio Visualizer -->
<div class="ai-audio-spectrum" id="ai-spectrum" onclick="togglePulseSpectrum()">
  <span class="bar"></span><span class="bar"></span><span class="bar"></span>
  <span class="bar"></span><span class="bar"></span><span class="bar"></span>
  <span class="bar"></span><span class="bar"></span><span class="bar"></span>
</div>`),W+=`

/* AI EVOLVED: Visualizer Spectrum */
.ai-audio-spectrum {
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  gap: 4px;
  align-items: flex-end;
  height: 48px;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid #00ffcc;
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.4);
  z-index: 999;
  cursor: pointer;
}
.ai-audio-spectrum .bar {
  width: 5px;
  background: linear-gradient(to top, #00ffcc, #ff007f);
  border-radius: 2px;
  animation: bounceBar 0.8s ease-in-out infinite alternate;
}
.ai-audio-spectrum .bar:nth-child(2) { animation-delay: 0.1s; }
.ai-audio-spectrum .bar:nth-child(3) { animation-delay: 0.2s; }
.ai-audio-spectrum .bar:nth-child(4) { animation-delay: 0.3s; }
.ai-audio-spectrum .bar:nth-child(5) { animation-delay: 0.4s; }
.ai-audio-spectrum .bar:nth-child(6) { animation-delay: 0.25s; }
.ai-audio-spectrum .bar:nth-child(7) { animation-delay: 0.15s; }
.ai-audio-spectrum .bar:nth-child(8) { animation-delay: 0.35s; }
@keyframes bounceBar {
  0% { height: 6px; }
  100% { height: 38px; }
}`,Q+=`

// AI EVOLVED: Audio Spectrum Click Pulse
window.togglePulseSpectrum = function() {
  const bars = document.querySelectorAll('.ai-audio-spectrum .bar');
  bars.forEach(b => {
    b.style.height = (Math.random() * 32 + 8) + 'px';
  });
};`):b.includes("rain")||b.includes("ambient")||b.includes("storm")?(E="Spawned dynamic canvas ambient rain particles",B.includes("ai-rain-canvas")||(B=`<canvas id="ai-rain-canvas" style="position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99;opacity:0.6;"></canvas>
`+B),Q+=`

// AI EVOLVED: Ambient Rain Particles
(function() {
  const rCanvas = document.getElementById('ai-rain-canvas');
  if (rCanvas) {
    const ctx = rCanvas.getContext('2d');
    rCanvas.width = window.innerWidth;
    rCanvas.height = window.innerHeight;
    const drops = Array.from({ length: 90 }, () => ({
      x: Math.random() * rCanvas.width,
      y: Math.random() * rCanvas.height,
      l: Math.random() * 18 + 10,
      v: Math.random() * 6 + 6
    }));
    function renderRain() {
      ctx.clearRect(0, 0, rCanvas.width, rCanvas.height);
      ctx.strokeStyle = 'rgba(174, 194, 255, 0.5)';
      ctx.lineWidth = 1.2;
      drops.forEach(d => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1, d.y + d.l);
        ctx.stroke();
        d.y += d.v;
        if (d.y > rCanvas.height) { d.y = 0; d.x = Math.random() * rCanvas.width; }
      });
      requestAnimationFrame(renderRain);
    }
    renderRain();
  }
})();`):b.includes("sparkle")||b.includes("cursor")||b.includes("glitter")||b.includes("star")?(E="Added interactive sparkle trail that tracks visitor mouse movement",Q+=`

// AI EVOLVED: Sparkle Cursor Trail
window.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.6) {
    const s = document.createElement('span');
    s.textContent = ['✨', '★', '💫', '💖', '⭐'][Math.floor(Math.random() * 5)];
    s.style.position = 'fixed';
    s.style.left = (e.clientX + (Math.random() * 16 - 8)) + 'px';
    s.style.top = (e.clientY + (Math.random() * 16 - 8)) + 'px';
    s.style.fontSize = (Math.random() * 12 + 12) + 'px';
    s.style.pointerEvents = 'none';
    s.style.zIndex = '9999';
    s.style.transition = 'all 0.8s ease-out';
    document.body.appendChild(s);
    requestAnimationFrame(() => {
      s.style.transform = 'translateY(-25px) scale(0)';
      s.style.opacity = '0';
    });
    setTimeout(() => s.remove(), 800);
  }
});`):b.includes("glass")||b.includes("card")||b.includes("modern")||b.includes("blur")?(E="Applied glassmorphism blur and purple rim-light borders",W+=`

/* AI EVOLVED: Glassmorphism Overhaul */
.profile-card, .win-card, .cozy-card, .win-window {
  background: rgba(22, 18, 42, 0.65) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(168, 85, 247, 0.25) !important;
  border-radius: 20px !important;
}`):(E=`Synthesized dynamic styling based on prompt: "${x}"`,W+=`

/* AI EVOLVED: Dynamic Mutation (${x}) */
body {
  animation: dynamicPulse 8s ease infinite alternate;
}
@keyframes dynamicPulse {
  0% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(25deg); }
  100% { filter: hue-rotate(-20deg); }
}`),{html:B,css:W,js:Q,summary:E}}const Ip=({html:x,css:y,js:m,onHtmlChange:R,onCssChange:b,onJsChange:B,onSelectTemplate:W,currentTemplateId:Q})=>{const[E,q]=ne.useState("html"),[ee,X]=ne.useState(!1),[$,ue]=ne.useState(""),[te,J]=ne.useState(null),ye=(new Blob([x,y,m]).size/1024).toFixed(1),xe=()=>{const M=E==="html"?x:E==="css"?y:m;navigator.clipboard.writeText(M),X(!0),setTimeout(()=>X(!1),2e3)},V=()=>{const M=Ar.find(ae=>ae.id===Q)||Ar[0];W(M)},ie=M=>{const ae=M||$;if(!ae.trim())return;const ce=Pp(ae,x,y,m);R(ce.html),b(ce.css),B(ce.js),J(ce.summary),setTimeout(()=>J(null),4e3),ue(""),Or({particleCount:60,spread:55,origin:{y:.3},colors:["#a855f7","#ec4899","#06b6d4"]})};return s.jsxs("div",{className:"flex flex-col h-full bg-[#0e0e1c] border-r border-[#22223c]",children:[s.jsxs("div",{className:"p-3 bg-gradient-to-r from-[#17122b] via-[#14142a] to-[#0f192b] border-b border-[#282548]",children:[s.jsxs("div",{className:"flex items-center justify-between mb-2",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text font-mono",children:[s.jsx(yp,{className:"w-3.5 h-3.5 text-purple-400 animate-spin"}),s.jsx("span",{children:"AI EVOLVE COMMAND CENTER"})]}),te&&s.jsxs("span",{className:"text-[10px] text-emerald-300 font-mono bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full animate-pulse",children:["✓ ",te]})]}),s.jsx("div",{className:"flex gap-1.5 overflow-x-auto pb-2 scrollbar-none",children:[{label:"⚡ CRT Scanlines",prompt:"Add CRT scanlines and glitch effect"},{label:"🎵 Bouncing Visualizer",prompt:"Add bouncing audio visualizer bars"},{label:"✨ Sparkle Cursor",prompt:"Add sparkling cursor mouse trail"},{label:"🌧️ Ambient Rain",prompt:"Add ambient rain particle canvas"},{label:"🔮 Glassmorphism",prompt:"Make cards glassmorphism with blur and purple rim light"}].map((M,ae)=>s.jsx("button",{onClick:()=>ie(M.prompt),className:"text-[11px] font-mono whitespace-nowrap px-2.5 py-1 rounded-md bg-[#211d3b] hover:bg-[#2c2650] text-purple-200 border border-purple-500/30 hover:border-purple-400 transition-all active:scale-95",children:M.label},ae))}),s.jsxs("form",{onSubmit:M=>{M.preventDefault(),ie()},className:"relative flex items-center mt-1",children:[s.jsx("input",{type:"text",value:$,onChange:M=>ue(M.target.value),placeholder:"Tell AI: 'Add a bouncing vinyl player' or 'Turn the cards into neon holograms'...",className:"w-full bg-[#0b0a16] border border-[#332e56] focus:border-cyan-400 rounded-lg pl-3 pr-20 py-2 text-xs text-white placeholder-gray-500 outline-none transition-all font-mono"}),s.jsxs("button",{type:"submit",className:"absolute right-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs rounded-md shadow-md flex items-center gap-1 transition-all active:scale-95",children:[s.jsx("span",{children:"Evolve"}),s.jsx(gp,{className:"w-3 h-3"})]})]})]}),s.jsxs("div",{className:"p-2.5 border-b border-[#22223c] bg-[#121224] flex items-center justify-between gap-2 flex-wrap",children:[s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsx(Np,{className:"w-3.5 h-3.5 text-pink-400"}),s.jsx("span",{className:"text-xs font-semibold text-gray-300",children:"Preset Theme:"})]}),s.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-0.5 max-w-full",children:Ar.map(M=>s.jsxs("button",{onClick:()=>W(M),className:`px-2 py-0.5 text-xs rounded-md font-mono transition-all flex items-center gap-1 whitespace-nowrap ${Q===M.id?"bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold":"bg-[#1a1a33] text-gray-400 border border-[#2a2a4c] hover:text-white hover:border-gray-500"}`,children:[s.jsx("span",{children:M.category==="Cyberpunk"?"⚡":M.category==="Y2K Retro"?"✨":M.category==="Cozy Lofi"?"☕":"🪟"}),s.jsx("span",{children:M.name.split("//")[0].trim()})]},M.id))})]}),s.jsxs("div",{className:"flex items-center justify-between px-3 border-b border-[#22223c] bg-[#101020]",children:[s.jsxs("div",{className:"flex gap-1",children:[s.jsxs("button",{onClick:()=>q("html"),className:`px-3 py-2 text-xs font-mono font-medium flex items-center gap-1.5 border-b-2 transition-all ${E==="html"?"border-cyan-400 text-cyan-300 bg-[#16162e]":"border-transparent text-gray-400 hover:text-gray-200"}`,children:[s.jsx(Jf,{className:"w-3.5 h-3.5 text-cyan-400"}),"HTML"]}),s.jsxs("button",{onClick:()=>q("css"),className:`px-3 py-2 text-xs font-mono font-medium flex items-center gap-1.5 border-b-2 transition-all ${E==="css"?"border-pink-500 text-pink-400 bg-[#16162e]":"border-transparent text-gray-400 hover:text-gray-200"}`,children:[s.jsx(up,{className:"w-3.5 h-3.5 text-pink-500"}),"CSS"]}),s.jsxs("button",{onClick:()=>q("js"),className:`px-3 py-2 text-xs font-mono font-medium flex items-center gap-1.5 border-b-2 transition-all ${E==="js"?"border-yellow-400 text-yellow-300 bg-[#16162e]":"border-transparent text-gray-400 hover:text-gray-200"}`,children:[s.jsx(Ep,{className:"w-3.5 h-3.5 text-yellow-400"}),"JS"]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsxs("span",{className:"text-[11px] font-mono text-gray-400 hidden sm:inline",children:["Size: ",s.jsxs("strong",{className:"text-gray-300",children:[ye," KB"]})]}),s.jsx("button",{onClick:xe,className:"p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#20203a] transition-all",title:"Copy current tab code",children:ee?s.jsx(Hu,{className:"w-3.5 h-3.5 text-emerald-400"}):s.jsx(Xu,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:V,className:"p-1.5 text-gray-400 hover:text-pink-400 rounded hover:bg-[#20203a] transition-all",title:"Reset to template defaults",children:s.jsx(hp,{className:"w-3.5 h-3.5"})})]})]}),s.jsxs("div",{className:"relative flex-1 bg-[#0b0b16]",children:[E==="html"&&s.jsx("textarea",{value:x,onChange:M=>R(M.target.value),spellCheck:!1,className:"w-full h-full p-4 bg-transparent text-[#b8e2ff] font-mono text-xs sm:text-sm leading-relaxed outline-none resize-none border-none selection:bg-cyan-900/60",placeholder:"<!-- Write custom HTML or paste your widgets here -->"}),E==="css"&&s.jsx("textarea",{value:y,onChange:M=>b(M.target.value),spellCheck:!1,className:"w-full h-full p-4 bg-transparent text-[#ffcce6] font-mono text-xs sm:text-sm leading-relaxed outline-none resize-none border-none selection:bg-pink-900/60",placeholder:"/* Write custom CSS, animations, and glowing styles */"}),E==="js"&&s.jsx("textarea",{value:m,onChange:M=>B(M.target.value),spellCheck:!1,className:"w-full h-full p-4 bg-transparent text-[#fff4b8] font-mono text-xs sm:text-sm leading-relaxed outline-none resize-none border-none selection:bg-yellow-900/60",placeholder:"// Write custom JavaScript, Web Audio, Canvas, and interactive triggers"})]}),s.jsxs("div",{className:"h-7 border-t border-[#22223c] bg-[#0c0c18] px-3 flex items-center justify-between text-[11px] font-mono text-gray-400",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),s.jsx("span",{children:"AUTOSAVE ACTIVE"})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{children:"UTF-8"}),s.jsxs("span",{children:["TAB: ",E.toUpperCase()]})]})]})]})},Rp=({html:x,css:y,js:m,refreshTrigger:R})=>{const[b,B]=ne.useState("desktop"),[W,Q]=ne.useState(!1),[E,q]=ne.useState(!1),[ee,X]=ne.useState("👾"),[$,ue]=ne.useState([]),te=ne.useRef(null),J=ne.useRef(null),D=["👾","🔥","💖","✨","⭐","🍕","💎","👑","🛸","⚡"],ye=()=>`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Space+Grotesk:wght@400;600;700&family=VT323&display=swap" rel="stylesheet">
  <style>
    /* Reset & Base */
    html, body {
      margin: 0;
      padding: 0;
      min-height: 100%;
    }
    ${y}
  </style>
</head>
<body>
  ${x}
  <script>
    try {
      ${m}
    } catch (err) {
      console.error("VibeSpace Runtime Error:", err);
    }
  <\/script>
</body>
</html>`,xe=()=>{if(te.current){const M=te.current.contentDocument;M&&(M.open(),M.write(ye()),M.close())}};ne.useEffect(()=>{xe()},[x,y,m,R]);const V=M=>{if(!E)return;const ae=M.currentTarget.getBoundingClientRect(),ce=M.clientX-ae.left,ve=M.clientY-ae.top,We={id:"stk-"+Date.now(),emoji:ee,x:ce,y:ve};ue(De=>[...De,We])},ie=()=>{const M=ye(),ae=new Blob([M],{type:"text/html"}),ce=URL.createObjectURL(ae),ve=document.createElement("a");ve.href=ce,ve.download="my_vibespace_profile.html",ve.click(),URL.revokeObjectURL(ce)};return s.jsxs("div",{className:`flex flex-col h-full bg-[#0a0a14] ${W?"fixed inset-0 z-[100]":""}`,children:[s.jsxs("div",{className:"h-11 border-b border-[#22223c] bg-[#121224] px-3 flex items-center justify-between flex-wrap gap-2",children:[s.jsxs("div",{className:"flex items-center gap-1 bg-[#1a1a36] p-0.5 rounded-lg border border-[#2b2b4e]",children:[s.jsx("button",{onClick:()=>B("desktop"),className:`p-1.5 rounded transition-all ${b==="desktop"?"bg-[#2f2f5e] text-cyan-300":"text-gray-400 hover:text-white"}`,title:"Desktop View (100%)",children:s.jsx(sp,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>B("tablet"),className:`p-1.5 rounded transition-all ${b==="tablet"?"bg-[#2f2f5e] text-cyan-300":"text-gray-400 hover:text-white"}`,title:"Tablet View (768px)",children:s.jsx(wp,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>B("mobile"),className:`p-1.5 rounded transition-all ${b==="mobile"?"bg-[#2f2f5e] text-cyan-300":"text-gray-400 hover:text-white"}`,title:"Mobile View (390px)",children:s.jsx(vp,{className:"w-3.5 h-3.5"})})]}),s.jsxs("div",{className:"flex items-center gap-1.5 bg-[#171732] px-2 py-0.5 rounded-lg border border-[#292950]",children:[s.jsxs("button",{onClick:()=>q(!E),className:`flex items-center gap-1 px-2 py-1 rounded text-xs font-mono font-bold transition-all ${E?"bg-pink-600 text-white shadow-md shadow-pink-500/30":"text-gray-300 hover:text-white"}`,children:[s.jsx(xp,{className:"w-3 h-3 text-pink-300"}),s.jsx("span",{children:"Slap Stickers"})]}),E&&s.jsxs("div",{className:"flex items-center gap-1 pl-1 border-l border-gray-700",children:[D.map(M=>s.jsx("button",{onClick:()=>X(M),className:`text-sm px-1 py-0.5 rounded ${ee===M?"bg-pink-500/40 scale-125":"hover:scale-110"} transition-transform`,children:M},M)),$.length>0&&s.jsx("button",{onClick:()=>ue([]),className:"p-1 text-gray-400 hover:text-red-400 transition-colors ml-1",title:"Clear all stickers",children:s.jsx(kp,{className:"w-3 h-3"})})]})]}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsxs("button",{onClick:ie,className:"flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded-lg bg-[#1f1f3a] hover:bg-[#2b2b52] text-cyan-300 border border-cyan-500/30 transition-all",title:"Export as standalone .html file",children:[s.jsx(ep,{className:"w-3.5 h-3.5"}),s.jsx("span",{className:"hidden sm:inline",children:"Export HTML"})]}),s.jsx("button",{onClick:xe,className:"p-1.5 text-gray-400 hover:text-cyan-300 rounded hover:bg-[#1f1f3a] transition-all",title:"Reload sandbox preview",children:s.jsx(pp,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>Q(!W),className:"p-1.5 text-gray-400 hover:text-white rounded hover:bg-[#1f1f3a] transition-all",title:W?"Exit Fullscreen":"Fullscreen Canvas",children:W?s.jsx(ap,{className:"w-3.5 h-3.5"}):s.jsx(ip,{className:"w-3.5 h-3.5"})})]})]}),s.jsx("div",{className:"flex-1 overflow-auto bg-[#05050b] flex items-center justify-center p-2 sm:p-4",children:s.jsxs("div",{ref:J,onClick:V,className:`h-full bg-black rounded-lg overflow-hidden transition-all duration-300 border border-[#2a2a46] shadow-2xl relative ${E?"cursor-crosshair ring-2 ring-pink-500":""} ${b==="desktop"?"w-full":b==="tablet"?"w-[768px] max-w-full":"w-[390px] max-w-full"}`,children:[s.jsx("iframe",{ref:te,title:"VibeSpace Canvas Sandbox",sandbox:"allow-scripts allow-modals allow-forms",className:"w-full h-full border-none bg-black pointer-events-auto"}),$.map(M=>s.jsx("div",{style:{left:`${M.x}px`,top:`${M.y}px`},className:"absolute -translate-x-1/2 -translate-y-1/2 text-2xl select-none pointer-events-none drop-shadow-[0_0_8px_rgba(255,0,127,0.8)] animate-bounce",children:M.emoji},M.id)),E&&s.jsxs("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 border border-pink-500/60 text-pink-300 px-3 py-1 rounded-full text-xs font-mono pointer-events-none shadow-lg",children:["Click anywhere on your canvas to slap '",ee,"'"]})]})})]})},Lp=({isOpen:x,onClose:y,storageUsedBytes:m,totalStorageBytes:R,onAddStorageUsage:b})=>{if(!x)return null;const[B,W]=ne.useState(null),[Q,E]=ne.useState(null),q=ne.useRef(null),ee=ne.useRef(null),[X,$]=ne.useState([{id:"ast-1",name:"synthwave_bassline_loop.mp3",type:"audio",sizeMB:3.4,uploadedAt:"2 hours ago",url:"https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=electronic-future-beats-117997.mp3"},{id:"ast-2",name:"pixel_angel_badge.gif",type:"image",sizeMB:.8,uploadedAt:"Yesterday",url:"https://api.dicebear.com/7.x/bottts/svg?seed=starlight&backgroundColor=ff66b2"},{id:"ast-3",name:"floating_cyber_skull.glb",type:"model",sizeMB:4.2,uploadedAt:"3 days ago",url:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb"}]),ue=(m/(1024*1024)).toFixed(1),te=(R/(1024*1024*1024)).toFixed(0),J=Math.min(100,m/R*100),D=V=>{let ie="";V.type==="audio"?ie=`<audio src="${V.url}" loop autoplay controls class="custom-audio-player"></audio>`:V.type==="image"?ie=`<img src="${V.url}" alt="${V.name}" class="profile-sticker" />`:ie=`<model-viewer src="${V.url}" auto-rotate camera-controls></model-viewer>`,navigator.clipboard.writeText(ie),W(V.id),setTimeout(()=>W(null),2e3)},ye=V=>{const ie=V.target.files;!ie||ie.length===0||(Array.from(ie).forEach(M=>{const ae=parseFloat((M.size/1048576).toFixed(2)),ce=URL.createObjectURL(M),ve=M.type.startsWith("audio/")||M.name.endsWith(".mp3")||M.name.endsWith(".wav"),We=M.name.endsWith(".glb")||M.name.endsWith(".gltf"),De=ve?"audio":We?"model":"image",de={id:"ast-"+Date.now()+Math.random(),name:M.name,type:De,sizeMB:ae,uploadedAt:"Just now",url:ce};$(me=>[de,...me]),b(M.size)}),ee.current&&(ee.current.value=""))},xe=V=>{Q===V.id?(q.current&&q.current.pause(),E(null)):(q.current||(q.current=new Audio),q.current.src=V.url,q.current.play().catch(()=>{}),E(V.id),q.current.onended=()=>E(null))};return s.jsx("div",{className:"fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-[#121226] border border-[#2b2b52] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[s.jsx("input",{ref:ee,type:"file",multiple:!0,accept:"audio/*,image/*,.glb,.gltf",className:"hidden",onChange:ye}),s.jsxs("div",{className:"p-5 border-b border-[#232342] flex items-center justify-between bg-[#16162e]",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2.5 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400",children:s.jsx(nc,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-base font-bold text-white flex items-center gap-2",children:["1.00 GB Personal Storage Locker",s.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30",children:"FREE TIER"})]}),s.jsx("p",{className:"text-xs text-gray-400",children:"Upload real MP3s, 3D GLTF models, and GIFs to play and render inside your space."})]})]}),s.jsx("button",{onClick:()=>{q.current&&q.current.pause(),y()},className:"p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-[#20203e]",children:s.jsx(Kl,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:"p-5 border-b border-[#232342] bg-[#0f0f1f]",children:[s.jsxs("div",{className:"flex justify-between items-end mb-2",children:[s.jsxs("div",{children:[s.jsxs("span",{className:"text-2xl font-bold text-white font-mono",children:[ue," MB"]}),s.jsxs("span",{className:"text-gray-400 text-xs font-mono",children:[" / ",te,".00 GB used (",J.toFixed(1),"%)"]})]}),s.jsxs("span",{className:"text-xs text-cyan-400 font-mono",children:[(1024-parseFloat(ue)).toFixed(1)," MB available"]})]}),s.jsxs("div",{className:"h-3 w-full bg-[#1e1e38] rounded-full overflow-hidden flex",children:[s.jsx("div",{className:"bg-pink-500 h-full transition-all",style:{width:`${Math.max(2,J*.6)}%`},title:"Audio Files"}),s.jsx("div",{className:"bg-cyan-400 h-full transition-all",style:{width:`${Math.max(1,J*.3)}%`},title:"Visuals & 3D"}),s.jsx("div",{className:"bg-yellow-400 h-full transition-all",style:{width:`${Math.max(1,J*.1)}%`},title:"Custom Code & Fonts"})]}),s.jsxs("div",{className:"flex items-center gap-4 mt-3 text-[11px] font-mono text-gray-400",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-pink-500"})," Audio (MP3/WAV)"]}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"})," Visuals & 3D (.glb, .gif)"]}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"})," Code & Fonts"]})]})]}),s.jsxs("div",{className:"p-5 overflow-y-auto space-y-4",children:[s.jsxs("div",{onClick:()=>{var V;return(V=ee.current)==null?void 0:V.click()},className:"border-2 border-dashed border-[#2d2d56] hover:border-cyan-400/80 bg-[#141428]/50 hover:bg-[#181832] rounded-xl p-5 text-center cursor-pointer transition-all group",children:[s.jsx(Zf,{className:"w-8 h-8 mx-auto text-gray-400 group-hover:text-cyan-400 mb-2 transition-colors"}),s.jsx("div",{className:"text-sm font-semibold text-gray-200",children:"Click or Drag Files Here to Upload (Real Local Files Supported!)"}),s.jsx("p",{className:"text-xs text-gray-400 mt-1 font-mono",children:"Select MP3s, WAVs, GIFs, PNGs, or 3D GLB files from your computer."})]}),s.jsxs("div",{children:[s.jsxs("h3",{className:"text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-mono",children:["Your Uploaded Assets (",X.length,")"]}),s.jsx("div",{className:"space-y-2",children:X.map(V=>s.jsxs("div",{className:"bg-[#171730] border border-[#262648] rounded-xl p-3 flex items-center justify-between hover:border-gray-500 transition-all",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2 rounded-lg bg-[#202042] text-cyan-300",children:V.type==="audio"?s.jsx(tp,{className:"w-4 h-4 text-pink-400"}):V.type==="image"?s.jsx(rp,{className:"w-4 h-4 text-cyan-400"}):s.jsx(Xf,{className:"w-4 h-4 text-yellow-400"})}),s.jsxs("div",{children:[s.jsx("div",{className:"text-xs font-bold text-gray-200 font-mono",children:V.name}),s.jsxs("div",{className:"text-[11px] text-gray-400 font-mono",children:[V.sizeMB," MB • ",V.uploadedAt]})]})]}),s.jsxs("div",{className:"flex items-center gap-2",children:[V.type==="audio"&&s.jsx("button",{onClick:()=>xe(V),className:`p-1.5 rounded-lg border transition-all ${Q===V.id?"bg-pink-600 border-pink-400 text-white":"bg-[#222244] border-[#363666] text-pink-400 hover:text-white"}`,title:Q===V.id?"Pause Preview":"Play Audio Preview",children:Q===V.id?s.jsx(cp,{className:"w-3.5 h-3.5"}):s.jsx(mc,{className:"w-3.5 h-3.5"})}),s.jsx("button",{onClick:()=>D(V),className:"px-2.5 py-1 text-xs font-mono rounded-lg bg-[#25254a] hover:bg-[#323264] text-cyan-300 flex items-center gap-1.5 transition-all",children:B===V.id?s.jsxs(s.Fragment,{children:[s.jsx(Hu,{className:"w-3.5 h-3.5 text-emerald-400"}),s.jsx("span",{children:"Copied Tag!"})]}):s.jsxs(s.Fragment,{children:[s.jsx(Xu,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Copy Tag"})]})})]})]},V.id))})]}),s.jsxs("div",{className:"bg-[#101020] border border-cyan-500/20 rounded-xl p-3 flex items-start gap-2.5 text-xs text-gray-300",children:[s.jsx(lp,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),s.jsxs("div",{children:[s.jsx("strong",{className:"text-cyan-300",children:"Cloudflare R2 Zero-Egress Storage:"}),s.jsx("p",{className:"mt-0.5 text-gray-400",children:"Uploaded files have zero egress fees, so streaming your background music or rendering 3D assets to millions of visitors will never incur download bandwidth charges."})]})]})]})]})})},Ap=({isOpen:x,onClose:y,username:m})=>{if(!x)return null;const[R,b]=ne.useState("starlight_baby"),[B,W]=ne.useState("duo"),[Q,E]=ne.useState(!1),q=[{handle:"starlight_baby",name:"Starlight Angel ★",style:"Y2K Retro / Glitter",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=starlight&backgroundColor=ff66b2",vibe:"Eiffel 65 Chiptunes & Web Badges"},{handle:"cloud_drifter",name:"Aria // CloudDrifter",style:"Cozy Lofi Bedroom",avatar:"https://api.dicebear.com/7.x/notionists/svg?seed=cozy&backgroundColor=ffd5dc",vibe:"Ambient Jazz Chords & Rainy Clouds"},{handle:"bill_gates_fan95",name:"Retro OS 95",style:"Win95 Desktop GUI",avatar:"https://api.dicebear.com/7.x/bottts/svg?seed=bill&backgroundColor=008080",vibe:"Draggable OS Windows & Dialup Modems"}],ee=q.find($=>$.handle===R)||q[0],X=()=>{E(!0),Or({particleCount:80,spread:60,origin:{y:.5},colors:["#00ffcc","#ff007f","#a855f7"]})};return s.jsx("div",{className:"fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-[#121226] border border-[#2b2b52] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[s.jsxs("div",{className:"p-5 border-b border-[#232342] flex items-center justify-between bg-[#16162e]",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400",children:s.jsx(ic,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base font-bold text-white flex items-center gap-2",children:"Merge Spaces // Duo & Club Collaboration"}),s.jsx("p",{className:"text-xs text-gray-400",children:"Fuse two independent profiles into a shared canvas, duo world, or collective club room."})]})]}),s.jsx("button",{onClick:y,className:"p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-[#20203e]",children:s.jsx(Kl,{className:"w-5 h-5"})})]}),s.jsxs("div",{className:"p-5 overflow-y-auto space-y-5",children:[s.jsxs("div",{children:[s.jsx("label",{className:"text-xs font-mono uppercase text-gray-300 font-bold block mb-2",children:"1. Choose a Creator / Friend to Merge With:"}),s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5",children:q.map($=>s.jsxs("div",{onClick:()=>{b($.handle),E(!1)},className:`p-3 rounded-xl border cursor-pointer transition-all flex flex-col items-center text-center ${R===$.handle?"border-purple-400 bg-purple-950/30 shadow-lg shadow-purple-500/20":"border-[#28284c] bg-[#16162f] hover:border-gray-500"}`,children:[s.jsx("img",{src:$.avatar,alt:$.name,className:"w-12 h-12 rounded-full mb-2 bg-[#0c0c18] border border-[#3b3b64]"}),s.jsx("span",{className:"text-xs font-bold text-white",children:$.name}),s.jsxs("span",{className:"text-[10px] font-mono text-purple-300",children:["@",$.handle]}),s.jsx("span",{className:"text-[10px] text-gray-400 mt-1",children:$.style})]},$.handle))})]}),s.jsxs("div",{children:[s.jsx("label",{className:"text-xs font-mono uppercase text-gray-300 font-bold block mb-2",children:"2. Select Fusion Architecture:"}),s.jsxs("div",{className:"grid grid-cols-3 gap-2.5",children:[s.jsxs("button",{onClick:()=>W("duo"),className:`p-3 rounded-xl border text-left transition-all ${B==="duo"?"border-cyan-400 bg-cyan-950/30":"border-[#28284c] bg-[#16162f] text-gray-400"}`,children:[s.jsxs("div",{className:"text-xs font-bold text-white flex items-center gap-1.5 mb-1",children:[s.jsx(fp,{className:"w-3.5 h-3.5 text-cyan-400"}),"Duo Split"]}),s.jsx("p",{className:"text-[10px] text-gray-400",children:"50/50 dual canvas where both profiles interact across a reactive border."})]}),s.jsxs("button",{onClick:()=>W("club"),className:`p-3 rounded-xl border text-left transition-all ${B==="club"?"border-pink-400 bg-pink-950/30":"border-[#28284c] bg-[#16162f] text-gray-400"}`,children:[s.jsxs("div",{className:"text-xs font-bold text-white flex items-center gap-1.5 mb-1",children:[s.jsx(bp,{className:"w-3.5 h-3.5 text-pink-400"}),"Club Room"]}),s.jsx("p",{className:"text-[10px] text-gray-400",children:"Shared multi-user clubhouse canvas with shared guestbook & soundboard."})]}),s.jsxs("button",{onClick:()=>W("portal"),className:`p-3 rounded-xl border text-left transition-all ${B==="portal"?"border-yellow-400 bg-yellow-950/30":"border-[#28284c] bg-[#16162f] text-gray-400"}`,children:[s.jsxs("div",{className:"text-xs font-bold text-white flex items-center gap-1.5 mb-1",children:[s.jsx(op,{className:"w-3.5 h-3.5 text-yellow-400"}),"Warp Portal"]}),s.jsx("p",{className:"text-[10px] text-gray-400",children:"Interactive wormhole connecting your space directly to theirs."})]})]})]}),s.jsxs("div",{className:"bg-[#0b0b18] border border-[#232342] rounded-xl p-4",children:[s.jsxs("div",{className:"text-xs font-mono text-gray-400 mb-2 flex items-center justify-between",children:[s.jsx("span",{children:"LIVE MERGE SIMULATION:"}),s.jsxs("span",{className:"text-purple-400 font-bold",children:["@",m," × @",ee.handle]})]}),s.jsx("div",{className:"h-28 rounded-lg overflow-hidden border border-[#2e2e50] relative flex items-center justify-center",children:Q?s.jsxs("div",{className:"w-full h-full flex items-center justify-between px-6 bg-gradient-to-r from-cyan-900/40 via-purple-900/60 to-pink-900/40 backdrop-blur-sm animate-pulse",children:[s.jsxs("div",{className:"text-center",children:[s.jsxs("span",{className:"text-xs font-bold text-cyan-300 font-mono",children:["@",m]}),s.jsx("div",{className:"text-[10px] text-gray-300",children:"NEON MATRIX BEATS"})]}),s.jsx("div",{className:"w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm shadow-lg",children:"✨"}),s.jsxs("div",{className:"text-center",children:[s.jsxs("span",{className:"text-xs font-bold text-pink-300 font-mono",children:["@",ee.handle]}),s.jsx("div",{className:"text-[10px] text-gray-300",children:ee.vibe})]})]}):s.jsxs("div",{className:"text-center",children:[s.jsx("p",{className:"text-xs text-gray-400 font-mono mb-2",children:"Ready to bind spaces together"}),s.jsx("button",{onClick:X,className:"px-4 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/30 transition-all",children:"⚡ FUSE SPACES NOW"})]})})]})]}),s.jsxs("div",{className:"p-4 border-t border-[#232342] bg-[#14142c] flex justify-between items-center",children:[s.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Status: ",Q?"Connected & Synchronized":"Ready to link"]}),s.jsx("button",{onClick:y,className:"px-4 py-2 rounded-lg text-xs font-semibold bg-[#222244] text-white hover:bg-[#2e2e5c] transition-all",children:"Done"})]})]})})},Op=({isOpen:x,onClose:y,onForkTemplate:m})=>{if(!x)return null;const R=b=>{m(b),Or({particleCount:50,spread:50,origin:{y:.6},colors:["#00ffcc","#ff007f"]}),y()};return s.jsx("div",{className:"fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-[#121226] border border-[#2b2b52] rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[s.jsxs("div",{className:"p-5 border-b border-[#232342] flex items-center justify-between bg-[#16162e]",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400",children:s.jsx(Ku,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsx("h2",{className:"text-base font-bold text-white flex items-center gap-2",children:"The Vibe Plaza // Community Showcase"}),s.jsx("p",{className:"text-xs text-gray-400",children:"Explore funky, animated spaces handcrafted by community creators. Fork any template to make it your own!"})]})]}),s.jsx("button",{onClick:y,className:"p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-[#20203e]",children:s.jsx(Kl,{className:"w-5 h-5"})})]}),s.jsx("div",{className:"p-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4",children:Ar.map(b=>s.jsxs("div",{className:"bg-[#16162e] border border-[#28284c] rounded-xl overflow-hidden hover:border-cyan-400/60 transition-all flex flex-col group shadow-lg",children:[s.jsxs("div",{className:"h-32 w-full relative overflow-hidden bg-black",children:[s.jsx("img",{src:b.thumbnail,alt:b.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"}),s.jsx("div",{className:"absolute top-2.5 left-2.5",children:s.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-black/80 border border-cyan-400/40 text-cyan-300 backdrop-blur-sm",children:b.badge})}),s.jsx("div",{className:"absolute bottom-2.5 right-2.5",children:s.jsx("span",{className:"px-2 py-0.5 rounded text-[10px] font-mono bg-pink-950/80 border border-pink-500/40 text-pink-300 backdrop-blur-sm",children:b.creator})})]}),s.jsxs("div",{className:"p-4 flex-1 flex flex-col justify-between",children:[s.jsxs("div",{children:[s.jsx("h3",{className:"text-sm font-bold text-white font-mono flex items-center gap-2",children:b.name}),s.jsx("p",{className:"text-xs text-gray-400 mt-1.5 line-clamp-2",children:b.description})]}),s.jsxs("div",{className:"mt-4 pt-3 border-t border-[#232342] flex items-center justify-between",children:[s.jsxs("span",{className:"text-[11px] font-mono text-gray-400",children:["Category: ",s.jsx("strong",{className:"text-gray-200",children:b.category})]}),s.jsxs("button",{onClick:()=>R(b),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-md transition-all active:scale-95",children:[s.jsx(np,{className:"w-3.5 h-3.5"}),"Fork Vibe"]})]})]})]},b.id))})]})})},Dp=[{id:"bouncing-dvd",name:"Bouncing DVD Screensaver",category:"Retro & Y2K",description:"Iconic bouncing logo that changes color every time it bounces off the edges.",icon:"📀",html:'<div id="dvd-logo" class="dvd-bounce">DVD</div>',css:`/* Bouncing DVD Widget */
.dvd-bounce {
  position: fixed;
  top: 50px;
  left: 50px;
  background: #ff007f;
  color: white;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.9rem;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: bold;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.6);
  z-index: 998;
  pointer-events: none;
}`,js:`// Bouncing DVD Physics
(function() {
  const dvd = document.getElementById('dvd-logo');
  if (!dvd) return;
  let x = 60, y = 60, vx = 2.5, vy = 2.5;
  const colors = ['#00ffcc', '#ff007f', '#ffea00', '#9d00ff', '#00ff66'];
  function bounce() {
    x += vx; y += vy;
    const maxX = window.innerWidth - dvd.offsetWidth - 20;
    const maxY = window.innerHeight - dvd.offsetHeight - 20;
    if (x <= 10 || x >= maxX) {
      vx *= -1;
      dvd.style.background = colors[Math.floor(Math.random() * colors.length)];
    }
    if (y <= 10 || y >= maxY) {
      vy *= -1;
      dvd.style.background = colors[Math.floor(Math.random() * colors.length)];
    }
    dvd.style.left = x + 'px';
    dvd.style.top = y + 'px';
    requestAnimationFrame(bounce);
  }
  bounce();
})();`},{id:"pixel-clock",name:"Cyberpunk Digital HUD Clock",category:"Interactive",description:"Neon glowing digital time display with date and live seconds ticker.",icon:"🕒",html:`<div class="cyber-hud-clock">
  <div class="hud-label">SYSTEM_TIME</div>
  <div id="hud-time">00:00:00</div>
  <div id="hud-date" class="hud-sub">SYS.2026.ONLINE</div>
</div>`,css:`/* Cyber Clock Widget */
.cyber-hud-clock {
  display: inline-block;
  background: rgba(10, 10, 20, 0.8);
  border: 1px solid #00ffcc;
  padding: 8px 14px;
  border-radius: 8px;
  font-family: 'Space Grotesk', monospace;
  box-shadow: 0 0 12px rgba(0, 255, 204, 0.3);
  margin: 10px 0;
}
.hud-label {
  font-size: 0.65rem;
  color: #ff007f;
  letter-spacing: 2px;
}
#hud-time {
  font-size: 1.4rem;
  font-weight: bold;
  color: #00ffcc;
  text-shadow: 0 0 8px #00ffcc;
}
.hud-sub {
  font-size: 0.7rem;
  color: #8899aa;
}`,js:`// Update HUD clock
(function() {
  function tick() {
    const el = document.getElementById('hud-time');
    const dEl = document.getElementById('hud-date');
    if (el) el.textContent = new Date().toLocaleTimeString();
    if (dEl) dEl.textContent = new Date().toDateString().toUpperCase();
  }
  setInterval(tick, 1000);
  tick();
})();`},{id:"3d-spinning-cube",name:"CSS 3D Hologram Cube",category:"Audio & Visual",description:"3D interactive cube rotating in perspective with glowing neon faces.",icon:"🎲",html:`<div class="cube-scene">
  <div class="cube-obj">
    <div class="cube-face front">SPACE</div>
    <div class="cube-face back">VIBE</div>
    <div class="cube-face right">2077</div>
    <div class="cube-face left">CODE</div>
    <div class="cube-face top">★</div>
    <div class="cube-face bottom">👾</div>
  </div>
</div>`,css:`/* 3D Hologram Cube */
.cube-scene {
  width: 100px;
  height: 100px;
  perspective: 400px;
  margin: 20px auto;
}
.cube-obj {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 8s linear infinite;
}
.cube-face {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(0, 255, 204, 0.15);
  border: 2px solid #00ffcc;
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  color: #fff;
}
.cube-face.front  { transform: rotateY(0deg) translateZ(50px); }
.cube-face.back   { transform: rotateY(180deg) translateZ(50px); }
.cube-face.right  { transform: rotateY(90deg) translateZ(50px); }
.cube-face.left   { transform: rotateY(-90deg) translateZ(50px); }
.cube-face.top    { transform: rotateX(90deg) translateZ(50px); }
.cube-face.bottom { transform: rotateX(-90deg) translateZ(50px); }

@keyframes rotateCube {
  from { transform: rotateX(0deg) rotateY(0deg); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}`,js:`// 3D Cube speed up on hover
(function() {
  const cube = document.querySelector('.cube-obj');
  if (cube) {
    cube.addEventListener('mouseenter', () => {
      cube.style.animationDuration = '2s';
    });
    cube.addEventListener('mouseleave', () => {
      cube.style.animationDuration = '8s';
    });
  }
})();`},{id:"visitor-counter",name:"Web 1.0 Retro Hit Counter",category:"Badges",description:"Nostalgic odometer-style rolling hit counter with sound click on click.",icon:"🔢",html:`<div class="retro-counter-badge" onclick="incrementCounter()">
  <span>VISITORS:</span>
  <span id="odometer-val">00042891</span>
</div>`,css:`/* Retro Counter Badge */
.retro-counter-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #000;
  border: 2px outset #888;
  padding: 4px 10px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  color: #00ff00;
  cursor: pointer;
}
#odometer-val {
  background: #111;
  color: #ff3333;
  padding: 2px 6px;
  border: 1px inset #555;
  letter-spacing: 2px;
  font-weight: bold;
}`,js:`// Hit Counter increment
window.incrementCounter = function() {
  const o = document.getElementById('odometer-val');
  if (o) {
    const val = parseInt(o.textContent, 10);
    o.textContent = String(val + 1).padStart(8, '0');
  }
};`}],Fp=({isOpen:x,onClose:y,onInsertWidget:m})=>{if(!x)return null;const R=b=>{m(b),Or({particleCount:50,spread:60,origin:{y:.6},colors:["#00ffcc","#ff007f","#ffea00"]}),y()};return s.jsx("div",{className:"fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:s.jsxs("div",{className:"bg-[#121226] border border-[#2b2b52] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]",children:[s.jsxs("div",{className:"p-4 border-b border-[#232342] flex items-center justify-between bg-[#16162e]",children:[s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400",children:s.jsx(vc,{className:"w-5 h-5"})}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-base font-bold text-white flex items-center gap-2",children:["Widget & Component Bazaar",s.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30",children:"PLUG & PLAY"})]}),s.jsx("p",{className:"text-xs text-gray-400",children:"1-click inject ready-made interactive widgets directly into your space HTML, CSS, and JS."})]})]}),s.jsx("button",{onClick:y,className:"p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-[#20203e]",children:s.jsx(Kl,{className:"w-5 h-5"})})]}),s.jsx("div",{className:"p-4 overflow-y-auto space-y-3",children:Dp.map(b=>s.jsxs("div",{className:"bg-[#171732] border border-[#292950] hover:border-cyan-400/60 rounded-xl p-4 flex items-center justify-between gap-4 transition-all group",children:[s.jsxs("div",{className:"flex items-center gap-3.5",children:[s.jsx("div",{className:"w-11 h-11 rounded-xl bg-[#222244] border border-[#353566] flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform",children:b.icon}),s.jsxs("div",{children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("h3",{className:"text-sm font-bold text-white font-mono",children:b.name}),s.jsx("span",{className:"text-[10px] font-mono text-pink-400 bg-pink-950/60 px-1.5 py-0.5 rounded border border-pink-500/30",children:b.category})]}),s.jsx("p",{className:"text-xs text-gray-400 mt-1",children:b.description})]})]}),s.jsxs("button",{onClick:()=>R(b),className:"shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/20 active:scale-95 transition-all",children:[s.jsx(dp,{className:"w-3.5 h-3.5"}),s.jsx("span",{children:"Inject"})]})]},b.id))})]})})},Bp=()=>{const x=Ar[0],[y,m]=ne.useState(()=>localStorage.getItem("vibespace_template_id")||x.id),[R,b]=ne.useState(()=>localStorage.getItem("vibespace_html")||x.html),[B,W]=ne.useState(()=>localStorage.getItem("vibespace_css")||x.css),[Q,E]=ne.useState(()=>localStorage.getItem("vibespace_js")||x.js),[q,ee]=ne.useState(0),[X,$]=ne.useState(()=>{const de=localStorage.getItem("vibespace_storage_bytes");return de?parseInt(de,10):48.4*1024*1024}),ue=1024*1024*1024,[te,J]=ne.useState(!1),[D,ye]=ne.useState(!1),[xe,V]=ne.useState(!1),[ie,M]=ne.useState(!1),ae="kairo_grid";ne.useEffect(()=>{localStorage.setItem("vibespace_html",R),localStorage.setItem("vibespace_css",B),localStorage.setItem("vibespace_js",Q),localStorage.setItem("vibespace_template_id",y),localStorage.setItem("vibespace_storage_bytes",X.toString())},[R,B,Q,y,X]);const ce=ne.useCallback(()=>{ee(de=>de+1)},[]);ne.useEffect(()=>{const de=me=>{(me.metaKey||me.ctrlKey)&&me.key==="s"&&(me.preventDefault(),ce())};return window.addEventListener("keydown",de),()=>window.removeEventListener("keydown",de)},[ce]);const ve=de=>{m(de.id),b(de.html),W(de.css),E(de.js),ee(me=>me+1)},We=de=>{b(me=>me+`

<!-- Widget: ${de.name} -->
`+de.html),W(me=>me+`

/* Widget: ${de.name} */
`+de.css),E(me=>me+`

// Widget: ${de.name}
`+de.js),ee(me=>me+1)},De=de=>{$(me=>Math.min(ue,me+de))};return s.jsxs("div",{className:"flex flex-col h-screen w-screen overflow-hidden bg-[#0a0a14] text-white",children:[s.jsx(jp,{storageUsedBytes:X,totalStorageBytes:ue,onOpenVault:()=>J(!0),onOpenMerge:()=>ye(!0),onOpenPlaza:()=>V(!0),onOpenWidgets:()=>M(!0),onRunPreview:ce,username:ae}),s.jsxs("main",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[s.jsx("section",{className:"w-full md:w-1/2 h-1/2 md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-[#22223c]",children:s.jsx(Ip,{html:R,css:B,js:Q,onHtmlChange:b,onCssChange:W,onJsChange:E,onSelectTemplate:ve,currentTemplateId:y})}),s.jsx("section",{className:"w-full md:w-1/2 h-1/2 md:h-full overflow-hidden",children:s.jsx(Rp,{html:R,css:B,js:Q,refreshTrigger:q})})]}),s.jsx(Lp,{isOpen:te,onClose:()=>J(!1),storageUsedBytes:X,totalStorageBytes:ue,onAddStorageUsage:De}),s.jsx(Ap,{isOpen:D,onClose:()=>ye(!1),username:ae}),s.jsx(Op,{isOpen:xe,onClose:()=>V(!1),onForkTemplate:ve}),s.jsx(Fp,{isOpen:ie,onClose:()=>M(!1),onInsertWidget:We})]})};Bf.createRoot(document.getElementById("root")).render(s.jsx(If.StrictMode,{children:s.jsx(Bp,{})}));
