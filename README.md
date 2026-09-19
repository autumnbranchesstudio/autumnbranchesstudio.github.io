# autumnbranches studio

Static portfolio website for autumnbranches studio.

## Live site

`https://autumnbranchesstudio.com/`

The site is hosted on GitHub Pages from the `main` branch of the `autumnbranchesstudio.github.io` repository. The custom domain is configured through the included `CNAME` file.

## SEO

The site includes:

- canonical URLs on the custom domain
- Open Graph and Twitter/X sharing metadata
- unique 1200×630 social preview images for the main pages and each concept study
- Schema.org JSON-LD structured data
- `robots.txt` and `sitemap.xml`
- page-specific titles and meta descriptions
- image dimensions plus lazy-loading for lower-page case-study imagery
- `site.webmanifest` and `llms.txt`

After deployment, submit `https://autumnbranchesstudio.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Analytics

`assets/js/analytics.js` supports either Plausible or GA4, but tracking is intentionally disabled until a real account/measurement ID is available. Each HTML page currently sets:

```js
window.AUTUMNBRANCHES_ANALYTICS={provider:"none"};
```

To use Plausible, change it to:

```js
window.AUTUMNBRANCHES_ANALYTICS={provider:"plausible",domain:"autumnbranchesstudio.com"};
```

To use GA4, change it to:

```js
window.AUTUMNBRANCHES_ANALYTICS={provider:"ga4",id:"G-XXXXXXXXXX"};
```

Do not invent a GA4 ID. Use the Measurement ID from the actual Google Analytics property.

## Contact form

The homepage contact form submits to the configured Formspree endpoint.
