
const changeModalState = (state) => {
  const size = document.querySelectorAll('#size'),
        material = document.querySelectorAll('#material'),
        options = document.querySelectorAll('#options'),
        promocode = document.querySelectorAll('.promocode');


  // Привязываем value элемента к ключу и значению в передаче данных на сервер
  function bindActionToElems (event, elem, prop) {
    elem.forEach((item) => {
      item.addEventListener(event, () => {
        state[prop] = item.value;
        console.log(state);
      });
    });
  }

  bindActionToElems('change', size, 'size');
  bindActionToElems('change', material, 'material');
  bindActionToElems('change', options, 'options');
  bindActionToElems('input', promocode, 'promocode');

};

export default changeModalState;