const canvas=document.getElementById("canvas");
const c =canvas.getContext("2d");

//load the music

Audio()
const bgMusic =new Audio();
bgMusic.src="./sounds/Mall.ogg"
bgMusic.play();

function animate()
{
    requestAnimationFrame(animate);
}
animate();