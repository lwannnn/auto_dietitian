// pages/personaldata/index.js
//首先引入wxcharts.js插件
var wxCharts = require("../../utils/wxcharts.js");
//定义记录初始屏幕宽度比例，便于初始化
var windowW=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    riderCommentList: [{
      value: '麦片',
      selected: false ,
      title: '麦片'
    },{
      value: '白粥',
      selected: false ,
      title: '白粥'
    },{
      value: '面条',
      selected: false ,
      title: '面条'
    },{
      value: '米线',
      selected: false ,
      title: '米线'
    },{
      value: '面包',
      selected: false ,
      title: '面包'
    },{
      value: '馒头',
      selected: false ,
      title: '馒头'
    },{
      value: '包子',
      selected: false ,
      title: '包子'
    }]
  },

  gotoEditbloodPage: function (options) {
    wx.navigateTo({
      url: '/pages/personaldata/editbloodsugar',//要跳转到的页面路径
    })
  },
  gotoEditlistPage: function (options) {
    wx.navigateTo({
      url: '/pages/personaldata/editfoodlist',//要跳转到的页面路径
    })
  },

  checkboxChange(e){
    console.log('checkboxChange e:',e);
    let string = "riderCommentList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.riderCommentList[e.target.dataset.index].selected
        })
        let detailValue = this.data.riderCommentList.filter(it => it.selected).map(it => it.value)
        console.log('所有选中的值为：', detailValue)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    }) ;
    //console.log(this.data.imageWidth) ;
 
    //计算屏幕宽度比列
    windowW = this.data.imageWidth/375;
    //console.log(windowW);
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
    //lineCanvas
    new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['12-01', '12-02', '12-03', '12-04', '12-05'],
      animation: true,
      background: '#f5f5f5',
      series: [{
        name: '我的血糖值',
        data: [4, 4.2, 3.8, 5.3, 6],
        format: function (val, name) {
          return val.toFixed(1) + '毫摩尔';
        }
      }, {
        name: '最低血糖正常值',
        data: [3.9, 3.9, 3.9, 3.9, 3.9],
        format: function (val, name) {
          return val.toFixed(1) + '毫摩尔';
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '血糖值(毫摩/升)',
        format: function (val) {
          return val.toFixed(1);
        },
        min: 0
      },
      width: (375 * windowW),
      height: (200 * windowW),
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
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