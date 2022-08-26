const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.nav__list-mob');
const switchElement = document.querySelector('.prices__switch-element');
const testClass = document.querySelector('.test');

burger.addEventListener('click', function () {
    mobileMenu.classList.toggle('nav__list-mob-active');
})


switchElement.addEventListener('click', function () {
    testClass.classList.toggle('white-round');
    testClass.classList.toggle('white-round-next');
})

