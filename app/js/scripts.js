/*
 AngularJS v1.2.21
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(P,W,s){'use strict';function y(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.21/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function eb(b){if(null==b||Fa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:z(b)||I(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(C(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(I(b)||eb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Zb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Tc(b,
a,c){for(var d=Zb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function $b(b){return function(a,c){b(c,a)}}function fb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function ac(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function F(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});ac(b,a);return b}function Z(b){return parseInt(b,
10)}function bc(b,a){return F(new (F(function(){},{prototype:b})),a)}function D(){}function Ga(b){return b}function $(b){return function(){return b}}function v(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function S(b){return null!=b&&"object"===typeof b}function z(b){return"string"===typeof b}function Ab(b){return"number"===typeof b}function sa(b){return"[object Date]"===ya.call(b)}function C(b){return"function"===typeof b}function gb(b){return"[object RegExp]"===ya.call(b)}
function Fa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Uc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vc(b,a,c){var d=[];q(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Pa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Qa(b,a){var c=Pa(b,a);0<=c&&b.splice(c,1);return a}function Ha(b,a,c,d){if(Fa(b)||b&&b.$evalAsync&&b.$watch)throw Ra("cpws");if(a){if(b===a)throw Ra("cpi");c=c||[];
d=d||[];if(S(b)){var e=Pa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(I(b))for(var f=a.length=0;f<b.length;f++)e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;q(a,function(b,c){delete a[c]});for(f in b)e=Ha(b[f],null,c,d),S(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;ac(a,g)}}else if(a=b)I(b)?a=Ha(b,[],c,d):sa(b)?a=new Date(b.getTime()):gb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):S(b)&&(a=Ha(b,{},c,d));return a}function ga(b,
a){if(I(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(S(b))for(c in a=a||{},b)!hb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function za(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(I(b)){if(!I(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!za(b[d],a[d]))return!1;return!0}}else{if(sa(b))return sa(a)&&b.getTime()==a.getTime();if(gb(b)&&gb(a))return b.toString()==a.toString();
if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Fa(b)||Fa(a)||I(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!C(b[d])){if(!za(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!C(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?Aa.call(arguments,2):[];return!C(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(Aa.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?
a.apply(b,arguments):a.call(b)}}function Wc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Fa(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function ta(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Wc,a?"  ":null)}function cc(b){return z(b)?JSON.parse(b):b}function Sa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=x(b).clone();try{b.empty()}catch(a){}var c=
x("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function dc(b){try{return decodeURIComponent(b)}catch(a){}}function ec(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=dc(c[0]),B(d)&&(b=B(c[1])?dc(c[1]):!0,hb.call(a,d)?I(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=[];q(b,function(b,d){I(b)?q(b,function(b){a.push(Ba(d,
!0)+(!0===b?"":"="+Ba(b,!0)))}):a.push(Ba(d,!0)+(!0===b?"":"="+Ba(b,!0)))});return a.length?a.join("&"):""}function ib(b){return Ba(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ba(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Xc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app","data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
q(g,function(a){g[a]=!0;c(W.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function fc(b,a){var c=function(){b=x(b);if(b.injector()){var c=b[0]===W?"document":ha(b);throw Ra("btstrpd",c);}a=a||[];a.unshift(["$provide",
function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=gc(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(P&&!d.test(P.name))return c();P.name=P.name.replace(d,"");Ta.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function jb(b,a){a=a||"_";return b.replace(Yc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Ra("areq",
a||"?",c||"required");return b}function Ua(b,a,c){c&&I(b)&&(b=b[b.length-1]);Db(C(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ca(b,a){if("hasOwnProperty"===b)throw Ra("badname",a);}function hc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&C(b)?Bb(e,b):b}function Eb(b){var a=b[0];b=b[b.length-1];if(a===b)return x(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==
b);return x(c)}function Zc(b){var a=y("$injector"),c=y("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||y;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return p}}if(!f)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),p={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return p}())}}())}function $c(b){F(b,{bootstrap:fc,copy:Ha,extend:F,equals:za,element:x,forEach:q,injector:gc,noop:D,bind:Bb,
toJson:ta,fromJson:cc,identity:Ga,isUndefined:v,isDefined:B,isString:z,isFunction:C,isObject:S,isNumber:Ab,isElement:Uc,isArray:I,version:ad,isDate:sa,lowercase:K,uppercase:Ia,callbacks:{counter:0},$$minErr:y,$$csp:Va});Wa=Zc(P);try{Wa("ngLocale")}catch(a){Wa("ngLocale",[]).provider("$locale",bd)}Wa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:cd});a.provider("$compile",ic).directive({a:dd,input:jc,textarea:jc,form:ed,script:fd,select:gd,style:hd,option:id,ngBind:jd,ngBindHtml:kd,
ngBindTemplate:ld,ngClass:md,ngClassEven:nd,ngClassOdd:od,ngCloak:pd,ngController:qd,ngForm:rd,ngHide:sd,ngIf:td,ngInclude:ud,ngInit:vd,ngNonBindable:wd,ngPluralize:xd,ngRepeat:yd,ngShow:zd,ngStyle:Ad,ngSwitch:Bd,ngSwitchWhen:Cd,ngSwitchDefault:Dd,ngOptions:Ed,ngTransclude:Fd,ngModel:Gd,ngList:Hd,ngChange:Id,required:kc,ngRequired:kc,ngValue:Jd}).directive({ngInclude:Kd}).directive(Fb).directive(lc);a.provider({$anchorScroll:Ld,$animate:Md,$browser:Nd,$cacheFactory:Od,$controller:Pd,$document:Qd,
$exceptionHandler:Rd,$filter:mc,$interpolate:Sd,$interval:Td,$http:Ud,$httpBackend:Vd,$location:Wd,$log:Xd,$parse:Yd,$rootScope:Zd,$q:$d,$sce:ae,$sceDelegate:be,$sniffer:ce,$templateCache:de,$timeout:ee,$window:fe,$$rAF:ge,$$asyncCallback:he})}])}function Xa(b){return b.replace(ie,function(a,b,d,e){return e?d.toUpperCase():d}).replace(je,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,h,l,p,n,r,t;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,p=h.length;l<p;l++)for(n=
x(h[l]),m?n.triggerHandler("$destroy"):m=!m,r=0,n=(t=n.children()).length;r<n;r++)e.push(Da(t[r]));return f.apply(this,arguments)}var f=Da.fn[b],f=f.$original||f;e.$original=f;Da.fn[b]=e}function R(b){if(b instanceof R)return b;z(b)&&(b=aa(b));if(!(this instanceof R)){if(z(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new R(b)}if(z(b)){var a=b;b=W;var c;if(c=ke.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));
e=(le.exec(a)||["",""])[1].toLowerCase();e=ba[e]||ba._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(me,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);x(W.createDocumentFragment()).append(this)}else Jb(this,b)}function Kb(b){return b.cloneNode(!0)}function Ja(b){Lb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Ja(b[a])}function nc(b,a,c,d){if(B(d))throw Hb("offargs");var e=la(b,"events");la(b,"handle")&&(v(a)?q(e,function(a,c){Ya(b,c,a);delete e[c]}):q(a.split(" "),function(a){v(c)?(Ya(b,a,e[a]),delete e[a]):Qa(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=Za[c];d&&(a?delete Za[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),nc(b)),delete Za[c],b.ng339=s))}function la(b,a,c){var d=b.ng339,d=Za[d||-1];if(B(c))d||(b.ng339=d=++ne,d=Za[d]={}),d[a]=c;else return d&&d[a]}
function Mb(b,a,c){var d=la(b,"data"),e=B(c),f=!e&&B(a),g=f&&!S(a);d||g||la(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];F(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function kb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}function lb(b,a){if(a&&b.setAttribute){var c=
(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Jb(b,a){if(a){a=a.nodeName||!B(a.length)||Fa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return mb(b,"$"+(a||"ngController")+"Controller")}function mb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=I(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=x.data(b,a[d]))!==s)return c;b=b.parentNode||11===
b.nodeType&&b.host}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ja(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=nb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function oe(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||W);if(v(c.defaultPrevented)){var f=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=
!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ga(a[e||c.type]||[]);q(g,function(a){a.call(b,c)});8>=Q?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ka(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=b.$$hashKey)?d=b.$$hashKey():d===s&&(d=b.$$hashKey=(a||fb)()):
d=b;return c+":"+d}function $a(b,a){if(a){var c=0;this.nextUid=function(){return++c}}q(b,this.put,this)}function sc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(pe,""),c=c.match(qe),q(c[1].split(re),function(b){b.replace(se,function(b,c,d){a.push(d)})})),b.$inject=a):I(b)?(c=b.length-1,Ua(b[c],"fn"),a=b.slice(0,c)):Ua(b,"fn",!0);return a}function gc(b){function a(a){return function(b,c){if(S(b))q(b,$b(a));else return a(b,c)}}function c(a,b){Ca(a,"service");
if(C(b)||I(b))b=p.instantiate(b);if(!b.$get)throw ab("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,k;q(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(z(a))for(c=Wa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,k=d.length;f<k;f++){var g=d[f],m=p.get(g[0]);m[g[1]].apply(m,g[2])}else C(a)?b.push(p.invoke(a)):I(a)?b.push(p.invoke(a)):Ua(a,"module")}catch(l){throw I(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),ab("modulerr",a,l.stack||l.message||l);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw ab("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var f=[],k=sc(a),g,m,h;m=0;for(g=k.length;m<g;m++){h=k[m];if("string"!==typeof h)throw ab("itkn",h);f.push(e&&e.hasOwnProperty(h)?e[h]:c(h))}I(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(I(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return S(e)||C(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var g={},k="Provider",m=[],h=new $a([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){Ca(a,"constant");l[a]=b;n[a]=b}),decorator:function(a,
b){var c=p.get(a+k),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},p=l.$injector=f(l,function(){throw ab("unpr",m.join(" <- "));}),n={},r=n.$injector=f(n,function(a){a=p.get(a+k);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||D)});return r}function Ld(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}
function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function he(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function te(b,a,c,d){function e(a){try{a.apply(null,Aa.call(arguments,1))}finally{if(t--,0===t)for(;L.length;)try{L.pop()()}catch(b){c.error(b)}}}
function f(a,b){(function ca(){q(w,function(a){a()});u=b(ca,a)})()}function g(){A=null;M!=k.url()&&(M=k.url(),q(da,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,p=b.setTimeout,n=b.clearTimeout,r={};k.isMock=!1;var t=0,L=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){t++};k.notifyWhenNoOutstandingRequests=function(a){q(w,function(a){a()});0===t?a():L.push(a)};var w=[],u;k.addPollFn=function(a){v(u)&&f(100,p);w.push(a);return a};var M=h.href,X=a.find("base"),
A=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(M!=a)return M=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),X.attr("href",X.attr("href"))):(A=a,c?h.replace(a):h.href=a),k}else return A||h.href.replace(/%27/g,"'")};var da=[],J=!1;k.onUrlChange=function(a){if(!J){if(d.history)x(b).on("popstate",g);if(d.hashchange)x(b).on("hashchange",g);else k.addPollFn(g);J=!0}da.push(a);return a};k.baseHref=function(){var a=X.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var T={},ea="",O=k.baseHref();k.cookies=function(a,b){var d,e,f,k;if(a)b===s?m.cookie=escape(a)+"=;path="+O+";expires=Thu, 01 Jan 1970 00:00:00 GMT":z(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+O).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ea)for(ea=m.cookie,d=ea.split("; "),T={},f=0;f<d.length;f++)e=d[f],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,
k)),T[a]===s&&(T[a]=unescape(e.substring(k+1))));return T}};k.defer=function(a,b){var c;t++;c=p(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],n(a),e(D),!0):!1}}function Nd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new te(b,d,a,c)}]}function Od(){this.$get=function(){function b(b,d){function e(a){a!=p&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw y("$cacheFactory")("iid",b);var g=0,k=F({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},p=null,n=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!v(b))return a in m||g++,m[a]=b,g>h&&this.remove(n.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;b==p&&(p=b.p);b==n&&(n=b.n);f(b.n,b.p);delete l[a]}delete m[a];g--},removeAll:function(){m=
{};g=0;l={};p=n=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return F({},k,{size:g})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function de(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function ic(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,g=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Ca(a,"directive");z(a)?
(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,f){try{var g=b.invoke(c);C(g)?g={compile:$(g)}:!g.compile&&g.link&&(g.compile=$(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,$b(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,p,n,r,t,L,w,u,M,X){function A(a,b,c,d,e){a instanceof x||(a=x(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=x(b).wrap("<span></span>").parent()[0])});
var f=J(a,b,a,c,d,e);da(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?La.clone.call(a):a;q(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var m=g.length;d<m;d++){var h=g[d].nodeType;1!==h&&9!==h||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function da(a,b){try{a.addClass(b)}catch(c){}}function J(a,b,c,d,e,f){function g(a,c,d,e){var f,h,l,r,p,n,t;f=c.length;var w=Array(f);for(r=0;r<f;r++)w[r]=c[r];n=r=0;for(p=m.length;r<p;n++)h=w[n],c=m[r++],f=m[r++],c?(c.scope?
(l=a.$new(),x.data(h,"$scope",l)):l=a,t=c.transcludeOnThisElement?T(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?T(a,b):null,c(f,l,h,d,t)):f&&f(a,h.childNodes,s,e)}for(var m=[],h,l,r,p,n=0;n<a.length;n++)h=new Ob,l=ea(a[n],[],h,0===n?d:s,e),(f=l.length?H(l,a[n],h,b,c,null,[],[],f):null)&&f.scope&&da(h.$$element,"ng-scope"),h=f&&f.terminal||!(r=a[n].childNodes)||!r.length?null:J(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),m.push(f,h),p=p||f||h,f=null;return p?
g:null}function T(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ea(a,b,c,d,g){var h=c.$attr,m;switch(a.nodeType){case 1:ca(b,ma(Ma(a).toLowerCase()),"E",d,g);for(var l,r,p,n=a.attributes,t=0,w=n&&n.length;t<w;t++){var L=!1,M=!1;l=n[t];if(!Q||8<=Q||l.specified){m=l.name;r=aa(l.value);l=ma(m);if(p=V.test(l))m=jb(l.substr(6),"-");var u=l.replace(/(Start|End)$/,"");l===u+"Start"&&(L=m,M=m.substr(0,
m.length-5)+"end",m=m.substr(0,m.length-6));l=ma(m.toLowerCase());h[l]=m;if(p||!c.hasOwnProperty(l))c[l]=r,qc(a,l)&&(c[l]=!0);P(a,b,r,l);ca(b,l,"A",d,g,L,M)}}a=a.className;if(z(a)&&""!==a)for(;m=f.exec(a);)l=ma(m[2]),ca(b,l,"C",d,g)&&(c[l]=aa(m[3])),a=a.substr(m.index+m[0].length);break;case 3:y(b,a.nodeValue);break;case 8:try{if(m=e.exec(a.nodeValue))l=ma(m[1]),ca(b,l,"M",d,g)&&(c[l]=aa(m[2]))}catch(A){}}b.sort(v);return b}function O(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function E(a,b,c){return function(d,e,f,g,m){e=O(e[0],b,c);return a(d,e,f,g,m)}}function H(a,c,d,e,f,g,m,p,n){function w(a,b,c,d){if(a){c&&(a=E(a,c,d));a.require=G.require;a.directiveName=na;if(J===G||G.$$isolateScope)a=tc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=E(b,c,d));b.require=G.require;b.directiveName=na;if(J===G||G.$$isolateScope)b=tc(b,{isolateScope:!0});p.push(b)}}
function L(a,b,c,d){var e,f="data",g=!1;if(z(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ia("ctreq",b,a);}else I(b)&&(e=[],q(b,function(b){e.push(L(a,b,c,d))}));return e}function M(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&(b=a,a=s);Ea&&(c=ea);return n(a,b,c)}var u,N,A,E,T,O,ea={},pb;u=c===f?d:ga(d,new Ob(x(f),d.$attr));N=u.$$element;if(J){var ca=/^\s*([@=&])(\??)\s*(\w*)\s*$/;
O=e.$new(!0);!H||H!==J&&H!==J.$$originalDirective?N.data("$isolateScopeNoTemplate",O):N.data("$isolateScope",O);da(N,"ng-isolate-scope");q(J.scope,function(a,c){var d=a.match(ca)||[],f=d[3]||c,g="?"==d[2],d=d[1],m,l,p,n;O.$$isolateBindings[c]=d+f;switch(d){case "@":u.$observe(f,function(a){O[c]=a});u.$$observers[f].$$scope=e;u[f]&&(O[c]=b(u[f])(e));break;case "=":if(g&&!u[f])break;l=r(u[f]);n=l.literal?za:function(a,b){return a===b};p=l.assign||function(){m=O[c]=l(e);throw ia("nonassign",u[f],J.name);
};m=O[c]=l(e);O.$watch(function(){var a=l(e);n(a,O[c])||(n(a,m)?p(e,a=O[c]):O[c]=a);return m=a},null,l.literal);break;case "&":l=r(u[f]);O[c]=function(a){return l(e,a)};break;default:throw ia("iscp",J.name,c,a);}})}pb=n&&w;X&&q(X,function(a){var b={$scope:a===J||a.$$isolateScope?O:e,$element:N,$attrs:u,$transclude:pb},c;T=a.controller;"@"==T&&(T=u[a.name]);c=t(T,b);ea[a.name]=c;Ea||N.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(A=m.length;g<A;g++)try{E=m[g],
E(E.isolateScope?O:e,N,u,E.require&&L(E.directiveName,E.require,N,ea),pb)}catch(ob){l(ob,ha(N))}g=e;J&&(J.template||null===J.templateUrl)&&(g=O);a&&a(g,f.childNodes,s,n);for(g=p.length-1;0<=g;g--)try{E=p[g],E(E.isolateScope?O:e,N,u,E.require&&L(E.directiveName,E.require,N,ea),pb)}catch(G){l(G,ha(N))}}n=n||{};for(var u=-Number.MAX_VALUE,T,X=n.controllerDirectives,J=n.newIsolateScopeDirective,H=n.templateDirective,ca=n.nonTlbTranscludeDirective,v=!1,F=!1,Ea=n.hasElementTranscludeDirective,y=d.$$element=
x(c),G,na,U,R=e,Q,P=0,oa=a.length;P<oa;P++){G=a[P];var V=G.$$start,Y=G.$$end;V&&(y=O(c,V,Y));U=s;if(u>G.priority)break;if(U=G.scope)T=T||G,G.templateUrl||(K("new/isolated scope",J,G,y),S(U)&&(J=G));na=G.name;!G.templateUrl&&G.controller&&(U=G.controller,X=X||{},K("'"+na+"' controller",X[na],G,y),X[na]=G);if(U=G.transclude)v=!0,G.$$tlb||(K("transclusion",ca,G,y),ca=G),"element"==U?(Ea=!0,u=G.priority,U=y,y=d.$$element=x(W.createComment(" "+na+": "+d[na]+" ")),c=y[0],qb(f,Aa.call(U,0),c),R=A(U,e,u,
g&&g.name,{nonTlbTranscludeDirective:ca})):(U=x(Kb(c)).contents(),y.empty(),R=A(U,e));if(G.template)if(F=!0,K("template",H,G,y),H=G,U=C(G.template)?G.template(y,d):G.template,U=Z(U),G.replace){g=G;U=Ib.test(U)?x(aa(U)):[];c=U[0];if(1!=U.length||1!==c.nodeType)throw ia("tplrt",na,"");qb(f,y,c);oa={$attr:{}};U=ea(c,[],oa);var $=a.splice(P+1,a.length-(P+1));J&&ob(U);a=a.concat(U).concat($);B(d,oa);oa=a.length}else y.html(U);if(G.templateUrl)F=!0,K("template",H,G,y),H=G,G.replace&&(g=G),M=D(a.splice(P,
a.length-P),y,d,f,v&&R,m,p,{controllerDirectives:X,newIsolateScopeDirective:J,templateDirective:H,nonTlbTranscludeDirective:ca}),oa=a.length;else if(G.compile)try{Q=G.compile(y,d,R),C(Q)?w(null,Q,V,Y):Q&&w(Q.pre,Q.post,V,Y)}catch(ba){l(ba,ha(y))}G.terminal&&(M.terminal=!0,u=Math.max(u,G.priority))}M.scope=T&&!0===T.scope;M.transcludeOnThisElement=v;M.templateOnThisElement=F;M.transclude=R;n.hasElementTranscludeDirective=Ea;return M}function ob(a){for(var b=0,c=a.length;b<c;b++)a[b]=bc(a[b],{$$isolateScope:!0})}
function ca(b,e,f,g,h,r,p){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var n;e=a.get(e+d);for(var t=0,w=e.length;t<w;t++)try{n=e[t],(g===s||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(r&&(n=bc(n,{$$start:r,$$end:p})),b.push(n),h=n)}catch(L){l(L)}}return h}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,f){"class"==f?(da(e,b),a["class"]=(a["class"]?a["class"]+" ":
"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function D(a,b,c,d,e,f,g,m){var h=[],l,r,t=b[0],w=a.shift(),L=F({},w,{templateUrl:null,transclude:null,replace:null,$$originalDirective:w}),M=C(w.templateUrl)?w.templateUrl(b,c):w.templateUrl;b.empty();p.get(u.getTrustedResourceUrl(M),{cache:n}).success(function(p){var n,u;p=Z(p);if(w.replace){p=Ib.test(p)?x(aa(p)):[];n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",
w.name,M);p={$attr:{}};qb(d,b,n);var A=ea(n,[],p);S(w.scope)&&ob(A);a=A.concat(a);B(c,p)}else n=t,b.html(p);a.unshift(L);l=H(a,n,c,e,b,w,f,g,m);q(d,function(a,c){a==n&&(d[c]=b[0])});for(r=J(b[0].childNodes,e);h.length;){p=h.shift();u=h.shift();var E=h.shift(),X=h.shift(),A=b[0];if(u!==t){var O=u.className;m.hasElementTranscludeDirective&&w.replace||(A=Kb(n));qb(E,x(u),A);da(x(A),O)}u=l.transcludeOnThisElement?T(p,l.transclude,X):X;l(r,p,A,d,u)}h=null}).error(function(a,b,c,d){throw ia("tpload",d.url);
});return function(a,b,c,d,e){a=e;h?(h.push(b),h.push(c),h.push(d),h.push(a)):(l.transcludeOnThisElement&&(a=T(b,l.transclude,e)),l(r,b,c,d,a))}}function v(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function y(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&da(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||
[];f.push(d);e.data("$binding",f);b||da(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function R(a,b){if("srcdoc"==b)return u.HTML;var c=Ma(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function P(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===Ma(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(g.test(e))throw ia("nodomevents");if(f=
b(m[e],!0,R(a,e)))m[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function qb(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,m;if(a)for(g=0,m=a.length;g<m;g++)if(a[g]==d){a[g++]=c;m=g+e-1;for(var h=a.length;g<h;g++,m++)m<h?a[g]=a[m]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);c[x.expando]=d[x.expando];d=1;for(e=b.length;d<e;d++)f=
b[d],x(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function tc(a,b){return F(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&M.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&M.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=uc(a,b),d=uc(b,a);0===c.length?M.removeClass(this.$$element,d):0===d.length?M.addClass(this.$$element,c):
M.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=jb(a,"-"));e=Ma(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=X(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),
e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Ea=b.startSymbol(),oa=b.endSymbol(),Z="{{"==Ea||"}}"==oa?Ga:function(a){return a.replace(/\{\{/g,Ea).replace(/}}/g,oa)},V=/^ngAttr[A-Z]/;return A}]}function ma(b){return Xa(b.replace(ue,""))}function uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],k=0;k<e.length;k++)if(g==e[k])continue a;c+=(0<c.length?" ":"")+g}return c}function Pd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;
this.register=function(a,d){Ca(a,"controller");S(a)?F(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,k,m;z(e)&&(g=e.match(a),k=g[1],m=g[3],e=b.hasOwnProperty(k)?b[k]:hc(f.$scope,k,!0)||hc(d,k,!0),Ua(e,k,!0));g=c.instantiate(e,f);if(m){if(!f||"object"!==typeof f.$scope)throw y("$controller")("noscp",k||e.name,m);f.$scope[m]=g}return g}}]}function Qd(){this.$get=["$window",function(b){return x(b.document)}]}function Rd(){this.$get=["$log",function(b){return function(a,
c){b.error.apply(b,arguments)}}]}function vc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function wc(b){var a=S(b)?b:s;return function(c){a||(a=vc(b));return c?a[K(c)]||null:a}}function xc(b,a,c){if(C(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Ud(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults=
{transformResponse:[function(d){z(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=cc(d)));return d}],transformRequest:[function(a){return S(a)&&"[object File]"!==ya.call(a)&&"[object Blob]"!==ya.call(a)?ta(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(d),put:ga(d),patch:ga(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",
function(a,b,c,d,p,n){function r(a){function b(a){var d=F({},a,{data:xc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:p.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=F({},a.headers),d,f,b=F({},b.common,b[K(a.method)]);a:for(d in b){a=K(d);for(f in c)if(K(f)===a)continue a;c[d]=b[d]}(function(a){var b;q(a,function(c,d){C(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);
F(c,a);c.headers=d;c.method=Ia(c.method);var f=[function(a){d=a.headers;var c=xc(a.data,wc(d),a.transformRequest);v(c)&&q(d,function(a,b){"content-type"===K(b)&&delete d[b]});v(a.withCredentials)&&!v(e.withCredentials)&&(a.withCredentials=e.withCredentials);return t(a,c,d).then(b,b)},s],g=p.when(c);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var m=f.shift(),g=g.then(a,
m)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function t(c,f,g){function h(a,b,c,e){E&&(200<=a&&300>a?E.put(x,[a,b,vc(c),e]):E.remove(x));n(b,a,c,e);d.$$phase||d.$apply()}function n(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?u.resolve:u.reject)({data:a,status:b,headers:wc(d),config:c,statusText:e})}function t(){var a=Pa(r.pendingRequests,c);-1!==a&&r.pendingRequests.splice(a,
1)}var u=p.defer(),q=u.promise,E,H,x=L(c.url,c.params);r.pendingRequests.push(c);q.then(t,t);(c.cache||e.cache)&&(!1!==c.cache&&"GET"==c.method)&&(E=S(c.cache)?c.cache:S(e.cache)?e.cache:w);if(E)if(H=E.get(x),B(H)){if(H&&C(H.then))return H.then(t,t),H;I(H)?n(H[1],H[0],ga(H[2]),H[3]):n(H,200,{},"OK")}else E.put(x,q);v(H)&&((H=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,x,f,h,g,c.timeout,c.withCredentials,c.responseType));return q}
function L(a,b){if(!b)return a;var c=[];Tc(b,function(a,b){null===a||v(a)||(I(a)||(a=[a]),q(a,function(a){S(a)&&(sa(a)?a=a.toISOString():S(a)&&(a=ta(a)));c.push(Ba(b)+"="+Ba(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),u=[];q(f,function(a){u.unshift(z(a)?n.get(a):n.invoke(a))});q(g,function(a,b){var c=z(a)?n.get(a):n.invoke(a);u.splice(b,0,{response:function(a){return c(p.when(a))},responseError:function(a){return c(p.reject(a))}})});r.pendingRequests=
[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(F(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(F(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ve(b){if(8>=Q&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!P.XMLHttpRequest))return new P.ActiveXObject("Microsoft.XMLHTTP");if(P.XMLHttpRequest)return new P.XMLHttpRequest;throw y("$httpBackend")("noxhr");}function Vd(){this.$get=
["$browser","$window","$document",function(b,a,c){return we(b,ve,b.defer,a.angular.callbacks,c[0])}]}function we(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){Ya(f,"load",g);Ya(f,"error",g);e.body.removeChild(f);f=null;var k=-1,t="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,k="error"===a.type?404:200);c&&c(k,t)};rb(f,"load",g);rb(f,"error",g);8>=Q&&(f.onreadystatechange=function(){z(f.readyState)&&
/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,m,h,l,p,n,r,t){function L(){u=g;X&&X();A&&A.abort()}function w(a,d,e,f,g){J&&c.cancel(J);X=A=null;0===d&&(d=e?200:"file"==ua(m).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(D)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==K(e)){var M="_"+(d.counter++).toString(36);d[M]=function(a){d[M].data=a;d[M].called=!0};
var X=f(m.replace("JSON_CALLBACK","angular.callbacks."+M),M,function(a,b){w(l,a,d[M].data,"",b);d[M]=D})}else{var A=a(e);A.open(e,m,!0);q(p,function(a,b){B(a)&&A.setRequestHeader(b,a)});A.onreadystatechange=function(){if(A&&4==A.readyState){var a=null,b=null,c="";u!==g&&(a=A.getAllResponseHeaders(),b="response"in A?A.response:A.responseText);u===g&&10>Q||(c=A.statusText);w(l,u||A.status,b,a,c)}};r&&(A.withCredentials=!0);if(t)try{A.responseType=t}catch(da){if("json"!==t)throw da;}A.send(h||null)}if(0<
n)var J=c(L,n);else n&&C(n.then)&&n.then(L)}}function Sd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,h,l){for(var p,n,r=0,t=[],L=f.length,w=!1,u=[];r<L;)-1!=(p=f.indexOf(b,r))&&-1!=(n=f.indexOf(a,p+g))?(r!=p&&t.push(f.substring(r,p)),t.push(r=c(w=f.substring(p+g,n))),r.exp=w,r=n+k,w=!0):(r!=L&&t.push(f.substring(r)),r=L);(L=t.length)||(t.push(""),
L=1);if(l&&1<t.length)throw yc("noconcat",f);if(!h||w)return u.length=L,r=function(a){try{for(var b=0,c=L,g;b<c;b++){if("function"==typeof(g=t[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=ta(g)}u[b]=g}return u.join("")}catch(k){a=yc("interr",f,k.toString()),d(a)}},r.exp=f,r.parts=t,r}var g=b.length,k=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Td(){this.$get=
["$rootScope","$window","$q",function(b,a,c){function d(d,g,k,m){var h=a.setInterval,l=a.clearInterval,p=c.defer(),n=p.promise,r=0,t=B(m)&&!m;k=B(k)?k:0;n.then(null,null,d);n.$$intervalId=h(function(){p.notify(r++);0<k&&r>=k&&(p.resolve(r),l(n.$$intervalId),delete e[n.$$intervalId]);t||b.$apply()},g);e[n.$$intervalId]=p;return n}var e={};d.cancel=function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}
function bd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ib(b[a]);return b.join("/")}function zc(b,a,c){b=ua(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Z(b.port)||xe[b.protocol]||null}function Ac(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ua(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=ec(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function pa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function bb(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,
bb(b).lastIndexOf("/")+1)}function Bc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);zc(b,this,b);this.$$parse=function(a){var e=pa(c,a);if(!z(e))throw Sb("ipthprfx",a,c);Ac(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=pa(b,d))!==s)return d=e,(e=pa(a,e))!==s?c+(pa("/",e)||e):b+d;if((e=pa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Tb(b,a){var c=Rb(b);zc(b,this,b);this.$$parse=function(d){var e=pa(b,d)||pa(c,d),e="#"==e.charAt(0)?pa(a,e):this.$$html5?e:"";if(!z(e))throw Sb("ihshprfx",d,a);Ac(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(bb(b)==bb(a))return a}}function Ub(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$rewrite=function(d){var e;if(b==bb(d))return d;if(e=pa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+ib(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function sb(b){return function(){return this[b]}}function Cc(b,a){return function(c){if(v(c))return this[b];
this[b]=a(c);this.$$compose();return this}}function Wd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),p;a?(p=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Bc:Ub):(p=bb(l),m=Tb);k=new m(p,"#"+b);k.$$parse(k.$$rewrite(l));f.on("click",
function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=x(a.target);"a"!==K(e[0].nodeName);)if(e[0]===f[0]||!(e=e.parent())[0])return;var g=e.prop("href");S(g)&&"[object SVGAnimatedString]"===g.toString()&&(g=ua(g.animVal).href);if(m===Ub){var h=e.attr("href")||e.attr("xlink:href");if(0>h.indexOf("://"))if(g="#"+b,"/"==h[0])g=p+g+h;else if("#"==h[0])g=p+g+(k.path()||"/")+h;else{for(var l=k.path().split("/"),h=h.split("/"),n=0;n<h.length;n++)"."!=h[n]&&(".."==h[n]?l.pop():h[n].length&&l.push(h[n]));
g=p+g+l.join("/")}}l=k.$$rewrite(g);g&&(!e.attr("target")&&l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),P.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(k.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=k.$$replace;n&&a==k.absUrl()||
(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),g(a))}));k.$$replace=!1;return n});return k}]}function Xd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=
c.console||{},e=b[a]||b.log||D;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function qa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ja("isecfld",a);return b}function Na(b,
a){if(b){if(b.constructor===b)throw ja("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ja("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ja("isecdom",a);if(b===Object)throw ja("isecobj",a);}return b}function tb(b,a,c,d,e){e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=qa(a.shift(),d);var k=b[f];k||(k={},b[f]=k);b=k;b.then&&e.unwrapPromises&&(va(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}f=qa(a.shift(),
d);Na(b,d);Na(b[f],d);return b[f]=c}function Dc(b,a,c,d,e,f,g){qa(b,f);qa(a,f);qa(c,f);qa(d,f);qa(e,f);return g.unwrapPromises?function(g,m){var h=m&&m.hasOwnProperty(b)?m:g,l;if(null==h)return h;(h=h[b])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return s;(h=h[a])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return s;(h=h[c])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=
a})),h=h.$$v);if(!d)return h;if(null==h)return s;(h=h[d])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return s;(h=h[e])&&h.then&&(va(f),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return s;h=h[a];if(!c)return h;if(null==h)return s;h=h[c];if(!d)return h;if(null==h)return s;h=h[d];return e?null==h?s:h=h[e]:h}}function Ec(b,
a,c){if(Vb.hasOwnProperty(b))return Vb[b];var d=b.split("."),e=d.length,f;if(a.csp)f=6>e?Dc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,f){var g=0,k;do k=Dc(d[g++],d[g++],d[g++],d[g++],d[g++],c,a)(b,f),f=s,b=k;while(g<e);return k};else{var g="var p;\n";q(d,function(b,d){qa(b,c);g+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':
"")});var g=g+"return s;",k=new Function("s","k","pw",g);k.toString=$(g);f=a.unwrapPromises?function(a,b){return k(a,b,va)}:k}"hasOwnProperty"!==b&&(Vb[b]=f);return f}function Yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;va=
function(b){a.logPromiseWarnings&&!Fc.hasOwnProperty(b)&&(Fc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Wb(a);e=(new cb(e,c,a)).parse(d);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return D}}}]}function $d(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ye(function(a){b.$evalAsync(a)},
a)}]}function ye(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],h,l;return l={resolve:function(a){if(g){var c=g;g=s;h=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,f,k){var l=e(),L=function(d){try{l.resolve((C(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},
w=function(b){try{l.resolve((C(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},u=function(b){try{l.notify((C(k)?k:c)(b))}catch(d){a(d)}};g?g.push([L,w,u]):h.then(L,w,u);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(k){return b(k,!1)}return g&&C(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,
!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&C(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(f,g){var k=e();b(function(){try{k.resolve((C(g)?g:d)(c))}catch(b){k.reject(b),a(b)}});return k.promise}}};return{defer:e,reject:g,when:function(k,h,l,p){var n=e(),r,t=function(b){try{return(C(h)?h:c)(b)}catch(d){return a(d),g(d)}},L=function(b){try{return(C(l)?
l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(C(p)?p:c)(b)}catch(d){a(d)}};b(function(){f(k).then(function(a){r||(r=!0,n.resolve(f(a).then(t,L,w)))},function(a){r||(r=!0,n.resolve(L(a)))},function(a){r||n.notify(w(a))})});return n.promise},all:function(a){var b=e(),c=0,d=I(a)?[]:{};q(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function ge(){this.$get=
["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Zd(){var b=10,a=y("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function k(){this.$id=fb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function h(a,b){var c=f(a);Ua(c,b);return c}function l(a,
b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function p(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=fb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=
this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),f=this.$$watchers,g={fn:b,last:p,get:e,exp:a,eq:!!d};c=null;if(!C(b)){var k=h(b||D,"listener");g.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var m=g.fn;g.fn=function(a,b,c){m.call(this,a,b,c);Qa(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);
return function(){Qa(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,k=1<b.length,h=0,m=f(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b,f;if(S(d))if(eb(d))for(e!==l&&(e=l,q=e.length=0,h++),a=d.length,q!==a&&(h++,e.length=q=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(h++,e[b]=d[b])):(q++,e[b]=d[b],h++));
if(q>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){p?(p=!1,b(d,d,c)):b(d,g,c);if(k)if(S(d))if(eb(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)hb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,g,k,h=this.$$asyncQueue,l=this.$$postDigestQueue,q,A,s=b,J,T=[],x,O,E;m("$digest");c=null;do{A=!1;for(J=this;h.length;){try{E=h.shift(),E.scope.$eval(E.expression)}catch(H){n.$$phase=null,
e(H)}c=null}a:do{if(k=J.$$watchers)for(q=k.length;q--;)try{if(d=k[q])if((f=d.get(J))!==(g=d.last)&&!(d.eq?za(f,g):"number"===typeof f&&"number"===typeof g&&isNaN(f)&&isNaN(g)))A=!0,c=d,d.last=d.eq?Ha(f,null):f,d.fn(f,g===p?f:g,J),5>s&&(x=4-s,T[x]||(T[x]=[]),O=C(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,O+="; newVal: "+ta(f)+"; oldVal: "+ta(g),T[x].push(O));else if(d===c){A=!1;break a}}catch(B){n.$$phase=null,e(B)}if(!(k=J.$$childHead||J!==this&&J.$$nextSibling))for(;J!==this&&!(k=J.$$nextSibling);)J=
J.$parent}while(J=k);if((A||h.length)&&!s--)throw n.$$phase=null,a("infdig",b,ta(T));}while(A||h.length);for(n.$$phase=null;l.length;)try{l.shift()()}catch(y){e(y)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(q(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=D,this.$on=this.$watch=function(){return D})}},$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||g.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,
expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Pa(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,k={name:a,
targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(Aa.call(arguments,1)),m,l;do{d=f.$$listeners[a]||c;k.currentScope=f;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,h)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(g)break;f=f.$parent}while(f);return k},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(Aa.call(arguments,
1)),k,h;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,g)}catch(m){e(m)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var n=new k;return n}]}function cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=
function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!Q||8<=Q)if(f=ua(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function ze(b){if("self"===b)return b;if(z(b)){if(-1<b.indexOf("***"))throw wa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(gb(b))return RegExp("^"+b.source+"$");throw wa("imatcher");}function Gc(b){var a=[];
B(b)&&q(b,function(b){a.push(ze(b))});return a}function be(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
return b}var e=function(a){throw wa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof
f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=ua(d.toString()),l,p,n=!1;l=0;for(p=b.length;l<p;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){n=!0;break}if(n)for(l=0,p=a.length;l<p;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){n=!1;break}if(n)return d;throw wa("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw wa("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function ae(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};
this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw wa("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,k=e.trustAs;q(fa,function(a,b){var c=K(b);e[Xa("parse_as_"+c)]=
function(b){return f(a,b)};e[Xa("get_trusted_"+c)]=function(b){return g(a,b)};e[Xa("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function ce(){this.$get=["$window","$document",function(b,a){var c={},d=Z((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g=f.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=f.body&&f.body.style,l=!1,p=!1;if(h){for(var n in h)if(l=m.exec(n)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);
break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);p=!!("animation"in h||k+"Animation"in h);!d||l&&p||(l=z(f.body.style.webkitTransition),p=z(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<g),hasEvent:function(a){if("input"==a&&9==Q)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Va(),vendorPrefix:k,transitions:l,animations:p,android:d,msie:Q,msieDocumentMode:g}}]}
function ee(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,p=B(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete f[l.$$timeoutId]}p||b.$apply()},k);l.$$timeoutId=k;f[k]=h;return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ua(b,a){var c=b;Q&&(V.setAttribute("href",
c),c=V.href);V.setAttribute("href",c);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function Pb(b){b=z(b)?ua(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}function fe(){this.$get=$(P)}function mc(b){function a(d,e){if(S(d)){var f={};q(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+
c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Ae);a("json",Be);a("limitTo",Ce);a("lowercase",De);a("number",Kc);a("orderBy",Lc);a("uppercase",Ee)}function Ae(){return function(b,a,c){if(!I(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ta.equals(a,b)}:function(a,b){if(a&&b&&
"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&hb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<
a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var k=b[g];e.check(k)&&d.push(k)}return d}}function Ic(b){var a=b.NUMBER_FORMATS;return function(b,d){v(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,
a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||S(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",k="",m=[],h=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?(g="0",b=0):(k=g,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{g=(g.split(Nc)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));
b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);b=(""+b).split(Nc);g=b[0];b=b[1]||"";var l=0,p=a.lgSize,n=a.gSize;if(g.length>=p+n)for(l=g.length-p,h=0;h<l;h++)0===(l-h)%n&&0!==h&&(k+=c),k+=g.charAt(h);for(h=l;h<g.length;h++)0===(g.length-h)%p&&0!==h&&(k+=c),k+=g.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}m.push(f?a.negPre:a.posPre);m.push(k);m.push(f?a.negSuf:a.posSuf);return m.join("")}function Xb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;
c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Xb(e,a,d)}}function ub(b,a){return function(c,d){var e=c["get"+b](),f=Ia(a?"SHORT"+b:b);return d[f][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-
g;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,f,g,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;z(c)&&(c=Fe.test(c)?Z(c):a(c));Ab(c)&&(c=new Date(c));if(!sa(c))return c;for(;e;)(m=Ge.exec(e))?(g=g.concat(Aa.call(m,1)),e=g.pop()):(g.push(e),e=null);q(g,function(a){k=He[a];f+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,
"").replace(/''/g,"'")});return f}}function Be(){return function(b){return ta(b,!0)}}function Ce(){return function(b,a){if(!I(b)&&!z(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(z(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Sa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=
typeof a,d=typeof b;return c==d?(sa(a)&&sa(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!I(a)||!c)return a;c=I(c)?c:[c];c=Vc(c,function(a){var c=!1,d=a||Ga;if(z(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var g=d();return e(function(a,b){return f(a[g],b[g])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});for(var g=[],k=0;k<a.length;k++)g.push(a[k]);return g.sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function xa(b){C(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+jb(c,"-"):"";d.removeClass(b,(a?vb:wb)+c);d.addClass(b,(a?wb:vb)+c)}var f=this,g=b.parent().controller("form")||xb,k=0,m=f.$error={},h=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Oa);e(!0);f.$addControl=function(a){Ca(a.$name,"input");h.push(a);
a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(m,function(b,c){f.$setValidity(c,!0,a)});Qa(h,a)};f.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Qa(d,c),d.length||(k--,k||(e(b),f.$valid=!0,f.$invalid=!1),m[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{k||e(b);if(d){if(-1!=Pa(d,c))return}else m[a]=d=[],k++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Oa);d.addClass(b,yb);f.$dirty=!0;
f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,yb);d.addClass(b,Oa);f.$dirty=!1;f.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ra(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Pc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ie(b,a,c,d,e){S(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Pc(e,d)||!Pc(e,c))return f;b.$setValidity(a,!1)}))}function zb(b,a,c,d,e,f){var g=a.prop(Je),k=a[0].placeholder,
m={};d.$$validityState=g;if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(e){if(!h){var f=a.val();if(Q&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if(Sa(c.ngTrim||"T")&&(f=aa(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",l);else{var p,n=function(){p||(p=f.defer(function(){l();
p=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||n()});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return ra(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw y("ngPattern")("noregexp",r,e,ha(a));return ra(d,"pattern",d.$isEmpty(c)||e.test(c),
c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var t=Z(c.ngMinlength);e=function(a){return ra(d,"minlength",d.$isEmpty(a)||a.length>=t,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var q=Z(c.ngMaxlength);e=function(a){return ra(d,"maxlength",d.$isEmpty(a)||a.length<=q,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Yb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==
b[l])continue a;c.push(e)}return c}function e(a){if(!I(a)){if(z(a))return a.split(" ");if(S(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,k){function m(a,b){var c=g.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||f.$index%2===a){var h=e(b||[]);if(!l){var r=m(h,1);k.$addClass(r)}else if(!za(b,l)){var q=
e(l),r=d(h,q),h=d(q,h),h=m(h,-1),r=m(r,1);0===r.length?c.removeClass(g,h):0===h.length?c.addClass(g,r):c.setClass(g,r,h)}}l=ga(b)}var l;f.$watch(k[b],h,!0);k.$observe("class",function(a){h(f.$eval(k[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var h=e(f.$eval(k[b]));g===a?(g=m(h,1),k.$addClass(g)):(g=m(h,-1),k.$removeClass(g))}})}}}]}var Je="validity",K=function(b){return z(b)?b.toLowerCase():b},hb=Object.prototype.hasOwnProperty,Ia=function(b){return z(b)?b.toUpperCase():
b},Q,x,Da,Aa=[].slice,Ke=[].push,ya=Object.prototype.toString,Ra=y("ng"),Ta=P.angular||(P.angular={}),Wa,Ma,ka=["0","0","0"];Q=Z((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(Q)&&(Q=Z((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||[])[1]));D.$inject=[];Ga.$inject=[];var I=function(){return C(Array.isArray)?Array.isArray:function(b){return"[object Array]"===ya.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return z(b)?b.trim():b}:function(b){return z(b)?b.replace(/^\s\s*/,
"").replace(/\s\s*$/,""):b}}();Ma=9>Q?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Va=function(){if(B(Va.isActive_))return Va.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Va.isActive_=b},Yc=/[A-Z]/g,ad={full:"1.2.21",major:1,minor:2,dot:21,codeName:"wizard-props"};R.expando="ng339";var Za=
R.cache={},ne=1,rb=P.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ya=P.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};R._data=function(b){return this.cache[b[this.expando]]||{}};var ie=/([\:\-\_]+(.))/g,je=/^moz([A-Z])/,Hb=y("jqLite"),ke=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,le=/<([\w:]+)/,me=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
ba={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ba.optgroup=ba.option;ba.tbody=ba.tfoot=ba.colgroup=ba.caption=ba.thead;ba.th=ba.td;var La=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(P).on("load",a))},
toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?x(this[b]):x(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},nb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){nb[K(b)]=b});var rc={};q("input select option textarea button form details".split(" "),function(b){rc[Ia(b)]=!0});q({data:Mb,removeData:Lb},function(b,a){R[a]=b});q({data:Mb,inheritedData:mb,scope:function(b){return x.data(b,
"$scope")||mb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return x.data(b,"$isolateScope")||x.data(b,"$isolateScopeNoTemplate")},controller:oc,injector:function(b){return mb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,a,c){a=Xa(a);if(B(c))b.style[a]=c;else{var d;8>=Q&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=Q&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(nb[d])if(B(c))c?(b[a]=
!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||D).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(v(d))return e?b[e]:"";b[e]=d}var a=[];9>Q?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(v(a)){if("SELECT"===Ma(b)&&b.multiple){var c=
[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ja(d[c]);b.innerHTML=a},empty:pc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==pc&&(2==b.length&&b!==Nb&&b!==oc?a:d)===s){if(S(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var k=
b(this[f],a,d);e=e?e+k:k}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});q({removeData:Lb,dealoc:Ja,on:function a(c,d,e,f){if(B(f))throw Hb("onargs");var g=la(c,"events"),k=la(c,"handle");g||la(c,"events",g={});k||la(c,"handle",k=oe(c,g));q(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==d||"mouseleave"==d){var l=W.body.contains||W.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?
d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else rb(c,d,k),g[d]=[];f=g[d]}f.push(e)})},off:nc,one:function(a,c,d){a=x(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ja(a);q(new R(c),function(c){d?e.insertBefore(c,
d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new R(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=x(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ja(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:lb,removeClass:kb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var f=d;v(f)&&(f=!Nb(a,c));(f?lb:kb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];c=ga(c||[]);d=d||[];var e=[{preventDefault:D,stopPropagation:D}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,k=0;k<this.length;k++)v(g)?(g=a(this[k],c,e,f),B(g)&&(g=x(g))):Jb(g,a(this[k],c,e,f));return B(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});$a.prototype={put:function(a,c){this[Ka(a,this.nextUid)]=c},get:function(a){return this[Ka(a,
this.nextUid)]},remove:function(a){var c=this[a=Ka(a,this.nextUid)];delete this[a];return c}};var qe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,re=/,/,se=/^\s*(_?)(\S+?)\1\s*$/,pe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ab=y("$injector"),Le=y("$animate"),Md=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,g,k){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));k&&d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,g){c=z(c)?c:I(c)?c.join(" "):"";q(a,function(a){lb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=z(c)?c:I(c)?c.join(" "):"";q(a,function(a){kb(a,c)});g&&d(g)},setClass:function(a,c,g,k){q(a,function(a){lb(a,
c);kb(a,g)});k&&d(k)},enabled:D}}]}],ia=y("$compile");ic.$inject=["$provide","$$sanitizeUriProvider"];var ue=/^(x[\:\-_]|data[\:\-_])/i,yc=y("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xe={http:80,https:443,ftp:21},Sb=y("$location");Ub.prototype=Tb.prototype=Bc.prototype={$$html5:!1,$$replace:!1,absUrl:sb("$$absUrl"),url:function(a,c){if(v(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},
protocol:sb("$$protocol"),host:sb("$$host"),port:sb("$$port"),path:Cc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(z(a))this.$$search=ec(a);else if(S(a))q(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Cc("$$hash",Ga),replace:function(){this.$$replace=!0;return this}};
var ja=y("$parse"),Fc={},va,Ne=Function.prototype.call,Oe=Function.prototype.apply,Qc=Function.prototype.bind,db={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:D,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,
c,d,e){return d(a,c)^e(a,c)},"=":D,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,
c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Pe={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Wb=function(a){this.options=a};Wb.prototype={constructor:Wb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=db[this.ch],e=db[a],f=db[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ja("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,k;this.index<this.text.length;){k=this.text.charAt(this.index);if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){k=this.text.charAt(f);if("("===k){g=c.substr(e-
d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(k))f++;else break}d={index:d,text:c};if(db.hasOwnProperty(c))d.fn=db[c],d.literal=!0,d.constant=!0;else{var m=Ec(c,this.options,this.text);d.fn=F(function(a,c){return m(a,c)},{assign:function(d,e){return tb(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Pe[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var cb=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d};cb.ZERO=F(function(){return 0},{constant:!0});cb.prototype={constructor:cb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();
(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ja("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ja("ueoe",this.text);return this.tokens[0]},
peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return F(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return F(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&
c.constant&&d.constant})},binaryFn:function(a,c,d){return F(function(e,f){return c(e,f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=
this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,
c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),
c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;
return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(cb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Ec(d,this.options,this.text);return F(function(c,d,k){return e(k||a(c,d))},{assign:function(e,g,k){return tb(a(e,k),d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return F(function(e,f){var g=a(e,f),k=d(e,f),m;qa(k,c.text);
if(!g)return s;(g=Na(g[k],c.text))&&(g.then&&c.options.unwrapPromises)&&(m=g,"$$v"in g||(m.$$v=s,m.then(function(a){m.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var k=d(e,g);return Na(a(e,g),c.text)[k]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var k=[],m=c?c(f,g):f,h=0;h<d.length;h++)k.push(d[h](f,g));h=a(f,g,m)||D;Na(m,e.text);var l=e.text;if(h){if(h.constructor===
h)throw ja("isecfn",l);if(h===Ne||h===Oe||Qc&&h===Qc)throw ja("isecff",l);}k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return Na(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return F(function(c,d){for(var g=[],k=0;k<a.length;k++)g.push(a[k](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return F(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Vb={},wa=y("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},V=W.createElement("a"),Hc=ua(P.location.href,!0);mc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];
var Nc=".",He={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:ub("Month"),MMM:ub("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:ub("Day"),EEE:ub("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Xb(Math[0<
a?"floor":"ceil"](a/60),2)+Xb(Math.abs(a%60),2))}},Ge=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Fe=/^\-?\d+$/;Jc.$inject=["$locale"];var De=$(K),Ee=$(Ia);Lc.$inject=["$parse"];var dd=$({restrict:"E",compile:function(a,c){8>=Q&&(c.href||c.name||c.$set("href",""),a.append(W.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===ya.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};q(nb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===ya.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$observe(c,function(a){a&&(f.$set(k,a),Q&&g&&e.prop(g,f[k]))})}}}});
var xb={$addControl:D,$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D};Oc.$inject=["$element","$attrs","$scope","$animate"];var Rc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};rb(e[0],"submit",k);e.on("$destroy",function(){c(function(){Ya(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),h=f.name||
f.ngForm;h&&tb(a,h,g,h);if(m)e.on("$destroy",function(){m.$removeControl(g);h&&tb(a,h,s,h);F(g,xb)})}}}}}]},ed=Rc(),rd=Rc(!0),Qe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Re=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Se=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Sc={text:zb,number:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Se.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Ie(e,"number",Te,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ra(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ra(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ra(e,"number",e.$isEmpty(a)||
Ab(a),a)})},url:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ra(e,"url",e.$isEmpty(a)||Qe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){zb(a,c,d,e,f,g);a=function(a){return ra(e,"email",e.$isEmpty(a)||Re.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){v(d.name)&&c.attr("name",fb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;z(f)||(f=!0);z(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:D,button:D,submit:D,reset:D,file:D},Te=["badInput"],jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Sc[K(f.type)]||Sc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",vb="ng-invalid",Oa="ng-pristine",yb="ng-dirty",Ue=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function k(a,c){c=c?"-"+jb(c,"-"):"";g.removeClass(e,(a?vb:wb)+c);g.addClass(e,(a?wb:vb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=f(d.ngModel),h=m.assign;if(!h)throw y("ngModel")("nonassign",d.ngModel,ha(e));this.$render=D;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||xb,p=0,n=this.$error={};e.addClass(Oa);k(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&p--,p||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,p++),n[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,yb);g.addClass(e,Oa)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Oa),g.addClass(e,yb),l.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=m(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=
c,r.$render())}return c})}],Gd=function(){return{require:["ngModel","^?form"],controller:Ue,link:function(a,c,d,e){var f=e[0],g=e[1]||xb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Id=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Hd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!v(a)){var c=[];a&&q(a.split(f),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return I(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Ve=/^(true|false|\d+)$/,Jd=function(){return{priority:100,
compile:function(a,c){return Ve.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},jd=xa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),ld=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
kd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var k=c(g.ngBindHtml);d.$watch(function(){return(k(d)||"").toString()},function(c){f.html(a.getTrustedHtml(k(d))||"")})}}}}],md=Yb("",!0),od=Yb("Odd",0),nd=Yb("Even",1),pd=xa({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),qd=[function(){return{scope:!0,controller:"@",priority:500}}],lc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ma("ng-"+a);lc[c]=["$parse",function(d){return{compile:function(e,f){var g=d(f[c]);return function(c,d){d.on(K(a),function(a){c.$apply(function(){g(c,{$event:a})})})}}}}]});var td=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var k,m,h;c.$watch(e.ngIf,function(f){Sa(f)?m||(m=c.$new(),g(m,function(c){c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),
h=null),m&&(m.$destroy(),m=null),k&&(h=Eb(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],ud=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ta.noop,compile:function(g,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(g,k,r,q,L){var w=0,u,s,x,A=function(){s&&(s.remove(),s=null);u&&(u.$destroy(),u=null);x&&(e.leave(x,function(){s=null}),s=x,x=null)};g.$watch(f.parseAsResourceUrl(m),
function(f){var m=function(){!B(l)||l&&!g.$eval(l)||d()},r=++w;f?(a.get(f,{cache:c}).success(function(a){if(r===w){var c=g.$new();q.template=a;a=L(c,function(a){A();e.enter(a,null,k,m)});u=c;x=a;u.$emit("$includeContentLoaded");g.$eval(h)}}).error(function(){r===w&&A()}),g.$emit("$includeContentRequested")):(A(),q.template=null)})}}}}],Kd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],vd=xa({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),wd=xa({terminal:!0,priority:1E3}),xd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var k=g.count,m=g.$attr.when&&f.attr(g.$attr.when),h=g.offset||0,l=e.$eval(m)||{},p={},n=c.startSymbol(),r=c.endSymbol(),t=/^when(Minus)?(.+)$/;q(g,function(a,c){t.test(c)&&(l[K(c.replace("when","").replace("Minus","-"))]=f.attr(g.$attr[c]))});q(l,function(a,e){p[e]=c(a.replace(d,n+k+"-"+h+r))});e.$watch(function(){var c=
parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return p[c](e,f,!0)},function(a){f.text(a)})}}}],yd=["$parse","$animate",function(a,c){var d=y("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,k,m){var h=g.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),p,n,r,t,s,w,u={$id:Ka};if(!l)throw d("iexp",h);g=l[1];k=l[2];(l=l[3])?(p=a(l),n=function(a,c,d){w&&(u[w]=a);u[s]=c;u.$index=d;return p(e,
u)}):(r=function(a,c){return Ka(c)},t=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);s=l[3]||l[1];w=l[2];var B={};e.$watchCollection(k,function(a){var g,k,l=f[0],p,u={},y,E,H,z,D,v,I=[];if(eb(a))D=a,p=n||r;else{p=n||t;D=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&D.push(H);D.sort()}y=D.length;k=I.length=D.length;for(g=0;g<k;g++)if(H=a===D?g:D[g],z=a[H],z=p(H,z,g),Ca(z,"`track by` id"),B.hasOwnProperty(z))v=B[z],delete B[z],u[z]=
v,I[g]=v;else{if(u.hasOwnProperty(z))throw q(I,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",h,z);I[g]={id:z};u[z]=!1}for(H in B)B.hasOwnProperty(H)&&(v=B[H],g=Eb(v.clone),c.leave(g),q(g,function(a){a.$$NG_REMOVED=!0}),v.scope.$destroy());g=0;for(k=D.length;g<k;g++){H=a===D?g:D[g];z=a[H];v=I[g];I[g-1]&&(l=I[g-1].clone[I[g-1].clone.length-1]);if(v.scope){E=v.scope;p=l;do p=p.nextSibling;while(p&&p.$$NG_REMOVED);v.clone[0]!=p&&c.move(Eb(v.clone),null,x(l));l=v.clone[v.clone.length-1]}else E=e.$new();
E[s]=z;w&&(E[w]=H);E.$index=g;E.$first=0===g;E.$last=g===y-1;E.$middle=!(E.$first||E.$last);E.$odd=!(E.$even=0===(g&1));v.scope||m(E,function(a){a[a.length++]=W.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,x(l));l=a;v.scope=E;v.clone=a;u[v.id]=v})}B=u})}}}],zd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Sa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],sd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Sa(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],Ad=xa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Bd=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var p,n;p=0;for(n=m.length;p<n;++p)m[p].remove();p=m.length=0;for(n=h.length;p<n;++p){var r=k[p];h[p].$destroy();m[p]=r;a.leave(r,function(){m.splice(p,1)})}k.length=0;h.length=
0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),q(g,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Cd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Dd=xa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:f,element:c})}}),Fd=xa({link:function(a,c,d,e,f){if(!f)throw y("ngTransclude")("orphan",ha(c));f(function(a){c.empty();c.append(a)})}}),fd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],We=y("ngOptions"),Ed=$({terminal:!0}),gd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:D};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,p;m.databound=d.ngModel;m.init=function(a,c,d){l=a;p=d};m.addOption=function(c){Ca(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),p.parent()&&p.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ka(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",
!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=D})}],link:function(e,g,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&w.prop("selected",!0)):v(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new $a(d.$viewValue);q(c.find("option"),
function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){za(e,d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function k(){var a={"":[]},c=[""],d,h,s,t,v;t=g.$modelValue;v=x(e)||[];var A=n?Zb(v):v,E,N,C;N={};s=!1;var F,K;if(r)if(w&&I(t))for(s=new $a([]),C=0;C<t.length;C++)N[m]=t[C],s.put(w(e,N),t[C]);else s=new $a(t);for(C=0;E=A.length,
C<E;C++){h=C;if(n){h=A[C];if("$"===h.charAt(0))continue;N[n]=h}N[m]=v[h];d=p(e,N)||"";(h=a[d])||(h=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,N):q(e,N))):(w?(d={},d[m]=t,d=w(e,d)===w(e,N)):d=t===q(e,N),s=s||d);F=l(e,N);F=B(F)?F:"";h.push({id:w?w(e,N):n?A[C]:C,label:F,selected:d})}r||(z||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));N=0;for(A=c.length;N<A;N++){d=c[N];h=a[d];y.length<=N?(t={element:D.clone().attr("label",d),label:h.label},v=[t],y.push(v),
f.append(t.element)):(v=y[N],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));F=null;C=0;for(E=h.length;C<E;C++)s=h[C],(d=v[C+1])?(F=d.element,d.label!==s.label&&F.text(d.label=s.label),d.id!==s.id&&F.val(d.id=s.id),d.selected!==s.selected&&(F.prop("selected",d.selected=s.selected),Q&&F.prop("selected",d.selected))):(""===s.id&&z?K=z:(K=u.clone()).val(s.id).prop("selected",s.selected).text(s.label),v.push({element:K,label:s.label,id:s.id,selected:s.selected}),F?F.after(K):t.element.append(K),
F=K);for(C++;v.length>C;)v.pop().element.remove()}for(;y.length>N;)y.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw We("iexp",t,ha(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],p=c(h[3]||""),q=c(h[2]?h[1]:m),x=c(h[7]),w=h[8]?c(h[8]):null,y=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=x(e)||[],d={},h,k,l,p,t,u,v;if(r)for(k=[],p=0,u=y.length;p<u;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=
h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<y[0].length&&y[0][1].id!==h&&(y[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=k;e.$watch(k)}if(m[1]){var n=m[0];m=m[1];var r=k.multiple,t=k.ngOptions,z=!1,w,u=x(W.createElement("option")),D=x(W.createElement("optgroup")),y=u.clone();
k=0;for(var A=g.children(),C=A.length;k<C;k++)if(""===A[k].value){w=z=A.eq(k);break}n.init(m,z,y);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?p(e,g,m):r?l(e,g,m):h(e,g,m,n)}}}}],id=["$interpolate",function(a){var c={addOption:D,removeOption:D};return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",
!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],hd=$({restrict:"E",terminal:!0});P.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Da=P.jQuery)&&Da.fn.on?(x=Da,F(Da.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",!1,!1,!1),Gb("html",
!1,!1,!0)):x=R,Ta.element=x,$c(Ta),x(W).ready(function(){Xc(W,fc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=00.angular.min.js.map

/**
 * @license AngularJS v1.2.22
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @kind function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="01.angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="01.angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);

/**
 * Created by riffdiktator on 12.08.2014.
 */
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/profile',{
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        })
        .when('/',{
            templateUrl: 'views/main-page.html',
            controller: 'MainPageController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


/**
 * Created by riffdiktator on 15.08.2014.
 */
'use strict';

angular.module('config', [])
    .constant('_settings', {
        'siteTitle' : 'Tytuł z konfiguracji'
    });

/**
 * Created by riffdiktator on 15.08.2014.
 */
function MainPageController($scope){
    $scope.pageTitle = "Strona główna";
};
/**
 * Created by riffdiktator on 12.08.2014.
 */
function NavigationController($scope, $http){
    $http.get('http://localhost:3333/api/nav').
        success(function(data, status, headers, config) {
            $scope.navigation = data;
        }).
        error(function(data, status, headers, config) {
            // log error
        });
};
/**
 * Created by riffdiktator on 15.08.2014.
 */
function ProfileController($scope){
    $scope.pageTitle = "Podstrona profilu NBTK";
};