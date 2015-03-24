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

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHBsaWNhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqYXZhc2NyaXB0XG4oZnVuY3Rpb24oKSB7XG4gIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICB2YXIgbWFwO1xuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgdmFyIGxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNjczNTc4OSwgLTczLjk4OTU4MTk5OTk5OTk4KTtcbiAgICB2YXIgbWFwT3B0aW9ucyA9IHtcbiAgICAgIHpvb206IDE1LFxuICAgICAgY2VudGVyOiBsYXRsbmdcbiAgICB9XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNhbnZhcycpLCBtYXBPcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGVBZGRyZXNzKCkge1xuICAgIHZhciBhZGRyZXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3NfX2ZpZWxkJykudmFsdWU7XG4gICAgZ2VvY29kZXIuZ2VvY29kZSggeyAnYWRkcmVzcyc6IGFkZHJlc3N9LCBmdW5jdGlvbihyZXN1bHRzLCBzdGF0dXMpIHtcbiAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgbWFwLnNldENlbnRlcihyZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbilcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dfX2dlbycpLmlubmVySFRNTCA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24uRCArIFwiLCBcIiArIHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24uaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdHZW9jb2RlIHdhcyBub3Qgc3VjY2Vzc2Z1bCBmb3IgdGhlIGZvbGxvd2luZyByZWFzb246ICcgKyBzdGF0dXMpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd19fZ2VvJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdGlhbGl6ZSk7XG5cbiAgJChcIiNhZGRyZXNzX19zdWJtaXRcIikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgY29kZUFkZHJlc3MoKTtcbiAgfSk7XG5cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=