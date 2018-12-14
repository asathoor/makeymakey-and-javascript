'use strict';

// add image tag to #result
const robot = 'images/myRobot.png';

let img = document.createElement("img");
img.src = robot;
img.alt = 'A dangerous, wicked robot';
img.class = 'xxx-btn';
img.style.position = 'absolute';
result.appendChild(img); // now it's visible in #result

// sound MP3: happy birthday
const happy = 'sounds/happy.mp3'; // ye merrie melody
myMusic.controls = true;
myMusic.src = happy;
myMusic.currentTime= true;
myMusic.style.height = '75px';
myMusic.style.position = 'absolute';
myMusic.style.top = '222px';

// speed
let speed = 35;

// moves
let moveLeft = function(){
  console.log('der klikkes på');
  img.style.left = speed + 'px';
  speed += 35;
  console.log(speed);

  // sound
  myMusic.play();

  // bounce: hvad skal der ske når robotten når kanten?

  // bounce: og den anden kant?

  // hitpoints?
}

// event: museklik direkte på DOM
let klik = document.addEventListener(
  'click',  moveLeft
);
