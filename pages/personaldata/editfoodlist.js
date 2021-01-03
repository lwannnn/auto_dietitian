// pages/personaldata/editfoodlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BreakfastList: [
      {
      "store_id": 1,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 1,
          "title": "米饭",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 300,
          "store_id": 1,
          "title": "白粥",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 350,
          "store_id": 1,
          "title": "面条",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 350,
          "store_id": 1,
          "title": "米线",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 250,
          "store_id": 1,
          "title": "麦片",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "主食"
      }]
    }, {
      "store_id": 2,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 2,
          "title": "粉丝包",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 100,
          "store_id": 2,
          "title": "酸菜包",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 100,
          "store_id": 2,
          "title": "猪肉包",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 200,
          "store_id": 2,
          "title": "紫菜卷",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 300,
          "store_id": 2,
          "title": "鸡蛋卷",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 6,
          "count": 200,
          "store_id": 2,
          "title": "牛肉饼",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 7,
          "count": 200,
          "store_id": 2,
          "title": "奶黄包",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "面点"
      }]
    },
    {
      "store_id": 3,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 3,
          "title": "豆浆",
          "category_id": 6,
          "unit_text": "ml"
        }, {
          "goods_id": 2,
          "count": 200,
          "store_id": 3,
          "title": "牛奶",
          "category_id": 6,
          "unit_text": "ml"
        }, {
          "goods_id": 3,
          "count": 200,
          "store_id": 3,
          "title": "酸奶",
          "category_id": 6,
          "unit_text": "ml"
        }, {
          "goods_id": 4,
          "count": 200,
          "store_id": 3,
          "title": "豆奶",
          "category_id": 6,
          "unit_text": "ml"
        }, {
          "goods_id": 5,
          "count": 200,
          "store_id": 3,
          "title": "咖啡",
          "category_id": 6,
          "unit_text": "ml"
        }],
        "category_title": "饮品"
      }]
    }],
    LunchList: [{
      "store_id": 4,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 4,
          "title": "米饭",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 300,
          "store_id": 4,
          "title": "白粥",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 350,
          "store_id": 4,
          "title": "面条",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 350,
          "store_id": 4,
          "title": "米线",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 250,
          "store_id": 4,
          "title": "麦片",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "主食"
      }]
    }, {
      "store_id": 5,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 5,
          "title": "牛肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 100,
          "store_id": 5,
          "title": "猪肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 100,
          "store_id": 5,
          "title": "羊肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 200,
          "store_id": 5,
          "title": "鸡肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 300,
          "store_id": 5,
          "title": "鸭肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 6,
          "count": 200,
          "store_id": 5,
          "title": "鱼肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 7,
          "count": 200,
          "store_id": 5,
          "title": "虾仁",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "肉类"
      }]
    },
    {
      "store_id": 6,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 6,
          "title": "大白菜",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 200,
          "store_id": 6,
          "title": "生菜",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 200,
          "store_id": 6,
          "title": "上海青",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 200,
          "store_id": 6,
          "title": "菜花",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 200,
          "store_id": 6,
          "title": "西兰花",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "菜类"
      }]
    }],
    SupperList: [{
      "store_id": 7,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 7,
          "title": "米饭",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 300,
          "store_id": 7,
          "title": "白粥",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 350,
          "store_id": 7,
          "title": "面条",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 350,
          "store_id": 7,
          "title": "米线",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 250,
          "store_id": 7,
          "title": "麦片",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "主食"
      }]
    }, {
      "store_id": 8,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 8,
          "title": "牛肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 100,
          "store_id": 8,
          "title": "猪肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 100,
          "store_id": 8,
          "title": "羊肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 200,
          "store_id": 8,
          "title": "鸡肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 300,
          "store_id": 8,
          "title": "鸭肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 6,
          "count": 200,
          "store_id": 8,
          "title": "鱼肉",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 7,
          "count": 200,
          "store_id": 8,
          "title": "虾仁",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "肉类"
      }]
    },
    {
      "store_id": 9,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "goods_id": 1,
          "count": 200,
          "store_id": 9,
          "title": "大白菜",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 2,
          "count": 200,
          "store_id": 9,
          "title": "生菜",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 3,
          "count": 200,
          "store_id": 9,
          "title": "上海青",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 4,
          "count": 200,
          "store_id": 9,
          "title": "菜花",
          "category_id": 6,
          "unit_text": "g"
        }, {
          "goods_id": 5,
          "count": 200,
          "store_id": 9,
          "title": "西兰花",
          "category_id": 6,
          "unit_text": "g"
        }],
        "category_title": "菜类"
      }]
    }]
  },

  editText:function(e){
    var store_id = e.currentTarget.dataset.store_id;
    var goods_id = e.currentTarget.dataset.goods_id;
    goods_id=goods_id-1; 
    var food_count = e.currentTarget.dataset.count;
    console.log(store_id);
    console.log(goods_id);
    console.log(food_count);
    //输入的值
    var value = e.detail.value;
    //动态拼装设值的属性
    if(store_id<=3){
      store_id=store_id-1;
      var _target = `BreakfastList[${store_id}].category_item[0].goods_item[${goods_id}].count`
    }
    else if(store_id<=6&&store_id>3){
      store_id=store_id-4;
      var _target = `LunchList[${store_id}].category_item[0].goods_item[${goods_id}].count`
    }
    else if(store_id<=9&&store_id>6){
      store_id=store_id-7;
      var _target = `SupperList[${store_id}].category_item[0].goods_item[${goods_id}].count`
    }
    //赋值
    this.setData({
        [_target] : value   //重要！！！   中括号[]必不可少，否则不生效
    })
  },

