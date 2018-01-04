import 'normalize.css';
import '../../common/main.scss';
// import './woter__webGL/haze';
// import './woter__webGL/index-water';

let $ = require('jquery');

//flip__effect
$('.flip__effect').on('click', event =>{
    event.preventDefault();

    $('.flip__card').toggleClass('flipped__card');

});