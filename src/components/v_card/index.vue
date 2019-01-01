<template lang="html">
    <div class="card-wrap">
        <p class="card-name-panel">
            <span class="card-name">常用工具</span>
        </p>
        <ul class="card-list">
            <li class="card-item">测试列表11111</li>
            <li class="card-item">测试列表11111</li>
            <li class="card-item">测试列表11111</li>
            <li class="card-item">测试列表11111</li>
            <li class="card-item">测试列表11111</li>
        </ul>
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

<style lang="less" scoped>
    .card-wrap{
        margin-bottom: 20px;

        .card-name-panel{
            border-bottom: 1px solid #ccc;
            margin-bottom: 15px;

            .card-name{
                display: inline-block;
                padding: 5px 10px 5px 0;
                border-bottom: 2px solid #337ab7;
            }
        }

        .card-list{

            .card-item{
                font-size: 12px;
                color: #337ab7;
                padding-bottom: 5px;
                cursor: pointer;

                &:hover{
                    color: #66b1ff;
                }
            }
        }
    }
</style>
