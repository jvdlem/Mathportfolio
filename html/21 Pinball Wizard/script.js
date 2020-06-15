const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let jordi_modes = false;
let A,B,distance;

A = new DPoint(new Vector2d(200,200),new Vector2d(getRandomNumber(0,20),getRandomNumber(0,20)),new Vector2d(0,0),200,"rgba(255,0,0,0.3)","A");
B = new DPoint(new Vector2d(800,900),new Vector2d(getRandomNumber(-0,-20),getRandomNumber(-0,-20)),new Vector2d(0,0),200,"rgba(0,0,255,0.3)","B");

A.rad = new Vector2d(1,1);
A.tan = new Vector2d(1,1);

B.rad = new Vector2d(1,1);
B.tan = new Vector2d(1,1);

function animate()
{
  A.rad.differenceVector(B.pos,A.pos);
  B.rad.differenceVector(A.pos,B.pos);
  distance = A.rad.magnitude;
  //console.log(distance);

  A.rad.magnitude = 1;
  B.rad.magnitude = 1;

  A.tan.perpendicular(A.rad);
  B.tan.perpendicular(B.rad);

  A.rad.magnitude =A.vel.dot(A.rad);
  A.tan.magnitude =A.vel.dot(A.tan);

  B.rad.magnitude =B.vel.dot(B.rad);
  B.tan.magnitude =B.vel.dot(B.tan);

  if(distance < A.radius + B.radius)
  {
    let temp = new Vector2d(1,1);
    temp.dx = A.rad.dx;
    temp.dy = A.rad.dy;

    A.rad.dx = B.rad.dx;
    A.rad.dy = B.rad.dy;

    B.rad.dx = temp.dx;
    B.rad.dy = temp.dy;

    A.vel.sumVector(A.rad,A.tan);
    B.vel.sumVector(B.rad,B.tan);

    A.vel.magnitude *= 1.1;
    B.vel.magnitude *= 1.1;

  }

  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  A.update();
  B.update();
  A.draw(context);
  B.draw(context);

  A.vel.draw(context,A.pos,10,"White");
  B.vel.draw(context,B.pos,10,"White");

  A.rad.draw(context,A.pos,10,"Red");
  B.rad.draw(context,B.pos,10,"Blue");
  A.tan.draw(context,A.pos,10,"green");
  B.tan.draw(context,B.pos,10,"yellow");

/////////////////////////
/////////////////////////
/////////////////////////
  if(jordi_modes == true)
  {
    document.body.style.background = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
    A.radius = getRandomNumber(10,400);
    B.radius = getRandomNumber(10,400);
    A.color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
    B.color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
  }
  else {
    document.body.style.background = "white";
    A.radius = 20;
    B.radius = 20;
    A.color = "rgba(255,0,0,0.3)","A";
    B.color = "rgba(0,0,255,0.3)","B";
  }
  /////////////////////////
  /////////////////////////
  /////////////////////////

}

animate();

/////////////////////////
/////////////////////////
/////////////////////////
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
addEventListener ('keydown',(evt)=>{
    console.log(evt.key);
    switch (evt.key)
    {
      case "ArrowRight":
      jordi_modes = true;
      break;
      case "ArrowLeft":
      jordi_modes = false;
      break;
    }
})
/////////////////////////
/////////////////////////
/////////////////////////
