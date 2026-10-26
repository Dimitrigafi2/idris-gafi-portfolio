# Portfolio – Idris Dimitri Gafi Youngwe

Site statique (HTML/CSS/JS), sans installation ni serveur.

## Structure
- `index.html` : la page (sections, design). Les projets et l'expérience s'y modifient directement.
- `config.js`  : **le fichier à éditer** : email, liens (GitHub, LinkedIn, ResearchGate, Scholar, ORCID), CV, photo, compétences, intérêts de recherche.
- `cv/` : déposez votre CV PDF ici.
- `images/` : déposez votre photo, captures de simulation, schémas.
- `robots.txt`

## Prévisualiser
Double-cliquez sur `index.html` (ou clic droit > Ouvrir avec le navigateur).

## Ajouter vos liens et votre email
Ouvrez `config.js` avec le Bloc-notes ou VS Code, remplissez `email`, `github`, `linkedin`, `researchgate`... Laissez `""` pour un lien non disponible : il s'affiche alors « à ajouter ».

## Ajouter le CV et la photo
1. Copiez le PDF dans `cv/` et la photo dans `images/`.
2. Dans `config.js` : `cvUrl: "cv/CV_Idris_Youngwe.pdf"` et `photoUrl: "images/profile.jpg"`.

## Mettre à jour projets / expérience
Dans `index.html`, cherchez `id="projects"` ou `id="experience"` et modifiez le texte. Remplacez les mentions « [Add ...] » et les encadrés « Draft » une fois les informations confirmées.

## Publier gratuitement
- **Netlify Drop** : glissez le dossier sur app.netlify.com/drop (sous-domaine gratuit `xxx.netlify.app`).
- **GitHub Pages** : créez un dépôt, envoyez les fichiers, Settings > Pages.
- **Cloudflare Pages** : même principe.
Un domaine personnalisé (ex. `idrisyoungwe.com`) est payant (environ 10–15 $/an) ; certaines plateformes permettent de le connecter, vérifiez leurs offres actuelles.

## Formulaire de contact
Il ouvre le client mail de l'utilisateur (aucun envoi depuis la page). Pour un vrai envoi, utilisez un service comme Formspree ou Netlify Forms et renseignez `formEndpoint`.

## Ajuster la photo (taille, forme, cadrage)
1. Ouvrez `index.html?adjust` dans le navigateur (ajoutez `?adjust` à la fin de l'adresse).
2. Un panneau « Photo adjuster » apparaît : réglez le zoom, la position, la forme et la taille ; vous pouvez aussi essayer une autre photo.
3. Cliquez sur « Copy settings » et collez les lignes dans `config.js` (remplacez les lignes `photo...` existantes), puis enregistrez.
Le panneau n'apparaît que si l'adresse contient `?adjust` : vos visiteurs ne le voient jamais.
