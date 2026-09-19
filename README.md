# autumnbranches studio

Static portfolio website for autumnbranches studio.

## Deploy with GitHub Pages

This repository is prepared for a root GitHub Pages site at:

`https://autumnbranchesstudio.github.io/`

1. Create a GitHub repository named `autumnbranchesstudio.github.io` under the `autumnbranchesstudio` account.
2. Upload/push the contents of this repository to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then save.
6. Wait for GitHub Pages to publish the site.

The site is plain HTML/CSS/JavaScript and has no build step. `.nojekyll` is included intentionally.

## Contact form

The homepage contact form submits to Formspree. The endpoint is already configured in `index.html`.

## Custom domain later

When a custom domain is ready, update the public-site URLs in `robots.txt`, `sitemap.xml`, and social metadata, then configure the domain in GitHub Pages. No `CNAME` file is included yet.
