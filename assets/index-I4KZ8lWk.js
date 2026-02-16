(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function l(c){if(c.ep)return;c.ep=!0;const d=s(c);fetch(c.href,d)}})();function Cy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $c={exports:{}},yi={};var Rm;function zy(){if(Rm)return yi;Rm=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(l,c,d){var f=null;if(d!==void 0&&(f=""+d),c.key!==void 0&&(f=""+c.key),"key"in c){d={};for(var m in c)m!=="key"&&(d[m]=c[m])}else d=c;return c=d.ref,{$$typeof:r,type:l,key:f,ref:c!==void 0?c:null,props:d}}return yi.Fragment=n,yi.jsx=s,yi.jsxs=s,yi}var Nm;function Uy(){return Nm||(Nm=1,$c.exports=zy()),$c.exports}var h=Uy(),Gc={exports:{}},ie={};var Cm;function Dy(){if(Cm)return ie;Cm=1;var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function w(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,U={};function q(E,G,I){this.props=E,this.context=G,this.refs=U,this.updater=I||j}q.prototype.isReactComponent={},q.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},q.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function D(){}D.prototype=q.prototype;function C(E,G,I){this.props=E,this.context=G,this.refs=U,this.updater=I||j}var V=C.prototype=new D;V.constructor=C,O(V,q.prototype),V.isPureReactComponent=!0;var F=Array.isArray;function K(){}var P={H:null,A:null,T:null,S:null},ve=Object.prototype.hasOwnProperty;function je(E,G,I){var J=I.ref;return{$$typeof:r,type:E,key:G,ref:J!==void 0?J:null,props:I}}function ut(E,G){return je(E.type,G,E.props)}function lt(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function it(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(I){return G[I]})}var ta=/\/+/g;function X(E,G){return typeof E=="object"&&E!==null&&E.key!=null?it(""+E.key):G.toString(36)}function ue(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(K,K):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function L(E,G,I,J,se){var de=typeof E;(de==="undefined"||de==="boolean")&&(E=null);var Se=!1;if(E===null)Se=!0;else switch(de){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(E.$$typeof){case r:case n:Se=!0;break;case v:return Se=E._init,L(Se(E._payload),G,I,J,se)}}if(Se)return se=se(E),Se=J===""?"."+X(E,0):J,F(se)?(I="",Se!=null&&(I=Se.replace(ta,"$&/")+"/"),L(se,G,I,"",function(jr){return jr})):se!=null&&(lt(se)&&(se=ut(se,I+(se.key==null||E&&E.key===se.key?"":(""+se.key).replace(ta,"$&/")+"/")+Se)),G.push(se)),1;Se=0;var ot=J===""?".":J+":";if(F(E))for(var Be=0;Be<E.length;Be++)J=E[Be],de=ot+X(J,Be),Se+=L(J,G,I,de,se);else if(Be=w(E),typeof Be=="function")for(E=Be.call(E),Be=0;!(J=E.next()).done;)J=J.value,de=ot+X(J,Be++),Se+=L(J,G,I,de,se);else if(de==="object"){if(typeof E.then=="function")return L(ue(E),G,I,J,se);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Y(E,G,I){if(E==null)return E;var J=[],se=0;return L(E,J,"","",function(de){return G.call(I,de,se++)}),J}function ee(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(I){(E._status===0||E._status===-1)&&(E._status=1,E._result=I)},function(I){(E._status===0||E._status===-1)&&(E._status=2,E._result=I)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var ge=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},be={map:Y,forEach:function(E,G,I){Y(E,function(){G.apply(this,arguments)},I)},count:function(E){var G=0;return Y(E,function(){G++}),G},toArray:function(E){return Y(E,function(G){return G})||[]},only:function(E){if(!lt(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ie.Activity=_,ie.Children=be,ie.Component=q,ie.Fragment=s,ie.Profiler=c,ie.PureComponent=C,ie.StrictMode=l,ie.Suspense=g,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ie.__COMPILER_RUNTIME={__proto__:null,c:function(E){return P.H.useMemoCache(E)}},ie.cache=function(E){return function(){return E.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(E,G,I){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var J=O({},E.props),se=E.key;if(G!=null)for(de in G.key!==void 0&&(se=""+G.key),G)!ve.call(G,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&G.ref===void 0||(J[de]=G[de]);var de=arguments.length-2;if(de===1)J.children=I;else if(1<de){for(var Se=Array(de),ot=0;ot<de;ot++)Se[ot]=arguments[ot+2];J.children=Se}return je(E.type,se,J)},ie.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:d,_context:E},E},ie.createElement=function(E,G,I){var J,se={},de=null;if(G!=null)for(J in G.key!==void 0&&(de=""+G.key),G)ve.call(G,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(se[J]=G[J]);var Se=arguments.length-2;if(Se===1)se.children=I;else if(1<Se){for(var ot=Array(Se),Be=0;Be<Se;Be++)ot[Be]=arguments[Be+2];se.children=ot}if(E&&E.defaultProps)for(J in Se=E.defaultProps,Se)se[J]===void 0&&(se[J]=Se[J]);return je(E,de,se)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(E){return{$$typeof:m,render:E}},ie.isValidElement=lt,ie.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:ee}},ie.memo=function(E,G){return{$$typeof:y,type:E,compare:G===void 0?null:G}},ie.startTransition=function(E){var G=P.T,I={};P.T=I;try{var J=E(),se=P.S;se!==null&&se(I,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(K,ge)}catch(de){ge(de)}finally{G!==null&&I.types!==null&&(G.types=I.types),P.T=G}},ie.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ie.use=function(E){return P.H.use(E)},ie.useActionState=function(E,G,I){return P.H.useActionState(E,G,I)},ie.useCallback=function(E,G){return P.H.useCallback(E,G)},ie.useContext=function(E){return P.H.useContext(E)},ie.useDebugValue=function(){},ie.useDeferredValue=function(E,G){return P.H.useDeferredValue(E,G)},ie.useEffect=function(E,G){return P.H.useEffect(E,G)},ie.useEffectEvent=function(E){return P.H.useEffectEvent(E)},ie.useId=function(){return P.H.useId()},ie.useImperativeHandle=function(E,G,I){return P.H.useImperativeHandle(E,G,I)},ie.useInsertionEffect=function(E,G){return P.H.useInsertionEffect(E,G)},ie.useLayoutEffect=function(E,G){return P.H.useLayoutEffect(E,G)},ie.useMemo=function(E,G){return P.H.useMemo(E,G)},ie.useOptimistic=function(E,G){return P.H.useOptimistic(E,G)},ie.useReducer=function(E,G,I){return P.H.useReducer(E,G,I)},ie.useRef=function(E){return P.H.useRef(E)},ie.useState=function(E){return P.H.useState(E)},ie.useSyncExternalStore=function(E,G,I){return P.H.useSyncExternalStore(E,G,I)},ie.useTransition=function(){return P.H.useTransition()},ie.version="19.2.4",ie}var zm;function gu(){return zm||(zm=1,Gc.exports=Dy()),Gc.exports}var A=gu();const My=Cy(A);var Vc={exports:{}},vi={},Yc={exports:{}},Kc={};var Um;function Ly(){return Um||(Um=1,(function(r){function n(L,Y){var ee=L.length;L.push(Y);e:for(;0<ee;){var ge=ee-1>>>1,be=L[ge];if(0<c(be,Y))L[ge]=Y,L[ee]=be,ee=ge;else break e}}function s(L){return L.length===0?null:L[0]}function l(L){if(L.length===0)return null;var Y=L[0],ee=L.pop();if(ee!==Y){L[0]=ee;e:for(var ge=0,be=L.length,E=be>>>1;ge<E;){var G=2*(ge+1)-1,I=L[G],J=G+1,se=L[J];if(0>c(I,ee))J<be&&0>c(se,I)?(L[ge]=se,L[J]=ee,ge=J):(L[ge]=I,L[G]=ee,ge=G);else if(J<be&&0>c(se,ee))L[ge]=se,L[J]=ee,ge=J;else break e}}return Y}function c(L,Y){var ee=L.sortIndex-Y.sortIndex;return ee!==0?ee:L.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],v=1,_=null,x=3,w=!1,j=!1,O=!1,U=!1,q=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function V(L){for(var Y=s(y);Y!==null;){if(Y.callback===null)l(y);else if(Y.startTime<=L)l(y),Y.sortIndex=Y.expirationTime,n(g,Y);else break;Y=s(y)}}function F(L){if(O=!1,V(L),!j)if(s(g)!==null)j=!0,K||(K=!0,it());else{var Y=s(y);Y!==null&&ue(F,Y.startTime-L)}}var K=!1,P=-1,ve=5,je=-1;function ut(){return U?!0:!(r.unstable_now()-je<ve)}function lt(){if(U=!1,K){var L=r.unstable_now();je=L;var Y=!0;try{e:{j=!1,O&&(O=!1,D(P),P=-1),w=!0;var ee=x;try{t:{for(V(L),_=s(g);_!==null&&!(_.expirationTime>L&&ut());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,x=_.priorityLevel;var be=ge(_.expirationTime<=L);if(L=r.unstable_now(),typeof be=="function"){_.callback=be,V(L),Y=!0;break t}_===s(g)&&l(g),V(L)}else l(g);_=s(g)}if(_!==null)Y=!0;else{var E=s(y);E!==null&&ue(F,E.startTime-L),Y=!1}}break e}finally{_=null,x=ee,w=!1}Y=void 0}}finally{Y?it():K=!1}}}var it;if(typeof C=="function")it=function(){C(lt)};else if(typeof MessageChannel<"u"){var ta=new MessageChannel,X=ta.port2;ta.port1.onmessage=lt,it=function(){X.postMessage(null)}}else it=function(){q(lt,0)};function ue(L,Y){P=q(function(){L(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(L){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var ee=x;x=Y;try{return L()}finally{x=ee}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(L,Y){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ee=x;x=L;try{return Y()}finally{x=ee}},r.unstable_scheduleCallback=function(L,Y,ee){var ge=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ge+ee:ge):ee=ge,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,L={id:v++,callback:Y,priorityLevel:L,startTime:ee,expirationTime:be,sortIndex:-1},ee>ge?(L.sortIndex=ee,n(y,L),s(g)===null&&L===s(y)&&(O?(D(P),P=-1):O=!0,ue(F,ee-ge))):(L.sortIndex=be,n(g,L),j||w||(j=!0,K||(K=!0,it()))),L},r.unstable_shouldYield=ut,r.unstable_wrapCallback=function(L){var Y=x;return function(){var ee=x;x=Y;try{return L.apply(this,arguments)}finally{x=ee}}}})(Kc)),Kc}var Dm;function qy(){return Dm||(Dm=1,Yc.exports=Ly()),Yc.exports}var Ic={exports:{}},st={};var Mm;function By(){if(Mm)return st;Mm=1;var r=gu();function n(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)y+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(n(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},c=Symbol.for("react.portal");function d(g,y,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:_==null?null:""+_,children:g,containerInfo:y,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return st.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,st.createPortal=function(g,y){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(n(299));return d(g,y,null,v)},st.flushSync=function(g){var y=f.T,v=l.p;try{if(f.T=null,l.p=2,g)return g()}finally{f.T=y,l.p=v,l.d.f()}},st.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,l.d.C(g,y))},st.prefetchDNS=function(g){typeof g=="string"&&l.d.D(g)},st.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var v=y.as,_=m(v,y.crossOrigin),x=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;v==="style"?l.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:w}):v==="script"&&l.d.X(g,{crossOrigin:_,integrity:x,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},st.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var v=m(y.as,y.crossOrigin);l.d.M(g,{crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&l.d.M(g)},st.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var v=y.as,_=m(v,y.crossOrigin);l.d.L(g,v,{crossOrigin:_,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},st.preloadModule=function(g,y){if(typeof g=="string")if(y){var v=m(y.as,y.crossOrigin);l.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:v,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else l.d.m(g)},st.requestFormReset=function(g){l.d.r(g)},st.unstable_batchedUpdates=function(g,y){return g(y)},st.useFormState=function(g,y,v){return f.H.useFormState(g,y,v)},st.useFormStatus=function(){return f.H.useHostTransitionStatus()},st.version="19.2.4",st}var Lm;function Hy(){if(Lm)return Ic.exports;Lm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Ic.exports=By(),Ic.exports}var qm;function $y(){if(qm)return vi;qm=1;var r=qy(),n=gu(),s=Hy();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(l(188))}function y(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,i=t;;){var o=a.return;if(o===null)break;var u=o.alternate;if(u===null){if(i=o.return,i!==null){a=i;continue}break}if(o.child===u.child){for(u=o.child;u;){if(u===a)return g(o),e;if(u===i)return g(o),t;u=u.sibling}throw Error(l(188))}if(a.return!==i.return)a=o,i=u;else{for(var p=!1,b=o.child;b;){if(b===a){p=!0,a=o,i=u;break}if(b===i){p=!0,i=o,a=u;break}b=b.sibling}if(!p){for(b=u.child;b;){if(b===a){p=!0,a=u,i=o;break}if(b===i){p=!0,i=u,a=o;break}b=b.sibling}if(!p)throw Error(l(189))}}if(a.alternate!==i)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),C=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),ut=Symbol.for("react.memo_cache_sentinel"),lt=Symbol.iterator;function it(e){return e===null||typeof e!="object"?null:(e=lt&&e[lt]||e["@@iterator"],typeof e=="function"?e:null)}var ta=Symbol.for("react.client.reference");function X(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ta?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case q:return"Profiler";case U:return"StrictMode";case F:return"Suspense";case K:return"SuspenseList";case je:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case C:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case ve:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}var ue=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ge=[],be=-1;function E(e){return{current:e}}function G(e){0>be||(e.current=ge[be],ge[be]=null,be--)}function I(e,t){be++,ge[be]=e.current,e.current=t}var J=E(null),se=E(null),de=E(null),Se=E(null);function ot(e,t){switch(I(de,t),I(se,e),I(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ff(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ff(t),e=em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(J),I(J,e)}function Be(){G(J),G(se),G(de)}function jr(e){e.memoizedState!==null&&I(Se,e);var t=J.current,a=em(t,e.type);t!==a&&(I(se,e),I(J,a))}function Li(e){se.current===e&&(G(J),G(se)),Se.current===e&&(G(Se),fi._currentValue=ee)}var xl,ku;function Wa(e){if(xl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);xl=t&&t[1]||"",ku=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xl+e+ku}var Sl=!1;function jl(e,t){if(!e||Sl)return"";Sl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(M){var z=M}Reflect.construct(e,[],$)}else{try{$.call()}catch(M){z=M}e.call($.prototype)}}else{try{throw Error()}catch(M){z=M}($=e())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(M){if(M&&z&&typeof M.stack=="string")return[M.stack,z.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=i.DetermineComponentFrameRoot(),p=u[0],b=u[1];if(p&&b){var S=p.split(`
`),N=b.split(`
`);for(o=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;if(i===S.length||o===N.length)for(i=S.length-1,o=N.length-1;1<=i&&0<=o&&S[i]!==N[o];)o--;for(;1<=i&&0<=o;i--,o--)if(S[i]!==N[o]){if(i!==1||o!==1)do if(i--,o--,0>o||S[i]!==N[o]){var B=`
`+S[i].replace(" at new "," at ");return e.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",e.displayName)),B}while(1<=i&&0<=o);break}}}finally{Sl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wa(a):""}function cg(e,t){switch(e.tag){case 26:case 27:case 5:return Wa(e.type);case 16:return Wa("Lazy");case 13:return e.child!==t&&t!==null?Wa("Suspense Fallback"):Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 15:return jl(e.type,!1);case 11:return jl(e.type.render,!1);case 1:return jl(e.type,!0);case 31:return Wa("Activity");default:return""}}function Ou(e){try{var t="",a=null;do t+=cg(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var El=Object.prototype.hasOwnProperty,Tl=r.unstable_scheduleCallback,Al=r.unstable_cancelCallback,ug=r.unstable_shouldYield,dg=r.unstable_requestPaint,vt=r.unstable_now,hg=r.unstable_getCurrentPriorityLevel,Ru=r.unstable_ImmediatePriority,Nu=r.unstable_UserBlockingPriority,qi=r.unstable_NormalPriority,fg=r.unstable_LowPriority,Cu=r.unstable_IdlePriority,mg=r.log,pg=r.unstable_setDisableYieldValue,Er=null,bt=null;function ja(e){if(typeof mg=="function"&&pg(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Er,e)}catch{}}var _t=Math.clz32?Math.clz32:vg,gg=Math.log,yg=Math.LN2;function vg(e){return e>>>=0,e===0?32:31-(gg(e)/yg|0)|0}var Bi=256,Hi=262144,$i=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gi(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var o=0,u=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~u,i!==0?o=Fa(i):(p&=b,p!==0?o=Fa(p):a||(a=b&~e,a!==0&&(o=Fa(a))))):(b=i&~u,b!==0?o=Fa(b):p!==0?o=Fa(p):a||(a=i&~e,a!==0&&(o=Fa(a)))),o===0?0:t!==0&&t!==o&&(t&u)===0&&(u=o&-o,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:o}function Tr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(){var e=$i;return $i<<=1,($i&62914560)===0&&($i=4194304),e}function kl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ar(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _g(e,t,a,i,o,u){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,S=e.expirationTimes,N=e.hiddenUpdates;for(a=p&~a;0<a;){var B=31-_t(a),$=1<<B;b[B]=0,S[B]=-1;var z=N[B];if(z!==null)for(N[B]=null,B=0;B<z.length;B++){var M=z[B];M!==null&&(M.lane&=-536870913)}a&=~$}i!==0&&Uu(e,i,0),u!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=u&~(p&~t))}function Uu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-_t(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Du(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-_t(a),o=1<<i;o&t|e[i]&t&&(e[i]|=t),a&=~o}}function Mu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ol(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ol(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lu(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Sm(e.type))}function qu(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Ea=Math.random().toString(36).slice(2),We="__reactFiber$"+Ea,dt="__reactProps$"+Ea,Tn="__reactContainer$"+Ea,Nl="__reactEvents$"+Ea,wg="__reactListeners$"+Ea,xg="__reactHandles$"+Ea,Bu="__reactResources$"+Ea,kr="__reactMarker$"+Ea;function Cl(e){delete e[We],delete e[dt],delete e[Nl],delete e[wg],delete e[xg]}function An(e){var t=e[We];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Tn]||a[We]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=lm(e);e!==null;){if(a=e[We])return a;e=lm(e)}return t}e=a,a=e.parentNode}return null}function kn(e){if(e=e[We]||e[Tn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Or(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function On(e){var t=e[Bu];return t||(t=e[Bu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[kr]=!0}var Hu=new Set,$u={};function en(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for($u[e]=t,e=0;e<t.length;e++)Hu.add(t[e])}var Sg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gu={},Vu={};function jg(e){return El.call(Vu,e)?!0:El.call(Gu,e)?!1:Sg.test(e)?Vu[e]=!0:(Gu[e]=!0,!1)}function Vi(e,t,a){if(jg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Eg(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,u=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(p){a=""+p,u.call(this,p)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zl(e){if(!e._valueTracker){var t=Yu(e)?"checked":"value";e._valueTracker=Eg(e,t,""+e[t])}}function Ku(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Yu(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tg=/[\n"\\]/g;function Ct(e){return e.replace(Tg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ul(e,t,a,i,o,u,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),t!=null?p==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Nt(t)):e.value!==""+Nt(t)&&(e.value=""+Nt(t)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),t!=null?Dl(e,p,Nt(t)):a!=null?Dl(e,p,Nt(a)):i!=null&&e.removeAttribute("value"),o==null&&u!=null&&(e.defaultChecked=!!u),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Nt(b):e.removeAttribute("name")}function Iu(e,t,a,i,o,u,p,b){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){zl(e);return}a=a!=null?""+Nt(a):"",t=t!=null?""+Nt(t):a,b||t===e.value||(e.value=t),e.defaultValue=t}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),zl(e)}function Dl(e,t,a){t==="number"&&Ki(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Nn(e,t,a,i){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Nt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xu(e,t,a){if(t!=null&&(t=""+Nt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Nt(a):""}function Pu(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(l(92));if(ue(i)){if(1<i.length)throw Error(l(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Nt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),zl(e)}function Cn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ag=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qu(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Ag.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Ju(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in t)i=t[o],t.hasOwnProperty(o)&&a[o]!==i&&Qu(e,o,i)}else for(var u in t)t.hasOwnProperty(u)&&Qu(e,u,t[u])}function Ml(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return Og.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var Ll=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zn=null,Un=null;function Zu(e){var t=kn(e);if(t&&(e=t.stateNode)){var a=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ul(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var o=i[dt]||null;if(!o)throw Error(l(90));Ul(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Ku(i)}break e;case"textarea":Xu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Nn(e,!!a.multiple,t,!1)}}}var Bl=!1;function Wu(e,t,a){if(Bl)return e(t,a);Bl=!0;try{var i=e(t);return i}finally{if(Bl=!1,(zn!==null||Un!==null)&&(zs(),zn&&(t=zn,e=Un,Un=zn=null,Zu(t),e)))for(t=0;t<e.length;t++)Zu(e[t])}}function Rr(e,t){var a=e.stateNode;if(a===null)return null;var i=a[dt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=!1;if(ra)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Hl=!1}var Ta=null,$l=null,Xi=null;function Fu(){if(Xi)return Xi;var e,t=$l,a=t.length,i,o="value"in Ta?Ta.value:Ta.textContent,u=o.length;for(e=0;e<a&&t[e]===o[e];e++);var p=a-e;for(i=1;i<=p&&t[a-i]===o[u-i];i++);return Xi=o.slice(e,1<i?1-i:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function ed(){return!1}function ht(e){function t(a,i,o,u,p){this._reactName=a,this._targetInst=o,this.type=i,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(u):u[b]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Qi:ed,this.isPropagationStopped=ed,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=ht(tn),Cr=_({},tn,{view:0,detail:0}),Rg=ht(Cr),Gl,Vl,zr,Zi=_({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Gl=e.screenX-zr.screenX,Vl=e.screenY-zr.screenY):Vl=Gl=0,zr=e),Gl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),td=ht(Zi),Ng=_({},Zi,{dataTransfer:0}),Cg=ht(Ng),zg=_({},Cr,{relatedTarget:0}),Yl=ht(zg),Ug=_({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=ht(Ug),Mg=_({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lg=ht(Mg),qg=_({},tn,{data:0}),ad=ht(qg),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$g[e])?!!t[e]:!1}function Kl(){return Gg}var Vg=_({},Cr,{key:function(e){if(e.key){var t=Bg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yg=ht(Vg),Kg=_({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=ht(Kg),Ig=_({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Xg=ht(Ig),Pg=_({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=ht(Pg),Jg=_({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=ht(Jg),Wg=_({},tn,{newState:0,oldState:0}),Fg=ht(Wg),e0=[9,13,27,32],Il=ra&&"CompositionEvent"in window,Ur=null;ra&&"documentMode"in document&&(Ur=document.documentMode);var t0=ra&&"TextEvent"in window&&!Ur,rd=ra&&(!Il||Ur&&8<Ur&&11>=Ur),id=" ",sd=!1;function ld(e,t){switch(e){case"keyup":return e0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function a0(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(sd=!0,id);case"textInput":return e=t.data,e===id&&sd?null:e;default:return null}}function n0(e,t){if(Dn)return e==="compositionend"||!Il&&ld(e,t)?(e=Fu(),Xi=$l=Ta=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rd&&t.locale!=="ko"?null:t.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r0[e.type]:t==="textarea"}function ud(e,t,a,i){zn?Un?Un.push(i):Un=[i]:zn=i,t=Hs(t,"onChange"),0<t.length&&(a=new Ji("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Dr=null,Mr=null;function i0(e){Xf(e,0)}function Wi(e){var t=Or(e);if(Ku(t))return e}function dd(e,t){if(e==="change")return t}var hd=!1;if(ra){var Xl;if(ra){var Pl="oninput"in document;if(!Pl){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Pl=typeof fd.oninput=="function"}Xl=Pl}else Xl=!1;hd=Xl&&(!document.documentMode||9<document.documentMode)}function md(){Dr&&(Dr.detachEvent("onpropertychange",pd),Mr=Dr=null)}function pd(e){if(e.propertyName==="value"&&Wi(Mr)){var t=[];ud(t,Mr,e,ql(e)),Wu(i0,t)}}function s0(e,t,a){e==="focusin"?(md(),Dr=t,Mr=a,Dr.attachEvent("onpropertychange",pd)):e==="focusout"&&md()}function l0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Mr)}function o0(e,t){if(e==="click")return Wi(t)}function c0(e,t){if(e==="input"||e==="change")return Wi(t)}function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:u0;function Lr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var o=a[i];if(!El.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,t){var a=gd(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gd(a)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ki(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ki(e.document)}return t}function Ql(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var d0=ra&&"documentMode"in document&&11>=document.documentMode,Mn=null,Jl=null,qr=null,Zl=!1;function _d(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zl||Mn==null||Mn!==Ki(i)||(i=Mn,"selectionStart"in i&&Ql(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qr&&Lr(qr,i)||(qr=i,i=Hs(Jl,"onSelect"),0<i.length&&(t=new Ji("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Mn)))}function an(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ln={animationend:an("Animation","AnimationEnd"),animationiteration:an("Animation","AnimationIteration"),animationstart:an("Animation","AnimationStart"),transitionrun:an("Transition","TransitionRun"),transitionstart:an("Transition","TransitionStart"),transitioncancel:an("Transition","TransitionCancel"),transitionend:an("Transition","TransitionEnd")},Wl={},wd={};ra&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete Ln.animationend.animation,delete Ln.animationiteration.animation,delete Ln.animationstart.animation),"TransitionEvent"in window||delete Ln.transitionend.transition);function nn(e){if(Wl[e])return Wl[e];if(!Ln[e])return e;var t=Ln[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wd)return Wl[e]=t[a];return e}var xd=nn("animationend"),Sd=nn("animationiteration"),jd=nn("animationstart"),h0=nn("transitionrun"),f0=nn("transitionstart"),m0=nn("transitioncancel"),Ed=nn("transitionend"),Td=new Map,Fl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fl.push("scrollEnd");function Gt(e,t){Td.set(e,t),en(t,[e])}var Fi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zt=[],qn=0,eo=0;function es(){for(var e=qn,t=eo=qn=0;t<e;){var a=zt[t];zt[t++]=null;var i=zt[t];zt[t++]=null;var o=zt[t];zt[t++]=null;var u=zt[t];if(zt[t++]=null,i!==null&&o!==null){var p=i.pending;p===null?o.next=o:(o.next=p.next,p.next=o),i.pending=o}u!==0&&Ad(a,o,u)}}function ts(e,t,a,i){zt[qn++]=e,zt[qn++]=t,zt[qn++]=a,zt[qn++]=i,eo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function to(e,t,a,i){return ts(e,t,a,i),as(e)}function rn(e,t){return ts(e,null,null,t),as(e)}function Ad(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var o=!1,u=e.return;u!==null;)u.childLanes|=a,i=u.alternate,i!==null&&(i.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(o=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,o&&t!==null&&(o=31-_t(a),e=u.hiddenUpdates,i=e[o],i===null?e[o]=[t]:i.push(t),t.lane=a|536870912),u):null}function as(e){if(50<si)throw si=0,dc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Bn={};function p0(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,i){return new p0(e,t,a,i)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ns(e,t,a,i,o,u){var p=0;if(i=e,typeof e=="function")ao(e)&&(p=1);else if(typeof e=="string")p=_y(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case je:return e=xt(31,a,t,o),e.elementType=je,e.lanes=u,e;case O:return sn(a.children,o,u,t);case U:p=8,o|=24;break;case q:return e=xt(12,a,t,o|2),e.elementType=q,e.lanes=u,e;case F:return e=xt(13,a,t,o),e.elementType=F,e.lanes=u,e;case K:return e=xt(19,a,t,o),e.elementType=K,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:p=10;break e;case D:p=9;break e;case V:p=11;break e;case P:p=14;break e;case ve:p=16,i=null;break e}p=29,a=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=xt(p,a,t,o),t.elementType=e,t.type=i,t.lanes=u,t}function sn(e,t,a,i){return e=xt(7,e,i,t),e.lanes=a,e}function no(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function Od(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function ro(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Rd=new WeakMap;function Ut(e,t){if(typeof e=="object"&&e!==null){var a=Rd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ou(t)},Rd.set(e,t),t)}return{value:e,source:t,stack:Ou(t)}}var Hn=[],$n=0,rs=null,Br=0,Dt=[],Mt=0,Aa=null,Qt=1,Jt="";function sa(e,t){Hn[$n++]=Br,Hn[$n++]=rs,rs=e,Br=t}function Nd(e,t,a){Dt[Mt++]=Qt,Dt[Mt++]=Jt,Dt[Mt++]=Aa,Aa=e;var i=Qt;e=Jt;var o=32-_t(i)-1;i&=~(1<<o),a+=1;var u=32-_t(t)+o;if(30<u){var p=o-o%5;u=(i&(1<<p)-1).toString(32),i>>=p,o-=p,Qt=1<<32-_t(t)+o|a<<o|i,Jt=u+e}else Qt=1<<u|a<<o|i,Jt=e}function io(e){e.return!==null&&(sa(e,1),Nd(e,1,0))}function so(e){for(;e===rs;)rs=Hn[--$n],Hn[$n]=null,Br=Hn[--$n],Hn[$n]=null;for(;e===Aa;)Aa=Dt[--Mt],Dt[Mt]=null,Jt=Dt[--Mt],Dt[Mt]=null,Qt=Dt[--Mt],Dt[Mt]=null}function Cd(e,t){Dt[Mt++]=Qt,Dt[Mt++]=Jt,Dt[Mt++]=Aa,Qt=t.id,Jt=t.overflow,Aa=e}var Fe=null,Ce=null,ye=!1,ka=null,Lt=!1,lo=Error(l(519));function Oa(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hr(Ut(t,e)),lo}function zd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[We]=e,t[dt]=i,a){case"dialog":fe("cancel",t),fe("close",t);break;case"iframe":case"object":case"embed":fe("load",t);break;case"video":case"audio":for(a=0;a<oi.length;a++)fe(oi[a],t);break;case"source":fe("error",t);break;case"img":case"image":case"link":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"input":fe("invalid",t),Iu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":fe("invalid",t);break;case"textarea":fe("invalid",t),Pu(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||Zf(t.textContent,a)?(i.popover!=null&&(fe("beforetoggle",t),fe("toggle",t)),i.onScroll!=null&&fe("scroll",t),i.onScrollEnd!=null&&fe("scrollend",t),i.onClick!=null&&(t.onclick=na),t=!0):t=!1,t||Oa(e,!0)}function Ud(e){for(Fe=e.return;Fe;)switch(Fe.tag){case 5:case 31:case 13:Lt=!1;return;case 27:case 3:Lt=!0;return;default:Fe=Fe.return}}function Gn(e){if(e!==Fe)return!1;if(!ye)return Ud(e),ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tc(e.type,e.memoizedProps)),a=!a),a&&Ce&&Oa(e),Ud(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ce=sm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ce=sm(e)}else t===27?(t=Ce,Va(e.type)?(e=Nc,Nc=null,Ce=e):Ce=t):Ce=Fe?Bt(e.stateNode.nextSibling):null;return!0}function ln(){Ce=Fe=null,ye=!1}function oo(){var e=ka;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),ka=null),e}function Hr(e){ka===null?ka=[e]:ka.push(e)}var co=E(null),on=null,la=null;function Ra(e,t,a){I(co,t._currentValue),t._currentValue=a}function oa(e){e._currentValue=co.current,G(co)}function uo(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function ho(e,t,a,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){var p=o.child;u=u.firstContext;e:for(;u!==null;){var b=u;u=o;for(var S=0;S<t.length;S++)if(b.context===t[S]){u.lanes|=a,b=u.alternate,b!==null&&(b.lanes|=a),uo(u.return,a,e),i||(p=null);break e}u=b.next}}else if(o.tag===18){if(p=o.return,p===null)throw Error(l(341));p.lanes|=a,u=p.alternate,u!==null&&(u.lanes|=a),uo(p,a,e),p=null}else p=o.child;if(p!==null)p.return=o;else for(p=o;p!==null;){if(p===e){p=null;break}if(o=p.sibling,o!==null){o.return=p.return,p=o;break}p=p.return}o=p}}function Vn(e,t,a,i){e=null;for(var o=t,u=!1;o!==null;){if(!u){if((o.flags&524288)!==0)u=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var p=o.alternate;if(p===null)throw Error(l(387));if(p=p.memoizedProps,p!==null){var b=o.type;wt(o.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(o===Se.current){if(p=o.alternate,p===null)throw Error(l(387));p.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(fi):e=[fi])}o=o.return}e!==null&&ho(t,e,a,i),t.flags|=262144}function is(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cn(e){on=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Dd(on,e)}function ss(e,t){return on===null&&cn(e),Dd(e,t)}function Dd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},la===null){if(e===null)throw Error(l(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return a}var g0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},y0=r.unstable_scheduleCallback,v0=r.unstable_NormalPriority,Ge={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fo(){return{controller:new g0,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&y0(v0,function(){e.controller.abort()})}var Gr=null,mo=0,Yn=0,Kn=null;function b0(e,t){if(Gr===null){var a=Gr=[];mo=0,Yn=yc(),Kn={status:"pending",value:void 0,then:function(i){a.push(i)}}}return mo++,t.then(Md,Md),t}function Md(){if(--mo===0&&Gr!==null){Kn!==null&&(Kn.status="fulfilled");var e=Gr;Gr=null,Yn=0,Kn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _0(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(i.status="rejected",i.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),i}var Ld=L.S;L.S=function(e,t){wf=vt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&b0(e,t),Ld!==null&&Ld(e,t)};var un=E(null);function po(){var e=un.current;return e!==null?e:Re.pooledCache}function ls(e,t){t===null?I(un,un.current):I(un,t.pool)}function qd(){var e=po();return e===null?null:{parent:Ge._currentValue,pool:e}}var In=Error(l(460)),go=Error(l(474)),os=Error(l(542)),cs={then:function(){}};function Bd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(na,na),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gd(e),e;default:if(typeof t.status=="string")t.then(na,na);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=i}},function(i){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gd(e),e}throw hn=t,In}}function dn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(hn=a,In):a}}var hn=null;function $d(){if(hn===null)throw Error(l(459));var e=hn;return hn=null,e}function Gd(e){if(e===In||e===os)throw Error(l(483))}var Xn=null,Vr=0;function us(e){var t=Vr;return Vr+=1,Xn===null&&(Xn=[]),Hd(Xn,e,t)}function Yr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ds(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vd(e){function t(k,T){if(e){var R=k.deletions;R===null?(k.deletions=[T],k.flags|=16):R.push(T)}}function a(k,T){if(!e)return null;for(;T!==null;)t(k,T),T=T.sibling;return null}function i(k){for(var T=new Map;k!==null;)k.key!==null?T.set(k.key,k):T.set(k.index,k),k=k.sibling;return T}function o(k,T){return k=ia(k,T),k.index=0,k.sibling=null,k}function u(k,T,R){return k.index=R,e?(R=k.alternate,R!==null?(R=R.index,R<T?(k.flags|=67108866,T):R):(k.flags|=67108866,T)):(k.flags|=1048576,T)}function p(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function b(k,T,R,H){return T===null||T.tag!==6?(T=no(R,k.mode,H),T.return=k,T):(T=o(T,R),T.return=k,T)}function S(k,T,R,H){var te=R.type;return te===O?B(k,T,R.props.children,H,R.key):T!==null&&(T.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ve&&dn(te)===T.type)?(T=o(T,R.props),Yr(T,R),T.return=k,T):(T=ns(R.type,R.key,R.props,null,k.mode,H),Yr(T,R),T.return=k,T)}function N(k,T,R,H){return T===null||T.tag!==4||T.stateNode.containerInfo!==R.containerInfo||T.stateNode.implementation!==R.implementation?(T=ro(R,k.mode,H),T.return=k,T):(T=o(T,R.children||[]),T.return=k,T)}function B(k,T,R,H,te){return T===null||T.tag!==7?(T=sn(R,k.mode,H,te),T.return=k,T):(T=o(T,R),T.return=k,T)}function $(k,T,R){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=no(""+T,k.mode,R),T.return=k,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return R=ns(T.type,T.key,T.props,null,k.mode,R),Yr(R,T),R.return=k,R;case j:return T=ro(T,k.mode,R),T.return=k,T;case ve:return T=dn(T),$(k,T,R)}if(ue(T)||it(T))return T=sn(T,k.mode,R,null),T.return=k,T;if(typeof T.then=="function")return $(k,us(T),R);if(T.$$typeof===C)return $(k,ss(k,T),R);ds(k,T)}return null}function z(k,T,R,H){var te=T!==null?T.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return te!==null?null:b(k,T,""+R,H);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case w:return R.key===te?S(k,T,R,H):null;case j:return R.key===te?N(k,T,R,H):null;case ve:return R=dn(R),z(k,T,R,H)}if(ue(R)||it(R))return te!==null?null:B(k,T,R,H,null);if(typeof R.then=="function")return z(k,T,us(R),H);if(R.$$typeof===C)return z(k,T,ss(k,R),H);ds(k,R)}return null}function M(k,T,R,H,te){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return k=k.get(R)||null,b(T,k,""+H,te);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return k=k.get(H.key===null?R:H.key)||null,S(T,k,H,te);case j:return k=k.get(H.key===null?R:H.key)||null,N(T,k,H,te);case ve:return H=dn(H),M(k,T,R,H,te)}if(ue(H)||it(H))return k=k.get(R)||null,B(T,k,H,te,null);if(typeof H.then=="function")return M(k,T,R,us(H),te);if(H.$$typeof===C)return M(k,T,R,ss(T,H),te);ds(T,H)}return null}function Q(k,T,R,H){for(var te=null,_e=null,Z=T,ce=T=0,pe=null;Z!==null&&ce<R.length;ce++){Z.index>ce?(pe=Z,Z=null):pe=Z.sibling;var we=z(k,Z,R[ce],H);if(we===null){Z===null&&(Z=pe);break}e&&Z&&we.alternate===null&&t(k,Z),T=u(we,T,ce),_e===null?te=we:_e.sibling=we,_e=we,Z=pe}if(ce===R.length)return a(k,Z),ye&&sa(k,ce),te;if(Z===null){for(;ce<R.length;ce++)Z=$(k,R[ce],H),Z!==null&&(T=u(Z,T,ce),_e===null?te=Z:_e.sibling=Z,_e=Z);return ye&&sa(k,ce),te}for(Z=i(Z);ce<R.length;ce++)pe=M(Z,k,ce,R[ce],H),pe!==null&&(e&&pe.alternate!==null&&Z.delete(pe.key===null?ce:pe.key),T=u(pe,T,ce),_e===null?te=pe:_e.sibling=pe,_e=pe);return e&&Z.forEach(function(Pa){return t(k,Pa)}),ye&&sa(k,ce),te}function ae(k,T,R,H){if(R==null)throw Error(l(151));for(var te=null,_e=null,Z=T,ce=T=0,pe=null,we=R.next();Z!==null&&!we.done;ce++,we=R.next()){Z.index>ce?(pe=Z,Z=null):pe=Z.sibling;var Pa=z(k,Z,we.value,H);if(Pa===null){Z===null&&(Z=pe);break}e&&Z&&Pa.alternate===null&&t(k,Z),T=u(Pa,T,ce),_e===null?te=Pa:_e.sibling=Pa,_e=Pa,Z=pe}if(we.done)return a(k,Z),ye&&sa(k,ce),te;if(Z===null){for(;!we.done;ce++,we=R.next())we=$(k,we.value,H),we!==null&&(T=u(we,T,ce),_e===null?te=we:_e.sibling=we,_e=we);return ye&&sa(k,ce),te}for(Z=i(Z);!we.done;ce++,we=R.next())we=M(Z,k,ce,we.value,H),we!==null&&(e&&we.alternate!==null&&Z.delete(we.key===null?ce:we.key),T=u(we,T,ce),_e===null?te=we:_e.sibling=we,_e=we);return e&&Z.forEach(function(Ny){return t(k,Ny)}),ye&&sa(k,ce),te}function Oe(k,T,R,H){if(typeof R=="object"&&R!==null&&R.type===O&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case w:e:{for(var te=R.key;T!==null;){if(T.key===te){if(te=R.type,te===O){if(T.tag===7){a(k,T.sibling),H=o(T,R.props.children),H.return=k,k=H;break e}}else if(T.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===ve&&dn(te)===T.type){a(k,T.sibling),H=o(T,R.props),Yr(H,R),H.return=k,k=H;break e}a(k,T);break}else t(k,T);T=T.sibling}R.type===O?(H=sn(R.props.children,k.mode,H,R.key),H.return=k,k=H):(H=ns(R.type,R.key,R.props,null,k.mode,H),Yr(H,R),H.return=k,k=H)}return p(k);case j:e:{for(te=R.key;T!==null;){if(T.key===te)if(T.tag===4&&T.stateNode.containerInfo===R.containerInfo&&T.stateNode.implementation===R.implementation){a(k,T.sibling),H=o(T,R.children||[]),H.return=k,k=H;break e}else{a(k,T);break}else t(k,T);T=T.sibling}H=ro(R,k.mode,H),H.return=k,k=H}return p(k);case ve:return R=dn(R),Oe(k,T,R,H)}if(ue(R))return Q(k,T,R,H);if(it(R)){if(te=it(R),typeof te!="function")throw Error(l(150));return R=te.call(R),ae(k,T,R,H)}if(typeof R.then=="function")return Oe(k,T,us(R),H);if(R.$$typeof===C)return Oe(k,T,ss(k,R),H);ds(k,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,T!==null&&T.tag===6?(a(k,T.sibling),H=o(T,R),H.return=k,k=H):(a(k,T),H=no(R,k.mode,H),H.return=k,k=H),p(k)):a(k,T)}return function(k,T,R,H){try{Vr=0;var te=Oe(k,T,R,H);return Xn=null,te}catch(Z){if(Z===In||Z===os)throw Z;var _e=xt(29,Z,null,k.mode);return _e.lanes=H,_e.return=k,_e}}}var fn=Vd(!0),Yd=Vd(!1),Na=!1;function yo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(xe&2)!==0){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,t=as(e),Ad(e,null,a),t}return ts(e,i,t,a),as(e)}function Kr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Du(e,a)}}function bo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var o=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?o=u=p:u=u.next=p,a=a.next}while(a!==null);u===null?o=u=t:u=u.next=t}else o=u=t;a={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:u,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var _o=!1;function Ir(){if(_o){var e=Kn;if(e!==null)throw e}}function Xr(e,t,a,i){_o=!1;var o=e.updateQueue;Na=!1;var u=o.firstBaseUpdate,p=o.lastBaseUpdate,b=o.shared.pending;if(b!==null){o.shared.pending=null;var S=b,N=S.next;S.next=null,p===null?u=N:p.next=N,p=S;var B=e.alternate;B!==null&&(B=B.updateQueue,b=B.lastBaseUpdate,b!==p&&(b===null?B.firstBaseUpdate=N:b.next=N,B.lastBaseUpdate=S))}if(u!==null){var $=o.baseState;p=0,B=N=S=null,b=u;do{var z=b.lane&-536870913,M=z!==b.lane;if(M?(me&z)===z:(i&z)===z){z!==0&&z===Yn&&(_o=!0),B!==null&&(B=B.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Q=e,ae=b;z=t;var Oe=a;switch(ae.tag){case 1:if(Q=ae.payload,typeof Q=="function"){$=Q.call(Oe,$,z);break e}$=Q;break e;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=ae.payload,z=typeof Q=="function"?Q.call(Oe,$,z):Q,z==null)break e;$=_({},$,z);break e;case 2:Na=!0}}z=b.callback,z!==null&&(e.flags|=64,M&&(e.flags|=8192),M=o.callbacks,M===null?o.callbacks=[z]:M.push(z))}else M={lane:z,tag:b.tag,payload:b.payload,callback:b.callback,next:null},B===null?(N=B=M,S=$):B=B.next=M,p|=z;if(b=b.next,b===null){if(b=o.shared.pending,b===null)break;M=b,b=M.next,M.next=null,o.lastBaseUpdate=M,o.shared.pending=null}}while(!0);B===null&&(S=$),o.baseState=S,o.firstBaseUpdate=N,o.lastBaseUpdate=B,u===null&&(o.shared.lanes=0),qa|=p,e.lanes=p,e.memoizedState=$}}function Kd(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Id(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Kd(a[e],t)}var Pn=E(null),hs=E(0);function Xd(e,t){e=ya,I(hs,e),I(Pn,t),ya=e|t.baseLanes}function wo(){I(hs,ya),I(Pn,Pn.current)}function xo(){ya=hs.current,G(Pn),G(hs)}var St=E(null),qt=null;function Ua(e){var t=e.alternate;I(He,He.current&1),I(St,e),qt===null&&(t===null||Pn.current!==null||t.memoizedState!==null)&&(qt=e)}function So(e){I(He,He.current),I(St,e),qt===null&&(qt=e)}function Pd(e){e.tag===22?(I(He,He.current),I(St,e),qt===null&&(qt=e)):Da()}function Da(){I(He,He.current),I(St,St.current)}function jt(e){G(St),qt===e&&(qt=null),G(He)}var He=E(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Oc(a)||Rc(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=0,le=null,Ae=null,Ve=null,ms=!1,Qn=!1,mn=!1,ps=0,Pr=0,Jn=null,w0=0;function Me(){throw Error(l(321))}function jo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!wt(e[a],t[a]))return!1;return!0}function Eo(e,t,a,i,o,u){return ca=u,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Nh:Ho,mn=!1,u=a(i,o),mn=!1,Qn&&(u=Jd(t,a,i,o)),Qd(e),u}function Qd(e){L.H=Zr;var t=Ae!==null&&Ae.next!==null;if(ca=0,Ve=Ae=le=null,ms=!1,Pr=0,Jn=null,t)throw Error(l(300));e===null||Ye||(e=e.dependencies,e!==null&&is(e)&&(Ye=!0))}function Jd(e,t,a,i){le=e;var o=0;do{if(Qn&&(Jn=null),Pr=0,Qn=!1,25<=o)throw Error(l(301));if(o+=1,Ve=Ae=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}L.H=Ch,u=t(a,i)}while(Qn);return u}function x0(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Qr(t):t,e=e.useState()[0],(Ae!==null?Ae.memoizedState:null)!==e&&(le.flags|=1024),t}function To(){var e=ps!==0;return ps=0,e}function Ao(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ko(e){if(ms){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ms=!1}ca=0,Ve=Ae=le=null,Qn=!1,Pr=ps=0,Jn=null}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?le.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function $e(){if(Ae===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=Ve===null?le.memoizedState:Ve.next;if(t!==null)Ve=t,Ae=e;else{if(e===null)throw le.alternate===null?Error(l(467)):Error(l(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Ve===null?le.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qr(e){var t=Pr;return Pr+=1,Jn===null&&(Jn=[]),e=Hd(Jn,e,t),t=le,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Nh:Ho),e}function ys(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qr(e);if(e.$$typeof===C)return et(e)}throw Error(l(438,String(e)))}function Oo(e){var t=null,a=le.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=le.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=gs(),le.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ut;return t.index++,a}function ua(e,t){return typeof t=="function"?t(e):t}function vs(e){var t=$e();return Ro(t,Ae,e)}function Ro(e,t,a){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=a;var o=e.baseQueue,u=i.pending;if(u!==null){if(o!==null){var p=o.next;o.next=u.next,u.next=p}t.baseQueue=o=u,i.pending=null}if(u=e.baseState,o===null)e.memoizedState=u;else{t=o.next;var b=p=null,S=null,N=t,B=!1;do{var $=N.lane&-536870913;if($!==N.lane?(me&$)===$:(ca&$)===$){var z=N.revertLane;if(z===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),$===Yn&&(B=!0);else if((ca&z)===z){N=N.next,z===Yn&&(B=!0);continue}else $={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(b=S=$,p=u):S=S.next=$,le.lanes|=z,qa|=z;$=N.action,mn&&a(u,$),u=N.hasEagerState?N.eagerState:a(u,$)}else z={lane:$,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},S===null?(b=S=z,p=u):S=S.next=z,le.lanes|=$,qa|=$;N=N.next}while(N!==null&&N!==t);if(S===null?p=u:S.next=b,!wt(u,e.memoizedState)&&(Ye=!0,B&&(a=Kn,a!==null)))throw a;e.memoizedState=u,e.baseState=p,e.baseQueue=S,i.lastRenderedState=u}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function No(e){var t=$e(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var i=a.dispatch,o=a.pending,u=t.memoizedState;if(o!==null){a.pending=null;var p=o=o.next;do u=e(u,p.action),p=p.next;while(p!==o);wt(u,t.memoizedState)||(Ye=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,i]}function Zd(e,t,a){var i=le,o=$e(),u=ye;if(u){if(a===void 0)throw Error(l(407));a=a()}else a=t();var p=!wt((Ae||o).memoizedState,a);if(p&&(o.memoizedState=a,Ye=!0),o=o.queue,Uo(eh.bind(null,i,o,e),[e]),o.getSnapshot!==t||p||Ve!==null&&Ve.memoizedState.tag&1){if(i.flags|=2048,Zn(9,{destroy:void 0},Fd.bind(null,i,o,a,t),null),Re===null)throw Error(l(349));u||(ca&127)!==0||Wd(i,t,a)}return a}function Wd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=le.updateQueue,t===null?(t=gs(),le.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Fd(e,t,a,i){t.value=a,t.getSnapshot=i,th(t)&&ah(e)}function eh(e,t,a){return a(function(){th(t)&&ah(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!wt(e,a)}catch{return!0}}function ah(e){var t=rn(e,2);t!==null&&yt(t,e,2)}function Co(e){var t=ct();if(typeof e=="function"){var a=e;if(e=a(),mn){ja(!0);try{a()}finally{ja(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function nh(e,t,a,i){return e.baseState=a,Ro(e,Ae,typeof i=="function"?i:ua)}function S0(e,t,a,i,o){if(ws(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};L.T!==null?a(!0):u.isTransition=!1,i(u),a=t.pending,a===null?(u.next=t.pending=u,rh(t,u)):(u.next=a.next,t.pending=a.next=u)}}function rh(e,t){var a=t.action,i=t.payload,o=e.state;if(t.isTransition){var u=L.T,p={};L.T=p;try{var b=a(o,i),S=L.S;S!==null&&S(p,b),ih(e,t,b)}catch(N){zo(e,t,N)}finally{u!==null&&p.types!==null&&(u.types=p.types),L.T=u}}else try{u=a(o,i),ih(e,t,u)}catch(N){zo(e,t,N)}}function ih(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){sh(e,t,i)},function(i){return zo(e,t,i)}):sh(e,t,a)}function sh(e,t,a){t.status="fulfilled",t.value=a,lh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,rh(e,a)))}function zo(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,lh(t),t=t.next;while(t!==i)}e.action=null}function lh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oh(e,t){return t}function ch(e,t){if(ye){var a=Re.formState;if(a!==null){e:{var i=le;if(ye){if(Ce){t:{for(var o=Ce,u=Lt;o.nodeType!==8;){if(!u){o=null;break t}if(o=Bt(o.nextSibling),o===null){o=null;break t}}u=o.data,o=u==="F!"||u==="F"?o:null}if(o){Ce=Bt(o.nextSibling),i=o.data==="F!";break e}}Oa(i)}i=!1}i&&(t=a[0])}}return a=ct(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oh,lastRenderedState:t},a.queue=i,a=kh.bind(null,le,i),i.dispatch=a,i=Co(!1),u=Bo.bind(null,le,!1,i.queue),i=ct(),o={state:t,dispatch:null,action:e,pending:null},i.queue=o,a=S0.bind(null,le,o,u,a),o.dispatch=a,i.memoizedState=e,[t,a,!1]}function uh(e){var t=$e();return dh(t,Ae,e)}function dh(e,t,a){if(t=Ro(e,t,oh)[0],e=vs(ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Qr(t)}catch(p){throw p===In?os:p}else i=t;t=$e();var o=t.queue,u=o.dispatch;return a!==t.memoizedState&&(le.flags|=2048,Zn(9,{destroy:void 0},j0.bind(null,o,a),null)),[i,u,e]}function j0(e,t){e.action=t}function hh(e){var t=$e(),a=Ae;if(a!==null)return dh(t,a,e);$e(),t=t.memoizedState,a=$e();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Zn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=le.updateQueue,t===null&&(t=gs(),le.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function fh(){return $e().memoizedState}function bs(e,t,a,i){var o=ct();le.flags|=e,o.memoizedState=Zn(1|t,{destroy:void 0},a,i===void 0?null:i)}function _s(e,t,a,i){var o=$e();i=i===void 0?null:i;var u=o.memoizedState.inst;Ae!==null&&i!==null&&jo(i,Ae.memoizedState.deps)?o.memoizedState=Zn(t,u,a,i):(le.flags|=e,o.memoizedState=Zn(1|t,u,a,i))}function mh(e,t){bs(8390656,8,e,t)}function Uo(e,t){_s(2048,8,e,t)}function E0(e){le.flags|=4;var t=le.updateQueue;if(t===null)t=gs(),le.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function ph(e){var t=$e().memoizedState;return E0({ref:t,nextImpl:e}),function(){if((xe&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function gh(e,t){return _s(4,2,e,t)}function yh(e,t){return _s(4,4,e,t)}function vh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bh(e,t,a){a=a!=null?a.concat([e]):null,_s(4,4,vh.bind(null,t,e),a)}function Do(){}function _h(e,t){var a=$e();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&jo(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function wh(e,t){var a=$e();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&jo(t,i[1]))return i[0];if(i=e(),mn){ja(!0);try{e()}finally{ja(!1)}}return a.memoizedState=[i,t],i}function Mo(e,t,a){return a===void 0||(ca&1073741824)!==0&&(me&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Sf(),le.lanes|=e,qa|=e,a)}function xh(e,t,a,i){return wt(a,t)?a:Pn.current!==null?(e=Mo(e,a,i),wt(e,t)||(Ye=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(me&261930)===0?(Ye=!0,e.memoizedState=a):(e=Sf(),le.lanes|=e,qa|=e,t)}function Sh(e,t,a,i,o){var u=Y.p;Y.p=u!==0&&8>u?u:8;var p=L.T,b={};L.T=b,Bo(e,!1,t,a);try{var S=o(),N=L.S;if(N!==null&&N(b,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var B=_0(S,i);Jr(e,t,B,At(e))}else Jr(e,t,i,At(e))}catch($){Jr(e,t,{then:function(){},status:"rejected",reason:$},At())}finally{Y.p=u,p!==null&&b.types!==null&&(p.types=b.types),L.T=p}}function T0(){}function Lo(e,t,a,i){if(e.tag!==5)throw Error(l(476));var o=jh(e).queue;Sh(e,o,t,ee,a===null?T0:function(){return Eh(e),a(i)})}function jh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Eh(e){var t=jh(e);t.next===null&&(t=e.alternate.memoizedState),Jr(e,t.next.queue,{},At())}function qo(){return et(fi)}function Th(){return $e().memoizedState}function Ah(){return $e().memoizedState}function A0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=At();e=Ca(a);var i=za(t,e,a);i!==null&&(yt(i,t,a),Kr(i,t,a)),t={cache:fo()},e.payload=t;return}t=t.return}}function k0(e,t,a){var i=At();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ws(e)?Oh(t,a):(a=to(e,t,a,i),a!==null&&(yt(a,e,i),Rh(a,t,i)))}function kh(e,t,a){var i=At();Jr(e,t,a,i)}function Jr(e,t,a,i){var o={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ws(e))Oh(t,o);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var p=t.lastRenderedState,b=u(p,a);if(o.hasEagerState=!0,o.eagerState=b,wt(b,p))return ts(e,t,o,0),Re===null&&es(),!1}catch{}if(a=to(e,t,o,i),a!==null)return yt(a,e,i),Rh(a,t,i),!0}return!1}function Bo(e,t,a,i){if(i={lane:2,revertLane:yc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ws(e)){if(t)throw Error(l(479))}else t=to(e,a,i,2),t!==null&&yt(t,e,2)}function ws(e){var t=e.alternate;return e===le||t!==null&&t===le}function Oh(e,t){Qn=ms=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Rh(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Du(e,a)}}var Zr={readContext:et,use:ys,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me};Zr.useEffectEvent=Me;var Nh={readContext:et,use:ys,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:mh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,bs(4194308,4,vh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return bs(4194308,4,e,t)},useInsertionEffect:function(e,t){bs(4,2,e,t)},useMemo:function(e,t){var a=ct();t=t===void 0?null:t;var i=e();if(mn){ja(!0);try{e()}finally{ja(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=ct();if(a!==void 0){var o=a(t);if(mn){ja(!0);try{a(t)}finally{ja(!1)}}}else o=t;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=k0.bind(null,le,e),[i.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:function(e){e=Co(e);var t=e.queue,a=kh.bind(null,le,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Do,useDeferredValue:function(e,t){var a=ct();return Mo(a,e,t)},useTransition:function(){var e=Co(!1);return e=Sh.bind(null,le,e.queue,!0,!1),ct().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=le,o=ct();if(ye){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Re===null)throw Error(l(349));(me&127)!==0||Wd(i,t,a)}o.memoizedState=a;var u={value:a,getSnapshot:t};return o.queue=u,mh(eh.bind(null,i,u,e),[e]),i.flags|=2048,Zn(9,{destroy:void 0},Fd.bind(null,i,u,a,t),null),a},useId:function(){var e=ct(),t=Re.identifierPrefix;if(ye){var a=Jt,i=Qt;a=(i&~(1<<32-_t(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ps++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=w0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:qo,useFormState:ch,useActionState:ch,useOptimistic:function(e){var t=ct();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Bo.bind(null,le,!0,a),a.dispatch=t,[e,t]},useMemoCache:Oo,useCacheRefresh:function(){return ct().memoizedState=A0.bind(null,le)},useEffectEvent:function(e){var t=ct(),a={impl:e};return t.memoizedState=a,function(){if((xe&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},Ho={readContext:et,use:ys,useCallback:_h,useContext:et,useEffect:Uo,useImperativeHandle:bh,useInsertionEffect:gh,useLayoutEffect:yh,useMemo:wh,useReducer:vs,useRef:fh,useState:function(){return vs(ua)},useDebugValue:Do,useDeferredValue:function(e,t){var a=$e();return xh(a,Ae.memoizedState,e,t)},useTransition:function(){var e=vs(ua)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Qr(e),t]},useSyncExternalStore:Zd,useId:Th,useHostTransitionStatus:qo,useFormState:uh,useActionState:uh,useOptimistic:function(e,t){var a=$e();return nh(a,Ae,e,t)},useMemoCache:Oo,useCacheRefresh:Ah};Ho.useEffectEvent=ph;var Ch={readContext:et,use:ys,useCallback:_h,useContext:et,useEffect:Uo,useImperativeHandle:bh,useInsertionEffect:gh,useLayoutEffect:yh,useMemo:wh,useReducer:No,useRef:fh,useState:function(){return No(ua)},useDebugValue:Do,useDeferredValue:function(e,t){var a=$e();return Ae===null?Mo(a,e,t):xh(a,Ae.memoizedState,e,t)},useTransition:function(){var e=No(ua)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Qr(e),t]},useSyncExternalStore:Zd,useId:Th,useHostTransitionStatus:qo,useFormState:hh,useActionState:hh,useOptimistic:function(e,t){var a=$e();return Ae!==null?nh(a,Ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Oo,useCacheRefresh:Ah};Ch.useEffectEvent=ph;function $o(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Go={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=At(),o=Ca(i);o.payload=t,a!=null&&(o.callback=a),t=za(e,o,i),t!==null&&(yt(t,e,i),Kr(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=At(),o=Ca(i);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=za(e,o,i),t!==null&&(yt(t,e,i),Kr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=At(),i=Ca(a);i.tag=2,t!=null&&(i.callback=t),t=za(e,i,a),t!==null&&(yt(t,e,a),Kr(t,e,a))}};function zh(e,t,a,i,o,u,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,u,p):t.prototype&&t.prototype.isPureReactComponent?!Lr(a,i)||!Lr(o,u):!0}function Uh(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function pn(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}function Dh(e){Fi(e)}function Mh(e){console.error(e)}function Lh(e){Fi(e)}function xs(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qh(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Vo(e,t,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){xs(e,t)},a}function Bh(e){return e=Ca(e),e.tag=3,e}function Hh(e,t,a,i){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var u=i.value;e.payload=function(){return o(u)},e.callback=function(){qh(t,a,i)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){qh(t,a,i),typeof o!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function O0(e,t,a,i,o){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Vn(t,a,o,!0),a=St.current,a!==null){switch(a.tag){case 31:case 13:return qt===null?Us():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=o,i===cs?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),mc(e,i,o)),!1;case 22:return a.flags|=65536,i===cs?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),mc(e,i,o)),!1}throw Error(l(435,a.tag))}return mc(e,i,o),Us(),!1}if(ye)return t=St.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,i!==lo&&(e=Error(l(422),{cause:i}),Hr(Ut(e,a)))):(i!==lo&&(t=Error(l(423),{cause:i}),Hr(Ut(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=Ut(i,a),o=Vo(e.stateNode,i,o),bo(e,o),Le!==4&&(Le=2)),!1;var u=Error(l(520),{cause:i});if(u=Ut(u,a),ii===null?ii=[u]:ii.push(u),Le!==4&&(Le=2),t===null)return!0;i=Ut(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=Vo(a.stateNode,i,e),bo(a,e),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ba===null||!Ba.has(u))))return a.flags|=65536,o&=-o,a.lanes|=o,o=Bh(o),Hh(o,e,a,i),bo(a,o),!1}a=a.return}while(a!==null);return!1}var Yo=Error(l(461)),Ye=!1;function tt(e,t,a,i){t.child=e===null?Yd(t,null,a,i):fn(t,e.child,a,i)}function $h(e,t,a,i,o){a=a.render;var u=t.ref;if("ref"in i){var p={};for(var b in i)b!=="ref"&&(p[b]=i[b])}else p=i;return cn(t),i=Eo(e,t,a,p,u,o),b=To(),e!==null&&!Ye?(Ao(e,t,o),da(e,t,o)):(ye&&b&&io(t),t.flags|=1,tt(e,t,i,o),t.child)}function Gh(e,t,a,i,o){if(e===null){var u=a.type;return typeof u=="function"&&!ao(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,Vh(e,t,u,i,o)):(e=ns(a.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!Wo(e,o)){var p=u.memoizedProps;if(a=a.compare,a=a!==null?a:Lr,a(p,i)&&e.ref===t.ref)return da(e,t,o)}return t.flags|=1,e=ia(u,i),e.ref=t.ref,e.return=t,t.child=e}function Vh(e,t,a,i,o){if(e!==null){var u=e.memoizedProps;if(Lr(u,i)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=i=u,Wo(e,o))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,da(e,t,o)}return Ko(e,t,a,i,o)}function Yh(e,t,a,i){var o=i.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(i=t.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~u}else i=0,t.child=null;return Kh(e,t,u,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ls(t,u!==null?u.cachePool:null),u!==null?Xd(t,u):wo(),Pd(t);else return i=t.lanes=536870912,Kh(e,t,u!==null?u.baseLanes|a:a,a,i)}else u!==null?(ls(t,u.cachePool),Xd(t,u),Da(),t.memoizedState=null):(e!==null&&ls(t,null),wo(),Da());return tt(e,t,o,a),t.child}function Wr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kh(e,t,a,i,o){var u=po();return u=u===null?null:{parent:Ge._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},e!==null&&ls(t,null),wo(),Pd(t),e!==null&&Vn(e,t,i,!0),t.childLanes=o,null}function Ss(e,t){return t=Es({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ih(e,t,a){return fn(t,e.child,null,a),e=Ss(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function R0(e,t,a){var i=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ye){if(i.mode==="hidden")return e=Ss(t,i),t.lanes=536870912,Wr(null,e);if(So(t),(e=Ce)?(e=im(e,Lt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Qt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},a=Od(e),a.return=t,t.child=a,Fe=t,Ce=null)):e=null,e===null)throw Oa(t);return t.lanes=536870912,null}return Ss(t,i)}var u=e.memoizedState;if(u!==null){var p=u.dehydrated;if(So(t),o)if(t.flags&256)t.flags&=-257,t=Ih(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Ye||Vn(e,t,a,!1),o=(a&e.childLanes)!==0,Ye||o){if(i=Re,i!==null&&(p=Mu(i,a),p!==0&&p!==u.retryLane))throw u.retryLane=p,rn(e,p),yt(i,e,p),Yo;Us(),t=Ih(e,t,a)}else e=u.treeContext,Ce=Bt(p.nextSibling),Fe=t,ye=!0,ka=null,Lt=!1,e!==null&&Cd(t,e),t=Ss(t,i),t.flags|=4096;return t}return e=ia(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function js(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ko(e,t,a,i,o){return cn(t),a=Eo(e,t,a,i,void 0,o),i=To(),e!==null&&!Ye?(Ao(e,t,o),da(e,t,o)):(ye&&i&&io(t),t.flags|=1,tt(e,t,a,o),t.child)}function Xh(e,t,a,i,o,u){return cn(t),t.updateQueue=null,a=Jd(t,i,a,o),Qd(e),i=To(),e!==null&&!Ye?(Ao(e,t,u),da(e,t,u)):(ye&&i&&io(t),t.flags|=1,tt(e,t,a,u),t.child)}function Ph(e,t,a,i,o){if(cn(t),t.stateNode===null){var u=Bn,p=a.contextType;typeof p=="object"&&p!==null&&(u=et(p)),u=new a(i,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Go,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=i,u.state=t.memoizedState,u.refs={},yo(t),p=a.contextType,u.context=typeof p=="object"&&p!==null?et(p):Bn,u.state=t.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&($o(t,a,p,i),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&Go.enqueueReplaceState(u,u.state,null),Xr(t,i,u,o),Ir(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){u=t.stateNode;var b=t.memoizedProps,S=pn(a,b);u.props=S;var N=u.context,B=a.contextType;p=Bn,typeof B=="object"&&B!==null&&(p=et(B));var $=a.getDerivedStateFromProps;B=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,B||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b||N!==p)&&Uh(t,u,i,p),Na=!1;var z=t.memoizedState;u.state=z,Xr(t,i,u,o),Ir(),N=t.memoizedState,b||z!==N||Na?(typeof $=="function"&&($o(t,a,$,i),N=t.memoizedState),(S=Na||zh(t,a,S,i,z,N,p))?(B||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=N),u.props=i,u.state=N,u.context=p,i=S):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,vo(e,t),p=t.memoizedProps,B=pn(a,p),u.props=B,$=t.pendingProps,z=u.context,N=a.contextType,S=Bn,typeof N=="object"&&N!==null&&(S=et(N)),b=a.getDerivedStateFromProps,(N=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==$||z!==S)&&Uh(t,u,i,S),Na=!1,z=t.memoizedState,u.state=z,Xr(t,i,u,o),Ir();var M=t.memoizedState;p!==$||z!==M||Na||e!==null&&e.dependencies!==null&&is(e.dependencies)?(typeof b=="function"&&($o(t,a,b,i),M=t.memoizedState),(B=Na||zh(t,a,B,i,z,M,S)||e!==null&&e.dependencies!==null&&is(e.dependencies))?(N||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,M,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,M,S)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=M),u.props=i,u.state=M,u.context=S,i=B):(typeof u.componentDidUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),i=!1)}return u=i,js(e,t),i=(t.flags&128)!==0,u||i?(u=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&i?(t.child=fn(t,e.child,null,o),t.child=fn(t,null,a,o)):tt(e,t,a,o),t.memoizedState=u.state,e=t.child):e=da(e,t,o),e}function Qh(e,t,a,i){return ln(),t.flags|=256,tt(e,t,a,i),t.child}var Io={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xo(e){return{baseLanes:e,cachePool:qd()}}function Po(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Tt),e}function Jh(e,t,a){var i=t.pendingProps,o=!1,u=(t.flags&128)!==0,p;if((p=u)||(p=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),p&&(o=!0,t.flags&=-129),p=(t.flags&32)!==0,t.flags&=-33,e===null){if(ye){if(o?Ua(t):Da(),(e=Ce)?(e=im(e,Lt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Aa!==null?{id:Qt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},a=Od(e),a.return=t,t.child=a,Fe=t,Ce=null)):e=null,e===null)throw Oa(t);return Rc(e)?t.lanes=32:t.lanes=536870912,null}var b=i.children;return i=i.fallback,o?(Da(),o=t.mode,b=Es({mode:"hidden",children:b},o),i=sn(i,o,a,null),b.return=t,i.return=t,b.sibling=i,t.child=b,i=t.child,i.memoizedState=Xo(a),i.childLanes=Po(e,p,a),t.memoizedState=Io,Wr(null,i)):(Ua(t),Qo(t,b))}var S=e.memoizedState;if(S!==null&&(b=S.dehydrated,b!==null)){if(u)t.flags&256?(Ua(t),t.flags&=-257,t=Jo(e,t,a)):t.memoizedState!==null?(Da(),t.child=e.child,t.flags|=128,t=null):(Da(),b=i.fallback,o=t.mode,i=Es({mode:"visible",children:i.children},o),b=sn(b,o,a,null),b.flags|=2,i.return=t,b.return=t,i.sibling=b,t.child=i,fn(t,e.child,null,a),i=t.child,i.memoizedState=Xo(a),i.childLanes=Po(e,p,a),t.memoizedState=Io,t=Wr(null,i));else if(Ua(t),Rc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var N=p.dgst;p=N,i=Error(l(419)),i.stack="",i.digest=p,Hr({value:i,source:null,stack:null}),t=Jo(e,t,a)}else if(Ye||Vn(e,t,a,!1),p=(a&e.childLanes)!==0,Ye||p){if(p=Re,p!==null&&(i=Mu(p,a),i!==0&&i!==S.retryLane))throw S.retryLane=i,rn(e,i),yt(p,e,i),Yo;Oc(b)||Us(),t=Jo(e,t,a)}else Oc(b)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ce=Bt(b.nextSibling),Fe=t,ye=!0,ka=null,Lt=!1,e!==null&&Cd(t,e),t=Qo(t,i.children),t.flags|=4096);return t}return o?(Da(),b=i.fallback,o=t.mode,S=e.child,N=S.sibling,i=ia(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,N!==null?b=ia(N,b):(b=sn(b,o,a,null),b.flags|=2),b.return=t,i.return=t,i.sibling=b,t.child=i,Wr(null,i),i=t.child,b=e.child.memoizedState,b===null?b=Xo(a):(o=b.cachePool,o!==null?(S=Ge._currentValue,o=o.parent!==S?{parent:S,pool:S}:o):o=qd(),b={baseLanes:b.baseLanes|a,cachePool:o}),i.memoizedState=b,i.childLanes=Po(e,p,a),t.memoizedState=Io,Wr(e.child,i)):(Ua(t),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(p=t.deletions,p===null?(t.deletions=[e],t.flags|=16):p.push(e)),t.child=a,t.memoizedState=null,a)}function Qo(e,t){return t=Es({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Es(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function Jo(e,t,a){return fn(t,e.child,null,a),e=Qo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zh(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),uo(e.return,t,a)}function Zo(e,t,a,i,o,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:o,treeForkCount:u}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=a,p.tailMode=o,p.treeForkCount=u)}function Wh(e,t,a){var i=t.pendingProps,o=i.revealOrder,u=i.tail;i=i.children;var p=He.current,b=(p&2)!==0;if(b?(p=p&1|2,t.flags|=128):p&=1,I(He,p),tt(e,t,i,a),i=ye?Br:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zh(e,a,t);else if(e.tag===19)Zh(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&fs(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Zo(t,!1,o,a,u,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&fs(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Zo(t,!0,a,null,u,i);break;case"together":Zo(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function da(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Vn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=ia(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Wo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&is(e)))}function N0(e,t,a){switch(t.tag){case 3:ot(t,t.stateNode.containerInfo),Ra(t,Ge,e.memoizedState.cache),ln();break;case 27:case 5:jr(t);break;case 4:ot(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,So(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Jh(e,t,a):(Ua(t),e=da(e,t,a),e!==null?e.sibling:null);Ua(t);break;case 19:var o=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Vn(e,t,a,!1),i=(a&t.childLanes)!==0),o){if(i)return Wh(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),I(He,He.current),i)break;return null;case 22:return t.lanes=0,Yh(e,t,a,t.pendingProps);case 24:Ra(t,Ge,e.memoizedState.cache)}return da(e,t,a)}function Fh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!Wo(e,a)&&(t.flags&128)===0)return Ye=!1,N0(e,t,a);Ye=(e.flags&131072)!==0}else Ye=!1,ye&&(t.flags&1048576)!==0&&Nd(t,Br,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=dn(t.elementType),t.type=e,typeof e=="function")ao(e)?(i=pn(e,i),t.tag=1,t=Ph(null,t,e,i,a)):(t.tag=0,t=Ko(null,t,e,i,a));else{if(e!=null){var o=e.$$typeof;if(o===V){t.tag=11,t=$h(null,t,e,i,a);break e}else if(o===P){t.tag=14,t=Gh(null,t,e,i,a);break e}}throw t=X(e)||e,Error(l(306,t,""))}}return t;case 0:return Ko(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,o=pn(i,t.pendingProps),Ph(e,t,i,o,a);case 3:e:{if(ot(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var u=t.memoizedState;o=u.element,vo(e,t),Xr(t,i,null,a);var p=t.memoizedState;if(i=p.cache,Ra(t,Ge,i),i!==u.cache&&ho(t,[Ge],a,!0),Ir(),i=p.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:p.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Qh(e,t,i,a);break e}else if(i!==o){o=Ut(Error(l(424)),t),Hr(o),t=Qh(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Bt(e.firstChild),Fe=t,ye=!0,ka=null,Lt=!0,a=Yd(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ln(),i===o){t=da(e,t,a);break e}tt(e,t,i,a)}t=t.child}return t;case 26:return js(e,t),e===null?(a=dm(t.type,null,t.pendingProps,null))?t.memoizedState=a:ye||(a=t.type,e=t.pendingProps,i=$s(de.current).createElement(a),i[We]=t,i[dt]=e,at(i,a,e),Qe(i),t.stateNode=i):t.memoizedState=dm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return jr(t),e===null&&ye&&(i=t.stateNode=om(t.type,t.pendingProps,de.current),Fe=t,Lt=!0,o=Ce,Va(t.type)?(Nc=o,Ce=Bt(i.firstChild)):Ce=o),tt(e,t,t.pendingProps.children,a),js(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ye&&((o=i=Ce)&&(i=ly(i,t.type,t.pendingProps,Lt),i!==null?(t.stateNode=i,Fe=t,Ce=Bt(i.firstChild),Lt=!1,o=!0):o=!1),o||Oa(t)),jr(t),o=t.type,u=t.pendingProps,p=e!==null?e.memoizedProps:null,i=u.children,Tc(o,u)?i=null:p!==null&&Tc(o,p)&&(t.flags|=32),t.memoizedState!==null&&(o=Eo(e,t,x0,null,null,a),fi._currentValue=o),js(e,t),tt(e,t,i,a),t.child;case 6:return e===null&&ye&&((e=a=Ce)&&(a=oy(a,t.pendingProps,Lt),a!==null?(t.stateNode=a,Fe=t,Ce=null,e=!0):e=!1),e||Oa(t)),null;case 13:return Jh(e,t,a);case 4:return ot(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=fn(t,null,i,a):tt(e,t,i,a),t.child;case 11:return $h(e,t,t.type,t.pendingProps,a);case 7:return tt(e,t,t.pendingProps,a),t.child;case 8:return tt(e,t,t.pendingProps.children,a),t.child;case 12:return tt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ra(t,t.type,i.value),tt(e,t,i.children,a),t.child;case 9:return o=t.type._context,i=t.pendingProps.children,cn(t),o=et(o),i=i(o),t.flags|=1,tt(e,t,i,a),t.child;case 14:return Gh(e,t,t.type,t.pendingProps,a);case 15:return Vh(e,t,t.type,t.pendingProps,a);case 19:return Wh(e,t,a);case 31:return R0(e,t,a);case 22:return Yh(e,t,a,t.pendingProps);case 24:return cn(t),i=et(Ge),e===null?(o=po(),o===null&&(o=Re,u=fo(),o.pooledCache=u,u.refCount++,u!==null&&(o.pooledCacheLanes|=a),o=u),t.memoizedState={parent:i,cache:o},yo(t),Ra(t,Ge,o)):((e.lanes&a)!==0&&(vo(e,t),Xr(t,null,null,a),Ir()),o=e.memoizedState,u=t.memoizedState,o.parent!==i?(o={parent:i,cache:i},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Ra(t,Ge,i)):(i=u.cache,Ra(t,Ge,i),i!==o.cache&&ho(t,[Ge],a,!0))),tt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function ha(e){e.flags|=4}function Fo(e,t,a,i,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(Af())e.flags|=8192;else throw hn=cs,go}else e.flags&=-16777217}function ef(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gm(t))if(Af())e.flags|=8192;else throw hn=cs,go}function Ts(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zu():536870912,e.lanes|=t,tr|=t)}function Fr(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function C0(e,t,a){var i=t.pendingProps;switch(so(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),oa(Ge),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gn(t)?ha(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,oo())),ze(t),null;case 26:var o=t.type,u=t.memoizedState;return e===null?(ha(t),u!==null?(ze(t),ef(t,u)):(ze(t),Fo(t,o,null,i,a))):u?u!==e.memoizedState?(ha(t),ze(t),ef(t,u)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ha(t),ze(t),Fo(t,o,e,i,a)),null;case 27:if(Li(t),a=de.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return ze(t),null}e=J.current,Gn(t)?zd(t):(e=om(o,i,a),t.stateNode=e,ha(t))}return ze(t),null;case 5:if(Li(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return ze(t),null}if(u=J.current,Gn(t))zd(t);else{var p=$s(de.current);switch(u){case 1:u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":u=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":u=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":u=p.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?u.multiple=!0:i.size&&(u.size=i.size);break;default:u=typeof i.is=="string"?p.createElement(o,{is:i.is}):p.createElement(o)}}u[We]=t,u[dt]=i;e:for(p=t.child;p!==null;){if(p.tag===5||p.tag===6)u.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}t.stateNode=u;e:switch(at(u,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ha(t)}}return ze(t),Fo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ha(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=de.current,Gn(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,o=Fe,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[We]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||Zf(e.nodeValue,a)),e||Oa(t,!0)}else e=$s(e).createTextNode(i),e[We]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Gn(t),a!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[We]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Gn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[We]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else o=oo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==o&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Ts(t,t.updateQueue),ze(t),null);case 4:return Be(),e===null&&wc(t.stateNode.containerInfo),ze(t),null;case 10:return oa(t.type),ze(t),null;case 19:if(G(He),i=t.memoizedState,i===null)return ze(t),null;if(o=(t.flags&128)!==0,u=i.rendering,u===null)if(o)Fr(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=fs(e),u!==null){for(t.flags|=128,Fr(i,!1),e=u.updateQueue,t.updateQueue=e,Ts(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)kd(a,e),a=a.sibling;return I(He,He.current&1|2),ye&&sa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&vt()>Ns&&(t.flags|=128,o=!0,Fr(i,!1),t.lanes=4194304)}else{if(!o)if(e=fs(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Ts(t,e),Fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!ye)return ze(t),null}else 2*vt()-i.renderingStartTime>Ns&&a!==536870912&&(t.flags|=128,o=!0,Fr(i,!1),t.lanes=4194304);i.isBackwards?(u.sibling=t.child,t.child=u):(e=i.last,e!==null?e.sibling=u:t.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=vt(),e.sibling=null,a=He.current,I(He,o?a&1|2:a&1),ye&&sa(t,i.treeForkCount),e):(ze(t),null);case 22:case 23:return jt(t),xo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ts(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&G(un),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),oa(Ge),ze(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function z0(e,t){switch(so(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oa(Ge),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Li(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(l(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(He),null;case 4:return Be(),null;case 10:return oa(t.type),null;case 22:case 23:return jt(t),xo(),e!==null&&G(un),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return oa(Ge),null;case 25:return null;default:return null}}function tf(e,t){switch(so(t),t.tag){case 3:oa(Ge),Be();break;case 26:case 27:case 5:Li(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:G(He);break;case 10:oa(t.type);break;case 22:case 23:jt(t),xo(),e!==null&&G(un);break;case 24:oa(Ge)}}function ei(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var o=i.next;a=o;do{if((a.tag&e)===e){i=void 0;var u=a.create,p=a.inst;i=u(),p.destroy=i}a=a.next}while(a!==o)}}catch(b){Te(t,t.return,b)}}function Ma(e,t,a){try{var i=t.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var u=o.next;i=u;do{if((i.tag&e)===e){var p=i.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,o=t;var S=a,N=b;try{N()}catch(B){Te(o,S,B)}}}i=i.next}while(i!==u)}}catch(B){Te(t,t.return,B)}}function af(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Id(t,a)}catch(i){Te(e,e.return,i)}}}function nf(e,t,a){a.props=pn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Te(e,t,i)}}function ti(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(o){Te(e,t,o)}}function Zt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(o){Te(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){Te(e,t,o)}else a.current=null}function rf(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(o){Te(e,e.return,o)}}function ec(e,t,a){try{var i=e.stateNode;ty(i,e.type,a,t),i[dt]=t}catch(o){Te(e,e.return,o)}}function sf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Va(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=na));else if(i!==4&&(i===27&&Va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ac(e,t,a),e=e.sibling;e!==null;)ac(e,t,a),e=e.sibling}function As(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(As(e,t,a),e=e.sibling;e!==null;)As(e,t,a),e=e.sibling}function lf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);at(t,i,a),t[We]=e,t[dt]=a}catch(u){Te(e,e.return,u)}}var fa=!1,Ke=!1,nc=!1,of=typeof WeakSet=="function"?WeakSet:Set,Je=null;function U0(e,t){if(e=e.containerInfo,jc=Ps,e=bd(e),Ql(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var o=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var p=0,b=-1,S=-1,N=0,B=0,$=e,z=null;t:for(;;){for(var M;$!==a||o!==0&&$.nodeType!==3||(b=p+o),$!==u||i!==0&&$.nodeType!==3||(S=p+i),$.nodeType===3&&(p+=$.nodeValue.length),(M=$.firstChild)!==null;)z=$,$=M;for(;;){if($===e)break t;if(z===a&&++N===o&&(b=p),z===u&&++B===i&&(S=p),(M=$.nextSibling)!==null)break;$=z,z=$.parentNode}$=M}a=b===-1||S===-1?null:{start:b,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ec={focusedElem:e,selectionRange:a},Ps=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)o=e[a],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,a=t,o=u.memoizedProps,u=u.memoizedState,i=a.stateNode;try{var Q=pn(a.type,o);e=i.getSnapshotBeforeUpdate(Q,u),i.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Te(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function cf(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),i&4&&ei(5,a);break;case 1:if(pa(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(p){Te(a,a.return,p)}else{var o=pn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Te(a,a.return,p)}}i&64&&af(a),i&512&&ti(a,a.return);break;case 3:if(pa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Id(e,t)}catch(p){Te(a,a.return,p)}}break;case 27:t===null&&i&4&&lf(a);case 26:case 5:pa(e,a),t===null&&i&4&&rf(a),i&512&&ti(a,a.return);break;case 12:pa(e,a);break;case 31:pa(e,a),i&4&&hf(e,a);break;case 13:pa(e,a),i&4&&ff(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=V0.bind(null,a),cy(e,a))));break;case 22:if(i=a.memoizedState!==null||fa,!i){t=t!==null&&t.memoizedState!==null||Ke,o=fa;var u=Ke;fa=i,(Ke=t)&&!u?ga(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),fa=o,Ke=u}break;case 30:break;default:pa(e,a)}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Cl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ue=null,ft=!1;function ma(e,t,a){for(a=a.child;a!==null;)df(e,t,a),a=a.sibling}function df(e,t,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Er,a)}catch{}switch(a.tag){case 26:Ke||Zt(a,t),ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ke||Zt(a,t);var i=Ue,o=ft;Va(a.type)&&(Ue=a.stateNode,ft=!1),ma(e,t,a),ui(a.stateNode),Ue=i,ft=o;break;case 5:Ke||Zt(a,t);case 6:if(i=Ue,o=ft,Ue=null,ma(e,t,a),Ue=i,ft=o,Ue!==null)if(ft)try{(Ue.nodeType===9?Ue.body:Ue.nodeName==="HTML"?Ue.ownerDocument.body:Ue).removeChild(a.stateNode)}catch(u){Te(a,t,u)}else try{Ue.removeChild(a.stateNode)}catch(u){Te(a,t,u)}break;case 18:Ue!==null&&(ft?(e=Ue,nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cr(e)):nm(Ue,a.stateNode));break;case 4:i=Ue,o=ft,Ue=a.stateNode.containerInfo,ft=!0,ma(e,t,a),Ue=i,ft=o;break;case 0:case 11:case 14:case 15:Ma(2,a,t),Ke||Ma(4,a,t),ma(e,t,a);break;case 1:Ke||(Zt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&nf(a,t,i)),ma(e,t,a);break;case 21:ma(e,t,a);break;case 22:Ke=(i=Ke)||a.memoizedState!==null,ma(e,t,a),Ke=i;break;default:ma(e,t,a)}}function hf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cr(e)}catch(a){Te(t,t.return,a)}}}function ff(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cr(e)}catch(a){Te(t,t.return,a)}}function D0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new of),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new of),t;default:throw Error(l(435,e.tag))}}function ks(e,t){var a=D0(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var o=Y0.bind(null,e,i);i.then(o,o)}})}function mt(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var o=a[i],u=e,p=t,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(Va(b.type)){Ue=b.stateNode,ft=!1;break e}break;case 5:Ue=b.stateNode,ft=!1;break e;case 3:case 4:Ue=b.stateNode.containerInfo,ft=!0;break e}b=b.return}if(Ue===null)throw Error(l(160));df(u,p,o),Ue=null,ft=!1,u=o.alternate,u!==null&&(u.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)mf(t,e),t=t.sibling}var Vt=null;function mf(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),i&4&&(Ma(3,e,e.return),ei(3,e),Ma(5,e,e.return));break;case 1:mt(t,e),pt(e),i&512&&(Ke||a===null||Zt(a,a.return)),i&64&&fa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var o=Vt;if(mt(t,e),pt(e),i&512&&(Ke||a===null||Zt(a,a.return)),i&4){var u=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":u=o.getElementsByTagName("title")[0],(!u||u[kr]||u[We]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=o.createElement(i),o.head.insertBefore(u,o.querySelector("head > title"))),at(u,i,a),u[We]=e,Qe(u),i=u;break e;case"link":var p=mm("link","href",o).get(i+(a.href||""));if(p){for(var b=0;b<p.length;b++)if(u=p[b],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(b,1);break t}}u=o.createElement(i),at(u,i,a),o.head.appendChild(u);break;case"meta":if(p=mm("meta","content",o).get(i+(a.content||""))){for(b=0;b<p.length;b++)if(u=p[b],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(b,1);break t}}u=o.createElement(i),at(u,i,a),o.head.appendChild(u);break;default:throw Error(l(468,i))}u[We]=e,Qe(u),i=u}e.stateNode=i}else pm(o,e.type,e.stateNode);else e.stateNode=fm(o,i,e.memoizedProps);else u!==i?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,i===null?pm(o,e.type,e.stateNode):fm(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ec(e,e.memoizedProps,a.memoizedProps)}break;case 27:mt(t,e),pt(e),i&512&&(Ke||a===null||Zt(a,a.return)),a!==null&&i&4&&ec(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mt(t,e),pt(e),i&512&&(Ke||a===null||Zt(a,a.return)),e.flags&32){o=e.stateNode;try{Cn(o,"")}catch(Q){Te(e,e.return,Q)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,ec(e,o,a!==null?a.memoizedProps:o)),i&1024&&(nc=!0);break;case 6:if(mt(t,e),pt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(Q){Te(e,e.return,Q)}}break;case 3:if(Ys=null,o=Vt,Vt=Gs(t.containerInfo),mt(t,e),Vt=o,pt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(Q){Te(e,e.return,Q)}nc&&(nc=!1,pf(e));break;case 4:i=Vt,Vt=Gs(e.stateNode.containerInfo),mt(t,e),pt(e),Vt=i;break;case 12:mt(t,e),pt(e);break;case 31:mt(t,e),pt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ks(e,i)));break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rs=vt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ks(e,i)));break;case 22:o=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,N=fa,B=Ke;if(fa=N||o,Ke=B||S,mt(t,e),Ke=B,fa=N,pt(e),i&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||S||fa||Ke||gn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(u=S.stateNode,o)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=S.stateNode;var $=S.memoizedProps.style,z=$!=null&&$.hasOwnProperty("display")?$.display:null;b.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(Q){Te(S,S.return,Q)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=o?"":S.memoizedProps}catch(Q){Te(S,S.return,Q)}}}else if(t.tag===18){if(a===null){S=t;try{var M=S.stateNode;o?rm(M,!0):rm(S.stateNode,!1)}catch(Q){Te(S,S.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,ks(e,a))));break;case 19:mt(t,e),pt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ks(e,i)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(sf(i)){a=i;break}i=i.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var o=a.stateNode,u=tc(e);As(e,u,o);break;case 5:var p=a.stateNode;a.flags&32&&(Cn(p,""),a.flags&=-33);var b=tc(e);As(e,b,p);break;case 3:case 4:var S=a.stateNode.containerInfo,N=tc(e);ac(e,N,S);break;default:throw Error(l(161))}}catch(B){Te(e,e.return,B)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;pf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cf(e,t.alternate,t),t=t.sibling}function gn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ma(4,t,t.return),gn(t);break;case 1:Zt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&nf(t,t.return,a),gn(t);break;case 27:ui(t.stateNode);case 26:case 5:Zt(t,t.return),gn(t);break;case 22:t.memoizedState===null&&gn(t);break;case 30:gn(t);break;default:gn(t)}e=e.sibling}}function ga(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,o=e,u=t,p=u.flags;switch(u.tag){case 0:case 11:case 15:ga(o,u,a),ei(4,u);break;case 1:if(ga(o,u,a),i=u,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(N){Te(i,i.return,N)}if(i=u,o=i.updateQueue,o!==null){var b=i.stateNode;try{var S=o.shared.hiddenCallbacks;if(S!==null)for(o.shared.hiddenCallbacks=null,o=0;o<S.length;o++)Kd(S[o],b)}catch(N){Te(i,i.return,N)}}a&&p&64&&af(u),ti(u,u.return);break;case 27:lf(u);case 26:case 5:ga(o,u,a),a&&i===null&&p&4&&rf(u),ti(u,u.return);break;case 12:ga(o,u,a);break;case 31:ga(o,u,a),a&&p&4&&hf(o,u);break;case 13:ga(o,u,a),a&&p&4&&ff(o,u);break;case 22:u.memoizedState===null&&ga(o,u,a),ti(u,u.return);break;case 30:break;default:ga(o,u,a)}t=t.sibling}}function rc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function ic(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$r(e))}function Yt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)gf(e,t,a,i),t=t.sibling}function gf(e,t,a,i){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,a,i),o&2048&&ei(9,t);break;case 1:Yt(e,t,a,i);break;case 3:Yt(e,t,a,i),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$r(e)));break;case 12:if(o&2048){Yt(e,t,a,i),e=t.stateNode;try{var u=t.memoizedProps,p=u.id,b=u.onPostCommit;typeof b=="function"&&b(p,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Te(t,t.return,S)}}else Yt(e,t,a,i);break;case 31:Yt(e,t,a,i);break;case 13:Yt(e,t,a,i);break;case 23:break;case 22:u=t.stateNode,p=t.alternate,t.memoizedState!==null?u._visibility&2?Yt(e,t,a,i):ai(e,t):u._visibility&2?Yt(e,t,a,i):(u._visibility|=2,Wn(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),o&2048&&rc(p,t);break;case 24:Yt(e,t,a,i),o&2048&&ic(t.alternate,t);break;default:Yt(e,t,a,i)}}function Wn(e,t,a,i,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,p=t,b=a,S=i,N=p.flags;switch(p.tag){case 0:case 11:case 15:Wn(u,p,b,S,o),ei(8,p);break;case 23:break;case 22:var B=p.stateNode;p.memoizedState!==null?B._visibility&2?Wn(u,p,b,S,o):ai(u,p):(B._visibility|=2,Wn(u,p,b,S,o)),o&&N&2048&&rc(p.alternate,p);break;case 24:Wn(u,p,b,S,o),o&&N&2048&&ic(p.alternate,p);break;default:Wn(u,p,b,S,o)}t=t.sibling}}function ai(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,o=i.flags;switch(i.tag){case 22:ai(a,i),o&2048&&rc(i.alternate,i);break;case 24:ai(a,i),o&2048&&ic(i.alternate,i);break;default:ai(a,i)}t=t.sibling}}var ni=8192;function Fn(e,t,a){if(e.subtreeFlags&ni)for(e=e.child;e!==null;)yf(e,t,a),e=e.sibling}function yf(e,t,a){switch(e.tag){case 26:Fn(e,t,a),e.flags&ni&&e.memoizedState!==null&&wy(a,Vt,e.memoizedState,e.memoizedProps);break;case 5:Fn(e,t,a);break;case 3:case 4:var i=Vt;Vt=Gs(e.stateNode.containerInfo),Fn(e,t,a),Vt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ni,ni=16777216,Fn(e,t,a),ni=i):Fn(e,t,a));break;default:Fn(e,t,a)}}function vf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Je=i,_f(i,e)}vf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bf(e),e=e.sibling}function bf(e){switch(e.tag){case 0:case 11:case 15:ri(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:ri(e);break;case 12:ri(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Os(e)):ri(e);break;default:ri(e)}}function Os(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Je=i,_f(i,e)}vf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),Os(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Os(t));break;default:Os(t)}e=e.sibling}}function _f(e,t){for(;Je!==null;){var a=Je;switch(a.tag){case 0:case 11:case 15:Ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:$r(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Je=i;else e:for(a=e;Je!==null;){i=Je;var o=i.sibling,u=i.return;if(uf(i),i===a){Je=null;break e}if(o!==null){o.return=u,Je=o;break e}Je=u}}}var M0={getCacheForType:function(e){var t=et(Ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return et(Ge).controller.signal}},L0=typeof WeakMap=="function"?WeakMap:Map,xe=0,Re=null,he=null,me=0,Ee=0,Et=null,La=!1,er=!1,sc=!1,ya=0,Le=0,qa=0,yn=0,lc=0,Tt=0,tr=0,ii=null,gt=null,oc=!1,Rs=0,wf=0,Ns=1/0,Cs=null,Ba=null,Xe=0,Ha=null,ar=null,va=0,cc=0,uc=null,xf=null,si=0,dc=null;function At(){return(xe&2)!==0&&me!==0?me&-me:L.T!==null?yc():Lu()}function Sf(){if(Tt===0)if((me&536870912)===0||ye){var e=Hi;Hi<<=1,(Hi&3932160)===0&&(Hi=262144),Tt=e}else Tt=536870912;return e=St.current,e!==null&&(e.flags|=32),Tt}function yt(e,t,a){(e===Re&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(nr(e,0),$a(e,me,Tt,!1)),Ar(e,a),((xe&2)===0||e!==Re)&&(e===Re&&((xe&2)===0&&(yn|=a),Le===4&&$a(e,me,Tt,!1)),Wt(e))}function jf(e,t,a){if((xe&6)!==0)throw Error(l(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Tr(e,t),o=i?H0(e,t):fc(e,t,!0),u=i;do{if(o===0){er&&!i&&$a(e,t,0,!1);break}else{if(a=e.current.alternate,u&&!q0(a)){o=fc(e,t,!1),u=!1;continue}if(o===2){if(u=t,e.errorRecoveryDisabledLanes&u)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){t=p;e:{var b=e;o=ii;var S=b.current.memoizedState.isDehydrated;if(S&&(nr(b,p).flags|=256),p=fc(b,p,!1),p!==2){if(sc&&!S){b.errorRecoveryDisabledLanes|=u,yn|=u,o=4;break e}u=gt,gt=o,u!==null&&(gt===null?gt=u:gt.push.apply(gt,u))}o=p}if(u=!1,o!==2)continue}}if(o===1){nr(e,0),$a(e,t,0,!0);break}e:{switch(i=e,u=o,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:$a(i,t,Tt,!La);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(o=Rs+300-vt(),10<o)){if($a(i,t,Tt,!La),Gi(i,0,!0)!==0)break e;va=t,i.timeoutHandle=tm(Ef.bind(null,i,a,gt,Cs,oc,t,Tt,yn,tr,La,u,"Throttled",-0,0),o);break e}Ef(i,a,gt,Cs,oc,t,Tt,yn,tr,La,u,null,-0,0)}}break}while(!0);Wt(e)}function Ef(e,t,a,i,o,u,p,b,S,N,B,$,z,M){if(e.timeoutHandle=-1,$=t.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},yf(t,u,$);var Q=(u&62914560)===u?Rs-vt():(u&4194048)===u?wf-vt():0;if(Q=xy($,Q),Q!==null){va=u,e.cancelPendingCommit=Q(zf.bind(null,e,t,u,a,i,o,p,b,S,B,$,null,z,M)),$a(e,u,p,!N);return}}zf(e,t,u,a,i,o,p,b,S)}function q0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var o=a[i],u=o.getSnapshot;o=o.value;try{if(!wt(u(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $a(e,t,a,i){t&=~lc,t&=~yn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var o=t;0<o;){var u=31-_t(o),p=1<<u;i[u]=-1,o&=~p}a!==0&&Uu(e,a,t)}function zs(){return(xe&6)===0?(li(0),!1):!0}function hc(){if(he!==null){if(Ee===0)var e=he.return;else e=he,la=on=null,ko(e),Xn=null,Vr=0,e=he;for(;e!==null;)tf(e.alternate,e),e=e.return;he=null}}function nr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ry(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),va=0,hc(),Re=e,he=a=ia(e.current,null),me=t,Ee=0,Et=null,La=!1,er=Tr(e,t),sc=!1,tr=Tt=lc=yn=qa=Le=0,gt=ii=null,oc=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var o=31-_t(i),u=1<<o;t|=e[o],i&=~u}return ya=t,es(),a}function Tf(e,t){le=null,L.H=Zr,t===In||t===os?(t=$d(),Ee=3):t===go?(t=$d(),Ee=4):Ee=t===Yo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,he===null&&(Le=1,xs(e,Ut(t,e.current)))}function Af(){var e=St.current;return e===null?!0:(me&4194048)===me?qt===null:(me&62914560)===me||(me&536870912)!==0?e===qt:!1}function kf(){var e=L.H;return L.H=Zr,e===null?Zr:e}function Of(){var e=L.A;return L.A=M0,e}function Us(){Le=4,La||(me&4194048)!==me&&St.current!==null||(er=!0),(qa&134217727)===0&&(yn&134217727)===0||Re===null||$a(Re,me,Tt,!1)}function fc(e,t,a){var i=xe;xe|=2;var o=kf(),u=Of();(Re!==e||me!==t)&&(Cs=null,nr(e,t)),t=!1;var p=Le;e:do try{if(Ee!==0&&he!==null){var b=he,S=Et;switch(Ee){case 8:hc(),p=6;break e;case 3:case 2:case 9:case 6:St.current===null&&(t=!0);var N=Ee;if(Ee=0,Et=null,rr(e,b,S,N),a&&er){p=0;break e}break;default:N=Ee,Ee=0,Et=null,rr(e,b,S,N)}}B0(),p=Le;break}catch(B){Tf(e,B)}while(!0);return t&&e.shellSuspendCounter++,la=on=null,xe=i,L.H=o,L.A=u,he===null&&(Re=null,me=0,es()),p}function B0(){for(;he!==null;)Rf(he)}function H0(e,t){var a=xe;xe|=2;var i=kf(),o=Of();Re!==e||me!==t?(Cs=null,Ns=vt()+500,nr(e,t)):er=Tr(e,t);e:do try{if(Ee!==0&&he!==null){t=he;var u=Et;t:switch(Ee){case 1:Ee=0,Et=null,rr(e,t,u,1);break;case 2:case 9:if(Bd(u)){Ee=0,Et=null,Nf(t);break}t=function(){Ee!==2&&Ee!==9||Re!==e||(Ee=7),Wt(e)},u.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:Bd(u)?(Ee=0,Et=null,Nf(t)):(Ee=0,Et=null,rr(e,t,u,7));break;case 5:var p=null;switch(he.tag){case 26:p=he.memoizedState;case 5:case 27:var b=he;if(p?gm(p):b.stateNode.complete){Ee=0,Et=null;var S=b.sibling;if(S!==null)he=S;else{var N=b.return;N!==null?(he=N,Ds(N)):he=null}break t}}Ee=0,Et=null,rr(e,t,u,5);break;case 6:Ee=0,Et=null,rr(e,t,u,6);break;case 8:hc(),Le=6;break e;default:throw Error(l(462))}}$0();break}catch(B){Tf(e,B)}while(!0);return la=on=null,L.H=i,L.A=o,xe=a,he!==null?0:(Re=null,me=0,es(),Le)}function $0(){for(;he!==null&&!ug();)Rf(he)}function Rf(e){var t=Fh(e.alternate,e,ya);e.memoizedProps=e.pendingProps,t===null?Ds(e):he=t}function Nf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Xh(a,t,t.pendingProps,t.type,void 0,me);break;case 11:t=Xh(a,t,t.pendingProps,t.type.render,t.ref,me);break;case 5:ko(t);default:tf(a,t),t=he=kd(t,ya),t=Fh(a,t,ya)}e.memoizedProps=e.pendingProps,t===null?Ds(e):he=t}function rr(e,t,a,i){la=on=null,ko(t),Xn=null,Vr=0;var o=t.return;try{if(O0(e,o,t,a,me)){Le=1,xs(e,Ut(a,e.current)),he=null;return}}catch(u){if(o!==null)throw he=o,u;Le=1,xs(e,Ut(a,e.current)),he=null;return}t.flags&32768?(ye||i===1?e=!0:er||(me&536870912)!==0?e=!1:(La=e=!0,(i===2||i===9||i===3||i===6)&&(i=St.current,i!==null&&i.tag===13&&(i.flags|=16384))),Cf(t,e)):Ds(t)}function Ds(e){var t=e;do{if((t.flags&32768)!==0){Cf(t,La);return}e=t.return;var a=C0(t.alternate,t,ya);if(a!==null){he=a;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);Le===0&&(Le=5)}function Cf(e,t){do{var a=z0(e.alternate,e);if(a!==null){a.flags&=32767,he=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){he=e;return}he=e=a}while(e!==null);Le=6,he=null}function zf(e,t,a,i,o,u,p,b,S){e.cancelPendingCommit=null;do Ms();while(Xe!==0);if((xe&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=eo,_g(e,a,u,p,b,S),e===Re&&(he=Re=null,me=0),ar=t,Ha=e,va=a,cc=u,uc=o,xf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,K0(qi,function(){return qf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=L.T,L.T=null,o=Y.p,Y.p=2,p=xe,xe|=4;try{U0(e,t,a)}finally{xe=p,Y.p=o,L.T=i}}Xe=1,Uf(),Df(),Mf()}}function Uf(){if(Xe===1){Xe=0;var e=Ha,t=ar,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var i=Y.p;Y.p=2;var o=xe;xe|=4;try{mf(t,e);var u=Ec,p=bd(e.containerInfo),b=u.focusedElem,S=u.selectionRange;if(p!==b&&b&&b.ownerDocument&&vd(b.ownerDocument.documentElement,b)){if(S!==null&&Ql(b)){var N=S.start,B=S.end;if(B===void 0&&(B=N),"selectionStart"in b)b.selectionStart=N,b.selectionEnd=Math.min(B,b.value.length);else{var $=b.ownerDocument||document,z=$&&$.defaultView||window;if(z.getSelection){var M=z.getSelection(),Q=b.textContent.length,ae=Math.min(S.start,Q),Oe=S.end===void 0?ae:Math.min(S.end,Q);!M.extend&&ae>Oe&&(p=Oe,Oe=ae,ae=p);var k=yd(b,ae),T=yd(b,Oe);if(k&&T&&(M.rangeCount!==1||M.anchorNode!==k.node||M.anchorOffset!==k.offset||M.focusNode!==T.node||M.focusOffset!==T.offset)){var R=$.createRange();R.setStart(k.node,k.offset),M.removeAllRanges(),ae>Oe?(M.addRange(R),M.extend(T.node,T.offset)):(R.setEnd(T.node,T.offset),M.addRange(R))}}}}for($=[],M=b;M=M.parentNode;)M.nodeType===1&&$.push({element:M,left:M.scrollLeft,top:M.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<$.length;b++){var H=$[b];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Ps=!!jc,Ec=jc=null}finally{xe=o,Y.p=i,L.T=a}}e.current=t,Xe=2}}function Df(){if(Xe===2){Xe=0;var e=Ha,t=ar,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var i=Y.p;Y.p=2;var o=xe;xe|=4;try{cf(e,t.alternate,t)}finally{xe=o,Y.p=i,L.T=a}}Xe=3}}function Mf(){if(Xe===4||Xe===3){Xe=0,dg();var e=Ha,t=ar,a=va,i=xf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,ar=Ha=null,Lf(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Ba=null),Rl(a),t=t.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Er,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=L.T,o=Y.p,Y.p=2,L.T=null;try{for(var u=e.onRecoverableError,p=0;p<i.length;p++){var b=i[p];u(b.value,{componentStack:b.stack})}}finally{L.T=t,Y.p=o}}(va&3)!==0&&Ms(),Wt(e),o=e.pendingLanes,(a&261930)!==0&&(o&42)!==0?e===dc?si++:(si=0,dc=e):si=0,li(0)}}function Lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$r(t)))}function Ms(){return Uf(),Df(),Mf(),qf()}function qf(){if(Xe!==5)return!1;var e=Ha,t=cc;cc=0;var a=Rl(va),i=L.T,o=Y.p;try{Y.p=32>a?32:a,L.T=null,a=uc,uc=null;var u=Ha,p=va;if(Xe=0,ar=Ha=null,va=0,(xe&6)!==0)throw Error(l(331));var b=xe;if(xe|=4,bf(u.current),gf(u,u.current,p,a),xe=b,li(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Er,u)}catch{}return!0}finally{Y.p=o,L.T=i,Lf(e,t)}}function Bf(e,t,a){t=Ut(a,t),t=Vo(e.stateNode,t,2),e=za(e,t,2),e!==null&&(Ar(e,2),Wt(e))}function Te(e,t,a){if(e.tag===3)Bf(e,e,a);else for(;t!==null;){if(t.tag===3){Bf(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ba===null||!Ba.has(i))){e=Ut(a,e),a=Bh(2),i=za(t,a,2),i!==null&&(Hh(a,i,t,e),Ar(i,2),Wt(i));break}}t=t.return}}function mc(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new L0;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(a)||(sc=!0,o.add(a),e=G0.bind(null,e,t,a),t.then(e,e))}function G0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(me&a)===a&&(Le===4||Le===3&&(me&62914560)===me&&300>vt()-Rs?(xe&2)===0&&nr(e,0):lc|=a,tr===me&&(tr=0)),Wt(e)}function Hf(e,t){t===0&&(t=zu()),e=rn(e,t),e!==null&&(Ar(e,t),Wt(e))}function V0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Hf(e,a)}function Y0(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Hf(e,a)}function K0(e,t){return Tl(e,t)}var Ls=null,ir=null,pc=!1,qs=!1,gc=!1,Ga=0;function Wt(e){e!==ir&&e.next===null&&(ir===null?Ls=ir=e:ir=ir.next=e),qs=!0,pc||(pc=!0,X0())}function li(e,t){if(!gc&&qs){gc=!0;do for(var a=!1,i=Ls;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var u=0;else{var p=i.suspendedLanes,b=i.pingedLanes;u=(1<<31-_t(42|e)+1)-1,u&=o&~(p&~b),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Yf(i,u))}else u=me,u=Gi(i,i===Re?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(u&3)===0||Tr(i,u)||(a=!0,Yf(i,u));i=i.next}while(a);gc=!1}}function I0(){$f()}function $f(){qs=pc=!1;var e=0;Ga!==0&&ny()&&(e=Ga);for(var t=vt(),a=null,i=Ls;i!==null;){var o=i.next,u=Gf(i,t);u===0?(i.next=null,a===null?Ls=o:a.next=o,o===null&&(ir=a)):(a=i,(e!==0||(u&3)!==0)&&(qs=!0)),i=o}Xe!==0&&Xe!==5||li(e),Ga!==0&&(Ga=0)}function Gf(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var p=31-_t(u),b=1<<p,S=o[p];S===-1?((b&a)===0||(b&i)!==0)&&(o[p]=bg(b,t)):S<=t&&(e.expiredLanes|=b),u&=~b}if(t=Re,a=me,a=Gi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Al(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Tr(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Al(i),Rl(a)){case 2:case 8:a=Nu;break;case 32:a=qi;break;case 268435456:a=Cu;break;default:a=qi}return i=Vf.bind(null,e),a=Tl(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Al(i),e.callbackPriority=2,e.callbackNode=null,2}function Vf(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ms()&&e.callbackNode!==a)return null;var i=me;return i=Gi(e,e===Re?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(jf(e,i,t),Gf(e,vt()),e.callbackNode!=null&&e.callbackNode===a?Vf.bind(null,e):null)}function Yf(e,t){if(Ms())return null;jf(e,t,!0)}function X0(){iy(function(){(xe&6)!==0?Tl(Ru,I0):$f()})}function yc(){if(Ga===0){var e=Yn;e===0&&(e=Bi,Bi<<=1,(Bi&261888)===0&&(Bi=256)),Ga=e}return Ga}function Kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(""+e)}function If(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function P0(e,t,a,i,o){if(t==="submit"&&a&&a.stateNode===o){var u=Kf((o[dt]||null).action),p=i.submitter;p&&(t=(t=p[dt]||null)?Kf(t.formAction):p.getAttribute("formAction"),t!==null&&(u=t,p=null));var b=new Ji("action","action",null,i,o);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ga!==0){var S=p?If(o,p):new FormData(o);Lo(a,{pending:!0,data:S,method:o.method,action:u},null,S)}}else typeof u=="function"&&(b.preventDefault(),S=p?If(o,p):new FormData(o),Lo(a,{pending:!0,data:S,method:o.method,action:u},u,S))},currentTarget:o}]})}}for(var vc=0;vc<Fl.length;vc++){var bc=Fl[vc],Q0=bc.toLowerCase(),J0=bc[0].toUpperCase()+bc.slice(1);Gt(Q0,"on"+J0)}Gt(xd,"onAnimationEnd"),Gt(Sd,"onAnimationIteration"),Gt(jd,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(h0,"onTransitionRun"),Gt(f0,"onTransitionStart"),Gt(m0,"onTransitionCancel"),Gt(Ed,"onTransitionEnd"),Rn("onMouseEnter",["mouseout","mouseover"]),Rn("onMouseLeave",["mouseout","mouseover"]),Rn("onPointerEnter",["pointerout","pointerover"]),Rn("onPointerLeave",["pointerout","pointerover"]),en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),en("onBeforeInput",["compositionend","keypress","textInput","paste"]),en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oi));function Xf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],o=i.event;i=i.listeners;e:{var u=void 0;if(t)for(var p=i.length-1;0<=p;p--){var b=i[p],S=b.instance,N=b.currentTarget;if(b=b.listener,S!==u&&o.isPropagationStopped())break e;u=b,o.currentTarget=N;try{u(o)}catch(B){Fi(B)}o.currentTarget=null,u=S}else for(p=0;p<i.length;p++){if(b=i[p],S=b.instance,N=b.currentTarget,b=b.listener,S!==u&&o.isPropagationStopped())break e;u=b,o.currentTarget=N;try{u(o)}catch(B){Fi(B)}o.currentTarget=null,u=S}}}}function fe(e,t){var a=t[Nl];a===void 0&&(a=t[Nl]=new Set);var i=e+"__bubble";a.has(i)||(Pf(t,e,2,!1),a.add(i))}function _c(e,t,a){var i=0;t&&(i|=4),Pf(a,e,i,t)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[Bs]){e[Bs]=!0,Hu.forEach(function(a){a!=="selectionchange"&&(Z0.has(a)||_c(a,!1,e),_c(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bs]||(t[Bs]=!0,_c("selectionchange",!1,t))}}function Pf(e,t,a,i){switch(Sm(t)){case 2:var o=Ey;break;case 8:o=Ty;break;default:o=Mc}a=o.bind(null,t,a,e),o=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function xc(e,t,a,i,o){var u=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var b=i.stateNode.containerInfo;if(b===o)break;if(p===4)for(p=i.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===o)return;p=p.return}for(;b!==null;){if(p=An(b),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){i=u=p;continue e}b=b.parentNode}}i=i.return}Wu(function(){var N=u,B=ql(a),$=[];e:{var z=Td.get(e);if(z!==void 0){var M=Ji,Q=e;switch(e){case"keypress":if(Pi(a)===0)break e;case"keydown":case"keyup":M=Yg;break;case"focusin":Q="focus",M=Yl;break;case"focusout":Q="blur",M=Yl;break;case"beforeblur":case"afterblur":M=Yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=Xg;break;case xd:case Sd:case jd:M=Dg;break;case Ed:M=Qg;break;case"scroll":case"scrollend":M=Rg;break;case"wheel":M=Zg;break;case"copy":case"cut":case"paste":M=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=nd;break;case"toggle":case"beforetoggle":M=Fg}var ae=(t&4)!==0,Oe=!ae&&(e==="scroll"||e==="scrollend"),k=ae?z!==null?z+"Capture":null:z;ae=[];for(var T=N,R;T!==null;){var H=T;if(R=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||R===null||k===null||(H=Rr(T,k),H!=null&&ae.push(ci(T,H,R))),Oe)break;T=T.return}0<ae.length&&(z=new M(z,Q,null,a,B),$.push({event:z,listeners:ae}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",z&&a!==Ll&&(Q=a.relatedTarget||a.fromElement)&&(An(Q)||Q[Tn]))break e;if((M||z)&&(z=B.window===B?B:(z=B.ownerDocument)?z.defaultView||z.parentWindow:window,M?(Q=a.relatedTarget||a.toElement,M=N,Q=Q?An(Q):null,Q!==null&&(Oe=d(Q),ae=Q.tag,Q!==Oe||ae!==5&&ae!==27&&ae!==6)&&(Q=null)):(M=null,Q=N),M!==Q)){if(ae=td,H="onMouseLeave",k="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ae=nd,H="onPointerLeave",k="onPointerEnter",T="pointer"),Oe=M==null?z:Or(M),R=Q==null?z:Or(Q),z=new ae(H,T+"leave",M,a,B),z.target=Oe,z.relatedTarget=R,H=null,An(B)===N&&(ae=new ae(k,T+"enter",Q,a,B),ae.target=R,ae.relatedTarget=Oe,H=ae),Oe=H,M&&Q)t:{for(ae=W0,k=M,T=Q,R=0,H=k;H;H=ae(H))R++;H=0;for(var te=T;te;te=ae(te))H++;for(;0<R-H;)k=ae(k),R--;for(;0<H-R;)T=ae(T),H--;for(;R--;){if(k===T||T!==null&&k===T.alternate){ae=k;break t}k=ae(k),T=ae(T)}ae=null}else ae=null;M!==null&&Qf($,z,M,ae,!1),Q!==null&&Oe!==null&&Qf($,Oe,Q,ae,!0)}}e:{if(z=N?Or(N):window,M=z.nodeName&&z.nodeName.toLowerCase(),M==="select"||M==="input"&&z.type==="file")var _e=dd;else if(cd(z))if(hd)_e=c0;else{_e=l0;var Z=s0}else M=z.nodeName,!M||M.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?N&&Ml(N.elementType)&&(_e=dd):_e=o0;if(_e&&(_e=_e(e,N))){ud($,_e,a,B);break e}Z&&Z(e,z,N),e==="focusout"&&N&&z.type==="number"&&N.memoizedProps.value!=null&&Dl(z,"number",z.value)}switch(Z=N?Or(N):window,e){case"focusin":(cd(Z)||Z.contentEditable==="true")&&(Mn=Z,Jl=N,qr=null);break;case"focusout":qr=Jl=Mn=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,_d($,a,B);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":_d($,a,B)}var ce;if(Il)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Dn?ld(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(rd&&a.locale!=="ko"&&(Dn||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Dn&&(ce=Fu()):(Ta=B,$l="value"in Ta?Ta.value:Ta.textContent,Dn=!0)),Z=Hs(N,pe),0<Z.length&&(pe=new ad(pe,e,null,a,B),$.push({event:pe,listeners:Z}),ce?pe.data=ce:(ce=od(a),ce!==null&&(pe.data=ce)))),(ce=t0?a0(e,a):n0(e,a))&&(pe=Hs(N,"onBeforeInput"),0<pe.length&&(Z=new ad("onBeforeInput","beforeinput",null,a,B),$.push({event:Z,listeners:pe}),Z.data=ce)),P0($,e,N,a,B)}Xf($,t)})}function ci(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hs(e,t){for(var a=t+"Capture",i=[];e!==null;){var o=e,u=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||u===null||(o=Rr(e,a),o!=null&&i.unshift(ci(e,o,u)),o=Rr(e,t),o!=null&&i.push(ci(e,o,u))),e.tag===3)return i;e=e.return}return[]}function W0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,a,i,o){for(var u=t._reactName,p=[];a!==null&&a!==i;){var b=a,S=b.alternate,N=b.stateNode;if(b=b.tag,S!==null&&S===i)break;b!==5&&b!==26&&b!==27||N===null||(S=N,o?(N=Rr(a,u),N!=null&&p.unshift(ci(a,N,S))):o||(N=Rr(a,u),N!=null&&p.push(ci(a,N,S)))),a=a.return}p.length!==0&&e.push({event:t,listeners:p})}var F0=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Jf(e){return(typeof e=="string"?e:""+e).replace(F0,`
`).replace(ey,"")}function Zf(e,t){return t=Jf(t),Jf(e)===t}function ke(e,t,a,i,o,u){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Cn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Cn(e,""+i);break;case"className":Yi(e,"class",i);break;case"tabIndex":Yi(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,a,i);break;case"style":Ju(e,i,u);break;case"data":if(t!=="object"){Yi(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ii(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&ke(e,t,"name",o.name,o,null),ke(e,t,"formEncType",o.formEncType,o,null),ke(e,t,"formMethod",o.formMethod,o,null),ke(e,t,"formTarget",o.formTarget,o,null)):(ke(e,t,"encType",o.encType,o,null),ke(e,t,"method",o.method,o,null),ke(e,t,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ii(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=na);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(a=i.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Ii(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":fe("beforetoggle",e),fe("toggle",e),Vi(e,"popover",i);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vi(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kg.get(a)||a,Vi(e,a,i))}}function Sc(e,t,a,i,o,u){switch(a){case"style":Ju(e,i,u);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(a=i.__html,a!=null){if(o.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Cn(e,i):(typeof i=="number"||typeof i=="bigint")&&Cn(e,""+i);break;case"onScroll":i!=null&&fe("scroll",e);break;case"onScrollEnd":i!=null&&fe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$u.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),u=e[dt]||null,u=u!=null?u[a]:null,typeof u=="function"&&e.removeEventListener(t,u,o),typeof i=="function")){typeof u!="function"&&u!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,o);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Vi(e,a,i)}}}function at(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",e),fe("load",e);var i=!1,o=!1,u;for(u in a)if(a.hasOwnProperty(u)){var p=a[u];if(p!=null)switch(u){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ke(e,t,u,p,a,null)}}o&&ke(e,t,"srcSet",a.srcSet,a,null),i&&ke(e,t,"src",a.src,a,null);return;case"input":fe("invalid",e);var b=u=p=o=null,S=null,N=null;for(i in a)if(a.hasOwnProperty(i)){var B=a[i];if(B!=null)switch(i){case"name":o=B;break;case"type":p=B;break;case"checked":S=B;break;case"defaultChecked":N=B;break;case"value":u=B;break;case"defaultValue":b=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,t));break;default:ke(e,t,i,B,a,null)}}Iu(e,u,b,S,N,p,o,!1);return;case"select":fe("invalid",e),i=p=u=null;for(o in a)if(a.hasOwnProperty(o)&&(b=a[o],b!=null))switch(o){case"value":u=b;break;case"defaultValue":p=b;break;case"multiple":i=b;default:ke(e,t,o,b,a,null)}t=u,a=p,e.multiple=!!i,t!=null?Nn(e,!!i,t,!1):a!=null&&Nn(e,!!i,a,!0);return;case"textarea":fe("invalid",e),u=o=i=null;for(p in a)if(a.hasOwnProperty(p)&&(b=a[p],b!=null))switch(p){case"value":i=b;break;case"defaultValue":o=b;break;case"children":u=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(l(91));break;default:ke(e,t,p,b,a,null)}Pu(e,i,o,u);return;case"option":for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!=null)&&(S==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ke(e,t,S,i,a,null));return;case"dialog":fe("beforetoggle",e),fe("toggle",e),fe("cancel",e),fe("close",e);break;case"iframe":case"object":fe("load",e);break;case"video":case"audio":for(i=0;i<oi.length;i++)fe(oi[i],e);break;case"image":fe("error",e),fe("load",e);break;case"details":fe("toggle",e);break;case"embed":case"source":case"link":fe("error",e),fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(i=a[N],i!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ke(e,t,N,i,a,null)}return;default:if(Ml(t)){for(B in a)a.hasOwnProperty(B)&&(i=a[B],i!==void 0&&Sc(e,t,B,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&ke(e,t,b,i,a,null))}function ty(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,u=null,p=null,b=null,S=null,N=null,B=null;for(M in a){var $=a[M];if(a.hasOwnProperty(M)&&$!=null)switch(M){case"checked":break;case"value":break;case"defaultValue":S=$;default:i.hasOwnProperty(M)||ke(e,t,M,null,i,$)}}for(var z in i){var M=i[z];if($=a[z],i.hasOwnProperty(z)&&(M!=null||$!=null))switch(z){case"type":u=M;break;case"name":o=M;break;case"checked":N=M;break;case"defaultChecked":B=M;break;case"value":p=M;break;case"defaultValue":b=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,t));break;default:M!==$&&ke(e,t,z,M,i,$)}}Ul(e,p,b,S,N,B,u,o);return;case"select":M=p=b=z=null;for(u in a)if(S=a[u],a.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":M=S;default:i.hasOwnProperty(u)||ke(e,t,u,null,i,S)}for(o in i)if(u=i[o],S=a[o],i.hasOwnProperty(o)&&(u!=null||S!=null))switch(o){case"value":z=u;break;case"defaultValue":b=u;break;case"multiple":p=u;default:u!==S&&ke(e,t,o,u,i,S)}t=b,a=p,i=M,z!=null?Nn(e,!!a,z,!1):!!i!=!!a&&(t!=null?Nn(e,!!a,t,!0):Nn(e,!!a,a?[]:"",!1));return;case"textarea":M=z=null;for(b in a)if(o=a[b],a.hasOwnProperty(b)&&o!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ke(e,t,b,null,i,o)}for(p in i)if(o=i[p],u=a[p],i.hasOwnProperty(p)&&(o!=null||u!=null))switch(p){case"value":z=o;break;case"defaultValue":M=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(l(91));break;default:o!==u&&ke(e,t,p,o,i,u)}Xu(e,z,M);return;case"option":for(var Q in a)z=a[Q],a.hasOwnProperty(Q)&&z!=null&&!i.hasOwnProperty(Q)&&(Q==="selected"?e.selected=!1:ke(e,t,Q,null,i,z));for(S in i)z=i[S],M=a[S],i.hasOwnProperty(S)&&z!==M&&(z!=null||M!=null)&&(S==="selected"?e.selected=z&&typeof z!="function"&&typeof z!="symbol":ke(e,t,S,z,i,M));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)z=a[ae],a.hasOwnProperty(ae)&&z!=null&&!i.hasOwnProperty(ae)&&ke(e,t,ae,null,i,z);for(N in i)if(z=i[N],M=a[N],i.hasOwnProperty(N)&&z!==M&&(z!=null||M!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(l(137,t));break;default:ke(e,t,N,z,i,M)}return;default:if(Ml(t)){for(var Oe in a)z=a[Oe],a.hasOwnProperty(Oe)&&z!==void 0&&!i.hasOwnProperty(Oe)&&Sc(e,t,Oe,void 0,i,z);for(B in i)z=i[B],M=a[B],!i.hasOwnProperty(B)||z===M||z===void 0&&M===void 0||Sc(e,t,B,z,i,M);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!i.hasOwnProperty(k)&&ke(e,t,k,null,i,z);for($ in i)z=i[$],M=a[$],!i.hasOwnProperty($)||z===M||z==null&&M==null||ke(e,t,$,z,i,M)}function Wf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ay(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var o=a[i],u=o.transferSize,p=o.initiatorType,b=o.duration;if(u&&b&&Wf(p)){for(p=0,b=o.responseEnd,i+=1;i<a.length;i++){var S=a[i],N=S.startTime;if(N>b)break;var B=S.transferSize,$=S.initiatorType;B&&Wf($)&&(S=S.responseEnd,p+=B*(S<b?1:(b-N)/(S-N)))}if(--i,t+=8*(u+p)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jc=null,Ec=null;function $s(e){return e.nodeType===9?e:e.ownerDocument}function Ff(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ac=null;function ny(){var e=window.event;return e&&e.type==="popstate"?e===Ac?!1:(Ac=e,!0):(Ac=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,iy=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(e){return am.resolve(null).then(e).catch(sy)}:tm;function sy(e){setTimeout(function(){throw e})}function Va(e){return e==="head"}function nm(e,t){var a=t,i=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(o),cr(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ui(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ui(a);for(var u=a.firstChild;u;){var p=u.nextSibling,b=u.nodeName;u[kr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=p}}else a==="body"&&ui(e.ownerDocument.body);a=o}while(a);cr(t)}function rm(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function kc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kc(a),Cl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ly(e,t,a,i){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[kr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Bt(e.nextSibling),e===null)break}return null}function oy(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Bt(e.nextSibling),e===null))return null;return e}function im(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Bt(e.nextSibling),e===null))return null;return e}function Oc(e){return e.data==="$?"||e.data==="$~"}function Rc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cy(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nc=null;function sm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Bt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function lm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function om(e,t,a){switch(t=$s(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function ui(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Cl(e)}var Ht=new Map,cm=new Set;function Gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=Y.d;Y.d={f:uy,r:dy,D:hy,C:fy,L:my,m:py,X:yy,S:gy,M:vy};function uy(){var e=ba.f(),t=zs();return e||t}function dy(e){var t=kn(e);t!==null&&t.tag===5&&t.type==="form"?Eh(t):ba.r(e)}var sr=typeof document>"u"?null:document;function um(e,t,a){var i=sr;if(i&&typeof t=="string"&&t){var o=Ct(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),cm.has(o)||(cm.add(o),e={rel:e,crossOrigin:a,href:t},i.querySelector(o)===null&&(t=i.createElement("link"),at(t,"link",e),Qe(t),i.head.appendChild(t)))}}function hy(e){ba.D(e),um("dns-prefetch",e,null)}function fy(e,t){ba.C(e,t),um("preconnect",e,t)}function my(e,t,a){ba.L(e,t,a);var i=sr;if(i&&e&&t){var o='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+Ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+Ct(a.imageSizes)+'"]')):o+='[href="'+Ct(e)+'"]';var u=o;switch(t){case"style":u=lr(e);break;case"script":u=or(e)}Ht.has(u)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ht.set(u,e),i.querySelector(o)!==null||t==="style"&&i.querySelector(di(u))||t==="script"&&i.querySelector(hi(u))||(t=i.createElement("link"),at(t,"link",e),Qe(t),i.head.appendChild(t)))}}function py(e,t){ba.m(e,t);var a=sr;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Ct(i)+'"][href="'+Ct(e)+'"]',u=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=or(e)}if(!Ht.has(u)&&(e=_({rel:"modulepreload",href:e},t),Ht.set(u,e),a.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(u)))return}i=a.createElement("link"),at(i,"link",e),Qe(i),a.head.appendChild(i)}}}function gy(e,t,a){ba.S(e,t,a);var i=sr;if(i&&e){var o=On(i).hoistableStyles,u=lr(e);t=t||"default";var p=o.get(u);if(!p){var b={loading:0,preload:null};if(p=i.querySelector(di(u)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ht.get(u))&&Cc(e,a);var S=p=i.createElement("link");Qe(S),at(S,"link",e),S._p=new Promise(function(N,B){S.onload=N,S.onerror=B}),S.addEventListener("load",function(){b.loading|=1}),S.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Vs(p,t,i)}p={type:"stylesheet",instance:p,count:1,state:b},o.set(u,p)}}}function yy(e,t){ba.X(e,t);var a=sr;if(a&&e){var i=On(a).hoistableScripts,o=or(e),u=i.get(o);u||(u=a.querySelector(hi(o)),u||(e=_({src:e,async:!0},t),(t=Ht.get(o))&&zc(e,t),u=a.createElement("script"),Qe(u),at(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function vy(e,t){ba.M(e,t);var a=sr;if(a&&e){var i=On(a).hoistableScripts,o=or(e),u=i.get(o);u||(u=a.querySelector(hi(o)),u||(e=_({src:e,async:!0,type:"module"},t),(t=Ht.get(o))&&zc(e,t),u=a.createElement("script"),Qe(u),at(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},i.set(o,u))}}function dm(e,t,a,i){var o=(o=de.current)?Gs(o):null;if(!o)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=lr(a.href),a=On(o).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=lr(a.href);var u=On(o).hoistableStyles,p=u.get(e);if(p||(o=o.ownerDocument||o,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,p),(u=o.querySelector(di(e)))&&!u._p&&(p.instance=u,p.state.loading=5),Ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ht.set(e,a),u||by(o,e,a,p.state))),t&&i===null)throw Error(l(528,""));return p}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=or(a),a=On(o).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function lr(e){return'href="'+Ct(e)+'"'}function di(e){return'link[rel="stylesheet"]['+e+"]"}function hm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function by(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),at(t,"link",a),Qe(t),e.head.appendChild(t))}function or(e){return'[src="'+Ct(e)+'"]'}function hi(e){return"script[async]"+e}function fm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ct(a.href)+'"]');if(i)return t.instance=i,Qe(i),i;var o=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),at(i,"style",o),Vs(i,a.precedence,e),t.instance=i;case"stylesheet":o=lr(a.href);var u=e.querySelector(di(o));if(u)return t.state.loading|=4,t.instance=u,Qe(u),u;i=hm(a),(o=Ht.get(o))&&Cc(i,o),u=(e.ownerDocument||e).createElement("link"),Qe(u);var p=u;return p._p=new Promise(function(b,S){p.onload=b,p.onerror=S}),at(u,"link",i),t.state.loading|=4,Vs(u,a.precedence,e),t.instance=u;case"script":return u=or(a.src),(o=e.querySelector(hi(u)))?(t.instance=o,Qe(o),o):(i=a,(o=Ht.get(u))&&(i=_({},a),zc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),Qe(o),at(o,"link",i),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Vs(i,a.precedence,e));return t.instance}function Vs(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,u=o,p=0;p<i.length;p++){var b=i[p];if(b.dataset.precedence===t)u=b;else if(u!==o)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ys=null;function mm(e,t,a){if(Ys===null){var i=new Map,o=Ys=new Map;o.set(a,i)}else o=Ys,i=o.get(a),i||(i=new Map,o.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var u=a[o];if(!(u[kr]||u[We]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(t)||"";p=e+p;var b=i.get(p);b?b.push(u):i.set(p,[u])}}return i}function pm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function _y(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function gm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wy(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var o=lr(i.href),u=t.querySelector(di(o));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ks.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=u,Qe(u);return}u=t.ownerDocument||t,i=hm(i),(o=Ht.get(o))&&Cc(i,o),u=u.createElement("link"),Qe(u);var p=u;p._p=new Promise(function(b,S){p.onload=b,p.onerror=S}),at(u,"link",i),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ks.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Uc=0;function xy(e,t){return e.stylesheets&&e.count===0&&Xs(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Xs(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uc===0&&(Uc=62500*ay());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xs(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function Ks(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Is=null;function Xs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Is=new Map,t.forEach(Sy,e),Is=null,Ks.call(e))}function Sy(e,t){if(!(t.state.loading&4)){var a=Is.get(e);if(a)var i=a.get(null);else{a=new Map,Is.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<o.length;u++){var p=o[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),i=p)}i&&a.set(null,i)}o=t.instance,p=o.getAttribute("data-precedence"),u=a.get(p)||i,u===i&&a.set(null,o),a.set(p,o),this.count++,i=Ks.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),u?u.parentNode.insertBefore(o,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var fi={$$typeof:C,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function jy(e,t,a,i,o,u,p,b,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.hiddenUpdates=kl(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function ym(e,t,a,i,o,u,p,b,S,N,B,$){return e=new jy(e,t,a,p,S,N,B,$,b),t=1,u===!0&&(t|=24),u=xt(3,null,null,t),e.current=u,u.stateNode=e,t=fo(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:i,isDehydrated:a,cache:t},yo(u),e}function vm(e){return e?(e=Bn,e):Bn}function bm(e,t,a,i,o,u){o=vm(o),i.context===null?i.context=o:i.pendingContext=o,i=Ca(t),i.payload={element:a},u=u===void 0?null:u,u!==null&&(i.callback=u),a=za(e,i,t),a!==null&&(yt(a,e,t),Kr(a,e,t))}function _m(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Dc(e,t){_m(e,t),(e=e.alternate)&&_m(e,t)}function wm(e){if(e.tag===13||e.tag===31){var t=rn(e,67108864);t!==null&&yt(t,e,67108864),Dc(e,67108864)}}function xm(e){if(e.tag===13||e.tag===31){var t=At();t=Ol(t);var a=rn(e,t);a!==null&&yt(a,e,t),Dc(e,t)}}var Ps=!0;function Ey(e,t,a,i){var o=L.T;L.T=null;var u=Y.p;try{Y.p=2,Mc(e,t,a,i)}finally{Y.p=u,L.T=o}}function Ty(e,t,a,i){var o=L.T;L.T=null;var u=Y.p;try{Y.p=8,Mc(e,t,a,i)}finally{Y.p=u,L.T=o}}function Mc(e,t,a,i){if(Ps){var o=Lc(i);if(o===null)xc(e,t,i,Qs,a),jm(e,i);else if(ky(o,e,t,a,i))i.stopPropagation();else if(jm(e,i),t&4&&-1<Ay.indexOf(e)){for(;o!==null;){var u=kn(o);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=Fa(u.pendingLanes);if(p!==0){var b=u;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var S=1<<31-_t(p);b.entanglements[1]|=S,p&=~S}Wt(u),(xe&6)===0&&(Ns=vt()+500,li(0))}}break;case 31:case 13:b=rn(u,2),b!==null&&yt(b,u,2),zs(),Dc(u,2)}if(u=Lc(i),u===null&&xc(e,t,i,Qs,a),u===o)break;o=u}o!==null&&i.stopPropagation()}else xc(e,t,i,null,a)}}function Lc(e){return e=ql(e),qc(e)}var Qs=null;function qc(e){if(Qs=null,e=An(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===31){if(e=m(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Qs=e,null}function Sm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hg()){case Ru:return 2;case Nu:return 8;case qi:case fg:return 32;case Cu:return 268435456;default:return 32}default:return 32}}var Bc=!1,Ya=null,Ka=null,Ia=null,mi=new Map,pi=new Map,Xa=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jm(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function gi(e,t,a,i,o,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:u,targetContainers:[o]},t!==null&&(t=kn(t),t!==null&&wm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function ky(e,t,a,i,o){switch(t){case"focusin":return Ya=gi(Ya,e,t,a,i,o),!0;case"dragenter":return Ka=gi(Ka,e,t,a,i,o),!0;case"mouseover":return Ia=gi(Ia,e,t,a,i,o),!0;case"pointerover":var u=o.pointerId;return mi.set(u,gi(mi.get(u)||null,e,t,a,i,o)),!0;case"gotpointercapture":return u=o.pointerId,pi.set(u,gi(pi.get(u)||null,e,t,a,i,o)),!0}return!1}function Em(e){var t=An(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,qu(e.priority,function(){xm(a)});return}}else if(t===31){if(t=m(a),t!==null){e.blockedOn=t,qu(e.priority,function(){xm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Js(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Lc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Ll=i,a.target.dispatchEvent(i),Ll=null}else return t=kn(a),t!==null&&wm(t),e.blockedOn=a,!1;t.shift()}return!0}function Tm(e,t,a){Js(e)&&a.delete(t)}function Oy(){Bc=!1,Ya!==null&&Js(Ya)&&(Ya=null),Ka!==null&&Js(Ka)&&(Ka=null),Ia!==null&&Js(Ia)&&(Ia=null),mi.forEach(Tm),pi.forEach(Tm)}function Zs(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var Ws=null;function Am(e){Ws!==e&&(Ws=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ws===e&&(Ws=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],o=e[t+2];if(typeof i!="function"){if(qc(i||a)===null)continue;break}var u=kn(a);u!==null&&(e.splice(t,3),t-=3,Lo(u,{pending:!0,data:o,method:a.method,action:i},i,o))}}))}function cr(e){function t(S){return Zs(S,e)}Ya!==null&&Zs(Ya,e),Ka!==null&&Zs(Ka,e),Ia!==null&&Zs(Ia,e),mi.forEach(t),pi.forEach(t);for(var a=0;a<Xa.length;a++){var i=Xa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)Em(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var o=a[i],u=a[i+1],p=o[dt]||null;if(typeof u=="function")p||Am(a);else if(p){var b=null;if(u&&u.hasAttribute("formAction")){if(o=u,p=u[dt]||null)b=p.formAction;else if(qc(o)!==null)continue}else b=p.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),Am(a)}}}function km(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(p){return o=p})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Hc(e){this._internalRoot=e}Fs.prototype.render=Hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,i=At();bm(a,i,e,t,null,null)},Fs.prototype.unmount=Hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bm(e.current,2,null,e,null,null),zs(),t[Tn]=null}};function Fs(e){this._internalRoot=e}Fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Xa.length&&t!==0&&t<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&Em(e)}};var Om=n.version;if(Om!=="19.2.4")throw Error(l(527,Om,"19.2.4"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=y(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Ry={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Er=el.inject(Ry),bt=el}catch{}}return vi.createRoot=function(e,t){if(!c(e))throw Error(l(299));var a=!1,i="",o=Dh,u=Mh,p=Lh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=ym(e,1,!1,null,null,a,i,null,o,u,p,km),e[Tn]=t.current,wc(e),new Hc(t)},vi.hydrateRoot=function(e,t,a){if(!c(e))throw Error(l(299));var i=!1,o="",u=Dh,p=Mh,b=Lh,S=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),t=ym(e,1,!0,t,a??null,i,o,S,u,p,b,km),t.context=vm(null),a=t.current,i=At(),i=Ol(i),o=Ca(i),o.callback=null,za(a,o,i),a=i,t.current.lanes=a,Ar(t,a),Wt(t),e[Tn]=t.current,wc(e),new Fs(t)},vi.version="19.2.4",vi}var Bm;function Gy(){if(Bm)return Vc.exports;Bm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),Vc.exports=$y(),Vc.exports}var Vy=Gy();var Hm="popstate";function Yy(r={}){function n(l,c){let{pathname:d,search:f,hash:m}=l.location;return nu("",{pathname:d,search:f,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(l,c){return typeof c=="string"?c:Ei(c)}return Iy(n,s,null,r)}function De(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function Pt(r,n){if(!r){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Ky(){return Math.random().toString(36).substring(2,10)}function $m(r,n){return{usr:r.state,key:r.key,idx:n}}function nu(r,n,s=null,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof n=="string"?wr(n):n,state:s,key:n&&n.key||l||Ky()}}function Ei({pathname:r="/",search:n="",hash:s=""}){return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function wr(r){let n={};if(r){let s=r.indexOf("#");s>=0&&(n.hash=r.substring(s),r=r.substring(0,s));let l=r.indexOf("?");l>=0&&(n.search=r.substring(l),r=r.substring(0,l)),r&&(n.pathname=r)}return n}function Iy(r,n,s,l={}){let{window:c=document.defaultView,v5Compat:d=!1}=l,f=c.history,m="POP",g=null,y=v();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function v(){return(f.state||{idx:null}).idx}function _(){m="POP";let U=v(),q=U==null?null:U-y;y=U,g&&g({action:m,location:O.location,delta:q})}function x(U,q){m="PUSH";let D=nu(O.location,U,q);y=v()+1;let C=$m(D,y),V=O.createHref(D);try{f.pushState(C,"",V)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;c.location.assign(V)}d&&g&&g({action:m,location:O.location,delta:1})}function w(U,q){m="REPLACE";let D=nu(O.location,U,q);y=v();let C=$m(D,y),V=O.createHref(D);f.replaceState(C,"",V),d&&g&&g({action:m,location:O.location,delta:0})}function j(U){return Xy(U)}let O={get action(){return m},get location(){return r(c,f)},listen(U){if(g)throw new Error("A history only accepts one active listener");return c.addEventListener(Hm,_),g=U,()=>{c.removeEventListener(Hm,_),g=null}},createHref(U){return n(c,U)},createURL:j,encodeLocation(U){let q=j(U);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:x,replace:w,go(U){return f.go(U)}};return O}function Xy(r,n=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),De(s,"No window.location.(origin|href) available to create URL");let l=typeof r=="string"?r:Ei(r);return l=l.replace(/ $/,"%20"),!n&&l.startsWith("//")&&(l=s+l),new URL(l,s)}function vp(r,n,s="/"){return Py(r,n,s,!1)}function Py(r,n,s,l){let c=typeof n=="string"?wr(n):n,d=xa(c.pathname||"/",s);if(d==null)return null;let f=bp(r);Qy(f);let m=null;for(let g=0;m==null&&g<f.length;++g){let y=sv(d);m=rv(f[g],y,l)}return m}function bp(r,n=[],s=[],l="",c=!1){let d=(f,m,g=c,y)=>{let v={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(l)&&g)return;De(v.relativePath.startsWith(l),`Absolute route path "${v.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(l.length)}let _=wa([l,v.relativePath]),x=s.concat(v);f.children&&f.children.length>0&&(De(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),bp(f.children,n,x,_,g)),!(f.path==null&&!f.index)&&n.push({path:_,score:av(_,f.index),routesMeta:x})};return r.forEach((f,m)=>{if(f.path===""||!f.path?.includes("?"))d(f,m);else for(let g of _p(f.path))d(f,m,!0,g)}),n}function _p(r){let n=r.split("/");if(n.length===0)return[];let[s,...l]=n,c=s.endsWith("?"),d=s.replace(/\?$/,"");if(l.length===0)return c?[d,""]:[d];let f=_p(l.join("/")),m=[];return m.push(...f.map(g=>g===""?d:[d,g].join("/"))),c&&m.push(...f),m.map(g=>r.startsWith("/")&&g===""?"/":g)}function Qy(r){r.sort((n,s)=>n.score!==s.score?s.score-n.score:nv(n.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var Jy=/^:[\w-]+$/,Zy=3,Wy=2,Fy=1,ev=10,tv=-2,Gm=r=>r==="*";function av(r,n){let s=r.split("/"),l=s.length;return s.some(Gm)&&(l+=tv),n&&(l+=Wy),s.filter(c=>!Gm(c)).reduce((c,d)=>c+(Jy.test(d)?Zy:d===""?Fy:ev),l)}function nv(r,n){return r.length===n.length&&r.slice(0,-1).every((l,c)=>l===n[c])?r[r.length-1]-n[n.length-1]:0}function rv(r,n,s=!1){let{routesMeta:l}=r,c={},d="/",f=[];for(let m=0;m<l.length;++m){let g=l[m],y=m===l.length-1,v=d==="/"?n:n.slice(d.length)||"/",_=dl({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},v),x=g.route;if(!_&&y&&s&&!l[l.length-1].route.index&&(_=dl({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},v)),!_)return null;Object.assign(c,_.params),f.push({params:c,pathname:wa([d,_.pathname]),pathnameBase:uv(wa([d,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(d=wa([d,_.pathnameBase]))}return f}function dl(r,n){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,l]=iv(r.path,r.caseSensitive,r.end),c=n.match(s);if(!c)return null;let d=c[0],f=d.replace(/(.)\/+$/,"$1"),m=c.slice(1);return{params:l.reduce((y,{paramName:v,isOptional:_},x)=>{if(v==="*"){let j=m[x]||"";f=d.slice(0,d.length-j.length).replace(/(.)\/+$/,"$1")}const w=m[x];return _&&!w?y[v]=void 0:y[v]=(w||"").replace(/%2F/g,"/"),y},{}),pathname:d,pathnameBase:f,pattern:r}}function iv(r,n=!1,s=!0){Pt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],c="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,g)=>(l.push({paramName:m,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(l.push({paramName:"*"}),c+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":r!==""&&r!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),l]}function sv(r){try{return r.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Pt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),r}}function xa(r,n){if(n==="/")return r;if(!r.toLowerCase().startsWith(n.toLowerCase()))return null;let s=n.endsWith("/")?n.length-1:n.length,l=r.charAt(s);return l&&l!=="/"?null:r.slice(s)||"/"}var lv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ov(r,n="/"){let{pathname:s,search:l="",hash:c=""}=typeof r=="string"?wr(r):r,d;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?d=Vm(s.substring(1),"/"):d=Vm(s,n)):d=n,{pathname:d,search:dv(l),hash:hv(c)}}function Vm(r,n){let s=n.replace(/\/+$/,"").split("/");return r.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Xc(r,n,s,l){return`Cannot include a '${r}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cv(r){return r.filter((n,s)=>s===0||n.route.path&&n.route.path.length>0)}function wp(r){let n=cv(r);return n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase)}function xp(r,n,s,l=!1){let c;typeof r=="string"?c=wr(r):(c={...r},De(!c.pathname||!c.pathname.includes("?"),Xc("?","pathname","search",c)),De(!c.pathname||!c.pathname.includes("#"),Xc("#","pathname","hash",c)),De(!c.search||!c.search.includes("#"),Xc("#","search","hash",c)));let d=r===""||c.pathname==="",f=d?"/":c.pathname,m;if(f==null)m=s;else{let _=n.length-1;if(!l&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),_-=1;c.pathname=x.join("/")}m=_>=0?n[_]:"/"}let g=ov(c,m),y=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&s.endsWith("/");return!g.pathname.endsWith("/")&&(y||v)&&(g.pathname+="/"),g}var wa=r=>r.join("/").replace(/\/\/+/g,"/"),uv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),dv=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,hv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,fv=class{constructor(r,n,s,l=!1){this.status=r,this.statusText=n||"",this.internal=l,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function mv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function pv(r){return r.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Sp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jp(r,n){let s=r;if(typeof s!="string"||!lv.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let l=s,c=!1;if(Sp)try{let d=new URL(window.location.href),f=s.startsWith("//")?new URL(d.protocol+s):new URL(s),m=xa(f.pathname,n);f.origin===d.origin&&m!=null?s=m+f.search+f.hash:c=!0}catch{Pt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ep=["POST","PUT","PATCH","DELETE"];new Set(Ep);var gv=["GET",...Ep];new Set(gv);var xr=A.createContext(null);xr.displayName="DataRouter";var gl=A.createContext(null);gl.displayName="DataRouterState";var yv=A.createContext(!1),Tp=A.createContext({isTransitioning:!1});Tp.displayName="ViewTransition";var vv=A.createContext(new Map);vv.displayName="Fetchers";var bv=A.createContext(null);bv.displayName="Await";var $t=A.createContext(null);$t.displayName="Navigation";var zi=A.createContext(null);zi.displayName="Location";var ea=A.createContext({outlet:null,matches:[],isDataRoute:!1});ea.displayName="Route";var yu=A.createContext(null);yu.displayName="RouteError";var Ap="REACT_ROUTER_ERROR",_v="REDIRECT",wv="ROUTE_ERROR_RESPONSE";function xv(r){if(r.startsWith(`${Ap}:${_v}:{`))try{let n=JSON.parse(r.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function Sv(r){if(r.startsWith(`${Ap}:${wv}:{`))try{let n=JSON.parse(r.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new fv(n.status,n.statusText,n.data)}catch{}}function jv(r,{relative:n}={}){De(Ui(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=A.useContext($t),{hash:c,pathname:d,search:f}=Di(r,{relative:n}),m=d;return s!=="/"&&(m=d==="/"?s:wa([s,d])),l.createHref({pathname:m,search:f,hash:c})}function Ui(){return A.useContext(zi)!=null}function Za(){return De(Ui(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(zi).location}var kp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Op(r){A.useContext($t).static||A.useLayoutEffect(r)}function jn(){let{isDataRoute:r}=A.useContext(ea);return r?Lv():Ev()}function Ev(){De(Ui(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(xr),{basename:n,navigator:s}=A.useContext($t),{matches:l}=A.useContext(ea),{pathname:c}=Za(),d=JSON.stringify(wp(l)),f=A.useRef(!1);return Op(()=>{f.current=!0}),A.useCallback((g,y={})=>{if(Pt(f.current,kp),!f.current)return;if(typeof g=="number"){s.go(g);return}let v=xp(g,JSON.parse(d),c,y.relative==="path");r==null&&n!=="/"&&(v.pathname=v.pathname==="/"?n:wa([n,v.pathname])),(y.replace?s.replace:s.push)(v,y.state,y)},[n,s,d,c,r])}A.createContext(null);function vu(){let{matches:r}=A.useContext(ea),n=r[r.length-1];return n?n.params:{}}function Di(r,{relative:n}={}){let{matches:s}=A.useContext(ea),{pathname:l}=Za(),c=JSON.stringify(wp(s));return A.useMemo(()=>xp(r,JSON.parse(c),l,n==="path"),[r,c,l,n])}function Tv(r,n){return Rp(r,n)}function Rp(r,n,s,l,c){De(Ui(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=A.useContext($t),{matches:f}=A.useContext(ea),m=f[f.length-1],g=m?m.params:{},y=m?m.pathname:"/",v=m?m.pathnameBase:"/",_=m&&m.route;{let D=_&&_.path||"";Cp(y,!_||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Za(),w;if(n){let D=typeof n=="string"?wr(n):n;De(v==="/"||D.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${D.pathname}" was given in the \`location\` prop.`),w=D}else w=x;let j=w.pathname||"/",O=j;if(v!=="/"){let D=v.replace(/^\//,"").split("/");O="/"+j.replace(/^\//,"").split("/").slice(D.length).join("/")}let U=vp(r,{pathname:O});Pt(_||U!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Pt(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Nv(U&&U.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:wa([v,d.encodeLocation?d.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?v:wa([v,d.encodeLocation?d.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,s,l,c);return n&&q?A.createElement(zi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},q):q}function Av(){let r=Mv(),n=mv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},d={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:d},"ErrorBoundary")," or"," ",A.createElement("code",{style:d},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},n),s?A.createElement("pre",{style:c},s):null,f)}var kv=A.createElement(Av,null),Np=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){this.props.onError?this.props.onError(r,n):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const s=Sv(r.digest);s&&(r=s)}let n=r!==void 0?A.createElement(ea.Provider,{value:this.props.routeContext},A.createElement(yu.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?A.createElement(Ov,{error:r},n):n}};Np.contextType=yv;var Pc=new WeakMap;function Ov({children:r,error:n}){let{basename:s}=A.useContext($t);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let l=xv(n.digest);if(l){let c=Pc.get(n);if(c)throw c;let d=jp(l.location,s);if(Sp&&!Pc.get(n))if(d.isExternal||l.reloadDocument)window.location.href=d.absoluteURL||d.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(d.to,{replace:l.replace}));throw Pc.set(n,f),f}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d.absoluteURL||d.to}`})}}return r}function Rv({routeContext:r,match:n,children:s}){let l=A.useContext(xr);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(ea.Provider,{value:r},s)}function Nv(r,n=[],s=null,l=null,c=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(n.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let d=r,f=s?.errors;if(f!=null){let v=d.findIndex(_=>_.route.id&&f?.[_.route.id]!==void 0);De(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,v+1))}let m=!1,g=-1;if(s)for(let v=0;v<d.length;v++){let _=d[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=v),_.route.id){let{loaderData:x,errors:w}=s,j=_.route.loader&&!x.hasOwnProperty(_.route.id)&&(!w||w[_.route.id]===void 0);if(_.route.lazy||j){m=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}let y=s&&l?(v,_)=>{l(v,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:pv(s.matches),errorInfo:_})}:void 0;return d.reduceRight((v,_,x)=>{let w,j=!1,O=null,U=null;s&&(w=f&&_.route.id?f[_.route.id]:void 0,O=_.route.errorElement||kv,m&&(g<0&&x===0?(Cp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,U=null):g===x&&(j=!0,U=_.route.hydrateFallbackElement||null)));let q=n.concat(d.slice(0,x+1)),D=()=>{let C;return w?C=O:j?C=U:_.route.Component?C=A.createElement(_.route.Component,null):_.route.element?C=_.route.element:C=v,A.createElement(Rv,{match:_,routeContext:{outlet:v,matches:q,isDataRoute:s!=null},children:C})};return s&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?A.createElement(Np,{location:s.location,revalidation:s.revalidation,component:O,error:w,children:D(),routeContext:{outlet:null,matches:q,isDataRoute:!0},onError:y}):D()},null)}function bu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cv(r){let n=A.useContext(xr);return De(n,bu(r)),n}function zv(r){let n=A.useContext(gl);return De(n,bu(r)),n}function Uv(r){let n=A.useContext(ea);return De(n,bu(r)),n}function _u(r){let n=Uv(r),s=n.matches[n.matches.length-1];return De(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function Dv(){return _u("useRouteId")}function Mv(){let r=A.useContext(yu),n=zv("useRouteError"),s=_u("useRouteError");return r!==void 0?r:n.errors?.[s]}function Lv(){let{router:r}=Cv("useNavigate"),n=_u("useNavigate"),s=A.useRef(!1);return Op(()=>{s.current=!0}),A.useCallback(async(c,d={})=>{Pt(s.current,kp),s.current&&(typeof c=="number"?await r.navigate(c):await r.navigate(c,{fromRouteId:n,...d}))},[r,n])}var Ym={};function Cp(r,n,s){!n&&!Ym[r]&&(Ym[r]=!0,Pt(!1,s))}A.memo(qv);function qv({routes:r,future:n,state:s,onError:l}){return Rp(r,void 0,s,l,n)}function Ft(r){De(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bv({basename:r="/",children:n=null,location:s,navigationType:l="POP",navigator:c,static:d=!1,unstable_useTransitions:f}){De(!Ui(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),g=A.useMemo(()=>({basename:m,navigator:c,static:d,unstable_useTransitions:f,future:{}}),[m,c,d,f]);typeof s=="string"&&(s=wr(s));let{pathname:y="/",search:v="",hash:_="",state:x=null,key:w="default"}=s,j=A.useMemo(()=>{let O=xa(y,m);return O==null?null:{location:{pathname:O,search:v,hash:_,state:x,key:w},navigationType:l}},[m,y,v,_,x,w,l]);return Pt(j!=null,`<Router basename="${m}"> is not able to match the URL "${y}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:A.createElement($t.Provider,{value:g},A.createElement(zi.Provider,{children:n,value:j}))}function Hv({children:r,location:n}){return Tv(ru(r),n)}function ru(r,n=[]){let s=[];return A.Children.forEach(r,(l,c)=>{if(!A.isValidElement(l))return;let d=[...n,c];if(l.type===A.Fragment){s.push.apply(s,ru(l.props.children,d));return}De(l.type===Ft,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),De(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||d.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=ru(l.props.children,d)),s.push(f)}),s}var cl="get",ul="application/x-www-form-urlencoded";function yl(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function $v(r){return yl(r)&&r.tagName.toLowerCase()==="button"}function Gv(r){return yl(r)&&r.tagName.toLowerCase()==="form"}function Vv(r){return yl(r)&&r.tagName.toLowerCase()==="input"}function Yv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Kv(r,n){return r.button===0&&(!n||n==="_self")&&!Yv(r)}function iu(r=""){return new URLSearchParams(typeof r=="string"||Array.isArray(r)||r instanceof URLSearchParams?r:Object.keys(r).reduce((n,s)=>{let l=r[s];return n.concat(Array.isArray(l)?l.map(c=>[s,c]):[[s,l]])},[]))}function Iv(r,n){let s=iu(r);return n&&n.forEach((l,c)=>{s.has(c)||n.getAll(c).forEach(d=>{s.append(c,d)})}),s}var tl=null;function Xv(){if(tl===null)try{new FormData(document.createElement("form"),0),tl=!1}catch{tl=!0}return tl}var Pv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qc(r){return r!=null&&!Pv.has(r)?(Pt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ul}"`),null):r}function Qv(r,n){let s,l,c,d,f;if(Gv(r)){let m=r.getAttribute("action");l=m?xa(m,n):null,s=r.getAttribute("method")||cl,c=Qc(r.getAttribute("enctype"))||ul,d=new FormData(r)}else if($v(r)||Vv(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||m.getAttribute("action");if(l=g?xa(g,n):null,s=r.getAttribute("formmethod")||m.getAttribute("method")||cl,c=Qc(r.getAttribute("formenctype"))||Qc(m.getAttribute("enctype"))||ul,d=new FormData(m,r),!Xv()){let{name:y,type:v,value:_}=r;if(v==="image"){let x=y?`${y}.`:"";d.append(`${x}x`,"0"),d.append(`${x}y`,"0")}else y&&d.append(y,_)}}else{if(yl(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=cl,l=null,c=ul,f=r}return d&&c==="text/plain"&&(f=d,d=void 0),{action:l,method:s.toLowerCase(),encType:c,formData:d,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wu(r,n){if(r===!1||r===null||typeof r>"u")throw new Error(n)}function Jv(r,n,s,l){let c=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:n&&xa(c.pathname,n)==="/"?c.pathname=`${n.replace(/\/$/,"")}/_root.${l}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${l}`,c}async function Zv(r,n){if(r.id in n)return n[r.id];try{let s=await import(r.module);return n[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Wv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Fv(r,n,s){let l=await Promise.all(r.map(async c=>{let d=n.routes[c.route.id];if(d){let f=await Zv(d,s);return f.links?f.links():[]}return[]}));return nb(l.flat(1).filter(Wv).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Km(r,n,s,l,c,d){let f=(g,y)=>s[y]?g.route.id!==s[y].route.id:!0,m=(g,y)=>s[y].pathname!==g.pathname||s[y].route.path?.endsWith("*")&&s[y].params["*"]!==g.params["*"];return d==="assets"?n.filter((g,y)=>f(g,y)||m(g,y)):d==="data"?n.filter((g,y)=>{let v=l.routes[g.route.id];if(!v||!v.hasLoader)return!1;if(f(g,y)||m(g,y))return!0;if(g.route.shouldRevalidate){let _=g.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function eb(r,n,{includeHydrateFallback:s}={}){return tb(r.map(l=>{let c=n.routes[l.route.id];if(!c)return[];let d=[c.module];return c.clientActionModule&&(d=d.concat(c.clientActionModule)),c.clientLoaderModule&&(d=d.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(d=d.concat(c.hydrateFallbackModule)),c.imports&&(d=d.concat(c.imports)),d}).flat(1))}function tb(r){return[...new Set(r)]}function ab(r){let n={},s=Object.keys(r).sort();for(let l of s)n[l]=r[l];return n}function nb(r,n){let s=new Set;return new Set(n),r.reduce((l,c)=>{let d=JSON.stringify(ab(c));return s.has(d)||(s.add(d),l.push({key:d,link:c})),l},[])}function zp(){let r=A.useContext(xr);return wu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function rb(){let r=A.useContext(gl);return wu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var xu=A.createContext(void 0);xu.displayName="FrameworkContext";function Up(){let r=A.useContext(xu);return wu(r,"You must render this element inside a <HydratedRouter> element"),r}function ib(r,n){let s=A.useContext(xu),[l,c]=A.useState(!1),[d,f]=A.useState(!1),{onFocus:m,onBlur:g,onMouseEnter:y,onMouseLeave:v,onTouchStart:_}=n,x=A.useRef(null);A.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let O=q=>{q.forEach(D=>{f(D.isIntersecting)})},U=new IntersectionObserver(O,{threshold:.5});return x.current&&U.observe(x.current),()=>{U.disconnect()}}},[r]),A.useEffect(()=>{if(l){let O=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(O)}}},[l]);let w=()=>{c(!0)},j=()=>{c(!1),f(!1)};return s?r!=="intent"?[d,x,{}]:[d,x,{onFocus:bi(m,w),onBlur:bi(g,j),onMouseEnter:bi(y,w),onMouseLeave:bi(v,j),onTouchStart:bi(_,w)}]:[!1,x,{}]}function bi(r,n){return s=>{r&&r(s),s.defaultPrevented||n(s)}}function sb({page:r,...n}){let{router:s}=zp(),l=A.useMemo(()=>vp(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?A.createElement(ob,{page:r,matches:l,...n}):null}function lb(r){let{manifest:n,routeModules:s}=Up(),[l,c]=A.useState([]);return A.useEffect(()=>{let d=!1;return Fv(r,n,s).then(f=>{d||c(f)}),()=>{d=!0}},[r,n,s]),l}function ob({page:r,matches:n,...s}){let l=Za(),{future:c,manifest:d,routeModules:f}=Up(),{basename:m}=zp(),{loaderData:g,matches:y}=rb(),v=A.useMemo(()=>Km(r,n,y,d,l,"data"),[r,n,y,d,l]),_=A.useMemo(()=>Km(r,n,y,d,l,"assets"),[r,n,y,d,l]),x=A.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let O=new Set,U=!1;if(n.forEach(D=>{let C=d.routes[D.route.id];!C||!C.hasLoader||(!v.some(V=>V.route.id===D.route.id)&&D.route.id in g&&f[D.route.id]?.shouldRevalidate||C.hasClientLoader?U=!0:O.add(D.route.id))}),O.size===0)return[];let q=Jv(r,m,c.unstable_trailingSlashAwareDataRequests,"data");return U&&O.size>0&&q.searchParams.set("_routes",n.filter(D=>O.has(D.route.id)).map(D=>D.route.id).join(",")),[q.pathname+q.search]},[m,c.unstable_trailingSlashAwareDataRequests,g,l,d,v,n,r,f]),w=A.useMemo(()=>eb(_,d),[_,d]),j=lb(_);return A.createElement(A.Fragment,null,x.map(O=>A.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...s})),w.map(O=>A.createElement("link",{key:O,rel:"modulepreload",href:O,...s})),j.map(({key:O,link:U})=>A.createElement("link",{key:O,nonce:s.nonce,...U,crossOrigin:U.crossOrigin??s.crossOrigin})))}function cb(...r){return n=>{r.forEach(s=>{typeof s=="function"?s(n):s!=null&&(s.current=n)})}}var ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ub&&(window.__reactRouterVersion="7.13.0")}catch{}function db({basename:r,children:n,unstable_useTransitions:s,window:l}){let c=A.useRef();c.current==null&&(c.current=Yy({window:l,v5Compat:!0}));let d=c.current,[f,m]=A.useState({action:d.action,location:d.location}),g=A.useCallback(y=>{s===!1?m(y):A.startTransition(()=>m(y))},[s]);return A.useLayoutEffect(()=>d.listen(g),[d,g]),A.createElement(Bv,{basename:r,children:n,location:f.location,navigationType:f.action,navigator:d,unstable_useTransitions:s})}var Dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=A.forwardRef(function({onClick:n,discover:s="render",prefetch:l="none",relative:c,reloadDocument:d,replace:f,state:m,target:g,to:y,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:x,...w},j){let{basename:O,unstable_useTransitions:U}=A.useContext($t),q=typeof y=="string"&&Dp.test(y),D=jp(y,O);y=D.to;let C=jv(y,{relative:c}),[V,F,K]=ib(l,w),P=pb(y,{replace:f,state:m,target:g,preventScrollReset:v,relative:c,viewTransition:_,unstable_defaultShouldRevalidate:x,unstable_useTransitions:U});function ve(ut){n&&n(ut),ut.defaultPrevented||P(ut)}let je=A.createElement("a",{...w,...K,href:D.absoluteURL||C,onClick:D.isExternal||d?n:ve,ref:cb(j,F),target:g,"data-discover":!q&&s==="render"?"true":void 0});return V&&!q?A.createElement(A.Fragment,null,je,A.createElement(sb,{page:C})):je});Rt.displayName="Link";var hb=A.forwardRef(function({"aria-current":n="page",caseSensitive:s=!1,className:l="",end:c=!1,style:d,to:f,viewTransition:m,children:g,...y},v){let _=Di(f,{relative:y.relative}),x=Za(),w=A.useContext(gl),{navigator:j,basename:O}=A.useContext($t),U=w!=null&&wb(_)&&m===!0,q=j.encodeLocation?j.encodeLocation(_).pathname:_.pathname,D=x.pathname,C=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;s||(D=D.toLowerCase(),C=C?C.toLowerCase():null,q=q.toLowerCase()),C&&O&&(C=xa(C,O)||C);const V=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let F=D===q||!c&&D.startsWith(q)&&D.charAt(V)==="/",K=C!=null&&(C===q||!c&&C.startsWith(q)&&C.charAt(q.length)==="/"),P={isActive:F,isPending:K,isTransitioning:U},ve=F?n:void 0,je;typeof l=="function"?je=l(P):je=[l,F?"active":null,K?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let ut=typeof d=="function"?d(P):d;return A.createElement(Rt,{...y,"aria-current":ve,className:je,ref:v,style:ut,to:f,viewTransition:m},typeof g=="function"?g(P):g)});hb.displayName="NavLink";var fb=A.forwardRef(({discover:r="render",fetcherKey:n,navigate:s,reloadDocument:l,replace:c,state:d,method:f=cl,action:m,onSubmit:g,relative:y,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:x,...w},j)=>{let{unstable_useTransitions:O}=A.useContext($t),U=bb(),q=_b(m,{relative:y}),D=f.toLowerCase()==="get"?"get":"post",C=typeof m=="string"&&Dp.test(m),V=F=>{if(g&&g(F),F.defaultPrevented)return;F.preventDefault();let K=F.nativeEvent.submitter,P=K?.getAttribute("formmethod")||f,ve=()=>U(K||F.currentTarget,{fetcherKey:n,method:P,navigate:s,replace:c,state:d,relative:y,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:x});O&&s!==!1?A.startTransition(()=>ve()):ve()};return A.createElement("form",{ref:j,method:D,action:q,onSubmit:l?g:V,...w,"data-discover":!C&&r==="render"?"true":void 0})});fb.displayName="Form";function mb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mp(r){let n=A.useContext(xr);return De(n,mb(r)),n}function pb(r,{target:n,replace:s,state:l,preventScrollReset:c,relative:d,viewTransition:f,unstable_defaultShouldRevalidate:m,unstable_useTransitions:g}={}){let y=jn(),v=Za(),_=Di(r,{relative:d});return A.useCallback(x=>{if(Kv(x,n)){x.preventDefault();let w=s!==void 0?s:Ei(v)===Ei(_),j=()=>y(r,{replace:w,state:l,preventScrollReset:c,relative:d,viewTransition:f,unstable_defaultShouldRevalidate:m});g?A.startTransition(()=>j()):j()}},[v,y,_,s,l,n,r,c,d,f,m,g])}function gb(r){Pt(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=A.useRef(iu(r)),s=A.useRef(!1),l=Za(),c=A.useMemo(()=>Iv(l.search,s.current?null:n.current),[l.search]),d=jn(),f=A.useCallback((m,g)=>{const y=iu(typeof m=="function"?m(new URLSearchParams(c)):m);s.current=!0,d("?"+y,g)},[d,c]);return[c,f]}var yb=0,vb=()=>`__${String(++yb)}__`;function bb(){let{router:r}=Mp("useSubmit"),{basename:n}=A.useContext($t),s=Dv(),l=r.fetch,c=r.navigate;return A.useCallback(async(d,f={})=>{let{action:m,method:g,encType:y,formData:v,body:_}=Qv(d,n);if(f.navigate===!1){let x=f.fetcherKey||vb();await l(x,s,f.action||m,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||g,formEncType:f.encType||y,flushSync:f.flushSync})}else await c(f.action||m,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:v,body:_,formMethod:f.method||g,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:s,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,c,n,s])}function _b(r,{relative:n}={}){let{basename:s}=A.useContext($t),l=A.useContext(ea);De(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),d={...Di(r||".",{relative:n})},f=Za();if(r==null){d.search=f.search;let m=new URLSearchParams(d.search),g=m.getAll("index");if(g.some(v=>v==="")){m.delete("index"),g.filter(_=>_).forEach(_=>m.append("index",_));let v=m.toString();d.search=v?`?${v}`:""}}return(!r||r===".")&&c.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(d.pathname=d.pathname==="/"?s:wa([s,d.pathname])),Ei(d)}function wb(r,{relative:n}={}){let s=A.useContext(Tp);De(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Mp("useViewTransitionState"),c=Di(r,{relative:n});if(!s.isTransitioning)return!1;let d=xa(s.currentLocation.pathname,l)||s.currentLocation.pathname,f=xa(s.nextLocation.pathname,l)||s.nextLocation.pathname;return dl(c.pathname,f)!=null||dl(c.pathname,d)!=null}const Lp=(...r)=>r.filter((n,s,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===s).join(" ").trim();const xb=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const Sb=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,s,l)=>l?l.toUpperCase():s.toLowerCase());const Im=r=>{const n=Sb(r);return n.charAt(0).toUpperCase()+n.slice(1)};var jb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Eb=r=>{for(const n in r)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1};const Tb=A.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:d,iconNode:f,...m},g)=>A.createElement("svg",{ref:g,...jb,width:n,height:n,stroke:r,strokeWidth:l?Number(s)*24/Number(n):s,className:Lp("lucide",c),...!d&&!Eb(m)&&{"aria-hidden":"true"},...m},[...f.map(([y,v])=>A.createElement(y,v)),...Array.isArray(d)?d:[d]]));const oe=(r,n)=>{const s=A.forwardRef(({className:l,...c},d)=>A.createElement(Tb,{ref:d,iconNode:n,className:Lp(`lucide-${xb(Im(r))}`,`lucide-${r}`,l),...c}));return s.displayName=Im(r),s};const Ab=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],kb=oe("arrow-left",Ab);const Ob=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Rb=oe("arrow-right",Ob);const Nb=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Cb=oe("camera",Nb);const zb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],qp=oe("circle-check-big",zb);const Ub=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Db=oe("clock",Ub);const Mb=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Lb=oe("dollar-sign",Mb);const qb=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Bb=oe("facebook",qb);const Hb=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],$b=oe("gamepad-2",Hb);const Gb=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Vb=oe("headphones",Gb);const Yb=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],Bp=oe("heart",Yb);const Kb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Ib=oe("instagram",Kb);const Xb=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],Pb=oe("laptop",Xb);const Qb=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Hp=oe("loader",Qb);const Jb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Zb=oe("lock",Jb);const Wb=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Fb=oe("log-out",Wb);const e1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],$p=oe("mail",e1);const t1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Su=oe("map-pin",t1);const a1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],n1=oe("menu",a1);const r1=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],ju=oe("package",r1);const i1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],s1=oe("phone",i1);const l1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],o1=oe("plus",l1);const c1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],u1=oe("rotate-ccw",c1);const d1=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],h1=oe("save",d1);const f1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],m1=oe("search",f1);const p1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],g1=oe("shield-check",p1);const y1=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],v1=oe("shopping-bag",y1);const b1=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Eu=oe("shopping-cart",b1);const _1=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],w1=oe("sliders-horizontal",_1);const x1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],S1=oe("smartphone",x1);const j1=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],E1=oe("square-pen",j1);const T1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],_i=oe("star",T1);const A1=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],k1=oe("timer",A1);const O1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Gp=oe("trash-2",O1);const R1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],N1=oe("triangle-alert",R1);const C1=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],hl=oe("truck",C1);const z1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],U1=oe("twitter",z1);const D1=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],M1=oe("upload",D1);const L1=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Vp=oe("user",L1);const q1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],B1=oe("users",q1);const H1=[["path",{d:"M12 10v2.2l1.6 1",key:"n3r21l"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}]],$1=oe("watch",H1);const G1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yp=oe("x",G1);const V1=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],Y1=oe("youtube",V1);function vl(r,n){var s={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&n.indexOf(l)<0&&(s[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(r);c<l.length;c++)n.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(r,l[c])&&(s[l[c]]=r[l[c]]);return s}function K1(r,n,s,l){function c(d){return d instanceof s?d:new s(function(f){f(d)})}return new(s||(s=Promise))(function(d,f){function m(v){try{y(l.next(v))}catch(_){f(_)}}function g(v){try{y(l.throw(v))}catch(_){f(_)}}function y(v){v.done?d(v.value):c(v.value).then(m,g)}y((l=l.apply(r,n||[])).next())})}const I1=r=>r?(...n)=>r(...n):(...n)=>fetch(...n);class Tu extends Error{constructor(n,s="FunctionsError",l){super(n),this.name=s,this.context=l}}class X1 extends Tu{constructor(n){super("Failed to send a request to the Edge Function","FunctionsFetchError",n)}}class Xm extends Tu{constructor(n){super("Relay Error invoking the Edge Function","FunctionsRelayError",n)}}class Pm extends Tu{constructor(n){super("Edge Function returned a non-2xx status code","FunctionsHttpError",n)}}var su;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(su||(su={}));class P1{constructor(n,{headers:s={},customFetch:l,region:c=su.Any}={}){this.url=n,this.headers=s,this.region=c,this.fetch=I1(l)}setAuth(n){this.headers.Authorization=`Bearer ${n}`}invoke(n){return K1(this,arguments,void 0,function*(s,l={}){var c;let d,f;try{const{headers:m,method:g,body:y,signal:v,timeout:_}=l;let x={},{region:w}=l;w||(w=this.region);const j=new URL(`${this.url}/${s}`);w&&w!=="any"&&(x["x-region"]=w,j.searchParams.set("forceFunctionRegion",w));let O;y&&(m&&!Object.prototype.hasOwnProperty.call(m,"Content-Type")||!m)?typeof Blob<"u"&&y instanceof Blob||y instanceof ArrayBuffer?(x["Content-Type"]="application/octet-stream",O=y):typeof y=="string"?(x["Content-Type"]="text/plain",O=y):typeof FormData<"u"&&y instanceof FormData?O=y:(x["Content-Type"]="application/json",O=JSON.stringify(y)):y&&typeof y!="string"&&!(typeof Blob<"u"&&y instanceof Blob)&&!(y instanceof ArrayBuffer)&&!(typeof FormData<"u"&&y instanceof FormData)?O=JSON.stringify(y):O=y;let U=v;_&&(f=new AbortController,d=setTimeout(()=>f.abort(),_),v?(U=f.signal,v.addEventListener("abort",()=>f.abort())):U=f.signal);const q=yield this.fetch(j.toString(),{method:g||"POST",headers:Object.assign(Object.assign(Object.assign({},x),this.headers),m),body:O,signal:U}).catch(F=>{throw new X1(F)}),D=q.headers.get("x-relay-error");if(D&&D==="true")throw new Xm(q);if(!q.ok)throw new Pm(q);let C=((c=q.headers.get("Content-Type"))!==null&&c!==void 0?c:"text/plain").split(";")[0].trim(),V;return C==="application/json"?V=yield q.json():C==="application/octet-stream"||C==="application/pdf"?V=yield q.blob():C==="text/event-stream"?V=q:C==="multipart/form-data"?V=yield q.formData():V=yield q.text(),{data:V,error:null,response:q}}catch(m){return{data:null,error:m,response:m instanceof Pm||m instanceof Xm?m.context:void 0}}finally{d&&clearTimeout(d)}})}}var Q1=class extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}},J1=class{constructor(r){var n,s,l;this.shouldThrowOnError=!1,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(n=r.shouldThrowOnError)!==null&&n!==void 0?n:!1,this.signal=r.signal,this.isMaybeSingle=(s=r.isMaybeSingle)!==null&&s!==void 0?s:!1,this.urlLengthLimit=(l=r.urlLengthLimit)!==null&&l!==void 0?l:8e3,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,n){return this.headers=new Headers(this.headers),this.headers.set(r,n),this}then(r,n){var s=this;this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const l=this.fetch;let c=l(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async d=>{let f=null,m=null,g=null,y=d.status,v=d.statusText;if(d.ok){var _,x;if(s.method!=="HEAD"){var w;const q=await d.text();q===""||(s.headers.get("Accept")==="text/csv"||s.headers.get("Accept")&&(!((w=s.headers.get("Accept"))===null||w===void 0)&&w.includes("application/vnd.pgrst.plan+text"))?m=q:m=JSON.parse(q))}const O=(_=s.headers.get("Prefer"))===null||_===void 0?void 0:_.match(/count=(exact|planned|estimated)/),U=(x=d.headers.get("content-range"))===null||x===void 0?void 0:x.split("/");O&&U&&U.length>1&&(g=parseInt(U[1])),s.isMaybeSingle&&s.method==="GET"&&Array.isArray(m)&&(m.length>1?(f={code:"PGRST116",details:`Results contain ${m.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},m=null,g=null,y=406,v="Not Acceptable"):m.length===1?m=m[0]:m=null)}else{var j;const O=await d.text();try{f=JSON.parse(O),Array.isArray(f)&&d.status===404&&(m=[],f=null,y=200,v="OK")}catch{d.status===404&&O===""?(y=204,v="No Content"):f={message:O}}if(f&&s.isMaybeSingle&&(!(f==null||(j=f.details)===null||j===void 0)&&j.includes("0 rows"))&&(f=null,y=200,v="OK"),f&&s.shouldThrowOnError)throw new Q1(f)}return{error:f,data:m,count:g,status:y,statusText:v}});return this.shouldThrowOnError||(c=c.catch(d=>{var f;let m="",g="",y="";const v=d?.cause;if(v){var _,x,w,j;const q=(_=v?.message)!==null&&_!==void 0?_:"",D=(x=v?.code)!==null&&x!==void 0?x:"";m=`${(w=d?.name)!==null&&w!==void 0?w:"FetchError"}: ${d?.message}`,m+=`

Caused by: ${(j=v?.name)!==null&&j!==void 0?j:"Error"}: ${q}`,D&&(m+=` (${D})`),v?.stack&&(m+=`
${v.stack}`)}else{var O;m=(O=d?.stack)!==null&&O!==void 0?O:""}const U=this.url.toString().length;return d?.name==="AbortError"||d?.code==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",U>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${U} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(v?.name==="HeadersOverflowError"||v?.code==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",U>this.urlLengthLimit&&(g+=`. Your request URL is ${U} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{error:{message:`${(f=d?.name)!==null&&f!==void 0?f:"FetchError"}: ${d?.message}`,details:m,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),c.then(r,n)}returns(){return this}overrideTypes(){return this}},Z1=class extends J1{select(r){let n=!1;const s=(r??"*").split("").map(l=>/\s/.test(l)&&!n?"":(l==='"'&&(n=!n),l)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:n=!0,nullsFirst:s,foreignTable:l,referencedTable:c=l}={}){const d=c?`${c}.order`:"order",f=this.url.searchParams.get(d);return this.url.searchParams.set(d,`${f?`${f},`:""}${r}.${n?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:n,referencedTable:s=n}={}){const l=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(l,`${r}`),this}range(r,n,{foreignTable:s,referencedTable:l=s}={}){const c=typeof l>"u"?"offset":`${l}.offset`,d=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(c,`${r}`),this.url.searchParams.set(d,`${n-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:n=!1,settings:s=!1,buffers:l=!1,wal:c=!1,format:d="text"}={}){var f;const m=[r?"analyze":null,n?"verbose":null,s?"settings":null,l?"buffers":null,c?"wal":null].filter(Boolean).join("|"),g=(f=this.headers.get("Accept"))!==null&&f!==void 0?f:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${d}; for="${g}"; options=${m};`),d==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}};const Qm=new RegExp("[,()]");var gr=class extends Z1{eq(r,n){return this.url.searchParams.append(r,`eq.${n}`),this}neq(r,n){return this.url.searchParams.append(r,`neq.${n}`),this}gt(r,n){return this.url.searchParams.append(r,`gt.${n}`),this}gte(r,n){return this.url.searchParams.append(r,`gte.${n}`),this}lt(r,n){return this.url.searchParams.append(r,`lt.${n}`),this}lte(r,n){return this.url.searchParams.append(r,`lte.${n}`),this}like(r,n){return this.url.searchParams.append(r,`like.${n}`),this}likeAllOf(r,n){return this.url.searchParams.append(r,`like(all).{${n.join(",")}}`),this}likeAnyOf(r,n){return this.url.searchParams.append(r,`like(any).{${n.join(",")}}`),this}ilike(r,n){return this.url.searchParams.append(r,`ilike.${n}`),this}ilikeAllOf(r,n){return this.url.searchParams.append(r,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(r,n){return this.url.searchParams.append(r,`ilike(any).{${n.join(",")}}`),this}regexMatch(r,n){return this.url.searchParams.append(r,`match.${n}`),this}regexIMatch(r,n){return this.url.searchParams.append(r,`imatch.${n}`),this}is(r,n){return this.url.searchParams.append(r,`is.${n}`),this}isDistinct(r,n){return this.url.searchParams.append(r,`isdistinct.${n}`),this}in(r,n){const s=Array.from(new Set(n)).map(l=>typeof l=="string"&&Qm.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(r,`in.(${s})`),this}notIn(r,n){const s=Array.from(new Set(n)).map(l=>typeof l=="string"&&Qm.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(r,`not.in.(${s})`),this}contains(r,n){return typeof n=="string"?this.url.searchParams.append(r,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(r,`cs.{${n.join(",")}}`):this.url.searchParams.append(r,`cs.${JSON.stringify(n)}`),this}containedBy(r,n){return typeof n=="string"?this.url.searchParams.append(r,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(r,`cd.{${n.join(",")}}`):this.url.searchParams.append(r,`cd.${JSON.stringify(n)}`),this}rangeGt(r,n){return this.url.searchParams.append(r,`sr.${n}`),this}rangeGte(r,n){return this.url.searchParams.append(r,`nxl.${n}`),this}rangeLt(r,n){return this.url.searchParams.append(r,`sl.${n}`),this}rangeLte(r,n){return this.url.searchParams.append(r,`nxr.${n}`),this}rangeAdjacent(r,n){return this.url.searchParams.append(r,`adj.${n}`),this}overlaps(r,n){return typeof n=="string"?this.url.searchParams.append(r,`ov.${n}`):this.url.searchParams.append(r,`ov.{${n.join(",")}}`),this}textSearch(r,n,{config:s,type:l}={}){let c="";l==="plain"?c="pl":l==="phrase"?c="ph":l==="websearch"&&(c="w");const d=s===void 0?"":`(${s})`;return this.url.searchParams.append(r,`${c}fts${d}.${n}`),this}match(r){return Object.entries(r).forEach(([n,s])=>{this.url.searchParams.append(n,`eq.${s}`)}),this}not(r,n,s){return this.url.searchParams.append(r,`not.${n}.${s}`),this}or(r,{foreignTable:n,referencedTable:s=n}={}){const l=s?`${s}.or`:"or";return this.url.searchParams.append(l,`(${r})`),this}filter(r,n,s){return this.url.searchParams.append(r,`${n}.${s}`),this}},W1=class{constructor(r,{headers:n={},schema:s,fetch:l,urlLengthLimit:c=8e3}){this.url=r,this.headers=new Headers(n),this.schema=s,this.fetch=l,this.urlLengthLimit=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(r,n){const{head:s=!1,count:l}=n??{},c=s?"HEAD":"GET";let d=!1;const f=(r??"*").split("").map(y=>/\s/.test(y)&&!d?"":(y==='"'&&(d=!d),y)).join(""),{url:m,headers:g}=this.cloneRequestState();return m.searchParams.set("select",f),l&&g.append("Prefer",`count=${l}`),new gr({method:c,url:m,headers:g,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}insert(r,{count:n,defaultToNull:s=!0}={}){var l;const c="POST",{url:d,headers:f}=this.cloneRequestState();if(n&&f.append("Prefer",`count=${n}`),s||f.append("Prefer","missing=default"),Array.isArray(r)){const m=r.reduce((g,y)=>g.concat(Object.keys(y)),[]);if(m.length>0){const g=[...new Set(m)].map(y=>`"${y}"`);d.searchParams.set("columns",g.join(","))}}return new gr({method:c,url:d,headers:f,schema:this.schema,body:r,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit})}upsert(r,{onConflict:n,ignoreDuplicates:s=!1,count:l,defaultToNull:c=!0}={}){var d;const f="POST",{url:m,headers:g}=this.cloneRequestState();if(g.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),n!==void 0&&m.searchParams.set("on_conflict",n),l&&g.append("Prefer",`count=${l}`),c||g.append("Prefer","missing=default"),Array.isArray(r)){const y=r.reduce((v,_)=>v.concat(Object.keys(_)),[]);if(y.length>0){const v=[...new Set(y)].map(_=>`"${_}"`);m.searchParams.set("columns",v.join(","))}}return new gr({method:f,url:m,headers:g,schema:this.schema,body:r,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit})}update(r,{count:n}={}){var s;const l="PATCH",{url:c,headers:d}=this.cloneRequestState();return n&&d.append("Prefer",`count=${n}`),new gr({method:l,url:c,headers:d,schema:this.schema,body:r,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit})}delete({count:r}={}){var n;const s="DELETE",{url:l,headers:c}=this.cloneRequestState();return r&&c.append("Prefer",`count=${r}`),new gr({method:s,url:l,headers:c,schema:this.schema,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit})}};function Ti(r){"@babel/helpers - typeof";return Ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ti(r)}function F1(r,n){if(Ti(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var l=s.call(r,n);if(Ti(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function e2(r){var n=F1(r,"string");return Ti(n)=="symbol"?n:n+""}function t2(r,n,s){return(n=e2(n))in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,r}function Jm(r,n){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,l)}return s}function al(r){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?Jm(Object(s),!0).forEach(function(l){t2(r,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):Jm(Object(s)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(s,l))})}return r}var a2=class Kp{constructor(n,{headers:s={},schema:l,fetch:c,timeout:d,urlLengthLimit:f=8e3}={}){this.url=n,this.headers=new Headers(s),this.schemaName=l,this.urlLengthLimit=f;const m=c??globalThis.fetch;d!==void 0&&d>0?this.fetch=(g,y)=>{const v=new AbortController,_=setTimeout(()=>v.abort(),d),x=y?.signal;if(x){if(x.aborted)return clearTimeout(_),m(g,y);const w=()=>{clearTimeout(_),v.abort()};return x.addEventListener("abort",w,{once:!0}),m(g,al(al({},y),{},{signal:v.signal})).finally(()=>{clearTimeout(_),x.removeEventListener("abort",w)})}return m(g,al(al({},y),{},{signal:v.signal})).finally(()=>clearTimeout(_))}:this.fetch=m}from(n){if(!n||typeof n!="string"||n.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new W1(new URL(`${this.url}/${n}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}schema(n){return new Kp(this.url,{headers:this.headers,schema:n,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit})}rpc(n,s={},{head:l=!1,get:c=!1,count:d}={}){var f;let m;const g=new URL(`${this.url}/rpc/${n}`);let y;const v=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(v)),_=l&&Object.values(s).some(v);_?(m="POST",y=s):l||c?(m=l?"HEAD":"GET",Object.entries(s).filter(([w,j])=>j!==void 0).map(([w,j])=>[w,Array.isArray(j)?`{${j.join(",")}}`:`${j}`]).forEach(([w,j])=>{g.searchParams.append(w,j)})):(m="POST",y=s);const x=new Headers(this.headers);return _?x.set("Prefer",d?`count=${d},return=minimal`:"return=minimal"):d&&x.set("Prefer",`count=${d}`),new gr({method:m,url:g,headers:x,schema:this.schemaName,body:y,fetch:(f=this.fetch)!==null&&f!==void 0?f:fetch,urlLengthLimit:this.urlLengthLimit})}};class n2{constructor(){}static detectEnvironment(){var n;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((n=navigator.userAgent)===null||n===void 0)&&n.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const s=globalThis.process;if(s){const l=s.versions;if(l&&l.node){const c=l.node,d=parseInt(c.replace(/^v/,"").split(".")[0]);return d>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${d} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${d} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const n=this.detectEnvironment();if(n.constructor)return n.constructor;let s=n.error||"WebSocket not supported in this environment.";throw n.workaround&&(s+=`

Suggested solution: ${n.workaround}`),new Error(s)}static createWebSocket(n,s){const l=this.getWebSocketConstructor();return new l(n,s)}static isWebSocketSupported(){try{const n=this.detectEnvironment();return n.type==="native"||n.type==="ws"}catch{return!1}}}const r2="2.95.3",i2=`realtime-js/${r2}`,s2="1.0.0",Ip="2.0.0",Zm=Ip,lu=1e4,l2=1e3,o2=100;var Qa;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(Qa||(Qa={}));var Pe;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(Pe||(Pe={}));var Xt;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(Xt||(Xt={}));var ou;(function(r){r.websocket="websocket"})(ou||(ou={}));var wn;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})(wn||(wn={}));class c2{constructor(n){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=n??[]}encode(n,s){if(n.event===this.BROADCAST_EVENT&&!(n.payload instanceof ArrayBuffer)&&typeof n.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(n));let l=[n.join_ref,n.ref,n.topic,n.event,n.payload];return s(JSON.stringify(l))}_binaryEncodeUserBroadcastPush(n){var s;return this._isArrayBuffer((s=n.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(n):this._encodeJsonUserBroadcastPush(n)}_encodeBinaryUserBroadcastPush(n){var s,l;const c=(l=(s=n.payload)===null||s===void 0?void 0:s.payload)!==null&&l!==void 0?l:new ArrayBuffer(0);return this._encodeUserBroadcastPush(n,this.BINARY_ENCODING,c)}_encodeJsonUserBroadcastPush(n){var s,l;const c=(l=(s=n.payload)===null||s===void 0?void 0:s.payload)!==null&&l!==void 0?l:{},f=new TextEncoder().encode(JSON.stringify(c)).buffer;return this._encodeUserBroadcastPush(n,this.JSON_ENCODING,f)}_encodeUserBroadcastPush(n,s,l){var c,d;const f=n.topic,m=(c=n.ref)!==null&&c!==void 0?c:"",g=(d=n.join_ref)!==null&&d!==void 0?d:"",y=n.payload.event,v=this.allowedMetadataKeys?this._pick(n.payload,this.allowedMetadataKeys):{},_=Object.keys(v).length===0?"":JSON.stringify(v);if(g.length>255)throw new Error(`joinRef length ${g.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`ref length ${m.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`topic length ${f.length} exceeds maximum of 255`);if(y.length>255)throw new Error(`userEvent length ${y.length} exceeds maximum of 255`);if(_.length>255)throw new Error(`metadata length ${_.length} exceeds maximum of 255`);const x=this.USER_BROADCAST_PUSH_META_LENGTH+g.length+m.length+f.length+y.length+_.length,w=new ArrayBuffer(this.HEADER_LENGTH+x);let j=new DataView(w),O=0;j.setUint8(O++,this.KINDS.userBroadcastPush),j.setUint8(O++,g.length),j.setUint8(O++,m.length),j.setUint8(O++,f.length),j.setUint8(O++,y.length),j.setUint8(O++,_.length),j.setUint8(O++,s),Array.from(g,q=>j.setUint8(O++,q.charCodeAt(0))),Array.from(m,q=>j.setUint8(O++,q.charCodeAt(0))),Array.from(f,q=>j.setUint8(O++,q.charCodeAt(0))),Array.from(y,q=>j.setUint8(O++,q.charCodeAt(0))),Array.from(_,q=>j.setUint8(O++,q.charCodeAt(0)));var U=new Uint8Array(w.byteLength+l.byteLength);return U.set(new Uint8Array(w),0),U.set(new Uint8Array(l),w.byteLength),U.buffer}decode(n,s){if(this._isArrayBuffer(n)){let l=this._binaryDecode(n);return s(l)}if(typeof n=="string"){const l=JSON.parse(n),[c,d,f,m,g]=l;return s({join_ref:c,ref:d,topic:f,event:m,payload:g})}return s({})}_binaryDecode(n){const s=new DataView(n),l=s.getUint8(0),c=new TextDecoder;if(l===this.KINDS.userBroadcast)return this._decodeUserBroadcast(n,s,c)}_decodeUserBroadcast(n,s,l){const c=s.getUint8(1),d=s.getUint8(2),f=s.getUint8(3),m=s.getUint8(4);let g=this.HEADER_LENGTH+4;const y=l.decode(n.slice(g,g+c));g=g+c;const v=l.decode(n.slice(g,g+d));g=g+d;const _=l.decode(n.slice(g,g+f));g=g+f;const x=n.slice(g,n.byteLength),w=m===this.JSON_ENCODING?JSON.parse(l.decode(x)):x,j={type:this.BROADCAST_EVENT,event:v,payload:w};return f>0&&(j.meta=JSON.parse(_)),{join_ref:null,ref:null,topic:y,event:this.BROADCAST_EVENT,payload:j}}_isArrayBuffer(n){var s;return n instanceof ArrayBuffer||((s=n?.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(n,s){return!n||typeof n!="object"?{}:Object.fromEntries(Object.entries(n).filter(([l])=>s.includes(l)))}}class Xp{constructor(n,s){this.callback=n,this.timerCalc=s,this.timer=void 0,this.tries=0,this.callback=n,this.timerCalc=s}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var Ne;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(Ne||(Ne={}));const Wm=(r,n,s={})=>{var l;const c=(l=s.skipTypes)!==null&&l!==void 0?l:[];return n?Object.keys(n).reduce((d,f)=>(d[f]=u2(f,r,n,c),d),{}):{}},u2=(r,n,s,l)=>{const c=n.find(m=>m.name===r),d=c?.type,f=s[r];return d&&!l.includes(d)?Pp(d,f):cu(f)},Pp=(r,n)=>{if(r.charAt(0)==="_"){const s=r.slice(1,r.length);return m2(n,s)}switch(r){case Ne.bool:return d2(n);case Ne.float4:case Ne.float8:case Ne.int2:case Ne.int4:case Ne.int8:case Ne.numeric:case Ne.oid:return h2(n);case Ne.json:case Ne.jsonb:return f2(n);case Ne.timestamp:return p2(n);case Ne.abstime:case Ne.date:case Ne.daterange:case Ne.int4range:case Ne.int8range:case Ne.money:case Ne.reltime:case Ne.text:case Ne.time:case Ne.timestamptz:case Ne.timetz:case Ne.tsrange:case Ne.tstzrange:return cu(n);default:return cu(n)}},cu=r=>r,d2=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},h2=r=>{if(typeof r=="string"){const n=parseFloat(r);if(!Number.isNaN(n))return n}return r},f2=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch{return r}return r},m2=(r,n)=>{if(typeof r!="string")return r;const s=r.length-1,l=r[s];if(r[0]==="{"&&l==="}"){let d;const f=r.slice(1,s);try{d=JSON.parse("["+f+"]")}catch{d=f?f.split(","):[]}return d.map(m=>Pp(n,m))}return r},p2=r=>typeof r=="string"?r.replace(" ","T"):r,Qp=r=>{const n=new URL(r);return n.protocol=n.protocol.replace(/^ws/i,"http"),n.pathname=n.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),n.pathname===""||n.pathname==="/"?n.pathname="/api/broadcast":n.pathname=n.pathname+"/api/broadcast",n.href};class Jc{constructor(n,s,l={},c=lu){this.channel=n,this.event=s,this.payload=l,this.timeout=c,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(n){this.timeout=n,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(n){this.payload=Object.assign(Object.assign({},this.payload),n)}receive(n,s){var l;return this._hasReceived(n)&&s((l=this.receivedResp)===null||l===void 0?void 0:l.response),this.recHooks.push({status:n,callback:s}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const n=s=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=s,this._matchReceive(s)};this.channel._on(this.refEvent,{},n),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(n,s){this.refEvent&&this.channel._trigger(this.refEvent,{status:n,response:s})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:n,response:s}){this.recHooks.filter(l=>l.status===n).forEach(l=>l.callback(s))}_hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}}var Fm;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(Fm||(Fm={}));class Si{constructor(n,s){this.channel=n,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const l=s?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(l.state,{},c=>{const{onJoin:d,onLeave:f,onSync:m}=this.caller;this.joinRef=this.channel._joinRef(),this.state=Si.syncState(this.state,c,d,f),this.pendingDiffs.forEach(g=>{this.state=Si.syncDiff(this.state,g,d,f)}),this.pendingDiffs=[],m()}),this.channel._on(l.diff,{},c=>{const{onJoin:d,onLeave:f,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(c):(this.state=Si.syncDiff(this.state,c,d,f),m())}),this.onJoin((c,d,f)=>{this.channel._trigger("presence",{event:"join",key:c,currentPresences:d,newPresences:f})}),this.onLeave((c,d,f)=>{this.channel._trigger("presence",{event:"leave",key:c,currentPresences:d,leftPresences:f})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(n,s,l,c){const d=this.cloneDeep(n),f=this.transformState(s),m={},g={};return this.map(d,(y,v)=>{f[y]||(g[y]=v)}),this.map(f,(y,v)=>{const _=d[y];if(_){const x=v.map(U=>U.presence_ref),w=_.map(U=>U.presence_ref),j=v.filter(U=>w.indexOf(U.presence_ref)<0),O=_.filter(U=>x.indexOf(U.presence_ref)<0);j.length>0&&(m[y]=j),O.length>0&&(g[y]=O)}else m[y]=v}),this.syncDiff(d,{joins:m,leaves:g},l,c)}static syncDiff(n,s,l,c){const{joins:d,leaves:f}={joins:this.transformState(s.joins),leaves:this.transformState(s.leaves)};return l||(l=()=>{}),c||(c=()=>{}),this.map(d,(m,g)=>{var y;const v=(y=n[m])!==null&&y!==void 0?y:[];if(n[m]=this.cloneDeep(g),v.length>0){const _=n[m].map(w=>w.presence_ref),x=v.filter(w=>_.indexOf(w.presence_ref)<0);n[m].unshift(...x)}l(m,v,g)}),this.map(f,(m,g)=>{let y=n[m];if(!y)return;const v=g.map(_=>_.presence_ref);y=y.filter(_=>v.indexOf(_.presence_ref)<0),n[m]=y,c(m,y,g),y.length===0&&delete n[m]}),n}static map(n,s){return Object.getOwnPropertyNames(n).map(l=>s(l,n[l]))}static transformState(n){return n=this.cloneDeep(n),Object.getOwnPropertyNames(n).reduce((s,l)=>{const c=n[l];return"metas"in c?s[l]=c.metas.map(d=>(d.presence_ref=d.phx_ref,delete d.phx_ref,delete d.phx_ref_prev,d)):s[l]=c,s},{})}static cloneDeep(n){return JSON.parse(JSON.stringify(n))}onJoin(n){this.caller.onJoin=n}onLeave(n){this.caller.onLeave=n}onSync(n){this.caller.onSync=n}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var ep;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(ep||(ep={}));var ji;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(ji||(ji={}));var _a;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(_a||(_a={}));class br{constructor(n,s={config:{}},l){var c,d;if(this.topic=n,this.params=s,this.socket=l,this.bindings={},this.state=Pe.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=n.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.timeout=this.socket.timeout,this.joinPush=new Jc(this,Xt.join,this.params,this.timeout),this.rejoinTimer=new Xp(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Pe.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(f=>f.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Pe.closed,this.socket._remove(this)}),this._onError(f=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,f),this.state=Pe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Pe.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",f=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,f),this.state=Pe.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Xt.reply,{},(f,m)=>{this._trigger(this._replyEventName(m),f)}),this.presence=new Si(this),this.broadcastEndpointURL=Qp(this.socket.endPoint),this.private=this.params.config.private||!1,!this.private&&(!((d=(c=this.params.config)===null||c===void 0?void 0:c.broadcast)===null||d===void 0)&&d.replay))throw`tried to use replay on public channel '${this.topic}'. It must be a private channel.`}subscribe(n,s=this.timeout){var l,c,d;if(this.socket.isConnected()||this.socket.connect(),this.state==Pe.closed){const{config:{broadcast:f,presence:m,private:g}}=this.params,y=(c=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(w=>w.filter))!==null&&c!==void 0?c:[],v=!!this.bindings[ji.PRESENCE]&&this.bindings[ji.PRESENCE].length>0||((d=this.params.config.presence)===null||d===void 0?void 0:d.enabled)===!0,_={},x={broadcast:f,presence:Object.assign(Object.assign({},m),{enabled:v}),postgres_changes:y,private:g};this.socket.accessTokenValue&&(_.access_token=this.socket.accessTokenValue),this._onError(w=>n?.(_a.CHANNEL_ERROR,w)),this._onClose(()=>n?.(_a.CLOSED)),this.updateJoinPayload(Object.assign({config:x},_)),this.joinedOnce=!0,this._rejoin(s),this.joinPush.receive("ok",async({postgres_changes:w})=>{var j;if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){n?.(_a.SUBSCRIBED);return}else{const O=this.bindings.postgres_changes,U=(j=O?.length)!==null&&j!==void 0?j:0,q=[];for(let D=0;D<U;D++){const C=O[D],{filter:{event:V,schema:F,table:K,filter:P}}=C,ve=w&&w[D];if(ve&&ve.event===V&&br.isFilterValueEqual(ve.schema,F)&&br.isFilterValueEqual(ve.table,K)&&br.isFilterValueEqual(ve.filter,P))q.push(Object.assign(Object.assign({},C),{id:ve.id}));else{this.unsubscribe(),this.state=Pe.errored,n?.(_a.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=q,n&&n(_a.SUBSCRIBED);return}}).receive("error",w=>{this.state=Pe.errored,n?.(_a.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(w).join(", ")||"error")))}).receive("timeout",()=>{n?.(_a.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(n,s={}){return await this.send({type:"presence",event:"track",payload:n},s.timeout||this.timeout)}async untrack(n={}){return await this.send({type:"presence",event:"untrack"},n)}on(n,s,l){return this.state===Pe.joined&&n===ji.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(async()=>await this.subscribe())),this._on(n,s,l)}async httpSend(n,s,l={}){var c;if(s==null)return Promise.reject("Payload is required for httpSend()");const d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const f={method:"POST",headers:d,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:s,private:this.private}]})},m=await this._fetchWithTimeout(this.broadcastEndpointURL,f,(c=l.timeout)!==null&&c!==void 0?c:this.timeout);if(m.status===202)return{success:!0};let g=m.statusText;try{const y=await m.json();g=y.error||y.message||g}catch{}return Promise.reject(new Error(g))}async send(n,s={}){var l,c;if(!this._canPush()&&n.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:d,payload:f}=n,m={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(m.Authorization=`Bearer ${this.socket.accessTokenValue}`);const g={method:"POST",headers:m,body:JSON.stringify({messages:[{topic:this.subTopic,event:d,payload:f,private:this.private}]})};try{const y=await this._fetchWithTimeout(this.broadcastEndpointURL,g,(l=s.timeout)!==null&&l!==void 0?l:this.timeout);return await((c=y.body)===null||c===void 0?void 0:c.cancel()),y.ok?"ok":"error"}catch(y){return y.name==="AbortError"?"timed out":"error"}}else return new Promise(d=>{var f,m,g;const y=this._push(n.type,n,s.timeout||this.timeout);n.type==="broadcast"&&!(!((g=(m=(f=this.params)===null||f===void 0?void 0:f.config)===null||m===void 0?void 0:m.broadcast)===null||g===void 0)&&g.ack)&&d("ok"),y.receive("ok",()=>d("ok")),y.receive("error",()=>d("error")),y.receive("timeout",()=>d("timed out"))})}updateJoinPayload(n){this.joinPush.updatePayload(n)}unsubscribe(n=this.timeout){this.state=Pe.leaving;const s=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Xt.close,"leave",this._joinRef())};this.joinPush.destroy();let l=null;return new Promise(c=>{l=new Jc(this,Xt.leave,{},n),l.receive("ok",()=>{s(),c("ok")}).receive("timeout",()=>{s(),c("timed out")}).receive("error",()=>{c("error")}),l.send(),this._canPush()||l.trigger("ok",{})}).finally(()=>{l?.destroy()})}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Pe.closed,this.bindings={}}async _fetchWithTimeout(n,s,l){const c=new AbortController,d=setTimeout(()=>c.abort(),l),f=await this.socket.fetch(n,Object.assign(Object.assign({},s),{signal:c.signal}));return clearTimeout(d),f}_push(n,s,l=this.timeout){if(!this.joinedOnce)throw`tried to push '${n}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let c=new Jc(this,n,s,l);return this._canPush()?c.send():this._addToPushBuffer(c),c}_addToPushBuffer(n){if(n.startTimeout(),this.pushBuffer.push(n),this.pushBuffer.length>o2){const s=this.pushBuffer.shift();s&&(s.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${s.event}`,s.payload))}}_onMessage(n,s,l){return s}_isMember(n){return this.topic===n}_joinRef(){return this.joinPush.ref}_trigger(n,s,l){var c,d;const f=n.toLocaleLowerCase(),{close:m,error:g,leave:y,join:v}=Xt;if(l&&[m,g,y,v].indexOf(f)>=0&&l!==this._joinRef())return;let x=this._onMessage(f,s,l);if(s&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(f)?(c=this.bindings.postgres_changes)===null||c===void 0||c.filter(w=>{var j,O,U;return((j=w.filter)===null||j===void 0?void 0:j.event)==="*"||((U=(O=w.filter)===null||O===void 0?void 0:O.event)===null||U===void 0?void 0:U.toLocaleLowerCase())===f}).map(w=>w.callback(x,l)):(d=this.bindings[f])===null||d===void 0||d.filter(w=>{var j,O,U,q,D,C;if(["broadcast","presence","postgres_changes"].includes(f))if("id"in w){const V=w.id,F=(j=w.filter)===null||j===void 0?void 0:j.event;return V&&((O=s.ids)===null||O===void 0?void 0:O.includes(V))&&(F==="*"||F?.toLocaleLowerCase()===((U=s.data)===null||U===void 0?void 0:U.type.toLocaleLowerCase()))}else{const V=(D=(q=w?.filter)===null||q===void 0?void 0:q.event)===null||D===void 0?void 0:D.toLocaleLowerCase();return V==="*"||V===((C=s?.event)===null||C===void 0?void 0:C.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===f}).map(w=>{if(typeof x=="object"&&"ids"in x){const j=x.data,{schema:O,table:U,commit_timestamp:q,type:D,errors:C}=j;x=Object.assign(Object.assign({},{schema:O,table:U,commit_timestamp:q,eventType:D,new:{},old:{},errors:C}),this._getPayloadRecords(j))}w.callback(x,l)})}_isClosed(){return this.state===Pe.closed}_isJoined(){return this.state===Pe.joined}_isJoining(){return this.state===Pe.joining}_isLeaving(){return this.state===Pe.leaving}_replyEventName(n){return`chan_reply_${n}`}_on(n,s,l){const c=n.toLocaleLowerCase(),d={type:c,filter:s,callback:l};return this.bindings[c]?this.bindings[c].push(d):this.bindings[c]=[d],this}_off(n,s){const l=n.toLocaleLowerCase();return this.bindings[l]&&(this.bindings[l]=this.bindings[l].filter(c=>{var d;return!(((d=c.type)===null||d===void 0?void 0:d.toLocaleLowerCase())===l&&br.isEqual(c.filter,s))})),this}static isEqual(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const l in n)if(n[l]!==s[l])return!1;return!0}static isFilterValueEqual(n,s){return(n??void 0)===(s??void 0)}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(n){this._on(Xt.close,{},n)}_onError(n){this._on(Xt.error,{},s=>n(s))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(n=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Pe.joining,this.joinPush.resend(n))}_getPayloadRecords(n){const s={new:{},old:{}};return(n.type==="INSERT"||n.type==="UPDATE")&&(s.new=Wm(n.columns,n.record)),(n.type==="UPDATE"||n.type==="DELETE")&&(s.old=Wm(n.columns,n.old_record)),s}}const Zc=()=>{},nl={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},g2=[1e3,2e3,5e3,1e4],y2=1e4,v2=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class b2{constructor(n,s){var l;if(this.accessTokenValue=null,this.apiKey=null,this._manuallySetToken=!1,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=lu,this.transport=null,this.heartbeatIntervalMs=nl.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Zc,this.ref=0,this.reconnectTimer=null,this.vsn=Zm,this.logger=Zc,this.conn=null,this.sendBuffer=[],this.serializer=new c2,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._heartbeatSentAt=null,this._resolveFetch=c=>c?(...d)=>c(...d):(...d)=>fetch(...d),!(!((l=s?.params)===null||l===void 0)&&l.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey,this.endPoint=`${n}/${ou.websocket}`,this.httpEndpoint=Qp(n),this._initializeOptions(s),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(s?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=n2.createWebSocket(this.endpointURL())}catch(n){this._setConnectionState("disconnected");const s=n.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:this.vsn}))}disconnect(n,s){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const l=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(l),this._setConnectionState("disconnected")},typeof this.conn.close=="function"&&(n?this.conn.close(n,s??""):this.conn.close()),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(n){const s=await n.unsubscribe();return s==="ok"&&this._remove(n),this.channels.length===0&&this.disconnect(),s}async removeAllChannels(){const n=await Promise.all(this.channels.map(s=>s.unsubscribe()));return this.channels=[],this.disconnect(),n}log(n,s,l){this.logger(n,s,l)}connectionState(){switch(this.conn&&this.conn.readyState){case Qa.connecting:return wn.Connecting;case Qa.open:return wn.Open;case Qa.closing:return wn.Closing;default:return wn.Closed}}isConnected(){return this.connectionState()===wn.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(n,s={config:{}}){const l=`realtime:${n}`,c=this.getChannels().find(d=>d.topic===l);if(c)return c;{const d=new br(`realtime:${n}`,s,this);return this.channels.push(d),d}}push(n){const{topic:s,event:l,payload:c,ref:d}=n,f=()=>{this.encode(n,m=>{var g;(g=this.conn)===null||g===void 0||g.send(m)})};this.log("push",`${s} ${l} (${d})`,c),this.isConnected()?f():this.sendBuffer.push(f)}async setAuth(n=null){this._authPromise=this._performAuth(n);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){var n;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(s){this.log("error","error in heartbeat callback",s)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this._heartbeatSentAt=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(s){this.log("error","error in heartbeat callback",s)}this._wasManualDisconnect=!1,(n=this.conn)===null||n===void 0||n.close(l2,"heartbeat timeout"),setTimeout(()=>{var s;this.isConnected()||(s=this.reconnectTimer)===null||s===void 0||s.scheduleTimeout()},nl.HEARTBEAT_TIMEOUT_FALLBACK);return}this._heartbeatSentAt=Date.now(),this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(s){this.log("error","error in heartbeat callback",s)}this._setAuthSafely("heartbeat")}onHeartbeat(n){this.heartbeatCallback=n}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}_makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}_leaveOpenTopic(n){let s=this.channels.find(l=>l.topic===n&&(l._isJoined()||l._isJoining()));s&&(this.log("transport",`leaving duplicate topic "${n}"`),s.unsubscribe())}_remove(n){this.channels=this.channels.filter(s=>s.topic!==n.topic)}_onConnMessage(n){this.decode(n.data,s=>{if(s.topic==="phoenix"&&s.event==="phx_reply"&&s.ref&&s.ref===this.pendingHeartbeatRef){const y=this._heartbeatSentAt?Date.now()-this._heartbeatSentAt:void 0;try{this.heartbeatCallback(s.payload.status==="ok"?"ok":"error",y)}catch(v){this.log("error","error in heartbeat callback",v)}this._heartbeatSentAt=null,this.pendingHeartbeatRef=null}const{topic:l,event:c,payload:d,ref:f}=s,m=f?`(${f})`:"",g=d.status||"";this.log("receive",`${g} ${l} ${c} ${m}`.trim(),d),this.channels.filter(y=>y._isMember(l)).forEach(y=>y._trigger(c,d,f)),this._triggerStateCallbacks("message",s)})}_clearTimer(n){var s;n==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):n==="reconnect"&&((s=this.reconnectTimer)===null||s===void 0||s.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=n=>this._onConnError(n),this.conn.onmessage=n=>this._onConnMessage(n),this.conn.onclose=n=>this._onConnClose(n),this.conn.readyState===Qa.open&&this._onConnOpen())}_teardownConnection(){if(this.conn){if(this.conn.readyState===Qa.open||this.conn.readyState===Qa.connecting)try{this.conn.close()}catch(n){this.log("error","Error closing connection",n)}this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null}this._clearAllTimers(),this._terminateWorker(),this.channels.forEach(n=>n.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).then(()=>{this.flushSendBuffer()}).catch(s=>{this.log("error","error waiting for auth on connect",s),this.flushSendBuffer()}),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const n=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(n),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_onConnClose(n){var s;this._setConnectionState("disconnected"),this.log("transport","close",n),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(s=this.reconnectTimer)===null||s===void 0||s.scheduleTimeout(),this._triggerStateCallbacks("close",n)}_onConnError(n){this._setConnectionState("disconnected"),this.log("transport",`${n}`),this._triggerChanError(),this._triggerStateCallbacks("error",n);try{this.heartbeatCallback("error")}catch(s){this.log("error","error in heartbeat callback",s)}}_triggerChanError(){this.channels.forEach(n=>n._trigger(Xt.error))}_appendParams(n,s){if(Object.keys(s).length===0)return n;const l=n.match(/\?/)?"&":"?",c=new URLSearchParams(s);return`${n}${l}${c}`}_workerObjectUrl(n){let s;if(n)s=n;else{const l=new Blob([v2],{type:"application/javascript"});s=URL.createObjectURL(l)}return s}_setConnectionState(n,s=!1){this._connectionState=n,n==="connecting"?this._wasManualDisconnect=!1:n==="disconnecting"&&(this._wasManualDisconnect=s)}async _performAuth(n=null){let s,l=!1;if(n)s=n,l=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(c){this.log("error","Error fetching access token from callback",c),s=this.accessTokenValue}else s=this.accessTokenValue;l?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(c=>{const d={access_token:s,version:i2};s&&c.updateJoinPayload(d),c.joinedOnce&&c._isJoined()&&c._push(Xt.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(n="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${n}`,s)})}_triggerStateCallbacks(n,s){try{this.stateChangeCallbacks[n].forEach(l=>{try{l(s)}catch(c){this.log("error",`error in ${n} callback`,c)}})}catch(l){this.log("error",`error triggering ${n} callbacks`,l)}}_setupReconnectionTimer(){this.reconnectTimer=new Xp(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},nl.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(n){var s,l,c,d,f,m,g,y,v,_,x,w;switch(this.transport=(s=n?.transport)!==null&&s!==void 0?s:null,this.timeout=(l=n?.timeout)!==null&&l!==void 0?l:lu,this.heartbeatIntervalMs=(c=n?.heartbeatIntervalMs)!==null&&c!==void 0?c:nl.HEARTBEAT_INTERVAL,this.worker=(d=n?.worker)!==null&&d!==void 0?d:!1,this.accessToken=(f=n?.accessToken)!==null&&f!==void 0?f:null,this.heartbeatCallback=(m=n?.heartbeatCallback)!==null&&m!==void 0?m:Zc,this.vsn=(g=n?.vsn)!==null&&g!==void 0?g:Zm,n?.params&&(this.params=n.params),n?.logger&&(this.logger=n.logger),(n?.logLevel||n?.log_level)&&(this.logLevel=n.logLevel||n.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(y=n?.reconnectAfterMs)!==null&&y!==void 0?y:(j=>g2[j-1]||y2),this.vsn){case s2:this.encode=(v=n?.encode)!==null&&v!==void 0?v:((j,O)=>O(JSON.stringify(j))),this.decode=(_=n?.decode)!==null&&_!==void 0?_:((j,O)=>O(JSON.parse(j)));break;case Ip:this.encode=(x=n?.encode)!==null&&x!==void 0?x:this.serializer.encode.bind(this.serializer),this.decode=(w=n?.decode)!==null&&w!==void 0?w:this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${this.vsn}`)}if(this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=n?.workerUrl}}}var Ai=class extends Error{constructor(r,n){super(r),this.name="IcebergError",this.status=n.status,this.icebergType=n.icebergType,this.icebergCode=n.icebergCode,this.details=n.details,this.isCommitStateUnknown=n.icebergType==="CommitStateUnknownException"||[500,502,504].includes(n.status)&&n.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function _2(r,n,s){const l=new URL(n,r);if(s)for(const[c,d]of Object.entries(s))d!==void 0&&l.searchParams.set(c,d);return l.toString()}async function w2(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function x2(r){const n=r.fetchImpl??globalThis.fetch;return{async request({method:s,path:l,query:c,body:d,headers:f}){const m=_2(r.baseUrl,l,c),g=await w2(r.auth),y=await n(m,{method:s,headers:{...d?{"Content-Type":"application/json"}:{},...g,...f},body:d?JSON.stringify(d):void 0}),v=await y.text(),_=(y.headers.get("content-type")||"").includes("application/json"),x=_&&v?JSON.parse(v):v;if(!y.ok){const w=_?x:void 0,j=w?.error;throw new Ai(j?.message??`Request failed with status ${y.status}`,{status:y.status,icebergType:j?.type,icebergCode:j?.code,details:w})}return{status:y.status,headers:y.headers,data:x}}}}function rl(r){return r.join("")}var S2=class{constructor(r,n=""){this.client=r,this.prefix=n}async listNamespaces(r){const n=r?{parent:rl(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:n})).data.namespaces.map(l=>({namespace:l}))}async createNamespace(r,n){const s={namespace:r.namespace,properties:n?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${rl(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${rl(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${rl(r.namespace)}`}),!0}catch(n){if(n instanceof Ai&&n.status===404)return!1;throw n}}async createNamespaceIfNotExists(r,n){try{return await this.createNamespace(r,n)}catch(s){if(s instanceof Ai&&s.status===409)return;throw s}}};function ur(r){return r.join("")}var j2=class{constructor(r,n="",s){this.client=r,this.prefix=n,this.accessDelegation=s}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ur(r.namespace)}/tables`})).data.identifiers}async createTable(r,n){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ur(r.namespace)}/tables`,body:n,headers:s})).data.metadata}async updateTable(r,n){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ur(r.namespace)}/tables/${r.name}`,body:n});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(r,n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ur(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String(n?.purge??!1)}})}async loadTable(r){const n={};return this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ur(r.namespace)}/tables/${r.name}`,headers:n})).data.metadata}async tableExists(r){const n={};this.accessDelegation&&(n["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ur(r.namespace)}/tables/${r.name}`,headers:n}),!0}catch(s){if(s instanceof Ai&&s.status===404)return!1;throw s}}async createTableIfNotExists(r,n){try{return await this.createTable(r,n)}catch(s){if(s instanceof Ai&&s.status===409)return await this.loadTable({namespace:r.namespace,name:n.name});throw s}}},E2=class{constructor(r){let n="v1";r.catalogName&&(n+=`/${r.catalogName}`);const s=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=x2({baseUrl:s,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=r.accessDelegation?.join(","),this.namespaceOps=new S2(this.client,n),this.tableOps=new j2(this.client,n,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,n){return this.namespaceOps.createNamespace(r,n)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,n){return this.tableOps.createTable(r,n)}async updateTable(r,n){return this.tableOps.updateTable(r,n)}async dropTable(r,n){await this.tableOps.dropTable(r,n)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,n){return this.namespaceOps.createNamespaceIfNotExists(r,n)}async createTableIfNotExists(r,n){return this.tableOps.createTableIfNotExists(r,n)}},bl=class extends Error{constructor(r,n="storage",s,l){super(r),this.__isStorageError=!0,this.namespace=n,this.name=n==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=l}};function _l(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}var il=class extends bl{constructor(r,n,s,l="storage"){super(r,l,n,s),this.name=l==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=n,this.statusCode=s}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}},Jp=class extends bl{constructor(r,n,s="storage"){super(r,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=n}};const T2=r=>r?(...n)=>r(...n):(...n)=>fetch(...n),A2=r=>{if(typeof r!="object"||r===null)return!1;const n=Object.getPrototypeOf(r);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},uu=r=>{if(Array.isArray(r))return r.map(s=>uu(s));if(typeof r=="function"||r!==Object(r))return r;const n={};return Object.entries(r).forEach(([s,l])=>{const c=s.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,""));n[c]=uu(l)}),n},k2=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r);function ki(r){"@babel/helpers - typeof";return ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ki(r)}function O2(r,n){if(ki(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var l=s.call(r,n);if(ki(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function R2(r){var n=O2(r,"string");return ki(n)=="symbol"?n:n+""}function N2(r,n,s){return(n=R2(n))in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,r}function tp(r,n){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,l)}return s}function re(r){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?tp(Object(s),!0).forEach(function(l){N2(r,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):tp(Object(s)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(s,l))})}return r}const ap=r=>{var n;return r.msg||r.message||r.error_description||(typeof r.error=="string"?r.error:(n=r.error)===null||n===void 0?void 0:n.message)||JSON.stringify(r)},C2=async(r,n,s,l)=>{if(r&&typeof r=="object"&&"status"in r&&"ok"in r&&typeof r.status=="number"&&!s?.noResolveJson){const c=r,d=c.status||500;if(typeof c.json=="function")c.json().then(f=>{const m=f?.statusCode||f?.code||d+"";n(new il(ap(f),d,m,l))}).catch(()=>{if(l==="vectors"){const f=d+"";n(new il(c.statusText||`HTTP ${d} error`,d,f,l))}else{const f=d+"";n(new il(c.statusText||`HTTP ${d} error`,d,f,l))}});else{const f=d+"";n(new il(c.statusText||`HTTP ${d} error`,d,f,l))}}else n(new Jp(ap(r),r,l))},z2=(r,n,s,l)=>{const c={method:r,headers:n?.headers||{}};return r==="GET"||r==="HEAD"||!l?re(re({},c),s):(A2(l)?(c.headers=re({"Content-Type":"application/json"},n?.headers),c.body=JSON.stringify(l)):c.body=l,n?.duplex&&(c.duplex=n.duplex),re(re({},c),s))};async function wi(r,n,s,l,c,d,f){return new Promise((m,g)=>{r(s,z2(n,l,c,d)).then(y=>{if(!y.ok)throw y;if(l?.noResolveJson)return y;if(f==="vectors"){const v=y.headers.get("content-type");if(y.headers.get("content-length")==="0"||y.status===204)return{};if(!v||!v.includes("application/json"))return{}}return y.json()}).then(y=>m(y)).catch(y=>C2(y,g,l,f))})}function Zp(r="storage"){return{get:async(n,s,l,c)=>wi(n,"GET",s,l,c,void 0,r),post:async(n,s,l,c,d)=>wi(n,"POST",s,c,d,l,r),put:async(n,s,l,c,d)=>wi(n,"PUT",s,c,d,l,r),head:async(n,s,l,c)=>wi(n,"HEAD",s,re(re({},l),{},{noResolveJson:!0}),c,void 0,r),remove:async(n,s,l,c,d)=>wi(n,"DELETE",s,c,d,l,r)}}const U2=Zp("storage"),{get:Oi,post:It,put:du,head:D2,remove:Au}=U2,Ot=Zp("vectors");var Sr=class{constructor(r,n={},s,l="storage"){this.shouldThrowOnError=!1,this.url=r,this.headers=n,this.fetch=T2(s),this.namespace=l}throwOnError(){return this.shouldThrowOnError=!0,this}async handleOperation(r){var n=this;try{return{data:await r(),error:null}}catch(s){if(n.shouldThrowOnError)throw s;if(_l(s))return{data:null,error:s};throw s}}},M2=class{constructor(r,n){this.downloadFn=r,this.shouldThrowOnError=n}then(r,n){return this.execute().then(r,n)}async execute(){var r=this;try{return{data:(await r.downloadFn()).body,error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(_l(n))return{data:null,error:n};throw n}}};let Wp;Wp=Symbol.toStringTag;var L2=class{constructor(r,n){this.downloadFn=r,this.shouldThrowOnError=n,this[Wp]="BlobDownloadBuilder",this.promise=null}asStream(){return new M2(this.downloadFn,this.shouldThrowOnError)}then(r,n){return this.getPromise().then(r,n)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:await(await r.downloadFn()).blob(),error:null}}catch(n){if(r.shouldThrowOnError)throw n;if(_l(n))return{data:null,error:n};throw n}}};const q2={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},np={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var B2=class extends Sr{constructor(r,n={},s,l){super(r,n,l,"storage"),this.bucketId=s}async uploadOrUpdate(r,n,s,l){var c=this;return c.handleOperation(async()=>{let d;const f=re(re({},np),l);let m=re(re({},c.headers),r==="POST"&&{"x-upsert":String(f.upsert)});const g=f.metadata;typeof Blob<"u"&&s instanceof Blob?(d=new FormData,d.append("cacheControl",f.cacheControl),g&&d.append("metadata",c.encodeMetadata(g)),d.append("",s)):typeof FormData<"u"&&s instanceof FormData?(d=s,d.has("cacheControl")||d.append("cacheControl",f.cacheControl),g&&!d.has("metadata")&&d.append("metadata",c.encodeMetadata(g))):(d=s,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType,g&&(m["x-metadata"]=c.toBase64(c.encodeMetadata(g))),(typeof ReadableStream<"u"&&d instanceof ReadableStream||d&&typeof d=="object"&&"pipe"in d&&typeof d.pipe=="function")&&!f.duplex&&(f.duplex="half")),l?.headers&&(m=re(re({},m),l.headers));const y=c._removeEmptyFolders(n),v=c._getFinalPath(y),_=await(r=="PUT"?du:It)(c.fetch,`${c.url}/object/${v}`,d,re({headers:m},f?.duplex?{duplex:f.duplex}:{}));return{path:y,id:_.Id,fullPath:_.Key}})}async upload(r,n,s){return this.uploadOrUpdate("POST",r,n,s)}async uploadToSignedUrl(r,n,s,l){var c=this;const d=c._removeEmptyFolders(r),f=c._getFinalPath(d),m=new URL(c.url+`/object/upload/sign/${f}`);return m.searchParams.set("token",n),c.handleOperation(async()=>{let g;const y=re({upsert:np.upsert},l),v=re(re({},c.headers),{"x-upsert":String(y.upsert)});return typeof Blob<"u"&&s instanceof Blob?(g=new FormData,g.append("cacheControl",y.cacheControl),g.append("",s)):typeof FormData<"u"&&s instanceof FormData?(g=s,g.append("cacheControl",y.cacheControl)):(g=s,v["cache-control"]=`max-age=${y.cacheControl}`,v["content-type"]=y.contentType),{path:d,fullPath:(await du(c.fetch,m.toString(),g,{headers:v})).Key}})}async createSignedUploadUrl(r,n){var s=this;return s.handleOperation(async()=>{let l=s._getFinalPath(r);const c=re({},s.headers);n?.upsert&&(c["x-upsert"]="true");const d=await It(s.fetch,`${s.url}/object/upload/sign/${l}`,{},{headers:c}),f=new URL(s.url+d.url),m=f.searchParams.get("token");if(!m)throw new bl("No token returned by API");return{signedUrl:f.toString(),path:r,token:m}})}async update(r,n,s){return this.uploadOrUpdate("PUT",r,n,s)}async move(r,n,s){var l=this;return l.handleOperation(async()=>await It(l.fetch,`${l.url}/object/move`,{bucketId:l.bucketId,sourceKey:r,destinationKey:n,destinationBucket:s?.destinationBucket},{headers:l.headers}))}async copy(r,n,s){var l=this;return l.handleOperation(async()=>({path:(await It(l.fetch,`${l.url}/object/copy`,{bucketId:l.bucketId,sourceKey:r,destinationKey:n,destinationBucket:s?.destinationBucket},{headers:l.headers})).Key}))}async createSignedUrl(r,n,s){var l=this;return l.handleOperation(async()=>{let c=l._getFinalPath(r),d=await It(l.fetch,`${l.url}/object/sign/${c}`,re({expiresIn:n},s?.transform?{transform:s.transform}:{}),{headers:l.headers});const f=s?.download?`&download=${s.download===!0?"":s.download}`:"";return{signedUrl:encodeURI(`${l.url}${d.signedURL}${f}`)}})}async createSignedUrls(r,n,s){var l=this;return l.handleOperation(async()=>{const c=await It(l.fetch,`${l.url}/object/sign/${l.bucketId}`,{expiresIn:n,paths:r},{headers:l.headers}),d=s?.download?`&download=${s.download===!0?"":s.download}`:"";return c.map(f=>re(re({},f),{},{signedUrl:f.signedURL?encodeURI(`${l.url}${f.signedURL}${d}`):null}))})}download(r,n,s){const l=typeof n?.transform<"u"?"render/image/authenticated":"object",c=this.transformOptsToQueryString(n?.transform||{}),d=c?`?${c}`:"",f=this._getFinalPath(r),m=()=>Oi(this.fetch,`${this.url}/${l}/${f}${d}`,{headers:this.headers,noResolveJson:!0},s);return new L2(m,this.shouldThrowOnError)}async info(r){var n=this;const s=n._getFinalPath(r);return n.handleOperation(async()=>uu(await Oi(n.fetch,`${n.url}/object/info/${s}`,{headers:n.headers})))}async exists(r){var n=this;const s=n._getFinalPath(r);try{return await D2(n.fetch,`${n.url}/object/${s}`,{headers:n.headers}),{data:!0,error:null}}catch(l){if(n.shouldThrowOnError)throw l;if(_l(l)&&l instanceof Jp){const c=l.originalError;if([400,404].includes(c?.status))return{data:!1,error:l}}throw l}}getPublicUrl(r,n){const s=this._getFinalPath(r),l=[],c=n?.download?`download=${n.download===!0?"":n.download}`:"";c!==""&&l.push(c);const d=typeof n?.transform<"u"?"render/image":"object",f=this.transformOptsToQueryString(n?.transform||{});f!==""&&l.push(f);let m=l.join("&");return m!==""&&(m=`?${m}`),{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${s}${m}`)}}}async remove(r){var n=this;return n.handleOperation(async()=>await Au(n.fetch,`${n.url}/object/${n.bucketId}`,{prefixes:r},{headers:n.headers}))}async list(r,n,s){var l=this;return l.handleOperation(async()=>{const c=re(re(re({},q2),n),{},{prefix:r||""});return await It(l.fetch,`${l.url}/object/list/${l.bucketId}`,c,{headers:l.headers},s)})}async listV2(r,n){var s=this;return s.handleOperation(async()=>{const l=re({},r);return await It(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,l,{headers:s.headers},n)})}encodeMetadata(r){return JSON.stringify(r)}toBase64(r){return typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r)}_getFinalPath(r){return`${this.bucketId}/${r.replace(/^\/+/,"")}`}_removeEmptyFolders(r){return r.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(r){const n=[];return r.width&&n.push(`width=${r.width}`),r.height&&n.push(`height=${r.height}`),r.resize&&n.push(`resize=${r.resize}`),r.format&&n.push(`format=${r.format}`),r.quality&&n.push(`quality=${r.quality}`),n.join("&")}};const H2="2.95.3",Mi={"X-Client-Info":`storage-js/${H2}`};var $2=class extends Sr{constructor(r,n={},s,l){const c=new URL(r);l?.useNewHostname&&/supabase\.(co|in|red)$/.test(c.hostname)&&!c.hostname.includes("storage.supabase.")&&(c.hostname=c.hostname.replace("supabase.","storage.supabase."));const d=c.href.replace(/\/$/,""),f=re(re({},Mi),n);super(d,f,s,"storage")}async listBuckets(r){var n=this;return n.handleOperation(async()=>{const s=n.listBucketOptionsToQueryString(r);return await Oi(n.fetch,`${n.url}/bucket${s}`,{headers:n.headers})})}async getBucket(r){var n=this;return n.handleOperation(async()=>await Oi(n.fetch,`${n.url}/bucket/${r}`,{headers:n.headers}))}async createBucket(r,n={public:!1}){var s=this;return s.handleOperation(async()=>await It(s.fetch,`${s.url}/bucket`,{id:r,name:r,type:n.type,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:s.headers}))}async updateBucket(r,n){var s=this;return s.handleOperation(async()=>await du(s.fetch,`${s.url}/bucket/${r}`,{id:r,name:r,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(r){var n=this;return n.handleOperation(async()=>await It(n.fetch,`${n.url}/bucket/${r}/empty`,{},{headers:n.headers}))}async deleteBucket(r){var n=this;return n.handleOperation(async()=>await Au(n.fetch,`${n.url}/bucket/${r}`,{},{headers:n.headers}))}listBucketOptionsToQueryString(r){const n={};return r&&("limit"in r&&(n.limit=String(r.limit)),"offset"in r&&(n.offset=String(r.offset)),r.search&&(n.search=r.search),r.sortColumn&&(n.sortColumn=r.sortColumn),r.sortOrder&&(n.sortOrder=r.sortOrder)),Object.keys(n).length>0?"?"+new URLSearchParams(n).toString():""}},G2=class extends Sr{constructor(r,n={},s){const l=r.replace(/\/$/,""),c=re(re({},Mi),n);super(l,c,s,"storage")}async createBucket(r){var n=this;return n.handleOperation(async()=>await It(n.fetch,`${n.url}/bucket`,{name:r},{headers:n.headers}))}async listBuckets(r){var n=this;return n.handleOperation(async()=>{const s=new URLSearchParams;r?.limit!==void 0&&s.set("limit",r.limit.toString()),r?.offset!==void 0&&s.set("offset",r.offset.toString()),r?.sortColumn&&s.set("sortColumn",r.sortColumn),r?.sortOrder&&s.set("sortOrder",r.sortOrder),r?.search&&s.set("search",r.search);const l=s.toString(),c=l?`${n.url}/bucket?${l}`:`${n.url}/bucket`;return await Oi(n.fetch,c,{headers:n.headers})})}async deleteBucket(r){var n=this;return n.handleOperation(async()=>await Au(n.fetch,`${n.url}/bucket/${r}`,{},{headers:n.headers}))}from(r){var n=this;if(!k2(r))throw new bl("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new E2({baseUrl:this.url,catalogName:r,auth:{type:"custom",getHeaders:async()=>n.headers},fetch:this.fetch}),l=this.shouldThrowOnError;return new Proxy(s,{get(c,d){const f=c[d];return typeof f!="function"?f:async(...m)=>{try{return{data:await f.apply(c,m),error:null}}catch(g){if(l)throw g;return{data:null,error:g}}}}})}},V2=class extends Sr{constructor(r,n={},s){const l=r.replace(/\/$/,""),c=re(re({},Mi),{},{"Content-Type":"application/json"},n);super(l,c,s,"vectors")}async createIndex(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/CreateIndex`,r,{headers:n.headers})||{})}async getIndex(r,n){var s=this;return s.handleOperation(async()=>await Ot.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:r,indexName:n},{headers:s.headers}))}async listIndexes(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/ListIndexes`,r,{headers:n.headers}))}async deleteIndex(r,n){var s=this;return s.handleOperation(async()=>await Ot.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:r,indexName:n},{headers:s.headers})||{})}},Y2=class extends Sr{constructor(r,n={},s){const l=r.replace(/\/$/,""),c=re(re({},Mi),{},{"Content-Type":"application/json"},n);super(l,c,s,"vectors")}async putVectors(r){var n=this;if(r.vectors.length<1||r.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/PutVectors`,r,{headers:n.headers})||{})}async getVectors(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/GetVectors`,r,{headers:n.headers}))}async listVectors(r){var n=this;if(r.segmentCount!==void 0){if(r.segmentCount<1||r.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(r.segmentIndex!==void 0&&(r.segmentIndex<0||r.segmentIndex>=r.segmentCount))throw new Error(`segmentIndex must be between 0 and ${r.segmentCount-1}`)}return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/ListVectors`,r,{headers:n.headers}))}async queryVectors(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/QueryVectors`,r,{headers:n.headers}))}async deleteVectors(r){var n=this;if(r.keys.length<1||r.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/DeleteVectors`,r,{headers:n.headers})||{})}},K2=class extends Sr{constructor(r,n={},s){const l=r.replace(/\/$/,""),c=re(re({},Mi),{},{"Content-Type":"application/json"},n);super(l,c,s,"vectors")}async createBucket(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/CreateVectorBucket`,{vectorBucketName:r},{headers:n.headers})||{})}async getBucket(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/GetVectorBucket`,{vectorBucketName:r},{headers:n.headers}))}async listBuckets(r={}){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/ListVectorBuckets`,r,{headers:n.headers}))}async deleteBucket(r){var n=this;return n.handleOperation(async()=>await Ot.post(n.fetch,`${n.url}/DeleteVectorBucket`,{vectorBucketName:r},{headers:n.headers})||{})}},I2=class extends K2{constructor(r,n={}){super(r,n.headers||{},n.fetch)}from(r){return new X2(this.url,this.headers,r,this.fetch)}async createBucket(r){var n=()=>super.createBucket,s=this;return n().call(s,r)}async getBucket(r){var n=()=>super.getBucket,s=this;return n().call(s,r)}async listBuckets(r={}){var n=()=>super.listBuckets,s=this;return n().call(s,r)}async deleteBucket(r){var n=()=>super.deleteBucket,s=this;return n().call(s,r)}},X2=class extends V2{constructor(r,n,s,l){super(r,n,l),this.vectorBucketName=s}async createIndex(r){var n=()=>super.createIndex,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(r={}){var n=()=>super.listIndexes,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(r){var n=()=>super.getIndex,s=this;return n().call(s,s.vectorBucketName,r)}async deleteIndex(r){var n=()=>super.deleteIndex,s=this;return n().call(s,s.vectorBucketName,r)}index(r){return new P2(this.url,this.headers,this.vectorBucketName,r,this.fetch)}},P2=class extends Y2{constructor(r,n,s,l,c){super(r,n,c),this.vectorBucketName=s,this.indexName=l}async putVectors(r){var n=()=>super.putVectors,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(r){var n=()=>super.getVectors,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(r={}){var n=()=>super.listVectors,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(r){var n=()=>super.queryVectors,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(r){var n=()=>super.deleteVectors,s=this;return n().call(s,re(re({},r),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},Q2=class extends $2{constructor(r,n={},s,l){super(r,n,s,l)}from(r){return new B2(this.url,this.headers,r,this.fetch)}get vectors(){return new I2(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new G2(this.url+"/iceberg",this.headers,this.fetch)}};const Fp="2.95.3",yr=30*1e3,hu=3,Wc=hu*yr,J2="http://localhost:9999",Z2="supabase.auth.token",W2={"X-Client-Info":`gotrue-js/${Fp}`},fu="X-Supabase-Api-Version",eg={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},F2=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,e_=600*1e3;class Ri extends Error{constructor(n,s,l){super(n),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=l}}function W(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class t_ extends Ri{constructor(n,s,l){super(n,s,l),this.name="AuthApiError",this.status=s,this.code=l}}function a_(r){return W(r)&&r.name==="AuthApiError"}class xn extends Ri{constructor(n,s){super(n),this.name="AuthUnknownError",this.originalError=s}}class Sa extends Ri{constructor(n,s,l,c){super(n,l,c),this.name=s,this.status=l}}class kt extends Sa{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Fc(r){return W(r)&&r.name==="AuthSessionMissingError"}class dr extends Sa{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class sl extends Sa{constructor(n){super(n,"AuthInvalidCredentialsError",400,void 0)}}class ll extends Sa{constructor(n,s=null){super(n,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function n_(r){return W(r)&&r.name==="AuthImplicitGrantRedirectError"}class rp extends Sa{constructor(n,s=null){super(n,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class r_ extends Sa{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class mu extends Sa{constructor(n,s){super(n,"AuthRetryableFetchError",s,void 0)}}function eu(r){return W(r)&&r.name==="AuthRetryableFetchError"}class ip extends Sa{constructor(n,s,l){super(n,"AuthWeakPasswordError",s,"weak_password"),this.reasons=l}}class pu extends Sa{constructor(n){super(n,"AuthInvalidJwtError",400,"invalid_jwt")}}const fl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),sp=` 	
\r=`.split(""),i_=(()=>{const r=new Array(128);for(let n=0;n<r.length;n+=1)r[n]=-1;for(let n=0;n<sp.length;n+=1)r[sp[n].charCodeAt(0)]=-2;for(let n=0;n<fl.length;n+=1)r[fl[n].charCodeAt(0)]=n;return r})();function lp(r,n,s){if(r!==null)for(n.queue=n.queue<<8|r,n.queuedBits+=8;n.queuedBits>=6;){const l=n.queue>>n.queuedBits-6&63;s(fl[l]),n.queuedBits-=6}else if(n.queuedBits>0)for(n.queue=n.queue<<6-n.queuedBits,n.queuedBits=6;n.queuedBits>=6;){const l=n.queue>>n.queuedBits-6&63;s(fl[l]),n.queuedBits-=6}}function tg(r,n,s){const l=i_[r];if(l>-1)for(n.queue=n.queue<<6|l,n.queuedBits+=6;n.queuedBits>=8;)s(n.queue>>n.queuedBits-8&255),n.queuedBits-=8;else{if(l===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function op(r){const n=[],s=f=>{n.push(String.fromCodePoint(f))},l={utf8seq:0,codepoint:0},c={queue:0,queuedBits:0},d=f=>{o_(f,l,s)};for(let f=0;f<r.length;f+=1)tg(r.charCodeAt(f),c,d);return n.join("")}function s_(r,n){if(r<=127){n(r);return}else if(r<=2047){n(192|r>>6),n(128|r&63);return}else if(r<=65535){n(224|r>>12),n(128|r>>6&63),n(128|r&63);return}else if(r<=1114111){n(240|r>>18),n(128|r>>12&63),n(128|r>>6&63),n(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function l_(r,n){for(let s=0;s<r.length;s+=1){let l=r.charCodeAt(s);if(l>55295&&l<=56319){const c=(l-55296)*1024&65535;l=(r.charCodeAt(s+1)-56320&65535|c)+65536,s+=1}s_(l,n)}}function o_(r,n,s){if(n.utf8seq===0){if(r<=127){s(r);return}for(let l=1;l<6;l+=1)if((r>>7-l&1)===0){n.utf8seq=l;break}if(n.utf8seq===2)n.codepoint=r&31;else if(n.utf8seq===3)n.codepoint=r&15;else if(n.utf8seq===4)n.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");n.utf8seq-=1}else if(n.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");n.codepoint=n.codepoint<<6|r&63,n.utf8seq-=1,n.utf8seq===0&&s(n.codepoint)}}function _r(r){const n=[],s={queue:0,queuedBits:0},l=c=>{n.push(c)};for(let c=0;c<r.length;c+=1)tg(r.charCodeAt(c),s,l);return new Uint8Array(n)}function c_(r){const n=[];return l_(r,s=>n.push(s)),new Uint8Array(n)}function Sn(r){const n=[],s={queue:0,queuedBits:0},l=c=>{n.push(c)};return r.forEach(c=>lp(c,s,l)),lp(null,s,l),n.join("")}function u_(r){return Math.round(Date.now()/1e3)+r}function d_(){return Symbol("auth-callback")}const rt=()=>typeof window<"u"&&typeof document<"u",vn={tested:!1,writable:!1},ag=()=>{if(!rt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(vn.tested)return vn.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),vn.tested=!0,vn.writable=!0}catch{vn.tested=!0,vn.writable=!1}return vn.writable};function h_(r){const n={},s=new URL(r);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((c,d)=>{n[d]=c})}catch{}return s.searchParams.forEach((l,c)=>{n[c]=l}),n}const ng=r=>r?(...n)=>r(...n):(...n)=>fetch(...n),f_=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",vr=async(r,n,s)=>{await r.setItem(n,JSON.stringify(s))},bn=async(r,n)=>{const s=await r.getItem(n);if(!s)return null;try{return JSON.parse(s)}catch{return s}},nt=async(r,n)=>{await r.removeItem(n)};class wl{constructor(){this.promise=new wl.promiseConstructor((n,s)=>{this.resolve=n,this.reject=s})}}wl.promiseConstructor=Promise;function ol(r){const n=r.split(".");if(n.length!==3)throw new pu("Invalid JWT structure");for(let l=0;l<n.length;l++)if(!F2.test(n[l]))throw new pu("JWT not in base64url format");return{header:JSON.parse(op(n[0])),payload:JSON.parse(op(n[1])),signature:_r(n[2]),raw:{header:n[0],payload:n[1]}}}async function m_(r){return await new Promise(n=>{setTimeout(()=>n(null),r)})}function p_(r,n){return new Promise((l,c)=>{(async()=>{for(let d=0;d<1/0;d++)try{const f=await r(d);if(!n(d,null,f)){l(f);return}}catch(f){if(!n(d,f)){c(f);return}}})()})}function g_(r){return("0"+r.toString(16)).substr(-2)}function y_(){const n=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=s.length;let c="";for(let d=0;d<56;d++)c+=s.charAt(Math.floor(Math.random()*l));return c}return crypto.getRandomValues(n),Array.from(n,g_).join("")}async function v_(r){const s=new TextEncoder().encode(r),l=await crypto.subtle.digest("SHA-256",s),c=new Uint8Array(l);return Array.from(c).map(d=>String.fromCharCode(d)).join("")}async function b_(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const s=await v_(r);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function hr(r,n,s=!1){const l=y_();let c=l;s&&(c+="/PASSWORD_RECOVERY"),await vr(r,`${n}-code-verifier`,c);const d=await b_(l);return[d,l===d?"plain":"s256"]}const __=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function w_(r){const n=r.headers.get(fu);if(!n||!n.match(__))return null;try{return new Date(`${n}T00:00:00.0Z`)}catch{return null}}function x_(r){if(!r)throw new Error("Missing exp claim");const n=Math.floor(Date.now()/1e3);if(r<=n)throw new Error("JWT has expired")}function S_(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const j_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function fr(r){if(!j_.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function tu(){const r={};return new Proxy(r,{get:(n,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const l=s.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(n,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(n,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function E_(r,n){return new Proxy(r,{get:(s,l,c)=>{if(l==="__isInsecureUserWarningProxy")return!0;if(typeof l=="symbol"){const d=l.toString();if(d==="Symbol(Symbol.toPrimitive)"||d==="Symbol(Symbol.toStringTag)"||d==="Symbol(util.inspect.custom)"||d==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,l,c)}return!n.value&&typeof l=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),n.value=!0),Reflect.get(s,l,c)}})}function cp(r){return JSON.parse(JSON.stringify(r))}const _n=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),T_=[502,503,504];async function up(r){var n;if(!f_(r))throw new mu(_n(r),0);if(T_.includes(r.status))throw new mu(_n(r),r.status);let s;try{s=await r.json()}catch(d){throw new xn(_n(d),d)}let l;const c=w_(r);if(c&&c.getTime()>=eg["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?l=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(l=s.error_code),l){if(l==="weak_password")throw new ip(_n(s),r.status,((n=s.weak_password)===null||n===void 0?void 0:n.reasons)||[]);if(l==="session_not_found")throw new kt}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((d,f)=>d&&typeof f=="string",!0))throw new ip(_n(s),r.status,s.weak_password.reasons);throw new t_(_n(s),r.status||500,l)}const A_=(r,n,s,l)=>{const c={method:r,headers:n?.headers||{}};return r==="GET"?c:(c.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},n?.headers),c.body=JSON.stringify(l),Object.assign(Object.assign({},c),s))};async function ne(r,n,s,l){var c;const d=Object.assign({},l?.headers);d[fu]||(d[fu]=eg["2024-01-01"].name),l?.jwt&&(d.Authorization=`Bearer ${l.jwt}`);const f=(c=l?.query)!==null&&c!==void 0?c:{};l?.redirectTo&&(f.redirect_to=l.redirectTo);const m=Object.keys(f).length?"?"+new URLSearchParams(f).toString():"",g=await k_(r,n,s+m,{headers:d,noResolveJson:l?.noResolveJson},{},l?.body);return l?.xform?l?.xform(g):{data:Object.assign({},g),error:null}}async function k_(r,n,s,l,c,d){const f=A_(n,l,c,d);let m;try{m=await r(s,Object.assign({},f))}catch(g){throw console.error(g),new mu(_n(g),0)}if(m.ok||await up(m),l?.noResolveJson)return m;try{return await m.json()}catch(g){await up(g)}}function Kt(r){var n;let s=null;N_(r)&&(s=Object.assign({},r),r.expires_at||(s.expires_at=u_(r.expires_in)));const l=(n=r.user)!==null&&n!==void 0?n:r;return{data:{session:s,user:l},error:null}}function dp(r){const n=Kt(r);return!n.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((s,l)=>s&&typeof l=="string",!0)&&(n.data.weak_password=r.weak_password),n}function Ja(r){var n;return{data:{user:(n=r.user)!==null&&n!==void 0?n:r},error:null}}function O_(r){return{data:r,error:null}}function R_(r){const{action_link:n,email_otp:s,hashed_token:l,redirect_to:c,verification_type:d}=r,f=vl(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:n,email_otp:s,hashed_token:l,redirect_to:c,verification_type:d},g=Object.assign({},f);return{data:{properties:m,user:g},error:null}}function hp(r){return r}function N_(r){return r.access_token&&r.refresh_token&&r.expires_in}const au=["global","local","others"];class C_{constructor({url:n="",headers:s={},fetch:l}){this.url=n,this.headers=s,this.fetch=ng(l),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)}}async signOut(n,s=au[0]){if(au.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${au.join(", ")}`);try{return await ne(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:n,noResolveJson:!0}),{data:null,error:null}}catch(l){if(W(l))return{data:null,error:l};throw l}}async inviteUserByEmail(n,s={}){try{return await ne(this.fetch,"POST",`${this.url}/invite`,{body:{email:n,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:Ja})}catch(l){if(W(l))return{data:{user:null},error:l};throw l}}async generateLink(n){try{const{options:s}=n,l=vl(n,["options"]),c=Object.assign(Object.assign({},l),s);return"newEmail"in l&&(c.new_email=l?.newEmail,delete c.newEmail),await ne(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:c,headers:this.headers,xform:R_,redirectTo:s?.redirectTo})}catch(s){if(W(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(n){try{return await ne(this.fetch,"POST",`${this.url}/admin/users`,{body:n,headers:this.headers,xform:Ja})}catch(s){if(W(s))return{data:{user:null},error:s};throw s}}async listUsers(n){var s,l,c,d,f,m,g;try{const y={nextPage:null,lastPage:0,total:0},v=await ne(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(s=n?.page)===null||s===void 0?void 0:s.toString())!==null&&l!==void 0?l:"",per_page:(d=(c=n?.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:hp});if(v.error)throw v.error;const _=await v.json(),x=(f=v.headers.get("x-total-count"))!==null&&f!==void 0?f:0,w=(g=(m=v.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&g!==void 0?g:[];return w.length>0&&(w.forEach(j=>{const O=parseInt(j.split(";")[0].split("=")[1].substring(0,1)),U=JSON.parse(j.split(";")[1].split("=")[1]);y[`${U}Page`]=O}),y.total=parseInt(x)),{data:Object.assign(Object.assign({},_),y),error:null}}catch(y){if(W(y))return{data:{users:[]},error:y};throw y}}async getUserById(n){fr(n);try{return await ne(this.fetch,"GET",`${this.url}/admin/users/${n}`,{headers:this.headers,xform:Ja})}catch(s){if(W(s))return{data:{user:null},error:s};throw s}}async updateUserById(n,s){fr(n);try{return await ne(this.fetch,"PUT",`${this.url}/admin/users/${n}`,{body:s,headers:this.headers,xform:Ja})}catch(l){if(W(l))return{data:{user:null},error:l};throw l}}async deleteUser(n,s=!1){fr(n);try{return await ne(this.fetch,"DELETE",`${this.url}/admin/users/${n}`,{headers:this.headers,body:{should_soft_delete:s},xform:Ja})}catch(l){if(W(l))return{data:{user:null},error:l};throw l}}async _listFactors(n){fr(n.userId);try{const{data:s,error:l}=await ne(this.fetch,"GET",`${this.url}/admin/users/${n.userId}/factors`,{headers:this.headers,xform:c=>({data:{factors:c},error:null})});return{data:s,error:l}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _deleteFactor(n){fr(n.userId),fr(n.id);try{return{data:await ne(this.fetch,"DELETE",`${this.url}/admin/users/${n.userId}/factors/${n.id}`,{headers:this.headers}),error:null}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _listOAuthClients(n){var s,l,c,d,f,m,g;try{const y={nextPage:null,lastPage:0,total:0},v=await ne(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(s=n?.page)===null||s===void 0?void 0:s.toString())!==null&&l!==void 0?l:"",per_page:(d=(c=n?.perPage)===null||c===void 0?void 0:c.toString())!==null&&d!==void 0?d:""},xform:hp});if(v.error)throw v.error;const _=await v.json(),x=(f=v.headers.get("x-total-count"))!==null&&f!==void 0?f:0,w=(g=(m=v.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&g!==void 0?g:[];return w.length>0&&(w.forEach(j=>{const O=parseInt(j.split(";")[0].split("=")[1].substring(0,1)),U=JSON.parse(j.split(";")[1].split("=")[1]);y[`${U}Page`]=O}),y.total=parseInt(x)),{data:Object.assign(Object.assign({},_),y),error:null}}catch(y){if(W(y))return{data:{clients:[]},error:y};throw y}}async _createOAuthClient(n){try{return await ne(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:n,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _getOAuthClient(n){try{return await ne(this.fetch,"GET",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}async _updateOAuthClient(n,s){try{return await ne(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${n}`,{body:s,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(W(l))return{data:null,error:l};throw l}}async _deleteOAuthClient(n){try{return await ne(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${n}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(W(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(n){try{return await ne(this.fetch,"POST",`${this.url}/admin/oauth/clients/${n}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(W(s))return{data:null,error:s};throw s}}}function fp(r={}){return{getItem:n=>r[n]||null,setItem:(n,s)=>{r[n]=s},removeItem:n=>{delete r[n]}}}const mr={debug:!!(globalThis&&ag()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class rg extends Error{constructor(n){super(n),this.isAcquireTimeout=!0}}class z_ extends rg{}async function U_(r,n,s){mr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,n);const l=new globalThis.AbortController;return n>0&&setTimeout(()=>{l.abort(),mr.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},n),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,n===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:l.signal},async c=>{if(c){mr.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,c.name);try{return await s()}finally{mr.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,c.name)}}else{if(n===0)throw mr.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new z_(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(mr.debug)try{const d=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(d,null,"  "))}catch(d){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",d)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await s()}}))}function D_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function ig(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function M_(r){return parseInt(r,16)}function L_(r){const n=new TextEncoder().encode(r);return"0x"+Array.from(n,l=>l.toString(16).padStart(2,"0")).join("")}function q_(r){var n;const{chainId:s,domain:l,expirationTime:c,issuedAt:d=new Date,nonce:f,notBefore:m,requestId:g,resources:y,scheme:v,uri:_,version:x}=r;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!l)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(f&&f.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);if(!_)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(x!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);if(!((n=r.statement)===null||n===void 0)&&n.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const w=ig(r.address),j=v?`${v}://${l}`:l,O=r.statement?`${r.statement}
`:"",U=`${j} wants you to sign in with your Ethereum account:
${w}

${O}`;let q=`URI: ${_}
Version: ${x}
Chain ID: ${s}${f?`
Nonce: ${f}`:""}
Issued At: ${d.toISOString()}`;if(c&&(q+=`
Expiration Time: ${c.toISOString()}`),m&&(q+=`
Not Before: ${m.toISOString()}`),g&&(q+=`
Request ID: ${g}`),y){let D=`
Resources:`;for(const C of y){if(!C||typeof C!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${C}`);D+=`
- ${C}`}q+=D}return`${U}
${q}`}class Ie extends Error{constructor({message:n,code:s,cause:l,name:c}){var d;super(n,{cause:l}),this.__isWebAuthnError=!0,this.name=(d=c??(l instanceof Error?l.name:void 0))!==null&&d!==void 0?d:"Unknown Error",this.code=s}}class ml extends Ie{constructor(n,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:n}),this.name="WebAuthnUnknownError",this.originalError=s}}function B_({error:r,options:n}){var s,l,c;const{publicKey:d}=n;if(!d)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Ie({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((s=d.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new Ie({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(n.mediation==="conditional"&&((l=d.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new Ie({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((c=d.authenticatorSelection)===null||c===void 0?void 0:c.userVerification)==="required")return new Ie({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new Ie({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new Ie({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return d.pubKeyCredParams.filter(m=>m.type==="public-key").length===0?new Ie({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new Ie({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const f=window.location.hostname;if(sg(f)){if(d.rp.id!==f)return new Ie({message:`The RP ID "${d.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new Ie({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(d.user.id.byteLength<1||d.user.id.byteLength>64)return new Ie({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new Ie({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new Ie({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function H_({error:r,options:n}){const{publicKey:s}=n;if(!s)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(n.signal instanceof AbortSignal)return new Ie({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new Ie({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const l=window.location.hostname;if(sg(l)){if(s.rpId!==l)return new Ie({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new Ie({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new Ie({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new Ie({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class $_{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const n=new AbortController;return this.controller=n,n.signal}cancelCeremony(){if(this.controller){const n=new Error("Manually cancelling existing WebAuthn API call");n.name="AbortError",this.controller.abort(n),this.controller=void 0}}}const G_=new $_;function V_(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:n,user:s,excludeCredentials:l}=r,c=vl(r,["challenge","user","excludeCredentials"]),d=_r(n).buffer,f=Object.assign(Object.assign({},s),{id:_r(s.id).buffer}),m=Object.assign(Object.assign({},c),{challenge:d,user:f});if(l&&l.length>0){m.excludeCredentials=new Array(l.length);for(let g=0;g<l.length;g++){const y=l[g];m.excludeCredentials[g]=Object.assign(Object.assign({},y),{id:_r(y.id).buffer,type:y.type||"public-key",transports:y.transports})}}return m}function Y_(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:n,allowCredentials:s}=r,l=vl(r,["challenge","allowCredentials"]),c=_r(n).buffer,d=Object.assign(Object.assign({},l),{challenge:c});if(s&&s.length>0){d.allowCredentials=new Array(s.length);for(let f=0;f<s.length;f++){const m=s[f];d.allowCredentials[f]=Object.assign(Object.assign({},m),{id:_r(m.id).buffer,type:m.type||"public-key",transports:m.transports})}}return d}function K_(r){var n;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const s=r;return{id:r.id,rawId:r.id,response:{attestationObject:Sn(new Uint8Array(r.response.attestationObject)),clientDataJSON:Sn(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(n=s.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function I_(r){var n;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const s=r,l=r.getClientExtensionResults(),c=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:Sn(new Uint8Array(c.authenticatorData)),clientDataJSON:Sn(new Uint8Array(c.clientDataJSON)),signature:Sn(new Uint8Array(c.signature)),userHandle:c.userHandle?Sn(new Uint8Array(c.userHandle)):void 0},type:"public-key",clientExtensionResults:l,authenticatorAttachment:(n=s.authenticatorAttachment)!==null&&n!==void 0?n:void 0}}function sg(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function mp(){var r,n;return!!(rt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator?.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.get)=="function")}async function X_(r){try{const n=await navigator.credentials.create(r);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new ml("Browser returned unexpected credential type",n)}:{data:null,error:new ml("Empty credential response",n)}}catch(n){return{data:null,error:B_({error:n,options:r})}}}async function P_(r){try{const n=await navigator.credentials.get(r);return n?n instanceof PublicKeyCredential?{data:n,error:null}:{data:null,error:new ml("Browser returned unexpected credential type",n)}:{data:null,error:new ml("Empty credential response",n)}}catch(n){return{data:null,error:H_({error:n,options:r})}}}const Q_={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},J_={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function pl(...r){const n=c=>c!==null&&typeof c=="object"&&!Array.isArray(c),s=c=>c instanceof ArrayBuffer||ArrayBuffer.isView(c),l={};for(const c of r)if(c)for(const d in c){const f=c[d];if(f!==void 0)if(Array.isArray(f))l[d]=f;else if(s(f))l[d]=f;else if(n(f)){const m=l[d];n(m)?l[d]=pl(m,f):l[d]=pl(f)}else l[d]=f}return l}function Z_(r,n){return pl(Q_,r,n||{})}function W_(r,n){return pl(J_,r,n||{})}class F_{constructor(n){this.client=n,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(n){return this.client.mfa.enroll(Object.assign(Object.assign({},n),{factorType:"webauthn"}))}async _challenge({factorId:n,webauthn:s,friendlyName:l,signal:c},d){var f;try{const{data:m,error:g}=await this.client.mfa.challenge({factorId:n,webauthn:s});if(!m)return{data:null,error:g};const y=c??G_.createNewAbortSignal();if(m.webauthn.type==="create"){const{user:v}=m.webauthn.credential_options.publicKey;if(!v.name){const _=l;if(_)v.name=`${v.id}:${_}`;else{const w=(await this.client.getUser()).data.user,j=((f=w?.user_metadata)===null||f===void 0?void 0:f.name)||w?.email||w?.id||"User";v.name=`${v.id}:${j}`}}v.displayName||(v.displayName=v.name)}switch(m.webauthn.type){case"create":{const v=Z_(m.webauthn.credential_options.publicKey,d?.create),{data:_,error:x}=await X_({publicKey:v,signal:y});return _?{data:{factorId:n,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:_}},error:null}:{data:null,error:x}}case"request":{const v=W_(m.webauthn.credential_options.publicKey,d?.request),{data:_,error:x}=await P_(Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:v,signal:y}));return _?{data:{factorId:n,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:_}},error:null}:{data:null,error:x}}}}catch(m){return W(m)?{data:null,error:m}:{data:null,error:new xn("Unexpected error in challenge",m)}}}async _verify({challengeId:n,factorId:s,webauthn:l}){return this.client.mfa.verify({factorId:s,challengeId:n,webauthn:l})}async _authenticate({factorId:n,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!s)return{data:null,error:new Ri("rpId is required for WebAuthn authentication")};try{if(!mp())return{data:null,error:new xn("Browser does not support WebAuthn",null)};const{data:f,error:m}=await this.challenge({factorId:n,webauthn:{rpId:s,rpOrigins:l},signal:c},{request:d});if(!f)return{data:null,error:m};const{webauthn:g}=f;return this._verify({factorId:n,challengeId:f.challengeId,webauthn:{type:g.type,rpId:s,rpOrigins:l,credential_response:g.credential_response}})}catch(f){return W(f)?{data:null,error:f}:{data:null,error:new xn("Unexpected error in authenticate",f)}}}async _register({friendlyName:n,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:c}={}},d){if(!s)return{data:null,error:new Ri("rpId is required for WebAuthn registration")};try{if(!mp())return{data:null,error:new xn("Browser does not support WebAuthn",null)};const{data:f,error:m}=await this._enroll({friendlyName:n});if(!f)return await this.client.mfa.listFactors().then(v=>{var _;return(_=v.data)===null||_===void 0?void 0:_.all.find(x=>x.factor_type==="webauthn"&&x.friendly_name===n&&x.status!=="unverified")}).then(v=>v?this.client.mfa.unenroll({factorId:v?.id}):void 0),{data:null,error:m};const{data:g,error:y}=await this._challenge({factorId:f.id,friendlyName:f.friendly_name,webauthn:{rpId:s,rpOrigins:l},signal:c},{create:d});return g?this._verify({factorId:f.id,challengeId:g.challengeId,webauthn:{rpId:s,rpOrigins:l,type:g.webauthn.type,credential_response:g.webauthn.credential_response}}):{data:null,error:y}}catch(f){return W(f)?{data:null,error:f}:{data:null,error:new xn("Unexpected error in register",f)}}}}D_();const ew={url:J2,storageKey:Z2,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:W2,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:1e4};async function pp(r,n,s){return await s()}const pr={};class Ni{get jwks(){var n,s;return(s=(n=pr[this.storageKey])===null||n===void 0?void 0:n.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(n){pr[this.storageKey]=Object.assign(Object.assign({},pr[this.storageKey]),{jwks:n})}get jwks_cached_at(){var n,s;return(s=(n=pr[this.storageKey])===null||n===void 0?void 0:n.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(n){pr[this.storageKey]=Object.assign(Object.assign({},pr[this.storageKey]),{cachedAt:n})}constructor(n){var s,l,c;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const d=Object.assign(Object.assign({},ew),n);if(this.storageKey=d.storageKey,this.instanceID=(s=Ni.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,Ni.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!d.debug,typeof d.debug=="function"&&(this.logger=d.debug),this.instanceID>0&&rt()){const f=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(f),this.logDebugMessages&&console.trace(f)}if(this.persistSession=d.persistSession,this.autoRefreshToken=d.autoRefreshToken,this.admin=new C_({url:d.url,headers:d.headers,fetch:d.fetch}),this.url=d.url,this.headers=d.headers,this.fetch=ng(d.fetch),this.lock=d.lock||pp,this.detectSessionInUrl=d.detectSessionInUrl,this.flowType=d.flowType,this.hasCustomAuthorizationHeader=d.hasCustomAuthorizationHeader,this.throwOnError=d.throwOnError,this.lockAcquireTimeout=d.lockAcquireTimeout,d.lock?this.lock=d.lock:this.persistSession&&rt()&&(!((l=globalThis?.navigator)===null||l===void 0)&&l.locks)?this.lock=U_:this.lock=pp,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new F_(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.persistSession?(d.storage?this.storage=d.storage:ag()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=fp(this.memoryStorage)),d.userStorage&&(this.userStorage=d.userStorage)):(this.memoryStorage={},this.storage=fp(this.memoryStorage)),rt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(f){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",f)}(c=this.broadcastChannel)===null||c===void 0||c.addEventListener("message",async f=>{this._debug("received broadcast notification from other tab or client",f);try{await this._notifyAllSubscribers(f.data.event,f.data.session,!1)}catch(m){this._debug("#broadcastChannel","error",m)}})}this.initialize().catch(f=>{this._debug("#initialize()","error",f)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(n){if(this.throwOnError&&n&&n.error)throw n.error;return n}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Fp}) ${new Date().toISOString()}`}_debug(...n){return this.logDebugMessages&&this.logger(this._logPrefix(),...n),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var n;try{let s={},l="none";if(rt()&&(s=h_(window.location.href),this._isImplicitGrantCallback(s)?l="implicit":await this._isPKCECallback(s)&&(l="pkce")),rt()&&this.detectSessionInUrl&&l!=="none"){const{data:c,error:d}=await this._getSessionFromURL(s,l);if(d){if(this._debug("#_initialize()","error detecting session from URL",d),n_(d)){const g=(n=d.details)===null||n===void 0?void 0:n.code;if(g==="identity_already_exists"||g==="identity_not_found"||g==="single_identity_not_deletable")return{error:d}}return{error:d}}const{session:f,redirectType:m}=c;return this._debug("#_initialize()","detected session in URL",f,"redirect type",m),await this._saveSession(f),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",f):await this._notifyAllSubscribers("SIGNED_IN",f)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return W(s)?this._returnResult({error:s}):this._returnResult({error:new xn("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(n){var s,l,c;try{const d=await ne(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(l=(s=n?.options)===null||s===void 0?void 0:s.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:(c=n?.options)===null||c===void 0?void 0:c.captchaToken}},xform:Kt}),{data:f,error:m}=d;if(m||!f)return this._returnResult({data:{user:null,session:null},error:m});const g=f.session,y=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:y,session:g},error:null})}catch(d){if(W(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signUp(n){var s,l,c;try{let d;if("email"in n){const{email:v,password:_,options:x}=n;let w=null,j=null;this.flowType==="pkce"&&([w,j]=await hr(this.storage,this.storageKey)),d=await ne(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x?.emailRedirectTo,body:{email:v,password:_,data:(s=x?.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:x?.captchaToken},code_challenge:w,code_challenge_method:j},xform:Kt})}else if("phone"in n){const{phone:v,password:_,options:x}=n;d=await ne(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:v,password:_,data:(l=x?.data)!==null&&l!==void 0?l:{},channel:(c=x?.channel)!==null&&c!==void 0?c:"sms",gotrue_meta_security:{captcha_token:x?.captchaToken}},xform:Kt})}else throw new sl("You must provide either an email or phone number and a password");const{data:f,error:m}=d;if(m||!f)return await nt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:m});const g=f.session,y=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",g)),this._returnResult({data:{user:y,session:g},error:null})}catch(d){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(d))return this._returnResult({data:{user:null,session:null},error:d});throw d}}async signInWithPassword(n){try{let s;if("email"in n){const{email:d,password:f,options:m}=n;s=await ne(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:d,password:f,gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:dp})}else if("phone"in n){const{phone:d,password:f,options:m}=n;s=await ne(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:d,password:f,gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:dp})}else throw new sl("You must provide either an email or phone number and a password");const{data:l,error:c}=s;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const d=new dr;return this._returnResult({data:{user:null,session:null},error:d})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:Object.assign({user:l.user,session:l.session},l.weak_password?{weakPassword:l.weak_password}:null),error:c})}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(n){var s,l,c,d;return await this._handleProviderSignIn(n.provider,{redirectTo:(s=n.options)===null||s===void 0?void 0:s.redirectTo,scopes:(l=n.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=n.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:(d=n.options)===null||d===void 0?void 0:d.skipBrowserRedirect})}async exchangeCodeForSession(n){return await this.initializePromise,this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(n))}async signInWithWeb3(n){const{chain:s}=n;switch(s){case"ethereum":return await this.signInWithEthereum(n);case"solana":return await this.signInWithSolana(n);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(n){var s,l,c,d,f,m,g,y,v,_,x;let w,j;if("message"in n)w=n.message,j=n.signature;else{const{chain:O,wallet:U,statement:q,options:D}=n;let C;if(rt())if(typeof U=="object")C=U;else{const je=window;if("ethereum"in je&&typeof je.ethereum=="object"&&"request"in je.ethereum&&typeof je.ethereum.request=="function")C=je.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof U!="object"||!D?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");C=U}const V=new URL((s=D?.url)!==null&&s!==void 0?s:window.location.href),F=await C.request({method:"eth_requestAccounts"}).then(je=>je).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!F||F.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const K=ig(F[0]);let P=(l=D?.signInWithEthereum)===null||l===void 0?void 0:l.chainId;if(!P){const je=await C.request({method:"eth_chainId"});P=M_(je)}const ve={domain:V.host,address:K,statement:q,uri:V.href,version:"1",chainId:P,nonce:(c=D?.signInWithEthereum)===null||c===void 0?void 0:c.nonce,issuedAt:(f=(d=D?.signInWithEthereum)===null||d===void 0?void 0:d.issuedAt)!==null&&f!==void 0?f:new Date,expirationTime:(m=D?.signInWithEthereum)===null||m===void 0?void 0:m.expirationTime,notBefore:(g=D?.signInWithEthereum)===null||g===void 0?void 0:g.notBefore,requestId:(y=D?.signInWithEthereum)===null||y===void 0?void 0:y.requestId,resources:(v=D?.signInWithEthereum)===null||v===void 0?void 0:v.resources};w=q_(ve),j=await C.request({method:"personal_sign",params:[L_(w),K]})}try{const{data:O,error:U}=await ne(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:j},!((_=n.options)===null||_===void 0)&&_.captchaToken?{gotrue_meta_security:{captcha_token:(x=n.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:Kt});if(U)throw U;if(!O||!O.session||!O.user){const q=new dr;return this._returnResult({data:{user:null,session:null},error:q})}return O.session&&(await this._saveSession(O.session),await this._notifyAllSubscribers("SIGNED_IN",O.session)),this._returnResult({data:Object.assign({},O),error:U})}catch(O){if(W(O))return this._returnResult({data:{user:null,session:null},error:O});throw O}}async signInWithSolana(n){var s,l,c,d,f,m,g,y,v,_,x,w;let j,O;if("message"in n)j=n.message,O=n.signature;else{const{chain:U,wallet:q,statement:D,options:C}=n;let V;if(rt())if(typeof q=="object")V=q;else{const K=window;if("solana"in K&&typeof K.solana=="object"&&("signIn"in K.solana&&typeof K.solana.signIn=="function"||"signMessage"in K.solana&&typeof K.solana.signMessage=="function"))V=K.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof q!="object"||!C?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");V=q}const F=new URL((s=C?.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in V&&V.signIn){const K=await V.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},C?.signInWithSolana),{version:"1",domain:F.host,uri:F.href}),D?{statement:D}:null));let P;if(Array.isArray(K)&&K[0]&&typeof K[0]=="object")P=K[0];else if(K&&typeof K=="object"&&"signedMessage"in K&&"signature"in K)P=K;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in P&&"signature"in P&&(typeof P.signedMessage=="string"||P.signedMessage instanceof Uint8Array)&&P.signature instanceof Uint8Array)j=typeof P.signedMessage=="string"?P.signedMessage:new TextDecoder().decode(P.signedMessage),O=P.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in V)||typeof V.signMessage!="function"||!("publicKey"in V)||typeof V!="object"||!V.publicKey||!("toBase58"in V.publicKey)||typeof V.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");j=[`${F.host} wants you to sign in with your Solana account:`,V.publicKey.toBase58(),...D?["",D,""]:[""],"Version: 1",`URI: ${F.href}`,`Issued At: ${(c=(l=C?.signInWithSolana)===null||l===void 0?void 0:l.issuedAt)!==null&&c!==void 0?c:new Date().toISOString()}`,...!((d=C?.signInWithSolana)===null||d===void 0)&&d.notBefore?[`Not Before: ${C.signInWithSolana.notBefore}`]:[],...!((f=C?.signInWithSolana)===null||f===void 0)&&f.expirationTime?[`Expiration Time: ${C.signInWithSolana.expirationTime}`]:[],...!((m=C?.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${C.signInWithSolana.chainId}`]:[],...!((g=C?.signInWithSolana)===null||g===void 0)&&g.nonce?[`Nonce: ${C.signInWithSolana.nonce}`]:[],...!((y=C?.signInWithSolana)===null||y===void 0)&&y.requestId?[`Request ID: ${C.signInWithSolana.requestId}`]:[],...!((_=(v=C?.signInWithSolana)===null||v===void 0?void 0:v.resources)===null||_===void 0)&&_.length?["Resources",...C.signInWithSolana.resources.map(P=>`- ${P}`)]:[]].join(`
`);const K=await V.signMessage(new TextEncoder().encode(j),"utf8");if(!K||!(K instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");O=K}}try{const{data:U,error:q}=await ne(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:j,signature:Sn(O)},!((x=n.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(w=n.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:Kt});if(q)throw q;if(!U||!U.session||!U.user){const D=new dr;return this._returnResult({data:{user:null,session:null},error:D})}return U.session&&(await this._saveSession(U.session),await this._notifyAllSubscribers("SIGNED_IN",U.session)),this._returnResult({data:Object.assign({},U),error:q})}catch(U){if(W(U))return this._returnResult({data:{user:null,session:null},error:U});throw U}}async _exchangeCodeForSession(n){const s=await bn(this.storage,`${this.storageKey}-code-verifier`),[l,c]=(s??"").split("/");try{if(!l&&this.flowType==="pkce")throw new r_;const{data:d,error:f}=await ne(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:n,code_verifier:l},xform:Kt});if(await nt(this.storage,`${this.storageKey}-code-verifier`),f)throw f;if(!d||!d.session||!d.user){const m=new dr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:m})}return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),this._returnResult({data:Object.assign(Object.assign({},d),{redirectType:c??null}),error:f})}catch(d){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(d))return this._returnResult({data:{user:null,session:null,redirectType:null},error:d});throw d}}async signInWithIdToken(n){try{const{options:s,provider:l,token:c,access_token:d,nonce:f}=n,m=await ne(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:c,access_token:d,nonce:f,gotrue_meta_security:{captcha_token:s?.captchaToken}},xform:Kt}),{data:g,error:y}=m;if(y)return this._returnResult({data:{user:null,session:null},error:y});if(!g||!g.session||!g.user){const v=new dr;return this._returnResult({data:{user:null,session:null},error:v})}return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",g.session)),this._returnResult({data:g,error:y})}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(n){var s,l,c,d,f;try{if("email"in n){const{email:m,options:g}=n;let y=null,v=null;this.flowType==="pkce"&&([y,v]=await hr(this.storage,this.storageKey));const{error:_}=await ne(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(s=g?.data)!==null&&s!==void 0?s:{},create_user:(l=g?.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:g?.captchaToken},code_challenge:y,code_challenge_method:v},redirectTo:g?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:_})}if("phone"in n){const{phone:m,options:g}=n,{data:y,error:v}=await ne(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(c=g?.data)!==null&&c!==void 0?c:{},create_user:(d=g?.shouldCreateUser)!==null&&d!==void 0?d:!0,gotrue_meta_security:{captcha_token:g?.captchaToken},channel:(f=g?.channel)!==null&&f!==void 0?f:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:y?.message_id},error:v})}throw new sl("You must provide either an email or phone number.")}catch(m){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async verifyOtp(n){var s,l;try{let c,d;"options"in n&&(c=(s=n.options)===null||s===void 0?void 0:s.redirectTo,d=(l=n.options)===null||l===void 0?void 0:l.captchaToken);const{data:f,error:m}=await ne(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},n),{gotrue_meta_security:{captcha_token:d}}),redirectTo:c,xform:Kt});if(m)throw m;if(!f)throw new Error("An error occurred on token verification.");const g=f.session,y=f.user;return g?.access_token&&(await this._saveSession(g),await this._notifyAllSubscribers(n.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",g)),this._returnResult({data:{user:y,session:g},error:null})}catch(c){if(W(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithSSO(n){var s,l,c,d,f;try{let m=null,g=null;this.flowType==="pkce"&&([m,g]=await hr(this.storage,this.storageKey));const y=await ne(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in n?{provider_id:n.providerId}:null),"domain"in n?{domain:n.domain}:null),{redirect_to:(l=(s=n.options)===null||s===void 0?void 0:s.redirectTo)!==null&&l!==void 0?l:void 0}),!((c=n?.options)===null||c===void 0)&&c.captchaToken?{gotrue_meta_security:{captcha_token:n.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:m,code_challenge_method:g}),headers:this.headers,xform:O_});return!((d=y.data)===null||d===void 0)&&d.url&&rt()&&!(!((f=n.options)===null||f===void 0)&&f.skipBrowserRedirect)&&window.location.assign(y.data.url),this._returnResult(y)}catch(m){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(m))return this._returnResult({data:null,error:m});throw m}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async n=>{const{data:{session:s},error:l}=n;if(l)throw l;if(!s)throw new kt;const{error:c}=await ne(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:c})})}catch(n){if(W(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async resend(n){try{const s=`${this.url}/resend`;if("email"in n){const{email:l,type:c,options:d}=n,{error:f}=await ne(this.fetch,"POST",s,{headers:this.headers,body:{email:l,type:c,gotrue_meta_security:{captcha_token:d?.captchaToken}},redirectTo:d?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:f})}else if("phone"in n){const{phone:l,type:c,options:d}=n,{data:f,error:m}=await ne(this.fetch,"POST",s,{headers:this.headers,body:{phone:l,type:c,gotrue_meta_security:{captcha_token:d?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:f?.message_id},error:m})}throw new sl("You must provide either an email or phone number and a type")}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async getSession(){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async s=>s))}async _acquireLock(n,s){this._debug("#_acquireLock","begin",n);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),c=(async()=>(await l,await s()))();return this.pendingInLock.push((async()=>{try{await c}catch{}})()),c}return await this.lock(`lock:${this.storageKey}`,n,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=s();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const c=[...this.pendingInLock];await Promise.all(c),this.pendingInLock.splice(0,c.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(n){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await n(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let n=null;const s=await bn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?n=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!n)return{data:{session:null},error:null};const l=n.expires_at?n.expires_at*1e3-Date.now()<Wc:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",n.expires_at),!l){if(this.userStorage){const f=await bn(this.userStorage,this.storageKey+"-user");f?.user?n.user=f.user:n.user=tu()}if(this.storage.isServer&&n.user&&!n.user.__isUserNotAvailableProxy){const f={value:this.suppressGetSessionWarning};n.user=E_(n.user,f),f.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:n},error:null}}const{data:c,error:d}=await this._callRefreshToken(n.refresh_token);return d?this._returnResult({data:{session:null},error:d}):this._returnResult({data:{session:c},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(n){if(n)return await this._getUser(n);await this.initializePromise;const s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser());return s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(n){try{return n?await ne(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:n,xform:Ja}):await this._useSession(async s=>{var l,c,d;const{data:f,error:m}=s;if(m)throw m;return!(!((l=f.session)===null||l===void 0)&&l.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new kt}:await ne(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(d=(c=f.session)===null||c===void 0?void 0:c.access_token)!==null&&d!==void 0?d:void 0,xform:Ja})})}catch(s){if(W(s))return Fc(s)&&(await this._removeSession(),await nt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(n,s={}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(n,s))}async _updateUser(n,s={}){try{return await this._useSession(async l=>{const{data:c,error:d}=l;if(d)throw d;if(!c.session)throw new kt;const f=c.session;let m=null,g=null;this.flowType==="pkce"&&n.email!=null&&([m,g]=await hr(this.storage,this.storageKey));const{data:y,error:v}=await ne(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s?.emailRedirectTo,body:Object.assign(Object.assign({},n),{code_challenge:m,code_challenge_method:g}),jwt:f.access_token,xform:Ja});if(v)throw v;return f.user=y.user,await this._saveSession(f),await this._notifyAllSubscribers("USER_UPDATED",f),this._returnResult({data:{user:f.user},error:null})})}catch(l){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(l))return this._returnResult({data:{user:null},error:l});throw l}}async setSession(n){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(n))}async _setSession(n){try{if(!n.access_token||!n.refresh_token)throw new kt;const s=Date.now()/1e3;let l=s,c=!0,d=null;const{payload:f}=ol(n.access_token);if(f.exp&&(l=f.exp,c=l<=s),c){const{data:m,error:g}=await this._callRefreshToken(n.refresh_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!m)return{data:{user:null,session:null},error:null};d=m}else{const{data:m,error:g}=await this._getUser(n.access_token);if(g)return this._returnResult({data:{user:null,session:null},error:g});d={access_token:n.access_token,refresh_token:n.refresh_token,user:m.user,token_type:"bearer",expires_in:l-s,expires_at:l},await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)}return this._returnResult({data:{user:d.user,session:d},error:null})}catch(s){if(W(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(n){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(n))}async _refreshSession(n){try{return await this._useSession(async s=>{var l;if(!n){const{data:f,error:m}=s;if(m)throw m;n=(l=f.session)!==null&&l!==void 0?l:void 0}if(!n?.refresh_token)throw new kt;const{data:c,error:d}=await this._callRefreshToken(n.refresh_token);return d?this._returnResult({data:{user:null,session:null},error:d}):c?this._returnResult({data:{user:c.user,session:c},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(W(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(n,s){try{if(!rt())throw new ll("No browser detected.");if(n.error||n.error_description||n.error_code)throw new ll(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new rp("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ll("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!n.code)throw new rp("No code detected.");const{data:D,error:C}=await this._exchangeCodeForSession(n.code);if(C)throw C;const V=new URL(window.location.href);return V.searchParams.delete("code"),window.history.replaceState(window.history.state,"",V.toString()),{data:{session:D.session,redirectType:null},error:null}}const{provider_token:l,provider_refresh_token:c,access_token:d,refresh_token:f,expires_in:m,expires_at:g,token_type:y}=n;if(!d||!m||!f||!y)throw new ll("No session defined in URL");const v=Math.round(Date.now()/1e3),_=parseInt(m);let x=v+_;g&&(x=parseInt(g));const w=x-v;w*1e3<=yr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${w}s, should have been closer to ${_}s`);const j=x-_;v-j>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",j,x,v):v-j<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",j,x,v);const{data:O,error:U}=await this._getUser(d);if(U)throw U;const q={provider_token:l,provider_refresh_token:c,access_token:d,expires_in:_,expires_at:x,refresh_token:f,token_type:y,user:O.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:q,redirectType:n.type},error:null})}catch(l){if(W(l))return this._returnResult({data:{session:null,redirectType:null},error:l});throw l}}_isImplicitGrantCallback(n){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),n):!!(n.access_token||n.error_description)}async _isPKCECallback(n){const s=await bn(this.storage,`${this.storageKey}-code-verifier`);return!!(n.code&&s)}async signOut(n={scope:"global"}){return await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(n))}async _signOut({scope:n}={scope:"global"}){return await this._useSession(async s=>{var l;const{data:c,error:d}=s;if(d&&!Fc(d))return this._returnResult({error:d});const f=(l=c.session)===null||l===void 0?void 0:l.access_token;if(f){const{error:m}=await this.admin.signOut(f,n);if(m&&!(a_(m)&&(m.status===404||m.status===401||m.status===403)||Fc(m)))return this._returnResult({error:m})}return n!=="others"&&(await this._removeSession(),await nt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(n){const s=d_(),l={id:s,callback:n,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,l),(async()=>(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)})))(),{data:{subscription:l}}}async _emitInitialSession(n){return await this._useSession(async s=>{var l,c;try{const{data:{session:d},error:f}=s;if(f)throw f;await((l=this.stateChangeEmitters.get(n))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",d)),this._debug("INITIAL_SESSION","callback id",n,"session",d)}catch(d){await((c=this.stateChangeEmitters.get(n))===null||c===void 0?void 0:c.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",n,"error",d),console.error(d)}})}async resetPasswordForEmail(n,s={}){let l=null,c=null;this.flowType==="pkce"&&([l,c]=await hr(this.storage,this.storageKey,!0));try{return await ne(this.fetch,"POST",`${this.url}/recover`,{body:{email:n,code_challenge:l,code_challenge_method:c,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(d){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(d))return this._returnResult({data:null,error:d});throw d}}async getUserIdentities(){var n;try{const{data:s,error:l}=await this.getUser();if(l)throw l;return this._returnResult({data:{identities:(n=s.user.identities)!==null&&n!==void 0?n:[]},error:null})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(n){return"token"in n?this.linkIdentityIdToken(n):this.linkIdentityOAuth(n)}async linkIdentityOAuth(n){var s;try{const{data:l,error:c}=await this._useSession(async d=>{var f,m,g,y,v;const{data:_,error:x}=d;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,n.provider,{redirectTo:(f=n.options)===null||f===void 0?void 0:f.redirectTo,scopes:(m=n.options)===null||m===void 0?void 0:m.scopes,queryParams:(g=n.options)===null||g===void 0?void 0:g.queryParams,skipBrowserRedirect:!0});return await ne(this.fetch,"GET",w,{headers:this.headers,jwt:(v=(y=_.session)===null||y===void 0?void 0:y.access_token)!==null&&v!==void 0?v:void 0})});if(c)throw c;return rt()&&!(!((s=n.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(l?.url),this._returnResult({data:{provider:n.provider,url:l?.url},error:null})}catch(l){if(W(l))return this._returnResult({data:{provider:n.provider,url:null},error:l});throw l}}async linkIdentityIdToken(n){return await this._useSession(async s=>{var l;try{const{error:c,data:{session:d}}=s;if(c)throw c;const{options:f,provider:m,token:g,access_token:y,nonce:v}=n,_=await ne(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(l=d?.access_token)!==null&&l!==void 0?l:void 0,body:{provider:m,id_token:g,access_token:y,nonce:v,link_identity:!0,gotrue_meta_security:{captcha_token:f?.captchaToken}},xform:Kt}),{data:x,error:w}=_;return w?this._returnResult({data:{user:null,session:null},error:w}):!x||!x.session||!x.user?this._returnResult({data:{user:null,session:null},error:new dr}):(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("USER_UPDATED",x.session)),this._returnResult({data:x,error:w}))}catch(c){if(await nt(this.storage,`${this.storageKey}-code-verifier`),W(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}})}async unlinkIdentity(n){try{return await this._useSession(async s=>{var l,c;const{data:d,error:f}=s;if(f)throw f;return await ne(this.fetch,"DELETE",`${this.url}/user/identities/${n.identity_id}`,{headers:this.headers,jwt:(c=(l=d.session)===null||l===void 0?void 0:l.access_token)!==null&&c!==void 0?c:void 0})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(n){const s=`#_refreshAccessToken(${n.substring(0,5)}...)`;this._debug(s,"begin");try{const l=Date.now();return await p_(async c=>(c>0&&await m_(200*Math.pow(2,c-1)),this._debug(s,"refreshing attempt",c),await ne(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:n},headers:this.headers,xform:Kt})),(c,d)=>{const f=200*Math.pow(2,c);return d&&eu(d)&&Date.now()+f-l<yr})}catch(l){if(this._debug(s,"error",l),W(l))return this._returnResult({data:{session:null,user:null},error:l});throw l}finally{this._debug(s,"end")}}_isValidSession(n){return typeof n=="object"&&n!==null&&"access_token"in n&&"refresh_token"in n&&"expires_at"in n}async _handleProviderSignIn(n,s){const l=await this._getUrlForProvider(`${this.url}/authorize`,n,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",n,"options",s,"url",l),rt()&&!s.skipBrowserRedirect&&window.location.assign(l),{data:{provider:n,url:l},error:null}}async _recoverAndRefresh(){var n,s;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const c=await bn(this.storage,this.storageKey);if(c&&this.userStorage){let f=await bn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!f&&(f={user:c.user},await vr(this.userStorage,this.storageKey+"-user",f)),c.user=(n=f?.user)!==null&&n!==void 0?n:tu()}else if(c&&!c.user&&!c.user){const f=await bn(this.storage,this.storageKey+"-user");f&&f?.user?(c.user=f.user,await nt(this.storage,this.storageKey+"-user"),await vr(this.storage,this.storageKey,c)):c.user=tu()}if(this._debug(l,"session from storage",c),!this._isValidSession(c)){this._debug(l,"session is not valid"),c!==null&&await this._removeSession();return}const d=((s=c.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Wc;if(this._debug(l,`session has${d?"":" not"} expired with margin of ${Wc}s`),d){if(this.autoRefreshToken&&c.refresh_token){const{error:f}=await this._callRefreshToken(c.refresh_token);f&&(console.error(f),eu(f)||(this._debug(l,"refresh failed with a non-retryable error, removing the session",f),await this._removeSession()))}}else if(c.user&&c.user.__isUserNotAvailableProxy===!0)try{const{data:f,error:m}=await this._getUser(c.access_token);!m&&f?.user?(c.user=f.user,await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)):this._debug(l,"could not get user data, skipping SIGNED_IN notification")}catch(f){console.error("Error getting user data:",f),this._debug(l,"error getting user data, skipping SIGNED_IN notification",f)}else await this._notifyAllSubscribers("SIGNED_IN",c)}catch(c){this._debug(l,"error",c),console.error(c);return}finally{this._debug(l,"end")}}async _callRefreshToken(n){var s,l;if(!n)throw new kt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const c=`#_callRefreshToken(${n.substring(0,5)}...)`;this._debug(c,"begin");try{this.refreshingDeferred=new wl;const{data:d,error:f}=await this._refreshAccessToken(n);if(f)throw f;if(!d.session)throw new kt;await this._saveSession(d.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const m={data:d.session,error:null};return this.refreshingDeferred.resolve(m),m}catch(d){if(this._debug(c,"error",d),W(d)){const f={data:null,error:d};return eu(d)||await this._removeSession(),(s=this.refreshingDeferred)===null||s===void 0||s.resolve(f),f}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(d),d}finally{this.refreshingDeferred=null,this._debug(c,"end")}}async _notifyAllSubscribers(n,s,l=!0){const c=`#_notifyAllSubscribers(${n})`;this._debug(c,"begin",s,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:n,session:s});const d=[],f=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(n,s)}catch(g){d.push(g)}});if(await Promise.all(f),d.length>0){for(let m=0;m<d.length;m+=1)console.error(d[m]);throw d[0]}}finally{this._debug(c,"end")}}async _saveSession(n){this._debug("#_saveSession()",n),this.suppressGetSessionWarning=!0,await nt(this.storage,`${this.storageKey}-code-verifier`);const s=Object.assign({},n),l=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!l&&s.user&&await vr(this.userStorage,this.storageKey+"-user",{user:s.user});const c=Object.assign({},s);delete c.user;const d=cp(c);await vr(this.storage,this.storageKey,d)}else{const c=cp(s);await vr(this.storage,this.storageKey,c)}}async _removeSession(){this._debug("#_removeSession()"),this.suppressGetSessionWarning=!1,await nt(this.storage,this.storageKey),await nt(this.storage,this.storageKey+"-code-verifier"),await nt(this.storage,this.storageKey+"-user"),this.userStorage&&await nt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const n=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{n&&rt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",n)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const n=setInterval(()=>this._autoRefreshTokenTick(),yr);this.autoRefreshTicker=n,n&&typeof n=="object"&&typeof n.unref=="function"?n.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(n);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const n=this.autoRefreshTicker;this.autoRefreshTicker=null,n&&clearInterval(n);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const n=Date.now();try{return await this._useSession(async s=>{const{data:{session:l}}=s;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const c=Math.floor((l.expires_at*1e3-n)/yr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${c} ticks, a tick lasts ${yr}ms, refresh threshold is ${hu} ticks`),c<=hu&&await this._callRefreshToken(l.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(n){if(n.isAcquireTimeout||n instanceof rg)this._debug("auto refresh token tick lock not available");else throw n}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!rt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(n){this._debug("#visibilityChangedCallback","error",n)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(n){console.error("_handleVisibilityChange",n)}}async _onVisibilityChanged(n){const s=`#_onVisibilityChanged(${n})`;this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),n||(await this.initializePromise,await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(n,s,l){const c=[`provider=${encodeURIComponent(s)}`];if(l?.redirectTo&&c.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),l?.scopes&&c.push(`scopes=${encodeURIComponent(l.scopes)}`),this.flowType==="pkce"){const[d,f]=await hr(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(f)}`});c.push(m.toString())}if(l?.queryParams){const d=new URLSearchParams(l.queryParams);c.push(d.toString())}return l?.skipBrowserRedirect&&c.push(`skip_http_redirect=${l.skipBrowserRedirect}`),`${n}?${c.join("&")}`}async _unenroll(n){try{return await this._useSession(async s=>{var l;const{data:c,error:d}=s;return d?this._returnResult({data:null,error:d}):await ne(this.fetch,"DELETE",`${this.url}/factors/${n.factorId}`,{headers:this.headers,jwt:(l=c?.session)===null||l===void 0?void 0:l.access_token})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(n){try{return await this._useSession(async s=>{var l,c;const{data:d,error:f}=s;if(f)return this._returnResult({data:null,error:f});const m=Object.assign({friendly_name:n.friendlyName,factor_type:n.factorType},n.factorType==="phone"?{phone:n.phone}:n.factorType==="totp"?{issuer:n.issuer}:{}),{data:g,error:y}=await ne(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(l=d?.session)===null||l===void 0?void 0:l.access_token});return y?this._returnResult({data:null,error:y}):(n.factorType==="totp"&&g.type==="totp"&&(!((c=g?.totp)===null||c===void 0)&&c.qr_code)&&(g.totp.qr_code=`data:image/svg+xml;utf-8,${g.totp.qr_code}`),this._returnResult({data:g,error:null}))})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _verify(n){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var l;const{data:c,error:d}=s;if(d)return this._returnResult({data:null,error:d});const f=Object.assign({challenge_id:n.challengeId},"webauthn"in n?{webauthn:Object.assign(Object.assign({},n.webauthn),{credential_response:n.webauthn.type==="create"?K_(n.webauthn.credential_response):I_(n.webauthn.credential_response)})}:{code:n.code}),{data:m,error:g}=await ne(this.fetch,"POST",`${this.url}/factors/${n.factorId}/verify`,{body:f,headers:this.headers,jwt:(l=c?.session)===null||l===void 0?void 0:l.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+m.expires_in},m)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",m),this._returnResult({data:m,error:g}))})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}})}async _challenge(n){return this._acquireLock(this.lockAcquireTimeout,async()=>{try{return await this._useSession(async s=>{var l;const{data:c,error:d}=s;if(d)return this._returnResult({data:null,error:d});const f=await ne(this.fetch,"POST",`${this.url}/factors/${n.factorId}/challenge`,{body:n,headers:this.headers,jwt:(l=c?.session)===null||l===void 0?void 0:l.access_token});if(f.error)return f;const{data:m}=f;if(m.type!=="webauthn")return{data:m,error:null};switch(m.webauthn.type){case"create":return{data:Object.assign(Object.assign({},m),{webauthn:Object.assign(Object.assign({},m.webauthn),{credential_options:Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:V_(m.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},m),{webauthn:Object.assign(Object.assign({},m.webauthn),{credential_options:Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:Y_(m.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}})}async _challengeAndVerify(n){const{data:s,error:l}=await this._challenge({factorId:n.factorId});return l?this._returnResult({data:null,error:l}):await this._verify({factorId:n.factorId,challengeId:s.id,code:n.code})}async _listFactors(){var n;const{data:{user:s},error:l}=await this.getUser();if(l)return{data:null,error:l};const c={all:[],phone:[],totp:[],webauthn:[]};for(const d of(n=s?.factors)!==null&&n!==void 0?n:[])c.all.push(d),d.status==="verified"&&c[d.factor_type].push(d);return{data:c,error:null}}async _getAuthenticatorAssuranceLevel(n){var s,l,c,d;if(n)try{const{payload:w}=ol(n);let j=null;w.aal&&(j=w.aal);let O=j;const{data:{user:U},error:q}=await this.getUser(n);if(q)return this._returnResult({data:null,error:q});((l=(s=U?.factors)===null||s===void 0?void 0:s.filter(V=>V.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(O="aal2");const C=w.amr||[];return{data:{currentLevel:j,nextLevel:O,currentAuthenticationMethods:C},error:null}}catch(w){if(W(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:f},error:m}=await this.getSession();if(m)return this._returnResult({data:null,error:m});if(!f)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:g}=ol(f.access_token);let y=null;g.aal&&(y=g.aal);let v=y;((d=(c=f.user.factors)===null||c===void 0?void 0:c.filter(w=>w.status==="verified"))!==null&&d!==void 0?d:[]).length>0&&(v="aal2");const x=g.amr||[];return{data:{currentLevel:y,nextLevel:v,currentAuthenticationMethods:x},error:null}}async _getAuthorizationDetails(n){try{return await this._useSession(async s=>{const{data:{session:l},error:c}=s;return c?this._returnResult({data:null,error:c}):l?await ne(this.fetch,"GET",`${this.url}/oauth/authorizations/${n}`,{headers:this.headers,jwt:l.access_token,xform:d=>({data:d,error:null})}):this._returnResult({data:null,error:new kt})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(n,s){try{return await this._useSession(async l=>{const{data:{session:c},error:d}=l;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new kt});const f=await ne(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"approve"},xform:m=>({data:m,error:null})});return f.data&&f.data.redirect_url&&rt()&&!s?.skipBrowserRedirect&&window.location.assign(f.data.redirect_url),f})}catch(l){if(W(l))return this._returnResult({data:null,error:l});throw l}}async _denyAuthorization(n,s){try{return await this._useSession(async l=>{const{data:{session:c},error:d}=l;if(d)return this._returnResult({data:null,error:d});if(!c)return this._returnResult({data:null,error:new kt});const f=await ne(this.fetch,"POST",`${this.url}/oauth/authorizations/${n}/consent`,{headers:this.headers,jwt:c.access_token,body:{action:"deny"},xform:m=>({data:m,error:null})});return f.data&&f.data.redirect_url&&rt()&&!s?.skipBrowserRedirect&&window.location.assign(f.data.redirect_url),f})}catch(l){if(W(l))return this._returnResult({data:null,error:l});throw l}}async _listOAuthGrants(){try{return await this._useSession(async n=>{const{data:{session:s},error:l}=n;return l?this._returnResult({data:null,error:l}):s?await ne(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new kt})})}catch(n){if(W(n))return this._returnResult({data:null,error:n});throw n}}async _revokeOAuthGrant(n){try{return await this._useSession(async s=>{const{data:{session:l},error:c}=s;return c?this._returnResult({data:null,error:c}):l?(await ne(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:l.access_token,query:{client_id:n.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new kt})})}catch(s){if(W(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(n,s={keys:[]}){let l=s.keys.find(m=>m.kid===n);if(l)return l;const c=Date.now();if(l=this.jwks.keys.find(m=>m.kid===n),l&&this.jwks_cached_at+e_>c)return l;const{data:d,error:f}=await ne(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(f)throw f;return!d.keys||d.keys.length===0||(this.jwks=d,this.jwks_cached_at=c,l=d.keys.find(m=>m.kid===n),!l)?null:l}async getClaims(n,s={}){try{let l=n;if(!l){const{data:w,error:j}=await this.getSession();if(j||!w.session)return this._returnResult({data:null,error:j});l=w.session.access_token}const{header:c,payload:d,signature:f,raw:{header:m,payload:g}}=ol(l);s?.allowExpired||x_(d.exp);const y=!c.alg||c.alg.startsWith("HS")||!c.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(c.kid,s?.keys?{keys:s.keys}:s?.jwks);if(!y){const{error:w}=await this.getUser(l);if(w)throw w;return{data:{claims:d,header:c,signature:f},error:null}}const v=S_(c.alg),_=await crypto.subtle.importKey("jwk",y,v,!0,["verify"]);if(!await crypto.subtle.verify(v,_,f,c_(`${m}.${g}`)))throw new pu("Invalid JWT signature");return{data:{claims:d,header:c,signature:f},error:null}}catch(l){if(W(l))return this._returnResult({data:null,error:l});throw l}}}Ni.nextInstanceID={};const tw=Ni,aw="2.95.3";let xi="";typeof Deno<"u"?xi="deno":typeof document<"u"?xi="web":typeof navigator<"u"&&navigator.product==="ReactNative"?xi="react-native":xi="node";const nw={"X-Client-Info":`supabase-js-${xi}/${aw}`},rw={headers:nw},iw={schema:"public"},sw={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},lw={};function Ci(r){"@babel/helpers - typeof";return Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ci(r)}function ow(r,n){if(Ci(r)!="object"||!r)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var l=s.call(r,n);if(Ci(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function cw(r){var n=ow(r,"string");return Ci(n)=="symbol"?n:n+""}function uw(r,n,s){return(n=cw(n))in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,r}function gp(r,n){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),s.push.apply(s,l)}return s}function qe(r){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?gp(Object(s),!0).forEach(function(l){uw(r,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):gp(Object(s)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(s,l))})}return r}const dw=r=>r?(...n)=>r(...n):(...n)=>fetch(...n),hw=()=>Headers,fw=(r,n,s)=>{const l=dw(s),c=hw();return async(d,f)=>{var m;const g=(m=await n())!==null&&m!==void 0?m:r;let y=new c(f?.headers);return y.has("apikey")||y.set("apikey",r),y.has("Authorization")||y.set("Authorization",`Bearer ${g}`),l(d,qe(qe({},f),{},{headers:y}))}};function mw(r){return r.endsWith("/")?r:r+"/"}function pw(r,n){var s,l;const{db:c,auth:d,realtime:f,global:m}=r,{db:g,auth:y,realtime:v,global:_}=n,x={db:qe(qe({},g),c),auth:qe(qe({},y),d),realtime:qe(qe({},v),f),storage:{},global:qe(qe(qe({},_),m),{},{headers:qe(qe({},(s=_?.headers)!==null&&s!==void 0?s:{}),(l=m?.headers)!==null&&l!==void 0?l:{})}),accessToken:async()=>""};return r.accessToken?x.accessToken=r.accessToken:delete x.accessToken,x}function gw(r){const n=r?.trim();if(!n)throw new Error("supabaseUrl is required.");if(!n.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(mw(n))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var yw=class extends tw{constructor(r){super(r)}},vw=class{constructor(r,n,s){var l,c;this.supabaseUrl=r,this.supabaseKey=n;const d=gw(r);if(!n)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const f=`sb-${d.hostname.split(".")[0]}-auth-token`,m={db:iw,realtime:lw,auth:qe(qe({},sw),{},{storageKey:f}),global:rw},g=pw(s??{},m);if(this.storageKey=(l=g.auth.storageKey)!==null&&l!==void 0?l:"",this.headers=(c=g.global.headers)!==null&&c!==void 0?c:{},g.accessToken)this.accessToken=g.accessToken,this.auth=new Proxy({},{get:(v,_)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(_)} is not possible`)}});else{var y;this.auth=this._initSupabaseAuthClient((y=g.auth)!==null&&y!==void 0?y:{},this.headers,g.global.fetch)}this.fetch=fw(n,this._getAccessToken.bind(this),g.global.fetch),this.realtime=this._initRealtimeClient(qe({headers:this.headers,accessToken:this._getAccessToken.bind(this)},g.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(v=>this.realtime.setAuth(v)).catch(v=>console.warn("Failed to set initial Realtime auth token:",v)),this.rest=new a2(new URL("rest/v1",d).href,{headers:this.headers,schema:g.db.schema,fetch:this.fetch,timeout:g.db.timeout,urlLengthLimit:g.db.urlLengthLimit}),this.storage=new Q2(this.storageUrl.href,this.headers,this.fetch,s?.storage),g.accessToken||this._listenForAuthEvents()}get functions(){return new P1(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(r){return this.rest.from(r)}schema(r){return this.rest.schema(r)}rpc(r,n={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(r,n,s)}channel(r,n={config:{}}){return this.realtime.channel(r,n)}getChannels(){return this.realtime.getChannels()}removeChannel(r){return this.realtime.removeChannel(r)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var r=this,n,s;if(r.accessToken)return await r.accessToken();const{data:l}=await r.auth.getSession();return(n=(s=l.session)===null||s===void 0?void 0:s.access_token)!==null&&n!==void 0?n:r.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:r,persistSession:n,detectSessionInUrl:s,storage:l,userStorage:c,storageKey:d,flowType:f,lock:m,debug:g,throwOnError:y},v,_){const x={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new yw({url:this.authUrl.href,headers:qe(qe({},x),v),storageKey:d,autoRefreshToken:r,persistSession:n,detectSessionInUrl:s,storage:l,userStorage:c,flowType:f,lock:m,debug:g,throwOnError:y,fetch:_,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(r){return new b2(this.realtimeUrl.href,qe(qe({},r),{},{params:qe(qe({},{apikey:this.supabaseKey}),r?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,n)=>{this._handleTokenChanged(r,"CLIENT",n?.access_token)})}_handleTokenChanged(r,n,s){(r==="TOKEN_REFRESHED"||r==="SIGNED_IN")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):r==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const bw=(r,n,s)=>new vw(r,n,s);function _w(){if(typeof window<"u")return!1;const r=globalThis.process;if(!r)return!1;const n=r.version;if(n==null)return!1;const s=n.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=18:!1}_w()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Ze=bw("https://gvedzlczcpaxfbufpenl.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2ZWR6bGN6Y3BheGZidWZwZW5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2MjQ3NjEsImV4cCI6MjA4NjIwMDc2MX0.kLSYmiAfOfbkIqh_W1JKJ_mXry9ApBBwx5DoeMxtO00"),lg=A.createContext(),En=()=>A.useContext(lg),ww=()=>{const[r,n]=A.useState(!1),[s,l]=A.useState(""),[c,d]=A.useState([]),[f,m]=A.useState(!1),[g,y]=A.useState(-1),v=jn(),{cartItems:_,user:x}=En(),w=_.reduce((C,V)=>C+V.quantity,0),j=A.useRef(null),O=A.useRef(null);A.useEffect(()=>{if(O.current&&clearTimeout(O.current),s.trim().length<2){d([]),m(!1);return}return O.current=setTimeout(async()=>{try{const{data:C,error:V}=await Ze.from("products").select("id, name, price, sale_price, images, image_url").ilike("name",`%${s.trim()}%`).limit(6);if(V)throw V;const F=(C||[]).map(K=>({...K,image:K.images&&K.images.length>0?K.images[0]:K.image_url||"",displayPrice:K.sale_price?parseFloat(K.sale_price):parseFloat(K.price)}));d(F),m(F.length>0),y(-1)}catch(C){console.error("Search error:",C)}},300),()=>clearTimeout(O.current)},[s]),A.useEffect(()=>{const C=V=>{j.current&&!j.current.contains(V.target)&&m(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const U=C=>{C.preventDefault();const V=s.trim();V&&(v(`/category/all?search=${encodeURIComponent(V)}`),l(""),m(!1),n(!1))},q=C=>{v(`/product/${C.id}`),l(""),m(!1),n(!1)},D=C=>{f&&(C.key==="ArrowDown"?(C.preventDefault(),y(V=>Math.min(V+1,c.length-1))):C.key==="ArrowUp"?(C.preventDefault(),y(V=>Math.max(V-1,-1))):C.key==="Enter"&&g>=0&&(C.preventDefault(),q(c[g])))};return h.jsxs("header",{className:"header",children:[h.jsxs("div",{className:"container header-container",children:[h.jsxs(Rt,{to:"/",className:"logo",children:["CH ",h.jsx("span",{className:"logo-accent",children:"Electronics"})]}),h.jsx("button",{className:"mobile-menu-btn",onClick:()=>n(!r),children:r?h.jsx(Yp,{size:22}):h.jsx(n1,{size:22})}),h.jsx("div",{className:`nav-wrapper ${r?"open":""}`,children:h.jsxs("form",{className:"search-bar",onSubmit:U,ref:j,children:[h.jsxs("div",{className:"search-input-wrapper",children:[h.jsx(m1,{className:"search-icon",size:18}),h.jsx("input",{type:"text",placeholder:"Search products...",value:s,onChange:C=>l(C.target.value),onFocus:()=>c.length>0&&m(!0),onKeyDown:D,autoComplete:"off"})]}),f&&h.jsxs("div",{className:"suggestions-dropdown",children:[c.map((C,V)=>h.jsxs("button",{type:"button",className:`suggestion-item ${V===g?"active":""}`,onClick:()=>q(C),onMouseEnter:()=>y(V),children:[h.jsx("div",{className:"suggestion-img",children:C.image?h.jsx("img",{src:C.image,alt:""}):h.jsx("div",{className:"img-placeholder"})}),h.jsxs("div",{className:"suggestion-info",children:[h.jsx("span",{className:"suggestion-name",children:C.name}),h.jsxs("span",{className:"suggestion-price",children:["$",C.displayPrice.toFixed(2)]})]})]},C.id)),h.jsxs("button",{type:"submit",className:"suggestion-view-all",onClick:U,children:['View all results for "',s,'"']})]})]})}),h.jsxs("div",{className:"header-actions",children:[h.jsxs(Rt,{to:"/cart",className:"action-btn",children:[h.jsx(Eu,{size:22}),w>0&&h.jsx("span",{className:"cart-badge",children:w})]}),h.jsx(Rt,{to:x?"/profile":"/login",className:"action-btn",children:x?h.jsx("div",{className:"user-avatar",children:x.email[0].toUpperCase()}):h.jsx(Vp,{size:22})})]})]}),h.jsx("style",{children:`
        .header {
          background: rgba(5, 5, 8, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .logo {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .logo-accent {
          color: var(--primary);
        }
        
        /* Search */
        .search-bar {
          flex: 1;
          max-width: 420px;
          position: relative;
        }
        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-input-wrapper input {
          width: 100%;
          padding: 0.6rem 1rem 0.6rem 2.5rem;
          border-radius: 40px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .search-input-wrapper input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .search-input-wrapper input:focus {
          outline: none;
          border-color: var(--border-hover);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.08);
        }
        .search-icon {
          position: absolute;
          left: 0.85rem;
          color: rgba(255, 255, 255, 0.3);
          pointer-events: none;
        }

        /* Suggestions Dropdown */
        .suggestions-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: rgba(12, 12, 18, 0.98);
          backdrop-filter: blur(24px);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          z-index: 200;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
          animation: dropIn 0.2s ease;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .suggestion-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.7rem 1rem;
          background: none;
          border: none;
          color: #fff;
          text-align: left;
          cursor: pointer;
          transition: background 0.15s ease;
          font-family: inherit;
          font-size: 0.875rem;
        }
        .suggestion-item:hover,
        .suggestion-item.active {
          background: rgba(0, 229, 255, 0.06);
        }
        .suggestion-item + .suggestion-item {
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .suggestion-img {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          flex-shrink: 0;
        }
        .suggestion-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .img-placeholder {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.06);
        }
        .suggestion-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .suggestion-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
        }
        .suggestion-price {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }
        .suggestion-view-all {
          display: block;
          width: 100%;
          padding: 0.7rem 1rem;
          background: none;
          border: none;
          border-top: 1px solid var(--border);
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          transition: background 0.15s ease;
          font-family: inherit;
        }
        .suggestion-view-all:hover {
          background: rgba(0, 229, 255, 0.04);
        }

        /* Nav wrapper */
        .nav-wrapper {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: center;
        }

        /* Actions */
        .header-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .action-btn {
          color: rgba(255, 255, 255, 0.7);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .action-btn:hover {
          color: var(--primary);
          background: rgba(0, 229, 255, 0.08);
        }
        .cart-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: var(--primary);
          color: var(--background);
          font-size: 0.65rem;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-avatar {
          width: 28px;
          height: 28px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--background);
          font-weight: 700;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          color: rgba(255, 255, 255, 0.7);
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
            align-items: center;
          }
          .nav-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(5, 5, 8, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 1rem 1.5rem;
            display: none;
            border-bottom: 1px solid var(--border);
          }
          .nav-wrapper.open {
            display: flex;
          }
          .search-bar {
            width: 100%;
            max-width: none;
          }
        }
      `})]})},xw=()=>{const[r,n]=A.useState(0),s=[{id:1,name:"Pro Max Phone",category:"Smartphones",price:"$999",image:"https://images.unsplash.com/photo-1592286927505-83aee7b08aa0?w=800&q=80",badge:"New"},{id:2,name:"Ultra Laptop",category:"Laptops",price:"$1,899",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",badge:"Best Seller"},{id:3,name:"Wireless Buds",category:"Audio",price:"$249",image:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",badge:"Hot"}];A.useEffect(()=>{const d=setInterval(()=>{n(f=>(f+1)%s.length)},5e3);return()=>clearInterval(d)},[s.length]);const l=()=>{n(d=>(d+1)%s.length)},c=()=>{n(d=>(d-1+s.length)%s.length)};return h.jsxs("div",{className:"hero-container",children:[h.jsx("div",{className:"accent-glow"}),h.jsxs("div",{className:"hero-grid",children:[h.jsxs("div",{className:"hero-content",children:[h.jsxs("div",{className:"hero-badge",children:[h.jsx("span",{className:"badge-dot"}),h.jsx("span",{children:"FEATURED COLLECTION"})]}),h.jsxs("h1",{className:"hero-title",children:["Premium",h.jsx("br",{}),"Electronics"]}),h.jsx("p",{className:"hero-subtitle",children:"Discover cutting-edge technology designed for those who demand the best. Performance, quality, and innovation in every product."}),h.jsxs("div",{className:"hero-cta",children:[h.jsxs(Rt,{to:"/products",className:"cta-primary",children:[h.jsx("span",{children:"Shop Collection"}),h.jsx("div",{className:"cta-glow"})]}),h.jsxs(Rt,{to:"/deals",className:"cta-secondary",children:[h.jsx("span",{children:"View All Deals"}),h.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:h.jsx("path",{d:"M4 10h12m-6-6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]})]}),h.jsx("div",{className:"carousel-dots",children:s.map((d,f)=>h.jsx("button",{className:`dot ${r===f?"active":""}`,onClick:()=>n(f),"aria-label":`Go to slide ${f+1}`},f))})]}),h.jsx("div",{className:"hero-carousel",children:h.jsxs("div",{className:"carousel-wrapper",children:[h.jsx("div",{className:"carousel-track",style:{transform:`translateX(-${r*100}%)`},children:s.map(d=>h.jsx("div",{className:"carousel-slide",children:h.jsxs("div",{className:"product-card",children:[h.jsx("div",{className:"product-glow"}),h.jsx("div",{className:"product-badge",children:d.badge}),h.jsx("img",{src:d.image,alt:d.name,className:"product-image"}),h.jsxs("div",{className:"product-info",children:[h.jsx("div",{className:"product-category",children:d.category}),h.jsx("div",{className:"product-name",children:d.name}),h.jsx("div",{className:"product-price",children:d.price})]})]})},d.id))}),h.jsx("button",{className:"carousel-arrow prev",onClick:c,"aria-label":"Previous slide",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:h.jsx("path",{d:"M15 18l-6-6 6-6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),h.jsx("button",{className:"carousel-arrow next",onClick:l,"aria-label":"Next slide",children:h.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:h.jsx("path",{d:"M9 18l6-6-6-6",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]})})]}),h.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .hero-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: #050508;
          overflow: hidden;
        }

        /* Accent glow */
        .accent-glow {
          position: absolute;
          width: 1000px;
          height: 1000px;
          top: 50%;
          right: 20%;
          transform: translate(0, -50%);
          background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
          animation: glowPulse 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Grid layout */
        .hero-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          max-width: 1600px;
          margin: 0 auto;
          align-items: center;
          gap: 4rem;
          padding: 2rem;
        }

        /* Left side - Content */
        .hero-content {
          padding: 2rem;
          animation: fadeInLeft 1s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 2px;
          color: rgba(0, 229, 255, 0.8);
          margin-bottom: 2.5rem;
          animation: fadeInLeft 1s ease-out 0.2s both;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #00e5ff;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.8);
          animation: dotPulse 2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Title */
        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 900;
          line-height: 0.95;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          animation: fadeInLeft 1s ease-out 0.3s both;
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 3rem;
          max-width: 500px;
          animation: fadeInLeft 1s ease-out 0.4s both;
        }

        /* CTAs */
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          animation: fadeInLeft 1s ease-out 0.5s both;
        }

        .cta-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 1.25rem 3rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #050508;
          background: #00e5ff;
          text-decoration: none;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.4);
        }

        .cta-primary:hover .cta-glow {
          opacity: 1;
        }

        .cta-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.6), transparent);
          filter: blur(30px);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 2.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 229, 255, 0.3);
          transform: translateX(4px);
        }

        .cta-secondary svg {
          transition: transform 0.3s ease;
        }

        .cta-secondary:hover svg {
          transform: translateX(4px);
        }

        /* Carousel dots */
        .carousel-dots {
          display: flex;
          gap: 0.75rem;
          animation: fadeInLeft 1s ease-out 0.6s both;
        }

        .dot {
          width: 40px;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: #00e5ff;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.6);
        }

        .dot:hover {
          background: rgba(0, 229, 255, 0.5);
        }

        /* Right side - Carousel */
        .hero-carousel {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInRight 1s ease-out 0.4s both;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 600px;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          min-width: 100%;
          padding: 2rem;
        }

        /* Product card */
        .product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .product-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%);
          filter: blur(60px);
          opacity: 0.8;
          animation: productGlow 4s ease-in-out infinite;
        }

        @keyframes productGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .product-badge {
          position: absolute;
          top: 0;
          right: 10%;
          padding: 0.5rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: #050508;
          background: #00e5ff;
          text-transform: uppercase;
          z-index: 10;
        }

        .product-image {
          position: relative;
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5));
          margin-bottom: 2rem;
        }

        .product-info {
          text-align: center;
          width: 100%;
        }

        .product-category {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 2px;
          color: rgba(0, 229, 255, 0.7);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .product-name {
          font-family: 'Inter', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .product-price {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Navigation arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: #00e5ff;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .carousel-arrow:hover {
          background: rgba(0, 229, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-arrow.prev {
          left: 0;
        }

        .carousel-arrow.next {
          right: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1rem;
          }

          .hero-content {
            padding: 1rem;
            text-align: center;
          }

          .hero-badge {
            justify-content: center;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta {
            justify-content: center;
          }

          .carousel-dots {
            justify-content: center;
          }

          .hero-carousel {
            order: -1;
            min-height: 50vh;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .carousel-slide {
            padding: 1rem;
          }

          .product-name {
            font-size: 1.5rem;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `})]})},Sw=()=>{const[r,n]=A.useState({hours:10,minutes:45,seconds:12});A.useEffect(()=>{const l=setInterval(()=>{n(c=>c.seconds>0?{...c,seconds:c.seconds-1}:c.minutes>0?{...c,minutes:c.minutes-1,seconds:59}:c.hours>0?{...c,hours:c.hours-1,minutes:59,seconds:59}:c)},1e3);return()=>clearInterval(l)},[]);const s=l=>l.toString().padStart(2,"0");return h.jsxs("div",{className:"daily-deals-module",children:[h.jsx("div",{className:"deal-glow"}),h.jsxs("div",{className:"deal-header",children:[h.jsxs("div",{className:"deal-title",children:[h.jsx("div",{className:"deal-icon-wrap",children:h.jsx(k1,{size:20})}),h.jsxs("div",{children:[h.jsx("h2",{children:"Flash Sale"}),h.jsx("span",{className:"deal-subtitle",children:"Limited time offer"})]})]}),h.jsxs("div",{className:"countdown",children:[h.jsxs("div",{className:"time-unit",children:[h.jsx("div",{className:"time-box",children:s(r.hours)}),h.jsx("span",{className:"time-label",children:"HRS"})]}),h.jsx("span",{className:"colon",children:":"}),h.jsxs("div",{className:"time-unit",children:[h.jsx("div",{className:"time-box",children:s(r.minutes)}),h.jsx("span",{className:"time-label",children:"MIN"})]}),h.jsx("span",{className:"colon",children:":"}),h.jsxs("div",{className:"time-unit",children:[h.jsx("div",{className:"time-box",children:s(r.seconds)}),h.jsx("span",{className:"time-label",children:"SEC"})]})]})]}),h.jsxs("div",{className:"deal-content",children:[h.jsxs("div",{className:"deal-info",children:[h.jsx("h3",{children:"Sony WH-1000XM5"}),h.jsx("p",{className:"desc",children:"Industry-leading noise cancellation with exceptional comfort."}),h.jsxs("div",{className:"price-box",children:[h.jsx("span",{className:"sale-price",children:"$299.00"}),h.jsx("span",{className:"original-price",children:"$399.00"}),h.jsx("span",{className:"discount-badge",children:"-25%"})]}),h.jsxs("div",{className:"stock-bar",children:[h.jsxs("div",{className:"stock-label",children:[h.jsx("span",{children:"Available: 12"}),h.jsx("span",{children:"Sold: 45"})]}),h.jsx("div",{className:"progress",children:h.jsx("div",{className:"fill",style:{width:"78%"}})})]}),h.jsxs("button",{className:"deal-btn",children:[h.jsx("span",{children:"Claim Deal"}),h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none",children:h.jsx("path",{d:"M4 10h12m-6-6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]})]}),h.jsx("div",{className:"deal-image-placeholder",children:h.jsx("div",{className:"placeholder-box"})})]}),h.jsx("style",{children:`
        .daily-deals-module {
            position: relative;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 2rem;
            margin: 3rem 0;
            overflow: hidden;
        }
        .deal-glow {
            position: absolute;
            top: -100px;
            right: -100px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
            pointer-events: none;
        }
        .deal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.25rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
            gap: 1rem;
            position: relative;
        }
        .deal-title {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .deal-icon-wrap {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(0, 229, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }
        .deal-title h2 {
            margin: 0;
            font-size: 1.25rem;
            font-weight: 700;
            letter-spacing: -0.01em;
        }
        .deal-subtitle {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.35);
            letter-spacing: 0.5px;
        }
        .countdown {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .time-unit {
            text-align: center;
        }
        .time-box {
            background: rgba(0, 229, 255, 0.1);
            color: var(--primary);
            padding: 0.4rem 0.6rem;
            border-radius: 6px;
            min-width: 40px;
            text-align: center;
            font-weight: 700;
            font-size: 1.1rem;
            font-variant-numeric: tabular-nums;
            border: 1px solid rgba(0, 229, 255, 0.15);
        }
        .time-label {
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.3);
            letter-spacing: 1px;
            margin-top: 4px;
            display: block;
        }
        .colon {
            color: var(--primary);
            font-weight: 700;
            font-size: 1.2rem;
            margin-top: -16px;
        }
        .deal-content {
            display: flex;
            gap: 2rem;
            align-items: center;
            position: relative;
        }
        .deal-info {
            flex: 1;
        }
        .deal-info h3 {
            font-size: 1.75rem;
            font-weight: 800;
            margin: 0 0 0.5rem 0;
            letter-spacing: -0.02em;
        }
        .desc {
            color: rgba(255, 255, 255, 0.4);
            margin: 0 0 1.25rem 0;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        .price-box {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }
        .original-price {
            text-decoration: line-through;
            color: rgba(255, 255, 255, 0.3);
            font-size: 0.9rem;
        }
        .sale-price {
            font-size: 1.75rem;
            font-weight: 800;
            color: var(--primary);
        }
        .discount-badge {
            background: rgba(0, 229, 255, 0.1);
            color: var(--primary);
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            font-weight: 700;
            border: 1px solid rgba(0, 229, 255, 0.15);
        }
        .stock-bar {
            margin-bottom: 1.5rem;
        }
        .stock-label {
            display: flex;
            justify-content: space-between;
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.35);
            margin-bottom: 0.4rem;
        }
        .stock-bar .progress {
            height: 4px;
            background: rgba(255, 255, 255, 0.06);
            border-radius: 2px;
            overflow: hidden;
        }
        .stock-bar .fill {
            height: 100%;
            background: linear-gradient(90deg, var(--primary), rgba(0, 229, 255, 0.6));
            border-radius: 2px;
            transition: width 0.5s ease;
        }
        .deal-btn {
            background: var(--primary);
            color: var(--background);
            border: none;
            padding: 0.85rem 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: var(--radius);
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            letter-spacing: 0.3px;
        }
        .deal-btn:hover {
            box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
            transform: translateY(-2px);
        }
        .deal-image-placeholder {
            flex: 1;
            display: none; 
        }
        @media (min-width: 768px) {
            .deal-image-placeholder {
                display: block;
            }
            .placeholder-box {
                width: 100%;
                height: 280px;
                background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0, 229, 255, 0.03));
                border: 1px solid var(--border);
                border-radius: var(--radius);
            }
        }
      `})]})},jw=[{id:"smartphones",name:"Smartphones",icon:S1},{id:"audio",name:"Audio",icon:Vb},{id:"gaming",name:"Gaming",icon:$b},{id:"laptops",name:"Laptops",icon:Pb},{id:"wearables",name:"Wearables",icon:$1},{id:"cameras",name:"Cameras",icon:Cb}],Ew=()=>h.jsxs("div",{className:"category-grid",children:[jw.map(r=>h.jsxs(Rt,{to:`/category/${r.id}`,className:"category-card",children:[h.jsxs("div",{className:"cat-icon-wrapper",children:[h.jsx(r.icon,{size:28}),h.jsx("div",{className:"icon-glow"})]}),h.jsx("span",{className:"cat-label",children:r.name})]},r.id)),h.jsx("style",{children:`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .category-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          padding: 2rem 1rem;
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.4s ease;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .category-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          background: rgba(0, 229, 255, 0.04);
          color: var(--primary);
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.08);
        }
        .cat-icon-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .icon-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .category-card:hover .icon-glow {
          opacity: 1;
        }
        .category-card:hover .cat-icon-wrapper {
          background: rgba(0, 229, 255, 0.1);
        }
        .cat-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      `})]}),og=({product:r})=>{const{id:n,name:s,price:l,sale_price:c,image:d,category:f}=r,m=c&&c<l,{addToCart:g}=En();return h.jsxs("div",{className:"product-card",children:[h.jsxs("div",{className:"card-image-wrapper",children:[h.jsx("img",{src:d||"https://via.placeholder.com/300",alt:s,className:"product-image"}),m&&h.jsx("span",{className:"sale-badge",children:"SALE"}),h.jsx("button",{className:"wishlist-btn",children:h.jsx(Bp,{size:18})}),h.jsx("div",{className:"quick-actions",children:h.jsxs("button",{className:"quick-add-btn",onClick:()=>g(r),children:[h.jsx(Eu,{size:16})," Add to Cart"]})})]}),h.jsxs("div",{className:"card-details",children:[h.jsx("span",{className:"category-label",children:f}),h.jsx("h3",{className:"product-name",children:h.jsx(Rt,{to:`/product/${n}`,children:s})}),h.jsx("div",{className:"price-row",children:m?h.jsxs(h.Fragment,{children:[h.jsxs("span",{className:"current-price",children:["$",c]}),h.jsxs("span",{className:"old-price",children:["$",l]})]}):h.jsxs("span",{className:"current-price",children:["$",l]})})]}),h.jsx("style",{children:`
        .product-card {
           background: rgba(255, 255, 255, 0.02);
           border: 1px solid var(--border);
           border-radius: var(--radius);
           overflow: hidden;
           transition: all 0.4s ease;
           position: relative;
        }
        .product-card:hover {
           transform: translateY(-4px);
           box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 229, 255, 0.15);
           border-color: var(--border-hover);
        }
        
        .card-image-wrapper {
           position: relative;
           height: 220px;
           background: #0a0a0f;
           overflow: hidden;
        }
        .product-image {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.6s ease;
        }
        .product-card:hover .product-image {
           transform: scale(1.08);
        }

        .sale-badge {
           position: absolute;
           top: 12px;
           left: 12px;
           background: var(--primary);
           color: var(--background);
           padding: 3px 10px;
           font-size: 0.65rem;
           font-weight: 700;
           letter-spacing: 1px;
           border-radius: 3px;
        }

        .wishlist-btn {
           position: absolute;
           top: 12px;
           right: 12px;
           background: rgba(5, 5, 8, 0.6);
           backdrop-filter: blur(8px);
           color: rgba(255, 255, 255, 0.6);
           border-radius: 50%;
           width: 34px;
           height: 34px;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 0;
           transition: all 0.3s ease;
           border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .wishlist-btn:hover {
           background: rgba(0, 229, 255, 0.15);
           color: var(--primary);
           border-color: var(--border-hover);
        }

        .quick-actions {
           position: absolute;
           bottom: -50px;
           left: 0;
           right: 0;
           padding: 12px;
           background: linear-gradient(transparent, rgba(5, 5, 8, 0.95));
           display: flex;
           justify-content: center;
           transition: bottom 0.4s ease;
        }
        .product-card:hover .quick-actions {
           bottom: 0;
        }

        .quick-add-btn {
           background: var(--primary);
           color: var(--background);
           width: 100%;
           padding: 0.6rem;
           border-radius: 6px;
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 0.5rem;
           font-weight: 600;
           font-size: 0.8rem;
           letter-spacing: 0.3px;
           transition: all 0.3s ease;
        }
        .quick-add-btn:hover {
           box-shadow: 0 4px 16px rgba(0, 229, 255, 0.3);
        }

        .card-details {
           padding: 1rem 1.15rem;
        }
        .category-label {
           color: rgba(255, 255, 255, 0.35);
           font-size: 0.7rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           font-weight: 500;
        }
        .product-name {
           margin: 0.5rem 0;
           font-size: 0.95rem;
           font-weight: 600;
           line-height: 1.4;
        }
        .product-name a {
           color: #fff;
           transition: color 0.2s;
           text-decoration: none;
        }
        .product-name a:hover {
           color: var(--primary);
        }
        .price-row {
           display: flex;
           align-items: baseline;
           gap: 0.5rem;
        }
        .current-price {
           color: var(--primary);
           font-weight: 700;
           font-size: 1.1rem;
        }
        .old-price {
           color: rgba(255, 255, 255, 0.3);
           text-decoration: line-through;
           font-size: 0.85rem;
        }
      `})]})},Tw=()=>h.jsxs("footer",{className:"footer",children:[h.jsx("div",{className:"footer-glow"}),h.jsxs("div",{className:"container footer-content",children:[h.jsxs("div",{className:"footer-section brand",children:[h.jsxs("h3",{className:"footer-logo",children:["CH ",h.jsx("span",{className:"logo-accent",children:"Electronics"})]}),h.jsx("p",{className:"brand-desc",children:"Your one-stop shop for premium electronics. Quality guaranteed."}),h.jsxs("div",{className:"social-links",children:[h.jsx("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:h.jsx(Bb,{size:18})}),h.jsx("a",{href:"https://www.twitter.com/",target:"_blank",rel:"noreferrer",children:h.jsx(U1,{size:18})}),h.jsx("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:h.jsx(Ib,{size:18})}),h.jsx("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:h.jsx(Y1,{size:18})})]})]}),h.jsxs("div",{className:"footer-section",children:[h.jsx("h4",{children:"Quick Links"}),h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx("a",{href:"#",children:"About Us"})}),h.jsx("li",{children:h.jsx("a",{href:"#",children:"Shop"})}),h.jsx("li",{children:h.jsx("a",{href:"#",children:"Contact"})}),h.jsx("li",{children:h.jsx("a",{href:"#",children:"FAQ"})})]})]}),h.jsxs("div",{className:"footer-section",children:[h.jsx("h4",{children:"Customer Service"}),h.jsxs("ul",{children:[h.jsx("li",{children:h.jsx("a",{href:"#",children:"Shipping Policy"})}),h.jsx("li",{children:h.jsx("a",{href:"#",children:"Returns & Refunds"})}),h.jsx("li",{children:h.jsx("a",{href:"#",children:"Terms & Conditions"})}),h.jsx("li",{children:h.jsx("a",{href:"#",children:"Privacy Policy"})})]})]}),h.jsxs("div",{className:"footer-section contact",children:[h.jsx("h4",{children:"Contact Us"}),h.jsxs("ul",{children:[h.jsxs("li",{children:[h.jsx(Su,{size:15})," 123 Tech Street, Digital City"]}),h.jsxs("li",{children:[h.jsx(s1,{size:15})," +1 (555) 123-4567"]}),h.jsxs("li",{children:[h.jsx($p,{size:15})," support@chelectronics.com"]})]})]})]}),h.jsx("div",{className:"footer-bottom",children:h.jsx("div",{className:"container",children:h.jsxs("p",{children:["© ",new Date().getFullYear()," CH Electronics. All rights reserved."]})})}),h.jsx("style",{children:`
        .footer {
          position: relative;
          background: #030305;
          border-top: 1px solid var(--border);
          padding-top: 5rem;
          margin-top: auto;
          overflow: hidden;
        }
        .footer-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(0, 229, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .footer-content {
          position: relative;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 4rem;
        }
        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 500px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
        .footer-logo {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }
        .logo-accent {
          color: var(--primary);
        }
        .brand-desc {
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.7;
          font-size: 0.875rem;
          margin: 0 0 1.5rem 0;
        }
        .social-links {
          display: flex;
          gap: 0.75rem;
        }
        .social-links a {
          color: rgba(255, 255, 255, 0.35);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: var(--primary);
          border-color: var(--border-hover);
          background: rgba(0, 229, 255, 0.06);
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.1);
        }
        .footer-section h4 {
          color: #fff;
          margin: 0 0 1.25rem 0;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.35);
        }
        .footer-section a {
          color: rgba(255, 255, 255, 0.35);
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }
        .footer-section a:hover {
          color: var(--primary);
        }
        .contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 1.5rem 0;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.25);
        }
        .footer-bottom p {
          margin: 0;
        }
      `})]}),Aw=()=>{const[r,n]=A.useState([]),[s,l]=A.useState(!0);return A.useEffect(()=>{(async()=>{l(!0);try{const{data:d,error:f}=await Ze.from("products").select("*").order("created_at",{ascending:!1}).limit(8);if(f)throw f;const m=(d||[]).map(g=>({...g,price:parseFloat(g.price),sale_price:g.sale_price?parseFloat(g.sale_price):null,image:g.images&&g.images.length>0?g.images[0]:g.image_url||"https://via.placeholder.com/300"}));n(m)}catch(d){console.error("Error fetching trending products:",d)}finally{l(!1)}})()},[]),h.jsxs("div",{className:"home-page",children:[h.jsx(xw,{}),h.jsxs("div",{className:"container",children:[h.jsx(Sw,{}),h.jsxs("section",{className:"section",children:[h.jsx("div",{className:"section-header",children:h.jsxs("div",{className:"section-title-group",children:[h.jsx("span",{className:"section-label",children:"EXPLORE"}),h.jsx("h2",{className:"section-title",children:"Shop by Category"})]})}),h.jsx(Ew,{})]}),h.jsxs("section",{className:"section",children:[h.jsxs("div",{className:"section-header",children:[h.jsxs("div",{className:"section-title-group",children:[h.jsx("span",{className:"section-label",children:"NEW ARRIVALS"}),h.jsx("h2",{className:"section-title",children:"Trending Products"})]}),h.jsxs("a",{href:"/category/all",className:"view-all",children:["View All",h.jsx("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",children:h.jsx("path",{d:"M4 10h12m-6-6l6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})]})]}),s?h.jsxs("div",{className:"loading-state",children:[h.jsx("div",{className:"loading-spinner"}),h.jsx("span",{children:"Loading products..."})]}):h.jsx("div",{className:"product-grid",children:r.map(c=>h.jsx(og,{product:c},c.id))}),!s&&r.length===0&&h.jsx("div",{className:"empty-state",children:"No products found."})]})]}),h.jsx(Tw,{}),h.jsx("style",{children:`
        .home-page {
            background: var(--background);
        }
        .section {
            margin-bottom: 5rem;
        }
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 2rem;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid var(--border);
        }
        .section-title-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }
        .section-label {
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 2px;
            color: var(--primary);
        }
        .section-title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 800;
            margin: 0;
            letter-spacing: -0.02em;
        }
        .view-all {
            color: rgba(255, 255, 255, 0.5);
            font-weight: 500;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        .view-all:hover {
            color: var(--primary);
        }
        .view-all:hover svg {
            transform: translateX(3px);
        }
        .view-all svg {
            transition: transform 0.3s ease;
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.5rem;
        }
        .loading-state {
            text-align: center;
            padding: 4rem 1rem;
            color: rgba(255, 255, 255, 0.35);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            font-size: 0.9rem;
        }
        .loading-spinner {
            width: 28px;
            height: 28px;
            border: 2px solid var(--border);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .empty-state {
            text-align: center;
            color: rgba(255, 255, 255, 0.3);
            padding: 3rem;
            font-size: 0.9rem;
        }
      `})]})},kw=()=>{const{id:r}=vu(),{addToCart:n}=En(),[s,l]=A.useState(null),[c,d]=A.useState(!0),[f,m]=A.useState(null),[g,y]=A.useState(""),[v,_]=A.useState(1);A.useEffect(()=>{r&&(async()=>{d(!0);try{const{data:j,error:O}=await Ze.from("products").select("*, categories(name)").eq("id",r).single();if(O)throw O;const U={...j,price:parseFloat(j.price),sale_price:j.sale_price?parseFloat(j.sale_price):null,images:j.images&&j.images.length>0?j.images:[j.image_url||"https://via.placeholder.com/600"],category:j.categories?.name||"Uncategorized",specs:j.specs||{}};l(U),y(U.images[0])}catch(j){console.error("Error fetching product:",j),m("Product not found or error loading details.")}finally{d(!1)}})()},[r]);const x=()=>{if(!s)return;const w={...s,image:s.images[0]};for(let j=0;j<v;j++)n(w);alert("Added to cart!")};return c?h.jsx("div",{className:"product-details-page container",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:h.jsxs("div",{style:{textAlign:"center",color:"rgba(255,255,255,0.4)"},children:[h.jsx("div",{className:"loading-spinner",style:{width:28,height:28,border:"2px solid rgba(255,255,255,0.08)",borderTopColor:"#00e5ff",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 1rem"}}),"Loading..."]})}):f||!s?h.jsx("div",{className:"product-details-page container",style:{textAlign:"center",padding:"4rem",color:"rgba(255,255,255,0.4)"},children:f||"Product not found"}):h.jsxs("div",{className:"product-details-page container",children:[h.jsxs("div",{className:"product-layout",children:[h.jsxs("div",{className:"product-gallery",children:[h.jsx("div",{className:"main-image-container",children:h.jsx("img",{src:g,alt:s.name,className:"main-image"})}),h.jsx("div",{className:"thumbnail-list",children:s.images.map((w,j)=>h.jsx("button",{className:`thumbnail ${g===w?"active":""}`,onClick:()=>y(w),children:h.jsx("img",{src:w,alt:`Thumbnail ${j}`})},j))})]}),h.jsxs("div",{className:"product-info",children:[h.jsxs("div",{className:"breadcrumb",children:["Electronics / ",s.category," / ",s.name]}),h.jsx("h1",{className:"product-title",children:s.name}),h.jsxs("div",{className:"rating-row",children:[h.jsxs("div",{className:"stars",children:[h.jsx(_i,{size:14,fill:"#00e5ff",stroke:"#00e5ff"}),h.jsx(_i,{size:14,fill:"#00e5ff",stroke:"#00e5ff"}),h.jsx(_i,{size:14,fill:"#00e5ff",stroke:"#00e5ff"}),h.jsx(_i,{size:14,fill:"#00e5ff",stroke:"#00e5ff"}),h.jsx(_i,{size:14,fill:"#00e5ff",stroke:"#00e5ff"})]}),h.jsx("span",{className:"reviews-count",children:"(24 reviews)"})]}),h.jsxs("div",{className:"price-section",children:[h.jsxs("span",{className:"current-price",children:["$",s.sale_price||s.price]}),s.sale_price&&h.jsxs(h.Fragment,{children:[h.jsxs("span",{className:"old-price",children:["$",s.price]}),h.jsxs("span",{className:"save-badge",children:["Save $",(s.price-s.sale_price).toFixed(2)]})]})]}),h.jsx("p",{className:"description",children:s.description}),h.jsx("div",{className:"stock-status",children:s.stock_quantity>0?h.jsxs("span",{className:"in-stock",children:["● In Stock (",s.stock_quantity,")"]}):h.jsx("span",{className:"out-of-stock",children:"● Out of Stock"})}),h.jsxs("div",{className:"actions-section",children:[h.jsxs("div",{className:"quantity-selector",children:[h.jsx("button",{onClick:()=>_(Math.max(1,v-1)),children:"−"}),h.jsx("span",{children:v}),h.jsx("button",{onClick:()=>_(v+1),children:"+"})]}),h.jsxs("button",{className:"add-to-cart-btn",onClick:x,disabled:s.stock_quantity<=0,children:[h.jsx(Eu,{size:18})," ",s.stock_quantity>0?"Add to Cart":"Out of Stock"]}),h.jsx("button",{className:"wishlist-btn-large",children:h.jsx(Bp,{size:18})})]}),h.jsxs("div",{className:"features-grid",children:[h.jsxs("div",{className:"feature-item",children:[h.jsx("div",{className:"feature-icon-wrap",children:h.jsx(g1,{size:20})}),h.jsxs("div",{children:[h.jsx("h4",{children:"1 Year Warranty"}),h.jsx("p",{children:"Official manufacturer warranty"})]})]}),h.jsxs("div",{className:"feature-item",children:[h.jsx("div",{className:"feature-icon-wrap",children:h.jsx(hl,{size:20})}),h.jsxs("div",{children:[h.jsx("h4",{children:"Free Shipping"}),h.jsx("p",{children:"On all orders over $500"})]})]}),h.jsxs("div",{className:"feature-item",children:[h.jsx("div",{className:"feature-icon-wrap",children:h.jsx(u1,{size:20})}),h.jsxs("div",{children:[h.jsx("h4",{children:"30 Day Returns"}),h.jsx("p",{children:"Hassle-free return policy"})]})]})]})]})]}),h.jsxs("div",{className:"specs-section",children:[h.jsx("h2",{children:"Technical Specifications"}),h.jsx("table",{className:"specs-table",children:h.jsx("tbody",{children:s.specs&&Object.keys(s.specs).length>0?Object.entries(s.specs).map(([w,j])=>h.jsxs("tr",{children:[h.jsx("th",{children:w}),h.jsx("td",{children:j})]},w)):h.jsx("tr",{children:h.jsx("td",{style:{color:"rgba(255,255,255,0.3)"},children:"No specifications available"})})})})]}),h.jsx("style",{children:`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .product-details-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .product-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 768px) {
          .product-layout {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .main-image-container {
          background: #0a0a0f;
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 1rem;
          border: 1px solid var(--border);
        }
        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .thumbnail-list {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .thumbnail {
          width: 72px;
          height: 72px;
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          background: #0a0a0f;
          padding: 0;
          transition: all 0.3s ease;
        }
        .thumbnail.active {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.15);
        }
        .thumbnail:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .breadcrumb {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }
        .product-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .reviews-count {
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.85rem;
        }
        
        .price-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .current-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }
        .old-price {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.3);
          font-size: 1.1rem;
        }
        .save-badge {
          background: rgba(0, 229, 255, 0.1);
          color: var(--primary);
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
          border: 1px solid rgba(0, 229, 255, 0.15);
        }

        .description {
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .stock-status {
            margin-bottom: 1.5rem;
            font-weight: 600;
            font-size: 0.9rem;
        }
        .in-stock {
            color: #34c759;
        }
        .out-of-stock {
            color: #ff3b30;
        }

        .actions-section {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .quantity-selector button {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.7);
          width: 42px;
          height: 48px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .quantity-selector button:hover {
          background: rgba(0, 229, 255, 0.08);
          color: var(--primary);
        }
        .quantity-selector span {
          width: 42px;
          text-align: center;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
        }
        .add-to-cart-btn {
          flex: 1;
          background: var(--primary);
          color: var(--background);
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          padding: 0 2rem;
          letter-spacing: 0.3px;
        }
        .add-to-cart-btn:hover:not(:disabled) {
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
          transform: translateY(-1px);
        }
        .add-to-cart-btn:disabled {
            background: rgba(255, 255, 255, 0.06);
            color: rgba(255, 255, 255, 0.25);
            cursor: not-allowed;
        }
        .wishlist-btn-large {
          width: 48px;
          height: 48px;
          border: 1px solid var(--border);
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .wishlist-btn-large:hover {
          border-color: var(--border-hover);
          color: var(--primary);
          background: rgba(0, 229, 255, 0.06);
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          border-top: 1px solid var(--border);
          padding-top: 2rem;
        }
        .feature-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .feature-icon-wrap {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .feature-item h4 {
          margin: 0 0 0.2rem 0;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .feature-item p {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .specs-section {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .specs-section h2 {
          margin: 0 0 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .specs-table {
          width: 100%;
          border-collapse: collapse;
        }
        .specs-table th, .specs-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border);
          text-align: left;
          font-size: 0.9rem;
        }
        .specs-table th {
          width: 30%;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
        }
        .specs-table tr:last-child th, .specs-table tr:last-child td {
          border-bottom: none;
        }
      `})]})},Ow=()=>{const{id:r}=vu(),[n]=gb(),s=n.get("search")||"",[l,c]=A.useState([]),[d,f]=A.useState(!0),[m,g]=A.useState("relevance"),[y,v]=A.useState("");A.useEffect(()=>{(async()=>{f(!0);try{let w=Ze.from("products").select("*"),j="All Products";if(s)w=w.ilike("name",`%${s}%`),j=`Search: "${s}"`;else if(r&&r.toLowerCase()!=="all"){const{data:D}=await Ze.from("categories").select("id, name").ilike("slug",r).maybeSingle();D?(w=w.eq("category_id",D.id),j=D.name):(console.warn("Category not found:",r),w=w.eq("category_id",-1),j=r.charAt(0).toUpperCase()+r.slice(1))}const{data:O,error:U}=await w;if(U)throw U;const q=(O||[]).map(D=>({...D,price:parseFloat(D.price),sale_price:D.sale_price?parseFloat(D.sale_price):null,image:D.images&&D.images.length>0?D.images[0]:D.image_url||"https://via.placeholder.com/300"}));c(q),v(j)}catch(w){console.error("Error fetching data:",w)}finally{f(!1)}})()},[r,s]);const _=My.useMemo(()=>{let x=[...l];return m==="price-low"?x.sort((w,j)=>(w.sale_price||w.price)-(j.sale_price||j.price)):m==="price-high"?x.sort((w,j)=>(j.sale_price||j.price)-(w.sale_price||w.price)):m==="newest"&&x.sort((w,j)=>new Date(j.created_at)-new Date(w.created_at)),x},[l,m]);return h.jsxs("div",{className:"category-page container",children:[h.jsxs("div",{className:"page-header",children:[h.jsxs("div",{children:[h.jsx("span",{className:"page-label",children:"CATEGORY"}),h.jsx("h1",{className:"page-title",children:y})]}),h.jsxs("div",{className:"breadcrumb",children:["Home / Categories / ",y]})]}),h.jsxs("div",{className:"content-layout",children:[h.jsxs("aside",{className:"filters-sidebar",children:[h.jsx("div",{className:"filter-group",children:h.jsxs("h3",{children:[h.jsx(w1,{size:16})," Filters"]})}),h.jsxs("div",{className:"filter-group",children:[h.jsx("h4",{children:"Price Range"}),h.jsxs("div",{className:"price-inputs",children:[h.jsx("input",{type:"number",placeholder:"Min"}),h.jsx("span",{children:"—"}),h.jsx("input",{type:"number",placeholder:"Max"})]})]}),h.jsxs("div",{className:"filter-group",children:[h.jsx("h4",{children:"Availability"}),h.jsxs("label",{className:"checkbox-label",children:[h.jsx("input",{type:"checkbox",defaultChecked:!0})," In Stock"]}),h.jsxs("label",{className:"checkbox-label",children:[h.jsx("input",{type:"checkbox"})," On Sale"]})]})]}),h.jsxs("main",{className:"product-listing",children:[h.jsxs("div",{className:"listing-header",children:[h.jsxs("span",{className:"results-count",children:[_.length," results"]}),h.jsxs("div",{className:"sort-wrapper",children:[h.jsx("label",{children:"Sort:"}),h.jsxs("select",{value:m,onChange:x=>g(x.target.value),children:[h.jsx("option",{value:"relevance",children:"Relevance"}),h.jsx("option",{value:"price-low",children:"Price: Low to High"}),h.jsx("option",{value:"price-high",children:"Price: High to Low"}),h.jsx("option",{value:"newest",children:"Newest Arrivals"})]})]})]}),d?h.jsxs("div",{className:"loading-state",children:[h.jsx("div",{className:"loading-spinner"}),h.jsx("span",{children:"Loading products..."})]}):_.length>0?h.jsx("div",{className:"products-grid",children:_.map(x=>h.jsx(og,{product:x},x.id))}):h.jsx("div",{className:"no-results",children:"No products found in this category."})]})]}),h.jsx("style",{children:`
        .category-page {
           padding-top: 2rem;
           padding-bottom: 4rem;
        }
        .page-header {
           margin-bottom: 2.5rem;
           border-bottom: 1px solid var(--border);
           padding-bottom: 1.25rem;
           display: flex;
           justify-content: space-between;
           align-items: flex-end;
        }
        .page-label {
           font-size: 0.7rem;
           font-weight: 600;
           letter-spacing: 2px;
           color: var(--primary);
           display: block;
           margin-bottom: 0.35rem;
        }
        .page-title {
           margin: 0;
           font-size: clamp(1.75rem, 4vw, 2.5rem);
           font-weight: 800;
           letter-spacing: -0.02em;
        }
        .breadcrumb {
           color: rgba(255, 255, 255, 0.3);
           font-size: 0.8rem;
        }
        
        .content-layout {
           display: grid;
           grid-template-columns: 240px 1fr;
           gap: 2rem;
        }
        @media (max-width: 768px) {
           .content-layout {
              grid-template-columns: 1fr;
           }
           .filters-sidebar {
              display: none;
           }
        }

        .filters-sidebar {
           background: rgba(255, 255, 255, 0.02);
           padding: 1.5rem;
           border-radius: var(--radius);
           height: fit-content;
           border: 1px solid var(--border);
           position: sticky;
           top: 80px;
        }
        .filter-group {
           margin-bottom: 1.75rem;
        }
        .filter-group:last-child {
           margin-bottom: 0;
        }
        .filter-group h3 {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin: 0 0 1rem;
           font-size: 0.9rem;
           font-weight: 700;
        }
        .filter-group h4 {
           margin: 0 0 0.75rem;
           font-size: 0.75rem;
           font-weight: 600;
           letter-spacing: 1px;
           text-transform: uppercase;
           color: rgba(255, 255, 255, 0.5);
        }
        .price-inputs {
           display: flex;
           align-items: center;
           gap: 0.5rem;
        }
        .price-inputs span {
           color: rgba(255, 255, 255, 0.2);
        }
        .price-inputs input {
           width: 100%;
           padding: 0.5rem 0.6rem;
           background: rgba(255, 255, 255, 0.04);
           border: 1px solid var(--border);
           color: #fff;
           border-radius: 6px;
           font-size: 0.85rem;
           font-family: inherit;
        }
        .price-inputs input:focus {
           outline: none;
           border-color: var(--border-hover);
        }
        .checkbox-label {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin-bottom: 0.6rem;
           cursor: pointer;
           color: rgba(255, 255, 255, 0.6);
           font-size: 0.875rem;
        }
        .checkbox-label input[type="checkbox"] {
           accent-color: var(--primary);
        }

        .listing-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1.5rem;
           background: rgba(255, 255, 255, 0.02);
           padding: 0.85rem 1.25rem;
           border-radius: var(--radius);
           border: 1px solid var(--border);
        }
        .results-count {
           font-size: 0.85rem;
           color: rgba(255, 255, 255, 0.4);
        }
        .sort-wrapper {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           font-size: 0.85rem;
           color: rgba(255, 255, 255, 0.5);
        }
        .sort-wrapper select {
           background: rgba(255, 255, 255, 0.04);
           color: #fff;
           border: 1px solid var(--border);
           padding: 0.4rem 0.6rem;
           border-radius: 6px;
           font-family: inherit;
           font-size: 0.85rem;
        }
        .sort-wrapper select:focus {
           outline: none;
           border-color: var(--border-hover);
        }

        .products-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
           gap: 1.5rem;
        }
        .no-results, .loading-state {
           text-align: center;
           padding: 4rem 2rem;
           background: rgba(255, 255, 255, 0.02);
           border-radius: var(--radius);
           color: rgba(255, 255, 255, 0.35);
           border: 1px solid var(--border);
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 1rem;
        }
        .loading-spinner {
           width: 28px;
           height: 28px;
           border: 2px solid var(--border);
           border-top-color: var(--primary);
           border-radius: 50%;
           animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
           to { transform: rotate(360deg); }
        }
      `})]})},Rw=()=>{const{cartItems:r,removeFromCart:n,updateQuantity:s,total:l}=En();return r.length===0?h.jsxs("div",{className:"empty-cart container",children:[h.jsx("div",{className:"empty-icon-wrap",children:h.jsx(v1,{size:48})}),h.jsx("h2",{children:"Your cart is empty"}),h.jsx("p",{children:"Looks like you haven't added anything yet."}),h.jsx(Rt,{to:"/",className:"btn-primary",style:{marginTop:"1rem",textDecoration:"none"},children:"Start Shopping"}),h.jsx("style",{children:`
            .empty-cart {
               text-align: center;
               padding: 6rem 1rem;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               min-height: 60vh;
            }
            .empty-icon-wrap {
               width: 80px;
               height: 80px;
               border-radius: 50%;
               background: rgba(255, 255, 255, 0.03);
               border: 1px solid var(--border);
               display: flex;
               align-items: center;
               justify-content: center;
               color: rgba(255, 255, 255, 0.2);
               margin-bottom: 1.5rem;
            }
            .empty-cart h2 {
               font-weight: 700;
               font-size: 1.5rem;
               margin: 0 0 0.5rem;
            }
            .empty-cart p {
               color: rgba(255, 255, 255, 0.4);
               margin: 0;
            }
          `})]}):h.jsxs("div",{className:"cart-page container",children:[h.jsx("h1",{className:"page-title",children:"Shopping Cart"}),h.jsxs("div",{className:"cart-layout",children:[h.jsx("div",{className:"cart-items",children:r.map(c=>h.jsxs("div",{className:"cart-item",children:[h.jsx("div",{className:"item-image",children:h.jsx("img",{src:c.image,alt:c.name})}),h.jsxs("div",{className:"item-details",children:[h.jsx("h3",{children:c.name}),h.jsxs("p",{className:"item-price",children:["$",c.sale_price||c.price]}),h.jsxs("div",{className:"item-actions",children:[h.jsxs("div",{className:"qty-control",children:[h.jsx("button",{onClick:()=>s(c.id,-1),children:"−"}),h.jsx("span",{children:c.quantity}),h.jsx("button",{onClick:()=>s(c.id,1),children:"+"})]}),h.jsx("button",{className:"remove-btn",onClick:()=>n(c.id),children:h.jsx(Gp,{size:16})})]})]}),h.jsxs("div",{className:"item-subtotal",children:["$",((c.sale_price||c.price)*c.quantity).toFixed(2)]})]},c.id))}),h.jsxs("div",{className:"cart-summary",children:[h.jsx("h2",{children:"Order Summary"}),h.jsxs("div",{className:"summary-row",children:[h.jsx("span",{children:"Subtotal"}),h.jsxs("span",{children:["$",l.toFixed(2)]})]}),h.jsxs("div",{className:"summary-row",children:[h.jsx("span",{children:"Shipping"}),h.jsx("span",{className:"free-tag",children:"Free"})]}),h.jsx("div",{className:"summary-divider"}),h.jsxs("div",{className:"summary-row total",children:[h.jsx("span",{children:"Total"}),h.jsxs("span",{children:["$",l.toFixed(2)]})]}),h.jsx(Rt,{to:"/checkout",className:"checkout-btn",children:"Proceed to Checkout"})]})]}),h.jsx("style",{children:`
         .cart-page {
            padding-top: 2rem;
            padding-bottom: 4rem;
         }
         .cart-layout {
            display: grid;
            grid-template-columns: 1fr 380px;
            gap: 2rem;
            align-items: flex-start;
         }
         @media (max-width: 900px) {
            .cart-layout {
               grid-template-columns: 1fr;
            }
         }

         .cart-items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
         }
         .cart-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 1.25rem;
            display: flex;
            gap: 1.25rem;
            align-items: center;
            transition: border-color 0.3s ease;
         }
         .cart-item:hover {
            border-color: rgba(255, 255, 255, 0.12);
         }
         .item-image {
             width: 90px;
             height: 90px;
             background: #0a0a0f;
             border-radius: 6px;
             overflow: hidden;
             flex-shrink: 0;
         }
         .item-image img {
             width: 100%;
             height: 100%;
             object-fit: cover;
         }
         .item-details {
             flex: 1;
         }
         .item-details h3 {
             margin: 0 0 0.35rem 0;
             font-size: 1rem;
             font-weight: 600;
         }
         .item-price {
             color: var(--primary);
             font-weight: 600;
             margin: 0 0 0.75rem 0;
             font-size: 0.95rem;
         }
         
         .item-actions {
             display: flex;
             align-items: center;
             gap: 0.75rem;
         }
         .qty-control {
             display: flex;
             align-items: center;
             border: 1px solid var(--border);
             border-radius: 6px;
             overflow: hidden;
         }
         .qty-control button {
             width: 32px;
             height: 32px;
             background: rgba(255, 255, 255, 0.04);
             color: rgba(255, 255, 255, 0.7);
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 1rem;
             transition: all 0.2s ease;
         }
         .qty-control button:hover {
             background: rgba(0, 229, 255, 0.08);
             color: var(--primary);
         }
         .qty-control span {
             width: 36px;
             text-align: center;
             font-weight: 600;
             font-size: 0.9rem;
             font-variant-numeric: tabular-nums;
         }
         .remove-btn {
             background: none;
             color: rgba(255, 255, 255, 0.3);
             padding: 0.4rem;
             border-radius: 6px;
             display: flex;
             align-items: center;
             transition: all 0.2s ease;
         }
         .remove-btn:hover {
             background: rgba(255, 59, 48, 0.1);
             color: #ff3b30;
         }
         
         .item-subtotal {
             font-weight: 700;
             font-size: 1.1rem;
             min-width: 90px;
             text-align: right;
             font-variant-numeric: tabular-nums;
         }

         .cart-summary {
             background: rgba(255, 255, 255, 0.02);
             padding: 2rem;
             border-radius: var(--radius);
             border: 1px solid var(--border);
             position: sticky;
             top: 100px;
         }
         .cart-summary h2 {
             margin: 0 0 1.5rem;
             font-size: 1.25rem;
             font-weight: 700;
         }
         .summary-row {
             display: flex;
             justify-content: space-between;
             margin-bottom: 0.75rem;
             color: rgba(255, 255, 255, 0.45);
             font-size: 0.9rem;
         }
         .free-tag {
             color: var(--primary);
             font-weight: 500;
         }
         .summary-divider {
             height: 1px;
             background: var(--border);
             margin: 1rem 0;
         }
         .summary-row.total {
             color: #fff;
             font-weight: 800;
             font-size: 1.35rem;
             margin-bottom: 1.5rem;
         }
         .checkout-btn {
             background: var(--primary);
             color: var(--background);
             width: 100%;
             padding: 1rem;
             font-weight: 700;
             font-size: 0.9rem;
             border-radius: var(--radius);
             text-align: center;
             display: block;
             text-decoration: none;
             transition: all 0.3s ease;
             letter-spacing: 0.3px;
         }
         .checkout-btn:hover {
             box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
             transform: translateY(-1px);
             color: var(--background);
         }
      `})]})},Nw="modulepreload",Cw=function(r){return"/Ecommerce/"+r},yp={},zw=function(n,s,l){let c=Promise.resolve();if(s&&s.length>0){let y=function(v){return Promise.all(v.map(_=>Promise.resolve(_).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};var f=y;document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),g=m?.nonce||m?.getAttribute("nonce");c=y(s.map(v=>{if(v=Cw(v),v in yp)return;yp[v]=!0;const _=v.endsWith(".css"),x=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${x}`))return;const w=document.createElement("link");if(w.rel=_?"stylesheet":Nw,_||(w.as="script"),w.crossOrigin="",w.href=v,g&&w.setAttribute("nonce",g),document.head.appendChild(w),_)return new Promise((j,O)=>{w.addEventListener("load",j),w.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${v}`)))})}))}function d(m){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=m,window.dispatchEvent(g),!g.defaultPrevented)throw m}return c.then(m=>{for(const g of m||[])g.status==="rejected"&&d(g.reason);return n().catch(d)})},Uw=()=>{const{cartItems:r,total:n,clearCart:s}=En(),l=jn(),[c,d]=A.useState(1),[f,m]=A.useState(!1),[g,y]=A.useState(null),[v,_]=A.useState({name:"",email:"",address:"",city:"",zip:""}),x=V=>{_({...v,[V.target.name]:V.target.value})},w=V=>{V.preventDefault(),d(2)},[j,O]=A.useState("esewa"),[U,q]=A.useState(null),D=()=>`ORD-${Math.floor(Math.random()*1e6)}`,C=async()=>{m(!0),y(null);const V=D();q(V);try{if(j==="esewa"){const F=n.toFixed(2),K=F;document.getElementById("amount").value=F,document.getElementById("total_amount").value=K,document.getElementById("transaction_uuid").value=V,document.getElementById("signature").value="dummy_signature_for_test",document.getElementById("esewa-form").submit()}else if(j==="khalti"){const{initiateKhaltiPayment:F}=await zw(async()=>{const{initiateKhaltiPayment:K}=await import("./paymentUtils-BHVeB0-D.js");return{initiateKhaltiPayment:K}},[]);F(n,V,`Order #${V}`,K=>{console.log("Success:",K),m(!1),d(3),s()},K=>{console.error("Error:",K),m(!1),y("Payment Failed")})}else j==="cod"&&setTimeout(()=>{m(!1),d(3),s()},1e3)}catch(F){m(!1),y(F.message)}};return r.length===0&&c!==3?h.jsxs("div",{className:"container",style:{padding:"4rem",textAlign:"center",color:"rgba(255,255,255,0.4)"},children:[h.jsx("h2",{children:"Your cart is empty. Redirecting..."}),setTimeout(()=>l("/"),2e3)&&null]}):h.jsxs("div",{className:"checkout-page container",children:[h.jsxs("div",{className:"checkout-container",children:[h.jsxs("div",{className:"checkout-steps",children:[h.jsxs("div",{className:`step-indicator ${c>=1?"active":""}`,children:[h.jsx("span",{className:"step-num",children:"1"})," Shipping"]}),h.jsx("div",{className:`step-line ${c>=2?"filled":""}`}),h.jsxs("div",{className:`step-indicator ${c>=2?"active":""}`,children:[h.jsx("span",{className:"step-num",children:"2"})," Payment"]}),h.jsx("div",{className:`step-line ${c>=3?"filled":""}`}),h.jsxs("div",{className:`step-indicator ${c>=3?"active":""}`,children:[h.jsx("span",{className:"step-num",children:"3"})," Confirm"]})]}),g&&h.jsxs("div",{className:"error-message",children:[h.jsx(N1,{size:16})," ",g]}),c===1&&h.jsxs("form",{onSubmit:w,className:"checkout-form",children:[h.jsx("h2",{children:"Shipping Information"}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Full Name"}),h.jsx("input",{type:"text",name:"name",value:v.name,onChange:x,required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Email Address"}),h.jsx("input",{type:"email",name:"email",value:v.email,onChange:x,required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Address"}),h.jsx("input",{type:"text",name:"address",value:v.address,onChange:x,required:!0})]}),h.jsxs("div",{className:"form-row",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"City"}),h.jsx("input",{type:"text",name:"city",value:v.city,onChange:x,required:!0})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Zip Code"}),h.jsx("input",{type:"text",name:"zip",value:v.zip,onChange:x,required:!0})]})]}),h.jsx("button",{type:"submit",className:"checkout-btn-primary",children:"Continue to Payment"})]}),c===2&&h.jsxs("div",{className:"checkout-form",children:[h.jsx("h2",{children:"Select Payment Method"}),h.jsx("div",{className:"order-summary-box",children:h.jsxs("div",{className:"summary-row",children:[h.jsx("span",{children:"Total to Pay:"}),h.jsxs("span",{className:"total-amount",children:["$",n.toFixed(2)]})]})}),h.jsxs("div",{className:"payment-options",children:[h.jsxs("label",{className:`payment-option ${j==="esewa"?"selected":""}`,children:[h.jsx("input",{type:"radio",name:"payment",value:"esewa",checked:j==="esewa",onChange:V=>O(V.target.value)}),h.jsx("div",{className:"payment-logo esewa",children:"eSewa"})]}),h.jsxs("label",{className:`payment-option ${j==="khalti"?"selected":""}`,children:[h.jsx("input",{type:"radio",name:"payment",value:"khalti",checked:j==="khalti",onChange:V=>O(V.target.value)}),h.jsx("div",{className:"payment-logo khalti",children:"Khalti"})]}),h.jsxs("label",{className:`payment-option ${j==="cod"?"selected":""}`,children:[h.jsx("input",{type:"radio",name:"payment",value:"cod",checked:j==="cod",onChange:V=>O(V.target.value)}),h.jsxs("div",{className:"payment-logo cod",children:[h.jsx(hl,{size:20})," Cash on Delivery"]})]})]}),h.jsxs("div",{className:"payment-actions",children:[h.jsx("button",{type:"button",className:"checkout-btn-secondary",onClick:()=>d(1),children:"Back"}),h.jsx("button",{className:"checkout-btn-primary",onClick:C,disabled:f,children:f?"Processing...":`Pay with ${j==="cod"?"Cash":j.toUpperCase()}`})]})]}),c===3&&h.jsxs("div",{className:"success-message",children:[h.jsx("div",{className:"success-icon",children:h.jsx(qp,{size:48})}),h.jsx("h2",{children:"Order Confirmed!"}),h.jsxs("p",{children:["Thank you for your purchase, ",v.name,"."]}),h.jsxs("p",{className:"order-num",children:["Order #",U]}),h.jsxs("span",{className:"payment-method-badge",children:["Paid via ",j==="cod"?"Cash on Delivery":j.toUpperCase()]}),h.jsx("button",{className:"checkout-btn-primary",onClick:()=>l("/"),children:"Continue Shopping"})]})]}),h.jsxs("form",{id:"esewa-form",action:"https://rc-epay.esewa.com.np/api/epay/main/v2/form",method:"POST",style:{display:"none"},children:[h.jsx("input",{type:"text",id:"amount",name:"amount",required:!0}),h.jsx("input",{type:"text",id:"tax_amount",name:"tax_amount",value:"0",required:!0}),h.jsx("input",{type:"text",id:"total_amount",name:"total_amount",required:!0}),h.jsx("input",{type:"text",id:"transaction_uuid",name:"transaction_uuid",required:!0}),h.jsx("input",{type:"text",id:"product_code",name:"product_code",value:"EPAYTEST",required:!0}),h.jsx("input",{type:"text",id:"product_service_charge",name:"product_service_charge",value:"0",required:!0}),h.jsx("input",{type:"text",id:"product_delivery_charge",name:"product_delivery_charge",value:"0",required:!0}),h.jsx("input",{type:"text",id:"success_url",name:"success_url",value:`${window.location.origin}/order/success`,required:!0}),h.jsx("input",{type:"text",id:"failure_url",name:"failure_url",value:`${window.location.origin}/checkout`,required:!0}),h.jsx("input",{type:"text",id:"signed_field_names",name:"signed_field_names",value:"total_amount,transaction_uuid,product_code",required:!0}),h.jsx("input",{type:"text",id:"signature",name:"signature",required:!0})]}),h.jsx("style",{children:`
                .checkout-page {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .checkout-container {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .checkout-steps {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 3rem;
                }
                .step-indicator {
                    color: rgba(255, 255, 255, 0.25);
                    font-weight: 500;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.3s ease;
                }
                .step-num {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    border: 1px solid var(--border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    font-weight: 700;
                    transition: all 0.3s ease;
                }
                .step-indicator.active {
                    color: var(--primary);
                }
                .step-indicator.active .step-num {
                    border-color: var(--primary);
                    background: rgba(0, 229, 255, 0.1);
                    color: var(--primary);
                }
                .step-line {
                    flex: 1;
                    height: 1px;
                    background: var(--border);
                    margin: 0 0.75rem;
                    transition: background 0.3s ease;
                }
                .step-line.filled {
                    background: rgba(0, 229, 255, 0.3);
                }

                .checkout-form {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                }
                .checkout-form h2 {
                    margin: 0 0 1.5rem;
                    font-size: 1.25rem;
                    font-weight: 700;
                }

                .form-group {
                    margin-bottom: 1.25rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.4rem;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.8rem;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                }
                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    color: #fff;
                    font-size: 0.9rem;
                    font-family: inherit;
                    transition: all 0.3s ease;
                }
                .form-group input::placeholder {
                    color: rgba(255, 255, 255, 0.2);
                }
                .form-group input:focus {
                    border-color: var(--border-hover);
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.08);
                    background: rgba(255, 255, 255, 0.06);
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .checkout-btn-primary {
                    width: 100%;
                    padding: 0.85rem;
                    border-radius: var(--radius);
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-top: 0.75rem;
                    background: var(--primary);
                    color: var(--background);
                    transition: all 0.3s ease;
                    letter-spacing: 0.3px;
                    border: none;
                }
                .checkout-btn-primary:hover:not(:disabled) {
                    box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
                    transform: translateY(-1px);
                }
                .checkout-btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                
                .checkout-btn-secondary {
                    width: 100%;
                    padding: 0.85rem;
                    border-radius: var(--radius);
                    font-weight: 500;
                    font-size: 0.9rem;
                    margin-top: 0.75rem;
                    background: transparent;
                    border: 1px solid var(--border);
                    color: rgba(255, 255, 255, 0.6);
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .checkout-btn-secondary:hover {
                    border-color: rgba(255, 255, 255, 0.15);
                    color: #fff;
                }

                .payment-actions {
                    display: flex;
                    gap: 1rem;
                }

                .order-summary-box {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.15rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    border: 1px dashed rgba(0, 229, 255, 0.15);
                }
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.6);
                }
                .total-amount {
                    color: var(--primary);
                    font-size: 1.35rem;
                    font-weight: 800;
                }

                .payment-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
                }
                .payment-option {
                    cursor: pointer;
                    position: relative;
                }
                .payment-option input {
                    position: absolute;
                    opacity: 0;
                }
                .payment-logo {
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 1.5rem;
                    text-align: center;
                    font-weight: 700;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.02);
                    height: 100px;
                }
                .payment-option:hover .payment-logo {
                    border-color: rgba(255, 255, 255, 0.15);
                }
                .payment-option.selected .payment-logo {
                    border-color: var(--primary);
                    background: rgba(0, 229, 255, 0.06);
                    box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.1);
                }
                .esewa { color: #60bb46; }
                .khalti { color: #5c2d91; }
                .cod { color: rgba(255, 255, 255, 0.7); }
                
                .error-message {
                    background: rgba(255, 59, 48, 0.08);
                    color: #ff3b30;
                    padding: 0.85rem 1.15rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    border: 1px solid rgba(255, 59, 48, 0.15);
                }

                .success-message {
                    text-align: center;
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                }
                .success-icon {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: rgba(0, 229, 255, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    color: var(--primary);
                }
                .success-message h2 {
                    margin: 0 0 0.5rem;
                    font-size: 1.75rem;
                    font-weight: 800;
                }
                .success-message p {
                    color: rgba(255, 255, 255, 0.4);
                    margin: 0 0 0.5rem;
                    font-size: 0.95rem;
                }
                .order-num {
                    color: rgba(255, 255, 255, 0.5) !important;
                    font-family: monospace;
                }
                .payment-method-badge {
                    display: inline-block;
                    background: rgba(0, 229, 255, 0.08);
                    color: var(--primary);
                    padding: 4px 12px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin: 1rem 0 1.5rem;
                    border: 1px solid rgba(0, 229, 255, 0.12);
                }
            `})]})},Dw=()=>{const[r,n]=A.useState("overview"),[s,l]=A.useState([]),[c,d]=A.useState([]),[f,m]=A.useState(!0),[g,y]=A.useState(!1),[v,_]=A.useState({name:"",description:"",price:"",sale_price:"",category_id:"",stock_quantity:"",image_url:"",images:""}),[x,w]=A.useState(!1),[j,O]=A.useState(null),[U,q]=A.useState(""),[D,C]=A.useState(null),V=async()=>{m(!0);const{data:X,error:ue}=await Ze.from("products").select("*, categories(name)").order("created_at",{ascending:!1});ue?console.error("Error fetching products:",ue):l(X||[]),m(!1)},F=async()=>{const{data:X,error:ue}=await Ze.from("categories").select("*");ue?console.error("Error fetching categories:",ue):d(X||[])};A.useEffect(()=>{V(),F()},[]);const K=X=>{const{name:ue,value:L}=X.target;_(Y=>({...Y,[ue]:L}))},P=X=>{const ue=X.target.files[0];if(ue){O(ue);const L=URL.createObjectURL(ue);q(L)}},ve=async X=>{try{w(!0);const ue=X.name.split(".").pop(),Y=`${`${Math.random()}.${ue}`}`,{error:ee}=await Ze.storage.from("product-images").upload(Y,X);if(ee)throw ee;const{data:ge}=Ze.storage.from("product-images").getPublicUrl(Y);return ge.publicUrl}catch(ue){return console.error("Error uploading image:",ue),alert("Error uploading image!"),null}finally{w(!1)}},je=X=>{C(X),_({name:X.name,description:X.description||"",price:X.price,sale_price:X.sale_price||"",category_id:X.category_id||"",stock_quantity:X.stock_quantity,image_url:X.images&&X.images.length>0?X.images[0]:"",images:X.images&&X.images.length>1?X.images.slice(1).join(", "):""}),q(X.images&&X.images.length>0?X.images[0]:""),y(!0)},ut=async X=>{X.preventDefault();let ue=v.image_url;if(j){const E=await ve(j);if(E)ue=E;else return}const L=v.name.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"");let Y=v.images?v.images.split(",").map(E=>E.trim()):[];ue&&(Y.includes(ue)?Y[0]!==ue&&(Y=Y.filter(E=>E!==ue),Y.unshift(ue)):Y.unshift(ue));const ee={name:v.name,description:v.description,price:parseFloat(v.price),sale_price:v.sale_price?parseFloat(v.sale_price):null,category_id:v.category_id?parseInt(v.category_id):null,stock_quantity:parseInt(v.stock_quantity)||0,images:Y};D||(ee.slug=L+"-"+Date.now());let ge,be;if(D){const E=await Ze.from("products").update(ee).eq("id",D.id).select();be=E.data,ge=E.error}else{const E=await Ze.from("products").insert([ee]).select();be=E.data,ge=E.error}ge?alert("Error saving product: "+ge.message):(l(D?s.map(E=>E.id===D.id?be[0]:E):[be[0],...s]),y(!1),lt())},lt=()=>{_({name:"",description:"",price:"",sale_price:"",category_id:"",stock_quantity:"",image_url:"",images:""}),O(null),q(""),C(null)},it=async X=>{if(!window.confirm("Are you sure you want to delete this product?"))return;const{error:ue}=await Ze.from("products").delete().eq("id",X);ue?alert("Error deleting product: "+ue.message):l(s.filter(L=>L.id!==X))},ta=[{label:"Total Sales",value:"$12,450",icon:Lb,color:"#FC8801"},{label:"Total Orders",value:"145",icon:ju,color:"#3257A7"},{label:"Active Users",value:"2,340",icon:B1,color:"#10B981"}];return h.jsxs("div",{className:"admin-dashboard container",children:[h.jsxs("div",{className:"admin-header",children:[h.jsx("h1",{children:"Admin Dashboard"}),h.jsxs("div",{className:"admin-nav",children:[h.jsx("button",{className:r==="overview"?"active":"",onClick:()=>n("overview"),children:"Overview"}),h.jsx("button",{className:r==="products"?"active":"",onClick:()=>n("products"),children:"Products"}),h.jsx("button",{className:r==="orders"?"active":"",onClick:()=>n("orders"),children:"Orders"})]})]}),r==="overview"&&h.jsx("div",{className:"overview-section",children:h.jsx("div",{className:"stats-grid",children:ta.map((X,ue)=>h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",style:{backgroundColor:`${X.color}20`,color:X.color},children:h.jsx(X.icon,{size:24})}),h.jsxs("div",{className:"stat-info",children:[h.jsx("h3",{children:X.value}),h.jsx("p",{children:X.label})]})]},ue))})}),r==="products"&&h.jsxs("div",{className:"products-section",children:[h.jsxs("div",{className:"section-actions",children:[h.jsx("h2",{children:"Product Management"}),h.jsxs("button",{className:"btn-primary",onClick:()=>{lt(),y(!0)},children:[h.jsx(o1,{size:16})," Add Product"]})]}),f?h.jsx("p",{children:"Loading products..."}):h.jsx("div",{className:"table-container",children:h.jsxs("table",{className:"admin-table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Image"}),h.jsx("th",{children:"Name"}),h.jsx("th",{children:"Price"}),h.jsx("th",{children:"Stock"}),h.jsx("th",{children:"Category"}),h.jsx("th",{children:"Actions"})]})}),h.jsxs("tbody",{children:[s.map(X=>h.jsxs("tr",{children:[h.jsx("td",{children:h.jsx("div",{className:"product-thumb",children:X.images&&X.images[0]?h.jsx("img",{src:X.images[0],alt:X.name}):h.jsx("div",{className:"no-image",children:"No Img"})})}),h.jsx("td",{children:X.name}),h.jsxs("td",{children:["$",X.price]}),h.jsx("td",{children:X.stock_quantity}),h.jsx("td",{children:X.categories?.name||"-"}),h.jsxs("td",{className:"actions-cell",children:[h.jsx("button",{className:"icon-btn edit",onClick:()=>je(X),children:h.jsx(E1,{size:16})}),h.jsx("button",{className:"icon-btn delete",onClick:()=>it(X.id),children:h.jsx(Gp,{size:16})})]})]},X.id)),s.length===0&&h.jsx("tr",{children:h.jsx("td",{colSpan:"6",style:{textAlign:"center"},children:"No products found. Add one!"})})]})]})})]}),g&&h.jsx("div",{className:"modal-overlay",children:h.jsxs("div",{className:"modal-content",children:[h.jsxs("div",{className:"modal-header",children:[h.jsx("h2",{children:D?"Edit Product":"Add New Product"}),h.jsx("button",{className:"close-btn",onClick:()=>{y(!1),lt()},children:h.jsx(Yp,{size:24})})]}),h.jsxs("form",{onSubmit:ut,className:"product-form",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Product Name"}),h.jsx("input",{type:"text",name:"name",value:v.name,onChange:K,required:!0})]}),h.jsxs("div",{className:"form-row",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Price"}),h.jsx("input",{type:"number",name:"price",value:v.price,onChange:K,required:!0,step:"0.01"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Sale Price (Optional)"}),h.jsx("input",{type:"number",name:"sale_price",value:v.sale_price,onChange:K,step:"0.01"})]})]}),h.jsxs("div",{className:"form-row",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Category"}),h.jsxs("select",{name:"category_id",value:v.category_id,onChange:K,required:!0,children:[h.jsx("option",{value:"",children:"Select Category"}),c.map(X=>h.jsx("option",{value:X.id,children:X.name},X.id))]}),c.length===0&&h.jsx("small",{className:"text-muted",children:"No categories found. Please add categories in DB first."})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Stock Quantity"}),h.jsx("input",{type:"number",name:"stock_quantity",value:v.stock_quantity,onChange:K,required:!0})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Description"}),h.jsx("textarea",{name:"description",value:v.description,onChange:K,rows:"3"})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Product Image"}),h.jsxs("div",{className:"image-upload-wrapper",children:[h.jsx("div",{className:"upload-box",onClick:()=>document.getElementById("fileInput").click(),children:U?h.jsx("img",{src:U,alt:"Preview",className:"upload-preview"}):v.image_url?h.jsx("img",{src:v.image_url,alt:"URL Preview",className:"upload-preview"}):h.jsxs("div",{className:"upload-placeholder",children:[h.jsx(M1,{size:24}),h.jsx("span",{children:"Click to Upload Image"})]})}),h.jsx("input",{type:"file",id:"fileInput",accept:"image/*",onChange:P,style:{display:"none"}}),x&&h.jsxs("div",{className:"uploading-indicator",children:[h.jsx(Hp,{className:"spin",size:16})," Uploading..."]})]}),h.jsx("div",{className:"or-divider",children:h.jsx("span",{children:"OR"})}),h.jsx("input",{type:"text",name:"image_url",value:v.image_url,onChange:X=>{K(X),q("")},placeholder:"Enter Image URL directly",className:"url-input"})]}),h.jsxs("div",{className:"form-actions",children:[h.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>{y(!1),lt()},children:"Cancel"}),h.jsx("button",{type:"submit",className:"btn-primary",disabled:x,children:x?"Uploading...":h.jsxs(h.Fragment,{children:[h.jsx(h1,{size:18})," ",D?"Update Product":"Save Product"]})})]})]})]})}),h.jsx("style",{children:`
                .admin-dashboard {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .admin-header {
                    margin-bottom: 2rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 1rem;
                }
                .admin-nav {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .admin-nav button {
                    background: none;
                    color: var(--text-muted);
                    padding: 0.5rem 1rem;
                    border-bottom: 2px solid transparent;
                    border-radius: 0;
                    cursor: pointer;
                }
                .admin-nav button.active {
                    color: var(--primary);
                    border-bottom-color: var(--primary);
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .stat-card {
                    background: #111;
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .stat-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .section-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .table-container {
                    overflow-x: auto;
                }

                .admin-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: #111;
                    border-radius: var(--radius);
                    overflow: hidden;
                }
                .admin-table th, .admin-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #222;
                }
                .admin-table th {
                    background: #1a1a1a;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .product-thumb {
                    width: 48px;
                    height: 48px;
                    border-radius: 4px;
                    overflow: hidden;
                    background: #222;
                }
                .product-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .no-image {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    color: #555;
                }

                .actions-cell {
                    display: flex;
                    gap: 0.5rem;
                }
                .icon-btn {
                    padding: 0.5rem;
                    border-radius: 4px;
                    background: #222;
                    color: var(--text-muted);
                    cursor: pointer;
                }
                .icon-btn.edit:hover {
                    color: var(--primary);
                    background: rgba(252, 136, 1, 0.1);
                }
                .icon-btn.delete:hover {
                    color: var(--alert);
                    background: rgba(217, 37, 10, 0.1);
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    backdrop-filter: blur(4px);
                }
                .modal-content {
                    background: #111;
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid #333;
                    width: 100%;
                    max-width: 600px;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                .close-btn {
                    background: none;
                    color: var(--text-muted);
                    padding: 0;
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: var(--text-muted);
                }
                .form-group input, .form-group select, .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    background: #222;
                    border: 1px solid #333;
                    color: #fff;
                    border-radius: 4px;
                }
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                }

                /* Image Upload Styles */
                .image-upload-wrapper {
                    margin-bottom: 1rem;
                }
                .upload-box {
                    width: 100%;
                    height: 150px;
                    border: 2px dashed #444;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    overflow: hidden;
                    background: #1a1a1a;
                    transition: border-color 0.2s;
                }
                .upload-box:hover {
                    border-color: var(--primary);
                }
                .upload-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-muted);
                }
                .upload-preview {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .or-divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 1rem 0;
                    color: var(--text-muted);
                    font-size: 0.8rem;
                }
                .or-divider::before, .or-divider::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: #333;
                    margin: 0 1rem;
                }
                .uploading-indicator {
                    margin-top: 0.5rem;
                    color: var(--primary);
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .form-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    margin-top: 2rem;
                }
                .btn-secondary {
                    background: #222;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--radius);
                }
                .btn-primary {
                    background: var(--primary);
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--radius);
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .btn-primary:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                .text-muted {
                    color: #666;
                    font-size: 0.8rem;
                    margin-top: 0.25rem;
                    display: block;
                }
            `})]})},Mw=()=>{const r=jn(),[n,s]=A.useState(!1),[l,c]=A.useState(!1),[d,f]=A.useState(""),[m,g]=A.useState(""),[y,v]=A.useState(null),_=async w=>{w.preventDefault(),s(!0),v(null);try{if(l){const{error:j}=await Ze.auth.signUp({email:d,password:m});if(j)throw j;alert("Check your email for the login link!")}else{const{error:j}=await Ze.auth.signInWithPassword({email:d,password:m});if(j)throw j;r("/")}}catch(j){v(j.message)}finally{s(!1)}},x=async()=>{try{const{error:w}=await Ze.auth.signInWithOAuth({provider:"google"});if(w)throw w}catch(w){v(w.message)}};return h.jsxs("div",{className:"auth-page",children:[h.jsx("div",{className:"auth-glow"}),h.jsxs("div",{className:"auth-card",children:[h.jsxs("div",{className:"auth-badge",children:[h.jsx("span",{className:"badge-dot"}),h.jsx("span",{children:"CH ELECTRONICS"})]}),h.jsx("h1",{className:"auth-title",children:l?"Create Account":"Welcome Back"}),h.jsx("p",{className:"auth-subtitle",children:l?"Join CH Electronics today.":"Sign in to access your orders and profile."}),y&&h.jsx("div",{className:"auth-error",children:y}),h.jsx("div",{className:"social-auth",children:h.jsxs("button",{className:"social-btn",onClick:x,children:[h.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),h.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z",fill:"#34A853"}),h.jsx("path",{d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z",fill:"#FBBC05"}),h.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]}),"Continue with Google"]})}),h.jsx("div",{className:"divider",children:h.jsx("span",{children:"Or continue with email"})}),h.jsxs("form",{onSubmit:_,className:"auth-form",children:[h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Email"}),h.jsxs("div",{className:"input-wrapper",children:[h.jsx($p,{size:16,className:"input-icon"}),h.jsx("input",{type:"email",placeholder:"you@example.com",value:d,onChange:w=>f(w.target.value),required:!0})]})]}),h.jsxs("div",{className:"form-group",children:[h.jsx("label",{children:"Password"}),h.jsxs("div",{className:"input-wrapper",children:[h.jsx(Zb,{size:16,className:"input-icon"}),h.jsx("input",{type:"password",placeholder:"••••••••",value:m,onChange:w=>g(w.target.value),required:!0})]})]}),h.jsxs("button",{type:"submit",className:"auth-btn",disabled:n,children:[n?h.jsx(Hp,{className:"spin",size:18}):l?"Sign Up":"Sign In",!n&&h.jsx(Rb,{size:16})]})]}),h.jsx("div",{className:"auth-footer",children:h.jsxs("p",{children:[l?"Already have an account?":"Don't have an account?",h.jsx("button",{className:"toggle-btn",onClick:()=>c(!l),children:l?"Sign In":"Sign Up"})]})})]}),h.jsx("style",{children:`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
          background: var(--background);
        }
        .auth-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .auth-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          width: 100%;
          max-width: 420px;
          backdrop-filter: blur(20px);
        }
        .auth-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .badge-dot {
          width: 5px;
          height: 5px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(0, 229, 255, 0.6);
        }
        .auth-title {
          margin: 0 0 0.5rem 0;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .auth-subtitle {
          color: rgba(255, 255, 255, 0.4);
          margin: 0 0 2rem 0;
          font-size: 0.9rem;
        }
        .auth-error {
          background: rgba(255, 59, 48, 0.08);
          color: #ff3b30;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          border: 1px solid rgba(255, 59, 48, 0.15);
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.4rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .input-wrapper {
          position: relative;
        }
        .input-wrapper input {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .input-wrapper input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
        .input-wrapper input:focus {
          border-color: var(--border-hover);
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.08);
          background: rgba(255, 255, 255, 0.06);
        }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.25);
        }
        .auth-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          font-weight: 600;
          margin-top: 0.5rem;
          background: var(--primary);
          color: var(--background);
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }
        .auth-btn:hover:not(:disabled) {
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
          transform: translateY(-1px);
        }
        .auth-btn:disabled {
          opacity: 0.6;
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.35);
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          font-size: 0.875rem;
        }
        .auth-footer p {
          margin: 0;
        }
        .toggle-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.5rem;
          font-size: 0.875rem;
          transition: opacity 0.2s;
        }
        .toggle-btn:hover {
          opacity: 0.8;
        }

        .social-auth {
           margin-bottom: 1.5rem;
        }
        .social-btn {
           width: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 0.75rem;
           padding: 0.8rem;
           border-radius: 8px;
           font-weight: 500;
           cursor: pointer;
           transition: all 0.3s ease;
           border: 1px solid var(--border);
           background: rgba(255, 255, 255, 0.04);
           color: #fff;
           font-size: 0.875rem;
           font-family: inherit;
        }
        .social-btn:hover {
           background: rgba(255, 255, 255, 0.08);
           border-color: rgba(255, 255, 255, 0.15);
        }
        
        .divider {
           display: flex;
           align-items: center;
           text-align: center;
           margin-bottom: 1.5rem;
           color: rgba(255, 255, 255, 0.25);
        }
        .divider::before, .divider::after {
           content: '';
           flex: 1;
           border-bottom: 1px solid var(--border);
        }
        .divider span {
           padding: 0 12px;
           font-size: 0.75rem;
           letter-spacing: 0.3px;
        }
      `})]})},Lw=()=>{const{user:r}=En(),n=jn(),[s,l]=A.useState([]),[c,d]=A.useState(!0);A.useEffect(()=>{if(!r){n("/login");return}setTimeout(()=>{l([{id:"ORD-12345",date:"2023-10-15",total:299,status:"Shipped"},{id:"ORD-67890",date:"2023-11-02",total:129.5,status:"Processing"}]),d(!1)},1e3)},[r,n]);const f=async()=>{await Ze.auth.signOut(),n("/")};return r?h.jsxs("div",{className:"profile-page container",children:[h.jsxs("div",{className:"profile-header",children:[h.jsxs("div",{className:"profile-info",children:[h.jsx("div",{className:"avatar",children:h.jsx(Vp,{size:32})}),h.jsxs("div",{children:[h.jsx("h1",{children:r.email}),h.jsxs("p",{className:"user-id",children:["ID: ",r.id.slice(0,8),"..."]})]})]}),h.jsxs("button",{onClick:f,className:"logout-btn",children:[h.jsx(Fb,{size:16})," Sign Out"]})]}),h.jsxs("div",{className:"profile-layout",children:[h.jsxs("div",{className:"profile-card",children:[h.jsxs("h2",{children:[h.jsx(Su,{size:18})," Shipping Address"]}),h.jsx("p",{className:"muted-text",children:"No address saved yet."}),h.jsx("button",{className:"btn-text",children:"Add Address"})]}),h.jsxs("div",{className:"profile-content",children:[h.jsxs("h2",{children:[h.jsx(ju,{size:18})," Order History"]}),c?h.jsxs("div",{className:"loading-state",children:[h.jsx("div",{className:"loading-spinner"}),h.jsx("span",{children:"Loading orders..."})]}):h.jsx("div",{className:"orders-list",children:s.map(m=>h.jsxs(Rt,{to:`/order/${m.id}`,className:"order-card",children:[h.jsxs("div",{className:"order-header",children:[h.jsxs("span",{className:"order-id",children:["#",m.id]}),h.jsx("span",{className:`status-badge ${m.status.toLowerCase()}`,children:m.status})]}),h.jsxs("div",{className:"order-details",children:[h.jsx("span",{children:m.date}),h.jsxs("span",{className:"order-total",children:["$",m.total.toFixed(2)]})]})]},m.id))})]})]}),h.jsx("style",{children:`
                .profile-page {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2.5rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--border);
                }
                .profile-info {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }
                .avatar {
                    width: 64px;
                    height: 64px;
                    background: rgba(0, 229, 255, 0.08);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    border: 1px solid rgba(0, 229, 255, 0.2);
                }
                .profile-info h1 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.35rem;
                    font-weight: 700;
                }
                .user-id {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 0.8rem;
                    margin: 0;
                    font-family: monospace;
                }
                .logout-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: rgba(255, 255, 255, 0.5);
                    padding: 0.55rem 1.25rem;
                    border-radius: var(--radius);
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .logout-btn:hover {
                    border-color: rgba(255, 59, 48, 0.3);
                    color: #ff3b30;
                    background: rgba(255, 59, 48, 0.06);
                }

                .profile-layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .profile-layout {
                        grid-template-columns: 1fr;
                    }
                }

                .profile-card, .profile-content {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                }
                .profile-card {
                    height: fit-content;
                }
                .profile-card h2, .profile-content h2 {
                    margin: 0 0 1.25rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.05rem;
                    font-weight: 700;
                }
                .muted-text {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 0.875rem;
                    margin: 0 0 0.75rem;
                }

                .orders-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .order-card {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.15rem;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    transition: all 0.3s ease;
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .order-card:hover {
                    border-color: var(--border-hover);
                    background: rgba(0, 229, 255, 0.03);
                }
                .order-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                .order-id {
                    font-weight: 600;
                    color: #fff;
                    font-size: 0.9rem;
                }
                .status-badge {
                    font-size: 0.7rem;
                    padding: 3px 8px;
                    border-radius: 4px;
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .status-badge.delivered {
                    background: rgba(52, 199, 89, 0.1);
                    color: #34c759;
                    border: 1px solid rgba(52, 199, 89, 0.15);
                }
                .status-badge.processing {
                    background: rgba(0, 229, 255, 0.1);
                    color: var(--primary);
                    border: 1px solid rgba(0, 229, 255, 0.15);
                }
                .status-badge.shipped {
                    background: rgba(255, 159, 10, 0.1);
                    color: #ff9f0a;
                    border: 1px solid rgba(255, 159, 10, 0.15);
                }
                
                .order-details {
                    display: flex;
                    justify-content: space-between;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 0.85rem;
                }
                .order-total {
                    color: #fff;
                    font-weight: 600;
                }
                .btn-text {
                    background: none;
                    border: none;
                    color: var(--primary);
                    padding: 0;
                    cursor: pointer;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: opacity 0.2s;
                }
                .btn-text:hover {
                    opacity: 0.7;
                }
                .loading-state {
                    text-align: center;
                    padding: 3rem 1rem;
                    color: rgba(255, 255, 255, 0.35);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    font-size: 0.9rem;
                }
                .loading-spinner {
                    width: 24px;
                    height: 24px;
                    border: 2px solid var(--border);
                    border-top-color: var(--primary);
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `})]}):null},qw=()=>{const{id:r}=vu(),{user:n}=En(),s=jn(),[l,c]=A.useState(null),[d,f]=A.useState(!0);if(A.useEffect(()=>{if(!n){s("/login");return}setTimeout(()=>{c({id:r,date:"2023-10-15",total:299,status:"Shipped",items:[{name:"MDR-Z1R Premium Headphones",price:299,quantity:1,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100"}],shippingAddress:{name:"John Doe",line1:"123 Tech Street",city:"Silicon Valley",zip:"94000",country:"USA"}}),f(!1)},1e3)},[r,n,s]),d)return h.jsx("div",{className:"container",style:{padding:"4rem"},children:"Loading order details..."});if(!l)return h.jsx("div",{className:"container",style:{padding:"4rem"},children:"Order not found."});const m=["Placed","Processing","Shipped","Delivered"],g=m.indexOf(l.status);return h.jsxs("div",{className:"order-detail-page container",children:[h.jsxs(Rt,{to:"/profile",className:"back-link",children:[h.jsx(kb,{size:16})," Back to Orders"]}),h.jsxs("div",{className:"order-header-main",children:[h.jsxs("div",{children:[h.jsxs("h1",{children:["Order #",l.id]}),h.jsxs("p",{className:"order-date",children:["Placed on ",l.date]})]}),h.jsxs("div",{className:"order-total-badge",children:["Total: $",l.total.toFixed(2)]})]}),h.jsxs("div",{className:"tracking-section",children:[h.jsx("h2",{children:"Tracking Status"}),h.jsx("div",{className:"steps-container",children:m.map((y,v)=>{const _=v<=g,x=v===g;let w=Db;return v===0&&(w=ju),v===2&&(w=hl),v===3&&(w=qp),h.jsxs("div",{className:`step-item ${_?"completed":""} ${x?"current":""}`,children:[h.jsx("div",{className:"step-icon",children:h.jsx(w,{size:20})}),h.jsx("span",{className:"step-label",children:y}),v<m.length-1&&h.jsx("div",{className:`step-line ${v<g?"completed":""}`})]},y)})}),l.status==="Shipped"&&h.jsxs("div",{className:"tracking-info-box",children:[h.jsx(hl,{size:20}),h.jsxs("div",{children:[h.jsx("strong",{children:"On the way"}),h.jsx("p",{children:"Expected delivery: Oct 20, 2023"})]})]})]}),h.jsxs("div",{className:"order-content-grid",children:[h.jsxs("div",{className:"items-section",children:[h.jsx("h3",{children:"Items in Order"}),h.jsx("div",{className:"order-items-list",children:l.items.map((y,v)=>h.jsxs("div",{className:"order-item-row",children:[h.jsx("img",{src:y.image,alt:y.name,className:"item-thumb"}),h.jsxs("div",{className:"item-info",children:[h.jsx("h4",{children:y.name}),h.jsxs("p",{children:["Qty: ",y.quantity]})]}),h.jsxs("div",{className:"item-price",children:["$",y.price.toFixed(2)]})]},v))})]}),h.jsxs("div",{className:"shipping-section",children:[h.jsx("h3",{children:"Shipping Details"}),h.jsxs("div",{className:"address-card",children:[h.jsx(Su,{size:20,className:"pin-icon"}),h.jsxs("div",{children:[h.jsx("strong",{children:l.shippingAddress.name}),h.jsx("p",{children:l.shippingAddress.line1}),h.jsxs("p",{children:[l.shippingAddress.city,", ",l.shippingAddress.zip]}),h.jsx("p",{children:l.shippingAddress.country})]})]})]})]}),h.jsx("style",{children:`
                .order-detail-page {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                    text-decoration: none;
                }
                .back-link:hover {
                    color: var(--primary);
                }

                .order-header-main {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 2rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 1rem;
                }
                .order-header-main h1 {
                    margin: 0 0 0.5rem 0;
                }
                .order-date {
                    color: var(--text-muted);
                    margin: 0;
                }
                .order-total-badge {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                .tracking-section {
                    background: #111;
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                    margin-bottom: 2rem;
                }
                .tracking-section h2 {
                    margin-top: 0;
                    margin-bottom: 2rem;
                    font-size: 1.25rem;
                }
                
                .steps-container {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    margin-bottom: 2rem;
                }
                .step-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    flex: 1;
                    z-index: 1;
                }
                .step-icon {
                    width: 40px;
                    height: 40px;
                    background: #222;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #333;
                    color: var(--text-muted);
                    margin-bottom: 0.5rem;
                    transition: all 0.3s;
                }
                .step-item.completed .step-icon, .step-item.current .step-icon {
                    background: var(--primary);
                    border-color: var(--primary);
                    color: #fff;
                }
                .step-label {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .step-item.completed .step-label, .step-item.current .step-label {
                    color: #fff;
                }

                .step-line {
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    width: 100%;
                    height: 2px;
                    background: #333;
                    z-index: -1;
                }
                .step-line.completed {
                    background: var(--primary);
                }
                /* Hide line for last item */
                .step-item:last-child .step-line {
                    display: none;
                }
                
                .tracking-info-box {
                    background: rgba(50, 87, 167, 0.1);
                    border: 1px solid rgba(50, 87, 167, 0.3);
                    border-radius: 4px;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: #3388ff;
                }

                .order-content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .order-content-grid {
                        grid-template-columns: 1fr;
                    }
                    .steps-container {
                        font-size: 0.8rem;
                    }
                }

                .items-section, .shipping-section {
                    background: #111;
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                }
                .items-section h3, .shipping-section h3 {
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 0.5rem;
                }

                .order-item-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #1a1a1a;
                }
                .order-item-row:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
                .item-thumb {
                    width: 60px;
                    height: 60px;
                    border-radius: 4px;
                    background: #000;
                    object-fit: cover;
                }
                .item-info {
                    flex: 1;
                }
                .item-info h4 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1rem;
                }
                .item-info p {
                    margin: 0;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }
                .item-price {
                    font-weight: 600;
                }

                .address-card {
                    display: flex;
                    gap: 1rem;
                    color: var(--text-muted);
                }
                .pin-icon {
                    color: var(--primary);
                    flex-shrink: 0;
                }
                .address-card strong {
                    color: #fff;
                    display: block;
                    margin-bottom: 0.25rem;
                }
                .address-card p {
                    margin: 0;
                    line-height: 1.4;
                }
            `})]})};function Bw(){return h.jsx(db,{basename:"/Ecommerce",children:h.jsxs("div",{className:"app",children:[h.jsx(ww,{}),h.jsx("main",{children:h.jsxs(Hv,{children:[h.jsx(Ft,{path:"/",element:h.jsx(Aw,{})}),h.jsx(Ft,{path:"/product/:id",element:h.jsx(kw,{})}),h.jsx(Ft,{path:"/category/:id",element:h.jsx(Ow,{})}),h.jsx(Ft,{path:"/cart",element:h.jsx(Rw,{})}),h.jsx(Ft,{path:"/checkout",element:h.jsx(Uw,{})}),h.jsx(Ft,{path:"/admin",element:h.jsx(Dw,{})}),h.jsx(Ft,{path:"/login",element:h.jsx(Mw,{})}),h.jsx(Ft,{path:"/profile",element:h.jsx(Lw,{})}),h.jsx(Ft,{path:"/order/:id",element:h.jsx(qw,{})})]})})]})})}const Hw=({children:r})=>{const[n,s]=A.useState(()=>{if(typeof window<"u"){const v=localStorage.getItem("cart");return v?JSON.parse(v):[]}return[]}),[l,c]=A.useState(null);A.useEffect(()=>{Ze.auth.getSession().then(({data:{session:_}})=>{c(_?.user??null)});const{data:{subscription:v}}=Ze.auth.onAuthStateChange((_,x)=>{c(x?.user??null)});return()=>v.unsubscribe()},[]),A.useEffect(()=>{},[l]);const d=v=>{s(_=>{const x=_.find(j=>j.id===v.id);let w;return x?w=_.map(j=>j.id===v.id?{...j,quantity:j.quantity+1}:j):w=[..._,{...v,quantity:1}],l||localStorage.setItem("cart",JSON.stringify(w)),w})},f=v=>{s(_=>{const x=_.filter(w=>w.id!==v);return l||localStorage.setItem("cart",JSON.stringify(x)),x})},m=(v,_)=>{s(x=>{const w=x.map(j=>j.id===v?{...j,quantity:Math.max(1,j.quantity+_)}:j);return l||localStorage.setItem("cart",JSON.stringify(w)),w})},g=()=>{s([]),l||localStorage.removeItem("cart")},y=n.reduce((v,_)=>v+(_.sale_price||_.price)*_.quantity,0);return h.jsx(lg.Provider,{value:{cartItems:n,addToCart:d,removeFromCart:f,updateQuantity:m,clearCart:g,total:y,user:l},children:r})};Vy.createRoot(document.getElementById("root")).render(h.jsx(A.StrictMode,{children:h.jsx(Hw,{children:h.jsx(Bw,{})})}));
