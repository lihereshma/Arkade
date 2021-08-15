/* Author: Reshma Lihe */

//Responsive Navigation
$(document).ready(function() {
  var $menu = $('.site-menu'),
    $hamburger = $('.hamburger');

    $hamburger.click(function(e) {
      e.preventDefault();
      $hamburger.toggleClass('open');
      $menu.toggleClass('show');
      $('html').toggleClass('no-scroll');
    });
});

// Active menu
$(document).ready(function(){
  $('.site-menu ul li a').click(function(){
    $('.site-menu li a').removeClass("active-menu");
    $(this).addClass("active-menu");
  });
});

// Site Intro slider
$(document).ready (function() {
  $('.si-slider').slick ({
  dots: true,
  arrows: true,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000
  });  
});

// Testimonials slider
$(document).ready (function() {
  $('.tm-slider').slick ({
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000
  });  
});

// Projects slider
$(document).ready (function() {
  $('.pm-slider').slick({
    slidesToShow: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });  
});

// Project Tabs
$(document).ready(function(){	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});

// Scroll to Top
$(document).ready(function() {
  var btn = $('.scroll-btn');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '2000');
  });
}); 