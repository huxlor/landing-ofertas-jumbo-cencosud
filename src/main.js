require('bootstrap-grid');
require('./styles.scss');

const getRemainTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

    return{
        remainTime,
        remainSeconds,
        remainMinutes, 
        remainHours,
        remainDays
    }
};

        // console.log(getRemainTime('Sep 20 2018 23:00:00 GMT-0500'));
    const countDown = (deadline) => {
        // const el = document.getElementById(elem);
        // const dias = document.getElementById('days');
        const horas = document.getElementById('hours');
        const minutos = document.getElementById('minutes');
        const segundos = document.getElementById('seconds');
        
        const timerUpdate = setInterval( () => {
            let t = getRemainTime(deadline);
            // el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
            
            // dias.innerHTML = `${t.remainDays}`;
            horas.innerHTML = `${t.remainHours}`;
            minutos.innerHTML = `${t.remainMinutes}`;
            segundos.innerHTML = `${t.remainSeconds}`;
            
            if(t.remainTime <= 1){
                clearInterval(timerUpdate);
                // el.innerHTML = finalMessage; 
            }  
        }, 1000);
    };

    countDown('Feb 14 2019 00:00:00 GMT-0500');

function categorySlickMenu(category){
    $(category).slick({
        arrows: false,
        slidesToShow: 5,
        infinite: false,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                dots: false,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                prevArrow:"<button type='button' class='btn-menu slick-prev pull-left'>‹</button>",
                nextArrow:"<button type='button' class='btn-menu slick-next pull-right'>›</button>"
            }
            }
        ]
    });
}

function categorySlick(category){
    $(category).slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
            breakpoint: 1527,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
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


function clickToGo(button,category){
    $(button).click(function(){
        $("html, body").animate({
            scrollTop: $(category).offset().top 
        }, 1000);
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
    categorySlickMenu('.cont_menu__item'); 

    //Go to Category
    clickToGo('#btn-tv', '.cont_televisores');
    clickToGo('#btn-tecno', '.cont_tecno');
    clickToGo('#btn-electro', '.cont_electro');
    clickToGo('#btn-otras', '.cont_otras');
    clickToGo('#btn-mercado', '.cont_mercado');
    //Go to Top
    clickToGo('#btn-goTop', '.cont_menu');
});

