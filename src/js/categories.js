window.addEventListener('load', function () {
    document.addEventListener('click', function (event) {
        document.querySelectorAll('.categories__list').forEach(function (evt) {
            if (evt !== event.target) evt.classList.remove('categories-show')
        });
        if (event.target.matches('.categories__button')) {
            event.target.closest('.categories__block').querySelector('.categories__list').classList.toggle('categories-show')
        }
    })
})