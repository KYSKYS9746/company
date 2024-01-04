$ (function(){

    

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

    window.addEventListener('scroll', ()=> {
        let SCT = window.scrollY;
        SCT > 0 
        ? document.querySelector('.header').classList.add('on')
        : document.querySelector('.header').classList.remove('on');
    
    });
    
        AOS.init();
})