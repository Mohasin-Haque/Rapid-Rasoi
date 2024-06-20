document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // You can add your logic to send the form data to your server here
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Message: " + message);

        // Optionally, you can clear the form fields after submission
        form.reset();
    });
});
