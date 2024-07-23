document.getElementById('task1Form').addEventListener('submit', function(event) {
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Name is required');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email address');
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10,12}$/;
    if (!phonePattern.test(phone)) {
        alert('Invalid phone number');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
