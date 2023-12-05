document.addEventListener('DOMContentLoaded', () => {
    var userField = document.getElementById('user');
    var passField = document.getElementById('pass');
    var EmailField = document.getElementById('Email');
    var AgeField = document.getElementById('Age');
    var userLabel = document.querySelector('label[for="user"]');
    var passLabel = document.querySelector('label[for="pass"]');
    var EmailLabel = document.querySelector('label[for="Email"]');
    var AgeLabel = document.querySelector('label[for="Age"]');
    // Add event listeners for input fields
    userField.addEventListener('input', () => {
        if (userField.value !== '') {
            userLabel.style.display = 'none'; 
        } else {
            userLabel.style.display = 'block';
        }
    });

    passField.addEventListener('input', () => {
        if (passField.value !== '') {
            passLabel.style.display = 'none';
        } else {
            passLabel.style.display = 'block';
        }
    });

    EmailField.addEventListener('input', () => {
        if (EmailField.value !== '') {
            EmailLabel.style.display = 'none';
        } else {
            EmailLabel.style.display = 'block';
        }
    });

    AgeField.addEventListener('input', () => {
        if (AgeField.value !== '') {
            AgeLabel.style.display = 'none';
        } else {
            AgeLabel.style.display = 'block';
        }
    });

});
