document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const body = document.querySelector('body');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href').startsWith('#')) return;
        e.preventDefault();
        body.classList.remove('in');
        setTimeout(() => {
          window.location = link.href;
        }, 500);
      });
    });
    
    body.classList.add('in');
  
    const elements = document.querySelectorAll('.scroll-element');
    const handleScroll = () => {
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('visible');
        }
      });
    };
    
    document.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load as well
  });
  