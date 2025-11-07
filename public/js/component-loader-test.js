/**
 * Component Loader - TEST VERSION
 * Minimal version for testing header, footer, and blog components only
 * 
 * Usage:
 * 1. Add component placeholders in HTML: <div id="header-component"></div>
 * 2. Include this script before closing </body> tag
 * 3. Components will load automatically on page load
 */

(function() {
    'use strict';

    // Configuration for test components only
    const COMPONENTS = [
        { id: 'header-component', path: 'partials/header.html', name: 'Header' },
        { id: 'hero-component', path: 'partials/hero.html', name: 'Hero/Slider' },
        { id: 'intro-features-component', path: 'partials/intro-features.html', name: 'Intro Features' },
        { id: 'blog-component', path: 'partials/blog.html', name: 'Blog' },
        { id: 'footer-component', path: 'partials/footer.html', name: 'Footer' }
    ];

    /**
     * Load a single component
     */
    async function loadComponent(component) {
        const startTime = performance.now();
        const placeholder = document.getElementById(component.id);
        
        if (!placeholder) {
            console.warn(`⚠️ Placeholder #${component.id} not found`);
            return { success: false, error: 'Placeholder not found' };
        }

        try {
            console.log(`📥 Loading ${component.name}...`);
            
            const response = await fetch(component.path);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const html = await response.text();
            placeholder.innerHTML = html;
            
            const loadTime = (performance.now() - startTime).toFixed(2);
            console.log(`✅ ${component.name} loaded (${loadTime}ms)`);
            
            // Dispatch custom event
            const event = new CustomEvent('componentLoaded', { 
                detail: { 
                    component: component.name, 
                    id: component.id,
                    loadTime: loadTime 
                } 
            });
            document.dispatchEvent(event);
            
            return { success: true, loadTime: loadTime };
            
        } catch (error) {
            console.error(`❌ Failed to load ${component.name}:`, error);
            placeholder.innerHTML = `
                <div style="padding: 20px; background: #fee; border: 2px solid #fcc; border-radius: 5px; margin: 10px;">
                    <h4 style="color: #c00; margin: 0 0 10px 0;">⚠️ Error Loading ${component.name}</h4>
                    <p style="margin: 0; color: #666;">${error.message}</p>
                    <p style="margin: 10px 0 0 0; font-size: 12px; color: #999;">
                        Path: ${component.path}
                    </p>
                </div>
            `;
            return { success: false, error: error.message };
        }
    }

    /**
     * Re-initialize scripts after components are loaded
     */
    function initializeScripts() {
        console.log('🔄 Re-initializing scripts...');
        
        try {
            // Re-initialize mobile menu if it exists
            if (typeof $.fn.meanmenu === 'function') {
                $('#mobile-menu').meanmenu({
                    meanMenuContainer: '.mobile-menu',
                    meanScreenWidth: "991"
                });
                console.log('✅ Mobile menu initialized');
            }
            
            // Re-initialize sticky header if it exists
            if (typeof $.fn.sticky !== 'undefined' && $('#header-sticky').length) {
                // Sticky header logic would go here
                console.log('✅ Sticky header ready');
            }
            
            // Re-apply any data-tilt effects
            if (typeof VanillaTilt !== 'undefined') {
                const tiltElements = document.querySelectorAll('[data-tilt]');
                VanillaTilt.init(tiltElements, {
                    max: 10,
                    speed: 400
                });
                console.log(`✅ Tilt effects applied to ${tiltElements.length} elements`);
            }
            
            // Initialize Parallax.js for hero shapes
            if (typeof Parallax !== 'undefined' && document.getElementById('scene')) {
                const scene = document.getElementById('scene');
                new Parallax(scene);
                console.log('✅ Parallax initialized for hero shapes');
            }
            
            // Initialize Typer.js for typing animation
            if (typeof typer === 'function') {
                const typerElements = document.querySelectorAll('.typer');
                typerElements.forEach(el => {
                    const words = el.getAttribute('data-words');
                    const delay = el.getAttribute('data-delay') || 100;
                    if (words) {
                        typer(el, delay).line(words.split(', '));
                        console.log('✅ Typer animation initialized');
                    }
                });
            }
            
            // Re-initialize AOS (Animate On Scroll) if needed
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
                console.log('✅ AOS animations refreshed');
            }
            
            // Apply data-background attributes
            const bgElements = document.querySelectorAll('[data-background]');
            bgElements.forEach(el => {
                const bgUrl = el.getAttribute('data-background');
                if (bgUrl) {
                    el.style.backgroundImage = `url(${bgUrl})`;
                }
            });
            if (bgElements.length > 0) {
                console.log(`✅ Background images applied to ${bgElements.length} elements`);
            }
            
        } catch (error) {
            console.warn('⚠️ Script initialization warning:', error);
        }
    }

    /**
     * Load all components
     */
    async function loadAllComponents() {
        console.log('🚀 Component Loader Test - Starting...');
        console.log(`📦 Loading ${COMPONENTS.length} components`);
        
        const overallStart = performance.now();
        
        try {
            // Load all components in parallel
            const results = await Promise.all(
                COMPONENTS.map(component => loadComponent(component))
            );
            
            const totalTime = (performance.now() - overallStart).toFixed(2);
            const successCount = results.filter(r => r.success).length;
            const failCount = results.filter(r => !r.success).length;
            
            console.log('─────────────────────────────────');
            console.log(`✨ Component Loading Complete`);
            console.log(`✅ Success: ${successCount}`);
            if (failCount > 0) {
                console.log(`❌ Failed: ${failCount}`);
            }
            console.log(`⏱️ Total time: ${totalTime}ms`);
            console.log('─────────────────────────────────');
            
            // Re-initialize scripts after all components loaded
            initializeScripts();
            
            // Dispatch final event
            const event = new CustomEvent('allComponentsLoaded', { 
                detail: { 
                    total: COMPONENTS.length,
                    success: successCount,
                    failed: failCount,
                    totalTime: totalTime
                } 
            });
            document.dispatchEvent(event);
            
            // Show success message to user
            if (successCount === COMPONENTS.length) {
                console.log('%c✨ All components loaded successfully! ✨', 'color: #0f0; font-weight: bold; font-size: 16px;');
            }
            
        } catch (error) {
            console.error('❌ Critical error during component loading:', error);
        }
    }

    // Auto-load on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllComponents);
    } else {
        loadAllComponents();
    }

    // Expose for debugging
    window.ComponentLoader = {
        reload: loadAllComponents,
        components: COMPONENTS
    };

})();
