

document.addEventListener('DOMContentLoaded', function(){
  
    const yearElement = document.getElementById('year');
    if(yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
        
            menu.classList.toggle('is-open'); 

            const isExpanded = toggle.getAttribute('aria-expanded') === 'true' || false;
            toggle.setAttribute('aria-expanded', !isExpanded);
        });

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
