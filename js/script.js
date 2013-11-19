/*global $*/
var k = "THM5MnV3SGdkRFhiTXBKQVRyd3NIQQ=="; // test key

var F = function() {

	this.slider = $('.slider').unslider(),
	this.sliderdata = this.slider.data('unslider');

	this.init = function() {
		this.nav();
		this.email();
	};

	this.nav = function() {
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
	};

	this.email = function() {
		var i = 0, 
			output = '',
			digits = [5,15,12,11,17,4,16,3,10,8,1,14,0,13,7,9,2,6],
			letters = ['a','c','v','i','m','@','o','l','h','x','a','.','m','e','e','s','i','l'],
			address = [],
			api = 'https://mandrillapp.com/api/1.0/messages/send.json';
		for(i=0;i<digits.length;i+=1){
			address[digits[i]] = letters[i]; 
		}
		for(i=0;i<address.length;i+=1){
			output += address[i];
		}
		$('#email').attr('href', 'mailto:' + output).find('em').append(output);
		$('#contact form').submit(function(e) {

			var xhr = $.ajax({
		      type: 'POST',
		      url: "https://mandrillapp.com/api/1.0/messages/send.json",
		      dataType: 'json',
		      data: {
		        key: $.base64.decode(k),
		        message: {
		          text: "Example text content",
		          subject: "example subject",
		          from_email: "mail@example.com",
		          from_name: "Example Name",
		          to: [{
		                  "email": "mail@example.com",
		                  "name": "Recipient Name"
		              }]
		        }
		      }
		    });
		    
		    xhr.done(function(data) {
		      console.log(JSON.stringify(data));
		    });
		    
		    xhr.fail(function(jqXHR, textStatus, errorThrown) {
		      console.log(jqXHR.responseText);
		    });

		    e.preventDefault();

		});
	}
};
var A = new F();
A.init();