# The People Who Shaped This Chapter

A warm, interactive farewell website — part constellation, part memory book, part
personal time capsule. Built with **React + Vite** and **Framer Motion**.

Sections:

1. **Opening hero** — an animated introduction.
2. **Interactive constellation** — clickable stars, one per coworker, each with a
   personal message.
3. **Four-year timeline** — a lesson highlighted for each year.
4. **Things I'm taking with me** — draggable/clickable cards you pack into a suitcase.
5. **Closing thank-you** — with LinkedIn and email buttons.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start local dev server (http://localhost:5173)
npm run build    # create a production build in /dist
npm run preview  # preview the production build locally
```

> Requires Node.js 18+.

---

## How to personalize everything

**All editable content lives in one file:** [`src/data.js`](src/data.js).
You do not need to touch any other file for normal edits.

### 1. Change the opening & closing text
In `src/data.js`, edit the `hero` and `closing` objects.

### 2. Add or edit people (the constellation)
Edit the `people` array. Each person looks like this:

```js
{
  id: 7,                          // any unique number
  name: 'Jordan Rivera',
  role: 'My first manager',       // optional short label
  message: 'Thank you for ...',   // your personal note
  photo: null,                    // or '/jordan.jpg' — see below
  x: 25,                          // horizontal position, 0–100 (%)
  y: 40,                          // vertical position, 0–100 (%)
}
```

- To **add** a person, copy an existing block and change the values (give it a new `id`).
- To **remove** a person, delete their block.
- `x` / `y` place the star in the sky — tweak until the layout feels balanced.

### 3. Add photos
1. Drop the image file into the **`public/`** folder (e.g. `public/jordan.jpg`).
2. Reference it in `data.js` with a leading slash: `photo: '/jordan.jpg'`.
3. Leave `photo: null` to show an elegant initial instead.

Photos also work for the person cards automatically.

### 4. Edit the timeline lessons
Edit the `timeline` array — change any `year`, `label`, or `lesson`.

### 5. Edit the suitcase cards
Edit the `takeaways` array. Each card has a `label` and an emoji `icon`.

### 6. Set your contact links
In `src/data.js`, update `site.linkedInUrl` and `site.email`.

---

## Accessibility & keyboard navigation

- Every interactive element is a real `<button>` / `<a>` and is keyboard reachable
  (`Tab` to move, `Enter`/`Space` to activate).
- The person modal closes with **Escape** and moves focus to the close button.
- Cards can be packed by pressing **Enter** (dragging is an optional enhancement).
- `prefers-reduced-motion` is respected — animations are minimized for users who
  request it.
- Color contrast follows the soft blue-gray (`#405A7D`) palette on a warm neutral
  background.

---

## Deploying

The site is a static build (`/dist`) — deploy it anywhere.

### Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output `dist`. Deploy.

### Netlify
1. Push to GitHub, then "Add new site" → "Import an existing project".
2. Build command: `npm run build`. Publish directory: `dist`.
   (A `netlify.toml` is already included.)

### GitHub Pages
1. In `vite.config.js`, set `base: '/<your-repo-name>/'`.
2. Build: `npm run build`.
3. Publish the `dist/` folder to the `gh-pages` branch — for example:
   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d dist
   ```
4. In your repo settings, enable Pages from the `gh-pages` branch.

---

## Project structure

```
farewell-site/
├─ public/                 # put photos here
├─ src/
│  ├─ data.js              # ← EDIT EVERYTHING HERE
│  ├─ App.jsx              # composes the sections
│  ├─ main.jsx             # app entry
│  ├─ components/
│  │  ├─ Hero.jsx
│  │  ├─ Constellation.jsx
│  │  ├─ Timeline.jsx
│  │  ├─ Takeaways.jsx
│  │  └─ Closing.jsx
│  └─ styles/
│     ├─ global.css        # design tokens + base styles
│     └─ components.css    # section styles
├─ index.html
├─ vite.config.js
└─ netlify.toml
```

---

## Notes

- No backend, no tracking, no confidential assets — just static files.
- The design is original and does not use Microsoft branding.
