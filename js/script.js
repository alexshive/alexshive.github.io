/*global $*/
var k;
// k = "THM5MnV3SGdkRFhiTXBKQVRyd3NIQQ=="; // t
k = "U0RCLW1NQWpkTXpJMWcxVVpmTjRwUQ=="; // p 

var F = function() {

	this.init = function() {
		this.nav();
		this.email();
		this.slider();
	};

	this.slider = function() {
		var duration = 3; // seconds
		$('.slider ul').each(function(i, el) {
			var $el = $(el);
			var $first = $($el.find('li')[0]);
			var $li = $($el.find('li'));
			$first.addClass('active');
			setInterval(function() {
				var $next = $($el.find('.active')).next();
				if($next.length === 0) {
					$next = $first;
				}
				$li.removeClass('active');
				$next.addClass('active');
			}, duration * 1000);
		});
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
			address = [];

		for(i=0;i<digits.length;i+=1){
			address[digits[i]] = letters[i]; 
		}
		for(i=0;i<address.length;i+=1){
			output += address[i];
		}
		$('#email').attr('href', 'mailto:' + output).find('em').append(output);
		$('#error b').append(output);
		$('#contact form').submit(function(e) {

			if($(this).valid()) {

			    $('#submit').hide();				

				var $name = 	$('#contact-name').val();
				var $msg = 		$('#contact-message').val();
				var $email = 	$('#contact-email').val();

				var xhr = $.ajax({
			      type: 'POST',
			      url: "https://mandrillapp.com/api/1.0/messages/send.json",
			      dataType: 'json',
			      data: {
			        key: $.base64.decode(k),
			        message: {
			          text: $msg,
			          subject: "Contact Form",
			          from_email: $email,
			          from_name: $name,
			          to: [{
			                  "email": output,
			                  "name": "Alex Shive"
			              }]
			        }
			      }
			    });
			    
			    xhr.done(function(data) {
			    	$('#message').fadeIn();
			      	// console.log(JSON.stringify(data));
			    });
			    
			    xhr.fail(function(jqXHR, textStatus, errorThrown) {
			    	$('#error').fadeIn();
			      	// console.log(jqXHR.responseText);
			    });
			}

		    e.preventDefault();

		});
	};
};
var A = new F();
A.init();