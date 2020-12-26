class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 2000;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
this.body.position.y = 650;
    
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
