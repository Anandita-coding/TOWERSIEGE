class Polygon{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.image =loadImage("unnamed.png")

    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options)    
    World.add(world,this.body)
    }
    display(){
        var polygonPos = this.body.position;
        
        push ()
        translate(polygonPos.x,polygonPos.y)
        rectMode(CENTER)
        strokeWeight(0.578)
        fill ("skyBlue")
        image(this.image,0,0,this.r,this.r)
        pop ()
    }
}