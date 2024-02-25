// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t,{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.2.1-esm/index.mjs";import n,{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-binary@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-betaprime@v0.2.0-esm/index.mjs";function d(r,t,e,n,s,d,m,f){var l,o,c;if(l={arity:0,fcn:null},m){if(0===t&&0===s)return o=i(r)?r.get(e):r[e],c=i(n)?n.get(d):n[d],l.fcn=a.factory(o,c,f),l;l.fcn=a.factory(f)}else l.fcn=a;return l.arity+=2,l}function m(r,e,s,i,a,m,f,l){var o=d(e,s,0,i,a,0,arguments.length>7,l);return 0===o.arity?(t([m],[r],[f],o.fcn),m):(n([e,i,m],[r],[s,a,f],o.fcn),m)}function f(r,t,n,i,a,m,f,l,o,c,j){var y=d(t,n,i,a,m,f,arguments.length>10,j);return 0===y.arity?(e([l],[r],[o],[c],y.fcn),l):(s([t,a,l],[r],[n,m,o],[i,f,c],y.fcn),l)}r(m,"ndarray",f);export{m as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
