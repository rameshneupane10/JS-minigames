const canvas=document.getElementById("canvas");
const c=canvas.getContext("2d");

class Box{
    
    constructor()
    {
        this.x=0;
        this.y=0;
        this.x_speed=1;
    }
 draw()
{
     //sky
     c.beginPath();
     c.rect(this.x,0,canvas.width,canvas.height-100);
     c.fillStyle="skyblue";
     c.fill();

    //ground
     c.beginPath();
     c.rect(this.x,590,canvas.width,canvas.height-590);
     c.fillStyle="lightgreen";
     c.fill();

     //sun
     c.beginPath();
     c.arc(1300,60,40,0,360);
     c.fillStyle="yellow";
     c.fill();
}

move()
{
    this.x-=this.x_speed;
}
update()
{
    
    this.draw();
    canvas.addEventListener("click",(event)=>
    {
    this.move();
    });
}
}

class Ball
{
    constructor()
    {
        this.x=30;
        this.y=570;
       
    }

    draw()
    {
        c.beginPath();
        c.arc(this.x,this.y,20,0,360);
        c.fillStyle="red";
        c.fill();
    }
      
}

class obstacle
{
    constructor()
    {
        this.x=150;
        this.y=540;
        this.width=40;
        this.height=50;
        this.x_speed=1;
    }
    draw()
    {
        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.fillStyle="blue";
        c.fill();

        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.fillStyle="blue";
        c.fill();
     }
     move()
     {
         this.x=this.x_speed;
     }    
       
    }


const box = new Box();
const ball = new Ball(); 
const object =new obstacle();

//game loop 
function animate()
{
    c.clearRect(0,0,canvas.height,canvas.width);
    box.update();
    ball.draw();
    object.draw();
    object.move();
    requestAnimationFrame(animate);
}
animate();
