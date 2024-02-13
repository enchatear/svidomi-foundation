// import "./src/utils/i18n.js";
import './src/styles/common.scss';
import './src/styles/header.scss';
import './src/styles/main.scss';
import './src/styles/donation.scss';
import './src/styles/information.scss';
import './src/styles/about.scss';
import './src/styles/video.scss';
import './src/styles/support.scss';
import './src/styles/footer.scss';
import './src/scripts/scrollUp.js'

window.addEventListener('DOMContentLoaded', async () => {
  const content = document.getElementById('content');

  const htmlFiles = [
    './src/components/header.html',
    './src/components/main.html',
    './src/components/donation.html',
    './src/components/information.html',
    './src/components/about.html',
    './src/components/video.html',
    './src/components/support.html',
    './src/components/footer.html',
  ];

  const fetchHtml = async (file) => {
    const response = await fetch(file);
    return await response.text();
  };

  const htmlContents = await Promise.all(htmlFiles.map(fetchHtml));

  const htmlMap = Object.fromEntries(htmlFiles.map((file, index) => [file, htmlContents[index]]));

  const sortedHtmlFiles = htmlFiles.sort((a, b) => htmlFiles.indexOf(a) - htmlFiles.indexOf(b));

  sortedHtmlFiles.forEach(file => {
    content.insertAdjacentHTML('beforeend', htmlMap[file]);
  });

  return import('./src/utils/i18n.js');
});
