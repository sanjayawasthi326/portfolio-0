

    $(document).ready(function(){
  
    
    $('.drop_down').hover(function(){
        $('.dropdown_menu').stop().slideToggle();
        });
        
        
        $('.bar_box').click(function(){
            $('.big_menu').stop().toggleClass('big_menux');
            });
            
            
            $('.bar_box').click(function(){
                $('.barline_one').toggleClass('s');
                });
            
                $('.bar_box').click(function(){
                    $('.barline_two').toggleClass('ss');
                    });
            

//logo slider
    $('.skill_slider-1').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout:2000,
    stagePadding: 50,
    dots:false,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



//skill slider
$('.skill_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: false,
    autoplayTimeout:2000,
    stagePadding: 50,
    dots:false,
    navSpeed: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


var owl = $('.skill_slider');
owl.owlCarousel();
// Go to the next item
$('.customNextBtns').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtns').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

//testimonials slider
$('.testi_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: false,
    autoplayTimeout:2000,
    
    dots:false,
    navSpeed: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})
var owl = $('.testi_slider');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn-1').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn-2').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

    });



    