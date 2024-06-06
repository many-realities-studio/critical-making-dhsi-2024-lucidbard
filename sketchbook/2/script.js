// @ts-check
/// <reference path="../node_modules/@types/p5/global.d.ts" />

function setup() {
  createCanvas(400, 400);
  noLoop(); // Prevent draw from looping
}

function draw() {
  background(220);
  // Example usage of drawStar function
  drawStar(width / 2, height / 2, 30, 70, 5, color(255, 204, 0));
}

// Function to draw a star
function drawStar(x, y, radius1, radius2, npoints, col) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  rotate
  fill(col);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
