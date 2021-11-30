/* @preserve
 * Leaflet 1.6.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";var i=Object.freeze;function h(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++)for(i in o=arguments[e])t[i]=o[i];return t}Object.freeze=function(t){return t};var s=Object.create||function(t){return e.prototype=t,new e};function e(){}function a(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}var n=0;function u(t){return t._leaflet_id=t._leaflet_id||++n,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function r(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function l(){return!1}function c(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function _(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function d(t){return _(t).split(/\s+/)}function p(t,i){for(var e in t.hasOwnProperty("options")||(t.options=t.options?s(t.options):{}),i)t.options[e]=i[e];return t.options}function m(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}var f=/\{ *([\w_-]+) *\}/g;function g(t,n){return t.replace(f,function(t,i){var e=n[i];if(void 0===e)throw new Error("No value provided for variable "+t);return"function"==typeof e&&(e=e(n)),e})}var v=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function y(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}var x="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function w(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var P=0;function b(t){var i=+new Date,e=Math.max(0,16-(i-P));return P=i+e,window.setTimeout(t,e)}var T=window.requestAnimationFrame||w("RequestAnimationFrame")||b,z=window.cancelAnimationFrame||w("CancelAnimationFrame")||w("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function M(t,i,e){if(!e||T!==b)return T.call(window,a(t,i));t.call(i)}function C(t){t&&z.call(window,t)}var S=(Object.freeze||Object)({freeze:i,extend:h,create:s,bind:a,lastId:n,stamp:u,throttle:o,wrapNum:r,falseFn:l,formatNum:c,trim:_,splitWords:d,setOptions:p,getParamString:m,template:g,isArray:v,indexOf:y,emptyImageUrl:x,requestFn:T,cancelFn:z,requestAnimFrame:M,cancelAnimFrame:C});function E(){}E.extend=function(t){function i(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()}var e=i.__super__=this.prototype,n=s(e);for(var o in(n.constructor=i).prototype=n,this)this.hasOwnProperty(o)&&"prototype"!==o&&"__super__"!==o&&(i[o]=this[o]);return t.statics&&(h(i,t.statics),delete t.statics),t.includes&&(function(t){if("undefined"==typeof L||!L||!L.Mixin)return;t=v(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}(t.includes),h.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=h(s(n.options),t.options)),h(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){e.callInitHooks&&e.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=n._initHooks.length;t<i;t++)n._initHooks[t].call(this)}},i},E.include=function(t){return h(this.prototype,t),this},E.mergeOptions=function(t){return h(this.prototype.options,t),this},E.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var Z={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=d(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var r=n[o];if(r.ctx===e&&r.fn===i)return r.fn=l,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=l;delete this._events[t]}},fire:function(t,i,e){if(!this.listens(t,e))return this;var n=h({},i,{type:t,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var o=this._events[t];if(o){this._firingCount=this._firingCount+1||1;for(var s=0,r=o.length;s<r;s++){var a=o[s];a.fn.call(a.ctx||this,n)}this._firingCount--}}return e&&this._propagateEvent(n),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,e){if("object"==typeof t){for(var n in t)this.once(n,t[n],i);return this}var o=a(function(){this.off(t,i,e).off(t,o,e)},this);return this.on(t,i,e).on(t,o,e)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[u(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[u(t)],this},_propagateEvent:function(t){for(var i in this._eventParents)this._eventParents[i].fire(t.type,h({layer:t.target,propagatedFrom:t.target},t),!0)}};Z.addEventListener=Z.on,Z.removeEventListener=Z.clearAllEventListeners=Z.off,Z.addOneTimeEventListener=Z.once,Z.fireEvent=Z.fire,Z.hasEventListeners=Z.listens;var k=E.extend(Z);function B(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}var A=Math.trunc||function(t){return 0<t?Math.floor(t):Math.ceil(t)};function I(t,i,e){return t instanceof B?t:v(t)?new B(t[0],t[1]):null==t?t:"object"==typeof t&&"x"in t&&"y"in t?new B(t.x,t.y):new B(t,i,e)}function O(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function R(t,i){return!t||t instanceof O?t:new O(t,i)}function N(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function D(t,i){return t instanceof N?t:new N(t,i)}function j(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function W(t,i,e){return t instanceof j?t:v(t)&&"object"!=typeof t[0]?3===t.length?new j(t[0],t[1],t[2]):2===t.length?new j(t[0],t[1]):null:null==t?t:"object"==typeof t&&"lat"in t?new j(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new j(t,i,e)}B.prototype={clone:function(){return new B(this.x,this.y)},add:function(t){return this.clone()._add(I(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(I(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new B(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new B(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=A(this.x),this.y=A(this.y),this},distanceTo:function(t){var i=(t=I(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=I(t)).x===this.x&&t.y===this.y},contains:function(t){return t=I(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+c(this.x)+", "+c(this.y)+")"}},O.prototype={extend:function(t){return t=I(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new B((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new B(this.min.x,this.max.y)},getTopRight:function(){return new B(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof B?I(t):R(t))instanceof O?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=R(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},N.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof j)e=i=t;else{if(!(t instanceof N))return t?this.extend(W(t)||D(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new j(i.lat,i.lng),this._northEast=new j(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new N(new j(i.lat-n,i.lng-o),new j(e.lat+n,e.lng+o))},getCenter:function(){return new j((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new j(this.getNorth(),this.getWest())},getSouthEast:function(){return new j(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof j||"lat"in t?W(t):D(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof N?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=D(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=D(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}};var H,F={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new O(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!(j.prototype={equals:function(t,i){return!!t&&(t=W(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+c(this.lat,t)+", "+c(this.lng,t)+")"},distanceTo:function(t){return U.distance(this,W(t))},wrap:function(){return U.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return D([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new j(this.lat,this.lng,this.alt)}}),wrapLatLng:function(t){var i=this.wrapLng?r(t.lng,this.wrapLng,!0):t.lng;return new j(this.wrapLat?r(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0==n&&0==o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new N(new j(s.lat-n,s.lng-o),new j(r.lat-n,r.lng-o))}},U=h({},F,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),V=6378137,q={R:V,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new B(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new j((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:(H=V*Math.PI,new O([-H,-H],[H,H]))};function G(t,i,e,n){if(v(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function K(t,i,e,n){return new G(t,i,e,n)}G.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new B((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var Y,X=h({},U,{code:"EPSG:3857",projection:q,transformation:(Y=.5/(Math.PI*q.R),K(Y,.5,-Y,.5))}),J=h({},X,{code:"EPSG:900913"});function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Q(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)h+=(n?"L":"M")+(a=r[n]).x+" "+a.y;h+=i?Zt?"z":"x":""}return h||"M0 0"}var tt=document.documentElement.style,it="ActiveXObject"in window,et=it&&!document.addEventListener,nt="msLaunchUri"in navigator&&!("documentMode"in document),ot=Bt("webkit"),st=Bt("android"),rt=Bt("android 2")||Bt("android 3"),at=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ht=st&&Bt("Google")&&at<537&&!("AudioNode"in window),ut=!!window.opera,lt=Bt("chrome"),ct=Bt("gecko")&&!ot&&!ut&&!it,_t=!lt&&Bt("safari"),dt=Bt("phantom"),pt="OTransition"in tt,mt=0===navigator.platform.indexOf("Win"),ft=it&&"transition"in tt,gt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rt,vt="MozPerspective"in tt,yt=!window.L_DISABLE_3D&&(ft||gt||vt)&&!pt&&!dt,xt="undefined"!=typeof orientation||Bt("mobile"),wt=xt&&ot,Pt=xt&&gt,Lt=!window.PointerEvent&&window.MSPointerEvent,bt=!(ot||!window.PointerEvent&&!Lt),Tt=!window.L_NO_TOUCH&&(bt||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),zt=xt&&ut,Mt=xt&&ct,Ct=1<(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI),St=function(){var t=!1;try{var i=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",l,i),window.removeEventListener("testPassiveEventSupport",l,i)}catch(t){}return t},Et=!!document.createElement("canvas").getContext,Zt=!(!document.createElementNS||!$("svg").createSVGRect),kt=!Zt&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}();function Bt(t){return 0<=navigator.userAgent.toLowerCase().indexOf(t)}var At=(Object.freeze||Object)({ie:it,ielt9:et,edge:nt,webkit:ot,android:st,android23:rt,androidStock:ht,opera:ut,chrome:lt,gecko:ct,safari:_t,phantom:dt,opera12:pt,win:mt,ie3d:ft,webkit3d:gt,gecko3d:vt,any3d:yt,mobile:xt,mobileWebkit:wt,mobileWebkit3d:Pt,msPointer:Lt,pointer:bt,touch:Tt,mobileOpera:zt,mobileGecko:Mt,retina:Ct,passiveEvents:St,canvas:Et,svg:Zt,vml:kt}),It=Lt?"MSPointerDown":"pointerdown",Ot=Lt?"MSPointerMove":"pointermove",Rt=Lt?"MSPointerUp":"pointerup",Nt=Lt?"MSPointerCancel":"pointercancel",Dt=["INPUT","SELECT","OPTION"],jt={},Wt=!1,Ht=0;function Ft(t,i,e,n){return"touchstart"===i?function(t,i,e){var n=a(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(Dt.indexOf(t.target.tagName)<0))return;ji(t)}Gt(t,i)});t["_leaflet_touchstart"+e]=n,t.addEventListener(It,n,!1),Wt||(document.documentElement.addEventListener(It,Ut,!0),document.documentElement.addEventListener(Ot,Vt,!0),document.documentElement.addEventListener(Rt,qt,!0),document.documentElement.addEventListener(Nt,qt,!0),Wt=!0)}(t,e,n):"touchmove"===i?function(t,i,e){function n(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&Gt(t,i)}t["_leaflet_touchmove"+e]=n,t.addEventListener(Ot,n,!1)}(t,e,n):"touchend"===i&&function(t,i,e){function n(t){Gt(t,i)}t["_leaflet_touchend"+e]=n,t.addEventListener(Rt,n,!1),t.addEventListener(Nt,n,!1)}(t,e,n),this}function Ut(t){jt[t.pointerId]=t,Ht++}function Vt(t){jt[t.pointerId]&&(jt[t.pointerId]=t)}function qt(t){delete jt[t.pointerId],Ht--}function Gt(t,i){for(var e in t.touches=[],jt)t.touches.push(jt[e]);t.changedTouches=[t],i(t)}var Kt=Lt?"MSPointerDown":bt?"pointerdown":"touchstart",Yt=Lt?"MSPointerUp":bt?"pointerup":"touchend",Xt="_leaflet_";function Jt(t,o,i){var s,r,a=!1;function e(t){var i;if(bt){if(!nt||"mouse"===t.pointerType)return;i=Ht}else i=t.touches.length;if(!(1<i)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=0<n&&n<=250,s=e}}function n(t){if(a&&!r.cancelBubble){if(bt){if(!nt||"mouse"===t.pointerType)return;var i,e,n={};for(e in r)i=r[e],n[e]=i&&i.bind?i.bind(r):i;r=n}r.type="dblclick",r.button=0,o(r),s=null}}return t[Xt+Kt+i]=e,t[Xt+Yt+i]=n,t[Xt+"dblclick"+i]=o,t.addEventListener(Kt,e,!!St&&{passive:!1}),t.addEventListener(Yt,n,!!St&&{passive:!1}),t.addEventListener("dblclick",o,!1),this}function $t(t,i){var e=t[Xt+Kt+i],n=t[Xt+Yt+i],o=t[Xt+"dblclick"+i];return t.removeEventListener(Kt,e,!!St&&{passive:!1}),t.removeEventListener(Yt,n,!!St&&{passive:!1}),nt||t.removeEventListener("dblclick",o,!1),this}var Qt,ti,ii,ei,ni,oi=xi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),si=xi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ri="webkitTransition"===si||"OTransition"===si?si+"End":"transitionend";function ai(t){return"string"==typeof t?document.getElementById(t):t}function hi(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function ui(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function li(t){var i=t.parentNode;i&&i.removeChild(t)}function ci(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function _i(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function di(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function pi(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=vi(t);return 0<e.length&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function mi(t,i){if(void 0!==t.classList)for(var e=d(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!pi(t,i)){var s=vi(t);gi(t,(s?s+" ":"")+i)}}function fi(t,i){void 0!==t.classList?t.classList.remove(i):gi(t,_((" "+vi(t)+" ").replace(" "+i+" "," ")))}function gi(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function vi(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function yi(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&function(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}(t,i)}function xi(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function wi(t,i,e){var n=i||new B(0,0);t.style[oi]=(ft?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function Pi(t,i){t._leaflet_pos=i,yt?wi(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Li(t){return t._leaflet_pos||new B(0,0)}if("onselectstart"in document)Qt=function(){ki(window,"selectstart",ji)},ti=function(){Ai(window,"selectstart",ji)};else{var bi=xi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Qt=function(){if(bi){var t=document.documentElement.style;ii=t[bi],t[bi]="none"}},ti=function(){bi&&(document.documentElement.style[bi]=ii,ii=void 0)}}function Ti(){ki(window,"dragstart",ji)}function zi(){Ai(window,"dragstart",ji)}function Mi(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Ci(),ni=(ei=t).style.outline,t.style.outline="none",ki(window,"keydown",Ci))}function Ci(){ei&&(ei.style.outline=ni,ni=ei=void 0,Ai(window,"keydown",Ci))}function Si(t){for(;!((t=t.parentNode).offsetWidth&&t.offsetHeight||t===document.body););return t}function Ei(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}var Zi=(Object.freeze||Object)({TRANSFORM:oi,TRANSITION:si,TRANSITION_END:ri,get:ai,getStyle:hi,create:ui,remove:li,empty:ci,toFront:_i,toBack:di,hasClass:pi,addClass:mi,removeClass:fi,setClass:gi,getClass:vi,setOpacity:yi,testProp:xi,setTransform:wi,setPosition:Pi,getPosition:Li,disableTextSelection:Qt,enableTextSelection:ti,disableImageDrag:Ti,enableImageDrag:zi,preventOutline:Mi,restoreOutline:Ci,getSizedParentNode:Si,getScale:Ei});function ki(t,i,e,n){if("object"==typeof i)for(var o in i)Ii(t,o,i[o],e);else for(var s=0,r=(i=d(i)).length;s<r;s++)Ii(t,i[s],e,n);return this}var Bi="_leaflet_events";function Ai(t,i,e,n){if("object"==typeof i)for(var o in i)Oi(t,o,i[o],e);else if(i)for(var s=0,r=(i=d(i)).length;s<r;s++)Oi(t,i[s],e,n);else{for(var a in t[Bi])Oi(t,a,t[Bi][a]);delete t[Bi]}return this}function Ii(i,t,e,n){var o=t+u(e)+(n?"_"+u(n):"");if(i[Bi]&&i[Bi][o])return this;var s=function(t){return e.call(n||i,t||window.event)},r=s;bt&&0===t.indexOf("touch")?Ft(i,t,s,o):!Tt||"dblclick"!==t||bt&&lt?"addEventListener"in i?"mousewheel"===t?i.addEventListener("onwheel"in i?"wheel":"mousewheel",s,!!St&&{passive:!1}):"mouseenter"===t||"mouseleave"===t?(s=function(t){t=t||window.event,Yi(i,t)&&r(t)},i.addEventListener("mouseenter"===t?"mouseover":"mouseout",s,!1)):("click"===t&&st&&(s=function(t){!function(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=Vi&&e-Vi;if(n&&100<n&&n<500||t.target._simulatedClick&&!t._simulated)return Wi(t);Vi=e,i(t)}(t,r)}),i.addEventListener(t,s,!1)):"attachEvent"in i&&i.attachEvent("on"+t,s):Jt(i,s,o),i[Bi]=i[Bi]||{},i[Bi][o]=s}function Oi(t,i,e,n){var o=i+u(e)+(n?"_"+u(n):""),s=t[Bi]&&t[Bi][o];if(!s)return this;bt&&0===i.indexOf("touch")?function(t,i,e){var n=t["_leaflet_"+i+e];"touchstart"===i?t.removeEventListener(It,n,!1):"touchmove"===i?t.removeEventListener(Ot,n,!1):"touchend"===i&&(t.removeEventListener(Rt,n,!1),t.removeEventListener(Nt,n,!1))}(t,i,o):!Tt||"dblclick"!==i||bt&&lt?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",s,!!St&&{passive:!1}):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,s,!1):"detachEvent"in t&&t.detachEvent("on"+i,s):$t(t,o),t[Bi][o]=null}function Ri(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Ki(t),this}function Ni(t){return Ii(t,"mousewheel",Ri),this}function Di(t){return ki(t,"mousedown touchstart dblclick",Ri),Ii(t,"click",Gi),this}function ji(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Wi(t){return ji(t),Ri(t),this}function Hi(t,i){if(!i)return new B(t.clientX,t.clientY);var e=Ei(i),n=e.boundingClientRect;return new B((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}var Fi=mt&&lt?2*window.devicePixelRatio:ct?window.devicePixelRatio:1;function Ui(t){return nt?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/Fi:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}var Vi,qi={};function Gi(t){qi[t.type]=!0}function Ki(t){var i=qi[t.type];return qi[t.type]=!1,i}function Yi(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}var Xi=(Object.freeze||Object)({on:ki,off:Ai,stopPropagation:Ri,disableScrollPropagation:Ni,disableClickPropagation:Di,preventDefault:ji,stop:Wi,getMousePosition:Hi,getWheelDelta:Ui,fakeStop:Gi,skipped:Ki,isExternalTarget:Yi,addListener:ki,removeListener:Ai}),Ji=k.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Li(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=M(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),Pi(this._el,e),this.fire("step")},_complete:function(){C(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),$i=k.extend({options:{crs:X,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=p(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=a(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(W(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=si&&yt&&!zt&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ki(this._proxy,ri,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,i,e){if((i=void 0===i?this._zoom:this._limitZoom(i),t=this._limitCenter(W(t),i,this.options.maxBounds),e=e||{},this._stop(),this._loaded&&!e.reset&&!0!==e)&&(void 0!==e.animate&&(e.zoom=h({animate:e.animate},e.zoom),e.pan=h({animate:e.animate,duration:e.duration},e.pan)),this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,i,e.zoom):this._tryAnimatedPan(t,e.pan)))return clearTimeout(this._sizeTimer),this;return this._resetView(t,i),this},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(yt?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof B?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():D(t);var e=I(i.paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=D(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(i=i||{},!(t=I(t).round()).x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ji,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){mi(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(n,o,t){if(!1===(t=t||{}).animate||!yt)return this.setView(n,o,t);this._stop();var s=this.project(this.getCenter()),r=this.project(n),i=this.getSize(),a=this._zoom;n=W(n),o=void 0===o?a:o;var h=Math.max(i.x,i.y),u=h*this.getZoomScale(a,o),l=r.distanceTo(s)||1,c=1.42,_=c*c;function e(t){var i=(u*u-h*h+(t?-1:1)*_*_*l*l)/(2*(t?u:h)*_*l),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function d(t){return(Math.exp(t)-Math.exp(-t))/2}function p(t){return(Math.exp(t)+Math.exp(-t))/2}var m=e(0);function f(t){return h*(p(m)*function(t){return d(t)/p(t)}(m+c*t)-d(m))/_}var g=Date.now(),v=(e(1)-m)/c,y=t.duration?1e3*t.duration:1e3*v*.8;return this._moveStart(!0,t.noMoveStart),function t(){var i=(Date.now()-g)/y,e=function(t){return 1-Math.pow(1-t,1.5)}(i)*v;i<=1?(this._flyToFrame=M(t,this),this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e)/l)),a),this.getScaleZoom(h/function(t){return h*(p(m)/p(m+c*t))}(e),a),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=D(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,D(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},panInside:function(t,i){var e=I((i=i||{}).paddingTopLeft||i.padding||[0,0]),n=I(i.paddingBottomRight||i.padding||[0,0]),o=this.getCenter(),s=this.project(o),r=this.project(t),a=this.getPixelBounds(),h=a.getSize().divideBy(2),u=R([a.min.add(e),a.max.subtract(n)]);if(!u.contains(r)){this._enforcingBounds=!0;var l=s.subtract(r),c=I(r.x+l.x,r.y+l.y);(r.x<u.min.x||r.x>u.max.x)&&(c.x=s.x-l.x,0<l.x?c.x+=h.x-e.x:c.x-=h.x-n.x),(r.y<u.min.y||r.y>u.max.y)&&(c.y=s.y-l.y,0<l.y?c.y+=h.y-e.y:c.y-=h.y-n.y),this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=h({animate:!1,pan:!0},!0===t?{animate:!0}:t);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var e=this.getSize(),n=i.divideBy(2).round(),o=e.divideBy(2).round(),s=n.subtract(o);return s.x||s.y?(t.animate&&t.pan?this.panBy(s):(t.pan&&this._rawPanBy(s),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(a(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:e})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=h({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=a(this._handleGeolocationResponse,this),e=a(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,e,t):navigator.geolocation.getCurrentPosition(i,e,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new j(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}var t;for(t in void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),li(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(C(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload"),this._layers)this._layers[t].remove();for(t in this._panes)li(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=ui("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new N(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=D(t),e=I(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=R(this.project(a,n),this.project(r,n)).getSize(),l=yt?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new B(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new O(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(W(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(I(t),i)},layerPointToLatLng:function(t){var i=I(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(W(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(W(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(D(t))},distance:function(t,i){return this.options.crs.distance(W(t),W(i))},containerPointToLayerPoint:function(t){return I(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return I(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(I(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))},mouseEventToContainerPoint:function(t){return Hi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=ai(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");ki(i,"scroll",this._onScroll,this),this._containerId=u(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&yt,mi(t,"leaflet-container"+(Tt?" leaflet-touch":"")+(Ct?" leaflet-retina":"")+(et?" leaflet-oldie":"")+(_t?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=hi(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Pi(this._mapPane,new B(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(mi(t.markerPane,"leaflet-zoom-hide"),mi(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){Pi(this._mapPane,new B(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return C(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Pi(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={};var i=t?Ai:ki;i((this._targets[u(this._container)]=this)._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),yt&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){C(this._resizeRequest),this._resizeRequest=M(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,n=[],o="mouseout"===i||"mouseover"===i,s=t.target||t.srcElement,r=!1;s;){if((e=this._targets[u(s)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){r=!0;break}if(e&&e.listens(i,!0)){if(o&&!Yi(s,t))break;if(n.push(e),o)break}if(s===this._container)break;s=s.parentNode}return n.length||r||o||!Yi(s,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!Ki(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i&&"keyup"!==i&&"keydown"!==i||Mi(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,i,e){if("click"===t.type){var n=h({},t);n.type="preclick",this._fireDOMEvent(n,n.type,e)}if(!t._stopped&&(e=(e||[]).concat(this._findEventTargets(t,i))).length){var o=e[0];"contextmenu"===i&&o.listens(i,!0)&&ji(t);var s={originalEvent:t};if("keypress"!==t.type&&"keydown"!==t.type&&"keyup"!==t.type){var r=o.getLatLng&&(!o._radius||o._radius<=10);s.containerPoint=r?this.latLngToContainerPoint(o.getLatLng()):this.mouseEventToContainerPoint(t),s.layerPoint=this.containerPointToLayerPoint(s.containerPoint),s.latlng=r?o.getLatLng():this.layerPointToLatLng(s.layerPoint)}for(var a=0;a<e.length;a++)if(e[a].fire(i,s,!0),s.originalEvent._stopped||!1===e[a].options.bubblingMouseEvents&&-1!==y(this._mouseEvents,i))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Li(this._mapPane)||new B(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return R([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new O(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new O(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=R(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new B(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return 0<t+i?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=yt?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){fi(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=ui("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=oi,e=this._proxy.style[i];wi(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){li(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),i=this.getZoom();wi(this._proxy,this.project(t,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(t){this._animatingZoom&&0<=t.propertyName.indexOf("transform")&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(M(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,e,n){this._mapPane&&(e&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,mi(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:n}),setTimeout(a(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&fi(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),M(function(){this._moveEnd(!0)},this))}});function Qi(t){return new te(t)}var te=E.extend({options:{position:"topright"},initialize:function(t){p(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return mi(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map&&(li(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null),this},_refocusOnMap:function(t){this._map&&t&&0<t.screenX&&0<t.screenY&&this._map.getContainer().focus()}});$i.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",s=this._controlContainer=ui("div",o+"control-container",this._container);function t(t,i){var e=o+t+" "+o+i;n[t+i]=ui("div",e,s)}t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)li(this._controlCorners[t]);li(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var ie=te.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){for(var n in p(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),(this._map=t).on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return te.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(u(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){mi(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(mi(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):fi(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return fi(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ui("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),Di(i),Ni(i);var n=this._section=ui("section",t+"-list");e&&(this._map.on("click",this.collapse,this),st||ki(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=ui("a",t+"-toggle",i);o.href="#",o.title="Layers",Tt?(ki(o,"click",Wi),ki(o,"click",this.expand,this)):ki(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=ui("div",t+"-base",n),this._separator=ui("div",t+"-separator",n),this._overlaysList=ui("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&u(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,e){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:e}),this.options.sortLayers&&this._layers.sort(a(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ci(this._baseLayersList),ci(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&1<o,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(u(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),n=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=n):i=this._createRadioElement("leaflet-base-layers_"+u(this),n),this._layerControlInputs.push(i),i.layerId=u(t.layer),ki(i,"click",this._onInputClick,this);var o=document.createElement("span");o.innerHTML=" "+t.name;var s=document.createElement("div");return e.appendChild(s),s.appendChild(i),s.appendChild(o),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;0<=s;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;0<=o;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),ee=te.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=ui("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=ui("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),Di(s),ki(s,"click",Wi),ki(s,"click",o,this),ki(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";fi(this._zoomInButton,i),fi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMinZoom()||mi(this._zoomOutButton,i),!this._disabled&&t._zoom!==t.getMaxZoom()||mi(this._zoomInButton,i)}});$i.mergeOptions({zoomControl:!0}),$i.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ee,this.addControl(this.zoomControl))});var ne=te.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i="leaflet-control-scale",e=ui("div",i),n=this.options;return this._addScales(n,i+"-line",e),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),e},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=ui("div",i,e)),t.imperial&&(this._iScale=ui("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;5280<o?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return i*(e=10<=e?10:5<=e?5:3<=e?3:2<=e?2:1)}}),oe=te.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){p(this,t),this._attributions={}},onAdd:function(t){for(var i in(t.attributionControl=this)._container=ui("div","leaflet-control-attribution"),Di(this._container),t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t&&(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update()),this},removeAttribution:function(t){return t&&this._attributions[t]&&(this._attributions[t]--,this._update()),this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});$i.mergeOptions({attributionControl:!0}),$i.addInitHook(function(){this.options.attributionControl&&(new oe).addTo(this)});te.Layers=ie,te.Zoom=ee,te.Scale=ne,te.Attribution=oe,Qi.layers=function(t,i,e){return new ie(t,i,e)},Qi.zoom=function(t){return new ee(t)},Qi.scale=function(t){return new ne(t)},Qi.attribution=function(t){return new oe(t)};var se=E.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled||(this._enabled=!0,this.addHooks()),this},disable:function(){return this._enabled&&(this._enabled=!1,this.removeHooks()),this},enabled:function(){return!!this._enabled}});se.addTo=function(t,i){return t.addHandler(i,this),this};var re,ae={Events:Z},he=Tt?"touchstart mousedown":"mousedown",ue={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},le={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},ce=k.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){p(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(ki(this._dragStartTarget,he,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ce._dragging===this&&this.finishDrag(),Ai(this._dragStartTarget,he,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!pi(this._element,"leaflet-zoom-anim")&&!(ce._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||((ce._dragging=this)._preventOutline&&Mi(this._element),Ti(),Qt(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=Si(this._element);this._startPoint=new B(i.clientX,i.clientY),this._parentScale=Ei(e),ki(document,le[t.type],this._onMove,this),ki(document,ue[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&1<t.touches.length)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new B(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,ji(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Li(this._element).subtract(e),mi(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),mi(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,C(this._animRequest),this._lastEvent=t,this._animRequest=M(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Pi(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){for(var t in fi(document.body,"leaflet-dragging"),this._lastTarget&&(fi(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),le)Ai(document,le[t],this._onMove,this),Ai(document,ue[t],this._onUp,this);zi(),ti(),this._moved&&this._moving&&(C(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,ce._dragging=!1}});function _e(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=function(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,function t(i,e,n,o,s){var r,a,h,u=0;for(a=o+1;a<=s-1;a++)h=ge(i[a],i[o],i[s],!0),u<h&&(r=a,u=h);n<u&&(e[r]=1,t(i,e,n,o,r),t(i,e,n,r,s))}(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}(t=function(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)r=t[n],a=t[o],void 0,h=a.x-r.x,u=a.y-r.y,i<h*h+u*u&&(e.push(t[n]),o=n);var r,a,h,u;o<s-1&&e.push(t[s-1]);return e}(t,e),e)}function de(t,i,e){return Math.sqrt(ge(t,i,e,!0))}function pe(t,i,e,n,o){var s,r,a,h=n?re:fe(t,e),u=fe(i,e);for(re=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=fe(r=me(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function me(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new B(s,r,o)}function fe(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function ge(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return 0<u&&(1<(o=((t.x-s)*a+(t.y-r)*h)/u)?(s=e.x,r=e.y):0<o&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new B(s,r)}function ve(t){return!v(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function ye(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),ve(t)}var xe=(Object.freeze||Object)({simplify:_e,pointToSegmentDistance:de,closestPointOnSegment:function(t,i,e){return ge(t,i,e)},clipSegment:pe,_getEdgeIntersection:me,_getBitCode:fe,_sqClosestPointOnSegment:ge,isFlat:ve,_flat:ye});function we(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=fe(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=me(h,a,l,i,e))._code=fe(c,i),n.push(c)):(h._code&l&&((c=me(h,a,l,i,e))._code=fe(c,i),n.push(c)),n.push(a));t=n}return t}var Pe,Le=(Object.freeze||Object)({clipPolygon:we}),be={project:function(t){return new B(t.lng,t.lat)},unproject:function(t){return new j(t.y,t.x)},bounds:new O([-180,-90],[180,90])},Te={R:6378137,R_MINOR:6356752.314245179,bounds:new O([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new B(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&1e-7<Math.abs(u);h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new j(a*e,t.x*e/n)}},ze=(Object.freeze||Object)({LonLat:be,Mercator:Te,SphericalMercator:q}),Me=h({},U,{code:"EPSG:3395",projection:Te,transformation:(Pe=.5/(Math.PI*Te.R),K(Pe,.5,-Pe,.5))}),Ce=h({},U,{code:"EPSG:4326",projection:be,transformation:K(1/180,1,-1/180,.5)}),Se=h({},F,{projection:be,transformation:K(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});F.Earth=U,F.EPSG3395=Me,F.EPSG3857=X,F.EPSG900913=J,F.EPSG4326=Ce,F.Simple=Se;var Ee=k.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[u(t)]=this},removeInteractiveTarget:function(t){return delete this._map._targets[u(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});$i.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=u(t);return this._layers[i]||((this._layers[i]=t)._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t)),this},removeLayer:function(t){var i=u(t);return this._layers[i]&&(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null),this},hasLayer:function(t){return!!t&&u(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?v(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[u(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=u(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ze=Ee.extend({initialize:function(t,i){var e,n;if(p(this,i),this._layers={},t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return u(t)}}),ke=Ze.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ze.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ze.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new N;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Be=E.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){p(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=I(n),s=I("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return(i=i||document.createElement("img")).src=t,i},_getIconUrl:function(t){return Ct&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});var Ae=Be.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Ae.imagePath||(Ae.imagePath=this._detectIconPath()),(this.options.imagePath||Ae.imagePath)+Be.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=ui("div","leaflet-default-icon-path",document.body),i=hi(t,"background-image")||hi(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ie=se.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new ce(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),mi(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&fi(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=Li(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=R(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=I((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),Pi(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=M(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(C(this._panRequest),this._panRequest=M(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Li(i._icon),o=i._map.layerPointToLatLng(n);e&&Pi(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){C(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Oe=Ee.extend({options:{icon:new Ae,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){p(this,i),this._latlng=W(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=W(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),mi(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(mi(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),li(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&li(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&Pi(this._icon,t),this._shadow&&Pi(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(mi(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ie)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ie(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&yi(this._icon,t),this._shadow&&yi(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});var Re=Ee.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return p(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&t.hasOwnProperty("weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),Ne=Re.extend({options:{fill:!0,radius:10},initialize:function(t,i){p(this,i),this._latlng=W(t),this._radius=this.options.radius},setLatLng:function(t){var i=this._latlng;return this._latlng=W(t),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Re.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new O(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});var De=Ne.extend({initialize:function(t,i,e){if("number"==typeof i&&(i=h({},e,{radius:i})),p(this,i),this._latlng=W(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new N(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Re.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===U.distance){var o=Math.PI/180,s=this._mRadius/U.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;!isNaN(l)&&0!==l||(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}});var je=Re.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){p(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=ge,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(i=t=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(n=t=0;t<h-1;t++)if(o=a[t],s=a[t+1],i<(n+=e=o.distanceTo(s)))return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=W(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new N,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return ve(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=ve(t),n=0,o=t.length;n<o;n++)e?(i[n]=W(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new O;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),i=new B(t,t);this._pxBounds=new O([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)])},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof j,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(n=i=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=pe(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=_e(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&de(t,a[o],a[n])<=h)return!0;return!1}});je._flat=ye;var We=je.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=je.prototype._convertLatLngs.call(this,t),e=i.length;return 2<=e&&i[0]instanceof j&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){je.prototype._setLatLngs.call(this,t),ve(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return ve(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new B(i,i);if(t=new O(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=we(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||je.prototype._containsPoint.call(this,t,!0)}});var He=ke.extend({initialize:function(t,i){p(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=v(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Fe(t,s);return r?(r.feature=Xe(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return void 0===t?this.eachLayer(this.resetStyle,this):(t.options=h({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(t){this._setLayerStyle(t,i)},this)},_setLayerStyle:function(t,i){t.setStyle&&("function"==typeof i&&(i=i(t.feature)),t.setStyle(i))}});function Fe(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ve;if(!a&&!r)return null;switch(r.type){case"Point":return Ue(u,t,e=l(a),i);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(Ue(u,t,e,i));return new ke(h);case"LineString":case"MultiLineString":return n=qe(a,"LineString"===r.type?0:1,l),new je(n,i);case"Polygon":case"MultiPolygon":return n=qe(a,"Polygon"===r.type?1:2,l),new We(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Fe({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new ke(h);default:throw new Error("Invalid GeoJSON object.")}}function Ue(t,i,e,n){return t?t(i,e):new Oe(e,n&&n.markersInheritOptions&&n)}function Ve(t){return new j(t[1],t[0],t[2])}function qe(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?qe(t[s],i-1,e):(e||Ve)(t[s]),o.push(n);return o}function Ge(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[c(t.lng,i),c(t.lat,i),c(t.alt,i)]:[c(t.lng,i),c(t.lat,i)]}function Ke(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Ke(t[s],i-1,e,n):Ge(t[s],n));return!i&&e&&o.push(o[0]),o}function Ye(t,i){return t.feature?h({},t.feature,{geometry:i}):Xe(i)}function Xe(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}var Je={toGeoJSON:function(t){return Ye(this,{type:"Point",coordinates:Ge(this.getLatLng(),t)})}};function $e(t,i){return new He(t,i)}Oe.include(Je),De.include(Je),Ne.include(Je),je.include({toGeoJSON:function(t){var i=!ve(this._latlngs);return Ye(this,{type:(i?"Multi":"")+"LineString",coordinates:Ke(this._latlngs,i?1:0,!1,t)})}}),We.include({toGeoJSON:function(t){var i=!ve(this._latlngs),e=i&&!ve(this._latlngs[0]),n=Ke(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Ye(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ze.include({toMultiPoint:function(i){var e=[];return this.eachLayer(function(t){e.push(t.toGeoJSON(i).geometry.coordinates)}),Ye(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(n){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===t)return this.toMultiPoint(n);var o="GeometryCollection"===t,s=[];return this.eachLayer(function(t){if(t.toGeoJSON){var i=t.toGeoJSON(n);if(o)s.push(i.geometry);else{var e=Xe(i);"FeatureCollection"===e.type?s.push.apply(s,e.features):s.push(e)}}}),o?Ye(this,{geometries:s,type:"GeometryCollection"}):{type:"FeatureCollection",features:s}}});var Qe=$e,tn=Ee.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=D(i),p(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(mi(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){li(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&_i(this._image),this},bringToBack:function(){return this._map&&di(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=D(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:ui("img");mi(i,"leaflet-image-layer"),this._zoomAnimated&&mi(i,"leaflet-zoom-animated"),this.options.className&&mi(i,this.options.className),i.onselectstart=l,i.onmousemove=l,i.onload=a(this.fire,this,"load"),i.onerror=a(this._overlayOnError,this,"error"),!this.options.crossOrigin&&""!==this.options.crossOrigin||(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;wi(this._image,e,i)},_reset:function(){var t=this._image,i=new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();Pi(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){yi(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),en=tn.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:ui("video");if(mi(i,"leaflet-image-layer"),this._zoomAnimated&&mi(i,"leaflet-zoom-animated"),this.options.className&&mi(i,this.options.className),i.onselectstart=l,i.onmousemove=l,i.onloadeddata=a(this.fire,this,"load"),t){for(var e=i.getElementsByTagName("source"),n=[],o=0;o<e.length;o++)n.push(e[o].src);this._url=0<e.length?n:[i.src]}else{v(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&i.style.hasOwnProperty("objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var s=0;s<this._url.length;s++){var r=ui("source");r.src=this._url[s],i.appendChild(r)}}}});var nn=tn.extend({_initImage:function(){var t=this._image=this._url;mi(t,"leaflet-image-layer"),this._zoomAnimated&&mi(t,"leaflet-zoom-animated"),this.options.className&&mi(t,this.options.className),t.onselectstart=l,t.onmousemove=l}});var on=Ee.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){p(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&yi(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&yi(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(yi(this._container,0),this._removeTimeout=setTimeout(a(li,void 0,this._container),200)):li(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=W(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&_i(this._container),this},bringToBack:function(){return this._map&&di(this._container),this},_prepareOpen:function(t,i,e){if(i instanceof Ee||(e=i,i=t),i instanceof ke)for(var n in t._layers){i=t._layers[n];break}if(!e)if(i.getCenter)e=i.getCenter();else{if(!i.getLatLng)throw new Error("Unable to get source layer LatLng.");e=i.getLatLng()}return this._source=i,this.update(),e},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=I(this.options.offset),e=this._getAnchor();this._zoomAnimated?Pi(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),sn=on.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){on.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Re||this._source.on("preclick",Ri))},onRemove:function(t){on.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Re||this._source.off("preclick",Ri))},getEvents:function(){var t=on.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=ui("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=ui("div",t+"-content-wrapper",i);if(this._contentNode=ui("div",t+"-content",e),Di(e),Ni(this._contentNode),ki(e,"contextmenu",Ri),this._tipContainer=ui("div",t+"-tip-container",i),this._tip=ui("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=ui("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",ki(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight,s="leaflet-popup-scrolled";o&&o<n?(i.height=o+"px",mi(t,s)):fi(t,s),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Pi(this._container,i.add(e))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,i=parseInt(hi(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new B(this._containerLeft,-e-this._containerBottom);o._add(Li(this._container));var s=t.layerPointToContainerPoint(o),r=I(this.options.autoPanPadding),a=I(this.options.autoPanPaddingTopLeft||r),h=I(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Wi(t)},_getAnchor:function(){return I(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});$i.mergeOptions({closePopupOnClick:!0}),$i.include({openPopup:function(t,i,e){return t instanceof sn||(t=new sn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Ee.include({bindPopup:function(t,i){return t instanceof sn?(p(t,i),(this._popup=t)._source=this):(this._popup&&!i||(this._popup=new sn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){return this._popup&&this._map&&(i=this._popup._prepareOpen(this,t,i),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Wi(t),i instanceof Re?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var rn=on.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){on.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){on.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=on.prototype.getEvents.call(this);return Tt&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ui("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=I(this.options.offset),u=this._getAnchor();t="top"===s?t.add(I(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t.subtract(I(r/2-h.x,-h.y,!0)):"center"===s?t.subtract(I(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t.add(I(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t.subtract(I(r+u.x-h.x,a/2-u.y-h.y,!0))),fi(e,"leaflet-tooltip-right"),fi(e,"leaflet-tooltip-left"),fi(e,"leaflet-tooltip-top"),fi(e,"leaflet-tooltip-bottom"),mi(e,"leaflet-tooltip-"+s),Pi(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&yi(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return I(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});$i.include({openTooltip:function(t,i,e){return t instanceof rn||(t=new rn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Ee.include({bindTooltip:function(t,i){return t instanceof rn?(p(t,i),(this._tooltip=t)._source=this):(this._tooltip&&!i||(this._tooltip=new rn(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Tt&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){return this._tooltip&&this._map&&(i=this._tooltip._prepareOpen(this,t,i),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(mi(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(fi(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var an=Be.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(e.html instanceof Element?(ci(i),i.appendChild(e.html)):i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=I(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Be.Default=Ae;var hn=Ee.extend({options:{tileSize:256,opacity:1,updateWhenIdle:xt,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){p(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),li(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(_i(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(di(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof B?t:new B(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!et){yi(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);yi(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this))}},_onOpaqueTile:l,_initContainer:function(){this._container||(this._container=ui("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(li(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=ui("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n}},_onUpdateLevel:l,_onRemoveLevel:l,_onCreateLevel:l,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)li(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new B(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?u.retain=!0:(u&&u.loaded&&(u.retain=!0),n<r&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new B(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();yt?wi(t.el,o,n):Pi(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new O(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new O(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new B(l.x,l.y))||(this._tiles[u].current=!1)}if(1<Math.abs(e-this._tileZoom))this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new B(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return D(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new N(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new B(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(li(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){mi(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=l,t.onmousemove=l,et&&this.options.opacity<1&&yi(t,this.options.opacity),st&&!rt&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var e=this._getTilePos(t),n=this._tileCoordsToKey(t),o=this.createTile(this._wrapCoords(t),a(this._tileReady,this,t));this._initTile(o),this.createTile.length<2&&M(a(this._tileReady,this,t,null,o)),Pi(o,e),this._tiles[n]={el:o,coords:t,current:!0},i.appendChild(o),this.fire("tileloadstart",{tile:o,coords:t})},_tileReady:function(t,i,e){i&&this.fire("tileerror",{error:i,tile:e,coords:t});var n=this._tileCoordsToKey(t);(e=this._tiles[n])&&(e.loaded=+new Date,this._map._fadeAnimated?(yi(e.el,0),C(this._fadeFrame),this._fadeFrame=M(this._updateOpacity,this)):(e.active=!0,this._pruneTiles()),i||(mi(e.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:e.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),et||!this._map._fadeAnimated?M(this._pruneTiles,this):setTimeout(a(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new B(this._wrapX?r(t.x,this._wrapX):t.x,this._wrapY?r(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new O(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});var un=hn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=p(this,i)).detectRetina&&Ct&&0<i.maxZoom&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),st||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var e=document.createElement("img");return ki(e,"load",a(this._tileOnLoad,this,i,e)),ki(e,"error",a(this._tileOnError,this,i,e)),!this.options.crossOrigin&&""!==this.options.crossOrigin||(e.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),e.alt="",e.setAttribute("role","presentation"),e.src=this.getTileUrl(t),e},getTileUrl:function(t){var i={r:Ct?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var e=this._globalTileRange.max.y-t.y;this.options.tms&&(i.y=e),i["-y"]=e}return g(this._url,h(i,this.options))},_tileOnLoad:function(t,i){et?setTimeout(a(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom;return this.options.zoomReverse&&(t=i-t),t+this.options.zoomOffset},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=l,i.onerror=l,i.complete||(i.src=x,li(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return ht||i.el.setAttribute("src",x),hn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==x))return hn.prototype._tileReady.call(this,t,i,e)}});function ln(t,i){return new un(t,i)}var cn=un.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,i){this._url=t;var e=h({},this.defaultWmsParams);for(var n in i)n in this.options||(e[n]=i[n]);var o=(i=p(this,i)).detectRetina&&Ct?2:1,s=this.getTileSize();e.width=s.x*o,e.height=s.y*o,this.wmsParams=e},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=1.3<=this._wmsVersion?"crs":"srs";this.wmsParams[i]=this._crs.code,un.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=R(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(1.3<=this._wmsVersion&&this._crs===Ce?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=un.prototype.getTileUrl.call(this,t);return a+m(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,i){return h(this.wmsParams,t),i||this.redraw(),this}});un.WMS=cn,ln.wms=function(t,i){return new cn(t,i)};var _n=Ee.extend({options:{padding:.1,tolerance:0},initialize:function(t){p(this,t),u(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&mi(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Li(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);yt?wi(this._container,a,e):Pi(this._container,a)},_reset:function(){for(var t in this._update(),this._updateTransform(this._center,this._zoom),this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new O(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),dn=_n.extend({getEvents:function(){var t=_n.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){_n.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");ki(t,"mousemove",this._onMouseMove,this),ki(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ki(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){C(this._redrawRequest),delete this._ctx,li(this._container),Ai(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){for(var t in this._redrawBounds=null,this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){_n.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ct?2:1;Pi(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ct&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){_n.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t);var i=(this._layers[u(t)]=t)._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[u(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e,n=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<n.length;e++){if(i=Number(n[e]),isNaN(i))return;o.push(i)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||M(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new O,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!=o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!=o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(Gi(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(fi(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,i){if(!this._mouseHoverThrottled){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(mi(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t),this._mouseHoverThrottled=!0,setTimeout(L.bind(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;e&&((e.prev=n)?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,(this._drawLast.next=i).next=null,this._drawLast=i,this._requestRedraw(t))}},_bringToBack:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;n&&((n.next=e)?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}});function pn(t){return Et?new dn(t):null}var mn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),fn={_initContainer:function(){this._container=ui("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(_n.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=mn("shape");mi(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=mn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;li(i),t.removeInteractiveTarget(i),delete this._layers[u(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=mn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=v(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=mn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){_i(t._container)},_bringToBack:function(t){di(t._container)}},gn=kt?mn:$,vn=_n.extend({getEvents:function(){var t=_n.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=gn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=gn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){li(this._container),Ai(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){_n.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),Pi(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=gn("path");t.options.className&&mi(i,t.options.className),t.options.interactive&&mi(i,"leaflet-interactive"),this._updateStyle(t),this._layers[u(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){li(t._path),t.removeInteractiveTarget(t._path),delete this._layers[u(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,Q(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){_i(t._path)},_bringToBack:function(t){di(t._path)}});function yn(t){return Zt||kt?new vn(t):null}kt&&vn.include(fn),$i.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&pn(t)||yn(t)}});var xn=We.extend({initialize:function(t,i){We.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return[(t=D(t)).getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});vn.create=gn,vn.pointsToPath=Q,He.geometryToLayer=Fe,He.coordsToLatLng=Ve,He.coordsToLatLngs=qe,He.latLngToCoords=Ge,He.latLngsToCoords=Ke,He.getFeature=Ye,He.asFeature=Xe,$i.mergeOptions({boxZoom:!0});var wn=se.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){ki(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ai(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){li(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),Qt(),Ti(),this._startPoint=this._map.mouseEventToContainerPoint(t),ki(document,{contextmenu:Wi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ui("div","leaflet-zoom-box",this._container),mi(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new O(this._point,this._startPoint),e=i.getSize();Pi(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(li(this._box),fi(this._container,"leaflet-crosshair")),ti(),zi(),Ai(document,{contextmenu:Wi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(a(this._resetState,this),0);var i=new N(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});$i.addInitHook("addHandler","boxZoom",wn),$i.mergeOptions({doubleClickZoom:!0});var Pn=se.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});$i.addInitHook("addHandler","doubleClickZoom",Pn),$i.mergeOptions({dragging:!0,inertia:!rt,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ln=se.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new ce(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}mi(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){fi(this._map._container,"leaflet-grab"),fi(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=D(this._map.options.maxBounds);this._offsetLimit=R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;1<this._positions.length&&50<t-this._times[0];)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),M(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});$i.addInitHook("addHandler","dragging",Ln),$i.mergeOptions({keyboard:!0,keyboardPanDelta:80});var bn=se.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),ki(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ai(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){ki(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ai(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=I(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Wi(t)}}});$i.addInitHook("addHandler","keyboard",bn),$i.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Tn=se.extend({addHooks:function(){ki(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ai(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Ui(t),e=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var n=Math.max(e-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(a(this._performZoom,this),n),Wi(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(0<this._delta?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});$i.addInitHook("addHandler","scrollWheelZoom",Tn),$i.mergeOptions({tap:!0,tapTolerance:15});var zn=se.extend({addHooks:function(){ki(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ai(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(ji(t),this._fireClick=!0,1<t.touches.length)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],e=i.target;this._startPos=this._newPos=new B(i.clientX,i.clientY),e.tagName&&"a"===e.tagName.toLowerCase()&&mi(e,"leaflet-active"),this._holdTimeout=setTimeout(a(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),ki(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),Ai(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&fi(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new B(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});Tt&&!bt&&$i.addInitHook("addHandler","tap",zn),$i.mergeOptions({touchZoom:Tt&&!rt,bounceAtZoomLimits:!0});var Mn=se.extend({addHooks:function(){mi(this._map._container,"leaflet-touch-zoom"),ki(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){fi(this._map._container,"leaflet-touch-zoom"),Ai(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),ki(document,"touchmove",this._onTouchMove,this),ki(document,"touchend",this._onTouchEnd,this),ji(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]),o=e.distanceTo(n)/this._startDist;if(this._zoom=i.getScaleZoom(o,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&o<1||this._zoom>i.getMaxZoom()&&1<o)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1==o)return}else{var s=e._add(n)._divideBy(2)._subtract(this._centerPoint);if(1==o&&0===s.x&&0===s.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(s),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),C(this._animRequest);var r=a(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=M(r,this,!0),ji(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,C(this._animRequest),Ai(document,"touchmove",this._onTouchMove),Ai(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});$i.addInitHook("addHandler","touchZoom",Mn),$i.BoxZoom=wn,$i.DoubleClickZoom=Pn,$i.Drag=Ln,$i.Keyboard=bn,$i.ScrollWheelZoom=Tn,$i.Tap=zn,$i.TouchZoom=Mn,Object.freeze=i,t.version="1.6.0",t.Control=te,t.control=Qi,t.Browser=At,t.Evented=k,t.Mixin=ae,t.Util=S,t.Class=E,t.Handler=se,t.extend=h,t.bind=a,t.stamp=u,t.setOptions=p,t.DomEvent=Xi,t.DomUtil=Zi,t.PosAnimation=Ji,t.Draggable=ce,t.LineUtil=xe,t.PolyUtil=Le,t.Point=B,t.point=I,t.Bounds=O,t.bounds=R,t.Transformation=G,t.transformation=K,t.Projection=ze,t.LatLng=j,t.latLng=W,t.LatLngBounds=N,t.latLngBounds=D,t.CRS=F,t.GeoJSON=He,t.geoJSON=$e,t.geoJson=Qe,t.Layer=Ee,t.LayerGroup=Ze,t.layerGroup=function(t,i){return new Ze(t,i)},t.FeatureGroup=ke,t.featureGroup=function(t){return new ke(t)},t.ImageOverlay=tn,t.imageOverlay=function(t,i,e){return new tn(t,i,e)},t.VideoOverlay=en,t.videoOverlay=function(t,i,e){return new en(t,i,e)},t.SVGOverlay=nn,t.svgOverlay=function(t,i,e){return new nn(t,i,e)},t.DivOverlay=on,t.Popup=sn,t.popup=function(t,i){return new sn(t,i)},t.Tooltip=rn,t.tooltip=function(t,i){return new rn(t,i)},t.Icon=Be,t.icon=function(t){return new Be(t)},t.DivIcon=an,t.divIcon=function(t){return new an(t)},t.Marker=Oe,t.marker=function(t,i){return new Oe(t,i)},t.TileLayer=un,t.tileLayer=ln,t.GridLayer=hn,t.gridLayer=function(t){return new hn(t)},t.SVG=vn,t.svg=yn,t.Renderer=_n,t.Canvas=dn,t.canvas=pn,t.Path=Re,t.CircleMarker=Ne,t.circleMarker=function(t,i){return new Ne(t,i)},t.Circle=De,t.circle=function(t,i,e){return new De(t,i,e)},t.Polyline=je,t.polyline=function(t,i){return new je(t,i)},t.Polygon=We,t.polygon=function(t,i){return new We(t,i)},t.Rectangle=xn,t.rectangle=function(t,i){return new xn(t,i)},t.Map=$i,t.map=function(t,i){return new $i(t,i)};var Cn=window.L;t.noConflict=function(){return window.L=Cn,this},window.L=t});
;/*! leaflet-wfst 2.0.1-beta.25 2019-11-09 */
!function(a,b,c){"use strict";L.XmlUtil={namespaces:{xlink:"http://www.w3.org/1999/xlink",xmlns:"http://www.w3.org/2000/xmlns/",xsd:"http://www.w3.org/2001/XMLSchema",xsi:"http://www.w3.org/2001/XMLSchema-instance",wfs:"http://www.opengis.net/wfs",gml:"http://www.opengis.net/gml",ogc:"http://www.opengis.net/ogc",ows:"http://www.opengis.net/ows"},xmldoc:(new DOMParser).parseFromString("<root />","text/xml"),setAttributes:function(a,b){for(var c in b)if(null!=b[c]&&b[c].toString){var d=b[c].toString(),e=this.namespaces[c.substring(0,c.indexOf(":"))]||null;a.setAttributeNS(e,c,d)}},evaluate:function(a,b){var c=b;c instanceof Document||(c=this.parseXml(b));var d=new XPathEvaluator,e=d.createNSResolver(c.documentElement);return d.evaluate(a,c,e,XPathResult.ANY_TYPE,null)},createElementNS:function(a,b,c){c=c||{};var d=c.uri;d||(d=this.namespaces[a.substring(0,a.indexOf(":"))]),d||(d=this.namespaces[c.prefix]);var e=d?this.xmldoc.createElementNS(d,a):this.xmldoc.createElement(a);return b&&this.setAttributes(e,b),null!=c.value&&e.appendChild(this.xmldoc.createTextNode(c.value)),e},createTextNode:function(a){return null===a||a===c?a="":a instanceof Date&&(a=a.toISOString()),this.xmldoc.createTextNode(a)},getNodeText:function(a){return a?a.innerText||a.textContent||a.text:""},serializeXmlDocumentString:function(a){var c=b.implementation.createDocument("","",null);c.appendChild(a);var d=new XMLSerializer;return d.serializeToString(c)},serializeXmlToString:function(a){var b=new XMLSerializer;return b.serializeToString(a)},parseXml:function(b){if("undefined"!=typeof a.DOMParser)return(new a.DOMParser).parseFromString(b,"text/xml");if("undefined"!=typeof a.ActiveXObject&&new a.ActiveXObject("Microsoft.XMLDOM")){var c=new a.ActiveXObject("Microsoft.XMLDOM");return c.async="false",c.loadXML(b),c}throw new Error("No XML parser found")},parseOwsExceptionReport:function(a){var b=a;b instanceof Document||(b=this.parseXml(a));var c=b.documentElement;if(!c||"ows:ExceptionReport"!==c.tagName)return null;for(var d={exceptions:[],message:""},e=c.getElementsByTagNameNS(L.XmlUtil.namespaces.ows,"Exception"),f=0,g=e.length;f<g;f++){for(var h=e[f],i=h.getAttribute("exceptionCode"),j=h.getElementsByTagNameNS(L.XmlUtil.namespaces.ows,"ExceptionText"),k={code:i,text:""},l=0,m=j.length;l<m;l++){var n=j[l],o=n.innerText||n.textContent||n.text;k.text+=o,l<m-1&&(k.text+=". ")}d.message+=k.code+" - "+k.text,f<g-1&&(d.message+=" "),d.exceptions.push(k)}return d}},L.Util.request=function(b){b=L.extend({async:!0,method:"POST",data:"",params:{},headers:{},url:a.location.href,withCredentials:!1,success:function(a){console.log(a)},error:function(a){console.log("Ajax request fail"),console.log(a)},complete:function(){}},b);var c=new XMLHttpRequest;c.onreadystatechange=function(){4===c.readyState&&(200===c.status?b.success(c.responseText):b.error(c.responseText),b.complete())},c.withCredentials=b.withCredentials;var d=b.url+L.Util.getParamString(b.params,b.url);c.open(b.method,d,b.async);for(var e in b.headers)c.setRequestHeader(e,b.headers[e]);c.send(b.data)},L.Filter={},L.filter=function(a){var b=L.XmlUtil.createElementNS("ogc:Filter");return Array.isArray(a)?a.forEach(function(a){b.appendChild(a instanceof Element?a:a.toGml())}):a&&b.appendChild(a instanceof Element?a:a.toGml()),b},L.Filter.propertyName=function(a){return L.XmlUtil.createElementNS("ogc:PropertyName",{},{value:a})},L.Filter.literal=function(a){return L.XmlUtil.createElementNS("ogc:Literal",{},{value:a})},L.Filter.element=function(a){return a instanceof Element?a:a.toGml()},L.Filter.propertyElement=function(a){return a instanceof Element?a:a&&"function"==typeof a.toGml?a.toGml():L.Filter.propertyName(a)},L.Filter.literalElement=function(a){return a instanceof Element?a:a&&"function"==typeof a.toGml?a.toGml():L.Filter.literal(a)},L.Filter.Abstract=L.Class.extend({attributes:{},options:{},tagName:null,buildFilterContent:function(){throw"Build filter content is abstract and should be implemented"},toGml:function(){var a=L.XmlUtil.createElementNS(this.tagName,this.attributes,this.options);return this.buildFilterContent(a),a}}),L.Filter.BinarySpatial=L.Filter.Abstract.extend({initialize:function(a,b,c){this.propertyName=a,this.value=b,this.crs=c},buildFilterContent:function(a){return a.appendChild(L.Filter.propertyName(this.propertyName)),"string"==typeof this.value?a.appendChild(L.Filter.propertyName(this.value)):a.appendChild(this.value.toGml(this.crs)),a}}),L.Filter.Equals=L.Filter.BinarySpatial.extend({tagName:"ogc:Equals"}),L.Filter.equals=function(a){return new L.Filter.Equals(a)},L.Filter.Disjoint=L.Filter.BinarySpatial.extend({tagName:"ogc:Disjoint"}),L.Filter.disjoint=function(a){return new L.Filter.Disjoint(a)},L.Filter.Touches=L.Filter.BinarySpatial.extend({tagName:"ogc:Touches"}),L.Filter.touches=function(a){return new L.Filter.Touches(a)},L.Filter.Within=L.Filter.BinarySpatial.extend({tagName:"ogc:Within"}),L.Filter.within=function(a){return new L.Filter.Within(a)},L.Filter.Overlaps=L.Filter.BinarySpatial.extend({tagName:"ogc:Overlaps"}),L.Filter.overlaps=function(a){return new L.Filter.Overlaps(a)},L.Filter.Crosses=L.Filter.BinarySpatial.extend({tagName:"ogc:Crosses"}),L.Filter.crosses=function(a){return new L.Filter.Crosses(a)},L.Filter.Intersects=L.Filter.BinarySpatial.extend({tagName:"ogc:Intersects"}),L.Filter.intersects=function(a){return new L.Filter.Intersects(a)},L.Filter.Contains=L.Filter.BinarySpatial.extend({tagName:"ogc:Contains"}),L.Filter.contains=function(a){return new L.Filter.Contains(a)},L.Filter.DistanceBuffer=L.Filter.Abstract.extend({initialize:function(a,b,c,d,e){this.propertyName=a,this.geomerty=b,this.crs=c,this.distance=d,this.units=e},buildFilterContent:function(a){a.appendChild(L.Filter.propertyName(this.propertyName)),a.appendChild(this.geomerty.toGml(this.crs)),a.appendChild(L.XmlUtil.createElementNS("ogc:Distance",{units:this.units},{value:this.distance}))}}),L.Filter.DWithin=L.Filter.DistanceBuffer.extend({tagName:"ogc:DWithin"}),L.Filter.dwithin=function(a,b,c,d,e){return new L.Filter.DWithin(a,b,c,d,e)},L.Filter.Beyond=L.Filter.DistanceBuffer.extend({tagName:"ogc:Beyond"}),L.Filter.beyond=function(a,b,c,d,e){return new L.Filter.Beyond(a,b,c,d,e)},L.Filter.BBox=L.Filter.Abstract.extend({tagName:"ogc:BBOX",geometryField:null,bbox:null,crs:null,initialize:function(a,b,c){this.bbox=b,this.geometryField=a,this.crs=c},buildFilterContent:function(a){this.geometryField&&a.appendChild(L.Filter.propertyName(this.geometryField)),a.appendChild(this.bbox.toGml(this.crs))}}),L.Filter.bbox=function(a,b,c){return new L.Filter.BBox(a,b,c)},L.Filter.GmlObjectID=L.Filter.Abstract.extend({tagName:"ogc:GmlObjectId",initialize:function(a){this.attributes={"gml:id":a}},buildFilterContent:function(){}}),L.Filter.gmlobjectid=function(a){return new L.Filter.GmlObjectID(a)},L.Filter.BinaryOperator=L.Filter.Abstract.extend({initialize:function(a,b){this.firstValue=a,this.secondValue=b},buildFilterContent:function(a){a.appendChild(L.Filter.propertyElement(this.firstValue)),a.appendChild(L.Filter.literalElement(this.secondValue))}}),L.Filter.Add=L.Filter.BinaryOperator.extend({tagName:"Add"}),L.Filter.add=function(a,b){return new L.Filter.Add(a,b)},L.Filter.Sub=L.Filter.BinaryOperator.extend({tagName:"Sub"}),L.Filter.sub=function(a,b){return new L.Filter.Sub(a,b)},L.Filter.Mul=L.Filter.BinaryOperator.extend({tagName:"Mul"}),L.Filter.mul=function(a,b){return new L.Filter.Mul(a,b)},L.Filter.Div=L.Filter.BinaryOperator.extend({tagName:"Div"}),L.Filter.div=function(a,b){return new L.Filter.Div(a,b)},L.Filter.BinaryComparison=L.Filter.BinaryOperator.extend({matchCase:!1,initialize:function(a,b,c){L.Filter.BinaryOperator.prototype.initialize.call(this,a,b),this.attributes={matchCase:!!c}}}),L.Filter.EQ=L.Filter.BinaryComparison.extend({tagName:"ogc:PropertyIsEqualTo"}),L.Filter.eq=function(a,b){return new L.Filter.EQ(a,b)},L.Filter.NotEQ=L.Filter.BinaryComparison.extend({tagName:"ogc:PropertyIsNotEqualTo"}),L.Filter.neq=function(a,b){return new L.Filter.NotEQ(a,b)},L.Filter.LT=L.Filter.BinaryComparison.extend({tagName:"ogc:PropertyIsLessThan"}),L.Filter.lt=function(a,b){return new L.Filter.LT(a,b)},L.Filter.GT=L.Filter.BinaryComparison.extend({tagName:"ogc:PropertyIsGreaterThan"}),L.Filter.gt=function(a,b){return new L.Filter.GT(a,b)},L.Filter.LEQ=L.Filter.BinaryComparison.extend({tagName:"ogc:PropertyIsLessThanOrEqualTo"}),L.Filter.leq=function(a,b){return new L.Filter.LEQ(a,b)},L.Filter.GEQ=L.Filter.BinaryComparison.extend({tagName:"ogc:PropertyIsGreaterThanOrEqualTo"}),L.Filter.geq=function(a,b){return new L.Filter.GEQ(a,b)},L.Filter.Like=L.Filter.Abstract.extend({tagName:"ogc:PropertyIsLike",wildCard:"*",singleChar:"#",escapeChar:"!",matchCase:!0,initialize:function(a,b,c){this.name=a,this.val=b;var d={wildCard:this.wildCard,singleChar:this.singleChar,escapeChar:this.escapeChar,matchCase:this.matchCase};this.attributes=L.extend(d,c||{})},buildFilterContent:function(a){var b=L.Filter.propertyName(this.name),c=L.Filter.literal(this.val);return a.appendChild(b),a.appendChild(c),a}}),L.Filter.like=function(a,b,c){return new L.Filter.Like(a,b,c)},L.Filter.IsNull=L.Filter.Abstract.extend({tagName:"ogc:PropertyIsNull",initialize:function(a){this.propertyName=a},buildFilterContent:function(a){a.appendChild(L.Filter.propertyName(this.propertyName))}}),L.Filter.isnull=function(a){return new L.Filter.IsNull(a)},L.Filter.IsBetween=L.Filter.Abstract.extend({tagName:"ogc:PropertyIsBetween",initialize:function(a,b,c){this.property=a,this.lowerBoundary=b,this.upperBoundary=c},buildFilterContent:function(a){a.appendChild(L.Filter.propertyElement(this.property));var b=L.XmlUtil.createElementNS("ogc:LowerBoundary");b.appendChild(L.Filter.literalElement(this.lowerBoundary)),a.appendChild(b);var c=L.XmlUtil.createElementNS("ogc:UpperBoundary");c.appendChild(L.Filter.literalElement(this.upperBoundary)),a.appendChild(c)}}),L.Filter.isbetween=function(a,b,c){return new L.Filter.IsBetween(a,b,c)},L.Filter.BinaryLogic=L.Filter.Abstract.extend({filters:null,initialize:function(){for(var a=[],b=0;b<arguments.length;b++)a.push(arguments[b]);this.filters=a},buildFilterContent:function(a){this.filters.forEach(function(b){a.appendChild(L.Filter.element(b))})}}),L.Filter.And=L.Filter.BinaryLogic.extend({tagName:"And"}),L.Filter.and=function(){return new(Function.prototype.bind.apply(L.Filter.And,arguments))},L.Filter.Or=L.Filter.BinaryLogic.extend({tagName:"Or"}),L.Filter.or=function(){return new(Function.prototype.bind.apply(L.Filter.Or,arguments))},L.Filter.Not=L.Filter.Abstract.extend({tagName:"Not",initialize:function(a){this.filter=a},buildFilterContent:function(a){a.appendChild(L.Filter.element(this.filter))}}),L.Filter.not=function(a){return new L.Filter.Not(a)},L.Filter.Function=L.Filter.Abstract.extend({tagName:"Function",initialize:function(){var a=arguments[0];this.attributes={name:a};for(var b=[],c=1;c<arguments.length;c++)b.push(arguments[c]);this.expressions=b},buildFilterContent:function(a){var b=this.expressions[0];a.appendChild(L.Filter.propertyElement(b));for(var c=1;c<this.expressions.length;c++){var d=this.expressions[c];a.appendChild(L.Filter.literalElement(d))}}}),L.Filter["function"]=function(){return new(Function.prototype.bind.apply(L.Filter.Function,arguments))},L.Format={},L.Format.Scheme=L.Class.extend({options:{geometryField:"Shape"},initialize:function(a){L.setOptions(this,a)},parse:function(a){for(var b=new L.GML.FeatureType({geometryField:this.options.geometryField}),c=a.getElementsByTagNameNS(L.XmlUtil.namespaces.xsd,"complexType")[0],d=c.getElementsByTagNameNS(L.XmlUtil.namespaces.xsd,"sequence")[0],e=0;e<d.children.length;e++){var f=d.children[e],g=f.attributes.name;if(g){var h=f.attributes.name.value,i=f.attributes.type;if(!i){var j=f.getElementsByTagNameNS(L.XmlUtil.namespaces.xsd,"restriction");i=j.attributes.base}if(i){var k=i.value.split(":").pop();h!==this.options.geometryField?b.appendField(h,k):b.geometryFields[h]=k}}}return b}}),L.Format.Base=L.Class.extend({defaultOptions:{crs:L.CRS.EPSG3857,coordsToLatLng:function(a){return new L.LatLng(a[1],a[0],a[2])},latLngToCoords:function(a){var b=[a.lng,a.lat];return a.alt!==c&&b.push(a.alt),b},geometryField:"Shape"},initialize:function(a){if(L.setOptions(this,L.extend({},this.defaultOptions,a)),a.crs){var b=a.crs;this.options.coordsToLatLng=function(a){var c=L.point(a[0],a[1]),d=b.projection.unproject(c);return a[2]&&(d.alt=a[2]),d},this.options.latLngToCoords=function(a){var c=L.latLng(a);return b.projection.project(c)}}},setFeatureDescription:function(a){this.namespaceUri=a.attributes.targetNamespace.value;var b=new L.Format.Scheme({geometryField:this.options.geometryField});this.featureType=b.parse(a)},responseToLayers:function(){throw"responseToLayers is abstract and should be implemented"}}),L.Format.GeoJSON=L.Format.Base.extend({outputFormat:"application/json",responseToLayers:function(a){for(var b=[],c=JSON.parse(a),d=0;d<c.features.length;d++){var e=this.processFeature(c.features[d]);e&&b.push(e)}return b},processFeature:function(a){var b=this.generateLayer(a);return b?(b.feature=a,b):null},generateLayer:function(a){var b=L.GeoJSON.geometryToLayer(a,this.options||null);return b?b:(console.log("Geometry field doesn' exist inside received feature: '"+a+"', so feature will be skipped and won't be converted into leaflet layer"),null)}}),L.GML=L.GML||{},L.GML.ParserContainerMixin={parsers:{},initializeParserContainer:function(){this.parsers={}},appendParser:function(a){this.parsers[a.elementTag]=a},parseElement:function(a,b){var c=this.parsers[a.tagName];if(!c)throw"unknown child element "+a.tagName;return c.parse(a,b)}},L.GML.Element=L.Class.extend({elementTag:"",parse:function(){throw"not implemented parse function in parser for "+this.elementTag}}),L.GML.Geometry=L.GML.Element.extend({elementOptions:function(a,b){var c=L.extend({},b),d=a.getAttribute("srsDimension");return d&&(c.dimension=parseInt(d)),c}}),L.GML.Coordinates=L.GML.Element.extend({defaultSeparator:{ds:".",cs:",",ts:" "},elementTag:"gml:coordinates",parse:function(a){var b=this.defaultSeparator.ds;a.attributes.decimal&&(b=a.attributes.decimal.value);var c=this.defaultSeparator.cs;a.attributes.cs&&(c=a.attributes.cs.value);var d=this.defaultSeparator.ts;a.attributes.ts&&(d=a.attributes.ts.value);for(var e=[],f=a.textContent.split(d),g=function(a){return"."!==b&&(a=a.replace(b,".")),parseFloat(a)},h=0;h<f.length;h++)e.push(f[h].split(c).map(g));return 1===e.length?e[0]:e}}),L.GML.Pos=L.GML.Element.extend({elementTag:"gml:pos",parse:function(a){return a.textContent.split(" ").map(function(a){return parseFloat(a)})}}),L.GML.PosList=L.GML.Element.extend({statics:{DIM:2},elementTag:"gml:posList",parse:function(a,b){var c=[];b=b||{};for(var d=b.dimension||L.GML.PosList.DIM,e=a.textContent.split(" "),f=0;f<e.length;f+=d){for(var g=[],h=f;h<f+d;h++)g.push(parseFloat(e[h]));c.push(g)}return c}}),L.GML.PointNode=L.GML.Geometry.extend({includes:L.GML.ParserContainerMixin,elementTag:"gml:Point",initialize:function(){this.initializeParserContainer(),this.appendParser(new L.GML.Pos),this.appendParser(new L.GML.Coordinates)},parse:function(a,b){return b=this.elementOptions(a,b),this.parseElement(a.firstElementChild,b)}}),L.GML.PointSequence=L.GML.Geometry.extend({includes:L.GML.ParserContainerMixin,initialize:function(){this.initializeParserContainer(),this.appendParser(new L.GML.Pos),this.appendParser(new L.GML.PosList),this.appendParser(new L.GML.Coordinates),this.appendParser(new L.GML.PointNode)},parse:function(a,b){b=this.elementOptions(a,b);var c=a.firstElementChild,d=[],e=c.tagName;if("gml:pos"===e||"gml:Point"===e)for(var f=this.parsers[e],g=a.getElementsByTagNameNS(L.XmlUtil.namespaces.gml,e.split(":").pop()),h=0;h<g.length;h++)d.push(f.parse(g[h],b));else d=this.parseElement(c,b);return d}}),L.GML.LinearRing=L.GML.PointSequence.extend({elementTag:"gml:LinearRing",parse:function(a,b){var c=L.GML.PointSequence.prototype.parse.call(this,a,b);return c.pop(),c}}),L.GML.LineStringNode=L.GML.PointSequence.extend({elementTag:"gml:LineString"}),L.GML.PolygonNode=L.GML.Geometry.extend({elementTag:"gml:Polygon",initialize:function(){this.linearRingParser=new L.GML.LinearRing},parse:function(a,b){b=this.elementOptions(a,b);for(var c=[],d=0;d<a.children.length;d++){var e=a.children[d];c.push(this.linearRingParser.parse(e.firstElementChild,b))}return c}}),L.GML.CoordsToLatLngMixin={transform:function(a,b){if(Array.isArray(a[0])){for(var c=[],d=0;d<a.length;d++)c.push(this.transform(a[d],b));return c}return b.coordsToLatLng(a)}},L.GML.Point=L.GML.PointNode.extend({includes:L.GML.CoordsToLatLngMixin,parse:function(a,b){var c=L.GML.PointNode.prototype.parse.call(this,a,b),d=new L.Marker;return d.setLatLng(this.transform(c,b)),d}}),L.GML.LineString=L.GML.LineStringNode.extend({includes:L.GML.CoordsToLatLngMixin,parse:function(a,b){var c=new L.Polyline([]),d=L.GML.LineStringNode.prototype.parse.call(this,a);return c.setLatLngs(this.transform(d,b)),c}}),L.GML.Polygon=L.GML.PolygonNode.extend({includes:L.GML.CoordsToLatLngMixin,parse:function(a,b){var c=new L.Polygon([]),d=L.GML.PolygonNode.prototype.parse.call(this,a,b);return c.setLatLngs(this.transform(d,b)),c}}),L.GML.MultiGeometry=L.GML.Geometry.extend({includes:[L.GML.ParserContainerMixin,L.GML.CoordsToLatLngMixin],initialize:function(){this.initializeParserContainer()},parse:function(a,b){b=this.elementOptions(a,b);for(var c=[],d=0;d<a.children.length;d++)for(var e=a.children[d],f=0;f<e.children.length;f++){var g=e.children[f];c.push(this.parseElement(g,b))}return this.transform(c,b)}}),L.GML.AbstractMultiPolyline=L.GML.MultiGeometry.extend({initialize:function(){L.GML.MultiGeometry.prototype.initialize.call(this),this.appendParser(new L.GML.LineStringNode)},parse:function(a,b){var c=L.GML.MultiGeometry.prototype.parse.call(this,a,b),d=new L.Polyline([]);return d.setLatLngs(c),d}}),L.GML.AbstractMultiPolygon=L.GML.MultiGeometry.extend({initialize:function(){L.GML.MultiGeometry.prototype.initialize.call(this),this.appendParser(new L.GML.PolygonNode)},parse:function(a,b){var c=L.GML.MultiGeometry.prototype.parse.call(this,a,b),d=new L.Polygon([]);return d.setLatLngs(c),d}}),L.GML.MultiLineString=L.GML.AbstractMultiPolyline.extend({elementTag:"gml:MultiLineString"}),L.GML.MultiCurve=L.GML.AbstractMultiPolyline.extend({elementTag:"gml:MultiCurve"}),L.GML.MultiPolygon=L.GML.AbstractMultiPolygon.extend({elementTag:"gml:MultiPolygon"}),L.GML.MultiSurface=L.GML.AbstractMultiPolygon.extend({elementTag:"gml:MultiSurface"}),L.GML.MultiPoint=L.GML.MultiGeometry.extend({elementTag:"gml:MultiPoint",initialize:function(){L.GML.MultiGeometry.prototype.initialize.call(this),this.appendParser(new L.GML.PointNode)},parse:function(a,b){for(var c=L.GML.MultiGeometry.prototype.parse.call(this,a,b),d=new L.FeatureGroup,e=0;e<c.length;e++){var f=new L.Marker;f.setLatLng(c[e]),d.addLayer(f)}return d}}),L.GML.FeatureType=L.Class.extend({options:{geometryField:"Shape"},primitives:[{types:["byte","short","int","integer","long","float","double","decimal"],parse:function(a){return 0===a?0:(a=String.prototype.trim.call(a||""),""===a?null:Number(a))},validate:function(a){return!isNaN(a)},type:"number"},{types:["string"],parse:function(a){return a},validate:function(a){return!0},type:"string"},{types:["boolean"],parse:function(a){return a=String.prototype.trim.call(a||"").toLowerCase(),"false"!==a},validate:function(a){return!0},type:"boolean"},{types:["date","time","datetime"],parse:function(a){return a=String.prototype.trim.call(a||""),""===a?null:new Date(a)},validate:function(a){return!isNaN(a)},type:"date"}],initialize:function(a){L.setOptions(this,a),this.fields={},this.fieldValidators={},this.fieldTypes={},this.geometryFields={}},appendField:function(a,b){var c=this;b=String.prototype.toLowerCase.call(b||""),this.primitives.forEach(function(d){d.types.indexOf(b)!==-1&&(c.fields[a]=d.parse,c.fieldValidators[a]=d.validate,c.fieldTypes[a]=d.type)})},parse:function(a){for(var b={},c=0;c<a.children.length;c++){var d=a.children[c],e=d.tagName.split(":").pop();if(e!==this.options.geometryField){var f=this.fields[e];f||(this.appendField(e,"string"),f=this.fields[e]),b[e]=f(d.textContent)}}return{type:"Feature",properties:b,id:a.attributes["gml:id"].value}}}),L.Format.GML=L.Format.Base.extend({includes:L.GML.ParserContainerMixin,outputFormat:"text/xml; subtype=gml/3.1.1",initialize:function(a){L.Format.Base.prototype.initialize.call(this,a),this.initializeParserContainer(),this.appendParser(new L.GML.Point),this.appendParser(new L.GML.LineString),this.appendParser(new L.GML.Polygon),this.appendParser(new L.GML.MultiLineString),this.appendParser(new L.GML.MultiPolygon),this.appendParser(new L.GML.MultiCurve),this.appendParser(new L.GML.MultiSurface),this.appendParser(new L.GML.MultiPoint)},responseToLayers:function(a){for(var b=[],c=L.XmlUtil.parseXml(a),d=c.documentElement,e=d.getElementsByTagNameNS(L.XmlUtil.namespaces.gml,"featureMember"),f=0;f<e.length;f++){var g=e[f].firstElementChild,h=this.processFeature(g);h&&b.push(h)}var i=d.getElementsByTagNameNS(L.XmlUtil.namespaces.gml,"featureMembers");if(i.length>0)for(var j=i[0].children,k=0;k<j.length;k++){var l=j[k],m=this.processFeature(l);m&&b.push(m)}return b},processFeature:function(a){var b=this.generateLayer(a);return b?(b.feature=this.featureType.parse(a),b):null},generateLayer:function(a){var b=a.getElementsByTagNameNS(this.namespaceUri,this.options.geometryField)[0];return b?this.parseElement(b.firstElementChild,this.options):(console.log("Geometry field '"+this.options.geometryField+"' doesn' exist inside received feature: '"+a.innerHTML+"', so feature will be skipped and won't be converted into leaflet layer"),null)}}),L.Util.project=function(a,b){if(L.Util.isArray(b)){var c=[];return b.forEach(function(b){c.push(L.Util.project(a,b))}),c}return a.projection.project(b)},L.Util.isFlat=L.LineUtil.isFlat||L.LineUtil._flat||L.Polyline._flat,L.GmlUtil={posNode:function(a){return L.XmlUtil.createElementNS("gml:pos",{srsDimension:2},{value:a.x+" "+a.y})},posListNode:function(a,b){var c=[];if(a.forEach(function(a){c.push(a.x+" "+a.y)}),b&&a.length>0){var d=a[0];c.push(d.x+" "+d.y)}var e=c.join(" ");return L.XmlUtil.createElementNS("gml:posList",{},{value:e})}},L.CircleMarker.include({toGml:function(a){var b=L.XmlUtil.createElementNS("gml:Point",{srsName:a.code});return b.appendChild(L.GmlUtil.posNode(L.Util.project(a,this.getLatLng()))),b}}),L.LatLngBounds.prototype.toGml=function(a){var b=a.project(this.getSouthWest()),c=a.project(this.getNorthEast()),d=L.XmlUtil.createElementNS("gml:Envelope",{srsName:a.code});return d.appendChild(L.XmlUtil.createElementNS("gml:lowerCorner",{},{value:b.x+" "+b.y})),d.appendChild(L.XmlUtil.createElementNS("gml:upperCorner",{},{value:c.x+" "+c.y})),d},L.Marker.include({toGml:function(a){var b=L.XmlUtil.createElementNS("gml:Point",{srsName:a.code});return b.appendChild(L.GmlUtil.posNode(L.Util.project(a,this.getLatLng()))),b}}),L.Polygon.include({toGml:function(a,b){for(var c=this.getLatLngs(),d=[],e=0;e<c.length;e++){var f=c[e],g=L.Util.isFlat(f),h=L.XmlUtil.createElementNS("gml:Polygon",{srsName:a.code,srsDimension:2});if(h.appendChild(L.XmlUtil.createElementNS("gml:exterior")).appendChild(L.XmlUtil.createElementNS("gml:LinearRing",{srsDimension:2})).appendChild(L.GmlUtil.posListNode(L.Util.project(a,g?f:f[0]),!0)),!g)for(var i=1;i<f.length;i++)h.appendChild(L.XmlUtil.createElementNS("gml:interior")).appendChild(L.XmlUtil.createElementNS("gml:LinearRing",{srsDimension:2})).appendChild(L.GmlUtil.posListNode(L.Util.project(a,f[i]),!0));d.push(h)}if(1===d.length&&!b)return d[0];for(var j=L.XmlUtil.createElementNS("gml:MultiSurface",{srsName:a.code,srsDimension:2}),k=j.appendChild(L.XmlUtil.createElementNS("gml:surfaceMembers")),l=0;l<d.length;l++)k.appendChild(d[l]);return j}}),L.Polyline.include({_lineStringNode:function(a,b){var c=L.XmlUtil.createElementNS("gml:LineString",{srsName:a.code,srsDimension:2});return c.appendChild(L.GmlUtil.posListNode(L.Util.project(a,b),!1)),c},toGml:function(a,b){var c=this.getLatLngs(),d=[];if(L.Util.isFlat(c))d.push(this._lineStringNode(a,c));else for(var e=0;e<c.length;e++)d.push(this._lineStringNode(a,c[e]));if(1===d.length&&!b)return d[0];for(var f=L.XmlUtil.createElementNS("gml:MultiCurve",{srsName:a.code,srsDimension:2}),g=f.appendChild(L.XmlUtil.createElementNS("gml:curveMembers")),h=0;h<d.length;h++)g.appendChild(d[h]);return f}});var d={setProperties:function(a){for(var b in a)a.hasOwnProperty(b)&&(this.feature.properties[b]=a[b])},getProperty:function(a){return this.feature.properties[a]},deleteProperties:function(a){for(var b=0;b<a.length;b++)this.feature.properties.hasOwnProperty(a[b])&&delete this.feature.properties[a[b]]}};L.Marker.include(d),L.Path.include(d),L.WFS=L.FeatureGroup.extend({_capabilities:null,_boundingBox:null,options:{crs:L.CRS.EPSG3857,showExisting:!0,geometryField:"Shape",url:"",version:"1.1.0",typeNS:"",typeName:"",typeNSName:"",maxFeatures:null,filter:null,opacity:1,fillOpacity:1,style:{color:"black",weight:1,opacity:1,fillOpacity:1},namespaceUri:"",withCredentials:!1},state:{},initialize:function(a,b){L.setOptions(this,a),this.state={exist:"exist"},this._layers={},this.readFormat=b||new L.Format.GML({crs:this.options.crs,geometryField:this.options.geometryField}),this.options.typeNSName=this.namespaceName(this.options.typeName),this.options.srsName=this.options.crs.code,this._updateOpacity();var c=this;this.describeFeatureType(function(){c.options.showExisting?c.loadFeatures(c.options.filter):c.fire("load",{})},function(a){c.fire("error",{error:new Error(a)})})},namespaceName:function(a){return this.options.typeNS+":"+a},describeFeatureType:function(a,b){var c=L.XmlUtil.createElementNS("wfs:DescribeFeatureType",{service:"WFS",version:this.options.version});c.appendChild(L.XmlUtil.createElementNS("TypeName",{},{value:this.options.typeNSName}));var d=this;L.Util.request({url:this.options.url,data:L.XmlUtil.serializeXmlDocumentString(c),headers:this.options.headers||{},withCredentials:this.options.withCredentials,success:function(c){var e=L.XmlUtil.parseOwsExceptionReport(c);if(e)return void("function"==typeof b&&b(e.message));var f=L.XmlUtil.parseXml(c),g=f.documentElement;d.readFormat.setFeatureDescription(g),d.options.namespaceUri=g.attributes.targetNamespace.value,"function"==typeof a&&a()},error:function(a){"function"==typeof b&&b(a)}})},getFeature:function(a){var b=L.XmlUtil.createElementNS("wfs:GetFeature",{service:"WFS",version:this.options.version,maxFeatures:this.options.maxFeatures,outputFormat:this.readFormat.outputFormat}),c=b.appendChild(L.XmlUtil.createElementNS("wfs:Query",{typeName:this.options.typeNSName,srsName:this.options.srsName}));return a&&c.appendChild(L.filter(a)),b},loadFeatures:function(a){var b=this;L.Util.request({url:this.options.url,data:L.XmlUtil.serializeXmlDocumentString(b.getFeature(a)),headers:this.options.headers||{},withCredentials:this.options.withCredentials,success:function(a){var c=L.XmlUtil.parseOwsExceptionReport(a);if(c)return b.fire("error",{error:new Error(c.message)}),b;var d=b.readFormat.responseToLayers(a,{coordsToLatLng:b.options.coordsToLatLng,pointToLayer:b.options.pointToLayer});return"function"==typeof b.options.style?d.forEach(function(a){a.state=b.state.exist,a.setStyle&&a.setStyle(b.options.style(a)),b.addLayer(a)}):(d.forEach(function(a){a.state=b.state.exist,b.addLayer(a)}),b.setStyle(b.options.style)),b.fire("load",{responseText:a,layers:d}),b},error:function(a){return b.fire("error",{error:new Error(a)}),b}})},getCapabilities:function(a,b){var c=this._capabilities;if(c&&"function"==typeof a)return void a(c);var d=L.XmlUtil.createElementNS("wfs:GetCapabilities",{service:"WFS",version:this.options.version}),e=this;L.Util.request({url:this.options.url,data:L.XmlUtil.serializeXmlDocumentString(d),headers:this.options.headers||{},withCredentials:this.options.withCredentials,success:function(d){var f=L.XmlUtil.parseOwsExceptionReport(d);if(f)return void("function"==typeof b&&b(new Error(f.message)));try{c=L.XmlUtil.parseXml(d).documentElement}catch(g){return void("function"==typeof b&&b(g))}e._capabilities=c,"function"==typeof a&&a(c)},error:function(a){"function"==typeof b&&b(new Error(a))}})},getBoundingBox:function(a,b){var c=this._boundingBox;if(c&&"function"==typeof a)return void a(c);var d=this;this.getCapabilities(function(b){for(var e=b.getElementsByTagName("FeatureTypeList")[0],f=e.getElementsByTagName("FeatureType"),g=0,h=f.length;g<h;g++){var i=f[g],j=L.XmlUtil.getNodeText(i.getElementsByTagName("Name")[0]);if(j===d.options.typeNSName){var k=i.getElementsByTagNameNS(L.XmlUtil.namespaces.ows,"WGS84BoundingBox")[0],l=k.getElementsByTagNameNS(L.XmlUtil.namespaces.ows,"LowerCorner")[0],m=k.getElementsByTagNameNS(L.XmlUtil.namespaces.ows,"UpperCorner")[0],n=L.XmlUtil.getNodeText(l),o=L.XmlUtil.getNodeText(m),p=n.split(" ").reverse(),q=o.split(" ").reverse();c=L.latLngBounds([p,q]);break}}d._boundingBox=c,"function"==typeof a&&a(c)},function(a){"function"==typeof b&&b(new Error(a))})},setOpacity:function(a,b){return this.options.opacity=a,this.options.fillOpacity=b||a,this._updateOpacity(),this},_updateOpacity:function(){var a=L.extend(this.options.style||{},{opacity:this.options.opacity,fillOpacity:this.options.fillOpacity});this.setStyle(a)}}),L.wfs=function(a,b){return new L.WFS(a,b)},L.WFST=L.WFS.extend({options:{forceMulti:!1},initialize:function(a,b){L.WFS.prototype.initialize.call(this,a,b),this.state=L.extend(this.state,{insert:"insertElement",update:"updateElement",remove:"removeElement"}),this.changes={}},addLayer:function(a){if(L.FeatureGroup.prototype.addLayer.call(this,a),a.feature||(a.feature={properties:{}}),!a.state){a.state=this.state.insert;var b=this.getLayerId(a);this.changes[b]=a}return this},removeLayer:function(a){L.FeatureGroup.prototype.removeLayer.call(this,a);var b=this.getLayerId(a);if(b in this.changes){var c=this.changes[b];c.state===this.state.insert?delete this.changes[b]:c.state=this.state.remove}else a.state=this.state.remove,this.changes[b]=a},editLayer:function(a){a.state!==this.state.insert&&(a.state=this.state.update);var b=this.getLayerId(a);return this.changes[b]=a,this},save:function(){var a=L.XmlUtil.createElementNS("wfs:Transaction",{service:"WFS",version:this.options.version}),b=[];for(var c in this.changes){var d=this.changes[c],e=this[d.state](d);a.appendChild(e),d.state===this.state.insert&&b.push(d)}var f=this;return L.Util.request({url:this.options.url,data:L.XmlUtil.serializeXmlDocumentString(a),headers:this.options.headers||{},withCredentials:this.options.withCredentials,success:function(a){var c=L.XmlUtil.parseXml(a),d=L.XmlUtil.parseOwsExceptionReport(c);if(null!==d)return void f.fire("save:failed",d);for(var e=L.XmlUtil.evaluate("//wfs:InsertResults/wfs:Feature/ogc:FeatureId/@fid",c),g=[],h=e.iterateNext();h;)g.push(new L.Filter.GmlObjectID(h.value)),h=e.iterateNext();b.forEach(function(a){L.FeatureGroup.prototype.removeLayer.call(f,a)}),f.once("load",function(a){f.fire("save:success",{layers:a.layers}),f.changes={}}),f.loadFeatures(g)},error:function(a){f.fire("save:failed",a)}}),this}}),L.wfst=function(a,b){return new L.WFST(a,b)},L.WFST.include({gmlFeature:function(a){var b=L.XmlUtil.createElementNS(this.options.typeNSName,{},{uri:this.options.namespaceUri}),c=a.feature;for(var d in c.properties)b.appendChild(this.gmlProperty(d,c.properties[d]));return b.appendChild(this.gmlProperty(this.options.geometryField,a.toGml(this.options.crs,this.options.forceMulti))),b},gmlProperty:function(a,b){var d=L.XmlUtil.createElementNS(this.namespaceName(a));return b instanceof Element?d.appendChild(b):null===b||b===c||""===b?L.XmlUtil.setAttributes(d,{"xsi:nil":!0}):d.appendChild(L.XmlUtil.createTextNode(b)),d},wfsProperty:function(a,b){var c=L.XmlUtil.createElementNS("wfs:Property");c.appendChild(L.XmlUtil.createElementNS("wfs:Name",{},{value:a}));var d=L.XmlUtil.createElementNS("wfs:Value");
return b instanceof Element?d.appendChild(b):d.appendChild(L.XmlUtil.createTextNode(b)),c.appendChild(d),c}}),L.WFST.include({insertElement:function(a){var b=L.XmlUtil.createElementNS("wfs:Insert");return b.appendChild(this.gmlFeature(a)),b},updateElement:function(a){var b=L.XmlUtil.createElementNS("wfs:Update",{typeName:this.options.typeNSName}),c=a.feature;for(var d in c.properties)c.properties.hasOwnProperty(d)&&b.appendChild(this.wfsProperty(d,c.properties[d]));b.appendChild(this.wfsProperty(this.namespaceName(this.options.geometryField),a.toGml(this.options.crs,this.options.forceMulti)));var e=new L.Filter.GmlObjectID(a.feature.id);return b.appendChild(L.filter(e)),b},removeElement:function(a){var b=L.XmlUtil.createElementNS("wfs:Delete",{typeName:this.options.typeNSName}),c=new L.Filter.GmlObjectID(a.feature.id);return b.appendChild(L.filter(c)),b}})}(window,document);
;/*! leaflet-wfst 2.0.1-beta.25 2019-11-09 */
(function(window, document, undefined) {

"use strict";

L.XmlUtil = {
  namespaces: {
    xlink: 'http://www.w3.org/1999/xlink',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xsd: 'http://www.w3.org/2001/XMLSchema',
    xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    wfs: 'http://www.opengis.net/wfs',
    gml: 'http://www.opengis.net/gml',
    ogc: 'http://www.opengis.net/ogc',
    ows: 'http://www.opengis.net/ows'
  },

  // TODO: find another way to create a new document with doctype text/xml?
  xmldoc: (new DOMParser()).parseFromString('<root />', 'text/xml'),

  setAttributes: function (node, attributes) {
    for (var name in attributes) {
      if (attributes[name] != null && attributes[name].toString) {
        var value = attributes[name].toString();
        var uri = this.namespaces[name.substring(0, name.indexOf(':'))] || null;
        node.setAttributeNS(uri, name, value);
      }
    }
  },

  evaluate: function (xpath, xml) {
    var xmlDoc = xml;
    if (!(xmlDoc instanceof Document)) {
      xmlDoc = this.parseXml(xml);
    }

    var xpe = new XPathEvaluator();
    var nsResolver = xpe.createNSResolver(xmlDoc.documentElement);

    return xpe.evaluate(xpath, xmlDoc, nsResolver, XPathResult.ANY_TYPE, null);
  },

  createElementNS: function (name, attributes, options) {
    options = options || {};

    var uri = options.uri;

    if (!uri) {
      uri = this.namespaces[name.substring(0, name.indexOf(':'))];
    }

    if (!uri) {
      uri = this.namespaces[options.prefix];
    }

    var node = uri ? this.xmldoc.createElementNS(uri, name) : this.xmldoc.createElement(name);

    if (attributes) {
      this.setAttributes(node, attributes);
    }

    if (options.value != null) {
      node.appendChild(this.xmldoc.createTextNode(options.value));
    }

    return node;
  },

  createTextNode: function (value) {
    if(value === null || value === undefined) {
      value = '';
    } else if(value instanceof Date) {
      value = value.toISOString();
    }

    return this.xmldoc.createTextNode(value);
  },

  getNodeText: function (node) {
    if (!node) {
      return '';
    }

    return node.innerText || node.textContent || node.text;
  },

  serializeXmlDocumentString: function (node) {
    var doc = document.implementation.createDocument('', '', null);
    doc.appendChild(node);
    var serializer = new XMLSerializer();
    return serializer.serializeToString(doc);
  },

  serializeXmlToString: function (node) {
    var serializer = new XMLSerializer();
    return serializer.serializeToString(node);
  },

  parseXml: function (rawXml) {
    if (typeof window.DOMParser !== 'undefined') {
      return (new window.DOMParser()).parseFromString(rawXml, 'text/xml');
    } else if (typeof window.ActiveXObject !== 'undefined' && new window.ActiveXObject('Microsoft.XMLDOM')) {
      var xmlDoc = new window.ActiveXObject('Microsoft.XMLDOM');
      xmlDoc.async = 'false';
      xmlDoc.loadXML(rawXml);
      return xmlDoc;
    } else {
      throw new Error('No XML parser found');
    }
  },

  parseOwsExceptionReport: function (xml) {
    var xmlDoc = xml;
    if (!(xmlDoc instanceof Document)) {
      xmlDoc = this.parseXml(xml);
    }

    var exceptionReportElement = xmlDoc.documentElement;
    if (!exceptionReportElement || exceptionReportElement.tagName !== 'ows:ExceptionReport') {
      return null;
    }

    var exceptionReport = {
      exceptions: [],
      message: ''
    };

    var exceptionsNodes = exceptionReportElement.getElementsByTagNameNS(L.XmlUtil.namespaces.ows, 'Exception');
    for (var i = 0, exceptionsNodesCount = exceptionsNodes.length; i < exceptionsNodesCount; i++) {
      var exceptionNode = exceptionsNodes[i];
      var exceptionCode = exceptionNode.getAttribute('exceptionCode');
      var exceptionsTextNodes = exceptionNode.getElementsByTagNameNS(L.XmlUtil.namespaces.ows, 'ExceptionText');
      var exception = {
        code: exceptionCode,
        text: ''
      };

      for (var j = 0, textNodesCount = exceptionsTextNodes.length; j < textNodesCount; j++) {
        var exceptionTextNode = exceptionsTextNodes[j];
        var exceptionText = exceptionTextNode.innerText || exceptionTextNode.textContent || exceptionTextNode.text;

        exception.text += exceptionText;
        if (j < textNodesCount - 1) {
          exception.text += '. ';
        }
      }

      exceptionReport.message += exception.code + ' - ' + exception.text;
      if (i < exceptionsNodesCount - 1) {
        exceptionReport.message += ' ';
      }

      exceptionReport.exceptions.push(exception);
    }

    return exceptionReport;
  }
};

L.Util.request = function (options) {
  options = L.extend({
    async: true,
    method: 'POST',
    data: '',
    params: {},
    headers: {},
    url: window.location.href,
    withCredentials: false,
    success: function (data) {
      console.log(data);
    },
    error: function (data) {
      console.log('Ajax request fail');
      console.log(data);
    },
    complete: function () {
    }
  }, options);

  // good bye IE 6,7
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        options.success(xhr.responseText);
      } else {
        options.error(xhr.responseText);
      }
      options.complete();
    }
  };
  xhr.withCredentials = options.withCredentials;

  var url = options.url + L.Util.getParamString(options.params, options.url);

  xhr.open(options.method, url, options.async);
  for (var header in options.headers) {
    xhr.setRequestHeader(header, options.headers[header]);
  }

  xhr.send(options.data);
};

