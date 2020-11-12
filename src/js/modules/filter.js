const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        btns = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        // btnLovers = menu.querySelector('.lovers'),
        // btnChef = menu.querySelector('.chef'),
        // btnGirl = menu.querySelector('.girl'),
        // btnGuy = menu.querySelector('.guy'),
        // btnGrandmother = menu.querySelector('.grandmother'),
        // btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        imgs = wrapper.querySelectorAll('div'),
        markAll = wrapper.querySelectorAll('.all'),
        // markLovers = wrapper.querySelectorAll('.lovers'),
        // markChef = wrapper.querySelectorAll('.chef'),
        // markGirl = wrapper.querySelectorAll('.girl'),
        // markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');
  
  const filterTypes = (markType) => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    
    no.style.display = "none";
    no.classList.remove('animated', 'fadeIn');
    
    if(markType) {
      markType.forEach(mark => {
        mark.style.display = "block";
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = "block";
      no.classList.add('animated', 'fadeIn');
    }
  
  }
  
  const initFilter  = (buttons, images) => {
    buttons.forEach(button => {
      if (button.classList === images.classList) {
        button.addEventListener('click', filterTypes(images))
      }
    })
  };
  
  initFilter(btns, imgs);
  
  // btnAll.addEventListener('click', () => {
  //   filterTypes(markAll);
  // });
  // btnLovers.addEventListener('click', () => {
  //   filterTypes(markLovers);
  // });
  // btnChef.addEventListener('click', () => {
  //     filterTypes(markChef);
  // });
  // btnGirl.addEventListener('click', () => {
  //   filterTypes(markGirl);
  // });
  // btnGuy.addEventListener('click', () => {
  //   filterTypes(markGuy);
  // });
  // btnGrandmother.addEventListener('click', () => {
  //     filterTypes();
  // });
  // btnGranddad.addEventListener('click', () => {
  //   filterTypes();
  // });

  menu.addEventListener('click', (e) => {
    let target = e.target;
    
    if (target && target.tagName === 'LI') {
      btns.forEach(btn => {
        btn.classList.remove('active');
        target.classList.add('active');
      })
    }
  });

};

export default filter;