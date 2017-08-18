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
import OrderBox from '../../components/OrderBox'
export default {

    data() {
        return {
            activeTab: 'tab1',
            orderList: [
                {
                    id: '20170808000004',
                    price: '200',
                    info: '第八届个人赛选拔赛报名费',
                    time: '2017-08-10 15:14:42',
                    state: 0
                },
                {
                    id: '20170810000005',
                    price: '200',
                    info: '第八届个人赛选拔赛报名费',
                    time: '2017-08-10 09:56:26',
                    state: 1
                },
                {
                    id: '20170808000013',
                    price: '200',
                    info: '第八届个人赛选拔赛报名费',
                    time: '2017-08-10 16:55:11',
                    state: 1
                }
            ]
        }
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
            window.alert('tab active')
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
