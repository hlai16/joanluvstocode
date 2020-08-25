const joansOffice = {};

// credit to Staffan Adolfsson on CodePen, learn more about jqery while googling this code. I probably don't need animat.css now.
joansOffice.scrollFadeIn = $(document).on('scroll', function () {
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

    // credit to Julio Codes: https://www.youtube.com/watch?v=sJ1uvHIJKTY
    // was making a 'misbehaving' navBar when attempting to do it myself with what I learned from Adolfsson on Codepen.
    let navBar = $('.mainNavBar');
    const headerAndAboutHeight = $('header').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > headerAndAboutHeight) {
            $(navBar).addClass('fixed');
            $(navBar).removeClass('hidden');
        } else {
            $(navBar).removeClass('fixed');
            $(navBar).addClass('hidden');
        }
    })
    //media query size to 900px:
    let mobileBar = $('.mobileContainer');
    $(window).scroll(function () {
        if ($(this).scrollTop() > headerAndAboutHeight) {
            $(mobileBar).addClass('fixed');
            $(mobileBar).removeClass('hidden');
        } else {
            $(mobileBar).removeClass('fixed');
            $(mobileBar).addClass('hidden');
        }
    })
});


joansOffice.hamburgerOn = () => {
    $('.icon').on('click', () => {
        $('.myLinks').toggle('show');
    })
}

    


//init

joansOffice.init = () => { 
    joansOffice.hamburgerOn();
}

//doc ready
$(function () {
    $('.rippleEffect').ripples({
        imageUrl: null,
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.02,
        interactive: true
    });
    joansOffice.init();
})
