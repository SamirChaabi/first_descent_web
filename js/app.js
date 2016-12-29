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

  var dictionary = {
      'home_nav': {
        'eng': 'Home',
        'ger': 'German Ski & Board Rental',
        'swe': 'Hem',
      },
      'rental_nav': {
        'eng': 'Rental',
        'ger': 'German Ski & Board Rental',
        'swe': 'Hyra',
      },
      'service_nav': {
        'eng': 'Service',
        'ger': 'German Ski & Board Rental',
        'swe': 'Service',
      },
      'shop_nav': {
        'eng': 'Shop',
        'ger': 'German Ski & Board Rental',
        'swe': 'Butik',
      },
      'about_us_nav': {
        'eng': 'Freeride',
        'ger': 'German Ski & Board Rental',
        'swe': 'Fri&aring;kning',
      },
      'contact_nav': {
        'eng': 'Contact',
        'ger': 'German Ski & Board Rental',
        'swe': 'Kontakt',
      },
      'skinboard': {
        'eng': 'Ski & Board Rental',
        'ger': 'German Ski & Board Rental',
        'swe': 'Skid- & Snowboard Hyra',
      },
      'service': {
        'eng': 'Service',
        'ger': 'German Service',
        'swe': 'Service',
      },
      'shop': {
        'eng': 'Shop',
        'ger': 'German Shop',
        'swe': 'Butik',
      },
      'renthere': {
        'eng': 'Rent Here',
        'ger': 'German Here',
        'swe': 'Boka H&auml;r',
      },
      'equipmentype': {
        'eng': 'Adults - Price/day (&euro;)',
        'ger': 'German Here',
        'swe': 'Vuxna - Pris/dag (&euro;)',
      },
      'premiumski': {
        'eng': 'Premium skis',
        'ger': 'German Here',
        'swe': 'Premium skidor',
      },
      'excellenceski': {
        'eng': 'Excellence skis',
        'ger': 'German Here',
        'swe': 'Excellence skidor',
      },
      'perfromanceski': {
        'eng': 'Performance skis/Snowboard',
        'ger': 'German Here',
        'swe': 'Performance skidor/Snowboard',
      },
      'discoveryski': {
        'eng': 'Discovery skis',
        'ger': 'German Here',
        'swe': 'Discovery skidor',
      },
      'premiumboots': {
        'eng': 'Premium skiboots',
        'ger': 'German Here',
        'swe': 'Premium pj&auml;xor',
      },
      'boots': {
        'eng': 'Boots',
        'ger': 'German Here',
        'swe': 'Pj&auml;xor/Snowboard boots',
      },
      'helmet': {
        'eng': 'Helmet',
        'ger': 'German Here',
        'swe': 'Hj&auml;lm',
      },
      'junior': {
        'eng': 'Junior (age 10-15)',
        'ger': 'German Here',
        'swe': 'Junior (&aring;lder 10-15)',
      },
      'jrskiboard': {
        'eng': 'Ski/Board',
        'ger': 'German Here',
        'swe': 'Skidor/Snowboard',
      },
      'jrboots': {
        'eng': 'Boots',
        'ger': 'German Here',
        'swe': 'Pj&auml;xor/Snowboard boots',
      },
      'jrhelmet': {
        'eng': 'Helmet',
        'ger': 'German Here',
        'swe': 'Hj&auml;lm',
      },
      'kids': {
        'eng': 'Kids (age 0-9)',
        'ger': 'German Here',
        'swe': 'Barn (&aring;lder 0-9)',
      },
      'kidsski': {
        'eng': 'Ski',
        'ger': 'German Here',
        'swe': 'Skidor',
      },
      'kidsboots': {
        'eng': 'Boots',
        'ger': 'German Here',
        'swe': 'Pj&auml;xor/Snowboard boots',
      },
      'kidshelmet': {
        'eng': 'Helmet',
        'ger': 'German Here',
        'swe': 'Hj&auml;lm',
      },
      'safetyeq': {
        'eng': 'Safety equipment',
        'ger': 'German Here',
        'swe': 'S&auml;kerhetsutrustning',
      },
      'transc': {
        'eng': 'Transceiver',
        'ger': 'German Here',
        'swe': 'S&auml;ndare',
      },
      'probenshovle': {
        'eng': 'Probe & Shovle',
        'ger': 'German Here',
        'swe': 'Sond & Spade',
      },
      'absbackpack': {
        'eng': 'ABS Backpack',
        'ger': 'German Here',
        'swe': 'ABS Ryggs&auml;ck',
      },
      'backpack': {
        'eng': 'Backpack',
        'ger': 'German Here',
        'swe': 'Ryggs&auml;ck',
      },
      'depot': {
        'eng': 'Depot',
        'ger': 'German Here',
        'swe': 'Dep&aring;',
      },
      'depotski': {
        'eng': 'Skis',
        'ger': 'German Here',
        'swe': 'Skidor',
      },
      'depotboot': {
        'eng': 'Boots',
        'ger': 'German Here',
        'swe': 'Pj&auml;xor',
      },
      'depotset': {
        'eng': 'Set',
        'ger': 'German Here',
        'swe': 'Set',
      },
      'servicedesc': {
        'eng': 'Improve your performance with our top service',
        'ger': 'German Here',
        'swe': 'F&ouml;rb&auml;ttra prestandan med v&aring;r h&ouml;gkvalitativa service',
      },
      'hotwax': {
        'eng': 'Hot wax',
        'ger': 'German Here',
        'swe': 'Hot wax',
      },
      'wax': {
        'eng': 'Wax',
        'ger': 'German Here',
        'swe': 'Vax',
      },
      'quick': {
        'eng': 'Quicky',
        'ger': 'German Here',
        'swe': 'Quicky',
      },
      'quickdesc': {
        'eng': 'Wax & edges sharpened',
        'ger': 'German Here',
        'swe': 'Vax & slipade kanter',
      },
      'tunin': {
        'eng': 'Tuning',
        'ger': 'German Here',
        'swe': 'Tuning',
      },
      'tunindesc': {
        'eng': 'Wax, edges & stone grind',
        'ger': 'German Here',
        'swe': 'Vax, kanter & sten slipning',
      },
      'prem': {
        'eng': 'Premium',
        'ger': 'German Here',
        'swe': 'Premium',
      },
      'premdesc': {
        'eng': 'Wax, edges, stone grind & repair',
        'ger': 'German Here',
        'swe': 'Vax, kanter, sten slipning & reparation',
      },
      'unforgexp': {
        'eng': 'Looking for an unforgettable freeride experience?',
        'ger': 'German Here',
        'swe': 'Sugen p&aring; en of&ouml;rgl&ouml;mlig fri&aring;kningsupplevelse?',
      },
      'guidedtour': {
        'eng': 'Book a guided tour with our friends at ',
        'ger': 'German Here',
        'swe': 'Boka en guidad tur med v&aring;ra v&auml;nner p&aring;',
      },
      'rentfreer': {
        'eng': 'Rent freeride equipment in our ',
        'ger': 'German Here',
        'swe': 'Hyr fri&aring;kningsutrustning i v&aring;ran ',
      },
      'specshop': {
        'eng': 'crisp shop ',
        'ger': 'German Here',
        'swe': 'fr&auml;scha butik',
      },
      'freerideskisfrom': {
        'eng': 'Freeride skis from 31 &euro;/day',
        'ger': 'German Here',
        'swe': 'Fri&aring;kningsskidor fr&aring;n 31 &euro;/dag',
      },
      'absfrom': {
        'eng': 'ABS backpack from 10 &euro;/day',
        'ger': 'German Here',
        'swe': 'ABS ryggs&auml;ck fr&aring;n 10 &euro;/dag',
      },
      'moredetails': {
        'eng': 'For more ',
        'ger': 'German Here',
        'swe': 'F&ouml;r mer ',
      },
      'deta': {
        'eng': 'details',
        'ger': 'German Here',
        'swe': 'info.',
      },
      'mail': {
        'eng': 'Mail',
        'ger': 'German Here',
        'swe': 'Mail',
      },
      'findus': {
        'eng': 'Find us ',
        'ger': 'German Here',
        'swe': 'Hitta hit',
      }
  };

  var langs = ['eng', 'ger', 'swe'];
  var current_lang_index = 0;
  var current_lang = langs[current_lang_index];

  window.change_lang = function(id) {
    setCurrentFlagInactive(id);
    if (id == "eng") {
      document.getElementById(id).src = 'Images/main/languages/United-Kingdom.png';
      current_lang = langs[0];
    }
    else if (id == "ger") {
      document.getElementById(id).src = 'Images/main/languages/Germany.png';
      current_lang = langs[1];
    }
    else if (id == "swe") {
      document.getElementById(id).src = 'Images/main/languages/Sweden.png';
      current_lang = langs[2];
    }
    /*current_lang_index = ++current_lang_index % 3;
    current_lang = langs[current_lang_index];*/

    translate(id);
  }

  function translate(id) {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
  }

  function setCurrentFlagInactive(id){
    if (current_lang == "eng") {
      document.getElementById(current_lang).src ='Images/main/languages/United-Kingdom-Inactive.png';
    }
    else if (current_lang == "ger") {
      document.getElementById(current_lang).src ='Images/main/languages/Germany-Inactive.png';
    }
    else if (current_lang == "swe") {
      document.getElementById(current_lang).src ='Images/main/languages/Sweden-Inactive.png';
    }
  }

  translate();

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
