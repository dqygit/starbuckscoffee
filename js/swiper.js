window.onload=function(){
  var mySwiper = new Swiper('.swiper-container',{
    direction: 'horizontal', // 垂直切换选项
    freeMode:"true",
    // spaceBetween:20,
    autoHeight:true,
    breakpoints: {
      1280: {  //当屏幕宽度小于等于1280
        slidesPerView: 3,
        spaceBetween: 30,
      },

      768: {  //当屏幕宽度大于等于768 
        slidesPerView: 2.3,
        spaceBetween: 20
      },
      546: {  //当屏幕宽度小于等于768
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {  //当屏幕宽度小于等于320
        slidesPerView: 1.5,
        spaceBetween: 20,
      },

      160:{
        slidesPerView: 1,
        spaceBetween: 10,
      }

    },
    updateOnWindowResize:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })
 
}