/**
 * 一级选择
 */
checkboxChange: function (e) {
  var that = this
  var BreakfastList = this.data.BreakfastList;
  var LunchList = this.data.LunchList;
  var SupperList = this.data.SupperList;
  var store_id = e.currentTarget.dataset.store_id; //一级id
  var checkArr = e.currentTarget.dataset.parent_id; //一级id
  for (var i = 0; i < BreakfastList.length; i++) {
    if (BreakfastList[i].store_id == store_id) {
      BreakfastList[i].category_item[checkArr].checked = !BreakfastList[i].category_item[checkArr].checked;//被选中元素状态改变，未选择改为选择，选择改为未选择
      if (BreakfastList[i].category_item[checkArr].checked == true) {//全选某一大类，则子项全部被选择
        for (var j = 0; j < BreakfastList[i].category_item[checkArr].goods_item.length; j++) {
          BreakfastList[i].category_item[checkArr].goods_item[j].checked = true;
        }
      } else {
        for (var j = 0; j < BreakfastList[i].category_item[checkArr].goods_item.length; j++) {
          BreakfastList[i].category_item[checkArr].goods_item[j].checked = false;
        }
      }
    }
  }
  for (var i = 0; i < LunchList.length; i++) {
    if (LunchList[i].store_id == store_id) {
      LunchList[i].category_item[checkArr].checked = !LunchList[i].category_item[checkArr].checked;//被选中元素状态改变，未选择改为选择，选择改为未选择
      if (LunchList[i].category_item[checkArr].checked == true) {//全选某一大类，则子项全部被选择
        for (var j = 0; j < LunchList[i].category_item[checkArr].goods_item.length; j++) {
          LunchList[i].category_item[checkArr].goods_item[j].checked = true;
        }
      } else {
        for (var j = 0; j < LunchList[i].category_item[checkArr].goods_item.length; j++) {
          LunchList[i].category_item[checkArr].goods_item[j].checked = false;
        }
      }
    }
  }
  for (var i = 0; i < SupperList.length; i++) {
    if (SupperList[i].store_id == store_id) {
      SupperList[i].category_item[checkArr].checked = !SupperList[i].category_item[checkArr].checked;//被选中元素状态改变，未选择改为选择，选择改为未选择
      if (SupperList[i].category_item[checkArr].checked == true) {//全选某一大类，则子项全部被选择
        for (var j = 0; j < SupperList[i].category_item[checkArr].goods_item.length; j++) {
          SupperList[i].category_item[checkArr].goods_item[j].checked = true;
        }
      } else {
        for (var j = 0; j < SupperList[i].category_item[checkArr].goods_item.length; j++) {
          SupperList[i].category_item[checkArr].goods_item[j].checked = false;
        }
      }
    }
  }
  that.selectLists()
  this.setData({
    BreakfastList: BreakfastList,
    LunchList: LunchList,
    SupperList: SupperList
  })
},
/**
 * 二级选择
 */
