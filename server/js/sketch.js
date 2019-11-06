var rows = 4;
var cols = 20;
var w;
var h;
var count;
var grid = new Array(rows);
var bob = {
  states: []
};
var alice = {
  states: []
};

var parameters = {
  speed: 5,
  spawnRate: 0.08,
  alicePosition: 4,
  bobPosition: 18,
  threshold: 16
};

function setup() {
  // setting up env
  let canvas = createCanvas(400, 600);
  canvas.parent('sketch-holder');
  frameRate(100);

  //setting var
  w = width / rows;
  h = height / cols;

  // init grid
  for (var i = 0; i < rows; i++) {
    grid[i] = new Array(cols);
  }

  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  count = 0;
}

function draw() {
  rendering();
  physical();
}


//visualizzazione tasti pigiati
function keyTyped() {
  if (key === 'a') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      sendInfo('HV');
      grid[0][parameters.alicePosition].pressed = true;
      grid[1][parameters.alicePosition].pressed = true;
    }
  } else if (key === 's') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      sendInfo('HV');
      grid[0][parameters.alicePosition].pressed = true;
      grid[1][parameters.alicePosition].pressed = true;
    }
  } else if (key === 'd') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      sendInfo('DA');
      grid[2][parameters.alicePosition].pressed = true;
      grid[3][parameters.alicePosition].pressed = true;
    }
  } else if (key === 'f') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      sendInfo('DA');
      grid[2][parameters.alicePosition].pressed = true;
      grid[3][parameters.alicePosition].pressed = true;
    }
  }

}

function physical() {

  if (100 / parameters.speed > count) {
    count++;
    return;
  }

  spawn();
  count = 0;
  //aggiornamento griglia
  moveGrid();
}

function rendering() {
  background(0);
  //visualizzazione griglia
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j].show();
    }
  }
}

function sendInfo(_data) {
  alice.states.push(_data)
}


function spawn() {
  if (random(1) < parameters.spawnRate) {
    for (var i = 0; i < rows; i++) {
      grid[i][1].nota = true;
    }
  }
}

function checkIfCorrect() {
  if (grid[0][parameters.alicePosition].correctPress == false && grid[0][parameters.alicePosition].nota == true) {
    console.log("MISS PRESS");
    // alice.states.push('HV');
    return false;
  }
  if (grid[0][parameters.alicePosition].correctPress == true && grid[0][parameters.alicePosition].nota == true) {
    console.log("BRAVO");
    // alice.states.push('AD');
    return true;
  }
}

function moveGrid() {
  checkIfCorrect();
  for (var j = cols - 1; j > 1; j--) {
    for (var i = 0; i < rows; i++) {
      if (j == cols - 1) {
        grid[i][j].nota = false
      }
      if (j - 1) {
        if (grid[i][j - 1].nota) {
          grid[i][j].nota = true;
          grid[i][j - 1].nota = false;
          grid[i][j].correctPress = grid[i][j - 1].correctPress;
          grid[i][j - 1].correctPress = false;
        }
      }
    }
  }
}