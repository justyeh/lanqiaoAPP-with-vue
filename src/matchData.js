const matchData = [
    {
        id: 1,
        type: 0,
        name: '用户体验设计赛',
        child: ['品牌设计', '智能手机应用设计'],
        price: 300,
        remarks: [
            '1.智能手机应用设计类：300元/人（包括手机壁纸设计、手机图标设计、表情包设计；三个科目均可提交作品，数量不限）。',
            '2.品牌设计类：300元/人（包括蓝桥LOGO设计、蓝桥吉祥物设计、蓝桥设计之美H5设计；三个科目均可提交作品，数量不限）。',
            '3.报名完成后，请在作品上传截止时间前上传参赛作品。'
        ]
    },
    {
        id: 2,
        type: 0,
        name: '单片机设计与开发',
        child: ['大学组'],
        price: 300,
        remarks: [
            '一名学生只能报名软件类或电子类的一个科目',
            '具有正式学籍的在校全日制本科及高职高专学生(以报名时状态为准)，以个人为单位进行比赛。该专业方向设单片机设计与开发组',
        ]
    },
    {
        id: 3,
        type: 0,
        name: '嵌入式设计与开发',
        child: ['大学组'],
        price: 300,
        remarks: [
            '一名学生只能报名软件类或电子类的一个科目',
            '具有正式学籍的在校全日制研究生、本科及高职高专学生(以报名时状态为准)，以个人为单位进行比赛。该专业方向设嵌入式设计与开发组',
        ]
    },
    {
        id: 4,
        type: 0,
        name: 'C/C++程序设计',
        child: ['大学A组', '大学B组', '大学C组'],
        price: 300,
        remarks: [
            '一名学生只能报名软件类或电子类的一个科目',
            '985、211本科生只能报大学A组，所有院校研究生只能报大学A组，其它院校本科生可自行选择报大学A组或大学B组，高职高专院校可报大学C组或自行选择报任意组别',
        ]
    },
    {
        id: 5,
        type: 0,
        name: 'Java软件开发',
        child: ['大学A组', '大学B组', '大学C组'],
        price: 300,
        remarks: [
            '一名学生只能报名软件类或电子类的一个科目',
            '985、211本科生只能报大学A组，所有院校研究生只能报大学A组，其它院校本科生可自行选择报大学A组或大学B组，高职高专院校可报大学C组或自行选择报任意组别'
        ]
    },
    {
        id: 6,
        type: 1,
        name: '软件创业团队赛',
        child: [],
        teamInfo:'第七届蓝桥杯软件创业团队赛特等奖，由西南财经大学的「天府决」团队获得。这是一个针对地区体育场馆预约，赛事安排，活动推广而开发的移动互联网项目。大赛组委会为其提供5万元创业扶持奖金。',
        price: null,
        remarks: [
            '本届团队赛设置软件创业团队赛，参赛作品限定主题为“互联网+”领域，由每个参赛队独立设计一个移动互联领域具有创新性和实用性的应用系统或软件架构。参赛方案应面向真实应用，需综合考虑业务模型、技术实现方案、商业可行性等各种因素，提供完整解决方案或设计思路。',
        ]
    }
]

export default matchData;