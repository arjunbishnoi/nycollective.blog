// Blog posts data
const blogPosts = [
    {
        title: "The Hidden Gems of Brooklyn's Street Art Scene",
        excerpt: "Discover the vibrant world of street art that transforms Brooklyn's walls into an open-air gallery, where every corner tells a unique story.",
        date: "May 9, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        link: "blog-posts/brooklyn-street-art.html",
        views: 45678
    },
    {
        title: "Manhattan's Secret Rooftop Gardens",
        excerpt: "Explore the hidden urban oases that transform Manhattan's skyline, where nature meets architecture in perfect harmony.",
        date: "May 2, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        link: "blog-posts/manhattan-rooftop-gardens.html",
        views: 38921
    },
    {
        title: "The Evolution of NYC's Food Truck Culture",
        excerpt: "From humble beginnings to culinary innovation, witness how food trucks have become an integral part of New York's diverse food scene.",
        date: "April 25, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        link: "blog-posts/nyc-food-trucks.html",
        views: 52345
    },
    {
        title: "The Rise of Artisanal Coffee in NYC",
        excerpt: "From hidden gems to established roasters, explore how New York's coffee scene has evolved into a craft culture of its own.",
        date: "April 18, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        link: "blog-posts/artisanal-coffee.html",
        views: 41234
    },
    {
        title: "Queens' Hidden Food Markets",
        excerpt: "Discover the vibrant food markets of Queens where diverse cultures come together through authentic culinary experiences.",
        date: "April 11, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        link: "blog-posts/queens-food-markets.html",
        views: 34567
    },
    {
        title: "NYC's Underground Music Scene",
        excerpt: "From jazz basements to indie venues, dive into the thriving underground music scene that keeps New York's cultural heartbeat alive.",
        date: "April 4, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        link: "blog-posts/underground-music.html",
        views: 47890
    },
    {
        title: "The Bronx Jazz Scene",
        excerpt: "Experience the rich heritage and vibrant present of jazz in the Bronx, where music continues to shape the borough's cultural identity.",
        date: "March 28, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        link: "blog-posts/bronx-jazz.html",
        views: 29876
    }
];

// Function to create story cards
function createStoryCard(post) {
    const storyCard = document.createElement('story-card');
    storyCard.setAttribute('link', post.link);
    storyCard.setAttribute('image', post.image);
    storyCard.setAttribute('date', post.date);
    storyCard.setAttribute('read-time', post.readTime);
    storyCard.setAttribute('title', post.title);
    storyCard.setAttribute('excerpt', post.excerpt);
    storyCard.setAttribute('views', post.views);
    return storyCard;
}

// Function to render stories
function renderStories() {
    const featuredStories = document.querySelectorAll('.featured-stories');
    if (featuredStories.length >= 2) {
        // Clear existing content
        featuredStories[0].innerHTML = '';
        featuredStories[1].innerHTML = '';

        // Add featured stories (first 3)
        blogPosts.slice(0, 3).forEach(post => {
            const storyCard = createStoryCard(post);
            featuredStories[0].appendChild(storyCard);
        });

        // Add all stories
        blogPosts.forEach(post => {
            const storyCard = createStoryCard(post);
            featuredStories[1].appendChild(storyCard);
        });
    }
}

// Function to load footer component
async function loadFooter() {
    try {
        const response = await fetch('footer.html');
        const footerHtml = await response.text();
        const footerContainer = document.querySelector('.site-footer');
        if (footerContainer) {
            footerContainer.outerHTML = footerHtml;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Function to get the correct path prefix
function getPathPrefix() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    
    // If we're in the root directory
    if (pathParts.length === 0) {
        return '';
    }
    
    // If we're in a blog post
    if (pathParts.includes('blog-posts')) {
        return '../';
    }
    
    // If we're in any other subdirectory
    return '../';
}

// Function to get the correct component path
function getComponentPath() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(Boolean);
    
    // If we're in the root directory
    if (pathParts.length === 0) {
        return 'components/';
    }
    
    // If we're in a blog post or other subdirectory
    return '../components/';
}

// Function to adjust paths in HTML content
function adjustPathsInHtml(html) {
    const pathPrefix = getPathPrefix();
    
    return html
        .replace(/href="([^"]+)"/g, (match, path) => {
            // Don't adjust external links, anchor links, or already adjusted paths
            if (path.startsWith('http') || path.startsWith('#') || path.startsWith('../')) {
                return match;
            }
            return `href="${pathPrefix}${path}"`;
        })
        .replace(/src="([^"]+)"/g, (match, path) => {
            // Don't adjust external images or already adjusted paths
            if (path.startsWith('http') || path.startsWith('../')) {
                return match;
            }
            return `src="${pathPrefix}${path}"`;
        });
}

// Function to load a component
async function loadComponent(componentName, targetSelector, adjustPaths = false) {
    try {
        const componentPath = getComponentPath();
        const response = await fetch(`${componentPath}${componentName}.html`);
        const html = await response.text();
        const container = document.querySelector(targetSelector);
        
        if (container) {
            if (adjustPaths) {
                const adjustedHtml = adjustPathsInHtml(html);
                container.outerHTML = adjustedHtml;
            } else {
                container.outerHTML = html;
            }
        }
    } catch (error) {
        console.error(`Error loading ${componentName}:`, error);
    }
}

