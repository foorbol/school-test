/**
 * Main logic
 */

const container = document.getElementById('container');
console.warn(container);

CONFIG
  .forEach((item, i) => {
    const heading = document.createElement('h1');
    heading.textContent = item.heading;
    container.appendChild(heading);
    console.warn(heading);
  });
