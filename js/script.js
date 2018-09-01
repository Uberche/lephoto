'use strict';
window.onload = function event() {};

//------------------------
// Contact Form
//------------------------

$('#submit').click(function(e) {
	const fname = $('#name').val();
	const phone = $('#phone').val();
	const email = $('#email').val();
	const inquiry = $('#inquiry').val();
	const website = $('#website').val();
	const budget = $('#budget').val();
	const need = $('need').val();

	// let websiteCheck = (websiteIsChecked) ? 'true' : 'false';
	// let seoCheck = ($(seoIsChecked).is(':clicked')) ? 'true' : 'false';
	// let hostingCheck = (hostingIsChecked) ? 'true' : 'false';
	$('#returnmessage').empty(); // To empty previous error/success message.
	// console.log($('#website--check').is(':clicked'));
	// Checking for blank fields
	if (fname == '' || email == '' || inquiry == '') {
		alert('Please Fill Required Fields');
		e.preventDefault();
	} else {
		// Returns successful data submission message when the entered information is stored in database.
		$.post(
			'../php/contact_form1.php',
			{
				fname1: fname,
				phone1: phone,
				email1: email,
				inquiry1: inquiry,
				website1: website,
				budget1: budget,
				need1: need
			},
			function(data) {
				$('#returnmessage').append(data); // Append returned message to message paragraph.

				if (
					data ==
					'Your Query has been received, We will contact you soon.'
				) {
					$('#inquiryform')[0].reset(); // To reset form fields on success.
				}
			}
		);
		e.preventDefault();
	}
});

// IF we need to, change svg colors as images

// $(document).ready(function() {
// 	$('img[src$=".svg"]').each(function() {
// 		var $img = jQuery(this);
// 		var imgURL = $img.attr('src');
// 		var attributes = $img.prop('attributes');

// 		$.get(
// 			imgURL,
// 			function(data) {
// 				// Get the SVG tag, ignore the rest
// 				var $svg = jQuery(data).find('svg');

// 				// Remove any invalid XML tags
// 				$svg = $svg.removeAttr('xmlns:a');

// 				// Loop through IMG attributes and apply on SVG
// 				$.each(attributes, function() {
// 					$svg.attr(this.name, this.value);
// 				});

// 				// Replace IMG with SVG
// 				$img.replaceWith($svg);
// 			},
// 			'xml'
// 		);
// 	});
// });
