nosex=0;
nosey=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/WzHB9kbk/57-577404-gift-clipart-birthday-accessory-birthday-cap-png-file.jpg");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("model has loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log("results");
        nosex=results[0].pose.nose.x-60;
        nosey=results[0].pose.nose.y-230;
    }
}

function draw(){
    image(video,0,0,500,500);
    image(clown_nose,nosex,nosey,150,150);
}

function take_snapshot(){
    save()
}






































