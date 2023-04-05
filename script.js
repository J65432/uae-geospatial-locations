document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map').setView([24.299174, 54.697277], 7); // Set center to UAE

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  map.on('click', function(e) {
    var popup = L.popup()
      .setLatLng(e.latlng)
      .setContent('<h3>Update Location Info</h3><form><textarea rows="4" cols="25" placeholder="Enter location info..."></textarea><br><button type="submit">Update</button></form>')
      .openOn(map);
  });
});
