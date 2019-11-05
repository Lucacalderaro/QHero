var rows = 4;
var cols = 20;
var w;
var h;
var mid;
var framePress;
var grid = new Array(rows);
var speed;
var count;


function setup() {
  // setting up env
  createCanvas(400, 700);
  frameRate(100);

  //setting var
  w = width / rows;
  h = height / cols;
  mid = floor(cols / 3);

  // init grid
  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  speed = 10;
  count = 0;
}

function draw() {
  //setting framePress to true
  framePress = true;
  rendering();
  physical();
}


//visualizzazione tasti pigiati
function keyTyped() {
  if (key === 'a' && framePress) {
    grid[0][mid].nota = true;
    framePress = false;
    sendInfo('a');
  } else if (key === 's' && framePress) {
    grid[1][mid].nota = true;
    framePress = false;
    sendInfo('s');
  } else if (key === 'd' && framePress) {
    grid[2][mid].nota = true;
    framePress = false;
    sendInfo('d');
  } else if (key === 'f' && framePress) {
    grid[3][mid].nota = true;
    framePress = false;
    sendInfo('f');
  }
}

function physical() {
  if (speed > count) {
    count++;
    return;
  }
  count = 0;
  //aggiornamento griglia
  for (var j = cols - 1; j > 1; j--) {
    for (var i = 0; i < rows; i++) {
      if (j == cols - 1) {
        grid[i][j].nota = false
      }
      if (j - 1) {
        if (grid[i][j - 1].nota) {
          grid[i][j].nota = true;
          grid[i][j - 1].nota = false;
        }
      }
    }
  }

}

function rendering() {
  background(220);
  //visualizzazione griglia
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].show();
    }
  }
}

function sendInfo(a) {
}

