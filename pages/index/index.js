//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [ 
      `${app.globalData.imagePath}/banner1.jpg`,
      `${app.globalData.imagePath}/banner2.jpg`,
      `${app.globalData.imagePath}/banner3.jpg`
    ],
    brandImgList: [
      `${app.globalData.imagePath}/1.png`,
      `${app.globalData.imagePath}/2.png`,
      `${app.globalData.imagePath}/3.png`,
      `${app.globalData.imagePath}/4.png`,
      `${app.globalData.imagePath}/5.png`,
      `${app.globalData.imagePath}/6.png`,
      `${app.globalData.imagePath}/7.png`,
      `${app.globalData.imagePath}/8.png`,
      `${app.globalData.imagePath}/9.png`,
      `${app.globalData.imagePath}/10.png`,
      `${app.globalData.imagePath}/11.png`,
      `${app.globalData.imagePath}/12.png`,
      `${app.globalData.imagePath}/13.png`,
      `${app.globalData.imagePath}/14.png`,
      ``,
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
 
  },
  getUserInfo: function(e) {
    console.log(e,"userinfo")
  }
})
