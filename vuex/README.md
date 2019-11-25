# VueCli3.0 - Vuex项目
- Mac下Vue Cli如果修改从yarn改到npm仓库 `open ~/.vuerc`
- vscode vue的插件Vetur
- id自动生成 `npm install uuid`

## 基本
1. 升级和安装vuecli全局脚手架
    - 如果有VueCli脚手架 版本低的话可以使用：`npm uninstall vue-cli -g` 删除vuecli然后在操作下一步
    - 如果没有VueCLi脚手架，直接使用：`npm install -g @vue/cli`
2. 安装vue-cli3.0
    - vue create vue-app
    - 选择类型  自定义的//默认的//手动的   应当去选择手动
    - 手动选择
        1. 是否编译 Babal
        2. TypeScript 是否引进TS
        3. Progressive Web App （PWA） Support
        4. Router 是否引进路由
        5. Vuex 是否引进Vuex
        6. CSS Pre-processors
        7. Linter / Formatter
        8. Unit Testing 测试
        9. E2E Testing 测试
    - Use history mode for router? 否是带那个# y
    - In package.json
    - 是否保存项目配置？ n
3. data和组件传值
== components
=== Todo.vue  props: ["todos"] or props: { todos: { type: Array } }
== view
=== Home.vue <Todo :todo="todo" />
4. 样式绑定
- scoped当前组件和页面的样式  不影响其他组件和页面
5. 注册事件实现删除
- 注册事件
    第三级：@随意="$emit('事件名', 值（当前组件的值）)"
    第二级：@事件名="$emit('事件名', 值（当前组件的值）)"
    第一级：@事件名="方法值"
6. 头部组建
== components
=== layout
==== Header.vue
== view
=== Home.vue 
    1. 引入Header组件import
    2. 绑定Header组件components
    3. 显示Header组件<Header />
7. 添加代办事宜
== components
==== AddTodo.vue => 在这里利用输入框获取到值后，注册事件this.$emit("handleAdd", 新的值);
== view
==== Home.vue => 在绑定AddTodo组件的前提下，<AddTodo @handleAdd="handleAdd"/> 方法中往todos加入新的数据
8. 使用Axios请求
协议的获取：https://jsonplaceholder.typicode.com
//https://jsonplaceholder.typicode.com/todos?_limit=10
npm install axios --save 
请求数据的时候在created钩子函数里面去请求里面去请求
axios.get(url).then().catch();
axios.post(url, {title, completed}).then().catch();
axios.delete(url).then().catch();
9. 路由的使用
<!-- 路由切换的容器 -->
<router-view></router-view>//这个是展示路径的页面
<!--  -->
<router-link to="/">主页</router-link>//在Header组件中，也就是首页上面的

10. 打包项目上传服务器
netlify
通过命令行上传到netlify服务器
netlify deploy
npm install -g netlify-cli
11. 打包项目上传到阿里云
12. 安装浏览器Vue插件

## Vuex
1. 什么是Vuex
集中管理数据状态
创建了一个集中的数据存储
一对一的数据拉取和改变
添加vuex
vue add vuex
2. Vuex中的state 
`this.$store.state.count`
```html
<h1>{{count1}}</h1>
<p>{{todos}}</p>
computed: {
      count1(){
          return this.$store.state.count
      },
      todos(){
          return this.$store.state.todos
      }
  }
```
3. getters & mapGetters
getter 获取状态和store不一样
- 平常的写法  在store.js getters: {}  在.vue文件中 computed: {}在续上
- 简写 在store.js getters: {}里的方法  在.vue文件中computed: mapGetters(["count"，"completedTodos","completedTodosCount","getTodosById"])把方法都例举出来
别忘了在.vue文件中加上import {mapState, mapGetters} from "vuex";
4. mutation & mapMuta
mutation修改状态
根vue中事件非常的相似
必须需要触发
必须是同步的函数
5. actions & mapActions
actions 修改状态
操作mutation， 变成异步的操作
主要在actions中数据的请求