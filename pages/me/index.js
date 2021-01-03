// pages/me/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    username:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    //获取头像
    wx.login({
      success:function(res){
        if(res.code){
          console.log(res)
        }else{
          console.log("获取用户登录态失败！" + res.errMsg);
        }
      }
    });  
    app.getUserInfo(function(res){
      //更新数据
      that.setData({
        userInfo:res
      })
      //console.log(res)
    })
  },

  gotoPersonalPage: function (options) {
    wx.navigateTo({
      url: '/pages/personaldata/index',//要跳转到的页面路径
    })
  },

  gotoSettingPage: function (options) {
    wx.navigateTo({
      url: '/pages/register/index',//要跳转到的页面路径
    })
  },

  gotoLoginPage: function (options) {
    wx.navigateTo({
      url: '/pages/login/index',//要跳转到的页面路径
    })
    try {
      wx.clearStorageSync()
    } catch(e) {
     // Do something when catch error
    }
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
    var that = this;
    wx.getStorage({
      key: 'username',
      success:function(res){
        that.setData({
          username:res.data
        });
      }
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