window.$ = window.jQuery = require('jquery/dist/jquery');
require('popper.js/dist/umd/popper');
require('bootstrap/dist/js/bootstrap');

// Navigation
jQuery(function ($) {
  $(".hamburger").click(function () {
    $(".navigation").toggleClass("open");
  })
});

// Smooth Scroll
$(".ar-menu__item-list").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){
      window.location.hash = hash;
    });
  }
});