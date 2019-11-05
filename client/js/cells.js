function Cell(i, j) {

  this.i = i;
  this.j = j;
  this.nota = false;
  this.correctPress = false;
  this.top = true;
  this.right = true;
  this.left = true;
  this.bottom = true;

  this.show = function () {
    verde = color(96,241,102);
    rosso = color(186,35,42);
    giallo = color(232,245,95);
    blu = color(93,188,210);
    backQ = color(16,18,31);

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
      stroke(240);
      if(this.i == 0){
        fill(verde);
      }else if(this.i == 1){
        fill(rosso);
      }else if(this.i == 2){
        fill(giallo);
      }else{
        fill(blu);
      }
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
    else {
      fill(backQ);
      stroke(255);
      rect(this.i * w, this.j * h, w - 1, h - 1);
      stroke(240);
      if(this.i == 0){
        fill(verde);
      }else if(this.i == 1){
        fill(rosso);
      }else if(this.i == 2){
        fill(giallo);
      }else{
        fill(blu);
      }
      ellipse(this.i * w + w / 2, this.j * h + h / 2, w / 2, h / 2);
    }
  }
}