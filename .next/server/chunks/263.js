exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 5231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

!function(t,n){ true?n(exports,__webpack_require__(6689)):0}(this,(function(t,n){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var n=Object.create(null);return t&&Object.keys(t).forEach((function(e){if("default"!==e){var r=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,r.get?r:{enumerable:!0,get:function(){return t[e]}})}})),n.default=t,Object.freeze(n)}var o=r(n),i=e(n),a=function(t,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)};function u(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}a(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}var s=function(){return(s=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function c(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(e[r[o]]=t[r[o]])}return e}function f(t,n){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var r,o,i=e.call(t),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a}function l(t,n){for(var e=0,r=n.length,o=t.length;e<r;e++,o++)t[o]=n[e];return t}var d=function(t){return{isEnabled:function(n){return t.some((function(t){return!!n[t]}))}}},v={measureLayout:d(["layout","layoutId","drag","_layoutResetTransform"]),animation:d(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag"]),exit:d(["exit"]),drag:d(["drag","dragControls"]),focus:d(["whileFocus"]),hover:d(["whileHover","onHoverStart","onHoverEnd"]),tap:d(["whileTap","onTap","onTapStart","onTapCancel"]),pan:d(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),layoutAnimation:d(["layout","layoutId"])};function p(t){for(var n in t){var e=t[n];null!==e&&(v[n].Component=e)}}var m=n.createContext({strict:!1}),h=Object.keys(v),y=h.length;var g=n.createContext({transformPagePoint:function(t){return t},isStatic:!1}),x=n.createContext({});function b(){return n.useContext(x).visualElement}var E=n.createContext(null);function P(t){var e=n.useRef(null);return null===e.current&&(e.current=t()),e.current}function A(){var t=n.useContext(E);if(null===t)return[!0,null];var e=t.isPresent,r=t.onExitComplete,o=t.register,i=T();n.useEffect((function(){return o(i)}),[]);return!e&&r?[!1,function(){return null==r?void 0:r(i)}]:[!0]}function w(t){return null===t||t.isPresent}var S=0,C=function(){return S++},T=function(){return P(C)},V=n.createContext(null),M="undefined"!=typeof window,L=M?n.useLayoutEffect:n.useEffect;function R(t,e,r,o){var i=n.useContext(g),a=n.useContext(m),u=b(),c=n.useContext(E),f=function(t){var e=t.layoutId,r=n.useContext(V);return r&&void 0!==e?r+"-"+e:e}(r),l=n.useRef(void 0);o||(o=a.renderer),!l.current&&o&&(l.current=o(t,{visualState:e,parent:u,props:s(s({},r),{layoutId:f}),presenceId:null==c?void 0:c.id,blockInitialAnimation:!1===(null==c?void 0:c.initial)}));var d=l.current;return L((function(){d&&(d.setProps(s(s(s({},i),r),{layoutId:f})),d.isPresent=w(c),d.isPresenceRoot=!u||u.presenceId!==(null==c?void 0:c.id),d.syncRender())})),n.useEffect((function(){var t;d&&(null===(t=d.animationState)||void 0===t||t.animateChanges())})),L((function(){return function(){return null==d?void 0:d.notifyUnmount()}}),[]),d}function k(t){return"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function D(t){return Array.isArray(t)}function O(t){return"string"==typeof t||D(t)}function j(t,n,e,r,o){var i;return void 0===r&&(r={}),void 0===o&&(o={}),"string"==typeof n&&(n=null===(i=t.variants)||void 0===i?void 0:i[n]),"function"==typeof n?n(null!=e?e:t.custom,r,o):n}function B(t,n,e){var r=t.getProps();return j(r,n,null!=e?e:r.custom,function(t){var n={};return t.forEachValue((function(t,e){return n[e]=t.get()})),n}(t),function(t){var n={};return t.forEachValue((function(t,e){return n[e]=t.getVelocity()})),n}(t))}function F(t){var n;return"function"==typeof(null===(n=t.animate)||void 0===n?void 0:n.start)||O(t.initial)||O(t.animate)||O(t.whileHover)||O(t.whileDrag)||O(t.whileTap)||O(t.whileFocus)||O(t.exit)}function U(t){return Boolean(F(t)||t.variants)}function I(t,e){var r=function(t,n){if(F(t)){var e=t.initial,r=t.animate;return{initial:!1===e||O(e)?e:void 0,animate:O(r)?r:void 0}}return!1!==t.inherit?n:{}}(t,n.useContext(x)),o=r.initial,i=r.animate;return n.useMemo((function(){return{initial:o,animate:i}}),e?[H(o),H(i)]:[])}function H(t){return Array.isArray(t)?t.join(" "):t}function X(t){var e=t.preloadedFeatures,r=t.createVisualElement,i=t.useRender,a=t.useVisualState,u=t.Component;return e&&p(e),n.forwardRef((function(t,e){var c=n.useContext(g).isStatic,f=null,l=I(t,c),d=a(t,c);return!c&&M&&(l.visualElement=R(u,d,t,r),f=function(t,e,r){var i=[];if(n.useContext(m),!e)return null;for(var a=0;a<y;a++){var u=h[a],c=v[u],f=c.isEnabled,l=c.Component;f(t)&&l&&i.push(o.createElement(l,s({key:u},t,{visualElement:e})))}return i}(t,l.visualElement)),o.createElement(o.Fragment,null,o.createElement(x.Provider,{value:l},i(u,t,function(t,e,r){return n.useCallback((function(n){var o;n&&(null===(o=t.mount)||void 0===o||o.call(t,n)),e&&(n?e.mount(n):e.unmount()),r&&("function"==typeof r?r(n):k(r)&&(r.current=n))}),[e])}(d,l.visualElement,e),d,c)),f)}))}function Y(t){function n(n,e){return void 0===e&&(e={}),X(t(n,e))}var e=new Map;return new Proxy(n,{get:function(t,r){return e.has(r)||e.set(r,n(r)),e.get(r)}})}var z=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function N(t){return"string"==typeof t&&!t.includes("-")&&!!(z.indexOf(t)>-1||/[A-Z]/.test(t))}var W={};function _(t){for(var n in t)W[n]=t[n]}var q=["","X","Y","Z"],Z=["transformPerspective","x","y","z"];function $(t,n){return Z.indexOf(t)-Z.indexOf(n)}["translate","scale","rotate","skew"].forEach((function(t){return q.forEach((function(n){return Z.push(t+n)}))}));var G=new Set(Z);function K(t){return G.has(t)}var J=new Set(["originX","originY","originZ"]);function Q(t){return J.has(t)}function tt(t,n){var e=n.layout,r=n.layoutId;return K(t)||Q(t)||(e||void 0!==r)&&(!!W[t]||"opacity"===t)}var nt=function(t){return null!==t&&"object"==typeof t&&t.getVelocity},et={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function rt(t){return t.startsWith("--")}var ot=function(t,n){return n&&"number"==typeof t?n.transform(t):t},it=function(t,n){return function(e){return Math.max(Math.min(e,n),t)}},at=function(t){return t%1?Number(t.toFixed(5)):t},ut=/(-)?([\d]*\.?[\d])+/g,st=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,ct=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ft(t){return"string"==typeof t}var lt={test:function(t){return"number"==typeof t},parse:parseFloat,transform:function(t){return t}},dt=s(s({},lt),{transform:it(0,1)}),vt=s(s({},lt),{default:1}),pt=function(t){return{test:function(n){return ft(n)&&n.endsWith(t)&&1===n.split(" ").length},parse:parseFloat,transform:function(n){return""+n+t}}},mt=pt("deg"),ht=pt("%"),yt=pt("px"),gt=pt("vh"),xt=pt("vw"),bt=s(s({},ht),{parse:function(t){return ht.parse(t)/100},transform:function(t){return ht.transform(100*t)}}),Et=function(t,n){return function(e){return Boolean(ft(e)&&ct.test(e)&&e.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(e,n))}},Pt=function(t,n,e){return function(r){var o;if(!ft(r))return r;var i=r.match(ut),a=i[0],u=i[1],s=i[2],c=i[3];return(o={})[t]=parseFloat(a),o[n]=parseFloat(u),o[e]=parseFloat(s),o.alpha=void 0!==c?parseFloat(c):1,o}},At={test:Et("hsl","hue"),parse:Pt("hue","saturation","lightness"),transform:function(t){var n=t.hue,e=t.saturation,r=t.lightness,o=t.alpha,i=void 0===o?1:o;return"hsla("+Math.round(n)+", "+ht.transform(at(e))+", "+ht.transform(at(r))+", "+at(dt.transform(i))+")"}},wt=it(0,255),St=s(s({},lt),{transform:function(t){return Math.round(wt(t))}}),Ct={test:Et("rgb","red"),parse:Pt("red","green","blue"),transform:function(t){var n=t.red,e=t.green,r=t.blue,o=t.alpha,i=void 0===o?1:o;return"rgba("+St.transform(n)+", "+St.transform(e)+", "+St.transform(r)+", "+at(dt.transform(i))+")"}};var Tt={test:Et("#"),parse:function(t){var n="",e="",r="",o="";return t.length>5?(n=t.substr(1,2),e=t.substr(3,2),r=t.substr(5,2),o=t.substr(7,2)):(n=t.substr(1,1),e=t.substr(2,1),r=t.substr(3,1),o=t.substr(4,1),n+=n,e+=e,r+=r,o+=o),{red:parseInt(n,16),green:parseInt(e,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:Ct.transform},Vt={test:function(t){return Ct.test(t)||Tt.test(t)||At.test(t)},parse:function(t){return Ct.test(t)?Ct.parse(t):At.test(t)?At.parse(t):Tt.parse(t)},transform:function(t){return ft(t)?t:t.hasOwnProperty("red")?Ct.transform(t):At.transform(t)}};function Mt(t){var n=[],e=0,r=t.match(st);r&&(e=r.length,t=t.replace(st,"${c}"),n.push.apply(n,r.map(Vt.parse)));var o=t.match(ut);return o&&(t=t.replace(ut,"${n}"),n.push.apply(n,o.map(lt.parse))),{values:n,numColors:e,tokenised:t}}function Lt(t){return Mt(t).values}function Rt(t){var n=Mt(t),e=n.values,r=n.numColors,o=n.tokenised,i=e.length;return function(t){for(var n=o,e=0;e<i;e++)n=n.replace(e<r?"${c}":"${n}",e<r?Vt.transform(t[e]):at(t[e]));return n}}var kt=function(t){return"number"==typeof t?0:t};var Dt={test:function(t){var n,e,r,o;return isNaN(t)&&ft(t)&&(null!==(e=null===(n=t.match(ut))||void 0===n?void 0:n.length)&&void 0!==e?e:0)+(null!==(o=null===(r=t.match(st))||void 0===r?void 0:r.length)&&void 0!==o?o:0)>0},parse:Lt,createTransformer:Rt,getAnimatableNone:function(t){var n=Lt(t);return Rt(t)(n.map(kt))}},Ot=new Set(["brightness","contrast","saturate","opacity"]);function jt(t){var n=t.slice(0,-1).split("("),e=n[0],r=n[1];if("drop-shadow"===e)return t;var o=(r.match(ut)||[])[0];if(!o)return t;var i=r.replace(o,""),a=Ot.has(e)?1:0;return o!==r&&(a*=100),e+"("+a+i+")"}var Bt=/([a-z-]*)\(.*?\)/g,Ft=s(s({},Dt),{getAnimatableNone:function(t){var n=t.match(Bt);return n?n.map(jt).join(" "):t}}),Ut=s(s({},lt),{transform:Math.round}),It={borderWidth:yt,borderTopWidth:yt,borderRightWidth:yt,borderBottomWidth:yt,borderLeftWidth:yt,borderRadius:yt,radius:yt,borderTopLeftRadius:yt,borderTopRightRadius:yt,borderBottomRightRadius:yt,borderBottomLeftRadius:yt,width:yt,maxWidth:yt,height:yt,maxHeight:yt,size:yt,top:yt,right:yt,bottom:yt,left:yt,padding:yt,paddingTop:yt,paddingRight:yt,paddingBottom:yt,paddingLeft:yt,margin:yt,marginTop:yt,marginRight:yt,marginBottom:yt,marginLeft:yt,rotate:mt,rotateX:mt,rotateY:mt,rotateZ:mt,scale:vt,scaleX:vt,scaleY:vt,scaleZ:vt,skew:mt,skewX:mt,skewY:mt,distance:yt,translateX:yt,translateY:yt,translateZ:yt,x:yt,y:yt,z:yt,perspective:yt,transformPerspective:yt,opacity:dt,originX:bt,originY:bt,originZ:yt,zIndex:Ut,fillOpacity:dt,strokeOpacity:dt,numOctaves:Ut};function Ht(t,n,e,r,o,i,a,u){var s,c=t.style,f=t.vars,l=t.transform,d=t.transformKeys,v=t.transformOrigin;d.length=0;var p=!1,m=!1,h=!0;for(var y in n){var g=n[y];if(rt(y))f[y]=g;else{var x=It[y],b=ot(g,x);if(K(y)){if(p=!0,l[y]=b,d.push(y),!h)continue;g!==(null!==(s=x.default)&&void 0!==s?s:0)&&(h=!1)}else if(Q(y))v[y]=b,m=!0;else if((null==e?void 0:e.isHydrated)&&(null==r?void 0:r.isHydrated)&&W[y]){var E=W[y].process(g,r,e),P=W[y].applyTo;if(P)for(var A=P.length,w=0;w<A;w++)c[P[w]]=E;else c[y]=E}else c[y]=b}}r&&e&&a&&u?(c.transform=a(r.deltaFinal,r.treeScale,p?l:void 0),i&&(c.transform=i(l,c.transform)),c.transformOrigin=u(r)):(p&&(c.transform=function(t,n,e,r){var o=t.transform,i=t.transformKeys,a=n.enableHardwareAcceleration,u=void 0===a||a,s=n.allowTransformNone,c=void 0===s||s,f="";i.sort($);for(var l=!1,d=i.length,v=0;v<d;v++){var p=i[v];f+=(et[p]||p)+"("+o[p]+") ","z"===p&&(l=!0)}return!l&&u?f+="translateZ(0)":f=f.trim(),r?f=r(o,e?"":f):c&&e&&(f="none"),f}(t,o,h,i)),m&&(c.transformOrigin=function(t){var n=t.originX,e=void 0===n?"50%":n,r=t.originY,o=void 0===r?"50%":r,i=t.originZ;return e+" "+o+" "+(void 0===i?0:i)}(v)))}var Xt=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function Yt(t,n,e){for(var r in n)nt(n[r])||tt(r,e)||(t[r]=n[r])}function zt(t,e,r){var o={};return Yt(o,t.style||{},t),Object.assign(o,function(t,e,r){var o=t.transformTemplate;return n.useMemo((function(){var t={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};Ht(t,e,void 0,void 0,{enableHardwareAcceleration:!r},o);var n=t.style;return s(s({},t.vars),n)}),[e])}(t,e,r)),t.transformValues&&(o=t.transformValues(o)),o}function Nt(t,n,e){var r={},o=zt(t,n,e);return Boolean(t.drag)&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),r.style=o,r}var Wt=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","_layoutResetTransform","onLayoutAnimationComplete","onViewportBoxUpdate","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover"]);function _t(t){return Wt.has(t)}var qt=function(t){return!_t(t)};try{var Zt=(__webpack_require__(3527)["default"]);qt=function(t){return t.startsWith("on")?!_t(t):Zt(t)}}catch(t){}function $t(t,n,e){return"string"==typeof t?t:yt.transform(n+e*t)}var Gt=function(t,n){return yt.transform(t*n)},Kt={offset:"stroke-dashoffset",array:"stroke-dasharray"},Jt={offset:"strokeDashoffset",array:"strokeDasharray"};function Qt(t,n,e,r,o,i,a,u){var s=n.attrX,f=n.attrY,l=n.originX,d=n.originY,v=n.pathLength,p=n.pathSpacing,m=void 0===p?1:p,h=n.pathOffset,y=void 0===h?0:h;Ht(t,c(n,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]),e,r,o,i,a,u),t.attrs=t.style,t.style={};var g=t.attrs,x=t.style,b=t.dimensions,E=t.totalPathLength;g.transform&&(b&&(x.transform=g.transform),delete g.transform),b&&(void 0!==l||void 0!==d||x.transform)&&(x.transformOrigin=function(t,n,e){return $t(n,t.x,t.width)+" "+$t(e,t.y,t.height)}(b,void 0!==l?l:.5,void 0!==d?d:.5)),void 0!==s&&(g.x=s),void 0!==f&&(g.y=f),void 0!==E&&void 0!==v&&function(t,n,e,r,o,i){void 0===r&&(r=1),void 0===o&&(o=0),void 0===i&&(i=!0);var a=i?Kt:Jt;t[a.offset]=Gt(-o,n);var u=Gt(e,n),s=Gt(r,n);t[a.array]=u+" "+s}(g,E,v,m,y,!1)}var tn=function(){return s(s({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function nn(t,e){var r=n.useMemo((function(){var n=tn();return Qt(n,e,void 0,void 0,{enableHardwareAcceleration:!1},t.transformTemplate),s(s({},n.attrs),{style:s({},n.style)})}),[e]);if(t.style){var o={};Yt(o,t.style,t),r.style=s(s({},o),r.style)}return r}function en(t){void 0===t&&(t=!1);return function(e,r,o,i,a){var u=i.latestValues,c=(N(e)?nn:Nt)(r,u,a),f=function(t,n,e){var r={};for(var o in t)(qt(o)||!0===e&&_t(o)||!n&&!_t(o))&&(r[o]=t[o]);return r}(r,"string"==typeof e,t),l=s(s(s({},f),c),{ref:o});return n.createElement(e,l)}}var rn=/([a-z])([A-Z])/g,on=function(t){return t.replace(rn,"$1-$2").toLowerCase()};function an(t,n){var e=n.style,r=n.vars;for(var o in Object.assign(t.style,e),r)t.style.setProperty(o,r[o])}var un=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform"]);function sn(t,n){for(var e in an(t,n),n.attrs)t.setAttribute(un.has(e)?e:on(e),n.attrs[e])}function cn(t){var n=t.style,e={};for(var r in n)(nt(n[r])||tt(r,t))&&(e[r]=n[r]);return e}function fn(t){var n=cn(t);for(var e in t){if(nt(t[e]))n["x"===e||"y"===e?"attr"+e.toUpperCase():e]=t[e]}return n}function ln(t){return"object"==typeof t&&"function"==typeof t.start}var dn=function(t){return Array.isArray(t)};function vn(t){var n,e=nt(t)?t.get():t;return n=e,Boolean(n&&"object"==typeof n&&n.mix&&n.toValue)?e.toValue():e}function pn(t,n,e,r){var o=t.scrapeMotionValuesFromProps,i=t.createRenderState,a=t.onMount,u={latestValues:hn(n,e,r,o),renderState:i()};return a&&(u.mount=function(t){return a(n,t,u)}),u}var mn=function(t){return function(e,r){var o=n.useContext(x),i=n.useContext(E);return r?pn(t,e,o,i):P((function(){return pn(t,e,o,i)}))}};function hn(t,n,e,r){var o={},i=!1===(null==e?void 0:e.initial),a=r(t);for(var u in a)o[u]=vn(a[u]);var s=t.initial,f=t.animate,l=F(t),d=U(t);n&&d&&!l&&!1!==t.inherit&&(null!=s||(s=n.initial),null!=f||(f=n.animate));var v=i||!1===s?f:s;v&&"boolean"!=typeof v&&!ln(v)&&(Array.isArray(v)?v:[v]).forEach((function(n){var e=j(t,n);if(e){var r=e.transitionEnd;e.transition;var i=c(e,["transitionEnd","transition"]);for(var a in i)o[a]=i[a];for(var a in r)o[a]=r[a]}}));return o}var yn={useVisualState:mn({scrapeMotionValuesFromProps:fn,createRenderState:tn,onMount:function(t,n,e){var r=e.renderState,o=e.latestValues;try{r.dimensions="function"==typeof n.getBBox?n.getBBox():n.getBoundingClientRect()}catch(t){r.dimensions={x:0,y:0,width:0,height:0}}"path"===n.tagName&&(r.totalPathLength=n.getTotalLength()),Qt(r,o,void 0,void 0,{enableHardwareAcceleration:!1},t.transformTemplate),sn(n,r)}})};var gn,xn={useVisualState:mn({scrapeMotionValuesFromProps:cn,createRenderState:Xt})};function bn(t,n,e,r){var o=n.forwardMotionProps,i=void 0!==o&&o,a=N(t)?yn:xn;return s(s({},a),{preloadedFeatures:e,useRender:en(i),createVisualElement:r,Component:t})}function En(t,n,e,r){return t.addEventListener(n,e,r),function(){return t.removeEventListener(n,e,r)}}function Pn(t,e,r,o){n.useEffect((function(){var n=t.current;if(r&&n)return En(n,e,r,o)}),[t,e,r,o])}function An(t){return"undefined"!=typeof PointerEvent&&t instanceof PointerEvent?!("mouse"!==t.pointerType):t instanceof MouseEvent}function wn(t){return!!t.touches}!function(t){t.Animate="animate",t.Hover="whileHover",t.Tap="whileTap",t.Drag="whileDrag",t.Focus="whileFocus",t.Exit="exit"}(gn||(gn={}));var Sn={pageX:0,pageY:0};function Cn(t,n){void 0===n&&(n="page");var e=t.touches[0]||t.changedTouches[0]||Sn;return{x:e[n+"X"],y:e[n+"Y"]}}function Tn(t,n){return void 0===n&&(n="page"),{x:t[n+"X"],y:t[n+"Y"]}}function Vn(t,n){return void 0===n&&(n="page"),{point:wn(t)?Cn(t,n):Tn(t,n)}}var Mn=function(t,n){void 0===n&&(n=!1);var e,r=function(n){return t(n,Vn(n))};return n?(e=r,function(t){var n=t instanceof MouseEvent;(!n||n&&0===t.button)&&e(t)}):r},Ln={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},Rn={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function kn(t){return M&&null===window.onpointerdown?t:M&&null===window.ontouchstart?Rn[t]:M&&null===window.onmousedown?Ln[t]:t}function Dn(t,n,e,r){return En(t,kn(n),Mn(e,"pointerdown"===n),r)}function On(t,n,e,r){return Pn(t,kn(n),e&&Mn(e,"pointerdown"===n),r)}function jn(t){var n=null;return function(){return null===n&&(n=t,function(){n=null})}}var Bn=jn("dragHorizontal"),Fn=jn("dragVertical");function Un(t){var n=!1;if("y"===t)n=Fn();else if("x"===t)n=Bn();else{var e=Bn(),r=Fn();e&&r?n=function(){e(),r()}:(e&&e(),r&&r())}return n}function In(){var t=Un(!0);return!t||(t(),!1)}function Hn(t,n,e){return function(r,o){var i;An(r)&&!In()&&(null==e||e(r,o),null===(i=t.animationState)||void 0===i||i.setActive(gn.Hover,n))}}var Xn=function(t,n){return!!n&&(t===n||Xn(t,n.parentElement))};function Yn(t){return n.useEffect((function(){return function(){return t()}}),[])}var zn=function(t,n,e){return Math.min(Math.max(e,t),n)};function Nn(t){var n,e,r=t.duration,o=void 0===r?800:r,i=t.bounce,a=void 0===i?.25:i,u=t.velocity,s=void 0===u?0:u,c=t.mass,f=void 0===c?1:c,l=1-a;l=zn(.05,1,l),o=zn(.01,10,o/1e3),l<1?(n=function(t){var n=t*l,e=n*o;return.001-(n-s)/Wn(t,l)*Math.exp(-e)},e=function(t){var e=t*l*o,r=e*s+s,i=Math.pow(l,2)*Math.pow(t,2)*o,a=Math.exp(-e),u=Wn(Math.pow(t,2),l);return(.001-n(t)>0?-1:1)*((r-i)*a)/u}):(n=function(t){return Math.exp(-t*o)*((t-s)*o+1)-.001},e=function(t){return Math.exp(-t*o)*(o*o*(s-t))});var d=function(t,n,e){for(var r=e,o=1;o<12;o++)r-=t(r)/n(r);return r}(n,e,5/o);if(o*=1e3,isNaN(d))return{stiffness:100,damping:10,duration:o};var v=Math.pow(d,2)*f;return{stiffness:v,damping:2*l*Math.sqrt(f*v),duration:o}}function Wn(t,n){return t*Math.sqrt(1-n*n)}var _n=["duration","bounce"],qn=["stiffness","damping","mass"];function Zn(t,n){return n.some((function(n){return void 0!==t[n]}))}function $n(t){var n=t.from,e=void 0===n?0:n,r=t.to,o=void 0===r?1:r,i=t.restSpeed,a=void 0===i?2:i,u=t.restDelta,f=c(t,["from","to","restSpeed","restDelta"]),l={done:!1,value:e},d=function(t){var n=s({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!Zn(t,qn)&&Zn(t,_n)){var e=Nn(t);(n=s(s(s({},n),e),{velocity:0,mass:1})).isResolvedFromDuration=!0}return n}(f),v=d.stiffness,p=d.damping,m=d.mass,h=d.velocity,y=d.duration,g=d.isResolvedFromDuration,x=Gn,b=Gn;function E(){var t=h?-h/1e3:0,n=o-e,r=p/(2*Math.sqrt(v*m)),i=Math.sqrt(v/m)/1e3;if(null!=u||(u=Math.abs(o-e)<=1?.01:.4),r<1){var a=Wn(i,r);x=function(e){var u=Math.exp(-r*i*e);return o-u*((t+r*i*n)/a*Math.sin(a*e)+n*Math.cos(a*e))},b=function(e){var o=Math.exp(-r*i*e);return r*i*o*(Math.sin(a*e)*(t+r*i*n)/a+n*Math.cos(a*e))-o*(Math.cos(a*e)*(t+r*i*n)-a*n*Math.sin(a*e))}}else if(1===r)x=function(e){return o-Math.exp(-i*e)*(n+(t+i*n)*e)};else{var s=i*Math.sqrt(r*r-1);x=function(e){var a=Math.exp(-r*i*e),u=Math.min(s*e,300);return o-a*((t+r*i*n)*Math.sinh(u)+s*n*Math.cosh(u))/s}}}return E(),{next:function(t){var n=x(t);if(g)l.done=t>=y;else{var e=1e3*b(t),r=Math.abs(e)<=a,i=Math.abs(o-n)<=u;l.done=r&&i}return l.value=l.done?o:n,l},flipTarget:function(){var t;h=-h,e=(t=[o,e])[0],o=t[1],E()}}}$n.needsInterpolation=function(t,n){return"string"==typeof t||"string"==typeof n};var Gn=function(t){return 0},Kn=function(t,n,e){var r=n-t;return 0===r?1:(e-t)/r},Jn=function(t,n,e){return-e*t+e*n+t},Qn=function(t,n,e){var r=t*t,o=n*n;return Math.sqrt(Math.max(0,e*(o-r)+r))},te=[Tt,Ct,At],ne=function(t){return te.find((function(n){return n.test(t)}))},ee=function(t,n){var e=ne(t),r=ne(n);e.transform,r.transform;var o=e.parse(t),i=r.parse(n),a=s({},o),u=e===At?Jn:Qn;return function(t){for(var n in a)"alpha"!==n&&(a[n]=u(o[n],i[n],t));return a.alpha=Jn(o.alpha,i.alpha,t),e.transform(a)}},re=function(t){return"number"==typeof t},oe=function(t,n){return function(e){return n(t(e))}},ie=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return t.reduce(oe)};function ae(t,n){return re(t)?function(e){return Jn(t,n,e)}:Vt.test(t)?ee(t,n):fe(t,n)}var ue=function(t,n){var e=l([],t),r=e.length,o=t.map((function(t,e){return ae(t,n[e])}));return function(t){for(var n=0;n<r;n++)e[n]=o[n](t);return e}},se=function(t,n){var e=s(s({},t),n),r={};for(var o in e)void 0!==t[o]&&void 0!==n[o]&&(r[o]=ae(t[o],n[o]));return function(t){for(var n in r)e[n]=r[n](t);return e}};function ce(t){for(var n=Dt.parse(t),e=n.length,r=0,o=0,i=0,a=0;a<e;a++)r||"number"==typeof n[a]?r++:void 0!==n[a].hue?i++:o++;return{parsed:n,numNumbers:r,numRGB:o,numHSL:i}}var fe=function(t,n){var e=Dt.createTransformer(n),r=ce(t),o=ce(n);return ie(ue(r.parsed,o.parsed),e)},le=function(t,n){return function(e){return Jn(t,n,e)}};function de(t,n,e){for(var r,o=[],i=e||("number"==typeof(r=t[0])?le:"string"==typeof r?Vt.test(r)?ee:fe:Array.isArray(r)?ue:"object"==typeof r?se:void 0),a=t.length-1,u=0;u<a;u++){var s=i(t[u],t[u+1]);if(n){var c=Array.isArray(n)?n[u]:n;s=ie(c,s)}o.push(s)}return o}function ve(t,n,e){var r=void 0===e?{}:e,o=r.clamp,i=void 0===o||o,a=r.ease,u=r.mixer,s=t.length;n.length,!a||!Array.isArray(a)||a.length,t[0]>t[s-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());var c=de(n,a,u),f=2===s?function(t,n){var e=t[0],r=t[1],o=n[0];return function(t){return o(Kn(e,r,t))}}(t,c):function(t,n){var e=t.length,r=e-1;return function(o){var i=0,a=!1;if(o<=t[0]?a=!0:o>=t[r]&&(i=r-1,a=!0),!a){for(var u=1;u<e&&!(t[u]>o||u===r);u++);i=u-1}var s=Kn(t[i],t[i+1],o);return n[i](s)}}(t,c);return i?function(n){return f(zn(t[0],t[s-1],n))}:f}var pe,me=function(t){return function(n){return 1-t(1-n)}},he=function(t){return function(n){return n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2}},ye=function(t){return function(n){return n*n*((t+1)*n-t)}},ge=function(t){return t},xe=(pe=2,function(t){return Math.pow(t,pe)}),be=me(xe),Ee=he(xe),Pe=function(t){return 1-Math.sin(Math.acos(t))},Ae=me(Pe),we=he(Ae),Se=ye(1.525),Ce=me(Se),Te=he(Se),Ve=function(t){var n=ye(t);return function(t){return(t*=2)<1?.5*n(t):.5*(2-Math.pow(2,-10*(t-1)))}}(1.525),Me=function(t){if(1===t||0===t)return t;var n=t*t;return t<4/11?7.5625*n:t<8/11?9.075*n-9.9*t+3.4:t<.9?4356/361*n-35442/1805*t+16061/1805:10.8*t*t-20.52*t+10.72},Le=me(Me);function Re(t,n){return t.map((function(){return n||Ee})).splice(0,t.length-1)}function ke(t){var n=t.from,e=void 0===n?0:n,r=t.to,o=void 0===r?1:r,i=t.ease,a=t.offset,u=t.duration,s=void 0===u?300:u,c={done:!1,value:e},f=Array.isArray(o)?o:[e,o],l=function(t,n){return t.map((function(t){return t*n}))}(a&&a.length===f.length?a:function(t){var n=t.length;return t.map((function(t,e){return 0!==e?e/(n-1):0}))}(f),s);function d(){return ve(l,f,{ease:Array.isArray(i)?i:Re(f,i)})}var v=d();return{next:function(t){return c.value=v(t),c.done=t>=s,c},flipTarget:function(){f.reverse(),v=d()}}}var De={keyframes:ke,spring:$n,decay:function(t){var n=t.velocity,e=void 0===n?0:n,r=t.from,o=void 0===r?0:r,i=t.power,a=void 0===i?.8:i,u=t.timeConstant,s=void 0===u?350:u,c=t.restDelta,f=void 0===c?.5:c,l=t.modifyTarget,d={done:!1,value:o},v=a*e,p=o+v,m=void 0===l?p:l(p);return m!==p&&(v=m-o),{next:function(t){var n=-v*Math.exp(-t/s);return d.done=!(n>f||n<-f),d.value=d.done?m:m+n,d},flipTarget:function(){}}}};var Oe="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()},je="undefined"!=typeof window?function(t){return window.requestAnimationFrame(t)}:function(t){return setTimeout((function(){return t(Oe())}),1/60*1e3)};var Be=!0,Fe=!1,Ue=!1,Ie={delta:0,timestamp:0},He=["read","update","preRender","render","postRender"],Xe=He.reduce((function(t,n){return t[n]=function(t){var n=[],e=[],r=0,o=!1,i=new WeakSet,a={schedule:function(t,a,u){void 0===a&&(a=!1),void 0===u&&(u=!1);var s=u&&o,c=s?n:e;return a&&i.add(t),-1===c.indexOf(t)&&(c.push(t),s&&o&&(r=n.length)),t},cancel:function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1),i.delete(t)},process:function(u){var s;if(o=!0,n=(s=[e,n])[0],(e=s[1]).length=0,r=n.length)for(var c=0;c<r;c++){var f=n[c];f(u),i.has(f)&&(a.schedule(f),t())}o=!1}};return a}((function(){return Fe=!0})),t}),{}),Ye=He.reduce((function(t,n){var e=Xe[n];return t[n]=function(t,n,r){return void 0===n&&(n=!1),void 0===r&&(r=!1),Fe||qe(),e.schedule(t,n,r)},t}),{}),ze=He.reduce((function(t,n){return t[n]=Xe[n].cancel,t}),{}),Ne=He.reduce((function(t,n){return t[n]=function(){return Xe[n].process(Ie)},t}),{}),We=function(t){return Xe[t].process(Ie)},_e=function(t){Fe=!1,Ie.delta=Be?1/60*1e3:Math.max(Math.min(t-Ie.timestamp,40),1),Ie.timestamp=t,Ue=!0,He.forEach(We),Ue=!1,Fe&&(Be=!1,je(_e))},qe=function(){Fe=!0,Be=!0,Ue||je(_e)},Ze=function(){return Ie};function $e(t,n,e){return void 0===e&&(e=0),t-n-e}var Ge=function(t){var n=function(n){var e=n.delta;return t(e)};return{start:function(){return Ye.update(n,!0)},stop:function(){return ze.update(n)}}};function Ke(t){var n,e,r,o,i,a=t.from,u=t.autoplay,f=void 0===u||u,l=t.driver,d=void 0===l?Ge:l,v=t.elapsed,p=void 0===v?0:v,m=t.repeat,h=void 0===m?0:m,y=t.repeatType,g=void 0===y?"loop":y,x=t.repeatDelay,b=void 0===x?0:x,E=t.onPlay,P=t.onStop,A=t.onComplete,w=t.onRepeat,S=t.onUpdate,C=c(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),T=C.to,V=0,M=C.duration,L=!1,R=!0,k=function(t){if(Array.isArray(t.to))return ke;if(De[t.type])return De[t.type];var n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?ke:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?$n:ke}(C);(null===(e=(n=k).needsInterpolation)||void 0===e?void 0:e.call(n,a,T))&&(i=ve([0,100],[a,T],{clamp:!1}),a=0,T=100);var D=k(s(s({},C),{from:a,to:T}));function O(){V++,"reverse"===g?p=function(t,n,e,r){return void 0===e&&(e=0),void 0===r&&(r=!0),r?$e(n+-t,n,e):n-(t-n)+e}(p,M,b,R=V%2==0):(p=$e(p,M,b),"mirror"===g&&D.flipTarget()),L=!1,w&&w()}function j(t){if(R||(t=-t),p+=t,!L){var n=D.next(Math.max(0,p));o=n.value,i&&(o=i(o)),L=R?n.done:p<=0}null==S||S(o),L&&(0===V&&(null!=M||(M=p)),V<h?function(t,n,e,r){return r?t>=n+e:t<=-e}(p,M,b,R)&&O():(r.stop(),A&&A()))}return f&&(null==E||E(),(r=d(j)).start()),{stop:function(){null==P||P(),r.stop()}}}function Je(t,n){return n?t*(1e3/n):0}var Qe=function(t){return t.hasOwnProperty("x")&&t.hasOwnProperty("y")},tr=function(t){return Qe(t)&&t.hasOwnProperty("z")},nr=function(t,n){return Math.abs(t-n)};function er(t,n){if(re(t)&&re(n))return nr(t,n);if(Qe(t)&&Qe(n)){var e=nr(t.x,n.x),r=nr(t.y,n.y),o=tr(t)&&tr(n)?nr(t.z,n.z):0;return Math.sqrt(Math.pow(e,2)+Math.pow(r,2)+Math.pow(o,2))}}var rr=function(t,n,e){var r=n-t;return((e-t)%r+r)%r+t},or=function(t,n){return 1-3*n+3*t},ir=function(t,n){return 3*n-6*t},ar=function(t){return 3*t},ur=function(t,n,e){return((or(n,e)*t+ir(n,e))*t+ar(n))*t},sr=function(t,n,e){return 3*or(n,e)*t*t+2*ir(n,e)*t+ar(n)};function cr(t,n,e,r){if(t===n&&e===r)return ge;for(var o=new Float32Array(11),i=0;i<11;++i)o[i]=ur(.1*i,t,e);function a(n){for(var r=0,i=1;10!==i&&o[i]<=n;++i)r+=.1;--i;var a=r+.1*((n-o[i])/(o[i+1]-o[i])),u=sr(a,t,e);return u>=.001?function(t,n,e,r){for(var o=0;o<8;++o){var i=sr(n,e,r);if(0===i)return n;n-=(ur(n,e,r)-t)/i}return n}(n,a,t,e):0===u?a:function(t,n,e,r,o){var i,a,u=0;do{(i=ur(a=n+(e-n)/2,r,o)-t)>0?e=a:n=a}while(Math.abs(i)>1e-7&&++u<10);return a}(n,r,r+.1,t,e)}return function(t){return 0===t||1===t?t:ur(a(t),n,r)}}var fr=function(t){return function(n){return t(n),null}},lr={tap:fr((function(t){var e=t.onTap,r=t.onTapStart,o=t.onTapCancel,i=t.whileTap,a=t.visualElement,u=e||r||o||i,s=n.useRef(!1),c=n.useRef(null);function f(){var t;null===(t=c.current)||void 0===t||t.call(c),c.current=null}function l(){var t;return f(),s.current=!1,null===(t=a.animationState)||void 0===t||t.setActive(gn.Tap,!1),!In()}function d(t,n){l()&&(Xn(a.getInstance(),t.target)?null==e||e(t,n):null==o||o(t,n))}function v(t,n){l()&&(null==o||o(t,n))}On(a,"pointerdown",u?function(t,n){var e;f(),s.current||(s.current=!0,c.current=ie(Dn(window,"pointerup",d),Dn(window,"pointercancel",v)),null==r||r(t,n),null===(e=a.animationState)||void 0===e||e.setActive(gn.Tap,!0))}:void 0),Yn(f)})),focus:fr((function(t){var n=t.whileFocus,e=t.visualElement;Pn(e,"focus",n?function(){var t;null===(t=e.animationState)||void 0===t||t.setActive(gn.Focus,!0)}:void 0),Pn(e,"blur",n?function(){var t;null===(t=e.animationState)||void 0===t||t.setActive(gn.Focus,!1)}:void 0)})),hover:fr((function(t){var n=t.onHoverStart,e=t.onHoverEnd,r=t.whileHover,o=t.visualElement;On(o,"pointerenter",n||r?Hn(o,!0,n):void 0),On(o,"pointerleave",e||r?Hn(o,!1,e):void 0)}))};function dr(t,n){if(!Array.isArray(n))return!1;var e=n.length;if(e!==t.length)return!1;for(var r=0;r<e;r++)if(n[r]!==t[r])return!1;return!0}var vr=function(t){return 1e3*t},pr={linear:ge,easeIn:xe,easeInOut:Ee,easeOut:be,circIn:Pe,circInOut:we,circOut:Ae,backIn:Se,backInOut:Te,backOut:Ce,anticipate:Ve,bounceIn:Le,bounceInOut:function(t){return t<.5?.5*(1-Me(1-2*t)):.5*Me(2*t-1)+.5},bounceOut:Me},mr=function(t){if(Array.isArray(t)){t.length;var n=f(t,4);return cr(n[0],n[1],n[2],n[3])}return"string"==typeof t?pr[t]:t},hr=function(t,n){return"zIndex"!==t&&(!("number"!=typeof n&&!Array.isArray(n))||!("string"!=typeof n||!Dt.test(n)||n.startsWith("url(")))},yr=function(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}},gr=function(t){return{type:"spring",stiffness:550,damping:0===t?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}},xr=function(){return{type:"keyframes",ease:"linear",duration:.3}},br=function(t){return{type:"keyframes",duration:.8,values:t}},Er={x:yr,y:yr,z:yr,rotate:yr,rotateX:yr,rotateY:yr,rotateZ:yr,scaleX:gr,scaleY:gr,scale:gr,opacity:xr,backgroundColor:xr,color:xr,default:gr},Pr=s(s({},It),{color:Vt,backgroundColor:Vt,outlineColor:Vt,fill:Vt,stroke:Vt,borderColor:Vt,borderTopColor:Vt,borderRightColor:Vt,borderBottomColor:Vt,borderLeftColor:Vt,filter:Ft,WebkitFilter:Ft}),Ar=function(t){return Pr[t]};function wr(t,n){var e,r=Ar(t);return r!==Ft&&(r=Dt),null===(e=r.getAnimatableNone)||void 0===e?void 0:e.call(r,n)}function Sr(t){var n=t.ease,e=t.times,r=t.yoyo,o=t.flip,i=t.loop,a=c(t,["ease","times","yoyo","flip","loop"]),u=s({},a);return e&&(u.offset=e),a.duration&&(u.duration=vr(a.duration)),a.repeatDelay&&(u.repeatDelay=vr(a.repeatDelay)),n&&(u.ease=function(t){return Array.isArray(t)&&"number"!=typeof t[0]}(n)?n.map(mr):mr(n)),"tween"===a.type&&(u.type="keyframes"),(r||i||o)&&(r?u.repeatType="reverse":i?u.repeatType="loop":o&&(u.repeatType="mirror"),u.repeat=i||r||o||a.repeat),"spring"!==a.type&&(u.type="keyframes"),u}function Cr(t,n,e){var r,o,i,a;return Array.isArray(n.to)&&(null!==(r=t.duration)&&void 0!==r||(t.duration=.8)),function(t){Array.isArray(t.to)&&null===t.to[0]&&(t.to=l([],f(t.to)),t.to[0]=t.from)}(n),function(t){t.when,t.delay,t.delayChildren,t.staggerChildren,t.staggerDirection,t.repeat,t.repeatType,t.repeatDelay,t.from;var n=c(t,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(n).length}(t)||(t=s(s({},t),(o=e,i=n.to,a=dn(i)?br:Er[o]||Er.default,s({to:i},a(i))))),s(s({},n),Sr(t))}function Tr(t,n,e,r,o){var i,a=Lr(r,t),u=null!==(i=a.from)&&void 0!==i?i:n.get(),c=hr(t,e);return"none"===u&&c&&"string"==typeof e?u=wr(t,e):Vr(u)&&"string"==typeof e?u=Mr(e):!Array.isArray(e)&&Vr(e)&&"string"==typeof u&&(e=Mr(u)),hr(t,u)&&c&&!1!==a.type?function(){var r={from:u,to:e,velocity:n.getVelocity(),onComplete:o,onUpdate:function(t){return n.set(t)}};return"inertia"===a.type||"decay"===a.type?function(t){var n,e=t.from,r=void 0===e?0:e,o=t.velocity,i=void 0===o?0:o,a=t.min,u=t.max,c=t.power,f=void 0===c?.8:c,l=t.timeConstant,d=void 0===l?750:l,v=t.bounceStiffness,p=void 0===v?500:v,m=t.bounceDamping,h=void 0===m?10:m,y=t.restDelta,g=void 0===y?1:y,x=t.modifyTarget,b=t.driver,E=t.onUpdate,P=t.onComplete;function A(t){return void 0!==a&&t<a||void 0!==u&&t>u}function w(t){return void 0===a?u:void 0===u||Math.abs(a-t)<Math.abs(u-t)?a:u}function S(t){null==n||n.stop(),n=Ke(s(s({},t),{driver:b,onUpdate:function(n){var e;null==E||E(n),null===(e=t.onUpdate)||void 0===e||e.call(t,n)},onComplete:P}))}function C(t){S(s({type:"spring",stiffness:p,damping:h,restDelta:g},t))}if(A(r))C({from:r,velocity:i,to:w(r)});else{var T=f*i+r;void 0!==x&&(T=x(T));var V,M,L=w(T),R=L===a?-1:1;S({type:"decay",from:r,velocity:i,timeConstant:d,power:f,restDelta:g,modifyTarget:x,onUpdate:A(T)?function(t){V=M,M=t,i=Je(t-V,Ze().delta),(1===R&&t>L||-1===R&&t<L)&&C({from:t,to:L,velocity:i})}:void 0})}return{stop:function(){return null==n?void 0:n.stop()}}}(s(s({},r),a)):Ke(s(s({},Cr(a,r,t)),{onUpdate:function(t){var n;r.onUpdate(t),null===(n=a.onUpdate)||void 0===n||n.call(a,t)},onComplete:function(){var t;r.onComplete(),null===(t=a.onComplete)||void 0===t||t.call(a)}}))}:function(){var t;return n.set(e),o(),null===(t=null==a?void 0:a.onComplete)||void 0===t||t.call(a),{stop:function(){}}}}function Vr(t){return 0===t||"string"==typeof t&&0===parseFloat(t)&&-1===t.indexOf(" ")}function Mr(t){return"number"==typeof t?0:wr("",t)}function Lr(t,n){return t[n]||t.default||t}function Rr(t,n,e,r){return void 0===r&&(r={}),n.start((function(o){var i,a,u=Tr(t,n,e,r,o),s=function(t,n){var e;return null!==(e=(Lr(t,n)||{}).delay)&&void 0!==e?e:0}(r,t),c=function(){return a=u()};return s?i=setTimeout(c,vr(s)):c(),function(){clearTimeout(i),null==a||a.stop()}}))}function kr(t,n){-1===t.indexOf(n)&&t.push(n)}function Dr(t,n){var e=t.indexOf(n);e>-1&&t.splice(e,1)}var Or=function(){function t(){this.subscriptions=[]}return t.prototype.add=function(t){var n=this;return kr(this.subscriptions,t),function(){return Dr(n.subscriptions,t)}},t.prototype.notify=function(t,n,e){var r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](t,n,e);else for(var o=0;o<r;o++){var i=this.subscriptions[o];i&&i(t,n,e)}},t.prototype.getSize=function(){return this.subscriptions.length},t.prototype.clear=function(){this.subscriptions.length=0},t}(),jr=function(){function t(t){var n,e=this;this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Or,this.velocityUpdateSubscribers=new Or,this.renderSubscribers=new Or,this.canTrackVelocity=!1,this.updateAndNotify=function(t,n){void 0===n&&(n=!0),e.prev=e.current,e.current=t;var r=Ze(),o=r.delta,i=r.timestamp;e.lastUpdated!==i&&(e.timeDelta=o,e.lastUpdated=i,Ye.postRender(e.scheduleVelocityCheck)),e.prev!==e.current&&e.updateSubscribers.notify(e.current),e.velocityUpdateSubscribers.getSize()&&e.velocityUpdateSubscribers.notify(e.getVelocity()),n&&e.renderSubscribers.notify(e.current)},this.scheduleVelocityCheck=function(){return Ye.postRender(e.velocityCheck)},this.velocityCheck=function(t){t.timestamp!==e.lastUpdated&&(e.prev=e.current,e.velocityUpdateSubscribers.notify(e.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=(n=this.current,!isNaN(parseFloat(n)))}return t.prototype.onChange=function(t){return this.updateSubscribers.add(t)},t.prototype.clearListeners=function(){this.updateSubscribers.clear()},t.prototype.onRenderRequest=function(t){return t(this.get()),this.renderSubscribers.add(t)},t.prototype.attach=function(t){this.passiveEffect=t},t.prototype.set=function(t,n){void 0===n&&(n=!0),n&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,n)},t.prototype.get=function(){return this.current},t.prototype.getPrevious=function(){return this.prev},t.prototype.getVelocity=function(){return this.canTrackVelocity?Je(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0},t.prototype.start=function(t){var n=this;return this.stop(),new Promise((function(e){n.hasAnimated=!0,n.stopAnimation=t(e)})).then((function(){return n.clearAnimation()}))},t.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},t.prototype.isAnimating=function(){return!!this.stopAnimation},t.prototype.clearAnimation=function(){this.stopAnimation=null},t.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()},t}();function Br(t){return new jr(t)}var Fr=function(t){return function(n){return n.test(t)}},Ur=[lt,yt,ht,mt,xt,gt,{test:function(t){return"auto"===t},parse:function(t){return t}}],Ir=function(t){return Ur.find(Fr(t))},Hr=l(l([],f(Ur)),[Vt,Dt]),Xr=function(t){return Hr.find(Fr(t))};function Yr(t,n,e){t.hasValue(n)?t.getValue(n).set(e):t.addValue(n,Br(e))}function zr(t,n){var e=B(t,n),r=e?t.makeTargetAnimatable(e,!1):{},o=r.transitionEnd,i=void 0===o?{}:o;r.transition;var a,u=c(r,["transitionEnd","transition"]);for(var f in u=s(s({},u),i)){Yr(t,f,(a=u[f],dn(a)?a[a.length-1]||0:a))}}function Nr(t,n){l([],f(n)).reverse().forEach((function(e){var r,o=t.getVariant(e);o&&zr(t,o),null===(r=t.variantChildren)||void 0===r||r.forEach((function(t){Nr(t,n)}))}))}function Wr(t,n,e){var r,o,i,a,u=Object.keys(n).filter((function(n){return!t.hasValue(n)})),s=u.length;if(s)for(var c=0;c<s;c++){var f=u[c],l=n[f],d=null;Array.isArray(l)&&(d=l[0]),null===d&&(d=null!==(o=null!==(r=e[f])&&void 0!==r?r:t.readValue(f))&&void 0!==o?o:n[f]),null!=d&&("string"==typeof d&&/^\-?\d*\.?\d+$/.test(d)?d=parseFloat(d):!Xr(d)&&Dt.test(l)&&(d=wr(f,l)),t.addValue(f,Br(d)),null!==(i=(a=e)[f])&&void 0!==i||(a[f]=d),t.setBaseTarget(f,d))}}function _r(t,n){if(n)return(n[t]||n.default||n).from}function qr(t,n,e){var r,o,i={};for(var a in t)i[a]=null!==(r=_r(a,n))&&void 0!==r?r:null===(o=e.getValue(a))||void 0===o?void 0:o.get();return i}function Zr(t,n,e){var r;if(void 0===e&&(e={}),t.notifyAnimationStart(),Array.isArray(n)){var o=n.map((function(n){return $r(t,n,e)}));r=Promise.all(o)}else if("string"==typeof n)r=$r(t,n,e);else{var i="function"==typeof n?B(t,n,e.custom):n;r=Gr(t,i,e)}return r.then((function(){return t.notifyAnimationComplete(n)}))}function $r(t,n,e){var r;void 0===e&&(e={});var o=B(t,n,e.custom),i=(o||{}).transition,a=void 0===i?t.getDefaultTransition()||{}:i;e.transitionOverride&&(a=e.transitionOverride);var u=o?function(){return Gr(t,o,e)}:function(){return Promise.resolve()},c=(null===(r=t.variantChildren)||void 0===r?void 0:r.size)?function(r){void 0===r&&(r=0);var o=a.delayChildren,i=void 0===o?0:o,u=a.staggerChildren,c=a.staggerDirection;return function(t,n,e,r,o,i){void 0===e&&(e=0);void 0===r&&(r=0);void 0===o&&(o=1);var a=[],u=(t.variantChildren.size-1)*r,c=1===o?function(t){return void 0===t&&(t=0),t*r}:function(t){return void 0===t&&(t=0),u-t*r};return Array.from(t.variantChildren).sort(Kr).forEach((function(t,r){a.push($r(t,n,s(s({},i),{delay:e+c(r)})).then((function(){return t.notifyAnimationComplete(n)})))})),Promise.all(a)}(t,n,i+r,u,c,e)}:function(){return Promise.resolve()},l=a.when;if(l){var d=f("beforeChildren"===l?[u,c]:[c,u],2),v=d[0],p=d[1];return v().then(p)}return Promise.all([u(),c(e.delay)])}function Gr(t,n,e){var r,o=void 0===e?{}:e,i=o.delay,a=void 0===i?0:i,u=o.transitionOverride,f=o.type,l=t.makeTargetAnimatable(n),d=l.transition,v=void 0===d?t.getDefaultTransition():d,p=l.transitionEnd,m=c(l,["transition","transitionEnd"]);u&&(v=u);var h=[],y=f&&(null===(r=t.animationState)||void 0===r?void 0:r.getState()[f]);for(var g in m){var x=t.getValue(g),b=m[g];if(!(!x||void 0===b||y&&Jr(y,g))){var E=Rr(g,x,b,s({delay:a},v));h.push(E)}}return Promise.all(h).then((function(){p&&zr(t,p)}))}function Kr(t,n){return t.sortNodePosition(n)}function Jr(t,n){var e=t.protectedKeys,r=t.needsAnimating,o=e.hasOwnProperty(n)&&!0!==r[n];return r[n]=!1,o}var Qr=[gn.Animate,gn.Hover,gn.Tap,gn.Drag,gn.Focus,gn.Exit],to=l([],f(Qr)).reverse(),no=Qr.length;function eo(t){var n,e=function(t){return function(n){return Promise.all(n.map((function(n){var e=n.animation,r=n.options;return Zr(t,e,r)})))}}(t),r=((n={})[gn.Animate]=ro(!0),n[gn.Hover]=ro(),n[gn.Tap]=ro(),n[gn.Drag]=ro(),n[gn.Focus]=ro(),n[gn.Exit]=ro(),n),o={},i=!0,a=function(n,e){var r=B(t,e);if(r){r.transition;var o=r.transitionEnd,i=c(r,["transition","transitionEnd"]);n=s(s(s({},n),i),o)}return n};function u(n,u){for(var c,d=t.getProps(),v=t.getVariantContext(!0)||{},p=[],m=new Set,h={},y=1/0,g=function(e){var o=to[e],g=r[o],x=null!==(c=d[o])&&void 0!==c?c:v[o],b=O(x),E=o===u?g.isActive:null;!1===E&&(y=e);var P=x===v[o]&&x!==d[o]&&b;if(P&&i&&t.manuallyAnimateOnMount&&(P=!1),g.protectedKeys=s({},h),!g.isActive&&null===E||!x&&!g.prevProp||ln(x)||"boolean"==typeof x)return"continue";var A=function(t,n){if("string"==typeof n)return n!==t;if(D(n))return!dr(n,t);return!1}(g.prevProp,x)||o===u&&g.isActive&&!P&&b||e>y&&b,w=Array.isArray(x)?x:[x],S=w.reduce(a,{});!1===E&&(S={});var C=g.prevResolvedValues,T=void 0===C?{}:C,V=s(s({},T),S),M=function(t){A=!0,m.delete(t),g.needsAnimating[t]=!0};for(var L in V){var R=S[L],k=T[L];h.hasOwnProperty(L)||(R!==k?dn(R)&&dn(k)?dr(R,k)?g.protectedKeys[L]=!0:M(L):void 0!==R?M(L):m.add(L):void 0!==R&&m.has(L)?M(L):g.protectedKeys[L]=!0)}g.prevProp=x,g.prevResolvedValues=S,g.isActive&&(h=s(s({},h),S)),i&&t.blockInitialAnimation&&(A=!1),A&&!P&&p.push.apply(p,l([],f(w.map((function(t){return{animation:t,options:s({type:o},n)}})))))},x=0;x<no;x++)g(x);if(o=s({},h),m.size){var b={};m.forEach((function(n){var e=t.getBaseTarget(n);void 0!==e&&(b[n]=e)})),p.push({animation:b})}var E=Boolean(p.length);return i&&!1===d.initial&&!t.manuallyAnimateOnMount&&(E=!1),i=!1,E?e(p):Promise.resolve()}return{isAnimated:function(t){return void 0!==o[t]},animateChanges:u,setActive:function(n,e,o){var i;return r[n].isActive===e?Promise.resolve():(null===(i=t.variantChildren)||void 0===i||i.forEach((function(t){var r;return null===(r=t.animationState)||void 0===r?void 0:r.setActive(n,e)})),r[n].isActive=e,u(o,n))},setAnimateFunction:function(n){e=n(t)},getState:function(){return r}}}function ro(t){return void 0===t&&(t=!1),{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var oo={animation:fr((function(t){var e=t.visualElement,r=t.animate;e.animationState||(e.animationState=eo(e)),ln(r)&&n.useEffect((function(){return r.subscribe(e)}),[r])})),exit:fr((function(t){var e=t.custom,r=t.visualElement,o=f(A(),2),i=o[0],a=o[1],u=n.useContext(E);n.useEffect((function(){var t,n,o=null===(t=r.animationState)||void 0===t?void 0:t.setActive(gn.Exit,!i,{custom:null!==(n=null==u?void 0:u.custom)&&void 0!==n?n:e});!i&&(null==o||o.then(a))}),[i])}))},io=function(){function t(t,n,e){var r=this,o=(void 0===e?{}:e).transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(r.lastMoveEvent&&r.lastMoveEventInfo){var t=so(r.lastMoveEventInfo,r.history),n=null!==r.startEvent,e=er(t.offset,{x:0,y:0})>=3;if(n||e){var o=t.point,i=Ze().timestamp;r.history.push(s(s({},o),{timestamp:i}));var a=r.handlers,u=a.onStart,c=a.onMove;n||(u&&u(r.lastMoveEvent,t),r.startEvent=r.lastMoveEvent),c&&c(r.lastMoveEvent,t)}}},this.handlePointerMove=function(t,n){r.lastMoveEvent=t,r.lastMoveEventInfo=ao(n,r.transformPagePoint),An(t)&&0===t.buttons?r.handlePointerUp(t,n):Ye.update(r.updatePoint,!0)},this.handlePointerUp=function(t,n){r.end();var e=r.handlers,o=e.onEnd,i=e.onSessionEnd,a=so(ao(n,r.transformPagePoint),r.history);r.startEvent&&o&&o(t,a),i&&i(t,a)},!(wn(t)&&t.touches.length>1)){this.handlers=n,this.transformPagePoint=o;var i=ao(Vn(t),this.transformPagePoint),a=i.point,u=Ze().timestamp;this.history=[s(s({},a),{timestamp:u})];var c=n.onSessionStart;c&&c(t,so(i,this.history)),this.removeListeners=ie(Dn(window,"pointermove",this.handlePointerMove),Dn(window,"pointerup",this.handlePointerUp),Dn(window,"pointercancel",this.handlePointerUp))}}return t.prototype.updateHandlers=function(t){this.handlers=t},t.prototype.end=function(){this.removeListeners&&this.removeListeners(),ze.update(this.updatePoint)},t}();function ao(t,n){return n?{point:n(t.point)}:t}function uo(t,n){return{x:t.x-n.x,y:t.y-n.y}}function so(t,n){var e=t.point;return{point:e,delta:uo(e,fo(n)),offset:uo(e,co(n)),velocity:lo(n,.1)}}function co(t){return t[0]}function fo(t){return t[t.length-1]}function lo(t,n){if(t.length<2)return{x:0,y:0};for(var e=t.length-1,r=null,o=fo(t);e>=0&&(r=t[e],!(o.timestamp-r.timestamp>vr(n)));)e--;if(!r)return{x:0,y:0};var i=(o.timestamp-r.timestamp)/1e3;if(0===i)return{x:0,y:0};var a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function vo(t){return t}function po(t){var n=t.top;return{x:{min:t.left,max:t.right},y:{min:n,max:t.bottom}}}function mo(){return{x:{min:0,max:1},y:{min:0,max:1}}}var ho={translate:0,scale:1,origin:0,originPoint:0};function yo(){return{x:s({},ho),y:s({},ho)}}function go(t){return[t("x"),t("y")]}function xo(t,n,e){return void 0===n&&(n=0),void 0===e&&(e=.01),er(t,n)<e}function bo(t){return t.max-t.min}function Eo(t,n){var e=.5,r=bo(t),o=bo(n);return o>r?e=Kn(n.min,n.max-r,t.min):r>o&&(e=Kn(t.min,t.max-o,n.min)),zn(0,1,e)}function Po(t,n,e,r){void 0===r&&(r=.5),t.origin=r,t.originPoint=Jn(n.min,n.max,t.origin),t.scale=bo(e)/bo(n),xo(t.scale,1,1e-4)&&(t.scale=1),t.translate=Jn(e.min,e.max,t.origin)-t.originPoint,xo(t.translate)&&(t.translate=0)}function Ao(t,n,e,r){Po(t.x,n.x,e.x,wo(r.originX)),Po(t.y,n.y,e.y,wo(r.originY))}function wo(t){return"number"==typeof t?t:.5}function So(t,n,e){t.min=e.min+n.min,t.max=t.min+bo(n)}function Co(t,n,e){var r=n.min,o=n.max;return void 0!==r&&t<r?t=e?Jn(r,t,e.min):Math.max(t,r):void 0!==o&&t>o&&(t=e?Jn(o,t,e.max):Math.min(t,o)),t}function To(t,n,e){return{min:void 0!==n?t.min+n:void 0,max:void 0!==e?t.max+e-(t.max-t.min):void 0}}function Vo(t,n){var e,r=n.min-t.min,o=n.max-t.max;return n.max-n.min<t.max-t.min&&(r=(e=f([o,r],2))[0],o=e[1]),{min:t.min+r,max:t.min+o}}function Mo(t,n,e){return{min:Lo(t,n),max:Lo(t,e)}}function Lo(t,n){var e;return"number"==typeof t?t:null!==(e=t[n])&&void 0!==e?e:0}function Ro(t,n){return po(function(t,n){var e=t.top,r=t.left,o=t.bottom,i=t.right;void 0===n&&(n=vo);var a=n({x:r,y:e}),u=n({x:i,y:o});return{top:a.y,left:a.x,bottom:u.y,right:u.x}}(t.getBoundingClientRect(),n))}var ko=function(t,n){return t.depth-n.depth};function Do(t){return t.projection.isEnabled||t.shouldResetTransform()}function Oo(t,n){void 0===n&&(n=[]);var e=t.parent;return e&&Oo(e,n),Do(t)&&n.push(t),n}function jo(t){if(!t.shouldResetTransform()){var n,e=t.getLayoutState();t.notifyBeforeLayoutMeasure(e.layout),e.isHydrated=!0,e.layout=t.measureViewportBox(),e.layoutCorrected=(n=e.layout,{x:s({},n.x),y:s({},n.y)}),t.notifyLayoutMeasure(e.layout,t.prevViewportBox||e.layout),Ye.update((function(){return t.rebaseProjectionTarget()}))}}function Bo(t){t.shouldResetTransform()||(t.prevViewportBox=t.measureViewportBox(!1),t.rebaseProjectionTarget(!1,t.prevViewportBox))}function Fo(t,n){return{min:n.min-t.min,max:n.max-t.min}}function Uo(t,n){return{x:Fo(t.x,n.x),y:Fo(t.y,n.y)}}function Io(t,n){var e=t.getLayoutId(),r=n.getLayoutId();return e!==r||void 0===r&&t!==n}function Ho(t){var n=t.getProps(),e=n.drag,r=n._dragX;return e&&!r}function Xo(t,n){t.min=n.min,t.max=n.max}function Yo(t,n,e){return e+n*(t-e)}function zo(t,n,e,r,o){return void 0!==o&&(t=Yo(t,o,r)),Yo(t,e,r)+n}function No(t,n,e,r,o){void 0===n&&(n=0),void 0===e&&(e=1),t.min=zo(t.min,n,e,r,o),t.max=zo(t.max,n,e,r,o)}function Wo(t,n){var e=n.x,r=n.y;No(t.x,e.translate,e.scale,e.originPoint),No(t.y,r.translate,r.scale,r.originPoint)}function _o(t,n,e,r){var o=f(r,3),i=o[0],a=o[1],u=o[2];t.min=n.min,t.max=n.max;var s=void 0!==e[u]?e[u]:.5,c=Jn(n.min,n.max,s);No(t,e[i],e[a],c,e.scale)}var qo=["x","scaleX","originX"],Zo=["y","scaleY","originY"];function $o(t,n,e){_o(t.x,n.x,e,qo),_o(t.y,n.y,e,Zo)}function Go(t,n,e,r,o){return t=Yo(t-=n,1/e,r),void 0!==o&&(t=Yo(t,1/o,r)),t}function Ko(t,n,e){var r=f(e,3),o=r[0],i=r[1],a=r[2];!function(t,n,e,r,o){void 0===n&&(n=0),void 0===e&&(e=1),void 0===r&&(r=.5);var i=Jn(t.min,t.max,r)-n;t.min=Go(t.min,n,e,i,o),t.max=Go(t.max,n,e,i,o)}(t,n[o],n[i],n[a],n.scale)}function Jo(t,n){Ko(t.x,n,qo),Ko(t.y,n,Zo)}var Qo=new Set;function ti(t,n,e){t[e]||(t[e]=[]),t[e].push(n)}function ni(t){return Qo.add(t),function(){return Qo.delete(t)}}function ei(){if(Qo.size){var t=0,n=[[]],e=[],r=function(e){return ti(n,e,t)},o=function(n){ti(e,n,t),t++};Qo.forEach((function(n){n(r,o),t=0})),Qo.clear();for(var i=e.length,a=0;a<=i;a++)n[a]&&n[a].forEach(oi),e[a]&&e[a].forEach(oi)}}var ri,oi=function(t){return t()},ii=new WeakMap,ai=function(){function t(t){var n=t.visualElement;this.isDragging=!1,this.currentDirection=null,this.constraints=!1,this.elastic={x:{min:0,max:1},y:{min:0,max:1}},this.props={},this.hasMutatedConstraints=!1,this.cursorProgress={x:.5,y:.5},this.originPoint={},this.openGlobalLock=null,this.panSession=null,this.visualElement=n,this.visualElement.enableLayoutProjection(),ii.set(n,this)}return t.prototype.start=function(t,n){var e=this,r=void 0===n?{}:n,o=r.snapToCursor,i=void 0!==o&&o,a=r.cursorProgress,u=this.props.transformPagePoint;this.panSession=new io(t,{onSessionStart:function(t){var n;e.stopMotion();var r=function(t){return Vn(t,"client")}(t).point;null===(n=e.cancelLayout)||void 0===n||n.call(e),e.cancelLayout=ni((function(t,n){var o=Oo(e.visualElement),u=function(t){var n=[],e=function(t){Do(t)&&n.push(t),t.children.forEach(e)};return t.children.forEach(e),n.sort(ko)}(e.visualElement),s=l(l([],f(o)),f(u)),c=!1;e.isLayoutDrag()&&e.visualElement.lockProjectionTarget(),n((function(){s.forEach((function(t){return t.resetTransform()}))})),t((function(){jo(e.visualElement),u.forEach(jo)})),n((function(){s.forEach((function(t){return t.restoreTransform()})),i&&(c=e.snapToCursor(r))})),t((function(){Boolean(e.getAxisMotionValue("x")&&!e.isExternalDrag())||e.visualElement.rebaseProjectionTarget(!0,e.visualElement.measureViewportBox(!1)),e.visualElement.scheduleUpdateLayoutProjection();var t=e.visualElement.projection;go((function(n){if(!c){var o=t.target[n],i=o.min,u=o.max;e.cursorProgress[n]=a?a[n]:Kn(i,u,r[n])}var s=e.getAxisMotionValue(n);s&&(e.originPoint[n]=s.get())}))})),n((function(){Ne.update(),Ne.preRender(),Ne.render(),Ne.postRender()})),t((function(){return e.resolveDragConstraints()}))}))},onStart:function(t,n){var r,o,i,a=e.props,u=a.drag,s=a.dragPropagation;(!u||s||(e.openGlobalLock&&e.openGlobalLock(),e.openGlobalLock=Un(u),e.openGlobalLock))&&(ei(),e.isDragging=!0,e.currentDirection=null,null===(o=(r=e.props).onDragStart)||void 0===o||o.call(r,t,n),null===(i=e.visualElement.animationState)||void 0===i||i.setActive(gn.Drag,!0))},onMove:function(t,n){var r,o,i,a,u=e.props,s=u.dragPropagation,c=u.dragDirectionLock;if(s||e.openGlobalLock){var f=n.offset;if(c&&null===e.currentDirection)return e.currentDirection=function(t,n){void 0===n&&(n=10);var e=null;Math.abs(t.y)>n?e="y":Math.abs(t.x)>n&&(e="x");return e}(f),void(null!==e.currentDirection&&(null===(o=(r=e.props).onDirectionLock)||void 0===o||o.call(r,e.currentDirection)));e.updateAxis("x",n.point,f),e.updateAxis("y",n.point,f),null===(a=(i=e.props).onDrag)||void 0===a||a.call(i,t,n),ri=t}},onSessionEnd:function(t,n){return e.stop(t,n)}},{transformPagePoint:u})},t.prototype.resolveDragConstraints=function(){var t=this,n=this.props,e=n.dragConstraints,r=n.dragElastic,o=this.visualElement.getLayoutState().layoutCorrected;this.constraints=!!e&&(k(e)?this.resolveRefConstraints(o,e):function(t,n){var e=n.top,r=n.left,o=n.bottom,i=n.right;return{x:To(t.x,r,i),y:To(t.y,e,o)}}(o,e)),this.elastic=function(t){return!1===t?t=0:!0===t&&(t=.35),{x:Mo(t,"left","right"),y:Mo(t,"top","bottom")}}(r),this.constraints&&!this.hasMutatedConstraints&&go((function(n){t.getAxisMotionValue(n)&&(t.constraints[n]=function(t,n){var e={};return void 0!==n.min&&(e.min=n.min-t.min),void 0!==n.max&&(e.max=n.max-t.min),e}(o[n],t.constraints[n]))}))},t.prototype.resolveRefConstraints=function(t,n){var e=this.props,r=e.onMeasureDragConstraints,o=e.transformPagePoint,i=n.current;this.constraintsBox=Ro(i,o);var a=function(t,n){return{x:Vo(t.x,n.x),y:Vo(t.y,n.y)}}(t,this.constraintsBox);if(r){var u=r(function(t){var n=t.x,e=t.y;return{top:e.min,bottom:e.max,left:n.min,right:n.max}}(a));this.hasMutatedConstraints=!!u,u&&(a=po(u))}return a},t.prototype.cancelDrag=function(){var t,n;this.visualElement.unlockProjectionTarget(),null===(t=this.cancelLayout)||void 0===t||t.call(this),this.isDragging=!1,this.panSession&&this.panSession.end(),this.panSession=null,!this.props.dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),null===(n=this.visualElement.animationState)||void 0===n||n.setActive(gn.Drag,!1)},t.prototype.stop=function(t,n){var e,r,o;null===(e=this.panSession)||void 0===e||e.end(),this.panSession=null;var i=this.isDragging;if(this.cancelDrag(),i){var a=n.velocity;this.animateDragEnd(a),null===(o=(r=this.props).onDragEnd)||void 0===o||o.call(r,t,n)}},t.prototype.snapToCursor=function(t){var n=this;return go((function(e){if(ui(e,n.props.drag,n.currentDirection)){var r=n.getAxisMotionValue(e);if(!r)return n.cursorProgress[e]=.5,!0;var o=n.visualElement.getLayoutState().layout,i=o[e].max-o[e].min,a=o[e].min+i/2,u=t[e]-a;n.originPoint[e]=t[e],r.set(u)}})).includes(!0)},t.prototype.updateAxis=function(t,n,e){if(ui(t,this.props.drag,this.currentDirection))return this.getAxisMotionValue(t)?this.updateAxisMotionValue(t,e):this.updateVisualElementAxis(t,n)},t.prototype.updateAxisMotionValue=function(t,n){var e=this.getAxisMotionValue(t);if(n&&e){var r=this.originPoint[t]+n[t],o=this.constraints?Co(r,this.constraints[t],this.elastic[t]):r;e.set(o)}},t.prototype.updateVisualElementAxis=function(t,n){var e,r=this.visualElement.getLayoutState().layout[t],o=r.max-r.min,i=this.cursorProgress[t],a=function(t,n,e,r,o){var i=t-n*e;return r?Co(i,r,o):i}(n[t],o,i,null===(e=this.constraints)||void 0===e?void 0:e[t],this.elastic[t]);this.visualElement.setProjectionTargetAxis(t,a,a+o)},t.prototype.setProps=function(t){var n=t.drag,e=void 0!==n&&n,r=t.dragDirectionLock,o=void 0!==r&&r,i=t.dragPropagation,a=void 0!==i&&i,u=t.dragConstraints,f=void 0!==u&&u,l=t.dragElastic,d=void 0===l?.35:l,v=t.dragMomentum,p=void 0===v||v,m=c(t,["drag","dragDirectionLock","dragPropagation","dragConstraints","dragElastic","dragMomentum"]);this.props=s({drag:e,dragDirectionLock:o,dragPropagation:a,dragConstraints:f,dragElastic:d,dragMomentum:p},m)},t.prototype.getAxisMotionValue=function(t){var n=this.props,e=n.layout,r=n.layoutId,o="_drag"+t.toUpperCase();return this.props[o]?this.props[o]:e||void 0!==r?void 0:this.visualElement.getValue(t,0)},t.prototype.isLayoutDrag=function(){return!this.getAxisMotionValue("x")},t.prototype.isExternalDrag=function(){var t=this.props,n=t._dragX,e=t._dragY;return n||e},t.prototype.animateDragEnd=function(t){var n=this,e=this.props,r=e.drag,o=e.dragMomentum,i=e.dragElastic,a=e.dragTransition,u=function(t,n){void 0===n&&(n=!0);var e,r=t.getProjectionParent();return!!r&&(n?Jo(e=Uo(r.projection.target,t.projection.target),r.getLatestValues()):e=Uo(r.getLayoutState().layout,t.getLayoutState().layout),go((function(n){return t.setProjectionTargetAxis(n,e[n].min,e[n].max,!0)})),!0)}(this.visualElement,this.isLayoutDrag()&&!this.isExternalDrag()),c=this.constraints||{};if(u&&Object.keys(c).length&&this.isLayoutDrag()){var f=this.visualElement.getProjectionParent();if(f){var l=Uo(f.projection.targetFinal,c);go((function(t){var n=l[t],e=n.min,r=n.max;c[t]={min:isNaN(e)?void 0:e,max:isNaN(r)?void 0:r}}))}}var d=go((function(e){var f;if(ui(e,r,n.currentDirection)){var l=null!==(f=null==c?void 0:c[e])&&void 0!==f?f:{},d=i?200:1e6,v=i?40:1e7,p=s(s({type:"inertia",velocity:o?t[e]:0,bounceStiffness:d,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10},a),l);return n.getAxisMotionValue(e)?n.startAxisValueAnimation(e,p):n.visualElement.startLayoutAnimation(e,p,u)}}));return Promise.all(d).then((function(){var t,e;null===(e=(t=n.props).onDragTransitionEnd)||void 0===e||e.call(t)}))},t.prototype.stopMotion=function(){var t=this;go((function(n){var e=t.getAxisMotionValue(n);e?e.stop():t.visualElement.stopLayoutAnimation()}))},t.prototype.startAxisValueAnimation=function(t,n){var e=this.getAxisMotionValue(t);if(e){var r=e.get();return e.set(r),e.set(r),Rr(t,e,0,n)}},t.prototype.scalePoint=function(){var t=this,n=this.props,e=n.drag;if(k(n.dragConstraints)&&this.constraintsBox){this.stopMotion();var r={x:0,y:0};go((function(n){r[n]=Eo(t.visualElement.projection.target[n],t.constraintsBox[n])})),this.updateConstraints((function(){go((function(n){if(ui(n,e,null)){var o=function(t,n,e){var r=t.max-t.min,o=Jn(n.min,n.max-r,e);return{min:o,max:o+r}}(t.visualElement.projection.target[n],t.constraintsBox[n],r[n]),i=o.min,a=o.max;t.visualElement.setProjectionTargetAxis(n,i,a)}}))})),setTimeout(ei,1)}},t.prototype.updateConstraints=function(t){var n=this;this.cancelLayout=ni((function(e,r){var o=Oo(n.visualElement);r((function(){return o.forEach((function(t){return t.resetTransform()}))})),e((function(){return jo(n.visualElement)})),r((function(){return o.forEach((function(t){return t.restoreTransform()}))})),e((function(){n.resolveDragConstraints()})),t&&r(t)}))},t.prototype.mount=function(t){var n=this,e=Dn(t.getInstance(),"pointerdown",(function(t){var e=n.props,r=e.drag,o=e.dragListener;r&&(void 0===o||o)&&n.start(t)})),r=En(window,"resize",(function(){n.scalePoint()})),o=t.onLayoutUpdate((function(){n.isDragging&&n.resolveDragConstraints()})),i=t.prevDragCursor;return i&&this.start(ri,{cursorProgress:i}),function(){null==e||e(),null==r||r(),null==o||o(),n.cancelDrag()}},t}();function ui(t,n,e){return!(!0!==n&&n!==t||null!==e&&e!==t)}var si,ci,fi={pan:fr((function(t){var e=t.onPan,r=t.onPanStart,o=t.onPanEnd,i=t.onPanSessionStart,a=t.visualElement,u=e||r||o||i,s=n.useRef(null),c=n.useContext(g).transformPagePoint,f={onSessionStart:i,onStart:r,onMove:e,onEnd:function(t,n){s.current=null,o&&o(t,n)}};n.useEffect((function(){null!==s.current&&s.current.updateHandlers(f)})),On(a,"pointerdown",u&&function(t){s.current=new io(t,f,{transformPagePoint:c})}),Yn((function(){return s.current&&s.current.end()}))})),drag:fr((function(t){var e=t.dragControls,r=t.visualElement,o=n.useContext(g).transformPagePoint,i=P((function(){return new ai({visualElement:r})}));i.setProps(s(s({},t),{transformPagePoint:o})),n.useEffect((function(){return e&&e.subscribe(i)}),[i]),n.useEffect((function(){return i.mount(r)}),[])}))};function li(t){return"string"==typeof t&&t.startsWith("var(--")}!function(t){t[t.Entering=0]="Entering",t[t.Present=1]="Present",t[t.Exiting=2]="Exiting"}(si||(si={})),t.VisibilityAction=void 0,(ci=t.VisibilityAction||(t.VisibilityAction={}))[ci.Hide=0]="Hide",ci[ci.Show=1]="Show";var di=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function vi(t,n,e){var r=f(function(t){var n=di.exec(t);if(!n)return[,];var e=f(n,3);return[e[1],e[2]]}(t),2),o=r[0],i=r[1];if(o){var a=window.getComputedStyle(n).getPropertyValue(o);return a?a.trim():li(i)?vi(i,n):i}}function pi(t,n){return t/(n.max-n.min)*100}var mi={process:function(t,n,e){var r=e.target;if("string"==typeof t){if(!yt.test(t))return t;t=parseFloat(t)}return pi(t,r.x)+"% "+pi(t,r.y)+"%"}},hi={borderRadius:s(s({},mi),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:mi,borderTopRightRadius:mi,borderBottomLeftRadius:mi,borderBottomRightRadius:mi,boxShadow:{process:function(t,n){var e=n.delta,r=n.treeScale,o=t,i=t.includes("var("),a=[];i&&(t=t.replace(di,(function(t){return a.push(t),"_$css"})));var u=Dt.parse(t);if(u.length>5)return o;var s=Dt.createTransformer(t),c="number"!=typeof u[0]?1:0,f=e.x.scale*r.x,l=e.y.scale*r.y;u[0+c]/=f,u[1+c]/=l;var d=Jn(f,l,.5);"number"==typeof u[2+c]&&(u[2+c]/=d),"number"==typeof u[3+c]&&(u[3+c]/=d);var v=s(u);if(i){var p=0;v=v.replace("_$css",(function(){var t=a[p];return p++,t}))}return v}}},yi=function(n){function e(){var e=null!==n&&n.apply(this,arguments)||this;return e.frameTarget={x:{min:0,max:1},y:{min:0,max:1}},e.currentAnimationTarget={x:{min:0,max:1},y:{min:0,max:1}},e.isAnimating={x:!1,y:!1},e.stopAxisAnimation={x:void 0,y:void 0},e.isAnimatingTree=!1,e.animate=function(n,r,o){void 0===o&&(o={});var i=o.originBox,a=o.targetBox,u=o.visibilityAction,f=o.shouldStackAnimate,l=o.onComplete,d=o.prevParent,v=c(o,["originBox","targetBox","visibilityAction","shouldStackAnimate","onComplete","prevParent"]),p=e.props,m=p.visualElement,h=p.layout;if(!1===f)return e.isAnimatingTree=!1,e.safeToRemove();if(!e.isAnimatingTree||!0===f){f&&(e.isAnimatingTree=!0),r=i||r,n=a||n;var y=!1,g=m.getProjectionParent();if(g){var x=g.prevViewportBox,b=g.getLayoutState().layout;d&&(a&&(b=d.getLayoutState().layout),i&&!Io(d,g)&&d.prevViewportBox&&(x=d.prevViewportBox)),x&&Ai(d,i,a)&&(y=!0,r=Uo(x,r),n=Uo(b,n))}var E=gi(r,n),P=go((function(o){var i,a;if("position"===h){var c=n[o].max-n[o].min;r[o].max=r[o].min+c}if(!m.projection.isTargetLocked)return void 0===u?E?e.animateAxis(o,n[o],r[o],s(s({},v),{isRelative:y})):(null===(a=(i=e.stopAxisAnimation)[o])||void 0===a||a.call(i),m.setProjectionTargetAxis(o,n[o].min,n[o].max,y)):void m.setVisibility(u===t.VisibilityAction.Show)}));return m.syncRender(),Promise.all(P).then((function(){e.isAnimatingTree=!1,l&&l(),m.notifyLayoutAnimationComplete()}))}},e}return u(e,n),e.prototype.componentDidMount=function(){var t=this,n=this.props.visualElement;n.animateMotionValue=Rr,n.enableLayoutProjection(),this.unsubLayoutReady=n.onLayoutUpdate(this.animate),n.layoutSafeToRemove=function(){return t.safeToRemove()},_(hi)},e.prototype.componentWillUnmount=function(){var t=this;this.unsubLayoutReady(),go((function(n){var e,r;return null===(r=(e=t.stopAxisAnimation)[n])||void 0===r?void 0:r.call(e)}))},e.prototype.animateAxis=function(t,n,e,r){var o,i,a=this,u=void 0===r?{}:r,s=u.transition,c=u.isRelative;if(!this.isAnimating[t]||!Ei(n,this.currentAnimationTarget[t])){null===(i=(o=this.stopAxisAnimation)[t])||void 0===i||i.call(o),this.isAnimating[t]=!0;var f=this.props.visualElement,l=this.frameTarget[t],d=f.getProjectionAnimationProgress()[t];d.clearListeners(),d.set(0),d.set(0);var v=function(){var r=d.get()/1e3;!function(t,n,e,r){t.min=Jn(n.min,e.min,r),t.max=Jn(n.max,e.max,r)}(l,e,n,r),f.setProjectionTargetAxis(t,l.min,l.max,c)};v();var p=d.onChange(v);this.stopAxisAnimation[t]=function(){a.isAnimating[t]=!1,d.stop(),p()},this.currentAnimationTarget[t]=n;var m=s||f.getDefaultTransition()||Pi;return Rr("x"===t?"layoutX":"layoutY",d,1e3,m&&Lr(m,"layout")).then(this.stopAxisAnimation[t])}},e.prototype.safeToRemove=function(){var t,n;null===(n=(t=this.props).safeToRemove)||void 0===n||n.call(t)},e.prototype.render=function(){return null},e}(o.Component);function gi(t,n){return!(bi(t)||bi(n)||Ei(t.x,n.x)&&Ei(t.y,n.y))}var xi={min:0,max:0};function bi(t){return Ei(t.x,xi)&&Ei(t.y,xi)}function Ei(t,n){return t.min===n.min&&t.max===n.max}var Pi={duration:.45,ease:[.4,0,.1,1]};function Ai(t,n,e){return t||!t&&!(n||e)}var wi={layoutReady:function(t){return t.notifyLayoutReady()}};function Si(){var t=new Set;return{add:function(n){return t.add(n)},flush:function(n){var e=void 0===n?wi:n,r=e.layoutReady,o=e.parent;ni((function(n,e){var i=Array.from(t).sort(ko),a=o?Oo(o):[];e((function(){l(l([],f(a)),f(i)).forEach((function(t){return t.resetTransform()}))})),n((function(){i.forEach(jo)})),e((function(){a.forEach((function(t){return t.restoreTransform()})),i.forEach(r)})),n((function(){i.forEach((function(t){t.isPresent&&(t.presence=si.Present)}))})),e((function(){Ne.preRender(),Ne.render()})),n((function(){Ye.postRender((function(){return i.forEach(Ci)})),t.clear()}))})),ei()}}}function Ci(t){t.prevViewportBox=t.projection.target}var Ti=n.createContext(Si()),Vi=n.createContext(Si());function Mi(t){return!!t.forceUpdate}var Li=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return u(n,t),n.prototype.componentDidMount=function(){var t=this.props,n=t.syncLayout,e=t.framerSyncLayout,r=t.visualElement;Mi(n)&&n.register(r),Mi(e)&&e.register(r),r.onUnmount((function(){Mi(n)&&n.remove(r),Mi(e)&&e.remove(r)}))},n.prototype.getSnapshotBeforeUpdate=function(){var t=this.props,n=t.syncLayout,e=t.visualElement;return Mi(n)?n.syncUpdate():(Bo(e),n.add(e)),null},n.prototype.componentDidUpdate=function(){var t=this.props.syncLayout;Mi(t)||t.flush()},n.prototype.render=function(){return null},n}(i.default.Component);var Ri={measureLayout:function(t){var e=n.useContext(Ti),r=n.useContext(Vi);return i.default.createElement(Li,s({},t,{syncLayout:e,framerSyncLayout:r}))},layoutAnimation:function(t){var n=f(A(),2)[1];return o.createElement(yi,s({},t,{safeToRemove:n}))}};function ki(){return{isHydrated:!1,layout:{x:{min:0,max:1},y:{min:0,max:1}},layoutCorrected:{x:{min:0,max:1},y:{min:0,max:1}},treeScale:{x:1,y:1},delta:yo(),deltaFinal:yo(),deltaTransform:""}}var Di=ki();function Oi(t,n,e){var r=t.x,o=t.y,i="translate3d("+r.translate/n.x+"px, "+o.translate/n.y+"px, 0) ";if(e){var a=e.rotate,u=e.rotateX,s=e.rotateY;a&&(i+="rotate("+a+") "),u&&(i+="rotateX("+u+") "),s&&(i+="rotateY("+s+") ")}return i+="scale("+r.scale+", "+o.scale+")",e||i!==Bi?i:""}function ji(t){var n=t.deltaFinal;return 100*n.x.origin+"% "+100*n.y.origin+"% 0"}var Bi=Oi(Di.delta,Di.treeScale,{x:1,y:1}),Fi=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","SetAxisTarget","Unmount"];function Ui(t,n,e,r){var o,i,a=t.delta,u=t.layout,s=t.layoutCorrected,c=t.treeScale,f=n.target;i=u,Xo((o=s).x,i.x),Xo(o.y,i.y),function(t,n,e){var r=e.length;if(r){var o,i;n.x=n.y=1;for(var a=0;a<r;a++)i=(o=e[a]).getLayoutState().delta,n.x*=i.x.scale,n.y*=i.y.scale,Wo(t,i),Ho(o)&&$o(t,t,o.getLatestValues())}}(s,c,e),Ao(a,s,f,r)}var Ii=function(){function t(){this.children=[],this.isDirty=!1}return t.prototype.add=function(t){kr(this.children,t),this.isDirty=!0},t.prototype.remove=function(t){Dr(this.children,t),this.isDirty=!0},t.prototype.forEach=function(t){this.isDirty&&this.children.sort(ko),this.isDirty=!1,this.children.forEach(t)},t}();var Hi=function(t){var n=t.treeType,e=void 0===n?"":n,r=t.build,o=t.getBaseTarget,i=t.makeTargetAnimatable,a=t.measureViewportBox,u=t.render,c=t.readValueFromInstance,d=t.resetTransform,v=t.restoreTransform,p=t.removeValueFromRenderState,m=t.sortNodePosition,h=t.scrapeMotionValuesFromProps;return function(t,n){var y=t.parent,g=t.props,x=t.presenceId,b=t.blockInitialAnimation,E=t.visualState;void 0===n&&(n={});var P,A,w,S,C,T,V=E.latestValues,M=E.renderState,L=function(){var t=Fi.map((function(){return new Or})),n={},e={clearAllListeners:function(){return t.forEach((function(t){return t.clear()}))},updatePropListeners:function(t){return Fi.forEach((function(r){var o;null===(o=n[r])||void 0===o||o.call(n);var i="on"+r,a=t[i];a&&(n[r]=e[i](a))}))}};return t.forEach((function(t,n){e["on"+Fi[n]]=function(n){return t.add(n)},e["notify"+Fi[n]]=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.notify.apply(t,l([],f(n)))}})),e}(),R={isEnabled:!1,isHydrated:!1,isTargetLocked:!1,target:{x:{min:0,max:1},y:{min:0,max:1}},targetFinal:{x:{min:0,max:1},y:{min:0,max:1}}},k=R,D=V,j=ki(),B=!1,I=new Map,H=new Map,X={},Y=s({},V);function z(){P&&(J.isProjectionReady()&&($o(k.targetFinal,k.target,D),Ao(j.deltaFinal,j.layoutCorrected,k.targetFinal,V)),N(),u(P,M))}function N(){var t=V;if(S&&S.isActive()){var e=S.getCrossfadeState(J);e&&(t=e)}r(J,M,t,k,j,n,g)}function W(){L.notifyUpdate(V)}function _(){J.layoutTree.forEach(Yi)}var q=h(g);for(var Z in q){var $=q[Z];void 0!==V[Z]&&nt($)&&$.set(V[Z],!1)}var G=F(g),K=U(g),J=s(s({treeType:e,current:null,depth:y?y.depth+1:0,parent:y,children:new Set,path:y?l(l([],f(y.path)),[y]):[],layoutTree:y?y.layoutTree:new Ii,presenceId:x,projection:R,variantChildren:K?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null==y?void 0:y.isMounted()),blockInitialAnimation:b,isMounted:function(){return Boolean(P)},mount:function(t){P=J.current=t,J.pointTo(J),K&&y&&!G&&(T=null==y?void 0:y.addVariantChild(J)),null==y||y.children.add(J)},unmount:function(){ze.update(W),ze.render(z),ze.preRender(J.updateLayoutProjection),H.forEach((function(t){return t()})),J.stopLayoutAnimation(),J.layoutTree.remove(J),null==T||T(),null==y||y.children.delete(J),null==w||w(),L.clearAllListeners()},addVariantChild:function(t){var n,e=J.getClosestVariantNode();if(e)return null===(n=e.variantChildren)||void 0===n||n.add(t),function(){return e.variantChildren.delete(t)}},sortNodePosition:function(t){return m&&e===t.treeType?m(J.getInstance(),t.getInstance()):0},getClosestVariantNode:function(){return K?J:null==y?void 0:y.getClosestVariantNode()},scheduleUpdateLayoutProjection:y?y.scheduleUpdateLayoutProjection:function(){return Ye.preRender(J.updateTreeLayoutProjection,!1,!0)},getLayoutId:function(){return g.layoutId},getInstance:function(){return P},getStaticValue:function(t){return V[t]},setStaticValue:function(t,n){return V[t]=n},getLatestValues:function(){return V},setVisibility:function(t){J.isVisible!==t&&(J.isVisible=t,J.scheduleRender())},makeTargetAnimatable:function(t,n){return void 0===n&&(n=!0),i(J,t,g,n)},addValue:function(t,n){J.hasValue(t)&&J.removeValue(t),I.set(t,n),V[t]=n.get(),function(t,n){var e=n.onChange((function(n){V[t]=n,g.onUpdate&&Ye.update(W,!1,!0)})),r=n.onRenderRequest(J.scheduleRender);H.set(t,(function(){e(),r()}))}(t,n)},removeValue:function(t){var n;I.delete(t),null===(n=H.get(t))||void 0===n||n(),H.delete(t),delete V[t],p(t,M)},hasValue:function(t){return I.has(t)},getValue:function(t,n){var e=I.get(t);return void 0===e&&void 0!==n&&(e=Br(n),J.addValue(t,e)),e},forEachValue:function(t){return I.forEach(t)},readValue:function(t){var e;return null!==(e=V[t])&&void 0!==e?e:c(P,t,n)},setBaseTarget:function(t,n){Y[t]=n},getBaseTarget:function(t){if(o){var n=o(g,t);if(void 0!==n&&!nt(n))return n}return Y[t]}},L),{build:function(){return N(),M},scheduleRender:function(){Ye.render(z,!1,!0)},syncRender:z,setProps:function(t){g=t,L.updatePropListeners(t),X=function(t,n,e){var r;for(var o in n){var i=n[o],a=e[o];if(nt(i))t.addValue(o,i);else if(nt(a))t.addValue(o,Br(i));else if(a!==i)if(t.hasValue(o)){var u=t.getValue(o);!u.hasAnimated&&u.set(i)}else t.addValue(o,Br(null!==(r=t.getStaticValue(o))&&void 0!==r?r:i))}for(var o in e)void 0===n[o]&&t.removeValue(o);return n}(J,h(g),X)},getProps:function(){return g},getVariant:function(t){var n;return null===(n=g.variants)||void 0===n?void 0:n[t]},getDefaultTransition:function(){return g.transition},getVariantContext:function(t){if(void 0===t&&(t=!1),t)return null==y?void 0:y.getVariantContext();if(!G){var n=(null==y?void 0:y.getVariantContext())||{};return void 0!==g.initial&&(n.initial=g.initial),n}for(var e={},r=0;r<Wi;r++){var o=Ni[r],i=g[o];(O(i)||!1===i)&&(e[o]=i)}return e},enableLayoutProjection:function(){R.isEnabled=!0,J.layoutTree.add(J)},lockProjectionTarget:function(){R.isTargetLocked=!0},unlockProjectionTarget:function(){J.stopLayoutAnimation(),R.isTargetLocked=!1},getLayoutState:function(){return j},setCrossfader:function(t){S=t},isProjectionReady:function(){return R.isEnabled&&R.isHydrated&&j.isHydrated},startLayoutAnimation:function(t,n,e){void 0===e&&(e=!1);var r=J.getProjectionAnimationProgress()[t],o=e?R.relativeTarget[t]:R.target[t],i=o.min,a=o.max-i;return r.clearListeners(),r.set(i),r.set(i),r.onChange((function(n){J.setProjectionTargetAxis(t,n,n+a,e)})),J.animateMotionValue(t,r,0,n)},stopLayoutAnimation:function(){go((function(t){return J.getProjectionAnimationProgress()[t].stop()}))},measureViewportBox:function(t){void 0===t&&(t=!0);var e=a(P,n);return t||Jo(e,V),e},getProjectionAnimationProgress:function(){return C||(C={x:Br(0),y:Br(0)}),C},setProjectionTargetAxis:function(t,n,e,r){var o;void 0===r&&(r=!1),r?(R.relativeTarget||(R.relativeTarget={x:{min:0,max:1},y:{min:0,max:1}}),o=R.relativeTarget[t]):(R.relativeTarget=void 0,o=R.target[t]),R.isHydrated=!0,o.min=n,o.max=e,B=!0,L.notifySetAxisTarget()},rebaseProjectionTarget:function(t,n){void 0===n&&(n=j.layout);var e=J.getProjectionAnimationProgress(),r=e.x,o=e.y,i=!(R.relativeTarget||R.isTargetLocked||r.isAnimating()||o.isAnimating());(t||i)&&go((function(t){var e=n[t],r=e.min,o=e.max;J.setProjectionTargetAxis(t,r,o)}))},notifyLayoutReady:function(t){!function(t){var n=t.getProjectionParent();if(n){var e=Uo(n.getLayoutState().layout,t.getLayoutState().layout);go((function(n){t.setProjectionTargetAxis(n,e[n].min,e[n].max,!0)}))}else t.rebaseProjectionTarget()}(J),J.notifyLayoutUpdate(j.layout,J.prevViewportBox||j.layout,t)},resetTransform:function(){return d(J,P,g)},restoreTransform:function(){return v(P,M)},updateLayoutProjection:function(){if(J.isProjectionReady()){var t=j.delta,n=j.treeScale,e=n.x,r=n.y,o=j.deltaTransform;Ui(j,k,J.path,V),B&&J.notifyViewportBoxUpdate(k.target,t),B=!1;var i=Oi(t,n);i===o&&e===n.x&&r===n.y||J.scheduleRender(),j.deltaTransform=i}},updateTreeLayoutProjection:function(){J.layoutTree.forEach(Xi),Ye.preRender(_,!1,!0)},getProjectionParent:function(){if(void 0===A){for(var t=!1,n=J.path.length-1;n>=0;n--){var e=J.path[n];if(e.projection.isEnabled){t=e;break}}A=t}return A},resolveRelativeTargetBox:function(){var t=J.getProjectionParent();if(R.relativeTarget&&t&&(function(t,n){So(t.target.x,t.relativeTarget.x,n.target.x),So(t.target.y,t.relativeTarget.y,n.target.y)}(R,t.projection),Ho(t))){var n=R.target;$o(n,n,t.getLatestValues())}},shouldResetTransform:function(){return Boolean(g._layoutResetTransform)},pointTo:function(t){k=t.projection,D=t.getLatestValues(),null==w||w(),w=ie(t.onSetAxisTarget(J.scheduleUpdateLayoutProjection),t.onLayoutAnimationComplete((function(){var t;J.isPresent?J.presence=si.Present:null===(t=J.layoutSafeToRemove)||void 0===t||t.call(J)})))},isPresent:!0,presence:si.Entering});return J}};function Xi(t){t.resolveRelativeTargetBox()}function Yi(t){t.updateLayoutProjection()}var zi,Ni=l(["initial"],f(Qr)),Wi=Ni.length,_i=new Set(["width","height","top","left","right","bottom","x","y"]),qi=function(t){return _i.has(t)},Zi=function(t,n){t.set(n,!1),t.set(n)},$i=function(t){return t===lt||t===yt};!function(t){t.width="width",t.height="height",t.left="left",t.right="right",t.top="top",t.bottom="bottom"}(zi||(zi={}));var Gi=function(t,n){return parseFloat(t.split(", ")[n])},Ki=function(t,n){return function(e,r){var o=r.transform;if("none"===o||!o)return 0;var i=o.match(/^matrix3d\((.+)\)$/);if(i)return Gi(i[1],n);var a=o.match(/^matrix\((.+)\)$/);return a?Gi(a[1],t):0}},Ji=new Set(["x","y","z"]),Qi=Z.filter((function(t){return!Ji.has(t)}));var ta={width:function(t){var n=t.x;return n.max-n.min},height:function(t){var n=t.y;return n.max-n.min},top:function(t,n){var e=n.top;return parseFloat(e)},left:function(t,n){var e=n.left;return parseFloat(e)},bottom:function(t,n){var e=t.y,r=n.top;return parseFloat(r)+(e.max-e.min)},right:function(t,n){var e=t.x,r=n.left;return parseFloat(r)+(e.max-e.min)},x:Ki(4,13),y:Ki(5,14)},na=function(t,n,e,r){void 0===e&&(e={}),void 0===r&&(r={}),n=s({},n),r=s({},r);var o=Object.keys(n).filter(qi),i=[],a=!1,u=[];if(o.forEach((function(o){var s=t.getValue(o);if(t.hasValue(o)){var c,f=e[o],l=n[o],d=Ir(f);if(dn(l))for(var v=l.length,p=null===l[0]?1:0;p<v;p++)c?Ir(l[p]):c=Ir(l[p]);else c=Ir(l);if(d!==c)if($i(d)&&$i(c)){var m=s.get();"string"==typeof m&&s.set(parseFloat(m)),"string"==typeof l?n[o]=parseFloat(l):Array.isArray(l)&&c===yt&&(n[o]=l.map(parseFloat))}else(null==d?void 0:d.transform)&&(null==c?void 0:c.transform)&&(0===f||0===l)?0===f?s.set(c.transform(f)):n[o]=d.transform(l):(a||(i=function(t){var n=[];return Qi.forEach((function(e){var r=t.getValue(e);void 0!==r&&(n.push([e,r.get()]),r.set(e.startsWith("scale")?1:0))})),n.length&&t.syncRender(),n}(t),a=!0),u.push(o),r[o]=void 0!==r[o]?r[o]:n[o],Zi(s,l))}})),u.length){var c=function(t,n,e){var r=n.measureViewportBox(),o=n.getInstance(),i=getComputedStyle(o),a=i.display,u={top:i.top,left:i.left,bottom:i.bottom,right:i.right,transform:i.transform};"none"===a&&n.setStaticValue("display",t.display||"block"),n.syncRender();var s=n.measureViewportBox();return e.forEach((function(e){var o=n.getValue(e);Zi(o,ta[e](r,u)),t[e]=ta[e](s,i)})),t}(n,t,u);return i.length&&i.forEach((function(n){var e=f(n,2),r=e[0],o=e[1];t.getValue(r).set(o)})),t.syncRender(),{target:c,transitionEnd:r}}return{target:n,transitionEnd:r}};function ea(t,n,e,r){return function(t){return Object.keys(t).some(qi)}(n)?na(t,n,e,r):{target:n,transitionEnd:r}}var ra=function(t,n,e,r){var o=function(t,n,e){var r,o=c(n,[]),i=t.getInstance();if(!(i instanceof HTMLElement))return{target:o,transitionEnd:e};for(var a in e&&(e=s({},e)),t.forEachValue((function(t){var n=t.get();if(li(n)){var e=vi(n,i);e&&t.set(e)}})),o){var u=o[a];if(li(u)){var f=vi(u,i);f&&(o[a]=f,e&&(null!==(r=e[a])&&void 0!==r||(e[a]=u)))}}return{target:o,transitionEnd:e}}(t,n,r);return ea(t,n=o.target,e,r=o.transitionEnd)};var oa={treeType:"dom",readValueFromInstance:function(t,n){if(K(n)){var e=Ar(n);return e&&e.default||0}var r,o=(r=t,window.getComputedStyle(r));return(rt(n)?o.getPropertyValue(n):o[n])||0},sortNodePosition:function(t,n){return 2&t.compareDocumentPosition(n)?1:-1},getBaseTarget:function(t,n){var e;return null===(e=t.style)||void 0===e?void 0:e[n]},measureViewportBox:function(t,n){return Ro(t,n.transformPagePoint)},resetTransform:function(t,n,e){var r=e.transformTemplate;n.style.transform=r?r({},""):"none",t.scheduleRender()},restoreTransform:function(t,n){t.style.transform=n.style.transform},removeValueFromRenderState:function(t,n){var e=n.vars,r=n.style;delete e[t],delete r[t]},makeTargetAnimatable:function(t,n,e,r){var o=e.transformValues;void 0===r&&(r=!0);var i=n.transition,a=n.transitionEnd,u=c(n,["transition","transitionEnd"]),f=qr(u,i||{},t);if(o&&(a&&(a=o(a)),u&&(u=o(u)),f&&(f=o(f))),r){Wr(t,u,f);var l=ra(t,u,f,a);a=l.transitionEnd,u=l.target}return s({transition:i,transitionEnd:a},u)},scrapeMotionValuesFromProps:cn,build:function(t,n,e,r,o,i,a){void 0!==t.isVisible&&(n.style.visibility=t.isVisible?"visible":"hidden");var u=r.isEnabled&&o.isHydrated;Ht(n,e,r,o,i,a.transformTemplate,u?Oi:void 0,u?ji:void 0)},render:an},ia=Hi(oa),aa=Hi(s(s({},oa),{getBaseTarget:function(t,n){return t[n]},readValueFromInstance:function(t,n){var e;return K(n)?(null===(e=Ar(n))||void 0===e?void 0:e.default)||0:(n=un.has(n)?n:on(n),t.getAttribute(n))},scrapeMotionValuesFromProps:fn,build:function(t,n,e,r,o,i,a){var u=r.isEnabled&&o.isHydrated;Qt(n,e,r,o,i,a.transformTemplate,u?Oi:void 0,u?ji:void 0)},render:sn})),ua=function(t,n){return N(t)?aa(n,{enableHardwareAcceleration:!1}):ia(n,{enableHardwareAcceleration:!0})},sa=s(s(s(s({},oo),lr),fi),Ri),ca=Y((function(t,n){return bn(t,n,sa,ua)}));var fa=Y(bn);var la=0;function da(){var t=la;return la++,t}var va=function(t){var e=t.children,r=t.initial,i=t.isPresent,a=t.onExitComplete,u=t.custom,s=t.presenceAffectsLayout,c=P(pa),f=P(da),l=n.useMemo((function(){return{id:f,initial:r,isPresent:i,custom:u,onExitComplete:function(t){c.set(t,!0);var n=!0;c.forEach((function(t){t||(n=!1)})),n&&(null==a||a())},register:function(t){return c.set(t,!1),function(){return c.delete(t)}}}}),s?void 0:[i]);return n.useMemo((function(){c.forEach((function(t,n){return c.set(n,!1)}))}),[i]),o.useEffect((function(){!i&&!c.size&&(null==a||a())}),[i]),o.createElement(E.Provider,{value:l},e)};function pa(){return new Map}function ma(t){return t.key||""}function ha(t,n,e){void 0===e&&(e={});var r=nt(t)?t:Br(t);return Rr("",r,n,e),{stop:function(){return r.stop()}}}function ya(){var t=Br(1),n={lead:void 0,follow:void 0,crossfadeOpacity:!1,preserveFollowOpacity:!1},e=s({},n),r={},o={},i=!1,a=null,u=0;function c(e,r){var o=n.lead,u=n.follow;i=!0,a=null;var c=!1,f=function(){c=!0,o&&o.scheduleRender(),u&&u.scheduleRender()},l=function(){i=!1,a=Ze().timestamp};return r=r&&Lr(r,"crossfade"),ha(t,e,s(s({},r),{onUpdate:f,onComplete:function(){c?l():(t.set(e),Ye.read(l)),f()}}))}function f(){var e,i,a=Ze().timestamp,s=n.lead,c=n.follow;if(a!==u&&s){u=a;var f=s.getLatestValues();Object.assign(r,f);var l=c?c.getLatestValues():n.prevValues;Object.assign(o,l);var d=t.get(),v=null!==(e=f.opacity)&&void 0!==e?e:1,p=null!==(i=null==l?void 0:l.opacity)&&void 0!==i?i:1;n.crossfadeOpacity&&c?(r.opacity=Jn(!1!==c.isVisible?0:p,v,ga(d)),o.opacity=n.preserveFollowOpacity?p:Jn(p,0,xa(d))):c||(r.opacity=Jn(p,v,d)),function(t,n,e,r,o,i){for(var a=0;a<Pa;a++){var u="border"+Ea[a]+"Radius",s=Aa(r,u),c=Aa(e,u);if((void 0!==s||void 0!==c)&&(s||(s=0),c||(c=0),"number"==typeof s&&"number"==typeof c)){var f=Math.max(Jn(s,c,i),0);t[u]=n[u]=f}}if(r.rotate||e.rotate){var l=Jn(r.rotate||0,e.rotate||0,i);t.rotate=n.rotate=l}!o&&e.backgroundColor&&r.backgroundColor&&(t.backgroundColor=n.backgroundColor=ee(r.backgroundColor,e.backgroundColor)(i))}(r,o,f,l||{},Boolean(c),d)}}return{isActive:function(){return r&&(i||Ze().timestamp===a)},fromLead:function(t){return c(0,t)},toLead:function(r){var o=0;return n.prevValues||n.follow?e.lead===n.follow&&e.follow===n.lead&&(o=1-t.get()):o=1,t.set(o),c(1,r)},reset:function(){return t.set(1)},stop:function(){return t.stop()},getCrossfadeState:function(t){return f(),t===n.lead?r:t===n.follow?o:void 0},setOptions:function(t){e=n,n=t,r={},o={}},getLatestValues:function(){return r}}}var ga=ba(0,.5,Ae),xa=ba(.5,.95,ge);function ba(t,n,e){return function(r){return r<t?0:r>n?1:e(Kn(t,n,r))}}var Ea=["TopLeft","TopRight","BottomLeft","BottomRight"],Pa=Ea.length;function Aa(t,n){var e;return null!==(e=t[n])&&void 0!==e?e:t.borderRadius}function wa(){var t,n,e,r=new Set,o={leadIsExiting:!1},i=s({},o),a=ya(),u=!1;return{add:function(t){t.setCrossfader(a),r.add(t),e&&(t.prevDragCursor=e),o.lead||(o.lead=t)},remove:function(t){r.delete(t)},getLead:function(){return o.lead},updateSnapshot:function(){if(o.lead){t=a.isActive()?a.getLatestValues():o.lead.getLatestValues(),n=o.lead.prevViewportBox;var r=ii.get(o.lead);r&&r.isDragging&&(e=r.cursorProgress)}},clearSnapshot:function(){e=n=void 0},updateLeadAndFollow:function(){var n,e,c;i=s({},o);for(var f=Array.from(r),l=f.length;l--;l>=0){var d=f[l];if(e&&(null!=c||(c=d)),null!=e||(e=d),e&&c)break}o.lead=e,o.follow=c,o.leadIsExiting=(null===(n=o.lead)||void 0===n?void 0:n.presence)===si.Exiting,a.setOptions({lead:e,follow:c,prevValues:t,crossfadeOpacity:(null==c?void 0:c.isPresenceRoot)||(null==e?void 0:e.isPresenceRoot)}),o.lead===i.follow||i.lead===o.lead&&i.leadIsExiting===o.leadIsExiting||(u=!0)},animate:function(t,e){var r;if(void 0===e&&(e=!1),t===o.lead){e?t.pointTo(o.lead):t.setVisibility(!0);var i={},s=null===(r=o.follow)||void 0===r?void 0:r.getProjectionParent();if(s&&(i.prevParent=s),t.presence===si.Entering?i.originBox=o.follow?o.follow.prevViewportBox:n:t.presence===si.Exiting&&(i.targetBox=function(){var t;return null===(t=o.follow)||void 0===t?void 0:t.getLayoutState().layout}()),u){u=!1;var c=t.getDefaultTransition();t.presence===si.Entering?a.toLead(c):a.fromLead(c)}t.notifyLayoutReady(i)}else e?o.lead&&t.pointTo(o.lead):t.setVisibility(!1)}}}var Sa=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.children=new Set,n.stacks=new Map,n.hasMounted=!1,n.updateScheduled=!1,n.renderScheduled=!1,n.syncContext=s(s({},Si()),{syncUpdate:function(t){return n.scheduleUpdate(t)},forceUpdate:function(){n.syncContext=s({},n.syncContext),n.scheduleUpdate(!0)},register:function(t){return n.addChild(t)},remove:function(t){return n.removeChild(t)}}),n}return u(n,t),n.prototype.componentDidMount=function(){this.hasMounted=!0},n.prototype.componentDidUpdate=function(){this.startLayoutAnimation()},n.prototype.shouldComponentUpdate=function(){return this.renderScheduled=!0,!0},n.prototype.startLayoutAnimation=function(){var t=this;this.renderScheduled=this.updateScheduled=!1;var n=this.props.type;this.children.forEach((function(t){t.isPresent?t.presence!==si.Entering&&(t.presence=t.presence===si.Exiting?si.Entering:si.Present):t.presence=si.Exiting})),this.updateStacks();var e={layoutReady:function(e){void 0!==e.getLayoutId()?t.getStack(e).animate(e,"crossfade"===n):e.notifyLayoutReady()},parent:this.context.visualElement};this.children.forEach((function(n){return t.syncContext.add(n)})),this.syncContext.flush(e),this.stacks.forEach((function(t){return t.clearSnapshot()}))},n.prototype.updateStacks=function(){this.stacks.forEach((function(t){return t.updateLeadAndFollow()}))},n.prototype.scheduleUpdate=function(t){void 0===t&&(t=!1),!t&&this.updateScheduled||(this.updateScheduled=!0,this.children.forEach((function(t){!function(t){for(var n=!1,e={},r=0;r<q.length;r++){var o="rotate"+q[r];t.hasValue(o)&&0!==t.getStaticValue(o)&&(n=!0,e[o]=t.getStaticValue(o),t.setStaticValue(o,0))}if(n){for(var o in t.syncRender(),e)t.setStaticValue(o,e[o]);t.scheduleRender()}}(t),t.shouldResetTransform()&&t.resetTransform()})),this.children.forEach(Bo),this.stacks.forEach((function(t){return t.updateSnapshot()})),!t&&this.renderScheduled||(this.renderScheduled=!0,this.forceUpdate()))},n.prototype.addChild=function(t){this.children.add(t),this.addToStack(t),t.presence=this.hasMounted?si.Entering:si.Present},n.prototype.removeChild=function(t){this.scheduleUpdate(),this.children.delete(t),this.removeFromStack(t)},n.prototype.addToStack=function(t){var n=this.getStack(t);null==n||n.add(t)},n.prototype.removeFromStack=function(t){var n=this.getStack(t);null==n||n.remove(t)},n.prototype.getStack=function(t){var n=t.getLayoutId();if(void 0!==n)return!this.stacks.has(n)&&this.stacks.set(n,wa()),this.stacks.get(n)},n.prototype.render=function(){return o.createElement(Ti.Provider,{value:this.syncContext},this.props.children)},n.contextType=x,n}(o.Component);function Ca(t){return"function"==typeof t}var Ta=s(s({renderer:ua},oo),lr),Va=s(s(s({},Ta),fi),Ri);function Ma(t){var e=P((function(){return Br(t)}));if(n.useContext(g).isStatic){var r=f(n.useState(t),2)[1];n.useEffect((function(){return e.onChange(r)}),[])}return e}function La(t,e){n.useEffect((function(){if(nt(t))return t.onChange(e)}),[e])}function Ra(t,e){var r=Ma(e()),o=function(){return r.set(e())};return o(),function(t,e){n.useEffect((function(){var n=t.map((function(t){return t.onChange(e)}));return function(){return n.forEach((function(t){return t()}))}}))}(t,(function(){return Ye.update(o,!1,!0)})),r}var ka=function(t){return function(t){return"object"==typeof t&&t.mix}(t)?t.mix:void 0};function Da(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=!Array.isArray(t[0]),r=e?0:-1,o=t[0+r],i=t[1+r],a=t[2+r],u=t[3+r],c=ve(i,a,s({mixer:ka(a[0])},u));return e?c(o):c}function Oa(t,n,e,r){var o="function"==typeof n?n:Da(n,e,r);return Array.isArray(t)?ja(t,o):ja([t],(function(t){var n=f(t,1)[0];return o(n)}))}function ja(t,n){var e=P((function(){return[]}));return Ra(t,(function(){e.length=0;for(var r=t.length,o=0;o<r;o++)e[o]=t[o].get();return n(e)}))}function Ba(){return{scrollX:Br(0),scrollY:Br(0),scrollXProgress:Br(0),scrollYProgress:Br(0)}}function Fa(t,n,e){e.set(t&&n?t/n:0)}function Ua(t,n){var e=function(){var e=n(),r=e.xOffset,o=e.yOffset,i=e.xMaxOffset,a=e.yMaxOffset;t.scrollX.set(r),t.scrollY.set(o),Fa(r,i,t.scrollXProgress),Fa(o,a,t.scrollYProgress)};return e(),e}var Ia;function Ha(){return{xOffset:window.pageXOffset,yOffset:window.pageYOffset,xMaxOffset:document.body.clientWidth-window.innerWidth,yMaxOffset:document.body.clientHeight-window.innerHeight}}var Xa,Ya=!1;function za(){var t=!1,n=[],e=new Set,r={subscribe:function(t){return e.add(t),function(){e.delete(t)}},start:function(r,o){if(t){var i=[];return e.forEach((function(t){i.push(Zr(t,r,{transitionOverride:o}))})),Promise.all(i)}return new Promise((function(t){n.push({animation:[r,o],resolve:t})}))},set:function(t){return e.forEach((function(n){!function(t,n){Array.isArray(n)?Nr(t,n):"string"==typeof n?Nr(t,[n]):zr(t,n)}(n,t)}))},stop:function(){e.forEach((function(t){!function(t){t.forEachValue((function(t){return t.stop()}))}(t)}))},mount:function(){return t=!0,n.forEach((function(t){var n=t.animation,e=t.resolve;r.start.apply(r,l([],f(n))).then(e)})),function(){t=!1,r.stop()}}};return r}var Na=function(){function t(){this.componentControls=new Set}return t.prototype.subscribe=function(t){var n=this;return this.componentControls.add(t),function(){return n.componentControls.delete(t)}},t.prototype.start=function(t,n){this.componentControls.forEach((function(e){e.start(t.nativeEvent||t,n)}))},t.prototype.updateConstraints=function(t){void 0===t&&(t=!0),this.componentControls.forEach((function(t){t.updateConstraints()})),t&&ei()},t}(),Wa=function(){return new Na};var _a=function(){return{}},qa=Hi({build:function(){},measureViewportBox:mo,resetTransform:function(){},restoreTransform:function(){},removeValueFromRenderState:function(){},render:function(){},scrapeMotionValuesFromProps:_a,readValueFromInstance:function(t,n,e){return e.initialState[n]||0},makeTargetAnimatable:function(t,n){var e=n.transition,r=n.transitionEnd,o=c(n,["transition","transitionEnd"]);return Wr(t,o,qr(o,e||{},t)),s({transition:e,transitionEnd:r},o)}}),Za=mn({scrapeMotionValuesFromProps:_a,createRenderState:_a});var $a=function(t){return t>.001?1/t:1e5};t.AnimatePresence=function(t){var e=t.children,r=t.custom,i=t.initial,a=void 0===i||i,u=t.onExitComplete,s=t.exitBeforeEnter,c=t.presenceAffectsLayout,d=void 0===c||c,v=function(){var t=n.useRef(!1),e=f(n.useState(0),2),r=e[0],o=e[1];return Yn((function(){return t.current=!0})),n.useCallback((function(){!t.current&&o(r+1)}),[r])}(),p=n.useContext(Ti);Mi(p)&&(v=p.forceUpdate);var m=n.useRef(!0),h=function(t){var e=[];return n.Children.forEach(t,(function(t){n.isValidElement(t)&&e.push(t)})),e}(e),y=n.useRef(h),g=n.useRef(new Map).current,x=n.useRef(new Set).current;if(function(t,n){t.forEach((function(t){var e=ma(t);n.set(e,t)}))}(h,g),m.current)return m.current=!1,o.createElement(o.Fragment,null,h.map((function(t){return o.createElement(va,{key:ma(t),isPresent:!0,initial:!!a&&void 0,presenceAffectsLayout:d},t)})));for(var b=l([],f(h)),E=y.current.map(ma),P=h.map(ma),A=E.length,w=0;w<A;w++){var S=E[w];-1===P.indexOf(S)?x.add(S):x.delete(S)}return s&&x.size&&(b=[]),x.forEach((function(t){if(-1===P.indexOf(t)){var n=g.get(t);if(n){var e=E.indexOf(t);b.splice(e,0,o.createElement(va,{key:ma(n),isPresent:!1,onExitComplete:function(){g.delete(t),x.delete(t);var n=y.current.findIndex((function(n){return n.key===t}));y.current.splice(n,1),x.size||(y.current=h,v(),u&&u())},custom:r,presenceAffectsLayout:d},n))}}})),b=b.map((function(t){var n=t.key;return x.has(n)?t:o.createElement(va,{key:ma(t),isPresent:!0,presenceAffectsLayout:d},t)})),y.current=b,o.createElement(o.Fragment,null,x.size?b:b.map((function(t){return n.cloneElement(t)})))},t.AnimateSharedLayout=Sa,t.DragControls=Na,t.FlatTree=Ii,t.FramerTreeLayoutContext=Vi,t.LayoutGroupContext=V,t.LazyMotion=function(t){var e=t.children,r=t.features,i=t.strict,a=void 0!==i&&i,u=f(n.useState(!Ca(r)),2)[1],s=n.useRef(void 0);if(!Ca(r)){var l=r.renderer,d=c(r,["renderer"]);s.current=l,p(d)}return n.useEffect((function(){Ca(r)&&r().then((function(t){var n=t.renderer;p(c(t,["renderer"])),s.current=n,u(!0)}))}),[]),o.createElement(m.Provider,{value:{renderer:s.current,strict:a}},e)},t.MotionConfig=function(t){var e=t.children,r=c(t,["children"]);(r=s(s({},n.useContext(g)),r)).isStatic=P((function(){return r.isStatic}));var i="object"==typeof r.transition?r.transition.toString():"",a=n.useMemo((function(){return r}),[i,r.transformPagePoint]);return o.createElement(g.Provider,{value:a},e)},t.MotionConfigContext=g,t.MotionValue=jr,t.PresenceContext=E,t.SharedLayoutContext=Ti,t.addScaleCorrection=_,t.animate=ha,t.animateVisualElement=Zr,t.animationControls=za,t.batchLayout=ni,t.createBatcher=Si,t.createCrossfader=ya,t.createDomMotionComponent=function(t){return X(bn(t,{forwardMotionProps:!1},sa,ua))},t.createMotionComponent=X,t.domAnimation=Ta,t.domMax=Va,t.flushLayout=ei,t.isValidMotionProp=_t,t.m=fa,t.motion=ca,t.motionValue=Br,t.resolveMotionValue=vn,t.snapshotViewportBox=Bo,t.transform=Da,t.useAnimation=function(){var t=P(za);return n.useEffect(t.mount,[]),t},t.useCycle=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=n.useRef(0),o=f(n.useState(t[r.current]),2),i=o[0],a=o[1];return[i,function(n){r.current="number"!=typeof n?rr(0,t.length,r.current+1):n,a(t[r.current])}]},t.useDeprecatedAnimatedState=function(t){var e=f(n.useState(t),2),r=e[0],o=e[1],i=Za({},!1),a=P((function(){return qa({props:{},visualState:i},{initialState:t})}));return n.useEffect((function(){return a.mount({}),a.unmount()}),[]),n.useEffect((function(){a.setProps({onUpdate:function(t){return o(s({},t))}})})),[r,P((function(){return function(t){return Zr(a,t)}}))]},t.useDeprecatedInvertedScale=function(t){var n=Ma(1),e=Ma(1),r=b();return t?(n=t.scaleX||n,e=t.scaleY||e):r&&(n=r.getValue("scaleX",1),e=r.getValue("scaleY",1)),{scaleX:Oa(n,$a),scaleY:Oa(e,$a)}},t.useDomEvent=Pn,t.useDragControls=function(){return P(Wa)},t.useElementScroll=function(t){var n=P(Ba);return L((function(){var e=t.current;if(e){var r=Ua(n,function(t){return function(){return{xOffset:t.scrollLeft,yOffset:t.scrollTop,xMaxOffset:t.scrollWidth-t.offsetWidth,yMaxOffset:t.scrollHeight-t.offsetHeight}}}(e)),o=En(e,"scroll",r,{passive:!0}),i=En(e,"resize",r);return function(){o&&o(),i&&i()}}}),[]),n},t.useIsPresent=function(){return w(n.useContext(E))},t.useMotionTemplate=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];var r=t.length;function o(){for(var e="",o=0;o<r;o++){e+=t[o],n[o]&&(e+=n[o].get())}return e}return Ra(n,o)},t.useMotionValue=Ma,t.usePresence=A,t.useReducedMotion=function(){!Xa&&function(){if(Xa=Br(null),"undefined"!=typeof window)if(window.matchMedia){var t=window.matchMedia("(prefers-reduced-motion)"),n=function(){return Xa.set(t.matches)};t.addListener(n),n()}else Xa.set(!1)}();var t=f(n.useState(Xa.get()),2),e=t[0],r=t[1];return La(Xa,r),e},t.useSpring=function(t,e){void 0===e&&(e={});var r=n.useContext(g).isStatic,o=n.useRef(null),i=Ma(nt(t)?t.get():t);return n.useMemo((function(){return i.attach((function(t,n){return r?n(t):(o.current&&o.current.stop(),o.current=Ke(s(s({from:i.get(),to:t,velocity:i.getVelocity()},e),{onUpdate:n})),i.get())}))}),Object.values(e)),La(t,(function(t){return i.set(parseFloat(t))})),i},t.useTransform=Oa,t.useVelocity=function(t){var e=Ma(t.getVelocity());return n.useEffect((function(){return t.velocityUpdateSubscribers.add((function(t){e.set(t)}))}),[t]),e},t.useViewportScroll=function(){return Ia||(Ia=Ba()),L((function(){!Ya&&function(){if(Ya=!0,"undefined"!=typeof window){var t=Ua(Ia,Ha);En(window,"scroll",t,{passive:!0}),En(window,"resize",t)}}()}),[]),Ia},t.visualElement=Hi,Object.defineProperty(t,"__esModule",{value:!0})}));


