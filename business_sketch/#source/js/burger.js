//Убераем скролл при нажатии на бургер и добавление класса active бургеру
// $(window).ready(function() {
// 	 При клике на бургер происходит действие 

// });
//Ставим на иконку
$('.menu-header__icon').click(function(event){
		// При нажатии добавляем класс active, если ещё раз нажали убрали
		$(this).toggleClass('active');
		//Ставим на меню
		$('.menu-header__menu').toggleClass('active');
		if($(this).hasClass('active')){
			$('body').data('scroll', $(window).scrollTop());
		}
			$('body').toggleClass('lock');
		if(!$(this).hasClass('active')){
			$('body,html').scrollTop(parseInt($('body').data('scroll')));
		}
});