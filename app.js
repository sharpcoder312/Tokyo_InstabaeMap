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
        lat: 35.6666425,
        lng: 139.6914441
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%81%E3%83%BC%E3%82%BA%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/chst1.jpg" alt="チーズスタンド"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://cheese-stand.com/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#チーズスタンド</a><p>주소 : 1 Chome-16-11 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3481-0884</p></div></div>`
    }, // 치즈스탠드
    {
      location: {
        lat: 35.6431782,
        lng: 139.6980374,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%AA%E3%83%8B%E3%83%90%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/onibus.jpg" alt="オニバスコーヒー"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://onibuscoffee.com/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#オニバスコーヒー</a><p>주소 : 2 Chome-14-1 Kamimeguro, Meguro City, Tokyo 153-0051 일본</p><p>운영 시간 : 오전 9시 ~ 오후 6시</p><p>전화번호 : +81 3-6412-8683</p></div></div>`
      // 오니버스 オニバスコーヒー
    },
    {
      location: {
        lat: 35.6720937,
        lng: 139.6906045,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/littlenapcoffeestand/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/littlenap.jpg" alt="リトルナップ コーヒースタンド"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://littlenap.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#Little Nap Coffee Stand</a><p>주소 : 5 Chome-65-4 Yoyogi, Shibuya City, Tokyo 151-0053 일본</p><p>운영 시간 : 오전 9시 ~ 오후 7시</p><p>전화번호 : +81 3-3466-0074</p></div></div>`
      // 리틀냅
    },
    {
      location: {
        lat: 35.6677177,
        lng: 139.6838773,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%AA%E3%83%88%E3%83%AB%E3%83%8A%E3%83%83%E3%83%97%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/littlesnap2.jpg" alt="リトルナップ コーヒーロースターズ"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://littlenap.jp/" target="_blank" style='margin: 0; font-size: 22px; text-decoration: none;'>#Little Nap Coffee Stand Roasters</a><p>주소 : 2-43-15 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p>운영 시간 : 오전 9시 ~ 오후 7시</p><p>전화번호 : +81 3-5738-8045</p></div></div>`
      // 리틀냅2
    },
    {
      location: {
        lat: 35.6676216,
        lng: 139.7060224,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/honeymihoneycafe/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/honey2.jpg" alt="Honey Mi Honey"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://honey-mi-honey.com/reservation/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#Honey Mi Honey</a><p>주소 : 일본 〒150-0001 Tokyo, Shibuya City, Jingumae, 6 Chome−2−6 原宿あかねビル 2F</p><p>운영 시간 : 오후 12시 ~ 오후 8시(수요일 휴무)</p><p>전화번호 : +81 3-5774-2190</p></div></div>`
      // 허니미허니
    },
    {
      location: {
        lat: 35.651085,
        lng: 139.7245727,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/_nem_coffee_espresso//" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nem.jpg" alt="ネムコーヒーア"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="http://nem-coffee.com/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#Nem Coffee & Espresso</a><p>주소 : 4 Chome-5-6 Minamiazabu, Minato City, Tokyo 106-0047 일본</p><p>운영 시간 : 오후 08시 ~ 오후 5시(화요일 휴무)</p><p>전화번호 : +81 3-6886-4777</p></div></div>`
      // 네무커피 ネムコーヒーアンドエスプレッソ
    },
    {
      location: {
        lat: 35.6740435,
        lng: 139.7293852,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/connelcoffee/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/conel.jpg" alt="コーネルコーヒー"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="http://connelcoffee.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#コーネルコーヒー</a><p>주소 : 일본 〒107-0052 Tokyo, Minato City, Akasaka, 7 Chome−2−21, Sōgetsu Hall, 2階</p><p>운영 시간 : 오전 10시 ~ 오후 6시(주말 휴무)</p><p>전화번호 : +81 3-6434-0192</p></div></div>`
      // 코네루커피 コーネル
    },
    {
      location: {
        lat: 35.6655863,
        lng: 139.6929491,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/thelattetokyo/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/thelatte.jpg" alt="THE LATTE TOKYO"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://linktr.ee/thelattetokyo" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#THE LATTE TOKYO</a><p>주소 : 3-3 Kamiyamacho, Shibuya City, Tokyo 150-0047 일본</p><p>운영 시간 : 오전 8시 ~ 오후 7시(주말 10~18시)</p><p>전화번호 : +81 3-6416-8298</p></div></div>`
      // 더 라떼 커피 THE LATTE TOKYO
    },
    {
      location: {
        lat: 35.6668317,
        lng: 139.6924029,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%9C%E3%83%B3%E3%83%80%E3%82%A4%E3%82%AB%E3%83%95%E3%82%A7/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/bondi.jpg" alt="Bondi Cafe"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="http://bondicafe.net/bondi-cafe-yoyogi-beach-park/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#Bondi Cafe</a><p>주소 : 일본 〒151-0063 Tokyo, Shibuya City, Tomigaya, 1 Chome−15−2 バルビゾン５５ 1F</p><p>운영 시간 : 오전 9시 ~ 오후 8시</p><p>전화번호 : +81 3-5790-9998</p></div></div>`
      // 본디 커피 bondi
    },
    {
      location: {
        lat: 35.6655554,
        lng: 139.6922187,
      },
      iconImage: "./icons/marker1.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/camelbacktokyo/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/camel.jpg" alt="CAMELBACK"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://camelback.tokyo/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#CAMELBACK Sandwich</a><p>주소 : 42-2 Kamiyamacho, Shibuya City, Tokyo 150-0047 일본</p><p>운영 시간 : 오전 9시 ~ 오후 6시</p><p>전화번호 : +81 3-6407-0069</p></div></div>`
      // 카멜백 camelback
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

