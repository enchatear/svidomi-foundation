document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.donation_btn');
    const tabContents = document.querySelectorAll('.card__content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('3333');

            const tabId = this.getAttribute('data-tab');
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            tabContents.forEach(content => {

                if (content.getAttribute('data-tab') === tabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

const copyButtons = document.querySelectorAll('.copyButton');

copyButtons.forEach(copyButton => {
    copyButton.addEventListener('click', () => {
        const textToCopy = copyButton.getAttribute('data-copy-text');
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyButton.classList.add('copied');
            setTimeout(() => {
                copyButton.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Помилка копіювання: ', err);
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const URL = 'https://europe-west6-svidomi.cloudfunctions.net/api/sendToTelegram';

    const form = document.getElementById("request_form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formValues = {};


        formData.forEach(function(value, key) {
            formValues[key] = value;
        });

        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(formValues),
        })
            .then(data => {
                alert('Успішно відправлено');
                console.log('Успішно відправлено', data);
                // todo додати тостер з повідомленням про успішне відправлення
            })
            .catch(error => {
                alert('Помилка відправлення');
                console.error('Помилка:', error);
                // todo додати тостер з повідомленням про помилку відправлення
            });
    });
});
