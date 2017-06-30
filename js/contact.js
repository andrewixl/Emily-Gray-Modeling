$(document).ready(function(){
  $(".portfoliodropdown>a").hide();
  $("#error").hide();
  $(".astrik").hide();
  $(".portfoliodropdown>a").slideUp("slow");
  $('#main, #contact, form, #connected, .connectwithus').hide().fadeIn(600);

  $("header>a").hover(function(){
    $(this).css("background-color", "white");
    $(this).css("color", "black");
    }, function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
  });
  /*$("header>#portfoliotab").hover(function(){
    $(".portfoliodropdown>a").slideDown("slow");
    }, function(){
      $(".portfoliodropdown, header>#portfoliotab" ).hover(function(){
        }, function(){
        $(".portfoliodropdown>a").slideUp("slow");
      });
    });*/
  /*$("header>#portfoliotab, .portfoliodropdown").hover(function(){
    $(".portfoliodropdown>a").slideDown("slow");
    }, function(){
        $(".portfoliodropdown>a").slideUp("slow");
    });*/

  $('#submitbutton').click(function(){
     alert("Your message has been recieved, please wait 3-5 business days for a response.");
     console.log($("#firstname").val());
     console.log($("#lastname").val());
     console.log($("#email").val());
     console.log($("#phone").val());
     console.log($("#message").val());
  });
});
