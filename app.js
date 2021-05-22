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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
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
      iconImage: "./icons/cafe.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/camelbacktokyo/?hl=ja" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/camel.jpg" alt="CAMELBACK"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://camelback.tokyo/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#CAMELBACK Sandwich</a><p>주소 : 42-2 Kamiyamacho, Shibuya City, Tokyo 150-0047 일본</p><p>운영 시간 : 오전 9시 ~ 오후 6시</p><p>전화번호 : +81 3-6407-0069</p></div></div>`
      // 카멜백 camelback
    },
    {
      location: {
        lat: 35.68698,
        lng: 139.73845,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/natadecristiano/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nata.jpg" alt="ナタ・デ・クリスチアノ"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="http://www.cristianos.jp/nata/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#ナタ・デ・クリスチアノ</a><p>주소 : 일본 〒151-0063 Tokyo, Shibuya City, 渋谷区Tomigaya, 1 Chome−14−16 スタンフォードコート</p><p>운영 시간 : 오전 10시 ~ 오후 7시 30분</p><p>전화번호 : +81 3-6804-9723</p></div></div>`
      // 나타 데 크리스티아노
    },
    {
      location: {
        lat: 35.6691043,
        lng: 139.6900557,
      },
      iconImage: "./icons/cafe.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/afterhourscafe/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/after.jpg" alt="Afterhours"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://afterhours.jp/shop/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#Afterhours</a><p>주소 : 1 Chome-7-9 Tomigaya, Shibuya City, Tokyo 151-0063 일본</p><p>운영 시간 : 오후 12시 ~ 오후 5시</p><p>임시휴업 중</p></div></div>`
      // 애프터하우스
    },
    {
      location: {
        lat: 35.6585805,
        lng: 139.7453389,
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/tower.jpg" alt="東京タワー"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.tokyotower.co.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#東京タワー</a><p>주소 : 4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011 일본</p><p>임시 휴업중</p><p>전화번호 : +81 3-3433-5111</p></div></div>`
      // 도쿄타워
    },
    {
      location: {
        lat: 35.6722448,
        lng: 139.7624187,
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%9D%B1%E4%BA%AC%E3%82%BF%E3%83%AF%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/plaza.jpg" alt="東急プラザ銀座"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://ginza.tokyu-plaza.com/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#東急プラザ 銀座</a><p>주소 : 5 Chome-2-1 Ginza, Chuo City, Tokyo 104-0061 일본</p><p>운영 시간 : 오전 11시 ~ 오후 8시</p><p>전화번호 : +81 3-3571-0109</p></div></div>`
      // 도쿄프라자
    },
    {
      location: {
        lat: 35.7100627,
        lng: 139.8107004,
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%9D%B1%E4%BA%AC%E3%82%B9%E3%82%AB%E3%82%A4%E3%83%84%E3%83%AA%E3%83%BC/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/sky.jpg" alt="東京スカイツリー"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.tokyo-skytree.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#東京スカイツリー</a><p>주소 : 1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045 일본</p><p>임시 휴업중</p><p>전화번호 : +81 570-550-634</p></div></div>`
      // 스카이트리
    },
    {
      location: {
        lat: 35.7153358,
        lng: 139.7739818,
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E4%B8%8A%E9%87%8E%E5%85%AC%E5%9C%92/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/ueno.jpg" alt="上野公園"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/kouenannai.html" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#上野公園</a><p>주소 : 일본 〒110-0007 Tokyo, Taito City, Uenokoen, 8, ５−２０・池之端三丁目</p><p>운영 시간 : 오전 5시 ~ 오후 11시</p><p>전화번호 : +81 3-3828-5644</p></div></div>`
      // 우에노 공원
    },
    {
      location: {
        lat: 35.7099344,
        lng: 139.8091915
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E3%81%99%E3%81%BF%E3%81%A0%E6%B0%B4%E6%97%8F%E9%A4%A8/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/suimida.jpg" alt="すみだ水族館"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.sumida-aquarium.com/index.html" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#すみだ水族館</a><p>주소 : 일본 〒131-0045 Tokyo, Sumida City, Oshiage, 1 Chome−1−2 東京スカイツリータウン・ソラマチ 5-6F</p><p>임시 휴업중</p><p>전화번호 : +81 3-5619-1821</p></div></div>`
      // 스미다 수족관
    },
    {
      location: {
        lat: 35.6958427,
        lng: 139.7030554
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%AD%8C%E8%88%9E%E4%BC%8E%E7%94%BA%E4%B8%80%E7%95%AA%E8%A1%97/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/kabuki.jpg" alt="歌舞伎町"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#歌舞伎町(Kabukicho)</a><p>주소 : 〒160-0021 도쿄도 신주쿠구</p><p>가부키쵸는 밤문화를 즐기기 위한 스폿이 수많이 존재하며, 거리가 밤부터 활기를 띄어서 사람들이 「잠들지 않는 거리」라고 부르고 있습니다.</p></div></div>`
      // 가부키초
    },
    {
      location: {
        lat: 35.7187449,
        lng: 139.7960771
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%B5%85%E8%8D%89/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/asakusa.jpg" alt="浅草"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.gotokyo.org/kr/destinations/eastern-tokyo/asakusa/index.html" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#浅草(Asakusa)</a><p>주소 : 〒111-0032 도쿄도 다이토구</p><p>아사쿠사는 옛 도쿄의 분위기를 간직하고 있는 지역으로 유서 깊은 센소지 인근의 나카미세 거리에는 전통적인 공예품점과 길거리 음식 노점이 있습니다. 아사쿠사를 방문하여, 일본의 전통, 예술, 공예품을 접해보세요!</p></div></div>`
      // 아사쿠사
    },
    {
      location: {
        lat: 35.6594975,
        lng: 139.6990039
      },
      iconImage: "./icons/photography.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/locations/2043173272649826/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/crossing2.jpg" alt="渋谷スクランブル交差点"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://en.japantravel.com/tokyo/shibuya-crossing/3016" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#渋谷スクランブル交差点</a><p>주소 : 1 Chome-2-1 Dogenzaka, Shibuya City, Tokyo 150-0043 일본</p><p>도쿄의 상징적인 랜드마크 시부야 스크램블 교차로에서 한번에 1,000명 이상이 도로를 건너는 광경을 구경하세요. 도쿄 인구 최다 밀집지역을 카메라에 담을 수 있는 시부야의 대표 포토 스팟</p></div></div>`
      // 시부야 교차로 
    },
    {
      location: {
        lat: 35.6763976,
        lng: 139.6993259
      },
      iconImage: "./icons/museums.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/meiji2.jpg" alt="明治神宮"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.meijijingu.or.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#明治神宮</a><p>주소 : 1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557 일본</p><p>운영 시간 : 오전 5시 ~ 오후 6시 10분</p><p>전화번호 : +81 3-3379-5511</p></div></div>`
      // 메이지 신사
    },
    {
      location: {
        lat: 35.7200104,
        lng: 139.7607541
      },
      iconImage: "./icons/museums.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%A0%B9%E6%B4%A5%E7%A5%9E%E7%A4%BE/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/nedu2.jpg" alt="根津神社"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="http://www.nedujinja.or.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#根津神社</a><p>주소 : 1 Chome-28-9 Nezu, Bunkyo City, Tokyo 113-0031 일본</p><p>운영 시간 : 오전 6시 ~ 오후 4시 30분</p><p>전화번호 : +81 3-3822-0753</p></div></div>`
      // 네즈 신사
    },
    {
      location: {
        lat: 35.6746667,
        lng: 139.7399445
      },
      iconImage: "./icons/museums.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%97%A5%E6%9E%9D%E7%A5%9E%E7%A4%BE/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/hie.png" alt="日枝神社"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.hiejinja.net/index.html" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#日枝神社</a><p>주소 : 2 Chome-10-5 Nagatachō, Chiyoda City, Tokyo 100-0014 일본</p><p>운영 시간 : 오전 6시 ~ 오후 5시</p><p>전화번호 : +81 3-3581-2471</p></div></div>`
      // 히에 신사
    },
    {
      location: {
        lat: 35.6488126,
        lng: 139.647585
      },
      iconImage: "./icons/museums.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/gotokujitemple/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/gotokuji.jpg" alt="豪徳寺"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://gotokuji.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#豪徳寺</a><p>주소 : 2 Chome-24-7 Gotokuji, Setagaya City, Tokyo 154-0021 일본</p><p>운영 시간 : 오전 6시 ~ 오후 5시(임시 휴업중)</p><p>전화번호 : +81 3-3426-1437</p></div></div>`
      // 고토쿠지
    },
    {
      location: {
        lat: 35.7147651,
        lng: 139.7967613
      },
      iconImage: "./icons/museums.png",
      content: 
      `<div style='display: flex; align-items: center; width:500px; height:200px; padding-left:10px;'><div style="margin-right: 5vh; ">
      <a href="https://www.instagram.com/explore/tags/%E6%B5%85%E8%8D%89%E5%AF%BA/" target="_blank">
      <img style="display: inline-block; width:20vh; height:20vh; border-radius:50%;" src="./images/sensoji.jpg" alt="浅草寺"/></a></div>
      <div style='position: reletive; bottom: 10px'><a href="https://www.senso-ji.jp/" target="_blank" style='margin: 0; font-size: 25px; text-decoration: none;'>#浅草寺</a><p>주소 : 2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032 일본</p><p>운영 시간 : 오전 6시 ~ 오후 5시</p><p>전화번호 : +81 3-3842-0181</p></div></div>`
      // 센소지
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

