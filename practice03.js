/**
 * Created by Ian on 17/4/26.
 */


var app00 = new Vue({
    el:'#app00',
    data:{
        isTrue: true,
        myClass: 'active'
    }
});

//app01 classes are "active"
var app01 = new Vue({
    el:'#app01',
    data:{
        isActive: true,
        error: null
    },
    computed: {
        myClass: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
});

var app02 = new Vue({
    el: '#app02',
    data: {
        isActive: true,
        active: 'active',
        error: 'danger'
    },
    computed:{
        myClass: function () {
            return [this.isActive ? this.active : '', this.error];
        }
    }
});

Vue.component('my-com', {
    template: '<p class="b c">Hi</p>'
});

var app03 = new Vue({
    el: '#app03',
    data: {
        isTrue: true
    }
});
//为了体现重要性，我都tm用中文写注释了！！！！app03的class是自定义组件class＋绑定的class
//但是app04就不是。。。。wtf？？？

var app04 = new Vue({
    el: '#app04',
    template: '<p class="b c">Hi P!!</p>',
    data: {
        isTrue: true
    }
});
//omg!!!是不是很洋气的叹词
//md，原来第二种写法没有申明标签名，那么问题来了，没申明标签名咋还可以渲染

var app05 = new Vue({
    el: '#app05',
    data:{
        style1:{
            color: 'red'
        },
        style2:{
            fontSize: '2em'
        }
    }
});
//this not is so salty that eggache????