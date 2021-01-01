// pages/login/register.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    height:'',
    weight:'',
    userInfo: {},
    switchChecked:false,
  },
   // 获取输入账号
   username: function(e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  password: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
   // 获取输入身高
   height: function(e) {
    this.setData({
      height: e.detail.value
    })
  },

  // 获取输入体重
  weight: function(e) {
    this.setData({
      weight: e.detail.value
    })
  },

  switchChange: function (e){
    console.log(`Switch样式点击后是否选中：`, e.detail.value)
    this.setData({
      switchChecked:e.detail.value
    })
  },

    // 注册
  region: function() {
    if (this.data.height.length == 0 || this.data.password.length == 0 || this.data.weight.length == 0 || this.data.username.length == 0) {
      wx.showToast({
        title: '请输入信息',
        icon: 'none',
        duration: 2000
      })
    }
    else if(this.data.switchChecked==false){
      wx.showToast({
        title: '请同意条款',
        icon: 'none',
        duration: 2000
      })
    }
    else {
      console.log(this.data.username);
      wx.setStorage({//存储到本地
        key:"username",
        data:this.data.username
      })
      wx.setStorage({//存储到本地
        key:"password",
        data:this.data.password
      })
      wx.setStorage({//存储到本地
        key:"height",
        data:this.data.height
      })
      wx.setStorage({//存储到本地
        key:"weight",
        data:this.data.weight,
        success:function(){
          wx.showToast({
            title: '注册成功',
            icon: 'none',
            duration: 2000
          })
        }
      })
      wx.navigateTo({
        url: '/pages/login/login',//要跳转到的页面路径
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    
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

  gotoDocumentPage: function (options) {
    wx.navigateTo({
      url: '/pages/login/document',//要跳转到的页面路径
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