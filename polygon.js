class Polygon{
    constructor(x,y,sides,radius){
        var options={
            isStatic = true
        }
        this.body = Bodies.Polygon(x,y,sides,radius,options);
        this.width = 35;
        this.height = 25;
        World.add(world,this.body);
        this.image = loadImage("polygon.png");
    }
    display(){
    var  angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(0,0,this.width, this.height);
    pop();
    }
}


    
    
