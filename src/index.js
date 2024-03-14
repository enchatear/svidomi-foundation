// * scss styles
import './styles/_common.scss';
import './styles/header.scss';
import './styles/main.scss';
import './styles/donation.scss';
import './styles/information.scss';
import './styles/about.scss';
// import './styles/video.scss';
import './styles/social.scss';
import './styles/support.scss';
import './styles/footer.scss';

// * scripts
import './scripts/scrollUp.js';
import './scripts/swiper.js';
import './scripts/animationOnScroll.js';
import './scripts/adaptive.js';
import './utils/i18n.js';
import './scripts/main.js';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
Fancybox.bind('[data-fancybox="gallery"]', {});