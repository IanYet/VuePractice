/**
 * Created by Ian on 17/4/26.
 */

var app01 = new Vue({
    el: '#app01',
    methods: {
        nowTime: function () {
            return Date.now();
        }
    },
    computed: {
        now: function () {
            return Date.now();
        }
    }
});

//confused about "computed attr is relied on cache, but the methods not"!!!!!


var app02 = new Vue({
    el: '#app02',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },

            set: function (newName) {
                var names = newName.split(' ');
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    }
});