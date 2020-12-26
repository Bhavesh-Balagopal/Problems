class Papre{
constructer(x,y,radius){
var options = {
isStatic : false,
restitution: 0.3,
friction: 0.5,
density: 1.2
}
 this.body = Bodies.circle(x,y,radius,options);
this.radius = 1.5;

 World.add(world,this.body)

}
display(){
ellipseMode(CENTER);
circle(this.positon.x,this.positon.y,this.width,this.height);
}


}


