Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航的菜单的索引
    currentIndex:0,
    //首页导航数据
    navList:[
      {
        id:0,
        value:"首页"
      },
      {
        id:1,
        value:"动画"
      },{
        id:2,
        value:"番剧"
      },{
        id:3,
        value:"国创"
      },{
        id:4,
        value:"音乐"
      },{
        id:5,
        value:"娱乐"
      }
    ],
    // 轮播图数据 
    swiperList:[
      {
        index:1,
        imgSrc:"../../image/swiper1.webp"
      },
      {
        index:2,
        imgSrc:"../../image/swiper2.webp"
      },
      {
        index:3,
        imgSrc:"../../image/swiper3.jpg"
      }
    ],
    videoList:[
      {
        imgSrc:"../../image/video1.jpg",
        play:"20.1万",
        comment:"72893",
        title:"连续工作40天的武汉人，最想做的是什么"
      }, {
        imgSrc:"../../image/video2.jpg",
        play:"16.7万",
        comment:"68375",
        title:"pop醒和pipi凡的日常"
      }, {
        imgSrc:"../../image/video3.png",
        play:"23.6万",
        comment:"57934",
        title:"新闻主播复工后，为什么腰这么疼？...."
      }, {
        imgSrc:"../../image/video4.jpg",
        play:"100万",
        comment:"246758",
        title:"实测小米40W无线充电小米10 Pro：这速度比有线都快"
      },
    ]
    
  },
  // 点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndex:e.target.dataset.index
    })
  },
  // // 获取首页导航数据
  // getNavList(){
    // that=this,
  //   //利用小程序内置发送请求的方法
  //   wx.request({
  //     url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
  //     success(res){
  //       console.log(res);
  // if(res.data.code===0){
  //   that.setData({
  //     navList:res.data.data.navList
  //   })
  // }
        
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // //获取首页导航数据
    // this.getNavList();
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