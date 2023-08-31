'use strict';
console.log('app.js is connected');



function myFunction() {
//we created a variable
  let text;
//we asked the user for grace
  let user = prompt('Do you seek the guidance of Grace?:', '');
//if else conditional where we can check for truthy or falsy value
  if (user === null || user === '') {

    text = 'User cancelled the prompt.';

  } else {

    text = 'Hello ' + user + '! How are you?';

  }

  document.getElementById('promptExample').innerHTML = text;

}

