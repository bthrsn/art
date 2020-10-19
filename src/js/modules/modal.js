
const modals = () => {

  function closeModal(modalWindow) {
    const modal = document.querySelector(modalWindow),
          windows = document.querySelectorAll('[data-modal]');

    windows.forEach(window => window.style.display = 'none');
    modal.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
  };

  function bindModal(modalWindow, modalOpenSelector, modalCloseSelector, closeClickOverlay = true) {
    const modal = document.querySelector(modalWindow),
          modalOpenBtn = document.querySelectorAll(modalOpenSelector),
          modalCloseBtn = document.querySelectorAll(modalCloseSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll();
    
    modalOpenBtn.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        // Функционал, чтобы закрывать все окна при открытии друого окна
        windows.forEach(window => window.style.display = 'none');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;

        //   // Если кнопка открытия - это подарок, убрать его со страницы 
        //   if (modalOpenBtn.classList.contains('fixed-gift')) {
        //     modalOpenBtn.style.display = 'none';
        //   }
      });
    });

    modalCloseBtn.forEach(button => {
      button.addEventListener('click', () => {
        closeModal(modalWindow);
      });
    });

    // Закрытие окна при клике на подложку
    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        closeModal(modalWindow);
      }
    });
  };

  function showModalByTime(selector, time) {
      setTimeout(() => {

        // Переменная для определения, открыты ли модальные окна
        let display;
        document.querySelectorAll('[data-modal]').forEach(item => {
          if (getComputedStyle(item).display !== 'none') {
            display = 'block';
          }
        });

        // Проверка, открыто ли другое модальное окно
        if(!display) {
          document.querySelector(selector).style.display = 'block';
          document.body.style.overflow = 'hidden';    
        }
      }, time);
  }

// Функция, чтобы скролл не прыгал при открытии модального окна
  function calcScroll() {
    let div = document.createElement('div');

    // Задаем размеры, чтобы блок занимал какое-то место на странице
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.append(div);
    // Вычисление размера прокрутки программно, так как размеры экрана у всех разные
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  bindModal('.popup-design', '.button-design', '.popup-close');
  bindModal('.popup-consultation', '.button-consultation', '.popup-close');
  // bindModal('.popup-gift', '.fixed-gift', '.popup-close');

  showModalByTime('.popup-consultation', 60000);

}
export default modals;

