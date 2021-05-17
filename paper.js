class Paper {
    constructor(x, y,w,h) {
      var options = {
          'restitution':0.8,
          'friction':0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.paperWidth = 50;
      this.paperHeight = 50;
      
      this.image=loadImage("paper.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      imageMode(CENTER);
			image(this.image, 0,-this.paperHeight,this.paperWidth, this.paperHeight)
      
      rect(0, 0, this.paperWidth, this.paperHeight);
      pop();
    }
  };
  