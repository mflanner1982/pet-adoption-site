
$(function(){    

    //all of jquery your code goes here
    
    //CSS manipulation using jQuery
    $("h1").css("font-family","cursive");
    $("h1").css("color","blue");
    $("h1").css("background-color","pink");

    //Assigning click events for buttons
    $("#btn1").on("click",function(){
        $(".wrapperDiv").hide();
    });    
    $("#btn2").on("click",function(){
        $(".wrapperDiv").show();
    });

    $("#btn1").attr("value", "Hide");
    $("#btn2").attr("value", "Show");
 /****/

 $("#btn3").on("click",function(){
    $(".wrapperDiv").show();

 $("#1").css("background-color","black");
 $("#2").css("background-color","white");
 $("#3").css("background-color","black");
 $("#4").css("background-color","white");

 $("#1").css("color","white");
 $("#2").css("color","black");
 $("#3").css("color","white");
 $("#4").css("color","black");

 // *** 1 *** I can't figure out how to make the # change to a word in the box
});   

$("#1").mouseover(function(){
    $("#1").css("background-color","yellow");} );
$("#2").mouseover(function(){
    $("#2").css("background-color","yellow");} );
$("#3").mouseover(function(){
    $("#3").css("background-color","yellow");} );
$("#4").mouseover(function(){
    $("#4").css("background-color","yellow");} );
// *** 2 *** I can't figure out how to change it back to the original color
// *** 3 *** I can't figure out how this fits in: You can use removeAttr method to do this. See w3schools.)
})