let WxParse = require('../../utils/wxParse/wxParse.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    detailFlag:true,
    winHeight: 0,// 屏幕高
  },
  getDetailImage(){
    let detailImage = '<p><img style="max-width:100%;" src="https://oss.kxlist.com//8a989a0c55e4a7900155e7fd7971000b/commodity/20170925/20170925160949_77c060.jpg"><br></p>';
    WxParse.wxParse('detailImage', 'html', detailImage, this);
  },
  navTap:function(e){
    if(e.target.dataset.id=="0"){
      this.setData({
        detailFlag:true,
        toView: e.target.dataset.name
      });
    }else{
      this.setData({
        detailFlag: false,
        toView: e.target.dataset.name
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      winHeight: app.globalData.winHeight
    })
    this.getDetailImage();
  },
  onShow: function () {
    //获取导航栏距离顶部距离
    var that = this;
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select('#affix').boundingClientRect()//这段代码的意思是选择Id= id的节点，获取节点位置信息的查询请求
    query.select('#module1').boundingClientRect()
    query.select('#module2').boundingClientRect()
    query.exec(function (res) {
      console.log(res);
      that.setData({
        menuTop: res[0].top,
        moduleTop1:res[1].top,
        moduleTop2:res[2].top
      })
    });
    //获取图文详情和商品详情距离顶部的距离
  },
  onPageScroll:function(e){
    //当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
    if (e.scrollTop >= this.data.menuTop) {
      this.setData({
        menuFixed: true
      })
    } else {
      this.setData({
        menuFixed: false
      })
    }

    //当页面滚动到商品详细信息时，切换导航栏标签
    if (e.scrollTop >= this.data.moduleTop2) {
      this.setData({
        detailFlag:false
      });
    }else{
      this.setData({
        detailFlag: true
      });
    }
  },
  scrollTop:function(e){
    //当页面滚动距离scrollTop > menuTop菜单栏距离文档顶部的距离时，菜单栏固定定位
    if (e.detail.scrollTop >= this.data.menuTop) {
      this.setData({
        menuFixed: true
      })
    } else {
      this.setData({
        menuFixed: false
      })
    }

    //当页面滚动到商品详细信息时，切换导航栏标签
    if (e.detail.scrollTop >= this.data.moduleTop2) {
      this.setData({
        detailFlag: false
      });
    } else {
      this.setData({
        detailFlag: true
      });
    }
  }

})