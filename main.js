/**
 * Main logic
 */

const form = document.getElementById('form');

CONFIG
  .forEach((item, x) => {
    const wrapper = createWrapper();
    const heading = createHeading(item.heading);

    wrapper.appendChild(heading);

    const allAnswers = item.wrongAnswers.map(d => d);
    allAnswers.push(item.correctAnswer);
    allAnswers.sort(() => Math.random() - 0.5);

    allAnswers
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
  // heading.classList.add('mr-24');

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

function checkResult() {
  const formData = $("form").serializeArray();

  if (formData.length !== CONFIG.length) {
    return console.error('Not all the form is filled up');
  }

  formData.forEach((answer, i) => answer.value !== CONFIG[i].correctAnswer ?
    updateLabel(answer.value, 'text-danger') :
    updateLabel(answer.value, 'text-success')
  );
}

function updateLabel(inputValue, classToAdd) {
  const inputId = $('input[value="'+inputValue+'"]').attr('id');
  $('label[for="'+inputId+'"]').addClass(classToAdd);
}
