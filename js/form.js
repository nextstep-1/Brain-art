document.getElementById("contact_form").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from refreshing the page

    let userData = {
        name: document.getElementById("form_name").value,
        email: document.getElementById("form_email").value,
        subject: document.getElementById("form_subject").value,
        phone: document.getElementById("form_phone").value,
        message: document.getElementById("form_message").value
    };

    let users = JSON.parse(localStorage.getItem("users")) || []; // Get stored users or empty array

    if (users.length >= 120) {
        users.shift(); // Remove the oldest entry if storage exceeds 120
    }

    users.push(userData); // Add new user data

    localStorage.setItem("users", JSON.stringify(users)); // Save updated data to localStorage

    alert("Your message has been saved!"); // Show success message

    this.reset(); // Clear form
});