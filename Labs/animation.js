window.onload init;
var cnv;
var ctx;

function init(){
  //get canvas
  cnv = document.getElementById('cnv');
  //set size of canvas
  cnv.width = window.innerWidth;
  cnv.height = window.innerHeight;
  cnv.style.border = 'solid black 2x';
  cnv.style.backgroundColor = 'rgba(0,44,55, .5)';
  //get context
  ctx = cnv.getContext('2d');
  animate();
}

var x, y, vector, radius;
x = Math.random()*window.innerWidth;
y = Math.random()*window.innerHeight;
vecotr = new JSVector(Math.random()*10-5, Math.random()*10-5)
radius = 30;

fuction animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

  ctx.strokeStyle = 'rgb(255,105,180)';
  ctx.fillStyle = 'rgb(255,105,180)';
  ctx.beginPath();
  ctx.arc(x,y,radius, Math.PI*2, 0, false);
  ctx.fill();
  ctx.stroke();

  if(x > window.innerWidth || x < 0) vector.rotate(Math.PI * Math.random()*2);
  if(x > window.innerHeight || y < 0) vector.rotate(Math.PI * Math.random()*2)
}
