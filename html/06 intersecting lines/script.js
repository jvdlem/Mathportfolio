const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let x1 = 300;
let x2 = 400;
let y1 = 100;
let y2 = 700;

let grid = new Grid();

let A = new Point(new Vector2d(x1,y1),20,"Blue","A",true);
let B = new Point(new Vector2d(x2,y2),20,"red","B",true);
let C = new Point(new Vector2d(800,300),20,"yellow","C",true);
let D = new Point(new Vector2d(200,200),20,"NIGGER!!!","D",true);
let S = new Point(new Vector2d(width/2,height/2),20,"white","S",false);


let l = new LinearFunction(1,1);
let m = new LinearFunction(1,100);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  grid.draw(context);


  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(C,D);

  l.draw(context);
  m.draw(context);

  S.position.dx = l.intersction(m).x;
  S.position.dy = l.intersction(m).y;
  S.label = "("+l.intersction(m).x+","+l.intersction(m).y+")";


  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);

}

animate();
