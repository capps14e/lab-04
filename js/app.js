'use strict';
console.log('app.js is connected');


<script>

function myFunction() {

  let text;

  let user = prompt("Do you seek the guidance of Grace?:", "");

  if (user == null || user == "") {

    text = "User cancelled the prompt.";

  } else {

    text = "Hello " + person + "! How are you?";

  }

  document.getElementById("Prompt Example").innerHTML = text;

}

</script>