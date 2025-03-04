// Check for a cookie

const cookie_consent_cookie_name = 'cookie_consent';
const cookie_consent_id = 'cookie_consent';
const cookie_consent_event = new Event('cookie_consent_given');

// Return true if cookie consent has been given
function cookie_consent_given() {
    return document.cookie.indexOf(cookie_consent_cookie_name + '=accept') > -1;
}

// function called when document is loaded
function cookie_consent_init() {
    if (!cookie_consent_given()) {
        document.getElementById(cookie_consent_id).style.display = 'block';
    }
}
window.onload = cookie_consent_init;

// Hide the cookie consent partial
function cookie_consent_hide() {
    document.getElementById(cookie_consent_id).style.display = 'none';

}

// Called when the user accepts the cookie consent
function cookie_consent_accept() {
    console.log('cookie_consent_accept');
    document.cookie = 'cookie_consent=accept; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    document.getElementById(cookie_consent_id).dispatchEvent(cookie_consent_event);
    cookie_consent_hide();
}

// Called when the user rejects the cookie consent
function cookie_consent_reject() {
    console.log('cookie_consent_decline');
    // I believe you cannot store a cooke to say that we have rejected cookies
    // So simply hide the cookie consent partial
    cookie_consent_hide();
}

function cookie_consent_event_listener(fn) {
    document.getElementById(cookie_consent_id).addEventListener('cookie_consent_given', function () {
        fn();
    });
}