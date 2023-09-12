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
  let userpermKey = getCookie('userpermKey');

  // Function to generate a random 5-digit key
  function generateRandomKey() {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  // Generate and set the userpermKey if it doesn't exist
  if (!userpermKey) {
    userpermKey = generateRandomKey();
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 5); // Set expiration to 5 years from now
    const cookie = `userpermKey=${userpermKey};expires=${expires.toUTCString()};path=/;domain=.scottstheatres.vercel.app`;
    document.cookie = cookie;
  }

  // Display the user's key in the settings menu
  const userKeyElement = document.getElementById('user-key'); // Replace 'user-key' with the actual ID of the element
  userKeyElement.textContent = `Your Personal Key (don't share it!): ${userpermKey}`;
  
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

  // Define an array of banned keys (81654) - david admin panel key later (remove this)
  const bannedKeys = ['G0AAL', '81653', 'plslemmebanyou'];

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
    { title: 'Monsters Inc.', genre: 'Adventure', image: 'movie1.jpg', link: 'movies/monsters-inc' },
    { title: 'Monsters University', genre: 'Comedy', image: 'movie2.jpg', link: 'movies/monsters-university' },
    { title: 'Spiderman: A.T.SV', genre: 'Action', image: 'Spiderman: Across The SpiderVerse', link: 'movies/spiderman-across-the-spiderverse' },
    { title: 'Blue Beetle', genre: 'Action', image: 'movie3.jpg', link: 'movies/blue-beetle' },
  ];

  const movies2 = [
    { title: 'Elemental', genre: 'Drama', image: 'movie4.jpg', link: 'movies/elemental' },
    { title: 'Transformers: R.O.T.B', genre: 'Action', image: 'Transformers: Rise Of The Beasts', link: 'movies/transformers-rise-of-the-beasts' },
    { title: 'The Flash', genre: 'Adventure', image: 'movie4.jpg', link: 'movies/the-flash' },
    { title: 'Puss In Boots: TLW', genre: 'Adventure-Comedy', image: 'Puss In Boots: The Last Wish', link: 'movies/puss-in-boots-the-last-wish' },
    { title: 'Oppenheimer', genre: 'Destroyer Of Worlds', image: 'movie4.jpg', link: 'movies/oppenheimer' },

  ];

    const movies3 = [
    { title: 'Coco', genre: 'Adventure', image: 'movie4.jpg', link: 'movies/coco' },
    { title: 'Coming Soon!', genre: 'WIP', image: 'movie4.jpg', link: 'movies/' },
    { title: 'Coming Soon!', genre: 'WIP', image: 'movie4.jpg', link: 'movies/' },
    { title: 'Coming Soon!', genre: 'WIP', image: 'movie4.jpg', link: 'movies/' },
    { title: 'Coming Soon!', genre: 'WIP', image: 'movie4.jpg', link: 'movies/' },
      
  ];

  const movieList1 = document.getElementById('movie-list');
  const movieList2 = document.getElementById('movie-list-2');
  const movieList3 = document.getElementById('movie-list-3');

  function createMovieCards(movieList, movies) {
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <a href="${movie.link}">
          <img src="${movie.image}" alt="${movie.image}">
          <h2>${movie.title}</h2>
          <p>Genre: ${movie.genre}</p>
        </a>
      `;
      movieList.appendChild(movieCard);
    });
  }

  createMovieCards(movieList1, movies1);
  createMovieCards(movieList2, movies2);   
  createMovieCards(movieList3, movies3);

});
