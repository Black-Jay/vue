new Vue({
    el: "#vue-app",
    data: {
        name: "Black-Jay"
    },
    methods: {
        greet1: function(){
            return "good nigth";
        },
        greet2: function(s){
            return "good nigth   " + s;
        },
        greet3: function(){
            return "good nigth   " + this.name;
        }
    }
});
// el: element需要获取的元素，一定是html当中的跟容器元素
// data： 用于数据的存储
//methods: 方法函数