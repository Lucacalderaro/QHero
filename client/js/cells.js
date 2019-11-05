function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.nota = false;
  this.correctPress = false;

  this.show = function () {
    if(this.j == mid){
      stroke(89);
      fill(217, 17, 17);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(255, 153, 102);
      fill(128, 0, 0);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }else if (this.nota) {
      stroke(89);
      fill(217, 217, 217);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(255, 153, 102);
      fill(230, 0, 0, 100);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
    else {
      fill(144, 144, 144);
      stroke(255);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(89);
      fill(89, 89, 89);
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
  }
}