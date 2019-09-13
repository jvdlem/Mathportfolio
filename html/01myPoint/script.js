const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// variabele
let size = 100;
let vfactor = 2;
let st = 0;

//array
let points = [];



//animate
function animate(){
  context.clearRect(0,0,width,height);
requestAnimationFrame(animate);

//size = size + vfactor;
//st = Math.random();



let color = "rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ st+")";
let A = new Point(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),size,color,this.radius);
points.push(A);
if(size>200)
{
vfactor = -vfactor;
}
if(size<50)
{
vfactor = -vfactor;
}
if(points.length>150)
{
  points= points.slice(1)
}


for(let i = 0; i<points.length; i++){
points[i].label = points[i].radius;
points[i].radius++;
points[i].draw(context);
//st = points[i].radius
st = points[i].radius/points[i].radius;
}
}
animate()





function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
