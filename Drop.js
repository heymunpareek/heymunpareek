class Drop {
    constructor(x, y, radius) {
        var op={
            isStatic: false,
            friction: 0.1
        }
        this.body = Bodies.circle(x, y, radius, op);        
        this.radiusX = radius;
        World.add(world, this.body);
    }
    display() {
        push()
        translate(this.body.position.x, this.body.position.y);
        fill("blue");
        circle(0, 0, this.radiusX*2);
        pop();
    }
    update() {
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: Math.round(random(0,width)), y: 0}); 
        }
    }
}