const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let jordi_modes = false;
let corona_modus = false;
let molecules = fillMoleculeArray();

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  molecules.map((molecule)=>{
    molecule.update();
    molecule.draw(context);
    molecules.map((otherMolecule)=>{
      if(molecule.index != otherMolecule.index){
        let distance = new Vector2d(1,1);
        molecule.nextPos.sumVector(molecule.pos,molecule.vel);
        distance.differenceVector(otherMolecule.nextPos,molecule.nextPos);
        //distance.draw(context,molecule.pos,1,"rgba(255,0,0,0.1)");
        if(distance.magnitude < molecule.radius + otherMolecule.radius){
          molecule.rad.dx = distance.dx;
          molecule.rad.dy = distance.dy;
          otherMolecule.rad.dx = distance.dx;
          otherMolecule.rad.dy = distance.dy;

          molecule.rad.magnitude =1;
          otherMolecule.rad.magnitude =1;

          molecule.rad.magnitude = molecule.rad.dot(molecule.vel);
          otherMolecule.rad.magnitude = otherMolecule.rad.dot(otherMolecule.vel);
          molecule.tan.magnitude = molecule.tan.dot(molecule.vel);
          otherMolecule.tan.magnitude = otherMolecule.tan.dot(otherMolecule.vel);

          molecule.tan.dx = -molecule.rad.dy;
          molecule.tan.dy = molecule.rad.dx;
          otherMolecule.tan.dx = -otherMolecule.rad.dy;
          otherMolecule.tan.dy = otherMolecule.rad.dx;

          let temp = new Vector2d(1,1);
          temp.dx = molecule.rad.dx;
          temp.dy = molecule.rad.dy;

          molecule.rad.dx = otherMolecule.rad.dx;
          molecule.rad.dy = otherMolecule.rad.dy;

          otherMolecule.rad.dx = temp.dx;
          otherMolecule.rad.dy = temp.dy;

          molecule.vel.sumVector(molecule.rad,molecule.tan);
          otherMolecule.vel.sumVector(otherMolecule.rad,otherMolecule.tan);
          if(corona_modus == true)
          {
            otherMolecule.color = "Red";
          }

          if(jordi_modes == true)
          {

              molecule.vel.magnitude *= 1.1;
              otherMolecule.vel.magnitude *= 1.1;
              molecule.radius *= 0.9;
              otherMolecule.radius *= 0.9;
              molecule.color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
              otherMolecule.color = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
            document.body.style.background = "rgba("+ getRandomNumber(0,1)*255 +"," + getRandomNumber(0,1)*255 + "," + getRandomNumber(0,1)*255 + ",1)";
          }
          else if(corona_modus != true) {
            {
              molecule.vel.magnitude = 1;
              otherMolecule.vel.magnitude = 1;
              molecule.radius = 20;
              otherMolecule.radius = 20;
              molecule.color = "yellow";
              otherMolecule.color = "yellow";
            document.body.style.background = "midnightblue";
            }
          }
        }
      }

    });
  })
}

animate();

function fillMoleculeArray()
{
let array =[];
let numberOfMolecules = 100;
let collumnWidth = 100;
let rowHeight = 100;
let moleculesOnARow = 15;

for(let i=0; i<numberOfMolecules; i++)
{

//let x = collumnWidth/2 + i%moleculesOnARow * collumnWidth;
//let y = rowHeight/2 + Math.floor(i/moleculesOnARow);
let x = getRandomNumber(0,canvas.width);
let y = getRandomNumber(0,canvas.height);
let color = "yellow";
if(i<=0){
  color = "red";
}
else
{
  color = "yellow";
}
let molecule = new DPoint(new Vector2d(x,y),new Vector2d(getRandomNumber(-5,5),getRandomNumber(-5,5)),new Vector2d(0,0),20,color," "+(i+1));
molecule.nextPos = new Vector2d(1,1);
molecule.index =i;
molecule.rad = new Vector2d(1,1);
molecule.tan = new Vector2d(1,1);
array.push(molecule);
}

return array;
}




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
      case "ArrowUp":
      corona_modus = true;
      break;
      case "ArrowLeft":
      jordi_modes = false;
      break;
    }
})
