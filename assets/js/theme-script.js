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

const callSelectCurrent = function (e) {
	$('.call-selectCurrent').click(function () {
		$(this).parent().toggleClass('open');
	});
}

const selectCurrent = function (e) {
	$('.selectCurrent').click(function (e) {
		if ($(this).hasClass('active')) {
			$('.call-selectCurrent').trigger('click');
		} else {
			let _image = $(this).attr('data-image'),
				_title = $(this).attr('data-title'),
				_htmlRender = `<img src="${_image}"> ${_title}`;
			
			$('.selectCurrent').removeClass('active');
			$(this).addClass('active');
			$(this).parent().prev('.call-selectCurrent').html(_htmlRender);
			$('.call-selectCurrent').trigger('click');
		}
	});
}

$(document).ready(function () {
	Waves.init();
	
	keyUpFrm($('#frmSearch'));
	callSelectCurrent();
	selectCurrent();
	
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