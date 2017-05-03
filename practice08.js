/**
 * Created by Ian on 17/5/3.
 */
Vue.component('child', {
    props: ["my-message"],
    template:'<input :value="myMessage">'
});

var app00 = new Vue({
    el: '#app00',
    data: {
        inputMsg: 'hello'
    }
});