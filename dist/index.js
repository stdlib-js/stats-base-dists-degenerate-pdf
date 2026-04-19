"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(P,a){
var q=require('@stdlib/constants-float64-pinf/dist'),i=require('@stdlib/math-base-assert-is-nan/dist');function v(e,r){return i(e)||i(r)?NaN:e===r?q:0}a.exports=v
});var f=n(function(l,c){
var N=require('@stdlib/utils-constant-function/dist'),p=require('@stdlib/constants-float64-pinf/dist'),s=require('@stdlib/math-base-assert-is-nan/dist');function y(e){if(s(e))return N(NaN);return r;function r(t){return s(t)?NaN:t===e?p:0}}c.exports=y
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),F=f();d(o,"factory",F);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
