<template>
    <div :class="orderClass">
        <div class="header">
            <p>订单编号:{{order.id}}</p>
            <p>{{order.state == 1 ? '订单生成失败' : '订单生成失败'}}</p>
        </div>
        <mu-divider/>
        <div class="body">
            <p>{{order.info}}</p>
            <p>{{order.time}}</p>
        </div>
        <mu-divider/>
        <div class="footer">
            <p>¥ {{order.price}}</p>
            <mu-icon :value="order.state == 1 ? 'done':'close'" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['order'],
    computed:{
        orderClass(){
            return this.order.state == 1 ? 'payed' : 'nopay'
        }
    }
}
</script>


<style scoped>
.header,
.footer {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.body {
    padding: 15px;
}

.footer p:first-child {
    color: #666;
}

.payed .header {
    background: #04acf7;
}

.payed .mu-icon {
    color: #04acf7;
    font-size: 30px;
}

.nopay .header {
    background: #ff4081;
}
</style>
