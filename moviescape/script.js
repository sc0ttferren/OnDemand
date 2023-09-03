// script.js
const movies = [
    { title: 'The Super Mario Bros', year: 2021, image: 'https://github-production-user-asset-6210df.s3.amazonaws.com/100329425/265240578-6df0b244-afa9-4df8-9297-3cd0d8362900.jpg', link: 'movie1.html' },
    { title: 'Movie 2', year: 2022, image: 'movie2.jpg', link: 'movie2.html' },
    { title: 'Movie 3', year: 2023, image: 'movie3.jpg', link: 'movie3.html' },
];

const movieList = document.getElementById('movie-list');

movies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.innerHTML = `
        <a href="${movie.link}">
            <img src="${movie.image}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>Year: ${movie.year}</p>
        </a>
    `;
    movieList.appendChild(movieCard);
});