L.Filter = {};

L.filter = function (filters) {
  var result = L.XmlUtil.createElementNS('ogc:Filter');

  if (Array.isArray(filters)) {
    filters.forEach(function (element) {
      result.appendChild(element instanceof Element ? element : element.toGml());
    });
  } else if (filters) {
    result.appendChild(filters instanceof Element ? filters : filters.toGml());
  }

  return result;
};

L.Filter.propertyName = function (value) {
  return L.XmlUtil.createElementNS('ogc:PropertyName', {}, { value: value });
};

L.Filter.literal = function (value) {
  return L.XmlUtil.createElementNS('ogc:Literal', {}, { value: value });
};

L.Filter.element = function(value) {
  if(value instanceof Element) {
    return value;
  }

  return value.toGml();
};

L.Filter.propertyElement = function (value) {
  if (value instanceof Element) {
    return value;
  }

  if (value && typeof (value.toGml) === "function") {
    return value.toGml();
  }

  return L.Filter.propertyName(value);
};

L.Filter.literalElement = function (value) {
  if (value instanceof Element) {
    return value;
  }

  if (value && typeof (value.toGml) === "function") {
    return value.toGml();
  }

  return L.Filter.literal(value);
};

L.Filter.Abstract = L.Class.extend({
  attributes: {},

  options: {},

  tagName: null,

  buildFilterContent: function() {
    throw "Build filter content is abstract and should be implemented";
  },

  toGml: function() {
    var filterElement = L.XmlUtil.createElementNS(this.tagName, this.attributes, this.options);
    this.buildFilterContent(filterElement);
    return filterElement;
  }
});

