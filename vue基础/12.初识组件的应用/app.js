Vue.component("greeting", {
    template: `
    <div>{{name}}:  大家好
        <button v-on:click="changeName">改名</button>
    </div>
    `,
    data: function(){
        return {
            name: "Black-Jay"
        }
    },
    methods: {
        changeName: function(){
            this.name = "Biiiv";
        }
    }
});

new Vue({
    el: "#vue-one-app"
});
new Vue({
    el: "#vue-two-app"
});
