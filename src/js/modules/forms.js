
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

      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      // Перевод в формат json
      // const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('assets/server.php', formData)
        .then(res => {
          console.log(res);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
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