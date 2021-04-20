window.$ = window.jQuery = require('jquery/dist/jquery');
require('popper.js/dist/umd/popper');
require('bootstrap/dist/js/bootstrap');

// Navigation
jQuery(function ($) {
  $(".hamburger").click(function () {
    $(".navigation").toggleClass("open");
  })
});