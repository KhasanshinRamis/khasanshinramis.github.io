

function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();
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
$('tab_01').click(function(event){
		// При нажатии добавляем класс active, если ещё раз нажали убрали
		$(this).toggleClass('active');
});
$('tab_02').click(function(event){
		// При нажатии добавляем класс active, если ещё раз нажали убрали
		$(this).toggleClass('active');
});
$('tab_03').click(function(event){
		// При нажатии добавляем класс active, если ещё раз нажали убрали
		$(this).toggleClass('active');
});