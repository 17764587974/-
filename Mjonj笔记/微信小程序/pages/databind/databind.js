Page({

  /**
   * 页面的初始数据
   */
  data: {
    tampName: function (event) {
      console.log(event)
    },
    content:"微信小程序数据绑定",
    hiddencontent:"隐藏的内容",
    flag:true,
    
    num1:1,
    num2:2,
    condition:true,
    uesr:{
      name:"spark",
      age:18
    },
    users:[
      {
        name:"张三",
        sex: "男",
        "age":"19"
              },{
      name:"lisi",
      sex: "nv",
      "age":"1a9"
              },{
  name: "ss三",
  sex: "男",
  "age": "119"
}],
     
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