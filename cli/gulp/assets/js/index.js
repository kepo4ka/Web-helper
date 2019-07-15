import * as test from "./export";
// alert( `${test.one} and ${test.two}` ); // 1 and 2
import Vue from 'vue';

window.jQuery = window.$ = require('jquery');
$(function () {
    console.log('Hello jQuery');

    new Vue({
      
        data: {
            content: 'test'
        },
        computed: {
            test: function () {
                return 123;
            }
        }
    }).$mount('#app');


})
;



