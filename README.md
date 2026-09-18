# Club Pickleball Alma — site (Vite + React)

## Démarrer
```
npm install
npm run dev
```
Ouvre http://localhost:5173

## Construire pour la production
```
npm run build
```
Le dossier `dist/` se déploie tel quel (Netlify, Vercel, GitHub Pages, hébergeur classique).

## Structure
- `index.html` — coquille HTML + polices Google
- `src/main.jsx` — point d'entrée
- `src/App.jsx` — logique : navigation, recherche, galerie, diaporama, écran d'ouverture
- `src/Template.jsx` — toute la mise en page (styles inline)
- `src/styles.css` — resets, keyframes, règles responsives, états de survol
- `public/assets/` — logo et photos

## Options
Dans `src/main.jsx`, on peut passer des props : `<App showIntro={false} showBanner={false} bannerText="…" />`

## Ajouter une photo
1. Copier l'image dans `public/assets/`
2. Ajouter une entrée dans `PHOTOS` (galerie) et/ou `HERO` (diaporama) dans `src/App.jsx`
