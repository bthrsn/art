

const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        allButtons = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        allImages = wrapper.querySelectorAll('.all'),
        noImagesBlock = document.querySelector('.portfolio-no');
  
const initFilterTypes = (btnSelector, imgSelector) => {
  const buttons = menu.querySelectorAll(btnSelector);
        
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.target && e.target.tagName === 'LI') {
        allButtons.forEach(item => {
          item.classList.remove('active');
          e.target.classList.add('active');
        })
      }
      
      // Работа с изображениями
      allImages.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('animated', 'fadeIn');
      });
      
      noImagesBlock.style.display = "none";
      noImagesBlock.classList.remove('animated', 'fadeIn');
      
      if(imgSelector) {
        const images = wrapper.querySelectorAll(imgSelector);
        
        images.forEach(image => {
          image.style.display = "block";
          image.classList.add('animated', 'fadeIn');
        });
      } else {
        noImagesBlock.style.display = "block";
        noImagesBlock.classList.add('animated', 'fadeIn');
      }
    });
  }) 
}
  
initFilterTypes('.all', '.all');
initFilterTypes('.lovers', '.lovers');
initFilterTypes('.chef', '.chef');
initFilterTypes('.girl', '.girl');
initFilterTypes('.guy', '.guy');
initFilterTypes('.grandmother');
initFilterTypes('.granddad');

  
  // itemGranddad.addEventListener('click', () => {
  //   filterTypes();
  // });

};

export default filter;