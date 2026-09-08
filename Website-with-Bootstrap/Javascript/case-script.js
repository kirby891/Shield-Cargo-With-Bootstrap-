function selectlanguage(Selection) {
    
    document.querySelectorAll('.language-colour .language').forEach(span => {
        span.classList.remove('active');
    });

    Selection.classList.add('active');
}

function selectchoice(Selection) {
    document.querySelectorAll('.choice-btn .filter-btn, .choice-btn .filter-red-btn').forEach(span => {
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