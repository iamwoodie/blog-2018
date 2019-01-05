<template lang="html">
    <div class="v-paginate">
        <span class="total-num">共{{total}}条</span>
        <span class="toggle-button" @click="prePageHandle">上一页</span>
        <span>{{pageIndex}} / {{maxPage}}</span>
        <span class="toggle-button" @click="nextPageHandle">下一页</span>
    </div>
</template>

<script>
export default {
    data() {
        return {


        }
    },
    computed: {
        maxPage() {
            return Math.ceil(this.total/10)
        }
    },
    props: {
        pageIndex: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        }
    },
    methods: {
        prePageHandle() {
            if(this.pageIndex - 1 < 1) {
                return
            } else {
                this.$emit('pageChange', {
                    pageIndex: this.pageIndex-1
                })
            }
        },
        nextPageHandle() {
            if(this.pageIndex + 1 > this.maxPage) {
                return
            } else {
                this.$emit('pageChange', {
                    pageIndex: this.pageIndex+1
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .v-paginate{
        display: inline-flex;
        height: 28px;
        align-items: center;

        .toggle-button{
            padding: 0 10px;
            margin: 0 10px;
            border: 1px solid #ccc;
            background-color: #fff;
            border-radius: 3px;
            color: #666;
            cursor: pointer;

            &:hover{
                background-color: #337ab7;
                color: #fff;
                border-color: #337ab7;
            }
        }
    }
</style>
