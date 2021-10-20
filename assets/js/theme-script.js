const keyUpFrm = function (elm) {
	elm.keyup(function (e) {
		if (elm.val() != '') {
			elm.addClass('keyup');
		} else {
			elm.removeClass('keyup');
		}
	});
}

const paramPopupOrder = function (target, name, cPrice, sku = '') {
	$('#product-title').html(name);
	$('#current-price').html(cPrice);
	$('#sku').html(sku);
	$(target).modal('show');
}

$(document).ready(function () {
	Waves.init();
	
	keyUpFrm($('#frmSearch'));
	
	$('.call-popupOrder').click(function (e) {
		e.stopPropagation();
		let target = $(this).attr('data-target'),
			name = $(this).attr('data-name'),
			cPrice = $(this).attr('data-cPrice'),
			sku = $(this).attr('data-sku');
		
		paramPopupOrder(target, name, cPrice, sku)
	});
	
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
	
	$('.openCur_selected').click(function () {
		$(this).parent().toggleClass('active');
	});
	
	$('.choose-cur').click(function () {
		$(this).closest('.current-select').removeClass('active');
	});
});