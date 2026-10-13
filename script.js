
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const customerName =
        document.querySelector("#customer-name").value.trim();

    formStatus.textContent =
        `Thanks, ${customerName}! Your demo enquiry was checked, but not sent or saved.`;
});
