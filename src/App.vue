<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import '../static/css/reset.css'
    export default {
        name: 'App'
    }
</script>

<style lang="less">
    #app {
        width: 100%;
        height: 100%;
        font-family: '微软雅黑', '黑体', 'Arial', 'Verdana', '宋体b8b体', 'Lato', "Helvetica Neue", 'Helvetica', 'Arial', 'sans-serif';
    }
</style>
