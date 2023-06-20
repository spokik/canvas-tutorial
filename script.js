const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function canvasStart() {
  canvas.width = 1000;
  canvas.height = 2000;
}
canvasStart();

context.strokeStyle = "blue";
context.lineWidth = 2;

context.beginPath();
context.moveTo(0, 50);
context.lineTo(1000, 50);
context.stroke();

for (let i = 50; i < 2000; i += 75) {
  context.beginPath();
  context.moveTo(0, i + 50);
  context.lineTo(1000, i + 50);
  context.stroke();

  context.beginPath();
  context.moveTo(0, i + 75);
  context.lineTo(1000, i + 75);
  context.stroke();
}

for (let x = 150; x < 2000; x += 150) {
  context.beginPath();
  context.moveTo(x, 0);
  context.lineTo(0, x * 3);
  context.stroke();
}

context.strokeStyle = "red";
context.beginPath();
context.moveTo(900, 0);
context.lineTo(900, 2000);
context.stroke();
