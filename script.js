const generateBtn = document.getElementById('generate-btn');
const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.getElementById('copy-btn');
const strengthText = document.getElementById('strength');

const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+~`|}{[]:;?><,./-=\\';

// Function to generate password
function generatePassword(length = 12) {
    const characterSet = LOWERCASE_CHARS + UPPERCASE_CHARS + NUMBER_CHARS + SYMBOL_CHARS;
    let password = '';

    // Generate a password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

// Function to calculate password strength
function calculateStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++; // Increase for length
    if (/[A-Z]/.test(password)) strength++; // Contains uppercase letters
    if (/[0-9]/.test(password)) strength++; // Contains numbers
    if (/[^a-zA-Z0-9]/.test(password)) strength++; // Contains symbols

    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Medium';
    if (strength >= 3) return 'Strong';
    return 'Weak';
}

// Event listener for generating a password
generateBtn.addEventListener('click', () => {
    const password = generatePassword();
    passwordDisplay.value = password;

    // Update strength
    const strength = calculateStrength(password);
    strengthText.textContent = strength;
});

// Event listener for copying the password to clipboard
copyBtn.addEventListener('click', () => {
    passwordDisplay.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});