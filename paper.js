class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, r ,options);
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0,0,this.r, this.r);
      pop();
    }
  };
  