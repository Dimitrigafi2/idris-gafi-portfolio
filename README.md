# Portfolio: Idris Dimitri Gafi Youngwe

Static website (HTML/CSS/JS). No installation or server needed.

## Structure
- `index.html`: the page (sections and design). Projects and experience are edited directly here.
- `config.js`: **the main file to edit**: email, profile links (GitHub, LinkedIn, ResearchGate, Scholar, ORCID), CV path, photo settings, skills, research interests.
- `cv/`: your CV (PDF).
- `images/`: your photo, simulation screenshots, diagrams.
- `robots.txt`

## Preview locally
Double-click `index.html` (or right-click > Open with your browser).

## Add or change links and email
Open `config.js` in a text editor, then fill in `email`, `github`, `linkedin`, `researchgate`, and so on. Leave a link empty to hide it from the page.

## CV and photo
1. Put the PDF in `cv/` and the photo in `images/`.
2. In `config.js`, set `cvUrl: "cv/YOUR_CV.pdf"` and `photoUrl: "images/YOUR_PHOTO.jpg"`.

## Adjust the photo (size, shape, framing)
1. Open `index.html?adjust` in your browser (add `?adjust` at the end of the address).
2. A "Photo adjuster" panel appears: set zoom, position, shape and size. You can also try another photo.
3. Click "Copy settings" and paste the lines into `config.js`, replacing the existing `photo...` lines. Save.
The panel appears whenever the URL contains `?adjust`; anyone who opens that URL can use it. It only changes the local photo preview and does not save changes automatically.

## Update projects and experience
In `index.html`, search for `id="projects"` or `id="experience"` and edit the text. Remove any private notes before publishing.

## Publish for free
- **GitHub Pages:** Settings > Pages > Deploy from a branch > `main` / `(root)`. On a free account the repository must be public.
- **Netlify Drop:** drag the folder onto app.netlify.com/drop.
- **Cloudflare Pages:** same idea.
A custom domain is paid (roughly $10-15 per year); hosting stays free.

## Contact form
It opens the visitor's email app with the message pre-filled; nothing is sent from the page itself. A form service is not currently connected.