// Function to load hero content
async function loadHeroContent() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const pageTitle = document.title;
    const heroTitle = hero.querySelector('[data-hero-title]');
    const heroSubtitle = hero.querySelector('[data-hero-subtitle]');

    if (heroTitle && heroSubtitle) {
        switch (pageTitle) {
            case 'Blog - NY Collective™':
                heroTitle.textContent = 'Our Stories';
                heroSubtitle.textContent = 'Discover the vibrant culture and hidden gems of New York City.';
                break;
            case 'Newsletter - NY Collective™':
                heroTitle.textContent = 'Stay Connected';
                heroSubtitle.textContent = 'Subscribe to our newsletter for the latest stories and updates from NYC.';
                break;
            case 'Donate - NY Collective™':
                heroTitle.textContent = 'Support Our Mission';
                heroSubtitle.textContent = 'Help us continue sharing the stories that make New York City special.';
                break;
            case 'Support - NY Collective™':
                heroTitle.textContent = 'How Can We Help?';
                heroSubtitle.textContent = 'We\'re here to assist you with any questions or concerns.';
                break;
            default:
                heroTitle.textContent = 'The New York Collective™';
                heroSubtitle.textContent = 'NYC Stories, Events, Culture and More.';
        }
    }
}

// Function to setup event listeners
function setupEventListeners() {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const searchIcon = document.querySelector('.search-icon');
    const body = document.body;
    
    // Toggle mobile menu
    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            menuIcon.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
            
            // Add/remove body class for styling
            body.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && menuIcon && 
            !mobileMenu.contains(e.target) && 
            !menuIcon.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    function closeMobileMenu() {
        if (mobileMenu && menuIcon) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('active');
            body.style.overflow = '';
            body.classList.remove('menu-open');
        }
    }

    // Search overlay functionality
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchOverlay = document.querySelector('.search-overlay');
            if (searchOverlay) {
                searchOverlay.classList.add('active');
                const searchInput = searchOverlay.querySelector('.search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }
        });
    }

    const closeSearch = document.querySelector('.close-search');
    if (closeSearch) {
        closeSearch.addEventListener('click', function() {
            const searchOverlay = document.querySelector('.search-overlay');
            if (searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }
}

// Function to load all components
async function loadComponents() {
    // Load all components with path adjustment
    await loadComponent('navbar', '.site-header', true);
    await loadComponent('mobile-menu', '.mobile-menu', true);
    await loadComponent('search-overlay', '.search-overlay', true);
    await loadComponent('hero', '.hero', true);
    await loadComponent('footer', '.site-footer', true);
    await loadHeroContent();
    // Setup event listeners after components are loaded
    setupEventListeners();
}

// Blog List Sorting and Searching
function initializeBlogList() {
    const sortSelect = document.getElementById('sort-by');
    const searchInput = document.getElementById('blog-search');
    const blogList = document.querySelector('.blog-list');
    const blogItems = Array.from(document.querySelectorAll('.blog-item'));

    if (!sortSelect || !searchInput || !blogList) return;

    function sortBlogs() {
        const sortValue = sortSelect.value;
        const sortedItems = [...blogItems].sort((a, b) => {
            const dateA = new Date(a.querySelector('.blog-date').textContent);
            const dateB = new Date(b.querySelector('.blog-date').textContent);
            const viewsA = parseInt(a.querySelector('.blog-views').textContent);
            const viewsB = parseInt(b.querySelector('.blog-views').textContent);

            switch (sortValue) {
                case 'date-desc':
                    return dateB - dateA;
                case 'date-asc':
                    return dateA - dateB;
                case 'views-desc':
                    return viewsB - viewsA;
                case 'views-asc':
                    return viewsA - viewsB;
                default:
                    return 0;
            }
        });

        blogList.innerHTML = '';
        sortedItems.forEach(item => blogList.appendChild(item));
    }

    function filterBlogs() {
        const searchTerm = searchInput.value.toLowerCase();
        blogItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const excerpt = item.querySelector('p').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm) || excerpt.includes(searchTerm);
            item.style.display = isVisible ? 'block' : 'none';
        });
    }

    sortSelect.addEventListener('change', sortBlogs);
    searchInput.addEventListener('input', filterBlogs);

    // Initial sort by newest first
    sortSelect.value = 'date-desc';
    sortBlogs();
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize stories
    renderStories();

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all story cards and blog posts
    document.querySelectorAll('.story-card, .blog-post').forEach(element => {
        observer.observe(element);
    });

    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Load all components
    loadComponents();

    // Initialize blog list
    initializeBlogList();
});

// Blog page functionality
if (document.querySelector('.blog-controls')) {
    const sortSelect = document.getElementById('sort-by');
    const searchInput = document.getElementById('blog-search');
    const storiesContainer = document.querySelector('.featured-stories');

    // Function to create story cards
    function createStoryCard(post) {
        const storyCard = document.createElement('story-card');
        storyCard.setAttribute('link', post.link);
        storyCard.setAttribute('image', post.image);
        storyCard.setAttribute('date', post.date);
        storyCard.setAttribute('read-time', post.readTime);
        storyCard.setAttribute('title', post.title);
        storyCard.setAttribute('excerpt', post.excerpt);
        storyCard.setAttribute('views', post.views);
        return storyCard;
    }

    // Function to render story cards
    function renderStoryCards(posts) {
        storiesContainer.innerHTML = '';
        posts.forEach(post => {
            const storyCard = createStoryCard(post);
            storiesContainer.appendChild(storyCard);
        });
    }

    // Initial render
    renderStoryCards(blogPosts);

    // Sort functionality
    sortSelect.addEventListener('change', () => {
        const sortedPosts = [...blogPosts];
        switch (sortSelect.value) {
            case 'date-desc':
                sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'date-asc':
                sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'views-desc':
                sortedPosts.sort((a, b) => b.views - a.views);
                break;
            case 'views-asc':
                sortedPosts.sort((a, b) => a.views - b.views);
                break;
        }
        renderStoryCards(sortedPosts);
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.excerpt.toLowerCase().includes(searchTerm)
        );
        renderStoryCards(filteredPosts);
    });
} 