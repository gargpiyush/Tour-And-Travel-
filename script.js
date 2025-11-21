// js/script.js - simple demo interactivity

document.addEventListener('DOMContentLoaded', function(){
  // set year
  const year = new Date().getFullYear();
  const yEl = document.getElementById('year');
  if(yEl) yEl.textContent = year;

  // Search form demo handler
  const searchForm = document.getElementById('searchForm');
  if(searchForm){
    searchForm.addEventListener('submit', function(e){
      e.preventDefault();
      const dest = document.getElementById('searchDest').value || 'Anywhere';
      const date = document.getElementById('searchDate').value || 'Any date';
      const people = document.getElementById('searchPeople').value;
      alert(`Searching packages for ${dest} — ${date} — ${people} traveler(s)`);
    });
  }

  // Contact form demo
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic validation
      if(!document.getElementById('name').value || !document.getElementById('email').value || !document.getElementById('message').value){
        alert('Please fill required fields.');
        return;
      }
      alert('Thanks! We received your message (demo).');
      contactForm.reset();
    });
  }
});
