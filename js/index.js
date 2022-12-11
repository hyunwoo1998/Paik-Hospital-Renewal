$(function () {
    // 헤더의 GNB 안에 있는 LNB 클릭
    $('.header__nav--lnb__itm').on('click', function () {
        let $t = $(this);
        if ($t.children().hasClass('header__nav--lnb__link-more')) {
            if (!($t.children().hasClass('header__nav--lnb__link-more--on'))) {
                $t.children().addClass('header__nav--lnb__link-more--on').siblings('.header__nav--depth2').stop().slideDown(300);
            } else {
                $t.children().removeClass('header__nav--lnb__link-more--on').siblings('.header__nav--depth2').stop().slideUp(300);
            }
        }
    });

    // 모바일 GNB 열기
    $('.header__etc--burger').on('click', function () {
        $('body').css('overflow','hidden');
        $('.header__mobile').stop().fadeIn(300);
    });

    // 모바일 GNB 닫기
    $('.header__mobile-top--close').on('click', function () {
        $('body').css('overflow','auto');
        $('.header__mobile').stop().fadeOut(300);
    });

    // 모바일 Language 토글
    $('.header__mobile-top--lang').on('click', function () {
        $('.header__mobile-top--lang__list').stop().slideToggle(300);
    });

    // 모바일 LNB 토글
    $('.header__mobile-nav--gnb__itm').on('click', function () {
        $(this).children('.header__mobile-nav--lnb').stop().slideToggle(300);
    });

    // 역사관 슬라이드
    var historySwiper = new Swiper(".content__history-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".content__history-btn--next",
            prevEl: ".content__history-btn--prev",
        },
        breakpoints: {
            1201: {
                slidesPerView: 4,
            },
            993: {
                slidesPerView: 3,
            },
            577: {
                slidesPerView: 2,
            },
        },
    });

    // 패밀리사이트 버튼 클릭
    $('.footer__site-btn').on('click', function () {
        let $t = $(this);
        if (!($t.hasClass('footer__site-open'))) {
            $t.addClass('footer__site-open');
            $('.footer__site-list').stop().slideDown(300);
        } else {
            $t.removeClass('footer__site-open');
            $('.footer__site-list').stop().slideUp(300);
        }
    });

    // 검색창 열기
    $('.header__etc--search-btn').on('click', function () {
        $('.header__etc--search-box').stop().slideToggle(300);
    });

    // 탑 스크롤
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top-btn').stop().fadeIn();
        } else {
            $('.top-btn').stop().fadeOut();
        }
    });

    // 탑 버튼 클릭
    $('.top-btn').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 300);
    });
});