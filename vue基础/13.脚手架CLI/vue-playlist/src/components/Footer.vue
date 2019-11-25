<!--模板-->
<template>
    <footer>
        <p>{{title}}</p>
    </footer>
</template>

<!--行为处理逻辑-->
<script>
    export default {
        name: 'app-footer',
        data(){
            return {
                title: "Footer-app"
            }
        },
    }
</script>

<!--样式-->
<style>
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: lightseagreen;
    padding: 10px;
}
p{
    color: antiquewhite;
}
</style>
