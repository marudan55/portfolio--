//ハンバーガーメニュー
$(function(){
  $('#menu-btn').click(function(){
    $(this).toggleClass('active');
    if($('#menu-btn').attr('class') == 'active') {
      $('#hbg-menu').slideDown('slow');
    } else {
      $('#hbg-menu').slideUp('slow');
    }
    return false;
  });
});

$(function(){
  $('#hbg-menu li a').click(function(){
    $('#hbg-menu').slideUp('fast');
    $('#menu-btn').removeClass('active');
  });
});

//ページトップボタン
$(function(){
  $(window).scroll(function(){
    var now = $(this).scrollTop();
    if(now > 50) {
      $('#page-top').slideDown('slow');
    } else {
      $('#page-top').slideUp('slow');
    }
  });
  $('#page-top').click(function(){
    $('html,body').animate({scrollTop: 0} ,'slow');
  });
});
