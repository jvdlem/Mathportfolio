const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let x1 = getRandomNumber(0,width);
let x2 = getRandomNumber(0,width);
let y1 = getRandomNumber(0,height);
let y2 = getRandomNumber(0,height);

let f = new LinearFunction(0,0)

let A = new Point(new Vector2d(x1,y1),20,"blue","1",true);
let B = new Point(new Vector2d(x2,y2),20,"red","2",true);





function animate(){
  requestAnimationFrame(animate);


  context.clearRect(0,0,width,height);
  f.defineLineWithTwoPoints(A,B);
      A.draw(context); B.draw(context);
    for(let x = 0; x < width ; x+=10){
    let point = new Point(new Vector2d(x,f.y(x)),4,"yellow");
    point.draw(context);
    }


}
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



animate();
