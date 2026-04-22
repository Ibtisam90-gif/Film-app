// Step 1: Fetch data from TVMaze API
'use strict';
import './style.css';

let alleFilms = [];
let favorieten = JSON.parse(localStorage.getItem('favorieten')) || [];

// Data ophalen
async function haalFilms() {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();

  alleFilms = data.slice(0, 50);
  updateFilms();
}

// Films tonen
// Step 2: Display films in UI cards
function toonFilms(films) {
  const container = document.querySelector('.films');
  container.innerHTML = '';

  films.forEach(film => {
    const div = document.createElement('div');

    div.innerHTML = `
      <h2>${film.name}</h2>
      <img src="${film.image?.medium}" alt="${film.name}">
      <p>${film.genres.join(', ')}</p>
      <p>⭐ Rating: ${film.rating?.average ?? 'N/A'}</p>
      <button class="favBtn">
        ${favorieten.some(f => f.id === film.id) ? '❤️' : '🤍'}
      </button>
    `;

    const knop = div.querySelector('.favBtn');

    // FAVORIET CLICK
    knop.addEventListener('click', (e) => {
      e.stopPropagation(); // voorkomt popup

      const bestaatAl = favorieten.some(f => f.id === film.id);

      if (!bestaatAl) {
        favorieten.push(film);
      } else {
        favorieten = favorieten.filter(f => f.id !== film.id);
      }

      localStorage.setItem('favorieten', JSON.stringify(favorieten));

      updateFilms();
      toonFavorieten();
    });

    // POPUP CLICK
    // Step 7: Add popup modal and improve UI design
    div.addEventListener('click', () => {
      const modal = document.querySelector('#modal');
      const modalBody = document.querySelector('#modalBody');

      modalBody.innerHTML = `
        <h2>${film.name}</h2>
        <img src="${film.image?.medium}" alt="${film.name}">
        <p>${film.genres.join(', ')}</p>
        <p>⭐ Rating: ${film.rating?.average ?? 'N/A'}</p>
      `;

      modal.classList.remove('hidden');
    });

    container.appendChild(div);
  });
}

// COMBINATIE FUNCTIE
// Step 3: Implement search functionality
function updateFilms() {
  // Step 4: Add filtering by genre and sorting options
  const zoekTerm = document.querySelector('#zoekInput').value.toLowerCase();
  const gekozenGenre = document.querySelector('#genreSelect').value;
  const sortKeuze = document.querySelector('#sortSelect').value;

  let resultaat = [...alleFilms];

  if (zoekTerm !== '') {
    resultaat = resultaat.filter(film =>
      film.name.toLowerCase().includes(zoekTerm)
    );
  }

  if (gekozenGenre !== '') {
    resultaat = resultaat.filter(film =>
      film.genres.includes(gekozenGenre)
    );
  }

  if (sortKeuze === 'az') {
    resultaat.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortKeuze === 'za') {
    resultaat.sort((a, b) => b.name.localeCompare(a.name));
  }

  toonFilms(resultaat);
}

// Favorieten
// Step 5: Implement favorites with localStorage
function toonFavorieten() {
  const container = document.querySelector('#favorieten');
  container.innerHTML = '';

  favorieten.forEach(film => {
    const div = document.createElement('div');

    div.innerHTML = `
      ${film.name}
      <button class="removeBtn">❌</button>
    `;

    const removeBtn = div.querySelector('.removeBtn');

    removeBtn.addEventListener('click', () => {
      favorieten = favorieten.filter(f => f.id !== film.id);
      localStorage.setItem('favorieten', JSON.stringify(favorieten));
      toonFavorieten();
      updateFilms();
    });

    container.appendChild(div);
  });
}

// Theme
// Step 6: Add dark/light mode with system preference
const themeSelect = document.querySelector('#themeSelect');

themeSelect.addEventListener('change', () => {
  const keuze = themeSelect.value;

  if (keuze === 'dark') {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (keuze === 'light') {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'auto');
    checkSysteemThema();
  }
});

function checkSysteemThema() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  document.body.classList.toggle('dark', prefersDark);
}

function laadThema() {
  const opgeslagen = localStorage.getItem('theme');

  if (opgeslagen === 'dark') {
    document.body.classList.add('dark');
  } else if (opgeslagen === 'light') {
    document.body.classList.remove('dark');
  } else {
    checkSysteemThema();
  }
}

// Events
document.querySelector('#zoekInput').addEventListener('input', updateFilms);
document.querySelector('#sortSelect').addEventListener('change', updateFilms);
document.querySelector('#genreSelect').addEventListener('change', updateFilms);

document.querySelector('#closeModal')
  .addEventListener('click', () => {
    document.querySelector('#modal').classList.add('hidden');
  });

//Start
haalFilms();
toonFavorieten();
laadThema();