// script.js

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

const userpermKey = getCookie('userpermKey');

if (!userpermKey) {
    // Cookie doesn't exist, so generate and set it
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 50); // Set expiration to 50 years from now
    const cookie = `userpermKey=${result};expires=${expires.toUTCString()};path=/;domain=.scottstheatres.vercel.app`;
    document.cookie = cookie;
}

// The rest of your code for creating movie cards
const movies = [
    { title: 'The Super Mario Bros', genre: 'Adventure', image: 'movie1.jpg', link: 'movies/the-super-mario-bros' },
    { title: 'Monsters University', genre: 'Comedy', image: 'movie2.jpg', link: 'movies/monsters-university' },
    { title: 'Spiderman: Across The SpiderVerse', genre: 'Action', image: 'movie3.jpg', link: 'movies/spiderman-across-the-spiderverse' },
    { title: 'Blue Beetle', genre: 'Action', image: 'movie3.jpg', link: 'movies/blue-beetle' },
    { title: 'Cars', genre: 'Action', image: 'movie3.jpg', link: 'movies/cars' },
];

const movieList = document.getElementById('movie-list');

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
