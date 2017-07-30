function initMap() {
  var uluru = {lat: 42.43882, lng:  -71.02470};
  var map = new google.maps.Map($('#map')[0], {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
