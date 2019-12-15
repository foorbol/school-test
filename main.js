/**
 * Main logic
 */

const form = document.getElementById('form');
console.warn(form);

CONFIG
  .forEach((item, x) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const heading = document.createElement('h2');
    heading.textContent = item.heading;
    wrapper.appendChild(heading);

    item.wrongAnswers
      .forEach((answer, y) => {
        const id = `${x}-${y}`;
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('form-check');
        const input = document.createElement('input');
        input.classList.add('form-check-input');
        input.setAttribute('id', id);
        input.setAttribute('name', x.toString());
        input.setAttribute('value', answer);
        const label = document.createElement('label');
        label.setAttribute('for', id);
        label.textContent = answer;
        label.classList.add('form-check-label');

        input.setAttribute('type', 'radio');

        optionContainer.appendChild(input);
        optionContainer.appendChild(label);

        wrapper.appendChild(optionContainer);
      });

    form.appendChild(wrapper);
    // console.warn(heading);
  });