/***/ }),

/***/ 8684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(2392);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 2725:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(2392);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 8748:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = void 0;
const detectDomainLocale = (...args)=>{
    if (false) {}
};
exports.detectDomainLocale = detectDomainLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 1210:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 4119:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.hasBasePath = hasBasePath;
var _pathHasPrefix = __webpack_require__(4567);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 8418:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = __webpack_require__(6273);
var _addLocale = __webpack_require__(2725);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(7190);
var _getDomainLocale = __webpack_require__(1210);
var _addBasePath = __webpack_require__(8684);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
// @ts-ignore useTransition exist
const hasUseTransition = typeof _react.default.useTransition !== "undefined";
const prefetched = {};
function prefetch(router, href, as, options) {
    if (true) return;
    if (!(0, _router).isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch((err)=>{
        if (false) {}
    });
    const curLocale = options && typeof options.locale !== "undefined" ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")] = true;
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, startTransition) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // replace state instead of push if prop is present
        router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll
        });
    };
    if (startTransition) {
        startTransition(navigate);
    } else {
        navigate();
    }
}
const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter , legacyBehavior =Boolean(false) !== true  } = props, restProps = _objectWithoutPropertiesLoose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const p = prefetchProp !== false;
    const [, /* isPending */ startTransition] = hasUseTransition ? // @ts-ignore useTransition exists
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react.default.useTransition() : [];
    let router = _react.default.useContext(_routerContext.RouterContext);
    // TODO: type error. Remove `as any`
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    if (appRouter) {
        router = appRouter;
    }
    const { href , as  } = _react.default.useMemo(()=>{
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
        };
    }, [
        router,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    _react.default.useEffect(()=>{
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const isPrefetched = prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick: (e)=>{
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll, locale, appRouter ? startTransition : undefined);
            }
        },
        onMouseEnter: (e)=>{
            if (!legacyBehavior && typeof onMouseEnter === "function") {
                onMouseEnter(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if ((0, _router).isLocalURL(href)) {
                prefetch(router, href, as, {
                    priority: true
                });
            }
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2392:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/")) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 9320:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeBasePath = removeBasePath;
var _hasBasePath = __webpack_require__(4119);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = `/${path}`;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 5776:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeLocale = removeLocale;
var _parsePath = __webpack_require__(8854);
function removeLocale(path, locale) {
    if (false) {}
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map


/***/ }),

/***/ 2669:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;
var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(9565));
var _trustedTypes = __webpack_require__(4991);
var _requestIdleCallback = __webpack_require__(9311);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ("future" in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
function hasPrefetch(link) {
    try {
        link = document.createElement("link");
        return(// with relList.support
        (!!window.MSInputMethodContext && !!document.documentMode) || link.relList.supports("prefetch"));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((res, rej)=>{
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
            return res();
        }
        link = document.createElement("link");
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = undefined;
        link.onload = res;
        link.onerror = rej;
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement("script");
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms));
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
        return {
            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
            css: allFiles.filter((v)=>v.endsWith(".css"))
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src.toString());
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector(`script[src^="${src}"]`)) {
                return Promise.resolve();
            }
            loadedScripts.set(src.toString(), prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && "resolve" in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet)), 
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return "error" in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
                (0, _requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 4991:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === "undefined" && "undefined" !== "undefined") { var ref; }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var ref;
    return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map


/***/ }),

