// pages/personaldata/index.js
var app = getApp()
//首先引入wxcharts.js插件
var wxCharts = require("../../utils/wxcharts.js");
//定义记录初始屏幕宽度比例，便于初始化
var windowW=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    breakfastlistdata:[],
    lunchlistdata:[],
    supperlistdata:[],
    userInfo: {},
    username:'',
    height:'',
    weight:'',
  },

  gotoEditbloodPage: function () {
    wx.navigateTo({
      url: '/pages/personaldata/editbloodsugar',//要跳转到的页面路径
    })
  },
  gotoEditlistPage: function () {
    wx.redirectTo({
      url: '/pages/personaldata/editfoodlist',//要跳转到的页面路径
    })
  },

  displayFoodLists: function(options){
    if(options.foodLists!=undefined){
    //console.log(JSON.parse(decodeURIComponent(options.foodLists)));
    var foodlistdata=JSON.parse(decodeURIComponent(options.foodLists));
    console.log(foodlistdata);
    this.setData({
      foodlistdata:2,
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
    //获取基本信息
    wx.getStorage({
      key: 'username',
      success:function(res){
        that.setData({
          username:res.data
        });
      }
    })
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
    //图表
    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
    });
    //计算屏幕宽度比列
    windowW = this.data.imageWidth/375;

    //饮食记录
    if(options.foodLists!=undefined){
      //console.log(JSON.parse(decodeURIComponent(options.foodLists)));
      var foodlistdata=JSON.parse(decodeURIComponent(options.foodLists));
      console.log(foodlistdata);
      var a=JSON.stringify(foodlistdata);
      for(var i=0;i<foodlistdata.length;i++){
        if(foodlistdata[i].store_id==1 || foodlistdata[i].store_id==2 || foodlistdata[i].store_id==3){
          var item=[];
          item.push(foodlistdata[i].title+':'+foodlistdata[i].count+foodlistdata[i].unit_text);
          this.data.breakfastlistdata.push(item);
          this.setData({
            breakfastlistdata:this.data.breakfastlistdata,
          })
        }
        if(foodlistdata[i].store_id==4 || foodlistdata[i].store_id==5 || foodlistdata[i].store_id==6){
          var item=[];
          item.push(foodlistdata[i].title+':'+foodlistdata[i].count+foodlistdata[i].unit_text);
          this.data.lunchlistdata.push(item);
          this.setData({
            lunchlistdata:this.data.lunchlistdata,
          })
        }
        if(foodlistdata[i].store_id==7 || foodlistdata[i].store_id==8 || foodlistdata[i].store_id==9){
          var item=[];
          item.push(foodlistdata[i].title+':'+foodlistdata[i].count+foodlistdata[i].unit_text);
          this.data.supperlistdata.push(item);
          this.setData({
            supperlistdata:this.data.supperlistdata,
          })
        }
      }
    }
    else{
      this.setData({
        breakfastlistdata:"还没有记录噢",
        lunchlistdata:"还没有记录噢",
        supperlistdata:"还没有记录噢",
      })
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