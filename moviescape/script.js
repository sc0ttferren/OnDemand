// script.js
const movies = [
    { title: 'The Super Mario Bros', genre: 'Adventure', image: 'movie1.jpg', link: 'moviescape/movies/the-super-mario-bros' },
    { title: 'Movie 2', genre: 'Action', image: 'movie2.jpg', link: 'movie2.html' },
    { title: 'Movie 3', genre: 'Comedy', image: 'movie3.jpg', link: 'movie3.html' },
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
