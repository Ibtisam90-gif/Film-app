# CineScope

## Projectbeschrijving

CineScope is een interactieve single-page webapplicatie waarin gebruikers tv-series kunnen ontdekken via een externe API.
De applicatie laat gebruikers toe om data te verkennen, te zoeken, te filteren, te sorteren en op te slaan als favorieten.

## Functionaliteiten

* Zoekfunctie op naam van de serie
* Filter op genre
* Sorteren (A-Z, Z-A)
* Favorieten toevoegen en verwijderen
* Opslag van favorieten via LocalStorage
* Dark mode / Light mode / systeem voorkeur
* Detail popup bij klikken op een item
* Dynamische favoriet knop
* Responsive design

## API

Gebruikte API: https://api.tvmaze.com/shows

De API levert:
* Naam
* Genres
* Afbeelding
* Rating
* Status
* Releasedatum

## Gebruikte technologieën

* JavaScript (ES6)
* Fetch API
* Async & Await
* DOM manipulatie
* LocalStorage
* CSS (Flexbox)
* Vite

## Technische implementatie

### DOM manipulatie

* querySelector → elementen selecteren
* innerHTML → dynamisch content tonen
* addEventListener → interactie

### Modern JavaScript

* const en let
* template literals
* array methods (filter, sort)
* arrow functions
* ternary operator

### API & Data

* fetch → data ophalen
* JSON verwerken

### Opslag

* localStorage → favorieten bewaren
* thema voorkeur opslaan

## Installatie

1. Open project in VS Code
2. Run:

```bash
npm install
npm run dev
```

3. Open: http://localhost:5173/


## Screenshots

(Voeg hier screenshots toe van je applicatie)


## Bronnen

* TVMaze API
* MDN Web Docs
* ChatGPT (voor begeleiding en uitleg)


## Development Process

This project was built step by step, starting from API integration to advanced UI features such as filtering, sorting, favorites, and UI improvements.
