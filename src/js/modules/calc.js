import {getResource} from '../services/requests';

function calc(size, material, options, promocode, result) {

  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  
  let sum = 0;
  
  
// Реализовать функционал когда value устанавливается динамически из файла prices.json
// При событии change - обращаемся к этому файлу, получаем у него значение и устанавливаем в качестве value option'a 
  // Установка value для каждого элемента с сервера 
  const getValue = (parentSelector) => {
    parentSelector.addEventListener('change', function() {
      getResource('assets/prices.json')
        .then(res => setValue(res))
  
        .catch(error => {
          const errorMessage = document.createElement('div');
          errorMessage.textContent = 'Сервер не отвечает. Пожалуйста попробуйте позже.';
          errorMessage.classList.add('text-center', 'p-heading');
          parentSelector.append(errorMessage);
        });
    });
  }
  
        // Устанавливаем цену: текстовое содержание блока и ключ в json равны
        function setValue(response) {
          response.forEach((key) => {
            if (key === parentSelector.childNodes.textContent) {
              parentSelector.childNodes.setAttribute('value', parentSelector[key]);
              // console.log(parentSelector.childNodes.value);
            }
          });  
        }
          
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
    
    getValue(sizeBlock);
    getValue(materialBlock);
    getValue(optionsBlock);
    
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoCodeBlock.addEventListener('input', calcFunc);   
}

export default calc;
