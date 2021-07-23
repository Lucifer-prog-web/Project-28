class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.life1 = "#green";
    this.life2 = "#green";
    this.life3 = "#green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Computer", width - 310, 40);

    fill(this.life1);
    rect(width - 420, 50, 70, 30);
    fill(this.life2);
    rect(width - 350, 50, 70, 30);
    fill(this.life3);
    rect(width - 280, 50, 70, 30);
    pop();
  }

  reduceLife(archerLife){
    if(archerLife === 2){
      this.life1 = "red";
    }

    if(archerLife === 1){
      this.life2 = "red";
    }

    if(archerLife === 0) {
      this.life3 === "red";
    }

    if(
      baseCollision.collided ||
      archerCollision.collided ||
      playerCollision.collided
    ){
      computerArcherLife -=1
      computer.reduceLife(computerArcherLife);
      if(computerArcherLife <=0){
        computerArcher.collapse = true;
        Matter.Body.setStatic(computerArcher.body,false);
        Matter.Body.setStatic(computer.body , false);
        Matter.Body.setPosition(computer.body, {
          x: width - 100,
          y: computer.body.position.y
        });
      }
    }
    
  }

  remove() {
    this.image = loadImage("./assets/player.png");
    this.width = 300;
    this.height = 300;

    Matter.World.remove(world,this.body);

  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
