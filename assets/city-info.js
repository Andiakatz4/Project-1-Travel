loadTitle();

$("#translateTable").hide();
function loadTitle() {
    $(".secondTitle").append(localStorage.name);

}
function myFunction() {
    $("#translateTable").hide();
    $("#map").show();
    function initMap() {
        // The location of Uluru
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
        var geocoder = new google.maps.Geocoder();

        geocodeAddress(geocoder, map)

        /*   document.getElementById('submit').addEventListener('click', function () {
              geocodeAddress(geocoder, map);
          }); */
    }

    function geocodeAddress(geocoder, resultsMap) {
        var address = localStorage.name;
        var infowindow;

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                if (resultsMap.getZoom() < 14) resultsMap.setZoom(14);

                infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(resultsMap);
                service.nearbySearch({
                    location: results[0].geometry.location,
                    radius: 20000,
                    type: [$(".secondTitle").val()]
                }, callback);


                function callback(results, status) {
                    console.log(results);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                    }
                }

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: place.geometry.location
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        var html = "<b>" + place.name + "</b> <br/>";
                        var priceLev = "";
                        if (place.price_level == 1) {
                            priceLev = "$"
                        }
                        else if (place.price_level == 2) {
                            priceLev = "$$"
                        }
                        else if (place.price_level == 3) {
                            priceLev = "$$$"
                        }
                        else if (place.price_level == 4) {
                            priceLev = "$$$$"
                        }

                        html = html + priceLev

                        infowindow.setContent(html);

                        infowindow.open(map, this);
                    });
                }



                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location

                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    initMap();
}
$("#floating-panel").hide();
$("#first-button").on("click", function () {
    $(this).css("background-color", "#f1f3f4");
    $("#second-button").css("background-color", "white");
    $("#third-button").css("background-color", "white");
    $("#fourth-button").css("background-color", "white");
    $("#translateTable").hide();
    $("#map").show();
    function initMap() {
        // The location of Uluru
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
        var geocoder = new google.maps.Geocoder();

        geocodeAddress(geocoder, map)

        /*   document.getElementById('submit').addEventListener('click', function () {
              geocodeAddress(geocoder, map);
          }); */
    }

    function geocodeAddress(geocoder, resultsMap) {
        var address = localStorage.name;
        var infowindow;

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                if (resultsMap.getZoom() < 14) resultsMap.setZoom(14);

                infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(resultsMap);
                service.nearbySearch({
                    location: results[0].geometry.location,
                    radius: 20000,
                    type: [$("#firstPlaceType").val()]
                }, callback);


                function callback(results, status) {
                    console.log(results);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                    }
                }

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: place.geometry.location
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        var html = "<b>" + place.name + "</b> <br/>";
                        var priceLev = "";
                        if (place.price_level == 1) {
                            priceLev = "$"
                        }
                        else if (place.price_level == 2) {
                            priceLev = "$$"
                        }
                        else if (place.price_level == 3) {
                            priceLev = "$$$"
                        }
                        else if (place.price_level == 4) {
                            priceLev = "$$$$"
                        }

                        html = html + priceLev

                        infowindow.setContent(html);

                        infowindow.open(map, this);
                    });
                }



                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location

                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    initMap();
});
$("#second-button").on("click", function () {
    $(this).css("background-color", "#f1f3f4");
    $("#first-button").css("background-color", "white");
    $("#third-button").css("background-color", "white");
    $("#fourth-button").css("background-color", "white");

    $("#firstPlaceType").hide();
    $("#translateTable").hide();
    $("#map").show();
    function initMap() {
        // The location of Uluru
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
        var geocoder = new google.maps.Geocoder();

        geocodeAddress(geocoder, map)

        /*   document.getElementById('submit').addEventListener('click', function () {
              geocodeAddress(geocoder, map);
          }); */
    }

    function geocodeAddress(geocoder, resultsMap) {
        var address = localStorage.name;
        var infowindow;

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                if (resultsMap.getZoom() < 14) resultsMap.setZoom(14);

                infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(resultsMap);
                service.nearbySearch({
                    location: results[0].geometry.location,
                    radius: 20000,
                    type: [$("#secondPlaceType").val()]
                }, callback);


                function callback(results, status) {
                    console.log(results);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                    }
                }

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: place.geometry.location
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        var html = "<b>" + place.name + "</b> <br/>";
                        var priceLev = "";
                        if (place.price_level == 1) {
                            priceLev = "$"
                        }
                        else if (place.price_level == 2) {
                            priceLev = "$$"
                        }
                        else if (place.price_level == 3) {
                            priceLev = "$$$"
                        }
                        else if (place.price_level == 4) {
                            priceLev = "$$$$"
                        }

                        html = html + priceLev

                        infowindow.setContent(html);

                        infowindow.open(map, this);
                    });
                }



                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location

                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    initMap();
});

$("#third-button").on("click", function () {
    $(this).css("background-color", "#f1f3f4");
    $("#first-button").css("background-color", "white");
    $("#second-button").css("background-color", "white");
    $("#fourth-button").css("background-color", "white");
    $("#firstPlaceType").hide();
    $("#secondPlaceType").hide();
    $("#translateTable").hide();
    $("#map").show();
    function initMap() {
        // The location of Uluru
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
        var geocoder = new google.maps.Geocoder();

        geocodeAddress(geocoder, map)

        /*   document.getElementById('submit').addEventListener('click', function () {
              geocodeAddress(geocoder, map);
          }); */
    }

    function geocodeAddress(geocoder, resultsMap) {
        var address = localStorage.name;
        var infowindow;

        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status === 'OK') {
                resultsMap.setCenter(results[0].geometry.location);
                console.log(results[0].geometry.location);
                if (resultsMap.getZoom() < 14) resultsMap.setZoom(14);

                infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(resultsMap);
                service.nearbySearch({
                    location: results[0].geometry.location,
                    radius: 20000,
                    type: [$("#thirdPlaceType").val()]
                }, callback);


                function callback(results, status) {
                    console.log(results);
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0; i < results.length; i++) {
                            createMarker(results[i]);
                        }
                    }
                }

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: place.geometry.location
                    });

                    google.maps.event.addListener(marker, 'click', function () {
                        var html = "<b>" + place.name + "</b> <br/>";
                        var priceLev = "";
                        if (place.price_level == 1) {
                            priceLev = "$"
                        }
                        else if (place.price_level == 2) {
                            priceLev = "$$"
                        }
                        else if (place.price_level == 3) {
                            priceLev = "$$$"
                        }
                        else if (place.price_level == 4) {
                            priceLev = "$$$$"
                        }

                        html = html + priceLev

                        infowindow.setContent(html);

                        infowindow.open(map, this);
                    });
                }

                var marker = new google.maps.Marker({
                    map: resultsMap,
                    position: results[0].geometry.location

                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }
    initMap();
});

$("#fourth-button").on("click",function(){
    $(this).css("background-color", "#f1f3f4");
    $("#first-button").css("background-color", "white");
    $("#second-button").css("background-color", "white");
    $("#third-button").css("background-color", "white");
$("#map").hide();
$("#translateTable").show();

});


// var js_file = document.createElement('script');
//     js_file.type = 'text/javascript';
//     js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD97RWhv1LtFuUnfSvUBvRwqoIYYmdzx7o&libraries=places&callback=initMap'
//     document.getElementsByTagName('head')[0].appendChild(js_file);












