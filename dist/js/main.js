$(document).ready(function(){

    $(".nav-bar").load("./web/nav.html")

    $("#pricing").click(function(){
      $(".content").load("./web/pricing.html");
    });
  });

