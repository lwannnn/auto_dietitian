// pages/register/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:"",
    weight:"",
    info:"",
  },

  //获取用户输入的用户名
  heightInput: function(e) {
    this.setData({
      height: e.detail.value
    })
  },
  weightInput: function(e) {
    this.setData({
      weight: e.detail.value
    })
  },
  infoInput: function(e) {
    this.setData({
      info: e.detail.value
    })
  },

  submit: function(){
    try {
      wx.setStorageSync('height', this.data.height)
    } catch (e) { }
    wx.setStorage({
      key: "weight",
      data: this.data.weight,
      success:function(res){
        console.log(res);
      }
    })
    wx.setStorage({
      key: "avoidfood",
      data: this.data.info,
      success:function(res){
        console.log(res);
      }
    })
    wx.switchTab({
      url: '/pages/me/index',//要跳转到的页面路径
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取基本信息
    wx.getStorage({
      key: 'height',
      success:function(res){
        that.setData({
          height:res.data
        });
      }
    })
    wx.getStorage({
      key: 'weight',
      success:function(res){
        that.setData({
          weight:res.data
        });
      }
    })
    wx.getStorage({
      key: 'avoidfood',
      success:function(res){
        that.setData({
          info:res.data
        });
      }
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