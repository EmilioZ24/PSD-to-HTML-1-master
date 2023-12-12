$(document).ready(function(){
   // alert("jquery loaded")
   //$("h3").css({border:"3px solid blue"});
   //$(".wrapper").css({border: "3px solid red"});
   //$("#clients").css({border:"3px solid yellow"});

   //$("#contact-website").css({border:"2px solid red"}).next().css({border:"2px solid green"}).closest("section").css({border:"2px solid blue"});
})

var tweet = "<div style ='margin: 20px; 10px; background: #eee'> the big fight live: Ham VS Cheese</div>"

$('#tweets div p').append(tweet)

$("section").wrap("<div>");
$("section").unwrap();
$("section").wrapAll("<div>");

$(".button").remove();
$("#points-of-sale").empty();

$("#contact img").removeAttr("alt");
$("#contact img").Attr("alt", "location");

$("#social-nav").css("top","-125px").css("left","50px");