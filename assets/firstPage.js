/* var config = {
    apiKey: "AIzaSyD3-RMPYfcuA_JpdX1kw0wGIFtcD_nHnFg",
    authDomain: "coding-bootcamp-firebase.firebaseapp.com",
    databaseURL: "https://coding-bootcamp-firebase.firebaseio.com",
    projectId: "coding-bootcamp-firebase",
    storageBucket: "coding-bootcamp-firebase.appspot.com",
    messagingSenderId: "575573294033"
  };

  var database = fire.datebase(); */

  $(".label").on("click", function(e) {
    console.log("hi");
    e.preventDefault();
    if($("#search-box").val() > "")
    window.location.href="city-info.html";
    var name = $("#search-box").val().trim();
    localStorage.name = name;

  });
  function loadTitle(){
    $(".secondTitle").append(localStorage.name);
  }



  //this is the javascript for the html to the map 

// $(document).ready(function(){
//     $("#search-box").click(function(){
//        var userCity = $("#search-box").val().trim();
// console.log(userCity) 
//         ;
//     });
// });


// $("#linkadd").click(function (event) {

//   var search = $("#search-box").val().trim();
//   console.log(search);
// url = "results.html?query=" + search;
//       $(location).attr("href", url);
  
  

  


// });


// var map;
//   var service;
//   var infowindow;


// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//           var place = results[i];
//           createMarker(results[i]);
//       }
//   }
// }


// function initialize() {

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: url,
//       zoom: 15
//   });

//   var request = {
//       location: search,
//       radius: '500',
//       query: 'restaurant'
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }



      function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.674, lng: -73.945},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }

// getting the value of name from localStorage 

// figuring out the lat/long from that name given 

// setting the map to center on that lat/long