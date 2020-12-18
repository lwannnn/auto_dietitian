// pages/personaldata/editfoodlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyerList: [
      {
      "store_id": 3,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "id": 30,
          "order_id": 14,
          "goods_id": 1,
          "count": 200,//数量
          "store_id": 3,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 1,
            "title": "米饭",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 31,
          "order_id": 14,
          "goods_id": 2,
          "count": 300,
          "store_id": 3,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 2,
            "title": "白粥",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 33,
          "order_id": 14,
          "goods_id": 30,
          "count": 350,
          "store_id": 3,
          "supplier_id": 38,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 30,
            "title": "面条",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "38,39"
          },
          "unit_text": "g"
        }, {
          "id": 32,
          "order_id": 14,
          "goods_id": 30,
          "count": 350,
          "store_id": 3,
          "supplier_id": 39,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 30,
            "title": "米线",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "38,39"
          },
          "unit_text": "g"
        }, {
          "id": 34,
          "order_id": 14,
          "goods_id": 31,
          "count": 250,
          "store_id": 3,
          "supplier_id": 39,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 31,
            "title": "麦片",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "39"
          },
          "unit_text": "g"
        }],
        "category_title": "主食"
      }],
      "store_title": "店铺3"
    }, {
      "store_id": 4,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "id": 35,
          "order_id": 15,
          "goods_id": 1,
          "count": 2,
          "store_id": 4,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 1,
            "title": "粉丝包",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 36,
          "order_id": 15,
          "goods_id": 2,
          "count": 1,
          "store_id": 4,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 2,
            "title": "酸菜包",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 37,
          "order_id": 15,
          "goods_id": 3,
          "count": 1,
          "store_id": 4,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 3,
            "title": "猪肉包",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 38,
          "order_id": 15,
          "goods_id": 4,
          "count": 2,
          "store_id": 4,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 4,
            "title": "紫菜卷",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 41,
          "order_id": 15,
          "goods_id": 30,
          "count": 3,
          "store_id": 4,
          "supplier_id": 38,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 30,
            "title": "鸡蛋卷",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "38,39"
          },
          "unit_text": "g"
        }, {
          "id": 39,
          "order_id": 15,
          "goods_id": 30,
          "count": 2,
          "store_id": 4,
          "supplier_id": 39,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 30,
            "title": "牛肉饼",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "38,39"
          },
          "unit_text": "g"
        }, {
          "id": 40,
          "order_id": 15,
          "goods_id": 31,
          "count": 2,
          "store_id": 4,
          "supplier_id": 39,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 31,
            "title": "奶黄包",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "39"
          },
          "unit_text": "g"
        }],
        "category_title": "面点"
      }],
      "store_title": "店铺2"
    },
    {
      "store_id": 3,
      "category_item": [{
        "category_id": 6,
        "goods_item": [{
          "id": 30,
          "order_id": 14,
          "goods_id": 1,
          "count": 2,
          "store_id": 3,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 1,
            "title": "豆浆",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 31,
          "order_id": 14,
          "goods_id": 2,
          "count": 3,
          "store_id": 3,
          "supplier_id": 0,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 1,
          "unit_rate": 1,
          "goods": {
            "id": 2,
            "title": "牛奶",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": ""
          },
          "unit_text": "g"
        }, {
          "id": 33,
          "order_id": 14,
          "goods_id": 30,
          "count": 3,
          "store_id": 3,
          "supplier_id": 38,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 30,
            "title": "酸奶",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "38,39"
          },
          "unit_text": "g"
        }, {
          "id": 32,
          "order_id": 14,
          "goods_id": 30,
          "count": 2,
          "store_id": 3,
          "supplier_id": 39,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 30,
            "title": "豆奶",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "38,39"
          },
          "unit_text": "g"
        }, {
          "id": 34,
          "order_id": 14,
          "goods_id": 31,
          "count": 2,
          "store_id": 3,
          "supplier_id": 39,
          "category_id": 6,
          "unit_id": 1,
          "is_self": 0,
          "unit_rate": 1,
          "goods": {
            "id": 31,
            "title": "咖啡",
            "category_id": 6,
            "logo": "../../image/05.jpg",
            "stock_unit": 1,
            "sale_unit": 0,
            "unit_rate": "",
            "supplier_ids": "39"
          },
          "unit_text": "g"
        }],
        "category_title": "饮品"
      }],
      "store_title": "店铺3"
    }],
    BreakfastList: [{
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
    }],
    LunchList: [{
      value: '米饭',
      selected: false ,
      title: '米饭'
    },{
      value: '白粥',
      selected: false ,
      title: '白粥'
    },{
      value: '土豆',
      selected: false ,
      title: '土豆'
    },{
      value: '虾仁',
      selected: false ,
      title: '虾仁'
    },{
      value: '牛肉',
      selected: false ,
      title: '牛肉'
    },{
      value: '猪肉',
      selected: false ,
      title: '猪肉'
    },{
      value: '豆腐',
      selected: false ,
      title: '豆腐'
    }],
    SupperList: [{
      value: '米饭',
      selected: false ,
      title: '米饭'
    },{
      value: '白粥',
      selected: false ,
      title: '白粥'
    },{
      value: '鸡蛋',
      selected: false ,
      title: '鸡蛋'
    },{
      value: '鸡肉',
      selected: false ,
      title: '鸡肉'
    },{
      value: '鸭肉',
      selected: false ,
      title: '鸭肉'
    },{
      value: '羊肉',
      selected: false ,
      title: '羊肉'
    },{
      value: '白菜',
      selected: false ,
      title: '白菜'
    }]
  },

  /**
 * 一级选择
 */
