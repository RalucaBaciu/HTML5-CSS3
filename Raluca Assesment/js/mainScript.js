function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.51234617, lng: -0.0752784};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : false,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "THE METROPOLITAN MUSEUM OF ART, 2nd Floor<br />";
              popupAddress += "St. Clare House<br />";
              popupAddress += "30-33 Minories<br />";
              popupAddress += "London EC3N 1DD<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }