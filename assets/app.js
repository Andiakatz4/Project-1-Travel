


//this is the javascript for the html to the map 

// $(document).ready(function(){
//     $("#search-box").click(function(){
//        var userCity = $("#search-box").val().trim();
// console.log(userCity) 
//         ;
//     });
// });


$("#linkadd").click(function (event) {

    var search = $("#search-box").val().trim();
    console.log(search);
url = "results.html?query=" + search;
        $(location).attr("href", url);
    
    

    


});


var map;
    var service;
    var infowindow;


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }
}


function initialize() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: url,
        zoom: 15
    });

    var request = {
        location: search,
        radius: '500',
        query: 'restaurant'
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

