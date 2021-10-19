const keyUpFrm = function (elm) {
	elm.keyup(function (e) {
		if (elm.val() != '') {
			elm.addClass('keyup');
		} else {
			elm.removeClass('keyup');
		}
	});
}

$(document).ready(function () {
	Waves.init();
	
	keyUpFrm($('#frmSearch'));
	
	const _slideBanner = new Swiper('#slide-banner', {
		loop: true,
		spaceBetween: 50,
		speed: 500,
		effect: 'fade',
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
			disableOnInteraction: false,
		},
	});
	
	$('.openCur_selected').click(function (e) {
		$(this).parent().toggleClass('active');
	});
	
	$('.choose-cur').click(function (e) {
		$(this).closest('.current-select').removeClass('active');
	});
});