import {postData, getResource} from '../services/requests';

function calc(size, material, options, promocode, result) {

  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  
  let sum = 0;
  
  // Алгоритм
  // Получить данные из json файла
  // Установить value из json файла так, чтобы совпадали с текстом внутри. 
  
  
  // Установка value для каждого элемента с сервера 
  const setValue = (parentSelector) => {
    parentSelector.addEventListener('change', function() {
      getResource('assets/prices.json')
        .then(res => {
      // Устанавливаем цену: текстовое содержание блока и ключ в json равны
      res.forEach(key => {
        let price = parentSelector.childNode.textContent.value;
        parentSelector.childNodes.forEach.call(option => option.setAttribute('value', 'price'));  
      })

        })
        .catch(error => {
          const errorMessage = document.createElement('div');
          errorMessage.textContent = 'Сервер не отвечает. Пожалуйста попробуйте позже.';
          errorMessage.classList.add('text-center', 'p-heading');
          parentSelector.append(errorMessage);
        });
      });
  }


  // Финальные подсчеты и вывод суммы
  const calcFunc = () => {
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
    
      // Условие, что без заполнения первого и второго блока не будет выводиться сумма и условие для промокода
      if (sizeBlock.value === '' || materialBlock.value === '') {
        resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины'; 
      } else if (promoCodeBlock.value === 'IWANTPOPART') {
          resultBlock.textContent = Math.round(sum * 0.7);
      } else {
        resultBlock.textContent = sum;
      }
    }
    
    
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoCodeBlock.addEventListener('input', calcFunc);   
    
    // Отправка данных на сервер - здесь или в forms
    
}


export default calc;