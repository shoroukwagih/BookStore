$(document).ready(function() {
    // Add input event listeners to trigger validation in real-time
    $("#name").on("input", function() {
        validateName();
    }).on("focusout", function() {
        $("#nameError").removeClass("show-error").hide();
    });

    $("#email").on("input", function() {
        validateEmail();
    }).on("focusout", function() {
        $("#emailError").removeClass("show-error").hide();
    });

    $("#pass").on("input", function() {
        validatePassword();
    }).on("focusout", function() {
        $("#passError").removeClass("show-error").hide();
    });

    $("#message").on("input", function() {
        validateMessage();
    }).on("focusout", function() {
        $("#messageError").removeClass("show-error").hide();
    });

    // Add submit event listener to the form
    $("#myForm").on("submit", function(e) {
        e.preventDefault(); // Prevent the default form submission
        validate(); // Perform validation
    });
});

function validate() {
    // Reset error messages and styles
    $(".error-message").removeClass("show-error").hide();

    // Validate each input field in real-time
    validateName();
    validateEmail();
    validatePassword();
    validateMessage();

    // Check if there are any errors
    if ($("#errorMessages").children(".show-error").length === 0) {
        // No errors, submit the form using AJAX
        submitForm();
    }
}

function validateName() {
    var name = $("#name").val();
    toggleErrorMessage($("#nameError"), name.length < 4, "Name must be more than 3 characters.");
}

function validateEmail() {
    var email = $("#email").val();
    var isValid = isValidEmail(email);

    // Show error message dynamically
    toggleErrorMessage($("#emailError"), !isValid, "Please enter a valid email address.");
}

function validatePassword() {
    var password = $("#pass").val();
    toggleErrorMessage($("#passError"), password.length < 8, "The Password must be more than 8 characters");
}

function validateMessage() {
    var message = $("#message").val();
    toggleErrorMessage($("#messageError"), message.length < 4, "The Message must be more than 4 characters");
}

function toggleErrorMessage(element, condition, message) {
    element.toggle(condition).toggleClass("show-error", condition).text(message);
}

function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    // AJAX request to submit form
    $.ajax({
        type: "POST",
        url: $("#myForm").attr("action"),
        data: $("#myForm").serialize(),
        success: function(response) {
            // Handle successful submission
            console.log(response);
            // You can redirect or perform other actions here
        },
        error: function(xhr, textStatus, errorThrown) {
            // Handle error
            console.log("Error: " + errorThrown);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("back-to-top-btn");
  
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });
  
    btn.addEventListener("click", function () {
        document.documentElement.scrollTop = 0; 
    });
  });
