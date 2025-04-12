// Sample blog posts data
const blogPosts = [
    {
        title: "Getting Started with Blogging",
        excerpt: "Learn the basics of creating engaging content for your audience.",
        date: "April 12, 2024",
        author: "NY Collective Team"
    },
    {
        title: "The Power of Community",
        excerpt: "How building a strong community can transform your blog's impact.",
        date: "April 10, 2024",
        author: "NY Collective Team"
    }
];

// Function to create post cards
function createPostCard(post) {
    return `
        <article class="post-card">
            <h3>${post.title}</h3>
            <p class="post-meta">By ${post.author} | ${post.date}</p>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more">Read More</a>
        </article>
    `;
}

// Function to render posts
function renderPosts() {
    const postGrid = document.querySelector('.post-grid');
    if (postGrid) {
        const postsHTML = blogPosts.map(createPostCard).join('');
        postGrid.innerHTML = postsHTML;
    }
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the blog when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
}); 