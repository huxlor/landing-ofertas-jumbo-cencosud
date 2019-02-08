require('bootstrap-grid');
require('./styles.scss');

function categorySlick(category){
    $(category).slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
}

$(document).ready(function() {
    categorySlick('.televisores');
    categorySlick('.electro-cocina');
    categorySlick('.tecnologia');
    categorySlick('.otra-categoria');
    categorySlick('.mercado');
    categorySlick('.extra1');
    categorySlick('.extra2');
    categorySlick('.extra3');
    categorySlick('.extra4');
    categorySlick('.extra5');
    categorySlick('.food');
});

