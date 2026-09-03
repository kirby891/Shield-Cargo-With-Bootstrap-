function selectlanguage(Selection) {
    
    document.querySelectorAll('.language-colour .language').forEach(span => {
        span.classList.remove('active');
    });

    Selection.classList.add('active');
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}