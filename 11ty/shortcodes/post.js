
function post(postData) {
    return `<div class="card">
	<h3 class="title">${postData.title}</h3>
	<p class="publishDate">Published on <time datetime="${postData.publishDate}">${postData.publishDate}</time> by <span class="author">${postData.author}</span></p>
	<p class="excerpt">${postData.excerpt}</p>
</div>`;
}

module.exports = post