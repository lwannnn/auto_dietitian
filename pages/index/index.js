//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    height:'',
    weight:'',
    avoidfood:'',
    breakfastlistdata:'',
    lunchlistdata:'',
    supperlistdata:'',
    userInfo: {},
    currentdate:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bind1:function(){
    wx.navigateTo({
      url: '../science/index'
    })
  },
  bind2:function(){
    wx.navigateTo({
      url: '../personaldata/index'
    })
  },
  bind3:function(){
    wx.navigateTo({
      url: '../personaldata/editbloodsugar'
    })
  },
  bind4:function(){
    wx.navigateTo({
      url: '../recipes/index'
    })
  },
  bind5:function(){
    wx.navigateTo({
      url: '../search/index'
    })
  },
  onLoad: function () {
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年份  
    var Y =date.getFullYear();
    //获取月份  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    this.setData({
      currentdate: Y + '.'  + M+ '.' + D
    })
    console.log("当前时间：" + Y + '年'  + M+ '月' + D+ '日' );
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.setData({
      count:'00:00:'+app.globalData.count
    })
 
   
    var timer=setInterval(()=>{
      if(app.globalData.count>0)
      {
        app.globalData.count--;
        this.setData({
          count:'00:00:'+app.globalData.count
        })
      }
       else
       {
        wx.showModal({
          title: '该喝水啦',
          content: '到了喝水时间了哦',
          cancelText:'待会再喝',
          confirmText:'喝啦',
          success(res){
            clearInterval(timer)
            if(res.cancel){
              app.globalData.count=60;
            }else if(res.confirm){
              wx.showToast({
                title: '你真棒！',
              })
              
            }
          }
        })
       } 
    },1000);
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取信息
    var that = this;
    setTimeout(() => {
            
      wx.getStorage({
        key: "height",
        success: res =>{
          this.setData({
            height: res.data
          })
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
            avoidfood:res.data
          });
        }
      }) 
      wx.getStorage({
        key: 'breakfastlistdata',
        success:function(res){
          that.setData({
            breakfastlistdata:res.data
          });
        }
      }) 
      wx.getStorage({
        key: 'lunchlistdata',
        success:function(res){
          that.setData({
            lunchlistdata:res.data
          });
        }
      }) 
      wx.getStorage({
        key: 'supperlistdata',
        success:function(res){
          that.setData({
            supperlistdata:res.data
          });
        }
      }) 
    }, 1000)
  },
})
