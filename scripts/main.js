$('body').bind('touchstart', function() {});

$(document).ready(function(){

//TOGGLE FOR THE MENU
$(function() {

  $(".tamman-menu").hide();

    $(".menu-toggle").bind ('click', function(e) {
        e.preventDefault();

           // $(".tamman-menu li").addClass('current');
           $(this).removeClass('open');
            $(".tamman-menu").slideToggle('slow');
            $(this).addClass('open');
            $(".tamman-menu").css("display", "inline-block")
             $(".tamman-menu").show();
             //$(".qp-ui-mask-modal").toggleClass("visible");

    });
});

//SMOOTH OUT THE SCROLL WHEN CLICKING ON MAIN MENU
$("#menu-main-navigation a").click(function(){
    var target = $(this).attr("href");
    $("body,html").animate( { scrollTop: $(target).offset().top - 50}, 1000); 
    $(".tamman-menu").hide();
       $(".menu-button").removeClass('is-active');
       return false;
      

});
//SMOOTH OUT THE SCROLL WHEN CLICKING ON MAIN MENU

$(".top a").click(function(){
    $("body, html").animate( { scrollTop:0 }, 1000); 
return false;

      

});
//BURGER ICON FUNCTIONALITY
var menuButton = document.getElementById('menuButton');
    menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
   
});



//ON SCROLL FIX NAV BAR
$(window).scroll(function() {

  if ( $(document).scrollTop() > 375 &&  !$("header").hasClass("fixed") ) {
    $("header").addClass("fixed");
    $("header").slideDown("slow");
    $(".menu-toggle").show();
  }
  else  if ( $(document).scrollTop() <= 375){
         $("header").removeClass("fixed");
   }


});

});

//CLICK MORE LEADS TO FLIPPING PANEL

$(document).ready(function(){ 
    $(".more").click(function(e){ 
        e.preventDefault();
        $(this).closest("div").find(".flipper").toggleClass("flipped"); 
        // $(".flipper").toggleClass("flipped"); 
    }); 
});



///parallax
(function($) {
  // Check if the section has the parallax class.
  if ($('section').hasClass('parallax')) {
    // Check if the browser is IE10 or below.
   
      // If not IE, add the data attributes.
      $('section.parallax').data('type', 'background');
      $('section.parallax').data('speed', '10');
    
  }

  $(document).ready( function() {
    // Cache the Window object
    $window = $(window);

    // $('section[data-type="background"]').each(function() {
    $('section.parallax').each(function() {
      // assigning the object
      var $bgobj = $(this);

      $(window).scroll(function() {
        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it UP!
        var yPos = -(($(window).scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

        // Put together our final background position
        var coords = '50% ' + yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
      });
      // window scroll Ends
    });
  });
})(jQuery);