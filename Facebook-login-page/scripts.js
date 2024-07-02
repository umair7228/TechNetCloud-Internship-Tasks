"use strict";
const loginButton = document.getElementById('loginButton');
const createAccountButton = document.getElementById('createAccountButton');
loginButton.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Implement login logic here
    console.log('Logging in with:', email, password);
});
createAccountButton.addEventListener('click', () => {
    // Implement account creation logic here
    console.log('Creating a new account');
});