L.Filter.BinarySpatial = L.Filter.Abstract.extend({
  initialize: function (propertyName, value, crs) {
    this.propertyName = propertyName;
    this.value = value;
    this.crs = crs;
  },

  buildFilterContent: function (filterElement) {
    filterElement.appendChild(L.Filter.propertyName(this.propertyName));
    if (typeof(this.value) === "string") {
      filterElement.appendChild(L.Filter.propertyName(this.value));
    } else {
      filterElement.appendChild(this.value.toGml(this.crs));
    }
    return filterElement;
  }
});

L.Filter.Equals = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Equals'
});

L.Filter.equals = function(options) {
  return new L.Filter.Equals(options);
};

L.Filter.Disjoint = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Disjoint'
});

L.Filter.disjoint = function(options) {
  return new L.Filter.Disjoint(options);
};

L.Filter.Touches = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Touches'
});

L.Filter.touches = function(options) {
  return new L.Filter.Touches(options);
};

L.Filter.Within = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Within'
});

L.Filter.within = function(options) {
  return new L.Filter.Within(options);
};

L.Filter.Overlaps = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Overlaps'
});

L.Filter.overlaps = function(options) {
  return new L.Filter.Overlaps(options);
};

L.Filter.Crosses = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Crosses'
});

L.Filter.crosses = function(options) {
  return new L.Filter.Crosses(options);
};

