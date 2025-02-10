document.getElementById("contact-btn").addEventListener("click", async function () {
    const name = document.getElementById("nameField").value;
    const email = document.getElementById("emailField").value;
    const message = document.getElementById("messageField").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

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
    }
});
