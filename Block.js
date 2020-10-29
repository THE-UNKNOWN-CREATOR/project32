var score = 0;

class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }

      score()
      {
        if(this.visibility<0 && this.visibility>-155)
        {
          score++
        }

        text("SCORE :" + score, 750, 40);
      }

      end()
      {
        if(this.visibility === 0)
        {
          score = score-tries;
          text("YOUR SCORE IS " + score, 200, 460);
        }
      }

      display(){
        if(this.body.speed<3)
        {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      } else
      {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-100;
        tint(255, this.visibility);
        //rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
      }
}