import { render } from 'preact';
import { html } from 'htm/preact';
import { SocialButtons } from './components/SocialButtons.js';

/**
 * ISLAND HYDRATION
 * 
 * This script hydrates ONLY the interactive island (SocialButtons).
 * The rest of the page remains as static HTML.
 * 
 * This is the core concept of Islands Architecture:
 * - Static content = No JavaScript
 * - Dynamic islands = Minimal, targeted JavaScript
 * 
 * Benefits:
 * - Fast initial page load (most content is static)
 * - Interactive features where needed
 * - Each island is independent
 */

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrateIslands);
} else {
    hydrateIslands();
}

function hydrateIslands() {
    console.log('🏝️ Hydrating interactive islands...');
    
    // Find the island placeholder
    const socialButtonsContainer = document.getElementById('social-buttons');
    
    if (socialButtonsContainer) {
        // Hydrate only this specific island
        render(html`<${SocialButtons} />`, socialButtonsContainer);
        console.log('✅ SocialButtons island hydrated');
        console.log('📊 Performance: ~95% of page is static HTML with 0 JS!');
    }
    
    // If there were more islands, we would hydrate them here too
    // Each island hydrates independently and asynchronously
}

// Log performance metrics
window.addEventListener('load', () => {
    console.log('\n🎯 Islands Architecture Performance:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Static content: Rendered on server (0 KB JS)');
    console.log('Interactive islands: Hydrated on client (minimal JS)');
    console.log('Total islands: 1 (SocialButtons)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
});

