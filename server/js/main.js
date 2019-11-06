$(document).ready(function () {
  console.log("ready!");
  $('#myModal').modal({
    show: true
  })
  setTimeout(function () {
    $("#sketch-holder").find("canvas").css("width", "100%");
    $("#sketch-holder").css("margin-top", "200px");
  }, 100);
  spamAlice();
  getBobData();
  $(".start-btn").click(function () {
    alice.states = [];
    bob.states = [];
    hide(0);
    hide(1);
    hide(2);
    hide(3);
    hide(4);
    setTimeout(function () {
      unhide(0);
    }, 0 * 500);
    setTimeout(function () {
      hide(0);
      unhide(1);
    }, 1 * 500);
    setTimeout(function () {
      hide(1);
      unhide(2);
    }, 2 * 500);
    setTimeout(function () {
      hide(2);
      unhide(3);
    }, 3 * 500);
    setTimeout(function () {
      hide(3);
      unhide(4);
    }, 4 * 500);
    setTimeout(function () {
      hide(4);
      parameters.audio.play();
      parameters.start = true;
    }, 5 * 500);
    setTimeout(function () {
      unhide(5);
      parameters.audio.stop();
      parameters.start = false;
    }, 5 * 500 + (80000))
  });
});

function getBobData() {
  console.log("Start - getBobData");
  $.get("/request", function (data) {
    bob.states.push(data);
    console.log("End - getBobData");
    setTimeout(function () {
      getBobData()
    }, 500);
  });
}

function spamAlice() {
  console.log("Start - spamAlice");
  if (alice.states.length !== 0) {
    $.get("/insert?base=" + alice.states.shift(), function (data) {
      console.log("End - spamAlice");
      setTimeout(function () {
        spamAlice()
      }, 500);
    });
  } else {
    setTimeout(function () {
      spamAlice()
    }, 500);
  }
}

function pointA(_vector) {
  if (points.lastMeasure % 2 == 1) {
    switch ("" + _vector[points.lastMeasure - 1] + _vector[points.lastMeasure]) {
      case "00": points.n00++; break;
      case "01": points.n01++; break;
      case "10": points.n10++; break;
      case "11": points.n11++; break;
    }
  }
  _vector[points.lastMeasure] ? points.n1++ : points.n0++;
  points.lastMeasure++;
  return Math.round(points.scale * (points.alpha * entropyB(points.n0 / (points.n0 + points.n1))
    + points.beta * 0.5 * entropyBB(
      points.n00 / (points.n00 + points.n01 + points.n10 + points.n11),
      points.n01 / (points.n00 + points.n01 + points.n10 + points.n11),
      points.n10 / (points.n00 + points.n01 + points.n10 + points.n11),
      points.n11 / (points.n00 + points.n01 + points.n10 + points.n11)
    )));
}

function pointTotal() {
  return pointA();
}

function entropyB(_p) {
  return - _p * Math.log2(_p) - (1 - _p) * Math.log2(1 - _p);
}

function entropyBB(_p00, _p01, _p10, _p11) {
  return - _p00 * Math.log2(_p00) - _p01 * Math.log2(_p01) - _p10 * Math.log2(_p10) - _p11 * Math.log2(_p11);
}

function hide(_x) {
  $(".msg-" + _x).removeClass("invisible");
  $(".msg-" + _x).addClass("invisible");
}

function unhide(_x) {
  $(".msg-" + _x).removeClass("invisible");
}