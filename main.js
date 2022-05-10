$(document).ready(function() {
    $('.up').click(function() {
        $(this).next().slideToggle()
        if ($(this).hasClass('show')) {
            $(this).children('.dropdown-icon').children('.uil-angle-down').css({
                'transform': 'rotate(-180deg)'
            })
            $(this).removeClass('show')
        } else {
            $(this).children('.dropdown-icon').children('.uil-angle-down').css({
                'transform': 'rotate(0deg)'
            })
            $(this).addClass('show')
        }
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 800,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $.scrollIt({
        topOffset: -150,
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('.top').addClass('show-scroll')
        } else {
            $('.top').removeClass('show-scroll')
        }
    })

})

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})