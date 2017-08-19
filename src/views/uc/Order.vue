<template>
    <div class="order-page">
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" title="全部" />
            <mu-tab value="tab2" title="已完成" />
            <mu-tab value="tab3" title="未完成" />
        </mu-tabs>
        <div v-if="activeTab === 'tab1'">
            <div class="order-list">
                <template v-for="order in orderList">
                    <order-box :order="order" :key="order.id"></order-box>
                </template>
            </div>
        </div>
        <div v-if="activeTab === 'tab2'">
            <div class="order-list">
                <template v-for="order in payedOrderList">
                    <order-box :order="order" :key="order.id"></order-box>
                </template>
            </div>
        </div>
        <div v-if="activeTab === 'tab3'">
            <div class="order-list">
                <template v-for="order in nopayOrderList">
                    <order-box :order="order" :key="order.id"></order-box>
                </template>
            </div>
        </div>
    </div>
</template>


<script>
const store = require('storejs')
import OrderBox from '../../components/OrderBox'

export default {

    data() {
        return {
            activeTab: 'tab1',
            orderList: []
        }
    },
    created(){
         this.orderList =  store.get("orderList");
    },
    components: {
        OrderBox
    },
    computed: {
        payedOrderList() {
            return this.orderList.filter(order => {
                return order.state == 1
            })
        },
        nopayOrderList() {
            return this.orderList.filter(order => {
                return order.state == 0
            })
        }
    },
    methods: {
        handleTabChange(val) {
            this.activeTab = val
        },
        handleActive() {
           // window.alert('tab active')
        }
    }
}
</script>

<style scoped>
.order-list {
    padding: 10px;
}

.order-list>div {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.22);
    color: #666;
    margin: 10px 0;
    border-radius: 3px;
    overflow: hidden;
}
</style>
