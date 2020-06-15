const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let earth, moon;

earth = new Point(new Vector2d(width/2,height/2),200,"blue","Earth",false);
moon = new DPoint(new Vector2d(getRandomNumber(0,width),getRandomNumber(0,height)),new Vector2d(getRandomNumber(-4,4),getRandomNumber(-4,4)),new Vector2d(0,0),40,"grey","Moon");

function animate()
{
  context.clearRect(0,0,width,height);
  moon.acc.differenceVector(earth.position,moon.pos);
  moon.acc.magnitude = 0.05;

  moon.update();
  moon.draw(context);


  earth.draw(context);

  //moon.acc.draw(context,moon.pos,1,"yellow");
}


setInterval(animate,10)

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
