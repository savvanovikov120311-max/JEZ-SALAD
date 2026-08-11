// ============================================
// ===== КАРУСЕЛЬ ОТЗЫВОВ =====
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.testimonials__reviews-wrapper');
    const cards = document.querySelectorAll('.testimonials__reviews');
    const leftArrow = document.querySelector('.arrow--left');
    const rightArrow = document.querySelector('.arrow--right');
    
    let currentIndex = 0;
    let isAnimating = false;

    if (!wrapper || cards.length === 0) {
        console.warn('⚠️ Карусель: элементы не найдены');
        return;
    }

    function getCardWidth() {
        return cards[0].offsetWidth + 30;
    }

    function updateCarousel() {
        if (isAnimating) return;
        isAnimating = true;
        
        const cardWidth = getCardWidth();
        const translate = -currentIndex * cardWidth;
        
        wrapper.style.transform = `translateX(${translate}px)`;
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', function() {
            if (isAnimating) return;
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    if (leftArrow) {
        leftArrow.addEventListener('click', function() {
            if (isAnimating) return;
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            updateCarousel();
        }, 200);
    });

    setTimeout(updateCarousel, 100);
    console.log('✅ Карусель запущена!');
});

// ============================================
// ===== SUBSCRIBE =====
// ============================================

const subscribeButton = document.querySelector('.subscribe__button');
const subscribeInput = document.querySelector('.subscribe__input');

if (subscribeButton) {
    subscribeButton.addEventListener('click', function() {
        const email = subscribeInput.value.trim();
        if (email === '') {
            alert('❌ Введите ваш email!');
        } else if (!email.includes('@') || !email.includes('.')) {
            alert('❌ Введите корректный email (с @ и точкой)');
        } else {
            alert('✅ Спасибо, ' + email + '! Вы подписаны на новости!');
            subscribeInput.value = '';
        }
    });
}

// ============================================
// ===== БУРГЕР-МЕНЮ =====
// ============================================

const burger = document.querySelector('.burger');
const headerList = document.querySelector('.header__list');

if (burger && headerList) {
    burger.addEventListener('click', function() {
        headerList.classList.toggle('open');
    });
}

console.log('🚀 Сайт Jes Salad готов, бро!');