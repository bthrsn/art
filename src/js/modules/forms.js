
const forms = () => {

  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

  // checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Мы скоро с вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png',
  };
  
// Переменная с путями изображений
const path = {
  designer: 'assets/server.php',
  question: 'assets/question.php'
}

  // Функция для отправки данных
  const postData = async (url, data) => {
    let result = await fetch(url, {
      method: "POST",
      body: data
    });
    return await result.text();
  };

  // Функция для очищения инпутов
  const clearInputs = () => {
    inputs.forEach(input => input.value ='');
  }

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status')
      item.parentNode.appendChild(statusMessage);
      
      // Скрываем форму по ТЗ через animate.css
      item.classList.add('animated', 'fadeOutUp');
      // Через некоторое время совсем убираем форму со страницы
      setTimeout(() => {
        item.style.display = 'none'
      }, 400);
      
      // Отображение статуса сообщения
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.append(statusImg);
      
      // Добавить текстовое сообщение
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') ? api = path.designer : path.question; 
      console.log(api);

      // Перевод в формат json
      // const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData(api, formData)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          statusMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          statusMessage.textContent = message.failure; 
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove()
          }, 5000);
        });
    });
  });
}

export default forms;