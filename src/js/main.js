import modals from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical',);
    forms();
    mask('[name="phone"]');
    checkTextInputs('input[name="name"]');
    checkTextInputs('input[name="message"]');  
    showMoreStyles('.button-styles', '.styles-2');
});
