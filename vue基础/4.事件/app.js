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
//事件
    //v-on:click
    //@click
    //v-dbclick
    //@dbclick
//事件修饰符
//阻止冒泡事件 .stop
//指点一次  .once