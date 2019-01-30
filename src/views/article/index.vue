<template lang="html">
    <div class="article-page">
        <div class="article-content-wrap">
            <div class="article-content markdown" v-html="article.content_html">

            </div>
        </div>
        <div class="right-bar">
            <!-- <v-card></v-card>
            <v-card></v-card> -->
        </div>
    </div>
</template>

<script>
import vCard from '@/components/v_card/'
import {
	getArticle
} from '@/api/'

export default {
	components: {
		vCard
	},
	data() {
		return {
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
.article-page {
    display: flex;
    justify-content: space-between;

    .article-content-wrap {
        width: 735px;
        padding: 15px;

        .article-content {
            font-size: 12px;
            color: #111111;

        }
    }

    .right-bar {
        width: 225px;
    }
}

.markdown {
    margin-bottom: 60px;
    min-height: 700px;
    h1,h2,h3,h4{
      border-bottom: 1px solid #666;
    }
    h1{
      font-size: 30px;
      padding: 20px 0;
      margin: 30px 0;
    }
    h2{
      font-weight: 800;
      font-size: 20px;
      padding:20px 0;
      margin-bottom: 30px;
      border-color: #999;
    }
    h3{
      font-size: 20px;
      padding: 20px 0;
      margin-bottom: 30px;
      border-color: #999;
    }
    h4{
        font-size: 20px;
        padding: 20px 0;
        margin-bottom: 30px;
        border-color: #999;
    }
    p{
      line-height: 30px;
      font-size: 16px;
      margin:10px 5px;
      padding: 0 30px;
    }
    ul{
      li{
        p{
          padding: 0 20px 0 60px;
        }
        p:nth-child(1){
          font-weight: 800;
          padding: 0 30px;
        }
      }
    }
    pre{
      margin: 10px 30px;
      padding: 0 70px;
      line-height:20px;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }
    a{
      color: #005599;
      text-decoration:underline;
    }
}
</style>
