<template lang="html">
    <div class="tax-page">

        <p class="salary-input-panel">
            每月工资：<input class="salary-input" type="text" v-model="salaryNumber">
        </p>
        <p class="salary-input-panel">
            额外税减：<input class="salary-input" type="text" v-model="monthSubTax">
        </p>
        <p class="salary-input-panel">
            每月扣缴：<input class="salary-input" type="text" v-model="monthSub">
            <span class="comput-button" @click="computTaxHandle">计算</span>
        </p>
        <ul class="tax-list">
            <li class="tax-month-item">
                <span>合计：</span>
                <span>{{sumTax.toFixed(2)}}</span>
            </li>
            <li class="tax-month-item">
                <span>平均每月：</span>
                <span>{{(sumTax/12).toFixed(2)}}（原{{(salaryNumber - monthSub - 5000) | filterOrigin}}）</span>
            </li>
            <li class="tax-month-item" v-for="(item,index) in monthTaxList" :key="index">
                <span>{{index+1}}月：</span>
                <span>{{item.toFixed(2)}}</span>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    data() {
        return {
            salaryNumber: '',
            monthSub: '',
            monthSubTax: '',
            subMoney: '',
            monthTaxList: []
        }
    },
    filters: {
        filterOrigin(data) {
            if(data < 0) {
                return 0
            } else if(data > 0 && data < 3000) {
                return data*0.03.toFixed(2)
            } else if(data >=3000 && data < 12000) {
                return (data*0.1 - 210).toFixed(2)
            } else if(data >=12000 && data < 25000) {
                return (data*0.2 - 16920/12).toFixed(2)
            } else if(data >=25000 && data < 35000) {
                return (data*0.25 - 31920/12).toFixed(2)
            }
            return data
        }
    },
    computed: {
        sumTax() {
            let sum = 0;
            for(let i = 0; i < this.monthTaxList.length; i++) {
                sum += this.monthTaxList[i];
            }
            return sum
        }
    },
    methods: {
        computTaxHandle() {
            let result = []
            let salaryNumber = this.salaryNumber
            let monthSub = +this.monthSub + +this.monthSubTax
            let deduckNum = 0
            for(let i = 1; i <= 12; i++) {
                // deduckNum = salaryNumber - 5000 - monthSub + deduckNum
                deduckNum = (salaryNumber - 5000 - monthSub) * i
                let curSubMoney;
                // console.log(deduckNum)
                let sumSub = 0;
                result.map(item => {
                    sumSub+=item
                    return item
                })
                if (deduckNum < 0) {
                    curSubMoney = 0
                }else if(deduckNum > 0 && deduckNum <= 36000) {
                    curSubMoney = deduckNum*0.03 - sumSub
                }else if(deduckNum >= 36000 && deduckNum < 144000) {
                    curSubMoney = deduckNum*0.1 - 2520 - sumSub
                }else if(deduckNum >= 144000 && deduckNum < 300000) {
                    curSubMoney = deduckNum*0.2 - 16920 - sumSub
                }else if(deduckNum >= 300000 && deduckNum < 420000) {
                    curSubMoney = deduckNum*0.25 - 31920 - sumSub
                }else if(deduckNum >= 420000 && deduckNum < 660000) {
                    curSubMoney = deduckNum*0.3 - 52920 - sumSub
                }else if(deduckNum >= 660000 && deduckNum < 960000) {
                    curSubMoney = deduckNum*0.35 - 85920 - sumSub
                }else {
                    return
                }
                result.push(curSubMoney)
            }
            this.monthTaxList = result
        }
    }
}
</script>

<style lang="less">
    .tax-page{
        width: 500px;
        margin: 100px auto 0;

        .salary-input-panel{
            .salary-input{
                height: 32px;
                font-size: 24px;
                text-indent: 10px;
            }

            .comput-button{
                display: inline-block;
                height: 32px;
                padding: 0 10px;
                margin-left: 10px;
                border: 1px solid #ccc;
                line-height: 32px;
                font-size: 16px;
                vertical-align: middle;
            }
        }

        .tax-list{

        }

    }
</style>
