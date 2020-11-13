import {getResource} from '../services/requests';

function calc(size, material, options, promocode, result) {

  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        selectOption = document.querySelectorAll('.calc-form > select > option');
  
  let sum = 0;
  
  // // Функция, которая навешивает обработчик события на change
  // const setValue = (parentSelector) => {
  //   parentSelector.addEventListener('change', function() {
  //   getResource('assets/prices.json')
  //     .then(result => {
  //       result.forEach(({ text, value }) => {
    
  //         let option = document.createElement('option');
  //         option.innerHTML = 
  //           `
  //             <option value=${value}>
  //             ${text}
  //             </option>
  //           `;
  //           parentSelector.append(option);
    
  //       });    
  //     })
  //   console.log(parentSelector.value);
  //   });
  // }
    
  // setValue(sizeBlock);
  
  
//   console.log(selectOption);
// // Реализовать функционал когда value устанавливается динамически из файла prices.json
// // При событии change - обращаемся к этому файлу, получаем у него значение и устанавливаем в качестве value option'a 

// // Сделать через innerHTML???

//   Установка value для каждого элемента с сервера 
  const getValue = (parentSelector) => {
    parentSelector.addEventListener('change', function() {
      getResource('assets/prices.json')
        .then(res => {
        selectOption.forEach(option => setValue(res.size, option));
        })
  
        .catch(error => {
          const errorMessage = document.createElement('div');
          errorMessage.textContent = 'Сервер не отвечает. Пожалуйста попробуйте позже.';
          errorMessage.classList.add('text-center', 'p-heading');
          parentSelector.append(errorMessage);
        });
    });
  }
  
        // Устанавливаем цену: текстовое содержание блока и ключ в json равны
        function setValue(response, selector) {
          response.forEach(({ text, value }) => {
          if (text === selector.innerHTML) {
            selector.setAttribute(value, value);
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
