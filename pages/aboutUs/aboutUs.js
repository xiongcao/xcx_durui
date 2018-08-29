const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shouquanshu: [
      `${app.globalData.ossImagePath}/shouquanshu/aolunna.jpg`,
      `${app.globalData.ossImagePath}/shouquanshu/babyFoot.jpg`,
      `${app.globalData.ossImagePath}/shouquanshu/hairmax.jpg`
    ],
    companyImage: [
      `${app.globalData.ossImagePath}/companyImage/1.jpg`,
      `${app.globalData.ossImagePath}/companyImage/2.jpg`,
      `${app.globalData.ossImagePath}/companyImage/3.jpg`
    ],
  },
  aptitude:function(){
    wx.navigateTo({ 
      url: '/pages/companyAptitude/companyAptitude'
    })
  },
  companyImages:function(){
    wx.navigateTo({
      url: '/pages/companyImage/companyImage'
    })
  },
  sample:function(){
    wx.showToast({
      title: '此功能在未开放',
      icon: 'none',
      duration: 2000
    })
  }
})