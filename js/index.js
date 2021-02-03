$(function(){  
  // 为右边盒子设置100%的高度
  $(window).on("resize",function(){
    console.log($(window).height());
    $('.left_box').css("height",$(window).height()+'px')
  })

  $(window).trigger("resize")

  // 鼠标经过汉堡菜单切换
  

  
})