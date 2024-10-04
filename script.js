document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.trial-form');
    const firstNameInput = form.querySelector('input[placeholder="First name"]');
    const lastNameInput = form.querySelector('input[placeholder="Last name"]');
    const emailInput = form.querySelector('input[placeholder="Email address"]');
    const phoneNumberInput = form.querySelector('input[placeholder="Phone Number"]');
    const passwordInput = form.querySelector('input[placeholder="Create password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validation
        let isValid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{10}$/;

        // First Name and Last Name: Required fields
        if (!firstNameInput.value.trim()) {
            alert('First name is required.');
            isValid = false;
        }

        if (!lastNameInput.value.trim()) {
            alert('Last name is required.');
            isValid = false;
        }

        // Email: Must be a valid email format
        if (!emailPattern.test(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Phone Number: Must be a valid phone number format
        if (!phonePattern.test(phoneNumberInput.value.trim())) {
            alert('Please enter a valid 10-digit phone number.');
            isValid = false;
        }

        // Password: Minimum 8 characters
        if (passwordInput.value.trim().length < 8) {
            alert('Password must be at least 8 characters long.');
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // Gather form data
        const data = {
            first_name: firstNameInput.value.trim(),
            last_name: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            phone_number: phoneNumberInput.value.trim(),
            password: passwordInput.value.trim()
        };

        // Send form data to console
        console.log('Form submitted:', data);

        // Reset form
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.createElement('div');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '&#9776;';
    document.querySelector('.navbar').prepend(navToggle);
  
    const navLinks = document.querySelector('.nav-links');
    const navClose = document.createElement('div');
    navClose.className = 'nav-close';
    navClose.innerHTML = '&times;';
    navLinks.prepend(navClose);
  
    navToggle.addEventListener('click', function() {
      navLinks.classList.add('show');
    });
  
    navClose.addEventListener('click', function() {
      navLinks.classList.remove('show');
    });
  
    navLinks.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
        navLinks.classList.remove('show');
      }
    });
  });