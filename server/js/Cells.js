function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.nota = false;
  this.correctPress = false;
  this.selectedBase = "";
  this.pressed = false;
  //colori
  this.verde = color(96, 241, 102);
  this.rosso = color(186, 35, 42);
  this.giallo = color(232, 245, 95);
  this.blu = color(93, 188, 210);
  this.backQ = color(16, 18, 31);

  this.show = function () {
    if (this.j == parameters.alicePosition) {
      noStroke();
      fill(217, 17, 17);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(240);
      fill(128, 0, 0);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
    if (this.j == parameters.bobPosition) {
      noStroke();
      fill(17, 217, 17);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(240);
      fill(128, 0, 0);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
    if (this.j < parameters.alicePosition) {
      this.beforeAlice();
    }
    if (this.j > parameters.alicePosition && this.j < parameters.threshold) {
      this.betweenAliceAndBob();
    }
    if (this.j > parameters.threshold && this.j != parameters.bobPosition) {
      this.nearBob();
    }
  }


  this.setColore = function () {
    if (this.i == 0) {
      return this.verde;
    } else if (this.i == 1) {
      return this.rosso;
    } else if (this.i == 2) {
      return this.giallo;
    } else {
      return this.blu;
    }
  }


  this.drawElipse = function () {
    noStroke();
    fill(this.setColore());
    ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
  }

  this.beforeAlice = function () {
    if (this.nota) {
      this.drawNoteAlice();
    }
    else {
      this.drawGrid();
    }
  }

  this.betweenAliceAndBob = function () {
    if (this.nota) {
      this.drawNote();
    }
    else {
      this.drawGrid();
    }
  }

  this.nearBob = function () {
    if (this.nota) {
      this.drawNote();
    }
    else {
      this.drawGrid();
    }
  }

  this.drawNoteAlice = function () {
    noStroke();
    fill(217, 217, 217);
    rect(this.i * w, this.j * h, w - 1, h - 1);
    this.drawElipse();
  }

  this.drawNoteAfterAlice = function () {
    if (this.pressed) {
      noStroke();
      fill(217, 217, 217);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      this.drawElipse();
    } else {
      this.drawGrid();
    }
  }

  this.drawGrid = function () {
    fill(this.backQ);
    noStroke();
    rect(this.i * w, this.j * h, w - 1, h - 1);
    this.drawElipse();
  }
}
