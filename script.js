//ハンバーガーメニュー
$(function(){
  $('#menu-btn').click(function(){
    $(this).toggleClass('active');
    if($('#menu-btn').hasClass('active')) {
      $('#hbg-menu,#overlay').addClass('active');
      $('#page-top').slideUp('fast');
      $('html,body').css('overflow','hidden');
    } else {
      $('#hbg-menu,#overlay').removeClass('active');
      $('html,body').removeAttr('style');
    }
    return false;
  });
});

$(function(){
  $('#hbg-menu li a').click(function(){
    $('#hbg-menu,#overlay').removeClass('active');
    $('#menu-btn').removeClass('active');
    $('html,body').removeAttr('style');
  });
});

//ページトップボタン
$(function(){
  $(window).scroll(function(){
    var now = $(this).scrollTop();
    if(now > 300) {
      $('#page-top').slideDown('slow');
    } else {
      $('#page-top').slideUp('slow');
    }
  });
  $('#page-top').click(function(){
    $('html,body').animate({scrollTop: 0} ,'slow');
  });
});

//アコーディオンパネル
$(function(){
  $('#panel dd:not(:first-of-type)').hide();
  $('#panel dt').click(function(){
    $('#panel dd').slideUp('slow');
    $(this).next().slideDown('slow');
    $('#panel dt').removeClass('selected');
    $(this).addClass('selected');
  });
});


//経歴ボタン
$(function(){
  $('.career p').click(function(){
    $('.career table').toggleClass('active');
  });
});
