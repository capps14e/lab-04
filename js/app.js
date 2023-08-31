'use strict';
console.log('app.js is connected');



function myFunction() {
//  console.log('proof that we are invoking our function');
 //we created a variable
  let text;
//  we asked the user for grace
  let user = prompt('What is your name, Tarnished?:', '');
// if else conditional where we can check for truthy or falsy value
  if (user === null || user === '') {

    text = 'User cancelled the prompt.';

  } else {

    text = 'Hello ' + user + '! How are you?';

  }

  document.getElementById('promptExample').innerHTML = text;

}

