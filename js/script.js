/* PRELOADER */
$(function preloader() {
    $(() => {

        setInterval(() => {

            let preloader = $('.preloader');

            preloader.css('opacity', 0);

            setInterval(
                () => preloader.remove(),
                parseInt(preloader.css('animation-duration', 20000))
            );

        }, 3000);
    });
});

setInterval(() => preloader(), 20000);



/* SCROLL TO TOP */
$(function () {

    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 700) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 1000);
    })
});



/* Fixed Header */
$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
});



/* Smooth scroll */
$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
    });
});



/* Burger menu */
$('.menu__btn').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.page').toggleClass('page_active');

    if ($('.page').hasClass('page_active')) {
        $("html,body").css("overflow", "hidden");

    } else {
        $("html,body").css("overflow", "auto");
    }
});

$('.menu__btn-close').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.page').toggleClass('page_active');

    if ($('.page').hasClass('page_active')) {
        $("html,body").css("overflow", "hidden");
        $("html,body").css("overflow", "hidden");

    } else {
        $("html,body").css("overflow", "auto");
    }
});

$('.menu-link').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('.page').toggleClass('page_active');

    if ($('.page').hasClass('page_active')) {
        $("html,body").css("overflow", "hidden");

    } else {
        $("html,body").css("overflow", "auto");
    }
});



/* Проверка на заполнение формы */
document.getElementById("form-btn").onclick = function () {
    if (document.getElementById("name").value === "") {
        alert("Введите Ваше имя!");
    } else if (document.getElementById("surname").value === "") {
        alert("Введите Вашу фалилию!");
    } else if (document.getElementById("phone").value === "") {
        alert("Введите Ваш номер телефона!");
    } else if (document.getElementById("adress-A").value === "") {
        alert("Введите Ваш адрес, где Вы находитесь!");
    } else if (document.getElementById("adress-B").value === "") {
        alert("Введите адрес, куда Вас отвести!");
    } else {
        alert("Ваша заявка принята, наш оператор свяжется с вами в ближайшее время!");
    }
};



/* Slider__tarif */
$('.tariff-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="tariff-slider-btn tariff-slider-btnprev"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button class="tariff-slider-btn tariff-slider-btnnext"><img src="img/arrow_right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1101,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 751,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }

    ]

});



/* Slider__reviews */
$('.reviews-flex').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="reviews-flex-btn reviews-flex-btnprev"><img src="img/arrow_left.png" alt=""></button>',
    nextArrow: '<button class="reviews-flex-btn reviews-flex-btnnext"><img src="img/arrow_right.png" alt=""></button>',
    responsive: [
        {
            breakpoint: 1401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        },
    ]

});



/* Звездный рейтинг */
$(".rateYo").rateYo({
    rating: 3.2,
    readOnly: true,
    ratedFill: "#ffc519",
    normalFill: "#373737",
    spacing: "5px"
});



/* Появление элементов при скролле страницы */

//Добавить class="_anim-items" в HTML документе к элементам которые будут анимироваться
//Добавить в CSS файле к анимированному элементу .classel._active{}
//Добавить class="_anim-no-hide" в HTML документе к элементам у которых есть class="_anim-items", что бы они анимировались один раз
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 100);

};



/* Параллакс эффект */
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.taxi');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.2) / 8) + 'px,' + ((event.clientY * 0.2) / 8) + 'px,0px)';
    });
});