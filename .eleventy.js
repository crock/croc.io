
module.exports = function (eleventyConfig) {
	eleventyConfig.ignores.add("README.md")

    eleventyConfig.setTemplateFormats(["jpeg", "jpg", "png", "webp", "svg"])

    eleventyConfig.addPassthroughCopy({ "static/_redirects": "_redirects" })

    eleventyConfig.addPassthroughCopy({ "static/img/*": "assets/img" })

	eleventyConfig.addPassthroughCopy({ "static/**/*.js": "assets/js" })

	eleventyConfig.addPassthroughCopy({ "styles/**/*.css": "assets/css" })

	eleventyConfig.addPassthroughCopy("content/assets/**/*")

	eleventyConfig.setTemplateFormats(["md"])

    eleventyConfig.addCollection("posts", function (collection) {
        return collection.getFilteredByGlob("content/posts/*.md")
    })

    eleventyConfig.addCollection("projects", function (collection) {
        return collection.getFilteredByGlob("content/projects/*.md")
    })

    eleventyConfig.addCollection("companies", function (collection) {
        return collection.getFilteredByGlob("content/companies/*.md")
    })

	return {
		dir: {
			input: "content",
		},
	}
}
