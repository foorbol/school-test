/**
 * Main logic
 */

const form = document.getElementById('form');
console.warn(form);

CONFIG
  .forEach((item) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('form-check');

    const heading = document.createElement('h2');
    heading.textContent = item.heading;
    wrapper.appendChild(heading);

    item.wrongAnswers.forEach((answer) => {
      const optionContainer = document.createElement('div');
      const input = document.createElement('input');
      const label = document.createElement('label');
      label.classList.add('form-check-label');

      input.setAttribute('type', 'radio');

      optionContainer.appendChild(input);
      optionContainer.appendChild(label);

      wrapper.appendChild(optionContainer);
    });

    form.appendChild(wrapper);
    // console.warn(heading);
  });
