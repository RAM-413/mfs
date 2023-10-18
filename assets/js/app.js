$('.slider').slick({
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-next',
    fade: true,
    autoplay: false,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                autoplay: true
            }
        }
    ]
});