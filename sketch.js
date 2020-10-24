//  Giovanne Britto
//  project created based on The Code Train YT channel, thanks Daniel:
// ml5.js: Object Detection with COCO-SSD (Image)
// The Coding Train / Daniel Shiffman

let video;
let detector;
let detections = [];
function preload(){
  detector = ml5.objectDetector('cocossd');
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  detector.detect(video, gotDetections);
  
}

function draw() {
  image(video,0,0);
  for(let i=0; i < detections.length; i++){
    let object = detections[i];
    stroke(0,255,0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill('rgb(0,255,0)');
    textSize(24);    
    text(object.label, object.x + 10, object.y + 24);
  }
}

function gotDetections(error, results){
  if(error){
    console.log(error)
  }
  console.log(results);
  detections = results;
  detector.detect(video, gotDetections);
}