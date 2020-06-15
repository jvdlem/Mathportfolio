const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let jordi_modes = false;
let bumperArray = fillBumperArray();
let ball = new DPoint(new Vector2d(100,100),new Vector2d(getRandomNumber(0,4),getRandomNumber(0,4)), new Vector2d(0,0), 5, "yellow");
ball.rad = new Vector2d(1,1);
ball.tan = new Vector2d(1,1);


function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);


  bumperArray.map((bump) => {
    if(jordi_modes == true)
    {
      document.body.style.background = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
      bump.radius= getRandomNumber(5,70);
      ball.radius= getRandomNumber(5,25);
      ball.color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)"
      bump.color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)"

    }
    else {
      document.body.style.background = "white";
      ball.radius = 5;
      bump.radius= 15;
      ball.color = "yellow"
      bump.color = "Nigga"
    }
    let distVector = new Vector2d(1,1);
    distVector.differenceVector(bump.position,ball.pos);
    //distVector.draw(context, ball.pos,1,"white");
    ball.rad.dx = bump.position.dx - ball.pos.dx;
    ball.rad.dy = bump.position.dy - ball.pos.dy;

    distance = ball.rad.magnitude;

    ball.rad.magnitude = 1;
    ball.tan.dx = -ball.rad.dy;
    ball.tan.dy = ball.rad.dx;
    ball.tan.magnitude = 1;
    ball.rad.magnitude = ball.rad.dot(ball.vel);
    ball.tan.magnitude = ball.tan.dot(ball.vel);

    if (distVector.magnitude < ball.radius + bump.radius) {
      ball.rad.magnitude = -ball.rad.magnitude;
      ball.vel.sumVector(ball.rad,ball.tan);
    }
    bump.draw(context);
  })

  ball.draw(context);
  ball.update();

}
animate();
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

function fillBumperArray() {
  let array = [];


  let startColomnWidth = 50;
  let colomnWidth = 100;

  let startRowHeight = 50;
  let rowHeight = 100;

  let numberOnRow = Math.floor(width/colomnWidth);
  let numberOfBumpers = Math.floor(height/rowHeight) * numberOnRow;

  for(let i = 0; i < numberOfBumpers; i++) {
    let x = startColomnWidth + (i % numberOnRow) * colomnWidth;
    let y = startRowHeight + (Math.floor(i/numberOnRow)*rowHeight)
    let myBumper = new Point(new Vector2d(x,y),15, "nigga",i+1);
    array.push(myBumper);
  }

  return array;

}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
