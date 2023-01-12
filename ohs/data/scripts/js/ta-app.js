function dataFormatada() {
	var n = new Date,
		u = n.getDate();
	1 == u.toString().length && (u = "0" + u);
	var e = n.getMonth() + 1;
	return 1 == e.toString().length && (e = "0" + e), u + "/" + e + "/" + n.getFullYear()
}
$(function () {
	$(".menu nav menu").on("click", function () {
		$(".menu nav #n-0").slideToggle()
	}), $(".sub-menu-1").on("click", function () {
		$("#n-1").slideToggle()
	}), $(".menu nav ul .sub-menu-1").on("click", function () {}), $(".menu nav ul .sub-menu-2").on("click", function () {
		$(".menu nav ul li #n-2").slideToggle()
	}), $(".menu nav ul .sub-menu-3").on("click", function () {
		$(".menu nav ul li #n-3").slideToggle()
	}), $(".menu nav ul .sub-menu-4").on("click", function () {
		$(".menu nav ul li #n-4").slideToggle()
	}), $(".menu nav ul .sub-menu-5").on("click", function () {
		$(".menu nav ul li #n-5").slideToggle()
	}), $(".menu nav ul .sub-menu-6").on("click", function () {
		$(".menu nav ul li #n-6").slideToggle()
	}), $(".menu nav ul .sub-menu-7").on("click", function () {
		$(".menu nav ul li #n-7").slideToggle()
	}), $(".menu nav ul .sub-menu-8").on("click", function () {
		$(".menu nav ul li #n-8").slideToggle()
	}), $(".sub-menu-1, .sub-menu-2, .sub-menu-3, .sub-menu-4, .sub-menu-5, .sub-menu-6, .sub-menu-7, .sub-menu-8").click(function () {
		$(this).hasClass("aba-ativo") ? $(this).removeClass("aba-ativo") : ($("li").removeClass("aba-ativo"), $(this).addClass("aba-ativo"))
	}), $(".js-slider").slick({
		dots: !0,
		arrows: !1,
		slidesToShow: 1,
		autoplay: !0,
		autoplaySpeed: 4e3
	}), $(".col-dir .banners").slick({
		dots: !1,
		slidesToShow: 1,
		autoplay: !0,
		autoplaySpeed: 2e3
	}), $(".secao-titulo .center").prepend($(".titulo-secao"))

	//slider
	$('#js-cabecalho').slick({
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,

		responsive: [
			{
				breakpoint: 993,
				settings: {
					arrows: false,
					dots: true,
				}
			},
		]
	});
	//slider fim
});