<template>
    <div class="users">
        <h1>User</h1>
        <!-- <ul>
            <li v-for="user in users" :key="user.id"> 
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3> 
            </li>
        </ul> -->
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>


<script>
    export default {
        name: "users",
        data() {
            return {
                users: [
                    {name: "Balck", position: "web开发", show: false},
                    {name: "Jay", position: "Ui", show: true},
                    {name: "Biiiv", position: "Java开发", show: false},
                    {name: "Balck", position: "web开发", show: false},
                    {name: "Jay", position: "Ui", show: true},
                    {name: "Biiiv", position: "Java开发", show: false},
                    {name: "Balck", position: "web开发", show: false},
                    {name: "Jay", position: "Ui", show: true},
                    {name: "Biiiv", position: "Java开发", show: false},
                    {name: "Balck", position: "web开发", show: false},
                    {name: "Jay", position: "Ui", show: true},
                    {name: "Biiiv", position: "Java开发", show: false},
                    {name: "Balck", position: "web开发", show: false},
                    {name: "Jay", position: "Ui", show: true},
                    {name: "Biiiv", position: "Java开发", show: false}
                ],
                message: 'Hell'
            };
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    };
</script>
<!--  scoped -> 域 -->
<style scoped>
h1{
    color: green;
}
</style>