L.Filter.Intersects = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Intersects'
});

L.Filter.intersects = function(options) {
  return new L.Filter.Intersects(options);
};

L.Filter.Contains = L.Filter.BinarySpatial.extend({
  tagName: 'ogc:Contains'
});

L.Filter.contains = function(options) {
  return new L.Filter.Contains(options);
};

L.Filter.DistanceBuffer = L.Filter.Abstract.extend({
  initialize: function (propertyName, geometry, crs, distance, units) {
    this.propertyName = propertyName;
    this.geomerty = geometry;
    this.crs = crs;
    this.distance = distance;
    this.units = units;
  },

  buildFilterContent: function (filterElement) {
    filterElement.appendChild(L.Filter.propertyName(this.propertyName));
    filterElement.appendChild(this.geomerty.toGml(this.crs));
    filterElement.appendChild(L.XmlUtil.createElementNS('ogc:Distance', { 'units': this.units }, { value: this.distance }));
  }
});

L.Filter.DWithin = L.Filter.DistanceBuffer.extend({
  tagName: 'ogc:DWithin'
});

L.Filter.dwithin = function(propertyName, geometry, crs, distance, units) {
  return new L.Filter.DWithin(propertyName, geometry, crs, distance, units);
};

L.Filter.Beyond = L.Filter.DistanceBuffer.extend({
  tagName: 'ogc:Beyond'
});

L.Filter.beyond = function(propertyName, geometry, crs, distance, units) {
  return new L.Filter.Beyond(propertyName, geometry, crs, distance, units);
};

L.Filter.BBox = L.Filter.Abstract.extend({
  tagName: 'ogc:BBOX',

  geometryField: null,

  bbox: null,

  crs: null,

  initialize: function (geometryField, bbox, crs) {
    this.bbox = bbox;
    this.geometryField = geometryField;
    this.crs = crs;
  },

  buildFilterContent: function (filterElement) {
    if (this.geometryField) {
      filterElement.appendChild(L.Filter.propertyName(this.geometryField));
    }

    filterElement.appendChild(this.bbox.toGml(this.crs));
  }
});

L.Filter.bbox = function (geometryField, bbox, crs) {
  return new L.Filter.BBox(geometryField, bbox, crs);
};

L.Filter.GmlObjectID = L.Filter.Abstract.extend({
  tagName: 'ogc:GmlObjectId',

  initialize: function (id) {
    this.attributes =  { 'gml:id': id };
  },

  buildFilterContent: function() {
  }
});

L.Filter.gmlobjectid = function(id) {
  return new L.Filter.GmlObjectID(id);
};

L.Filter.BinaryOperator = L.Filter.Abstract.extend({
  initialize: function (firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  },

  buildFilterContent: function (filterElement) {
    filterElement.appendChild(L.Filter.propertyElement(this.firstValue));
    filterElement.appendChild(L.Filter.literalElement(this.secondValue));
  }
});

L.Filter.Add = L.Filter.BinaryOperator.extend({
  tagName: 'Add'
});

L.Filter.add = function(a, b) {
  return new L.Filter.Add(a, b);
};

L.Filter.Sub = L.Filter.BinaryOperator.extend({
  tagName: 'Sub'
});

L.Filter.sub = function(a, b) {
  return new L.Filter.Sub(a, b);
};

L.Filter.Mul = L.Filter.BinaryOperator.extend({
  tagName: 'Mul'
});

L.Filter.mul = function(a, b) {
  return new L.Filter.Mul(a, b);
};

L.Filter.Div = L.Filter.BinaryOperator.extend({
  tagName: 'Div'
});

L.Filter.div = function(a, b) {
  return new L.Filter.Div(a, b);
};

L.Filter.BinaryComparison = L.Filter.BinaryOperator.extend({
  matchCase: false,

  initialize: function(firstValue, secondValue, matchCase) {
    L.Filter.BinaryOperator.prototype.initialize.call(this, firstValue, secondValue);
    this.attributes = { matchCase: !!matchCase };
  }
});

L.Filter.EQ = L.Filter.BinaryComparison.extend({
  tagName: 'ogc:PropertyIsEqualTo'
});

L.Filter.eq = function(firstValue, secondValue) {
  return new L.Filter.EQ(firstValue, secondValue);
};

L.Filter.NotEQ = L.Filter.BinaryComparison.extend({
  tagName: 'ogc:PropertyIsNotEqualTo'
});

L.Filter.neq = function(firstValue, secondValue) {
  return new L.Filter.NotEQ(firstValue, secondValue);
};

L.Filter.LT = L.Filter.BinaryComparison.extend({
  tagName: 'ogc:PropertyIsLessThan'
});

L.Filter.lt = function(firstValue, secondValue) {
  return new L.Filter.LT(firstValue, secondValue);
};

L.Filter.GT = L.Filter.BinaryComparison.extend({
  tagName: 'ogc:PropertyIsGreaterThan'
});

L.Filter.gt = function(firstValue, secondValue) {
  return new L.Filter.GT(firstValue, secondValue);
};

L.Filter.LEQ = L.Filter.BinaryComparison.extend({
  tagName: 'ogc:PropertyIsLessThanOrEqualTo'
});

L.Filter.leq = function(firstValue, secondValue) {
  return new L.Filter.LEQ(firstValue, secondValue);
};

L.Filter.GEQ = L.Filter.BinaryComparison.extend({
  tagName: 'ogc:PropertyIsGreaterThanOrEqualTo'
});

L.Filter.geq = function(firstValue, secondValue) {
  return new L.Filter.GEQ(firstValue, secondValue);
};

L.Filter.Like = L.Filter.Abstract.extend({
  tagName: 'ogc:PropertyIsLike',

  wildCard: '*',
  singleChar: '#',
  escapeChar: '!',
  matchCase: true,

  initialize: function (name, val, attributes) {
    this.name = name;
    this.val = val;
    var defaultAttributes = { wildCard: this.wildCard, singleChar: this.singleChar, escapeChar: this.escapeChar, matchCase: this.matchCase };
    this.attributes = L.extend(defaultAttributes, attributes || {});
  },

  buildFilterContent: function (filterElement) {
    var nameElement = L.Filter.propertyName(this.name);
    var valueElement = L.Filter.literal(this.val);
    filterElement.appendChild(nameElement);
    filterElement.appendChild(valueElement);
    return filterElement;
  }
});

L.Filter.like = function(name, val, attributes) {
  return new L.Filter.Like(name, val, attributes);
};

L.Filter.IsNull = L.Filter.Abstract.extend({
  tagName: 'ogc:PropertyIsNull',

  initialize: function (propertyName) {
    this.propertyName = propertyName;
  },

  buildFilterContent: function (filterElement) {
    filterElement.appendChild(L.Filter.propertyName(this.propertyName));
  }
});

L.Filter.isnull = function(propertyName) {
  return new L.Filter.IsNull(propertyName);
};

L.Filter.IsBetween = L.Filter.Abstract.extend({
  tagName: 'ogc:PropertyIsBetween',

  initialize: function (property, lowerBoundary, upperBoundary) {
    this.property = property;
    this.lowerBoundary = lowerBoundary;
    this.upperBoundary = upperBoundary;
  },

  buildFilterContent: function (filterElement) {
    filterElement.appendChild(L.Filter.propertyElement(this.property));

    var lowerBoundaryElement = L.XmlUtil.createElementNS('ogc:LowerBoundary');
    lowerBoundaryElement.appendChild(L.Filter.literalElement(this.lowerBoundary));

    filterElement.appendChild(lowerBoundaryElement);

    var upperBoundaryElement = L.XmlUtil.createElementNS('ogc:UpperBoundary');
    upperBoundaryElement.appendChild(L.Filter.literalElement(this.upperBoundary));

    filterElement.appendChild(upperBoundaryElement);
  }
});

L.Filter.isbetween = function(property, lowerBoundary, upperBoundary) {
  return new L.Filter.IsBetween(property, lowerBoundary, upperBoundary);
};

L.Filter.BinaryLogic = L.Filter.Abstract.extend({
  filters: null,

  initialize: function () {
    var filters = [];
    for (var i = 0; i < arguments.length; i++) {
      filters.push(arguments[i]);
    }

    this.filters = filters;
  },

  buildFilterContent: function (filterElement) {
    this.filters.forEach(function(filter) {
      filterElement.appendChild(L.Filter.element(filter));
    });
  }
});

L.Filter.And = L.Filter.BinaryLogic.extend({
  tagName: 'And'
});

L.Filter.and = function() {
  return new (Function.prototype.bind.apply(L.Filter.And, arguments))();
};

L.Filter.Or = L.Filter.BinaryLogic.extend({
  tagName: 'Or'
});

L.Filter.or = function() {
  return new (Function.prototype.bind.apply(L.Filter.Or, arguments))();
};

L.Filter.Not = L.Filter.Abstract.extend({
  tagName: 'Not',

  initialize: function(filter) {
    this.filter = filter;
  },

  buildFilterContent: function(filterElement) {
    filterElement.appendChild(L.Filter.element(this.filter));
  }
});

L.Filter.not = function(filter) {
  return new L.Filter.Not(filter);
};

L.Filter.Function = L.Filter.Abstract.extend({
  tagName: 'Function',

  initialize: function () {
    var functionName = arguments[0];
    this.attributes = { name: functionName };
    var expressions = [];
    for (var i = 1; i < arguments.length; i++) {
      expressions.push(arguments[i]);
    }

    this.expressions = expressions;
  },

  buildFilterContent: function (filterElement) {
    var firstArgument = this.expressions[0];
    filterElement.appendChild(L.Filter.propertyElement(firstArgument));

    for (var i = 1; i < this.expressions.length; i++) {
      var functionArgument = this.expressions[i];
      filterElement.appendChild(L.Filter.literalElement(functionArgument));
    }
  }
});

L.Filter.function = function() {
  return new (Function.prototype.bind.apply(L.Filter.Function, arguments))();
};

L.Format = {};

L.Format.Scheme = L.Class.extend({
  options: {
    geometryField: 'Shape',
  },

  initialize: function (options) {
    L.setOptions(this, options);
  },

  parse: function (element) {
    var featureType = new L.GML.FeatureType({
      geometryField: this.options.geometryField
    });
    var complexTypeDefinition = element.getElementsByTagNameNS(L.XmlUtil.namespaces.xsd, 'complexType')[0];
    var properties = complexTypeDefinition.getElementsByTagNameNS(L.XmlUtil.namespaces.xsd, 'sequence')[0];
    for (var i = 0; i < properties.children.length; i++) {
      var node = properties.children[i];
      var propertyAttr = node.attributes.name;
      if (!propertyAttr) {
        continue;
      }

      var propertyName = node.attributes.name.value;
      var typeAttr = node.attributes.type;
      if (!typeAttr) {
        var restriction = node.getElementsByTagNameNS(L.XmlUtil.namespaces.xsd, 'restriction');
        typeAttr = restriction.attributes.base;
      }

      if (!typeAttr) {
        continue;
      }

      var typeName = typeAttr.value.split(':').pop();

      if (propertyName === this.options.geometryField) {
        featureType.geometryFields[propertyName] = typeName;
        continue;
      }

      featureType.appendField(propertyName, typeName);
    }

    return featureType;
  }
});

L.Format.Base = L.Class.extend({

  /**
   * @property defaultOptions
   */
  defaultOptions: {
    crs: L.CRS.EPSG3857,
    coordsToLatLng: function (coords) {
      return new L.LatLng(coords[1], coords[0], coords[2]);
    },
    latLngToCoords: function (latlng) {
      var coords = [latlng.lng, latlng.lat];
      if (latlng.alt !== undefined) {
        coords.push(latlng.alt);
      }
      return coords;
    },
    geometryField: 'Shape'
  },

  initialize: function (options) {
    L.setOptions(this, L.extend({}, this.defaultOptions, options));
    if (options.crs) {
      var crs = options.crs;
      this.options.coordsToLatLng = function (coords) {
        var point = L.point(coords[0], coords[1]);
        var ll = crs.projection.unproject(point);
        if (coords[2]) {
          ll.alt = coords[2];
        }
        return ll;
      };
      this.options.latLngToCoords = function (ll) {
        var latLng = L.latLng(ll);
        return crs.projection.project(latLng);
      };
    }
  },

  /**
   * Generate feature description by response from DescribeFeatureType
   *
   * @method setFeatureDescription
   * @param {Element} featureInfo response from WFS DescribeFeatureType request
   */
  setFeatureDescription: function (featureInfo) {
    this.namespaceUri = featureInfo.attributes.targetNamespace.value;
    var schemeParser = new L.Format.Scheme({
      geometryField: this.options.geometryField
    });
    this.featureType = schemeParser.parse(featureInfo);
  },

  responseToLayers: function() {
    throw "responseToLayers is abstract and should be implemented";
  }
});

L.Format.GeoJSON = L.Format.Base.extend({

  outputFormat: 'application/json',

  /**
   * Convert raw data to leaflet layers array
   *
   * @method responseToLayers
   * @param {string} rawData
   * @return {Array} Array of leaflet layers
   */
  responseToLayers: function (rawData) {
    var layers = [];
    var geoJson = JSON.parse(rawData);

    for (var i = 0; i < geoJson.features.length; i++) {
      var layer = this.processFeature(geoJson.features[i]);
      if (layer) {
        layers.push(layer);
      }
    }

    return layers;
  },

  /**
   * Create layer and set its properties from geoJson feature
   *
   * @method processFeature
   * @param {json} feature
   * @return {Layer} leaflet layer with "feature" property with feature fields values
   * @private
   */
  processFeature: function (feature) {
    var layer = this.generateLayer(feature);
    if (!layer) {
      return null;
    }

    layer.feature = feature;
    return layer;
  },

  /**
   * Create leaflet layer from geoJson feature
   *
   * @method generateLayer
   * @param {json} feature
   * @return {Layer} leaflet layer
   * @private
   */
  generateLayer: function (feature) {
    var layer = L.GeoJSON.geometryToLayer(feature, this.options || null);
    if (!layer) {
      console.log(
        'Geometry field doesn\' exist inside received feature: \'' + feature + '\', ' +
        'so feature will be skipped and won\'t be converted into leaflet layer');

        return null;
    }

    return layer;
  }
});

L.GML = L.GML || {};

L.GML.ParserContainerMixin = {

  parsers: {},

  initializeParserContainer: function () {
    this.parsers = {};
  },

  appendParser: function (parser) {
    this.parsers[parser.elementTag] = parser;
  },

  parseElement: function (element, options) {
    var parser = this.parsers[element.tagName];
    if (!parser) throw('unknown child element ' + element.tagName);

    return parser.parse(element, options);
  }
};

L.GML.Element = L.Class.extend({
  elementTag: '',
  parse: function () {
    throw('not implemented parse function in parser for ' + this.elementTag);
  }
});

L.GML.Geometry = L.GML.Element.extend({

  /**
   * Returns new object where options properties merged with element specific values
   *
   * @method elementOptions
   * @param {Element} element
   * @param {Object} options
   */
  elementOptions: function(element, options) {
    var result = L.extend({}, options);
    var dimension = element.getAttribute('srsDimension');
    if(dimension) {
      result.dimension = parseInt(dimension);
    }

    return result;
  }
});

L.GML.Coordinates = L.GML.Element.extend({

  defaultSeparator: {
    ds: '.', //decimal separator
    cs: ',', // component separator
    ts: ' ' // tuple separator
  },

  elementTag: 'gml:coordinates',

  parse: function (element) {

    var ds = this.defaultSeparator.ds;
    if (element.attributes.decimal) {
      ds = element.attributes.decimal.value;
    }

    var cs = this.defaultSeparator.cs;
    if (element.attributes.cs) {
      cs = element.attributes.cs.value;
    }

    var ts = this.defaultSeparator.ts;
    if (element.attributes.ts) {
      ts = element.attributes.ts.value;
    }

    var result = [];
    var coords = element.textContent.split(ts);

    var mapFunction = function (coord) {
      if (ds !== '.') {
        coord = coord.replace(ds, '.');
      }

      return parseFloat(coord);
    };

    for (var i = 0; i < coords.length; i++) {
      result.push(coords[i].split(cs).map(mapFunction));
    }

    if (result.length === 1) {
      return result[0];
    }

    return result;
  }
});

L.GML.Pos = L.GML.Element.extend({

  elementTag: 'gml:pos',

  parse: function (element) {
    return element.textContent.split(' ').map(function (coord) {
      return parseFloat(coord);
    });
  }
});

L.GML.PosList = L.GML.Element.extend({
  statics: {
    DIM: 2
  },

  elementTag: 'gml:posList',

  parse: function (element, options) {
    var result = [];
    options = options || {};
    var dim = options.dimension || L.GML.PosList.DIM;
    var coords = element.textContent.split(' ');
    for (var i = 0; i < coords.length; i += dim) {
      var coord = [];
      for (var j = i; j < i + dim; j++) {
        coord.push(parseFloat(coords[j]));
      }
      result.push(coord);
    }

    return result;
  }
});

L.GML.PointNode = L.GML.Geometry.extend({
  includes: L.GML.ParserContainerMixin,

  elementTag: 'gml:Point',

  initialize: function () {
    this.initializeParserContainer();
    this.appendParser(new L.GML.Pos());
    this.appendParser(new L.GML.Coordinates());
  },

  parse: function (element, options) {
    options = this.elementOptions(element, options);
    return this.parseElement(element.firstElementChild, options);
  }
});

L.GML.PointSequence = L.GML.Geometry.extend({
  includes: L.GML.ParserContainerMixin,

  initialize: function () {
    this.initializeParserContainer();
    this.appendParser(new L.GML.Pos());
    this.appendParser(new L.GML.PosList());
    this.appendParser(new L.GML.Coordinates());
    this.appendParser(new L.GML.PointNode());
  },

  parse: function (element, options) {
    options = this.elementOptions(element, options);
    var firstChild = element.firstElementChild;
    var coords = [];
    var tagName = firstChild.tagName;
    if (tagName === 'gml:pos' || tagName === 'gml:Point') {
      var childParser = this.parsers[tagName];
      var elements = element.getElementsByTagNameNS(L.XmlUtil.namespaces.gml, tagName.split(':').pop());
      for (var i = 0; i < elements.length; i++) {
        coords.push(childParser.parse(elements[i], options));
      }
    }
    else {
      coords = this.parseElement(firstChild, options);
    }

    return coords;
  }
});

L.GML.LinearRing = L.GML.PointSequence.extend({

  elementTag: 'gml:LinearRing',

  /**
   * Parse element into array of coordinates
   *
   * @method parse
   * @param {Element} element
   * @param {Object} options
   * @return {Array} array of L.Point
   */
  parse: function (element, options) {
    var coords = L.GML.PointSequence.prototype.parse.call(this, element, options);

    // for leaflet polygons its not recommended insert additional last point equal to the first one,
    // but GML linearRing contains it
    coords.pop();
    return coords;
  }
});

L.GML.LineStringNode = L.GML.PointSequence.extend({
  elementTag: 'gml:LineString'
});

L.GML.PolygonNode = L.GML.Geometry.extend({

  elementTag: 'gml:Polygon',

  initialize: function () {
    this.linearRingParser = new L.GML.LinearRing();
  },

  parse: function (element, options) {
    options = this.elementOptions(element, options);
    var coords = [];
    for (var i = 0; i < element.children.length; i++) {

      // there can be exterior and interior, by GML standard but for leaflet its not significant
      var child = element.children[i];
      coords.push(this.linearRingParser.parse(child.firstElementChild, options));
    }

    return coords;
  }
});

L.GML.CoordsToLatLngMixin = {
  transform: function (coordinates, options) {
    if (Array.isArray(coordinates[0])) {
      var latLngs = [];
      for (var i = 0; i < coordinates.length; i++) {
        latLngs.push(this.transform(coordinates[i], options));
      }

      return latLngs;
    }

    return options.coordsToLatLng(coordinates);
  }
};

L.GML.Point = L.GML.PointNode.extend({
  includes: L.GML.CoordsToLatLngMixin,

  parse: function (element, options) {
    var coords = L.GML.PointNode.prototype.parse.call(this, element, options);
    var layer = new L.Marker();
    layer.setLatLng(this.transform(coords, options));
    return layer;
  }
});

L.GML.LineString = L.GML.LineStringNode.extend({

  includes: L.GML.CoordsToLatLngMixin,

  /**
   * Get layer from passed element
   *
   * @method parse
   * @param {Element} element
   * @param {Object} options
   * @return {L.Layer} polyline layer
   */
  parse: function (element, options) {
    var layer = new L.Polyline([]);
    var coordinates = L.GML.LineStringNode.prototype.parse.call(this, element);
    layer.setLatLngs(this.transform(coordinates, options));
    return layer;
  }
});

L.GML.Polygon = L.GML.PolygonNode.extend({

  includes: L.GML.CoordsToLatLngMixin,

  parse: function (element, options) {
    var layer = new L.Polygon([]);
    var coordinates = L.GML.PolygonNode.prototype.parse.call(this, element, options);
    layer.setLatLngs(this.transform(coordinates, options));
    return layer;
  }
});

L.GML.MultiGeometry = L.GML.Geometry.extend({
  includes: [L.GML.ParserContainerMixin, L.GML.CoordsToLatLngMixin],

  initialize: function () {
    this.initializeParserContainer();
  },

  /**
   * Convert element to array of geometry objects
   *
   * @method parse
   * @param {Element} element
   * @param {options}
   * @return {Array} array of geometry objects
   */
  parse: function (element, options) {
    options = this.elementOptions(element, options);
    var childObjects = [];
    for (var i = 0; i < element.children.length; i++) {
      var geometryMember = element.children[i];

      for (var j = 0; j < geometryMember.children.length; j++) {
        var singleGeometry = geometryMember.children[j];
        childObjects.push(this.parseElement(singleGeometry, options));
      }
    }

    return this.transform(childObjects, options);
  }
});

L.GML.AbstractMultiPolyline = L.GML.MultiGeometry.extend({

  initialize: function () {
    L.GML.MultiGeometry.prototype.initialize.call(this);
    this.appendParser(new L.GML.LineStringNode());
  },

  parse: function (element, options) {
    var latLngs = L.GML.MultiGeometry.prototype.parse.call(this, element, options);
    var layer = new L.Polyline([]);
    layer.setLatLngs(latLngs);
    return layer;
  }
});

L.GML.AbstractMultiPolygon = L.GML.MultiGeometry.extend({

  initialize: function () {
    L.GML.MultiGeometry.prototype.initialize.call(this);
    this.appendParser(new L.GML.PolygonNode());
  },

  parse: function (element, options) {
    var latLngs = L.GML.MultiGeometry.prototype.parse.call(this, element, options);
    var layer = new L.Polygon([]);
    layer.setLatLngs(latLngs);
    return layer;
  }
});

L.GML.MultiLineString = L.GML.AbstractMultiPolyline.extend({
  elementTag: 'gml:MultiLineString'
});

L.GML.MultiCurve = L.GML.AbstractMultiPolyline.extend({
  elementTag: 'gml:MultiCurve'
});

L.GML.MultiPolygon = L.GML.AbstractMultiPolygon.extend({
  elementTag: 'gml:MultiPolygon'
});

L.GML.MultiSurface = L.GML.AbstractMultiPolygon.extend({
  elementTag: 'gml:MultiSurface'
});

L.GML.MultiPoint = L.GML.MultiGeometry.extend({
  elementTag: 'gml:MultiPoint',

  initialize: function () {
    L.GML.MultiGeometry.prototype.initialize.call(this);
    this.appendParser(new L.GML.PointNode());
  },

  parse: function (element, options) {
    var coordinates = L.GML.MultiGeometry.prototype.parse.call(this, element, options);
    var multiPoint = new L.FeatureGroup();
    for (var i = 0; i < coordinates.length; i++) {
      var point = new L.Marker();
      point.setLatLng(coordinates[i]);
      multiPoint.addLayer(point);
    }

    return multiPoint;
  }
});

L.GML.FeatureType = L.Class.extend({
  options: {
    geometryField: 'Shape',
  },

  primitives: [
    {
      types: ['byte', 'short', 'int', 'integer', 'long', 'float', 'double', 'decimal'],
      parse: function (input) {
        if (input === 0) {
          return 0;
        }
        input = String.prototype.trim.call(input || '');
        return input === '' ? null : Number(input);
      },
      validate: function (parsedValue) {
        // Invalid number can be detected by isNaN check.
        return !isNaN(parsedValue);
      },
      type: 'number'
    },
    {
      types: ['string'],
      parse: function (input) {
        return input;
      },
      validate: function (parsedValue) {
        // Any value is valid for 'string' type.
        return true;
      },
      type: 'string'
    },
    {
      types: ['boolean'],
      parse: function (input) {
        input = String.prototype.trim.call(input || '').toLowerCase();
        return input !== 'false';
      },
      validate: function (parsedValue) {
        // Any value is valid for 'boolean' type if parser parses it like so: input !== 'false'.
        return true;
      },
      type: 'boolean'
    },
    {
      types: ['date', 'time', 'datetime'],
      parse: function (input) {
        input = String.prototype.trim.call(input || '');
        return input === '' ? null : new Date(input);
      },
      validate: function (parsedValue) {
        // Invalid date also can be detected by isNaN check.
        return !isNaN(parsedValue);
      },
      type: 'date'
    }
  ],

  initialize: function (options) {
    L.setOptions(this, options);

    this.fields = {};
    this.fieldValidators = {};
    this.fieldTypes = {};
    this.geometryFields = {};
  },

  appendField: function (name, type) {
    var that = this;
    type = String.prototype.toLowerCase.call(type || '');

    this.primitives.forEach(function (primitive) {
      if (primitive.types.indexOf(type) !== -1) {
        that.fields[name] = primitive.parse;
        that.fieldValidators[name] = primitive.validate;
        that.fieldTypes[name] = primitive.type;
      }
    });
  },

  parse: function (feature) {
    var properties = {};
    for (var i = 0; i < feature.children.length; i++) {
      var node = feature.children[i];
      var propertyName = node.tagName.split(':').pop();
      if (propertyName === this.options.geometryField) {
        continue;
      }

      var parseField = this.fields[propertyName];
      if (!parseField) {
        this.appendField(propertyName, 'string');
        parseField = this.fields[propertyName];
      }

      properties[propertyName] = parseField(node.textContent);
    }

    return {
      type: 'Feature',
      properties: properties,
      id: feature.attributes['gml:id'].value
    };
  }
});

L.Format.GML = L.Format.Base.extend({

  includes: L.GML.ParserContainerMixin,

  outputFormat: 'text/xml; subtype=gml/3.1.1',

  initialize: function (options) {
    L.Format.Base.prototype.initialize.call(this, options);
    this.initializeParserContainer();
    this.appendParser(new L.GML.Point());
    this.appendParser(new L.GML.LineString());
    this.appendParser(new L.GML.Polygon());
    this.appendParser(new L.GML.MultiLineString());
    this.appendParser(new L.GML.MultiPolygon());
    this.appendParser(new L.GML.MultiCurve());
    this.appendParser(new L.GML.MultiSurface());
    this.appendParser(new L.GML.MultiPoint());
  },

  /**
   * Convert raw data to leaflet layers array
   *
   * @method responseToLayers
   * @param {string} rawData
   * @return {Array} Array of leaflet layers
   */
  responseToLayers: function (rawData) {
    var layers = [];
    var xmlDoc = L.XmlUtil.parseXml(rawData);
    var featureCollection = xmlDoc.documentElement;
    var featureMemberNodes = featureCollection.getElementsByTagNameNS(L.XmlUtil.namespaces.gml, 'featureMember');
    for (var i = 0; i < featureMemberNodes.length; i++) {
      var feature = featureMemberNodes[i].firstElementChild;
      var featureAsLayer = this.processFeature(feature);
      if (featureAsLayer) {
        layers.push(featureAsLayer);
      }
    }

    var featureMembersNode = featureCollection.getElementsByTagNameNS(L.XmlUtil.namespaces.gml, 'featureMembers');
    if (featureMembersNode.length > 0) {
      var features = featureMembersNode[0].children;
      for (var j = 0; j < features.length; j++) {
        var node = features[j];
        var nodeAsLayer = this.processFeature(node);
        if (nodeAsLayer) {
          layers.push(nodeAsLayer);
        }
      }
    }

    return layers;
  },

  /**
   * Create layer and set its properties from xml feature element
   *
   * @method processFeature
   * @param {Element} feature
   * @return {Layer} leaflet layer with "feature" property with feature fields values
   * @private
   */
  processFeature: function (feature) {
    var layer = this.generateLayer(feature);
    if (!layer) {
      return null;
    }

    layer.feature = this.featureType.parse(feature);
    return layer;
  },

  /**
   * Create leaflet layer from xml feature element
   *
   * @method generateLayer
   * @param {Element} feature
   * @return {Layer} leaflet layer
   * @private
   */
  generateLayer: function (feature) {
    var geometryField = feature.getElementsByTagNameNS(this.namespaceUri, this.options.geometryField)[0];
    if (!geometryField) {
      console.log(
        'Geometry field \'' + this.options.geometryField + '\' doesn\' exist inside received feature: \'' + feature.innerHTML + '\', ' +
        'so feature will be skipped and won\'t be converted into leaflet layer');

      return null;
    }

    return this.parseElement(geometryField.firstElementChild, this.options);
  }
});

