'use strict';
console.log('app.js is connected');



function myFunction() {

  let text;

  let user = prompt('What is your name, Tarnished?:', '');

  if (user === null || user === '') {

    text = 'User cancelled the prompt.';

  } else {

    text = 'Hello ' + user + '! How are you?';

  }

  document.getElementById('promptExample').innerHTML = text;

}

