let isKorean = false;

function toggleLanguage() {
  const allElements = document.querySelectorAll('[data-en][data-ko]');
  allElements.forEach(el => {
    
    const newContent = isKorean ? el.getAttribute('data-ko') : el.getAttribute('data-en');
    el.textContent = newContent;  
  });

 
  const button = document.querySelector('.button button');
  button.textContent = isKorean ? '한국어' : 'English';

  isKorean = !isKorean;
}
