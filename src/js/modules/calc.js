  // алгоритм: собираем данные и подставляем в формулы.

function calc(size, material, options, promocode, result) {

  const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promoCodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
  
  let sum = 0;
  
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
}

// Ошибка - передается только картинка - значит ошибка в формах, так как в изменение modalState значения выводятся в консоль - возможно дело в том, что нужно добавить данные к рисунку!


export default calc;