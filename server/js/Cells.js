function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.nota = false;
  this.correctPress = false;
  this.top = false;
  this.right = false;
  this.left = false;
  this.bottom = false;
  this.selectedBase = none;
  this.pressed = none;


  this.initBorder = function () {
    if (this.i == 0) {
      this.left = true;
    }
    if (this.j == 0) {
      this.top = true;
    }
    if (this.i == rows - 1) {
      this.right = true;
    }
    if (this.i == cols - 1) {
      this.bottom = true;
    }
  }

  this.show = function () {
    verde = color(96, 241, 102);
    rosso = color(186, 35, 42);
    giallo = color(232, 245, 95);
    blu = color(93, 188, 210);
    backQ = color(16, 18, 31);

    if (this.j == parameters.alicePosition) {
      noStroke();
      fill(217, 17, 17);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(240);
      fill(128, 0, 0);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    } else if (this.j == parameters.bobPosition) {
      noStroke();
      fill(17, 217, 17);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(240);
      fill(128, 0, 0);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    } else if (this.nota) {
      noStroke();
      fill(217, 217, 217);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      noStroke();
      if (this.i == 0) {
        fill(verde);
      } else if (this.i == 1) {
        fill(rosso);
      } else if (this.i == 2) {
        fill(giallo);
      } else {
        fill(blu);
      }
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
    else {
      fill(backQ);
      noStroke();
      rect(this.i * w, this.j * h, w - 1, h - 1);
      noStroke();
      if (this.i == 0) {
        fill(verde);
      } else if (this.i == 1) {
        fill(rosso);
      } else if (this.i == 2) {
        fill(giallo);
      } else {
        fill(blu);
      }
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
  }
}