// pages/local/detail.js
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },
onLoad:function(options)
{
  var that = this
  //调用应用实例的方法获取全局数据
  wx.getStorage({
    key: 'username',
    success:function(res){
      that.setData({
        username:res.data
      });
    }
  })
  this.setData({
    name:options.name
  })
  if(app.globalData.menu)
  {
    this.setData({
      hasMenu:true,
      menu:app.globalData.menu
    })
  }
},
  goBack:function(){
    wx.reLaunch({
      url: '../local/index',
    })
  },
  collectIt:function(e)
  {
    if(app.globalData.collect_name.includes(this.data.name))
    {
      wx.showToast({
        title: '您已经收藏过该菜谱，可以在您的收藏中查看',
        icon:'none'
      })
    }
    else
    {
      app.globalData.collect_name.push(this.data.name);
      console.log(app.globalData.collect_name)
      wx.showToast({
        title: '收藏成功！',
      })
    }
   
  }
})