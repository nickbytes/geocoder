// javascript
(function() {
  var geocoder = new google.maps.Geocoder();
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(40.6735789, -73.98958199999998);
    var mapOptions = {
      zoom: 15,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  }

  function codeAddress() {
    var address = document.getElementById('address__field').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        console.log(results[0].geometry.location)
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        document.getElementById('show__geo').innerHTML = results[0].geometry.location.D + ", " + results[0].geometry.location.k;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
        document.getElementById('show__geo').innerHTML = '';
      }
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

  $("#address__submit").click(function(){
     codeAddress();
  });

  $("#address__field").keypress(function(e){
    if (e.which == 13){
      $("#address__submit").click();
    }
  });

})();
