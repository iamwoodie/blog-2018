<template lang="html">
    <div class="container">
        <div class="header clearfix">
            <div class="logo-wrap">
                <img src="/static/images/logo.png" alt="">
            </div>
            <div class="menu-wrap">
                <ul class="menu-list clearfix" >
                    <li class="menu-item"
                        v-for="item in indexRouterList"
                        :class="{'cur': curRouteName === item.router}"
                        @click="$router.push(item.router)"
                        :key="item.router">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="main">
            <router-view ></router-view>
        </div>
        <div class="footer">
            <p>
                <span>2018 © 野客的个人博客 - Version: 1.0.0</span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            indexRouterList: [
                {
                    name: '首页',
                    router: '/index'
                },
                {
                    name: '前端相关',
                    router: '/javascript/article_list'
                },
                {
                    name: 'Python相关',
                    router: '/python/article_list'
                },
                {
                    name: '读书笔记',
                    router: '/read/article_list'
                },
                {
                    name: '学习笔记',
                    router: '/study/article_list'
                },
                {
                    name: '我的空间',
                    router: '/zone/article_list'
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['isFresh', 'curRouteName'])
    },
    created() {
        if(this.isFresh) {
            this.$store.commit('setIsFresh', false)
        }
        this.$store.commit('setRouteName', this.$route.path)
    },
    updated() {
        this.$store.commit('setRouteName', this.$route.path)
    }
}
</script>

<style lang="less">
    .container{
        width: 980px;
        margin: 0 auto;

        .header{
            padding: 0 10px;
            font-size: 15px;
            border-bottom: 1px solid #ccc;

            .logo-wrap{
                float: left;
                padding: 10px 0;
                img{
                    height: 80px
                }
            }

            .menu-wrap{
                float: left;
                padding: 20px 0;

                .menu-list{

                    .menu-item{
                        float: left;
                        line-height: 30px;
                        padding: 15px;
                        margin: 0 5px;
                        cursor: pointer;
                        color: #585858;
                        border-bottom: 2px solid transparent;
                    }

                    .menu-item.cur {
                        border-bottom: 2px solid #409EFF;
                        color: #409EFF;
                    }

                    .menu-item:hover{
                        border-bottom: 2px solid #409EFF;
                        color: #409EFF;
                    }
                }
            }
        }

        .main{
            min-height: 500px;
        }

        .footer{
            border-top: 1px solid #ccc;
            text-align: center;
            color: #8e8e93;
            font-size: 12px;
        }
    }
</style>
