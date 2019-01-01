<template lang="html">
    <div class="article-list-page">
        <div class="article-list-wrap">
            <ul class="article-list">
                <li class="article-item article-item-head">
                    <span class="article-addtime">添加时间</span>
                    <span class="article-title">标题</span>
                    <span class="article-click-times">点击率</span>
                </li>
                <li class="article-item article-item-body" v-for="(item,index) in 5" :key="index">
                    <span class="article-addtime">2018-12-29</span>
                    <span class="article-title">这是一个标题而已，不要太在意</span>
                    <span class="article-click-times">22</span>
                </li>
            </ul>
        </div>
        <div class="right-bar">
            <v-card></v-card>
            <v-card></v-card>
        </div>
    </div>
</template>

<script>
import vCard from '@/components/v_card/'
export default {
    components: {
        vCard
    },
    data() {
        return{

        }
    }
}
</script>

<style lang="less" scoped>
    .article-list-page{
        display: flex;
        justify-content: space-between;

        .article-list-wrap{
            width: 735px;
            padding: 15px;

            .article-list{

                .article-item{
                    padding: 12px 0;
                    border-bottom: 1px solid #ccc;
                    display: flex;

                    &.article-item-body{
                        .article-title{
                            color: #337ab7;
                            cursor: pointer;
                            line-height: 22px;
                        }

                        .article-title:hover{
                            text-decoration: underline;
                        }
                    }

                    .article-addtime{
                        width: 120px;
                        text-align: center;
                    }

                    .article-title{
                        width: 480px;
                        text-align: left;
                        padding-left: 20px;
                    }

                    .article-click-times{
                        width: 120px;
                        text-align: center;
                    }
                }
            }
        }

        .right-bar{
            width: 225px;
        }
    }
</style>
