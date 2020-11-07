class Particles {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.4
      }
     this.body = Bodies.circle(x,y,this.radius,options);
     this.color =color(random(0,255)),(random(0,255)),(0,255);
     World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      var angle = this.body.angle;
      
      Push();
      translate(pos.x, pos.y);
      rotate(angle);
      nonStroke();
      fill(this.color);
      ellipseMode(radius);
      ellipse(0,0,this.r,this.r)
      pop();
    }
  };
