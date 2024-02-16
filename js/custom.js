$(function () {



    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.header').classList.add('on')
            : document.querySelector('.header').classList.remove('on');

    });

    AOS.init();

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 800) {
            $('.totop').addClass('on');
            $('.header').addClass('on');
        } else {
            $('.totop').removeClass('on');
            $('.header').removeClass('on');
        }
    });

    //-----숫자카운트-----
    function countDi() {
        $('.count_number').counterUp({
            delay: 10,
            time: 800,
        });
    }

    countDi()
})