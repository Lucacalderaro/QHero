function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.nota = false;

  this.show = function () {
    if (this.nota) {
      stroke(0);
      fill(0, 255, 0, 100);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
    else {
      fill(0, 0, 0, 100);
      stroke(0);
      rect(this.i * w, this.j * h, w - 1, h - 1);
    }
  }
}