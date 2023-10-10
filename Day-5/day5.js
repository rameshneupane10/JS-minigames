const canvas=document.getElementById("canvas");
const c=canvas.getContext("2d");

class Box{
    constructor()
    {
        this.x=100;
        this.y=100;
        this.width=50;
        this.height=50;
    }

    draw()
    {
        c.beginPath();
        c.rect(this.x,this.y,this.width,this.height);
        c.fill();
    }
    move()
    {
        this.y++;
    }
    update()
    {
        this.draw();
        this.move();
    }
}

const box =new Box();

function animate()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    box.update();
    requestAnimationFrame(animate);
}
animate();