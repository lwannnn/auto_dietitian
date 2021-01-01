// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    inusername:'',
    inpassword:''
  },

  // 获取输入账号
  inusername: function(e) {
    this.setData({
      inusername: e.detail.value
    })
  },

  // 获取输入密码
  inpassword: function(e) {
    this.setData({
      inpassword: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'username',
      success:function(res){
        that.setData({
          username:res.data
        });
      }
    })
    wx.getStorage({
      key: 'password',
      success:function(res){
        that.setData({
          password:res.data
        });
      }
    })
  },

  // 登录
  login: function(){
    if(this.data.inusername==this.data.username && this.data.inpassword==this.data.password){
      wx.showToast({
        title: '登陆成功',
        icon: 'none',
        duration: 2000
      })
      wx.switchTab({
        url: '/pages/index/index', //要跳转到的页面路径
        })
    }
    else if(this.data.username.length == 0 || this.data.password.length == 0){
      wx.showToast({
        title: '用户不存在',
        icon: 'none',
        duration: 2000
      })
    }
    else{
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none',
        duration: 2000
      })
    }
  },

  gotoRegisterPage: function (options) {
    wx.navigateTo({
      url: '/pages/login/register',//要跳转到的页面路径
    })
  },

  gotoIndexPage: function (options) {
    wx.switchTab({
    url: '/pages/index/index', //要跳转到的页面路径
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