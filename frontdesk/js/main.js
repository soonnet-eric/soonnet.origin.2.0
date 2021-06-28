$(function ($) {

  /* 目錄動效
   * -------------------------------------------------- */
  $(document).on("scroll", function () {
    if ($(document).scrollTop() > 0) {
      $("header").addClass("shrink");
    } else {
      $("header").removeClass("shrink");
    }
  });

  /* Rellax */
  var rellax = new Rellax('.rellax');

});
