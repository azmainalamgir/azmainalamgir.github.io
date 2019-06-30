// $( document ).ready(function() {
//    $('body').show();
// });

window.onbeforeunload = animatedExit;
  function animatedExit () {
    var element = document.getElementById("page");
    element.classList.remove("fadeInUpBig");
    element.classList.add("fadeOutDownBig");
  };
