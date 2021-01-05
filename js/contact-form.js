$(function() {
    // Get the form.
    const form = $('#ajax-contact');

    // Get the messages div.
    const formMessages = $('#contact__alert');

    // Set up an event listener for the contact form.
    $(form).submit(function(evt) {
        // Stop the browser from submitting the form.
        evt.preventDefault();

        // Serialize the form data. 
        // This will convert the data the user has entered into the form into a key/value string that can be sent with the AJAX request.
        const formData = $(form).serialize();

        // Submit the form using AJAX.
        // Using jQuery’s ajax method to create a new AJAX request, pass an object to the ajax method that contains a number of properties used to configure the request.
        // type specifies the HTTP method that will be used for the request (POST).
        // url is the location of the script that the form data will be sent to. Fetch the form's "action" attribute (action="./php/contact.php").
        // data is the formData variable above.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }) // no semi-colon so that .done and .fail can fire.
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
        
            // Set the message text.
            $(formMessages).text(response);
        
            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
        
            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });

});