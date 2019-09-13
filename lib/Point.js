class Point {
  constructor(position,radius,color,label){
    this.position = position
    this.radius = radius || 200;
    this.color = color;
    this.label = label || "";
    }

    draw(context){
      context.beginPath();
      context.strokeStyle = this.color;
      context.fillStyle = this.color;
      context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
      context.stroke();
      context.fill();
      context.closePath();
      context.font = "30px Arial";
      context.fillText(this.label,this.position.dx,this.position.dy-this.radius);
      }
}
