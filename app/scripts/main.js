import Sprinkhaan from './Sprinkhaan.js';

let mybutton = document.getElementById('togglebutton');
let mySprinkhaan = new Sprinkhaan();

mybutton.addEventListener("click", function(){
  sprinkhaan.dataset.state = sprinkhaan.dataset.state === 'expanded' ? 'collapsed' : 'expanded';
});

