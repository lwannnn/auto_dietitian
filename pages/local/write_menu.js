// pages/local/write_menu.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_name: "",
    menu_time: '',
    menu_region: '',
    menu_privilege: '',
    menu_step: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getName: function (e) {
    this.setData({
      menu_name: e.detail.value
    })
  },
  goBack:function(){
    wx.reLaunch({
      url: '../local/index',
    })
  },
  getTime: function (e) {
    this.setData({
      menu_time: e.detail.value
    })
  },
  getRegion: function (e) {
    this.setData({
      menu_region: e.detail.value
    })
  },
  getPrivilege: function (e) {
    this.setData({
      menu_privilege: e.detail.value
    })
  },
  getStep: function (e) {
    this.setData({
      menu_step: e.detail.value
    })
  },
  submit_menu: function () {
    let menu={
      name:this.data.menu_name,
      time:this.data.menu_time,
      region:this.data.menu_region,
      privilege:this.data.menu_privilege,
      step:this.data.menu_step
    }
    app.globalData.menu=menu;
    console.log(app.globalData.menu)
    wx.showToast({
      title: '发布成功！',
    })
    setTimeout(() => {
      wx.reLaunch({
        url: '../local/index',
      })
    }, 1000)
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