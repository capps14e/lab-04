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



"use strict";
console.log("our loop js file is connected!");


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);





 console.log("For loops incorporate the 3 required parts of a loop on a single line: ");
 console.log("(1) starting variable, ");
 console.log("(2) an expression to end the loop, ");
 console.log("(3) an expression to increment the starting variable. ");
 console.log('\n');


//  for(1.  2.  3. ){

//  }
//                             count = count + 1
for(let count = 0;  count < 50;  count++){
  // console.log('we are looping', count);
}

for(let count = 50; count >= 0; count-=10){
  // console.log('count going down', count);
}



//grab our html section element id in the section in the footer
let imageElement = document.getElementById('imageSection');
console.log(imageElement);

//ask the user for info
//prompt methods return the value as a string only text
let userInput = prompt('Did you burn the tree?');
// console.log(typeof(userInput));
//can be checked in our if              number    <-   string
let userInputParsed =  parseInt(userInput);

//add check to see that we have a number 
if(!isNaN(userInputParsed)){
  //ask question again
  console.log('we have a valid number to use!');
} else {
  userInput = prompt('Please, did you burn the tree?');
}


//              user    4
for(let i = 0; i < userInputParsed; i++){
  let listImage = document.createElement('li');
  console.log(listImage);
  // string interpolation or string template or template literal '  ---  ` ${}`
  listImage.textContent = `image number ${i + 1}`;
  //creat html img tag first
  let image = document.createElement('img');
  // console.log('empty image tag: ',image);
  //we add actual img link. 
  image.setAttribute('src', 'https://imgur.com/gallery/7oGlcpY');
  // is how we get the image to the html it appends each image to the browser 
  //we give the image to the <li>
  listImage.appendChild(image); 
  //we give <li> tag to our section in html
  imageElement.appendChild(listImage);
}
