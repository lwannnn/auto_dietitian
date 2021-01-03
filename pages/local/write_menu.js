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
  getName: function (e) {//获取菜谱名
    this.setData({
      menu_name: e.detail.value
    })
  },
  goBack:function(){//返回到社区首页
    wx.reLaunch({
      url: '../local/index',
    })
  },
  getTime: function (e) {//获取菜谱制作时间
    this.setData({
      menu_time: e.detail.value
    })
  },
  getRegion: function (e) {//获取菜谱原材料
    this.setData({
      menu_region: e.detail.value
    })
  },
  getPrivilege: function (e) {//获取食谱好处
    this.setData({
      menu_privilege: e.detail.value
    })
  },
  getStep: function (e) {//获取制作步骤
    this.setData({
      menu_step: e.detail.value
    })
  },
  submit_menu: function () {//提交菜单
    let menu={
      name:this.data.menu_name,
      time:this.data.menu_time,
      region:this.data.menu_region,
      privilege:this.data.menu_privilege,
      step:this.data.menu_step
    }
    app.globalData.menu=menu;//伪后端：提交菜谱数据到全局函数
    console.log(app.globalData.menu)
    wx.showToast({//提示
      title: '发布成功！',
    })
    setTimeout(() => {//退到社区首页
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