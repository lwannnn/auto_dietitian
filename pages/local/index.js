// pages/local/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getStorage({
      key: 'username',
      success:function(res){
        that.setData({
          username:res.data
        });
      }
    })
    if(app.globalData.menu)
    {
      this.setData({
        hasMenu:true,
        menu:app.globalData.menu
      })
    }
  },
  goLocal: function () {
    wx.navigateTo({
      url: '../local/index',
    })
  },
  goMe: function () {
    wx.navigateTo({
      url: '../local/me',
    })
  },
  goDetail: function (e) {
    wx.reLaunch({
      url: '../local/detail?name=' + e.currentTarget.dataset.name,
    })
  },
  toWrite: function () {
    wx.reLaunch({
      url: '../local/write_menu',
    })
  },
  goCollect: function () {
    wx.reLaunch({
      url: '../local/collect',
    })
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