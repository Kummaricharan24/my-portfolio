// =========================================
// MOBILE NAVIGATION
// =========================================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// =========================================
// CONTACT FORM VALIDATION
// =========================================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    const fields = [
        { field: nameField, error: nameError },
        { field: emailField, error: emailError },
        { field: messageField, error: messageError }
    ];

    fields.forEach(function ({ field, error }) {
        error.textContent = "";
        field.removeAttribute("aria-invalid");
    });
    successMessage.textContent = "";

    let isValid = true;
    let firstInvalidField = null;

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const message = messageField.value.trim();

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        nameField.setAttribute("aria-invalid", "true");
        isValid = false;
        firstInvalidField = firstInvalidField || nameField;
    }

    if (email === "") {
        emailError.textContent = "Please enter your email.";
        emailField.setAttribute("aria-invalid", "true");
        isValid = false;
        firstInvalidField = firstInvalidField || emailField;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            emailField.setAttribute("aria-invalid", "true");
            isValid = false;
            firstInvalidField = firstInvalidField || emailField;
        }
    }

    if (message === "") {
        messageError.textContent = "Please enter your message.";
        messageField.setAttribute("aria-invalid", "true");
        isValid = false;
        firstInvalidField = firstInvalidField || messageField;
    }

    if (!isValid) {
        firstInvalidField.focus();
        return;
    }

    successMessage.textContent = "Thank you! Your message has been submitted.";
    contactForm.reset();
});

// =========================================
// CURRENT YEAR
// =========================================
const footerYear = document.querySelector(".footer p");
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Kummari Charan. All rights reserved.`;
}