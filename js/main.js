(function ($) {
    "use strict";
 //jQuery MeanMenu
  jQuery('nav#dropdown').meanmenu(); 
	//jquery Stiky Menu activation code
     $(window).on('scroll', function(){
        if( $(window).scrollTop()>100 ){
          $('#sticker').addClass('stick');
        } else {
          $('#sticker').removeClass('stick');
        }
      });
	//jquery Nav Scroll activation code
    $('#nav,.down').onePageNav({
        scrollOffset: 60
    });
	//jquery Scollup activation code	
	$.scrollUp({
	scrollText: '<i class="fa fa-angle-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
	});
  //jquery Trainer activation code
   $("#tabmenu").owlCarousel({
      autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,   
    items : 4,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
  });
  //jquery blog section activation code
   $(".blog-content-area").owlCarousel({
      autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,   
    items : 3,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1],
  });
  //Trainer section Jquery
   $(".tabmenu-list").on("click",".owl-item li", function(){
      $("#tabmenu .owl-item li").each(function() {
        $(this).removeClass('active');
        loadProgressBar();
      });
   });
  //Gallery JS Activaton Code
    $(window).load(function(){
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });     
        $('.portfolioFilter a').click(function(){
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');     
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             return false;
        }); 
    });
//Custom Progress Bar Activation code Using Jquery
    $(window).load(function(){
        loadProgressBar();
    });
    function loadProgressBar () {
      $('.skill-area > .progress > .progress-bar').css('width','0%');
      $('.skill-area').each(function(index, el) {
            $(this).children(".progress").each(function(index, el) {
                var f = $(this).find('.progress-bar'), 
                    min = f.attr('aria-valuemin'), 
                    max = f.attr('aria-valuemax'),  
                    p = f.attr('aria-valuenow'),
                    k = 0, 
                    label = f.children('.progress-label');
                    p = (p ? p : 0);

                  var go = function() {
                      return k >= p || k>= 100 ? ( false ) : ( k += 1, f.css('width', k + '%'),label.text(k+'%'), setTimeout(go, 10) )
                  };
                  go();
          });
      });
}
})(jQuery);