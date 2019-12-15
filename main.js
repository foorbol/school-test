/**
 * Main logic
 */

const form = document.getElementById('form');
console.warn(form);

CONFIG
  .forEach((item, x) => {
    const wrapper = createWrapper();
    const heading = createHeading(item.heading);

    wrapper.appendChild(heading);

    item.wrongAnswers
      .forEach((answer, y) => {
        const answerElement = createAnswer(x, y, answer);
        wrapper.appendChild(answerElement);
      });

    form.appendChild(wrapper);
  });

function createWrapper() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  return wrapper;
}


function createHeading(content) {
  const heading = document.createElement('h2');
  heading.textContent = content;

  return heading;
}

function createAnswer(blockIndex, answerIndex, answer) {
  const id = `${blockIndex}-${answerIndex}`;
  const optionContainer = document.createElement('div');
  optionContainer.classList.add('form-check');
  const input = document.createElement('input');
  input.classList.add('form-check-input');
  input.setAttribute('id', id);
  input.setAttribute('name', blockIndex.toString());
  input.setAttribute('value', answer);
  const label = document.createElement('label');
  label.setAttribute('for', id);
  label.textContent = answer;
  label.classList.add('form-check-label');

  input.setAttribute('type', 'radio');

  optionContainer.appendChild(input);
  optionContainer.appendChild(label);

  return optionContainer;
}
