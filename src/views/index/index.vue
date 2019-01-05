<template lang="html">
    <div class="index-page">
        <div class="latest-article-wrap">
            <ul class="latest-article-list">
                <li class="latest-article-item" v-for="item in latestArticle" :key="item.s_id">
                    <h4 class="title-panel">
                        <span class="title">{{item.title}}</span>
                    </h4>
                    <p class="article-info-panel">
                        <span class="article-type">原创</span>
                        <span class="article-update-time">更新时间：{{item.update_time | timeStampFilter}}</span>
                        <span class="article-cate">[读书笔记]</span>
                    </p>
                    <p class="article-paragraph-panel" @click="$router.push({path: '/article', query: {articleID: item.s_id}})">
                        {{item.desc | autoAddEllipsis(220)}}
                    </p>
                    <p class="visitor-info-panel">
                        <span class="read-all" @click="$router.push({path: '/article', query: {articleID: item.s_id}})">阅读全文</span>
                        <span class="read-times">阅读({{item.click_times}})</span>
                        <span class="comment-times">评论({{item.comments_num}})</span>
                    </p>
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
import { getLatestArticle } from '@/api/'

export default {
    components: {
        vCard
    },
    data() {
        return {
            latestArticle: []
        }
    },
    created() {
        this.getLatestArticle()
    },
    methods: {
        getLatestArticle() {
            getLatestArticle().then(res => {
                this.latestArticle = res
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .index-page{
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .latest-article-wrap{
            width: 735px;
            padding: 15px;

            .latest-article-list{
                padding-left: 0;

                .latest-article-item{
                    margin-bottom: 20px;
                    border: 1px solid #e5e5e5;
                    padding: 5px 20px;
                    opacity: 0.7;
                    transition: opacity .5s;
                    border-radius: 3px;

                    &:hover{
                        background-color: #fff;
                        opacity: 1;
                        box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2);
                    }

                    .title-panel{
                        font-size: 18px;
                        margin: 10px 0;

                        .title{
                            display: inline-block;
                            padding: 3px;
                            color: #337ab7;
                            cursor: pointer;
                            transform: translateX(0);
                            transition: transform 0.5s;

                            &:hover{
                                background-color: #337ab7;
                                color: #fff;
                                transform: translateX(10px);
                            }
                        }
                    }

                    .article-info-panel{

                        &>span{
                            color: #666;
                            padding: 3px 5px;
                        }

                        .article-type{
                            font-size: 12px;
                            color: #fff;
                            background-color: #337ab7;
                            border-radius: 3px;
                        }

                        .article-cate{
                            color: #337ab7;
                            cursor: pointer;
                            line-height: 22px;
                            border-radius: 5px;

                            &:hover{
                                background-color: #337ab7;
                                color: #fff;
                            }
                        }
                    }

                    .article-paragraph-panel{
                        word-break: break-all;
                        height: 63px;
                        overflow: hidden;
                        text-indent: 2em;
                        cursor: pointer;
                    }

                    .visitor-info-panel{

                        &>span{
                            color: #666;
                            padding: 3px 5px;
                        }

                        .read-all{
                            color: #337ab7;
                            cursor: pointer;
                            line-height: 22px;
                            border-radius: 5px;

                            &:hover{
                                background-color: #337ab7;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }

        .right-bar {
            width: 225px;
        }
    }
</style>
