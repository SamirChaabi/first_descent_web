var main = function() {
  $('#flash').hide();

  resizeRentalPageMatrix();

  function resizeRentalPageMatrix(){
    if ( $(window).width() < 440) {
      $(".rentalpage .container").css("width", "100%");
      $(".rentalpage .container tr").css("line-height", "5vmin");
      $(".rentalpage .container").css("font-size", "2.5vmin");
    }
    else {
      $(".rentalpage .container").css("width", "80%");
      $(".rentalpage .container tr").css("line-height", "3.25vmin");
      $(".rentalpage .container").css("font-size", "2vmin");
    }

    if ( $(window).height() < 480) {
      $(".rentalpage .container tr").css("line-height", "2.5vmin");
      $(".rentalpage .container").css("font-size", "2vmin");
    }
    else {
      $(".rentalpage .container tr").css("line-height", "3.25vmin");
      $(".rentalpage .container").css("font-size", "2vmin");
    }
  }

  $(window).resize(function() {
    resizeRentalPageMatrix();
  });

  $(".bookingbtn figure").hover(function(){
    $(this).css("background-color", "white");
  },
  function(){
    $(this).css("background-color", "#F57C00");
  });

  $(".bookingbtn figure").hover(function(){
    $(".bubbletext").css("color", "#F57C00");
  },
  function(){
    $(".bubbletext").css("color", "white");
  });

  $("#waxing").hover(function(){
    $("#waxing").attr('src', "Images/service/service_1.1_price.gif");
  },
  function(){
    $("#waxing").attr('src', "Images/service/service_1.1.gif");
  });

  $("#quicky").hover(function(){
    $("#quicky").attr('src', "Images/service/service_1.2_price.gif");
  },
  function(){
    $("#quicky").attr('src', "Images/service/service_1.2.gif");
  });

  $("#tuning").hover(function(){
    $("#tuning").attr('src', "Images/service/service_1.3_price.gif");
  },
  function(){
    $("#tuning").attr('src', "Images/service/service_1.3.gif");
  });

  $("#premium").hover(function(){
    $("#premium").attr('src', "Images/service/service_1.4_price.gif");
  },
  function(){
    $("#premium").attr('src', "Images/service/service_1.4.gif");
  });

  $("#map").hover(function(){
    $("#mapicon").attr('src', "Images/contact/map_green.png");
  },
  function(){
    $("#mapicon").attr('src', "Images/contact/map_black.png");
  });

  $("#mail").hover(function(){
    $("#mailicon").attr('src', "Images/contact/mail_green.png");
  },
  function(){
    $("#mailicon").attr('src', "Images/contact/mail_black.png");
  });

  $("#fb").hover(function(){
    $("#fbicon").attr('src', "Images/contact/fb_blue.png");
  },
  function(){
    $("#fbicon").attr('src', "Images/contact/fb_black.png");
  });

  $(".iframe").fancybox({
    'width'         : '90%',
    'height'        : '90%',
    'autoScale'     : true,
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'type'          : 'iframe',
    'autoDimensions': false
  });

  $('#fullpage').fullpage({
    anchors:['home', 'rental', 'service', 'shop', 'about_us', 'contact'],
    menu: '#nav',
    scrollingSpeed: 1000
  });
};

$(document).ready(main);
