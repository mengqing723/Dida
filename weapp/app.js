App({
  onLaunch: function (options) {
    //调用API从本地缓存中获取数据
    /* 
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
     */

    console.log('注册小程序 ......')
    try {
      this.globalData.user = wx.getStorageSync('user') || null
      if (!this.globalData.user) {
        wx.navigateTo({
          url: '/pages/index/index'
        })
      }
    } catch (error) {
      console.error(error)
    }
  },
  globalData: {
    user: null,
    system: {},
    temp: {}
  }
})
