// Alumno: Alan Giammarco
// Comision: 3
// tp:1
// link video: https://youtu.be/W49NTt5hP5w?si=DPeKH5X6bMEj67zq

let ilusion;
let mostrarLineas = true;


function setup() {
  createCanvas(800, 400);
  background(255);
  noLoop();
}

function draw() {
  let romboWidth = width / 16;
  let romboHeight = height / 8;

  stroke(0);
  strokeWeight(10);
  let spacing = romboHeight / 3;
  for (let y = spacing; y < height; y += spacing) {
    line(width / 2, y, width, y);
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let centerX = width / 2 + romboWidth * (2 * j + 1);
      let centerY = romboHeight * (2 * i + 1);
      drawRombus(romboWidth * 2, romboHeight * 2, centerX, centerY);
    }
  }
}

function drawRombus(w, h, centerX, centerY) {
  fill(0);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(centerX, centerY - h / 2);
  vertex(centerX + w / 2, centerY);
  vertex(centerX, centerY + h / 2);
  vertex(centerX - w / 2, centerY);
  endShape(CLOSE);

  if (mostrarLineas) {
    stroke(255);
    strokeWeight(6); //  líneas verticales
    for (let x = centerX - w / 2; x < centerX + w / 2; x += w / 8) {
      line(x, centerY - h / 2, x, centerY + h / 2);
    }
  }
}

function mouseClicked() {
  mostrarLineas = !mostrarLineas;  // Alterna el como se ven las lineas
  redraw();  
  image(ilusion, 0, 0);
}


