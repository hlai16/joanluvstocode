$(document).ready(function () {
    $('.rippleEffect').ripples({
        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.02,
        interactive: true
    });
    scrollFadeIn();
});

// credit to Staffan Adolfsson on CodePen, learn more about jqery while googling this code. I probably don't need animat.css now.
const scrollFadeIn = $(document).on('scroll', function () {
    const pageTop = $(document).scrollTop();
    const pageBottom = pageTop + $(window).height();
    let about = $('.about');

    for (let i = 0; i < about.length; i++) {
        about = about[i];

        if ($(about).position().top < pageBottom) {
            $(about).addClass('visible');
        } else {
            $(about).removeClass('visible');
        }
    }
});