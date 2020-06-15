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

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    grid.draw(context);


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
    n.draw(context);
    l.draw(context);
    m.draw(context);
    p.draw(context);
    q.draw(context);

    C.draw(context);
    A.draw(context);
    B.draw(context);
    vector.draw(context,A.position,1,5,10,10,"red");
    rad.draw(context,A.position,1,5,10,10,"white");
    tan.draw(context,A.position,1,5,10,10,"white")

}

animate();
