import 'normalize.css';
import '../../common/main.scss'

var initMap = () => {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
};

global.initMap = initMap;
window.initMap = initMap;