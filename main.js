song1 = "";
song2 = "";
status1 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload() {
song1 = loadSound("Imagine_Dragons_-_Believer.mp3");
song2 = loadSound("deep-cinematic-ballad_60sec-178308.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initilaized!")
}

function gotPoses(results) { 
    if(results.length > 0){

        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rigtWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}


function draw() {
    image(video, 0, 0, 600, 500);

    song1.isPlaying() = status1;
    
    fill("#FF0000");
    stroke("#FF0000");

   if(scoreLeftWrist > 0.2) {
    circle(leftWristX, leftWristY, 20);
    song2.stop();
   }

   if(status1 = false) {
    song1.play();
    document.getElementById("status").innerHTML = "Playing - Beleiver"; 
   }


}