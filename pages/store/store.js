// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      {
        img:'../images/7.png',
        tit:'放送表'
      }, {
        img: '../images/8.png',
        tit: '分类'
      }, {
        img: '../images/9.png',
        tit: '榜单'
      }, {
        img: '../images/10.png',
        tit: '完结'
      }
    ],
    content:[
      {
        img:'../images/1.png',
        title:'狂想情人',
        author:'作者:暗黑兔文化',
        con:'记住了，渣男必须死'
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
  bindViewTap: function () {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
