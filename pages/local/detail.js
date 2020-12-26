// pages/local/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goBack:function(){
    wx.reLaunch({
      url: '../local/index',
    })
  },
})