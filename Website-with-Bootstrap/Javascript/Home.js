function selectlanguage(Selection) {
    
    // 1. Remove 'active' class from ALL language spans
    document.querySelectorAll('.language-colour .language').forEach(span => {
        span.classList.remove('active');
    });
    
    // 2. Add 'active' class ONLY to the clicked language
    Selection.classList.add('active');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' /* Handles smooth animation in JS */
    });
}
