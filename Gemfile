source "https://rubygems.org"

# The site is built by .github/workflows/pages.yml with exactly these gems,
# so what you preview locally is what gets published.
gem "jekyll", "~> 4.4"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

gem "webrick"   # needed by `jekyll serve` on Ruby 3+

# Former standard-library gems that newer Rubies no longer bundle.
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
