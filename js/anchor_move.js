$(function(){
	$(".side_bar li").on("click", function(){
	  var dataId = $(this).find('a').attr('data-id');
	  var id = $(this).find('a').attr("id");
	  $('html, body').animate({
	    scrollTop: $(id).offset().top
	  }, 1000);
	  $('.bg_all').css(
	    'transform','translateX('+($(id).width() * -dataId) +'px)');
	});
});