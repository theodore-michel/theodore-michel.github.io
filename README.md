# Personal research website

My Jekyll site for GitHub Pages.
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

## Hidden sections (Blog, Adventures)

Blog and Adventures are switched off for now in `_config.yml`:

```yaml
sections:
  blog: false
  adventures: false
```

While a section is off, its pages, its nav link, the blog posts and the RSS feed are left out
of the site. You can keep editing `_posts/` and `_data/adventures.yml` in the meantime.
To see them locally while you work, run:

```bash
bundle exec jekyll serve --livereload --config _config.yml,_config_preview.yml
```

To publish a section, set it to `true` and push.

## Publishing

The site is live at **https://theodore-michel.github.io**, built from the public repository
`theodore-michel/theodore-michel.github.io` by `.github/workflows/pages.yml`.
Every push to `main` redeploys it within a minute or two; follow progress in the repo's
**Actions** tab.

## Preview locally

Needs Ruby 3+ (`brew install ruby` on macOS).

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install
bundle exec jekyll serve --livereload
```

Then open http://localhost:4000.
