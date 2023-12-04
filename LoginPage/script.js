document.addEventListener('DOMContentLoaded', function() {
    var userField = document.getElementById('user');
    var passField = document.getElementById('pass');
    var EmailField = document.getElementById('Email');
    var userLabel = document.querySelector('label[for="user"]');
    var passLabel = document.querySelector('label[for="pass"]');
    var EmailLabel = document.querySelector('label[for="Email"]');

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

    EmailField.addEventListener('input', function() {
        if (EmailField.value !== '') {
            EmailLabel.style.display = 'none';
        } else {
            EmailLabel.style.display = 'block';
        }
    });

});
