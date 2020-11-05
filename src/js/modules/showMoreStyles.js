import {getResource} from '../services/requests';

const showMoreStyles = (trigger, parentSelector) => {
  // const cards = document.querySelectorAll(styles),
  const btn = document.querySelector(trigger),
        wrapper  = document.querySelector(parentSelector);
        
  // Простой способ подгрузки уже имеющихся доп стилей
  // cards.forEach(card => card.classList.add('animated', 'fadeInUp'));
  
  // btn.addEventListener('click', () => {
  //   cards.forEach(card => {
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-xs');
  //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');    
  //   });
  //   btn.remove();
  // });
  
  // Способ получения доп стилей с сервера (файл db.json)
  btn.addEventListener('click', function() {
    // Если сервер на сайте
    // getResource('http://localhost:3000/styles')
    
    // Если сервер внутри проекта
    getResource('assets/db.json')
      .then(result =>  createMoreStyles(result.styles))
      // Создать блок с текстом ошибки для пользователя: Сервер не отвечает, не можем подгрузить вам больше стилей
      .catch(error => {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = 'Сервер не отвечает. К сожалению, мы не можем подгрузить вам больше стилей сейчас. Выберите из уже показанных.';
        errorMessage.classList.add('text-center', 'p-heading');
        wrapper.append(errorMessage);
      }
      );
      
      // Удаляем саму кнопку через контекст вызова - оттого и обычная функция, а не стрелочная, которая не имеет своего контекста вызова
      this.remove();
  });
  
  // Формирование элементов с новыми стилями
  function createMoreStyles(response) {
    response.forEach(({ src, title, link })=> {
    
      let card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp')
      card.innerHTML = 
        `
          <div class=styles-block>
            <img src=${src} alt>
            <h4>${title}</h4>
            <a href=${link}>Подробнее</a>
          </div>
        `;
        wrapper.append(card);
    })
  }
};

export default showMoreStyles;