$(".nav-bar").load("./web/nav.html");

$(".pricing").on("click",function (e) {
    e.preventDefault();
    console.log("jiii");
    content.load("./web/pricing.html");
})
