//smooth scrool
$(function() {
    $("a.js-scroll[href^='#']").click(function() {
        $("body,html").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        });
        return false;
    });
});

$(function(){

//fadein etc
//フェードイン＋上移動
  $('.ef-fadeup').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('fade-up');
    }
    //else{
    //  $(this).stop().removeClass('fade01');
    //}
  });
//フェードイン＋上移動
  $('.ef-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('fade-left');
    }
    //else{
    //  $(this).stop().removeClass('fade-left');
    //}
  });
//フェードイン＋上移動
  $('.ef-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      $(this).stop().addClass('fade-right');
    }
    //else{
    //  $(this).stop().removeClass('fade-right');
    //}
  });
});  