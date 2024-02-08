import './src/styles/main.scss';
import "./src/utils/i18n.js";

window.addEventListener('DOMContentLoaded', () => {
  fetch('./src/components/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header').innerHTML = html;
    });
});
