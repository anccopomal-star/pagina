// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Menú hamburger responsive
  const barsIcon = document.querySelector('.navbar .fa-bars');
  const menu = document.querySelector('.menu');
  let menuVisible = false;

  if (barsIcon && menu) {
    barsIcon.addEventListener('click', () => {
      menuVisible = !menuVisible;
      menu.style.display = menuVisible ? 'flex' : 'none';
      menu.style.flexDirection = 'column';
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'row';
      } else {
        menu.style.display = menuVisible ? 'flex' : 'none';
        menu.style.flexDirection = 'column';
      }
    });
  }

  // Opciones de producto (Destacados, Más recientes, Mejores Vendidos)
  const options = document.querySelectorAll('.container-options span');
  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
    });
  });

  // Click en "Ver más" de categorías
  const categories = document.querySelectorAll('.card-category span');
  categories.forEach(span => {
    span.addEventListener('click', () => {
      alert(`Ver más sobre ${span.previousElementSibling.textContent}`);
    });
  });

  // Añadir al carrito
  const addCartBtns = document.querySelectorAll('.add-cart');
  let cartCount = 0;
  const cartNumberSpan = document.querySelector('.content-shopping-cart .number');
  addCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      if (cartNumberSpan) {
        cartNumberSpan.textContent = `(${cartCount})`;
      }
    });
  });

  // Newsletter suscripción (solo frontend)
  const newsletterBtn = document.querySelector('.newsletter .content button');
  const newsletterInput = document.querySelector('.newsletter .content input');
  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', () => {
      const email = newsletterInput.value.trim();
      if (email && email.includes('@')) {
        alert('¡Gracias por suscribirte!');
        newsletterInput.value = '';
      } else {
        alert('Por favor ingresa un correo electrónico válido.');
      }
    });
  }
});