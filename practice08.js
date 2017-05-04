/**
 * Created by Ian on 17/5/3.
 */
Vue.component('child', {
    props: {"my-message": Number},
    template:'<input :value="myMessage">'

});

var app00 = new Vue({
    el: '#app00',
    data: {
        inputMsg: 5
    },
    computed: {
        changeMsg: function () {
            return this.inputMsg.valueOf()+1;
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

Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1;
            this.$emit('increment');
        }
    }
});
var app02 = new Vue({
    el: '#app02',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function () {
            this.total += 1;
        }
    }
});


Vue.component('currency-input', {
    template: '\
        <span>$\
            <input\
                ref="input"\
                v-bind:value="value"\
                v-on:input="updateValue($event.target.value)"/>\
        </span>',
    props: ['value'],
    methods:{
        updateValue: function (value) {
            var formattedValue = value.trim().slice(0, value.indexOf('.')+3);

            if(formattedValue !== value){
                this.$refs.input.value = formattedValue;
            }

            this.$emit('input', Number(formattedValue));
        }
    }
});

var app03 = new Vue({
    el: '#app03'
});