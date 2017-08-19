<template>
    <div class="about-page">
        
        <img :src="logo" class="logo">
        <div class="intro">
            蓝桥杯全国软件和信息技术专业人才大赛是一个面向全国大学生的专业性学科年度赛事。大赛本着“立足行业、突出实践、广泛参与、促进就业”的宗旨，着力于为行业提供公正、科学的全国性信息技术人才选拔和培养平台，培养和提升当代大学生的创新和实践能力。
        </div>
        <div class="intro">
            蓝桥杯大赛是全国规模最大的专业赛事，包括北大、清华等在内的全国31个省市自治区1200多所院校参加，每年参赛人数超过30000人。
        </div>
        <div class="info">
            <ul>
                <li>主办单位：工业和信息化部人才交流中心</li>
                <li>技术支持：蓝桥杯信息技术（北京）有限公司</li>
                <li>地址：北京市海淀区万寿路27号院工信部机关18#信箱</li>
                <li>邮编: 100846</li>
                <li>总机：4006-588-662</li>
                <li>传真：010-68208666</li>
                <li>联系邮箱：lanqiao@lanqiao.org</li>
                <li>商务合作：010-68208668 sunll@lanqiao.org</li>
            </ul>
        </div>
        <img :src="qrcode" class="qrcode">
    </div>
</template>

<script>
var logo = require('../../assets/img/logo.png')
var qrcode = require('../../assets/img/qrcode.png')

export default {
    data() {
        return {
            logo,
            qrcode
        }
    }
}
</script>

<style scoped>
img {
    display: block;
    margin: 20px auto;
}


p {
    text-align: center;
    color: #222;
    padding-bottom: 20px;
    color: #04acf7;
    font-size: 18px;
}

h2 {
    text-align: center;
    color: #04acf7;
    font-size: 26px;
    padding: 10px 0;
}

.intro {
    font-size: 14px;
    line-height: 24px;
    text-indent: 2em;
    padding: 0 20px;
    text-align: justify;
}

.info {
    padding: 20px;
}

.info li {
    padding-bottom: 10px;
}

.qrcode{
    width: 142px;
}
</style>

