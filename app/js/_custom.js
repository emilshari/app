$(document).ready(function () {

	$(function(){
    $('a[href^="#feedback"]').click(function(){
       var target = $(this).attr('href');
       $('html, body').animate({scrollTop: $(target).offset().top - 80}, 500);
       return false;
    });
 });

	// if($(window).width() > 767){
		$(document).mouseup(function (e){
			var div = $(".lk.show");
			if (!div.is(e.target) && div.has(e.target).length === 0 && $(".header-lk__login").has(e.target).length === 0	) { 
				div.removeClass("show");
			}
		}	
		);
	// }

	function fixedHeader(){
		var winTop = $(window).scrollTop();
    if(winTop >= 1){
			$(".header-line").addClass("fixed");
    }else{
      $(".header-line").removeClass("fixed");
    }
	}
	fixedHeader();

	$(window).scroll(function(){
    fixedHeader();
	});

	$("#btn-menu").on("click", function () {
		$(".navigation").toggleClass("open");
		$(this).toggleClass("active");
		$("html").toggleClass("ovh");
		if( $(window).scrollTop() == 0 && $(".header-line").has("fixed")){
			$(".header-line").toggleClass("fixed");
		}
	});

	if($(window).width() > 991){
	function fixedNav(){
		$(window).scroll(function(){
			var winTop = $(window).scrollTop();
			if(winTop >= navTop){
				$(".menus-slider__nav").addClass("fixed");
			}else{
				if( !$(".header-line").has("open")){
					$(".menus-slider__nav").removeClass("fixed");
				}
			}
		});
	}
	}

	$('.form select,.select').niceSelect();

	if($(".section-clients-list").length){
	var options = {
	 slidesToShow: 5,
	 slidesToScroll: 3,
	 arrows: false,
	 dots: true,
	 customPaging : function(slider, i) {
		return '<div class="dot"></div>';
	},
	responsive:[
		{
			breakpoint: 1367,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: true
			}
		}
	]
	}
	$(".section-clients-list").on('init', function(slick) {
		$('.section-clients-list').fadeIn(150);
	}).slick(options);
	}

	if($(".section-news-slides").length){
	var options1 = {
		slidesToShow: 6,
		speed: 300,
		slidesToScroll: 1,
		draggable: true,
		dots: true,
		customPaging : function(slider, i) {
		 return '<div class="dot"></div>';
		},
		arrows: true,
		prevArrow: $(".section-news-slider__nav .prev"),
		nextArrow: $(".section-news-slider__nav .next"),
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	}
	$(".section-news-slides").on('init', function(slick) {
		$('.section-news-slides').fadeIn(150);
	}).slick(options1);
	}

	if($(".section-chef-slides").length){
	var options2 = {
		slidesToShow: 4,
		speed: 300,
		slidesToScroll: 1,
		draggable: true,
		dots: true,
		customPaging : function(slider, i) {
		 return '<div class="dot"></div>';
		},
		arrows: true,
		prevArrow: $(".section-chef-slider__nav .prev"),
		nextArrow: $(".section-chef-slider__nav .next"),
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 574,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
		]
	}
	$(".section-chef-slides").on('init', function(slick) {
		$('.section-chef-slides').fadeIn(150);
	}).slick(options2);
	}

	if($(".menu-slider").length){
	var options3 = {
		slidesToShow: 4,
		speed: 300,
		slidesToScroll: 4,
		draggable: true,
		dots: true,
		customPaging : function(slider, i) {
		 return '<div class="dot"></div>';
		},
		arrows: false,
		responsive:[
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: false
				}
			}
		]
	}
	$(".menu-slider").on('init', function(slick) {
		$('.menu-slider').css("opacity","1");
	}).slick(options3);
}

	if($(".menus-slider").length){
		var options4 = {
			slidesToShow: 1,
			speed: 300,
			slidesToScroll: 1,
			draggable: true,
		dots: false,
		customPaging : function(slider, i) {
		 return '<div class="dot"></div>';
		},
		arrows: true,
		prevArrow: $(".menus-slider__nav .prev"),
		nextArrow: $(".menus-slider__nav .next"),
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			}
		]
	}
	$(".menus-slider").on('init', function(slick) {
		$('.menus-slider').css("opacity","1");
	}).slick(options4).queue(fixedNav());
}
	
	var options5 = {
		slidesToShow: 4,
		speed: 300,
		slidesToScroll: 4,
		draggable: true,
		dots: true,
		customPaging : function(slider, i) {
		 return '<div class="dot"></div>';
		},
		arrows: true,
		prevArrow: $(".catalog-add__nav .prev"),
		nextArrow: $(".catalog-add__nav .next"),
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
				}
			}
		]
	}
	$(".catalog-add").on('init', function(slick) {
		$('.catalog-add').css("opacity","1");
	}).slick(options5);
	

	var options6 = {
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		speed: 300,
		draggable: true,
		customPaging : function(slider, i) {
		 return '<div class="dot"></div>';
		},
		arrows: true,
		prevArrow: $(".gallery-slider__nav .prev"),
		nextArrow: $(".gallery-slider__nav .next"),
	}
	$(".gallery-slider").on('init', function(slick) {
		$('.gallery-slider').css("opacity","1");
	}).slick(options6);



	$("#toRegister").on("click", function () {
		$(".modal").hide();
		$(".register,.md-overlay").fadeIn(150);
	});
	$("#carrier").on("change", function () {
		$(".carrier").show();
	});
	$("#pickup").on("change", function () {
		$(".carrier").hide();
	});



	$(".detail .filter-btn").on("click", function (e) {
		e.preventDefault();
		var id = $(this).attr("data-id");
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent().parent().find(".optional").hide();
		$(this).parent().parent().find("[data-id='"+ id +"']").show();
	});

	$('.passToShow .showpass').click(function(){
		var type = $(this).closest(".passToShow").find(".password").attr('type') == "text" ? "password" : 'text';
		$(this).closest(".form").find("svg path").attr("fill") == "#757575" ? $(this).closest(".form").find("svg path").attr("fill","#F1960D") : $(this).closest(".form").find("svg path").attr("fill","#757575");
		$(this).closest(".form").find(".input").prop('type', type);
	});

	//Временно
	$("#toSms").on("click", function () {
		$(this).closest('.form').hide();
		$(".smscode").fadeIn(150);
	});

	$(".toReg").on("submit", function (e) {
		e.preventDefault();
		$(this).hide();
		$(".sms_send").fadeIn(150);
	});

	$("#forgotPass").on("click", function (e) {
		e.preventDefault();
		$(this).closest('.form').hide();
		$(".forgotPass").fadeIn(150);
	});

	$(".header-lk__login a").on("click", function (e) {
		e.preventDefault();
		$(".lk").toggleClass("show");
	});

	//Временно
	

	$(".catalog-product").on("click", function () {
		$(".modal").hide();
		$(".detail,.md-overlay").fadeIn(150);
	});
	
	$(".lk-header a").on("click", function (e) {
		e.preventDefault();
		$(this).addClass("active").siblings().removeClass("active");
		$(".lk .form").hide();
		$("."+$(this).attr("id")).show();
	});

	//СЮДА НАДО ВЕРНУТЬСЯ
	updateCount(); 
	$('.detail-add .filter-btn span').change(function() {
		count = parseInt( $(this).find("span").text()) ;
	});
	$('.detail-adds.optional [type="checkbox"]').change(function() {
			var count = 0; 
			var id = $(this).closest(".detail-adds").attr("data-id");
			updateCount(this.checked ? 1 : -1, id); 
	});
	function updateCount(a,id) {
			count = a ? count + a : $('.detail .detail-adds[data-id="'+id+'"] input[type=checkbox]:checked').length;
				$(".detail-add .filter-btn[data-id='"+id+"'] span").text(" +"+count);
	}

	$(".catalog_full .catalog-header .filter-btn").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
	});
	$(".catalog_add .catalog-header .filter-btn").on("click", function (e) {
		e.preventDefault();
		$(this).toggleClass("active").siblings().removeClass("active");
	});
	$(".detail-filter a").on("click", function (e) {
		e.preventDefault();
		$(this).addClass("active").siblings().removeClass("active");
		var id = $(this).attr("data-id");
		$(".detail-block").hide();
		$(".detail-block[data-id='"+ id +"']").show();
	});


	$(".news-card").on("click", function (e) {
		e.preventDefault();
		$(this).parent().siblings().find(".news-card").removeClass("active");
		$(".news-card").css("height","auto");
		var cardH = $(this).height();
		var detailH = $(this).find(".news-detail").height() + 100;
		$(this).toggleClass("active");
		$(".news-card.active").css("height",cardH+detailH);
	});

});