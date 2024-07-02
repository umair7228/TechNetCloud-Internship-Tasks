const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
const createAccountButton = document.getElementById('createAccountButton') as HTMLButtonElement;

loginButton.addEventListener('click', () => {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    // Implement login logic here
    console.log('Logging in with:', email, password);
});

createAccountButton.addEventListener('click', () => {
    // Implement account creation logic here
    console.log('Creating a new account');
});
