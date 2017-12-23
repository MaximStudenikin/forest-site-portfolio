var initMap = () => {
    var uluru = {lat: 55.746795, lng: 37.626242};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: {lat:55.746336, lng:37.624341},
        mapTypeControl: false,
        disableDefaultUI: true,
        fullscreenControl: false
    });

    var svgSparait = require('../../images/svg/map_marker.svg');

    var marker = new google.maps.Marker({
        position: uluru,
        icon: svgSparait,
        map: map
    });

    var styles = {
        default: null,
        forest: [
            {
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#bdbdbd'}]
            },
            {
                featureType: 'man_made',
                elementType: 'geometry.stroke',
                stylers: [{color: '#bdbdbd'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [{color: '#757575'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#dadada'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#616161'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#86A77A'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9e9e9e'}]
            }
        ]
    };

    map.setOptions({styles: styles.forest});
};
global.initMap = initMap;
window.initMap = initMap;