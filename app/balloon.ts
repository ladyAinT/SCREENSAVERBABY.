import {ctx, canvas} from './canvas';

function drawBalloon (x,y) {
  // Draw a white string
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(x,y+130);
  ctx.lineTo(x,y);
  ctx.stroke();
  // Draw a red circle
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x,y,50,0,Math.PI*2);
  ctx.fill();
  // draw a white square on the circle
  // for the "reflection"
 ctx.strokeRect(x+10,y+10,10,10);
}
drawBalloon(500,400)