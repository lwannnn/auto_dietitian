// pages/local/collect.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {//伪后端：根据全局数据判断用户收藏了哪些菜谱
    if(app.globalData.collect_name.includes('salad'))
    {
      this.setData({
        hasSalad:true
      })
    }
    if(app.globalData.collect_name.includes('egg'))
    {
      this.setData({
        hasEgg:true
      })
    }
    if(app.globalData.collect_name.includes('tudo'))
    {
      this.setData({
        hasTudo:true,
        menu:app.globalData.menu
      })
    }
  },

  goLocal:function(){//跳转到社区首页
    wx.reLaunch({
      url: '../local/index',
    })
  },
  goMe:function(){//跳转到社区我的
    wx.reLaunch({
      url: '../local/me',
    })
  },
  goCollect:  function(){//跳转到社区收藏
    wx.reLaunch({
      url: '../local/collect',
    })
  },
  
  goDetail: function (e) {////带参跳转到菜单详情页，参数为菜谱名
    wx.reLaunch({
      url: '../local/detail?name=' + e.currentTarget.dataset.name,
    })
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