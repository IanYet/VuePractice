/**
 * Created by Ian on 17/4/25.
 */

// var vm = new Vue({
//     data: {
//         a: 1
//     },
//     created: function () {
//         console.log('a is ' + this.a);
//     }
// });

var app01 = new Vue({
    el: "#app01",
    data: {
        msg: 'test v-once',//it is ignored by v-html!sad:(
        rawHtml: '<i>hehehhehe</i>'//this will be attacked by xss
    }
});

var app02 = new Vue({
    el: "#app02",
    data: {
        bool: false,
        msg: 'olleh'
    },
    // methods: {
    //     rev: function () {
    //         this.msg = this.msg.split('').reverse().join('');
    //     }
    // }
});

var app03 = new Vue({
    el: '#app03',
    data: {
        msg: 10,
        arg2: 100
    },
    filters: {
        format: function (value) {
            if(value===10){
                return 1;
            }
        },

        anoFormat: function (value, arg1, arg2) {
            return value+arg1+arg2;
        }
    }
});