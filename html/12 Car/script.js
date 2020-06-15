const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let jordi_modes = false;

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let frontWheel = new Image();
frontWheel.rot = 0;
frontWheel.pos = 0;
frontWheel.vel = 10;
frontWheel.src = "wheel.png";

let backWheel = new Image();
backWheel.rot = 0;
backWheel.pos =    0;
backWheel.vel = 10;
backWheel.src = "wheel.png";

let car = new Image();
car.pos =    0;
car.vel = 10;
car.src = "car.png";

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

function animate()
{
    backWheel.rot = frontWheel.rot;
    backWheel.pos = frontWheel.pos - 540;
    backWheel.vel = frontWheel.vel;

    car.pos = frontWheel.pos - 275;
    car.vel = frontWheel.vel;

  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  context.save();
  context.translate(frontWheel.pos, canvas.height - frontWheel.height/2);
  context.rotate(frontWheel.rot);
  context.drawImage(frontWheel,-frontWheel.width/2,-frontWheel.height/2);
  context.restore();

  context.save();
  context.translate(backWheel.pos, canvas.height - backWheel.height/2);
  context.rotate(backWheel.rot);
  context.drawImage(backWheel,-backWheel.width/2,-backWheel.height/2);
  context.restore();

  context.save();
  context.translate(car.pos, canvas.height - car.height/2);
  context.drawImage(car,-car.width/2,-car.height/2);
  context.restore();

  frontWheel.rot += frontWheel.vel/80;
  frontWheel.pos += frontWheel.vel;

  if(backWheel.pos > canvas.width)
  {
    frontWheel.pos = 0;
     backWheel.pos = 0;
  }

    if(frontWheel.pos < 0)
    {
    backWheel.pos = canvas.width;
     frontWheel.pos = canvas.width;
  }

  if(jordi_modes == true)
  {
    document.body.style.background = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
    frontWheel.vel = getRandomNumber(20,400);
    backWheel.vel = getRandomNumber(3000,40000);
  }
  else {
    document.body.style.background = "green";
    frontWheel.vel = 10;
    backWheel.vel = 10;
  }
  frontWheel.vel.dy += 10;

}

function clamp(){
  if(car.position.dx > width){
    car.position.dx = -car.width;
  }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
