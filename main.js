/**
 * Abre e Fecha o menu
 */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  })
}

/**
 * Quando clicar num item do menu, esconder o menu
 */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  })
}

/**
 * Mudar o header da página quando o utilizador der scroll
 */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}


/**
 * Carrosel de Imagens dos depoimentos
 */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* ScrollReveal: Mostra elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
footer .brand, footer .social`, { interval: 100 })

/* Botao de voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top');

function backToTopButton() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* Menu ativo conforme a seçao visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {

  const checkPoint = window.pageXOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const startCheckpoint = checkPoint >= sectionTop
    const endCheckPoint = checkPoint <= sectionTop + sectionHeight

    if (startCheckpoint && endCheckPoint) {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }

  }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
  changeHeaderWhenScroll()
  backToTopButton()
})


