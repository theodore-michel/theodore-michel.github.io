# Personal research website

A Jekyll site for GitHub Pages, modeled on [16lemoing.github.io](https://16lemoing.github.io/).
Pages: **Home** (bio, current work, CV at a glance, news), **Research** (projects,
publications & preprints, talks), **Blog**, **CV** (inline PDF + download) and **Adventures**.

## Where to edit things

| What | File |
| --- | --- |
| Name, title, affiliation, photo path, social links, email | `_config.yml` |
| Bio paragraph | `index.html` |
| Profile picture | put `assets/img/profile.jpg`, then set `author.photo` in `_config.yml` |
| CV PDF | replace `assets/cv/cv.pdf` (keep the filename) |
| CV summary (education, experience, awards, skills) | `_data/cv.yml` |
| Current and past projects | `_data/projects.yml` |
| Publications and preprints | `_data/publications.yml` (thumbnails go in `assets/img/pubs/`) |
| Talks | `_data/talks.yml` |
| News on the home page | `_data/news.yml` |
| Adventures | `_data/adventures.yml` (photos go in `assets/img/adventures/`) |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Colors and fonts | top of `assets/css/style.css` (`--accent`, etc.) |

Search the repo for `TODO` to find every placeholder.

## Publish on GitHub Pages

1. Create a **public** GitHub repository named exactly `<your-username>.github.io`.
2. Push this folder to it:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The site goes live at `https://<your-username>.github.io` a minute or two later.
   Every later push to `main` redeploys it automatically.

If the repository has a different name, the site is served from
`https://<your-username>.github.io/<repo-name>/`. The workflow sets the base URL for you.

## Preview locally

Needs Ruby 3+ (`brew install ruby` on macOS).

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000.
