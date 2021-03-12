$(document).ready(function () {

    // banner slider js

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 3000,
        speed: 800
    });

    // screenshot slider js

    $('.screenshot-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // venobox js

    $('.venobox').venobox();

    // team slider js

    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // user feedback slider js

    $('.slide-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide-image'
    });
    $('.slide-image').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slide-text',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0"
    });

    // sticky top js

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var sticky = $(".sticky-top");
        if (scrolling >= 100) {
            sticky.addClass("nav-bg").css("padding", "8px 0px");
        } else {
            sticky.removeClass("nav-bg").css("padding", "50px 0px");
        }
    });

    // Smooths scrolling js
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // wow js

    new WOW().init();

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll_to_top").fadeIn();
        } else {
            $("#scroll_to_top").fadeOut();
        }
    });

    $("#scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    // preloader js
    
    $(window).on("load", function(){
        $(".preloader").delay(2000).fadeOut(700);
    });
    
    
    //responsive menu js
    
    $(".closeNav").click(function(){
        $(".overlay").slideUp();
    });
    $(".openNav").click(function(){
        $(".overlay").slideDown();
    });
    
    $(".overlay_content ul li a").click(function(){
        $(".overlay").hide();
    });
    $(".mobile_logo").click(function(){
        $(".overlay").hide();
    });


});