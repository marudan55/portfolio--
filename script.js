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
