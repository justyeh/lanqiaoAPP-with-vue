const store = require('storejs');

export default function setData() {
    if (!store.has("settings")) {
        store.set('settings', {
            message: true,
            shake: true,
            voice: true
        })
    }

    if (!store.has("orderList")) {
        store.set('orderList', [
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
        ])
    }
}