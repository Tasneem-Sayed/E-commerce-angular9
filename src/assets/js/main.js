(function($) {
    "use strict";




    // count down
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div> ' + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>  ' + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'));
            });
        });
    }


    // magnific popup
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // light box
    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });



    // stikcy js
    $("#sticker").sticky({
        topSpacing: 0
    });

    //mean menu
    $('.main-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

    // search form
    $(".search-bar-icon").on("click", function() {
        $(".search-area").addClass("search-active");
    });

    $(".close-btn").on("click", function() {
        $(".search-area").removeClass("search-active");
    });

});


jQuery(window).on("load", function() {
    jQuery(".loader").fadeOut(1000);
});
