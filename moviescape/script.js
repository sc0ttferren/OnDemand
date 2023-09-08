// script.js
const movies = [
    { title: 'The Super Mario Bros', genre: 'Adventure', image: 'movie1.jpg', link: 'movies/the-super-mario-bros' },
    { title: 'Monsters University', genre: 'Comedy', image: 'movie2.jpg', link: 'movies/monsters-university' },
    { title: 'Spiderman: Across The SpiderVerse', genre: 'Action', image: 'movie3.jpg', link: 'movies/spiderman-across-the-spiderverse' },
    { title: 'Blue Beetle', genre: 'Action', image: 'movie3.jpg', link: 'movies/blue-beetle' },
    { title: 'Cars', genre: 'Action', image: 'movie3.jpg', link: 'movies/cars' },
];

const movieList = document.getElementById('movie-list');

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
