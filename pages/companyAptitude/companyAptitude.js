const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageNameList: ["aolunna", "hairmax", "babyFoot", "corine", "mesoes", "knv", "lacBlanc", "osha", "reen", "repavar", "vishya"]
  },
  previewImage:function(e){
    let imageList = this.data.imageNameList.map(v=>{
      console.log(v,"v");
      return `http://oss.kxlist.com/durui/shouquanshu/${v}.jpg`
    });
    console.log(imageList);
    wx.previewImage({
      current: `http://oss.kxlist.com/durui/shouquanshu/${e.target.dataset.index}.jpg`, // 当前显示图片的http链接
      urls: imageList // 需要预览的图片http链接列表
    })
  }
})