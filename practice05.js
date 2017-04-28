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