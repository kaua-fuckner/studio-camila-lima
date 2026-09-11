/* =========================================================================
   STUDIO CAMILA LIMA — SCRIPTS
   1. Menu mobile
   2. Header: fecha menu ao clicar em link / rolar
   3. Filtros da galeria
   4. Lightbox da galeria
   5. Revelação suave ao rolar (scroll reveal)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. MENU MOBILE ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const menuMobile = document.getElementById('menuMobile');

  if (menuToggle && menuMobile) {
    menuToggle.addEventListener('click', () => {
      const aberto = menuMobile.classList.toggle('aberto');
      menuToggle.setAttribute('aria-expanded', String(aberto));
      menuToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    /* ---------- 2. Fecha o menu ao clicar em um link ---------- */
    menuMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuMobile.classList.remove('aberto');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }

  /* ---------- 3. FILTROS DA GALERIA ---------- */
  const filtros = document.querySelectorAll('.filtro');
  const itensGaleria = document.querySelectorAll('.galeria__item');

  filtros.forEach(botao => {
    botao.addEventListener('click', () => {
      filtros.forEach(b => {
        b.classList.remove('ativo');
        b.setAttribute('aria-selected', 'false');
      });
      botao.classList.add('ativo');
      botao.setAttribute('aria-selected', 'true');

      const categoria = botao.dataset.filtro;

      itensGaleria.forEach(item => {
        const pertence = categoria === 'todos' || item.dataset.categoria === categoria;
        item.classList.toggle('oculto', !pertence);
      });
    });
  });

  /* ---------- 4. LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImagem = document.getElementById('lightboxImagem');
  const lightboxFechar = document.getElementById('lightboxFechar');

  function abrirLightbox(img) {
    lightboxImagem.src = img.src;
    lightboxImagem.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function fecharLightbox() {
    lightbox.hidden = true;
    lightboxImagem.src = '';
    document.body.style.overflow = '';
  }

  itensGaleria.forEach(item => {
    const img = item.querySelector('img');
    item.addEventListener('click', () => abrirLightbox(img));
  });

  if (lightboxFechar) lightboxFechar.addEventListener('click', fecharLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) fecharLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && !lightbox.hidden) fecharLightbox();
  });

  /* ---------- 5. SCROLL REVEAL ---------- */
  const elementosRevelar = document.querySelectorAll(
    '.sobre__grid, .especialidade__grid, .servicos__grid, .titulo-secao, .depoimentos__grid, .localizacao__grid, .cursos__grid, .contato__conteudo'
  );

  elementosRevelar.forEach(el => el.setAttribute('data-reveal', ''));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('em-vista');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });

    elementosRevelar.forEach(el => observer.observe(el));
  } else {
    elementosRevelar.forEach(el => el.classList.add('em-vista'));
  }

});
