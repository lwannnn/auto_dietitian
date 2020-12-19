// pages/personaldata/editbloodsugar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      username: '',
      positions: ''
    },{
      username: '',
      positions: ''
    }], //默认显示2个
  },

  addInput: function() {
    var array = this.data.array;
    array.push({
      username: '',
      positions: ''
    });
    this.setData({
      array: array
    })
  },
  // username
  getInputVal:function(e){
    var that=this;
    var idx = e.target.dataset.idx;
    var array=that.data.array;
    var username=e.detail.value;
    for(var i=0;i<array.length;i++){
      if (i==idx){
        array[i].username = username;
      }
    }
    that.setData({
      array: array
    })
    console.log(array);
  },
  // 职位
  getInputPosi: function (e) {
    var that = this;
    var idx = e.target.dataset.idx;
    var array = that.data.array;
    var positions = e.detail.value;
    for (var i = 0; i < array.length; i++) {
      if (i == idx) {
        array[i].positions = positions;
      }
    }
    that.setData({
      array: array
    })
    console.log(array);
  },
  delInput:function(e){
    var array = this.data.array;
    var idx = e.target.dataset.idx;
    for(var i=0;i<array.length;i++){
      console.log();
      if (idx==i){
        array.splice(i,1);
      }
    }
    this.setData({
      array: array
    })
    console.log(array);
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