$(document).ready(function() {
  $(".btn-tag-category").click(function(eventObject) {
    var tag = $(this).html();
    var totalPanel = document.getElementsByClassName("product").length;
    eventObject.preventDefault();

    var buttons = document.getElementsByClassName("btn-tag-category")
    i = buttons.length
    while(i--) {
        buttons[i].classList.remove("btn-primary");
    }

    $(this).addClass("btn-primary");

    // Change the product boxes
    for (var x = 1; x <= totalPanel; x++  ){
      //console.log("json: " + JSON.stringify($("#project" + x ).html()));
      if(JSON.stringify($("#product" + x ).html()).indexOf(tag) >= 0 ){
        //console.log( JSON.stringify($("#project" + x ).html()) );
        $("#product" + x ).hide();
        $("#product" + x ).fadeIn();
      } else {
        $("#product" + x ).hide();
      };
      //console.log(tag);
      //console.log(JSON.stringify($("#project" + x ).html()).indexOf(tag));
    }
    //console.log(tag);

  });
  //console.log("total panel: " + document.getElementsByClassName("panel").length );
});

// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = 300;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });
});

$(document).ready(function(){
  var maxOffset = 300;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('form[id=contactForm]').submit(function(){
  $.post($(this).attr('action'), $(this).serialize(), function(data, textStatus, jqXHR){
    $('form[id=contactForm] #success').hide();
    $('form[id=contactForm] #error').hide();
    if (jqXHR.status == 200) {
      $('form[id=contactForm] #success').show();
    }}, 'json').fail(function(){
      $('form[id=contactForm] #success').hide();
      $('form[id=contactForm] #error').hide();
      $('form[id=contactForm] #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});
