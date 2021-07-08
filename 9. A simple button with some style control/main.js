
var btn = document.getElementById('btn')

// btn.addEventListener('click', 

// function(){
//    alert('Here is a funtioning button');
// });

function changeColor(color) {
   document.body.style.background = color;
}

let i = 0;


btn.onclick = function() {
   //do stuff
      changeColor('yellow');
      alert('Here is a funtioning button');
   
   
 }