childChange: function (e) {
  var that = this;
  var BreakfastList = that.data.BreakfastList;
  var LunchList = that.data.LunchList;
  var SupperList = that.data.SupperList;
  var store_id = e.currentTarget.dataset.store_id;
  var category_id = e.currentTarget.dataset.category_id;
  var id = e.currentTarget.dataset.id; //二级的
  for (var i = 0; i < BreakfastList.length; i++) {
    if (BreakfastList[i].store_id == store_id) {
      for (var j = 0; j < BreakfastList[i].category_item.length; j++) {
        if (BreakfastList[i].category_item[j].category_id == category_id) {
          BreakfastList[i].category_item[j].goods_item[id].checked = !BreakfastList[i].category_item[j].goods_item[id].checked;//被选中元素状态改变，未选择改为选择，选择改为未选择
          var cheackListOne = [];
          for (var k = 0; k < BreakfastList[i].category_item[j].goods_item.length; k++) {
            if (BreakfastList[i].category_item[j].goods_item[k].checked == true) {
              cheackListOne.push(BreakfastList[i].category_item[j].goods_item[k].checked);
            }
            if (BreakfastList[i].category_item[j].goods_item.length == cheackListOne.length) {
              BreakfastList[i].category_item[j].checked = true;
            } else {
              BreakfastList[i].category_item[j].checked = false;
            }
          }
        }
      }
    }
  }
  for (var i = 0; i < LunchList.length; i++) {
    if (LunchList[i].store_id == store_id) {
      for (var j = 0; j < LunchList[i].category_item.length; j++) {
        if (LunchList[i].category_item[j].category_id == category_id) {
          LunchList[i].category_item[j].goods_item[id].checked = !LunchList[i].category_item[j].goods_item[id].checked;//被选中元素状态改变，未选择改为选择，选择改为未选择
          var cheackListOne = [];
          for (var k = 0; k < LunchList[i].category_item[j].goods_item.length; k++) {
            if (LunchList[i].category_item[j].goods_item[k].checked == true) {
              cheackListOne.push(LunchList[i].category_item[j].goods_item[k].checked);
            }
            if (LunchList[i].category_item[j].goods_item.length == cheackListOne.length) {
              LunchList[i].category_item[j].checked = true;
            } else {
              LunchList[i].category_item[j].checked = false;
            }
          }
        }
      }
    }
  }
  for (var i = 0; i < SupperList.length; i++) {
    if (SupperList[i].store_id == store_id) {
      for (var j = 0; j < SupperList[i].category_item.length; j++) {
        if (SupperList[i].category_item[j].category_id == category_id) {
          SupperList[i].category_item[j].goods_item[id].checked = !SupperList[i].category_item[j].goods_item[id].checked;//被选中元素状态改变，未选择改为选择，选择改为未选择
          var cheackListOne = [];
          for (var k = 0; k < SupperList[i].category_item[j].goods_item.length; k++) {
            if (SupperList[i].category_item[j].goods_item[k].checked == true) {
              cheackListOne.push(SupperList[i].category_item[j].goods_item[k].checked);
            }
            if (SupperList[i].category_item[j].goods_item.length == cheackListOne.length) {
              SupperList[i].category_item[j].checked = true;
            } else {
              SupperList[i].category_item[j].checked = false;
            }
          }
        }
      }
    }
  }
  that.selectLists()
  that.setData({
    BreakfastList: BreakfastList,
    LunchList: LunchList,
    SupperList: SupperList
  })
},
// 传给后台的商品id 函数
selectLists: function () {
  var BreakfastList = this.data.BreakfastList;
  var LunchList = this.data.LunchList;
  var SupperList = this.data.SupperList;
  var food_itemlists = [];
  for (var i = 0; i < BreakfastList.length; i++) {//存储各项数据
    var category_item = BreakfastList[i].category_item;
    for (var j = 0; j < category_item.length; j++) {
      var goods_item = category_item[j].goods_item;
      for (var k = 0; k < goods_item.length; k++) {
        if (goods_item[k].checked == true) {
          food_itemlists.push({
            "store_id": goods_item[k].store_id,
            "count": goods_item[k].count,
            "title": goods_item[k].title,
            "unit_text":goods_item[k].unit_text
          })
        }
      }
    }
  }
  for (var i = 0; i < LunchList.length; i++) {
    var category_item = LunchList[i].category_item;
    for (var j = 0; j < category_item.length; j++) {
      var goods_item = category_item[j].goods_item;
      for (var k = 0; k < goods_item.length; k++) {
        if (goods_item[k].checked == true) {
          food_itemlists.push({
            "store_id": goods_item[k].store_id,
            "count": goods_item[k].count,
            "title": goods_item[k].title,
            "unit_text":goods_item[k].unit_text
          })
        }
      }
    }
  }
  for (var i = 0; i < SupperList.length; i++) {
    var category_item = SupperList[i].category_item;
    for (var j = 0; j < category_item.length; j++) {
      var goods_item = category_item[j].goods_item;
      for (var k = 0; k < goods_item.length; k++) {
        if (goods_item[k].checked == true) {
          food_itemlists.push({
            "store_id": goods_item[k].store_id,
            "count": goods_item[k].count,
            "title": goods_item[k].title,
            "unit_text":goods_item[k].unit_text
          })
        }
      }
    }
  }
  console.log(food_itemlists);
  var foodLists =(food_itemlists);//将 JavaScript 值转换为 JSON 字符串
  // console.log(foodLists)
  this.setData({
    store_goods: foodLists, //传给后台的商品id
  })
},

gotoIndexPage: function () {
  
  let item = encodeURIComponent(JSON.stringify(this.data.store_goods))
  //redirectTo：关闭当前页面，跳转到应用内的某个页面，但是不允许跳转到 tabbar设置的 页面。
  wx.redirectTo({
    url: '/pages/personaldata/index?foodLists='+item,//要跳转到的页面路径
  })
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