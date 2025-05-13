// Blog Post Header Component
const template = document.createElement('template');
template.innerHTML = `
    <header class="blog-header">
        <h1></h1>
        <div class="blog-meta">
            <span class="blog-date"></span> • <span class="blog-read-time"></span> • <span class="blog-views"></span>
        </div>
        <img class="featured-image" src="" alt="">
    </header>
`;

class BlogPostHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'date', 'read-time', 'image', 'views'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const date = this.getAttribute('date') || '';
        const readTime = this.getAttribute('read-time') || '';
        const image = this.getAttribute('image') || '';
        const views = this.getAttribute('views') || '0';

        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');

                :host {
                    display: block;
                    margin-bottom: 2rem;
                }

                .header-container {
                    position: relative;
                    padding: 1rem 0;
                }

                .back-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: var(--primary-color);
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 100px;
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    margin-bottom: 1.5rem;
                }

                .back-button:hover {
                    transform: translateX(-5px);
                    background: var(--secondary-color);
                }

                .back-button i {
                    font-size: 0.8rem;
                }

                .title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text-dark);
                    margin: 0 0 1rem 0;
                    line-height: 1.2;
                }

                .metadata {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                    color: var(--text-light);
                    font-size: 0.9rem;
                }

                .metadata-item {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .metadata-item i {
                    font-size: 1rem;
                    color: var(--primary-color);
                }

                .featured-image {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                    .title {
                        font-size: 2rem;
                    }

                    .featured-image {
                        height: 300px;
                    }

                    .metadata {
                        flex-wrap: wrap;
                        gap: 1rem;
                    }
                }
            </style>

            <div class="header-container">
                <a href="../blog.html" class="back-button">
                    <i class="fas fa-arrow-left"></i>
                    Go Back
                </a>
                
                <h1 class="title">${title}</h1>
                
                <div class="metadata">
                    <div class="metadata-item">
                        <i class="far fa-calendar"></i>
                        <span>${date}</span>
                    </div>
                    <div class="metadata-item">
                        <i class="far fa-clock"></i>
                        <span>${readTime}</span>
                    </div>
                    <div class="metadata-item">
                        <i class="far fa-eye"></i>
                        <span>${views} views</span>
                    </div>
                </div>

                <img src="${image}" alt="${title}" class="featured-image">
            </div>
        `;
    }
}

customElements.define('blog-post-header', BlogPostHeader); 