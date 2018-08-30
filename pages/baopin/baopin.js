// pages/baopin/baopin.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityImgList:[
      {
        name:'彩妆',
        imageList:[
          {
            name: "1",
            image: `${app.globalData.imagePath}/commodityImage/1.jpg`,
          }, {
            name: "2",
            image: `${app.globalData.imagePath}/commodityImage/2.jpg`,
          }
        ]
      },
      {
        name: '洗护',
        imageList: [
          {
            name: "3",
            image: `${app.globalData.imagePath}/commodityImage/3.jpg`,
          }, {
            name: "4",
            image: `${app.globalData.imagePath}/commodityImage/4.jpg`,
          }, {
            name: "5",
            image: `${app.globalData.imagePath}/commodityImage/5.jpg`,
          }, {
            name: "6",
            image: `${app.globalData.imagePath}/commodityImage/6.jpg`,
          }, {
            name: "7",
            image: `${app.globalData.imagePath}/commodityImage/7.jpg`,
          }, {
            name: "8",
            image: `${app.globalData.imagePath}/commodityImage/8.jpg`,
          }, {
            name: "9",
            image: `${app.globalData.imagePath}/commodityImage/9.jpg`,
          }, {
            name: "10",
            image: `${app.globalData.imagePath}/commodityImage/10.jpg`,
          }, {
            name: "11",
            image: `${app.globalData.imagePath}/commodityImage/11.jpg`,
          }, {
            name: "12",
            image: `${app.globalData.imagePath}/commodityImage/12.jpg`,
          }, {
            name: "13",
            image: `${app.globalData.imagePath}/commodityImage/13.jpg`,
          }, {
            name: "14",
            image: `${app.globalData.imagePath}/commodityImage/14.jpg`,
          }, {
            name: "15",
            image: `${app.globalData.imagePath}/commodityImage/15.jpg`,
          }, {
            name: "16",
            image: `${app.globalData.imagePath}/commodityImage/16.jpg`,
          }, {
            name: "17",
            image: `${app.globalData.imagePath}/commodityImage/17.jpg`,
          }
        ]
      },
      {
        name: '美容保健/仪器',
        imageList: [
          {
            name: "18",
            image: `${app.globalData.imagePath}/commodityImage/18.jpg`,
          }, {
            name: "19",
            image: `${app.globalData.imagePath}/commodityImage/19.jpg`,
          }, {
            name: "20",
            image: `${app.globalData.imagePath}/commodityImage/20.jpg`,
          }
        ]
      },
    ]
  },
  /**
   * 跳转到商品详情
   */
  toCommodityDetail: function (e) {
    wx.navigateTo({
      url: '/pages/commodity/commodity?id=' + e.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }
})