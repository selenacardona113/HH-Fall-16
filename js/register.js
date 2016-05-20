$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            // var email = $("input#email").val();
            // var school = $("input#school").val();
            // var gradYear = $("input#gradYear").val();
            // var hardware = $("input#hardware").val();

            var form = $('form')[0];
            var formData = new FormData(form);

            // var resumeFile = event.target.files;

            // $('input[type=file]').on('change', prepareUpload);
            // $('form').on('submit', uploadFiles);

            // var data = new FormData();
            // $.each(files, function(key, value) { 
            //     data.append(key, value);
            // });

            // formData.append('resumeFile', $('input[type=file]')[0].files[0]); 

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            $.ajax({
                url: "././register_me.php",
                type: "POST",
                data: formData,
                cache: false,
                contentType : false,
                processData : false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>You have successfully registered! Check your email for more info. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#registrationForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems like something went wrong somewhere... Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#registrationForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

$('resume').on