/*global $*/
var A = {
	init: function() {
		this.nav.init();
		this.email.init();
		this.slider.init();
	},
	nav: {
		init: function() {
			var $panels = $('section.panel');
			var $nav = $('nav a');
			$('nav a, .jump').click(function(e) {
				var $this = $(this);
				$nav.removeClass('active');
				$panels.addClass('hidden');
				$this.addClass('active');
				$('#' + $this.attr('rel')).removeClass('hidden');
				e.preventDefault();
			});
		}
	},
	email: {
		init: function() {
			var i = 0, 
				output = '',
				digits = [5,15,12,11,17,4,16,3,10,8,1,14,0,13,7,9,2,6],
				letters = ['a','c','v','i','m','@','o','l','h','x','a','.','m','e','e','s','i','l'],
				address = [];
			for(i=0;i<digits.length;i+=1){
				address[digits[i]] = letters[i]; 
			}
			for(i=0;i<address.length;i+=1){
				output += address[i];
			}
			$('#email').attr('href', 'mailto:' + output).find('em').append(output);
		}
	},
	slider: { 
		init: function() {
			$('.slider').unslider();
		}
	}
};
A.init();