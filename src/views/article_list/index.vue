<template lang="html">
    <div class="article-list-page">
        <div class="article-list-wrap">
            <ul class="article-list">
                <li class="article-item article-item-head">
                    <span class="article-addtime">添加时间</span>
                    <span class="article-title">标题</span>
                    <span class="article-click-times">点击率</span>
                </li>
                <li class="article-item article-item-body" v-for="item in articleList" :key="item.s_id">
                    <span class="article-addtime">{{item.create_time | timeStampFilter('{y}-{m}-{d}')}}</span>
                    <span class="article-title" @click="$router.push({path: '/article', query: {articleID: item.s_id}})">{{item.title}}</span>
                    <span class="article-click-times">{{item.click_times}}</span>
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
import { getCateArticle } from '@/api/'
export default {
    components: {
        vCard
    },
    data() {
        return{
            cateType: '',
            pageIndex: 1,
            articleList: []
        }
    },
    created() {
        this.getCateArticle()
    },
    watch: {
        '$route' (to, from) {
            this.getCateArticle()
        }
    },
    methods: {
        getCateArticle() {
            this.cateType = this.$route.params.category
            const sendData = {
                cateType: this.cateType,
                pageIndex: this.pageIndex
            }
            getCateArticle(sendData).then(res => {
                this.articleList = res.article_list;
            })
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
