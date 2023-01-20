const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
canvas.height = 500;
canvas.width = 1800;

let player = {
  x: 100,
  y: 400,
  x_v: 5,
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
  count:0,
  length:50,
  height:0,
}

function keydown(e) {
  const {key} = e
  console.log(e)
  if(key == 'ArrowRight'|| e.keyCode == '68') {
    keys.right = true
  }
  if(key == 'ArrowLeft'|| e.keyCode == '65') {
    keys.left = true
  }
  if(key == 'ArrowUp'|| e.keyCode == '32') {
    player.jump = true
    console.log(player.jump)
  }
}
function keyup(e) {
  const {key} = e
  if(key == 'ArrowRight'|| e.keyCode == '68') {
    keys.right = false
  }
  if(key == 'ArrowLeft'|| e.keyCode == '65') {
    keys.left = false
  }
}
function animation() {
  // frameAnimation
  requestAnimationFrame(animation);
  //clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  // background
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.stroke();
  // line-earth
  context.beginPath();
  context.moveTo(0, 450);
  context.lineTo(800, 450);
  context.stroke();
  // player
  context.beginPath();
  context.rect(player.x, player.y-jump.height, player.width, player.height);
  context.stroke();
  context.closePath();
  // animUpdate
   if(keys.right == true){
    player.x += player.x_v
   }
   if(keys.left == true){
    player.x -= player.x_v
   }
   if(player.jump == true){
    jump.count++
    jump.height = 4 * jump.length*Math.sin(Math.PI*jump.count/jump.length)
   }
   if(jump.count>jump.length){
    jump.count=0
    player.jump=false
    jump.height = 0
   }
}
animation();
document.addEventListener('keydown',keydown)
document.addEventListener('keyup',keyup)


