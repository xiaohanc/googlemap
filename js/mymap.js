var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyDFDg1ruZ4GQqPHMv1Z4Lprn_2wXyd0NYk';


function initMap() {
  var position = {
    lat: 42.43882,
    lng: -71.02470
  };

  var map = new google.maps.Map($('#map')[0], {
    zoom: DEFAULT_ZOOM,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });

  $.ajax({
    url: '/nearby_search',
    data: {
      'location': position.lat + ',' + position.lng,
      'type': 'restaurant',
      'key': GOOGLE_API_KEY,
      'radius': 1000
    },
    success: function(data) {
      debugger;
    },
    failure: function(data) {
      debugger;
    }
  });
}
