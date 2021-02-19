$(document).ready(()=>{
    $(".nav-bar").loaf("./web/nav.html")
    $("#pricing").click(()=>{
        console.log("hiii");
        $(".content").load("./web/pricing.html")
    });
)};