L.Util.project = function (crs, latlngs) {
  if (L.Util.isArray(latlngs)) {
    var result = [];
    latlngs.forEach(function (latlng) {
      result.push(L.Util.project(crs, latlng));
    });

    return result;
  } else {
    return crs.projection.project(latlngs);
  }
};

// 1.0.1 <=> 1.1.0 <=> 1.2.0 compatibility.
L.Util.isFlat = L.LineUtil.isFlat || L.LineUtil._flat || L.Polyline._flat;

L.GmlUtil = {

  /**
   * Create gml:pos Element with passed coordinates
   *
   * @method posNode
   * @param {L.Point} coord
   * @return {Element} gml:pos
   */
  posNode: function (coord) {
    return L.XmlUtil.createElementNS('gml:pos', { srsDimension: 2 }, { value: coord.x + ' ' + coord.y });
  },

  /**
   * Create gml:posList Element from passed coordinates
   *
   * @method posListNode
   * @param {Array} coords Array of L.Point that should be represent as GML
   * @param {boolean} close Should posList be closed, uses when need do polygon
   * @return {Element} gml:posList Element
   */
  posListNode: function (coords, close) {
    var localcoords = [];
    coords.forEach(function (coord) {
      localcoords.push(coord.x + ' ' + coord.y);
    });
    if (close && coords.length > 0) {
      var coord = coords[0];
      localcoords.push(coord.x + ' ' + coord.y);
    }

    var posList = localcoords.join(' ');
    return L.XmlUtil.createElementNS('gml:posList', {}, { value: posList });
  }
};

L.CircleMarker.include({
  toGml: function(crs) {
    var node = L.XmlUtil.createElementNS('gml:Point', {srsName: crs.code});
    node.appendChild(L.GmlUtil.posNode(L.Util.project(crs, this.getLatLng())));
    return node;
  }
});

L.LatLngBounds.prototype.toGml = function (crs) {
  var projectedSW = crs.project(this.getSouthWest());
  var projectedNE = crs.project(this.getNorthEast());

  var envelopeElement = L.XmlUtil.createElementNS('gml:Envelope', { srsName: crs.code });
  envelopeElement.appendChild(L.XmlUtil.createElementNS('gml:lowerCorner', {}, { value: projectedSW.x + ' ' + projectedSW.y }));
  envelopeElement.appendChild(L.XmlUtil.createElementNS('gml:upperCorner', {}, { value: projectedNE.x + ' ' + projectedNE.y }));

  return envelopeElement;
};

L.Marker.include({
  toGml: function (crs) {
    var node = L.XmlUtil.createElementNS('gml:Point', {srsName: crs.code});
    node.appendChild(L.GmlUtil.posNode(L.Util.project(crs, this.getLatLng())));
    return node;
  }
});

L.Polygon.include({
  toGml: function (crs, forceMulti) {
    var polygons = this.getLatLngs();
    var gmlPolygons = [];

    for (var i = 0; i < polygons.length; i++) {
      var polygonCoordinates = polygons[i];
      var flat = L.Util.isFlat(polygonCoordinates);
      var node = L.XmlUtil.createElementNS('gml:Polygon', {srsName: crs.code, srsDimension: 2});
      node.appendChild(L.XmlUtil.createElementNS('gml:exterior'))
        .appendChild(L.XmlUtil.createElementNS('gml:LinearRing', {srsDimension: 2}))
        .appendChild(L.GmlUtil.posListNode(L.Util.project(crs, flat ? polygonCoordinates : polygonCoordinates[0]), true));

      if (!flat) {
        for (var hole = 1; hole < polygonCoordinates.length; hole++) {
          node.appendChild(L.XmlUtil.createElementNS('gml:interior'))
            .appendChild(L.XmlUtil.createElementNS('gml:LinearRing', {srsDimension: 2}))
            .appendChild(L.GmlUtil.posListNode(L.Util.project(crs, polygonCoordinates[hole]), true));
        }
      }

      gmlPolygons.push(node);
    }

    if (gmlPolygons.length === 1 && !forceMulti) return gmlPolygons[0];

    // else make multipolygon
    var multi = L.XmlUtil.createElementNS('gml:MultiSurface', {srsName: crs.code, srsDimension: 2});
    var collection = multi.appendChild(L.XmlUtil.createElementNS('gml:surfaceMembers'));
    for (var p = 0; p < gmlPolygons.length; p++) {
      collection.appendChild(gmlPolygons[p]);
    }

    return multi;
  }
});

L.Polyline.include({
  _lineStringNode: function (crs, latlngs) {
    var node = L.XmlUtil.createElementNS('gml:LineString', {srsName: crs.code, srsDimension: 2});
    node.appendChild(L.GmlUtil.posListNode(L.Util.project(crs, latlngs), false));
    return node;
  },

  toGml: function (crs, forceMulti) {
    var latLngs = this.getLatLngs();
    var gmlElements = [];

    if (L.Util.isFlat(latLngs)) {
       gmlElements.push(this._lineStringNode(crs, latLngs));
    } else {
      for (var i = 0; i < latLngs.length; i++) {
        gmlElements.push(this._lineStringNode(crs, latLngs[i]));
      }
    }

    if(gmlElements.length === 1 && !forceMulti) {
      return gmlElements[0];
    }

    var multi = L.XmlUtil.createElementNS('gml:MultiCurve', {srsName: crs.code, srsDimension: 2});
    var collection = multi.appendChild(L.XmlUtil.createElementNS('gml:curveMembers'));
    for (var lines = 0; lines < gmlElements.length; lines++) {
      collection.appendChild(gmlElements[lines]);
    }

    return multi;
  }
});

var PropertiesMixin = {
  setProperties: function (obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        this.feature.properties[i] = obj[i];
      }
    }
  },
  getProperty: function (field) {
    return this.feature.properties[field];
  },
  deleteProperties: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      if (this.feature.properties.hasOwnProperty(arr[i])) {
        delete this.feature.properties[arr[i]];
      }
    }
  }
};
L.Marker.include(PropertiesMixin);
L.Path.include(PropertiesMixin);

L.WFS = L.FeatureGroup.extend({

  _capabilities: null,

  _boundingBox: null,

  options: {
    crs: L.CRS.EPSG3857,
    showExisting: true,
    geometryField: 'Shape',
    url: '',
    version: '1.1.0',
    typeNS: '',
    typeName: '',
    typeNSName: '',
    maxFeatures: null,
    filter: null,
    opacity: 1,
    fillOpacity: 1,
    style: {
      color: 'black',
      weight: 1,
      opacity: 1,
      fillOpacity: 1
    },
    namespaceUri: '',
    withCredentials: false
  },

  state: {},

  initialize: function (options, readFormat) {
    L.setOptions(this, options);

    this.state = {
      exist: 'exist'
    };

    this._layers = {};

    this.readFormat = readFormat || new L.Format.GML({
      crs: this.options.crs,
      geometryField: this.options.geometryField
    });

    this.options.typeNSName = this.namespaceName(this.options.typeName);
    this.options.srsName = this.options.crs.code;

    this._updateOpacity();

    var that = this;
    this.describeFeatureType(function () {
      if (that.options.showExisting) {
        that.loadFeatures(that.options.filter);
      } else {
        that.fire('load', {});
      }
    }, function (errorMessage) {
      that.fire('error', {
        error: new Error(errorMessage)
      });
    });
  },

  namespaceName: function (name) {
    return this.options.typeNS + ':' + name;
  },

  describeFeatureType: function (successCallback, errorCallback) {
    var requestData = L.XmlUtil.createElementNS('wfs:DescribeFeatureType', {
      service: 'WFS',
      version: this.options.version
    });
    requestData.appendChild(L.XmlUtil.createElementNS('TypeName', {}, {
      value: this.options.typeNSName
    }));

    var that = this;
    L.Util.request({
      url: this.options.url,
      data: L.XmlUtil.serializeXmlDocumentString(requestData),
      headers: this.options.headers || {},
      withCredentials: this.options.withCredentials,
      success: function (data) {
        // If some exception occur, WFS-service can response successfully, but with ExceptionReport,
        // and such situation must be handled.
        var exceptionReport = L.XmlUtil.parseOwsExceptionReport(data);
        if (exceptionReport) {
          if (typeof (errorCallback) === 'function') {
            errorCallback(exceptionReport.message);
          }

          return;
        }

        var xmldoc = L.XmlUtil.parseXml(data);
        var featureInfo = xmldoc.documentElement;
        that.readFormat.setFeatureDescription(featureInfo);
        that.options.namespaceUri = featureInfo.attributes.targetNamespace.value;
        if (typeof (successCallback) === 'function') {
          successCallback();
        }
      },
      error: function (errorMessage) {
        if (typeof (errorCallback) === 'function') {
          errorCallback(errorMessage);
        }
      }
    });
  },

  getFeature: function (filter) {
    var request = L.XmlUtil.createElementNS('wfs:GetFeature', {
      service: 'WFS',
      version: this.options.version,
      maxFeatures: this.options.maxFeatures,
      outputFormat: this.readFormat.outputFormat
    });

    var query = request.appendChild(L.XmlUtil.createElementNS('wfs:Query', {
      typeName: this.options.typeNSName,
      srsName: this.options.srsName
    }));

    if (filter) {
      query.appendChild(L.filter(filter));
    }

    return request;
  },

  loadFeatures: function (filter) {
    var that = this;
    L.Util.request({
      url: this.options.url,
      data: L.XmlUtil.serializeXmlDocumentString(that.getFeature(filter)),
      headers: this.options.headers || {},
      withCredentials: this.options.withCredentials,
      success: function (responseText) {
        // If some exception occur, WFS-service can response successfully, but with ExceptionReport,
        // and such situation must be handled.
        var exceptionReport = L.XmlUtil.parseOwsExceptionReport(responseText);
        if (exceptionReport) {
          that.fire('error', {
            error: new Error(exceptionReport.message)
          });

          return that;
        }

        // Request was truly successful (without exception report),
        // so convert response to layers.
        var layers = that.readFormat.responseToLayers(responseText, {
          coordsToLatLng: that.options.coordsToLatLng,
          pointToLayer: that.options.pointToLayer
        });

        if (typeof that.options.style === "function") {
          layers.forEach(function (element) {
            element.state = that.state.exist;
            if (element.setStyle) {
              element.setStyle(that.options.style(element));
            }
            that.addLayer(element);
          });
        } else {
          layers.forEach(function (element) {
            element.state = that.state.exist;
            that.addLayer(element);
          });
          that.setStyle(that.options.style);
        }

        that.fire('load', {
          responseText: responseText,
          layers: layers
        });

        return that;
      },
      error: function (errorMessage) {
        that.fire('error', {
          error: new Error(errorMessage)
        });

        return that;
      }
    });
  },

  getCapabilities: function (successCallback, errorCallback) {
    var capabilities = this._capabilities;

    // Check if capabilities were already received & cached.
    if (capabilities) {
      if (typeof (successCallback) === 'function') {
        successCallback(capabilities);

        return;
      }
    }

    var requestData = L.XmlUtil.createElementNS('wfs:GetCapabilities', {
      service: 'WFS',
      version: this.options.version
    });

    var that = this;
    L.Util.request({
      url: this.options.url,
      data: L.XmlUtil.serializeXmlDocumentString(requestData),
      headers: this.options.headers || {},
      withCredentials: this.options.withCredentials,
      success: function (data) {
        // If some exception occur, WFS-service can response successfully, but with ExceptionReport,
        // and such situation must be handled.
        var exceptionReport = L.XmlUtil.parseOwsExceptionReport(data);
        if (exceptionReport) {
          if (typeof (errorCallback) === 'function') {
            errorCallback(new Error(exceptionReport.message));
          }

          return;
        }

        try {
          // Request was truly successful (without exception report), parse WFS_Capabilities.
          capabilities = L.XmlUtil.parseXml(data).documentElement;
        } catch (error) {
          // If parsing failed.
          if (typeof (errorCallback) === 'function') {
            errorCallback(error);
          }

          return;
        }

        // Cache received capabilities.
        that._capabilities = capabilities;

        if (typeof (successCallback) === 'function') {
          successCallback(capabilities);
        }
      },
      error: function (errorMessage) {
        if (typeof (errorCallback) === 'function') {
          errorCallback(new Error(errorMessage));
        }
      }
    });
  },

  getBoundingBox: function (successCallback, errorCallback) {
    var boundingBox = this._boundingBox;

    // Check if bounding box was already received & cached.
    if (boundingBox) {
      if (typeof (successCallback) === 'function') {
        successCallback(boundingBox);

        return;
      }
    }

    var that = this;
    this.getCapabilities(function (capabilities) {
      var featureTypeListElement = capabilities.getElementsByTagName('FeatureTypeList')[0];

      // Extract all 'FeatureType' nodes to list.
      var featureTypeList = featureTypeListElement.getElementsByTagName('FeatureType');

      for (var i = 0, len = featureTypeList.length; i < len; i++) {
        var featureType = featureTypeList[i];

        // Extract current FeatureType's name.
        var featureTypeNSName = L.XmlUtil.getNodeText(featureType.getElementsByTagName('Name')[0]);

        // Find node with current layer instance's name and namespace.
        if (featureTypeNSName === that.options.typeNSName) {
          // The <WGS84BoundingBox> element is used to indicate the edges of an
          // enclosing rectangle in decimal degrees of latitude and longitude in WGS84.
          var wgs84BoundingBox = featureType.getElementsByTagNameNS(L.XmlUtil.namespaces.ows, 'WGS84BoundingBox')[0];
          var lowerCornerElement = wgs84BoundingBox.getElementsByTagNameNS(L.XmlUtil.namespaces.ows, 'LowerCorner')[0];
          var upperCornerElement = wgs84BoundingBox.getElementsByTagNameNS(L.XmlUtil.namespaces.ows, 'UpperCorner')[0];

          // Corner node's inner text format is like '-74.047185 40.679648', Lng and Lat with a space between.
          var lowerCorner = L.XmlUtil.getNodeText(lowerCornerElement);
          var upperCorner = L.XmlUtil.getNodeText(upperCornerElement);

          // Extract LngLats and reverse it to LatLngs.
          var sw = lowerCorner.split(' ').reverse();
          var ne = upperCorner.split(' ').reverse();

          // Wrap it into LatLngBounds.
          boundingBox = L.latLngBounds([sw, ne]);

          break;
        }
      }

      // Cache received and calculated bounding box.
      that._boundingBox = boundingBox;

      if (typeof (successCallback) === 'function') {
        successCallback(boundingBox);
      }
    }, function (errorMessage) {
      if (typeof (errorCallback) === 'function') {
        errorCallback(new Error(errorMessage));
      }
    });
  },

  setOpacity: function (opacity, fillOpacity) {
    this.options.opacity = opacity;
    this.options.fillOpacity = fillOpacity || opacity;

    this._updateOpacity();

    return this;
  },

  _updateOpacity: function () {
    var style = L.extend(this.options.style || {}, {
      opacity: this.options.opacity,
      fillOpacity: this.options.fillOpacity
    });

    this.setStyle(style);
  }
});

L.wfs = function (options, readFormat) {
  return new L.WFS(options, readFormat);
};

L.WFST = L.WFS.extend({
  options: {
    forceMulti: false
  },

  initialize: function (options, readFormat) {
    L.WFS.prototype.initialize.call(this, options, readFormat);
    this.state = L.extend(this.state, {
      insert: 'insertElement',
      update: 'updateElement',
      remove: 'removeElement'
    });

    this.changes = {};
  },

  addLayer: function (layer) {
    L.FeatureGroup.prototype.addLayer.call(this, layer);
    if (!layer.feature) {
      layer.feature = { properties: {} };
    }

    if (!layer.state) {
      layer.state = this.state.insert;
      var id = this.getLayerId(layer);
      this.changes[id] = layer;
    }
    return this;
  },

  removeLayer: function (layer) {
    L.FeatureGroup.prototype.removeLayer.call(this, layer);

    var id = this.getLayerId(layer);

    if (id in this.changes) {
      var change = this.changes[id];
      if (change.state === this.state.insert) {
        delete this.changes[id];
      }
      else {
        change.state = this.state.remove;
      }
    }
    else {
      layer.state = this.state.remove;
      this.changes[id] = layer;
    }
  },

  editLayer: function (layer) {
    if (layer.state !== this.state.insert) {
      layer.state = this.state.update;
    }

    var id = this.getLayerId(layer);
    this.changes[id] = layer;
    return this;
  },

  save: function () {
    var transaction = L.XmlUtil.createElementNS('wfs:Transaction', { service: 'WFS', version: this.options.version });

    var inserted = [];

    for (var id in this.changes) {
      var layer = this.changes[id];
      var action = this[layer.state](layer);
      transaction.appendChild(action);

      if (layer.state === this.state.insert) {
        inserted.push(layer);
      }
    }

    var that = this;

    L.Util.request({
      url: this.options.url,
      data: L.XmlUtil.serializeXmlDocumentString(transaction),
      headers: this.options.headers || {},
      withCredentials: this.options.withCredentials,
      success: function (data) {
        var xmlDoc = L.XmlUtil.parseXml(data);
        var exception = L.XmlUtil.parseOwsExceptionReport(xmlDoc);
        if(exception !== null) {
          that.fire('save:failed', exception);
          return;
        }

        var insertResult = L.XmlUtil.evaluate('//wfs:InsertResults/wfs:Feature/ogc:FeatureId/@fid', xmlDoc);
        var insertedIds = [];
        var id = insertResult.iterateNext();
        while (id) {
          insertedIds.push(new L.Filter.GmlObjectID(id.value));
          id = insertResult.iterateNext();
        }

        inserted.forEach(function (layer) {
          L.FeatureGroup.prototype.removeLayer.call(that, layer);
        });

        that.once('load', function (e) {
          that.fire('save:success', { layers: e.layers });
          that.changes = {};
        });

        that.loadFeatures(insertedIds);
      },
      error: function (data) {
        that.fire('save:failed', data);
      }
    });

    return this;
  }
});

L.wfst = function (options, readFormat) {
  return new L.WFST(options, readFormat);
};

L.WFST.include({
  gmlFeature: function (layer) {
    var featureNode = L.XmlUtil.createElementNS(this.options.typeNSName, {}, { uri: this.options.namespaceUri });
    var feature = layer.feature;
    for (var propertyName in feature.properties) {
      featureNode.appendChild(this.gmlProperty(propertyName,
        feature.properties[propertyName]));
    }

    featureNode.appendChild(
      this.gmlProperty(
        this.options.geometryField,
        layer.toGml(
          this.options.crs,
          this.options.forceMulti
        )
      )
    );

    return featureNode;
  },

  /**
     Returns element with name as tag and value as innerText or child element
     ```xml
     <name>value<name>
     ```

     or if value is element

     ```xml
     <name><value /><name>
     ```

     @method gmlProperty
     @param {string} name Name of property
     @param {Object} value Value of property
     @return {Element} simple property element <name>value<name>
   */
  gmlProperty: function (name, value) {
    var propertyNode = L.XmlUtil.createElementNS(this.namespaceName(name));
    if (value instanceof Element) {
      propertyNode.appendChild(value);
    }
    else if (value === null || value === undefined || value === '') {
      L.XmlUtil.setAttributes(propertyNode, { 'xsi:nil': true });
    } else {
      propertyNode.appendChild(L.XmlUtil.createTextNode(value));
    }

    return propertyNode;
  },

  /**
    Returns wfs:Property element with passed property name and value:
    ```xml
    <wfs:Property>
      <wfs:Name>%name%</wfs:Name>
      <wfs:Value>%value%</wfs:Value>
    </wfs:Property>
    ```

    @method wfsProperty
    @param {string} name Property name
    @param {Object} value Property value, if passed Element object it will be added as child element of value
    @return {Element}
   */
  wfsProperty: function (name, value) {
    var propertyNode = L.XmlUtil.createElementNS('wfs:Property');
    propertyNode.appendChild(L.XmlUtil.createElementNS('wfs:Name', {}, { value: name }));
    var valueNode = L.XmlUtil.createElementNS('wfs:Value');
    if (value instanceof Element) {
      valueNode.appendChild(value);
    }
    else {
      valueNode.appendChild(L.XmlUtil.createTextNode(value));
    }

    propertyNode.appendChild(valueNode);

    return propertyNode;
  }
});

