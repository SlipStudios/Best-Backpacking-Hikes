// JavaScript to handle form submission
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send data to server using fetch (AJAX)
    try {
        const response = await fetch('https://formspree.io/f/xldenokd', { // Replace with your endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Check if the response was successful
        if (response.ok) {
            document.getElementById('responseMessage').textContent = 'Message sent successfully!';
        } else {
            document.getElementById('responseMessage').textContent = 'Failed to send message.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').textContent = 'Error sending message.';
    }
});