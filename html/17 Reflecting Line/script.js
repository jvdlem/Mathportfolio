const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,200),20,"Blue","A",true);
let B = new Point(new Vector2d(900,600),20,"red","B",true);
let C = new Point(new Vector2d(400,400),20,"yellow","C",true);

let vector = new Vector2d(1,1)
let rad = new Vector2d(1,1)
let tan = new Vector2d(1,1)

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);
let n = new LinearFunction(0,0);


let o = new LinearFunction(0,0);
let p = new LinearFunction(0,0);
let q = new LinearFunction(0,0);
let length = 10;
let topwidth = getRandomNumber(10,30);
let topheight = getRandomNumber(10,30);
let scale = getRandomNumber(1,15);
let points = getRandomNumber(1,10);
let xSpeed = getRandomNumber(10,15);
let ySpeed = getRandomNumber(10,15);
let arrowcolor = "rgba(100,20,50,0.5)";
let color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";

let D = new DPoint(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),new Vector2d(1,1),new Vector2d(0,0),20,color,"");
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


    vector.dx = B.position.dx - A.position.dx;
    vector.dy = B.position.dy - A.position.dy;
    rad.dx = C.position.dx - A.position.dx;
    rad.dy = C.position.dy - A.position.dy;

    tan.dx = -rad.dy;
    tan.dy = rad.dx;

    rad.magnitude = 1;
    tan.magnitude = 1;

    rad.magnitude = vector.dot(rad);
    tan.magnitude = vector.dot(tan);

    l.defineLineWithTwoPoints(A,B);
    m.defineLineWithTwoPoints(A,C);
    n.slope = -1/m.slope;
    n.intercept = A.position.dy - n.slope*A.position.dx;
    m.draw(context);
    p.draw(context);
    q.draw(context);

    C.draw(context);
    A.draw(context);
    B.draw(context);
    D.draw(context);
    vector.draw(context,A.position,1,5,10,10,"red");
    rad.draw(context,A.position,1,5,10,10,"white");
    tan.draw(context,A.position,1,5,10,10,"white")

}

animate();

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
