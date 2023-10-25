// Include
function parts(rootDir, File) {
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function (html) {
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}

// Menu Active
$(function () {
    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");

    var dir = url.substring(0, url.lastIndexOf('/')),
        dirRegExp = new RegExp(dir.replace(/\/$/, '') + "$");

    $('.menu-child__contain ul li a').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
            if (dirRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('isActive');
            }
        })
    $('.nav__list .nav-menu__item a.nav__link').each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('isActive');
        }
        if (dirRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('isActive');
        }
    });
});

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

// Pagetop
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#pagetop').fadeIn();
        } else {
            $('#pagetop').fadeOut();
        }
    });

    $('#pagetop').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// Anchorlink
$(function () {
    var headH = $('header').outerHeight();
    $('a.anchor').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - headH
        }, 400);
        return
    });
});

$(window).on('load', function () {
    var headerH2 = $('header').outerHeight();
    if ($(location.href.split("#")[1])) {
        var target = $('#' + location.href.split("#")[1]);
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - headerH2
            }, 0);
            return false;
        }
    }
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

// Top js
$(function () { 
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
});

//rpa
// Schedule Sp
$(function(){
    $('.spScroll').bind('touchstart mousedown', function(){
        $('.swipe').fadeOut();
    });
});

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)