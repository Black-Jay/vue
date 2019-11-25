new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        //都会执行methods方法
        // addToA: function(){
        //     console.log("add to a");
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log("add to b");
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function(){
            console.log("add to a");
            return this.a + this.age;
        },
        addToB: function(){
            console.log("add to b");
            return this.b + this.age;
        }
    }
});
//输入   输出