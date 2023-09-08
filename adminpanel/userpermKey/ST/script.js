// Function to generate a random 5-character string
function generateRandomValue() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Function to set a cookie with the generated value
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 50); // Set expiration to 50 years from now
    const cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=.scottstheatres.vercel.app`;
    document.cookie = cookie;
}

// Generate a random value and set it as a cookie
const userpermKey = generateRandomValue();
setCookie('userpermKey', userpermKey, 18250); // 18250 days (50 years) expiration
