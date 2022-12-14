document.addEventListener('DOMContentLoaded', function() {
	$(".top_mnu").navigation();
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -80
		});
	};
	//Egg
	  var $element = $('.roadmap');
    let counter = 0;
		$(window).scroll(function() {
			var scroll = $(window).scrollTop() + $(window).height();
			var offset = $element.offset().top + $element.height();
			//start
		  //	var offset = $element.offset().top
		 if (scroll > offset && counter == 0) {
			setTimeout(function() {
				$(".roadmap_egg_1").css("opacity","0");
				$(".roadmap_num_1").css("opacity","1");
		  }, 300);
			setTimeout(function() {
				$(".roadmap_egg_2").css("opacity","0");
				$(".roadmap_num_2").css("opacity","1");
		  }, 600);
			setTimeout(function() {
				$(".roadmap_egg_3").css("opacity","0");
				$(".roadmap_num_3").css("opacity","1");
		  }, 900);				
				counter = 1;
			}
		});
		var $proj = $('.project');
		let count = 0;
		$(window).scroll(function() {
			var scroll = $(window).scrollTop() + $(window).height();
			var offset = $proj.offset().top + $proj.height();
			//start
		  //	var offset = $element.offset().top
		 if (scroll > offset && count == 0) {
			$('.telegram_modal').fadeIn();
		  $('.dark_block').fadeIn();
		  $('body').addClass('overflow_hidden');
			count = 1;			
			}
		});
		var $team = $('.team');
    let countteam = 0;
		$(window).scroll(function() {
			var scroll = $(window).scrollTop() + $(window).height();
			var offset = $team.offset().top + $team.height() - 180;
		 if (scroll > offset && countteam == 0) {
			setTimeout(function() {				
				$(".team_num_1").css("opacity","1");
		  }, 200);
			setTimeout(function() {
				$(".team_num_2").css("opacity","1");
		  }, 500);
			setTimeout(function() {
				$(".team_num_3").css("opacity","1");
		  }, 800);				
			  countteam = 1;
			}
		});

	//swiper
	var swiper = new Swiper(".slider__swiper", {
    effect: 'slide',
    //centeredSlides: true,
    //grabCursor: true,
		//slideToClickedSlide: true,
		loop: true,
    //initialSlide: 0,
		breakpoints: {
			350: {
				slidesPerView: 1.1,
				spaceBetween: 10,
				pagination: {
          el: ".swiper-pagination",
        },
			},
			650: {
				slidesPerView: 1.5,
				spaceBetween: 20,
				pagination: {
          el: ".swiper-pagination",
        },
			},
			768: {
				slidesPerView: 1.8,
				spaceBetween: 20,
				pagination: {
          el: ".swiper-pagination",
        },
			},
			800: {
				slidesPerView: 2.0,
				spaceBetween: 30,
				pagination: {
          el: ".swiper-pagination",
        },
			},
			1000: {
				slidesPerView: 2.5,
				spaceBetween: 30,
				pagination: {
          el: ".swiper-pagination",
        },
			},
			1100: {
				slidesPerView: 2.6,
				spaceBetween: 30,
				pagination: {
          el: ".swiper-pagination",
        },
			},
			1200: {
				slidesPerView: 3.0,
				spaceBetween: 30,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
		},
	});
	//Menu
	$('.menu_icon').click(function () {
		$('.burger_menu').fadeIn();
	})
	$('.header_list a').click(function () {
		$('.burger_menu').fadeOut();
	})
	$('.burger_close').click(function () {
		$('.burger_menu').fadeOut();
	})
	//Telegram 
	$('.telegram_modal .close_modal').click(function () {
		$('.telegram_modal').fadeOut();
		$('.dark_block').fadeOut();
		$('body').removeClass('overflow_hidden');
	})
	$('.dark_block').click(function () {
		$('.telegram_modal').fadeOut();
		$('.start_modal').fadeOut();
		$('.dark_block').fadeOut();
		$('body').removeClass('overflow_hidden');
	})
	//Audio
	//$(document).ready(function () {
	//	$('.start_modal').fadeIn();
	//	$('.dark_block').fadeIn();
	//	$('body').addClass('overflow_hidden');
	//})	
	//$('#onSoundBtn').click(function () {
		//document.getElementById('audioFirst').play();
		//document.getElementById('1').classList.add('active');
		//$('.start_modal').fadeOut();
		//$('.dark_block').fadeOut();
		//$('body').removeClass('overflow_hidden');
	//})	
	//$('#offSoundBtn').click(function () {
		//$('.start_modal').fadeOut();
		//$('.dark_block').fadeOut();
		//$('body').removeClass('overflow_hidden');
	//})
	//$('.start_modal .close_modal').click(function () {
	//	$('.start_modal').fadeOut();
	//	$('.dark_block').fadeOut();
	//	$('body').removeClass('overflow_hidden');
	//})
	$(document).on('keyup', function(e) {
		if ( e.key == "Escape" ) {
			$('.telegram_modal').fadeOut();
			$('.start_modal').fadeOut();
		  $('.dark_block').fadeOut();
		  $('body').removeClass('overflow_hidden');
		}
	});
	$('.buttons a').click(function () {
		if (this.classList.contains('active')) {
			this.removeAttribute('class');
			this.childNodes[1].pause();
			this.childNodes[1].currentTime = 0;
		} else {
			this.classList.add('active');
			$('.buttons a').not(this).removeClass('active');
			for (let i = 0; i < $('.buttons a').not(this).length; i++) {
				$('.buttons a').not(this).children('audio')[i].pause();
				$('.buttons a').not(this).children('audio')[i].currentTime = 0;
			}
			this.childNodes[1].play();
		}
	})
	/*Tabs*/
	$('.tab_header').on('click', accord);
	function accord(){
			$('.tab_text').not($(this).next()).slideUp(200);
			$(this).next().slideToggle(300);
		}	
  /*Slider*/
	$('.swiper-slide .gallery_img').click(function() {
		$('.gallery_img').parent().parent().removeClass('flip');
		$(this).parent().parent().addClass('flip');
	});
	$('.gallery_full p').click(function() {
		$('.swiper-slide').removeClass('flip');
	});

	$('.content_toggle').click(function(){
		$('.hidden_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle').html('Read more');
			} else {
				$('.content_toggle').html('Hide text');
			}							
		});
		return false;
	});
	$('.content_toggle_ua').click(function(){
		$('.hidden_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle_ua').html('???????????? ????????????????');
			} else {
				$('.content_toggle_ua').html('?????????????????? ??????????');
			}							
		});
		return false;
	});

});

