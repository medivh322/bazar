$ = jQuery;
$(document).ready(function() {
	$(".main-slider").slick({
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 576,
			settings: {
				arrows: false,
			}
		}
		]
	});
	$(".detail-slider__list").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.detial-slider__main',
		vertical: true,
		dots: false,
		arrows: true,
		focusOnSelect: true,
		infinite: true,
		prevArrow: '<img src="images/done_footer.png" style="width: 9px; height: 5px; top: -17px; right: 50%; transform: translate(50%, 0px); cursor: pointer" alt="">',
		nextArrow: '<img src="images/up_footer.png" style="width: 9px; height: 5px; bottom: -17px; right: 50%; transform: translate(50%, 0px); cursor: pointer" alt="">',
		responsive: [
		{
			breakpoint: 576,
			settings: 'unslick'
		}
		]
	});
	$(".detial-slider__main").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		adaptiveHeight: true,
		dots: false,
		arrows: false,
		responsive: [
		{
			breakpoint: 576,
			settings: {
				vertical: false,
				dots: true,
				infinite: true, 	
			}
		}
		]
	});

	let max_height_jsTitle;
	$(".stck-js-title").each(function(index, element){
		let elHeight = $(element).height();
		if (typeof max_height_jsTitle == 'undefined') {
			max_height_jsTitle = elHeight;
		} else {
			if (elHeight > max_height_jsTitle) {
				max_height_jsTitle = elHeight;
			} 
		}
	});
	$(".stck-js-title").each(function(index, element){
		$(element).height(max_height_jsTitle);
	});

	// замена текста //
	function text(first, second, third){
		$(".article__top-menu").children().eq(0).children("span").text(first);
		$(".article__top-menu").children().eq(1).children("a").text(second);
		$(".article__top-menu").children().eq(2).children("a").text(third); 
	}

	$(window).resize(function(){
		if ($(window).width() < 576) {
			text("Товары","Торговые точки","Продавцы")
		} else {
			text("Каталог товаров","Каталог торговых точек","Каталог продавцов");
		}
		let position_lines_footer = $(".footer__phone").offset();
		$(".footer__lines").offset({top:(position_lines_footer.top-6), left:position_lines_footer.left+100});
	});

	if ($(window).width() < 576){
		text("Товары","Торговые точки","Продавцы")
	} else {
		text("Каталог товаров","Каталог торговых точек","Каталог продавцов");
	}

	// раскрытие в футере
	$(".footer__title").click(function(e){
		if ($(window).width() < 576){
			let footer_title = $(this);
			let footer_nav = $(this).siblings(".footer__nav").children(".footer__ul"); 
			$(".footer__ul").not(footer_nav).each(function(i,elem){
				$(elem).hide("slow");
				$(elem).parent(".footer__nav").siblings(".footer__title").css("background","url('images/up_footer.png') no-repeat right");
			});
			footer_nav.toggle("slow", function(){
				if ($(this).css("display") == "block") {
					footer_title.css("background","url('images/done_footer.png') no-repeat right");
				} else{
					footer_title.css("background","url('images/up_footer.png') no-repeat right");
				}
			});
		}
	})

	// 
	let raiting = $('.selles-card__raiting-value').val();
	$('.selles-card__raiting-value').siblings('.selles-card__raiting').children().each(function(i,e){
		if (i < raiting) {
			e.remove();
		} else {
			return false;
		}
	});

	// открытие бургера
	$("#burder_header").click(function(){
		$(this).toggleClass("active");		
		if ($(this).hasClass("active")) {  
			$(".mobile_content_burger").removeClass("d-none");
			$(".mobile_content_burger").addClass("d-flex");
		} else {
			$(".mobile_content_burger").removeClass("d-flex");
			$(".mobile-content-burger").addClass("d-none");
		}
	});

	// универсальное раскрытие
	$(".open_content").on("click", function(){
		$(this).toggleClass("active");
		if ($(this).hasClass("active")) {
			$(this).siblings(".sidebar-left").show();
		} else {
			$(this).siblings(".sidebar-left").hide();
		}
	});

	// открытие каталога в мобилке по нажатию клавиш
	$("#mouseoverCatalog").click(function(){
		$(".catalog-mouse-body").toggle("fast");
	});

	// открытие каталога второго уровня
	$("[data-one-level]").click(function(){
		let elem = $(this);
		let id = $(this).attr("data-one-level");
		$("[data-two-level="+id+"]").toggle("fast",function(){
			if ($(this).css("display") == 'block') {
				elem.addClass("active");
			} else {
				elem.removeClass("active");
			}
		});
	});

	$("[data-one-level]").hover(function(){
		let id = $(this).attr("data-one-level");
		if ($(".catalog-mouseover__list").is("[data-two-level-d="+id+"]")){
			$(".catalog-mouseenter__second-level").css({
				"padding":"0 0 0 24px",
				"border-left": "1px solid #F2F2F2",
				"margin-left": "10px",
			});
			$(".catalog-mouseover__list[data-two-level-d="+id+"]").css("display","block");
			$(".catalog-mouseover__list[data-two-level-d="+id+"]").siblings(".catalog-mouseover__list").css("display","none");
		} else {
			$(".catalog-mouseenter__second-level").css({
				"padding":"0px",
				"border-left": "0px",
				"margin-left": "0px",
			});
			$(".catalog-mouseover__list[data-two-level-d]").each(function(i,elem){
				$(this).css("display","none");
			});
		}
	});

	$("#mouseoverCatalog").mouseleave(function(){
		$(".catalog-mouseenter__second-level").css({
			"padding":"0px",
			"border-left": "0px",
			"margin-left": "0px",
		});
		$("[data-two-level-d]").each(function(i,elem){
			$(elem).css("display","none");
		});
	});

	// collapse
	$("[data-target]").click(function(){
		let id = $(this).attr("data-target");
		let text = $.trim($(this).text());
		$('#profile_title').text(text);
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		$("#"+id+"[data-toggle='collapse']").addClass("active");
		$("#"+id+"[data-toggle='collapse']").siblings().removeClass("active");
	});
	// lines footer

	let position_lines_footer = $(".footer__phone").offset();
	$(".footer__lines").offset({top:(position_lines_footer.top-6), left:position_lines_footer.left+100});

	// вывод рейтинга
	$(".raiting_output").each(function(i,e){
		let value = new Number($(this).children(".raiting_output__value").text());
		let ostatok = value % 1;
		
	});
	value = null;
});