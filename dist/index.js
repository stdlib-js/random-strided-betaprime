"use strict";var l=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var d=l(function(H,m){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-betaprime/dist');function R(n,e,u,i,c,a,f,t){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(n)?v=n.get(u):v=n[u],g(i)?s=i.get(a):s=i[a],r.fcn=q.factory(v,s,t),r;r.fcn=q.factory(t)}else r.fcn=q;return r.arity+=2,r}m.exports=R
});var A=l(function(I,p){
var b=require('@stdlib/strided-base-nullary/dist'),h=require('@stdlib/strided-base-binary/dist'),j=d();function w(n,e,u,i,c,a,f,t){var r=j(e,u,0,i,c,0,arguments.length>7,t);return r.arity===0?(b([a],[n],[f],r.fcn),a):(h([e,i,a],[n],[u,c,f],r.fcn),a)}p.exports=w
});var x=l(function(J,k){
var z=require('@stdlib/strided-base-nullary/dist').ndarray,B=require('@stdlib/strided-base-binary/dist').ndarray,C=d();function D(n,e,u,i,c,a,f,t,r,v,s){var y=C(e,u,i,c,a,f,arguments.length>10,s);return y.arity===0?(z([t],[n],[r],[v],y.fcn),t):(B([e,c,t],[n],[u,a,r],[i,f,v],y.fcn),t)}k.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=A(),F=x();E(O,"ndarray",F);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
