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
let num = 1;
let sum = 0;
let deltaTime = 0;
let lastUpdate = 0;
let maxInteval = 40;
let backgroundSpeed = 0;
let backgroundBoolean = false;
let backgroundCounter = 400;
let platforms = [];
function createplat() {
  for (i = 0; i < num; i++) {
    platforms.push({
      x: 500,
      y: 300,
      width: 160,
      height: 30,
    });
  }
}
function renderplat() {
  context.fillStyle = "#45597E";
  context.fillRect(
    platforms[0].x,
    platforms[0].y,
    platforms[0].width,
    platforms[0].height
  );
}
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
    keys.up = true
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
function animation(currentTime = 0) {
  // frameAnimation
  requestAnimationFrame(animation);
  deltaTime = currentTime - lastUpdate;
  correction = deltaTime / 1000;
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

  // context.stroke();
  // context.beginPath();
  // context.rect(500, 260, 200, 100);
  // context.stroke();
  // player
  let sum2 = player.y - jump.height;
  context.beginPath();
  context.rect(player.x, sum2, player.width, player.height);
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
    if (player.x < backgroundSpeed * -1 - 2) {
      player.x += player.x_v * correction;
    }
    if (player.x + player.width > canvas.width + 2) {
      player.x -= player.x_v * correction;
    }
    if (player.x > backgroundCounter && backgroundSpeed > -1900) {
      backgroundBoolean = true;
    }
    if (backgroundBoolean == true) {
      backgroundSpeed -= player.x_v * correction;
      backgroundCounter += player.x_v * correction;
      canvasBox.style = `left: ${backgroundSpeed}px`;
    }
    if (player.x < backgroundCounter) {
      backgroundBoolean = false;
    }
    let i = -1;
    // console.log(sum2)
    if (
      platforms[0].x < player.x &&
      player.x < platforms[0].x + platforms[0].width &&
      platforms[0].y < sum2 &&
      sum2 < platforms[0].y + 10
    ) {
      i = 1;
    } else {
      i = -1
    }
    if(sum2 > 330 && player.x > platforms[0].x && player.x < platforms[0].x + platforms[0].height + platforms[0].width){
      i = -1
      jump.length = 18
    }
    if (i == 1) {
      player.y = platforms[0].y - player.height
      jump.length = 20
      player.jump = false
    } else if (i == -1 && player.x > platforms[0].x + platforms[0].width || player.x < 500 && player.x + player.width < 500){
      player.y = 400
      jump.length = 50
    }
    // if (player.x >= 500 && player.x <= 700 && jump.count > 49) {
    //   player.y = 280 - player.height;
    // } else {
    // }
    // console.log(jump.height)
  }
  renderplat();

  lastUpdate = currentTime;
}
createplat();
animation();
console.log(platforms);
document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
