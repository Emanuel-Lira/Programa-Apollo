window.revelar = ScrollReveal({ reset: false });

revelar.reveal('.efeito-txt-topo', {
    duration: 2000,
    distance: '90px'
});
revelar.reveal('.lua', {
    duration: 2000,
    distance: '90px',
    delay:500,
    origin: 'right'
});

revelar.reveal('.efeito-p-topo', {
    duration: 2000,
    distance: '90px',
    delay: 1000
});

revelar.reveal('.content-sobre', 
  {
    duration: 2000,
    distance: '90px',
    origin: 'left'
});

revelar.reveal('.card', 
  {
    duration: 2000,
    distance: '90px',
    delay: 500
});



