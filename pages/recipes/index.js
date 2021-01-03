// pages/recipes/index.js
Page({
  data: {
    items: [
      //几个食谱界面
      { name: '1', value: '1',imageUrl:'img/radio1.png' },
      { name: '2', value: '2', checked: 'true',imageUrl:'img/radio2.png' },
      { name: '3', value: '3',imageUrl:'img/radio3.png' },
    ],
    addValue:'2'
  },
  radioChange: function (e) {
    this.setData({
      addValue:e.detail.value
    })
  },
  //导航函数
search: function () {
  console.log(this.data.addValue)
  if(this.data.addValue==='1')
  {
    wx.navigateTo({
      url: '../recipes/recipe1'
    })
  }
  if(this.data.addValue==='2')
  {
    wx.navigateTo({
      url: '../recipes/recipe2'
    })
  }
  if(this.data.addValue==='3')
  {
    wx.navigateTo({
      url: '../recipes/recipe3'
    })
  }
      
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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