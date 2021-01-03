// pages/local/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //页面加载函数：获取用户名、编写的菜单（伪后端）
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getStorage({
      key: 'username',
      success:function(res){
        that.setData({
          username:res.data//当前登录的用户名
        });
      }
    })
    if(app.globalData.menu)
    {
      this.setData({
        hasMenu:true,//是否编写过菜单
        menu:app.globalData.menu
      })
    }
  },
  goLocal: function () {//跳转到社区首页
    wx.navigateTo({
      url: '../local/index',
    })
  },
  goMe: function () {//跳转到社区我的
    wx.navigateTo({
      url: '../local/me',
    })
  },
  goDetail: function (e) {//带参跳转到菜单详情页，参数为菜谱名
    wx.reLaunch({
      url: '../local/detail?name=' + e.currentTarget.dataset.name,
    })
  },
  toWrite: function () {//跳转到菜单编辑页
    wx.reLaunch({
      url: '../local/write_menu',
    })
  },
  goCollect: function () {//跳转到社区收藏
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