# Portfolio site

Static site: `index.html`, `styles.css`, no build step.

## Deploy on GitHub Pages
1. Create a new public repository on GitHub. For a clean address, name it `<username>.github.io`.
2. Upload every file in this folder to the repository root (including `.nojekyll`).
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", select `main` and `/ (root)`, and save.
4. After a minute or two the site is live at `https://<username>.github.io/`. A repository with any other name is served at `https://<username>.github.io/<repo-name>/`.

## Custom domain (optional)
Buy a domain, add it under Settings, then Pages, then Custom domain, and add the DNS records GitHub shows. Turn on "Enforce HTTPS".

## Later
- Add case study pages and point the three case cards at them (currently they link to the contact section).
- Once the final URL is known, add an `og:image` and `og:url` tag for nicer link previews, and a `sitemap.xml`.
- The résumé PDF contains a phone number. Replace or remove `Maghi_Aravinth_GT_Resume.pdf` and its link in `index.html` if that should stay private.
