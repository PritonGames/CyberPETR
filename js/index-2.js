const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const canvasBox = document.querySelector(".canvas-box");
canvas.height = 500;
canvas.width = 2700;

let player = {
  x: 100,
  y: 400,
  x_v: 500,
  y_v: 0,
  jump: false,
  width: 40,
  height: 50,
};
let keys = {
  right: false,
  left: false,
  up: false,
};
let jump = {
  count: 0,
  length: 50,
  height: 0,
};
let deltaTime = 0;
let lastUpdate = 0;
let maxInteval = 40;
let backgroundSpeed = 0
let backgroundBoolean = false
let backgroundCounter = 400
function keydown(e) {
  const { key } = e;
  if (key == "ArrowRight" || e.keyCode == "68") {
    keys.right = true;
  }
  if (key == "ArrowLeft" || e.keyCode == "65") {
    keys.left = true;
  }
  if (key == "ArrowUp" || e.keyCode == "32" || e.keyCode == "87dddd") {
    player.jump = true;
  }
}
function keyup(e) {
  const { key } = e;
  if (key == "ArrowRight" || e.keyCode == "68") {
    keys.right = false;
  }
  if (key == "ArrowLeft" || e.keyCode == "65") {
    keys.left = false;
  }
}
function hitbox(params) {}
function animation(currentTime = 0) {
  // frameAnimation
  requestAnimationFrame(animation);
  deltaTime = currentTime - lastUpdate;
  correction = deltaTime / 1000;
  let fps = 1000 / deltaTime;
  
  //clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  // background
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.stroke();
  // line-earth
  context.beginPath();
  context.moveTo(0, 450);
  context.lineTo(canvas.width, 450);
  context.stroke();
  context.beginPath();
  context.moveTo(400, 0);
  context.lineTo(400, 800);
  context.stroke();
  // player
  context.beginPath();
  context.rect(player.x, player.y - jump.height, player.width, player.height);
  context.stroke();
  context.closePath();
  // animUpdate
  if (deltaTime < maxInteval) {
    // game update moment ahahahahahah)))english homie
    if (keys.right == true) {
      player.x += player.x_v * correction;
    }
    if (keys.left == true) {
      player.x -= player.x_v * correction;
    }
    if (player.jump == true) {
      jump.count++;
      jump.height =
        4 * jump.length * Math.sin((Math.PI * jump.count) / jump.length);
    }
    if (jump.count > jump.length) {
      jump.count = 0;
      player.jump = false;
      jump.height = 0;
    }
    if (player.x < backgroundSpeed *(-1) - 2) {
      player.x += player.x_v * correction;
    }
    if(player.x + player.width > canvas.width + 2){
      player.x -= player.x_v * correction;
    }
    if(player.x > backgroundCounter && backgroundSpeed > -1900){
      backgroundBoolean = true
    }
    if (backgroundBoolean == true) {
      backgroundSpeed -= player.x_v * correction
      backgroundCounter += player.x_v * correction
      canvasBox.style = `left: ${backgroundSpeed}px`;
    }
    if(player.x < backgroundCounter){
      backgroundBoolean = false
    }

  }
  console.clear();
  console.log("fps:", fps);
  lastUpdate = currentTime;
}
animation();
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
