const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

let points = [];
let numberOfPoints = 4;

canvas.width = width;
canvas.height = height;

let A,B,background,l;

A = new Point(200,200,20,"red",true);
B = new Point(500,300,20,"blue",true)
C = new Point(10,10,15,"white",false)
D = new Point(30,10,15,"white",false)
background = new GraphBackGround();

l = new LinearFunction(0.1,100);

console.log(l.y(10));

//for(let x = 0; x <= 500; x+=5){
//    console.log(l.y(x));
//    let p = new Point(x,l.y(x),2,"yellow");
//    p.draw;
//}

animate();

function animate(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    background.draw();
    A.draw();
    B.draw();

    l.slope = (A.y - B.y)/(A.x - B.x);
    l.intercept = A.y - l.slope * A.x;

    C.x = 0;
    C.y = l.y(0);
    D.x = width;
    D.y = l.y(width);

    context.beginPath();
    context.moveTo(C.x,C.y);
    context.lineTo(D.x,D.y);
    context.closePath();
    context.stroke();

    C.draw();
    D.draw();
}