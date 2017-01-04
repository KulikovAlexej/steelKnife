$(document).ready(function(){
  $('#hamburger').mouseover(function(){
  	$('#hamburger div').css({
  		backgroundColor: 'red',
  	})
  })
  change_sidebar();
  $(window).resize(function(){
  	change_sidebar();
  })
function change_sidebar(){
	$window_width = $(window).width();
  	$window_height = $(window).height();
  	$aside_height = $('aside').outerHeight();
  	if($window_width > 1200 && $aside_height > $window_height){
  		$('aside').css({
			position: 'absolute',
			width: '100%'
		})
  	}
	
}
  
});