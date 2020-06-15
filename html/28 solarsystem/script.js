const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let sun, earth, earth_base_position;
let size_factor =0.05;

let minPlaneten = 1;
let maxplaneten = 100/(size_factor*5);
let minMaanen = 0;
let maxMaanen = 4;
let planetBrightnes = 100;
let distanceBetweenPlanets = 400;
let planet_speed = getRandomNumber(10,2500);
let moon_speed = getRandomNumber(10,50);
let grid = new Grid(20,20,100,100)


let planetArray = fillPlanetArray();
sun = new Point(new Vector2d(width/2,height/2),150*size_factor,"yellow","sun",false);




function animate()
{
  context.clearRect(0,0,width,height);
  requestAnimationFrame(animate);
  planetArray.map(planet => {
    planet.moonarray.map(moon =>{
      context.beginPath();
      context.strokeStyle = "#e6e6e6";
      context.arc(planet.position.dx,planet.position.dy,moon.base_position.magnitude,0,Math.PI*2);
      context.stroke();
      moon.draw(context);
      moon.position.sumVector(moon.base_position,planet.position);
      moon.base_position.angle += moon.moonspeed/10;
    })
  context.beginPath();
  context.strokeStyle = "#e6e6e6";
  context.arc(sun.position.dx,sun.position.dy,planet.base_position.magnitude,0,Math.PI*2);
  context.stroke();
  planet.draw(context);
  planet.position.sumVector(planet.base_position,sun.position);
  planet.base_position.angle += planet.planetspeed/100;
});



  planet_speed *= 2.1
  sun.draw(context);
}

function fillPlanetArray()
{
  let array = [];
  let numberOfPlanets = getRandomNumber(minPlaneten,maxplaneten);
  for(let i=0; i<numberOfPlanets; i++)
  {
  let numberOfMoons = getRandomNumber(minMaanen,maxMaanen);
  planet = new Point(new Vector2d(distanceBetweenPlanets*i*size_factor,distanceBetweenPlanets*i*size_factor+distanceBetweenPlanets),getRandomNumber(10,50)*size_factor,"lightblue","",false);
  planet.base_position = new Vector2d(distanceBetweenPlanets*i*size_factor+(distanceBetweenPlanets*size_factor),distanceBetweenPlanets*i*size_factor+(distanceBetweenPlanets*size_factor));
  planet.planetspeed = planet_speed/planet.base_position.magnitude;
  planet.color = "rgba("+ (255/planet.base_position.magnitude)*planetBrightnes*getRandomNumber(1,4) +"," + (255/planet.base_position.magnitude)*planetBrightnes*getRandomNumber(1,4) + "," + (255/planet.base_position.magnitude)*planetBrightnes*getRandomNumber(1,4) + ",1)"
  planet.moonarray = [];
  let moon_speed = getRandomNumber(10,50);
  for(let i=0; i<numberOfMoons; i++)
  {
    moon = new Point(new Vector2d(50*i*size_factor,50*i*size_factor+50),getRandomNumber(10,20)*size_factor,"grey","",false);
    moon.base_position = new Vector2d(50*i*size_factor+(50*size_factor),50*i*size_factor+(50*size_factor));
    moon.moonspeed = moon_speed/moon.base_position.magnitude;
    planet.moonarray.push(moon);
  }
  array.push(planet);
  }
  return array;
}


function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}







animate();
