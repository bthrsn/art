
const changeModalState = (state) => {
  const size = document.querySelectorAll('#size'),
        material = document.querySelectorAll('#material'),
        options = document.querySelectorAll('#options'),
        sum = document.querySelectorAll('.calc-price');


  // Привязываем value элемента к ключу и значению в передаче данных на сервер
  function bindActionToElems (event, elem) {
    elem.forEach((item) => {
      item.addEventListener(event, () => {
        state['value'] = item.value;
        console.log(state);
      });
    });
  }

  bindActionToElems('change', size);
  bindActionToElems('change', material,);
  bindActionToElems('change', options,);
  bindActionToElems('input', sum,);

};

export default changeModalState;