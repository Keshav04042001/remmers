$(document).ready(function(){

    $(".nav-bar").load("./web/nav.html");
    $(".footer").load("./web/footer.html);

    $("#pricing").click(function(){
      $(".content").load("./web/pricing.html");
    });
  });

