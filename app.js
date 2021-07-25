function removeElement(element) {
    if (typeof(element) === "string") {
      element = document.querySelector(element);
    }
    return function() {
      element.parentNode.removeChild(element);
    };
  }
  
const tl = gsap.timeline({defaults: {ease: "power1.out"}});
tl.to(".slider-wrap", {opacity: 0});
tl.to(".hh_text", {opacity: 0});
tl.to(".text", {y: "0%", duration: 1, stagger: 1.25});
tl.to(".slider", {y: "-100%", duration: 1, stagger: 1.5, delay: 1});
tl.to(".intro", {y: "-220%", duration: 1, stagger: 1.5}, "=-0.7");
tl.call(removeElement(".introF"));
tl.fromTo(".nav", {opacity: 0}, {opacity: 1, duration: 1}, "-=0.7");
tl.fromTo(".cmain_logo", {opacity: 0}, {opacity: 1, duration: 1},"-=0.2");
tl.fromTo(".main_text", {opacity: 0}, {opacity: 1, duration: 1},"-=1");
tl.fromTo(".boxed", {opacity: 0}, {opacity: 1, duration: 1});
tl.to(".hh_text", {opacity: 1},"-=1");
tl.to(".slider-wrap", {opacity: 1},"-=1");
tl.fromTo(".footer-basic", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");


jQuery(document).ready(function($) {
	var sliderTimer = 5000;
  var beforeEnd = 500;
	var $imageSlider = $('.image-slider');
	$imageSlider.slick({
		autoplay: true,
		autoplaySpeed: sliderTimer,
		speed: 1000,
		arrows: true,
		dots: false,
		adaptiveHeight: true,
		pauseOnFocus: false,
		pauseOnHover: false,
	});

	function progressBar(){
		$('.slider-progress').find('span').removeAttr('style');
		$('.slider-progress').find('span').removeClass('active');
		setTimeout(function(){
			$('.slider-progress').find('span').css('transition-duration', (sliderTimer/1000)+'s').addClass('active');
		}, 100);
	}
	progressBar();
	$imageSlider.on('beforeChange', function(e, slick) {
		progressBar();
	});
  $imageSlider.on('afterChange', function(e, slick, nextSlide) {
		titleAnim(nextSlide);
	});

	// Title Animation JS
	function titleAnim(ele){
		$imageSlider.find('.slick-current').find('h1').addClass('show');
		setTimeout(function(){
			$imageSlider.find('.slick-current').find('h1').removeClass('show');
		}, sliderTimer - beforeEnd);
	}
	titleAnim();
});