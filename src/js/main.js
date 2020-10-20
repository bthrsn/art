import modals from './modules/modal';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {

    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical',);
});
