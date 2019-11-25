<!--模板-->
<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<!--行为处理逻辑-->
<script>
    export default {
        name: 'app-header',
        data(){
            return {
                title: "Header-app"
            }
        },
    }
</script>

<!--样式-->
<style>
header{
    background: lightseagreen;
    padding: 10px;
}
h1{
    color: antiquewhite;
}
</style>
