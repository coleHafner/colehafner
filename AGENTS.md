# Blog architecture
- This is a standalone static Astro site, separate from TCG Set; static output supports GitHub Pages without a server.
- Keep posts in the root posts folder and validate them through the content collection schema so content errors fail before deployment.
- Filter drafts from pages and RSS so unpublished entries never appear in public output.
- Deploy through GitHub Actions with a lockfile and fixed Node version so local and hosted builds use the same dependencies.
