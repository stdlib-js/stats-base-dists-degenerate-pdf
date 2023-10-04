// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function r(t,e){return s(t)||s(e)?NaN:t===e?n:0}function i(t){return s(t)?e(NaN):function(e){if(s(e))return NaN;return e===t?n:0}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
