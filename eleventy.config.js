const Image = require("@11ty/eleventy-img");
const { Liquid } = require("liquidjs");
const markdownIt = require("markdown-it");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg", "png"],
    sharpOptions: {
      animated: true
    }
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline"
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['_site/**/*.css'],
  });
  
  eleventyConfig.addPassthroughCopy({ "app/posts/assets/**/*": "assets" });
  eleventyConfig.addPassthroughCopy({ "app/images/**/*": "assets" });
  
  eleventyConfig.addAsyncShortcode("image", imageShortcode);

  eleventyConfig.setLibrary("liquid", new Liquid({
    extname: ".liquid",
    dynamicPartials: false,
    partials: "app/_includes",
    strictFilters: true,
  }));

  eleventyConfig.setLibrary("md", markdownIt({
    html: true,
    breaks: false,
    linkify: true
  }));

  eleventyConfig.addCollection("links", () => require('./app/data/links'));
  eleventyConfig.addCollection("books", () => require('./app/data/books'));
  eleventyConfig.addCollection("extensions", () => require('./app/data/browser-extensions'));
  eleventyConfig.addCollection("podcasts", () => require('./app/data/podcasts'));
  eleventyConfig.addCollection("services", () => require('./app/data/services'));
  eleventyConfig.addCollection("creators", () => require('./app/data/creators'));
  eleventyConfig.addCollection("hardware", () => require('./app/data/hardware'));
  eleventyConfig.addCollection("software", () => require('./app/data/software'));
  eleventyConfig.addCollection("projects", () => require('./app/data/projects'));
  eleventyConfig.addCollection("frameworks", () => require('./app/data/frameworks'));

  return {
    dir: {
        input: "app",
        data: "data",
    },
  };
};
