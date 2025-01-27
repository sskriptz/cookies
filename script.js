// Function to save input data to a cookie
function saveInput() {
    const userInput = document.getElementById('userInput').value;
    document.cookie = `username=${userInput}; max-age=3600`; // Cookie expires in 1 hour
    showUserInput();
}

// Function to read cookie and display it
function showUserInput() {
    const cookies = document.cookie.split('; ');
    const usernameCookie = cookies.find(cookie => cookie.startsWith('username='));

    if (usernameCookie) {
        const username = usernameCookie.split('=')[1];
        document.getElementById('output').innerText = `Hello, ${username}!`;
    }
}

// Show user input if available when page loads
window.onload = showUserInput;
