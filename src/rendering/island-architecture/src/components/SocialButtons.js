/**
 * SOCIAL BUTTONS COMPONENT (For Reference)
 * 
 * In TRUE Islands Architecture, this component would be used to:
 * 1. Generate HTML at BUILD TIME (SSR/SSG)
 * 2. Output static HTML to index.html
 * 3. JavaScript only hydrates the existing HTML
 * 
 * This file is kept for reference, but in our implementation:
 * - HTML is manually written in index.html (simulating SSR output)
 * - hydrate.js attaches event listeners to that HTML
 * 
 * In a real framework (Astro, Marko, etc.):
 * - This component generates HTML during build
 * - Framework handles hydration automatically
 * - Result: Pre-rendered HTML + minimal JS for interactivity
 */

export function SocialButtons() {
    // In true Islands Architecture:
    // - This code runs at BUILD TIME to generate HTML
    // - The HTML is shipped to the browser
    // - Only the event handlers run in the browser
    
    const initialShares = {
        twitter: 42,
        facebook: 38,
        linkedin: 25,
        email: 12
    };

    // This would generate the HTML that you see in index.html
    return `
        <div class="social-buttons">
            ${Object.entries(initialShares).map(([platform, count]) => `
                <button class="social-button ${platform}" data-platform="${platform}">
                    <span>${getIcon(platform)} ${capitalize(platform)}</span>
                    <span class="share-count">${count}</span>
                </button>
            `).join('')}
        </div>
    `;
}

function getIcon(platform) {
    const icons = {
        twitter: '🐦',
        facebook: '👍',
        linkedin: '💼',
        email: '✉️'
    };
    return icons[platform] || '📱';
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * KEY INSIGHT:
 * 
 * Client-Side Rendering (CSR):
 * HTML: <div id="root"></div>
 * JS: render(<App />, root) // Creates all the DOM
 * 
 * Islands Architecture (Hydration):
 * HTML: <button>Click me</button> // Already exists!
 * JS: button.addEventListener('click', ...) // Just adds behavior
 * 
 * Benefits:
 * - User sees content immediately (HTML loads first)
 * - JavaScript only makes it interactive
 * - Works without JS (progressive enhancement)
 * - Minimal JS payload (no rendering code needed)
 */

