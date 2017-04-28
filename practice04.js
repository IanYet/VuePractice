/**
 * Created by Ian on 17/4/26.
 */


var app01 = new Vue({
    el: '#app01',
    data:{
        type: 'A'
    }
});

var app02 = new Vue({
    el: '#app02',
    data:{
        loginType: 'name'
    },
    methods:{
        Toggle: function (arg) {
            if(this.loginType==='username'){
                this.loginType = "email";
            }else{
                this.loginType = arg + this.loginType;
            }
        }
    }
});
