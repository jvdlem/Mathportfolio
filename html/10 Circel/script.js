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

let D = new Point(new Vector2d(200,200),5,"Blue","A",true);
let E = new Point(new Vector2d(900,600),5,"red","B",true);
let F = new Point(new Vector2d(400,400),5,"yellow","C",true);

let M = new Point(new Vector2d(width/2,height/2),10,"rgba(0,0,0,0)","Intersect",false);
let N = new Point(new Vector2d(width/2,height/2),10,"rgba(0,0,255,0.5)","Intersect",false);


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


    l.defineLineWithTwoPoints(A,B);
    m.defineLineWithTwoPoints(B,C);
    n.defineLineWithTwoPoints(C,A);



    D.position.dx = (C.position.dx + A.position.dx)/2
    D.position.dy = (C.position.dy + A.position.dy)/2

    E.position.dx = (A.position.dx + B.position.dx)/2
    E.position.dy = (A.position.dy + B.position.dy)/2

    F.position.dx = (B.position.dx + C.position.dx)/2
    F.position.dy = (B.position.dy + C.position.dy)/2


    o.slope = -1/m.slope;
    o.intercept = F.position.dy - o.slope*F.position.dx;
    p.slope = -1/n.slope;
    p.intercept = D.position.dy - p.slope*D.position.dx;
    q.slope = -1/l.slope;
    q.intercept = E.position.dy - q.slope*E.position.dx;

    let dx = M.position.dx - A.position.dx;
    let dy = M.position.dy - A.position.dy;
    M.radius = Math.sqrt((dx*dx)+(dy*dy))

    M.position.dx = o.intersction(p).x;
    M.position.dy = o.intersction(p).y;
    N.position.dx = o.intersction(p).x;
    N.position.dy = o.intersction(p).y;

    l.draw(context);
    m.draw(context);
    n.draw(context);

    o.draw(context);
    p.draw(context);
    q.draw(context);

    C.draw(context);
    A.draw(context);
    B.draw(context);
    D.draw(context);
    E.draw(context);
    F.draw(context);
    M.draw(context);
    N.draw(context);
}

animate();
