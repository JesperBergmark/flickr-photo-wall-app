# Fotovägg-app

En responsiv webbapplikation som visar bilder från Flickrs publika API. Bilderna uppdateras automatiskt var 10:e sekund och kan användas som ett bildspel.

## Funktioner

- Sök efter bilder baserat på taggar
- Automatisk uppdatering var 10:e sekund
- Responsiv design (mobil, tablet, desktop)
- Animationer vid bildbyten
- Fungerar utan användarinteraktion (bildspelsläge)

## Tech Stack

- **React 18** med **TypeScript**
- **Vite** - Build tool
- **TanStack Query** - Data fetching och cachning
- **Tailwind CSS** - Styling
- **Framer Motion** - Animationer

JSONP används för att kringgå CORS-begränsningar i Flickr's API.

## Kom igång

### Förutsättningar

- Node.js 18+
- npm eller yarn

### Installation

```bash
# Klona projektet
git clone https://github.com/JesperBergmark/flickr-photo-wall-app.git
cd flickr-photo-wall-app

# Installera dependencies
npm install

# Starta utvecklingsserver
npm run dev
```

Applikationen öppnas på `http://localhost:5173`

### Bygg för produktion

```bash
npm run build
npm run preview
```

## Projektstruktur

Projektet följer **Atomic Design**:

- **Atoms** - Grundläggande komponenter (Button, Input, LoadingSpinner)
- **Molecules** - Sammansatta komponenter (SearchBar, PhotoCard)
- **Organisms** - Komplexa sektioner (PhotoGrid, Header)
- **Templates** - Sidlayouter (MainLayout)

State hanteras med `useState` och data-fetching med TanStack Query.

## Responsiv design

Grid-layout anpassar sig efter skärmstorlek:

- Mobil: 2 kolumner
- Tablet: 3-4 kolumner
- Desktop: 5 kolumner

Sökfältet stackas vertikalt på mobil och horisontellt på större skärmar.
