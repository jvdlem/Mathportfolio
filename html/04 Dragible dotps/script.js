const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let points = [];
let maxpoints = 100;
let counter = 0;
let hit = 0;
let size = 20;
let vfactor = 2;
let st = 0;
let color = "rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ 1+")";
for(let i=0; i<maxpoints; i++){
  addPoint("rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ 1+")","IK WIL DOOD",true);
  size = 20;
}
let mouse = new Vector2d();
let difference = new Vector2d();
function addPoint(color){
  let A = new Point(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),size,color,this.radius,"IK WIL DOOD",true);
  size = getRandomNumber(10,100);
  points.push(A);
}

function animate() {
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);


  context.beginPath();
  context.moveTo(points[0].position.dx, points[0].position.dy);

  for(let i = 0; i<points.length; i++){
    context.lineTo(points[i].position.dx, points[i].position.dy);
    context.fillStyle = color;
  }
  context.closePath();
  context.stroke();
  context.fill();


  for(let i = 0; i<points.length; i++){
    points[i].draw(context);
  }
}
animate()
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandom(max){
  let ans = Math.floor(Math.random()*max);
  return ans;
}

function Newpoint( )
{
  points.shift();
  let A = new Point(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),size,color,this.radius);
  color = "rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ 1+")";
points.push(A);

}
