const canvas=document.getElementById("canvas");
const c=canvas.getContext("2d");

class Box{

constructor(x,y,color)
{
    this.x=x;
    this.y=y;
    this.width=50;
    this.height=50;
    this.x_speed=1;
    this.y_speed=1;
    this.color=color;
}

 draw()
{
    c.beginPath();
    c.rect(this.x,this.y,this.width,this.height);
    c.fillStyle=this.color;
    c.fill();
}

move()
{
    this.x+=this.x_speed;
    this.y+=this.y_speed;

    if(this.x>canvas.width-this.width )
    {
        this.x_speed= -1;
    }
    else if(this.x<0)
        {
            this.x_speed=1;
        }
    
    if(this.y>canvas.width-this.width )
    {
        this.y_speed= -1;
    }
    else if(this.y<0)
        {
            this.y_speed=1;
        }
}
update()
{
    this.move();
    this.draw();
}
}


const box = new Box(20,20,"blue");
const box1 = new Box(50,80,"red");

//game loop 
function animate()
{
    c.clearRect(0,0,canvas.height,canvas.width);
    box.update();
    
    box1.update();

    requestAnimationFrame(animate);
}
animate();
