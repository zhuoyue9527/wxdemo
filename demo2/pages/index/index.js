//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/image1.jpg', 
      '/images/love2.jpg',
      '/images/love1.jpg',
      //'/images/swiper01.jpg',
      //'/images/swiper02.jpg',
      //'/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
    
  }
})
