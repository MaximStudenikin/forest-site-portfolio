let $ = require('jquery');

let sectionScroll = $('.paralax__effect--scroll');
    $(window).scroll(function () {
        let scrollTop = -($(window).scrollTop());
        let speed = sectionScroll.data('speed');
        let coords= '0' + scrollTop / speed + 'px';
        sectionScroll.css('background-position', coords);
    });