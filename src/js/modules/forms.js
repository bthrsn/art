import {postData} from '../services/requests';

const forms = () => {

  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name = "upload"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Мы скоро с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: './assets/img/spinner.gif',
    ok: './assets/img/ok.png',
    fail: './assets/img/fail.png',
  };
  
// Переменная с путями изображений
const path = {
  designer: 'assets/server.php',
  question: 'assets/question.php'
};

  // Функция для очищения инпутов
  const clearInputs = () => {
    inputs.forEach(input => input.value ='');
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    })
  }
  
  // Переберем все фото, которые загружают
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      
      // Переменная для подставления многоточия
      let dots;
      // Техническая переменная для сокращения кода
      const tech = item.files[0].name.split('.');
      // Условие на проверку длины названия изображения
      tech.length > 6 ? dots = '...' : dots = '.';
      const name = tech[0].substring(0, 6) + dots + tech[1];
      
      // Скрипт для изменения текста "Файл не выбран" после загрузки изображения
      item.previousElementSibling.textContent = name;
    });
  });

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.append(statusMessage);
      
      // Скрываем форму по ТЗ через animate.css
      item.classList.add('animated', 'fadeOutUp');
      // Через некоторое время совсем убираем форму со страницы
      setTimeout(() => {
        item.style.display = 'none'
      }, 400);
      
      // Отображение статуса сообщения
      let statusImg = document.createElement('img');
      statusImg.classList.add('center-block');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.append(statusImg);
      
      // Добавить текстовое сообщение
      let textMessage = document.createElement('div');
      textMessage.classList.add('text-center');
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(item);
      
      // Переменная для формирования динамического пути отправки данных
      let api;
      item.closest('.popup-design') || item.classList.contains('calc-form') ? api = path.designer : api = path.question; 
      console.log(api);
      
      
      postData(api, formData)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure; 
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove()
            
            // После отправки данных, снова отображаем модальное окно
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');           
          }, 5000);
        });
    });
  });
}

export default forms;