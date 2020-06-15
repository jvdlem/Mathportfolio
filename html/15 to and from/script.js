const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let toB = false;

let scale = 5;
let length = 10;
let topwidth = getRandomNumber(10,30);
let topheight = getRandomNumber(10,30);
let arrowcolor = "rgba(100,20,50,0.5)";

let A = new Point(new Vector2d(200,200),20,"red","A",true);
let B = new Point(new Vector2d(500,400),20,"blue","B",true);
let point = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"purple","p")

let grid = new Grid();
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);
  A.draw(context);
  B.draw(context);

if(point.vel.magnitude <= 1)
{
  toB = !toB;
}
  if(toB)
  {
    point.vel.differenceVector(B.position,point.pos);
  }
  else{
  point.vel.differenceVector(A.position,point.pos);
  }
  console.log(point.vel.magnitude);
  point.draw(context);
  B.position.draw(context,new Vector2d(0,0),1,"blue");
  point.pos.draw(context,new Vector2d(0,0),1,"purple");


  point.vel.scalMul(0.1);

  point.update();
  point.vel.draw(context,point.pos,scale,length,topheight,topwidth,arrowcolor);
  drawLineAB();
}

animate();

function drawLineAB()
{
  /*bliepbloep ik ben aan het coderen blipe bloep nu komt wat random letters: sefhjiwhsgfewnjkheofwiwhewnklwejfiwefhnuowhefunwuiefhwebfkjehfuw
  */
  context.beginPath();
  context.strokeStyle = "mindnightblue";
  context.setLineDash([5,15]);
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.closePath();
  context.stroke();
  context.setLineDash([0,0])
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
