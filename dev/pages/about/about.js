import 'normalize.css';
import '../../common/main.scss'

let thisMap = function() {
    let uluru = {lat: -25.363, lng: 131.044};
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
    let marker = new google.maps.Marker({position: uluru, map: map});
};

window.thisMap = thisMap;