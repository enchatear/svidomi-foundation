window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollToTopButton = document.getElementById("scrollToTop");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopButton.classList.add('scroll-btn_active');
  } else {
    scrollToTopButton.classList.remove('scroll-btn_active');
  }
}

document.getElementById('scrollToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});