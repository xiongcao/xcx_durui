const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageNameList: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
  },
  previewImage: function (e) {
    let imageList = this.data.imageNameList.map(v => {
      console.log(v, "v");
      return `http://oss.kxlist.com/durui/companyImage/${v}.jpg`
    });
    console.log(imageList);
    wx.previewImage({
      current: `http://oss.kxlist.com/durui/companyImage/${e.target.dataset.index}.jpg`, // 当前显示图片的http链接
      urls: imageList // 需要预览的图片http链接列表
    })
  }
})