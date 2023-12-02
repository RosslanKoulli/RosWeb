document.addEventListener('DOMContentLoaded', function() {
    var userField = document.getElementById('user');
    var passField = document.getElementById('pass');
    var userLabel = document.querySelector('label[for="user"]');
    var passLabel = document.querySelector('label[for="pass"]');

    // Add event listeners for input fields
    userField.addEventListener('input', function() {
        if (userField.value !== '') {
            userLabel.style.display = 'none'; 
        } else {
            userLabel.style.display = 'block';
        }
    });

    passField.addEventListener('input', function() {
        if (passField.value !== '') {
            passLabel.style.display = 'none';
        } else {
            passLabel.style.display = 'block';
        }
    });
});
