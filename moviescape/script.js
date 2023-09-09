// script.js
const movies = [
    { title: 'The Super Mario Bros', genre: 'Adventure', image: 'movie1.jpg', link: 'movies/the-super-mario-bros' },
    { title: 'Monsters University', genre: 'Comedy', image: 'movie2.jpg', link: 'movies/monsters-university' },
    { title: 'Spiderman: Across The SpiderVerse', genre: 'Action', image: 'movie3.jpg', link: 'movies/spiderman-across-the-spiderverse' },
    { title: 'Blue Beetle', genre: 'Action', image: 'movie3.jpg', link: 'movies/blue-beetle' },
    { title: 'Cars', genre: 'Action', image: 'movie3.jpg', link: 'movies/cars' },
    // Add more movies as needed
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

// Generate a random value and set it as a cookie (if not already set)
const userpermKey = getCookie('userpermKey') || generateRandomValue();
setCookie('userpermKey', userpermKey, 18250); // 18250 days (50 years) expiration

// Calculate the number of rows and maximum movies per row
const numRows = Math.min(Math.ceil(movies.length / 5), 15);

// Create rows of movies
for (let row = 0; row < numRows; row++) {
    const movieRow = document.createElement('div');
    movieRow.classList.add('movie-row');

    for (let col = 0; col < 5; col++) {
        const movieIndex = row * 5 + col;
        if (movieIndex >= movies.length) break;

        const movie = movies[movieIndex];
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>Genre: ${movie.genre}</p>
            </a>
        `;
        movieRow.appendChild(movieCard);
    }

    movieList.appendChild(movieRow);
}
