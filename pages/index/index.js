//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    content: [
      {
        img: '../images/1.png',
        title: '狂想情人',
        author: '作者:暗黑兔文化',
        con: '记住了，渣男必须死'
      }, {
        img: '../images/2.png',
        title: '魔法剩女攻略计划',
        author: '作者:漫语动漫',
        con: '变身魔法少女，再去恋爱'
      }, {
        img: '../images/3.png',
        title: '捉妞记',
        author: '作者:痴情叔德艺双馨',
        con: '老实人必看的恋爱宝典'
      }, {
        img: '../images/4.png',
        title: '神说要有光',
        author: '作者:MENJI是我',
        con: '救命，我变成女孩子了'
      }, {
        img: '../images/5.png',
        title: '仙庙',
        author: '作者:蜂群SWARM工作室',
        con: '他的成仙之路'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
