'use strict';

const buttons = {
  buttons1: [
    'theme',
    'idea',
    'code',
    'table',
    'form',
    'img',
    'links',
    'conclusion',
  ],
  buttons2: [],
  buttons3: [],
  buttons4: [],
  buttons5: [],
};

function show(name, number) {
  buttons['buttons' + number].forEach(el => {
    const button = document.getElementById(el);
    const window = document.getElementById(el + '-window');
    if (el === name) {
      button.style.backgroundColor = 'rgba(255,255,255,0.1)';
      button.style.border = 'white solid';
      window.hidden = false;
    } else {
      button.style.backgroundColor = 'transparent';
      button.style.border = 'white thin solid';
      window.hidden = true;
    }
  });
}
