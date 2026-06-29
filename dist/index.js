"use strict";var l=function(n,e){return function(){try{return e||n((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var d=l(function(H,m){
var g=require('@stdlib/array-base-assert-is-accessor-array/dist'),q=require('@stdlib/random-base-betaprime/dist');function R(n,e,a,t,c,i,f,u){var r,v,s;if(r={arity:0,fcn:null},f){if(e===0&&c===0)return g(n)?v=n.get(a):v=n[a],g(t)?s=t.get(i):s=t[i],r.fcn=q.factory(v,s,u),r;r.fcn=q.factory(u)}else r.fcn=q;return r.arity+=2,r}m.exports=R
});var A=l(function(I,p){
var b=require('@stdlib/strided-base-nullary/dist'),h=require('@stdlib/strided-base-binary/dist'),j=d();function w(n,e,a,t,c,i,f,u){var r=j(e,a,0,t,c,0,arguments.length>7,u);return r.arity===0?(b([i],[n],[f],r.fcn),i):(h([e,t,i],[n],[a,c,f],r.fcn),i)}p.exports=w
});var x=l(function(J,k){
var z=require('@stdlib/strided-base-nullary/dist').ndarray,B=require('@stdlib/strided-base-binary/dist').ndarray,C=d();function D(n,e,a,t,c,i,f,u,r,v,s){var y=C(e,a,t,c,i,f,arguments.length>10,s);return y.arity===0?(z([u],[n],[r],[v],y.fcn),u):(B([e,c,u],[n],[a,i,r],[t,f,v],y.fcn),u)}k.exports=D
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),O=A(),F=x();E(O,"ndarray",F);module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
