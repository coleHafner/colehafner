# Cole Hafner blog starter

Standalone Astro blog for **https://colehafner.dev**, hosted on GitHub Pages. This starter does not modify TCG Set. No repository or domain settings have been changed yet.

## Run locally

Install Node.js 22.23.4 or newer (or use `nvm install` with the included `.nvmrc`).

```sh
npm ci
npm run dev
```

Open the address printed by Astro. `npm run build` produces `dist`; `npm run preview` serves that output locally.

## Write a post

Create `posts/my-first-post.md`:

```md
---
title: "My first post"
description: "A short summary for the post list and search engines."
date: 2026-10-26
tags: [notes]
draft: false
---

Your Markdown content goes here.
```

The filename becomes `/posts/my-first-post/`. Required fields: title, description and date. Tags default to an empty list; draft defaults to false. Set `draft: true` to exclude a post from pages and RSS. Dates are displayed in UTC. Replace the sample Hello World post before publishing; it is placeholder content, not your biography.

Images can go in `public/images/`, referenced as `![Description](/images/photo.jpg)`. The starter supports Markdown; MDX can be added later with `npx astro add mdx` and an updated loader pattern.

## Create the GitHub repository

Create an empty GitHub repository (for example `colehafner-blog`), then put the **contents** of this folder at its root, including `.github/workflows/deploy.yml`, `.gitignore` and `package-lock.json`. Do not upload this ZIP itself as the website. A local Git client is the easiest way to include hidden folders.

Use `main` as the default branch. In the repository choose **Settings → Pages → Build and deployment → Source → GitHub Actions**. Push to `main` or run the deployment workflow from Actions. Your GitHub plan must support Pages for the repository visibility you choose (public repositories support it on GitHub Free).

## Connect colehafner.dev

First verify domain ownership under your GitHub account's **Settings → Pages** and add the requested TXT record at your registrar. This reduces domain takeover risk. Then set the repository's **Settings → Pages → Custom domain** to `colehafner.dev`.

At the registrar replace conflicting apex records with these GitHub Pages records:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Optional IPv6 records (AAAA at `@`): `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

For `www`, add a CNAME pointing to **YOUR-GITHUB-USERNAME.github.io** (replace with your actual GitHub username, not a repository path). Avoid wildcard DNS records. Keep unrelated email records.

Wait for GitHub's DNS check and certificate, then enable **Enforce HTTPS**. `.dev` requires HTTPS in browsers. DNS and certificate issuance may take up to 24 hours. The included `public/CNAME` is copied to the output, but you still need to configure the custom domain in GitHub's Pages settings.

After setup, pushing Markdown changes to `main` publishes them automatically. The workflow, not this ZIP download, performs deployment. No credentials or hosting fees are built into this starter.

References: https://docs.astro.build/ and https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
