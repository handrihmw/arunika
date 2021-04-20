window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');
require('navigo');

// Navigation
jQuery(function ($) {
  $(".hamburger").click(function () {
    $(".navigation").toggleClass("open");
  })
});

$(document).ready(function () {
  console.log('Webpack loaded yeaahh!');
});