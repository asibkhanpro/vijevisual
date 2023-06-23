(function ($) {
    "use strict";
    



        // slider-active-start

        $('.slider-items').owlCarousel({
            loop:true,
            margin:30,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:1
                },
                992:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        })
        // slider-active-end
		
        // humbuger-menu-start
                // filter items on button click
                $('.portfolio-menu').on( 'click', 'button', function() {
					var filterValue = $(this).attr('data-filter');
					$grid.isotope({ filter: filterValue });
			});
			
			//for menu active class
			$('.portfolio-menu button').on('click', function(event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
			});
			$('.icon').click(function(){
			$('.icon').toggleClass('active');
			$('.response-menu').toggleClass('active');
			})  
			// filter items on button click
			$('.portfolio-menu').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			});





           
	//   humbuger-menu-end
		//jQuery smooth-scoll

        $("li.links a").click(function (event) {

            event.preventDefault();
            var headerH = '15';

            $('html,body').animate({
                scrollTop: $(this.hash).offset().top - headerH + "px"
            }, 1200, );
        });
        
        //jQuery smooth-scoll
        // Add scrollspy to <body>
        var top_offset = $('.header').height() - 10;
        $('.main-menu ul').onePageNav({
            currentClass: 'active',
            scrollOffset: top_offset,
        });
		
}(jQuery));	