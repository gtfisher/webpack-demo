import _ from 'lodash';
import printMe from './print.js';
import './style.css';

async function getComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const { default: _ } = await import('lodash');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['<h2>', 'Hello', 'webpack', '</h2>'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