checkboxChange: function (e) {
  var that = this
  var buyerList = this.data.buyerList;
  var store_id = e.currentTarget.dataset.store_id; //一级id
  var checkArr = e.currentTarget.dataset.parent_id; //一级id
  var allCheackList = []
  for (var i = 0; i < buyerList.length; i++) {
    if (buyerList[i].store_id == store_id) {
      buyerList[i].category_item[checkArr].checked = !buyerList[i].category_item[checkArr].checked
      if (buyerList[i].category_item[checkArr].checked == true) {
        for (var j = 0; j < buyerList[i].category_item[checkArr].goods_item.length; j++) {
          buyerList[i].category_item[checkArr].goods_item[j].checked = true
        }
      } else {
        for (var j = 0; j < buyerList[i].category_item[checkArr].goods_item.length; j++) {
          buyerList[i].category_item[checkArr].goods_item[j].checked = false
        }
      }
    }
  }
  that.selectLists()
  this.setData({
    buyerList: buyerList,
  })
},
/**
 * 二级选择
 */
childChange: function (e) {
  var that = this
  var buyerList = that.data.buyerList;
  var store_id = e.currentTarget.dataset.store_id;
  var checkArr = e.currentTarget.dataset.child_id;
  var category_id = e.currentTarget.dataset.category_id;
  var id = e.currentTarget.dataset.id; //二级的
  for (var i = 0; i < buyerList.length; i++) {
    if (buyerList[i].store_id == store_id) {
      for (var j = 0; j < buyerList[i].category_item.length; j++) {
        if (buyerList[i].category_item[j].category_id == category_id) {
          buyerList[i].category_item[j].goods_item[id].checked = !buyerList[i].category_item[j].goods_item[id].checked
          // console.log(buyerList[i].category_item[j].goods_item)
          var cheackListOne = []
          for (var k = 0; k < buyerList[i].category_item[j].goods_item.length; k++) {
            if (buyerList[i].category_item[j].goods_item[k].checked == true) {
              cheackListOne.push(buyerList[i].category_item[j].goods_item[k].checked)
            }
            if (buyerList[i].category_item[j].goods_item.length == cheackListOne.length) {
              buyerList[i].category_item[j].checked = true
            } else {
              buyerList[i].category_item[j].checked = false
            }
          }
        } else {

        }
      }
    }
  }
  that.selectLists()
  that.setData({
    buyerList: buyerList,
  })
},
// 传给后台的商品id 函数
selectLists: function () {
  var buyerList = this.data.buyerList;
  var goods_itemlistsTwo = []
  for (var i = 0; i < buyerList.length; i++) {
    var category_item = buyerList[i].category_item
    for (var j = 0; j < category_item.length; j++) {
      var goods_item = category_item[j].goods_item
      for (var k = 0; k < goods_item.length; k++) {
        if (goods_item[k].checked == true) {
          // goods_itemlistsTwo.push(goods_item[k].goods_id)
          goods_itemlistsTwo.push({
            "goods_id": goods_item[k].goods_id,
            "store_id": goods_item[k].store_id,
          })
        }
      }
    }
  }
  console.log(goods_itemlistsTwo)
  var cheaclLists = JSON.stringify(goods_itemlistsTwo)
  // console.log(cheaclLists)
  this.setData({
    store_goods: cheaclLists, //传给后台的商品id
  })
},

  checkboxChange1(e){
    console.log('checkboxChange e:',e);
    let string = "BreakfastList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.BreakfastList[e.target.dataset.index].selected
        })
        let detailValue = this.data.BreakfastList.filter(it => it.selected).map(it => it.value)
        console.log('所有选中的值为：', detailValue)
  },
  checkboxChange2(e){
    console.log('checkboxChange e:',e);
    let string = "LunchList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.LunchList[e.target.dataset.index].selected
        })
        let detailValue = this.data.LunchList.filter(it => it.selected).map(it => it.value)
        console.log('所有选中的值为：', detailValue)
  },
  checkboxChange3(e){
    console.log('checkboxChange e:',e);
    let string = "SupperList["+e.target.dataset.index+"].selected"
        this.setData({
            [string]: !this.data.SupperList[e.target.dataset.index].selected
        })
        let detailValue = this.data.SupperList.filter(it => it.selected).map(it => it.value)
        console.log('所有选中的值为：', detailValue)
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