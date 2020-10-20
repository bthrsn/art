const slider = (slides, direction, prev, next) => {

    // Текущее положение слайда
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);

    // Функция перелистывающая слайды
    function showSlides(n) {

        // Условия обработки крайних левого и правого слайдеров
        if (n > items.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = items.length;
        }

        // Поведение слайдера при загрузке страницы
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        items[slideIndex - 1].style.display = 'block';
    }
    // Первая инициализация
    showSlides(slideIndex);

    // Функция для перелистывания
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Блок, если переключателей нет
    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });
    } catch(e) {};
    
    // Функция для остановки листания слайдов при наведении курсора мыши
    function activateAnimation() { 
    
        // Условие для направления листания слайдов
        if (direction === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, 5000);
        };
    
        if (direction === 'horizontal') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 10000);
        };
    }
    activateAnimation();
    
    // Запуск функции остановки листания слайдов при наведении мыши
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    // Отключение этой функции, если курсор мыши убирают
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
};
export default slider;