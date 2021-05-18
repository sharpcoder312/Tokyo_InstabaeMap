var map;

function createMap () {
  var options = {
    center: { lat: 35.6751184, lng: 139.784247 },
    zoom: 12,
    styles: [
      {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
        "featureType": "poi.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "rgb(39, 116, 160)"
            }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#7dcdcd"
            }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#e0efef"
            }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#1900ff"
            },
            {
                "color": "#c0e8e8"
            }
        ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      }
  ]
  };

  map = new google.maps.Map(document.getElementById('map'), options);


  
  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var searchMarkers = [];
  
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0)
      return;

    searchMarkers.forEach(function (m) { m.setMap(null); });
    searchMarkers = [];

    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(p) {
      if (!p.geometry)
        return;

      searchMarkers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location,
        icon: "./icons/marker1.png",
      }));

      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });
    
    map.fitBounds(bounds);
  });

    // Add Markers to Array
    var markers = [{
      location: {
        lat: 35.6899868,
        lng: 139.7047913
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%81%E3%83%BC%E3%82%BA%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/chst1.jpg" alt="チーズスタンド"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://cheese-stand.com/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#チーズスタンド</a><p>주소 : 1 Chome-16-11 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3481-0884</p></div></div>`
    },
    {
      location: {
        lat: 35.647174,
        lng: 139.7355045,
      },
      iconImage: "./icons/marker1.png"
    },
  ]

  // Loop through marker
  const gmarkers = [];
  for (let i = 0; i < markers.length; i++) {
    gmarkers.push(addMarker(markers[i]));
  }

  // Add Marker
  function addMarker(property) {
    var marker = new google.maps.Marker({
      position: property.location,
      map: map,
      icon: property.iconImage
    });

    const detailWindow = new google.maps.InfoWindow({
      content: property.content
    });

    marker.addListener("click", () => {
      detailWindow.open(map, marker);
      setBounce(marker);
    })

    return marker
  }
  const markerCluster = new MarkerClusterer(map, gmarkers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}

function setBounce(marker) {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout((function() {
    marker.setAnimation(null);
  }).bind(marker), 1400);
}


google.maps.event.addDomListener(window, 'load', initMap);

