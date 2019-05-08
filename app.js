$(document).ready(function(){

$(".a").hide(0);

    $(".a").show(1000);



    $("span").click(function(){

        $(".a").slideUp(2000);


    });

$(".left").click(function () {

    $(this).addClass("right");



});
    $(".left").dblclick(function () {

        $(this).addClass("left");



    });




});
