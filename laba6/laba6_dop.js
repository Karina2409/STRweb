document.addEventListener("DOMContentLoaded", () => {
  const buttonLists = document.querySelectorAll('.style__buttons');

  buttonLists.forEach(list => {
    const firstButton = list.querySelector('.style__button');
    if (firstButton) {
      firstButton.classList.add('active');
    }

    list.addEventListener('click', function (event) {
      if (event.target.tagName === 'BUTTON') {
        const buttons = list.querySelectorAll('.style__button');
        buttons.forEach(button => button.classList.remove('active'));
        event.target.classList.add('active');

        const container = list.closest('.style_container').querySelector('.style__example__numbers');
        if (event.target.classList.contains('button_grid_template_areas_1')) {
          container.style.gridTemplateAreas = `'a a a'
          'b c c'
          'b c c'`;
        } else if(event.target.classList.contains('button_grid_template_areas_2')){
          container.style.gridTemplateAreas = `'b b a'
          'b b c'
          'b b c'`;
        } else if(event.target.classList.contains('button_grid_template_areas_3')){
          container.style.gridTemplateAreas = `'a a .'
          '. b b'
          'c c .'`;
        } else if (event.target.classList.contains('button_justify-items_start')) {
          container.style.justifyItems = 'start';
        } else if (event.target.classList.contains('button_justify-items_end')) {
          container.style.justifyItems = 'end';
        } else if (event.target.classList.contains('button_justify-items_center')) {
          container.style.justifyItems = 'center';
        } else if (event.target.classList.contains('button_justify-items_stretch')) {
          container.style.justifyItems = 'stretch';
        } else if (event.target.classList.contains('button_grid-auto-flow_row')) {
          container.style.gridAutoFlow = 'row';
        } else if (event.target.classList.contains('button_grid-auto-flow_column')) {
          container.style.gridAutoFlow = 'column';
        } else if (event.target.classList.contains('button_grid-auto-flow_dense')) {
          container.style.gridAutoFlow = 'dense';
        }
      }
    });
  });
});

