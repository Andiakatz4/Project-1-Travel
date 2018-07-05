var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

$(document).ready(function () {
    $(".searchform").bind("keypress", function (e) {
        if (e.keyCode == 13) {
            return false;
        }
    });

    $(".label").on("click", function (e) {
        console.log("hi");
        e.preventDefault();
        if ($("#search-box").val() > "")
            window.location.href = "city-info.html";
        var name = $("#search-box").val().trim();
        localStorage.name = name;

    });
});

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('search-box')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    //autocomplete.addListener('place_changed', fillInAddress);
  }

/*   function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

  } */
