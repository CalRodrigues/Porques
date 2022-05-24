window.addEventListener('scroll', mostrarBackToTop)
mostrarBackToTop()

function mostrarBackToTop() {
  if (scrollY > 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}