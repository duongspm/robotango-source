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

    if ($('body').hasClass("toppage")) {
        // $('a.menuTop').addClass('is-active');
    } else {
        $('.menu > li > .menu-item').each(function () {
            if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('is-active');
            }
            if (dirRegExp.test(this.href.replace(/\/$/, ''))) {
                $(this).addClass('is-active');
            }
        });
    }
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
    $('.faq-item__head').click(function() {
        var current = $(this).parent().find('.faq-item__hide').slideToggle(200, function() {
            if (current.is(":hidden")) {
                $(this).parent().find('.faq-item__head').removeClass('is-open');
                ;
            } else {
                $(this).parent().find('.faq-item__head').addClass('is-open');
                ;
            }
        });
    });
});

// Top js
$(function () { 
    $('.js-brand').slick({
        slidesToShow: 13,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
    
        ],
    })
});

const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)