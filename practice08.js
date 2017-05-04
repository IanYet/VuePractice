/**
 * Created by Ian on 17/5/3.
 */
Vue.component('child', {
    props: ["my-message"],
    template:'<input :value="myMessage">',

});

var app00 = new Vue({
    el: '#app00',
    data: {
        inputMsg: 'hello'
    },
    computed: {
        changeMsg: function () {
            return this.inputMsg.trim().toUpperCase();
        }
    }
});

Vue.component('com', {
    template: '<div>' +
    '<input v-model="message"/>' +
    '<p>{{newMessage}}</p>' +
    '</div>',
    data: function () {
        return {message: 'hello'}
    },
    computed:{
        newMessage: function () {
            return this.message.toUpperCase();
        }
    }
});

var  app01 = new Vue({
    el: '#app01'
});
