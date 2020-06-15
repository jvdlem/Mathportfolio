class Arrow{
  constructor(pos,color){
    this.pos = pos;
    this.angle = 0;
    this.color = color || "red";
    this.baseLength = 20;
    this.baseWitdh = 40;
    this.arrowLength = 40;
    this.arrowWidth = 20;
    this.strokeStyle = color || "red";
}

draw(context){
  let shaftLength = this.baseLength;
  let shaftGirth = this.baseWitdh;
  let arrowHeight = this.arrowLength;
  let arrowWidth = this.arrowWidth;

  context.fillStyle = this.color;
  context.strokeStyle = this.strokeStyle;

  context.save();
  context.translate(this.pos.dx,this.pos.dy);
  context.rotate(this.angle);

  context.beginPath();
  context.moveTo(0,0);
  context.lineTo(0,shaftLength/2);
  context.lineTo(shaftGirth,shaftLength/2);
  context.lineTo(shaftGirth,arrowHeight/2);
  context.lineTo(shaftGirth + arrowWidth,0);
  context.lineTo(shaftGirth,-arrowHeight/2);
  context.lineTo(shaftGirth,-shaftLength/2);
  context.lineTo(0,-shaftLength/2);

  context.closePath();
  context.stroke();
  context.fill();

  context.restore();
  }
}
