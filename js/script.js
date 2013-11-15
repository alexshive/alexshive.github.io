/*global $*/
var A = {
	init: function() {
		this.nav.init();
	},
	nav: {
		init: function() {
			$panels = $('section.panel');
			$nav = $('nav a');
			$('nav a, .jump').click(function(e) {
				$this = $(this);
				$nav.removeClass('active');
				$panels.addClass('hidden');
				$this.addClass('active');
				$('#' + $this.attr('rel')).removeClass('hidden');
				e.preventDefault();
			});
		}
	}
};
A.init();