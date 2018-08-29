const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandDataList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      brandId: options.id// 上个页面传过来的品牌ID
    })
    this.getBrandInfo();
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