$(function(){
    //jQuery code goes here
    $("#btnUpOriginal").on("click",function(){
        $("#box").animate({                         // --------------  UP  -------------//
           top:"0px" },);                           // changes direction when i hit new button, but goes too fast
           ("$box").stop();}); 
    // ---------------------------//
    $("#btnDown").on("click",function(){        
        $("#box").animate({                         // -------------- DOWN -------------//
            top:"350px" },);                            // stopAll does nothing       
            ("$box").stop(stopAll, 100000000);});       // 100000000 doesn't work                   
    // ---------------------------//
    $("#btnLeft").on("click",function(){
        $("#box").animate({                         // -------------- LEFT -------------//   
           left: "0px" },);                            
           ("$box").stop();});                      
    // ---------------------------//
   $("#btnRight").on("click",function(){
        $("#box").animate({                         // -------------- RIGHT -------------//
            left: "350px" },);                         
            ("$box").stop();});                  
    // ---------------------------//                  
    $("#btnFadeOut").on("click",function(){
        $("#box").fadeOut(1500); });
    // ---------------------------//
    $("#btnFadeIn").on("click",function(){
        $("#box").fadeIn(1500); });
    // ---------------------------//
    $("#btnReset").on("click",function(){
        $("#box").animate({  
            top:"0px",
            left: "0px"  },);  }); 
    // ---------------------------//
    $("#btnHideShow").on("click",function(){
        $("#box").animate({ //animates css for the element "box"  
            width:"toggle" ,
            height:"toggle",
            opacity: "toggle"
       },                                  
       {step: function(){ console.log("steps logged");  }, });
       // do i need the line 10? what does it do? 
     });
// ---------------------------//                    // ---------------- Up Dr. C's Way -----------//

$("#btnUp").on("click",function(){
    $("$box").stop();
    $("#box").animate({                         
    top:"0px" },5000);  
});
                            
// ---------------------------//   
});