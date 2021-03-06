const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let points = [];
let maxpoints = 10;
let counter = 0;
let hit = 0;
let size = getRandomNumber(10,100);
let vfactor = 2;
let st = 0;
for(let i=0; i<maxpoints; i++){
  addPoint("rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ 1+")");
  size = getRandomNumber(10,100);
}
let mouse = new Vector2d();
let difference = new Vector2d();
window.addEventListener('click',(e)=>{
  mouse.dx = e.clientX;
  mouse.dy = e.clientY;

  for (var i = 0; i < points.length; i++) {
    difference.differenceVector(points[i].position,mouse);
     if(difference.magnitude<points[i].radius){
       points[i].color = "rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ 1+")";
       hit++
       points[i].radius = getRandomNumber(10,100);
     };
   }
   console.log(hit);
  if(hit>= maxpoints){
    hit = 0;
    counter = 0
    points.splice(0,maxpoints)
    for (var i = 0; i<maxpoints; i++) {
      addPoint("rgba("+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ getRandomNumber(0,255) +","+ 1+")");
    }
  }
})
function addPoint(color){
  let A = new Point(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),size,color,this.radius);
  A.label = counter;
  counter++;
  size = getRandomNumber(10,100);
  points.push(A);
}

function animate() {
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);


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
