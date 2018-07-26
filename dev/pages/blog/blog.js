import 'normalize.css';
import '../../common/main.scss'
import '../../components/effects/paralax/paralax';
import '../../components/full menu/full__menu'

let $ = require('jquery');


$('.swipe__sidebar__btn').on('click', event => {
    event.preventDefault();

    const $this = $(event.target),
          container = $this.closest('.swipe__sidebar');

    if (!container.hasClass('swipe__sidebar--open')){
        $('.swipe__sidebar').toggleClass('swipe__sidebar--open');
        $('.wrap').css('marginLeft' , '290px');
    } else {
        $('.swipe__sidebar').toggleClass('swipe__sidebar--open');
        $('.wrap').css('marginLeft' , '0');
    }

});