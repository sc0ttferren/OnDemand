// settings-ui.js

const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');

// Toggle the settings menu when the settings icon is clicked
settingsIcon.addEventListener('click', () => {
 settingsMenu.classList.toggle('active');
});

// Close the settings menu when clicking outside of it
document.addEventListener('click', (event) => {
 if (!settingsIcon.contains(event.target) && !settingsMenu.contains(event.target)) {
 settingsMenu.classList.remove('active');
 }
});
