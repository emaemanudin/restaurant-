document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    fetch('send_email.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(responseText => {
        document.getElementById('response').textContent = responseText;
        form.reset();
    })
    .catch(error => {
        document.getElementById('response').textContent = 'There was an error sending your message. Please try again later.';
    });
});
