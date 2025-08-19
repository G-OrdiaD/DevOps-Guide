document.addEventListener('DOMContentLoaded', () => {
    const navigation = document.getElementById('navigation');
    const navItems = document.querySelectorAll('.nav-item');
    const sectionContainer = document.getElementById('section-container');

    async function loadSection(sectionId) {
        try {
            // Show loading state
            sectionContainer.innerHTML = '<div class="p-4 text-center">Loading...</div>';
            
            const response = await fetch(`sections/${sectionId}.html`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            sectionContainer.innerHTML = html;
            
            // Update active nav item
            navItems.forEach(item => {
                item.classList.toggle('active', item.getAttribute('href') === `#${sectionId}`);
            });

            // Initialize dynamic components
            if (sectionId === 'scale' && typeof initializeChart === 'function') {
                initializeChart();
            }
            if (typeof initCopyButtons === 'function') {
                initCopyButtons();
            }
            
        } catch (error) {
            console.error('Failed to load section:', error);
            sectionContainer.innerHTML = `
                <div class="p-4 bg-red-50 text-red-600 rounded-lg">
                    Error loading section: ${sectionId}.html
                    <p class="text-sm mt-2">${error.message}</p>
                </div>
            `;
        }
    }

    // Navigation click handler
    navigation.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
            e.preventDefault();
            loadSection(link.getAttribute('href').substring(1));
        }
    });

    // Load default section
    loadSection('overview').catch(e => console.error('Initial load failed:', e));
});