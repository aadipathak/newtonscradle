class Roof{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic: false});
       this.width = w;
       this.height = h;
       World.add (world,this.body);
    }
    display(){
    push();
    rectMode(CENTRE);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }
}