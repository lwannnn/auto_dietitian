// pages/personaldata/editbloodsugar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      date: '',
      quantity: ''
    },{
      date: '',
      quantity: ''
    },{
      date: '',
      quantity: ''
    },{
      date: '',
      quantity: ''
    },{
      date: '',
      quantity: ''
    }], //默认显示5个
  },

  addInput: function() {
    var array = this.data.array;
    array.push({
      date: '',
      quantity: ''
    });
    this.setData({
      array: array
    })
  },
  // date
  getInputVal:function(e){
    var that=this;
    var idx = e.target.dataset.idx;
    var array=that.data.array;
    var date=e.detail.value;
    for(var i=0;i<array.length;i++){
      if (i==idx){
        array[i].date = date;
      }
    }
    that.setData({
      array: array
    })
  },
  // quantity
  getInputPosi: function (e) {
    var that = this;
    var idx = e.target.dataset.idx;
    var array = that.data.array;
    var quantity = e.detail.value;
    for (var i = 0; i < array.length; i++) {
      if (i == idx) {
        array[i].quantity = quantity;
      }
    }
    that.setData({
      array: array
    })
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
  },

  submit:function(){
    wx.setStorage({//存储到本地
      key:"array",
      data:this.data.array
    })
    console.log(this.data.array)
    //redirectTo：关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar设置的 页面。
    wx.redirectTo({
      url: '/pages/personaldata/index',//要跳转到的页面路径
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({//存储到本地
      key:"array",
      data:[]
    })
    console.log(this.data.array)
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