/***/ 7190:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(9311);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const unobserve = (0, _react).useRef();
    const [visible, setVisible] = (0, _react).useState(false);
    const [element, setElement] = (0, _react).useState(null);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (unobserve.current) {
                unobserve.current();
                unobserve.current = undefined;
            }
            if (isDisabled || visible) return;
            if (element && element.tagName) {
                unobserve.current = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
            }
            return ()=>{
                unobserve.current == null ? void 0 : unobserve.current();
                unobserve.current = undefined;
            };
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    }, [
        element,
        isDisabled,
        rootMargin,
        rootRef,
        visible
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 6273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;
var _normalizeTrailingSlash = __webpack_require__(2392);
var _removeTrailingSlash = __webpack_require__(3297);
var _routeLoader = __webpack_require__(2669);
var _script = __webpack_require__(699);
var _isError = _interopRequireWildcard(__webpack_require__(676));
var _denormalizePagePath = __webpack_require__(4406);
var _normalizeLocalePath = __webpack_require__(4014);
var _mitt = _interopRequireDefault(__webpack_require__(8020));
var _utils = __webpack_require__(9232);
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _querystring = __webpack_require__(979);
var _resolveRewrites = _interopRequireDefault(__webpack_require__(6052));
var _routeMatcher = __webpack_require__(4226);
var _routeRegex = __webpack_require__(5052);
var _formatUrl = __webpack_require__(3938);
var _detectDomainLocale = __webpack_require__(8748);
var _parsePath = __webpack_require__(8854);
var _addLocale = __webpack_require__(2725);
var _removeLocale = __webpack_require__(5776);
var _removeBasePath = __webpack_require__(9320);
var _addBasePath = __webpack_require__(8684);
var _hasBasePath = __webpack_require__(4119);
var _getNextPathnameInfo = __webpack_require__(5789);
var _formatNextPathnameInfo = __webpack_require__(299);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function() {
        return cache;
    };
    return cache;
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function buildCancellationError() {
    return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
    });
}
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils).isAbsoluteUrl(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
    } catch (_) {
        return false;
    }
}
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
}
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
}
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formatUrl).formatWithValidation({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omit(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_1) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
function stripOrigin(url) {
    const origin = (0, _utils).getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = (0, _utils).getLocationOrigin();
    const hrefHadOrigin = resolvedHref.startsWith(origin);
    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
    if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts, options) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
            "x-nextjs-data": "1"
        })
    }).then((response)=>{
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
    });
}
const backgroundCache = {};
function fetchNextData({ dataHref , inflightCache , isPrefetch , hasMiddleware , isServerRender , parseJSON , persistCache , isBackground , unstable_skipClientCache  }) {
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    var ref1;
    const getData = (params)=>{
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
            headers: isPrefetch ? {
                purpose: "prefetch"
            } : {},
            method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : "GET"
        }).then((response)=>{
            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
                return {
                    dataHref,
                    response,
                    text: "",
                    json: {}
                };
            }
            return response.text().then((text)=>{
                if (!response.ok) {
                    /**
             * When the data response is a redirect because of a middleware
             * we do not consider it an error. The headers must bring the
             * mapped location.
             * TODO: Change the status code in the handler.
             */ if (hasMiddleware && [
                        301,
                        302,
                        307,
                        308
                    ].includes(response.status)) {
                        return {
                            dataHref,
                            response,
                            text,
                            json: {}
                        };
                    }
                    if (response.status === 404) {
                        var ref;
                        if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
                            return {
                                dataHref,
                                json: {
                                    notFound: SSG_DATA_NOT_FOUND
                                },
                                response,
                                text
                            };
                        }
                        /**
               * If there is a 404 that is not for SSG we used to fail but if
               * there is a middleware we must respond with an empty object.
               * For now we will return the data when there is a middleware.
               * TODO: Update the server to success on these requests.
               */ if (hasMiddleware) {
                            return {
                                dataHref,
                                response,
                                text,
                                json: {}
                            };
                        }
                    }
                    const error = new Error(`Failed to load static props`);
                    /**
             * We should only trigger a server-side transition if this was
             * caused on a client-side transition. Otherwise, we'd get into
             * an infinite loop.
             */ if (!isServerRender) {
                        (0, _routeLoader).markAssetError(error);
                    }
                    throw error;
                }
                return {
                    dataHref,
                    json: parseJSON ? tryToParseAsJSON(text) : {},
                    response,
                    text
                };
            });
        }).then((data)=>{
            if (!persistCache || "production" !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
                delete inflightCache[cacheKey];
            }
            return data;
        }).catch((err)=>{
            delete inflightCache[cacheKey];
            throw err;
        });
    };
    // when skipping client cache we wait to update
    // inflight cache until successful data response
    // this allows racing click event with fetching newer data
    // without blocking navigation when stale data is available
    if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data)=>{
            inflightCache[cacheKey] = Promise.resolve(data);
            return data;
        });
    }
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
    } : {});
}
function tryToParseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return {};
    }
}
function createKey() {
    return Math.random().toString(36).slice(2, 10);
}
function handleHardNavigation({ url , router  }) {
    // ensure we don't trigger a hard navigation to the same
    // URL as this can end up with an infinite refresh
    if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
    }
    window.location.href = url;
}
const getCancelledHandler = ({ route , router  })=>{
    let cancelled = false;
    const cancel = router.clc = ()=>{
        cancelled = true;
    };
    const handleCancelled = ()=>{
        if (cancelled) {
            const error = new Error(`Abort fetching component for route: "${route}"`);
            error.cancelled = true;
            throw error;
        }
        if (cancel === router.clc) {
            router.clc = null;
        }
    };
    return handleCancelled;
};
class Router {
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options = {}) {
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options = {}) {
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
    }
    change(method, url, as, options, forcedScroll) {
        var _this = this;
        return _asyncToGenerator(function*() {
            if (!isLocalURL(url)) {
                handleHardNavigation({
                    url,
                    router: _this
                });
                return false;
            }
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.
            const isQueryUpdating = options._h;
            const shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
            const nextState = _extends({}, _this.state);
            // for static pages with query params in the URL we delay
            // marking the router ready until after the query is updated
            // or a navigation has occurred
            _this.isReady = true;
            const isSsr = _this.isSsr;
            if (!isQueryUpdating) {
                _this.isSsr = false;
            }
            // if a route transition is already in progress before
            // the query updating is triggered ignore query updating
            if (isQueryUpdating && _this.clc) {
                return false;
            }
            const prevLocale = nextState.locale;
            if (false) { var ref; }
            // marking route changes as a navigation start entry
            if (_utils.ST) {
                performance.mark("routeChange");
            }
            const { shallow =false , scroll =true  } = options;
            const routeProps = {
                shallow
            };
            if (_this._inFlightRoute && _this.clc) {
                if (!isSsr) {
                    Router.events.emit("routeChangeError", buildCancellationError(), _this._inFlightRoute, routeProps);
                }
                _this.clc();
                _this.clc = null;
            }
            as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
            const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
            _this._inFlightRoute = as;
            let localeChange = prevLocale !== nextState.locale;
            // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
                nextState.asPath = cleanedAs;
                Router.events.emit("hashChangeStart", as, routeProps);
                // TODO: do we need the resolved href when only a hash change?
                _this.changeState(method, url, as, _extends({}, options, {
                    scroll: false
                }));
                if (scroll) {
                    _this.scrollToHash(cleanedAs);
                }
                try {
                    yield _this.set(nextState, _this.components[nextState.route], null);
                } catch (err) {
                    if ((0, _isError).default(err) && err.cancelled) {
                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                    }
                    throw err;
                }
                Router.events.emit("hashChangeComplete", as, routeProps);
                return true;
            }
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to
            let pages, rewrites;
            try {
                [pages, { __rewrites: rewrites  }] = yield Promise.all([
                    _this.pageLoader.getPageList(),
                    (0, _routeLoader).getClientBuildManifest(),
                    _this.pageLoader.getMiddlewareList(), 
                ]);
            } catch (err1) {
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url
            if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                method = "replaceState";
            }
            // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly
            let resolvedAs = as;
            // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1
            pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname;
            // we don't attempt resolve asPath when we need to execute
            // middleware as the resolving will occur server-side
            const isMiddlewareMatch = yield matchesMiddleware({
                asPath: as,
                locale: nextState.locale,
                router: _this
            });
            if (options.shallow && isMiddlewareMatch) {
                pathname = _this.pathname;
            }
            if (shouldResolveHref && pathname !== "/_error") {
                options._shouldResolveHref = true;
                if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);
                    if (parsed.pathname !== pathname) {
                        pathname = parsed.pathname;
                        parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                        if (!isMiddlewareMatch) {
                            url = (0, _formatUrl).formatWithValidation(parsed);
                        }
                    }
                }
            }
            if (!isLocalURL(as)) {
                if (false) {}
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
            let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            let routeMatch = false;
            if ((0, _isDynamic).isDynamicRoute(route)) {
                const parsedAs1 = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                const asPathname = parsedAs1.pathname;
                const routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                const shouldInterpolate = route === asPathname;
                const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
                if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                    const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param]);
                    if (missingParams.length > 0 && !isMiddlewareMatch) {
                        if (false) {}
                        throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
                    }
                } else if (shouldInterpolate) {
                    as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs1, {
                        pathname: interpolatedAs.result,
                        query: omit(query, interpolatedAs.params)
                    }));
                } else {
                    // Merge params into `query`, overwriting any specified in search
                    Object.assign(query, routeMatch);
                }
            }
            if (!isQueryUpdating) {
                Router.events.emit("routeChangeStart", as, routeProps);
            }
            try {
                var ref2, ref3;
                let routeInfo = yield _this.getRouteInfo({
                    route,
                    pathname,
                    query,
                    as,
                    resolvedAs,
                    routeProps,
                    locale: nextState.locale,
                    isPreview: nextState.isPreview,
                    hasMiddleware: isMiddlewareMatch
                });
                if ("route" in routeInfo && isMiddlewareMatch) {
                    pathname = routeInfo.route || route;
                    route = pathname;
                    query = Object.assign({}, routeInfo.query || {}, query);
                    if (routeMatch && pathname !== parsed.pathname) {
                        Object.keys(routeMatch).forEach((key)=>{
                            if (routeMatch && query[key] === routeMatch[key]) {
                                delete query[key];
                            }
                        });
                    }
                    if ((0, _isDynamic).isDynamicRoute(pathname)) {
                        const prefixedAs = routeInfo.resolvedAs || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, nextState.locale), true);
                        let rewriteAs = prefixedAs;
                        if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                            rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                        }
                        if (false) {}
                        const routeRegex1 = (0, _routeRegex).getRouteRegex(pathname);
                        const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex1)(rewriteAs);
                        if (curRouteMatch) {
                            Object.assign(query, curRouteMatch);
                        }
                    }
                }
                // If the routeInfo brings a redirect we simply apply it.
                if ("type" in routeInfo) {
                    if (routeInfo.type === "redirect-internal") {
                        return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
                    } else {
                        handleHardNavigation({
                            url: routeInfo.destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                }
                let { error , props , __N_SSG , __N_SSP  } = routeInfo;
                const component = routeInfo.Component;
                if (component && component.unstable_scriptLoader) {
                    const scripts = [].concat(component.unstable_scriptLoader());
                    scripts.forEach((script)=>{
                        (0, _script).handleClientScriptLoad(script.props);
                    });
                }
                // handle redirect on client-transition
                if ((__N_SSG || __N_SSP) && props) {
                    if (props.pageProps && props.pageProps.__N_REDIRECT) {
                        // Use the destination from redirect without adding locale
                        options.locale = false;
                        const destination = props.pageProps.__N_REDIRECT;
                        // check if destination is internal (resolves to a page) and attempt
                        // client-navigation if it is falling back to hard navigation if
                        // it's not
                        if (destination.startsWith("/") && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                            const { url: newUrl , as: newAs  } = prepareUrlAs(_this, destination, destination);
                            return _this.change(method, newUrl, newAs, options);
                        }
                        handleHardNavigation({
                            url: destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                    nextState.isPreview = !!props.__N_PREVIEW;
                    // handle SSG data 404
                    if (props.notFound === SSG_DATA_NOT_FOUND) {
                        let notFoundRoute;
                        try {
                            yield _this.fetchComponent("/404");
                            notFoundRoute = "/404";
                        } catch (_) {
                            notFoundRoute = "/_error";
                        }
                        routeInfo = yield _this.getRouteInfo({
                            route: notFoundRoute,
                            pathname: notFoundRoute,
                            query,
                            as,
                            resolvedAs,
                            routeProps: {
                                shallow: false
                            },
                            locale: nextState.locale,
                            isPreview: nextState.isPreview
                        });
                        if ("type" in routeInfo) {
                            throw new Error(`Unexpected middleware effect on /404`);
                        }
                    }
                }
                Router.events.emit("beforeHistoryChange", as, routeProps);
                _this.changeState(method, url, as, options);
                if (isQueryUpdating && pathname === "/_error" && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    props.pageProps.statusCode = 500;
                }
                var _route;
                // shallow routing is only allowed for same page URL changes.
                const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
                var _scroll;
                const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !isValidShallowRoute;
                const resetScroll = shouldScroll ? {
                    x: 0,
                    y: 0
                } : null;
                yield _this.set(_extends({}, nextState, {
                    route,
                    pathname,
                    query,
                    asPath: cleanedAs,
                    isFallback: false
                }), routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch((e)=>{
                    if (e.cancelled) error = error || e;
                    else throw e;
                });
                if (error) {
                    if (!isQueryUpdating) {
                        Router.events.emit("routeChangeError", error, cleanedAs, routeProps);
                    }
                    throw error;
                }
                if (false) {}
                if (!isQueryUpdating) {
                    Router.events.emit("routeChangeComplete", as, routeProps);
                }
                // A hash mark # is the optional last part of a URL
                const hashRegex = /#.+$/;
                if (shouldScroll && hashRegex.test(as)) {
                    _this.scrollToHash(as);
                }
                return true;
            } catch (err11) {
                if ((0, _isError).default(err11) && err11.cancelled) {
                    return false;
                }
                throw err11;
            }
        })();
    }
    changeState(method, url, as, options = {}) {
        if (false) {}
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                key: this._key = method !== "pushState" ? this._key : createKey()
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            "", as);
        }
    }
    handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        var _this = this;
        return _asyncToGenerator(function*() {
            console.error(err);
            if (err.cancelled) {
                // bubble up cancellation errors
                throw err;
            }
            if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
                Router.events.emit("routeChangeError", err, as, routeProps);
                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.
                throw buildCancellationError();
            }
            try {
                let Component;
                let styleSheets;
                let props;
                if (typeof Component === "undefined" || typeof styleSheets === "undefined") {
                    ({ page: Component , styleSheets  } = yield _this.fetchComponent("/_error"));
                }
                const routeInfo = {
                    props,
                    Component,
                    styleSheets,
                    err,
                    error: err
                };
                if (!routeInfo.props) {
                    try {
                        routeInfo.props = yield _this.getInitialProps(Component, {
                            err,
                            pathname,
                            query
                        });
                    } catch (gipErr) {
                        console.error("Error in error page `getInitialProps`: ", gipErr);
                        routeInfo.props = {};
                    }
                }
                return routeInfo;
            } catch (routeInfoErr) {
                return _this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
            }
        })();
    }
    getRouteInfo({ route: requestedRoute , pathname , query , as , resolvedAs , routeProps , locale , hasMiddleware , isPreview , unstable_skipClientCache  }) {
        var _this = this;
        return _asyncToGenerator(function*() {
            /**
     * This `route` binding can change if there's a rewrite
     * so we keep a reference to the original requested route
     * so we can store the cache for it and avoid re-requesting every time
     * for shallow routing purposes.
     */ let route = requestedRoute;
            try {
                var ref, ref4, ref5;
                const handleCancelled = getCancelledHandler({
                    route,
                    router: _this
                });
                let existingInfo = _this.components[route];
                if (routeProps.shallow && existingInfo && _this.route === route) {
                    return existingInfo;
                }
                let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
                const fetchNextDataParams = {
                    dataHref: _this.pageLoader.getDataHref({
                        href: (0, _formatUrl).formatWithValidation({
                            pathname,
                            query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale
                    }),
                    hasMiddleware: true,
                    isServerRender: _this.isSsr,
                    parseJSON: true,
                    inflightCache: _this.sdc,
                    persistCache: !isPreview,
                    isPrefetch: false,
                    unstable_skipClientCache
                };
                const data = yield withMiddlewareEffects({
                    fetchData: ()=>fetchNextData(fetchNextDataParams),
                    asPath: resolvedAs,
                    locale: locale,
                    router: _this
                });
                handleCancelled();
                if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === "redirect-internal" || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === "redirect-external") {
                    return data.effect;
                }
                if ((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === "rewrite") {
                    route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
                    pathname = data.effect.resolvedHref;
                    query = _extends({}, query, data.effect.parsedAs.query);
                    resolvedAs = data.effect.parsedAs.pathname;
                    // Check again the cache with the new destination.
                    existingInfo = _this.components[route];
                    if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
                        // If we have a match with the current route due to rewrite,
                        // we can copy the existing information to the rewritten one.
                        // Then, we return the information along with the matched route.
                        _this.components[requestedRoute] = _extends({}, existingInfo, {
                            route
                        });
                        return _extends({}, existingInfo, {
                            route
                        });
                    }
                    cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
                }
                if (route === "/api" || route.startsWith("/api/")) {
                    handleHardNavigation({
                        url: as,
                        router: _this
                    });
                    return new Promise(()=>{});
                }
                const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res)=>({
                        Component: res.page,
                        styleSheets: res.styleSheets,
                        __N_SSG: res.mod.__N_SSG,
                        __N_SSP: res.mod.__N_SSP,
                        __N_RSC: !!res.mod.__next_rsc__
                    })));
                if (false) {}
                /**
       * For server components, non-SSR pages will have statically optimized
       * flight data in a production build. So only development and SSR pages
       * will always have the real-time generated and streamed flight data.
       */ const useStreamedFlightData = routeInfo.__N_RSC && ( false || routeInfo.__N_SSP);
                const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP || routeInfo.__N_RSC;
                const { props  } = yield _this._getData(_asyncToGenerator(function*() {
                    if (shouldFetchData && !useStreamedFlightData) {
                        const { json  } = data || (yield fetchNextData({
                            dataHref: _this.pageLoader.getDataHref({
                                href: (0, _formatUrl).formatWithValidation({
                                    pathname,
                                    query
                                }),
                                asPath: resolvedAs,
                                locale
                            }),
                            isServerRender: _this.isSsr,
                            parseJSON: true,
                            inflightCache: _this.sdc,
                            persistCache: !isPreview,
                            isPrefetch: false,
                            unstable_skipClientCache
                        }));
                        return {
                            props: json
                        };
                    }
                    return {
                        headers: {},
                        props: yield _this.getInitialProps(routeInfo.Component, {
                            pathname,
                            query,
                            asPath: as,
                            locale,
                            locales: _this.locales,
                            defaultLocale: _this.defaultLocale
                        })
                    };
                }));
                // Only bust the data cache for SSP routes although
                // middleware can skip cache per request with
                // x-middleware-cache: no-cache as well
                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
                    const cacheKey = new URL(fetchNextDataParams.dataHref, window.location.href).href;
                    delete _this.sdc[cacheKey];
                }
                // we kick off a HEAD request in the background
                // when a non-prefetch request is made to signal revalidation
                if (!_this.isPreview && routeInfo.__N_SSG && "production" !== "development") {
                    fetchNextData(Object.assign({}, fetchNextDataParams, {
                        isBackground: true,
                        persistCache: false,
                        inflightCache: backgroundCache
                    })).catch(()=>{});
                }
                let flightInfo;
                if (routeInfo.__N_RSC) {
                    flightInfo = {
                        __flight__: useStreamedFlightData ? (yield _this._getData(()=>_this._getFlightData((0, _formatUrl).formatWithValidation({
                                query: _extends({}, query, {
                                    __flight__: "1"
                                }),
                                pathname: (0, _isDynamic).isDynamicRoute(route) ? interpolateAs(pathname, (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs).pathname, query).result : pathname
                            })))).data : props.__flight__
                    };
                }
                props.pageProps = Object.assign({}, props.pageProps, flightInfo);
                routeInfo.props = props;
                routeInfo.route = route;
                routeInfo.query = query;
                routeInfo.resolvedAs = resolvedAs;
                _this.components[route] = routeInfo;
                // If the route was rewritten in the process of fetching data,
                // we update the cache to allow hitting the same data for shallow requests.
                if (route !== requestedRoute) {
                    _this.components[requestedRoute] = _extends({}, routeInfo, {
                        route
                    });
                }
                return routeInfo;
            } catch (err) {
                return _this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
            }
        })();
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === "" || hash === "top") {
            window.scrollTo(0, 0);
            return;
        }
        // Decode hash to make non-latin anchor works.
        const rawHash = decodeURIComponent(hash);
        // First we check if the element by id is found
        const idEl = document.getElementById(rawHash);
        if (idEl) {
            idEl.scrollIntoView();
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
            nameEl.scrollIntoView();
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ prefetch(url, asPath = url, options = {}) {
        var _this = this;
        return _asyncToGenerator(function*() {
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            if (false) {}
            const pages = yield _this.pageLoader.getPageList();
            let resolvedAs = asPath;
            const locale = typeof options.locale !== "undefined" ? options.locale || undefined : _this.locale;
            const isMiddlewareMatch = yield matchesMiddleware({
                asPath: asPath,
                locale: locale,
                router: _this
            });
            if (false) {}
            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
            if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
                if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                }
            }
            // Prefetch is not supported in development mode because it would trigger on-demand-entries
            if (false) {}
            // TODO: if the route middleware's data request
            // resolves to is not an SSG route we should bust the cache
            // but we shouldn't allow prefetch to keep triggering
            // requests for SSP pages
            const data = yield withMiddlewareEffects({
                fetchData: ()=>fetchNextData({
                        dataHref: _this.pageLoader.getDataHref({
                            href: (0, _formatUrl).formatWithValidation({
                                pathname,
                                query
                            }),
                            skipInterpolation: true,
                            asPath: resolvedAs,
                            locale
                        }),
                        hasMiddleware: true,
                        isServerRender: _this.isSsr,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true
                    }),
                asPath: asPath,
                locale: locale,
                router: _this
            });
            /**
     * If there was a rewrite we apply the effects of the rewrite on the
     * current parameters for the prefetch.
     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
                parsed.pathname = data.effect.resolvedHref;
                pathname = data.effect.resolvedHref;
                query = _extends({}, query, data.effect.parsedAs.query);
                resolvedAs = data.effect.parsedAs.pathname;
                url = (0, _formatUrl).formatWithValidation(parsed);
            }
            /**
     * If there is a redirect to an external destination then we don't have
     * to prefetch content as it will be unused.
     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
                return;
            }
            const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            yield Promise.all([
                _this.pageLoader._isSsg(route).then((isSsg)=>{
                    return isSsg ? fetchNextData({
                        dataHref: (data == null ? void 0 : data.dataHref) || _this.pageLoader.getDataHref({
                            href: url,
                            asPath: resolvedAs,
                            locale: locale
                        }),
                        isServerRender: false,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true,
                        unstable_skipClientCache: options.unstable_skipClientCache || options.priority
                    }).then(()=>false) : false;
                }),
                _this.pageLoader[options.priority ? "loadPage" : "prefetch"](route), 
            ]);
        })();
    }
    fetchComponent(route) {
        var _this = this;
        return _asyncToGenerator(function*() {
            const handleCancelled = getCancelledHandler({
                route,
                router: _this
            });
            try {
                const componentResult = yield _this.pageLoader.loadPage(route);
                handleCancelled();
                return componentResult;
            } catch (err) {
                handleCancelled();
                throw err;
            }
        })();
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData({
            dataHref,
            isServerRender: true,
            parseJSON: false,
            inflightCache: this.sdc,
            persistCache: false,
            isPrefetch: false
        }).then(({ text  })=>({
                data: text
            }));
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview , isRsc  }){
        // Server Data Cache
        this.sdc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e)=>{
            const { isFirstPopStateEvent  } = this;
            this.isFirstPopStateEvent = false;
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
                    pathname: (0, _addBasePath).addBasePath(pathname),
                    query
                }), (0, _utils).getURL());
                return;
            }
            // __NA is used to identify if the history entry can be handled by the app-router.
            if (state.__NA) {
                window.location.reload();
                return;
            }
            if (!state.__N) {
                return;
            }
            // Safari fires popstateevent when reopening the browser.
            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
                return;
            }
            let forcedScroll;
            const { url , as , options , key  } = state;
            if (false) {}
            this._key = key;
            const { pathname: pathname1  } = (0, _parseRelativeUrl).parseRelativeUrl(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname1 === (0, _addBasePath).addBasePath(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change("replaceState", url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale,
                // @ts-ignore internal value not exposed on types
                _h: 0
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname1 !== "/_error") {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
                __N_RSC: !!isRsc
            };
        }
        this.components["/_app"] = {
            Component: App,
            styleSheets: []
        };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath =  false || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname: pathname1,
            query: query1,
            asPath: autoExportDynamic ? pathname1 : as1,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (false) {}
    }
}
Router.events = (0, _mitt).default();
function matchesMiddleware(options) {
    return Promise.resolve(options.router.pageLoader.getMiddlewareList()).then((items)=>{
        const { pathname: asPathname  } = (0, _parsePath).parsePath(options.asPath);
        const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
        return !!(items == null ? void 0 : items.some(([regex, ssr])=>{
            return !ssr && new RegExp(regex).test((0, _addLocale).addLocale(cleanedAs, options.locale));
        }));
    });
}
function withMiddlewareEffects(options) {
    return matchesMiddleware(options).then((matches)=>{
        if (matches && options.fetchData) {
            return options.fetchData().then((data)=>getMiddlewareData(data.dataHref, data.response, options).then((effect)=>({
                        dataHref: data.dataHref,
                        json: data.json,
                        response: data.response,
                        text: data.text,
                        effect
                    }))).catch((_err)=>{
                /**
           * TODO: Revisit this in the future.
           * For now we will not consider middleware data errors to be fatal.
           * maybe we should revisit in the future.
           */ return null;
            });
        }
        return null;
    });
}
function getMiddlewareData(source, response, options) {
    const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
            locales: options.router.locales
        },
        trailingSlash: Boolean(false)
    };
    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
    const matchedPath = response.headers.get("x-matched-path");
    if (!rewriteTarget && !(matchedPath == null ? void 0 : matchedPath.includes("__next_data_catchall"))) {
        rewriteTarget = matchedPath;
    }
    if (rewriteTarget) {
        if (rewriteTarget.startsWith("/")) {
            const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
            const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
                nextConfig,
                parseData: true
            });
            const fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
            return Promise.all([
                options.router.pageLoader.getPageList(),
                (0, _routeLoader).getClientBuildManifest(), 
            ]).then(([pages, { __rewrites: rewrites  }])=>{
                let as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
                if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
                    const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
                        parseData: true
                    });
                    as = (0, _addBasePath).addBasePath(parsedSource.pathname);
                    parsedRewriteTarget.pathname = as;
                }
                if (false) {}
                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
                if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
                    const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
                    Object.assign(parsedRewriteTarget.query, matches || {});
                }
                return {
                    type: "rewrite",
                    parsedAs: parsedRewriteTarget,
                    resolvedHref
                };
            });
        }
        const src = (0, _parsePath).parsePath(source);
        const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
            nextConfig,
            parseData: true
        }), {
            defaultLocale: options.router.defaultLocale,
            buildId: ""
        }));
        return Promise.resolve({
            type: "redirect-external",
            destination: `${pathname}${src.query}${src.hash}`
        });
    }
    const redirectTarget = response.headers.get("x-nextjs-redirect");
    if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
            const src1 = (0, _parsePath).parsePath(redirectTarget);
            const pathname1 = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src1.pathname, {
                nextConfig,
                parseData: true
            }), {
                defaultLocale: options.router.defaultLocale,
                buildId: ""
            }));
            return Promise.resolve({
                type: "redirect-internal",
                newAs: `${pathname1}${src1.query}${src1.hash}`,
                newUrl: `${pathname1}${src1.query}${src1.hash}`
            });
        }
        return Promise.resolve({
            type: "redirect-external",
            destination: redirectTarget
        });
    }
    return Promise.resolve({
        type: "next"
    });
}
exports["default"] = Router; //# sourceMappingURL=router.js.map


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(8418)


/***/ })

};
;