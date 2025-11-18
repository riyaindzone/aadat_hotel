document.addEventListener('DOMContentLoaded', () => {
    // Select all internal links that aren't anchors (#contact, #booking)
    const internalLinks = document.querySelectorAll('a[href^="./"], a[href$=".html"]');
    const fadeDuration = 500; // Match CSS animation time (0.5s = 500ms)

    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Check if the link is a full page navigation (not an anchor on the same page)
            const targetUrl = this.getAttribute('href');
            if (targetUrl && !targetUrl.startsWith('#')) {
                event.preventDefault(); // Stop the default navigation

                // 1. Add the fade-out class to the body
                document.body.classList.add('fade-out');

                // 2. Wait for the animation to finish, then navigate
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, fadeDuration);
            }
            // Anchor links (#about, #contact) are ignored, allowing smooth scroll to work naturally
        });
    });
});