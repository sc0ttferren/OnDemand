// script.js
const movies = [
    { title: 'The Super Mario Bros', genre: Adventure, image: 'movie1.jpg', link: 'movie1.html' },
    { title: 'Movie 2', genre: 2022, image: 'movie2.jpg', link: 'movie2.html' },
    { title: 'Movie 3', genre: 2023, image: 'movie3.jpg', link: 'movie3.html' },
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
        <a href="${movie.link}">
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>Genres: ${movie.genre}</p>
        </a>
    `;
    movieList.appendChild(movieCard);
});
