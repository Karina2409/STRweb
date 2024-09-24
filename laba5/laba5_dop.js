document.addEventListener("DOMContentLoaded", () => {
  const buttonLists = document.querySelectorAll('.style__buttons');

  buttonLists.forEach(list => {
    const firstButton = list.querySelector('.style__button');
    if (firstButton) {
      firstButton.classList.add('active');
    }

    list.addEventListener('click', function(event) {
      if (event.target.tagName === 'BUTTON') {
        const buttons = list.querySelectorAll('.style__button');
        buttons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');

        const container = list.closest('.style_container').querySelector('.style__example__numbers');

        if (event.target.classList.contains('button_flex')) {
          container.style.display = 'flex';
        } else if (event.target.classList.contains('button_inline-flex')) {
          container.style.display = 'inline-flex';
        } else if(event.target.classList.contains('button_nowrap')){
          container.style.flexWrap = 'nowrap';
        } else if(event.target.classList.contains('button_wrap')){
          container.style.flexWrap = 'wrap';
        } else if(event.target.classList.contains('button_wrap-reverse')){
          container.style.flexWrap = 'wrap-reverse';
        } else if(event.target.classList.contains('button_flex-start')){
          container.style.justifyContent = 'flex-start';
        } else if(event.target.classList.contains('button_flex-end')){
          container.style.justifyContent = 'flex-end';
        } else if(event.target.classList.contains('button_center')){
          container.style.justifyContent = 'center';
        } else if(event.target.classList.contains('button_space-between')){
          container.style.justifyContent = 'space-between';
        } else if(event.target.classList.contains('button_space-around')){
          container.style.justifyContent = 'space-around';
        } else if(event.target.classList.contains('button_space-evently')){
          container.style.justifyContent = 'space-evenly';
        }
      } 
    });
  });
});

