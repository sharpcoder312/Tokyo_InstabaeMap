var map;

function createMap () {
  var options = {
    center: { lat: 35.6951184, lng: 139.744247 },
    zoom: 11.5,
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
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%81%E3%83%BC%E3%82%BA%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/chst1.jpg" alt="チーズスタンド"/></a></div>
      <div style='position: reletive;'><a href="https://cheese-stand.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#チーズスタンド</a><p style='margin-bottom: 3px'>주소 : 1 Chome-16-11 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3481-0884</p></div></div>`
    }, // 치즈스탠드
    {
      location: {
        lat: 35.6431782,
        lng: 139.6980374,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%AA%E3%83%8B%E3%83%90%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/onibus.jpg" alt="オニバスコーヒー"/></a></div>
      <div style='position: reletive;'><a href="https://onibuscoffee.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#オニバスコーヒー</a><p style='margin-bottom: 3px'>주소 : 2 Chome-14-1 Kamimeguro, Meguro City, Tokyo 153-0051 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 9시 ~ 오후 6시</p><p>전화번호 : +81 3-6412-8683</p></div></div>`
      // 오니버스 オニバスコーヒー
    },
    {
      location: {
        lat: 35.6720937,
        lng: 139.6906045,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/littlenapcoffeestand/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/littlenap.jpg" alt="リトルナップ コーヒースタンド"/></a></div>
      <div style='position: reletive;'><a href="https://littlenap.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Little Nap Coffee Stand</a><p style='margin-bottom: 3px'>주소 : 5 Chome-65-4 Yoyogi, Shibuya City, Tokyo 151-0053 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 9시 ~ 오후 7시</p><p>전화번호 : +81 3-3466-0074</p></div></div>`
      // 리틀냅
    },
    {
      location: {
        lat: 35.6677177,
        lng: 139.6838773,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%AA%E3%83%88%E3%83%AB%E3%83%8A%E3%83%83%E3%83%97%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC%E3%83%AD%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/littlesnap2.jpg" alt="リトルナップ コーヒーロースターズ"/></a></div>
      <div style='position: reletive;'><a href="https://littlenap.jp/" target="_blank" style='margin: 0; font-size: 1.7em; text-decoration: none;'>#Little Nap Coffee Stand Roasters</a><p style='margin-bottom: 3px'>주소 : 2-43-15 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 9시 ~ 오후 7시</p><p>전화번호 : +81 3-5738-8045</p></div></div>`
      // 리틀냅2
    },
    {
      location: {
        lat: 35.6676216,
        lng: 139.7060224,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/honeymihoneycafe/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/honey2.jpg" alt="Honey Mi Honey"/></a></div>
      <div style='position: reletive;'><a href="https://honey-mi-honey.com/reservation/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Honey Mi Honey</a><p style='margin-bottom: 3px'>주소 : 일본 〒150-0001 Tokyo, Shibuya City, Jingumae, 6 Chome−2−6 原宿あかねビル 2F</p><p style='margin-bottom: 3px'>운영 시간 : 오후 12시 ~ 오후 8시(수요일 휴무)</p><p>전화번호 : +81 3-5774-2190</p></div></div>`
      // 허니미허니
    },
    {
      location: {
        lat: 35.651085,
        lng: 139.7245727,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>
      
      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/nemcoffeeandespresso/" target="_blank" style="color: black">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nem.jpg" alt="ネムコーヒーア"/></a></div>
      <div style='position: reletive;'><a href="http://nem-coffee.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Nem Coffee & Espresso</a><p style='margin-bottom: 3px'>주소 : 4 Chome-5-6 Minamiazabu, Minato City, Tokyo 106-0047 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오후 08시 ~ 오후 5시(화요일 휴무)</p><p>전화번호 : +81 3-6886-4777</p></div></div>`
      // 네무커피 ネムコーヒーアンドエスプレッソ
    },
    {
      location: {
        lat: 35.6740435,
        lng: 139.7293852,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/connelcoffee/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/conel.jpg" alt="コーネルコーヒー"/></a></div>
      <div style='position: reletive;'><a href="http://connelcoffee.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#コーネルコーヒー</a><p style='margin-bottom: 3px'>주소 : 일본 〒107-0052 Tokyo, Minato City, Akasaka, 7 Chome−2−21, Sōgetsu Hall, 2階</p><p style='margin-bottom: 3px'>운영 시간 : 오전 10시 ~ 오후 6시(주말 휴무)</p><p>전화번호 : +81 3-6434-0192</p></div></div>`
      // 코네루커피 コーネル
    },
    {
      location: {
        lat: 35.6655863,
        lng: 139.6929491,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/thelattetokyo/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/thelatte.jpg" alt="THE LATTE TOKYO"/></a></div>
      <div style='position: reletive;'><a href="https://linktr.ee/thelattetokyo" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#THE LATTE TOKYO</a><p style='margin-bottom: 3px'>주소 : 3-3 Kamiyamacho, Shibuya City, Tokyo 150-0047 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 8시 ~ 오후 7시(주말 10~18시)</p><p>전화번호 : +81 3-6416-8298</p></div></div>`
      // 더 라떼 커피 THE LATTE TOKYO
    },
    {
      location: {
        lat: 35.6668317,
        lng: 139.6924029,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%9C%E3%83%B3%E3%83%80%E3%82%A4%E3%82%AB%E3%83%95%E3%82%A7/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/bondi.jpg" alt="Bondi Cafe"/></a></div>
      <div style='position: reletive;'><a href="http://bondicafe.net/bondi-cafe-yoyogi-beach-park/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Bondi Cafe</a><p style='margin-bottom: 3px'>주소 : 일본 〒151-0063 Tokyo, Shibuya City, Tomigaya, 1 Chome−15−2 バルビゾン５５ 1F</p><p style='margin-bottom: 3px'>운영 시간 : 오전 9시 ~ 오후 8시</p><p>전화번호 : +81 3-5790-9998</p></div></div>`
      // 본디 커피 bondi
    },
    {
      location: {
        lat: 35.6655554,
        lng: 139.6922187,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/camelbacktokyo/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/camel.jpg" alt="CAMELBACK"/></a></div>
      <div style='position: reletive;'><a href="https://camelback.tokyo/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#CAMELBACK Sandwich</a><p style='margin-bottom: 3px'>주소 : 42-2 Kamiyamacho, Shibuya City, Tokyo 150-0047 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 9시 ~ 오후 6시</p><p>전화번호 : +81 3-6407-0069</p></div></div>`
      // 카멜백 camelback
    },
    {
      location: {
        lat: 35.68698,
        lng: 139.73845,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/natadecristiano/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nata.jpg" alt="ナタ・デ・クリスチアノ"/></a></div>
      <div style='position: reletive;'><a href="http://www.cristianos.jp/nata/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#ナタ・デ・クリスチアノ</a><p style='margin-bottom: 3px'>주소 : 일본 〒151-0063 Tokyo, Shibuya City, 渋谷区Tomigaya, 1 Chome−14−16 スタンフォードコート</p><p style='margin-bottom: 3px'>운영 시간 : 오전 10시 ~ 오후 7시 30분</p><p>전화번호 : +81 3-6804-9723</p></div></div>`
      // 나타 데 크리스티아노
    },
    {
      location: {
        lat: 35.6691043,
        lng: 139.6900557,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/afterhourscafe/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/after.jpg" alt="Afterhours"/></a></div>
      <div style='position: reletive;'><a href="https://afterhours.jp/shop/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Afterhours</a><p style='margin-bottom: 3px'>주소 : 1 Chome-7-9 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오후 12시 ~ 오후 5시</p><p>임시 휴업 중</p></div></div>`
      // 애프터하우스
    },
    {
      location: {
        lat: 35.6585805,
        lng: 139.7453389,
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/tower.jpg" alt="東京タワー"/></a></div>
      <div style='position: reletive;'><a href="https://www.tokyotower.co.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#東京タワー</a><p style='margin-bottom: 3px'>주소 : 4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011 일본</p><p>임시 휴업중</p><p>전화번호 : +81 3-3433-5111</p></div></div>`
      // 도쿄타워
    },
    {
      location: {
        lat: 35.6722448,
        lng: 139.7624187,
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/plaza.jpg" alt="東急プラザ銀座"/></a></div>
      <div style='position: reletive;'><a href="https://ginza.tokyu-plaza.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#東急プラザ 銀座</a><p style='margin-bottom: 3px'>주소 : 5 Chome-2-1 Ginza, Chuo City, Tokyo 104-0061 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3571-0109</p></div></div>`
      // 도쿄프라자
    },
    {
      location: {
        lat: 35.7100627,
        lng: 139.8107004,
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%9D%B1%E4%BA%AC%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%84%E3%83%AA%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/sky.jpg" alt="東京スカイツリー"/></a></div>
      <div style='position: reletive;'><a href="https://www.tokyo-skytree.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#東京スカイツリー</a><p style='margin-bottom: 3px'>주소 : 1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045 일본</p><p>임시 휴업중</p><p>전화번호 : +81 570-550-634</p></div></div>`
      // 스카이트리
    },
    {
      location: {
        lat: 35.7153358,
        lng: 139.7739818,
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E4%B8%8A%E9%87%8E%E5%85%AC%E5%9C%92/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/ueno.jpg" alt="上野公園"/></a></div>
      <div style='position: reletive;'><a href="https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/kouenannai.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#上野公園</a><p style='margin-bottom: 3px'>주소 : 일본 〒110-0007 Tokyo, Taito City, Uenokoen, 8, ５−２０・池之端三丁目</p><p style='margin-bottom: 3px'>운영 시간 : 오전 5시 ~ 오후 11시</p><p>전화번호 : +81 3-3828-5644</p></div></div>`
      // 우에노 공원
    },
    {
      location: {
        lat: 35.7099344,
        lng: 139.8091915
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%81%99%E3%81%BF%E3%81%A0%E6%B0%B4%E6%97%8F%E9%A4%A8/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/suimida.jpg" alt="すみだ水族館"/></a></div>
      <div style='position: reletive;'><a href="https://www.sumida-aquarium.com/index.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#すみだ水族館</a><p style='margin-bottom: 3px'>주소 : 일본 〒131-0045 Tokyo, Sumida City, Oshiage, 1 Chome−1−2 東京スカイツリータウン・ソラマチ 5-6F</p><p>임시 휴업중</p><p>전화번호 : +81 3-5619-1821</p></div></div>`
      // 스미다 수족관
    },
    {
      location: {
        lat: 35.6958427,
        lng: 139.7030554
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA%E4%B8%80%E7%95%AA%E8%A1%97/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/kabuki.jpg" alt="歌舞伎町"/></a></div>
      <div style='position: reletive;'><a href="http://www.kabukicho.or.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#歌舞伎町(Kabukicho)</a><p style='margin-bottom: 3px'>주소 : 〒160-0021 도쿄도 신주쿠구</p><p>가부키쵸는 밤문화를 즐기기 위한 스폿이 수많이 존재하며, 거리가 밤부터 활기를 띄어서 사람들이 「잠들지 않는 거리」라고 부르고 있습니다.</p></div></div>`
      // 가부키초
    },
    {
      location: {
        lat: 35.7187449,
        lng: 139.7960771
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%B5%85%E8%8D%89/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/asakusa.jpg" alt="浅草"/></a></div>
      <div style='position: reletive;'><a href="https://www.gotokyo.org/kr/destinations/eastern-tokyo/asakusa/index.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#浅草(Asakusa)</a><p style='margin-bottom: 3px'>주소 : 〒111-0032 도쿄도 다이토구</p><p>아사쿠사는 옛 도쿄의 분위기를 간직하고 있는 지역으로 유서 깊은 센소지 인근의 나카미세 거리에는 전통적인 공예품점과 길거리 음식 노점이 있습니다. 아사쿠사를 방문하여, 일본의 전통, 예술, 공예품을 접해보세요!</p></div></div>`
      // 아사쿠사
    },
    {
      location: {
        lat: 35.6594975,
        lng: 139.6990039
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/locations/2043173272649826/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/crossing2.jpg" alt="渋谷スクランブル交差点"/></a></div>
      <div style='position: reletive;'><a href="https://en.japantravel.com/tokyo/shibuya-crossing/3016" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#渋谷スクランブル交差点</a><p style='margin-bottom: 3px'>주소 : 1 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043 일본</p><p>도쿄의 상징적인 랜드마크 시부야 스크램블 교차로에서 한번에 1,000명 이상이 도로를 건너는 광경을 구경하세요. 도쿄 인구 최다 밀집지역을 카메라에 담을 수 있는 시부야의 대표 포토 스팟</p></div></div>`
      // 시부야 교차로 
    },
    {
      location: {
        lat: 35.6763976,
        lng: 139.6993259
      },
      iconImage: "./icons/museums.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/meiji2.jpg" alt="明治神宮"/></a></div>
      <div style='position: reletive;'><a href="https://www.meijijingu.or.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#明治神宮</a><p style='margin-bottom: 3px'>주소 : 1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 5시 ~ 오후 6시 10분</p><p>전화번호 : +81 3-3379-5511</p></div></div>`
      // 메이지 신사
    },
    {
      location: {
        lat: 35.7200104,
        lng: 139.7607541
      },
      iconImage: "./icons/museums.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%A0%B9%E6%B4%A5%E7%A5%9E%E7%A4%BE/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nedu2.jpg" alt="根津神社"/></a></div>
      <div style='position: reletive;'><a href="http://www.nedujinja.or.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#根津神社</a><p style='margin-bottom: 3px'>주소 : 1 Chome-28-9 Nezu, Bunkyo City, Tokyo 113-0031 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 6시 ~ 오후 4시 30분</p><p>전화번호 : +81 3-3822-0753</p></div></div>`
      // 네즈 신사
    },
    {
      location: {
        lat: 35.6746667,
        lng: 139.7399445
      },
      iconImage: "./icons/museums.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%97%A5%E6%9E%9D%E7%A5%9E%E7%A4%BE/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/hie.png" alt="日枝神社"/></a></div>
      <div style='position: reletive;'><a href="https://www.hiejinja.net/index.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#日枝神社</a><p style='margin-bottom: 3px'>주소 : 2 Chome-10-5 Nagatachō, Chiyoda City, Tokyo 100-0014 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 6시 ~ 오후 5시</p><p>전화번호 : +81 3-3581-2471</p></div></div>`
      // 히에 신사
    },
    {
      location: {
        lat: 35.6488126,
        lng: 139.647585
      },
      iconImage: "./icons/museums.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/gotokujitemple/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/gotokuji.jpg" alt="豪徳寺"/></a></div>
      <div style='position: reletive;'><a href="https://gotokuji.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#豪徳寺</a><p style='margin-bottom: 3px'>주소 : 2 Chome-24-7 Gotokuji, Setagaya City, Tokyo 154-0021 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 6시 ~ 오후 5시(임시 휴업중)</p><p>전화번호 : +81 3-3426-1437</p></div></div>`
      // 고토쿠지
    },
    {
      location: {
        lat: 35.7147651,
        lng: 139.7967613
      },
      iconImage: "./icons/museums.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%B5%85%E8%8D%89%E5%AF%BA/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/sensoji.jpg" alt="浅草寺"/></a></div>
      <div style='position: reletive;'><a href="https://www.senso-ji.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#浅草寺</a><p style='margin-bottom: 3px'>주소 : 2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 6시 ~ 오후 5시</p><p>전화번호 : +81 3-3842-0181</p></div></div>`
      // 센소지
    },
    {
      location: {
        lat: 35.6865016,
        lng: 139.6970264
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%81%86%E3%81%A9%E3%82%93%E6%85%8E/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/udonsin.jpg" alt="うどん 慎"/></a></div>
      <div style='position: reletive;'><a href="https://www.udonshin.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#うどん 慎</a><p style='margin-bottom: 3px'>주소 : 일본 〒151-0053 Tokyo, Shibuya City, Yoyogi, 2 Chome−20−16 相馬ビル １F</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-6276-7816</p></div></div>`
      // 우동신
    },
    {
      location: {
        lat: 35.6465322,
        lng: 139.6928018
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/higashiyamatokyo/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/higashi.jpg" alt="HIGASHI-YAMA Tokyo"/></a></div>
      <div style='position: reletive;'><a href="https://higashiyama-tokyo.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#HIGASHI-YAMA Tokyo</a><p style='margin-bottom: 3px'>주소 : 1 Chome-21-25 Higashiyama, Meguro City, Tokyo 153-0043 일본</p><p>임시 휴업 중</p><p>전화번호 : +81 3-5720-1300</p></div></div>`
      // 히가시야마
    },
    {
      location: {
        lat: 35.6902676,
        lng: 139.7064013
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%82%E3%81%A8%E6%9D%91/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/motomura.jpg" alt="牛かつもと村"/></a></div>
      <div style='position: reletive;'><a href="https://www.gyukatsu-motomura.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#牛かつもと村</a><p style='margin-bottom: 3px'>주소 : 2 Chome-2 Shinjuku, Shinjuku City, Tokyo 160-0022 일본 </p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 10시</p><p>전화번호 : +81 3-3354-0171</p></div></div>`
      // 모토무라 1
    },
    {
      location: {
        lat: 35.6663971,
        lng: 139.7560212
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%82%E3%81%A8%E6%9D%91/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/motomura2.jpg" alt="牛かつもと村"/></a></div>
      <div style='position: reletive;'><a href="https://www.gyukatsu-motomura.com/" target="_blank" style='margin: 0; font-size: 1.7em; text-decoration: none;'>#牛かつもと村 (신바시점)</a><p style='margin-bottom: 3px'>주소 : 일본 〒105-0004 Tokyo, Minato City, Shinbashi, 2 Chome−15−13, Elegance.Bld., B1F</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 9시</p><p>전화번호 : +81 3-3593-2229</p></div></div>`
      // 모토무라 2
    },
    {
      location: {
        lat: 35.68687,
        lng: 139.7750558
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%82%E3%81%A8%E6%9D%91/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/motomura2.jpg" alt="牛かつもと村"/></a></div>
      <div style='position: reletive;'><a href="https://www.gyukatsu-motomura.com/" target="_blank" style='margin: 0; font-size: 1.7em; text-decoration: none;'>#牛かつもと村 (무라마치점)</a><p style='margin-bottom: 3px'>주소 : 일본 〒103-0022 Tokyo, Chuo City, Nihonbashimuromachi, 2 Chome−3−1 ２ 地下1階 B18号室 コレド室町</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3273-5121</p></div></div>`
      // 모토무라 3
    },
    {
      location: {
        lat: 35.6570237,
        lng: 139.7039568
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%82%E3%81%A8%E6%9D%91/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/motomura4.jpg" alt="牛かつもと村"/></a></div>
      <div style='position: reletive;'><a href="https://www.gyukatsu-motomura.com/" target="_blank" style='margin: 0; font-size: 1.7em; text-decoration: none;'>#牛かつもと村 (시부야점)</a><p style='margin-bottom: 3px'>주소 : 일본 〒150-0002 Tokyo, Shibuya City, Shibuya, 3 Chome−18−10 2号館地下1階 大野ビル</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 10시</p><p>전화번호 : +81 3-3797-3735</p></div></div>`
      // 모토무라 4
    },
    {
      location: {
        lat: 35.6655431,
        lng: 139.7105646
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E8%8C%B6%E6%B4%92%E9%87%91%E7%94%B0%E4%B8%AD/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/sasya3.jpg" alt="茶洒 金田中"/></a></div>
      <div style='position: reletive;'><a href="http://www.kanetanaka.co.jp/restrant/sahsya/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#茶洒 金田中</a><p style='margin-bottom: 3px'>주소 : 3 Chome-6-1 Kitaaoyama, Minato City, Tokyo 107-0061 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 30분 ~ 오후 10시</p><p>전화번호 : +81 3-6450-5116</p></div></div>`
      // 사샤
    },
    {
      location: {
        lat: 35.6955676,
        lng: 139.6986518
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E9%BA%BA%E5%B1%8B%E6%AD%A6%E8%94%B5/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/menya.jpg" alt="麺屋武蔵"/></a></div>
      <div style='position: reletive;'><a href="https://menya634.co.jp/storelist/shinjuku/?lang=ko" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#麺屋武蔵 (본점)</a><p style='margin-bottom: 3px'>주소 : 일본 〒160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7 Chome−2−6 西新宿Ｋ－１ビル 1F</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 10시</p><p>전화번호 : +81 3-3363-4634</p></div></div>`
      // 멘야무사시 본점
    },
    {
      location: {
        lat: 35.7190704,
        lng: 139.9263643
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E5%91%B3%E6%A5%BD%E4%BA%AD/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/mirak2.jpg" alt="味楽亭"/></a></div>
      <div style='position: reletive;'><a href="https://mirakutei-motoyawata.gorp.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#味 楽 亭(야키니쿠 전문)</a><p style='margin-bottom: 3px'>주소 : 일본 〒272-0023 Chiba, Ichikawa, Minamiyawata, 4 Chome−8−2 エスフォート本八幡 1F</p><p style='margin-bottom: 3px'>운영 시간 : 오후 5시 ~ 오후 10시</p><p>전화번호 : +81 47-377-2941</p></div></div>`
      // 미락정
    },
    {
      location: {
        lat: 35.6710627,
        lng: 139.7050782
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/santamonicacrepes/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/santa.jpg" alt="Santa monica Crepes"/></a></div>
      <div style='position: reletive;'><a href="http://santamonica.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Santa monica Crepes</a><p style='margin-bottom: 3px'>주소 : 1 Chome-16-16-8 Jingumae, Shibuya City, Tokyo 150-0001 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 10시 ~ 오후 9시</p><p>전화번호 : +81 3-3804-5139</p></div></div>`
      // 산타모니카
    },
    {
      location: {
        lat: 35.6710227,
        lng: 139.7050982
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/angelcrepes/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/heart.jpg" alt="Angel Crepes"/></a></div>
      <div style='position: reletive;'><a href="http://www.angelsrecipeicecream.com/menu" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Angel Crepes</a><p style='margin-bottom: 3px'>주소 : 1 Chome-16-9 Jingumae, Shibuya City, Tokyo 150-0001 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 10시 ~ 오후 9시</p><p>전화번호 : +81 3-6804-5139</p></div></div>`
      // 엔젤크레페
    },
    {
      location: {
        lat: 35.642781,
        lng: 139.6689434
      },
      iconImage: "./icons/restaurants.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E4%B8%89%E8%A7%92%E5%9C%B0%E5%B8%AF/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/three.jpg" alt="三角地帯"/></a></div>
      <div style='position: reletive;'><a href="https://tokyocheapo.com/restaurant/sankaku-chitai/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#三角地帯</a><p style='margin-bottom: 3px'>주소 : 2 Chome-13-9 Sangenjaya, Setagaya City, Tokyo 154-0024 일본</p><p>일명 '삼색지대'라고 불리는 이곳. 싸고 매력적인 추천 음식점들이 정말 많습니다. 술을 좋아하는 사람은 한 번 들어가면 좀처럼 나올 수 없는 그런 산겐 자야에 있는 술집거리의 매력에 빠져보세요!</p></div></div>`
      // 삼색지대
    },
    {
      location: {
        lat: 35.6390429,
        lng: 139.7046679
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E4%B8%AD%E7%9B%AE%E9%BB%92%E6%95%A3%E6%AD%A9/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/meguro.jpg" alt="中目黒"/></a></div>
      <div style='position: reletive;'><a href="https://rtrp.jp/locations/279/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#中目黒</a><p style='margin-bottom: 3px'>주소 : Nakameguro, Meguro City, Tokyo 153-0061 일본</p><p>세련된 주거 지역인 나카메구로에는 메구로강 옆으로 조용한 산책로가 조성되어 있으며 봄이면 벚꽃이 터널을 이루는 벚꽃 산책로로 유명합니다. 좁은 골목길에는 트렌디한 커피 로스팅 전문점, 수제 맥주 시음장, 일본식 가스트로펍이 밀집해 있습니다.</p></div></div>`
      // 나카메구로
    },
    {
      location: {
        lat: 35.64865,
        lng: 139.7016875
      },
      iconImage: "./icons/photography.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/bonjourrecords/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/bonjour.jpg" alt="bonjourrecords"/></a></div>
      <div style='position: reletive;'><a href="https://www.bonjour.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#bonjour records</a><p style='margin-bottom: 3px'>주소 : 24-1 Sarugakucho, Shibuya City, Tokyo 150-0033 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-5458-6020</p></div></div>`
      // 봉쥬르
    },
    {
      location: {
        lat: 35.7052971,
        lng: 139.6496634
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E9%AB%98%E5%86%86%E5%AF%BA/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/koenji.jpg" alt="高円寺"/></a></div>
      <div style='position: reletive;'><a href="https://rtrp.jp/locations/303/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#高円寺</a><p style='margin-bottom: 3px'>주소 : 4 Chome-48-2 Koenjiminami, Suginami City, Tokyo 166-0003일본</p><p>고엔지는 신주쿠 서쪽 스기 나미 구에있는 도쿄의 한 구역입니다. 매년 8월 하순 (마지막 토요일 · 일요일 )에 고엔 앞 거리 등을 무대로 '도쿄 고 엔지 아와 오도리'가 개최됩니다.</p></div></div>`
      // 고엔지
    },
    {
      location: {
        lat: 35.7000961,
        lng: 139.5756019
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E4%BA%95%E3%81%AE%E9%A0%AD%E5%85%AC%E5%9C%92/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/ino.jpg" alt="井の頭公園"/></a></div>
      <div style='position: reletive;'><a href="https://www.gotokyo.org/kr/spot/624/index.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#井の頭公園</a><p style='margin-bottom: 3px'>주소 : 1 Chome-18-31 Gotenyama, Musashino, Tokyo 180-0005 일본</p><p>녹지가 풍부한 이노카시라 공원에는 다양한 레크리에이션 시설, 신사, 연못 등이 있어 지역주민들로부터 사랑을 받고 있습니다. 공원 중앙에 있는 이노카시라 연못에서는 노를 젓는 보트도 대여할 수 있습니다. 연분홍 꽃이 활짝 피는 봄에 꼭 방문하여 꽃놀이를 즐겨 보시기 바랍니다!</p></div></div>`
      // 이노카시라 공원
    },
    {
      location: {
        lat: 35.6103563,
        lng: 139.6667198
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E8%87%AA%E7%94%B1%E3%81%8C%E4%B8%98/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/jiu.jpg" alt="自由が丘"/></a></div>
      <div style='position: reletive;'><a href="https://www.jiyugaoka-abc.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#自由が丘</a><p style='margin-bottom: 3px'>주소 : 152-0035 도쿄도 메구로구</p><p>자유의 언덕이라는 지명의 뜻으로, 서양식 고급 주택가가 널려있고 sns에서 핫한 유명한 셀렉트 숍과 카페, 음식점이 가득한 도시입니다!</p></div></div>`
      // 지유가오카
    },
    {
      location: {
        lat: 35.6929974,
        lng: 139.6995905
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%80%9D%E3%81%84%E5%87%BA%E6%A8%AA%E4%B8%81/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/omoi.jpg" alt="思い出横丁"/></a></div>
      <div style='position: reletive;'><a href="https://shinjuku-omoide.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#思い出横丁</a><p style='margin-bottom: 3px'>주소 : 1 Chome-2 Nishishinjuku, Shinjuku City, Tokyo 160-0023 일본</p><p>신주쿠역 서쪽 출구에 바로있으며 일명 '추억 골목' 또는 '닭 꼬치 골목'이라고도 불립니다. 골목 안으로 들어오면 맛좋고 분위기 좋은 여러 닭 꼬치가게와 작은 음식점들이 늘어서있습니다. 밤에 꼭 한번 가볼만한 거리!</p></div></div>`
      // 오모이데요코초
    },
    {
      location: {
        lat: 35.7034492,
        lng: 139.579267
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E5%90%89%E7%A5%A5%E5%AF%BA/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/kichi.jpeg" alt="吉祥寺"/></a></div>
      <div style='position: reletive;'><a href="https://www.city.bunkyo.lg.jp/bunka/kanko/spot/jisha/kichijoji.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#吉祥寺</a><p style='margin-bottom: 3px'>주소 : 1Kichijoji Minamicho, Musashino, Tokyo, 일본</p><p>키치죠지는 도쿄도 무사시노시에 있는 키치죠지 역을 중심으로 한 거리입니다. 도쿄도 23구의 외곽지역에 있는 번화가 가운데 하나이며, 도큐 백화점, 이세탄, 파르코, 마루이, 세이유 등의 대형 쇼핑센터가 늘어서 있고, 가까이에는 이노카시라 공원이 있습니다!</p></div></div>`
      // 키치죠지
    },
    {
      location: {
        lat: 35.6642664,
        lng: 139.7059808
      },
      iconImage: "./icons/photography.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/utrecht_nowidea/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/ut.jpg" alt="UTRECHT"/></a></div>
      <div style='position: reletive;'><a href="https://utrecht.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#UTRECHT</a><p style='margin-bottom: 3px'>주소 : 일본 〒150-0001 Tokyo, Shibuya City, Jingumae, 5 Chome−36−6 ケーリーマンション</p><p style='margin-bottom: 3px'>운영 시간 : 오후 12시 ~ 오후 7시</p><p>전화번호 : +81 3-6427-4041</p></div></div>`
      // 위트레흐트
    },
    {
      location: {
        lat: 35.7276754,
        lng: 139.7667033
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E8%B0%B7%E4%B8%AD%E9%8A%80%E5%BA%A7/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/neko.jpg" alt="谷中銀座(고양이 마을)"/></a></div>
      <div style='position: reletive;'><a href="https://www.gotokyo.org/kr/destinations/northern-tokyo/yanaka-and-nezu/index.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#谷中銀座(고양이 마을)</a><p style='margin-bottom: 3px'>주소 : 일본 〒116-0013 Tokyo, Arakawa City, 14, Unnamed Road</p><p>서민거리의 좁은 골목길, 오래된 목조가옥, 선술집, 개성적인 커피숍, 전통 일본과자와 안주를 판매하는 복고풍 가게와 더불어 ‘야나카 묘지공원’과 ‘네즈 신사’ 등의 사적이 있습니다. 천천히 흐르는 시간 속에서 운치가 있는 고색창연한 도쿄를 즐길 수 있습니다.</p></div></div>`
      // 야나카긴자 고양이마을
    },
    {
      location: {
        lat: 35.7156134,
        lng: 139.5125976
      },
      iconImage: "./icons/photography.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%B1%9F%E6%88%B8%E6%9D%B1%E4%BA%AC%E3%81%9F%E3%81%A6%E3%82%82%E3%81%AE%E5%9C%92/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/edo.jpg" alt="江戸東京たてもの園"/></a></div>
      <div style='position: reletive;'><a href="https://www.tatemonoen.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#江戸東京たてもの園</a><p style='margin-bottom: 3px'>주소 : 3 Chome-7-1 Sakuracho, Koganei, Tokyo 184-0005 일본</p><p>임시 휴업 중</p><p>전화번호 : +81 42-388-3300</p></div></div>`
      // 에도도쿄건축정원
    },
    {
      location: {
        lat: 35.6798023,
        lng: 139.7648799
      },
      iconImage: "./icons/photography.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/kittemarunouchi/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/kitte.jpeg" alt="KITTE marunouchi"/></a></div>
      <div style='position: reletive;'><a href="https://marunouchi.jp-kitte.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#KITTE marunouchi</a><p style='margin-bottom: 3px'>주소 : 2 Chome-7-2 Marunouchi, Chiyoda City, Tokyo 100-0005 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3216-2811</p></div></div>`
      // 킷테
    },
    {
      location: {
        lat: 35.6263421,
        lng: 139.7832333
      },
      iconImage: "./icons/photography.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/teamlabborderless/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/team.jpg" alt="teamLab Borderless"/></a></div>
      <div style='position: reletive;'><a href="https://borderless.teamlab.art/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#teamLab Borderless</a><p style='margin-bottom: 3px'>주소 : 일본 〒135-0064 Tokyo, Koto City, Aomi, 1 Chome−3−8 お台場パレットタウン</p><p>임시 휴업 중</p><p>전화번호 : +81 3-3638-4292</p></div></div>`
      // 팀랩
    },
    {
      location: {
        lat: 35.6696349,
        lng: 139.7059522
      },
      iconImage: "./icons/photography.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Nunito; font-weight:400'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/galaxyharajuku/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/galaxy.jpg" alt="Galaxy Harajuku"/></a></div>
      <div style='position: reletive;'><a href="https://www.galaxymobile.jp/galaxy-harajuku/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Galaxy Harajuku</a><p style='margin-bottom: 3px'>주소 : 일본 〒150-0001 Tokyo, Shibuya City, Jingumae, 1 Chome−8−9</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 ~ 오후 7시</p><p>전화번호 : +81 3-5843-0185</p></div></div>`
      // 갤럭시 하라주쿠
    },
    {
      location: {
        lat: 35.6505196,
        lng: 139.7043752
      },
      iconImage: "./icons/default.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E4%BB%A3%E5%AE%98%E5%B1%B1/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/dai.jpg" alt="代官山"/></a></div>
      <div style='position: reletive;'><a href="https://www.gotokyo.org/jp/destinations/western-tokyo/daikanyama/index.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#代官山</a><p style='margin-bottom: 3px'>주소 : 〒150-0034 도쿄도 시부야구</p><p>다이칸야마는 브루클린 느낌이 나는 스타일리시한 지역으로 수제 맥줏집, 커피 로스터, 고급 델리가 위치해 있습니다. 이곳에서는 디자이너 패션과 고급 액세서리 쇼핑을 즐길 수 있으며 갤러리이자 칵테일 바로도 운영되는 서점을 만나볼 수 있습니다.</p></div></div>`
      // 다이칸야마
    },
    {
      location: {
        lat: 35.7068222,
        lng: 139.7533496
      },
      iconImage: "./icons/water.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%82%B9%E3%83%91%E3%83%A9%E3%82%AF%E3%83%BC%E3%82%A2/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/laqua.jpg" alt="Spa LaQua"/></a></div>
      <div style='position: reletive;'><a href="https://www.laqua.jp/spa/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#Spa LaQua</a><p style='margin-bottom: 3px'>주소 : 일본 〒112-0003 Tokyo, Bunkyo City, Kasuga, 1 Chome−1−1 ラクーアビル</p><p style='margin-bottom: 3px'>운영 시간 : 오전 10시 ~ 오후 9시</p><p>전화번호 : +81 3-5800-9999</p></div></div>`
      // 스파라쿠아
    },
    {
      location: {
        lat: 35.6158389,
        lng: 139.7778496
      },
      iconImage: "./icons/water.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E5%A4%A7%E6%B1%9F%E6%88%B8%E6%B8%A9%E6%B3%89%E7%89%A9%E8%AA%9E/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="https://cp.jorudan.co.jp/delivery/cpimage/TRV00009/201010051823029.jpg" alt="大江戸温泉物語"/></a></div>
      <div style='position: reletive;'><a href="https://daiba.ooedoonsen.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#大江戸温泉物語</a><p style='margin-bottom: 3px'>주소 : 2 Chome-6-3 Aomi, Koto City, Tokyo 135-0064 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시 30분 ~ 오후 8시</p><p>전화번호 : +81 3-5500-1126</p></div></div>`
      // 오에도
    },
    {
      location: {
        lat: 35.6945342,
        lng: 139.705114
      },
      iconImage: "./icons/water.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%86%E3%83%AB%E3%83%9E%E3%83%BC%E6%B9%AF/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/deruma.jpg" alt="テルマー湯"/></a></div>
      <div style='position: reletive;'><a href="https://thermae-yu.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#テルマー湯</a><p style='margin-bottom: 3px'>주소 : 1 Chome-1-2 Kabukicho, Shinjuku City, Tokyo 160-0021 일본</p><p>임시 휴업중</p><p>전화번호 : +81 3-5285-1726</p></div></div>`
      // 테루마 온천
    },
    {
      location: {
        lat: 35.7708822,
        lng: 139.6926084
      },
      iconImage: "./icons/water.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%81%95%E3%82%84%E3%81%AE%E6%B9%AF%E5%87%A6/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/saya.jpg" alt="さやの湯処"/></a></div>
      <div style='position: reletive;'><a href="https://www.sayanoyudokoro.co.jp/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#さやの湯処</a><p style='margin-bottom: 3px'>주소 : 3 Chome-41-1 Maenocho, Itabashi City, Tokyo 174-0063 일본</p><p>임시 휴업중</p><p>전화번호 : +81 3-5916-3826</p></div></div>`
      // 사야노유도코로
    },
    {
      location: {
        lat: 35.7048241,
        lng: 139.6183801
      },
      iconImage: "./icons/water.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%81%AA%E3%81%94%E3%81%BF%E3%81%AE%E6%B9%AF/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nagomi.jpg" alt="なごみの湯"/></a></div>
      <div style='position: reletive;'><a href="https://www.nagomino-yu.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#なごみの湯</a><p style='margin-bottom: 3px'>주소 : 1 Chome-10-10 Kamiogi, Suginami City, Tokyo 167-0043 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오전 11시30분 ~ 오후 10시</p><p>전화번호 : +81 3-3398-4126</p></div></div>`
      // 나고미
    },
    {
      location: {
        lat: 35.6855071,
        lng: 139.6907043
      },
      iconImage: "./icons/bar.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF%E3%83%90%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/newyork.jpg" alt="ニューヨーク バー"/></a></div>
      <div style='position: reletive;'><a href="https://restaurants.tokyo.park.hyatt.co.jp/nyb.html" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#ニューヨーク バー</a><p style='margin-bottom: 3px'>주소 : パーク ハイアット 東京 52階, 3-7-1-2, Nishishinjuku, Tokyo 163-1055 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오후 5시 ~ 오후 8시</p><p>전화번호 : +81 3-5323-3458</p></div></div>`
      // 뉴욕바
    },
    {
      location: {
        lat: 35.6579837,
        lng: 139.7050013
      },
      iconImage: "./icons/bar.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E7%9F%B3%E3%81%AE%E8%8F%AF/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/isino.jpg" alt="石の華"/></a></div>
      <div style='position: reletive;'><a href="https://ishinohana.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#石の華</a><p style='margin-bottom: 3px'>주소 : 일본 〒150-0002 Tokyo, Shibuya City, Shibuya, 3 Chome−6−2 第2矢木ビル</p><p style='margin-bottom: 3px'>운영 시간 : 오후 5시 ~ 오후 8시</p><p>전화번호 : +81 3-5485-8405</p></div></div>`
      // 이시노하나
    },
    {
      location: {
        lat: 35.6713997,
        lng: 139.7611564
      },
      iconImage: "./icons/bar.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/bar%E4%BF%9D%E5%BF%97/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/hoshi.png" alt="保志"/></a></div>
      <div style='position: reletive;'><a href="https://www.instagram.com/barhoshi/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#bar 保志</a><p style='margin-bottom: 3px'>주소 : 6 Chome-3-7 Ginza, Chuo City, Tokyo 104-0061 일본</p><p>임시 휴업중</p><p>전화번호 : +81 3-3573-8887</p></div></div>`
      // 호시
    },
    {
      location: {
        lat: 35.6642398,
        lng: 139.6992572
      },
      iconImage: "./icons/bar.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:80vh; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/thesgclub/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/sg.jpg" alt="thesgclub"/></a></div>
      <div style='position: reletive;'><a href="https://sg-management.jp/?fbclid=IwAR30J7plQ1wUCseA6PUMhXz16DaVS49yt2GNt4GPv6C18kw_KHTRnyTccUo" target="_blank" style='font-size: 1.8em; text-decoration: none;'>#The SG Club</a><p style='margin-bottom: 3px'>주소 : 1 Chome-7-8 Jinnan, Shibuya City, Tokyo 150-0041 일본</p><p style='margin-bottom: 3px'>운영 시간 : 오후 5시 ~ 오후 8시</p><p>전화번호 : +81 3-6427-0204</p></div></div>`
      // sg club
    },
    {
      location: {
        lat: 35.6689597,
        lng: 139.7619587
      },
      iconImage: "./icons/bar.png",
      content: 
      `
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500display=swap" rel="stylesheet">
      <style type="text/css">
      a:link {text-decoration: none; color: black;}
      a:visited {text-decoration: none; color: black;}
      a:active {text-decoration: none; color: rgb(25, 197, 140);}
      a:hover {text-decoration: underline; color: rgb(25, 197, 140);}
      </style>

      <div style='display: flex; align-items: center; width:800px; height:27vh; padding-left:1.5vh; font-family:Gothic A1; font-weight:500;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/ginzamusicbar/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/ginzamusic.jpeg" alt="ginzamusic"/></a></div>
      <div style='position: reletive;'><a href="http://ginzamusicbar.com/" target="_blank" style='margin: 0; font-size: 1.8em; text-decoration: none;'>#GINZA MUSIC BAR</a><p style='margin-bottom: 3px'>주소 : 일본 〒104-0061 Tokyo, Chuo City, Ginza, 7 Chome−8−13 ブラウン プレイス 4F</p><p style='margin-bottom: 3px'>운영 시간 : 오후 12시 ~ 오후 8시</p><p>전화번호 : +81 3-3572-3666</p></div></div>`
      // ginza music
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
  // const markerCluster = new MarkerClusterer(map, gmarkers, {
  //   imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  // });
}

function setBounce(marker) {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  setTimeout((function() {
    marker.setAnimation(null);
  }).bind(marker), 1400);
}


google.maps.event.addDomListener(window, 'load', initMap);

