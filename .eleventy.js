const shortcodes = require("./11ty/shortcodes/")
const markdownIt = require("markdown-it")

const MARKDOWN_OPTIONS = {
    html: true,
    breaks: false,
    linkify: true
};

module.exports = function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md")

    eleventyConfig.setTemplateFormats(["jpeg", "jpg", "png", "webp", "svg"])

    eleventyConfig.addPassthroughCopy({ "static/_redirects": "_redirects" })

    eleventyConfig.addPassthroughCopy({ "static/img/*": "assets/img" })

	eleventyConfig.addPassthroughCopy({ "static/**/*.js": "assets/js" })

	eleventyConfig.addPassthroughCopy({ "styles/**/*.css": "assets/css" })

	eleventyConfig.addPassthroughCopy("content/assets/**/*")

	eleventyConfig.setTemplateFormats(["md", "njk"])

    eleventyConfig.addCollection("posts", function (collection) {
        const posts = collection.getFilteredByGlob("content/posts/*.md")
        return posts.sort((a, b) => b.data.publishDate - a.data.publishDate)
    })

    eleventyConfig.addCollection("projects", function (collection) {
        const projects = collection.getFilteredByGlob("content/projects/*.md")
        return projects.sort((a, b) => b.data.publishDate - a.data.publishDate)
    })

    Object.keys(shortcodes).forEach((shortcodeName) => {
        eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
    })

    eleventyConfig.setFrontMatterParsingOptions({ 
        excerpt: true,
        excerpt_separator: "--excerpt--"
    });

    const markdownLibrary = markdownIt(MARKDOWN_OPTIONS);
    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.addFilter("toHTML", str => {
        return markdownLibrary.renderInline(str);
    });

	return {
		dir: {
			input: "content",
		},
	}
}
