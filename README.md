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

The code lives in the **private** repository `theodore-michel/personal-website`, and
nothing is published yet. (A repo named `<username>.github.io` gets GitHub Pages turned on
automatically, which can't be switched off. That's why it has a different name for now.)

When the content is ready:

1. **Settings → General**: rename the repository to `theodore-michel.github.io`.
2. **Settings → General → Danger Zone → Change visibility**: make it **public**
   (a free GitHub plan only publishes Pages from public repositories).
3. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
4. **Actions → "Deploy site to GitHub Pages" → Run workflow** (or push any commit).
   The site goes live at `https://theodore-michel.github.io` a minute or two later,
   and every later push to `main` redeploys it.

The workflow in `.github/workflows/pages.yml` skips deployment while the repo is private,
so pushing work-in-progress edits before then is safe.

## Preview locally

Needs Ruby 3+ (`brew install ruby` on macOS).

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000.
