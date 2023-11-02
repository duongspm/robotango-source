// Menu Sp
$(function () {
    $open = false;

    function menuMb() {
        if ($open == false) {
            $open = true;
            $(".header-wrap").addClass('is-visible');
            $('#btn-menu').addClass('is-open');
        } else {
            $open = false;
            $(".header-wrap").removeClass('is-visible');
            $('#btn-menu').removeClass('is-open');
        }
    }

    $('#btn-menu').on('click', function () {
        menuMb();
    });
});

// Menu Child
$(function(){
    $('.dropdown__button').click(function() {
        var current = $(this).parent().find('.dropdown__container').slideToggle(300, function() {
            if (current.is(":hidden")) {
                $(this).parent().find('.dropdown__button').removeClass('is-open');
                ;
            } else {
                $(this).parent().find('.dropdown__button').addClass('is-open');
                ;
            }
        });
    });
});

// FAQ
$(function(){
    $('.js-faq-show').click(function() {
        var current = $(this).parent().find('.js-faq-hide').slideToggle(200, function() {
            if (current.is(":hidden")) {
                $(this).parent().find('.js-faq-show').removeClass('is-open');
                ;
            } else {
                $(this).parent().find('.js-faq-show').addClass('is-open');
                ;
            }
        });
    });
});

//rpa
// Schedule Sp
$(function(){
    $('.spScroll').bind('touchstart mousedown', function(){
        $('.swipe').fadeOut();
    });
});

// Page
$(function(){
	// Top
	if ($('body').hasClass('top')) {
		$('.js-brand').slick({
            autoplay: true, 
            autoplaySpeed: 0, 
            speed: 4166, 
            cssEase: "linear", 
            variableWidth: true,
            slidesToShow: 1, 
            swipe: false, 
            arrows: false,
            pauseOnFocus: false, 
            pauseOnHover: false, 
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
        
            ],
        })
	}
});

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)