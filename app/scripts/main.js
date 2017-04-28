let mybutton = document.getElementById('togglebutton');
let sprinkhaan = document.querySelector('.sprinkhaan-container');

mybutton.addEventListener("click", function(){
  sprinkhaan.dataset.state = sprinkhaan.dataset.state == 'expanded' ? 'collapsed' : 'expanded';
});
