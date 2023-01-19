// // const mario = document.querySelector(".mario");
// // let topup = -20
// // let rightup = 0
// // document.addEventListener("keydown", (event) => {
// //   console.log(event.key)
// //   if(event.key == 'ArrowUp') {
// //     rightup = rightup + 10
// //     mario.style = `top: ${topup}px`
// //     // setInterval(()=>{
// //     //   mario.style = `top: 0px`
// //     // }, 1000)
// //   } else if (event.key == 'ArrowRight') {
// //     mario.style = `left: ${rightup}px`
// //     rightup = rightup + 10
// //   }
// // });

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");
// canvas.height = 500;
// canvas.width = 800;
// const player = document.querySelector(".player");
// // context.rect(0, 0, 800, 500);
// // context.fillStyle='#9CEFFF';
// // context.fill();

// // context.beginPath();
// // context.rect(0,425,800,75)
// // context.fillStyle='#AC822E';
// // context.fill();
// // let y = 0
// // let x = 0
// // for (let i = 0; i < 55; i++) {
// //   context.beginPath();
// //   context.moveTo(0,y)
// //   context.lineTo(canvas.width,y)
// //   context.strokeStyle='#BABABA';
// //   context.stroke();
// //   context.beginPath();
// //   context.moveTo(x,0)
// //   context.lineTo(x,500)
// //   context.strokeStyle='#BABABA';
// //   context.stroke();
// //   y += 15
// //   x += 15
// // }

// // context.beginPath();
// // context.rect(10,360,45,65)
// // context.fillStyle='red'
// // context.fill();
// // context.stroke()

// let y = 0;
// let x = 0;
// let xpos = 10;
// let ypos = 360;
// let yposPress = ypos - 100;
// let isPressed = "neit";
// let RightPress = false
// function animate() {
//   requestAnimationFrame(animate);
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   context.rect(0, 0, 800, 500);
//   context.fillStyle = "#9CEFFF";
//   context.fill();

//   context.beginPath();
//   context.rect(0, 425, 800, 75);
//   context.fillStyle = "#AC822E";
//   context.fill();

//   for (let i = 0; i < 55; i++) {
//     context.beginPath();
//     context.moveTo(0, y);
//     context.lineTo(canvas.width, y);
//     context.strokeStyle = "#BABABA";
//     context.stroke();
//     context.beginPath();
//     context.moveTo(x, 0);
//     context.lineTo(x, 500);
//     context.strokeStyle = "#BABABA";
//     context.stroke();
//     y += 15;
//     x += 15;
//   }

//   context.beginPath();
//   context.rect(xpos, ypos, 45, 65);
//   context.fillStyle = "red";
//   context.fill();
//   context.stroke();

//   document.addEventListener("keydown", (event) => {
//     const { key } = event;
//     if (key == "ArrowRight") {
//       xpos += 0.05;
//     } else if (key == "ArrowLeft") {
//       xpos -= 0.05;
//     } else if (key == "ArrowUp") {
//       isPressed = true;
//     } else if (key == 'ArrowRight', key == 'ArrowUp') {
//       console.log(1)
//     }
//   });


//   if (isPressed == true) {
//     (ypos -= 2), 5;
//     if (ypos === yposPress) {
//       isPressed = false;
//     }
//   }
//   if (isPressed == false) {
//     (ypos += 2), 5;
//     if (ypos === 360) {
//       isPressed = "neit";
//     }
//   }
// }
// animate();
