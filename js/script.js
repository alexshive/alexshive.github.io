/*global $*/
var A = {
	init: function() {
		this.nav.init();
	},
	nav: {
		init: function() {
			$panels = $('section.panel');
			$('nav a, .jump').click(function(e) {
				$panels.addClass('hidden');
				$('#' + $(this).attr('rel')).removeClass('hidden');
				e.preventDefault();
			});
		}
	}
};
A.init();