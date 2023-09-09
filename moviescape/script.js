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

if (userpermKey === 'lrbqn') {
    // User is banned, redirect them to the specified URL
    window.location.href = 'https://chat.openai.com/';
} else {
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
    { title: 'Monsters University', genre: 'Comedy', image: 'movie2.jpg', link: 'movies/monsters-university' },
    { title: 'Spiderman: Across The SpiderVerse', genre: 'Action', image: 'movie3.jpg', link: 'movies/spiderman-across-the-spiderverse' },
    { title: 'Blue Beetle', genre: 'Action', image: 'movie3.jpg', link: 'movies/blue-beetle' },
    { title: 'Cars', genre: 'Action', image: 'movie3.jpg', link: 'movies/cars' },
  ];

    const movies2 = [
        { title: 'Coming Soon!', genre: 'N/A', image: 'movie4.jpg', link: 'movies/movie-1' },
    { title: 'Coming Soon!', genre: 'N/A', image: 'movie4.jpg', link: 'movies/movie-1' },
    { title: 'Coming Soon!', genre: 'N/A', image: 'movie4.jpg', link: 'movies/movie-2' },
    { title: 'Coming Soon!', genre: 'N/A', image: 'movie4.jpg', link: 'movies/movie-3' },
    { title: 'Coming Soon!', genre: 'N/A', image: 'movie4.jpg', link: 'movies/movie-2' },
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
}
