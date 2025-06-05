import{L as Cl,_ as Sl,C as bl,r as so,b as Dl,F as kl,c as Ot,d as Nl,e as xl,f as Ml,h as ua,p as Ol,u as Ll,j as Fl,k as Ul,l as Pt,m as ql,n as Bl,S as jl,i as zl,g as $l,o as Gl}from"./assets/index-8bd0c73f-CykSf9VJ.js";var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,la;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function _(){}_.prototype=p.prototype,v.D=p.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,E,A){for(var g=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)g[Nt-2]=arguments[Nt];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,_){_||(_=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=v.g[0],_=v.g[1],E=v.g[2];var A=v.g[3],g=p+(A^_&(E^A))+y[0]+3614090360&4294967295;p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[1]+3905402710&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+y[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[5]+1200080426&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+y[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[9]+2336552879&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(A^_&(E^A))+y[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=A+(E^p&(_^E))+y[13]+4254626195&4294967295,A=p+(g<<12&4294967295|g>>>20),g=E+(_^A&(p^_))+y[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=_+(p^E&(A^p))+y[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^A&(_^E))+y[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[6]+3225465664&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+y[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[10]+38016083&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+y[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[14]+3275163606&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^A&(_^E))+y[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=A+(_^E&(p^_))+y[2]+4243563512&4294967295,A=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(A^p))+y[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=_+(A^p&(E^A))+y[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^A)+y[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[8]+2272392833&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+y[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[4]+1272893353&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+y[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[0]+3936430074&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^A)+y[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=A+(p^_^E)+y[12]+3873151461&4294967295,A=p+(g<<11&4294967295|g>>>21),g=E+(A^p^_)+y[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=_+(E^A^p)+y[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~A))+y[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[7]+1126891415&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+y[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[3]+2399980690&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+y[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[15]+4264355552&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~A))+y[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=A+(_^(p|~E))+y[11]+3174756917&4294967295,A=p+(g<<10&4294967295|g>>>22),g=E+(p^(A|~_))+y[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=_+(A^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+A&4294967295}n.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var _=p-this.blockSize,y=this.B,E=this.h,A=0;A<p;){if(E==0)for(;A<=_;)i(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<p;)if(y[E++]=v.charCodeAt(A++),E==this.blockSize){i(this,y),E=0;break}}else for(;A<p;)if(y[E++]=v[A++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},n.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var _=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=_&255,_/=256;for(this.u(v),v=Array(16),p=_=0;4>p;++p)for(var y=0;32>y;y+=8)v[_++]=this.g[p]>>>y&255;return v};function o(v,p){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=p(v)}function u(v,p){this.h=p;for(var _=[],y=!0,E=v.length-1;0<=E;E--){var A=v[E]|0;y&&A==p||(_[E]=A,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(p){return new u([p|0],0>p?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return T;if(0>v)return D(f(-v));for(var p=[],_=1,y=0;v>=_;y++)p[y]=v/_|0,_*=4294967296;return new u(p,0)}function m(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(m(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(p,8)),y=T,E=0;E<v.length;E+=8){var A=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(g))):(y=y.j(_),y=y.add(f(g)))}return y}var T=h(0),R=h(1),C=h(16777216);r=u.prototype,r.m=function(){if(x(this))return-D(this).m();for(var v=0,p=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},r.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(x(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),_=this,y="";;){var E=rt(_,p).g;_=$(_,E.j(p));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=E,b(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function x(v){return v.h==-1}r.l=function(v){return v=$(this,v),x(v)?-1:b(v)?0:1};function D(v){for(var p=v.g.length,_=[],y=0;y<p;y++)_[y]=~v.g[y];return new u(_,~v.h).add(R)}r.abs=function(){return x(this)?D(this):this},r.add=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0,E=0;E<=p;E++){var A=y+(this.i(E)&65535)+(v.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,A&=65535,g&=65535,_[E]=g<<16|A}return new u(_,_[_.length-1]&-2147483648?-1:0)};function $(v,p){return v.add(D(p))}r.j=function(v){if(b(this)||b(v))return T;if(x(this))return x(v)?D(this).j(D(v)):D(D(this).j(v));if(x(v))return D(this.j(D(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,_=[],y=0;y<2*p;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var A=this.i(y)>>>16,g=this.i(y)&65535,Nt=v.i(E)>>>16,Oe=v.i(E)&65535;_[2*y+2*E]+=g*Oe,j(_,2*y+2*E),_[2*y+2*E+1]+=A*Oe,j(_,2*y+2*E+1),_[2*y+2*E+1]+=g*Nt,j(_,2*y+2*E+1),_[2*y+2*E+2]+=A*Nt,j(_,2*y+2*E+2)}for(y=0;y<p;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=p;y<2*p;y++)_[y]=0;return new u(_,0)};function j(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function K(v,p){this.g=v,this.h=p}function rt(v,p){if(b(p))throw Error("division by zero");if(b(v))return new K(T,T);if(x(v))return p=rt(D(v),p),new K(D(p.g),D(p.h));if(x(p))return p=rt(v,D(p)),new K(D(p.g),p.h);if(30<v.g.length){if(x(v)||x(p))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=p;0>=y.l(v);)_=kt(_),y=kt(y);var E=it(_,1),A=it(y,1);for(y=it(y,2),_=it(_,2);!b(y);){var g=A.add(y);0>=g.l(v)&&(E=E.add(_),A=g),y=it(y,1),_=it(_,1)}return p=$(v,E.j(p)),new K(E,p)}for(E=T;0<=v.l(p);){for(_=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),g=A.j(p);x(g)||0<g.l(v);)_-=y,A=f(_),g=A.j(p);b(A)&&(A=R),E=E.add(A),v=$(v,g)}return new K(E,v)}r.A=function(v){return rt(this,v).h},r.and=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)&v.i(y);return new u(_,this.h&v.h)},r.or=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)|v.i(y);return new u(_,this.h|v.h)},r.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),_=[],y=0;y<p;y++)_[y]=this.i(y)^v.i(y);return new u(_,this.h^v.h)};function kt(v){for(var p=v.g.length+1,_=[],y=0;y<p;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(_,v.h)}function it(v,p){var _=p>>5;p%=32;for(var y=v.g.length-_,E=[],A=0;A<y;A++)E[A]=0<p?v.i(A+_)>>>p|v.i(A+_+1)<<32-p:v.i(A+_);return new u(E,v.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,la=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=m,Gt=u}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ca,Ze,ha,Gn,es,da,fa,ma;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Un=="object"&&Un];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in l))break t;l=l[I]}s=s[s.length-1],d=l[s],a=a(d),a!=d&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,d=!1,I={next:function(){if(!d&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function m(s,a,l){return s.call.apply(s.bind,arguments)}function T(s,a,l){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:T,R.apply(null,arguments)}function C(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function b(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(d,I,w){for(var S=Array(arguments.length-2),H=2;H<arguments.length;H++)S[H-2]=arguments[H];return a.prototype[I].apply(d,S)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=s[d];return l}return[]}function D(s,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=s.length||0,w=d.length||0;s.length=I+w;for(let S=0;S<w;S++)s[I+S]=d[S]}else s.push(d)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function rt(s){return rt[" "](s),s}rt[" "]=function(){};var kt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function it(s,a,l){for(const d in s)a.call(l,s[d],d,s)}function v(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function p(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)s[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(s[l]=d[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Rr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,l){const d=Oe.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var Oe=new $(()=>new Hu,s=>s.reset());class Hu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Fe=!1,Rr=new Nt,si=()=>{const s=c.Promise.resolve(void 0);Le=()=>{s.then(Qu)}};var Qu=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var a=Oe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Fe=!1};function qt(){this.s=this.s,this.C=this.C}qt.prototype.s=!1,qt.prototype.ma=function(){this.s||(this.s=!0,this.N())},qt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var Wu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function Ue(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(kt){t:{try{rt(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Xu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ue.aa.h.call(this)}}b(Ue,ct);var Xu={2:"touch",3:"pen",4:"mouse"};Ue.prototype.h=function(){Ue.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var En="closure_listenable_"+(1e6*Math.random()|0),Yu=0;function Ju(s,a,l,d,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++Yu,this.da=this.fa=!1}function vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function In(s){this.src=s,this.g={},this.h=0}In.prototype.add=function(s,a,l,d,I){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var S=Vr(s,a,d,I);return-1<S?(a=s[S],l||(a.fa=!1)):(a=new Ju(a,this.src,w,!!d,I),a.fa=l,s.push(a)),a};function Pr(s,a){var l=a.type;if(l in s.g){var d=s.g[l],I=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(d,I,1),w&&(vn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Vr(s,a,l,d){for(var I=0;I<s.length;++I){var w=s[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return I}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Sr={};function ii(s,a,l,d,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)ii(s,a[w],l,d,I);return null}return l=ui(l),s&&s[En]?s.K(a,l,f(d)?!!d.capture:!1,I):Zu(s,a,l,!1,d,I)}function Zu(s,a,l,d,I,w){if(!a)throw Error("Invalid event type");var S=f(I)?!!I.capture:!!I,H=Dr(s);if(H||(s[Cr]=H=new In(s)),l=H.add(a,l,d,S,w),l.proxy)return l;if(d=tl(),l.proxy=d,d.src=s,d.listener=l,s.addEventListener)Wu||(I=S),I===void 0&&(I=!1),s.addEventListener(a.toString(),d,I);else if(s.attachEvent)s.attachEvent(ai(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function tl(){function s(l){return a.call(s.src,s.listener,l)}const a=el;return s}function oi(s,a,l,d,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)oi(s,a[w],l,d,I);else d=f(d)?!!d.capture:!!d,l=ui(l),s&&s[En]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Vr(w,l,d,I),-1<l&&(vn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Dr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Vr(a,l,d,I)),(l=-1<s?a[s]:null)&&br(l))}function br(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[En])Pr(a.i,s);else{var l=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(l,d,s.capture):a.detachEvent?a.detachEvent(ai(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Dr(a))?(Pr(l,s),l.h==0&&(l.src=null,a[Cr]=null)):vn(s)}}}function ai(s){return s in Sr?Sr[s]:Sr[s]="on"+s}function el(s,a){if(s.da)s=!0;else{a=new Ue(a,this);var l=s.listener,d=s.ha||s.src;s.fa&&br(s),s=l.call(d,a)}return s}function Dr(s){return s=s[Cr],s instanceof In?s:null}var kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ui(s){return typeof s=="function"?s:(s[kr]||(s[kr]=function(a){return s.handleEvent(a)}),s[kr])}function ht(){qt.call(this),this.i=new In(this),this.M=this,this.F=null}b(ht,qt),ht.prototype[En]=!0,ht.prototype.removeEventListener=function(s,a,l,d){oi(this,s,a,l,d)};function _t(s,a){var l,d=s.F;if(d)for(l=[];d;d=d.F)l.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var I=a;a=new ct(d,s),y(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];I=An(S,d,!0,a)&&I}if(S=a.g=s,I=An(S,d,!0,a)&&I,I=An(S,d,!1,a)&&I,l)for(w=0;w<l.length;w++)S=a.g=l[w],I=An(S,d,!1,a)&&I}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],d=0;d<l.length;d++)vn(l[d]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,l,d){return this.i.add(String(s),a,!1,l,d)},ht.prototype.L=function(s,a,l,d){return this.i.add(String(s),a,!0,l,d)};function An(s,a,l,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var H=S.listener,ot=S.ha||S.src;S.fa&&Pr(s.i,S),I=H.call(ot,d)!==!1&&I}}return I&&!d.defaultPrevented}function li(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function ci(s){s.g=li(()=>{s.g=null,s.i&&(s.i=!1,ci(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class nl extends qt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ci(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(s){qt.call(this),this.h=s,this.g={}}b(qe,qt);var hi=[];function di(s){it(s.g,function(a,l){this.g.hasOwnProperty(l)&&br(a)},s),s.g={}}qe.prototype.N=function(){qe.aa.N.call(this),di(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nr=c.JSON.stringify,rl=c.JSON.parse,sl=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function xr(){}xr.prototype.h=null;function fi(s){return s.h||(s.h=s.i())}function mi(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mr(){ct.call(this,"d")}b(Mr,ct);function Or(){ct.call(this,"c")}b(Or,ct);var re={},pi=null;function wn(){return pi=pi||new ht}re.La="serverreachability";function gi(s){ct.call(this,re.La,s)}b(gi,ct);function je(s){const a=wn();_t(a,new gi(a))}re.STAT_EVENT="statevent";function _i(s,a){ct.call(this,re.STAT_EVENT,s),this.stat=a}b(_i,ct);function yt(s){const a=wn();_t(a,new _i(a,s))}re.Ma="timingevent";function yi(s,a){ct.call(this,re.Ma,s),this.size=a}b(yi,ct);function ze(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function $e(){this.g=!0}$e.prototype.xa=function(){this.g=!1};function il(s,a,l,d,I,w){s.info(function(){if(s.g)if(w)for(var S="",H=w.split("&"),ot=0;ot<H.length;ot++){var z=H[ot].split("=");if(1<z.length){var dt=z[0];z=z[1];var ft=dt.split("_");S=2<=ft.length&&ft[1]=="type"?S+(dt+"="+z+"&"):S+(dt+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+S})}function ol(s,a,l,d,I,w,S){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+S})}function fe(s,a,l,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+ul(s,l)+(d?" "+d:"")})}function al(s,a){s.info(function(){return"TIMEOUT: "+a})}$e.prototype.info=function(){};function ul(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var d=l[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<I.length;S++)I[S]=""}}}}return Nr(l)}catch{return a}}var Rn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Lr;function Pn(){}b(Pn,xr),Pn.prototype.g=function(){return new XMLHttpRequest},Pn.prototype.i=function(){return{}},Lr=new Pn;function Bt(s,a,l,d){this.j=s,this.i=a,this.l=l,this.R=d||1,this.U=new qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ei}function Ei(){this.i=null,this.g="",this.h=!1}var vi={},Fr={};function Ur(s,a,l){s.L=1,s.v=bn(xt(a)),s.m=l,s.P=!0,Ii(s,null)}function Ii(s,a){s.F=Date.now(),Vn(s),s.A=xt(s.v);var l=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),Oi(l.i,"t",d),s.C=0,l=s.j.J,s.h=new Ei,s.g=to(s.j,l?a:null,!s.m),0<s.O&&(s.M=new nl(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(hi[0]=I.toString()),I=hi);for(var w=0;w<I.length;w++){var S=ii(l,I[w],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),je(),il(s.i,s.u,s.A,s.l,s.R,s.m)}Bt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Mt(s)==3?a.j():this.Y(s)},Bt.prototype.Y=function(s){try{if(s==this.g)t:{const ft=Mt(this.g);var a=this.g.Ba();const ge=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||zi(this.g)))){this.J||ft!=4||a==7||(a==8||0>=ge?je(3):je(2)),qr(this);var l=this.g.Z();this.X=l;e:if(Ai(this)){var d=zi(this.g);s="";var I=d.length,w=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),Ge(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(w&&a==I-1)});d.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,ol(this.i,this.u,this.A,this.l,this.R,ft,l),this.o){if(this.T&&!this.K){e:{if(this.g){var H,ot=this.g;if((H=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(H)){var z=H;break e}}z=null}if(l=z)fe(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,l);else{this.o=!1,this.s=3,yt(12),se(this),Ge(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<S.length;)if(Rt=ll(this,S),Rt==Fr){ft==4&&(this.s=4,yt(14),l=!1),fe(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==vi){this.s=4,yt(15),fe(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else fe(this.i,this.l,Rt,null),Br(this,Rt);if(Ai(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||S.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)fe(this.i,this.l,S,"[Invalid Chunked Response]"),se(this),Ge(this);else if(0<S.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Hr(dt),dt.M=!0,yt(11))}}else fe(this.i,this.l,S,null),Br(this,S);ft==4&&se(this),this.o&&!this.J&&(ft==4?Xi(this.j,this):(this.o=!1,Vn(this)))}else Pl(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),se(this),Ge(this)}}}catch{}finally{}};function Ai(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ll(s,a){var l=s.C,d=a.indexOf(`
`,l);return d==-1?Fr:(l=Number(a.substring(l,d)),isNaN(l)?vi:(d+=1,d+l>a.length?Fr:(a=a.slice(d,d+l),s.C=d+l,a)))}Bt.prototype.cancel=function(){this.J=!0,se(this)};function Vn(s){s.S=Date.now()+s.I,wi(s,s.I)}function wi(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ze(R(s.ba,s),a)}function qr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Bt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(al(this.i,this.A),this.L!=2&&(je(),yt(17)),se(this),this.s=2,Ge(this)):wi(this,this.S-s)};function Ge(s){s.j.G==0||s.J||Xi(s.j,s)}function se(s){qr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,di(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Br(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||jr(l.h,s))){if(!s.K&&jr(l.h,s)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)On(l),xn(l);else break t;Kr(l),yt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=ze(R(l.Za,l),6e3));if(1>=Vi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else oe(l,11)}else if((s.K||l.g==s)&&On(l),!j(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let z=I[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const dt=z[3];dt!=null&&(l.la=dt,l.j.info("VER="+l.la));const ft=z[4];ft!=null&&(l.Aa=ft,l.j.info("SVER="+l.Aa));const ge=z[5];ge!=null&&typeof ge=="number"&&0<ge&&(d=1.5*ge,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Rt=s.g;if(Rt){const Fn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var w=d.h;w.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(zr(w,w.h),w.h=null))}if(d.D){const Qr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qr&&(d.ya=Qr,Q(d.I,d.D,Qr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var S=s;if(d.qa=Zi(d,d.J?d.ia:null,d.W),S.K){Ci(d.h,S);var H=S,ot=d.L;ot&&(H.I=ot),H.B&&(qr(H),Vn(H)),d.g=S}else Qi(d);0<l.i.length&&Mn(l)}else z[0]!="stop"&&z[0]!="close"||oe(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?oe(l,7):Gr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}je(4)}catch{}}var cl=class{constructor(s,a){this.g=s,this.map=a}};function Ri(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Vi(s){return s.h?1:s.g?s.g.size:0}function jr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function zr(s,a){s.g?s.g.add(a):s.h=a}function Ci(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Ri.prototype.cancel=function(){if(this.i=Si(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Si(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function hl(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,d=0;d<l;d++)a.push(s[d]);return a}a=[],l=0;for(d in s)a[l++]=s[d];return a}function dl(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const d in s)a[l++]=d;return a}}}function bi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=dl(s),d=hl(s),I=d.length,w=0;w<I;w++)a.call(void 0,d[w],l&&l[w],s)}var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fl(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var d=s[l].indexOf("="),I=null;if(0<=d){var w=s[l].substring(0,d);I=s[l].substring(d+1)}else w=s[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ie(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ie){this.h=s.h,Cn(this,s.j),this.o=s.o,this.g=s.g,Sn(this,s.s),this.l=s.l;var a=s.i,l=new Qe;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ki(this,l),this.m=s.m}else s&&(a=String(s).match(Di))?(this.h=!1,Cn(this,a[1]||"",!0),this.o=Ke(a[2]||""),this.g=Ke(a[3]||"",!0),Sn(this,a[4]),this.l=Ke(a[5]||"",!0),ki(this,a[6]||"",!0),this.m=Ke(a[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}ie.prototype.toString=function(){var s=[],a=this.j;a&&s.push(He(a,Ni,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(He(a,Ni,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(He(l,l.charAt(0)=="/"?gl:pl,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",He(l,yl)),s.join("")};function xt(s){return new ie(s)}function Cn(s,a,l){s.j=l?Ke(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Sn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ki(s,a,l){a instanceof Qe?(s.i=a,Tl(s.i,s.h)):(l||(a=He(a,_l)),s.i=new Qe(a,s.h))}function Q(s,a,l){s.i.set(a,l)}function bn(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ke(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function He(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,ml),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ml(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ni=/[#\/\?@]/g,pl=/[#\?:]/g,gl=/[#\?]/g,_l=/[#\?@]/g,yl=/#/g;function Qe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function jt(s){s.g||(s.g=new Map,s.h=0,s.i&&fl(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Qe.prototype,r.add=function(s,a){jt(this),this.i=null,s=me(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function xi(s,a){jt(s),a=me(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Mi(s,a){return jt(s),a=me(s,a),s.g.has(a)}r.forEach=function(s,a){jt(this),this.g.forEach(function(l,d){l.forEach(function(I){s.call(a,I,d,this)},this)},this)},r.na=function(){jt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=s[d];for(let w=0;w<I.length;w++)l.push(a[d])}return l},r.V=function(s){jt(this);let a=[];if(typeof s=="string")Mi(this,s)&&(a=a.concat(this.g.get(me(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return jt(this),this.i=null,s=me(this,s),Mi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Oi(s,a,l){xi(s,a),0<l.length&&(s.i=null,s.g.set(me(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var I=w;S[d]!==""&&(I+="="+encodeURIComponent(String(S[d]))),s.push(I)}}return this.i=s.join("&")};function me(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Tl(s,a){a&&!s.j&&(jt(s),s.i=null,s.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(xi(this,d),Oi(this,I,l))},s)),s.j=a}function El(s,a){const l=new $e;if(c.Image){const d=new Image;d.onload=C(zt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=C(zt,l,"TestLoadImage: error",!1,a,d),d.onabort=C(zt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=C(zt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function vl(s,a){const l=new $e,d=new AbortController,I=setTimeout(()=>{d.abort(),zt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(w=>{clearTimeout(I),w.ok?zt(l,"TestPingServer: ok",!0,a):zt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),zt(l,"TestPingServer: error",!1,a)})}function zt(s,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function Il(){this.g=new sl}function Al(s,a,l){const d=l||"";try{bi(s,function(I,w){let S=I;f(I)&&(S=Nr(I)),a.push(d+w+"="+encodeURIComponent(S))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function Dn(s){this.l=s.Ub||null,this.j=s.eb||!1}b(Dn,xr),Dn.prototype.g=function(){return new kn(this.l,this.j)},Dn.prototype.i=function(s){return function(){return s}}({});function kn(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(kn,ht),r=kn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Xe(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,We(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xe(this)),this.g&&(this.readyState=3,Xe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Li(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Li(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?We(this):Xe(this),this.readyState==3&&Li(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,We(this))},r.Qa=function(s){this.g&&(this.response=s,We(this))},r.ga=function(){this.g&&We(this)};function We(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xe(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Xe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Fi(s){let a="";return it(s,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function $r(s,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Fi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Q(s,a,l))}function Y(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Y,ht);var wl=/^https?$/i,Rl=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lr.g(),this.v=this.o?fi(this.o):fi(Lr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ui(this,w);return}if(s=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Rl,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ji(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ui(this,w)}};function Ui(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,qi(s),Nn(s)}function qi(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Bi(this):this.bb())},r.bb=function(){Bi(this)};function Bi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Mt(s)!=4||s.Z()!=2)){if(s.u&&Mt(s)==4)li(s.Ea,0,s);else if(_t(s,"readystatechange"),Mt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=S===0){var I=String(s.D).match(Di)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!wl.test(I?I.toLowerCase():"")}l=d}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var w=2<Mt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",qi(s)}}finally{Nn(s)}}}}function Nn(s,a){if(s.g){ji(s);const l=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=d}catch{}}}function ji(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Mt(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),rl(a)}};function zi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Pl(s){const a={};s=(s.g&&2<=Mt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(j(s[d]))continue;var l=E(s[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}v(a,function(d){return d.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ye(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function $i(s){this.Aa=0,this.i=[],this.j=new $e,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ye("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ye("baseRetryDelayMs",5e3,s),this.cb=Ye("retryDelaySeedMs",1e4,s),this.Wa=Ye("forwardChannelMaxRetries",2,s),this.wa=Ye("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(s&&s.concurrentRequestLimit),this.Da=new Il,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=$i.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,d){yt(0),this.W=s,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Zi(this,null,this.W),Mn(this)};function Gr(s){if(Gi(s),s.G==3){var a=s.U++,l=xt(s.I);if(Q(l,"SID",s.K),Q(l,"RID",a),Q(l,"TYPE","terminate"),Je(s,l),a=new Bt(s,s.j,a),a.L=2,a.v=bn(xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=to(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Vn(a)}Ji(s)}function xn(s){s.g&&(Hr(s),s.g.cancel(),s.g=null)}function Gi(s){xn(s),s.u&&(c.clearTimeout(s.u),s.u=null),On(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Mn(s){if(!Pi(s.h)&&!s.s){s.s=!0;var a=s.Ga;Le||si(),Fe||(Le(),Fe=!0),Rr.add(a,s),s.B=0}}function Vl(s,a){return Vi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ze(R(s.Ga,s,a),Yi(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Bt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Hi(this,I,a),l=xt(this.I),Q(l,"RID",s),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),Je(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Fi(w)))+"&"+a:this.m&&$r(l,this.m,w)),zr(this.h,I),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",a),Q(l,"SID","null"),I.T=!0,Ur(I,l,null)):Ur(I,l,a),this.G=2}}else this.G==3&&(s?Ki(this,s):this.i.length==0||Pi(this.h)||Ki(this))};function Ki(s,a){var l;a?l=a.l:l=s.U++;const d=xt(s.I);Q(d,"SID",s.K),Q(d,"RID",l),Q(d,"AID",s.T),Je(s,d),s.m&&s.o&&$r(d,s.m,s.o),l=new Bt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Hi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),zr(s.h,l),Ur(l,d,a)}function Je(s,a){s.H&&it(s.H,function(l,d){Q(a,d,l)}),s.l&&bi({},function(l,d){Q(a,d,l)})}function Hi(s,a,l){l=Math.min(s.i.length,l);var d=s.l?R(s.l.Na,s.l,s):null;t:{var I=s.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=I[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let H=!0;for(let ot=0;ot<l;ot++){let z=I[ot].g;const dt=I[ot].map;if(z-=w,0>z)w=Math.max(0,I[ot].g-100),H=!1;else try{Al(dt,S,"req"+z+"_")}catch{d&&d(dt)}}if(H){d=S.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,d}function Qi(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Le||si(),Fe||(Le(),Fe=!0),Rr.add(a,s),s.v=0}}function Kr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ze(R(s.Fa,s),Yi(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Wi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ze(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),xn(this),Wi(this))};function Hr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Wi(s){s.g=new Bt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=xt(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),Je(s,a),s.m&&s.o&&$r(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=bn(xt(a)),l.m=null,l.P=!0,Ii(l,s)}r.Za=function(){this.C!=null&&(this.C=null,xn(this),Kr(this),yt(19))};function On(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function Xi(s,a){var l=null;if(s.g==a){On(s),Hr(s),s.g=null;var d=2}else if(jr(s.h,a))l=a.D,Ci(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;d=wn(),_t(d,new yi(d,l)),Mn(s)}else Qi(s);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&Vl(s,a)||d==2&&Kr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:oe(s,5);break;case 4:oe(s,10);break;case 3:oe(s,6);break;default:oe(s,2)}}}function Yi(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function oe(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),d=s.Xa;const I=!d;d=new ie(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Cn(d,"https"),bn(d),I?El(d.toString(),l):vl(d.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Ji(s),Gi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Ji(s){if(s.G=0,s.ka=[],s.l){const a=Si(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Zi(s,a,l){var d=l instanceof ie?xt(l):new ie(l);if(d.g!="")a&&(d.g=a+"."+d.g),Sn(d,d.s);else{var I=c.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new ie(null);d&&Cn(w,d),a&&(w.g=a),I&&Sn(w,I),l&&(w.l=l),d=w}return l=s.D,a=s.ya,l&&a&&Q(d,l,a),Q(d,"VER",s.la),Je(s,d),d}function to(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Dn({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function eo(){}r=eo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ln(){}Ln.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ht.call(this),this.g=new $i(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!j(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new pe(this)}b(vt,ht),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Gr(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Nr(s),s=l);a.i.push(new cl(a.Ya++,s)),a.G==3&&Mn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Gr(this.g),delete this.g,vt.aa.N.call(this)};function no(s){Mr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}b(no,Mr);function ro(){Or.call(this),this.status=1}b(ro,Or);function pe(s){this.g=s}b(pe,eo),pe.prototype.ua=function(){_t(this.g,"a")},pe.prototype.ta=function(s){_t(this.g,new no(s))},pe.prototype.sa=function(s){_t(this.g,new ro)},pe.prototype.ra=function(){_t(this.g,"b")},Ln.prototype.createWebChannel=Ln.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,ma=function(){return new Ln},fa=function(){return wn()},da=re,es={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rn.NO_ERROR=0,Rn.TIMEOUT=8,Rn.HTTP_ERROR=6,Gn=Rn,Ti.COMPLETE="complete",ha=Ti,mi.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Ze=mi,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,ca=Y}).apply(typeof Un<"u"?Un:typeof self<"u"?self:typeof window<"u"?window:{});const oo="@firebase/firestore",ao="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let De="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Cl("@firebase/firestore");function Te(){return ue.logLevel}function k(r,...t){if(ue.logLevel<=Ot.DEBUG){const e=t.map(Es);ue.debug(`Firestore (${De}): ${r}`,...e)}}function Ft(r,...t){if(ue.logLevel<=Ot.ERROR){const e=t.map(Es);ue.error(`Firestore (${De}): ${r}`,...e)}}function we(r,...t){if(ue.logLevel<=Ot.WARN){const e=t.map(Es);ue.warn(`Firestore (${De}): ${r}`,...e)}}function Es(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,pa(r,n,e)}function pa(r,t,e){let n=`FIRESTORE (${De}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Ft(n),new Error(n)}function G(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||pa(t,i,n)}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends kl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Kl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class Hl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ql{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let n=this.i;const i=h=>this.i!==n?(n=this.i,e(h)):Promise.resolve();let o=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Kt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new ga(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new pt(t)}}class Wl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Xl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Wl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Dl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new uo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new uo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=Jl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function ns(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=_a(),u=Zl(o.encode(lo(r,e)),o.encode(lo(t,e)));return u!==0?u:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function lo(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Zl(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function Re(r,t,e){return r.length===t.length&&r.every((n,i)=>e(n,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=-62135596800,ho=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(t){return et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*ho);return new et(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<co)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ho}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-co;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new et(0,0))}static max(){return new L(new et(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="__name__";class Ct{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ct.isNumericId(t),i=Ct.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):ns(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Gt.fromString(t.substring(4,t.length-2))}}class W extends Ct{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const tc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Ct{construct(t,e,n){return new ut(t,e,n)}static isValidIdentifier(t){return tc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fo}static keyField(){return new ut([fo])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=-1;function ec(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new et(e+1,0):new et(e,n));return new Qt(i,M.empty(),t)}function nc(r){return new Qt(r.readTime,r.key,un)}class Qt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Qt(L.min(),M.empty(),un)}static max(){return new Qt(L.max(),M.empty(),un)}}function rc(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ic{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ke(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==sc)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,n)=>{e(t)})}static reject(t){return new V((e,n)=>{n(t)})}static waitFor(t){return new V((e,n)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>n(h))}),u=!0,o===i&&e()})}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next(i=>i?V.resolve(i):n());return e}static forEach(t,e){const n=[];return t.forEach((i,o)=>{n.push(e.call(this,i,o))}),this.waitFor(n)}static mapArray(t,e){return new V((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(m=>{u[f]=m,++c,c===o&&n(u)},m=>i(m))}})}static doWhile(t,e){return new V((n,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):n()};o()})}}function oc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ne(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>e.writeSequenceNumber(n))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ur.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=-1;function lr(r){return r==null}function Yn(r){return r===0&&1/r==-1/0}function ac(r){return typeof r=="number"&&Number.isInteger(r)&&!Yn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="";function uc(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=mo(t)),t=lc(r.get(e),t);return mo(t)}function lc(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case Ta:e+="";break;default:e+=o}}return e}function mo(r){return r+Ta+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function te(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ea(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qn(this.root,t,this.comparator,!0)}}class qn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new at(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new go(this.data.getIterator())}getIteratorFrom(t){return new go(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof nt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new nt(this.comparator);return e.data=t,e}}class go{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new It([])}unionWith(t){let e=new nt(ut.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Re(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new va("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const cc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(r){if(G(!!r,39018),typeof r=="string"){let t=0;const e=cc.exec(r);if(G(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Xt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="server_timestamp",Aa="__type__",wa="__previous_value__",Ra="__local_write_time__";function Is(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Aa])===null||e===void 0?void 0:e.stringValue)===Ia}function cr(r){const t=r.mapValue.fields[wa];return Is(t)?cr(t):t}function ln(r){const t=Wt(r.mapValue.fields[Ra].timestampValue);return new et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,n,i,o,u,c,h,f,m){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=m}}const Jn="(default)";class cn{constructor(t,e){this.projectId=t,this.database=e||Jn}static empty(){return new cn("","")}get isDefaultDatabase(){return this.database===Jn}isEqual(t){return t instanceof cn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="__type__",dc="__max__",Bn={mapValue:{}},Va="__vector__",Zn="value";function Yt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Is(r)?4:mc(r)?9007199254740991:fc(r)?10:11:O(28295,{value:r})}function Dt(r,t){if(r===t)return!0;const e=Yt(r);if(e!==Yt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return ln(r).isEqual(ln(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Wt(i.timestampValue),c=Wt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(i,o){return Xt(i.bytesValue).isEqual(Xt(o.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(r,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),c=J(o.doubleValue);return u===c?Yn(u)===Yn(c):isNaN(u)&&isNaN(c)}return!1}(r,t);case 9:return Re(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(po(u)!==po(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Dt(u[h],c[h])))return!1;return!0}(r,t);default:return O(52216,{left:r})}}function hn(r,t){return(r.values||[]).find(e=>Dt(e,t))!==void 0}function Pe(r,t){if(r===t)return 0;const e=Yt(r),n=Yt(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),h=J(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(r,t);case 3:return _o(r.timestampValue,t.timestampValue);case 4:return _o(ln(r),ln(t));case 5:return ns(r.stringValue,t.stringValue);case 6:return function(o,u){const c=Xt(o),h=Xt(u);return c.compareTo(h)}(r.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const m=U(c[f],h[f]);if(m!==0)return m}return U(c.length,h.length)}(r.referenceValue,t.referenceValue);case 8:return function(o,u){const c=U(J(o.latitude),J(u.latitude));return c!==0?c:U(J(o.longitude),J(u.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return yo(r.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,m;const T=o.fields||{},R=u.fields||{},C=(c=T[Zn])===null||c===void 0?void 0:c.arrayValue,b=(h=R[Zn])===null||h===void 0?void 0:h.arrayValue,x=U(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((m=b==null?void 0:b.values)===null||m===void 0?void 0:m.length)||0);return x!==0?x:yo(C,b)}(r.mapValue,t.mapValue);case 11:return function(o,u){if(o===Bn.mapValue&&u===Bn.mapValue)return 0;if(o===Bn.mapValue)return 1;if(u===Bn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},m=Object.keys(f);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const R=ns(h[T],m[T]);if(R!==0)return R;const C=Pe(c[h[T]],f[m[T]]);if(C!==0)return C}return U(h.length,m.length)}(r.mapValue,t.mapValue);default:throw O(23264,{Pe:e})}}function _o(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Wt(r),n=Wt(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function yo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Pe(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Ve(r){return rs(r)}function rs(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=Wt(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Xt(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return M.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=rs(o);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${rs(e.fields[u])}`;return i+"}"}(r.mapValue):O(61005,{value:r})}function Kn(r){switch(Yt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=cr(r);return t?16+Kn(t):16;case 5:return 2*r.stringValue.length;case 6:return Xt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((i,o)=>i+Kn(o),0)}(r.arrayValue);case 10:case 11:return function(n){let i=0;return te(n.fields,(o,u)=>{i+=o.length+Kn(u)}),i}(r.mapValue);default:throw O(13486,{value:r})}}function To(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function ss(r){return!!r&&"integerValue"in r}function As(r){return!!r&&"arrayValue"in r}function Eo(r){return!!r&&"nullValue"in r}function vo(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Hn(r){return!!r&&"mapValue"in r}function fc(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[Pa])===null||e===void 0?void 0:e.stringValue)===Va}function rn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return te(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=rn(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function mc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===dc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Hn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rn(e)}setAll(t){let e=ut.emptyPath(),n={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=rn(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Hn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Hn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){te(e,(i,o)=>t[i]=o);for(const i of n)delete t[i]}clone(){return new Et(rn(this.value))}}function Ca(r){const t=[];return te(r.fields,(e,n)=>{const i=new ut([e]);if(Hn(n)){const o=Ca(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,L.min(),L.min(),L.min(),Et.empty(),0)}static newFoundDocument(t,e,n,i){return new gt(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new gt(t,2,e,L.min(),L.min(),Et.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,L.min(),L.min(),Et.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.position=t,this.inclusive=e}}function Io(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=M.comparator(M.fromName(u.referenceValue),e.key):n=Pe(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ao(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e="asc"){this.field=t,this.dir=e}}function pc(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{}class tt extends Sa{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new _c(t,e,n):e==="array-contains"?new Ec(t,n):e==="in"?new vc(t,n):e==="not-in"?new Ic(t,n):e==="array-contains-any"?new Ac(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new yc(t,n):new Tc(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Pe(e,this.value)):e!==null&&Yt(this.value)===Yt(e)&&this.matchesComparison(Pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends Sa{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Vt(t,e)}matches(t){return ba(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function ba(r){return r.op==="and"}function Da(r){return gc(r)&&ba(r)}function gc(r){for(const t of r.filters)if(t instanceof Vt)return!1;return!0}function is(r){if(r instanceof tt)return r.field.canonicalString()+r.op.toString()+Ve(r.value);if(Da(r))return r.filters.map(t=>is(t)).join(",");{const t=r.filters.map(e=>is(e)).join(",");return`${r.op}(${t})`}}function ka(r,t){return r instanceof tt?function(n,i){return i instanceof tt&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)}(r,t):r instanceof Vt?function(n,i){return i instanceof Vt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((o,u,c)=>o&&ka(u,i.filters[c]),!0):!1}(r,t):void O(19439)}function Na(r){return r instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(r):r instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(Na).join(" ,")+"}"}(r):"Filter"}class _c extends tt{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class yc extends tt{constructor(t,e){super(t,"in",e),this.keys=xa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tc extends tt{constructor(t,e){super(t,"not-in",e),this.keys=xa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function xa(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>M.fromName(n.referenceValue))}class Ec extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return As(e)&&hn(e.arrayValue,this.value)}}class vc extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&hn(this.value.arrayValue,e)}}class Ic extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(hn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!hn(this.value.arrayValue,e)}}class Ac extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!As(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>hn(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Ie=null}}function wo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new wc(r,t,e,n,i,o,u)}function ws(r){const t=F(r);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>is(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),lr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ve(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ve(n)).join(",")),t.Ie=e}return t.Ie}function Rs(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!pc(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!ka(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Ao(r.startAt,t.startAt)&&Ao(r.endAt,t.endAt)}function os(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Rc(r,t,e,n,i,o,u,c){return new xe(r,t,e,n,i,o,u,c)}function Ps(r){return new xe(r)}function Ro(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ma(r){return r.collectionGroup!==null}function sn(r){const t=F(r);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new nt(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new dn(o,n))}),e.has(ut.keyField().canonicalString())||t.Ee.push(new dn(ut.keyField(),n))}return t.Ee}function St(r){const t=F(r);return t.de||(t.de=Pc(t,sn(r))),t.de}function Pc(r,t){if(r.limitType==="F")return wo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new dn(i.field,o)});const e=r.endAt?new tr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new tr(r.startAt.position,r.startAt.inclusive):null;return wo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function as(r,t){const e=r.filters.concat([t]);return new xe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function us(r,t,e){return new xe(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function hr(r,t){return Rs(St(r),St(t))&&r.limitType===t.limitType}function Oa(r){return`${ws(St(r))}|lt:${r.limitType}`}function Ee(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>Na(i)).join(", ")}]`),lr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>Ve(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>Ve(i)).join(",")),`Target(${n})`}(St(r))}; limitType=${r.limitType})`}function dr(r,t){return t.isFoundDocument()&&function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(r,t)&&function(n,i){for(const o of sn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(r,t)&&function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0}(r,t)&&function(n,i){return!(n.startAt&&!function(u,c,h){const f=Io(u,c,h);return u.inclusive?f<=0:f<0}(n.startAt,sn(n),i)||n.endAt&&!function(u,c,h){const f=Io(u,c,h);return u.inclusive?f>=0:f>0}(n.endAt,sn(n),i))}(r,t)}function Vc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function La(r){return(t,e)=>{let n=!1;for(const i of sn(r)){const o=Cc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Cc(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?Pe(h,f):O(42886)}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){te(this.inner,(e,n)=>{for(const[i,o]of n)t(i,o)})}isEmpty(){return Ea(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new X(M.comparator);function Ut(){return Sc}const Fa=new X(M.comparator);function tn(...r){let t=Fa;for(const e of r)t=t.insert(e.key,e);return t}function Ua(r){let t=Fa;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ae(){return on()}function qa(){return on()}function on(){return new he(r=>r.toString(),(r,t)=>r.isEqual(t))}const bc=new X(M.comparator),Dc=new nt(M.comparator);function q(...r){let t=Dc;for(const e of r)t=t.add(e);return t}const kc=new nt(U);function Nc(){return kc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yn(t)?"-0":t}}function Ba(r){return{integerValue:""+r}}function xc(r,t){return ac(t)?Ba(t):Vs(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this._=void 0}}function Mc(r,t,e){return r instanceof er?function(i,o){const u={fields:{[Aa]:{stringValue:Ia},[Ra]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Is(o)&&(o=cr(o)),o&&(u.fields[wa]=o),{mapValue:u}}(e,t):r instanceof fn?za(r,t):r instanceof mn?$a(r,t):function(i,o){const u=ja(i,o),c=Po(u)+Po(i.Re);return ss(u)&&ss(i.Re)?Ba(c):Vs(i.serializer,c)}(r,t)}function Oc(r,t,e){return r instanceof fn?za(r,t):r instanceof mn?$a(r,t):e}function ja(r,t){return r instanceof nr?function(n){return ss(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class er extends fr{}class fn extends fr{constructor(t){super(),this.elements=t}}function za(r,t){const e=Ga(t);for(const n of r.elements)e.some(i=>Dt(i,n))||e.push(n);return{arrayValue:{values:e}}}class mn extends fr{constructor(t){super(),this.elements=t}}function $a(r,t){let e=Ga(t);for(const n of r.elements)e=e.filter(i=>!Dt(i,n));return{arrayValue:{values:e}}}class nr extends fr{constructor(t,e){super(),this.serializer=t,this.Re=e}}function Po(r){return J(r.integerValue||r.doubleValue)}function Ga(r){return As(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Lc(r,t){return r.field.isEqual(t.field)&&function(n,i){return n instanceof fn&&i instanceof fn||n instanceof mn&&i instanceof mn?Re(n.elements,i.elements,Dt):n instanceof nr&&i instanceof nr?Dt(n.Re,i.Re):n instanceof er&&i instanceof er}(r.transform,t.transform)}class Fc{constructor(t,e){this.version=t,this.transformResults=e}}class At{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new At}static exists(t){return new At(void 0,t)}static updateTime(t){return new At(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Qn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class mr{}function Ka(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new pr(r.key,At.none()):new pn(r.key,r.data,At.none());{const e=r.data,n=Et.empty();let i=new nt(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ee(r.key,n,new It(i.toArray()),At.none())}}function Uc(r,t,e){r instanceof pn?function(i,o,u){const c=i.value.clone(),h=Co(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(r,t,e):r instanceof ee?function(i,o,u){if(!Qn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Co(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Ha(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(r,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function an(r,t,e,n){return r instanceof pn?function(o,u,c,h){if(!Qn(o.precondition,u))return c;const f=o.value.clone(),m=So(o.fieldTransforms,h,u);return f.setAll(m),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(r,t,e,n):r instanceof ee?function(o,u,c,h){if(!Qn(o.precondition,u))return c;const f=So(o.fieldTransforms,h,u),m=u.data;return m.setAll(Ha(o)),m.setAll(f),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(r,t,e,n):function(o,u,c){return Qn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(r,t,e)}function qc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ja(n.transform,i||null);o!=null&&(e===null&&(e=Et.empty()),e.set(n.field,o))}return e||null}function Vo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Re(n,i,(o,u)=>Lc(o,u))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class pn extends mr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ee extends mr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ha(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function Co(r,t,e){const n=new Map;G(r.length===e.length,32656,{Ve:e.length,me:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,Oc(u,c,e[i]))}return n}function So(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,Mc(o,u,t))}return n}class pr extends mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bc extends mr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Uc(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=an(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=an(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=qa();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=Ka(u,c);h!==null&&n.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Re(this.mutations,t.mutations,(e,n)=>Vo(e,n))&&Re(this.baseMutations,t.baseMutations,(e,n)=>Vo(e,n))}}class Cs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length,58842,{fe:t.mutations.length,ge:n.length});let i=function(){return bc}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Cs(t,e,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,B;function Gc(r){switch(r){case P.OK:return O(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return O(15467,{code:r})}}function Qa(r){if(r===void 0)return Ft("GRPC error has no .code"),P.UNKNOWN;switch(r){case Z.OK:return P.OK;case Z.CANCELLED:return P.CANCELLED;case Z.UNKNOWN:return P.UNKNOWN;case Z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Z.INTERNAL:return P.INTERNAL;case Z.UNAVAILABLE:return P.UNAVAILABLE;case Z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Z.NOT_FOUND:return P.NOT_FOUND;case Z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Z.ABORTED:return P.ABORTED;case Z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Z.DATA_LOSS:return P.DATA_LOSS;default:return O(39323,{code:r})}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new Gt([4294967295,4294967295],0);function bo(r){const t=_a().encode(r),e=new la;return e.update(t),new Uint8Array(e.digest())}function Do(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Gt([e,n],0),new Gt([i,o],0)]}class Ss{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new en(`Invalid padding: ${e}`);if(n<0)throw new en(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new en(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new en(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=Gt.fromNumber(this.pe)}we(t,e,n){let i=t.add(e.multiply(Gt.fromNumber(n)));return i.compare(Kc)===1&&(i=new Gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=bo(t),[n,i]=Do(e);for(let o=0;o<this.hashCount;o++){const u=this.we(n,i,o);if(!this.Se(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ss(o,i,e);return n.forEach(c=>u.insert(c)),u}insert(t){if(this.pe===0)return;const e=bo(t),[n,i]=Do(e);for(let o=0;o<this.hashCount;o++){const u=this.we(n,i,o);this.be(u)}}be(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class en extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,gn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new gr(L.min(),i,new X(U),Ut(),q())}}class gn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new gn(n,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e,n,i){this.De=t,this.removedTargetIds=e,this.key=n,this.ve=i}}class Wa{constructor(t,e){this.targetId=t,this.Ce=e}}class Xa{constructor(t,e,n=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ko{constructor(){this.Fe=0,this.Me=No(),this.xe=lt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=q(),e=q(),n=q();return this.Me.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:O(38017,{changeType:o})}}),new gn(this.xe,this.Oe,t,e,n)}Qe(){this.Ne=!1,this.Me=No()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,G(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Hc{constructor(t){this.ze=t,this.je=new Map,this.He=Ut(),this.Je=jn(),this.Ye=jn(),this.Ze=new X(U)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const n=this.rt(e);switch(t.state){case 0:this.it(e)&&n.ke(t.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(t.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(e);break;case 3:this.it(e)&&(n.Ge(),n.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),n.ke(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((n,i)=>{this.it(i)&&e(i)})}ot(t){const e=t.targetId,n=t.Ce.count,i=this._t(e);if(i){const o=i.target;if(os(o))if(n===0){const u=new M(o.path);this.tt(e,u,gt.newNoDocument(u,L.min()))}else G(n===1,20013,{expectedCount:n});else{const u=this.ut(e);if(u!==n){const c=this.ct(t),h=c?this.lt(c,t,u):1;if(h!==0){this.st(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,f)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Xt(n).toUint8Array()}catch(h){if(h instanceof va)return we("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Ss(u,i,o)}catch(h){return we(h instanceof en?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(t,e,n){return e.Ce.count===n-this.Tt(t,e.targetId)?0:2}Tt(t,e){const n=this.ze.getRemoteKeysForTarget(e);let i=0;return n.forEach(o=>{const u=this.ze.Pt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.tt(e,o,null),i++)}),i}It(t){const e=new Map;this.je.forEach((o,u)=>{const c=this._t(u);if(c){if(o.current&&os(c.target)){const h=new M(c.target.path);this.Et(h).has(u)||this.dt(u,h)||this.tt(u,h,gt.newNoDocument(h,t))}o.Le&&(e.set(u,o.qe()),o.Qe())}});let n=q();this.Ye.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this._t(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(o))}),this.He.forEach((o,u)=>u.setReadTime(t));const i=new gr(t,e,this.Ze,this.He,n);return this.He=Ut(),this.Je=jn(),this.Ye=jn(),this.Ze=new X(U),i}et(t,e){if(!this.it(t))return;const n=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,n),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,n){if(!this.it(t))return;const i=this.rt(t);this.dt(t,e)?i.$e(e,1):i.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),n&&(this.He=this.He.insert(e,n))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new ko,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new nt(U),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new nt(U),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new ko),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function jn(){return new X(M.comparator)}function No(){return new X(M.comparator)}const Qc={asc:"ASCENDING",desc:"DESCENDING"},Wc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xc={and:"AND",or:"OR"};class Yc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ls(r,t){return r.useProto3Json||lr(t)?t:{value:t}}function rr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ya(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Jc(r,t){return rr(r,t.toTimestamp())}function bt(r){return G(!!r,49232),L.fromTimestamp(function(e){const n=Wt(e);return new et(n.seconds,n.nanos)}(r))}function bs(r,t){return cs(r,t).canonicalString()}function cs(r,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Ja(r){const t=W.fromString(r);return G(ru(t),10190,{key:t.toString()}),t}function hs(r,t){return bs(r.databaseId,t.path)}function Wr(r,t){const e=Ja(t);if(e.get(1)!==r.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(tu(e))}function Za(r,t){return bs(r.databaseId,t)}function Zc(r){const t=Ja(r);return t.length===4?W.emptyPath():tu(t)}function ds(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tu(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function xo(r,t,e){return{name:hs(r,t),fields:e.value.mapValue.fields}}function th(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O(39313,{state:f})}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,m){return f.useProto3Json?(G(m===void 0||typeof m=="string",58123),lt.fromBase64String(m||"")):(G(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),lt.fromUint8Array(m||new Uint8Array))}(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const m=f.code===void 0?P.UNKNOWN:Qa(f.code);return new N(m,f.message||"")}(u);e=new Xa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Wr(r,n.document.name),o=bt(n.document.updateTime),u=n.document.createTime?bt(n.document.createTime):L.min(),c=new Et({mapValue:{fields:n.document.fields}}),h=gt.newFoundDocument(i,o,u,c),f=n.targetIds||[],m=n.removedTargetIds||[];e=new Wn(f,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Wr(r,n.document),o=n.readTime?bt(n.readTime):L.min(),u=gt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Wn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Wr(r,n.document),o=n.removedTargetIds||[];e=new Wn([],o,i,null)}else{if(!("filter"in t))return O(11601,{Vt:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new $c(i,o),c=n.targetId;e=new Wa(c,u)}}return e}function eh(r,t){let e;if(t instanceof pn)e={update:xo(r,t.key,t.value)};else if(t instanceof pr)e={delete:hs(r,t.key)};else if(t instanceof ee)e={update:xo(r,t.key,t.data),updateMask:ch(t.fieldMask)};else{if(!(t instanceof Bc))return O(16599,{ft:t.type});e={verify:hs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(o,u){const c=u.transform;if(c instanceof er)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof nr)return{fieldPath:u.field.canonicalString(),increment:c.Re};throw O(20930,{transform:u.transform})}(0,n))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Jc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O(27497)}(r,t.precondition)),e}function nh(r,t){return r&&r.length>0?(G(t!==void 0,14353),r.map(e=>function(i,o){let u=i.updateTime?bt(i.updateTime):bt(o);return u.isEqual(L.min())&&(u=bt(o)),new Fc(u,i.transformResults||[])}(e,t))):[]}function rh(r,t){return{documents:[Za(r,t.path)]}}function sh(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Za(r,i);const o=function(f){if(f.length!==0)return nu(Vt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(m=>function(R){return{field:ve(R.field),direction:ah(R.dir)}}(m))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ls(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{gt:e,parent:i}}function ih(r){let t=Zc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1,65062);const m=e.from[0];m.allDescendants?i=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const R=eu(T);return R instanceof Vt&&Da(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(T){return T.map(R=>function(b){return new dn(Ie(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(T){let R;return R=typeof T=="object"?T.value:T,lr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(T){const R=!!T.before,C=T.values||[];return new tr(C,R)}(e.startAt));let f=null;return e.endAt&&(f=function(T){const R=!T.before,C=T.values||[];return new tr(C,R)}(e.endAt)),Rc(t,i,u,o,c,"F",h,f)}function oh(r,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:i})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function eu(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ie(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ie(e.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ie(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ie(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(r):r.fieldFilter!==void 0?function(e){return tt.create(Ie(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(n=>eu(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(e.compositeFilter.op))}(r):O(30097,{filter:r})}function ah(r){return Qc[r]}function uh(r){return Wc[r]}function lh(r){return Xc[r]}function ve(r){return{fieldPath:r.canonicalString()}}function Ie(r){return ut.fromServerFormat(r.fieldPath)}function nu(r){return r instanceof tt?function(e){if(e.op==="=="){if(vo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NAN"}};if(Eo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NAN"}};if(Eo(e.value))return{unaryFilter:{field:ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ve(e.field),op:uh(e.op),value:e.value}}}(r):r instanceof Vt?function(e){const n=e.getFilters().map(i=>nu(i));return n.length===1?n[0]:{compositeFilter:{op:lh(e.op),filters:n}}}(r):O(54877,{filter:r})}function ch(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ru(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,n,i,o=L.min(),u=L.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t){this.wt=t}}function dh(r){const t=ih({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?us(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.Cn=new mh}addToCollectionParentIndex(t,e){return this.Cn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Qt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class mh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new nt(W.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new nt(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},su=41943040;class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(su,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ce(0)}static lr(){return new Ce(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="LruGarbageCollector",ph=1048576;function Lo([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class gh{constructor(t){this.Er=t,this.buffer=new nt(Lo),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Lo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class _h{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){k(Oo,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ne(e)?k(Oo,"Ignoring IndexedDB error during garbage collection: ",e):await ke(e)}await this.mr(3e5)})}}class yh{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return V.resolve(ur.le);const n=new gh(e);return this.gr.forEachTarget(t,i=>n.Rr(i.sequenceNumber)).next(()=>this.gr.yr(t,i=>n.Rr(i))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.gr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Mo)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mo):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let n,i,o,u,c,h,f;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),i=this.params.maximumSequenceNumbersToCollect):i=T,u=Date.now(),this.nthSequenceNumber(t,i))).next(T=>(n=T,c=Date.now(),this.removeTargets(t,n,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,n))).next(T=>(f=Date.now(),Te()<=Ot.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-m}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${T} documents in `+(f-h)+`ms
Total Duration: ${f-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:T})))}}function Th(r,t){return new yh(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.changes=new he(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(n!==null&&an(n.mutation,i,It.empty(),et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,q()).next(()=>n))}getLocalViewOfDocuments(t,e,n=q()){const i=ae();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(o=>{let u=tn();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=ae();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,q()))}populateOverlays(t,e,n){const i=[];return n.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,n,i){let o=Ut();const u=on(),c=function(){return on()}();return e.forEach((h,f)=>{const m=n.get(f.key);i.has(f.key)&&(m===void 0||m.mutation instanceof ee)?o=o.insert(f.key,f):m!==void 0?(u.set(f.key,m.mutation.getFieldMask()),an(m.mutation,f,m.mutation.getFieldMask(),et.now())):u.set(f.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,m)=>u.set(f,m)),e.forEach((f,m)=>{var T;return c.set(f,new vh(m,(T=u.get(f))!==null&&T!==void 0?T:null))}),c))}recalculateAndSaveOverlays(t,e){const n=on();let i=new X((u,c)=>u-c),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let m=n.get(h)||It.empty();m=c.applyToLocalView(f,m),n.set(h,m);const T=(i.get(c.batchId)||q()).add(h);i=i.insert(c.batchId,T)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,m=h.value,T=qa();m.forEach(R=>{if(!o.has(R)){const C=Ka(e.get(R),n.get(R));C!==null&&T.set(R,C),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,T))}return V.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,i){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ma(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):V.resolve(ae());let c=un,h=o;return u.next(f=>V.forEach(f,(m,T)=>(c<T.largestBatchId&&(c=T.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(R=>{h=h.insert(m,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,q())).next(m=>({batchId:c,changes:Ua(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(n=>{let i=tn();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=tn();return this.indexManager.getCollectionParents(t,o).next(c=>V.forEach(c,h=>{const f=function(T,R){return new xe(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next(m=>{m.forEach((T,R)=>{u=u.insert(T,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i))).next(u=>{o.forEach((h,f)=>{const m=f.getKey();u.get(m)===null&&(u=u.insert(m,gt.newInvalidDocument(m)))});let c=tn();return u.forEach((h,f)=>{const m=o.get(h);m!==void 0&&an(m.mutation,f,It.empty(),et.now()),dr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return V.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(i){return{name:i.name,query:dh(i.bundledQuery),readTime:bt(i.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.overlays=new X(M.comparator),this.Qr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ae();return V.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&n.set(i,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((i,o)=>{this.bt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Qr.get(n);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const i=ae(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&i.set(h.getKey(),h)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new X((f,m)=>f-m);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let m=o.get(f.largestBatchId);m===null&&(m=ae(),o=o.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=ae(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,m)=>c.set(f,m)),!(c.size()>=i)););return V.resolve(c)}bt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.Qr.get(i.largestBatchId).delete(n.key);this.Qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new zc(e,n));let o=this.Qr.get(e);o===void 0&&(o=q(),this.Qr.set(e,o)),this.Qr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.$r=new nt(st.Ur),this.Kr=new nt(st.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const n=new st(t,e);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.zr(new st(t,e))}jr(t,e){t.forEach(n=>this.removeReference(n,e))}Hr(t){const e=new M(new W([])),n=new st(e,t),i=new st(e,t+1),o=[];return this.Kr.forEachInRange([n,i],u=>{this.zr(u),o.push(u.key)}),o}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new M(new W([])),n=new st(e,t),i=new st(e,t+1);let o=q();return this.Kr.forEachInRange([n,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new st(t,0),n=this.$r.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class st{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return M.comparator(t.key,e.key)||U(t.Zr,e.Zr)}static Wr(t,e){return U(t.Zr,e.Zr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new nt(st.Ur)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new jc(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Xr=this.Xr.add(new st(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ti(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?vs:this.nr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new st(e,0),i=new st(e,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([n,i],u=>{const c=this.ei(u.Zr);o.push(c)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new nt(U);return e.forEach(i=>{const o=new st(i,0),u=new st(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,u],c=>{n=n.add(c.Zr)})}),V.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const u=new st(new M(o),0);let c=new nt(U);return this.Xr.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(c=c.add(h.Zr)),!0)},u),V.resolve(this.ni(c))}ni(t){const e=[];return t.forEach(n=>{const i=this.ei(n);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){G(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return V.forEach(e.mutations,i=>{const o=new st(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Xr=n})}sr(t){}containsKey(t,e){const n=new st(e,0),i=this.Xr.firstAfterOrEqual(n);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t){this.ii=t,this.docs=function(){return new X(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ii(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let n=Ut();return e.forEach(i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Ut();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:m}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||rc(nc(m),n)<=0||(i.has(m.key)||dr(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,i){O(9500)}si(t,e){return V.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new Ch(this)}getSize(t){return V.resolve(this.size)}}class Ch extends Eh{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Br.addEntry(t,i)):this.Br.removeEntry(n)}),V.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t){this.persistence=t,this.oi=new he(e=>ws(e),Rs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this._i=0,this.ai=new Ds,this.targetCount=0,this.ui=Ce.cr()}forEachTarget(t,e){return this.oi.forEach((n,i)=>e(i)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this._i&&(this._i=e),V.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Ce(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Tr(e),V.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.oi.forEach((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.oi.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.oi.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.ai.Gr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.ai.jr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ai.Yr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){this.ci={},this.overlays={},this.li=new ur(0),this.hi=!1,this.hi=!0,this.Pi=new Rh,this.referenceDelegate=t(this),this.Ti=new Sh(this),this.indexManager=new fh,this.remoteDocumentCache=function(i){return new Vh(i)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new hh(e),this.Ei=new Ah(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new wh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ci[t.toKey()];return n||(n=new Ph(e,this.referenceDelegate),this.ci[t.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const i=new bh(this.li.next());return this.referenceDelegate.di(),n(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(t,e){return V.or(Object.values(this.ci).map(n=>()=>n.containsKey(t,e)))}}class bh extends ic{constructor(t){super(),this.currentSequenceNumber=t}}class ks{constructor(t){this.persistence=t,this.Vi=new Ds,this.mi=null}static fi(t){return new ks(t)}get gi(){if(this.mi)return this.mi;throw O(60996)}addReference(t,e,n){return this.Vi.addReference(n,e),this.gi.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Vi.removeReference(n,e),this.gi.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(i=>this.gi.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,n=>{const i=M.fromPath(n);return this.pi(t,i).next(o=>{o||e.removeEntry(i,L.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(n=>{n?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return V.or([()=>V.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class sr{constructor(t,e){this.persistence=t,this.yi=new he(n=>uc(n.path),(n,i)=>n.isEqual(i)),this.garbageCollector=Th(this,e)}static fi(t,e){return new sr(t,e)}di(){}Ai(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(i=>n+i))}Sr(t){let e=0;return this.yr(t,n=>{e++}).next(()=>e)}yr(t,e){return V.forEach(this.yi,(n,i)=>this.Dr(t,n,i).next(o=>o?V.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(t,u=>this.Dr(t,u,e).next(c=>{c||(n++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),V.resolve()}removeReference(t,e,n){return this.yi.set(n,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),V.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Kn(t.data.value)),e}Dr(t,e,n){return V.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.yi.get(e);return V.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ds=n,this.As=i}static Rs(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ns(t,e.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return ql()?8:oc(Bl())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ws(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Ss(t,e,i,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Dh;return this.bs(t,e,u).next(c=>{if(o.result=c,this.fs)return this.Ds(t,e,u,c.size)})}).next(()=>o.result)}Ds(t,e,n,i){return n.documentReadCount<this.gs?(Te()<=Ot.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ee(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(Te()<=Ot.DEBUG&&k("QueryEngine","Query:",Ee(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.ps*i?(Te()<=Ot.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ee(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):V.resolve())}ws(t,e){if(Ro(e))return V.resolve(null);let n=St(e);return this.indexManager.getIndexType(t,n).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=us(e,null,"F"),n=St(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=q(...o);return this.ys.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,n).next(h=>{const f=this.vs(e,c);return this.Cs(e,f,u,h.readTime)?this.ws(t,us(e,null,"F")):this.Fs(t,f,e,h)}))})))}Ss(t,e,n,i){return Ro(e)||i.isEqual(L.min())?V.resolve(null):this.ys.getDocuments(t,n).next(o=>{const u=this.vs(e,o);return this.Cs(e,u,n,i)?V.resolve(null):(Te()<=Ot.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ee(e)),this.Fs(t,u,e,ec(i,un)).next(c=>c))})}vs(t,e){let n=new nt(La(t));return e.forEach((i,o)=>{dr(t,o)&&(n=n.add(o))}),n}Cs(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(t,e,n){return Te()<=Ot.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ee(e)),this.ys.getDocumentsMatchingQuery(t,e,Qt.min(),n)}Fs(t,e,n,i){return this.ys.getDocumentsMatchingQuery(t,n,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="LocalStore",Nh=3e8;class xh{constructor(t,e,n,i){this.persistence=t,this.Ms=e,this.serializer=i,this.xs=new X(U),this.Os=new he(o=>ws(o),Rs),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(n)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ih(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function Mh(r,t,e,n){return new xh(r,t,e,n)}async function ou(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next(o=>(i=o,e.Ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],c=[];let h=q();for(const f of i){u.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}for(const f of o){c.push(f.batchId);for(const m of f.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(n,h).next(f=>({ks:f,removedBatchIds:u,addedBatchIds:c}))})})}function Oh(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=t.batch.keys(),o=e.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,f,m){const T=f.batch,R=T.keys();let C=V.resolve();return R.forEach(b=>{C=C.next(()=>m.getEntry(h,b)).next(x=>{const D=f.docVersions.get(b);G(D!==null,48541),x.version.compareTo(D)<0&&(T.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),m.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(h,T))}(e,n,t,o).next(()=>o.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let h=q();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(n,i))})}function au(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function Lh(r,t){const e=F(r),n=t.snapshotVersion;let i=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.Bs.newChangeBuffer({trackRemovals:!0});i=e.xs;const c=[];t.targetChanges.forEach((m,T)=>{const R=i.get(T);if(!R)return;c.push(e.Ti.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.Ti.addMatchingKeys(o,m.addedDocuments,T)));let C=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?C=C.withResumeToken(lt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,n)),i=i.insert(T,C),function(x,D,$){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Nh?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(R,C,m)&&c.push(e.Ti.updateTargetData(o,C))});let h=Ut(),f=q();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),c.push(Fh(o,u,t.documentUpdates).next(m=>{h=m.qs,f=m.Qs})),!n.isEqual(L.min())){const m=e.Ti.getLastRemoteSnapshotVersion(o).next(T=>e.Ti.setTargetsMetadata(o,o.currentSequenceNumber,n));c.push(m)}return V.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.xs=i,o))}function Fh(r,t,e){let n=q(),i=q();return e.forEach(o=>n=n.add(o)),t.getEntries(r,n).next(o=>{let u=Ut();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k(xs,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{qs:u,Qs:i}})}function Uh(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=vs),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function qh(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return e.Ti.getTargetData(n,t).next(o=>o?(i=o,V.resolve(i)):e.Ti.allocateTargetId(n).next(u=>(i=new $t(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ti.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=e.xs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.xs=e.xs.insert(n.targetId,n),e.Os.set(t,n.targetId)),n})}async function fs(r,t,e){const n=F(r),i=n.xs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Ne(u))throw u;k(xs,`Failed to update sequence numbers for target ${t}: ${u}`)}n.xs=n.xs.remove(t),n.Os.delete(i.target)}function Fo(r,t,e){const n=F(r);let i=L.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,m){const T=F(h),R=T.Os.get(m);return R!==void 0?V.resolve(T.xs.get(R)):T.Ti.getTargetData(f,m)}(n,u,St(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>n.Ms.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:q())).next(c=>(Bh(n,Vc(t),c),{documents:c,$s:o})))}function Bh(r,t,e){let n=r.Ns.get(t)||L.min();e.forEach((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),r.Ns.set(t,n)}class Uo{constructor(){this.activeTargetIds=Nc()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class jh{constructor(){this.xo=new Uo,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,n){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new Uo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="ConnectivityMonitor";class Bo{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){k(qo,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){k(qo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn=null;function ms(){return zn===null?zn=function(){return 268435456+Math.round(2147483648*Math.random())}():zn++,"0x"+zn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="RestConnection",$h={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gh{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${n}/databases/${i}`,this.Go=this.databaseId.database===Jn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}zo(t,e,n,i,o){const u=ms(),c=this.jo(t,e.toUriEncodedString());k(Xr,`Sending RPC '${t}' ${u}:`,c,n);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:f}=new URL(c),m=ua(f);return this.Jo(t,c,h,n,m).then(T=>(k(Xr,`Received RPC '${t}' ${u}: `,T),T),T=>{throw we(Xr,`RPC '${t}' ${u} failed with error: `,T,"url: ",c,"request:",n),T})}Yo(t,e,n,i,o,u){return this.zo(t,e,n,i,o)}Ho(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+De}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),n&&n.headers.forEach((i,o)=>t[o]=i)}jo(t,e){const n=$h[t];return`${this.Ko}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Hh extends Gh{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,o){const u=ms();return new Promise((c,h)=>{const f=new ca;f.setWithCredentials(!0),f.listenOnce(ha.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Gn.NO_ERROR:const T=f.getResponseJson();k(mt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(T)),c(T);break;case Gn.TIMEOUT:k(mt,`RPC '${t}' ${u} timed out`),h(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Gn.HTTP_ERROR:const R=f.getStatus();if(k(mt,`RPC '${t}' ${u} failed with status:`,R,"response text:",f.getResponseText()),R>0){let C=f.getResponseJson();Array.isArray(C)&&(C=C[0]);const b=C==null?void 0:C.error;if(b&&b.status&&b.message){const x=function($){const j=$.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN}(b.status);h(new N(x,b.message))}else h(new N(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(P.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:u,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{k(mt,`RPC '${t}' ${u} completed.`)}});const m=JSON.stringify(i);k(mt,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",m,n,15)})}T_(t,e,n){const i=ms(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=ma(),c=fa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,e,n),h.encodeInitMessageHeaders=!0;const m=o.join("");k(mt,`Creating RPC '${t}' stream ${i}: ${m}`,h);const T=u.createWebChannel(m,h);let R=!1,C=!1;const b=new Kh({Zo:D=>{C?k(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(k(mt,`Opening RPC '${t}' stream ${i} transport.`),T.open(),R=!0),k(mt,`RPC '${t}' stream ${i} sending:`,D),T.send(D))},Xo:()=>T.close()}),x=(D,$,j)=>{D.listen($,K=>{try{j(K)}catch(rt){setTimeout(()=>{throw rt},0)}})};return x(T,Ze.EventType.OPEN,()=>{C||(k(mt,`RPC '${t}' stream ${i} transport opened.`),b.__())}),x(T,Ze.EventType.CLOSE,()=>{C||(C=!0,k(mt,`RPC '${t}' stream ${i} transport closed`),b.u_())}),x(T,Ze.EventType.ERROR,D=>{C||(C=!0,we(mt,`RPC '${t}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),b.u_(new N(P.UNAVAILABLE,"The operation could not be completed")))}),x(T,Ze.EventType.MESSAGE,D=>{var $;if(!C){const j=D.data[0];G(!!j,16349);const K=j,rt=(K==null?void 0:K.error)||(($=K[0])===null||$===void 0?void 0:$.error);if(rt){k(mt,`RPC '${t}' stream ${i} received error:`,rt);const kt=rt.status;let it=function(_){const y=Z[_];if(y!==void 0)return Qa(y)}(kt),v=rt.message;it===void 0&&(it=P.INTERNAL,v="Unknown error status: "+kt+" with message "+rt.message),C=!0,b.u_(new N(it,v)),T.close()}else k(mt,`RPC '${t}' stream ${i} received:`,j),b.c_(j)}}),x(c,da.STAT_EVENT,D=>{D.stat===es.PROXY?k(mt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===es.NOPROXY&&k(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.a_()},0),b}}function Yr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(r){return new Yc(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,n=1e3,i=1.5,o=6e4){this.xi=t,this.timerId=e,this.I_=n,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),n=Math.max(0,Date.now()-this.V_),i=Math.max(0,e-n);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="PersistentStream";class lu{constructor(t,e,n,i,o,u,c,h){this.xi=t,this.y_=n,this.w_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new uu(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.S_===e&&this.K_(n,i)},n=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.W_(i)})})}K_(t,e){const n=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{n(()=>this.W_(i))}),this.stream.onMessage(i=>{n(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return k(jo,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(k(jo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qh extends lu{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}G_(t,e){return this.connection.T_("Listen",t,e)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const e=th(this.serializer,t),n=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?bt(u.readTime):L.min()}(t);return this.listener.j_(e,n)}H_(t){const e={};e.database=ds(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=os(h)?{documents:rh(o,h)}:{query:sh(o,h).gt},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Ya(o,u.resumeToken);const f=ls(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=rr(o,u.snapshotVersion.toTimestamp());const f=ls(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const n=oh(this.serializer,t);n&&(e.labels=n),this.L_(e)}J_(t){const e={};e.database=ds(this.serializer),e.removeTarget=t,this.L_(e)}}class Wh extends lu{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=nh(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.ea(n,e)}ta(){const t={};t.database=ds(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>eh(this.serializer,n))};this.L_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{}class Yh extends Xh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.na=!1}ra(){if(this.na)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,n,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.zo(t,cs(e,n),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Yo(t,e,n,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Yo(t,cs(e,n),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class Jh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ft(e),this.oa=!1):k("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="RemoteStore";class Zh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(u=>{n.enqueueAndForget(async()=>{de(this)&&(k(le,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.Ta.add(4),await _n(f),f.da.set("Unknown"),f.Ta.delete(4),await yr(f)}(this))})}),this.da=new Jh(n,i)}}async function yr(r){if(de(r))for(const t of r.Ia)await t(!0)}async function _n(r){for(const t of r.Ia)await t(!1)}function cu(r,t){const e=F(r);e.Pa.has(t.targetId)||(e.Pa.set(t.targetId,t),Fs(e)?Ls(e):Me(e).M_()&&Os(e,t))}function Ms(r,t){const e=F(r),n=Me(e);e.Pa.delete(t),n.M_()&&hu(e,t),e.Pa.size===0&&(n.M_()?n.N_():de(e)&&e.da.set("Unknown"))}function Os(r,t){if(r.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(r).H_(t)}function hu(r,t){r.Aa.Ke(t),Me(r).J_(t)}function Ls(r){r.Aa=new Hc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Pa.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),Me(r).start(),r.da._a()}function Fs(r){return de(r)&&!Me(r).F_()&&r.Pa.size>0}function de(r){return F(r).Ta.size===0}function du(r){r.Aa=void 0}async function td(r){r.da.set("Online")}async function ed(r){r.Pa.forEach((t,e)=>{Os(r,t)})}async function nd(r,t){du(r),Fs(r)?(r.da.ca(t),Ls(r)):r.da.set("Unknown")}async function rd(r,t,e){if(r.da.set("Online"),t instanceof Xa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.Pa.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.Pa.delete(c),i.Aa.removeTarget(c))}(r,t)}catch(n){k(le,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ir(r,n)}else if(t instanceof Wn?r.Aa.Xe(t):t instanceof Wa?r.Aa.ot(t):r.Aa.nt(t),!e.isEqual(L.min()))try{const n=await au(r.localStore);e.compareTo(n)>=0&&await function(o,u){const c=o.Aa.It(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Pa.get(f);m&&o.Pa.set(f,m.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const m=o.Pa.get(h);if(!m)return;o.Pa.set(h,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),hu(o,h);const T=new $t(m.target,h,f,m.sequenceNumber);Os(o,T)}),o.remoteSyncer.applyRemoteEvent(c)}(r,e)}catch(n){k(le,"Failed to raise snapshot:",n),await ir(r,n)}}async function ir(r,t,e){if(!Ne(t))throw t;r.Ta.add(1),await _n(r),r.da.set("Offline"),e||(e=()=>au(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{k(le,"Retrying IndexedDB access"),await e(),r.Ta.delete(1),await yr(r)})}function fu(r,t){return t().catch(e=>ir(r,e,t))}async function Tr(r){const t=F(r),e=Jt(t);let n=t.ha.length>0?t.ha[t.ha.length-1].batchId:vs;for(;sd(t);)try{const i=await Uh(t.localStore,n);if(i===null){t.ha.length===0&&e.N_();break}n=i.batchId,id(t,i)}catch(i){await ir(t,i)}mu(t)&&pu(t)}function sd(r){return de(r)&&r.ha.length<10}function id(r,t){r.ha.push(t);const e=Jt(r);e.M_()&&e.Y_&&e.Z_(t.mutations)}function mu(r){return de(r)&&!Jt(r).F_()&&r.ha.length>0}function pu(r){Jt(r).start()}async function od(r){Jt(r).ta()}async function ad(r){const t=Jt(r);for(const e of r.ha)t.Z_(e.mutations)}async function ud(r,t,e){const n=r.ha.shift(),i=Cs.from(n,t,e);await fu(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await Tr(r)}async function ld(r,t){t&&Jt(r).Y_&&await async function(n,i){if(function(u){return Gc(u)&&u!==P.ABORTED}(i.code)){const o=n.ha.shift();Jt(n).O_(),await fu(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Tr(n)}}(r,t),mu(r)&&pu(r)}async function zo(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),k(le,"RemoteStore received new credentials");const n=de(e);e.Ta.add(3),await _n(e),n&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await yr(e)}async function cd(r,t){const e=F(r);t?(e.Ta.delete(2),await yr(e)):t||(e.Ta.add(2),await _n(e),e.da.set("Unknown"))}function Me(r){return r.Ra||(r.Ra=function(e,n,i){const o=F(e);return o.ra(),new Qh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{e_:td.bind(null,r),n_:ed.bind(null,r),i_:nd.bind(null,r),j_:rd.bind(null,r)}),r.Ia.push(async t=>{t?(r.Ra.O_(),Fs(r)?Ls(r):r.da.set("Unknown")):(await r.Ra.stop(),du(r))})),r.Ra}function Jt(r){return r.Va||(r.Va=function(e,n,i){const o=F(e);return o.ra(),new Wh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:od.bind(null,r),i_:ld.bind(null,r),X_:ad.bind(null,r),ea:ud.bind(null,r)}),r.Ia.push(async t=>{t?(r.Va.O_(),await Tr(r)):(await r.Va.stop(),r.ha.length>0&&(k(le,`Stopping write stream with ${r.ha.length} pending writes`),r.ha=[]))})),r.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new Us(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qs(r,t){if(Ft("AsyncQueue",`${t}: ${r}`),Ne(r))return new N(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static emptySet(t){return new Ae(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=tn(),this.sortedSet=new X(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ae)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Ae;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.ma=new X(M.comparator)}track(t){const e=t.doc.key,n=this.ma.get(e);n?t.type!==0&&n.type===3?this.ma=this.ma.insert(e,t):t.type===3&&n.type!==1?this.ma=this.ma.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.ma=this.ma.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.ma=this.ma.remove(e):t.type===1&&n.type===2?this.ma=this.ma.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,fa:n}):this.ma=this.ma.insert(e,t)}ga(){const t=[];return this.ma.inorderTraversal((e,n)=>{t.push(n)}),t}}class Se{constructor(t,e,n,i,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Se(t,e,Ae.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class dd{constructor(){this.queries=Go(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,n){const i=F(e),o=i.queries;i.queries=Go(),o.forEach((u,c)=>{for(const h of c.ya)h.onError(n)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Go(){return new he(r=>Oa(r),hr)}async function gu(r,t){const e=F(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.wa()&&t.Sa()&&(n=2):(o=new hd,n=t.Sa()?0:1);try{switch(n){case 0:o.pa=await e.onListen(i,!0);break;case 1:o.pa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=qs(u,`Initialization of query '${Ee(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.ya.push(t),t.Da(e.onlineState),o.pa&&t.va(o.pa)&&Bs(e)}async function _u(r,t){const e=F(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.ya.indexOf(t);u>=0&&(o.ya.splice(u,1),o.ya.length===0?i=t.Sa()?0:1:!o.wa()&&t.Sa()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function fd(r,t){const e=F(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.ya)c.va(i)&&(n=!0);u.pa=i}}n&&Bs(e)}function md(r,t,e){const n=F(r),i=n.queries.get(t);if(i)for(const o of i.ya)o.onError(e);n.queries.delete(t)}function Bs(r){r.ba.forEach(t=>{t.next()})}var ps,Ko;(Ko=ps||(ps={})).Ca="default",Ko.Cache="cache";class yu{constructor(t,e,n){this.query=t,this.Fa=e,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=n||{}}va(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Se(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),e=!0):this.Na(t,this.onlineState)&&(this.Ba(t),e=!0),this.xa=t,e}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let e=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),e=!0),e}Na(t,e){if(!t.fromCache||!this.Sa())return!0;const n=e!=="Offline";return(!this.options.La||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const e=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ba(t){t=Se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==ps.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t){this.key=t}}class Eu{constructor(t){this.key=t}}class pd{constructor(t,e){this.query=t,this.Ga=e,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=q(),this.mutatedKeys=q(),this.Ha=La(t),this.Ja=new Ae(this.Ha)}get Ya(){return this.Ga}Za(t,e){const n=e?e.Xa:new $o,i=e?e.Ja:this.Ja;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((m,T)=>{const R=i.get(m),C=dr(this.query,T)?T:null,b=!!R&&this.mutatedKeys.has(R.key),x=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let D=!1;R&&C?R.data.isEqual(C.data)?b!==x&&(n.track({type:3,doc:C}),D=!0):this.eu(R,C)||(n.track({type:2,doc:C}),D=!0,(h&&this.Ha(C,h)>0||f&&this.Ha(C,f)<0)&&(c=!0)):!R&&C?(n.track({type:0,doc:C}),D=!0):R&&!C&&(n.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(C?(u=u.add(C),o=x?o.add(m):o.delete(m)):(u=u.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const m=this.query.limitType==="F"?u.last():u.first();u=u.delete(m.key),o=o.delete(m.key),n.track({type:1,doc:m})}return{Ja:u,Xa:n,Cs:c,mutatedKeys:o}}eu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const u=t.Xa.ga();u.sort((m,T)=>function(C,b){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:D})}};return x(C)-x(b)}(m.type,T.type)||this.Ha(m.doc,T.doc)),this.tu(n),i=i!=null&&i;const c=e&&!i?this.nu():[],h=this.ja.size===0&&this.current&&!i?1:0,f=h!==this.za;return this.za=h,u.length!==0||f?{snapshot:new Se(this.query,t.Ja,o,u,t.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),ru:c}:{ru:c}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new $o,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(e=>this.Ga=this.Ga.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ga=this.Ga.delete(e)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=q(),this.Ja.forEach(n=>{this.iu(n.key)&&(this.ja=this.ja.add(n.key))});const e=[];return t.forEach(n=>{this.ja.has(n)||e.push(new Eu(n))}),this.ja.forEach(n=>{t.has(n)||e.push(new Tu(n))}),e}su(t){this.Ga=t.$s,this.ja=q();const e=this.Za(t.documents);return this.applyChanges(e,!0)}ou(){return Se.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const js="SyncEngine";class gd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class _d{constructor(t){this.key=t,this._u=!1}}class yd{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.au={},this.uu=new he(c=>Oa(c),hr),this.cu=new Map,this.lu=new Set,this.hu=new X(M.comparator),this.Pu=new Map,this.Tu=new Ds,this.Iu={},this.Eu=new Map,this.du=Ce.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Td(r,t,e=!0){const n=Pu(r);let i;const o=n.uu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ou()):i=await vu(n,t,e,!0),i}async function Ed(r,t){const e=Pu(r);await vu(e,t,!0,!1)}async function vu(r,t,e,n){const i=await qh(r.localStore,St(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await vd(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&cu(r.remoteStore,i),c}async function vd(r,t,e,n,i){r.Ru=(T,R,C)=>async function(x,D,$,j){let K=D.view.Za($);K.Cs&&(K=await Fo(x.localStore,D.query,!1).then(({documents:v})=>D.view.Za(v,K)));const rt=j&&j.targetChanges.get(D.targetId),kt=j&&j.targetMismatches.get(D.targetId)!=null,it=D.view.applyChanges(K,x.isPrimaryClient,rt,kt);return Qo(x,D.targetId,it.ru),it.snapshot}(r,T,R,C);const o=await Fo(r.localStore,t,!0),u=new pd(t,o.$s),c=u.Za(o.documents),h=gn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(c,r.isPrimaryClient,h);Qo(r,e,f.ru);const m=new gd(t,e,u);return r.uu.set(t,m),r.cu.has(e)?r.cu.get(e).push(t):r.cu.set(e,[t]),f.snapshot}async function Id(r,t,e){const n=F(r),i=n.uu.get(t),o=n.cu.get(i.targetId);if(o.length>1)return n.cu.set(i.targetId,o.filter(u=>!hr(u,t))),void n.uu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await fs(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ms(n.remoteStore,i.targetId),gs(n,i.targetId)}).catch(ke)):(gs(n,i.targetId),await fs(n.localStore,i.targetId,!0))}async function Ad(r,t){const e=F(r),n=e.uu.get(t),i=e.cu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ms(e.remoteStore,n.targetId))}async function wd(r,t,e){const n=Dd(r);try{const i=await function(u,c){const h=F(u),f=et.now(),m=c.reduce((C,b)=>C.add(b.key),q());let T,R;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let b=Ut(),x=q();return h.Bs.getEntries(C,m).next(D=>{b=D,b.forEach(($,j)=>{j.isValidDocument()||(x=x.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,b)).next(D=>{T=D;const $=[];for(const j of c){const K=qc(j,T.get(j.key).overlayedDocument);K!=null&&$.push(new ee(j.key,K,Ca(K.value.mapValue),At.exists(!0)))}return h.mutationQueue.addMutationBatch(C,f,$,c)}).next(D=>{R=D;const $=D.applyToLocalDocumentSet(T,x);return h.documentOverlayCache.saveOverlays(C,D.batchId,$)})}).then(()=>({batchId:R.batchId,changes:Ua(T)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let f=u.Iu[u.currentUser.toKey()];f||(f=new X(U)),f=f.insert(c,h),u.Iu[u.currentUser.toKey()]=f}(n,i.batchId,e),await yn(n,i.changes),await Tr(n.remoteStore)}catch(i){const o=qs(i,"Failed to persist write");e.reject(o)}}async function Iu(r,t){const e=F(r);try{const n=await Lh(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.Pu.get(o);u&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u._u=!0:i.modifiedDocuments.size>0?G(u._u,14607):i.removedDocuments.size>0&&(G(u._u,42227),u._u=!1))}),await yn(e,n,t)}catch(n){await ke(n)}}function Ho(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.uu.forEach((o,u)=>{const c=u.view.Da(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach((m,T)=>{for(const R of T.ya)R.Da(c)&&(f=!0)}),f&&Bs(h)}(n.eventManager,t),i.length&&n.au.j_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Rd(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Pu.get(t),o=i&&i.key;if(o){let u=new X(M.comparator);u=u.insert(o,gt.newNoDocument(o,L.min()));const c=q().add(o),h=new gr(L.min(),new Map,new X(U),u,c);await Iu(n,h),n.hu=n.hu.remove(o),n.Pu.delete(t),zs(n)}else await fs(n.localStore,t,!1).then(()=>gs(n,t,e)).catch(ke)}async function Pd(r,t){const e=F(r),n=t.batch.batchId;try{const i=await Oh(e.localStore,t);wu(e,n,null),Au(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await yn(e,i)}catch(i){await ke(i)}}async function Vd(r,t,e){const n=F(r);try{const i=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let m;return h.mutationQueue.lookupMutationBatch(f,c).next(T=>(G(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(f,T))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,m)).next(()=>h.localDocuments.getDocuments(f,m))})}(n.localStore,t);wu(n,t,e),Au(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await yn(n,i)}catch(i){await ke(i)}}function Au(r,t){(r.Eu.get(t)||[]).forEach(e=>{e.resolve()}),r.Eu.delete(t)}function wu(r,t,e){const n=F(r);let i=n.Iu[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Iu[n.currentUser.toKey()]=i}}function gs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.cu.get(t))r.uu.delete(n),e&&r.au.Vu(n,e);r.cu.delete(t),r.isPrimaryClient&&r.Tu.Hr(t).forEach(n=>{r.Tu.containsKey(n)||Ru(r,n)})}function Ru(r,t){r.lu.delete(t.path.canonicalString());const e=r.hu.get(t);e!==null&&(Ms(r.remoteStore,e),r.hu=r.hu.remove(t),r.Pu.delete(e),zs(r))}function Qo(r,t,e){for(const n of e)n instanceof Tu?(r.Tu.addReference(n.key,t),Cd(r,n)):n instanceof Eu?(k(js,"Document no longer in limbo: "+n.key),r.Tu.removeReference(n.key,t),r.Tu.containsKey(n.key)||Ru(r,n.key)):O(19791,{mu:n})}function Cd(r,t){const e=t.key,n=e.path.canonicalString();r.hu.get(e)||r.lu.has(n)||(k(js,"New document in limbo: "+e),r.lu.add(n),zs(r))}function zs(r){for(;r.lu.size>0&&r.hu.size<r.maxConcurrentLimboResolutions;){const t=r.lu.values().next().value;r.lu.delete(t);const e=new M(W.fromString(t)),n=r.du.next();r.Pu.set(n,new _d(e)),r.hu=r.hu.insert(e,n),cu(r.remoteStore,new $t(St(Ps(e.path)),n,"TargetPurposeLimboResolution",ur.le))}}async function yn(r,t,e){const n=F(r),i=[],o=[],u=[];n.uu.isEmpty()||(n.uu.forEach((c,h)=>{u.push(n.Ru(h,t,e).then(f=>{var m;if((f||e)&&n.isPrimaryClient){const T=f?!f.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(f){i.push(f);const T=Ns.Rs(h.targetId,f);o.push(T)}}))}),await Promise.all(u),n.au.j_(i),await async function(h,f){const m=F(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(f,R=>V.forEach(R.ds,C=>m.persistence.referenceDelegate.addReference(T,R.targetId,C)).next(()=>V.forEach(R.As,C=>m.persistence.referenceDelegate.removeReference(T,R.targetId,C)))))}catch(T){if(!Ne(T))throw T;k(xs,"Failed to update sequence numbers: "+T)}for(const T of f){const R=T.targetId;if(!T.fromCache){const C=m.xs.get(R),b=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(b);m.xs=m.xs.insert(R,x)}}}(n.localStore,o))}async function Sd(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){k(js,"User change. New user:",t.toKey());const n=await ou(e.localStore,t);e.currentUser=t,function(o,u){o.Eu.forEach(c=>{c.forEach(h=>{h.reject(new N(P.CANCELLED,u))})}),o.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await yn(e,n.ks)}}function bd(r,t){const e=F(r),n=e.Pu.get(t);if(n&&n._u)return q().add(n.key);{let i=q();const o=e.cu.get(t);if(!o)return i;for(const u of o){const c=e.uu.get(u);i=i.unionWith(c.view.Ya)}return i}}function Pu(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Iu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rd.bind(null,t),t.au.j_=fd.bind(null,t.eventManager),t.au.Vu=md.bind(null,t.eventManager),t}function Dd(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vd.bind(null,t),t}class or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=_r(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return Mh(this.persistence,new kh,t.initialUser,this.serializer)}yu(t){return new iu(ks.fi,this.serializer)}pu(t){return new jh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}or.provider={build:()=>new or};class kd extends or{constructor(t){super(),this.cacheSizeBytes=t}Su(t,e){G(this.persistence.referenceDelegate instanceof sr,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new _h(n,t.asyncQueue,e)}yu(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new iu(n=>sr.fi(n,e),this.serializer)}}class _s{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ho(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sd.bind(null,this.syncEngine),await cd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new dd}()}createDatastore(t){const e=_r(t.databaseInfo.databaseId),n=function(o){return new Hh(o)}(t.databaseInfo);return function(o,u,c,h){return new Yh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,i,o,u,c){return new Zh(n,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Ho(this.syncEngine,e,0),function(){return Bo.C()?new Bo:new zh}())}createSyncEngine(t,e){return function(i,o,u,c,h,f,m){const T=new yd(i,o,u,c,h,f);return m&&(T.Au=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);k(le,"RemoteStore shutting down."),o.Ta.add(5),await _n(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}_s.provider={build:()=>new _s};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="FirestoreClient";class Nd{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=ya.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{k(Zt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(k(Zt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=qs(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Jr(r,t){r.asyncQueue.verifyOperationInProgress(),k(Zt,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await ou(t.localStore,i),n=i)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Wo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await xd(r);k(Zt,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>zo(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>zo(t.remoteStore,i)),r._onlineComponents=t}async function xd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k(Zt,"Using user provided OfflineComponentProvider");try{await Jr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;we("Error using user provided cache. Falling back to memory cache: "+e),await Jr(r,new or)}}else k(Zt,"Using default OfflineComponentProvider"),await Jr(r,new kd(void 0));return r._offlineComponents}async function Cu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k(Zt,"Using user provided OnlineComponentProvider"),await Wo(r,r._uninitializedComponentsProvider._online)):(k(Zt,"Using default OnlineComponentProvider"),await Wo(r,new _s))),r._onlineComponents}function Md(r){return Cu(r).then(t=>t.syncEngine)}async function ys(r){const t=await Cu(r),e=t.eventManager;return e.onListen=Td.bind(null,t.syncEngine),e.onUnlisten=Id.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Ed.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ad.bind(null,t.syncEngine),e}function Od(r,t,e={}){const n=new Kt;return r.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const m=new Vu({next:R=>{m.Cu(),u.enqueueAndForget(()=>_u(o,T)),R.fromCache&&h.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),T=new yu(c,m,{includeMetadataChanges:!0,La:!0});return gu(o,T)}(await ys(r),r.asyncQueue,t,e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(r,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ld(r,t,e,n){if(t===!0&&n===!0)throw new N(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Yo(r){if(!M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Jo(r){if(M.isDocumentKey(r))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Er(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O(12329,{type:typeof r})}function Lt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Er(r);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="firestore.googleapis.com",Zo=!0;class ta{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Du,this.ssl=Zo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Zo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=su;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ph)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ld("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Su((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ta({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ta(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kl;switch(n.type){case"firstParty":return new Xl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xo.get(e);n&&(k("ComponentProvider","Removing Datastore"),Xo.delete(e),n.terminate())}(this),Promise.resolve()}}function Fd(r,t,e,n={}){var i;r=Lt(r,vr);const o=ua(t),u=r._getSettings(),c=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),h=`${t}:${e}`;o&&(Ol(`https://${h}`),Ll("Firestore",!0)),u.host!==Du&&u.host!==h&&we("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:h,ssl:o,emulatorOptions:n});if(!Fl(f,c)&&(r._setSettings(f),n.mockUserToken)){let m,T;if(typeof n.mockUserToken=="string")m=n.mockUserToken,T=pt.MOCK_USER;else{m=Ul(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const R=n.mockUserToken.sub||n.mockUserToken.user_id;if(!R)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new pt(R)}r._authCredentials=new Hl(new ga(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ne(this.firestore,t,this._query)}}class wt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class Ht extends ne{constructor(t,e,n){super(t,e,Ps(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new M(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function $n(r,t,...e){if(r=Pt(r),bu("collection","path",t),r instanceof vr){const n=W.fromString(t,...e);return Jo(n),new Ht(r,null,n)}{if(!(r instanceof wt||r instanceof Ht))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return Jo(n),new Ht(r.firestore,null,n)}}function ku(r,t,...e){if(r=Pt(r),arguments.length===1&&(t=ya.newId()),bu("doc","path",t),r instanceof vr){const n=W.fromString(t,...e);return Yo(n),new wt(r,null,new M(n))}{if(!(r instanceof wt||r instanceof Ht))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return Yo(n),new wt(r.firestore,r instanceof Ht?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="AsyncQueue";class na{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new uu(this,"async_queue_retry"),this.ec=()=>{const n=Yr();n&&k(ea,"Visibility state changed to "+n.visibilityState),this.C_.p_()},this.tc=t;const e=Yr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=Yr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new Kt;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!Ne(t))throw t;k(ea,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(n=>{throw this.Ju=n,this.Yu=!1,Ft("INTERNAL UNHANDLED ERROR: ",ra(n)),n}).then(n=>(this.Yu=!1,n))));return this.tc=e,e}enqueueAfterDelay(t,e,n){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const i=Us.createAndSchedule(this,t,e,n,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&O(47125,{_c:ra(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function ra(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1}(r,["next","error","complete"])}class ce extends vr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new na,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new na(t),this._firestoreClient=void 0,await t}}}function Ud(r,t){const e=typeof r=="object"?r:Nl(),n=typeof r=="string"?r:Jn,i=xl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=Ml("firestore");o&&Fd(i,...o)}return i}function Ir(r){if(r._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||qd(r),r._firestoreClient}function qd(r){var t,e,n;const i=r._freezeSettings(),o=function(c,h,f,m){return new hc(c,h,f,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Su(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Nd(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(t){this._byteString=t}static fromBase64String(t){try{return new be(lt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new be(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=/^__.*__$/;class jd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new pn(t,this.data,e,this.fieldTransforms)}}class Nu{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function xu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{hc:r})}}class Hs{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new Hs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tc({path:n,Ec:!1});return i.dc(t),i}Ac(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tc({path:n,Ec:!1});return i.Pc(),i}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return ar(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(xu(this.hc)&&Bd.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class zd{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||_r(t)}gc(t,e,n,i=!1){return new Hs({hc:t,methodName:e,fc:n,path:ut.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qs(r){const t=r._freezeSettings(),e=_r(r._databaseId);return new zd(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Mu(r,t,e,n,i,o={}){const u=r.gc(o.merge||o.mergeFields?2:0,t,e,i);Ws("Data must be an object, but it was:",u,n);const c=Ou(n,u);let h,f;if(o.merge)h=new It(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const R=Ts(t,T,e);if(!u.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Fu(m,R)||m.push(R)}h=new It(m),f=u.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,f=u.fieldTransforms;return new jd(new Et(c),h,f)}class wr extends $s{_toFieldTransform(t){if(t.hc!==2)throw t.hc===1?t.Vc(`${this._methodName}() can only appear at the top level of your update data`):t.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wr}}function $d(r,t,e,n){const i=r.gc(1,t,e);Ws("Data must be an object, but it was:",i,n);const o=[],u=Et.empty();te(n,(h,f)=>{const m=Xs(t,h,e);f=Pt(f);const T=i.Ac(m);if(f instanceof wr)o.push(m);else{const R=Tn(f,T);R!=null&&(o.push(m),u.set(m,R))}});const c=new It(o);return new Nu(u,c,i.fieldTransforms)}function Gd(r,t,e,n,i,o){const u=r.gc(1,t,e),c=[Ts(t,n,e)],h=[i];if(o.length%2!=0)throw new N(P.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(Ts(t,o[R])),h.push(o[R+1]);const f=[],m=Et.empty();for(let R=c.length-1;R>=0;--R)if(!Fu(f,c[R])){const C=c[R];let b=h[R];b=Pt(b);const x=u.Ac(C);if(b instanceof wr)f.push(C);else{const D=Tn(b,x);D!=null&&(f.push(C),m.set(C,D))}}const T=new It(f);return new Nu(m,T,u.fieldTransforms)}function Kd(r,t,e,n=!1){return Tn(e,r.gc(n?4:3,t))}function Tn(r,t){if(Lu(r=Pt(r)))return Ws("Unsupported field value:",t,r),Ou(r,t);if(r instanceof $s)return function(n,i){if(!xu(i.hc))throw i.Vc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(n,i){const o=[];let u=0;for(const c of n){let h=Tn(c,i.Rc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(r,t)}return function(n,i){if((n=Pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=et.fromDate(n);return{timestampValue:rr(i.serializer,o)}}if(n instanceof et){const o=new et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rr(i.serializer,o)}}if(n instanceof Gs)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof be)return{bytesValue:Ya(i.serializer,n._byteString)};if(n instanceof wt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.Vc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:bs(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Ks)return function(u,c){return{mapValue:{fields:{[Pa]:{stringValue:Va},[Zn]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Vc("VectorValues must only contain numeric values.");return Vs(c.serializer,f)})}}}}}}(n,i);throw i.Vc(`Unsupported field value: ${Er(n)}`)}(r,t)}function Ou(r,t){const e={};return Ea(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):te(r,(n,i)=>{const o=Tn(i,t.Ic(n));o!=null&&(e[n]=o)}),{mapValue:{fields:e}}}function Lu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof et||r instanceof Gs||r instanceof be||r instanceof wt||r instanceof $s||r instanceof Ks)}function Ws(r,t,e){if(!Lu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const n=Er(e);throw n==="an object"?t.Vc(r+" a custom object"):t.Vc(r+" "+n)}}function Ts(r,t,e){if((t=Pt(t))instanceof Ar)return t._internalPath;if(typeof t=="string")return Xs(r,t);throw ar("Field path arguments must be of type string or ",r,!1,void 0,e)}const Hd=new RegExp("[~\\*/\\[\\]]");function Xs(r,t,e){if(t.search(Hd)>=0)throw ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ar(...t.split("."))._internalPath}catch{throw ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ar(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${n}`),u&&(h+=` in document ${i}`),h+=")"),new N(P.INVALID_ARGUMENT,c+r+h)}function Fu(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ys("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qd extends Uu{data(){return super.data()}}function Ys(r,t){return typeof t=="string"?Xs(r,t):t instanceof Ar?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Js{}class Bu extends Js{}function Zr(r,t,...e){let n=[];t instanceof Js&&n.push(t),n=n.concat(e),function(o){const u=o.filter(h=>h instanceof ti).length,c=o.filter(h=>h instanceof Zs).length;if(u>1||u>0&&c>0)throw new N(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Zs extends Bu{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Zs(t,e,n)}_apply(t){const e=this._parse(t);return ju(t._query,e),new ne(t.firestore,t.converter,as(t._query,e))}_parse(t){const e=Qs(t.firestore);return function(o,u,c,h,f,m,T){let R;if(f.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new N(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){oa(T,m);const b=[];for(const x of T)b.push(ia(h,o,x));R={arrayValue:{values:b}}}else R=ia(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||oa(T,m),R=Kd(c,u,T,m==="in"||m==="not-in");return tt.create(f,m,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ti extends Js{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ti(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Vt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,o){let u=i;const c=o.getFlattenedFilters();for(const h of c)ju(u,h),u=as(u,h)}(t._query,e),new ne(t.firestore,t.converter,as(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ei extends Bu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ei(t,e)}_apply(t){const e=function(i,o,u){if(i.startAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new N(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new dn(o,u)}(t._query,this._field,this._direction);return new ne(t.firestore,t.converter,function(i,o){const u=i.explicitOrderBy.concat([o]);return new xe(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(t._query,e))}}function Wd(r,t="asc"){const e=t,n=Ys("orderBy",r);return ei._create(n,e)}function ia(r,t,e){if(typeof(e=Pt(e))=="string"){if(e==="")throw new N(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ma(t)&&e.indexOf("/")!==-1)throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return To(r,new M(n))}if(e instanceof wt)return To(r,e._key);throw new N(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Er(e)}.`)}function oa(r,t){if(!Array.isArray(r)||r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ju(r,t){const e=function(i,o){for(const u of i)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Xd{convertValue(t,e="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return te(t,(i,o)=>{n[i]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Zn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Ks(o)}convertGeoPoint(t){return new Gs(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=cr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ln(t));default:return null}}convertTimestamp(t){const e=Wt(t);return new et(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);G(ru(n),9688,{name:t});const i=new cn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return i.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $u extends Uu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Xn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ys("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Xn extends $u{data(t={}){return super.data(t)}}class Gu{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Xn(this._firestore,this._userDataWriter,n.key,n,new nn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(c=>{const h=new Xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new nn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new Xn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new nn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,m=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),m=u.indexOf(c.doc.key)),{type:Yd(c.type),doc:h,oldIndex:f,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Yd(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:r})}}class ni extends Xd{constructor(t){super(),this.firestore=t}convertBytes(t){return new be(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function aa(r){r=Lt(r,ne);const t=Lt(r.firestore,ce),e=Ir(t),n=new ni(t);return qu(r._query),Od(e,r._query).then(i=>new Gu(t,n,r,i))}function Jd(r){return ri(Lt(r.firestore,ce),[new pr(r._key,At.none())])}function Zd(r,t){const e=Lt(r.firestore,ce),n=ku(r),i=zu(r.converter,t);return ri(e,[Mu(Qs(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,At.exists(!1))]).then(()=>n)}function tf(r,...t){var e,n,i;r=Pt(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||sa(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(sa(t[u])){const T=t[u];t[u]=(e=T.next)===null||e===void 0?void 0:e.bind(T),t[u+1]=(n=T.error)===null||n===void 0?void 0:n.bind(T),t[u+2]=(i=T.complete)===null||i===void 0?void 0:i.bind(T)}let h,f,m;if(r instanceof wt)f=Lt(r.firestore,ce),m=Ps(r._key.path),h={next:T=>{t[u]&&t[u](ef(f,r,T))},error:t[u+1],complete:t[u+2]};else{const T=Lt(r,ne);f=Lt(T.firestore,ce),m=T._query;const R=new ni(f);h={next:C=>{t[u]&&t[u](new Gu(f,R,T,C))},error:t[u+1],complete:t[u+2]},qu(r._query)}return function(R,C,b,x){const D=new Vu(x),$=new yu(C,D,b);return R.asyncQueue.enqueueAndForget(async()=>gu(await ys(R),$)),()=>{D.Cu(),R.asyncQueue.enqueueAndForget(async()=>_u(await ys(R),$))}}(Ir(f),m,c,h)}function ri(r,t){return function(n,i){const o=new Kt;return n.asyncQueue.enqueueAndForget(async()=>wd(await Md(n),i,o)),o.promise}(Ir(r),t)}function ef(r,t,e){const n=e.docs.get(t._key),i=new ni(r);return new $u(r,i,t._key,n,new nn(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Qs(t)}set(t,e,n){this._verifyNotCommitted();const i=ts(t,this._firestore),o=zu(i.converter,e,n),u=Mu(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(u.toMutation(i._key,At.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=ts(t,this._firestore);let u;return u=typeof(e=Pt(e))=="string"||e instanceof Ar?Gd(this._dataReader,"WriteBatch.update",o._key,e,n,i):$d(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(u.toMutation(o._key,At.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=ts(t,this._firestore);return this._mutations=this._mutations.concat(new pr(e._key,At.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(P.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ts(r,t){if((r=Pt(r)).firestore!==t)throw new N(P.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(r){return Ir(r=Lt(r,ce)),new nf(r,t=>ri(r,t))}(function(t,e=!0){(function(i){De=i})(jl),Sl(new bl("firestore",(n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new ce(new Ql(n.getProvider("auth-internal")),new Yl(u,n.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cn(f.options.projectId,m)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),so(oo,ao,t),so(oo,ao,"esm2017")})();const sf={apiKey:"AIzaSyDemo-replace-with-your-actual-key",authDomain:"bestclip-demo.firebaseapp.com",projectId:"bestclip-demo",storageBucket:"bestclip-demo.appspot.com",messagingSenderId:"123456789012",appId:"1:123456789012:web:demo123456789"},Ku=zl(sf),of=$l(Ku),_e=Ud(Ku);class af{constructor(){this.clipboardHistory=[],this.currentUser=null,this.lastClipboardContent="",this.unsubscribe=null,this.maxHistoryItems=100,this.init()}async init(){await this.loadLocalHistory(),Gl(of,t=>{t?(this.currentUser=t,this.startClipboardSync()):(this.currentUser=null,this.stopClipboardSync()),this.notifyPopup("authStateChanged",{user:t})}),chrome.commands.onCommand.addListener(t=>{t==="open-bestclip"&&chrome.action.openPopup()}),chrome.runtime.onInstalled.addListener(()=>{this.showWelcomeNotification()})}async loadLocalHistory(){try{const t=await chrome.storage.local.get(["clipboardHistory"]);this.clipboardHistory=t.clipboardHistory||[];for(let e=0;e<this.clipboardHistory.length;e++)this.clipboardHistory[e].encrypted&&(this.clipboardHistory[e]=await this.decryptClipboardItem(this.clipboardHistory[e]))}catch(t){console.error("Error loading local history:",t),this.clipboardHistory=[]}}showWelcomeNotification(){chrome.notifications.create({type:"basic",iconUrl:"icons/icon48.png",title:"BestClip Installed!",message:"Press Ctrl+Shift+V (Cmd+Shift+V on Mac) to open your clipboard manager."})}async addClipboardItem(t){if(this.clipboardHistory.some(i=>i.content===t.content&&i.type===t.type&&Math.abs(i.timestamp-t.timestamp)<2e3)||!this.validateClipboardItem(t))return;const n=await this.encryptClipboardItem(t);if(this.clipboardHistory.unshift(n),this.clipboardHistory.length>this.maxHistoryItems&&(this.clipboardHistory=this.clipboardHistory.slice(0,this.maxHistoryItems)),this.currentUser)try{await Zd($n(_e,`users/${this.currentUser.uid}/clipboard`),{...n,id:n.timestamp.toString()})}catch(i){console.error("Sync error:",i)}await this.saveLocalHistory(),this.notifyPopup("clipboardUpdate",{history:this.clipboardHistory})}validateClipboardItem(t){if(!t||!t.content||!t.type)return!1;if(t.type==="text"){if(t.content.length>1e4||t.content.trim().length===0)return!1}else if(t.type==="image"&&(t.content.length>5e6||!t.content.startsWith("data:image/")))return!1;return!0}async saveLocalHistory(){try{await chrome.storage.local.set({clipboardHistory:this.clipboardHistory})}catch(t){console.error("Error saving local history:",t)}}async encryptClipboardItem(t){const n=new TextEncoder().encode(JSON.stringify(t)),i=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),o=crypto.getRandomValues(new Uint8Array(12)),u=await crypto.subtle.encrypt({name:"AES-GCM",iv:o},i,n),c=await crypto.subtle.exportKey("raw",i);return{...t,encrypted:!0,data:Array.from(new Uint8Array(u)),key:Array.from(new Uint8Array(c)),iv:Array.from(o)}}async decryptClipboardItem(t){if(!t.encrypted)return t;try{const e=await crypto.subtle.importKey("raw",new Uint8Array(t.key),{name:"AES-GCM"},!1,["decrypt"]),n=await crypto.subtle.decrypt({name:"AES-GCM",iv:new Uint8Array(t.iv)},e,new Uint8Array(t.data)),i=new TextDecoder;return JSON.parse(i.decode(n))}catch(e){return console.error("Decryption error:",e),t}}startClipboardSync(){if(!this.currentUser||this.unsubscribe)return;const t=Zr($n(_e,`users/${this.currentUser.uid}/clipboard`),Wd("timestamp","desc"));this.unsubscribe=tf(t,async e=>{const n=[];for(const i of e.docs){const o=i.data();o.firestoreId=i.id;const u=await this.decryptClipboardItem(o);n.push(u)}await this.mergeClipboardHistory(n)})}stopClipboardSync(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}async mergeClipboardHistory(t){const e=new Map;this.clipboardHistory.forEach(i=>{const o=`${i.type}-${i.content}-${Math.floor(i.timestamp/5e3)*5e3}`;e.set(o,i)});const n=[];t.forEach(i=>{const o=`${i.type}-${i.content}-${Math.floor(i.timestamp/5e3)*5e3}`;e.has(o)||n.push(i)}),n.length>0&&(this.clipboardHistory=[...n,...this.clipboardHistory].sort((i,o)=>o.timestamp-i.timestamp).slice(0,this.maxHistoryItems),await this.saveLocalHistory(),this.notifyPopup("clipboardUpdate",{history:this.clipboardHistory}))}notifyPopup(t,e={}){chrome.runtime.sendMessage({type:t,...e}).catch(()=>{})}async clearHistory(){if(this.clipboardHistory=[],await this.saveLocalHistory(),this.currentUser)try{const t=Zr($n(_e,`users/${this.currentUser.uid}/clipboard`)),e=await aa(t),n=rf(_e);e.docs.forEach(i=>{n.delete(i.ref)}),await n.commit()}catch(t){console.error("Error clearing cloud history:",t)}this.notifyPopup("clipboardUpdate",{history:[]})}async removeItem(t){if(this.clipboardHistory=this.clipboardHistory.filter(e=>e.timestamp!==t),await this.saveLocalHistory(),this.currentUser)try{const e=Zr($n(_e,`users/${this.currentUser.uid}/clipboard`)),n=await aa(e);for(const i of n.docs)if(i.data().timestamp===t){await Jd(ku(_e,`users/${this.currentUser.uid}/clipboard`,i.id));break}}catch(e){console.error("Error removing item from cloud:",e)}this.notifyPopup("clipboardUpdate",{history:this.clipboardHistory})}}const ye=new af;chrome.runtime.onMessage.addListener((r,t,e)=>{switch(r.type){case"getHistory":e({history:ye.clipboardHistory});break;case"clearHistory":return ye.clearHistory().then(()=>{e({success:!0})}).catch(n=>{e({success:!1,error:n.message})}),!0;case"removeItem":return ye.removeItem(r.itemId).then(()=>{e({success:!0})}).catch(n=>{e({success:!1,error:n.message})}),!0;case"copyToClipboard":return chrome.tabs.query({active:!0,currentWindow:!0},n=>{n[0]?chrome.tabs.sendMessage(n[0].id,{type:"setClipboardContent",content:r.content,contentType:r.contentType||"text"},i=>{e(i||{success:!1,error:"No response from content script"})}):e({success:!1,error:"No active tab"})}),!0;case"clipboardChange":r.source==="content_script"&&ye.addClipboardItem({type:r.contentType,content:r.content,timestamp:r.timestamp}),e({success:!0});break;case"openBestClip":chrome.action.openPopup(),e({success:!0});break;case"getAuthState":e({user:ye.currentUser,isAuthenticated:!!ye.currentUser});break}return!1});
