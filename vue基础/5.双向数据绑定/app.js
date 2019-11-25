new Vue({
    el: "#vue-app",
    data: {
        name: "Black-Jay",
        age: 26
    },
    methods: {
        age10: function(){
            console.log("ciming in ds")
            this.age += 10;
        }
    }
});
//输入   输出 