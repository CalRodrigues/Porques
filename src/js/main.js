window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  mostrarBackToTop()
}

function mostrarBackToTop() {
  if (scrollY > 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}