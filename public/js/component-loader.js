/**
 * Component Loader for Portfolio Site
 * Dynamically loads HTML partials into the main page
 * Preserves all CSS classes, IDs, and event bindings
 */

(function() {
    'use strict';

    const components = [
        { id: 'header-component', file: 'partials/header.html' },
        { id: 'hero-component', file: 'partials/hero.html' },
        { id: 'intro-component', file: 'partials/intro.html' },
        { id: 'about-component', file: 'partials/about.html' },
        { id: 'portfolio-component', file: 'partials/portfolio.html' },
        { id: 'funfact-component', file: 'partials/funfact.html' },
        { id: 'experience-component', file: 'partials/experience.html' },
        { id: 'education-component', file: 'partials/education.html' },
        { id: 'skills-component', file: 'partials/skills.html' },
        { id: 'services-component', file: 'partials/services.html' },
        { id: 'pricing-component', file: 'partials/pricing.html' },
        { id: 'testimonials-component', file: 'partials/testimonials.html' },
        { id: 'brands-component', file: 'partials/brands.html' },
        { id: 'contact-component', file: 'partials/contact.html' },
        { id: 'blog-component', file: 'partials/blog.html' },
        { id: 'footer-component', file: 'partials/footer.html' }
    ];

    let loadedComponents = 0;
    const totalComponents = components.length;

    function loadComponent(component) {
        return new Promise((resolve, reject) => {
            const element = document.getElementById(component.id);
            
            if (!element) {
                console.warn(`Component placeholder not found: ${component.id}`);
                resolve();
                return;
            }

            fetch(component.file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(html => {
                    element.innerHTML = html;
                    loadedComponents++;
                    
                    // Dispatch custom event for component loaded
                    const event = new CustomEvent('componentLoaded', {
                        detail: { component: component.id, loaded: loadedComponents, total: totalComponents }
                    });
                    document.dispatchEvent(event);
                    
                    resolve();
                })
                .catch(error => {
                    console.error(`Error loading component ${component.file}:`, error);
                    resolve(); // Continue loading other components
                });
        });
    }

    function initializeScripts() {
        // Re-initialize any scripts that depend on dynamic content
        if (typeof $.fn.meanmenu === 'function') {
            $('#mobile-menu').meanmenu({
                meanMenuContainer: '.mobile-menu',
                meanScreenWidth: '991'
            });
        }

        // Re-initialize AOS if present
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }

        // Re-initialize slick slider if present
        if (typeof $.fn.slick === 'function') {
            $('.blog-active').slick('refresh');
        }

        // Trigger window load event for parallax and other plugins
        if (typeof Parallax !== 'undefined' && document.getElementById('scene')) {
            new Parallax(document.getElementById('scene'));
        }
    }

    function loadAllComponents() {
        const startTime = performance.now();
        
        Promise.all(components.map(loadComponent))
            .then(() => {
                const loadTime = performance.now() - startTime;
                console.log(`All components loaded in ${loadTime.toFixed(2)}ms`);
                
                // Initialize scripts after all components are loaded
                initializeScripts();
                
                // Dispatch all components loaded event
                const event = new CustomEvent('allComponentsLoaded');
                document.dispatchEvent(event);
                
                // Hide preloader if still visible
                setTimeout(() => {
                    const preloader = document.getElementById('preloader');
                    if (preloader) {
                        preloader.style.display = 'none';
                    }
                }, 500);
            })
            .catch(error => {
                console.error('Error loading components:', error);
            });
    }

    // Load components when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllComponents);
    } else {
        loadAllComponents();
    }

    // Expose reload function for debugging
    window.reloadComponents = loadAllComponents;

})();
