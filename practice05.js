/**
 * Created by Ian on 17/4/27.
 */

var app01 = new Vue({
    el: '#app01',
    data:{
        parentMessage: 'unOrderLists',
        items: [
            {message: 'one'},
            {message: 'two'}
        ]
    }
});

var app02 = new Vue({
    el: '#app02',
    data:{
        items: [
            {message: 'one'},
            {message: 'two'}
        ]
    }
});

var app03 = new Vue({
    el: '#app03',
    data:  {
        obj: {
            firstName: 'Ian',
            lastName: 'Ye',
            school: 'NJU',
            age: 19
        }
    }
});

var app04 = new Vue({
    el: '#app04'
});

Vue.component('my-com', {
    props: ['item', 'index'],
    template: '<p>{{index}}: {{item.text}}</p>'
});

var app05 = new Vue({
    el: '#app05',
    data: {
        items:[{text: 'one'}, {text: 'two'}, {text: 'three'}]
    }
});

Vue.component('todo-item', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
    props: ['title']
})
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },
    methods: {
        addNewTodo: function () {
            this.todos.push(this.newTodoText)
            this.newTodoText = ''
        }
    }
})

var app06 = new Vue({
    el: '#app06',
    data: {
        todos:[
            {value: 'taskOne', isComplete: true},
            {value: 'taskTwo', isComplete: false},
            {value: 'taskThree', isComplete: false},
            {value: 'taskFour', isComplete: false}
        ]
    }
});