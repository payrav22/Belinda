$(document).ready(function () {
    $('.slider__list').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.research__list').slick({
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 14400,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            }
        ]
    });
});
