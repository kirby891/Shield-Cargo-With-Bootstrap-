function selectlanguage(Selection) {
    
    document.querySelectorAll('.language-colour .language').forEach(span => {
        span.classList.remove('active');
    });
    
    Selection.classList.add('active');
}

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})
();

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}