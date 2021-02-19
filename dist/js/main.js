$(document).ready(()=>{
    $(".nav-bar").load("./web/nav.html")
    $("#pricing").click(()=>{
        console.log("hiii");
        $(".content").load("./web/pricing.html")
    });
)};