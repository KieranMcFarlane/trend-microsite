jQuery(function($) {
	// Menu
	$('.jump-to-button').click(function() {
		(html = $('html')).toggleClass('show-menu');
		$('.jump-to-button > span').each(function() {
			$(this).html(html.hasClass('show-menu')
				? 'Close Menu'
				: 'Jump To'
			);
		});
	});
<<<<<<< HEAD
=======
	
	// Smooth scrolling
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = (target.length
				? target
				: $('[name="' + this.hash.slice(1) + '"]')
			);
			if (target.length) {
				if ($('html').hasClass('show-menu')) {
					$('.jump-to-button')[0].click();
				}
				$('html, body').animate({
					scrollTop: (target.offset().top
						? target.offset().top - 75
						: 0
					)
				}, 1000);
				return false;
			}
		}
	});
	if (window.location.hash) {
		var target = jQuery(window.location.hash);
		if (target.length) {
			jQuery('html, body').animate({
				scrollTop: (target.offset().top
					? target.offset().top - 75
					: 0
				)
			}, 1000);
		} else {
			history.pushState("", document.title, window.location.pathname + window.location.search);
		}
	}
>>>>>>> form-function
});