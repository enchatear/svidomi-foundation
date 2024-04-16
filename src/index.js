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

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("myModal");
    const acceptBtn = document.getElementById("acceptBtn");
    const declineBtn = document.getElementById("declineBtn");
    const moreInfo = document.getElementById("moreInfo");
    const closeBtn = document.querySelector(".close");

    if (!getCookie("cookieAccepted")) {
        modal.style.display = "block";
    }

    acceptBtn.addEventListener("click", function() {
        setCookie("cookieAccepted", "true", 365);
        modal.style.display = "none";
    });

    declineBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    moreInfo.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "./privacy.html";
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const cookieName = name + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(";");

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return "";
    }
});