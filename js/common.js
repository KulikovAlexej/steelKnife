$(document).ready(function(){
  $('#hamburger').mouseover(function(){
  	// $('#hamburger div').css({
  	// 	backgroundColor: 'red',
  	// })
  })
  
  $('#hamburger').click(function(){
    slide_sidebar(15, 1000);
  })
  $window_width = $(window).width();
  $window_height = $(window).height();
  change_sidebar();
  resize_category();
  install_dark_layout();
  $(window).resize(function(){
  	change_sidebar();
    resize_category();
    install_dark_layout();
  })
function change_sidebar(){
  	$aside_height = $('aside').outerHeight();
  	if($window_width > 1200 && $aside_height > $window_height){
  		$('aside').css({
			position: 'absolute',
			width: '100%'
		})
  	}
}
function resize_category(){
  $window_width = $(window).width();
  if($window_width > 768){  
    $aside_width = $('aside').outerWidth();
    $content_width = $window_width - ($aside_width + 20);
    $('.wrap_content').css({
      width: $content_width
    })
  }
}
function slide_sidebar($bootstrap_margin, $time){
    $visible = $('aside').css('display');
    $content_width = $('.wrap_content').outerWidth();
    $aside_width = $('aside').outerWidth();
    console.log($content_width + $aside_width);
    if($visible == 'block'){
      $('.dark_layout').animate({
        opacity: 0
      }, 1000);
      $('aside').animate({
        marginLeft: -($aside_width + $bootstrap_margin),
      },1000, function(){
        $('aside').hide();
      })
    }
    else if($visible == 'none'){
      $('.dark_layout').animate({
        opacity: 0.95
      }, 1000);
      $('aside').show()
      .animate({
        marginLeft: 0
      }, 1000)
    }
  }
  function install_dark_layout(){
    $dl_height = $('html').height();
    console.log($dl_height);
    $('.dark_layout').css({
      height: $dl_height
    })
  }
  
});