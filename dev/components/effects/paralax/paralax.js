$ = require('jquery');
let sectionScroll = $('.paralax__effect--scroll');
    $(window).scroll(function () {
        let scrollTop = -($(window).scrollTop());
        let speed = sectionScroll.data('speed');
        let coords= '0' + scrollTop / speed + 'px';
        sectionScroll.css('background-position', coords);
    });

// let sectionMove = $('.paralax__effect--move');
// $(window).mousemove(function (e){
//     let mouseMove = -(e.pageX);
//     let speed = sectionMove.data('speed');
//     let coords =mouseMove / speed + 'px';
//     sectionMove.css('background-position', coords);
// });