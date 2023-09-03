// script.js
const movies = [
    { title: 'The Super Mario Bros', year: 2021, image: 'https://lh4.googleusercontent.com/s5ignnAJ0m2FBM5HJ7QLlneDCOfoJkXCZ3XXb4uTiy6mSnQiMioSqiw80jz9Ykcslhvi5Fxh5eL3ZjkkzBbS7bTGkSrbsrM_5vRZhPw0_tVSc2JQ_veygPCTwb1JG0VuhQ=w1280', link: 'movie1.html' },
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
