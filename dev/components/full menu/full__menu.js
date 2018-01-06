let $ = require('jquery');

$('.hamburger__menu, .full__menu-close').on('click', event => {
    event.preventDefault();
    $('.full__menu').toggleClass('visuallyhidden');
});