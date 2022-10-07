export let canvas = document.createElement('canvas');
export let ctx = canvas.getContext('2d');
//dark blue background
canvas.style.backgroundColor = 'DarkOrchid';


document.querySelector('#app')
   .appendChild(canvas);

canvas.width = window.innerWidth 
canvas.height = window.innerHeight