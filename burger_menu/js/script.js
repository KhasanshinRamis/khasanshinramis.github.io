$(document).ready(function() {
	/* При клике на бургер происходит действие */
	$('.header__burger').click(function(event){
		// При нажатии добавляем класс active, если ещё раз нажали убрали
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});