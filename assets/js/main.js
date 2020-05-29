(function ($) {
    'use strict';

    $(window).on("load", function() {
		background();
	    //preloader
		$("#preloader").delay(300).animate({
	    	"opacity" : "0"
	    	}, 500, function() {
	    	$("#preloader").css("display","none");
	    });
	});

    // background image js
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// Nice select
	$('select').niceSelect();

	// offcanvas menu
	$(".menu-tigger").on("click", function () {
		$(".extra-info,.offcanvas-overly").addClass("active");
		return false;
	});
	$(".menu-close,.offcanvas-overly").on("click", function () {
		$(".extra-info,.offcanvas-overly").removeClass("active");
	});

	// WOW active
	new WOW().init();

	// Activate lightcase
    $('a[data-rel^=lightcase]').lightcase();

})(jQuery);