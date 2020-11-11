import modals from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {};
    
    changeModalState(modalState);
    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical',);
    forms(modalState);
    mask('[name="phone"]');
    checkTextInputs('input[name="name"]');
    checkTextInputs('input[name="message"]');  
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
});
