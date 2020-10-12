//form
$(document).ready(function(){
    var n = 0;
    $('.show_popup').click(function(){
        if(n == 0)  {
            show_popup();
            n = 1;
        }
        else{
            hide_popup();
            n = 0;
        }
    });
    
    $('.hide_popup').click(function(){
        hide_popup();
        n = 0;
    });
});

function show_popup(){  
    $('.form').fadeIn(50);
    /*document.getElementById('show_popup').style.transform = "rotate(180deg)";
    document.getElementById('show_popup').style.background = "url('../img/arrow-hover.svg') center center no-repeat";*/
}

function hide_popup(){
    $('.form').fadeOut(50);
    /*document.getElementById('show_popup').style.transform = "rotate(0deg)";
    document.getElementById('show_popup').style.background = "url('../img/arrow.svg') center center no-repeat";*/
}

//number
$(document).ready(function() {
    $("#number").mask("+7 (999) 999-99-99");
    $("#phone").mask("+7 (999) 999-99-99");

    $('.interested__img-contant').click(function() {
        $(this).toggleClass('.active');
        $('').toggle();
    });

});


//slider
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 5,
//     spaceBetween: 10,
//     freeMode: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

$('.catalog').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    //prevArrow: '<button class="slick-prev slider-prev slick-arrow"></button>',
    //  nextArrow: '<button class="slick-next slider-next slick-arrow"></button>',
    responsive: [
        {
            breakpoint: 1601,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1451,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
            {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 710,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 491,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



//form in footer
//Функция отображения PopUp
function PopUpShow(){
    $("#form-footer").css('display', 'flex');
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#form-footer").css('display', 'none');
}