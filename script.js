// Small UI JS: mobile menu toggle + contact form mock
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  toggle && toggle.addEventListener('click', ()=> {
    if(menu.style.display === 'flex') menu.style.display = '';
    else menu.style.display = 'flex';
  });

  // contact form (mock)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){ formMsg.textContent = 'Please fill all fields.'; return; }
    // Simple fake "send" behavior
    formMsg.textContent = 'Thanks — your message was sent (mock).';
    form.reset();
    setTimeout(()=> formMsg.textContent = '', 4000);
  });
});
