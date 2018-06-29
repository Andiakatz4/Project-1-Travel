/* var config = {
    apiKey: "AIzaSyD3-RMPYfcuA_JpdX1kw0wGIFtcD_nHnFg",
    authDomain: "coding-bootcamp-firebase.firebaseapp.com",
    databaseURL: "https://coding-bootcamp-firebase.firebaseio.com",
    projectId: "coding-bootcamp-firebase",
    storageBucket: "coding-bootcamp-firebase.appspot.com",
    messagingSenderId: "575573294033"
  };

  var database = fire.datebase(); */
  var myIndex = 0;
  carousel();
  
  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 5000); // Change image every 2 seconds
  }

  
  