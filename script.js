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

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    
    // Toggle mobile menu
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        menuIcon.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Toggle search functionality
    searchIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        searchIcon.classList.toggle('active');
        searchBar.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && 
            !menuIcon.contains(e.target)) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        if (!searchBar.contains(e.target) && 
            !searchIcon.contains(e.target)) {
            searchBar.classList.remove('active');
            searchIcon.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Toggle featured section
    const toggleSection = document.querySelector('.toggle-section');
    const featuredGrid = document.querySelector('.featured-grid');
    
    if (toggleSection && featuredGrid) {
        toggleSection.addEventListener('click', function() {
            toggleSection.classList.toggle('collapsed');
            featuredGrid.classList.toggle('collapsed');
        });
    }
});

// Initialize blog functionality
function initBlog() {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize the blog when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderPosts();
    // Toggle Featured Stories section
    const toggleButton = document.querySelector('.toggle-section');
    const featuredGrid = document.querySelector('.featured-grid');
    
    if (toggleButton && featuredGrid) {
        toggleButton.addEventListener('click', () => {
            featuredGrid.classList.toggle('collapsed');
            toggleButton.classList.toggle('collapsed');
        });
    }
}); 