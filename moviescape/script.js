// Function to check if a cookie with the given name exists
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

document.addEventListener('DOMContentLoaded', function () {
  const userpermKey = getCookie('userpermKey');

  // Function to send a message to a Discord webhook
  function sendToDiscordWebhook(message) {
    const webhookUrl = 'https://discord.com/api/webhooks/1150191042134540398/Q_ZV-v3NWy87SP3xN4mHXDEyVFYwivDPcvbs-t4_bLnroSHBcBqTi-Mn3kAEo84EaFhL';
    const payload = { content: message };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          console.log('Message sent to Discord successfully.');
        } else {
          console.error('Failed to send message to Discord.');
        }
      })
      .catch(error => {
        console.error('Error sending message to Discord:', error);
      });
  }

  // Define an array of banned keys
  const bannedKeys = ['G0AAL', 'NolPEX', 'YetAnotherBannedKey'];

  // Function to check if the user's key is banned
  function isBanned(userKey) {
    return bannedKeys.includes(userKey);
  }

// Function to handle banned users
function handleBannedUser(userKey) {
  if (isBanned(userKey)) {
    // User is banned, redirect them to the specified URL
    window.location.href = 'https://chat.openai.com/';
    sendToDiscordWebhook(`**Banned** User Key Attempt: ${userKey}`);
  } else {
    // Key is not banned, send the "User Key Loaded" message
    sendToDiscordWebhook(`User Key Loaded: ${userKey}`);
  }
}

// Check if the user's key is banned and send the appropriate message
handleBannedUser(userpermKey);


  // Function to toggle settings menu visibility
  const settingsLink = document.getElementById('settings-link');
  const settingsMenu = document.getElementById('settings-menu');

  settingsLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the link from navigating

    // Toggle the visibility of the settings menu
    if (settingsMenu.style.display === 'block') {
      settingsMenu.style.display = 'none';
    } else {
      settingsMenu.style.display = 'block';
    }
  });

  // The rest of your code for creating movie cards
  const movies1 = [
    { title: 'The Super Mario Bros', genre: 'Adventure', image: 'movie1.jpg', link: 'movies/the-super-mario-bros' },
    // Add more movie objects as needed
  ];

  const movies2 = [
    { title: 'Coming Soon!', genre: 'N/A', image: 'movie4.jpg', link: 'movies/movie-1' },
    // Add more movie objects as needed
  ];

  const movieList1 = document.getElementById('movie-list');
  const movieList2 = document.getElementById('movie-list-2');

  function createMovieCards(movieList, movies) {
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <a href="${movie.link}">
          <img src="${movie.image}" alt="${movie.title}">
          <h2>${movie.title}</h2>
          <p>Genre: ${movie.genre}</p>
        </a>
      `;
      movieList.appendChild(movieCard);
    });
  }

  createMovieCards(movieList1, movies1);
  createMovieCards(movieList2, movies2);
});
