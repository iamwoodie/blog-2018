<template lang="html">
    <div class="container">
        <div class="header clearfix">
            <div class="logo-wrap">
                <img src="/static/images/logo.png" alt="">
            </div>
            <div class="menu-wrap">
                <ul class="menu-list clearfix">
                    <li class="menu-item">首页</li>
                    <li class="menu-item">前端相关</li>
                    <li class="menu-item">Python相关</li>
                    <li class="menu-item">读书笔记</li>
                    <li class="menu-item">学习笔记</li>
                    <li class="menu-item">我的空间</li>
                    <li class="menu-item">在线工具</li>
                </ul>
            </div>
        </div>
        <div class="main">
            <router-view ></router-view>
        </div>
        <div class="footer">
            <p>
                <span>2018 © 博客后台管理系统 - Version: 1.0.0</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
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

                img{
                    height: 90px
                }
            }

            .menu-wrap{
                float: right;
                padding: 20px 0;
                margin-right: 30px;

                .menu-list{

                    .menu-item{
                        float: left;
                        line-height: 30px;
                        padding: 15px;
                        cursor: pointer;
                        color: #585858;
                        border-bottom: 2px solid transparent;
                    }

                    .menu-item:hover{
                        border-bottom: 2px solid #409EFF;
                        background-color: #f5f5f5;
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
            padding: 15px 0;
        }
    }
</style>
