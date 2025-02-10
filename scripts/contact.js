document.getElementById("contact-btn").addEventListener("click", async function () {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value.trim();
    const message = document.getElementById("messageField").value;
    const button = document.getElementById("contact-btn");

    
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Prevent multiple submissions
    button.disabled = true;
    button.innerText = "Submitting...";

    const contactData = { name, email, message };

    try {
        const response = await fetch("https://portfolio-contact-mahin.onrender.com/api/v1/store-message/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("nameField").value = "";
            document.getElementById("emailField").value = "";
            document.getElementById("messageField").value = "";
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    } finally{
        // Re-enable button
        button.disabled = false;
        button.innerText = "Submit";
    }
});
