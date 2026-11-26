# A Little Place for Us

A quiet, sincere digital letter for my babyy, cutiepie, my princess, and my love.

**Tagline:** *A little reminder that you were never expected to be perfect.*

This is a personal, single-page website meant to express care, understanding, and honesty — without pressure or guilt.

---

## What’s included

```
├── index.html      # Main page (all content lives here)
├── style.css       # Styles, colors, animations
├── script.js       # Stars, petals, card flips, music toggle
├── assets/         # Put your photos (and optional music) here
└── README.md       # This file
```

---

## How to customize

### 1. Change the text
Open `index.html`. Every major section is clearly marked with HTML comments like:

```html
<!-- EDITABLE: This is the main personal letter... -->
```

You can safely edit the paragraphs inside those sections.

### 2. Add your real photos
1. Place your images inside the `assets/` folder  
   (example names: `photo1.jpg`, `photo2.jpg`, …)
2. In `index.html`, find the gallery section and replace each placeholder:

```html
<!-- Before -->
<div class="photo-placeholder" data-label="Photo 1">
  <span>Your photo here</span>
</div>

<!-- After -->
<img src="assets/photo1.jpg" alt="A quiet moment together" loading="lazy"
     style="width:100%;height:100%;object-fit:cover;border-radius:12px;">
```

Also update the `<figcaption>` text under each photo.

### 3. Optional soft background music
1. Add a gentle track (mp3 or ogg) to `assets/`, e.g. `soft-piano.mp3`
2. In `index.html`, uncomment and update the `<source>` line inside the `<audio>` tag:

```html
<audio id="bg-music" loop preload="none">
  <source src="assets/soft-piano.mp3" type="audio/mpeg">
</audio>
```

Music starts **off** by default. The floating ♪ button appears only when a track is present.

### 4. Colors
Open `style.css` and look at the `:root` variables at the top. You can adjust:

- `--bg` — deep midnight blue background
- `--cream` — warm cream text
- `--pink` — dusty pink accents
- `--burgundy` — deeper accent

---

## Deploy on GitHub Pages (free)

1. Create a new repository on GitHub (public or private).
2. Upload all the files (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`).
3. Go to the repository **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Select branch `main` (or `master`) and folder `/ (root)`.
6. Click **Save**.

After a minute or two your site will be live at:

```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

You can also drag the whole folder into [Netlify Drop](https://app.netlify.com/drop) for an instant preview link.

---

## Local preview

Just open `index.html` in any modern browser.  
No build step or server is required.

---

## Design notes

- Mobile-first and fully responsive
- Soft animated stars + floating petals (respects `prefers-reduced-motion`)
- Accessible focus states and keyboard-friendly cards
- No external frameworks — pure HTML, CSS, and vanilla JavaScript
- GitHub Pages ready

Made with care.  
No pressure. Just honesty.
