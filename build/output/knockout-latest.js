// Knockout JavaScript library v1.1.2
// (c) 2010 Steven Sanderson - http://knockoutjs.com/
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

function a(f){throw f;}var n=true,o=null,p=false,r=window.ko={};r.b=function(f,b){for(var c=f.split("."),d=window,e=0;e<c.length-1;e++)d=d[c[e]];d[c[c.length-1]]=b};r.g=function(f,b,c){f[b]=c};
r.a=new function(){var f=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;return{ba:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],h:function(b,c){for(var d=0,e=b.length;d<e;d++)c(b[d])},i:function(b,c){if(typeof b.indexOf=="function")return b.indexOf(c);for(var d=0,e=b.length;d<e;d++)if(b[d]==c)return d;return-1},ya:function(b,c,d){for(var e=0,g=b.length;e<g;e++)if(c.call(d,b[e]))return b[e];return o},Z:function(b,c){var d=r.a.i(b,c);d>=0&&b.splice(d,1)},Y:function(b){b=b||[];for(var c=[],d=0,e=b.length;d<
e;d++)r.a.i(c,b[d])<0&&c.push(b[d]);return c},K:function(b,c){b=b||[];for(var d=[],e=0,g=b.length;e<g;e++)d.push(c(b[e]));return d},J:function(b,c){b=b||[];for(var d=[],e=0,g=b.length;e<g;e++)c(b[e])&&d.push(b[e]);return d},L:function(b,c){for(var d=0,e=c.length;d<e;d++)b.push(c[d])},aa:function(b){for(;b.firstChild;){r.a.e.N(b.firstChild);b.removeChild(b.firstChild)}},Va:function(b,c){r.a.aa(b);c&&r.a.h(c,function(d){b.appendChild(d)})},ka:function(b,c){var d=b.nodeType?[b]:b;if(d.length>0){for(var e=
d[0],g=e.parentNode,h=0,i=c.length;h<i;h++)g.insertBefore(c[h],e);h=0;for(i=d.length;h<i;h++){r.a.e.N(d[h]);g.removeChild(d[h])}}},na:function(b,c){if(navigator.userAgent.indexOf("MSIE 6")>=0)b.setAttribute("selected",c);else b.selected=c},Ja:function(b,c){if(!b||b.nodeType!=1)return[];var d=[];b.getAttribute(c)!==o&&d.push(b);for(var e=b.getElementsByTagName("*"),g=0,h=e.length;g<h;g++)e[g].getAttribute(c)!==o&&d.push(e[g]);return d},l:function(b){return(b||"").replace(f,"")},$a:function(b,c){for(var d=
[],e=(b||"").split(c),g=0,h=e.length;g<h;g++){var i=r.a.l(e[g]);i!==""&&d.push(i)}return d},Wa:function(b,c){b=b||"";if(c.length>b.length)return p;return b.substring(0,c.length)===c},Ha:function(b,c){if(c===undefined)return(new Function("return "+b))();with(c)return eval("("+b+")")},Fa:function(b,c){if(c.compareDocumentPosition)return(c.compareDocumentPosition(b)&16)==16;for(;b!=o;){if(b==c)return n;b=b.parentNode}return p},A:function(b){return r.a.Fa(b,document)},o:function(b,c,d){if(typeof jQuery!=
"undefined")jQuery(b).bind(c,d);else if(typeof b.addEventListener=="function")b.addEventListener(c,d,p);else if(typeof b.attachEvent!="undefined")b.attachEvent("on"+c,function(e){d.call(b,e)});else a(Error("Browser doesn't support addEventListener or attachEvent"))},ra:function(b,c){if(!(b&&b.nodeType))a(Error("element must be a DOM node when calling triggerEvent"));if(typeof document.createEvent=="function")if(typeof b.dispatchEvent=="function"){var d=document.createEvent(c=="click"?"MouseEvents":
"HTMLEvents");d.initEvent(c,n,n,window,0,0,0,0,0,p,p,p,p,0,b);b.dispatchEvent(d)}else a(Error("The supplied element doesn't support dispatchEvent"));else if(typeof b.fireEvent!="undefined"){if(c=="click")if(b.tagName=="INPUT"&&(b.type.toLowerCase()=="checkbox"||b.type.toLowerCase()=="radio"))b.checked=b.checked!==n;b.fireEvent("on"+c)}else a(Error("Browser doesn't support triggering events"))},d:function(b){return r.C(b)?b():b},Ea:function(b,c){return r.a.i((b.className||"").split(/\s+/),c)>=0},qa:function(b,
c,d){var e=r.a.Ea(b,c);if(d&&!e)b.className=(b.className||"")+" "+c;else if(e&&!d){d=(b.className||"").split(/\s+/);e="";for(var g=0;g<d.length;g++)if(d[g]!=c)e+=d[g]+" ";b.className=r.a.l(e)}},Sa:function(b,c){b=r.a.d(b);c=r.a.d(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},ga:function(b){for(var c=[],d=b.length-1;d>=0;d--)c.push(b[d]);return c},P:/MSIE 6/i.test(navigator.userAgent),Ma:/MSIE 7/i.test(navigator.userAgent),da:function(b,c){for(var d=r.a.ga(b.getElementsByTagName("INPUT")).concat(r.a.ga(b.getElementsByTagName("TEXTAREA"))),
e=typeof c=="string"?function(i){return i.name===c}:function(i){return c.test(i.name)},g=[],h=d.length-1;h>=0;h--)e(d[h])&&g.push(d[h]);return g},F:function(b){if(typeof b=="string")if(b=r.a.l(b)){if(window.JSON&&window.JSON.parse)return window.JSON.parse(b);return(new Function("return "+b))()}return o},T:function(b){if(typeof JSON=="undefined"||typeof JSON.stringify=="undefined")a(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"));
return JSON.stringify(r.a.d(b))},Ra:function(b,c,d){d=d||{};var e=d.params||{},g=d.includeFields||this.ba,h=b;if(typeof b=="object"&&b.tagName=="FORM"){h=b.action;for(var i=g.length-1;i>=0;i--)for(var j=r.a.da(b,g[i]),l=j.length-1;l>=0;l--)e[j[l].name]=j[l].value}c=r.a.d(c);var k=document.createElement("FORM");k.style.display="none";k.action=h;k.method="post";for(var m in c){b=document.createElement("INPUT");b.name=m;b.value=r.a.T(r.a.d(c[m]));k.appendChild(b)}for(m in e){b=document.createElement("INPUT");
b.name=m;b.value=e[m];k.appendChild(b)}document.body.appendChild(k);d.submitter?d.submitter(k):k.submit();setTimeout(function(){k.parentNode.removeChild(k)},0)},e:{Ya:0,w:"__ko__"+(new Date).getTime(),Za:{},t:function(b,c){var d=r.a.e.ca(b,p);return d===undefined?undefined:d[c]},la:function(b,c,d){r.a.e.ca(b,n)[c]=d},ca:function(b,c){var d=b[r.a.e.w];if(!d){if(!c)return;d=b[r.a.e.w]="ko"+r.a.e.Ya++;r.a.e[d]={}}return r.a.e[d]},M:function(b){var c=b[r.a.e.w];if(c){delete r.a.e[c];b[r.a.e.w]=o}},N:function(b){if(!(b.nodeType!=
1&&b.nodeType!=9)){r.a.e.M(b);b=b.getElementsByTagName("*");for(var c=0,d=b.length;c<d;c++)r.a.e.M(b[c])}}}}};r.b("ko.utils",r.a);r.b("ko.utils.arrayForEach",r.a.h);r.b("ko.utils.arrayFirst",r.a.ya);r.b("ko.utils.arrayFilter",r.a.J);r.b("ko.utils.arrayGetDistinctValues",r.a.Y);r.b("ko.utils.arrayIndexOf",r.a.i);r.b("ko.utils.arrayMap",r.a.K);r.b("ko.utils.arrayPushAll",r.a.L);r.b("ko.utils.arrayRemoveItem",r.a.Z);r.b("ko.utils.fieldsIncludedWithJsonPost",r.a.ba);r.b("ko.utils.getFormFields",r.a.da);
r.b("ko.utils.postJson",r.a.Ra);r.b("ko.utils.parseJson",r.a.F);r.b("ko.utils.registerEventHandler",r.a.o);r.b("ko.utils.stringifyJson",r.a.T);r.b("ko.utils.range",r.a.Sa);r.b("ko.utils.toggleDomNodeCssClass",r.a.qa);r.b("ko.utils.triggerEvent",r.a.ra);r.b("ko.utils.unwrapObservable",r.a.d);Function.prototype.bind||(Function.prototype.bind=function(f){var b=this,c=Array.prototype.slice.call(arguments);f=c.shift();return function(){return b.apply(f,c.concat(Array.prototype.slice.call(arguments)))}});
r.j=function(){function f(){return((1+Math.random())*4294967296|0).toString(16).substring(1)}function b(d,e){if(d)if(d.nodeType==8){var g=r.j.ia(d.nodeValue);g!=o&&e.push({Da:d,Oa:g})}else if(d.nodeType==1){g=0;for(var h=d.childNodes,i=h.length;g<i;g++)b(h[g],e)}}var c={};return{R:function(d){if(typeof d!="function")a(Error("You can only pass a function to ko.memoization.memoize()"));var e=f()+f();c[e]=d;return"<!--[ko_memo:"+e+"]--\>"},sa:function(d,e){var g=c[d];if(g===undefined)a(Error("Couldn't find any memo with ID "+
d+". Perhaps it's already been unmemoized."));try{g.apply(o,e||[]);return n}finally{delete c[d]}},ta:function(d,e){var g=[];b(d,g);for(var h=0,i=g.length;h<i;h++){var j=g[h].Da,l=[j];e&&r.a.L(l,e);r.j.sa(g[h].Oa,l);j.nodeValue="";j.parentNode&&j.parentNode.removeChild(j)}},ia:function(d){return(d=d.match(/^\[ko_memo\:(.*?)\]$/))?d[1]:o}}}();r.b("ko.memoization",r.j);r.b("ko.memoization.memoize",r.j.R);r.b("ko.memoization.unmemoize",r.j.sa);r.b("ko.memoization.parseMemoText",r.j.ia);
r.b("ko.memoization.unmemoizeDomNodeAndDescendants",r.j.ta);r.Xa=function(f,b){this.Aa=f;this.s=b;r.g(this,"dispose",this.s)};r.U=function(){var f=[];this.V=function(b,c){var d=new r.Xa(c?function(){b.call(c)}:b,function(){r.a.Z(f,d)});f.push(d);return d};this.v=function(b){r.a.h(f.slice(0),function(c){c&&c.Aa(b)})};this.Ka=function(){return f.length};r.g(this,"subscribe",this.V);r.g(this,"notifySubscribers",this.v);r.g(this,"getSubscriptionsCount",this.Ka)};
r.fa=function(f){return typeof f.V=="function"&&typeof f.v=="function"};r.b("ko.subscribable",r.U);r.b("ko.isSubscribable",r.fa);r.z=function(){var f=[];return{za:function(){f.push([])},end:function(){return f.pop()},ja:function(b){if(!r.fa(b))a("Only subscribable things can act as dependencies");f.length>0&&f[f.length-1].push(b)}}}();
r.q=function(f){function b(){if(arguments.length>0){c=arguments[0];b.v(c);return this}else{r.z.ja(b);return c}}var c=f;b.n=r.q;b.H=function(){b.v(c)};r.U.call(b);r.g(b,"valueHasMutated",b.H);return b};r.C=function(f){if(f===o||f===undefined||f.n===undefined)return p;if(f.n===r.q)return n;return r.C(f.n)};r.D=function(f){if(typeof f=="function"&&f.n===r.q)return n;if(typeof f=="function"&&f.n===r.m&&f.La)return n;return p};r.b("ko.observable",r.q);r.b("ko.isObservable",r.C);
r.b("ko.isWriteableObservable",r.D);
r.Qa=function(f){var b=new r.q(f);r.a.h(["pop","push","reverse","shift","sort","splice","unshift"],function(c){b[c]=function(){var d=b();d=d[c].apply(d,arguments);b.H();return d}});r.a.h(["slice"],function(c){b[c]=function(){var d=b();return d[c].apply(d,arguments)}});b.remove=function(c){for(var d=b(),e=[],g=[],h=typeof c=="function"?c:function(k){return k===c},i=0,j=d.length;i<j;i++){var l=d[i];h(l)?g.push(l):e.push(l)}b(e);return g};b.Ta=function(c){if(!c)return[];return b.remove(function(d){return r.a.i(c,
d)>=0})};b.$=function(c){for(var d=b(),e=typeof c=="function"?c:function(h){return h===c},g=d.length-1;g>=0;g--)if(e(d[g]))d[g]._destroy=n;b.H()};b.Ca=function(c){if(!c)return[];return b.$(function(d){return r.a.i(c,d)>=0})};b.indexOf=function(c){var d=b();return r.a.i(d,c)};b.replace=function(c,d){var e=b.indexOf(c);if(e>=0){b()[e]=d;b.H()}};r.g(b,"remove",b.remove);r.g(b,"removeAll",b.Ta);r.g(b,"destroy",b.$);r.g(b,"destroyAll",b.Ca);r.g(b,"indexOf",b.indexOf);return b};
r.b("ko.observableArray",r.Qa);
r.m=function(f,b,c){function d(){r.a.h(i,function(k){k.s()});i=[]}function e(k){d();r.a.h(k,function(m){i.push(m.V(g))})}function g(){if(l&&typeof c.disposeWhen=="function")if(c.disposeWhen()){h.s();return}try{r.z.za();j=c.owner?c.read.call(c.owner):c.read()}finally{var k=r.a.Y(r.z.end());e(k)}h.v(j);l=n}function h(){if(arguments.length>0)if(typeof c.write==="function"){var k=arguments[0];c.owner?c.write.call(c.owner,k):c.write(k)}else a("Cannot write a value to a dependentObservable unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");else{l||
g();r.z.ja(h);return j}}if(f&&typeof f=="object")c=f;else{c=c||{};c.read=f||c.read;c.owner=b||c.owner}if(typeof c.read!="function")a("Pass a function that returns the value of the dependentObservable");var i=[],j,l=p;h.n=r.m;h.Ia=function(){return i.length};h.La=typeof c.write==="function";h.s=function(){d()};r.U.call(h);c.deferEvaluation!==n&&g();r.g(h,"dispose",h.s);r.g(h,"getDependenciesCount",h.Ia);return h};r.m.n=r.q;r.b("ko.dependentObservable",r.m);
(function(){function f(d,e,g){g=g||new c;d=e(d);if(!(typeof d=="object"&&d!==o&&d!==undefined))return d;var h=d instanceof Array?[]:{};g.save(d,h);b(d,function(i){var j=e(d[i]);switch(typeof j){case "boolean":case "number":case "string":case "function":h[i]=j;break;case "object":case "undefined":var l=g.t(j);h[i]=l!==undefined?l:f(j,e,g)}});return h}function b(d,e){if(d instanceof Array)for(var g=0;g<d.length;g++)e(g);else for(g in d)e(g)}function c(){var d=[],e=[];this.save=function(g,h){var i=r.a.i(d,
g);if(i>=0)e[i]=h;else{d.push(g);e.push(h)}};this.t=function(g){g=r.a.i(d,g);return g>=0?e[g]:undefined}}r.pa=function(d){if(arguments.length==0)a(Error("When calling ko.toJS, pass the object you want to convert."));return f(d,function(e){for(var g=0;r.C(e)&&g<10;g++)e=e();return e})};r.toJSON=function(d){d=r.pa(d);return r.a.T(d)}})();r.b("ko.toJS",r.pa);r.b("ko.toJSON",r.toJSON);
r.f={k:function(f){if(f.tagName=="OPTION"){if(f.__ko__hasDomDataOptionValue__===n)return r.a.e.t(f,r.c.options.ha);return f.getAttribute("value")}else return f.tagName=="SELECT"?f.selectedIndex>=0?r.f.k(f.options[f.selectedIndex]):undefined:f.value},I:function(f,b){if(f.tagName=="OPTION")switch(typeof b){case "string":case "number":r.a.e.M(f);"__ko__hasDomDataOptionValue__"in f&&delete f.__ko__hasDomDataOptionValue__;f.value=b;break;default:r.a.e.la(f,r.c.options.ha,b);f.__ko__hasDomDataOptionValue__=
n;f.value=""}else if(f.tagName=="SELECT")for(var c=f.options.length-1;c>=0;c--){if(r.f.k(f.options[c])==b){f.selectedIndex=c;break}}else{if(b===o||b===undefined)b="";f.value=b}}};r.b("ko.selectExtensions",r.f);r.b("ko.selectExtensions.readValue",r.f.k);r.b("ko.selectExtensions.writeValue",r.f.I);
r.p=function(){function f(e,g){return e.replace(b,function(h,i){return g[i]})}var b=/\[ko_token_(\d+)\]/g,c=/^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,d=["true","false"];return{F:function(e){e=r.a.l(e);if(e.length<3)return{};for(var g=[],h=o,i,j=e.charAt(0)=="{"?1:0;j<e.length;j++){var l=e.charAt(j);if(h===o)switch(l){case '"':case "'":case "/":h=j;i=l;break;case "{":h=j;i="}";break;case "[":h=j;i="]"}else if(l==i){l=e.substring(h,j+1);g.push(l);var k="[ko_token_"+(g.length-
1)+"]";e=e.substring(0,h)+k+e.substring(j+1);j-=l.length-k.length;h=o}}h={};e=e.split(",");i=0;for(j=e.length;i<j;i++){k=e[i];var m=k.indexOf(":");if(m>0&&m<k.length-1){l=r.a.l(k.substring(0,m));k=r.a.l(k.substring(m+1));if(l.charAt(0)=="{")l=l.substring(1);if(k.charAt(k.length-1)=="}")k=k.substring(0,k.length-1);l=r.a.l(f(l,g));k=r.a.l(f(k,g));h[l]=k}}return h},O:function(e){var g=r.p.F(e),h=[],i;for(i in g){var j=g[i],l;l=j;l=r.a.i(d,r.a.l(l).toLowerCase())>=0?p:l.match(c)!==o;if(l){h.length>0&&
h.push(", ");h.push(i+" : function(__ko_value) { "+j+" = __ko_value; }")}}if(h.length>0)e=e+", '_ko_property_writers' : { "+h.join("")+" } ";return e}}}();r.b("ko.jsonExpressionRewriting",r.p);r.b("ko.jsonExpressionRewriting.parseJson",r.p.F);r.b("ko.jsonExpressionRewriting.insertPropertyAccessorsIntoJson",r.p.O);r.c={};
r.X=function(f,b,c){function d(i){return function(){return h[i]}}function e(){return h}var g=n,h;new r.m(function(){var i;if(!(i=typeof b=="function"?b():b)){var j=f.getAttribute("data-bind");try{var l=" { "+r.p.O(j)+" } ";i=r.a.Ha(l,c===o?window:c)}catch(k){a(Error("Unable to parse binding attribute.\nMessage: "+k+";\nAttribute value: "+j))}}h=i;if(g)for(var m in h)r.c[m]&&typeof r.c[m].init=="function"&&(0,r.c[m].init)(f,d(m),e,c);for(m in h)r.c[m]&&typeof r.c[m].update=="function"&&(0,r.c[m].update)(f,
d(m),e,c)},o,{disposeWhen:function(){return!r.a.A(f)}});g=p};r.va=function(f,b){if(b&&b.nodeType==undefined)a(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node (note: this is a breaking change since KO version 1.05)"));b=b||window.document.body;var c=r.a.Ja(b,"data-bind");r.a.h(c,function(d){r.X(d,o,f)})};r.b("ko.bindingHandlers",r.c);r.b("ko.applyBindings",r.va);
r.c.click={init:function(f,b,c,d){r.a.o(f,"click",function(e){var g,h=b();try{g=h.call(d)}finally{if(g!==n)if(e.preventDefault)e.preventDefault();else e.returnValue=p}})}};r.c.submit={init:function(f,b,c,d){if(typeof b()!="function")a(Error("The value for a submit binding must be a function to invoke on submit"));r.a.o(f,"submit",function(e){var g,h=b();try{g=h.call(d,f)}finally{if(g!==n)if(e.preventDefault)e.preventDefault();else e.returnValue=p}})}};
r.c.visible={update:function(f,b){var c=r.a.d(b()),d=f.style.display!="none";if(c&&!d)f.style.display="";else if(!c&&d)f.style.display="none"}};r.c.enable={update:function(f,b){var c=r.a.d(b());if(c&&f.disabled)f.removeAttribute("disabled");else if(!c&&!f.disabled)f.disabled=n}};r.c.disable={update:function(f,b){r.c.enable.update(f,function(){return!r.a.d(b())})}};
r.c.value={init:function(f,b,c){var d=c().valueUpdate||"change",e=p;if(r.a.Wa(d,"after")){e=n;d=d.substring(5)}var g=e?function(h){setTimeout(h,0)}:function(h){h()};r.a.o(f,d,function(){g(function(){var h=b(),i=r.f.k(f);if(r.D(h))h(i);else{h=c();h._ko_property_writers&&h._ko_property_writers.value&&h._ko_property_writers.value(i)}})})},update:function(f,b){var c=r.a.d(b()),d=r.f.k(f),e=c!=d;if(c===0&&d!==0&&d!=="0")e=n;if(e){d=function(){r.f.I(f,c)};d();f.tagName=="SELECT"&&setTimeout(d,0)}if(f.tagName==
"SELECT"){d=r.f.k(f);d!==c&&r.a.ra(f,"change")}}};
r.c.options={update:function(f,b,c){if(f.tagName!="SELECT")a(Error("options binding applies only to SELECT elements"));var d=r.a.K(r.a.J(f.childNodes,function(k){return k.tagName&&k.tagName=="OPTION"&&k.selected}),function(k){return r.f.k(k)||k.innerText||k.textContent}),e=f.scrollTop,g=r.a.d(b());r.a.aa(f);if(g){var h=c();if(typeof g.length!="number")g=[g];if(h.optionsCaption){var i=document.createElement("OPTION");i.innerHTML=h.optionsCaption;r.f.I(i,undefined);f.appendChild(i)}c=0;for(b=g.length;c<
b;c++){i=document.createElement("OPTION");var j=typeof h.optionsValue=="string"?g[c][h.optionsValue]:g[c],l=typeof h.optionsText=="string"?g[c][h.optionsText]:j;j=r.a.d(j);l=r.a.d(l);r.f.I(i,j);i.innerHTML=l.toString();f.appendChild(i)}g=f.getElementsByTagName("OPTION");c=h=0;for(b=g.length;c<b;c++)if(r.a.i(d,r.f.k(g[c]))>=0){r.a.na(g[c],n);h++}if(e)f.scrollTop=e}}};r.c.options.ha="__ko.bindingHandlers.options.optionValueDomData__";
r.c.selectedOptions={ea:function(f){var b=[];f=f.childNodes;for(var c=0,d=f.length;c<d;c++){var e=f[c];e.tagName=="OPTION"&&e.selected&&b.push(r.f.k(e))}return b},init:function(f,b,c){r.a.o(f,"change",function(){var d=b();if(r.D(d))d(r.c.selectedOptions.ea(this));else{d=c();d._ko_property_writers&&d._ko_property_writers.value&&d._ko_property_writers.value(r.c.selectedOptions.ea(this))}})},update:function(f,b){if(f.tagName!="SELECT")a(Error("values binding applies only to SELECT elements"));var c=
r.a.d(b());if(c&&typeof c.length=="number")for(var d=f.childNodes,e=0,g=d.length;e<g;e++){var h=d[e];h.tagName=="OPTION"&&r.a.na(h,r.a.i(c,r.f.k(h))>=0)}}};r.c.text={update:function(f,b){var c=r.a.d(b());if(c===o||c===undefined)c="";typeof f.innerText=="string"?f.innerText=c:typeof f.textContent=="string"?f.textContent=c:f.text=c}};r.c.css={update:function(f,b){var c=r.a.d(b()||{}),d;for(d in c)if(typeof d=="string"){var e=r.a.d(c[d]);r.a.qa(f,d,e)}}};
r.c.style={update:function(f,b){var c=r.a.d(b()||{}),d;for(d in c)if(typeof d=="string"){var e=r.a.d(c[d]);f.style[d]=e||""}}};r.c.uniqueName={init:function(f,b){if(b()){f.name="ko_unique_"+ ++r.c.uniqueName.Ba;r.a.P&&f.mergeAttributes(document.createElement("<INPUT name='"+f.name+"'/>"),p)}}};r.c.uniqueName.Ba=0;
r.c.checked={init:function(f,b,c){function d(){var e;if(f.type=="checkbox")e=f.checked;else if(f.type=="radio"&&f.checked)e=f.value;else return;var g=b();if(r.D(g))g()!==e&&g(e);else{g=c();g._ko_property_writers&&g._ko_property_writers.checked&&g._ko_property_writers.checked(e)}}r.a.o(f,"change",d);r.a.o(f,"click",d);f.type=="radio"&&!f.name&&r.c.uniqueName.init(f,function(){return n})},update:function(f,b){var c=r.a.d(b());if(f.type=="checkbox")(f.checked=c)&&r.a.P&&f.mergeAttributes(document.createElement("<INPUT type='checkbox' checked='checked' />"),
p);else if(f.type=="radio"){f.checked=f.value==c;if(f.value==c&&(r.a.P||r.a.Ma))f.mergeAttributes(document.createElement("<INPUT type='radio' checked='checked' />"),p)}}};
r.W=function(){this.renderTemplate=function(){a("Override renderTemplate in your ko.templateEngine subclass")};this.isTemplateRewritten=function(){a("Override isTemplateRewritten in your ko.templateEngine subclass")};this.rewriteTemplate=function(){a("Override rewriteTemplate in your ko.templateEngine subclass")};this.createJavaScriptEvaluatorBlock=function(){a("Override createJavaScriptEvaluatorBlock in your ko.templateEngine subclass")}};r.b("ko.templateEngine",r.W);
r.G=function(){var f=/(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/g;return{Ga:function(b,c){c.isTemplateRewritten(b)||c.rewriteTemplate(b,function(d){return r.G.Pa(d,c)})},Pa:function(b,c){return b.replace(f,function(d,e,g,h,i,j,l){d=l;d=r.p.O(d);return c.createJavaScriptEvaluatorBlock("ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {                     return (function() { return { "+d+" } })()                 })")+e})},
wa:function(b){return r.j.R(function(c,d){c.nextSibling&&r.X(c.nextSibling,b,d)})}}}();r.b("ko.templateRewriting",r.G);r.b("ko.templateRewriting.applyMemoizedBindingsToNextSibling",r.G.wa);
(function(){function f(c,d,e,g,h){var i=r.a.d(g);h=h||{};var j=h.templateEngine||b;r.G.Ga(e,j);e=j.renderTemplate(e,i,h);if(typeof e.length!="number"||e.length>0&&typeof e[0].nodeType!="number")a("Template engine must return an array of DOM nodes");e&&r.a.h(e,function(l){r.j.ta(l,[g])});switch(d){case "replaceChildren":r.a.Va(c,e);break;case "replaceNode":r.a.ka(c,e);break;case "ignoreTargetNode":break;default:a(Error("Unknown renderMode: "+d))}h.afterRender&&h.afterRender(e,g);return e}var b;r.oa=
function(c){if(c!=undefined&&!(c instanceof r.W))a("templateEngine must inherit from ko.templateEngine");b=c};r.S=function(c,d,e,g,h){e=e||{};if((e.templateEngine||b)==undefined)a("Set a template engine before calling renderTemplate");h=h||"replaceChildren";if(g){var i=g.nodeType?g:g.length>0?g[0]:o;return new r.m(function(){var j=f(g,h,c,d,e);if(h=="replaceNode"){g=j;i=g.nodeType?g:g.length>0?g[0]:o}},o,{disposeWhen:function(){return!i||!r.a.A(i)}})}else return r.j.R(function(j){r.S(c,d,e,j,"replaceNode")})};
r.Ua=function(c,d,e,g){new r.m(function(){var h=r.a.d(d)||[];if(typeof h.length=="undefined")h=[h];h=r.a.J(h,function(i){return e.includeDestroyed||!i._destroy});r.a.ma(g,h,function(i){var j=typeof c;j=j=="function"||j=="object"?c(i):c;return f(o,"ignoreTargetNode",j,i,e)},e)},o,{disposeWhen:function(){return!r.a.A(g)}})};r.c.template={update:function(c,d,e,g){function h(l){for(var k=0,m=l.length;k<m;++k){var q=l[k];j[q]=i[q]}}var i=r.a.d(d());d=typeof i=="string"?i:i.name;var j=i.options||{};if(typeof i.foreach!=
"undefined"){h(["afterAdd","beforeRemove","includeDestroyed","afterRender"]);r.Ua(d,i.foreach||[],j,c)}else{h(["afterRender"]);e=i.data;r.S(d,typeof e=="undefined"?g:e,j,c)}}}})();r.b("ko.setTemplateEngine",r.oa);r.b("ko.renderTemplate",r.S);
r.a.r=function(f,b,c){if(c===undefined)return r.a.r(f,b,1)||r.a.r(f,b,10)||r.a.r(f,b,Number.MAX_VALUE);else{f=f||[];b=b||[];for(var d=f,e=b,g=[],h=0;h<=e.length;h++)g[h]=[];h=0;for(var i=Math.min(d.length,c);h<=i;h++)g[0][h]=h;h=1;for(i=Math.min(e.length,c);h<=i;h++)g[h][0]=h;i=d.length;var j,l=e.length;for(h=1;h<=i;h++){var k=Math.min(l,h+c);for(j=Math.max(1,h-c);j<=k;j++)g[j][h]=d[h-1]===e[j-1]?g[j-1][h-1]:Math.min(g[j-1][h]===undefined?Number.MAX_VALUE:g[j-1][h]+1,g[j][h-1]===undefined?Number.MAX_VALUE:
g[j][h-1]+1)}f=f;b=b;c=f.length;d=b.length;e=[];h=g[d][c];if(h===undefined)g=o;else{for(;c>0||d>0;){i=g[d][c];j=d>0?g[d-1][c]:h+1;l=c>0?g[d][c-1]:h+1;k=d>0&&c>0?g[d-1][c-1]:h+1;if(j===undefined||j<i-1)j=h+1;if(l===undefined||l<i-1)l=h+1;if(k<i-1)k=h+1;if(j<=l&&j<k){e.push({status:"added",value:b[d-1]});d--}else{if(l<j&&l<k)e.push({status:"deleted",value:f[c-1]});else{e.push({status:"retained",value:f[c-1]});d--}c--}}g=e.reverse()}return g}};r.b("ko.utils.compareArrays",r.a.r);
(function(){function f(b,c){var d=[];r.m(function(){var e=b(c)||[];d.length>0&&r.a.ka(d,e);d.splice(0,d.length);r.a.L(d,e)},o,{disposeWhen:function(){return d.length==0||!r.a.A(d[0])}});return d}r.a.ma=function(b,c,d,e){c=c||[];e=e||{};var g=r.a.e.t(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult")===undefined,h=r.a.e.t(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult")||[],i=r.a.K(h,function(s){return s.xa}),j=r.a.r(i,c);c=[];var l=0,k=[];i=[];for(var m=o,q=0,w=j.length;q<w;q++)switch(j[q].status){case "retained":var t=
h[l];c.push(t);if(t.B.length>0)m=t.B[t.B.length-1];l++;break;case "deleted":r.a.h(h[l].B,function(s){k.push({element:s,index:q,value:j[q].value});m=s});l++;break;case "added":t=f(d,j[q].value);c.push({xa:j[q].value,B:t});for(var v=0,x=t.length;v<x;v++){var u=t[v];i.push({element:u,index:q,value:j[q].value});if(m==o)b.firstChild?b.insertBefore(u,b.firstChild):b.appendChild(u);else m.nextSibling?b.insertBefore(u,m.nextSibling):b.appendChild(u);m=u}}r.a.h(k,function(s){r.a.e.N(s.element)});d=p;if(!g){if(e.afterAdd)for(q=
0;q<i.length;q++)e.afterAdd(i[q].element,i[q].index,i[q].value);if(e.beforeRemove){for(q=0;q<k.length;q++)e.beforeRemove(k[q].element,k[q].index,k[q].value);d=n}}d||r.a.h(k,function(s){s.element.parentNode&&s.element.parentNode.removeChild(s.element)});r.a.e.la(b,"setDomNodeChildrenFromArrayMapping_lastMappingResult",c)}})();r.b("ko.utils.setDomNodeChildrenFromArrayMapping",r.a.ma);
r.Q=function(){function f(c){var d=document.getElementById(c);if(d==o)a(Error("Cannot find template with ID="+c));return d}this.u=function(){if(typeof jQuery=="undefined"||!jQuery.tmpl)return 0;if(jQuery.tmpl.tag)return 2;return 1}();var b=RegExp("__ko_apos__","g");this.renderTemplate=function(c,d,e){if(this.u==0)a(Error("jquery.tmpl not detected.\nTo use KO's default template engine, reference jQuery and jquery.tmpl. See Knockout installation documentation for more details."));if(this.u==1){e='<script type="text/html">'+
f(c).text+"<\/script>";d=jQuery.tmpl(e,d)[0].text.replace(b,"'");return jQuery.clean([d],document)}d=[d];c=f(c).text;return jQuery.tmpl(c,d,e)};this.isTemplateRewritten=function(c){return f(c).Na===n};this.rewriteTemplate=function(c,d){var e=f(c),g=d(e.text);if(this.u==1){g=r.a.l(g);g=g.replace(/([\s\S]*?)(\${[\s\S]*?}|{{[\=a-z][\s\S]*?}}|$)/g,function(h,i,j){return i.replace(/\'/g,"__ko_apos__")+j})}e.text=g;e.Na=n};this.createJavaScriptEvaluatorBlock=function(c){if(this.u==1)return"{{= "+c+"}}";
return"{{ko_code ((function() { return "+c+" })()) }}"};this.ua=function(c,d){document.write("<script type='text/html' id='"+c+"'>"+d+"<\/script>")};r.g(this,"addTemplate",this.ua);if(this.u>1)jQuery.tmpl.tag.ko_code={open:"_.push($1 || '');"}};r.Q.prototype=new r.W;r.oa(new r.Q);r.b("ko.jqueryTmplTemplateEngine",r.Q);
