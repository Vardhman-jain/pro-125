RWx=0;
LWx=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(450,400);

canvas=createCanvas(520,530);
canvas.position(550,);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is online!');
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
}
RWx=results[0].pose.rightWrist.x;
LWx=results[0].pose.leftWrist.x;
difference=floor(RWx-LWx);
console.log(difference)
}
function draw() {
    textSize(30);

    fill('#fffff');
    text('Vardhman Jain', 50, 400);
    textSize(difference);
    text('word', 10, 30);
    fill(0, 102, 153);
}