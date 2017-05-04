/**
 * Created by Ian on 17/4/29.
 */
var app01 = new Vue({
    el: '#app01',
    data: {
        message: ''
    }
});

var app02 = new Vue({
    el: '#app02',
    data:{
        checkedNames: []
    }
});

var app03 = new Vue({
    el: '#app03',
    data:{
        picked: ''
    }
});

var app04 = new Vue({
    el: '#app04',
    data:{
        selected: 'A',
        options:[
            {text: 'one', value: 'A'},
            {text: 'two', value: 'B'},
            {text: 'three', value: 'C'}
        ]
    }
});

var app05 = new Vue({
    el: '#app05',
    data:{
        pick: '',
        a: 'b'
    }
});

if(app05.data===app05.value){
    app05.a = "change";
}


var appp06 = new Vue({
    el: '#app06',
    data:{
        message: ''
    },
    computed: {
        upperMsg: function () {
            return this.message.trim().toUpperCase();
        }
    }
});