L.WFST.include({

  /**
    Returns wfs:Insert element for passed layer

    @method insertElement
    @param {Layer} layer
    @return {Element} wfs:Insert element with layer
   */
  insertElement: function (layer) {
    var node = L.XmlUtil.createElementNS('wfs:Insert');
    node.appendChild(this.gmlFeature(layer));
    return node;
  },

  /**
    Returns wfs:Update element for specified layer

    @method updateElement
    @param {Layer} layer
    @return {Element} wfs:Update element for passed layer properties limited with filter by feature.id
   */
  updateElement: function (layer) {
    var node = L.XmlUtil.createElementNS('wfs:Update', { typeName: this.options.typeNSName });
    var feature = layer.feature;
    for (var propertyName in feature.properties) {
      if (feature.properties.hasOwnProperty(propertyName)) {
        node.appendChild(this.wfsProperty(propertyName, feature.properties[propertyName]));
      }
    }

    node.appendChild(
      this.wfsProperty(
        this.namespaceName(this.options.geometryField),
        layer.toGml(this.options.crs, this.options.forceMulti)
      )
    );

    var idFilter = new L.Filter.GmlObjectID(layer.feature.id);
    node.appendChild(L.filter(idFilter));
    return node;
  },

  removeElement: function (layer) {
    var node = L.XmlUtil.createElementNS('wfs:Delete', { typeName: this.options.typeNSName });
    var idFilter = new L.Filter.GmlObjectID(layer.feature.id);
    node.appendChild(L.filter(idFilter));
    return node;
  }
});


})(window, document);
;!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):t.proj4=s()}(this,function(){"use strict";function t(t,s){if(t[s])return t[s];for(var i,a=Object.keys(t),h=s.toLowerCase().replace(dt,""),e=-1;++e<a.length;)if(i=a[e],i.toLowerCase().replace(dt,"")===h)return t[i]}function s(t){if("string"!=typeof t)throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=_t}function i(t){return new s(t).output()}function a(t,s,i){Array.isArray(s)&&(i.unshift(s),s=null);var a=s?{}:t,e=i.reduce(function(t,s){return h(s,t),t},a);s&&(t[s]=e)}function h(t,s){if(Array.isArray(t)){var i=t.shift();if("PARAMETER"===i&&(i=t.shift()),1===t.length)return Array.isArray(t[0])?(s[i]={},void h(t[0],s[i])):void(s[i]=t[0]);if(t.length)if("TOWGS84"!==i){Array.isArray(i)||(s[i]={});var e;switch(i){case"UNIT":case"PRIMEM":case"VERT_DATUM":return s[i]={name:t[0].toLowerCase(),convert:t[1]},void(3===t.length&&h(t[2],s[i]));case"SPHEROID":case"ELLIPSOID":return s[i]={name:t[0],a:t[1],rf:t[2]},void(4===t.length&&h(t[3],s[i]));case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":return t[0]=["name",t[0]],void a(s,i,t);default:for(e=-1;++e<t.length;)if(!Array.isArray(t[e]))return h(t,s[i]);return a(s,i,t)}}else s[i]=t;else s[i]=!0}else s[t]=!0}function e(t,s){var i=s[0],a=s[1];!(i in t)&&a in t&&(t[i]=t[a],3===s.length&&(t[i]=s[2](t[i])))}function n(t){return t*At}function r(t){function s(s){return s*(t.to_meter||1)}"GEOGCS"===t.type?t.projName="longlat":"LOCAL_CS"===t.type?(t.projName="identity",t.local=!0):"object"==typeof t.PROJECTION?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),"metre"===t.units&&(t.units="meter"),t.UNIT.convert&&("GEOGCS"===t.type?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var i=t.GEOGCS;"GEOGCS"===t.type&&(i=t),i&&(i.DATUM?t.datumCode=i.DATUM.name.toLowerCase():t.datumCode=i.name.toLowerCase(),"d_"===t.datumCode.slice(0,2)&&(t.datumCode=t.datumCode.slice(2)),"new_zealand_geodetic_datum_1949"!==t.datumCode&&"new_zealand_1949"!==t.datumCode||(t.datumCode="nzgd49"),"wgs_1984"===t.datumCode&&("Mercator_Auxiliary_Sphere"===t.PROJECTION&&(t.sphere=!0),t.datumCode="wgs84"),"_ferro"===t.datumCode.slice(-6)&&(t.datumCode=t.datumCode.slice(0,-6)),"_jakarta"===t.datumCode.slice(-8)&&(t.datumCode=t.datumCode.slice(0,-8)),~t.datumCode.indexOf("belge")&&(t.datumCode="rnb72"),i.DATUM&&i.DATUM.SPHEROID&&(t.ellps=i.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===t.ellps.toLowerCase().slice(0,13)&&(t.ellps="intl"),t.a=i.DATUM.SPHEROID.a,t.rf=parseFloat(i.DATUM.SPHEROID.rf,10)),i.DATUM&&i.DATUM.TOWGS84&&(t.datum_params=i.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),"ch1903+"===t.datumCode&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a);[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_2","Standard_Parallel_2"],["false_easting","False_Easting"],["false_northing","False_Northing"],["central_meridian","Central_Meridian"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",n],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",n],["x0","false_easting",s],["y0","false_northing",s],["long0","central_meridian",n],["lat0","latitude_of_origin",n],["lat0","standard_parallel_1",n],["lat1","standard_parallel_1",n],["lat2","standard_parallel_2",n],["azimuth","Azimuth"],["alpha","azimuth",n],["srsCode","name"]].forEach(function(s){return e(t,s)}),t.long0||!t.longc||"Albers_Conic_Equal_Area"!==t.projName&&"Lambert_Azimuthal_Equal_Area"!==t.projName||(t.long0=t.longc),t.lat_ts||!t.lat1||"Stereographic_South_Pole"!==t.projName&&"Polar Stereographic (variant B)"!==t.projName||(t.lat0=n(t.lat1>0?90:-90),t.lat_ts=t.lat1)}function o(t){var s=this;if(2===arguments.length){var i=arguments[1];"string"==typeof i?"+"===i.charAt(0)?o[t]=yt(arguments[1]):o[t]=Ct(arguments[1]):o[t]=i}else if(1===arguments.length){if(Array.isArray(t))return t.map(function(t){Array.isArray(t)?o.apply(s,t):o(t)});if("string"==typeof t){if(t in o)return o[t]}else"EPSG"in t?o["EPSG:"+t.EPSG]=t:"ESRI"in t?o["ESRI:"+t.ESRI]=t:"IAU2000"in t?o["IAU2000:"+t.IAU2000]=t:console.log(t);return}}function l(t){return"string"==typeof t}function M(t){return t in o}function c(t){return Et.some(function(s){return t.indexOf(s)>-1})}function u(s){var i=t(s,"authority");if(i){var a=t(i,"epsg");return a&&Pt.indexOf(a)>-1}}function f(s){var i=t(s,"extension");if(i)return t(i,"proj4")}function m(t){return"+"===t[0]}function p(t){if(!l(t))return t;if(M(t))return o[t];if(c(t)){var s=Ct(t);if(u(s))return o["EPSG:3857"];var i=f(s);return i?yt(i):s}return m(t)?yt(t):void 0}function d(t){return t}function y(t,s){var i=Tt.length;return t.names?(Tt[i]=t,t.names.forEach(function(t){Gt[t.toLowerCase()]=i}),this):(console.log(s),!0)}function _(t,s,i,a){var h=t*t,e=s*s,n=(h-e)/h,r=0;return a?(h=(t*=1-n*(et+n*(nt+n*rt)))*t,n=0):r=Math.sqrt(n),{es:n,e:r,ep2:(h-e)/e}}function x(s,i,a,h,e){if(!s){var n=t(zt,h);n||(n=Lt),s=n.a,i=n.b,a=n.rf}return a&&!i&&(i=(1-1/a)*s),(0===a||Math.abs(s-i)<ot)&&(e=!0,i=s),{a:s,b:i,rf:a,sphere:e}}function v(t,s,i,a,h,e){var n={};return n.datum_type=void 0===t||"none"===t?it:st,s&&(n.datum_params=s.map(parseFloat),0===n.datum_params[0]&&0===n.datum_params[1]&&0===n.datum_params[2]||(n.datum_type=$),n.datum_params.length>3&&(0===n.datum_params[3]&&0===n.datum_params[4]&&0===n.datum_params[5]&&0===n.datum_params[6]||(n.datum_type=tt,n.datum_params[3]*=at,n.datum_params[4]*=at,n.datum_params[5]*=at,n.datum_params[6]=n.datum_params[6]/1e6+1))),n.a=i,n.b=a,n.es=h,n.ep2=e,n}function Projection(s,i){if(!(this instanceof Projection))return new Projection(s);i=i||function(t){if(t)throw t};var a=p(s);if("object"==typeof a){var h=Projection.projections.get(a.projName);if(h){if(a.datumCode&&"none"!==a.datumCode){var e=t(Dt,a.datumCode);e&&(a.datum_params=e.towgs84?e.towgs84.split(","):null,a.ellps=e.ellipse,a.datumName=e.datumName?e.datumName:a.datumCode)}a.k0=a.k0||1,a.axis=a.axis||"enu",a.ellps=a.ellps||"wgs84";var n=x(a.a,a.b,a.rf,a.ellps,a.sphere),r=_(n.a,n.b,n.rf,a.R_A),o=a.datum||v(a.datumCode,a.datum_params,n.a,n.b,r.es,r.ep2);Nt(this,a),Nt(this,h),this.a=n.a,this.b=n.b,this.rf=n.rf,this.sphere=n.sphere,this.es=r.es,this.e=r.e,this.ep2=r.ep2,this.datum=o,this.init(),i(null,this)}else i(s)}else i(s)}function g(t,s){return t.datum_type===s.datum_type&&(!(t.a!==s.a||Math.abs(t.es-s.es)>5e-11)&&(t.datum_type===$?t.datum_params[0]===s.datum_params[0]&&t.datum_params[1]===s.datum_params[1]&&t.datum_params[2]===s.datum_params[2]:t.datum_type!==tt||t.datum_params[0]===s.datum_params[0]&&t.datum_params[1]===s.datum_params[1]&&t.datum_params[2]===s.datum_params[2]&&t.datum_params[3]===s.datum_params[3]&&t.datum_params[4]===s.datum_params[4]&&t.datum_params[5]===s.datum_params[5]&&t.datum_params[6]===s.datum_params[6]))}function b(t,s,i){var a,h,e,n,r=t.x,o=t.y,l=t.z?t.z:0;if(o<-ht&&o>-1.001*ht)o=-ht;else if(o>ht&&o<1.001*ht)o=ht;else{if(o<-ht)return{x:-1/0,y:-1/0,z:t.z};if(o>ht)return{x:1/0,y:1/0,z:t.z}}return r>Math.PI&&(r-=2*Math.PI),h=Math.sin(o),n=Math.cos(o),e=h*h,a=i/Math.sqrt(1-s*e),{x:(a+l)*n*Math.cos(r),y:(a+l)*n*Math.sin(r),z:(a*(1-s)+l)*h}}function w(t,s,i,a){var h,e,n,r,o,l,M,c,u,f,m,p,d,y,_,x,v=t.x,g=t.y,b=t.z?t.z:0;if(h=Math.sqrt(v*v+g*g),e=Math.sqrt(v*v+g*g+b*b),h/i<1e-12){if(y=0,e/i<1e-12)return _=ht,x=-a,{x:t.x,y:t.y,z:t.z}}else y=Math.atan2(g,v);n=b/e,c=(r=h/e)*(1-s)*(o=1/Math.sqrt(1-s*(2-s)*r*r)),u=n*o,d=0;do{d++,l=s*(M=i/Math.sqrt(1-s*u*u))/(M+(x=h*c+b*u-M*(1-s*u*u))),p=(m=n*(o=1/Math.sqrt(1-l*(2-l)*r*r)))*c-(f=r*(1-l)*o)*u,c=f,u=m}while(p*p>1e-24&&d<30);return _=Math.atan(m/Math.abs(f)),{x:y,y:_,z:x}}function A(t,s,i){if(s===$)return{x:t.x+i[0],y:t.y+i[1],z:t.z+i[2]};if(s===tt){var a=i[0],h=i[1],e=i[2],n=i[3],r=i[4],o=i[5],l=i[6];return{x:l*(t.x-o*t.y+r*t.z)+a,y:l*(o*t.x+t.y-n*t.z)+h,z:l*(-r*t.x+n*t.y+t.z)+e}}}function C(t,s,i){if(s===$)return{x:t.x-i[0],y:t.y-i[1],z:t.z-i[2]};if(s===tt){var a=i[0],h=i[1],e=i[2],n=i[3],r=i[4],o=i[5],l=i[6],M=(t.x-a)/l,c=(t.y-h)/l,u=(t.z-e)/l;return{x:M+o*c-r*u,y:-o*M+c+n*u,z:r*M-n*c+u}}}function E(t){return t===$||t===tt}function P(t){if("function"==typeof Number.isFinite){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if("number"!=typeof t||t!==t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function N(t,s){return(t.datum.datum_type===$||t.datum.datum_type===tt)&&"WGS84"!==s.datumCode||(s.datum.datum_type===$||s.datum.datum_type===tt)&&"WGS84"!==t.datumCode}function S(t,s,i){var a;return Array.isArray(i)&&(i=Ft(i)),Qt(i),t.datum&&s.datum&&N(t,s)&&(i=S(t,a=new Projection("WGS84"),i),t=a),"enu"!==t.axis&&(i=Ut(t,!1,i)),"longlat"===t.projName?i={x:i.x*lt,y:i.y*lt,z:i.z||0}:(t.to_meter&&(i={x:i.x*t.to_meter,y:i.y*t.to_meter,z:i.z||0}),i=t.inverse(i)),t.from_greenwich&&(i.x+=t.from_greenwich),i=Bt(t.datum,s.datum,i),s.from_greenwich&&(i={x:i.x-s.from_greenwich,y:i.y,z:i.z||0}),"longlat"===s.projName?i={x:i.x*Mt,y:i.y*Mt,z:i.z||0}:(i=s.forward(i),s.to_meter&&(i={x:i.x/s.to_meter,y:i.y/s.to_meter,z:i.z||0})),"enu"!==s.axis?Ut(s,!0,i):i}function k(t,s,i){var a,h,e;return Array.isArray(i)?(a=S(t,s,i)||{x:NaN,y:NaN},i.length>2?void 0!==t.name&&"geocent"===t.name||void 0!==s.name&&"geocent"===s.name?"number"==typeof a.z?[a.x,a.y,a.z].concat(i.splice(3)):[a.x,a.y,i[2]].concat(i.splice(3)):[a.x,a.y].concat(i.splice(2)):[a.x,a.y]):(h=S(t,s,i),2===(e=Object.keys(i)).length?h:(e.forEach(function(a){if(void 0!==t.name&&"geocent"===t.name||void 0!==s.name&&"geocent"===s.name){if("x"===a||"y"===a||"z"===a)return}else if("x"===a||"y"===a)return;h[a]=i[a]}),h))}function q(t){return t instanceof Projection?t:t.oProj?t.oProj:Projection(t)}function I(t,s,i){t=q(t);var a,h=!1;return void 0===s?(s=t,t=Wt,h=!0):(void 0!==s.x||Array.isArray(s))&&(i=s,s=t,t=Wt,h=!0),s=q(s),i?k(t,s,i):(a={forward:function(i){return k(t,s,i)},inverse:function(i){return k(s,t,i)}},h&&(a.oProj=s),a)}function O(t,s){return s=s||5,D(j({lat:t[1],lon:t[0]}),s)}function R(t){var s=z(Q(t.toUpperCase()));return s.lat&&s.lon?[s.lon,s.lat]:[(s.left+s.right)/2,(s.top+s.bottom)/2]}function G(t){return t*(Math.PI/180)}function T(t){return t/Math.PI*180}function j(t){var s,i,a,h,e,n,r,o=t.lat,l=t.lon,M=6378137,c=G(o),u=G(l);r=Math.floor((l+180)/6)+1,180===l&&(r=60),o>=56&&o<64&&l>=3&&l<12&&(r=32),o>=72&&o<84&&(l>=0&&l<9?r=31:l>=9&&l<21?r=33:l>=21&&l<33?r=35:l>=33&&l<42&&(r=37)),n=G(6*(r-1)-180+3),s=M/Math.sqrt(1-.00669438*Math.sin(c)*Math.sin(c)),i=Math.tan(c)*Math.tan(c),a=.006739496752268451*Math.cos(c)*Math.cos(c);var f=.9996*s*((h=Math.cos(c)*(u-n))+(1-i+a)*h*h*h/6+(5-18*i+i*i+72*a-.39089081163157013)*h*h*h*h*h/120)+5e5,m=.9996*((e=M*(.9983242984503243*c-.002514607064228144*Math.sin(2*c)+2639046602129982e-21*Math.sin(4*c)-3.418046101696858e-9*Math.sin(6*c)))+s*Math.tan(c)*(h*h/2+(5-i+9*a+4*a*a)*h*h*h*h/24+(61-58*i+i*i+600*a-2.2240339282485886)*h*h*h*h*h*h/720));return o<0&&(m+=1e7),{northing:Math.round(m),easting:Math.round(f),zoneNumber:r,zoneLetter:L(o)}}function z(t){var s=t.northing,i=t.easting,a=t.zoneLetter,h=t.zoneNumber;if(h<0||h>60)return null;var e,n,r,o,l,M,c,u,f=6378137,m=(1-Math.sqrt(.99330562))/(1+Math.sqrt(.99330562)),p=i-5e5,d=s;a<"N"&&(d-=1e7),M=6*(h-1)-180+3,u=(c=d/.9996/6367449.145945056)+(3*m/2-27*m*m*m/32)*Math.sin(2*c)+(21*m*m/16-55*m*m*m*m/32)*Math.sin(4*c)+151*m*m*m/96*Math.sin(6*c),e=f/Math.sqrt(1-.00669438*Math.sin(u)*Math.sin(u)),n=Math.tan(u)*Math.tan(u),r=.006739496752268451*Math.cos(u)*Math.cos(u),o=.99330562*f/Math.pow(1-.00669438*Math.sin(u)*Math.sin(u),1.5),l=p/(.9996*e);var y=u-e*Math.tan(u)/o*(l*l/2-(5+3*n+10*r-4*r*r-.06065547077041606)*l*l*l*l/24+(61+90*n+298*r+45*n*n-1.6983531815716497-3*r*r)*l*l*l*l*l*l/720);y=T(y);var _=(l-(1+2*n+r)*l*l*l/6+(5-2*r+28*n-3*r*r+.05391597401814761+24*n*n)*l*l*l*l*l/120)/Math.cos(u);_=M+T(_);var x;if(t.accuracy){var v=z({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});x={top:v.lat,right:v.lon,bottom:y,left:_}}else x={lat:y,lon:_};return x}function L(t){var s="Z";return 84>=t&&t>=72?s="X":72>t&&t>=64?s="W":64>t&&t>=56?s="V":56>t&&t>=48?s="U":48>t&&t>=40?s="T":40>t&&t>=32?s="S":32>t&&t>=24?s="R":24>t&&t>=16?s="Q":16>t&&t>=8?s="P":8>t&&t>=0?s="N":0>t&&t>=-8?s="M":-8>t&&t>=-16?s="L":-16>t&&t>=-24?s="K":-24>t&&t>=-32?s="J":-32>t&&t>=-40?s="H":-40>t&&t>=-48?s="G":-48>t&&t>=-56?s="F":-56>t&&t>=-64?s="E":-64>t&&t>=-72?s="D":-72>t&&t>=-80&&(s="C"),s}function D(t,s){var i="00000"+t.easting,a="00000"+t.northing;return t.zoneNumber+t.zoneLetter+B(t.easting,t.northing,t.zoneNumber)+i.substr(i.length-5,s)+a.substr(a.length-5,s)}function B(t,s,i){var a=U(i);return F(Math.floor(t/1e5),Math.floor(s/1e5)%20,a)}function U(t){var s=t%Ht;return 0===s&&(s=Ht),s}function F(t,s,i){var a=i-1,h=Kt.charCodeAt(a),e=Xt.charCodeAt(a),n=h+t-1,r=e+s,o=!1;return n>$t&&(n=n-$t+Jt-1,o=!0),(n===Vt||h<Vt&&n>Vt||(n>Vt||h<Vt)&&o)&&n++,(n===Zt||h<Zt&&n>Zt||(n>Zt||h<Zt)&&o)&&++n===Vt&&n++,n>$t&&(n=n-$t+Jt-1),r>Yt?(r=r-Yt+Jt-1,o=!0):o=!1,(r===Vt||e<Vt&&r>Vt||(r>Vt||e<Vt)&&o)&&r++,(r===Zt||e<Zt&&r>Zt||(r>Zt||e<Zt)&&o)&&++r===Vt&&r++,r>Yt&&(r=r-Yt+Jt-1),String.fromCharCode(n)+String.fromCharCode(r)}function Q(t){if(t&&0===t.length)throw"MGRSPoint coverting from nothing";for(var s,i=t.length,a=null,h="",e=0;!/[A-Z]/.test(s=t.charAt(e));){if(e>=2)throw"MGRSPoint bad conversion from: "+t;h+=s,e++}var n=parseInt(h,10);if(0===e||e+3>i)throw"MGRSPoint bad conversion from: "+t;var r=t.charAt(e++);if(r<="A"||"B"===r||"Y"===r||r>="Z"||"I"===r||"O"===r)throw"MGRSPoint zone letter "+r+" not handled: "+t;a=t.substring(e,e+=2);for(var o=U(n),l=W(a.charAt(0),o),M=H(a.charAt(1),o);M<K(r);)M+=2e6;var c=i-e;if(c%2!=0)throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+t;var u,f,m,p,d,y=c/2,_=0,x=0;return y>0&&(u=1e5/Math.pow(10,y),f=t.substring(e,e+y),_=parseFloat(f)*u,m=t.substring(e+y),x=parseFloat(m)*u),p=_+l,d=x+M,{easting:p,northing:d,zoneLetter:r,zoneNumber:n,accuracy:u}}function W(t,s){for(var i=Kt.charCodeAt(s-1),a=1e5,h=!1;i!==t.charCodeAt(0);){if(++i===Vt&&i++,i===Zt&&i++,i>$t){if(h)throw"Bad character: "+t;i=Jt,h=!0}a+=1e5}return a}function H(t,s){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var i=Xt.charCodeAt(s-1),a=0,h=!1;i!==t.charCodeAt(0);){if(++i===Vt&&i++,i===Zt&&i++,i>Yt){if(h)throw"Bad character: "+t;i=Jt,h=!0}a+=1e5}return a}function K(t){var s;switch(t){case"C":s=11e5;break;case"D":s=2e6;break;case"E":s=28e5;break;case"F":s=37e5;break;case"G":s=46e5;break;case"H":s=55e5;break;case"J":s=64e5;break;case"K":s=73e5;break;case"L":s=82e5;break;case"M":s=91e5;break;case"N":s=0;break;case"P":s=8e5;break;case"Q":s=17e5;break;case"R":s=26e5;break;case"S":s=35e5;break;case"T":s=44e5;break;case"U":s=53e5;break;case"V":s=62e5;break;case"W":s=7e6;break;case"X":s=79e5;break;default:s=-1}if(s>=0)return s;throw"Invalid zone letter: "+t}function Point(t,s,i){if(!(this instanceof Point))return new Point(t,s,i);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if("object"==typeof t)this.x=t.x,this.y=t.y,this.z=t.z||0;else if("string"==typeof t&&void 0===s){var a=t.split(",");this.x=parseFloat(a[0],10),this.y=parseFloat(a[1],10),this.z=parseFloat(a[2],10)||0}else this.x=t,this.y=s,this.z=i||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}function X(t){var s,i=[];return i[0]=t*Ts,s=t*t,i[0]+=s*js,i[1]=s*Ls,s*=t,i[0]+=s*zs,i[1]+=s*Ds,i[2]=s*Bs,i}function J(t,s){var i=t+t;return t+s[0]*Math.sin(i)+s[1]*Math.sin(i+i)+s[2]*Math.sin(i+i+i)}function V(t,s,i,a){var h;return t<ot?(a.value=ri.AREA_0,h=0):(h=Math.atan2(s,i),Math.abs(h)<=ct?a.value=ri.AREA_0:h>ct&&h<=ht+ct?(a.value=ri.AREA_1,h-=ht):h>ht+ct||h<=-(ht+ct)?(a.value=ri.AREA_2,h=h>=0?h-ft:h+ft):(a.value=ri.AREA_3,h+=ht)),h}function Z(t,s){var i=t+s;return i<-ft?i+=ut:i>+ft&&(i-=ut),i}function Y(t,s,i,a){for(var h=s;a;--a){var e=t(h);if(h-=e,Math.abs(e)<i)break}return h}var $=1,tt=2,st=4,it=5,at=484813681109536e-20,ht=Math.PI/2,et=.16666666666666666,nt=.04722222222222222,rt=.022156084656084655,ot=1e-10,lt=.017453292519943295,Mt=57.29577951308232,ct=Math.PI/4,ut=2*Math.PI,ft=3.14159265359,mt={};mt.greenwich=0,mt.lisbon=-9.131906111111,mt.paris=2.337229166667,mt.bogota=-74.080916666667,mt.madrid=-3.687938888889,mt.rome=12.452333333333,mt.bern=7.439583333333,mt.jakarta=106.807719444444,mt.ferro=-17.666666666667,mt.brussels=4.367975,mt.stockholm=18.058277777778,mt.athens=23.7163375,mt.oslo=10.722916666667;var pt={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}},dt=/[\s_\-\/\(\)]/g,yt=function(s){var i,a,h,e={},n=s.split("+").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,s){var i=s.split("=");return i.push(!0),t[i[0].toLowerCase()]=i[1],t},{}),r={proj:"projName",datum:"datumCode",rf:function(t){e.rf=parseFloat(t)},lat_0:function(t){e.lat0=t*lt},lat_1:function(t){e.lat1=t*lt},lat_2:function(t){e.lat2=t*lt},lat_ts:function(t){e.lat_ts=t*lt},lon_0:function(t){e.long0=t*lt},lon_1:function(t){e.long1=t*lt},lon_2:function(t){e.long2=t*lt},alpha:function(t){e.alpha=parseFloat(t)*lt},lonc:function(t){e.longc=t*lt},x_0:function(t){e.x0=parseFloat(t)},y_0:function(t){e.y0=parseFloat(t)},k_0:function(t){e.k0=parseFloat(t)},k:function(t){e.k0=parseFloat(t)},a:function(t){e.a=parseFloat(t)},b:function(t){e.b=parseFloat(t)},r_a:function(){e.R_A=!0},zone:function(t){e.zone=parseInt(t,10)},south:function(){e.utmSouth=!0},towgs84:function(t){e.datum_params=t.split(",").map(function(t){return parseFloat(t)})},to_meter:function(t){e.to_meter=parseFloat(t)},units:function(s){e.units=s;var i=t(pt,s);i&&(e.to_meter=i.to_meter)},from_greenwich:function(t){e.from_greenwich=t*lt},pm:function(s){var i=t(mt,s);e.from_greenwich=(i||parseFloat(s))*lt},nadgrids:function(t){"@null"===t?e.datumCode="none":e.nadgrids=t},axis:function(t){3===t.length&&-1!=="ewnsud".indexOf(t.substr(0,1))&&-1!=="ewnsud".indexOf(t.substr(1,1))&&-1!=="ewnsud".indexOf(t.substr(2,1))&&(e.axis=t)}};for(i in n)a=n[i],i in r?"function"==typeof(h=r[i])?h(a):e[h]=a:e[i]=a;return"string"==typeof e.datumCode&&"WGS84"!==e.datumCode&&(e.datumCode=e.datumCode.toLowerCase()),e},_t=1,xt=/\s/,vt=/[A-Za-z]/,gt=/[A-Za-z84]/,bt=/[,\]]/,wt=/[\d\.E\-\+]/;s.prototype.readCharicter=function(){var t=this.text[this.place++];if(4!==this.state)for(;xt.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case _t:return this.neutral(t);case 2:return this.keyword(t);case 4:return this.quoted(t);case 5:return this.afterquote(t);case 3:return this.number(t);case-1:return}},s.prototype.afterquote=function(t){if('"'===t)return this.word+='"',void(this.state=4);if(bt.test(t))return this.word=this.word.trim(),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in afterquote yet, index '+this.place)},s.prototype.afterItem=function(t){return","===t?(null!==this.word&&this.currentObject.push(this.word),this.word=null,void(this.state=_t)):"]"===t?(this.level--,null!==this.word&&(this.currentObject.push(this.word),this.word=null),this.state=_t,this.currentObject=this.stack.pop(),void(this.currentObject||(this.state=-1))):void 0},s.prototype.number=function(t){if(!wt.test(t)){if(bt.test(t))return this.word=parseFloat(this.word),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in number yet, index '+this.place)}this.word+=t},s.prototype.quoted=function(t){'"'!==t?this.word+=t:this.state=5},s.prototype.keyword=function(t){if(gt.test(t))this.word+=t;else{if("["===t){var s=[];return s.push(this.word),this.level++,null===this.root?this.root=s:this.currentObject.push(s),this.stack.push(this.currentObject),this.currentObject=s,void(this.state=_t)}if(!bt.test(t))throw new Error("havn't handled \""+t+'" in keyword yet, index '+this.place);this.afterItem(t)}},s.prototype.neutral=function(t){if(vt.test(t))return this.word=t,void(this.state=2);if('"'===t)return this.word="",void(this.state=4);if(wt.test(t))return this.word=t,void(this.state=3);{if(!bt.test(t))throw new Error("havn't handled \""+t+'" in neutral yet, index '+this.place);this.afterItem(t)}},s.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(-1===this.state)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};var At=.017453292519943295,Ct=function(t){var s=i(t),a=s.shift(),e=s.shift();s.unshift(["name",e]),s.unshift(["type",a]);var n={};return h(s,n),r(n),n};!function(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}(o);var Et=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"],Pt=["3857","900913","3785","102113"],Nt=function(t,s){t=t||{};var i,a;if(!s)return t;for(a in s)void 0!==(i=s[a])&&(t[a]=i);return t},St=function(t,s,i){var a=t*s;return i/Math.sqrt(1-a*a)},kt=function(t){return t<0?-1:1},qt=function(t){return Math.abs(t)<=ft?t:t-kt(t)*ut},It=function(t,s,i){var a=t*i,h=.5*t;return a=Math.pow((1-a)/(1+a),h),Math.tan(.5*(ht-s))/a},Ot=function(t,s){for(var i,a,h=.5*t,e=ht-2*Math.atan(s),n=0;n<=15;n++)if(i=t*Math.sin(e),a=ht-2*Math.atan(s*Math.pow((1-i)/(1+i),h))-e,e+=a,Math.abs(a)<=1e-10)return e;return-9999},Rt=[{init:function(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=St(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)},forward:function(t){var s=t.x,i=t.y;if(i*Mt>90&&i*Mt<-90&&s*Mt>180&&s*Mt<-180)return null;var a,h;if(Math.abs(Math.abs(i)-ht)<=ot)return null;if(this.sphere)a=this.x0+this.a*this.k0*qt(s-this.long0),h=this.y0+this.a*this.k0*Math.log(Math.tan(ct+.5*i));else{var e=Math.sin(i),n=It(this.e,i,e);a=this.x0+this.a*this.k0*qt(s-this.long0),h=this.y0-this.a*this.k0*Math.log(n)}return t.x=a,t.y=h,t},inverse:function(t){var s,i,a=t.x-this.x0,h=t.y-this.y0;if(this.sphere)i=ht-2*Math.atan(Math.exp(-h/(this.a*this.k0)));else{var e=Math.exp(-h/(this.a*this.k0));if(-9999===(i=Ot(this.e,e)))return null}return s=qt(this.long0+a/(this.a*this.k0)),t.x=s,t.y=i,t},names:["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"]},{init:function(){},forward:d,inverse:d,names:["longlat","identity"]}],Gt={},Tt=[],jt={start:function(){Rt.forEach(y)},add:y,get:function(t){if(!t)return!1;var s=t.toLowerCase();return void 0!==Gt[s]&&Tt[Gt[s]]?Tt[Gt[s]]:void 0}},zt={};zt.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"},zt.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},zt.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},zt.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"},zt.airy={a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},zt.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},zt.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},zt.mod_airy={a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},zt.andrae={a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},zt.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},zt.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},zt.bessel={a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},zt.bess_nam={a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},zt.clrk66={a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},zt.clrk80={a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},zt.clrk58={a:6378293.645208759,rf:294.2606763692654,ellipseName:"Clarke 1858"},zt.CPM={a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},zt.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},zt.engelis={a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},zt.evrst30={a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},zt.evrst48={a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},zt.evrst56={a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},zt.evrst69={a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},zt.evrstSS={a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},zt.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},zt.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"},zt.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"},zt.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"},zt.hough={a:6378270,rf:297,ellipseName:"Hough"},zt.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},zt.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"},zt.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"},zt.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"},zt.new_intl={a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},zt.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},zt.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},zt.SEasia={a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},zt.walbeck={a:6376896,b:6355834.8467,ellipseName:"Walbeck"},zt.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"},zt.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"},zt.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var Lt=zt.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};zt.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};var Dt={};Dt.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},Dt.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},Dt.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},Dt.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},Dt.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},Dt.potsdam={towgs84:"606.0,23.0,413.0",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},Dt.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},Dt.hermannskogel={towgs84:"653.0,-212.0,449.0",ellipse:"bessel",datumName:"Hermannskogel"},Dt.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},Dt.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},Dt.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},Dt.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},Dt.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"},Dt.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},Dt.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},Dt.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},Dt.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},Projection.projections=jt,Projection.projections.start();var Bt=function(t,s,i){return g(t,s)?i:t.datum_type===it||s.datum_type===it?i:t.es!==s.es||t.a!==s.a||E(t.datum_type)||E(s.datum_type)?(i=b(i,t.es,t.a),E(t.datum_type)&&(i=A(i,t.datum_type,t.datum_params)),E(s.datum_type)&&(i=C(i,s.datum_type,s.datum_params)),w(i,s.es,s.a,s.b)):i},Ut=function(t,s,i){var a,h,e,n=i.x,r=i.y,o=i.z||0,l={};for(e=0;e<3;e++)if(!s||2!==e||void 0!==i.z)switch(0===e?(a=n,h="x"):1===e?(a=r,h="y"):(a=o,h="z"),t.axis[e]){case"e":l[h]=a;break;case"w":l[h]=-a;break;case"n":l[h]=a;break;case"s":l[h]=-a;break;case"u":void 0!==i[h]&&(l.z=a);break;case"d":void 0!==i[h]&&(l.z=-a);break;default:return null}return l},Ft=function(t){var s={x:t[0],y:t[1]};return t.length>2&&(s.z=t[2]),t.length>3&&(s.m=t[3]),s},Qt=function(t){P(t.x),P(t.y)},Wt=Projection("WGS84"),Ht=6,Kt="AJSAJS",Xt="AFAFAF",Jt=65,Vt=73,Zt=79,Yt=86,$t=90,ts={forward:O,inverse:function(t){var s=z(Q(t.toUpperCase()));return s.lat&&s.lon?[s.lon,s.lat,s.lon,s.lat]:[s.left,s.bottom,s.right,s.top]},toPoint:R};Point.fromMGRS=function(t){return new Point(R(t))},Point.prototype.toMGRS=function(t){return O([this.x,this.y],t)};var ss=.01068115234375,is=function(t){var s=[];s[0]=1-t*(.25+t*(.046875+t*(.01953125+t*ss))),s[1]=t*(.75-t*(.046875+t*(.01953125+t*ss)));var i=t*t;return s[2]=i*(.46875-t*(.013020833333333334+.007120768229166667*t)),i*=t,s[3]=i*(.3645833333333333-.005696614583333333*t),s[4]=i*t*.3076171875,s},as=function(t,s,i,a){return i*=s,s*=s,a[0]*t-i*(a[1]+s*(a[2]+s*(a[3]+s*a[4])))},hs=function(t,s,i){for(var a=1/(1-s),h=t,e=20;e;--e){var n=Math.sin(h),r=1-s*n*n;if(r=(as(h,n,Math.cos(h),i)-t)*(r*Math.sqrt(r))*a,h-=r,Math.abs(r)<ot)return h}return h},es={init:function(){this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.es&&(this.en=is(this.es),this.ml0=as(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))},forward:function(t){var s,i,a,h=t.x,e=t.y,n=qt(h-this.long0),r=Math.sin(e),o=Math.cos(e);if(this.es){var l=o*n,M=Math.pow(l,2),c=this.ep2*Math.pow(o,2),u=Math.pow(c,2),f=Math.abs(o)>ot?Math.tan(e):0,m=Math.pow(f,2),p=Math.pow(m,2);s=1-this.es*Math.pow(r,2),l/=Math.sqrt(s);var d=as(e,r,o,this.en);i=this.a*(this.k0*l*(1+M/6*(1-m+c+M/20*(5-18*m+p+14*c-58*m*c+M/42*(61+179*p-p*m-479*m)))))+this.x0,a=this.a*(this.k0*(d-this.ml0+r*n*l/2*(1+M/12*(5-m+9*c+4*u+M/30*(61+p-58*m+270*c-330*m*c+M/56*(1385+543*p-p*m-3111*m))))))+this.y0}else{var y=o*Math.sin(n);if(Math.abs(Math.abs(y)-1)<ot)return 93;if(i=.5*this.a*this.k0*Math.log((1+y)/(1-y))+this.x0,a=o*Math.cos(n)/Math.sqrt(1-Math.pow(y,2)),(y=Math.abs(a))>=1){if(y-1>ot)return 93;a=0}else a=Math.acos(a);e<0&&(a=-a),a=this.a*this.k0*(a-this.lat0)+this.y0}return t.x=i,t.y=a,t},inverse:function(t){var s,i,a,h,e=(t.x-this.x0)*(1/this.a),n=(t.y-this.y0)*(1/this.a);if(this.es)if(s=this.ml0+n/this.k0,i=hs(s,this.es,this.en),Math.abs(i)<ht){var r=Math.sin(i),o=Math.cos(i),l=Math.abs(o)>ot?Math.tan(i):0,M=this.ep2*Math.pow(o,2),c=Math.pow(M,2),u=Math.pow(l,2),f=Math.pow(u,2);s=1-this.es*Math.pow(r,2);var m=e*Math.sqrt(s)/this.k0,p=Math.pow(m,2);a=i-(s*=l)*p/(1-this.es)*.5*(1-p/12*(5+3*u-9*M*u+M-4*c-p/30*(61+90*u-252*M*u+45*f+46*M-p/56*(1385+3633*u+4095*f+1574*f*u)))),h=qt(this.long0+m*(1-p/6*(1+2*u+M-p/20*(5+28*u+24*f+8*M*u+6*M-p/42*(61+662*u+1320*f+720*f*u))))/o)}else a=ht*kt(n),h=0;else{var d=Math.exp(e/this.k0),y=.5*(d-1/d),_=this.lat0+n/this.k0,x=Math.cos(_);s=Math.sqrt((1-Math.pow(x,2))/(1+Math.pow(y,2))),a=Math.asin(s),n<0&&(a=-a),h=0===y&&0===x?0:qt(Math.atan2(y,x)+this.long0)}return t.x=h,t.y=a,t},names:["Transverse_Mercator","Transverse Mercator","tmerc"]},ns=function(t){var s=Math.exp(t);return s=(s-1/s)/2},rs=function(t,s){t=Math.abs(t),s=Math.abs(s);var i=Math.max(t,s),a=Math.min(t,s)/(i||1);return i*Math.sqrt(1+Math.pow(a,2))},os=function(t){var s=1+t,i=s-1;return 0===i?t:t*Math.log(s)/i},ls=function(t){var s=Math.abs(t);return s=os(s*(1+s/(rs(1,s)+1))),t<0?-s:s},Ms=function(t,s){for(var i,a=2*Math.cos(2*s),h=t.length-1,e=t[h],n=0;--h>=0;)i=a*e-n+t[h],n=e,e=i;return s+i*Math.sin(2*s)},cs=function(t,s){for(var i,a=2*Math.cos(s),h=t.length-1,e=t[h],n=0;--h>=0;)i=a*e-n+t[h],n=e,e=i;return Math.sin(s)*i},us=function(t){var s=Math.exp(t);return s=(s+1/s)/2},fs=function(t,s,i){for(var a,h,e=Math.sin(s),n=Math.cos(s),r=ns(i),o=us(i),l=2*n*o,M=-2*e*r,c=t.length-1,u=t[c],f=0,m=0,p=0;--c>=0;)a=m,h=f,u=l*(m=u)-a-M*(f=p)+t[c],p=M*m-h+l*f;return l=e*o,M=n*r,[l*u-M*p,l*p+M*u]},ms={init:function(){if(void 0===this.es||this.es<=0)throw new Error("incorrect elliptical usage");this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),s=t/(2-t),i=s;this.cgb[0]=s*(2+s*(-2/3+s*(s*(116/45+s*(26/45+s*(-2854/675)))-2))),this.cbg[0]=s*(s*(2/3+s*(4/3+s*(-82/45+s*(32/45+s*(4642/4725)))))-2),i*=s,this.cgb[1]=i*(7/3+s*(s*(-227/45+s*(2704/315+s*(2323/945)))-1.6)),this.cbg[1]=i*(5/3+s*(-16/15+s*(-13/9+s*(904/315+s*(-1522/945))))),i*=s,this.cgb[2]=i*(56/15+s*(-136/35+s*(-1262/105+s*(73814/2835)))),this.cbg[2]=i*(-26/15+s*(34/21+s*(1.6+s*(-12686/2835)))),i*=s,this.cgb[3]=i*(4279/630+s*(-332/35+s*(-399572/14175))),this.cbg[3]=i*(1237/630+s*(s*(-24832/14175)-2.4)),i*=s,this.cgb[4]=i*(4174/315+s*(-144838/6237)),this.cbg[4]=i*(-734/315+s*(109598/31185)),i*=s,this.cgb[5]=i*(601676/22275),this.cbg[5]=i*(444337/155925),i=Math.pow(s,2),this.Qn=this.k0/(1+s)*(1+i*(.25+i*(1/64+i/256))),this.utg[0]=s*(s*(2/3+s*(-37/96+s*(1/360+s*(81/512+s*(-96199/604800)))))-.5),this.gtu[0]=s*(.5+s*(-2/3+s*(5/16+s*(41/180+s*(-127/288+s*(7891/37800)))))),this.utg[1]=i*(-1/48+s*(-1/15+s*(437/1440+s*(-46/105+s*(1118711/3870720))))),this.gtu[1]=i*(13/48+s*(s*(557/1440+s*(281/630+s*(-1983433/1935360)))-.6)),i*=s,this.utg[2]=i*(-17/480+s*(37/840+s*(209/4480+s*(-5569/90720)))),this.gtu[2]=i*(61/240+s*(-103/140+s*(15061/26880+s*(167603/181440)))),i*=s,this.utg[3]=i*(-4397/161280+s*(11/504+s*(830251/7257600))),this.gtu[3]=i*(49561/161280+s*(-179/168+s*(6601661/7257600))),i*=s,this.utg[4]=i*(-4583/161280+s*(108847/3991680)),this.gtu[4]=i*(34729/80640+s*(-3418889/1995840)),i*=s,this.utg[5]=-.03233083094085698*i,this.gtu[5]=.6650675310896665*i;var a=Ms(this.cbg,this.lat0);this.Zb=-this.Qn*(a+cs(this.gtu,2*a))},forward:function(t){var s=qt(t.x-this.long0),i=t.y;i=Ms(this.cbg,i);var a=Math.sin(i),h=Math.cos(i),e=Math.sin(s),n=Math.cos(s);i=Math.atan2(a,n*h),s=Math.atan2(e*h,rs(a,h*n)),s=ls(Math.tan(s));var r=fs(this.gtu,2*i,2*s);i+=r[0],s+=r[1];var o,l;return Math.abs(s)<=2.623395162778?(o=this.a*(this.Qn*s)+this.x0,l=this.a*(this.Qn*i+this.Zb)+this.y0):(o=1/0,l=1/0),t.x=o,t.y=l,t},inverse:function(t){var s=(t.x-this.x0)*(1/this.a),i=(t.y-this.y0)*(1/this.a);i=(i-this.Zb)/this.Qn,s/=this.Qn;var a,h;if(Math.abs(s)<=2.623395162778){var e=fs(this.utg,2*i,2*s);i+=e[0],s+=e[1],s=Math.atan(ns(s));var n=Math.sin(i),r=Math.cos(i),o=Math.sin(s),l=Math.cos(s);i=Math.atan2(n*l,rs(o,l*r)),s=Math.atan2(o,l*r),a=qt(s+this.long0),h=Ms(this.cgb,i)}else a=1/0,h=1/0;return t.x=a,t.y=h,t},names:["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc"]},ps=function(t,s){if(void 0===t){if((t=Math.floor(30*(qt(s)+Math.PI)/Math.PI)+1)<0)return 0;if(t>60)return 60}return t},ds={init:function(){var t=ps(this.zone,this.long0);if(void 0===t)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*lt,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,ms.init.apply(this),this.forward=ms.forward,this.inverse=ms.inverse},names:["Universal Transverse Mercator System","utm"],dependsOn:"etmerc"},ys=function(t,s){return Math.pow((1-t)/(1+t),s)},_s=20,xs={init:function(){var t=Math.sin(this.lat0),s=Math.cos(this.lat0);s*=s,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*s*s/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+ct)/(Math.pow(Math.tan(.5*this.lat0+ct),this.C)*ys(this.e*t,this.ratexp))},forward:function(t){var s=t.x,i=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*i+ct),this.C)*ys(this.e*Math.sin(i),this.ratexp))-ht,t.x=this.C*s,t},inverse:function(t){for(var s=t.x/this.C,i=t.y,a=Math.pow(Math.tan(.5*i+ct)/this.K,1/this.C),h=_s;h>0&&(i=2*Math.atan(a*ys(this.e*Math.sin(t.y),-.5*this.e))-ht,!(Math.abs(i-t.y)<1e-14));--h)t.y=i;return h?(t.x=s,t.y=i,t):null},names:["gauss"]},vs={init:function(){xs.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))},forward:function(t){var s,i,a,h;return t.x=qt(t.x-this.long0),xs.forward.apply(this,[t]),s=Math.sin(t.y),i=Math.cos(t.y),a=Math.cos(t.x),h=this.k0*this.R2/(1+this.sinc0*s+this.cosc0*i*a),t.x=h*i*Math.sin(t.x),t.y=h*(this.cosc0*s-this.sinc0*i*a),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t},inverse:function(t){var s,i,a,h,e;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,e=Math.sqrt(t.x*t.x+t.y*t.y)){var n=2*Math.atan2(e,this.R2);s=Math.sin(n),i=Math.cos(n),h=Math.asin(i*this.sinc0+t.y*s*this.cosc0/e),a=Math.atan2(t.x*s,e*this.cosc0*i-t.y*this.sinc0*s)}else h=this.phic0,a=0;return t.x=a,t.y=h,xs.inverse.apply(this,[t]),t.x=qt(t.x+this.long0),t},names:["Stereographic_North_Pole","Oblique_Stereographic","Polar_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"]},gs={init:function(){this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ot&&(this.k0=.5*(1+kt(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=ot&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ot&&(this.k0=.5*this.cons*St(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/It(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=St(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-ht,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))},forward:function(t){var s,i,a,h,e,n,r=t.x,o=t.y,l=Math.sin(o),M=Math.cos(o),c=qt(r-this.long0);return Math.abs(Math.abs(r-this.long0)-Math.PI)<=ot&&Math.abs(o+this.lat0)<=ot?(t.x=NaN,t.y=NaN,t):this.sphere?(s=2*this.k0/(1+this.sinlat0*l+this.coslat0*M*Math.cos(c)),t.x=this.a*s*M*Math.sin(c)+this.x0,t.y=this.a*s*(this.coslat0*l-this.sinlat0*M*Math.cos(c))+this.y0,t):(i=2*Math.atan(this.ssfn_(o,l,this.e))-ht,h=Math.cos(i),a=Math.sin(i),Math.abs(this.coslat0)<=ot?(e=It(this.e,o*this.con,this.con*l),n=2*this.a*this.k0*e/this.cons,t.x=this.x0+n*Math.sin(r-this.long0),t.y=this.y0-this.con*n*Math.cos(r-this.long0),t):(Math.abs(this.sinlat0)<ot?(s=2*this.a*this.k0/(1+h*Math.cos(c)),t.y=s*a):(s=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*h*Math.cos(c))),t.y=s*(this.cosX0*a-this.sinX0*h*Math.cos(c))+this.y0),t.x=s*h*Math.sin(c)+this.x0,t))},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a,h,e,n=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var r=2*Math.atan(n/(2*this.a*this.k0));return s=this.long0,i=this.lat0,n<=ot?(t.x=s,t.y=i,t):(i=Math.asin(Math.cos(r)*this.sinlat0+t.y*Math.sin(r)*this.coslat0/n),s=qt(Math.abs(this.coslat0)<ot?this.lat0>0?this.long0+Math.atan2(t.x,-1*t.y):this.long0+Math.atan2(t.x,t.y):this.long0+Math.atan2(t.x*Math.sin(r),n*this.coslat0*Math.cos(r)-t.y*this.sinlat0*Math.sin(r))),t.x=s,t.y=i,t)}if(Math.abs(this.coslat0)<=ot){if(n<=ot)return i=this.lat0,s=this.long0,t.x=s,t.y=i,t;t.x*=this.con,t.y*=this.con,a=n*this.cons/(2*this.a*this.k0),i=this.con*Ot(this.e,a),s=this.con*qt(this.con*this.long0+Math.atan2(t.x,-1*t.y))}else h=2*Math.atan(n*this.cosX0/(2*this.a*this.k0*this.ms1)),s=this.long0,n<=ot?e=this.X0:(e=Math.asin(Math.cos(h)*this.sinX0+t.y*Math.sin(h)*this.cosX0/n),s=qt(this.long0+Math.atan2(t.x*Math.sin(h),n*this.cosX0*Math.cos(h)-t.y*this.sinX0*Math.sin(h)))),i=-1*Ot(this.e,Math.tan(.5*(ht+e)));return t.x=s,t.y=i,t},names:["stere","Stereographic_South_Pole","Polar Stereographic (variant B)"],ssfn_:function(t,s,i){return s*=i,Math.tan(.5*(ht+t))*Math.pow((1-s)/(1+s),.5*i)}},bs={init:function(){var t=this.lat0;this.lambda0=this.long0;var s=Math.sin(t),i=this.a,a=1/this.rf,h=2*a-Math.pow(a,2),e=this.e=Math.sqrt(h);this.R=this.k0*i*Math.sqrt(1-h)/(1-h*Math.pow(s,2)),this.alpha=Math.sqrt(1+h/(1-h)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(s/this.alpha);var n=Math.log(Math.tan(Math.PI/4+this.b0/2)),r=Math.log(Math.tan(Math.PI/4+t/2)),o=Math.log((1+e*s)/(1-e*s));this.K=n-this.alpha*r+this.alpha*e/2*o},forward:function(t){var s=Math.log(Math.tan(Math.PI/4-t.y/2)),i=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),a=-this.alpha*(s+i)+this.K,h=2*(Math.atan(Math.exp(a))-Math.PI/4),e=this.alpha*(t.x-this.lambda0),n=Math.atan(Math.sin(e)/(Math.sin(this.b0)*Math.tan(h)+Math.cos(this.b0)*Math.cos(e))),r=Math.asin(Math.cos(this.b0)*Math.sin(h)-Math.sin(this.b0)*Math.cos(h)*Math.cos(e));return t.y=this.R/2*Math.log((1+Math.sin(r))/(1-Math.sin(r)))+this.y0,t.x=this.R*n+this.x0,t},inverse:function(t){for(var s=t.x-this.x0,i=t.y-this.y0,a=s/this.R,h=2*(Math.atan(Math.exp(i/this.R))-Math.PI/4),e=Math.asin(Math.cos(this.b0)*Math.sin(h)+Math.sin(this.b0)*Math.cos(h)*Math.cos(a)),n=Math.atan(Math.sin(a)/(Math.cos(this.b0)*Math.cos(a)-Math.sin(this.b0)*Math.tan(h))),r=this.lambda0+n/this.alpha,o=0,l=e,M=-1e3,c=0;Math.abs(l-M)>1e-7;){if(++c>20)return;o=1/this.alpha*(Math.log(Math.tan(Math.PI/4+e/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),M=l,l=2*Math.atan(Math.exp(o))-Math.PI/2}return t.x=r,t.y=l,t},names:["somerc"]},ws={init:function(){this.no_off=this.no_off||!1,this.no_rot=this.no_rot||!1,isNaN(this.k0)&&(this.k0=1);var t=Math.sin(this.lat0),s=Math.cos(this.lat0),i=this.e*t;this.bl=Math.sqrt(1+this.es/(1-this.es)*Math.pow(s,4)),this.al=this.a*this.bl*this.k0*Math.sqrt(1-this.es)/(1-i*i);var a=It(this.e,this.lat0,t),h=this.bl/s*Math.sqrt((1-this.es)/(1-i*i));h*h<1&&(h=1);var e,n;if(isNaN(this.longc)){var r=It(this.e,this.lat1,Math.sin(this.lat1)),o=It(this.e,this.lat2,Math.sin(this.lat2));this.lat0>=0?this.el=(h+Math.sqrt(h*h-1))*Math.pow(a,this.bl):this.el=(h-Math.sqrt(h*h-1))*Math.pow(a,this.bl);var l=Math.pow(r,this.bl),M=Math.pow(o,this.bl);n=.5*((e=this.el/l)-1/e);var c=(this.el*this.el-M*l)/(this.el*this.el+M*l),u=(M-l)/(M+l),f=qt(this.long1-this.long2);this.long0=.5*(this.long1+this.long2)-Math.atan(c*Math.tan(.5*this.bl*f)/u)/this.bl,this.long0=qt(this.long0);var m=qt(this.long1-this.long0);this.gamma0=Math.atan(Math.sin(this.bl*m)/n),this.alpha=Math.asin(h*Math.sin(this.gamma0))}else e=this.lat0>=0?h+Math.sqrt(h*h-1):h-Math.sqrt(h*h-1),this.el=e*Math.pow(a,this.bl),n=.5*(e-1/e),this.gamma0=Math.asin(Math.sin(this.alpha)/h),this.long0=this.longc-Math.asin(n*Math.tan(this.gamma0))/this.bl;this.no_off?this.uc=0:this.lat0>=0?this.uc=this.al/this.bl*Math.atan2(Math.sqrt(h*h-1),Math.cos(this.alpha)):this.uc=-1*this.al/this.bl*Math.atan2(Math.sqrt(h*h-1),Math.cos(this.alpha))},forward:function(t){var s,i,a,h=t.x,e=t.y,n=qt(h-this.long0);if(Math.abs(Math.abs(e)-ht)<=ot)a=e>0?-1:1,i=this.al/this.bl*Math.log(Math.tan(ct+a*this.gamma0*.5)),s=-1*a*ht*this.al/this.bl;else{var r=It(this.e,e,Math.sin(e)),o=this.el/Math.pow(r,this.bl),l=.5*(o-1/o),M=.5*(o+1/o),c=Math.sin(this.bl*n),u=(l*Math.sin(this.gamma0)-c*Math.cos(this.gamma0))/M;i=Math.abs(Math.abs(u)-1)<=ot?Number.POSITIVE_INFINITY:.5*this.al*Math.log((1-u)/(1+u))/this.bl,s=Math.abs(Math.cos(this.bl*n))<=ot?this.al*this.bl*n:this.al*Math.atan2(l*Math.cos(this.gamma0)+c*Math.sin(this.gamma0),Math.cos(this.bl*n))/this.bl}return this.no_rot?(t.x=this.x0+s,t.y=this.y0+i):(s-=this.uc,t.x=this.x0+i*Math.cos(this.alpha)+s*Math.sin(this.alpha),t.y=this.y0+s*Math.cos(this.alpha)-i*Math.sin(this.alpha)),t},inverse:function(t){var s,i;this.no_rot?(i=t.y-this.y0,s=t.x-this.x0):(i=(t.x-this.x0)*Math.cos(this.alpha)-(t.y-this.y0)*Math.sin(this.alpha),s=(t.y-this.y0)*Math.cos(this.alpha)+(t.x-this.x0)*Math.sin(this.alpha),s+=this.uc);var a=Math.exp(-1*this.bl*i/this.al),h=.5*(a-1/a),e=.5*(a+1/a),n=Math.sin(this.bl*s/this.al),r=(n*Math.cos(this.gamma0)+h*Math.sin(this.gamma0))/e,o=Math.pow(this.el/Math.sqrt((1+r)/(1-r)),1/this.bl);return Math.abs(r-1)<ot?(t.x=this.long0,t.y=ht):Math.abs(r+1)<ot?(t.x=this.long0,t.y=-1*ht):(t.y=Ot(this.e,o),t.x=qt(this.long0-Math.atan2(h*Math.cos(this.gamma0)-n*Math.sin(this.gamma0),Math.cos(this.bl*s/this.al))/this.bl)),t},names:["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","omerc"]},As={init:function(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<ot)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var s=Math.sin(this.lat1),i=Math.cos(this.lat1),a=St(this.e,s,i),h=It(this.e,this.lat1,s),e=Math.sin(this.lat2),n=Math.cos(this.lat2),r=St(this.e,e,n),o=It(this.e,this.lat2,e),l=It(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>ot?this.ns=Math.log(a/r)/Math.log(h/o):this.ns=s,isNaN(this.ns)&&(this.ns=s),this.f0=a/(this.ns*Math.pow(h,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}},forward:function(t){var s=t.x,i=t.y;Math.abs(2*Math.abs(i)-Math.PI)<=ot&&(i=kt(i)*(ht-2*ot));var a,h,e=Math.abs(Math.abs(i)-ht);if(e>ot)a=It(this.e,i,Math.sin(i)),h=this.a*this.f0*Math.pow(a,this.ns);else{if((e=i*this.ns)<=0)return null;h=0}var n=this.ns*qt(s-this.long0);return t.x=this.k0*(h*Math.sin(n))+this.x0,t.y=this.k0*(this.rh-h*Math.cos(n))+this.y0,t},inverse:function(t){var s,i,a,h,e,n=(t.x-this.x0)/this.k0,r=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(s=Math.sqrt(n*n+r*r),i=1):(s=-Math.sqrt(n*n+r*r),i=-1);var o=0;if(0!==s&&(o=Math.atan2(i*n,i*r)),0!==s||this.ns>0){if(i=1/this.ns,a=Math.pow(s/(this.a*this.f0),i),-9999===(h=Ot(this.e,a)))return null}else h=-ht;return e=qt(o/this.ns+this.long0),t.x=e,t.y=h,t},names:["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_2SP","lcc"]},Cs={init:function(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq},forward:function(t){var s,i,a,h,e,n,r,o=t.x,l=t.y,M=qt(o-this.long0);return s=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),i=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/s)-this.s45),a=-M*this.alfa,h=Math.asin(Math.cos(this.ad)*Math.sin(i)+Math.sin(this.ad)*Math.cos(i)*Math.cos(a)),e=Math.asin(Math.cos(i)*Math.sin(a)/Math.cos(h)),n=this.n*e,r=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(h/2+this.s45),this.n),t.y=r*Math.cos(n)/1,t.x=r*Math.sin(n)/1,this.czech||(t.y*=-1,t.x*=-1),t},inverse:function(t){var s,i,a,h,e,n,r,o=t.x;t.x=t.y,t.y=o,this.czech||(t.y*=-1,t.x*=-1),e=Math.sqrt(t.x*t.x+t.y*t.y),h=Math.atan2(t.y,t.x)/Math.sin(this.s0),a=2*(Math.atan(Math.pow(this.ro0/e,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),s=Math.asin(Math.cos(this.ad)*Math.sin(a)-Math.sin(this.ad)*Math.cos(a)*Math.cos(h)),i=Math.asin(Math.cos(a)*Math.sin(h)/Math.cos(s)),t.x=this.long0-i/this.alfa,n=s,r=0;var l=0;do{t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(s/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(n))/(1-this.e*Math.sin(n)),this.e/2))-this.s45),Math.abs(n-t.y)<1e-10&&(r=1),n=t.y,l+=1}while(0===r&&l<15);return l>=15?null:t},names:["Krovak","krovak"]},Es=function(t,s,i,a,h){return t*h-s*Math.sin(2*h)+i*Math.sin(4*h)-a*Math.sin(6*h)},Ps=function(t){return 1-.25*t*(1+t/16*(3+1.25*t))},Ns=function(t){return.375*t*(1+.25*t*(1+.46875*t))},Ss=function(t){return.05859375*t*t*(1+.75*t)},ks=function(t){return t*t*t*(35/3072)},qs=function(t,s,i){var a=s*i;return t/Math.sqrt(1-a*a)},Is=function(t){return Math.abs(t)<ht?t:t-kt(t)*Math.PI},Os=function(t,s,i,a,h){var e,n;e=t/s;for(var r=0;r<15;r++)if(n=(t-(s*e-i*Math.sin(2*e)+a*Math.sin(4*e)-h*Math.sin(6*e)))/(s-2*i*Math.cos(2*e)+4*a*Math.cos(4*e)-6*h*Math.cos(6*e)),e+=n,Math.abs(n)<=1e-10)return e;return NaN},Rs={init:function(){this.sphere||(this.e0=Ps(this.es),this.e1=Ns(this.es),this.e2=Ss(this.es),this.e3=ks(this.es),this.ml0=this.a*Es(this.e0,this.e1,this.e2,this.e3,this.lat0))},forward:function(t){var s,i,a=t.x,h=t.y;if(a=qt(a-this.long0),this.sphere)s=this.a*Math.asin(Math.cos(h)*Math.sin(a)),i=this.a*(Math.atan2(Math.tan(h),Math.cos(a))-this.lat0);else{var e=Math.sin(h),n=Math.cos(h),r=qs(this.a,this.e,e),o=Math.tan(h)*Math.tan(h),l=a*Math.cos(h),M=l*l,c=this.es*n*n/(1-this.es);s=r*l*(1-M*o*(1/6-(8-o+8*c)*M/120)),i=this.a*Es(this.e0,this.e1,this.e2,this.e3,h)-this.ml0+r*e/n*M*(.5+(5-o+6*c)*M/24)}return t.x=s+this.x0,t.y=i+this.y0,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a=t.x/this.a,h=t.y/this.a;if(this.sphere){var e=h+this.lat0;s=Math.asin(Math.sin(e)*Math.cos(a)),i=Math.atan2(Math.tan(a),Math.cos(e))}else{var n=this.ml0/this.a+h,r=Os(n,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(r)-ht)<=ot)return t.x=this.long0,t.y=ht,h<0&&(t.y*=-1),t;var o=qs(this.a,this.e,Math.sin(r)),l=o*o*o/this.a/this.a*(1-this.es),M=Math.pow(Math.tan(r),2),c=a*this.a/o,u=c*c;s=r-o*Math.tan(r)/l*c*c*(.5-(1+3*M)*c*c/24),i=c*(1-u*(M/3+(1+3*M)*M*u/15))/Math.cos(r)}return t.x=qt(i+this.long0),t.y=Is(s),t},names:["Cassini","Cassini_Soldner","cass"]},Gs=function(t,s){var i;return t>1e-7?(i=t*s,(1-t*t)*(s/(1-i*i)-.5/t*Math.log((1-i)/(1+i)))):2*s},Ts=.3333333333333333,js=.17222222222222222,zs=.10257936507936508,Ls=.06388888888888888,Ds=.0664021164021164,Bs=.016415012942191543,Us={init:function(){var t=Math.abs(this.lat0);if(Math.abs(t-ht)<ot?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(t)<ot?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var s;switch(this.qp=Gs(this.e,1),this.mmf=.5/(1-this.es),this.apa=X(this.es),this.mode){case this.N_POLE:case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),s=Math.sin(this.lat0),this.sinb1=Gs(this.e,s)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*s*s)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))},forward:function(t){var s,i,a,h,e,n,r,o,l,M,c=t.x,u=t.y;if(c=qt(c-this.long0),this.sphere){if(e=Math.sin(u),M=Math.cos(u),a=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if((i=this.mode===this.EQUIT?1+M*a:1+this.sinph0*e+this.cosph0*M*a)<=ot)return null;s=(i=Math.sqrt(2/i))*M*Math.sin(c),i*=this.mode===this.EQUIT?e:this.cosph0*e-this.sinph0*M*a}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(a=-a),Math.abs(u+this.phi0)<ot)return null;i=ct-.5*u,s=(i=2*(this.mode===this.S_POLE?Math.cos(i):Math.sin(i)))*Math.sin(c),i*=a}}else{switch(r=0,o=0,l=0,a=Math.cos(c),h=Math.sin(c),e=Math.sin(u),n=Gs(this.e,e),this.mode!==this.OBLIQ&&this.mode!==this.EQUIT||(r=n/this.qp,o=Math.sqrt(1-r*r)),this.mode){case this.OBLIQ:l=1+this.sinb1*r+this.cosb1*o*a;break;case this.EQUIT:l=1+o*a;break;case this.N_POLE:l=ht+u,n=this.qp-n;break;case this.S_POLE:l=u-ht,n=this.qp+n}if(Math.abs(l)<ot)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),i=this.mode===this.OBLIQ?this.ymf*l*(this.cosb1*r-this.sinb1*o*a):(l=Math.sqrt(2/(1+o*a)))*r*this.ymf,s=this.xmf*l*o*h;break;case this.N_POLE:case this.S_POLE:n>=0?(s=(l=Math.sqrt(n))*h,i=a*(this.mode===this.S_POLE?l:-l)):s=i=0}}return t.x=this.a*s+this.x0,t.y=this.a*i+this.y0,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a,h,e,n,r,o=t.x/this.a,l=t.y/this.a;if(this.sphere){var M,c=0,u=0;if(M=Math.sqrt(o*o+l*l),(i=.5*M)>1)return null;switch(i=2*Math.asin(i),this.mode!==this.OBLIQ&&this.mode!==this.EQUIT||(u=Math.sin(i),c=Math.cos(i)),this.mode){case this.EQUIT:i=Math.abs(M)<=ot?0:Math.asin(l*u/M),o*=u,l=c*M;break;case this.OBLIQ:i=Math.abs(M)<=ot?this.phi0:Math.asin(c*this.sinph0+l*u*this.cosph0/M),o*=u*this.cosph0,l=(c-Math.sin(i)*this.sinph0)*M;break;case this.N_POLE:l=-l,i=ht-i;break;case this.S_POLE:i-=ht}s=0!==l||this.mode!==this.EQUIT&&this.mode!==this.OBLIQ?Math.atan2(o,l):0}else{if(r=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(o/=this.dd,l*=this.dd,(n=Math.sqrt(o*o+l*l))<ot)return t.x=0,t.y=this.phi0,t;h=2*Math.asin(.5*n/this.rq),a=Math.cos(h),o*=h=Math.sin(h),this.mode===this.OBLIQ?(r=a*this.sinb1+l*h*this.cosb1/n,e=this.qp*r,l=n*this.cosb1*a-l*this.sinb1*h):(r=l*h/n,e=this.qp*r,l=n*a)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(l=-l),!(e=o*o+l*l))return t.x=0,t.y=this.phi0,t;r=1-e/this.qp,this.mode===this.S_POLE&&(r=-r)}s=Math.atan2(o,l),i=J(Math.asin(r),this.apa)}return t.x=qt(this.long0+s),t.y=i,t},names:["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"],S_POLE:1,N_POLE:2,EQUIT:3,OBLIQ:4},Fs=function(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)},Qs={init:function(){Math.abs(this.lat1+this.lat2)<ot||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=St(this.e3,this.sin_po,this.cos_po),this.qs1=Gs(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=St(this.e3,this.sin_po,this.cos_po),this.qs2=Gs(this.e3,this.sin_po,this.cos_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Gs(this.e3,this.sin_po,this.cos_po),Math.abs(this.lat1-this.lat2)>ot?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)},forward:function(t){var s=t.x,i=t.y;this.sin_phi=Math.sin(i),this.cos_phi=Math.cos(i);var a=Gs(this.e3,this.sin_phi,this.cos_phi),h=this.a*Math.sqrt(this.c-this.ns0*a)/this.ns0,e=this.ns0*qt(s-this.long0),n=h*Math.sin(e)+this.x0,r=this.rh-h*Math.cos(e)+this.y0;return t.x=n,t.y=r,t},inverse:function(t){var s,i,a,h,e,n;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(s=Math.sqrt(t.x*t.x+t.y*t.y),a=1):(s=-Math.sqrt(t.x*t.x+t.y*t.y),a=-1),h=0,0!==s&&(h=Math.atan2(a*t.x,a*t.y)),a=s*this.ns0/this.a,this.sphere?n=Math.asin((this.c-a*a)/(2*this.ns0)):(i=(this.c-a*a)/this.ns0,n=this.phi1z(this.e3,i)),e=qt(h/this.ns0+this.long0),t.x=e,t.y=n,t},names:["Albers_Conic_Equal_Area","Albers","aea"],phi1z:function(t,s){var i,a,h,e,n,r=Fs(.5*s);if(t<ot)return r;for(var o=t*t,l=1;l<=25;l++)if(i=Math.sin(r),a=Math.cos(r),h=t*i,e=1-h*h,n=.5*e*e/a*(s/(1-o)-i/e+.5/t*Math.log((1-h)/(1+h))),r+=n,Math.abs(n)<=1e-7)return r;return null}},Ws={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1},forward:function(t){var s,i,a,h,e,n,r,o=t.x,l=t.y;return a=qt(o-this.long0),s=Math.sin(l),i=Math.cos(l),h=Math.cos(a),(e=this.sin_p14*s+this.cos_p14*i*h)>0||Math.abs(e)<=ot?(n=this.x0+1*this.a*i*Math.sin(a)/e,r=this.y0+1*this.a*(this.cos_p14*s-this.sin_p14*i*h)/e):(n=this.x0+this.infinity_dist*i*Math.sin(a),r=this.y0+this.infinity_dist*(this.cos_p14*s-this.sin_p14*i*h)),t.x=n,t.y=r,t},inverse:function(t){var s,i,a,h,e,n;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(s=Math.sqrt(t.x*t.x+t.y*t.y))?(h=Math.atan2(s,this.rc),i=Math.sin(h),a=Math.cos(h),n=Fs(a*this.sin_p14+t.y*i*this.cos_p14/s),e=Math.atan2(t.x*i,s*this.cos_p14*a-t.y*this.sin_p14*i),e=qt(this.long0+e)):(n=this.phic0,e=0),t.x=e,t.y=n,t},names:["gnom"]},Hs=function(t,s){var i=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(s)-i)<1e-6)return s<0?-1*ht:ht;for(var a,h,e,n,r=Math.asin(.5*s),o=0;o<30;o++)if(h=Math.sin(r),e=Math.cos(r),n=t*h,a=Math.pow(1-n*n,2)/(2*e)*(s/(1-t*t)-h/(1-n*n)+.5/t*Math.log((1-n)/(1+n))),r+=a,Math.abs(a)<=1e-10)return r;return NaN},Ks={init:function(){this.sphere||(this.k0=St(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},forward:function(t){var s,i,a=t.x,h=t.y,e=qt(a-this.long0);if(this.sphere)s=this.x0+this.a*e*Math.cos(this.lat_ts),i=this.y0+this.a*Math.sin(h)/Math.cos(this.lat_ts);else{var n=Gs(this.e,Math.sin(h));s=this.x0+this.a*this.k0*e,i=this.y0+this.a*n*.5/this.k0}return t.x=s,t.y=i,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i;return this.sphere?(s=qt(this.long0+t.x/this.a/Math.cos(this.lat_ts)),i=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(i=Hs(this.e,2*t.y*this.k0/this.a),s=qt(this.long0+t.x/(this.a*this.k0))),t.x=s,t.y=i,t},names:["cea"]},Xs={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)},forward:function(t){var s=t.x,i=t.y,a=qt(s-this.long0),h=Is(i-this.lat0);return t.x=this.x0+this.a*a*this.rc,t.y=this.y0+this.a*h,t},inverse:function(t){var s=t.x,i=t.y;return t.x=qt(this.long0+(s-this.x0)/(this.a*this.rc)),t.y=Is(this.lat0+(i-this.y0)/this.a),t},names:["Equirectangular","Equidistant_Cylindrical","eqc"]},Js=20,Vs={init:function(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ps(this.es),this.e1=Ns(this.es),this.e2=Ss(this.es),this.e3=ks(this.es),this.ml0=this.a*Es(this.e0,this.e1,this.e2,this.e3,this.lat0)},forward:function(t){var s,i,a,h=t.x,e=t.y,n=qt(h-this.long0);if(a=n*Math.sin(e),this.sphere)Math.abs(e)<=ot?(s=this.a*n,i=-1*this.a*this.lat0):(s=this.a*Math.sin(a)/Math.tan(e),i=this.a*(Is(e-this.lat0)+(1-Math.cos(a))/Math.tan(e)));else if(Math.abs(e)<=ot)s=this.a*n,i=-1*this.ml0;else{var r=qs(this.a,this.e,Math.sin(e))/Math.tan(e);s=r*Math.sin(a),i=this.a*Es(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+r*(1-Math.cos(a))}return t.x=s+this.x0,t.y=i+this.y0,t},inverse:function(t){var s,i,a,h,e,n,r,o,l;if(a=t.x-this.x0,h=t.y-this.y0,this.sphere)if(Math.abs(h+this.a*this.lat0)<=ot)s=qt(a/this.a+this.long0),i=0;else{n=this.lat0+h/this.a,r=a*a/this.a/this.a+n*n,o=n;var M;for(e=Js;e;--e)if(M=Math.tan(o),l=-1*(n*(o*M+1)-o-.5*(o*o+r)*M)/((o-n)/M-1),o+=l,Math.abs(l)<=ot){i=o;break}s=qt(this.long0+Math.asin(a*Math.tan(o)/this.a)/Math.sin(i))}else if(Math.abs(h+this.ml0)<=ot)i=0,s=qt(this.long0+a/this.a);else{n=(this.ml0+h)/this.a,r=a*a/this.a/this.a+n*n,o=n;var c,u,f,m,p;for(e=Js;e;--e)if(p=this.e*Math.sin(o),c=Math.sqrt(1-p*p)*Math.tan(o),u=this.a*Es(this.e0,this.e1,this.e2,this.e3,o),f=this.e0-2*this.e1*Math.cos(2*o)+4*this.e2*Math.cos(4*o)-6*this.e3*Math.cos(6*o),m=u/this.a,l=(n*(c*m+1)-m-.5*c*(m*m+r))/(this.es*Math.sin(2*o)*(m*m+r-2*n*m)/(4*c)+(n-m)*(c*f-2/Math.sin(2*o))-f),o-=l,Math.abs(l)<=ot){i=o;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(i),2))*Math.tan(i),s=qt(this.long0+Math.asin(a*c/this.a)/Math.sin(i))}return t.x=s,t.y=i,t},names:["Polyconic","poly"]},Zs={init:function(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013},forward:function(t){var s,i=t.x,a=t.y-this.lat0,h=i-this.long0,e=a/at*1e-5,n=h,r=1,o=0;for(s=1;s<=10;s++)r*=e,o+=this.A[s]*r;var l,M=o,c=n,u=1,f=0,m=0,p=0;for(s=1;s<=6;s++)l=f*M+u*c,u=u*M-f*c,f=l,m=m+this.B_re[s]*u-this.B_im[s]*f,p=p+this.B_im[s]*u+this.B_re[s]*f;return t.x=p*this.a+this.x0,t.y=m*this.a+this.y0,t},inverse:function(t){var s,i,a=t.x,h=t.y,e=a-this.x0,n=(h-this.y0)/this.a,r=e/this.a,o=1,l=0,M=0,c=0;for(s=1;s<=6;s++)i=l*n+o*r,o=o*n-l*r,l=i,M=M+this.C_re[s]*o-this.C_im[s]*l,c=c+this.C_im[s]*o+this.C_re[s]*l;for(var u=0;u<this.iterations;u++){var f,m=M,p=c,d=n,y=r;for(s=2;s<=6;s++)f=p*M+m*c,m=m*M-p*c,p=f,d+=(s-1)*(this.B_re[s]*m-this.B_im[s]*p),y+=(s-1)*(this.B_im[s]*m+this.B_re[s]*p);m=1,p=0;var _=this.B_re[1],x=this.B_im[1];for(s=2;s<=6;s++)f=p*M+m*c,m=m*M-p*c,p=f,_+=s*(this.B_re[s]*m-this.B_im[s]*p),x+=s*(this.B_im[s]*m+this.B_re[s]*p);var v=_*_+x*x;M=(d*_+y*x)/v,c=(y*_-d*x)/v}var g=M,b=c,w=1,A=0;for(s=1;s<=9;s++)w*=g,A+=this.D[s]*w;var C=this.lat0+A*at*1e5,E=this.long0+b;return t.x=E,t.y=C,t},names:["New_Zealand_Map_Grid","nzmg"]},Ys={init:function(){},forward:function(t){var s=t.x,i=t.y,a=qt(s-this.long0),h=this.x0+this.a*a,e=this.y0+this.a*Math.log(Math.tan(Math.PI/4+i/2.5))*1.25;return t.x=h,t.y=e,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s=qt(this.long0+t.x/this.a),i=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=s,t.y=i,t},names:["Miller_Cylindrical","mill"]},$s=20,ti={init:function(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=is(this.es)},forward:function(t){var s,i,a=t.x,h=t.y;if(a=qt(a-this.long0),this.sphere){if(this.m)for(var e=this.n*Math.sin(h),n=$s;n;--n){var r=(this.m*h+Math.sin(h)-e)/(this.m+Math.cos(h));if(h-=r,Math.abs(r)<ot)break}else h=1!==this.n?Math.asin(this.n*Math.sin(h)):h;s=this.a*this.C_x*a*(this.m+Math.cos(h)),i=this.a*this.C_y*h}else{var o=Math.sin(h),l=Math.cos(h);i=this.a*as(h,o,l,this.en),s=this.a*a*l/Math.sqrt(1-this.es*o*o)}return t.x=s,t.y=i,t},inverse:function(t){var s,i,a,h;return t.x-=this.x0,a=t.x/this.a,t.y-=this.y0,s=t.y/this.a,this.sphere?(s/=this.C_y,a/=this.C_x*(this.m+Math.cos(s)),this.m?s=Fs((this.m*s+Math.sin(s))/this.n):1!==this.n&&(s=Fs(Math.sin(s)/this.n)),a=qt(a+this.long0),s=Is(s)):(s=hs(t.y/this.a,this.es,this.en),(h=Math.abs(s))<ht?(h=Math.sin(s),i=this.long0+t.x*Math.sqrt(1-this.es*h*h)/(this.a*Math.cos(s)),a=qt(i)):h-ot<ht&&(a=this.long0)),t.x=a,t.y=s,t},names:["Sinusoidal","sinu"]},si={init:function(){},forward:function(t){for(var s=t.x,i=t.y,a=qt(s-this.long0),h=i,e=Math.PI*Math.sin(i);;){var n=-(h+Math.sin(h)-e)/(1+Math.cos(h));if(h+=n,Math.abs(n)<ot)break}h/=2,Math.PI/2-Math.abs(i)<ot&&(a=0);var r=.900316316158*this.a*a*Math.cos(h)+this.x0,o=1.4142135623731*this.a*Math.sin(h)+this.y0;return t.x=r,t.y=o,t},inverse:function(t){var s,i;t.x-=this.x0,t.y-=this.y0,i=t.y/(1.4142135623731*this.a),Math.abs(i)>.999999999999&&(i=.999999999999),s=Math.asin(i);var a=qt(this.long0+t.x/(.900316316158*this.a*Math.cos(s)));a<-Math.PI&&(a=-Math.PI),a>Math.PI&&(a=Math.PI),i=(2*s+Math.sin(2*s))/Math.PI,Math.abs(i)>1&&(i=1);var h=Math.asin(i);return t.x=a,t.y=h,t},names:["Mollweide","moll"]},ii={init:function(){Math.abs(this.lat1+this.lat2)<ot||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Ps(this.es),this.e1=Ns(this.es),this.e2=Ss(this.es),this.e3=ks(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=St(this.e,this.sinphi,this.cosphi),this.ml1=Es(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<ot?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=St(this.e,this.sinphi,this.cosphi),this.ml2=Es(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Es(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))},forward:function(t){var s,i=t.x,a=t.y;if(this.sphere)s=this.a*(this.g-a);else{var h=Es(this.e0,this.e1,this.e2,this.e3,a);s=this.a*(this.g-h)}var e=this.ns*qt(i-this.long0),n=this.x0+s*Math.sin(e),r=this.y0+this.rh-s*Math.cos(e);return t.x=n,t.y=r,t},inverse:function(t){t.x-=this.x0,t.y=this.rh-t.y+this.y0;var s,i,a,h;this.ns>=0?(i=Math.sqrt(t.x*t.x+t.y*t.y),s=1):(i=-Math.sqrt(t.x*t.x+t.y*t.y),s=-1);var e=0;if(0!==i&&(e=Math.atan2(s*t.x,s*t.y)),this.sphere)return h=qt(this.long0+e/this.ns),a=Is(this.g-i/this.a),t.x=h,t.y=a,t;var n=this.g-i/this.a;return a=Os(n,this.e0,this.e1,this.e2,this.e3),h=qt(this.long0+e/this.ns),t.x=h,t.y=a,t},names:["Equidistant_Conic","eqdc"]},ai={init:function(){this.R=this.a},forward:function(t){var s,i,a=t.x,h=t.y,e=qt(a-this.long0);Math.abs(h)<=ot&&(s=this.x0+this.R*e,i=this.y0);var n=Fs(2*Math.abs(h/Math.PI));(Math.abs(e)<=ot||Math.abs(Math.abs(h)-ht)<=ot)&&(s=this.x0,i=h>=0?this.y0+Math.PI*this.R*Math.tan(.5*n):this.y0+Math.PI*this.R*-Math.tan(.5*n));var r=.5*Math.abs(Math.PI/e-e/Math.PI),o=r*r,l=Math.sin(n),M=Math.cos(n),c=M/(l+M-1),u=c*c,f=c*(2/l-1),m=f*f,p=Math.PI*this.R*(r*(c-m)+Math.sqrt(o*(c-m)*(c-m)-(m+o)*(u-m)))/(m+o);e<0&&(p=-p),s=this.x0+p;var d=o+c;return p=Math.PI*this.R*(f*d-r*Math.sqrt((m+o)*(o+1)-d*d))/(m+o),i=h>=0?this.y0+p:this.y0-p,t.x=s,t.y=i,t},inverse:function(t){var s,i,a,h,e,n,r,o,l,M,c,u,f;return t.x-=this.x0,t.y-=this.y0,c=Math.PI*this.R,a=t.x/c,h=t.y/c,e=a*a+h*h,n=-Math.abs(h)*(1+e),r=n-2*h*h+a*a,o=-2*n+1+2*h*h+e*e,f=h*h/o+(2*r*r*r/o/o/o-9*n*r/o/o)/27,l=(n-r*r/3/o)/o,M=2*Math.sqrt(-l/3),c=3*f/l/M,Math.abs(c)>1&&(c=c>=0?1:-1),u=Math.acos(c)/3,i=t.y>=0?(-M*Math.cos(u+Math.PI/3)-r/3/o)*Math.PI:-(-M*Math.cos(u+Math.PI/3)-r/3/o)*Math.PI,s=Math.abs(a)<ot?this.long0:qt(this.long0+Math.PI*(e-1+Math.sqrt(1+2*(a*a-h*h)+e*e))/2/a),t.x=s,t.y=i,t},names:["Van_der_Grinten_I","VanDerGrinten","vandg"]},hi={init:function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)},forward:function(t){var s,i,a,h,e,n,r,o,l,M,c,u,f,m,p,d,y,_,x,v,g,b,w,A=t.x,C=t.y,E=Math.sin(t.y),P=Math.cos(t.y),N=qt(A-this.long0);return this.sphere?Math.abs(this.sin_p12-1)<=ot?(t.x=this.x0+this.a*(ht-C)*Math.sin(N),t.y=this.y0-this.a*(ht-C)*Math.cos(N),t):Math.abs(this.sin_p12+1)<=ot?(t.x=this.x0+this.a*(ht+C)*Math.sin(N),t.y=this.y0+this.a*(ht+C)*Math.cos(N),t):(_=this.sin_p12*E+this.cos_p12*P*Math.cos(N),d=Math.acos(_),y=d/Math.sin(d),t.x=this.x0+this.a*y*P*Math.sin(N),t.y=this.y0+this.a*y*(this.cos_p12*E-this.sin_p12*P*Math.cos(N)),t):(s=Ps(this.es),i=Ns(this.es),a=Ss(this.es),h=ks(this.es),Math.abs(this.sin_p12-1)<=ot?(e=this.a*Es(s,i,a,h,ht),n=this.a*Es(s,i,a,h,C),t.x=this.x0+(e-n)*Math.sin(N),t.y=this.y0-(e-n)*Math.cos(N),t):Math.abs(this.sin_p12+1)<=ot?(e=this.a*Es(s,i,a,h,ht),n=this.a*Es(s,i,a,h,C),t.x=this.x0+(e+n)*Math.sin(N),t.y=this.y0+(e+n)*Math.cos(N),t):(r=E/P,o=qs(this.a,this.e,this.sin_p12),l=qs(this.a,this.e,E),M=Math.atan((1-this.es)*r+this.es*o*this.sin_p12/(l*P)),c=Math.atan2(Math.sin(N),this.cos_p12*Math.tan(M)-this.sin_p12*Math.cos(N)),x=0===c?Math.asin(this.cos_p12*Math.sin(M)-this.sin_p12*Math.cos(M)):Math.abs(Math.abs(c)-Math.PI)<=ot?-Math.asin(this.cos_p12*Math.sin(M)-this.sin_p12*Math.cos(M)):Math.asin(Math.sin(N)*Math.cos(M)/Math.sin(c)),u=this.e*this.sin_p12/Math.sqrt(1-this.es),f=this.e*this.cos_p12*Math.cos(c)/Math.sqrt(1-this.es),m=u*f,p=f*f,v=x*x,g=v*x,b=g*x,w=b*x,d=o*x*(1-v*p*(1-p)/6+g/8*m*(1-2*p)+b/120*(p*(4-7*p)-3*u*u*(1-7*p))-w/48*m),t.x=this.x0+d*Math.sin(c),t.y=this.y0+d*Math.cos(c),t))},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var s,i,a,h,e,n,r,o,l,M,c,u,f,m,p,d,y,_,x,v,g,b,w;if(this.sphere){if((s=Math.sqrt(t.x*t.x+t.y*t.y))>2*ht*this.a)return;return i=s/this.a,a=Math.sin(i),h=Math.cos(i),e=this.long0,Math.abs(s)<=ot?n=this.lat0:(n=Fs(h*this.sin_p12+t.y*a*this.cos_p12/s),r=Math.abs(this.lat0)-ht,e=qt(Math.abs(r)<=ot?this.lat0>=0?this.long0+Math.atan2(t.x,-t.y):this.long0-Math.atan2(-t.x,t.y):this.long0+Math.atan2(t.x*a,s*this.cos_p12*h-t.y*this.sin_p12*a))),t.x=e,t.y=n,t}return o=Ps(this.es),l=Ns(this.es),M=Ss(this.es),c=ks(this.es),Math.abs(this.sin_p12-1)<=ot?(u=this.a*Es(o,l,M,c,ht),s=Math.sqrt(t.x*t.x+t.y*t.y),f=u-s,n=Os(f/this.a,o,l,M,c),e=qt(this.long0+Math.atan2(t.x,-1*t.y)),t.x=e,t.y=n,t):Math.abs(this.sin_p12+1)<=ot?(u=this.a*Es(o,l,M,c,ht),s=Math.sqrt(t.x*t.x+t.y*t.y),f=s-u,n=Os(f/this.a,o,l,M,c),e=qt(this.long0+Math.atan2(t.x,t.y)),t.x=e,t.y=n,t):(s=Math.sqrt(t.x*t.x+t.y*t.y),d=Math.atan2(t.x,t.y),m=qs(this.a,this.e,this.sin_p12),y=Math.cos(d),_=this.e*this.cos_p12*y,x=-_*_/(1-this.es),v=3*this.es*(1-x)*this.sin_p12*this.cos_p12*y/(1-this.es),g=s/m,b=g-x*(1+x)*Math.pow(g,3)/6-v*(1+3*x)*Math.pow(g,4)/24,w=1-x*b*b/2-g*b*b*b/6,p=Math.asin(this.sin_p12*Math.cos(b)+this.cos_p12*Math.sin(b)*y),e=qt(this.long0+Math.asin(Math.sin(d)*Math.sin(b)/Math.cos(p))),n=Math.atan((1-this.es*w*this.sin_p12/Math.sin(p))*Math.tan(p)/(1-this.es)),t.x=e,t.y=n,t)},names:["Azimuthal_Equidistant","aeqd"]},ei={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)},forward:function(t){var s,i,a,h,e,n,r,o=t.x,l=t.y;return a=qt(o-this.long0),s=Math.sin(l),i=Math.cos(l),h=Math.cos(a),((e=this.sin_p14*s+this.cos_p14*i*h)>0||Math.abs(e)<=ot)&&(n=1*this.a*i*Math.sin(a),r=this.y0+1*this.a*(this.cos_p14*s-this.sin_p14*i*h)),t.x=n,t.y=r,t},inverse:function(t){var s,i,a,h,e,n,r;return t.x-=this.x0,t.y-=this.y0,s=Math.sqrt(t.x*t.x+t.y*t.y),i=Fs(s/this.a),a=Math.sin(i),h=Math.cos(i),n=this.long0,Math.abs(s)<=ot?(r=this.lat0,t.x=n,t.y=r,t):(r=Fs(h*this.sin_p14+t.y*a*this.cos_p14/s),e=Math.abs(this.lat0)-ht,Math.abs(e)<=ot?(n=qt(this.lat0>=0?this.long0+Math.atan2(t.x,-t.y):this.long0-Math.atan2(-t.x,t.y)),t.x=n,t.y=r,t):(n=qt(this.long0+Math.atan2(t.x*a,s*this.cos_p14*h-t.y*this.sin_p14*a)),t.x=n,t.y=r,t))},names:["ortho"]},ni={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},ri={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4},oi={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=ht-ct/2?this.face=ni.TOP:this.lat0<=-(ht-ct/2)?this.face=ni.BOTTOM:Math.abs(this.long0)<=ct?this.face=ni.FRONT:Math.abs(this.long0)<=ht+ct?this.face=this.long0>0?ni.RIGHT:ni.LEFT:this.face=ni.BACK,0!==this.es&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)},forward:function(t){var s,i,a,h,e,n,r={x:0,y:0},o={value:0};if(t.x-=this.long0,s=0!==this.es?Math.atan(this.one_minus_f_squared*Math.tan(t.y)):t.y,i=t.x,this.face===ni.TOP)h=ht-s,i>=ct&&i<=ht+ct?(o.value=ri.AREA_0,a=i-ht):i>ht+ct||i<=-(ht+ct)?(o.value=ri.AREA_1,a=i>0?i-ft:i+ft):i>-(ht+ct)&&i<=-ct?(o.value=ri.AREA_2,a=i+ht):(o.value=ri.AREA_3,a=i);else if(this.face===ni.BOTTOM)h=ht+s,i>=ct&&i<=ht+ct?(o.value=ri.AREA_0,a=-i+ht):i<ct&&i>=-ct?(o.value=ri.AREA_1,a=-i):i<-ct&&i>=-(ht+ct)?(o.value=ri.AREA_2,a=-i-ht):(o.value=ri.AREA_3,a=i>0?-i+ft:-i-ft);else{var l,M,c,u,f,m;this.face===ni.RIGHT?i=Z(i,+ht):this.face===ni.BACK?i=Z(i,+ft):this.face===ni.LEFT&&(i=Z(i,-ht)),u=Math.sin(s),f=Math.cos(s),m=Math.sin(i),l=f*Math.cos(i),M=f*m,c=u,this.face===ni.FRONT?a=V(h=Math.acos(l),c,M,o):this.face===ni.RIGHT?a=V(h=Math.acos(M),c,-l,o):this.face===ni.BACK?a=V(h=Math.acos(-l),c,-M,o):this.face===ni.LEFT?a=V(h=Math.acos(-M),c,l,o):(h=a=0,o.value=ri.AREA_0)}return n=Math.atan(12/ft*(a+Math.acos(Math.sin(a)*Math.cos(ct))-ht)),e=Math.sqrt((1-Math.cos(h))/(Math.cos(n)*Math.cos(n))/(1-Math.cos(Math.atan(1/Math.cos(a))))),o.value===ri.AREA_1?n+=ht:o.value===ri.AREA_2?n+=ft:o.value===ri.AREA_3&&(n+=1.5*ft),r.x=e*Math.cos(n),r.y=e*Math.sin(n),r.x=r.x*this.a+this.x0,r.y=r.y*this.a+this.y0,t.x=r.x,t.y=r.y,t},inverse:function(t){var s,i,a,h,e,n,r,o,l,M={lam:0,phi:0},c={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,i=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),s=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?c.value=ri.AREA_0:t.y>=0&&t.y>=Math.abs(t.x)?(c.value=ri.AREA_1,s-=ht):t.x<0&&-t.x>=Math.abs(t.y)?(c.value=ri.AREA_2,s=s<0?s+ft:s-ft):(c.value=ri.AREA_3,s+=ht),l=ft/12*Math.tan(s),e=Math.sin(l)/(Math.cos(l)-1/Math.sqrt(2)),n=Math.atan(e),a=Math.cos(s),h=Math.tan(i),(r=1-a*a*h*h*(1-Math.cos(Math.atan(1/Math.cos(n)))))<-1?r=-1:r>1&&(r=1),this.face===ni.TOP)o=Math.acos(r),M.phi=ht-o,c.value===ri.AREA_0?M.lam=n+ht:c.value===ri.AREA_1?M.lam=n<0?n+ft:n-ft:c.value===ri.AREA_2?M.lam=n-ht:M.lam=n;else if(this.face===ni.BOTTOM)o=Math.acos(r),M.phi=o-ht,c.value===ri.AREA_0?M.lam=-n+ht:c.value===ri.AREA_1?M.lam=-n:c.value===ri.AREA_2?M.lam=-n-ht:M.lam=n<0?-n-ft:-n+ft;else{var u,f,m;l=(u=r)*u,f=(l+=(m=l>=1?0:Math.sqrt(1-l)*Math.sin(n))*m)>=1?0:Math.sqrt(1-l),c.value===ri.AREA_1?(l=f,f=-m,m=l):c.value===ri.AREA_2?(f=-f,m=-m):c.value===ri.AREA_3&&(l=f,f=m,m=-l),this.face===ni.RIGHT?(l=u,u=-f,f=l):this.face===ni.BACK?(u=-u,f=-f):this.face===ni.LEFT&&(l=u,u=f,f=-l),M.phi=Math.acos(-m)-ht,M.lam=Math.atan2(f,u),this.face===ni.RIGHT?M.lam=Z(M.lam,-ht):this.face===ni.BACK?M.lam=Z(M.lam,-ft):this.face===ni.LEFT&&(M.lam=Z(M.lam,+ht))}if(0!==this.es){var p,d,y;p=M.phi<0?1:0,d=Math.tan(M.phi),y=this.b/Math.sqrt(d*d+this.one_minus_f_squared),M.phi=Math.atan(Math.sqrt(this.a*this.a-y*y)/(this.one_minus_f*y)),p&&(M.phi=-M.phi)}return M.lam+=this.long0,t.x=M.lam,t.y=M.phi,t},names:["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"]},li=[[1,2.2199e-17,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-9.86701e-7],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,1.8736e-8],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,9.34959e-7],[.7986,-.00755338,-500009e-10,9.35324e-7],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Mi=[[-5.20417e-18,.0124,1.21431e-18,-8.45284e-11],[.062,.0124,-1.26793e-9,4.22642e-10],[.124,.0124,5.07171e-9,-1.60604e-9],[.186,.0123999,-1.90189e-8,6.00152e-9],[.248,.0124002,7.10039e-8,-2.24e-8],[.31,.0123992,-2.64997e-7,8.35986e-8],[.372,.0124029,9.88983e-7,-3.11994e-7],[.434,.0123893,-369093e-11,-4.35621e-7],[.4958,.0123198,-102252e-10,-3.45523e-7],[.5571,.0121916,-154081e-10,-5.82288e-7],[.6176,.0119938,-241424e-10,-5.25327e-7],[.6769,.011713,-320223e-10,-5.16405e-7],[.7346,.0113541,-397684e-10,-6.09052e-7],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-1.40374e-9],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],ci=.8487,ui=1.3523,fi=Mt/5,mi=1/fi,pi=18,di=function(t,s){return t[0]+s*(t[1]+s*(t[2]+s*t[3]))},yi=function(t,s){return t[1]+s*(2*t[2]+3*s*t[3])},_i={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"},forward:function(t){var s=qt(t.x-this.long0),i=Math.abs(t.y),a=Math.floor(i*fi);a<0?a=0:a>=pi&&(a=pi-1),i=Mt*(i-mi*a);var h={x:di(li[a],i)*s,y:di(Mi[a],i)};return t.y<0&&(h.y=-h.y),h.x=h.x*this.a*ci+this.x0,h.y=h.y*this.a*ui+this.y0,h},inverse:function(t){var s={x:(t.x-this.x0)/(this.a*ci),y:Math.abs(t.y-this.y0)/(this.a*ui)};if(s.y>=1)s.x/=li[pi][0],s.y=t.y<0?-ht:ht;else{var i=Math.floor(s.y*pi);for(i<0?i=0:i>=pi&&(i=pi-1);;)if(Mi[i][0]>s.y)--i;else{if(!(Mi[i+1][0]<=s.y))break;++i}var a=Mi[i],h=5*(s.y-a[0])/(Mi[i+1][0]-a[0]);h=Y(function(t){return(di(a,t)-s.y)/yi(a,t)},h,ot,100),s.x/=di(li[i],h),s.y=(5*i+h)*lt,t.y<0&&(s.y=-s.y)}return s.x=qt(s.x+this.long0),s},names:["Robinson","robin"]},xi={init:function(){this.name="geocent"},forward:function(t){return b(t,this.es,this.a)},inverse:function(t){return w(t,this.es,this.a,this.b)},names:["Geocentric","geocentric","geocent","Geocent"]};return I.defaultDatum="WGS84",I.Proj=Projection,I.WGS84=new I.Proj("WGS84"),I.Point=Point,I.toPoint=Ft,I.defs=o,I.transform=S,I.mgrs=ts,I.version="2.6.0",function(proj4){proj4.Proj.projections.add(es),proj4.Proj.projections.add(ms),proj4.Proj.projections.add(ds),proj4.Proj.projections.add(vs),proj4.Proj.projections.add(gs),proj4.Proj.projections.add(bs),proj4.Proj.projections.add(ws),proj4.Proj.projections.add(As),proj4.Proj.projections.add(Cs),proj4.Proj.projections.add(Rs),proj4.Proj.projections.add(Us),proj4.Proj.projections.add(Qs),proj4.Proj.projections.add(Ws),proj4.Proj.projections.add(Ks),proj4.Proj.projections.add(Xs),proj4.Proj.projections.add(Vs),proj4.Proj.projections.add(Zs),proj4.Proj.projections.add(Ys),proj4.Proj.projections.add(ti),proj4.Proj.projections.add(si),proj4.Proj.projections.add(ii),proj4.Proj.projections.add(ai),proj4.Proj.projections.add(hi),proj4.Proj.projections.add(ei),proj4.Proj.projections.add(oi),proj4.Proj.projections.add(_i),proj4.Proj.projections.add(xi)}(I),I});
;(function (factory) {
	var L, proj4;
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['leaflet', 'proj4'], factory);
	} else if (typeof module === 'object' && typeof module.exports === "object") {
		// Node/CommonJS
		L = require('leaflet');
		proj4 = require('proj4');
		module.exports = factory(L, proj4);
	} else {
		// Browser globals
		if (typeof window.L === 'undefined' || typeof window.proj4 === 'undefined')
			throw 'Leaflet and proj4 must be loaded first';
		factory(window.L, window.proj4);
	}
}(function (L, proj4) {
	if (proj4.__esModule && proj4.default) {
		// If proj4 was bundled as an ES6 module, unwrap it to get
		// to the actual main proj4 object.
		// See discussion in https://github.com/kartena/Proj4Leaflet/pull/147
		proj4 = proj4.default;
	}
 
	L.Proj = {};

	L.Proj._isProj4Obj = function(a) {
		return (typeof a.inverse !== 'undefined' &&
			typeof a.forward !== 'undefined');
	};

	L.Proj.Projection = L.Class.extend({
		initialize: function(code, def, bounds) {
			var isP4 = L.Proj._isProj4Obj(code);
			this._proj = isP4 ? code : this._projFromCodeDef(code, def);
			this.bounds = isP4 ? def : bounds;
		},

		project: function (latlng) {
			var point = this._proj.forward([latlng.lng, latlng.lat]);
			return new L.Point(point[0], point[1]);
		},

		unproject: function (point, unbounded) {
			var point2 = this._proj.inverse([point.x, point.y]);
			return new L.LatLng(point2[1], point2[0], unbounded);
		},

		_projFromCodeDef: function(code, def) {
			if (def) {
				proj4.defs(code, def);
			} else if (proj4.defs[code] === undefined) {
				var urn = code.split(':');
				if (urn.length > 3) {
					code = urn[urn.length - 3] + ':' + urn[urn.length - 1];
				}
				if (proj4.defs[code] === undefined) {
					throw 'No projection definition for code ' + code;
				}
			}

			return proj4(code);
		}
	});

	L.Proj.CRS = L.Class.extend({
		includes: L.CRS,

		options: {
			transformation: new L.Transformation(1, 0, -1, 0)
		},

		initialize: function(a, b, c) {
			var code,
			    proj,
			    def,
			    options;

			if (L.Proj._isProj4Obj(a)) {
				proj = a;
				code = proj.srsCode;
				options = b || {};

				this.projection = new L.Proj.Projection(proj, options.bounds);
			} else {
				code = a;
				def = b;
				options = c || {};
				this.projection = new L.Proj.Projection(code, def, options.bounds);
			}

			L.Util.setOptions(this, options);
			this.code = code;
			this.transformation = this.options.transformation;

			if (this.options.origin) {
				this.transformation =
					new L.Transformation(1, -this.options.origin[0],
						-1, this.options.origin[1]);
			}

			if (this.options.scales) {
				this._scales = this.options.scales;
			} else if (this.options.resolutions) {
				this._scales = [];
				for (var i = this.options.resolutions.length - 1; i >= 0; i--) {
					if (this.options.resolutions[i]) {
						this._scales[i] = 1 / this.options.resolutions[i];
					}
				}
			}

			this.infinite = !this.options.bounds;

		},

		scale: function(zoom) {
			var iZoom = Math.floor(zoom),
				baseScale,
				nextScale,
				scaleDiff,
				zDiff;
			if (zoom === iZoom) {
				return this._scales[zoom];
			} else {
				// Non-integer zoom, interpolate
				baseScale = this._scales[iZoom];
				nextScale = this._scales[iZoom + 1];
				scaleDiff = nextScale - baseScale;
				zDiff = (zoom - iZoom);
				return baseScale + scaleDiff * zDiff;
			}
		},

		zoom: function(scale) {
			// Find closest number in this._scales, down
			var downScale = this._closestElement(this._scales, scale),
				downZoom = this._scales.indexOf(downScale),
				nextScale,
				nextZoom,
				scaleDiff;
			// Check if scale is downScale => return array index
			if (scale === downScale) {
				return downZoom;
			}
			if (downScale === undefined) {
				return -Infinity;
			}
			// Interpolate
			nextZoom = downZoom + 1;
			nextScale = this._scales[nextZoom];
			if (nextScale === undefined) {
				return Infinity;
			}
			scaleDiff = nextScale - downScale;
			return (scale - downScale) / scaleDiff + downZoom;
		},

		distance: L.CRS.Earth.distance,

		R: L.CRS.Earth.R,

		/* Get the closest lowest element in an array */
		_closestElement: function(array, element) {
			var low;
			for (var i = array.length; i--;) {
				if (array[i] <= element && (low === undefined || low < array[i])) {
					low = array[i];
				}
			}
			return low;
		}
	});

	L.Proj.GeoJSON = L.GeoJSON.extend({
		initialize: function(geojson, options) {
			this._callLevel = 0;
			L.GeoJSON.prototype.initialize.call(this, geojson, options);
		},

		addData: function(geojson) {
			var crs;

			if (geojson) {
				if (geojson.crs && geojson.crs.type === 'name') {
					crs = new L.Proj.CRS(geojson.crs.properties.name);
				} else if (geojson.crs && geojson.crs.type) {
					crs = new L.Proj.CRS(geojson.crs.type + ':' + geojson.crs.properties.code);
				}

				if (crs !== undefined) {
					this.options.coordsToLatLng = function(coords) {
						var point = L.point(coords[0], coords[1]);
						return crs.projection.unproject(point);
					};
				}
			}

			// Base class' addData might call us recursively, but
			// CRS shouldn't be cleared in that case, since CRS applies
			// to the whole GeoJSON, inluding sub-features.
			this._callLevel++;
			try {
				L.GeoJSON.prototype.addData.call(this, geojson);
			} finally {
				this._callLevel--;
				if (this._callLevel === 0) {
					delete this.options.coordsToLatLng;
				}
			}
		}
	});

	L.Proj.geoJson = function(geojson, options) {
		return new L.Proj.GeoJSON(geojson, options);
	};

	L.Proj.ImageOverlay = L.ImageOverlay.extend({
		initialize: function (url, bounds, options) {
			L.ImageOverlay.prototype.initialize.call(this, url, null, options);
			this._projectedBounds = bounds;
		},

		// Danger ahead: Overriding internal methods in Leaflet.
		// Decided to do this rather than making a copy of L.ImageOverlay
		// and doing very tiny modifications to it.
		// Future will tell if this was wise or not.
		_animateZoom: function (event) {
			var scale = this._map.getZoomScale(event.zoom);
			var northWest = L.point(this._projectedBounds.min.x, this._projectedBounds.max.y);
			var offset = this._projectedToNewLayerPoint(northWest, event.zoom, event.center);

			L.DomUtil.setTransform(this._image, offset, scale);
		},

		_reset: function () {
			var zoom = this._map.getZoom();
			var pixelOrigin = this._map.getPixelOrigin();
			var bounds = L.bounds(
				this._transform(this._projectedBounds.min, zoom)._subtract(pixelOrigin),
				this._transform(this._projectedBounds.max, zoom)._subtract(pixelOrigin)
			);
			var size = bounds.getSize();

			L.DomUtil.setPosition(this._image, bounds.min);
			this._image.style.width = size.x + 'px';
			this._image.style.height = size.y + 'px';
		},

		_projectedToNewLayerPoint: function (point, zoom, center) {
			var viewHalf = this._map.getSize()._divideBy(2);
			var newTopLeft = this._map.project(center, zoom)._subtract(viewHalf)._round();
			var topLeft = newTopLeft.add(this._map._getMapPanePos());

			return this._transform(point, zoom)._subtract(topLeft);
		},

		_transform: function (point, zoom) {
			var crs = this._map.options.crs;
			var transformation = crs.transformation;
			var scale = crs.scale(zoom);

			return transformation.transform(point, scale);
		}
	});

	L.Proj.imageOverlay = function (url, bounds, options) {
		return new L.Proj.ImageOverlay(url, bounds, options);
	};

	return L.Proj;
}));

;