
$(document).ready(function () {
    $('.slider').bxSlider();
});

$('.slider').bxSlider({
    speed: 1500,
    moveSlides: 1,
    slideWidth: 460,
    maxSlides: 3,
    minSlides: 3,
    shrinkItems: true,
    controls: true,
    nextText: '<i class="fas fa-chevron-right"></i>',
    prevText: '<i class="fas fa-chevron-left"></i>',
    auto: true,
    autoControls: 'true',
    autoControlsCombine: true,
    stopAutoOnClick: true,
    pager: true,
    pagerType: 'short',

});

$(".nav > ul > li").mouseover(function () {
    $(this).find(".submenu").show();
});

$(".nav > ul > li").mouseout(function () {
    $(this).find(".submenu").hide();
});


$(".slideLIst").children("div:gt(0)").hide();
var current = 0;

setInterval(function () {
    var next = (current + 1) % 7;
    $(".slideLIst").find("div").eq(current).hide();
    $(".slideLIst").find("div").eq(next).fadeIn(1500);
    current = next;
}, 5000);

// navbar
const navbar = document.querySelector('#header');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('header--dark');
    } else {
        navbar.classList.remove('header--dark');
    }
});


const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

arrowUp.addEventListener('click', () => {
    const scrollTo = document.querySelector('#banner');
    scrollTo.scrollIntoView({ behavior: 'smooth' });
});










