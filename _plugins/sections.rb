# Leaves out whole sections of the site (pages, nav link, posts, feed) when
# they're switched off under `sections:` in _config.yml.
SECTION_PATHS = {
  "blog"       => "/blog/",
  "adventures" => "/adventures/",
}.freeze

def hidden_section_prefixes(site)
  toggles = site.config["sections"] || {}
  SECTION_PATHS.select { |name, _| toggles[name] == false }.values
end

Jekyll::Hooks.register :site, :post_read do |site|
  hidden = hidden_section_prefixes(site)
  next if hidden.empty?

  site.pages.reject! { |p| hidden.any? { |prefix| p.url.start_with?(prefix) } }
  site.posts.docs.clear if hidden.include?(SECTION_PATHS["blog"])
end

# The RSS feed is generated after reading, so drop it just before rendering.
Jekyll::Hooks.register :site, :pre_render do |site, _payload|
  hidden = hidden_section_prefixes(site)
  site.pages.reject! { |p| hidden.any? { |prefix| p.url.start_with?(prefix) } }
end
