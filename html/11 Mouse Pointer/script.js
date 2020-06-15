const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let jordi_modes = false;
let arrows = [];
let row = 20;
let number = 256;

let mouse = {};

for(let i = 0; i<number; i++)
{
let dx = (i % row) * 100;
let dy = Math.floor(i/row) * 100;
let arrow = new Arrow(new Vector2d(dx,dy));
arrows.push(arrow);
}



function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  for(let i = 0; i<arrows.length; i++)
  {
    let dx = mouse.x - arrows[i].pos.dx;
    let dy = mouse.y - arrows[i].pos.dy;
    let dist = Math.sqrt(dx*dx + dy*dy);
    arrows[i].strokeStyle = "rgba(" + dist/2 + "," + dist/2 + "," + dist/2 + "," + ((dist/1)/dist) + ")";
    arrows[i].color = "rgba(" + dist/2 + "," + dist/1.5 + "," + dist/1.3 + "," + ((dist/1)/dist) + ")";
    arrows[i].angle = Math.atan2(dy,dx);

    if(jordi_modes == true)
    {

        //arrows[i].baseWitdh = dist - 100;
        //arrows[i].baseLength = dist - 300;
        number = 1
        if(arrows[i].baseWitdh<3000){
        arrows[i].arrowWidth *= 1.1;
        arrows[i].arrowWidth *= 1.2;
        arrows[i].baseWitdh *= 1.3;
        arrows[i].baseLength *= 1.4;
        for(let i = 0; i<2; i++)
        {
          context.clearRect(0,0,width,height);
        }
      }
        arrows[i].strokeStyle = "rgba(" + dist/7 + "," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
        arrows[i].color = "rgba(" + dist/7 + "," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
      }
      else
      {
        number = 256;
        arrows[i].arrowWidth = 20;
        arrows[i].arrowWidth = 40;
        arrows[i].baseWitdh = 40;
        arrows[i].baseLength = 20;
      }
    arrows[i].draw(context);

  }
}
animate();

addEventListener('mousemove',(evt)=>{
mouse.x = evt.clientX;
mouse.y = evt.clientY;
})

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
