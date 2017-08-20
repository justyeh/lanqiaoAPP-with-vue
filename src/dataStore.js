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

    if (!store.has('authInfo')) {
        store.set('authInfo', {
            name: '叶文祥',
            sex: 'm',
            cardType: 0,
            cardId: 420921199307134561,
            school: '湖北工程学院',
            edu: 2,
            major: '计算机',
            stuNo: '012301714323',
            enrollment: '2012-09-01',
            graduation: '2016-07-01'
        })
    }

    if (!store.has('signInfo')) {
        store.set('signInfo', [
            {
                id: 1,
                child: 0,
                signed: 1
            },
            {
                id: 2,
                child: -1,
                signed: 0
            },
            {
                id: 3,
                child: 2,
                signed: 1
            },
            {
                id: 4,
                child: -1,
                signed: 0
            },
            {
                id: 5,
                child: -1,
                signed: 0
            },
            {
                id: 6,
                child: -1,
                signed: 0
            }
        ])
    }

}