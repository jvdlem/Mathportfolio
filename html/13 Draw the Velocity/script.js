const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let points = 100;


let jordi_modes = false;
let xSpeed = getRandomNumber(2,10);
let ySpeed = getRandomNumber(1,5);
let color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
let pointsAmount = []
for (var i = 0; i <points; i++)
{
let point = new DPoint(new Vector2d(getRandomNumber(0,canvas.width),getRandomNumber(0,canvas.height)),new Vector2d(xSpeed,ySpeed),new Vector2d(0,1),20,color,"Bitch");
pointsAmount.push(point);
}


let scale = 10;
let length = 10;
let topwidth = 20;
let topheight = 30;
let arrowcolor = "blue";

function animate()
{
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);


for(var i = 0; i < pointsAmount.length; i++)
{
    pointsAmount[i].update();
    pointsAmount[i].draw(context);
    pointsAmount[i].vel.draw(context,pointsAmount[i].pos,scale,length,topheight,topwidth,arrowcolor);
}
}

animate();

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
