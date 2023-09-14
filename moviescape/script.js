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
handleBannedUser(userpermKey); // Assuming userpermKey is defined elsewhere

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
    { title: 'The Super Mario Bros', genre: 'Adventure', image: 'The Super Mario Bro', link: 'movies/the-super-mario-bros' },
    { title: 'Monsters Inc.', genre: 'Adventure', image: 'Monsters Inc.', link: 'movies/monsters-inc' },
    { title: 'Monsters University', genre: 'Comedy', image: 'Monsters University', link: 'movies/monsters-university' },
    { title: 'Spiderman: A.T.SV', genre: 'Action', image: 'Spiderman: Across The SpiderVerse', link: 'movies/spiderman-across-the-spiderverse' },
    { title: 'Blue Beetle', genre: 'Action', image: 'Blue Beetle', link: 'movies/blue-beetle' },

];

const movies2 = [
    { title: 'Elemental', genre: 'Drama', image: 'Elemental', link: 'movies/elemental' },
    { title: 'Transformers: R.O.T.B', genre: 'Action', image: 'Transformers: Rise Of The Beasts', link: 'movies/transformers-rise-of-the-beasts' },
    { title: 'The Flash', genre: 'Adventure', image: 'The Flash', link: 'movies/the-flash' },
    { title: 'Puss In Boots: TLW', genre: 'Adventure-Comedy', image: 'Puss In Boots: The Last Wish', link: 'movies/puss-in-boots-the-last-wish' },
    { title: 'Oppenheimer', genre: 'Destroyer Of Worlds', image: 'Oppenheimer', link: 'movies/oppenheimer' },

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
