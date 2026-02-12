# Fotovägg-app

En responsiv webbapplikation som visar en fotovägg med bilder från Flickrs publika API. Applikationen uppdateras automatiskt med nya bilder och fungerar som ett bildspel som kan visas på en skärm utan (eller med) användarinteraktion.

## Funktioner

- **Sökfunktion**: Sök efter bilder baserat på taggar
- **Automatisk uppdatering**: Foton uppdateras löpande var 10:e sekund
- **Responsiv design**: Fungerar på mobil, tablet/padda och desktop
- **Smidiga animationer**: Eleganta övergångar när bilder läggs till eller tas bort
- **Bildspelsläge**: Kan visas på skärm utan användarinput

## Teknisk Stack

### Core

- **React 18** - UI-bibliotek
- **TypeScript** - Typsäkerhet
- **Vite** - Build tool och dev server

### Data Fetching

- **TanStack Query (React Query)** - Data fetching med cachning och automatisk uppdatering

### Styling & Animation

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Kraftfulla och smidiga animationer

### Code Quality

- **ESLint** - Linting
- **TypeScript Strict Mode** - Maximal typsäkerhet

## Projektstruktur

Projektet följer **Atomic Design** metodologi

## Installation och Setup

### Förutsättningar

- Node.js (version 18 eller högre)
- npm eller yarn

### Steg 1: Klona projektet

```bash
git clone <repository-url>
cd flickr-photo-wall
```

### Steg 2: Installera dependencies

```bash
npm install
```

### Steg 3: Starta utvecklingsservern

```bash
npm run dev
```

Applikationen öppnas automatiskt på `http://localhost:5173`

## Tillgängliga Kommandon

```bash
# Starta development server
npm run dev

# Bygg för produktion
npm run build

# Förhandsgranska produktionsbygget
npm run preview

# Kör linting
npm run lint
```

## Designval

### Atomic Design

Projektet använder Atomic Design för att skapa en modulär och skalbar komponentstruktur:

- **Atoms**: Grundläggande building blocks (Button, Input)
- **Molecules**: Enklare sammansatta komponenter (SearchBar, PhotoCard)
- **Organisms**: Komplexa sektioner (PhotoGrid, Header)
- **Templates**: Sidlayouter (MainLayout)

### Data Fetching

**TanStack Query** används för att:

- Automatiskt hantera cachning
- Implementera automatisk polling (refetchInterval)
- Hantera loading och error states
- Minska duplicering av kod

### Animationer

**Framer Motion** ger:

- Deklarativa animationer
- Layout-animationer för grid-omorganisering
- Exit-animationer när bilder försvinner
- Smooth övergångar mellan states

## Automatisk Uppdatering

Applikationen använder React Query's `refetchInterval` för att automatiskt hämta nya foton var 10:e sekund. Detta kan konfigureras i `src/store/photoWallStore.ts`.

## Responsiv Design

Applikationen är helt responsiv med följande breakpoints:

### Grid Layout

- **Mobile (< 640px)**: 2 kolumner
- **Small/Tablet (≥ 640px)**: 3 kolumner
- **Medium/iPad (≥ 768px)**: 4 kolumner
- **Large/Desktop (≥ 1024px)**: 5 kolumner
- **Extra Large (≥ 1280px)**: 6 kolumner

### Spacing & Typography

- Adaptiv padding: mindre på mobil (3px), mer på desktop (16px+)
- Responsiv textstorlek för rubriker
- Touch-optimerade knappar med tillräckligt stort tryckområde
- Minskade gaps mellan bilder på mobil för bättre användning av skärmyta

### Mobile-First Features

- Sökfält och knapp stackas vertikalt på små skärmar
- Touch-aktiverade hover-effekter (`group-active`)
- Optimerade bildstorleker för olika enheter
- Sticky header som fungerar på alla skärmstorlekar

## Vidareutvecklingsmöjligheter

Projektet är strukturerat för enkel vidareutveckling:

1. **Lägg till fler filter**: Enkelt att utöka sökfunktionen
2. **Favoriter**: Implementera möjlighet att spara favoriter (localStorage)
3. **Fullskärmsläge**: Lägg till en fullscreen viewer för enskilda bilder
4. **Tema**: Dark/light mode toggle
5. **Inställningar**: Anpassningsbar uppdateringsfrekvens
6. **Delning**: Delning av social media
7. **Offline support**: PWA funktionalitet

## Testing

Projektet är förberett för testning med:

- Separata services för enkel mocking
- Rena komponenter utan side effects
- Custom hooks som kan testas isolerat

## Utvecklad Med

- Modern React best practices
- TypeScript strict mode
- Functional components och hooks
- Clean code principles
- Separation of concerns
