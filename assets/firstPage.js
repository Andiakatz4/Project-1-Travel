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
