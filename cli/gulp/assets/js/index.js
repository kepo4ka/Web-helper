import * as test from "./export";
window.jQuery = window.$ = require('jquery');



// alert( `${test.one} and ${test.two}` ); // 1 and 2

$(function () {
    console.log('Hello jQuery');
});