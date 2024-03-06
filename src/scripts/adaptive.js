document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 624) {
    fetch('/assets/icons/logo-mobile.svg')
      .then(res => res.text())
      .then(logoSvg => {
        document.getElementById('headerLogoSvg').innerHTML = logoSvg;
      })
  }
})