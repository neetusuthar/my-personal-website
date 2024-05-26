document.addEventListener("DOMContentLoaded", function() {
    // Function to validate the contact form
    function validateForm(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form inputs
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Validate form inputs
        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email.");
            return;
        }

        if (message.trim() === "") {
            alert("Please enter your message.");
            return;
        }

        // If all inputs are valid, submit the form (You can replace this with your form submission logic)
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset(); // Reset the form fields
    }

    // Add event listener to the contact form submit button
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", validateForm);
	
	
	
	
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
	