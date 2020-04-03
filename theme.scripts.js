(function ($) {
    "use strict";

    /**!-------------------------------------------
        01. PRELOADER
    --------------------------------------------**/
    var $mainwindow = $(window);
    $mainwindow.on('load', function() {

        $("#loader").fadeOut(1000);
    });
    
    /*-------------------------------
    MOBILE MENU
    ---------------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "981",
        meanMenuContainer: ".mobile-menu"
    });
    
})(jQuery);