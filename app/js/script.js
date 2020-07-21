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
	// $(".detail-slider__list").slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	vertical: true,
	// 	adaptiveHeight: true,
	// 	dots: false,
	// 	arrows: true,
	// });

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

	let firstMouseOver = false;
	$("#mouseoverCatalog").mouseenter(function(fn){
		$(".catalog-mouseover").css("visibility","visible");
		firstMouseOver = true;
	});
	$("#mouseoverCatalog").mouseleave(function(fn){
		if (!secondMouseOver){
			$(".catalog-mouseover").css("visibility","hidden");
		}
	});

	$(".catalog-mouseover").mouseleave(function(fn){
		$(this).css("visibility","hidden");
	});

	let openId;
	$('[data-1-level-id]').mouseenter(function(){
		let id = $(this).attr('data-1-level-id');
		if ($('[data-2-level-id='+id+']').length) {
			openId = id;
			$('[data-2-level-id='+id+']').css('display','block');
			$('[data-2-level-id='+id+']').siblings().css('display','none');
		} else {
			$('[data-2-level-id='+openId+']').css('display','none');
			$('[data-3-level-id='+openId+']').css('display','none');
		}
	});
	$('[data-2-level-id]').mouseenter(function(){
		let id = $(this).attr('data-2-level-id');
		if ($('[data-3-level-id='+id+']').length) {
			$('[data-3-level-id='+id+']').css('display','block');
			$('[data-3-level-id='+id+']').siblings().css('display','none');
		} else {
			$('[data-3-level-id='+openId+']').css('display','none');
		}
	});

	// замена текста //
	function text(first, second, third){
		$(".article__top-menu").children().eq(0).text(first);
		$(".article__top-menu").children().eq(1).text(second);
		$(".article__top-menu").children().eq(2).text(third); 
	}
	$(window).resize(function(){
		if ($(window).width() < 576) {
			text("Товары","Торговые точки","Продавцы")
		} else {
			text("Каталог товаров","Каталог торговых точек","Каталог продавцов");
		}
	});

	// раскрытие в футере
	// $(".footer__title").click(function(e){
	// 	let el = $(this); 
	// 	let footer_nav = $(this).siblings(".footer__nav"); 
	// 	console.log($(this));
	// })
});