import './styles/globals.scss';
import './styles/styles.scss';

document.querySelector('#imc-form')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const { height, weight } = form;
    const imc = weight.value / (height.value ^ 2);
    const imcElement = document.querySelector('#imc');
    const resultElement = document.querySelector('#result');

    imcElement.innerText = imc.toFixed(1);
    resultElement.style.display = 'block';
  });