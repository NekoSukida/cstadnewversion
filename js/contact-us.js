document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(this);

        // Fetch API call
        fetch('your_api_endpoint', {
            method: 'POST', // or 'GET'
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Handle the API response
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});