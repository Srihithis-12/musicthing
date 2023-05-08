var song1 = "Oliver_Tree_Miss_You_(thinkNewa.com.ng).mp3";
var mump3 = "music.mp3";

function preload(){
    
}

function setUp(){
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();
pose.Net = ml5.poseNet(video, modleloaded);
poseNet.on('pose',gotposes)
}

function draw(){
    image(video,0 ,0, 600, 500);
}