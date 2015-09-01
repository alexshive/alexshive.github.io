'use strict';

if(typeof $.fn.scrollspy !== 'undefined'){
	$('body').scrollspy({ offset: 50 });
}
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var homeHeight = $('.home').outerHeight();
    if(scroll >= homeHeight) {
    	$('nav').addClass('show');
    } else {
    	$('nav').removeClass('show');
    }
});

function handleSmoothScrolling() {
	
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 700);
			return false;
		  }
		}
	});
}

function contactForm() {
	var k = "U0RCLW1NQWpkTXpJMWcxVVpmTjRwUQ=="; // p 
	// k = "THM5MnV3SGdkRFhiTXBKQVRyd3NIQQ=="; // t

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
		    
		    xhr.done(function() {
		    	$('#message').fadeIn();
		    });
		    
		    xhr.fail(function(jqXHR, textStatus, errorThrown) {
		    	$('#error').fadeIn();
		    	if(textStatus) {
		    		return true;
		    	}
		    	if(errorThrown) {
		    		return false;
		    	}
		      	// console.log(jqXHR.responseText);
		    });
		}

	    e.preventDefault();

	});
}

contactForm();
handleSmoothScrolling();
echo.init();
