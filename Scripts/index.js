const canvas=document.querySelector("canvas");
const c=canvas.getContext('2d');

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

const wave={
    y: canvas.height/2,
    waveLength: 0.009,
    amplitude: 200,
    frequency: 0.01
}

// Animation logo
let dy=10;
let dLength=0.001;
let dAmplitude=5;
let increment=wave.frequency;
function animate(){
    requestAnimationFrame(animate);
    c.fillStyle="rgba(0,0,0,0.01)";
    c.fillRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.moveTo(0,canvas.height/2);
    for(let i=0;i<canvas.width;i++)
        c.lineTo(i,wave.y+Math.sin(i*wave.waveLength+increment)*wave.amplitude*Math.sin(increment));
    c.strokeStyle=`hsl(${Math.abs(200*Math.sin(increment))},100%,50%)`;
    c.stroke();
    increment+=wave.frequency;
}

animate();