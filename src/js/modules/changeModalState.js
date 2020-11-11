
const changeModalState = (state) => {
  const size = document.querySelectorAll('#size'),
        material = document.querySelectorAll('#material'),
        options = document.querySelectorAll('#options'),
        sum = document.querySelectorAll('.calc-price');


  // Привязываем value элемента к ключу и значению в передаче данных на сервер
  function bindActionToElems (event, elem) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
      if (elem.length > 1) {
        state['value'] = i;
      } else {
        state['value'] = item.value;
      }
        console.log(state);
      });
    });
  }

  bindActionToElems('change', size);
  bindActionToElems('change', material,);
  bindActionToElems('change', options,);
  bindActionToElems('change', sum,);

};

export default changeModalState;