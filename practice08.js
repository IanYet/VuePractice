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


// 真尼玛操蛋了，稍微记一下，方便以后阅读
// 先解释一下，啥是父组件，啥是子组件，模版后面跟的是父组件，而html里面写的是子组件，
// 这可以说非常意外了
// 我们在注册子组件时候，data里面的写的是父组件的数据／方法，所以很显然
// 下面这段代码中，inc方法是父组件，也就是button点击出现的事件
// 操蛋的官方文档竟然吧父组件的click触发的方法跟子组件的自定义事件名搞成一样的，真特么恶心
// 我自己改成了inc，原来是increment
// 再解释一下$emit，emit负责监听，说白了，就是点击button（父组件），
// 触发inc方法，inc方法一调用，就触发了increment事件！！！！注意，是increment事件
// 就好比click事件，dbclick事件，input事件一样，是一种自定义事件类型，
// 而不是事件回调的方法名，我擦血的教训啊，搞了一下午才看明白就是这么简单的事
Vue.component('button-counter', {
    template: '<button v-on:click="inc">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        inc: function () {
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


//卧槽操蛋的官方文档，你不能不用那多相同名字的东西，妈蛋！！！！！！！！！
Vue.component('currency-input', {
    template: '\
        <span>$\
            <input\
                ref="input"\
                v-bind:value="val"\
                v-on:input="updateValue($event.target.value)"/>\
        </span>',
    props: ['value'],
    data:function () {
        return {val: 0};
    },
    methods:{
        updateValue: function (val) {
            var formattedValue = val.trim().slice(0, val.indexOf('.')+3);

            if(formattedValue !== val){
                this.$refs.input.value = formattedValue;
            }

            this.$emit('input', Number(formattedValue));
        }
    }
});

var app03 = new Vue({
    el: '#app03',
    data: {
        price: 0
    }
});

// var bus = new Vue();
// var app04 = new Vue({
//     el: '#app04',
//     methods:{
//         ea: function () {
//             bus.$emit('eventB', 1);
//         }
//     }
// });
// var app05 = new Vue({
//     el:'#app05',
//     methods: {
//         eb: function () {
//             alert("thi si b");
//         }
//     }
// });
// bus.$on(app05.eb(), function (app05) {
//
// });