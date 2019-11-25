1. 安装
npm install vue-router --save-dev
2. 引入
//main.js
import VueRouter from 'vue-router'
const router = new VueRouter({
    router: [
        {path: '/', component: Home},
        {path: '/'helloword, component: HelloWorld}
    ]
})


1. 安装
npm install vue-resource --save-dev

//
jsonplaceholder.trypicode.com

created(){
    this.$http.get(url).then((data) => {
        console.log(data);
        this.users = data;
    })
}