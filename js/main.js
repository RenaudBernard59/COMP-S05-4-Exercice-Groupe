function initMap() {
// Create a map object and specify the DOM element for display.
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 50.6476347, lng: 3.1369403},
  zoom: 8
});
}