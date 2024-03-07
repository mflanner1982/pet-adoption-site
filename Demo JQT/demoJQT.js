
$(function(){  //$(document).ready(function(){})
    
   console.log("hello");
   $("#button1").on("click",function(){
      $("#content").parent().css("border","5px darkgreen solid");      
      $("#content").parents().css("color","black");    
   });

   $("#button2").on("click",function(){
      $("#content").parents().css("background-color","lightgreen");    
      $("#content").parents().css("color","white");    
   });

   $("#button3").on("click",function(){
      $("#content").parentsUntil("#level3").css("border","dashed 5px yellow");
      $("#content").parents().css("color","black");    
   });

   $("#button4").on("click",function(){
      //children are elements at a lower level in the hierarchy
      $("#content").children().css("border","3px dotted blue");
      console.log($("#content").children().length);
   });

   $("#button5").on("click",function(){
      //siblings are elements at the same level in the hierarchy
      $("#content").siblings().css("background-color","purple");
      $("#content").siblings().css("color","white");   
   });

   $("#button6").on("click",function(){
      var descendants = $("#content").find("p");//* means all descendants
      descendants.each(function(){
         $(this).css("background-color","lightgreen");
         console.log($(this).html());
      });
   });
// ---------------------------------------------------------------------------  //
   $("#button7").on("click",function(){
    $("#content").next().css("background-color","yellow");
        // $("#content").next().console.log("Sibling set by prev() method");
        alert("I can't get 'Level 2 div' to change to 'Sibling set by next() method' with the button.");
    });

    $("#button8").on("click",function(){
        $("#content").prev().css("background-color","grey");
       // $("#content").prev().console.log("Sibling set by prev() method");
        alert("I can't get 'Level 1 div' to change to 'Sibling set by prev() method' with the button.");
    });

    $("#button9").on("click",function(){
        $("li").closest("ul").css("color","orange");  
    });

    $("#button10").on("click",function(){
        $("li").first().css("background-color","red");
    });

    $("#button11").on("click",function(){
        $("li").last().css("background-color","red");
    });

    $("#button12").on("click",function(){
        $('li').filter("#item2").css("background-color","red");
    });

    $("#button13").on("click",function(){
        $("li").not("#item2").css("background-color","red");
    });

    $("#button14").on("click",function(){
        $("li").slice(1,4).css("background-color","red");
    });
    
// ---------------------------------------------------------------------------  //

    $("#button15").on("click",function(){
        $('li').eq(3).css("text-decoration","underline");
    });

    $("#button16").on("click",function(){
        $('li').filter(':first').css("text-decoration","underline");
    });

    $("#button17").on("click",function(){
        $('li').filter(':last').css("text-decoration","underline");
    });
})