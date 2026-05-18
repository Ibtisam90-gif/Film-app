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

* `querySelector` → gebruikt om HTML-elementen te selecteren (bv. regel 134–141)
* `innerHTML` → gebruikt om dynamische filmdata weer te geven (bv. regel 22–30)
* `addEventListener` → gebruikt voor interactie zoals zoeken, favorieten en popup (bv. regel 35, 148–155)

### Modern JavaScript

* `const` → gebruikt voor variabelen die niet veranderen (bv. regel 20, 33, 72)
* `let` → gebruikt voor veranderlijke data zoals favorieten en films (regel 5–6)
* Template literals → gebruikt voor dynamische HTML (`${film.name}`) (regel 22–30)
* Array methods:

  * `filter()` → gebruikt bij zoeken en favorieten (regel 82, 108)
  * `sort()` → gebruikt voor sorteerfunctie (regel 93–97)
  * `some()` → controleert of favoriet al bestaat (regel 34)
  * `forEach()` → gebruikt om films weer te geven (regel 19)
* Arrow functions → gebruikt in event listeners en array methods
* Ternary operator (`? :`) → gebruikt voor ratings en favoriet icoon (regel 27, 28)

### Async & API

* `fetch()` → haalt data op van TVMaze API (regel 10)
* `async/await` → gebruikt voor asynchrone API-calls (regel 9)
* Promise syntax (`.then()`) → gebruikt als extra voorbeeld van Promise handling
* JSON verwerking → API-data wordt verwerkt en weergegeven in de applicatie

### Observer API

* `IntersectionObserver` → gebruikt om film cards zichtbaar te animeren tijdens scrollen

### Opslag

* `localStorage` → slaat favorieten en thema voorkeur op (regel 6, 45, 120)

### Error handling

* `try/catch` → voorkomt dat de applicatie crasht wanneer de API niet beschikbaar is
