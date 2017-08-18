<template>
    <div class="award-page">
        <h2>获奖记录</h2>
        <div class="table-box">
            <table>
                <thead>
                    <tr>
                        <th style="width:30px;"></th>
                        <th style="width:60px;">赛届</th>
                        <th style="width:auto;">比赛科目</th>
                        <th style="width:60px;">奖项</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(award,index) in awardList" :key="award.id">
                        <td>{{index}}</td>
                        <td>{{award.classes}}</td>
                        <td>{{award.subject}}</td>
                        <td>{{award.prize}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            awardList: [{
                id: 0,
                classes: '第八届',
                subject: 'Java软件开发省赛',
                prize: '一等奖'
            },
            {
                id: 0,
                classes: '第八届',
                subject: 'Java软件开发国赛',
                prize: '二等奖'
            }, {
                id: 0,
                classes: '第八届',
                subject: 'Java软件开发省赛',
                prize: '一等奖'
            }, {
                id: 0,
                classes: '第九届',
                subject: 'Java软件开发国赛',
                prize: '一等奖'
            }]
        }
    }
}
</script>

<style scoped>
.table-box {
    padding: 10px;
}

table {
    width: 100%;
    font-size: 12px;
}

td,
th {
    border: 1px solid #eee;
    padding: 10px 0;
    text-align: center;
}

h2 {
    text-align: center;
    background: #04acf7;
    color: #fff;
    padding: 10px 0;
}

th {
    font-weight: bold;
    color: #222;
}

td {
    color: #666;
}
</style>


