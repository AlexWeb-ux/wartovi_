$(window).load(function() {
	$(".loaderinner").delay(3000).fadeOut("slow"); 
  $(".loader").delay(3200).slideUp("slow");
});
$(document).ready(function() {
	//equalheight - одинаковая высота колонок
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".element"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});
	//Попап менеджер FancyBox
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();
	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();
	//Скролл до id, указанного в hash URL
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
	//Каруселька
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
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
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
	//Аякс отправка форм
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	//Telegram 
	$('.project_text_img').click(function() {
		$('.telegram_modal').fadeIn();
		$('.dark_block').fadeIn();
		$('body').addClass('overflow_hidden');
	})
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
	//Аудио
	$(document).ready(function () {
		$('.start_modal').fadeIn();
		$('.dark_block').fadeIn();
		$('body').addClass('overflow_hidden');
	})	
	$('#onSoundBtn').click(function () {
		document.getElementById('audioFirst').play();
		document.getElementById('1').classList.add('active');
		$('.start_modal').fadeOut();
		$('.dark_block').fadeOut();
		$('body').removeClass('overflow_hidden');
	})	
	$('#offSoundBtn').click(function () {
		$('.start_modal').fadeOut();
		$('.dark_block').fadeOut();
		$('body').removeClass('overflow_hidden');
	})
	$('.start_modal .close_modal').click(function () {
		$('.start_modal').fadeOut();
		$('.dark_block').fadeOut();
		$('body').removeClass('overflow_hidden');
	})
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
	/*likes*/
	const btn = document.querySelector('.buy_likes');
  let like = true,
  likeCount = document.querySelector('.count').innerHTML;
  btn.addEventListener('click', () => {
  likeCount = like ? ++likeCount : --likeCount;
  like = !like;
  document.querySelector('.count').innerHTML = likeCount;
  });
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

