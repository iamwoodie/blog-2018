<template>
    <div class="index-wrap">
        <ul class="shortcut-list">
            <li class="list-item" v-for="(item,index) in shortCutList" :key="index">
                <div class="">
                    <img :src="item.icon" alt="">
                </div>
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                shortCutList: [
                    {
                        name: '我的电脑',
                        icon: ''
                    }
                ]
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>
<style lang="less">
    .index-wrap{
        width: 100%;
        height: 100%;
        background-color: #038387;
        .shortcut-list{
            margin-bottom: 20px;
        }
    }
</style>
