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
	//Carousel
	function carousel_main() {
		var owl = $(".owl-carousel");
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin:0,
			dots: true,
			mouseDrag: false,
			responsiveClass:true,
      responsive:{
        0:{
					items:1,
					nav:false,
					loop:false,
					margin:25,
					center:true,
					dotsEach: true
        },
        701:{
            items:2,
						nav:false,
						loop:false,
						margin:25,
						center:true,
						dotsEach: true
        },
				750:{
					items:2,
					nav:false,
					loop:true,
					margin:0,
					dotsEach: true
			  },
				1024:{
					items:3,
					nav:false,
					loop:true,
					margin:0,
					dotsEach: true
			  },
				1100:{
					items:3,
					nav:false,
					loop:true,
					margin:0,
					dotsEach: true
			  },
				1150:{
					items:3,
					nav:false,
					loop:true,
					margin:0,
					dotsEach: true
			  },
        1200:{
            items:3,
            nav:false,
            loop:true
        }
    }
			
		});
		owl.on("mousewheel", ".owl-carousel", function (e) {
			if (e.deltaY > 0) {
				owl.trigger('prev.owl.carousel', [300]);
			} else {
				owl.trigger('next.owl.carousel');
			}
			e.preventDefault();
		});
		$(".next_button").click(function() {
			owl.trigger('next.owl.carousel');
		});
		$(".prev_button").click(function() {
			owl.trigger('prev.owl.carousel', [300]);
		});
		owl.on("resized.owl.carousel", function(event) {
			var $this = $(this);
			$this.find(".owl-height").css("height", $this.find(".owl-item.active").height());
		});
		setTimeout(function() {
			owl.find(".owl-height").css("height", owl.find(".owl-item.active").height());
		}, 5000);
	};
	carousel_main();
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
	$('.owl-stage .gallery_img').click(function(e) {
		e.preventDefault();
		$('.gallery_img').parent().parent().removeClass('flip');
		$(this).parent().parent().addClass('flip');
	});

});

