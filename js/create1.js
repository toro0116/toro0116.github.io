$(function(){
  $('.galaxy-icon').hover(function() {
    $(this).find('.the-galaxy').fadeIn();
  }, function() {
    $(this).find('.the-galaxy').fadeOut();
  }
);

    $('.galaxy-icon').hover(function() {
      $(this).find('.galaxy-description').slideDown();
    }, function() {
      $(this).find('.galaxy-description').slideUp();
    }
);

  $('.slide-btn').click(function() {
    $('.active').removeClass('active');
    var clickedBtn = $('.slide-btn').index($(this));
    $('.slide').eq(clickedBtn).addClass('active');
  });

 $('.faq-list').click(function() {
   var $answer = $(this).find('.answer');
   if($answer.hasClass('open')) {
     $answer.removeClass('open');
     $answer.slideUp();
     $(this).find('.plus').text('+');
   } else {
     $answer.addClass('open');
     $answer.slideDown();
     $(this).find('.plus').text('-');
   }
 });

 $('#top-btn').click(function(){
   $('html, body').animate({
     'scrollTop': 0
   }, 500);
 });

 $('header a').click(function(){
   var id = $(this).attr('href');
   var position = $(id).offset().top;
   $('html, body').animate({
     'scrollTop': position
   }, 500);
 });
});
