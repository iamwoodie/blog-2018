<template lang="html">
    <div class="article-page">
        <div class="article-content-wrap">
            <div class="article-content markdown" v-html="article.content_html">

            </div>
        </div>
        <div class="right-bar">
            <v-card></v-card>
            <v-card></v-card>
        </div>
    </div>
</template>

<script>
import vCard from '@/components/v_card/'
import { getArticle } from '@/api/'
import './markdown.css'

export default {
    components: {
        vCard
    },
    data() {
        return{
            article: {

            }
        }
    },
    created() {
        this.articleID = this.$route.query.articleID
    },
    mounted() {
        this.getArticleHandle()
    },
    methods: {
        getArticleHandle() {
            getArticle(this.articleID).then(res => {
                this.article = res;
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="less">
    @import './markdown.css';
    .article-page{
        display: flex;
        justify-content: space-between;

        .article-content-wrap{
            width: 735px;
            padding: 15px;

            .article-content{

            }
        }

        .right-bar{
            width: 225px;
        }
    }
</style>
