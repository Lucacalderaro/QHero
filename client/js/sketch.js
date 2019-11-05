var rows = 4;
var cols = 20;
var w;
var h;
var grid = new Array(rows);
function setup() {
  createCanvas(400, 700);
  w = width / rows;
  h = height / cols;
frameRate(30);

  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  grid[0][0].nota = true;
}

function draw() {
  background(220);
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].show();
    }
  }

}
