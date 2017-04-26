/**
 * Created by Ian on 17/4/25.
 */

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component('my-com', {
    props: ['content'],
    template: '<p>{{content}}</p>'
})

new Vue({
    el: '#app04',
    data:{
        message: "custom text"
    }
})

new Vue({
    el: '#app01',
    data: {
        message: "hello, vue!",
        messag: "now is: " + new Date()
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

new Vue({
    el: '#app02',
    data: {
        see: true,
        todo: [{text: "01"}, {text: "02"}, {text: "03"}]
    }
});

new Vue({
    el: '#app03',
    data: {
        groceryList: [
            { text: '蔬菜' },
            { text: '奶酪' },
            { text: '随便其他什么人吃的东西' }
        ]
    }
});
