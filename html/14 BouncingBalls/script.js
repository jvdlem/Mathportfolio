const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
var audio = new Audio('Sound');
let grid = new Grid();
let points = getRandomNumber(1,10);
let jordi_modes = false;
let xSpeed = getRandomNumber(10,15);
let ySpeed = getRandomNumber(10,15);
let scale = getRandomNumber(1,15);
let length = 10;
let topwidth = getRandomNumber(10,30);
let topheight = getRandomNumber(10,30);
let arrowcolor = "rgba(100,20,50,0.5)";
let color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
let pointsAmount = []
for (var i = 0; i <points; i++)
{
let point = new DPoint(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),new Vector2d(xSpeed,ySpeed),new Vector2d(0,0),20,color,"");
pointsAmount.push(point);
}
function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    grid.draw(context);
for(var i = 0; i < pointsAmount.length; i++)
{
    pointsAmount[i].update();
    pointsAmount[i].draw(context);
    pointsAmount[i].vel.draw(context,pointsAmount[i].pos,scale,length,topheight,topwidth,arrowcolor);
}
    if(jordi_modes == true)
    {
      for(var i = 0; i < pointsAmount.length; i++)
      {
      document.body.style.background = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
      pointsAmount[i].radius=getRandomNumber(1,100);
      pointsAmount[i].color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
      scale = getRandomNumber(1,20);
      length = getRandomNumber(1,100);
      topwidth = getRandomNumber(1,100);
      topheight = getRandomNumber(1,100);
      arrowcolor = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
      pointsAmount[i].audio.src = 'Sound.wav';

    }}
    else
    {
      for(var i = 0; i < pointsAmount.length; i++)
      {
      document.body.style.background = "white";
      pointsAmount[i].radius=20;
      pointsAmount[i].color = "rgba(255,20,50,1)";;
      scale = 10;
      length = 10;
      topwidth = 20;
      topheight = 30;
      arrowcolor = "rgba(50,200,250,1)";;
    }}
}
animate();
addEventListener ('keydown',(evt)=>{
    console.log(evt.key);
    switch (evt.key)
    {
      case "ArrowRight":
      jordi_modes = true;
      break;
      case "ArrowLeft":
      jordi_modes = false;
      break;
    }
})
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
