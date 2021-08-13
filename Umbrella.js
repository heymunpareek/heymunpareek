class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        this.best_man_image = loadImage("bat/Bestman-01.png");

        this.new_umbrella_position = this.umbrella.position.y - 60;
        this.umbrella_original_position = this.umbrella.position.y;
        
    }

    display(){
        var pos = this.umbrella.position;
        var pos_new = this.new_umbrella_position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if(frameCount > 200){
            image(this.best_man_image, pos.x, this.umbrella_original_position + 50, 300, 300);
            Matter.Body.setPosition(this.umbrella, {x: pos.x, y: pos_new})
        }
        else{
            image(this.image,pos.x,pos.y+70,300,300);
        }        
    }
}
