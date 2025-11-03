// assets/script.js
document.addEventListener('DOMContentLoaded', function(){
  // Simple slider (auto + dots)
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let idx = 0;
  function show(i){
    slides.forEach((s,si)=> s.style.display = si===i ? 'flex' : 'none');
    dots.forEach((d,di)=> d.classList.toggle('active', di===i));
  }
  function next(){
    idx = (idx+1) % slides.length;
    show(idx);
  }
  // init
  if(slides.length){
    show(0);
    let timer = setInterval(next, 4800);
    dots.forEach((d, i)=>{
      d.addEventListener('click', ()=>{ idx = i; show(i); clearInterval(timer); timer = setInterval(next,4800); })
    });
  }

  // smooth link scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // basic nav highlight
  const navLinks = document.querySelectorAll('.navlinks a');
  navLinks.forEach(n => n.addEventListener('click', ()=>{ document.querySelector('.navlinks a.active')?.classList.remove('active'); n.classList.add('active'); }));
});
