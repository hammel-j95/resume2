
  var main = function() {
    $(".menu").hover(
      function(){
      $(".dropdown").slideDown(1000);
    },
    function(){
      $(".dropdown").slideUp(1000);
    });
  };
$(document).ready(main);
