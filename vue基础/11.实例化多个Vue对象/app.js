var one = new Vue({
    el: "#vue-one-app",
    data: {
        title: "ONE-vue-app"
    },
    methods: {

    },
    computed: {
        greet: function(){
            return "Hello App One"
        }
    }
});
var two = new Vue({
    el: "#vue-two-app",
    data: {
        title: "TWO-vue-app"
    },
    methods: {
        changeTitle: function(){
            one.title = "已经改了";
        }
    },
    computed: {
        greet: function(){
            return "Hello App Two";
        }
    }
});

two.title = "app two 也变了";