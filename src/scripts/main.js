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