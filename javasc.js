const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticleNumber = 50;

class Particle {
  constructor() {
    this.x = Math.random() * (1000 - 500) + 500;
    this.y = Math.random() * (1000 - 500) + 500;
    this.r = 20;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "white";
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
    this.shape();
  }

  shape()
  {
    c.beginPath();
    c.fillStyle = "black";
    c.arc(this.x-2, this.y-5, this.r-10, 0, Math.PI * 2);
    c.fill();
    
  }

  move() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
}
const particleArr = [];
for (let i = 0; i < totalParticleNumber; i++) {
  const obj = new Particle();
  particleArr.push(obj);
}

// game loop
canvas.addEventListener("mousemove",(event)=>
{
function animate() {
  c.clearRect(0, 0, 0, 0);

  for (let i = 0; i < totalParticleNumber; i++) {
    particleArr[i].draw();
    particleArr[i].move();
  }
  

  requestAnimationFrame(animate);
}

animate();
});
c.fillText("MOVE THE MOUSE TO CLEAR THE CANVAS",350,250,100*1000)



