document.addEventListener('DOMContentLoaded', () => {
    
    const langToggleBtn = document.getElementById('lang-toggle');
    const elementsEN = document.querySelectorAll('.lang-en');
    const elementsES = document.querySelectorAll('.lang-es');

    
    let currentLang = localStorage.getItem('h4ked-lang') || 'en';

   
    const applyLanguage = () => {
        if (currentLang === 'es') {
            elementsEN.forEach(el => el.style.display = 'none');
            elementsES.forEach(el => el.style.display = ''); 
        } else {
            elementsES.forEach(el => el.style.display = 'none');
            elementsEN.forEach(el => el.style.display = ''); 
        }
    };

    
    applyLanguage();

    
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
          
            currentLang = currentLang === 'en' ? 'es' : 'en';
            
            
            localStorage.setItem('h4ked-lang', currentLang);
            
  
            applyLanguage();
        });
    }
});