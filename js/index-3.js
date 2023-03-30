// import idleReverse from '/demka/img/img.idle.png'
// import idle from '../img/idle.png'
const idle = new Image();
idle.src = "../img/idleAnimation.png";

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const canvasBox = document.querySelector(".canvas-box");

canvas.height = 1000;
canvas.width = 1800;

let backgroundSpeed = 0;
let backgroundBoolean = false;
let backgroundCounter = 500;

const gravity = 0.5;
class PLayer {
  constructor() {
    this.position = {
      x: 100,
      y: 825,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    (this.width = 100), (this.height = 100);
    this.frames = 0;
    this.onPlatfrom = true;
  }
  draw() {
    idle.onload = function() {
      context.drawImage(
        idle,
        320 * this.frames,
        0,
        320,
        320,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
    idle.onerror = function() {
      alert("Ошибка загрузки ");
    };
    // context.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
  update() {
    this.frames++;
    this.velocity.y !== 0
      ? (this.onPlatform = false)
      : (this.onPlatform = true);
    if (this.frames > 59) this.frames = 0;
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
    else this.velocity.y = 0;
    if (this.position.x <= 0) {
      keys.left.pressed = false;
    } else if (this.position.x + this.width >= canvas.width) {
      keys.right.pressed = false;
    }
  }
}

class Platform {
  constructor({ x, y, width, height }) {
    this.position = {
      x,
      y,
    };
    (this.width = width), (this.height = height);
  }
  draw() {
    context.fillStyle = "blue";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new PLayer();
const platforms = [
  new Platform({
    x: 0,
    y: 950,
    width: 1800,
    height: 50,
  }),
];
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  shift: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);

  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed) {
    player.velocity.x = 6;
  } else if (keys.left.pressed) {
    player.velocity.x = -6;
  } else {
    player.velocity.x *= 0;
  }
  if (keys.shift.pressed) {
    if(keys.right.pressed){
      player.velocity.x = 10;
    } else if (keys.left.pressed){
      player.velocity.x = -10
    }
  }
  if (player.position.x > 400) {
    backgroundBoolean = true;
  }
  if (player.position.x > canvas.width - 310) {
    backgroundBoolean = false;
  }
  if (backgroundBoolean) {
    backgroundSpeed -= player.velocity.x;
    canvasBox.style = `left: ${backgroundSpeed}px`;
  }
  if (player.position.x < backgroundCounter) {
    backgroundSpeed = 0;
    canvasBox.style = `left: ${backgroundSpeed}px`;
  }
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });
  if (player.position.y + player.height > canvas.height - 10) {
    player.position.x = 200;
    player.position.y = 200;
  }
}
animate();

addEventListener("keydown", ({ keyCode }) => {
  // console.log(keyCode);

  // switch (keyCode) {
  //   case 65: //left
  //     keys.left.pressed = true;
  //     break;
  //   case 32: //up
  //     if (player.onPlatform === true && player.velocity.y === 0) {
  //       player.velocity.y -= 15;
  //     } else null;
  //     break;
  //   case 68: //right
  //     keys.right.pressed = true;
  //     break;
  // }

  if (keyCode == 65) {
    keys.left.pressed = true;
  } else if (keyCode == 32) {
    if (player.onPlatform === true && player.velocity.y === 0) {
      player.velocity.y -= 15;
    } else null;
  } else if (keyCode == 68) {
    keys.right.pressed = true;
  } else if (keyCode == 16) {
    keys.shift.pressed = true;
  }
});
addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65: //left
      keys.left.pressed = false;
      break;
    case 87: //up
      player.velocity.y -= 0;
      break;
    case 68: //right
      keys.right.pressed = false;
      break;
    case 16: //right
      keys.shift.pressed = false;
      break;
  }
});
