// Enable Google Analytics
function enable_google_analytics() {
    // Google tag (gtag.js)
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-142HWTR609';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-142HWTR609');
}

// Add an event listener for when the cookie consent changes
cookie_consent_event_listener(() => {
    if (cookie_consent_given()) {
        enable_google_analytics();
    }
})


// Check on startup to see if consent is already given
if (cookie_consent_given()) {
    enable_google_analytics();
}
