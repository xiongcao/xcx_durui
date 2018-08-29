const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityList:[],
    brandDetailFlag:true,
    viewIcon:'imgword',
    orderKey:'pub',
    viewStatus:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      brandId: options.id// 上个页面传过来的品牌ID
    })
    this.getBrandInfo();
    this.getCommodityList();
  },
  /**
   * 品牌简介显示隐藏
   */
  toggleDetail:function(){  
    this.setData({
      brandDetailFlag: !this.data.brandDetailFlag
    });
  },
  /**
   * 排序样式
   */
  commoditySort:function(e){
    this.setData({
      orderKey: e.currentTarget.dataset.order
    });
  },
  /**
   * 视图切换
   */
  changeIcon:function(){  
    if (this.data.viewIcon == "imgword") {
      this.setData({
        viewIcon:"bigview",
        viewStatus:false
      });
    } else if (this.data.viewIcon == "bigview"){
      this.setData({
        viewIcon:"imgword",
        viewStatus: true
      });
    }
  },
  /**
   * 跳转到商品详情
   */
  toCommodityDetail:function(e){
    wx.navigateTo({
      url: '/pages/commodity/commodity?id='+e.currentTarget.dataset.id
    })
  },
  /**
   * 获取品牌信息
   */
  getBrandInfo(){
    let brandInfo = {
      brandImage: `${app.globalData.kxlistPath}/8a989a0c55e4a7900155e7fd7971000b/brandImg/20170718/20170718092237_4f284b.jpg`,
      brandLogo: `${app.globalData.kxlistPath}/8a989a0c55df3fdd0155df5f782a000f/brandManage/20170224/20170224142338_aaf565.jpg`,
      brandName:'三橡树',
      brandNameEN:'3CHENES',
      brandAbout:'3Chenes成立于1996年，由Eric Favre创立，是法国十大草本保健权威之一，也是法国先进技术的GMP膳食补充营养品和化妆品制造商之一，产品均来在于植物和高科技的结合。为广大消费者提供多种优质营养和植物成分的产品，成为法国保健食品生产行业的杰出者。'
    };
    this.setData({ brandInfo: brandInfo});
  },
  /**
   * 商品数据
   */
  getCommodityList(){
    let commodityList = [];
    commodityList.push({
      id:1,
      image: `${app.globalData.kxlistPath}/8a989a0c55df3fdd0155df6a68640014/commodity/20170418/20170418175001_899d46.jpg@!M_100`,
      name:'KOBAYASHI/小林 小林冰宝贴 日本婴儿 12片',
      barcode:'4987072038987',
      origin:'日本',
      price:290
    })
    commodityList.push({
      id:2,
      image: `${app.globalData.kxlistPath}/8a989a0c55df3fdd0155df6a68640014/commodity/20180329/20180329184523_088441.jpg@!M_100`,
      name: 'IPSA／茵芙莎自律循环角质清理液 50ml',
      barcode: '4987072038987',
      origin: '日本',
      price: 290
    })
    for(let i=0;i<20;i++){
      commodityList.push({
        id:3+i,
        image: `${app.globalData.kxlistPath}/8a989a0c55df3fdd0155df6a68640014/commodity/20170418/20170418175001_899d46.jpg@!M_100`,
        name: 'KOBAYASHI/小林 小林冰宝贴 日本婴儿 12片',
        barcode: '4987072038987',
        origin: '日本',
        price: 290
      })
    }
    this.setData({
      commodityList: commodityList
    });
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  }

})