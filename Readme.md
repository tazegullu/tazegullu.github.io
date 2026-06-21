# Arif Tazegüllü Portfolio Site

Static single-page portfolio website for GitHub Pages.

## What changed in this version

- Added Turkish / English language selection
- Added a persistent language switcher in the header
- Language preference is saved in the browser with `localStorage`
- Page title, meta description, navigation, sections, app cards, project cards and contact actions are translated
- Kept LinkedIn profile link: `https://www.linkedin.com/in/tazegullu/`
- Kept mobile app portfolio structure and app link placeholders
- Kept Questions App visible as the remaining legacy GitHub Pages project
- Legacy project list is cleaned and only the active remaining public project is kept

## Files

- `index.html` — page structure, bilingual translation markers and content
- `styles.css` — full responsive dark app-portfolio design with language switcher styles
- `script.js` — mobile navigation, reveal animation, active nav state, copy email and language switching
- `assets/favicon.svg` — favicon / brand icon

## Deploy to GitHub Pages

Copy these files into the root of `tazegullu.github.io` or another GitHub Pages repository, commit, and push.

## Update app links

Search for `App Store Soon`, `Google Play Soon`, `GitHub Soon`, and `Case Study Soon` in `index.html`. Replace the disabled placeholder links with real URLs when each app is published.

## Update translations

All English and Turkish text values are stored in `script.js` inside the `translations` object. Add new keys to both `en` and `tr` when adding new visible text to the page.


## Layout update

- Fixed top navigation: the name, language selector and navigation stay visible while scrolling.
