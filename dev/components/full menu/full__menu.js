let $ = require('jquery');

$('.hamburger__menu').on('click', event => {
    event.preventDefault();

    $('.full__menu').toggleClass('visuallyhidden');
});

$('.full__menu-close').on('click', event => {
    event.preventDefault();

    $('.full__menu').toggleClass('visuallyhidden');
});

// hamburgerMenu.addEventListener('click', () => {
//     fullMenu.classList.toggle('visuallyhidden');
//
//     addOnWheel(fullMenu, event => {
//         let delta = event.deltaY || event.detail || event.wheelDelta;
//
//         event.preventDefault();
//     });
// });
// closeFullMenu.addEventListener('click', () => {
//     fullMenu.classList.toggle('visuallyhidden');
// });