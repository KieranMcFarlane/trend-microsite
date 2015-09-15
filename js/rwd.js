  //Stripes jQuery
(function($) { 
  $(document).ready(function(){

     // Scroll Top
    scrolled = false;
	$(window).scroll(function() {
		scrolled = true;
	})
	setInterval(function() {
		if (scrolled) {
			scrolled = false;
			if (0 >= (scrollTop = $(this).scrollTop())) {
				$('body').removeClass('sticky');
				$('#menu').removeClass('sticky');
			} else {
				$('body').addClass('sticky');
				$('#menu').addClass('sticky');
			}
		}
	}, 250);

          $(window).resize(function() {
    var extra = $('.strip-parent').height() * Math.tan(20);
    // $('.strip-parent > .strip').css('left', extra / 2);
    $('.strip-parent > .strip > .bg-img').css('left', -(extra / 2)).width('calc(100% + ' + extra + 'px');
      }).resize();

  });

  /*
   * Venue Map
   */ 

   var venueMap = $('.venue .map'),
       venueMapButton = $('.venue-subinfo .button');

   venueMapButton.on('click', function(e) {
      e.preventDefault();

      venueMap.toggleClass('open');

      if (venueMap.hasClass('open')) {
        venueMapButton.text('Close map');
      } else {
        venueMapButton.text('Open map');
      }
   }); 

/*
 * Register popup
 */

var inviteButton = $('.invite-popup .button'),
    $body = $('body');

inviteButton.magnificPopup({
  type: 'inline',
  mainClass: 'mfp-fade',

  callbacks: {
    open: function() {
      $body.addClass('invite-open');
    },

    close: function() {
      $body.removeClass('invite-open');
    }
  }
});

  

  /*
   * Jump to
   */

  var jumpTo = $('.jump-to'),
      jumpToButton = $('.jump-to-button'),
      jumpToClose= $('.jump-to-close');

  jumpToButton.on('click', function(e) {
    jumpTo.toggleClass('open');

    e.preventDefault();
  });

  jumpToClose.on('click', function(e) {
    jumpTo.toggleClass('open');

    e.preventDefault();
  });


   /*
    * Agenda
    */

    var accordion = $('.accordion'),
        accordionTitle = accordion.find('.title p');
        accordionList = accordion.find('.list');

    accordion.click(function(e){
        accordionList.stop(false, true).slideToggle(function(){
            if (accordion.hasClass('open')) {
                accordionTitle.text('Show the Agenda');
            } else {
                accordionTitle.text('Hide the Agenda');
            }

            accordion.toggleClass('open');
        });

        e.preventDefault();
    });
    
//   /*
//    * Accordion
//    */
   
   
  //     var venueMap = $('.list'),
  //     venueMapButton = $('.showing');

  // venueMapButton.on('click', function(e) {
  //    e.preventDefault();

  //    venueMap.toggleClass('.list');

  //    if (venueMap.hasClass('.showing')) {
  //      venueMapButton.text('Show the Agenda');
  //    } else {
  //      venueMapButton.text('Hide the Agenda');
  //    }
  // }); 

})(jQuery);