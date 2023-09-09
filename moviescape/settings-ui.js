// settings-ui.js

const settingsIcon = document.getElementById('settings-icon');
const settingsMenu = document.getElementById('settings-menu');

// Toggle the settings menu when the settings icon is clicked
settingsIcon.addEventListener('click', () => {
 settingsMenu.classList.toggle('active');
});
