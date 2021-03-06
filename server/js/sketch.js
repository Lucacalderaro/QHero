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
  if (parameters.start) {
    rendering();
    physical();
  }
}


//visualizzazione tasti pigiati
function keyTyped() {
  if (key === 'a') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      grid[0][parameters.alicePosition].pressed = true;
      grid[1][parameters.alicePosition].pressed = true;
      sendInfo('HV');
    } else {
      points.missA++;
    }
  } else if (key === 's') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      grid[0][parameters.alicePosition].pressed = true;
      grid[1][parameters.alicePosition].pressed = true;
      sendInfo('HV');
    } else {
      points.missA++;
    }
  } else if (key === 'd') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      grid[2][parameters.alicePosition].pressed = true;
      grid[3][parameters.alicePosition].pressed = true;
      sendInfo('DA');
    } else {
      points.missA++;
    }
  } else if (key === 'f') {
    if (grid[0][parameters.alicePosition].nota == true) {
      grid[0][parameters.alicePosition].correctPress = true;
      grid[2][parameters.alicePosition].pressed = true;
      grid[3][parameters.alicePosition].pressed = true;
      sendInfo('DA');
    } else {
      points.missA++;
    }
  }


  if (key === 'h') {
    if (grid[0][parameters.bobPosition].nota == true && grid[0][parameters.bobPosition].pressed) {
      points.hitB++;
      grid[0][parameters.bobPosition].correctPressB = true;
    } else {
      points.missB++;
    }
  } else if (key === 'j') {
    if (grid[0][parameters.bobPosition].nota == true && grid[1][parameters.bobPosition].pressed) {
      points.hitB++;
      grid[0][parameters.bobPosition].correctPressB = true;
    } else {
      points.missB++;
    }
  } else if (key === 'k') {
    if (grid[0][parameters.bobPosition].nota == true && grid[2][parameters.bobPosition].pressed) {
      points.hitB++;
      grid[0][parameters.bobPosition].correctPressB = true;
    } else {
      points.missB++;
    }
  } else if (key === 'l') {
    if (grid[0][parameters.bobPosition].nota == true && grid[3][parameters.bobPosition].pressed) {
      points.hitB++;
      grid[0][parameters.bobPosition].correctPressB = true;
    } else {
      points.missB++;
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
  reciveInfo();
  checkIfCorrect();
  checkIfCorrectB();
  moveGrid();
  setScore();
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

function reciveInfo() {
  //prendo bob.states.splices() e aggiorno grid
  console.log("length: ", bob.states.length);
  if (bob.states.length > 0) {
    var temp = bob.states.shift();
    var lastNote = cols;
    // find last not miss note
    for (var i = cols - 1; i > parameters.alicePosition - 1; i--) {
      if (grid[0][i].nota && !grid[0][i].miss) {
        lastNote = i;
      }
    }
    console.log("temp: ");
    console.log(temp);
    if (temp === 'H') {
      grid[1][lastNote].pressed = false;
      grid[2][lastNote].pressed = false;
      grid[3][lastNote].pressed = false;
      grid[0][lastNote].pressed = true;
      grid[0][lastNote].selectedBase = true;

    }
    if (temp === 'V') {
      grid[1][lastNote].pressed = true;
      grid[2][lastNote].pressed = false;
      grid[3][lastNote].pressed = false;
      grid[0][lastNote].pressed = false;
      grid[1][lastNote].selectedBase = true;
    }
    if (temp === 'D') {
      grid[1][lastNote].pressed = false;
      grid[2][lastNote].pressed = true;
      grid[3][lastNote].pressed = false;
      grid[0][lastNote].pressed = false;
      grid[2][lastNote].selectedBase = true;
    }
    if (temp === 'A') {
      grid[1][lastNote].pressed = false;
      grid[2][lastNote].pressed = false;
      grid[3][lastNote].pressed = true;
      grid[0][lastNote].pressed = false;
      grid[3][lastNote].selectedBase = true;
    }

  }
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
    for (var i = 0; i < rows; i++) {
      grid[i][parameters.alicePosition].miss = true;
    }
    points.missA++;
  }
  if (grid[0][parameters.alicePosition].correctPress == true && grid[0][parameters.alicePosition].nota == true) {
    points.hitA++;
  }
}

function checkIfCorrectB() {
  if (grid[0][parameters.bobPosition].correctPressB == false && grid[0][parameters.bobPosition].nota == true) {
    points.missB++;
  }
}


function moveGrid() {
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
          grid[i][j].pressed = grid[i][j - 1].pressed;
          grid[i][j - 1].pressed = false;
          grid[i][j].miss = grid[i][j - 1].miss;
          grid[i][j - 1].miss = false;
        }
      }
    }
  }
}