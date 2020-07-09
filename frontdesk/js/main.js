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
	
  /* Mobile Menu
     * ---------------------------------------------------- */ 
    var ssMobileMenu = function() {

        var toggleButton = $('.header-menu-toggle'),
            nav = $('.header-nav-wrap');

        toggleButton.on('click', function(event){
            event.preventDefault();

            toggleButton.toggleClass('is-clicked');
            nav.slideToggle();
        });

        if (toggleButton.is(':visible')) nav.addClass('mobile');

        $WIN.on('resize', function() {
            if (toggleButton.is(':visible')) nav.addClass('mobile');
            else nav.removeClass('mobile');
        });

        nav.find('a').on("click", function() {

            if (nav.hasClass('mobile')) {
                toggleButton.toggleClass('is-clicked');
                nav.slideToggle(); 
            }
        });

    };
	
	/* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssMobileMenu();

    })();

});
