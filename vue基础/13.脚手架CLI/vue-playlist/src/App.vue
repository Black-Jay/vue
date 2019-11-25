<!--模板-->
<template>
    <div id="app">
        <app-header></app-header>
        <users></users>
        <app-footer></app-footer>
    </div>
</template>

<!--行为处理逻辑-->
<script>
    import Users from './components/Users';
    import Header from './components/Header';
    import Footer from './components/Footer';
    export default {
        name: 'app', 
        data(){
            return {
                
            }
        },
        components: {
            "users": Users,
            "app-header": Header,
            "app-footer": Footer
        }
    }
</script>

<!--样式-->
<style>
h1{
    color: purple;
}
</style>
